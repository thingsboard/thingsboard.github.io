---
layout: docwithnav-paas
assignees:
- ashvayka
title: Basic MQTT authentication
description: ThingsBoard MQTT based authentication.
options:
    0:
        image: https://img.thingsboard.io/user-guide/basic-mqtt/client-id.png  
        title: 'MQTT Clients will be able to connect with any username or password if they specify correct Client ID.'    
    1:
        image: https://img.thingsboard.io/user-guide/basic-mqtt/username-password.png  
        title: 'MQTT Clients will be able to connect with any client ID if they specify correct Username and Password.'
    2:
        image: https://img.thingsboard.io/user-guide/basic-mqtt/no-password-check.png  
        title: 'Password is optional'
    3:
        image: https://img.thingsboard.io/user-guide/basic-mqtt/client-id-username-password.png  
        title: 'MQTT Clients will be able to connect if they specify correct combination of Client ID, Username and Password'    
---

{% assign docsPrefix = "paas/" %}

* TOC
{:toc}

MQTT Based Authentication is available for devices that connect using MQTT. 
You may change the device credential type from 'Access Token' to 'MQTT Basic'.
Basic MQTT credentials consist of the optional client id, username and password. There are three options available:

#### Authentication based on Client ID only. 

For this purpose, you should populate only Client ID in the credentials form below.
MQTT Clients will be able to connect with any username or password if they specify correct Client ID;

Let's review a simple command to upload temperature readings using MQTT Client Id to ThingsBoard Cloud.
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -m {"temperature":25}
```
{: .copy-code}

The above command uses **mqtt.thingsboard.cloud** host and **1883** port and requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**

#### Authentication based on Username and Password. 

For this purpose, you should populate only Username and Password in the credentials form below.
MQTT Clients will be able to connect with any client ID if they specify correct Username and Password. Password is optional;

Let's review a simple command to upload temperature readings using MQTT Client username and password to ThingsBoard Cloud.
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -p "1883" \
-t "v1/devices/me/telemetry" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}

The above command uses **mqtt.thingsboard.cloud** host and **1883** port and requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**

#### Authentication based on Client ID, Username and Password. 

For this option, you should populate Client ID, Username and Password.
MQTT Clients will be able to connect if they specify correct combination of Client ID, Username and Password;

Let's review a simple command to upload temperature readings using MQTT Client ID, username and password to ThingsBoard Cloud.
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -p "1883" \
-t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}

The above command uses **mqtt.thingsboard.cloud** host and **1883** port and requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**

{% include images-gallery.html imageCollection="options" %}

#### MQTTS (MQTT over TLS)

One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
ThingsBoard Cloud uses a valid certificate.
Please download the CA root certificate using this [**link**](/docs/{{docsPrefix}}user-guide/resources/mqtt-over-ssl/ca-root.pem)
and save it to your working directory as "**ca-root.pem**".

```bash
wget https://thingsboard.io/docs/{{docsPrefix}}user-guide/resources/mqtt-over-ssl/ca-root.pem
```
{: .copy-code}

Now you may use the *ca-root.pem* to setup secure connection to ThingsBoard Cloud and Access Token *YOUR_ACCESS_TOKEN* to authenticate the device to upload telemetry:

```bash
mosquitto_pub --cafile ca-root.pem -d -q 1 -h "mqtt.thingsboard.cloud" -p "8883" \
-t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}

The above command uses **mqtt.thingsboard.cloud** host and **8883** port and requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**
