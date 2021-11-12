* TOC
{:toc}

ThingsBoard provides the ability to run HTTP server that process API calls from devices over SSL. 
This guide is effectively the copy of [Enable HTTPS](/docs/{{docsPrefix}}user-guide/ssl/http-over-ssl/) guide.

Most of the ThingsBoard environments use the load balancer as a termination point for the SSL connection between the device and the platform.
In other words, internet traffic is encrypted between the device and the load balancer, but is decrypted between the load balancer and platform services.
{% include docs/user-guide/ssl/http-over-ssl-common.md %}

## Client Examples

See [Access Token based authentication](/docs/{{docsPrefix}}user-guide/ssl/http-access-token/) for example of **one-way SSL** connection.