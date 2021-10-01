* TOC
{:toc}

Access Token Based Authentication is the default device authentication type. Once the device is created in ThingsBoard, the default access token is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token based authentication, the client must specify the access token as part of request URL (for HTTP and CoAP) or as a user name in MQTT connect message. 
See [supported protocols](/docs/{{docsPrefix}}reference/protocols/) API for more details.

## Access Token based secure authentication

{% capture contenttogglespec %}
MQTT<br/><small>One-Way SSL Authentication</small>%,%mqtt%,%templates/security/access-token-mqtt.md%br%
CoAP<br/><small>AccessToken based authentication over DTLS</small>%,%coap%,%templates/security/access-token-coap.md{% endcapture %}

{% include content-toggle.html content-toggle-id="accessTokens" toggle-spec=contenttogglespec %}