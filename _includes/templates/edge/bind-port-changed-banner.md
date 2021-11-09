{% capture local-deployment %}
If during installation process you have changed edge **HTTP_BIND_PORT** please use that port instead for **Edge** UI URL:

**[http://localhost:HTTP_BIND_PORT](http://localhost:HTTP_BIND_PORT)**

{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}