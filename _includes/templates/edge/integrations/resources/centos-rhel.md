#### Install Java 17 (OpenJDK)

{% include templates/install/rhel-java-install.md %}

{% if page.url contains "remote-integrations" %}

#### Choose the Integration package

{% capture rhelinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-rhel.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-rhel.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-rhel.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-rhel.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-rhel.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationinstallrhel" toggle-spec=rhelinstallspec %} 

{% elsif page.url contains "tcp" or page.url contains "udp" %}

{% include /templates/edge/install/integration/tcpudp-rhel.md %}

{% endif %}