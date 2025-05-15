To run the integration via Docker, make sure you have [installed Docker CE](https://docs.docker.com/engine/installation/){: target="_blank"}

#### Select the integration to install

{% capture contenttogglespec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-docker.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-docker.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-docker.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-docker.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-docker.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationdockerinstall" toggle-spec=contenttogglespec %}

{% include templates/edge/install/integration/advanced-config-docker.md %} 

#### Troubleshooting

{% include templates/troubleshooting/dns-issues.md %}