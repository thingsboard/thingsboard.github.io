{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

Sigfox Integration allows to stream data from Sigfox Backend to ThingsBoard and converts binary device payloads to the ThingsBoard format.

Please review the integration diagram to learn more.

 ![image](/images/user-guide/integrations/sigfox-integration.svg)

## Prerequisites

In this tutorial, we will use:

{% if docsPrefix == "pe/" %}
 - The instance of [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/) installed locally;
  {% endif %}
  {% if docsPrefix == "paas/" %}
 - ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
  {% endif %}

 - a [Sigfox](https://www.sigfox.com/) account;
 - a device registered with Sigfox.

Let’s assume that we have a device *Sigfox-2216792*. Our sensor device publishes "temperature", "humidity", "co2" and  "co2Baseline" readings.

## SigFox Integration Configuration

### Create Uplink Converter

You can сreate an uplink converter in the Data converters page or directly in the integration. Uplink converter is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard.

Go to the **Integration center** -> **Data converters** page and click "plus" button to create a new converter. Name it "**SigFox Uplink Converter**" and select type **Uplink**. To view the events, enable **debug mode**. In the function decoder field, specify a script to parse and transform data.

{% capture difference %}
**NOTE**
<br>
While Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode can significantly increase the disk space used by the database since all the debug data is stored there. It is highly recommended to turn the Debug mode off after debugging is complete.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let’s review sample uplink message from SigFox device:
```json
{
  "device": "BF1327",
  "time": "1661868952",
  "data": "2502af2102462a",
  "seqNumber": "3737"
}
```
 - the "*device*" is responsible for the name of the device;
 - the "*data*" is a telemetry concatenation by two characters, where value "02af" - temperature, "21" - humidity*, "0246" - co2, "2a" - co2Baseline.
<br><br>

{% include templates/tbel-vs-js.md %}

{% capture sigfoxuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/sigfox/sigfox-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/sigfox/sigfox-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="sigfoxuplinkconverterconfig" toggle-spec=sigfoxuplinkconverterconfig %}

### SigFox Integration Setup

 - Go to the **Integrations center** -> **Integrations** page and click "plus" icon to add a new integration. Name it "**SigFox Integration**", select type **SigFox**;

![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-1-pe.png)

{% capture difference %}
**NOTE**
<br>
If the "Allow create devices or assets" checkbox is unchecked, when sending a message to thingsboard with any parameters of the device (or asset), if such a device (asset) does not exist, then device (asset) will not be created.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

 - Add recently created **SigFox Uplink Converter**;

 - ![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-2-pe.png)

- For now, leave the "**Downlink data converter**" field empty;

![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-3-pe.png)

 - Specify your **URL**;
 - Copy **HTTP endpoint URL** - we will use it later;
 - If necessary, you can specify additional parameters, without which the data will not be included in the integration. To do this, check the **Enable security** checkbox and click "Add" entity button. Specify an arbitrary *header* and *value*;
 - Click **Add** to create an integration.

![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-4-pe.png)

## SigFox Configuration

Now we need to set up a **Sigfox account** so that data from our device is sent to the ThingsBoard platform.

Go to your **Sigfox account** -> **Device type** -> enter your device type edit mode. In my case, this is "**thermostats**".

![image](/images/user-guide/integrations/sigfox/sigfox-device-edit-device-type-1-pe.png)

In "**Downlink data**" section specify **callback** downlink mode.

![image](/images/user-guide/integrations/sigfox/sigfox-device-edit-device-type-2-pe.png)

Then go to the **Callbacks** tab.

A **callback** is a custom http request containing your device data, along with other variables, sent to a given platform when the aforesaid device message is received by Sigfox cloud.

Create a callback to connect the Sigfox cloud to your ThingsBoard platform. In the upper right corner, click on the "**New**" button, and select "**Custom callback**".

![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-2-pe.png)

![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-4-pe.png)

Specify **custom payload config**, **header filter**, and paste copied **HTTP endpoint URL** in URL pattern line.
Add a message body whose structure matches the message from your device. Click "**Ok**" to create callback.

![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-1-pe.png)

Payload body:
```json
{
  "device": "{device}",
  "time": "{time}",
  "data":"{data}",
  "seqNumber": "{seqNumber}"
}
```
{: .copy-code}

Make the downlink callback active. Click on the "**Downlink**" icon.

![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-3-pe.png)

After this, the device is ready to send data to Thingsboard. Send an uplink message from the device. 

After you sent the uplink message a new device was created in Thingsboard. You should receive a **notification** about it. To view notification click on the "bell" icon in the upper right corner of the screen.
The notification will contain link to the *Sigfox-2216792* device provisioned by the integration (your device name may differ from the one shown in this example). Learn more about notifications and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/). 

Navigate to this device.

![image](/images/user-guide/integrations/sigfox/sigfox-integration-create-device-3-pe.png)

Here you will see information about the new device. Navigate to the **Latest telemetry** tab to see the keys and their values.

![image](/images/user-guide/integrations/sigfox/sigfox-integration-create-device-1-pe.png)

Go to the "**Attributes**" tab. There you see the attributes of the device and its values.

![image](/images/user-guide/integrations/sigfox/sigfox-integration-create-device-2-pe.png)

Received data can also be viewed in the Uplink converter. In the "*In*" and "*Out*" blocks of the Events tab:

![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter-events-in-pe.png)

![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter-events-out-pe.png)

## Advanced usage: Downlink

Create another converter with the name "**SigFox Downlink Converter**" and select type **Downlink**. To see events - enable **Debug mode**.

{% capture sigfoxdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/sigfox/sigfox-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/sigfox/sigfox-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="sigfoxdownlinkconverterconfig" toggle-spec=sigfoxdownlinkconverterconfig %}

Now you have to add downlink converter to the integration.

![image](/images/user-guide/integrations/sigfox/sigfox-add-downlink-converter-pe.png)

When integration is configured, we need to go to the **Rule chains** page, choose **Root Rule Chain** and here create **integration downlink** node. Enter some name here, select the **SigFox Integration** you created earlier, and click Add.

![image](/images/user-guide/integrations/sigfox/sigfox-rule-chain-downlink-1-pe.png)

After these steps, we need to tap on a right grey circle of the **message type switch** node and drag this circle to left side of the **integration downlink** node. Here choose '**Attribute Update**' and '**Post attributes**', tap "Add" and save Root Rule Chain.

![image](/images/user-guide/integrations/sigfox/sigfox-rule-chain-downlink-2-pe.png)

### Test Downlink

To test downlink, create a **shared attribute** on your device and send some Uplink message on this device.

![image](/images/user-guide/integrations/sigfox/sigfox-create-shared-attribute-pe.png)

Go to your **Sigfox** account -> choose your device -> **Messages** tab. And you will see Downlink message

![image](/images/user-guide/integrations/sigfox/sigfox-downlink-message-2-pe.png)

Go to the **Statistics** tab. You will see a downlink message on the chart.

![image](/images/user-guide/integrations/sigfox/sigfox-statistics-1-pe.png)

## Video tutorial
 
See video tutorial below for step-by-step instruction how to setup SigFox Integration.

<br>
<div id="video"> 
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/T769XqaqeFU" frameborder="0" allowfullscreen></iframe>
 </div>
</div>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
