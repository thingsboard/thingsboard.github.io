{% assign peDocsPrefix = '' %}
{% if docsPrefix contains 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

## Overview

Azure Event Hub Integration allows to stream data from Azure Event Hub to ThingsBoard and converts device payloads to the ThingsBoard format.

![image](https://img.thingsboard.io/user-guide/integrations/azure-event-hub-integration.svg)
 
## Create IoT hub using the Azure portal.

First, sign in to the [Azure portal](https://portal.azure.com/){:target="_blank"}.

### Create IoT Hub in Azure

For now, you need to create IoT hub. Here you will create devices and do some other operations. Let's do this step by step:

- In the Azure portal, click on the "**Create a resource**" button;
- In the search field, type "**IoT Hub**" and select the matching item from the list;
- Click "**Create**";
- On the configuration page, click "**Create new**", specify the resource group and IoT hub name, then click "**Review + create**";
- On the next page, click "**Create**";
- Wait for the deployment process to complete, and then click "**Go to resource**";

{% include images-gallery.html imageCollection="create_eventhub" preview="false" %}

### Create device in IoT Hub

After completing the first step, follow these instructions to create a new device:

- Navigate to the "**IoT devices**" page from the context menu;
- Click the "**+ New**" button;
- In the pop-up window, enter the "**Device ID**" and click "**Save**".

Great! You have successfully created your new device.

{% include images-gallery.html imageCollection="create_device" preview="false" %}

## Add Azure Event Hub integration

**1. Basic settings**.

Go to the "**Integrations**" page of the "**Integrations center**" section. Click "**plus**" button to start adding new integration. Select type "**Azure Event Hub**" integration and click "**Next**";

![image](https://img.thingsboard.io/user-guide/integrations/azure-event-hub/azure-event-hub-integration-setup-1-pe.png)

<br>
**2. Uplink data converter**. 

Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in the ThingsBoard.

In the function decoder field, specify a script to parse and transform data. For our example, use the default decoder function (or use your own configuration). Then, click "**Next**";

![image](https://img.thingsboard.io/user-guide/integrations/azure-event-hub/azure-event-hub-integration-setup-2-pe.png)

You can always change the decoder function after creating it.

<br>
**3. Downlink data converter**.

At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "Downlink data converter" field empty. Click "**Skip**";

![image](https://img.thingsboard.io/user-guide/integrations/azure-event-hub/azure-event-hub-integration-setup-3-pe.png)

<br>
**4. Connection**.

Retrieve the Event Hub-compatible Endpoint in the Azure portal:

- Navigate to the "**IoT Hub**" resource;
- Open the "**Built-in endpoints**" page from the context menu;
- Locate and copy the "**Event Hub-compatible endpoint**" value.

This value will be used to integrate with ThingsBoard services.

{% include images-gallery.html imageCollection="event-hub-compatible-endpoint" preview="false" %}

<br>
To find the **container name**:

- In the Azure portal, click the "**Storage account**";
- Go to the "**Containers**" page of the "**Data storage**" section.

Here you will find the **container**. Save its name.

{% include images-gallery.html imageCollection="container" preview="false" %}

<br>
To find **storage connection string** values:

- In the Azure portal, click the "**Subscriptions**";
- Go to the "**Access keys**" page of the "**Security + networking**" section.

Here you will find the **connection string**.

{% include images-gallery.html imageCollection="connection-string" preview="false" %}

<br>
In ThingsBoard:

- Paste in the "**Connection String**" field copied "**Event Hub-compatible endpoint**";
- Enable persistent checkpoints to resume processing from the last checkpoint after an integration restart, and fill in the fields "**Storage connection string**" and "**Container name**" with the appropriate values. Disable to always start from the latest event;
- [Optional] Click on "Check connection" button to check connection to check correctly copied connection string;
- Finally, click "**Add**" button to create the integration.

![image](https://img.thingsboard.io/user-guide/integrations/azure-event-hub/azure-event-hub-integration-setup-4-pe.png)

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
{: .copy-code}

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

## Advanced usage: create Downlink converter

Downlink uses for send a message to device. For example information that message from device have been received.

1) At first, lets find **IoT Hub name**:

- Open the [Azure portal](https://portal.azure.com/){:target="_blank"} and navigate to the "**IoT Hub**" resource;
- Go to the "**Built-in endpoints**" page from the context menu;
- Find and copy the value of "**Event Hub-compatible name**" — this represents the **IoT Hub name**.
 
{% include images-gallery.html imageCollection="event-hub-compatible-name" preview="false" %}

<br>
2) To add the Downlink data converter to the Azure Event Hub integration, follow these steps:

- Navigate to the "**Integrations**" page, select the **Azure Event Hub** integration to open its details, and click the "**pencil**" icon to enter editing mode;
- Provide a name for the downlink data converter and click "**Create new converter**";
- Paste the required script into the **Encoder function** section. Click "Add";
- In the **advanced settings**, add the "**IoT Hub name**" in the corresponding field;
- Click "**Apply changes**" to save the configuration.

{% include images-gallery.html imageCollection="adding-downlink-converter" preview="false" %}

The Downlink converter used in this example:

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
**NOTE** If you used another name of device (not TB-D-01) you have to specify in the Downlink converter your device name for **deviceId** field.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Ok, downlink converter ready, integration ready, Let's test it:**

1) After test of uplink, integration have created the device inside Thingsboard, and we need to know for which Rule Chain it connected.
Just go to the Device groups in Thingsboard menu choose **All** and find the device with the name that we have used in the uplink.

{% include images-gallery.html imageCollection="device_groups_all" preview="false" %}

2) Find the name of necessary rule chain in Rule Chain tabs of Thingsboard menu. 

3) In the "Search nodes" field type 'down' and choose in the menu **integration downlink**, drag it to the Canvas. In pop-up you need to specify the name of rule node and choose our integration

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

You can familiarize with Azure Iot Hub using next Link: [Azure IoT Hub Integration](/docs/{{peDocsPrefix}}user-guide/integrations/azure-iot-hub)

## Conclusion

That's it! Good luck in configuring of you IoT devices and dashboards!

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
