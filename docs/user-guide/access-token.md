---
layout: docwithnav
assignees:
- vsosliuk
title: Access Token based authentication
description: Thingsboard Access Token based authentication.

---


Access Token Based Authentication is the default device authentication type. Once the device is created in Thingsboard, the default access token is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token based authentication, the client must specify the access token as part of request URL (for HTTP and CoAP) or as a user name in MQTT connect message. 
See [supported protocols](/docs/reference/protocols/) API for more details.

### One-Way MQTT SSL
 
One-way SSL authentication is a standard authentication mode, where your client device verifies identity of server using server certificate.
In order to run one-way MQTT SSL, the server certificate chain should be signed by authorized CA or client must import the self-signed server certificate (.cer or .pem) to it's trust store. 
Otherwise connection will fail with the 'Unknown CA' error.

#### Run One-Way MQTT SSL Python Client

Example below demonstrates how to connect to Thingsboard MQTT server that uses self-signed certificate. 
You will need to have public key of server certificate in PEM format. 
See [following instructions](/docs/user-guide/mqtt-over-ssl/#self-signed-certificate-generation) for more details on server-side configuration.

Download Python client example [**one-way-ssl-mqtt-client.py**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/python/one-way-ssl-mqtt-client.py).
Specify your access token and path to public key of server certificate.

```python
# Some code omitted

client.tls_set(ca_certs="mqttserver.pub.pem", certfile=None, keyfile=None, cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1, ciphers=None);

client.username_pw_set("TEST_TOKEN")

# Some code omitted
```

**Note** Script uses **8883** mqtt port and requires paho mqtt library that you can install using following command: **pip install paho-mqtt**
 
Run the script:

{% capture tabspec %}mqtt-ssl-configuration-keygen
A,python one-way-ssl-mqtt-client.py,shell,resources/mqtt-ssl-configuration-run-onewaysslmqttclient.sh,/docs/user-guide/mqtt-ssl-configuration-run-onewaysslmqttclient.sh{% endcapture %}
{% include tabs.html %}         

If everything was configured correctly, the output should be like:

{% capture tabspec %}mqtt-ssl-configuration-output
A,onewaysslmqttclient.py output,shell,resources/mqtt-ssl-configuration-onewaysslmqttclient-output.txt,/docs/user-guide/mqtt-ssl-configuration-onewaysslmqttclient-output.txt{% endcapture %}
{% include tabs.html %}