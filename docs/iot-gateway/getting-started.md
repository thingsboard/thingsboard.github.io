---
layout: docwithnav
assignees:
- ashvayka
title: Getting started guide

---

* TOC
{:toc}

This guide covers initial IoT Gateway installation and configuration.
We will connect IoT Gateway to Thingsboard server and visualize some basic gateway statistics: amount of devices connected and messages processed.
We will also configure MQTT extension in order to subscribe to device data feed from external applications.  

### Prerequisites

If you don't have access to a running Thingsboard instance, use either [Live Demo](http://demo.thingsboard.io/signup) or 
[Installation Guide](/docs/user-guide/install/installation-options/) 
to fix this.

## Step 1: Choose installation option

Browse available [installation options](/docs/iot-gateway/installation/) and choose the most suitable installation guide.

## Step 2: Follow installation steps

Follow steps (1-3) in the chosen installation guide. The Gateway configuration steps are covered below.
 
## Step 3: Gateway provisioning

In order to connect your IoT gateway to Thingsboard server you need to provision gateway credentials first.   
We will use access token credentials as the most simple one. 
See [device authentication options](/docs/user-guide/device-credentials/) for more details.

Login as tenant administrator. Use [default credentials](/docs/samples/demo-account/#demo-tenant) in case of local Thingsboard server.
Open **Devices** and click on big red "+" button in the bottom right corner.

Populate your gateway name and select "Is gateway" checkbox.
**Note** Gateway and device names should be unique in scope of tenant.

Open new device card and click on "Copy Access Token" button.

## Step 4: Gateway configuration

Navigate to gateway configuration folder and edit **tb-gateway.yml** file.
Configuration folder location:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```
  
Change **gateway.connection.host** property to your Thingsboard host (leave without modifications in case of live demo instance).

Change **gateway.connection.security.accessToken** property to your access token that was copied during step 3.

You gateway configuration should look similar to this file:

```text

gateway:
  reporting:
    interval: 60000
  persistence:
    type: file
    path: storage
    bufferSize: 1000
  connection:
    host: "demo.thingsboard.io"
    port: 1883
    retryInterval: 3000
    maxInFlight: 1000
    security:
      accessToken: YOUR_ACCESS_TOKEN_HERE

opc:
  enabled: false
  configuration: opc-config.json

mqtt:
  enabled: false
  configuration: mqtt-config.json

server:
  address: "0.0.0.0"
  port: "9090"


```

## Step 5. Launch your gateway

Follow steps (5-6) in the chosen installation guide.









