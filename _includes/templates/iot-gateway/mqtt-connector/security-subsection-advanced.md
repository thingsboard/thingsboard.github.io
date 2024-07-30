Now select the security type:

{% capture mqttsecurityadvancedsubsection %}
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/mqtt-connector/security-config-anonymous.md%br%
Basic<small>Recommended</small>%,%basic%,%templates/iot-gateway/mqtt-connector/security-config-basic.md%br%
Certificates<small>For advanced security</small>%,%certificates%,%templates/iot-gateway/mqtt-connector/security-config-certificates.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttsecurityadvancedsubsection" toggle-spec=mqttsecurityadvancedsubsection %}  