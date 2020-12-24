---
layout: docwithnav
assignees:
- vsosliuk
title: Access Token based authentication
description: ThingsBoard Access Token based authentication.

---


Access Token Based Authentication is the default device authentication type. Once the device is created in ThingsBoard, the default access token is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token based authentication, the client must specify the access token as part of request URL (for HTTP and CoAP) or as a user name in MQTT connect message. 
See [supported protocols](/docs/reference/protocols/) API for more details.

### One-Way MQTT SSL
 
One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
In order to run one-way MQTT SSL, the server certificate chain should be signed by authorized CA or client must import the self-signed server certificate (.cer or .pem) to its trust store. 
Otherwise, a connection will fail with the 'Unknown CA' error.

The python based client example below demonstrates how to connect to [ThingsBoard Cloud](https://thingsboard.cloud/signup) or to any other ThingsBoard MQTT server.
Assuming you plan to use ThingsBoard Cloud, you should download the certificate chain using this [link](/docs/user-guide/resources/mqtt-over-ssl/tb-cloud-chain.pem) (certificate expires on 15.09.25) 
and store it to your working directory as "tb-cloud-chain.pem".

```bash
wget https://thingsboard.io/docs/user-guide/resources/mqtt-over-ssl/tb-cloud-chain.pem
```
{: .copy-code}

Assuming you plan to use your own server with self-signed certificate, you will need to have the public key of server certificate in PEM format. 
See [following instructions](/docs/user-guide/mqtt-over-ssl/#self-signed-certificate-generation) for more details on server-side configuration.

### Run One-Way MQTT SSL Python Client

Download Python client example [**one-way-ssl-mqtt-client.py**](/docs/user-guide/resources/mqtt-over-ssl/one-way-ssl-mqtt-client.py) to the same working directory where you store the certificates.

```bash
wget https://thingsboard.io/docs/user-guide/resources/mqtt-over-ssl/one-way-ssl-mqtt-client.py
```
{: .copy-code}

Put certificate(s) that you have downloaded/created into the same folder with the example script. The script will automatically use "tb-cloud-chain.pem" if you use default ThingsBoard host (thingsboard.cloud) 

**Note** Script uses **8883** mqtt port and requires paho mqtt library that you can install using the following command: **pip3 install paho-mqtt**
 
Run the script and follow steps in console:

```bash
python3 one-way-ssl-mqtt-client.py
```
{: .copy-code}

If everything was configured correctly, the output should be like:

```bash
Connected with result code 0
Topic: v1/devices/me/attributes/response/1
Message: {}
```