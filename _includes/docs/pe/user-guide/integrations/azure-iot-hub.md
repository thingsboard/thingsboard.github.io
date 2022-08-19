{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


## Overview

Azure IoT Hub Integration allows to stream data from AWS IoT Backend to ThingsBoard and converts device payloads to the ThingsBoard format.
 
  <object width="80%" data="/images/user-guide/integrations/azure/iot-hub-integration.svg"></object>

{% capture difference %}
<br>
If you plan to use one device in your Thingsboard instance, use **Azure IoT Hub Integration**. If you have more than one device, use [Azure Event Hub Integration](https://thingsboard.io/docs/user-guide/integrations/azure-event-hub/)
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Create and configure Azure IoT Hub account

### Create Azure IoT Hub

You had registered in Azure. For now, you need to create IoT hub. Here you will create devices and do some other operations. Let's do this step by step:

1) In Azure Portal we should click on the **Create a resource** button to create IoT Hub

2) In search field lets write **Iot Hub** and choose same item in list

3) For next lets click on Create

4) On this page click **Create new** and specify Resource Group and IoT hub name, click **Review + create**, on the next page click **Create**

5) Wait for deployment process and then click **Go to resource**

{% include images-gallery.html imageCollection="create_eventhub" preview="false" %}

### Create Device in IoT Hub

First step done and now we go to create Device

1) In Context Menu click for **Iot devices** tab

2) Here you should click on **New** button

3) In pop-up window just specify **Device ID** and click **Save**

4) Great! You have new own device

{% include images-gallery.html imageCollection="create_device" preview="false" %}

## Create Integration in Thingsboard

We have done all necessary steps on the Azure IoT Hub side. Now we can start configuring the Thingsboard.

### Create Uplink Converter

First, we need to create Uplink Data converter that will be used for converting messages received from the Azure IoT Hub. The converter should transform incoming payload into the required message format.
Message must contains **deviceName** and **deviceType**. Those fields are used for submitting data to the correct device. If a device was not found then new device will be created.
Here is how demo payload from the Azure IoT Hub will look like:
```javascript
{
    "devName": "TB-D-01",
    "msg": {
        "temp": 42,
        "humidity": 77
    }
}
```
{: .copy-code}

We will take **devName** and map it to the **deviceName**. But you can use another mapping in your specific use cases.
Also, we will take the value of the **temperature** and **humidity** fields and use it as a device telemetry.

Go to Data Converters, click on the “plus” and on “Create new converter”. To view the events, enable Debug. In the function decoder field, specify a script to parse and transform data:

```javascript
var data = decodeToJson(payload);
var deviceName = data.devName;
var deviceType = 'thermostat';

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
        temperature: data.msg.temp,
        humidity: data.msg.humidity
    }
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/azure-iot-hub/converter-iot-uplink.png)

{% capture difference %}
<br>
**NOTE: Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Create Integration

Next we will create Integration with Azure IoT Hub inside the Thingsboard. Open **Integrations** section and add new Integration with type
**Azure IoT Hub**

In our example, we will have the following settings:

1) Integration name: **Azure IoT Hub Integration**

2) Integration type: **Azure IoT Hub**

3) Specify uplink data converter: **Azure-IoT-Hub-Uplink**

4) Hostname: **thingsboard-integration.azure-devices.net**

5) Device ID: **TB-D-01**

6) Credentials: **Shared Access Signature**

7) SAS Key: in Azure Portal you have to choose **Devices** in menu and choose your “**TB-D-01**” device. Copy **Primary Key** (**DEVICE_SAS_KEY**). Insert primary key in SAS Key field.

8) Topic filter: **devices/TB-D-01/messages/devicebound/#**

Click **Add** and see your created integration

{% include images-gallery.html imageCollection="integration" preview="false" %}

- **Topic** - for more information about IoT Hub topic use [link](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#receiving-cloud-to-device-messages).
- **Credentials** - Azure IoT Hub connection credentials. Can be either *Shared Access Signature* or *PEM*.

Different Authentication credentials are supported for Azure IoT Hub:

- Shared Access Signature - SAS Key is used for Authentication
- PEM - PEM certificates are used for Authentication

If **Shared Access Signature** credentials type is selected, the following configuration should be provided:
- SAS Key - it is key from your device in [Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#symmetric-key-authentication)
- CA certificate file, by default used Baltimore certificate. More about certificates [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#tlsssl-configuration)

If **PEM** credentials type is selected, the following configuration should be provided:

- CA certificate file, by default used Baltimore certificate. More about certificates [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#tlsssl-configuration)
- Certificate file
- Private key file
- Private key password

[X.509 CA-signed authentication](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#x509-ca-signed-authentication)

[CACertificates instruction](https://github.com/Azure/azure-iot-sdk-c/tree/master/tools/CACertificates)

## Validation

### Validate Uplink Messages
Lets verify our integration. First, lets put message into uplink stream, so Thingsboard will fetch this message. 

In Azure open page with your Device and go to **Message to Device**.

Send test message to device.

```javascript
{
    "devName": "TB-D-01",
    "msg": {
        "temp": 42,
        "humidity": 77
    }
}
```
{: .copy-code}

![image](/images/user-guide/integrations/azure-iot-hub/iot-hub-send-test-msg-1.png)


Go to **Device Group** -> **All** -> **TB-D-01** - you can see that:

- new device was registered in the **Thingsboard**;
- In the **Latest Telemetry** section you will see that last submitted temperature = 42 and humidity = 77.

![image](/images/user-guide/integrations/azure-iot-hub/iot-hub-send-test-msg-2.png)

### Validate Downlink Messages

#### Create Downlink Converter

Downlink uses for send a message to device. For example information that message from device have been received.

You need to do same steps like when was creating Uplink, but choose Downlink and specify another function. To view the events, enable Debug. 

In the function decoder field, specify a script to parse and transform data:

```javascript
var result = {

    contentType: "JSON",

    data: JSON.stringify(msg),

    metadata: {
            deviceId: 'TB-D-01'
    }

};

return result;
```
{: .copy-code}

{% capture difference %}
<br>
**NOTE** *If you used another name of device (not TB-D-01) you have to specify in the Downlink converter your device name for **deviceId** field*
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/user-guide/integrations/azure-iot-hub/create-iot-downlink-converter-1.png)

When Downlink Converter have done, you should go to integration and specify this **converter**.

![image](/images/user-guide/integrations/azure-iot-hub/create-iot-downlink-converter-2.png)

<br>
**Ok, downlink converter ready, integration ready, Let's test it:**

1) After test of uplink, integration have created the device inside Thingsboard, and we need to know for which Rule Chain it connected.
   Go to the **Device groups** in Thingsboard menu choose **All** and find the device with the name that we have used in the uplink. Find out which device profile our device uses.

{% include images-gallery.html imageCollection="device_groups_all" preview="false" %}

2) Go to the **Device profiles** tab. Select the device profile used by the device and see the rule chain used.

{% include images-gallery.html imageCollection="device_profile_all" preview="false" %}

3) Go to **Rule Chains** in the **Thingboard** menu and find the desired rule chain. Open rule chain. In 'Search nodes' field type 'down' and choose in the menu **integration downlink** node, drag it to the Canvas. In pop-up you need to specify the name of rule node and choose our integration.

{% include images-gallery.html imageCollection="downlink_rule_node" preview="false" %}

4) Click on right gray circle of **message type switch** node and drag it to left gray circle of our downlink rule node. Here choose **Attributes update** and click 'Add'. Save rule chain.

{% include images-gallery.html imageCollection="save_downlink_rule_node" preview="false" %}

5) Great. Lets go to **Device groups** -> **All** and choose our device. Switch to **Attributes** in 'Entity attributes scope' list choose **Shared attributes**.
   Tap on 'plus' to create new. Specify in pop-up the key of attribute, type of value and some value. Tap 'Add'.

{% include images-gallery.html imageCollection="add_shared_attributes" preview="false" %}

6) Go to the Integration to check the result of downlink.

{% include images-gallery.html imageCollection="add_shared_attributes_integration" preview="false" %}

How you can see, we have a message that Downlink successfully received by Integration and sent to Azure Event Hub.
To check it in Azure IoT Hub we need to go to Azure Portal, choose **IoT devices** menu tab and see **Cloud to Device Message Count** number.

{% include images-gallery.html imageCollection="downlink_result" preview="false" %}



## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
