{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


## Overview

Azure IoT Hub Integration allows to stream data from AWS IoT Backend to ThingsBoard and converts device payloads to the ThingsBoard format.

  <object width="80%" data="https://img.thingsboard.io/user-guide/integrations/azure/iot-hub-integration.svg"></object>

## Create and configure Azure IoT Hub account

- [Create an IoT hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal#create-an-iot-hub).

- [Register a new device in the IoT hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal#register-a-new-device-in-the-iot-hub).

## Integration with the Thingsboard
We have done all necessary steps on the Azure IoT Hub side. Now we can start configuring the Thingsboard.

##### Thingsboard Uplink Data Converter

First, we need to create Uplink Data converter that will be used for converting messages received from the Azure IoT Hub. The converter should transform incoming payload into the required message format.
Message must contains **deviceName** and **deviceType**. Those fields are used for submitting data to the correct device. If a device was not found then new device will be created.
Here is how demo payload from the Azure IoT Hub will look like:
{% highlight json %}
{
    "devName": "T1",
    "msg": {
        "temp": 42,
        "humidity": 77
    }
}
{% endhighlight %}

We will take **devName** and map it to the **deviceName**. But you can use another mapping in your specific use cases.
Also, we will take the value of the **temperature** and **humidity** fields and use it as a device telemetry. 

Go to **Data Converters** and create new **uplink** Converter with this function: 
{% highlight javascript %}
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
{% endhighlight %}

![image](https://img.thingsboard.io/user-guide/integrations/azure/iot-hub-converter.png)

##### Azure IoT Hub Integration

Next we will create Integration with Azure IoT Hub inside the Thingsboard. Open **Integrations** section and add new Integration with type
**Azure IoT Hub**

- Name: IoT Hub
- Type: Azure IoT Hub
- Uplink data converter: Thermostat Converter
- Hostname: **AZURE_IOT_HUB_HOSTNAME**
- Device ID: T1
- Credentials: Shared Access Signature
- SAS Key: **DEVICE_SAS_KEY**
- Topic filter: devices/T1/messages/devicebound/#

![image](https://img.thingsboard.io/user-guide/integrations/azure/iot-hub-add-integration.png)

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

##### Validate Uplink Messages
Lets verify our integration. First, lets put message into uplink stream, so Thingsboard will fetch this message. 

Open page with your Device and go to **Message to Device**.

Send test message to device.

![image](https://img.thingsboard.io/user-guide/integrations/azure/iot-hub-send-test-msg.png)


Go to **Device Group** -> **All** -> **T1** - you can see that 

- new device was registered in the thingsboard
- In the **Latest Telemetry** section you will see that last submitted temperature = 42 and humidity = 77.

![image](https://img.thingsboard.io/user-guide/integrations/azure/iot-hub-validate-telemetry.png)

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
