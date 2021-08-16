## Generate certificate for HTTPS
We using HAproxy for proxying traffic to containers and for web UI by default we using 80 and 443 ports. For using HTTPS with a valid certificate, execute these commands:
```
docker exec haproxy-certbot certbot-certonly --domain your_domain --email your_email
docker exec haproxy-certbot haproxy-refresh
```

**NOTE**: Valid certificate used only, when you visit web UI by domain in URL. If you using IP address for access to UI, this would be used self-signed certificate. 