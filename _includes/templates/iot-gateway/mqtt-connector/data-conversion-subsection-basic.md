Now select the payload type:

{% capture mqttconnectordataconversionsubsection %}
JSON<small>Recommended if json will be received in response</small>%,%json%,%templates/iot-gateway/mqtt-connector/data-conversion-subsection-json.md%br%
Bytes<small>Recommended if bytes will be received in response</small>%,%bytes%,%templates/iot-gateway/mqtt-connector/data-conversion-subsection-bytes.md%br%
Custom<small>Recommended if bytes or anything else will be received in response</small>%,%custom%,%templates/iot-gateway/mqtt-connector/data-conversion-subsection-custom.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttconnectordataconversionsubsection" toggle-spec=mqttconnectordataconversionsubsection %}