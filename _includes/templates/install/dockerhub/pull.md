Run the following commands to verify that you can pull the images from the Docker hub.

{% if checkoutMode == 'monolith' %}
```bash
docker pull thingsboard/tb-pe-node:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-web-report:{{ site.release.pe_full_ver }}
```
{: .copy-code}
{% else %}
```bash
docker pull thingsboard/tb-pe-node:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-web-report:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-web-ui:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-js-executor:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-http-transport:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-mqtt-transport:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-coap-transport:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-lwm2m-transport:{{ site.release.pe_full_ver }}
docker pull thingsboard/tb-pe-snmp-transport:{{ site.release.pe_full_ver }}
```
{: .copy-code}
{% endif %}


