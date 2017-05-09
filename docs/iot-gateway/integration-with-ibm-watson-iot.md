---
layout: docwithnav
title: Integration with IBM Watson IoT
description: Streaming IBM Watson IoT data to Thingsboard for advanced IoT data visualization

---

* TOC
{:toc}

While some of the IBM Watson IoT and Thingsboard features overlap, you are able to integrate them and leverage best features from both.
For example, you can collect data using IBM Watson IoT and then push it to Thingsboard for storage and data visualization on customizable end-user dashboards.
  
To integrate IBM Watson IoT and Thingsboard the best option is to use Thingsboard **[IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/)**, which is an open-source solution that allows you to integrate devices connected to legacy and third-party systems with Thingsboard.
We will cover basic configuration steps below.

### Overview

![image](/images/gateway/ibm-watson/ibm-watson-iot-gateway-integration.svg)


Thingsboard IoT Gateway is a light-weight service that connects to both IBM Watson IoT MQTT broker and Thingsboard MQTT server and acts as aproxy or API bridge.
You are able to configure the Gateway to subscribe to certain IBM Watson IoT topics, convert incoming data to unified format and push it to Thingsboard.
This article provides basic configuration steps. You can refer to advanced configuration topic for [more details](/docs/iot-gateway/mqtt/).
 
### Prerequisites
 
We assume you have already [**installed**](/docs/iot-gateway/installation/) Thingsboard IoT Gateway and [**provisioned**](/docs/iot-gateway/getting-started/#step-3-gateway-provisioning) it within your local or demo Thingsboard instance.

As well we assume that you have **IBM Account** already and have access to **IBM Watson IoT Platform**.

Additionally service **Internet of Things Platform** must be created inside your IBM account. You can check it by this [link](https://console.ng.bluemix.net/dashboard/services) or by navigation **Menu -> Services -> Dashboard**: 

![image](/images/gateway/ibm-watson/ibm-watson-services.png)

If service is not created please click **Create Service** button and in the Catalog filter *Internet of Things Platform*:

![image](/images/gateway/ibm-watson/create-iot-service.png)

Select **Internet of Things Platform** and following instructions to create this service.

### IBM Watson IoT configuration steps

Before configuration of the Thingsboard **IoT Gateway** we must configure **IBM Watson** IoT Platform service and generate access tokens.

#### Step 1. IBM Watson IoT platform device

We must have some **IBM Watson IoT device** registered in the platform.
Let's launch IoT Platform service:

![image](/images/gateway/ibm-watson/launch-iot-platform.png)

Go to the **Device** menu and verify list of devices that already exists:
 
![image](/images/gateway/ibm-watson/ibm-devices.png)

If you don't have device created, please click **Add Device** and create it following the instructions.
In other case click on particular device and get device credentials: 

![image](/images/gateway/ibm-watson/device-credentials.png)

In this window you'll need *Organization ID* that we later refer as **$IBM_WATSON_ORGANIZATION_ID**, *Device Type* as **$IBM_WATSON_DEVICE_TYPE**, *Device ID* as **$IBM_WATSON_DEVICE_ID** and *Authentication Token* as **$IBM_WATSON_DEVICE_TOKEN**.

Please write them down somewhere because later we'll use them.

#### Step 2. IBM Watson IoT API key for applications

Now we need to generate **API key** for the **IBM Watson** *application*. In our case **Thingsboard Gateway** is going to be application that will be subscribed to **IBM Watson** *MQTT* topics.

Go to **Apps** menu:

![image](/images/gateway/ibm-watson/generate-ip-key-1.png)

If you have key already created you can use it, in other case click **Generate API Key** button:

![image](/images/gateway/ibm-watson/generate-ip-key-2.png)

Please write down from this screen *API Key* that we'll later refer to as **$IBM_WATSON_APP_NAME** and *Authentication Token* as **$IBM_WATSON_APP_TOKEN**.

### Thingsboard IoT Gateway configuration steps

#### Step 3. Enable MQTT extension

Navigate to the gateway configuration folder and edit **tb-gateway.yml** file. Please change **mqtt.enabled** property value to **true** to enable Gateway MQTT extension.

#### Step 4. MQTT extension configuration

Now it's time to configure Thingsboard **IoT Gateway** to connect to your **IBM Watson IoT** broker.

**NOTE** If you at this point don't know how devices and applications are connecting to MQTT topics in **IBM Watson** platform please visit these links [Connecting applications, devices, and gateways to Watson IoT Platform](https://console.ng.bluemix.net/docs/services/IoT/reference/security/connect_devices_apps_gw.html) and [MQTT connectivity for applications](https://console.ng.bluemix.net/docs/services/IoT/applications/mqtt.html) before continue.

We need to compose **host** and **clientId** properties to be able to connect **Thingsboard Gateway** to **IBM Watson** *MQTT* topics. 

According to **IBM Watson** [documentation](https://console.ng.bluemix.net/docs/services/IoT/applications/mqtt.html) **host** should be create as **$IBM_WATSON_ORGANIZATION_ID**.*messaging.internetofthings.ibmcloud.com*. We'll later refer to this as **$IBM_WATSON_MQTT_ENDPOINT**.

As well for identification we'll need correctly compose **clientId** property as *a*:**$IBM_WATSON_ORGANIZATION_ID**.**$IBM_WATSON_APP_NAME**. We'll later refer to this as  **$IBM_WATSON_CLIENT_ID**.

Configuration of the brokers is located in **mqtt-config.json** file.

You should update it using next values:

```json
{
"host": "$IBM_WATSON_MQTT_ENDPOINT",
"port": 1883,
"ssl": false,
"retryInterval": 3000,
"clientId": "$IBM_WATSON_CLIENT_ID",
"credentials": {
    "type": "basic",
    "username": "$IBM_WATSON_APP_NAME",
    "password": "$IBM_WATSON_APP_TOKEN"
}
 ...
}
```

here is sample with real values:

```json
{
    "host": "4p62co.messaging.internetofthings.ibmcloud.com",
    "port": 1883,
    "ssl": false,
    "retryInterval": 3000,
    "clientId": "a:4p62co:a-4p62co-vuflwimden",
    "credentials": {
        "type": "basic",
        "username": "a-4p62co-vuflwimden",
        "password": "l5xa*A9X9)PrDi5Jvg"
    }
    ...
}
```


Configuration of the broker is done. Now you are ready to start Thingsboard **IoT Gateway** and publish messages to **IBM Watson IoT** topics that will be consumed by Thingsboard **IoT Gateway** and republished to **Thingsboard** instance.

### Dry Run

It's time to configure mapping of the **Thingsboard Gateway** to be able to subscribe to **IBM Watson** device topics. 

**NOTE** If you at this point don't know how subscribe to **IBM Watson** *MQTT* topics please visit this [link](https://console.ng.bluemix.net/docs/services/IoT/applications/mqtt.html#subscribe_device_events)

In general *topic* that we can use to subscribe to device events has next definition: 

*iot-2/type*/**$IBM_WATSON_DEVICE_TYPE**/*id*/**$IBM_WATSON_DEVICE_ID**/*evt*/**event_id**/*fmt*/**format_string**

Here is the detail description of *event_id* and *format_string* properties:

- **event_id** is the ID of the event, for example “status”. The event ID can be any string permitted by MQTT. Subscriber applications must use this string in their subscription topic to receive the events published on this topic if wildcards are not used.
- **format_string** is the format of the event payload, for example “json”. The format can be any string permitted by MQTT. Subscriber applications must use this string in their subscription topic to receive events published on this topic if wildcards are not used. If the format is not “json”, then messages will not be stored in the Historian.

Consider that we have next configuration of the mapping for **my-device-type** *Device Type* and would like to get all **temp** events for all the *Device Ids*. *Device Id* is going to be used as *Device Name* in **Thingsboard**:

```json
{
    ...
    "topicFilter": "iot-2/type/my-device-type/id/+/evt/temp/fmt/json",
    "converter": {
        "type": "json",
        "filterExpression": "",
        "deviceNameTopicExpression": "(?<=iot-2/type/my-device-type/id\/)(.*?)(?=\/evt/temp/fmt/json)",
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${$.value}"
          }
        ]
    }
    ...
}
```

To check that everything is configured correctly you are able to use **mosquitto_pub** tool that is able to publish messages to **IBM Watson IoT**.
The list of options that we are going to use in **mosquitto_pub**:

 - **'-h'** Specify the host to connect to.
 - **'-u'** Provide a username to be used for authenticating with the broker.
 - **'-P'** Provide a password to be used for authenticating with the broker.
 - **'-i'** The id to use for this client.
 - **'-t'** The MQTT topic on which to publish the message.

Here is the general command that could be used to publish message of particular device to **IBM Watson** *MQTT* topic:

```bash
mosquitto_pub -h $IBM_WATSON_ORGANIZATION_ID.messaging.internetofthings.ibmcloud.com -p 1883 -u 'use-token-auth' -P '$IBM_WATSON_DEVICE_TOKEN' -i "d:$IBM_WATSON_ORGANIZATION_ID:$IBM_WATSON_DEVICE_TYPE:$IBM_WATSON_DEVICE_ID" -t iot-2/evt/$event_id/fmt/$format_string -m '{"value":64}'
```

**NOTE** For the details how to connect to **IBM Watson** *MQTT* topics please visit this [link](https://console.ng.bluemix.net/docs/services/IoT/applications/mqtt.html)

And this is a sample of the command that will publish temperature readings to IBM Watson IoT topic **iot-2/evt/temp/fmt/json**. 
Thingsboard **IoT Gateway** will receive these values, create or update device **MY-DEVICE-ID** inside **Thingsboard**, and publish telemetry *'temperature'* using value **64**

```bash
mosquitto_pub -h 4p62co.messaging.internetofthings.ibmcloud.com -p 1883 -u 'use-token-auth' -P 'Lw&FJ3F29Rs&xNeuJt' -i "d:4p62co:my-device-type:my-device-id" -t iot-2/evt/temp/fmt/json -m '{"value":64}'
```

To validate that data arrived to Thingsboard, please open the administration UI and navigate to **Devices -> MY-DEVICE-ID -> Latest Telemetry**. See screen-shoot attached.

![image](/images/gateway/ibm-watson/dry-run.png)