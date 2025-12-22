You may want to configure HTTPS access using HAProxy.
This is possible in case you are hosting Trendz in the cloud and have a valid DNS name assigned to your instance.

### Trendz and ThingsBoard hosted on the same server

Use this section if HAProxy/Let’s Encrypt already installed in the server and HTTPS enabled for ThingsBoard.

Open HAProxy configuration file
```bash
sudo nano /etc/haproxy/haproxy.cfg
```
{: .copy-code}

Locate **frontend https_in** section, add new access list that will match traffic by domain name and redirect this traffic to Trendz backend:
```bash
acl trendz_http hdr(host) -i new-trendz-domain.com
use_backend tb-trendz if trendz_http
```

In the same file register Trendz backend:
```bash
backend tb-trendz
  balance leastconn
  option tcp-check
  option log-health-checks
  server tbTrendz1 127.0.0.1:8888 check inter 5s
  http-request set-header X-Forwarded-Port %[dst_port]
```

Generate SSL certificates for new domain:
```bash
sudo certbot-certonly --domain new-trendz-domain.com --email some@email.io
```

Refresh HAProxy configuration:
```bash
sudo haproxy-refresh
```

That's it, HTTPS for Trendz UI configured and now you can access it via:
https://new-trendz-domain.com


### Fresh installation on new server

Please follow this [guide](/docs/user-guide/install/pe/add-haproxy-ubuntu) to install HAProxy and generate valid SSL certificate using Let's Encrypt.

### Host ThingsBoard and Trendz on the same domain

ThingsBoard and Trendz can share same domain name. In this case ThingsBoard web page would be loaded using following link:

```bash
https://{my-domain}/
```

and Trendz web page would be loaded using following link

```bash
https://{my-domain}/trendz/
```

For enabling such configuration we have to update HAProxy config to route specific requests to Trendz service.
Open HAProxy configuration file
```bash
sudo nano /etc/haproxy/haproxy.cfg
```
{: .copy-code}

Locate **frontend https_in** section, add new access list that will match traffic by URL path and redirect this traffic to Trendz backend:

```bash
...
acl trendz_acl path_beg /trendz/ path_beg /apiTrendz/
....
use_backend tb-trendz if trendz_acl
```
