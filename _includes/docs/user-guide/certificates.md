    
X.509 Certificate Based Authentication is used in MQTT Two-Way SSL and CoAP DTLS with X.509 Certificate. In this case, the certificate itself is the client's  ID, thus, Access Token is no longer needed.

{% capture contenttogglespec %}
MQTT<br/><small>Two-Way SSL Authentication</small>%,%mqtt%,%templates/security/certificates-mqtt.md%br%
CoAP<br/><small>DTLS with X.509 Certificate</small>%,%coap%,%templates/security/certificates-coap.md{% endcapture %}

{% include content-toggle.html content-toggle-id="x509certificates" toggle-spec=contenttogglespec %}