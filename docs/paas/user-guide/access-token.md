---
layout: docwithnav-paas
assignees:
- ashvayka
title: Access Token authentication for MQTT
description: ThingsBoard Access Token based authentication.

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
* TOC
{:toc}

Access Token based authentication is the default device authentication type. 
The unique access token is generated once the device is created in ThingsBoard. It can be changed afterwards.
The client must specify the access token as a username in MQTT connect message. 

#### Plain MQTT (without SSL)
 
Let's review a simple command to upload temperature readings using Access Token *YOUR_ACCESS_TOKEN* to ThingsBoard Cloud. 
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "{{mqttHostName}}" -p "1883" -t "v1/devices/me/telemetry" -u "YOUR_ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

The above command uses **{{mqttHostName}}** host and **1883** port and requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**

#### MQTTS (MQTT over SSL)

One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
ThingsBoard Team has already provisioned a valid certificate for [ThingsBoard Cloud](https://thingsboard.cloud/signup){:target="_blank"}.

Please download the CA root certificate using this [**link**](/docs/{{docsPrefix}}user-guide/resources/mqtt-over-ssl/ca-root.pem) and save it to your working directory as "**ca-root.pem**".

```bash
wget https://thingsboard.io/docs/{{docsPrefix}}user-guide/resources/mqtt-over-ssl/ca-root.pem
```
{: .copy-code}

Now you may use the *ca-root.pem* to setup secure connection to ThingsBoard Cloud and Access Token *YOUR_ACCESS_TOKEN* to authenticate the device to upload telemetry:

```bash
mosquitto_pub --cafile ca-root.pem -d -q 1 -h "{{mqttHostName}}" -p "8883" -t "v1/devices/me/telemetry" -u "YOUR_ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

The above command uses **{{mqttHostName}}** host and **8883** port and requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**

