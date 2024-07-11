{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

The ChirpStack open-source LoRaWAN Network Server stack provides open-source components for LoRaWAN networks. After integrating ChirpStack with ThingsBoard, you can connect, communicate, process and visualize data from devices in the ThingsBoard IoT platform.

## Prerequisites

In order to get data you should have configured instance of ChirpStack Network server stack. In this guide we will use the **configured local instance**, installed by docker compose.
[Click to learn, how to install ChirpStack Network server stack using docker compose](https://www.chirpstack.io/project/guides/docker-compose/){:target="_blank"}.  
Also, we have connected device. How to connect it you can find in [Connection guide from the official site](https://www.chirpstack.io/project/guides/connect-device/){:target="_blank"}. When device connected and the data appears in the **DEVICE DATA** tab - we can start to configure the integration to the ThingsBoard.  

## Add ChirpStack integration

**1. Basic settings**.

Go to the "**Integrations**" page of the "**Integrations center**" section. Click "plus" button to start adding new integration. Select type "**ChirpStack**" integration and click "**Next**";

{% capture kafka_please_note %}
**Note:** While debug mode is very useful for development and troubleshooting, leaving it enabled in production mode can significantly increase the disk space used by the database since all debug data is stored there. After debugging is complete, it is highly recommended turning off debug mode.
{% endcapture %}
{% include templates/info-banner.md content=kafka_please_note %}

![image](/images/user-guide/integrations/chirpstack/chirpstack-integration-setup-1-pe.png)

<br>
**2. Uplink data converter**. 

Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in the ThingsBoard.
Click on the **"plus"** and on "**Create new converter**". To view the events, use **Debug mode**. 

In the function decoder field, specify a script to parse and transform data. For our example, use the default decoder function (or use your own configuration) when adding the integration. Then, click "**Next**";

{% include templates/tbel-vs-js.md %}

{% capture chirpstackuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/chirpstack/chirpstack-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/chirpstack/chirpstack-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="chirpstackuplinkconverterconfig" toggle-spec=chirpstackuplinkconverterconfig %}

You can always change the decoder function after creating it.

<br>
**3. Downlink data converter**.

At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "**Downlink data converter**" field empty. Click "**Skip**";

![image](/images/user-guide/integrations/chirpstack/chirpstack-integration-setup-3-pe.png)

<br>
**4. Connection**.

To complete adding integration, you need to:

- Specify your "**Base URL**";
- Note down "**HTTP endpoint URL**" we will use this value later;
- Specify "**Application server URL**" - address of application server or REST API service;
- Specify "**Application server API Token**" - taken from the application server. To get its we need to open ChirpStack application server UI, navigate to the **API keys** page from the left top menu and create new an API key.  

{% include images-gallery.html imageCollection="api-keys" %}

Finally, click "Add" button to complete adding the ChirpStack integration.

![image](/images/user-guide/integrations/chirpstack/chirpstack-integration-setup-4-pe.png)

## Configure integration on your ChirpStack application

In order for data to be transferred from ChirpStack to ThingsBoard, you need to configure an integration in your ChirpStack application.

To create integration on ChirpStack Network server stack, we need to do the following steps:

- Go to the **Applications** page in the left menu of the ChirpStack Network server user interface, and click "**Add application**" button;
- Named it and click "**Submit**" button;
- Application created. Now, navigate to the "**Integrations**" tab;
- Find and add a **HTTP** integration by clicking "**+**" icon;
- Fill in the field with the "**HTTP endpoint URL**" previously copied from the ChirpStack integration in the ThingsBoard.

HTTP integration created.

{% include images-gallery.html imageCollection="configure-chirpstack-integration" %}

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

## Advanced usage: downlink

For sending downlink messages from the Thingsboard to the device, we need to define a downlink converter. You can customize the downlink according to your configuration.  

### Add downlink converter

Let's consider an example where we send an attribute update message. So we should change code in the downlink encoder function under line //downlink data input.

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

You need customize the downlink according to your configuration. To add the downlink converter to the integration, follow this steps:  

{% include images-gallery.html imageCollection="add-downlink-converter" %}

You can do this at the stage of creating an integration or editing it.  

### Modify Root Rule Chain

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



