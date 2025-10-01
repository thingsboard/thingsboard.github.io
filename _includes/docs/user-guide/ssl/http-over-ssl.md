* TOC
{:toc}

{% capture use-haproxy-instead %}
The best practice for securing your Web UI with HTTPS is to use [HAProxy](/docs/user-guide/install/pe/add-haproxy-ubuntu/), which handles SSL/TLS termination efficiently while protecting user traffic.

However, in some cases you may also need two-way SSL for HTTP transport. If your goal is only HTTPS for the Web UI, go with HAProxy. But if you require two-way SSL for HTTP transport, follow this guide.
{% endcapture %}
{% include templates/info-banner.md content=use-haproxy-instead %}

ThingsBoard provides the ability to run HTTP server that hosts Web UI and serves REST API calls over SSL. 

Most of the ThingsBoard environments use the load balancer as a termination point for the SSL connection between the client and the platform.
In other words, internet traffic is encrypted between the user browser and the load balancer, but is decrypted between the load balancer and platform services.
{% include docs/user-guide/ssl/http-over-ssl-common.md %}