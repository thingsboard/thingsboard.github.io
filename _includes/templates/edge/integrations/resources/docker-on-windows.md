To run the integration via Docker, make sure you have [installed Docker Toolbox for Windows](https://docker-docs.uclv.cu/toolbox/toolbox_install_windows/){: target="_blank"}

{% if page.url contains "remote-integrations" %}

#### Select the integration to install

{% capture contenttogglespecwin %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-docker-windows.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-docker-windows.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-docker-windows.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-docker-windows.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-docker-windows.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationdockerinstallwin" toggle-spec=contenttogglespecwin %}

{% include templates/edge/install/integration/advanced-config-docker.md %}

{% elsif page.url contains "tcp" or page.url contains "udp" %}

{% include /templates/edge/install/integration/tcpudp-docker-windows.md %}

{% endif %}

#### Troubleshooting

{% include templates/troubleshooting/dns-issues-windows.md %}