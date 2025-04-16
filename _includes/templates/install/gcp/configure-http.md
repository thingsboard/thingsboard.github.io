
Configure HTTP(S) Load Balancer to access web interface of your ThingsBoard instance. Basically you have 3 possible options of configuration:

* http - Load Balancer without HTTPS support. Recommended **for development.**
  The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
* https - Load Balancer with HTTPS support. Recommended **for production.** Acts as an SSL termination point.
  You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.
* transparent - Load Balancer that simply forwards traffic to http and https ports of the ThingsBoard. Requires you to provision and maintain valid SSL certificate.
  Useful for production environments that can't tolerate the LB to be an SSL termination point.

See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

{% include templates/install/cloud-cluster-common/http-lb.md %}

Now, you may use the address (the one you see instead of 34.111.24.134 in the command output) to access HTTP web UI (port 80) and connect your devices via [HTTP API](/docs/{{docsPrefix}}reference/http-api/)
Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

#### HTTPS Load Balancer

{% assign staticIP = "thingsboard-http-lb-address" %}
{% include templates/install/gcp/https-lb.md %}

Once provisioned, you may use your domain name to access Web UI (over https) and connect your devices via [HTTP API](/docs/{{docsPrefix}}reference/http-api/).

{% capture https_lb_device_api_warn %}
**NOTE**: The load balancer will redirect all HTTP traffic to HTTPS. Devices that do not support HTTPS will not be able to connect to ThingsBoard.
If you would like to support such devices, you may either deploy separate load balancer for HTTP transport (recommended)
or disable the redirect behavior by changing the *redirectToHttps* setting in the *https-load-balancer.yml* file.

{% endcapture %}
{% include templates/warn-banner.md content=https_lb_device_api_warn %}
