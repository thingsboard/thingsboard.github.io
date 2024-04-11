{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

## Overview

The ChirpStack open-source LoRaWAN Network Server stack provides open-source components for LoRaWAN networks.  
After integrating ChirpStack with ThingsBoard, you can connect, communicate, process and visualize data from devices in the ThingsBoard IoT platform.

## ChirpStack configuration

In order to get data you should have configured instance of ChirpStack Network server stack.  
In this guide we will use the ***configured local instance***, installed by docker compose.
[**How to install ChirpStack Network server stack using docker compose**](https://www.chirpstack.io/project/guides/docker-compose/).  
Also, we have connected device, how to connect it you can find in [**Connection guide from the official site**](https://www.chirpstack.io/project/guides/connect-device/).  
When device connected and the data appears in the **DEVICE DATA** tab - we can start to configure the integration to the ThingsBoard.  

## Create Uplink Converter

Before creating the integration, you need to create an **Uplink converter** in **Data converters.**
Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard.
Click on the **"plus"** and on **"Create new converter".** 
To view the events, enable **Debug.** In the function decoder field, specify a script to parse
and transform data. 

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.

{% include images-gallery.html imageCollection="uplink" %}

Let's review sample uplink message from ChirpStack:

```
{
    "applicationID": "1",
    "applicationName": "Application",
    "deviceName": "Device_1",
    "devEUI": "e3EP8SqeZiw=",
    "rxInfo": [],
    "txInfo": {
        "frequency": 868100000,
        "modulation": "LORA",
        "loRaModulationInfo": {
            "bandwidth": 125,
            "spreadingFactor": 10,
            "codeRate": "4/5",
            "polarizationInversion": false
        }
    },
    "adr": false,
    "dr": 2,
    "fCnt": 22,
    "fPort": 2,
    "data": "GVAy",
    "objectJSON": "",
    "tags": {},
    "confirmedUplink": false,
    "devAddr": "AJTrGg==",
    "publishedAt": "2021-09-17T13:45:00.342008687Z"
}
```
As you can see the device name arrives in the "deviceName" field. We will use it as a device name in ThingsBoard. Device data is encoded in the "data" field.
The Base64 encoded data here is:
```
"data": "GVAy"
```
Let's convert them into flags, battery and light values.

In the decoded form we have the following string: ***258050***  

**25** is the value for **flags**.  
**80** is the value for **battery**.  
**50** is the value for **light**.  

In the converter it will be indicated like this:  

```
var flags = parseInt(incomingHexData.substring(0, 2), 16);
var battery = parseInt(incomingHexData.substring(2, 4), 16);
var light = parseInt(incomingHexData.substring(4, 6), 16);
```


#### Example for the Uplink converter

```javascript
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);

// decode payload to JSON
var data = decodeToJson(payload);

var deviceName = data.deviceName;
var deviceType = data.applicationName;

var incomingHexData = base64ToHex(data.data);
var flags = parseInt(incomingHexData.substring(0, 2), 16);
var battery = parseInt(incomingHexData.substring(2, 4), 16);
var light = parseInt(incomingHexData.substring(4, 6), 16);

var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
       applicationId: data.applicationId,
       DevEUI: base64ToHex(data.devEUI),
       integrationName: metadata['integrationName'],
       txInfo: data.txInfo,
       fPort: data.fPort,
       devAddr: base64ToHex(data.devAddr),
       dr: data.dr
   },
   telemetry: {
       flags: flags,
       battery: battery,
       light: light
   }
};

/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

function base64ToHex(str) {
  var raw = atob(str);
  var res = "";
  for (var i = 0; i < raw.length; i++) {
    var hex = raw.charCodeAt(i).toString(16);
    res += (hex.length === 2 ? hex : '0' + hex);
  }
  return res.toUpperCase();
}

return result;
``` 
{: .copy-code}

You can change the decoder function while creating the converter or after creating it. If the converter has already been created, then click on the "pencil" icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function. Save changes by clicking on the "checkmark" icon.


## Create Integration

To create integration on ThingsBoard we need the following parts:
- **Uplink converter**
- **Application server url**
- **Application API key from application server**

To get the API key we need to open Application server UI, open **API keys** tab from the left top menu and create an API key.  

{% include images-gallery.html imageCollection="api-keys" %}

Now that the Uplink converter has been created, and we have all required data, it is possible to create an integration.

**NOTE**: It is recommended to enable **Debug mode** for debug purposes to see uplink/downlink events on integration.

{% include images-gallery.html imageCollection="integration" %}

In order for data to be transferred from ChirpStack to ThingsBoard, you need to configure an **Integration** for your ChirpStack application.    
To create integration on ChirpStack Network server stack, we need to do the following steps:  
1. Login to ChirpStack Network server stack user interface (Default login/password - **admin**/**admin**).  
2. We go to the tab **Applications** in the left menu and open our application (our application is named *Application*).  
3. Open the **Integrations** tab and create a **HTTP** integration.
4. Let`s go to the **Integrations** tab in ThingsBoard. Find your ChirpStack integration and click on it. There you can find the HTTP endpoint URL. Click on the icon to copy the url.
5. Fill the fields with endpoint url from ThingsBoard integration.

{% include images-gallery.html imageCollection="chirpstack_integration" %}


## Processing Uplink message

When device sends uplink message, you will receive an uplink event on integration and data from the device.  

{% include images-gallery.html imageCollection="uplink_message" %}

The created device with data can be seen in the section **Device groups -> All**

{% include images-gallery.html imageCollection="device_groups" %}

Received data can be viewed in the Uplink converter. In the **“In”** and **"Out"** blocks of the **Events** tab:

{% include images-gallery.html imageCollection="uplink_events" %}

Use the Dashboards to work with data. Dashboards are a modern format for collecting and visualizing data sets. Visibility of data presentation is achieved through a variety of widgets. 

ThingsBoard has examples of several types of dashboards that you can use. You can find them in **Solution templates** tab.

{% include images-gallery.html imageCollection="solution_templates" %}

How to work with dashboards [read here](/docs/{{docsPrefix}}user-guide/dashboards/)



## Advanced Usage: Create Downlink Converter

Create Downlink in **Data converters.** To see events - enable **Debug.**

{% include images-gallery.html imageCollection="create_downlink" %}


You can customize the downlink according to your configuration.  
Let's consider an example where we send an attribute update message.
`So we should change code in the downlink encoder function under line `//downlink data input`

```
data: msg.downlink
```

Also, indicate the required parameters in the metadata:  

```
metadata: {
  "EUI": "$Device_EUI",
  "port": 1
}
```
Example for downlink converter:  

```javascript
// Encode downlink data from incoming Rule Engine message

// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter

/** Encoder **/

// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "TEXT",

    // downlink data
    data: btoa(msg.downlink),

    // Optional metadata object presented in key/value format
    metadata: {
            DevEUI: metadata.cs_DevEUI,
            fPort: metadata.cs_fPort
    }

};

return result;

``` 
{: .copy-code}

Where **DevEUI** is device EUI, it will be taken from the device uplink message.  
A **fPort** can be from 1 to 223, it will be taken from the device uplink message.  

{% include images-gallery.html imageCollection="downlink" %}

Add a converter to the integration.  
You can do this at the stage of creating an integration or editing it.  

In order to send Downlink, we use the rule chain to process shared attribute update.  
To get **fPort** and **DevEUI** from device we have to import rule-chain.  
You can find it [**here**](/docs/user-guide/integrations/resources/downlink_to_chirpstack.json).  

{% include images-gallery.html imageCollection="downlink_rule_chain" %}

Also, we have to configure the root rule-chain:

{% include images-gallery.html imageCollection="root_rule_chain" %}

We go to the **Device group** section in the **All** folder, to see this with an example.  
We have indicated the downlink of the device in the **Shared attributes.**  
Now we edit it by clicking on the “pencil” icon.  
Then we make changes to the attribute (change the **downlink** to 01040206) and save the data.

{% include images-gallery.html imageCollection="shared_attributes" %}

Received data and data that was sent can be viewed in the downlink converter. In the **“In”** block of the **Events** tab, we see what data entered and the **“Out”** field displays messages to device:

{% include images-gallery.html imageCollection="downlink_events" %}


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}



