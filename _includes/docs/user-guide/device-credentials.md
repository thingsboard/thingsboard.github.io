
Device credentials are used in order to connect to the ThingsBoard server by applications that are running on the device.
ThingsBoard is designed to support different device credentials. There are three supported credentials types at the moment:

 - [**Access Tokens**](/docs/{{docsPrefix}}user-guide/access-token/) - general purpose credentials that are suitable for wide range of devices. 
 Access Token based authentication may be used in not encrypted, one-way SSL mode or DTLS accessToken mode.
   - **Advantages:** supported by resource constrained devices. Low network overhead. Easy to provision and use.
   - **Disadvantages:** may be easily intercepted while using un-encrypted network connection (HTTP instead of HTTPS, MQTT without TLS/SSL, CoAP without DTLS, etc).
 - [**Basic MQTT Credentials**](/docs/{{docsPrefix}}user-guide/basic-mqtt/) - Similar to first option, but work based on MQTT Client Id, username and password. May be used in not encrypted or one-way SSL mode.
   - **Advantages:** supported by resource constrained devices. Low network overhead. Easy to provision and use.
   - **Disadvantages:** may be easily intercepted while using un-encrypted network connection (MQTT without TLS/SSL).   
 - [**X.509 Certificates**](/docs/{{docsPrefix}}user-guide/certificates/) - [PKI](https://en.wikipedia.org/wiki/Public_key_infrastructure), [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) and [DTLS](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security) standard. 
 X.509 Certificate based authentication is used in two-way SSL mode and CoAP DTLS with X.509 Certificate mode.
   - **Advantages:** high level of security using the encrypted network connection and public key infrastructure.
   - **Disadvantages:** not supported by some resource constrained devices. Affects battery and CPU usage.

Device credentials need to be provisioned to corresponding device entity on the server. There are multiple ways to do this:

 - **Automatically**, using [X.509 Certificate chain](/docs/user-guide/certificates/) or [device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning/). Allows devices to automatically provision themselves in ThingsBoard.
 - **Via Script**, using ThingsBoard [REST API](/docs/{{docsPrefix}}reference/rest-api/). For example during manufacturing, QA or purchase order fulfilment.
 - **Manually**, using ThingsBoard [Web UI](/docs/{{docsPrefix}}user-guide/ui/devices/#manage-device-credentials). For example for development purposes, or by system administrator.


