{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


## Overview
TheThingsIndustries is LoRaWAN network designed for connecting your devices using LoRaWAN stack. 
After integrating TheThingsIndustries with the ThingsBoard, you can connect, communicate, process and visualize data from devices in the ThingsBoard IoT platform.


## The Things Stack

##### Register Application
The first step is to create an **application** in TheThingsIndustries console. Go to console by , open 
**Applications** section, press **add application** button and fill required fields.

- **Application ID** - thingsboard-integration

![image](https://img.thingsboard.io/user-guide/integrations/tti/tti-create-app.png)


##### Payload Decoder
Our device submits data in binary format. We have 2 options where to decode this data:

- **TheThingsIndustries decoder** - data will be decoded before entering the ThingsBoard
- **ThingsBoard converters** - uplink/downlink converters will be used to decode data from binary format into JSON

In this tutorial, we will make an initial transformation into JSON with TTI decoder and then use ThingsBoard converters for correct data processing.
In real life scenario, it is up to you where to decode/encode data, because it is possible to do this on any side.

After application registered in TTI, go to **Payload formatters**, **Uplink** select decoder function. We will take the first byte as a temperature value from a device 
and transform it into JSON.

Decode Function {% highlight javascript %}
function Decoder(bytes, port) {
  var decoded = {temperature: bytes[0]};
  return decoded;
}
{% endhighlight %}
 
Output json:
{% highlight json %}
{
  "temperature": 2
}
{% endhighlight %}

![image](https://img.thingsboard.io/user-guide/integrations/tti/tti-create-decoder.png)

Press **Save payload function**

##### Device Registration in TheThingsIndustries

Next step is a Device creation in the TTI. Open **End devices** page and press **Add end device**

- Device ID - thermostat1.
- DevEUI - unique device identifier.

- Press **Network layer settings** button.

![image](https://img.thingsboard.io/user-guide/integrations/tti/tti-create-device-1.png)

- Select configuration for your device.

![image](https://img.thingsboard.io/user-guide/integrations/tti/tti-create-device-2.png)

- Press **Application layer settings** button.

Fill the **AppSKey** by generation button.

Press **Add end device** button.

## Integration with the ThingsBoard

We need to create Integration on The Things Industries, to do this open **Integrations** - **MQTT** and press **Generate new API key**. 
Copy username and password we will need it later.

![image](https://img.thingsboard.io/user-guide/integrations/tti/tti-integration.png)

Now we can start configuring the ThingsBoard.

##### ThingsBoard Uplink Data Converter

First, we need to create Uplink Data converter that will be used for receiving messaged from the TTI. The converter should transform incoming payload into the required message format.
Message must contains **deviceName** and **deviceType**. Those fields are used for submitting data to the correct device. If a device was not found then new device will be created.
Here is how payload from TheThingsIndustries will look like:
{% highlight json %}
{
  "end_device_ids": {
    "device_id": "thermostat1",
    "application_ids": {
      "application_id": "thingsboard-integration"
    },
    "dev_eui": "ABABABABABABABAA",
    "join_eui": "0000000000000000",
    "dev_addr": "270000BC"
  },
  "correlation_ids": [
    "as:up:01EFEBYDTA1X51TDGPKC1EYK6N",
    "gs:conn:01ED482WRPY2BABY4TYZV57RJG",
    "gs:uplink:01ED9B93M49J8P3FQXCGGCYTGX",
    "ns:uplink:01ED9B93MH00CTY41A6KF674E4",
    "rpc:/ttn.lorawan.v3.AppAs/SimulateUplink:01EFEBYDS9BGD5A9VVZ6GSNBAV",
    "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01ED9B93MH293RE2TR3F1WMHEG"
  ],
  "received_at": "2020-08-11T08:59:45.869225403Z",
  "uplink_message": {
    "session_key_id": "BXGsg614fdmYH7efd+fRvA==",
    "f_port": 2,
    "f_cnt": 23787,
    "frm_payload": "AhJF8HTI3khf",
    "decoded_payload": {
      "temperature": 2
    },
    "settings": {
      "data_rate": {}
    },
    "received_at": "2020-08-11T10:08:31.505981496Z"
  }
}
{% endhighlight %}

We will take **device_id** and map it to the **deviceName** and **application_id** map to the **deviceType**. But you can use another mapping in your specific use cases.
Also, we will take the value of the **temperature** field and use it as a device telemetry. 

Go to **Data Converters** and create new **uplink** Converter with this function: {% highlight javascript %}
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
         temperature: data.uplink_message.decoded_payload.temperature
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

![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-uplink.png)


##### ThingsBoard Downlink Data Converter
For sending Downlink messages from the ThingsBoard to the device inside TTI, we need to define downlink Converter.
In general, output from Downlink converter should have the following structure:
{% highlight json %}
{
  "downlinks": [{
    "f_port": 2,
    "frm_payload": "vu8=",
    "priority": "NORMAL"
  }]
}

{% endhighlight %}

- **contentType** - defines how data will be encoded {TEXT \| JSON \| BINARY}
- **data** - actual data that will be sent to the device in TTI. More details about API can be found in this [TTI API](https://enterprise.thethingsstack.io/integrations/mqtt/){:target="_blank"}
- **metadata** - in this object you should place correct **devId** (device id) value that will be used to identify target device in TTI

Go to **Data Converters** and create new **downlink** Converter with this function: {% highlight javascript %}
var data = {
        downlinks: [{
            f_port: 2,
            confirmed: false,
            frm_payload: btoa(msg.version),
            priority: "NORMAL"
        }]
    };

var result = {
    contentType: "JSON",
    data: JSON.stringify(data),
    metadata: {
        devId: 'thermostat1'
    }

};
return result;
{% endhighlight %}

This converter will take **version** field from the incoming message and add it is a payload field in the outbound message. Destination device is a **thermostat1** device.

![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-downlink.png)

##### TTI Integration

Next we will create Integration with TheThingsIndustries inside the ThingsBoard. Open **Integrations** section and add new Integration with type
**TheThingsIndustries**

- **Name**: *TTI Integration*
- **Type**: *TheThingsIndustries*
- **Uplink** data converter: *TTI Uplink*
- **Downlink** data converter: *TTI Downlink*
- **Region**: *eu1* (region where your application was registered inside TTI)
- **Username**: *thingsboard-integration@thingsboard* (use ***Username*** from TTI integration)
- **Password**: use ***Password*** from TTI integration

![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-integration-1.png)  

![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-integration-2.png)  

## Validation

##### Validate Uplink Messages
Lets verify our integration. 

When device sends data, we can check it in the ThingsBoard, to do this:

Go to **Device Group** -> **All** -> **thermostat1** - you can see that 

- new device was registered in the Thingsboard with name "thermostat1"
- In the **Latest Telemetry** section you will see that last submitted temperature = 2.

![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-device-telemetry.png)

##### Validate Downlink Messages
For testing Downlink Messages, we will update our Root Rule Chain to send downlink message when device attribute is changed.
Open and edit **Root Rule Chain**. Add **Integration Downlink** Action node and connect it with the **Message Type Switch** Node using relation 
**Attributes Updated**
 
![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-add-rule-downlink.png)

![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-route-to-downlink.png)

Save Changes.

Go to **Device Group** -> **All** -> **thermostat1** -> attributes section. We will add **Shared attribute** with name **version** and
value **v.0.11** 

![image](https://img.thingsboard.io/user-guide/integrations/tti/tb-add-version.png)

By making this step, we triggered downlink message to the device **thermostat1** and this message should contains version field value.  
Open TTI Console, navigate to **thingsboard-integration** application, to the section **Data**.  
And we see that Downlink message was received (It is displayed as bytes **76 2E 30 2E 31 31**).  

![image](https://img.thingsboard.io/user-guide/integrations/tti/ttn-downlink-verified.png)

## See also
With this integration you can also configure Downlink converters and trigger required actions using Rule Engine nodes.

- [Integration Overview](/docs/{{peDocsPrefix}}user-guide/integrations/)
- [Uplink Converters](/docs/{{peDocsPrefix}}user-guide/integrations/#uplink-data-converter)
- [Downlink Converters](/docs/{{peDocsPrefix}}user-guide/integrations/#downlink-data-converter)
- [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/)


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
