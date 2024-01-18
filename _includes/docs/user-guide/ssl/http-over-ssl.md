* TOC
{:toc}

ThingsBoard provides the ability to run HTTP server that hosts Web UI and serves REST API calls over SSL. 

Most of the ThingsBoard environments use the load balancer as a termination point for the SSL connection between the client and the platform.
In other words, internet traffic is encrypted between the user browser and the load balancer, but is decrypted between the load balancer and platform services.
{% include docs/user-guide/ssl/http-over-ssl-common.md %}