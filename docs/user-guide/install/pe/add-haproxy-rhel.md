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

RHEL/CentOS 7/8 with valid DNS name assigned to the instance. Network settings should allow connections on Port 80 (HTTP) and 443 (HTTPS).

In order to open 80 and 443 ports execute the following command:

```bash
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --zone=public --add-port=443/tcp --permanent
sudo firewall-cmd --reload

``` 

### Step 1. Connect to your ThingsBoard instance over SSH

Below is example command for AWS as a reference:

```bash
$ ssh -i <PRIVATE-KEY> ubuntu@<PUBLIC_DNS_NAME>
```

or consult your cloud vendor for different options.

### Step 2. Install HAProxy Load Balancer package

- For **RHEL/CentOS 7** the following command will ensure the Cheese repo is enabled:

```bash
sudo yum -y install http://www.nosuchhost.net/~cheese/fedora/packages/epel-7/x86_64/cheese-release-7-1.noarch.rpm
sudo yum-config-manager --enable cheese

```
{: .copy-code}

- For **RHEL/CentOS 8** the following command will ensure the PowerTools repo is enabled:

```bash
sudo dnf config-manager --enable powertools

```
{: .copy-code}

Execute the following commands to install HAProxy package:

```bash
sudo yum install gcc pcre-devel openssl-devel readline-devel systemd-devel tar lua lua-devel make -y
wget http://www.haproxy.org/download/2.4/src/haproxy-2.4.3.tar.gz -O ~/haproxy.tar.gz
mkdir -p ~/haproxy-src
tar xzvf ~/haproxy.tar.gz -C ~/haproxy-src --strip-components=1
rm haproxy.tar.gz
make -C ~/haproxy-src USE_NS=1 USE_TFO=1 USE_OPENSSL=1 USE_ZLIB=1 USE_LUA=1 USE_PCRE=1 USE_SYSTEMD=1 USE_LIBCRYPT=1 USE_THREAD=1 TARGET=linux-glibc
sudo make -C ~/haproxy-src TARGET=linux-glibc install-bin install-man
sudo ln -sf /usr/local/sbin/haproxy /usr/sbin/haproxy
sudo groupadd -g 992 haproxy
sudo useradd -g 992 -u 995 -m -d /var/lib/haproxy -s /sbin/nologin -c haproxy haproxy
sudo mkdir -p /etc/haproxy
rm -rf ~/haproxy-src

```
{: .copy-code}

Execute the following commands to create haproxy SystemD Unit File:

(copy-paste full text of the command as-is)

```bash
cat <<'EOT' | sudo tee /etc/systemd/system/haproxy.service
[Unit]
Description=HAProxy 2.4.3
After=syslog.target network.target

[Service]
Type=notify
EnvironmentFile=/etc/sysconfig/haproxy
ExecStart=/usr/local/sbin/haproxy -f $CONFIG_FILE -p $PID_FILE $CLI_OPTIONS
ExecReload=/bin/kill -USR2 $MAINPID
ExecStop=/bin/kill -USR1 $MAINPID

[Install]
WantedBy=multi-user.target
EOT
```
{: .copy-code}

Execute the following commands to create haproxy SystemD Environment File:

(copy-paste full text of the command as-is)

```bash
cat <<EOT | sudo tee /etc/sysconfig/haproxy
# Command line options to pass to HAProxy at startup
# The default is:
CLI_OPTIONS="-Ws"

# Specify an alternate configuration file. The default is:
CONFIG_FILE=/etc/haproxy/haproxy.cfg

# File used to track process IDs. The default is:
PID_FILE=/var/run/haproxy.pid
EOT
```
{: .copy-code}

Execute the following commands to configure haproxy service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable haproxy

```
{: .copy-code}

### Step 3. Install Certbot package

**RHEL 7 ONLY** - Enable the optional channel:

```bash
sudo yum -y install yum-utils
sudo yum-config-manager --enable rhui-REGION-rhel-server-extras rhui-REGION-rhel-server-optional
```
{: .copy-code}

Execute the following commands to install Certbot package:

```bash
sudo yum -y install ca-certificates certbot
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
