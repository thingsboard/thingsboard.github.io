X.509 Certificates are used to setup [mutual](https://en.wikipedia.org/wiki/Mutual_authentication) (two-way) authentication for MQTT over TLS.
It is similar to [access token](/docs/{{docsPrefix}}user-guide/access-token/) authentication, but uses X.509 Certificate instead of token.

Instructions below will describe how to connect MQTT client using X.509 Certificate to ThingsBoard Cloud. 

<br>In particular, there are two strategies that can be used for establishing connection between client and ThingsBoard:

- **X.509 Certificate chain** - *advanced*. <br>By using the certificate chain strategy, ThingsBoard can trust all client 
certificates from a specific trust anchor (*intermediate certificate*) that has to be previously uploaded for the device 
profile in **X.509 certificate chain** device provision configuration. Besides, regular expression pattern should be 
provided into configuration. The leaf certificate must contain device name in Common Name which further will be parsed 
by provided regular expression. 
<br>If a device with the fetched device name for a specific device profile exists, 
device credentials are updating with the provided leaf certificate. This feature eliminates the need for manual certificate 
updates on each device when certificate rotation occurs. Furthermore, it allows auto-provisioning new devices over MQTT 
if *Create new devices* is enabled in the configuration.
- **X.509 Certificate.** <br> Using client certificate to process connect, which has to be previously uploaded into device credentials.

{% capture contenttogglespecx509 %}
X.509 Certificate chain <small>(advanced)</small>%,%x509Chain%,%templates/ssl/certificates-chain.md%br%
X.509 Certificate%,%X509Leaf%,%templates/ssl/certificates-leaf.md%br%{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardX509" toggle-spec=contenttogglespecx509 %}