{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

## Overview

Azure Event Hub Integration allows to stream data from Azure Event Hub to ThingsBoard and converts device payloads to the ThingsBoard format.

 ![image](https://img.thingsboard.io/user-guide/integrations/azure-event-hub-integration.svg)
 
## Create Azure IoT Hub

You had registered in Azure. For now, you need to create IoT hub. Here you will create devices and do some other operations. Let's do this step by step:

1) In Azure Portal we should click on the **Create a resource** button to create IoT Hub

2) In search field lets write **Iot Hub** and choose same item in list

3) For next lets click on Create

4) On this page click **Create new** and specify Resource Group and IoT hub name, click **Review + create**, on the next page click **Create**

5) Wait for deployment process and then click **Go to resource**

{% include images-gallery.html imageCollection="create_eventhub" preview="false" %}

## Create Device in IoT Hub

First step done and now we go to create Device

1) In Context Menu click for **Iot devices** tab

2) Here you should click on **New** button

3) In pop-up window just specify **Device ID** and click **Save**

4) Great! You have new own device

{% include images-gallery.html imageCollection="create_device" preview="false" %}

## Create Uplink Converter

Before creating the integration, you need to create an Uplink converter in Data converters. Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard. Click on the “plus” and on “Create new converter”. To view the events, enable Debug. In the function decoder field, specify a script to parse and transform data.

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.

{% include images-gallery.html imageCollection="uplink_converter" preview="false" %}

**You can use our example of the Uplink converter:**
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


## Create Integration in Thingsboard

At this time, we have own IoT hub with Device

1) Now in Azure Portal you have to choose **Built-in endpoints** in menu and copy **Event Hub-compatible endpoint**

2) Go to the Thingsboard and choose **Integrations** in menu

3) Click on **'plus'** and in pop-up we have to enter Name, choose type **Azure Event Hub**, choose uplink converter and paste in field Connection String copied **Event Hub-compatible endpoint**

4) [Optional] Click on **Check connection** button to check correctly copied connection string

5) Click **Add** and see your created integration

{% include images-gallery.html imageCollection="integration" preview="false" %}

## Test it up!

For now, we ready to test our integration. So we have to go to Rule Chain (tab in Thingsboard menu), choose one of your rule chains and do next steps:

1) In field Search Nodes type 'gen' and find in the menu **generator**. Drag it on the Canvas. In pop-up specify **name** of Generator, **number of messages** and generate function, you can use our example. Next click 'Add' 

{% include images-gallery.html imageCollection="generator" preview="false" %}

```javascript
var msg = {
    "devName": "TB-D-01",
    "msg": {
        "temp": 42,
        "humidity": 77
    }
};
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";

return { msg: msg, metadata: metadata, msgType: msgType };
```

2) This is a time to find device **Primary key**. Go to azure portal, tap on **Iot Devices** , tap on your device and see **Primary key** field. Copy it

{% include images-gallery.html imageCollection="primary_key" preview="false" %}

3) Now we need to find another rule node. So type in Search Nodes 'iot' and choose **azure iot hub** in menu. Drag it to the Canvas. In pop-up you need to specify a name, instead of <device_id> type your device name, same Device ID and add to credentials Primary Key that we have copied. Also, if you need to see events - click on Debug mode.

{% include images-gallery.html imageCollection="iot_rule_node" preview="false" %}

4) If it looks like on the photo - nice. Click **Add** and go on

5) Last steps: connect **generator** to **azure iot hub**. Click on the gray circle of **generator** and drag it to left gray circle of **azure iot hub**. In pop-up menu you need to choose 'Success', click Add and smile

6) All ready, lets save Canvas and go to the integration.

{% include images-gallery.html imageCollection="generator_iot_rule_chain" preview="false" %}

Looks nice if you see type 'Uplink' in 'Events' of your integration and message that we have typed looks same as here

{% include images-gallery.html imageCollection="event_uplink" preview="false" %}

Use the Dashboards to work with data. Dashboards are a modern format for collecting and visualizing data sets. Visibility of data presentation is achieved through a variety of widgets.

ThingsBoard has examples of several types of dashboards that you can use. You can find them in **Solution templates** tab.

{% include images-gallery.html imageCollection="solution_templates" %}

## Advanced usage: Create Downlink Converter

Downlink uses for send a message to device. For example information that message from device have been received

1) At first, lets find IoT Hub name. You can go to Azure portal, choose **Built-in endpoints** and copy value of **Event Hub-compatible name** - there is **IoT hub name**

2) You need to do same steps like when was creating Uplink, but choose Downlink and specify another function. When Downlink Converter have done, you should go to integration and specify this **converter** and add the name of **IoT hub** to corresponding field

{% include images-gallery.html imageCollection="downlink_first_part" preview="false" %}

Simple example of the Downlink conveter:
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
**NOTE** *If you used another name of device (not TB-D-01) you have to specify in the Downlink converter your device name for **deviceId** field*

**Ok, downlink converter ready, integration ready, Let's test it:**

1) After test of uplink, integration have created the device inside Thingsboard, and we need to know for which Rule Chain it connected.
Just go to the Device groups in Thingsboard menu choose **All** and find the device with the name that we have used in the uplink.

{% include images-gallery.html imageCollection="device_groups_all" preview="false" %}

2) Find the name of necessary rule chain in Rule Chain tabs of Thingsboard menu. 

3) In 'Search nodes' field type 'down' and choose in the menu **integration downlink**, drag it to the Canvas. In pop-up you need to specify the name of rule node and choose our integration

4) Click on left gray circle of **message type switch** node and drag it to gray circle of our downlink rule node. Here choose **Attributes update** and click 'Add'

{% include images-gallery.html imageCollection="downlink_rule_node" preview="false" %}

5) Great. Save Canvas and lets go to 'Device groups' -> 'All' and choose our device. Switch to **Attributes** in 'Entity attributes scope' list choose **Shared attributes**. 
   Tap on 'plus' to create new. Specify in pop-up the key of attribute, type of value and some value.

6) Tap 'Add' and go to the Integration to check the result of downlink.

{% include images-gallery.html imageCollection="device_last_part" preview="false" %}

How you can see, we have a message that Downlink successfully received by Integration and sent to Azure Event Hub.
To check it in Azure IoT Hub we need to go to Azure Portal, choose **IoT devices** menu tab and see **Cloud to Device Message Count** number. 

{% include images-gallery.html imageCollection="downlink_result" preview="false" %}

## Advanced usage: Check Downlink using Azure IoT Hub integration

There is a simple explanation how to see your downlinks in Azure IoT Hub Integration.
Just look this images to understand how we make simple downlink check for Azure Event Hub

{% include images-gallery.html imageCollection="advanced_testing" preview="false" %}

*You can familiarize with Azure Iot Hub using next Link:* [Azure IoT Hub Integration](/docs/{{peDocsPrefix}}user-guide/integrations/azure-iot-hub)

## Conclusion

**That's it! Good luck in configuring of you IoT devices and dashboards!**

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
