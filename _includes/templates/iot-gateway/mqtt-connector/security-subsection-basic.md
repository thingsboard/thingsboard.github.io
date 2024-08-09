Now select the security type:

{% capture mqttsecuritybasicsubsection %}
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/mqtt-connector/security-basic-anonymous-subsection.md%br%
Basic<small>Recommended</small>%,%basic%,%templates/iot-gateway/mqtt-connector/security-basic-basic-subsection.md%br%
Certificates<small>For advanced security</small>%,%certificates%,%templates/iot-gateway/mqtt-connector/security-basic-certificates-subsection.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttsecuritybasicsubsection" toggle-spec=mqttsecuritybasicsubsection %}