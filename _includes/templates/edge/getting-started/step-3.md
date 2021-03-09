To connect the device you need to get the device credentials first.
ThingsBoard support different device credentials. We recommend to use default auto-generated credentials which is access token for this guide.

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

Now you are ready to publish telemetry data on behalf of your device.
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/edge/getting-started/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/edge/getting-started/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/edge/getting-started/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/edge/getting-started/coap.md%br%
Other Protocols<small>Modbus, SNMP, LoRaWAN, etc</small>%,%other%,%templates/edge/getting-started/other.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}
