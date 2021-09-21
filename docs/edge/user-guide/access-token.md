---
layout: docwithnav-edge
title: Access Token based authentication
description: ThingsBoard Access Token based authentication.

---

Access Token Based Authentication is the default device authentication type. Once the device created or assigned to ThingsBoard Edge, the default access token generated. It can be changed afterwards.
In order to connect the device to the edge server using Access Token based authentication, the client must specify the access token as part of request URL (for HTTP and CoAP) or as a user name in MQTT connect message. 
See [supported protocols](/docs/{{docsPrefix}}reference/protocols/) API for more details.

### One-Way MQTT SSL
 
One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of the edge server using server certificate.
In order to run one-way MQTT SSL, the edge certificate chain should be signed by authorized CA or client must import the self-signed server certificate (.cer or .pem) to its trust store. 
Otherwise, a connection will fail with the 'Unknown CA' error.

The python based client example below demonstrates how to connect to any ThingsBoard Edge server.

Assuming you plan to use your own edge server with self-signed certificate, you will need to have the public key of edge server certificate in PEM format. 
See [following instructions](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/#self-signed-certificate-generation) for more details on server-side configuration.

### Run One-Way MQTT SSL Python Client

Download Python client example [**one-way-ssl-mqtt-client.py**](/docs/{{docsPrefix}}user-guide/resources/mqtt-over-ssl/one-way-ssl-mqtt-client.py) to the same working directory where you store the certificates.

```bash
wget https://thingsboard.io/docs/{{docsPrefix}}user-guide/resources/mqtt-over-ssl/one-way-ssl-mqtt-client.py
```
{: .copy-code}

Put certificate(s) that you have downloaded/created into the same folder with the example script.

**Note** Script uses **8883** mqtt port and requires a paho mqtt library that you can install using the following command: **pip3 install paho-mqtt**
 
Run the script and follow steps in the console:

```bash
python3 one-way-ssl-mqtt-client.py
```
{: .copy-code}

If everything configured correctly, the output should be like:

```bash
Connected with result code 0
Topic: v1/devices/me/attributes/response/1
Message: {}
```
