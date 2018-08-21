---
layout: docwithnav
title: The Things Network (TTN) Integration
description: The Things Network (TTN) Integration Guide

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


## Overview
The Things Network (TTN) is a LoRaWAN network designed for connecting your devices using the LoRaWAN stack.

After integrating TTN with ThingsBoard, you can connect, communicate, process and visualize data from the devices in the ThingsBoard IoT platform.


## The Things Network (TTN) Setup

##### Registering an Application
The first step is to create an **application**:

  - Go to the [TTN console](https://console.thethingsnetwork.org/){:target="_blank"}.
  - Open the **Applications** section.
  - Click the **add application** button and fill in the required fields.
    - **Application ID**: tb_applciation.
    - **Handler registration**: ttn-handler-eu. <br>
    <em>Note: </em>Handler registration is used to identify the region where the application will be registered. In our example, it will be the *eu* region.

![image](/images/user-guide/integrations/ttn/ttn-add-application.png)


##### Payload Decoder
Our device submits data in a binary format. We have 2 options to decode this data:

- Using **The Things Network (TTN) decoder** - data will be decoded before entering ThingsBoard
- Using the **ThingsBoard converters** - uplink/downlink converters will be used to decode data from the binary format to JSON

In this tutorial, we will make an initial transformation into JSON with the TTN decoder and then use the ThingsBoard converters for correct data processing.

In a real life scenario, it is up to you where to decode/encode the data because it is possible to be done on any side.

- After registering the application in TTN, go to the **Payload Formats** tab and select the decoder function.

- We will take the first byte as the temperature value from the device and transform it into JSON.

The decoder function: {% highlight javascript %}
function Decoder(bytes, port) {
  var decoded = {temperature: bytes[0]};
  return decoded;
}
{% endhighlight %}

The output in JSON format:
{% highlight json %}
{
  "temperature": 15
}
{% endhighlight %}

![image](/images/user-guide/integrations/ttn/ttn-decoder.png)

- Click **Save payload function**

##### Device Registration in The Things Network (TTN)

The next step is to create a device in TTN.

- Open the **Devices** page and click **register device**
    - Device ID: thermostat_a
    - Device EUI: click the **Generate** button to generate a random identifier number.

![image](/images/user-guide/integrations/ttn/ttn-add-device.png)

- Click the **Register** button.


## Integration with ThingsBoard
Next, we will start to configure ThingsBoard by creating:

 - the Uplink Data Converter.
 - the Downlink Data Converter
 - the TTN Integration in ThingsBoard.

##### ThingsBoard Uplink Data Converter

First, we need to create the Uplink Data converter that will be used for receiving the messages from TTN. The converter should transform the incoming payload into the required message format.
The Message must contains the **deviceName** and **deviceType**. These fields are used to submit the data to the correct device. If a device cannot be found, a new device will be created.
Here is how the payload from The Things Network (TTN) will look like:
{% highlight json %}
{
    "app_id": "tb_platform",
    "dev_id": "thermostat_a",
    "hardware_serial": "*********",
    "port": 1,
    "counter": 0,
    "payload_raw": "Dw==",
    "payload_fields": {
        "temperature": 15
    },
    "metadata": {
        "time": "2018-06-07T17:31:18.670792607Z"
    }
}
{% endhighlight %}

 - We will take the **dev_id** and **app_id** and map them to the **deviceName** and **deviceType** respectively. <br>
   However, you can use another mapping in your specific use cases.
 - Also, we will take the value of the **temperature** field and use it as a device telemetry.
 - Go to **Data Converters** and create a new **Uplink** Data Converter using this function: {% highlight javascript %}

var data = decodeToJson(payload);
var deviceName = data.dev_id;
var deviceType = data.app_id;

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
         temperature: data.payload_fields.temperature
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

![image](/images/user-guide/integrations/ttn/tb-converter.png)


##### ThingsBoard Downlink Data Converter
To send Downlink messages from ThingsBoard to the device inside TTN, we need to define a downlink data Converter.

In general, the output from the downlink data converter should have the following structure:

{% highlight json %}
{
    "contentType": "JSON",
    "data": "{\"port\":1,\"confirmed\":false,\"payload_fields\":{\"version\":\"0.11\"}}",
    "metadata": {
        "devId": "thermostat_a"
    }
}
{% endhighlight %}

- **contentType** - defines how data will be encoded {TEXT \| JSON \| BINARY}.
- **data** - the actual data that will be sent to the device in TTN. More details about APIs can be found in the [TTN API](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html){:target="_blank"} reference.
- **metadata** - in this object, you should place the correct devId value that will be used to identify the target device in TTN.

Go to the **Data Converters** and create a new **Downlink** Data Converter using this function: {% highlight javascript %}
var data = {
      port: 1,                
      confirmed: false,      
      payload_fields: {
          version: msg.version
      }
    };

var result = {
    contentType: "JSON",
    data: JSON.stringify(data),
    metadata: {
        devId: 'thermostat_a'
    }

};

return result;
{% endhighlight %}

This converter will take the **version** field from the incoming message and add it as a payload field in the outbound message.

The Destination device is the **thermostat_a** device.

![image](/images/user-guide/integrations/ttn/tb-downlink-converter.png)

##### TTN Integration

Next, we will create an Integration with The Things Network (TTN) inside ThingsBoard. <br>

Open the **Integrations** section and add a new Integration of type **TheThingsNetwork**

- Name: ttn_integration
- Type: TheThingsNetwork
- Uplink data converter: ttn_converter
- Downlink data converter: ttn_downlink_version
- Region: eu (region where your application was registered inside TTN)
- Application ID: tb_platform (use **Application ID** from TTN)
- Access Key: use **Access Key** from TTN

![image](/images/user-guide/integrations/ttn/tb-integration.png)

## Validation

##### Validate the Uplink Messages
Let´s verify our integration:

- Go to the device **thermostat_a** page in TTN.
- Scroll to the **Simulate Uplink** section.
- Our device will publish a temperature **0F** (15), so enter **0F** into the payload field and click the **Send** button.

![image](/images/user-guide/integrations/ttn/ttn-send-payload.png)

- Go to the **Device Group** -> **All** -> **thermostat_a**, and you will see that:
    - a new device has been registered in ThingsBoard
    - In the **Latest Telemetry** section, you will see the last submitted temperature = 15.

![image](/images/user-guide/integrations/ttn/tb-device-telemetry.png)

##### Validate the Downlink Messages
To test the Downlink Messages, we will update the Root Rule Chain to send a downlink message when a device attribute is changed.

- Open the **Root Rule Chain**.
- Add the **Integration Downlink** Action node and connect it to the **Message Type Switch** Node using the **Attributes Updated** relationship.
 
![image](/images/user-guide/integrations/ttn/tb-add-rule-downlink.png)

![image](/images/user-guide/integrations/ttn/tb-route-to-downlink.png)

- Save the Changes.

- Go to the **Device Group** -> **All** -> **thermostat_a** -> attributes section.
- Add a **Shared attribute**. Its key is **version** and its value is **v.0.11**

![image](/images/user-guide/integrations/ttn/tb-add-version.png)

- By this step, we trigger a downlink message to the device **thermostat_a** and this message contains the version field value.
- Open the TTN Console, navigate to the **tb_platfrom** application, and go to the **Data** section. We will see the Downlink message has been received.

![image](/images/user-guide/integrations/ttn/ttn-downlink-verified.png)

## See also
With this integration you can also configure Downlink converters and trigger required actions using Rule Engine nodes.

- [Integration Overview](/docs/user-guide/integrations/) 
- [Uplink Converters](/docs/user-guide/integrations/#uplink-data-converter) 
- [DownLink Converters](/docs/user-guide/integrations/#downlink-data-converter) 
- [Rule Engine](/docs/user-guide/rule-engine-2-0/re-getting-started/)


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
