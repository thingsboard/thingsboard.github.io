{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


## Overview

Azure IoT Hub Integration allows to stream data from AWS IoT Backend to ThingsBoard and converts device payloads to the ThingsBoard format.
 
  <object width="80%" data="/images/user-guide/integrations/azure/iot-hub-integration.svg"></object>

## Create and configure Azure IoT Hub account

- [Create an IoT hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal#create-an-iot-hub).

- [Register a new device in the IoT hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal#register-a-new-device-in-the-iot-hub).

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

![image](/images/user-guide/integrations/azure-iot-hub/create_uplink_converter-1.png)

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.

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

7) SAS Key: in Azure Portal you have to choose **Devices** in menu and choose your “**TB-D-01**” device. Copy Primary Key (**DEVICE_SAS_KEY**). Insert primary key in SAS Key field.

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

## Validate Uplink Messages
Lets verify our integration. First, lets put message into uplink stream, so Thingsboard will fetch this message. 

Open page with your Device and go to **Message to Device**.

Send test message to device.

![image](/images/user-guide/integrations/azure-iot-hub/iot-hub-send-test-msg-1.png)


Go to **Device Group** -> **All** -> **TB-D-01** - you can see that 

- new device was registered in the thingsboard
- In the **Latest Telemetry** section you will see that last submitted temperature = 42 and humidity = 77.

![image](/images/user-guide/integrations/azure-iot-hub/iot-hub-send-test-msg-2.png)

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
