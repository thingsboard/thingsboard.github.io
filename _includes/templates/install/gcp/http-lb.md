
Configure HTTP(S) Load Balancer to access web interface of your ThingsBoard instance. Basically you have 3 possible options of configuration:

* http - Load Balancer without HTTPS support. Recommended **for development.**
  The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
* https - Load Balancer with HTTPS support. Recommended **for production.** Acts as an SSL termination point.
  You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.
* transparent - Load Balancer that simply forwards traffic to http and https ports of the ThingsBoard. Requires you to provision and maintain valid SSL certificate.
  Useful for production environments that can't tolerate the LB to be an SSL termination point.

See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

Execute the following command to deploy plain http load balancer:

```bash
kubectl apply -f receipts/http-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                   CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-http-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```

Now, you may use the address (the one you see instead of 34.111.24.134 in the command output) to access HTTP web UI (port 80) and connect your devices via [HTTP API](/docs/{{docsPrefix}}reference/http-api/)
Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

#### HTTPS Load Balancer

The process of configuring the load balancer using Google-managed SSL certificates is described on the official [documentation page](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs).
The instructions below are extracted from the official documentation. Make sure you read [prerequisites](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs#prerequisites) carefully before proceeding.

```bash
gcloud compute addresses create thingsboard-http-lb-address --global
```
{: .copy-code}

Replace the *PUT_YOUR_DOMAIN_HERE* with valid domain name in the *https-load-balancer.yml* file:

```bash
nano receipts/https-load-balancer.yml
```
{: .copy-code}

Execute the following command to deploy secure http load balancer:

```bash
 kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                   CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-https-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```

Now, **assign the domain name** you have used to the load balancer IP address (the one you see instead of 34.111.24.134 in the command output).

Check that the domain name is configured correctly using dig:

```bash
dig YOUR_DOMAIN_NAME
```
{: .copy-code}

Sample output:

```text

; <<>> DiG 9.11.3-1ubuntu1.16-Ubuntu <<>> YOUR_DOMAIN_NAME
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12513
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;YOUR_DOMAIN_NAME.	IN	A

;; ANSWER SECTION:
YOUR_DOMAIN_NAME. 36 IN	A	34.111.24.134

;; Query time: 0 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: Fri Nov 19 13:00:00 EET 2021
;; MSG SIZE  rcvd: 74

```

Once assigned, wait for the Google-managed certificate to finish provisioning. This might take up to 60 minutes. You can check the status of the certificate using the following command:

```bash
kubectl describe managedcertificate managed-cert
```
{: .copy-code}

Certificate will be eventually provisioned if you have configured domain records properly.
Once provisioned, you may use your domain name to access Web UI (over https) and connect your devices via [HTTP API](/docs/{{docsPrefix}}reference/http-api/).

{% capture https_lb_device_api_warn %}
**NOTE**: The load balancer will redirect all HTTP traffic to HTTPS. Devices that do not support HTTPS will not be able to connect to ThingsBoard.
If you would like to support such devices, you may either deploy separate load balancer for HTTP transport (recommended)
or disable the redirect behavior by changing the *redirectToHttps* setting in the *https-load-balancer.yml* file.

{% endcapture %}
{% include templates/warn-banner.md content=https_lb_device_api_warn %}
