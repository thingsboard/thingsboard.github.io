#### Install Java 17 (OpenJDK)

{% include templates/install/ubuntu-java-install.md %}

{% if page.url contains "remote-integrations" %}

#### Choose the Integration package

{% capture ubuntuinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-ubuntu.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-ubuntu.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-ubuntu.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-ubuntu.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-ubuntu.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationinstallubuntu" toggle-spec=ubuntuinstallspec %}

{% elsif page.url contains "tcp" or page.url contains "udp" %}

{% include /templates/edge/install/integration/tcpudp-ubuntu.md %}

{% endif %}