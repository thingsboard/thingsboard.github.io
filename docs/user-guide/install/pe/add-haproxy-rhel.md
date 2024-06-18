---
layout: docwithnav
title: Install HAProxy Load Balancer for ThingsBoard on CentOS/RHEL
description: Install HAProxy Load Balancer for ThingsBoard on CentOS/RHEL
hidetoc: "true"
---

This guide describes how to install HAProxy with Let's Encrypt
as a service. This is possible in case you are hosting ThingsBoard in the cloud and have a valid DNS name assigned to your instance.

* TOC
{:toc}

### Prerequisites

RHEL/CentOS 8/9 with valid DNS name assigned to the instance. Network settings should allow connections on Port 80 (HTTP) and 443 (HTTPS).

In order to open 80 and 443 ports execute the following command:

```bash
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --zone=public --add-port=443/tcp --permanent
sudo firewall-cmd --reload
``` 
{: .copy-code}

### Step 1. Connect to your ThingsBoard instance over SSH

Below is example command for AWS as a reference:

```bash
$ ssh -i <PRIVATE-KEY> ec2-user@<PUBLIC_DNS_NAME>
```

or consult your cloud vendor for different options.

### Step 2. Install HAProxy Load Balancer package

Execute the following command to install HAProxy package:

```bash
sudo dnf -y install haproxy 
```
{: .copy-code}

Execute the following command to enable service auto startup:

```bash
sudo systemctl enable haproxy
```
{: .copy-code}

### Step 3. Install Certbot package

Execute the following command to install Certbot package:

```bash
sudo dnf -y install ca-certificates certbot
```
{: .copy-code}

### Step 4. Install default self-signed certificate

Execute the following commands to install default self-signed certificate:
 
(copy-paste full text of the command as-is)

```bash
cat <<EOT | sudo tee /usr/bin/haproxy-default-cert
#!/bin/sh

set -e

HA_PROXY_DIR=/usr/share/tb-haproxy
CERTS_D_DIR=\${HA_PROXY_DIR}/certs.d
TEMP_DIR=/tmp

PASSWORD=\$(openssl rand -base64 32)
SUBJ="/C=US/ST=somewhere/L=someplace/O=haproxy/OU=haproxy/CN=haproxy.selfsigned.invalid"

KEY=\${TEMP_DIR}/haproxy_key.pem
CERT=\${TEMP_DIR}/haproxy_cert.pem
CSR=\${TEMP_DIR}/haproxy.csr
DEFAULT_PEM=\${HA_PROXY_DIR}/default.pem

if [ ! -e \${HA_PROXY_DIR} ]; then
  mkdir -p \${HA_PROXY_DIR}
fi

if [ ! -e \${CERTS_D_DIR} ]; then
  mkdir -p \${CERTS_D_DIR}
fi


# Check if default.pem has been created
if [ ! -e \${DEFAULT_PEM} ]; then
  openssl genrsa -des3 -passout pass:\${PASSWORD} -out \${KEY} 2048 &> /dev/null
  sleep 1
  openssl req -new -key \${KEY} -passin pass:\${PASSWORD} -out \${CSR} -subj \${SUBJ} &> /dev/null
  sleep 1
  cp \${KEY} \${KEY}.org &> /dev/null
  openssl rsa -in \${KEY}.org -passin pass:\${PASSWORD} -out \${KEY} &> /dev/null
  sleep 1
  openssl x509 -req -days 3650 -in \${CSR} -signkey \${KEY} -out \${CERT} &> /dev/null
  sleep 1
  cat \${CERT} \${KEY} > \${DEFAULT_PEM}
  echo \${PASSWORD} > \${HA_PROXY_DIR}/password.txt
fi
EOT
```
{: .copy-code}

Execute the following commands:

```bash
sudo chmod +x /usr/bin/haproxy-default-cert
touch ~/.rnd
sudo haproxy-default-cert
```

### Step 5. Configure HAProxy Load Balancer

Execute the following command to create HAProxy Load Balancer configuration file: 
                                                                                                                                                                                  
(copy-paste full text of the command as-is)

```bash
cat <<EOT | sudo tee /etc/haproxy/haproxy.cfg
#HA Proxy Config
global
 ulimit-n 500000
 maxconn 99999
 maxpipes 99999
 tune.maxaccept 500

 log 127.0.0.1 local0
 log 127.0.0.1 local1 notice

 ca-base /etc/ssl/certs
 crt-base /etc/ssl/private

 ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS
 ssl-default-bind-options no-sslv3

defaults

 log global

 mode http

 timeout connect 5000ms
 timeout client 50000ms
 timeout server 50000ms
 timeout tunnel  1h    # timeout to use with WebSocket and CONNECT

 default-server init-addr none

frontend http-in
 bind *:80 alpn h2,http/1.1

 option forwardfor

 http-request add-header "X-Forwarded-Proto" "http"

 acl letsencrypt_http_acl path_beg /.well-known/acme-challenge/

 redirect scheme https if !letsencrypt_http_acl { env(FORCE_HTTPS_REDIRECT) -m str true }

 use_backend letsencrypt_http if letsencrypt_http_acl

 default_backend tb-backend

frontend https_in
  bind *:443 ssl crt /usr/share/tb-haproxy/default.pem crt /usr/share/tb-haproxy/certs.d/ ciphers ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM alpn h2,http/1.1

  option forwardfor

  http-request add-header "X-Forwarded-Proto" "https"

  default_backend tb-backend

backend letsencrypt_http
  server letsencrypt_http_srv 127.0.0.1:8090

backend tb-backend
  balance leastconn
  option tcp-check
  option log-health-checks
  server tb1 127.0.0.1:8080 check inter 5s
  http-request set-header X-Forwarded-Port %[dst_port]
EOT
```
{: .copy-code}

### Step 6. Configure Edge TLS communication (Optional)

{% include docs/user-guide/install/configure-edge-haproxy-tls.md %}

### Step 7. Configure Certbot with Let’s Encrypt

Execute the following commands to create Certbot with Let’s Encrypt configuration and helper files: 
                                                                                                  
(copy-paste full text of the command as-is)

```bash
sudo mkdir -p /usr/local/etc/letsencrypt \
&& sudo mkdir -p /usr/share/tb-haproxy/letsencrypt \
&& sudo rm -rf /etc/letsencrypt \
&& sudo ln -s /usr/share/tb-haproxy/letsencrypt /etc/letsencrypt
```
{: .copy-code}

```bash
cat <<EOT | sudo tee /usr/local/etc/letsencrypt/cli.ini
authenticator = standalone
agree-tos = True
http-01-port = 8090
tls-sni-01-port = 8443
non-interactive = True
preferred-challenges = http-01
EOT
```
{: .copy-code}

```bash
cat <<EOT | sudo tee /usr/bin/haproxy-refresh
#!/bin/sh

HA_PROXY_DIR=/usr/share/tb-haproxy
LE_DIR=/usr/share/tb-haproxy/letsencrypt/live
DOMAINS=\$(ls -I README \${LE_DIR})

# update certs for HA Proxy
for DOMAIN in \${DOMAINS}
do
 cat \${LE_DIR}/\${DOMAIN}/fullchain.pem \${LE_DIR}/\${DOMAIN}/privkey.pem > \${HA_PROXY_DIR}/certs.d/\${DOMAIN}.pem
done

# restart haproxy
exec service haproxy restart
EOT
```
{: .copy-code}

```bash
cat <<EOT | sudo tee /usr/bin/certbot-certonly
#!/bin/sh

/usr/bin/certbot certonly -c /usr/local/etc/letsencrypt/cli.ini "\$@"
EOT
```
{: .copy-code}

```bash
cat <<EOT | sudo tee /usr/bin/certbot-renew
#!/bin/sh

/usr/bin/certbot -c /usr/local/etc/letsencrypt/cli.ini renew "\$@"
EOT
```
{: .copy-code}

```bash
sudo chmod +x /usr/bin/haproxy-refresh /usr/bin/certbot-certonly /usr/bin/certbot-renew
```
{: .copy-code}

### Step 8. Install certificates auto renewal cron job

Execute the following command to create certificates auto renewal cron job: 

(copy-paste full text of the command as-is)

```bash
cat <<EOT | sudo tee /etc/cron.d/certbot
# /etc/cron.d/certbot: crontab entries for the certbot package
#
# Upstream recommends attempting renewal twice a day
#
# Eventually, this will be an opportunity to validate certificates
# haven't been revoked, etc.  Renewal will only occur if expiration
# is within 30 days.
SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

0 */12 * * * root test -x /usr/bin/certbot && perl -e 'sleep int(rand(3600))' && certbot -c /usr/local/etc/letsencrypt/cli.ini -q renew && haproxy-refresh
EOT
```
{: .copy-code}

### Step 9. Restart HAProxy Load Balancer

Finally restart HAProxy Load Balancer service in order changes take effect:

```bash
sudo service haproxy restart
```
{: .copy-code}

### Step 10. Execute command to get generate certificate using Let's Encrypt

Don't forget to replace **your_domain** and **your_email** before executing the command below: 

```bash
sudo certbot-certonly --domain your_domain --email your_email
```

### Step 11. Refresh HAProxy configuration

Finally restart HAProxy:

```bash
sudo haproxy-refresh
```
{: .copy-code}
