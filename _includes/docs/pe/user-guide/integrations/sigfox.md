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

 - a [Sigfox](https://www.sigfox.com/) account.

 - a device registered with Sigfox;



Let’s assume that we have a device **Sigfox-2216792**. Our sensor device publishes "temperature", "humidity", "co2" and  "co2Baseline" readings.

## SigFox Integration Configuration

### Create Uplink Converter

You can сreate an **Uplink converter** in the **Data converters** section or directly in the integration. Uplink converter is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard.

Go to **Data Converters** section and Click **Add new data converter** —> **Create new converter**. Name it "**SigFox Uplink Converter**" and select type **Uplink**. To view the events, enable **Debug mode**. In the function decoder field, specify a script to parse and transform data.

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
 - the **"device"** is responsible for the name of the device.
 - the **"data"** is a telemetry concatenation by two characters, where value **"02af"** - temperature, **"21"** - humidity, **"0246"** - co2, **"2a"** - co2Baseline.
<br/><br/>

{% include templates/tbel-vs-js.md %}

{% capture sigfoxuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/sigfox/sigfox-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/sigfox/sigfox-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="sigfoxuplinkconverterconfig" toggle-spec=sigfoxuplinkconverterconfig %}

### SigFox Integration Setup

 - Go to **Integrations** section and click **Add new integration button**. Name it **"SigFox Integration"**, select type **SigFox**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-1-paas.png)
{% endif %}

{% capture difference %}
**NOTE**
<br>
If the "Allow create devices or assets" checkbox is unchecked, when sending a message to thingsboard with any parameters of the device (or asset), if such a device (asset) does not exist, then device (asset) will not be created.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

 - Add recently created **SigFox Uplink Converter**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-2-paas.png)
{% endif %}

- For now, leave the **"Downlink data converter"** field blank.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-3-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-3-paas.png)
{% endif %}

 - Copy **SigFox endpoint URL** - we will use it later.

If necessary, you can specify additional parameters, without which the data will not be included in the integration. To do this, check the **Enable security** checkbox and click "Add" entity button. Specify an arbitrary header and value.

 - Click **Add** to create an integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-4-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-4-paas.png)
{% endif %}

## SigFox Configuration

Now we need to set up a SigFox account so that data from our device is sent to the ThingsBoard platform.

Go to your **Sigfox** account -> **Device type** -> enter your device type edit mode. In my case, this is **"thermostats"**.

![image](/images/user-guide/integrations/sigfox/sigfox-device-edit-device-type-1-pe.png)

In **"Downlink data"** section specify **callback** downlink mode.

![image](/images/user-guide/integrations/sigfox/sigfox-device-edit-device-type-2-pe.png)

Then go to the **Callbacks** tab.

A **callback** is a custom http request containing your device data, along with other variables, sent to a given platform when the aforesaid device message is received by Sigfox cloud.

Create a callback to connect the Sigfox cloud to your ThingsBoard platform. In the upper right corner, click on the "**New**" button, and select "**Custom callback**".

![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-2-pe.png)

![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-4-pe.png)

Specify **custom payload config**, **header filter**, and paste copied **HTTP endpoint URL** in URL pattern line.
Add a message body whose structure matches the message from your device. Click "Ok" to create callback.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-1-paas.png)
{% endif %}

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

Make the downlink callback active. Click on the "Downlink" icon.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-3-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-3-paas.png)
{% endif %}

After this, the device is ready to send data to Thingsboard.

Send an uplink message from the device. Then go to **Device Groups**, find **UC-0023 Sigfox Airwits CO2** device group (your group name may differ from the one shown in this example). In this group you should find the **Sigfox-2216792** device provisioned by the Integration. 
Click on the device, go to the **Latest Telemetry** tab to see the keys and their values.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-create-device-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-create-device-1-paas.png)
{% endif %}

Go to the **"Attributes"** tab. There you see the attributes of the device and its values.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-create-device-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-create-device-2-paas.png)
{% endif %}

Received data can also be viewed in the Uplink converter. In the **"In"** and **"Out"** blocks of the Events tab:

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter-events-in-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter-events-in-paas.png)
{% endif %}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter-events-out-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter-events-out-paas.png)
{% endif %}

## Advanced usage: Downlink

Create another converter with the name "**SigFox Downlink Converter**" and select type **Downlink**. To see events - enable **Debug mode**.

{% capture sigfoxdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/sigfox/sigfox-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/sigfox/sigfox-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="sigfoxdownlinkconverterconfig" toggle-spec=sigfoxdownlinkconverterconfig %}

Now you have to add downlink converter to the integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-add-downlink-converter-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-add-downlink-converter-paas.png)
{% endif %}

When integration is configured, we need to go to **Rule chains**, choose **Root Rule Chain** and here create rule node **Integration Downlink**. Enter some name here, select the SigFox integration you created earlier, and click Add.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-rule-chain-downlink-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-rule-chain-downlink-1-paas.png)
{% endif %}

After these steps, we need to tap on a right grey circle of the rule node **message type switch** and drag this circle to left side of the **Integration Downlink**. Here choose **Attribute Update**, tap "Add" and save Root Rule Chains.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-rule-chain-downlink-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-rule-chain-downlink-2-paas.png)
{% endif %}

### Test Downlink

To test downlink, create some **shared attribute** on your device and send some Uplink message on this device.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-create-shared-attribute-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-create-shared-attribute-paas.png)
{% endif %}

Go to your **Sigfox** account -> choose your device -> **Messages** tab. And you will see Downlink message

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-downlink-message-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-downlink-message-2-paas.png)
{% endif %}

Go to **Statistics** tab. You will see a downlink message on the chart.

![image](/images/user-guide/integrations/sigfox/sigfox-statistics-1-pe.png)

## Video tutorial
 
See video tutorial below for step-by-step instruction how to setup SigFox Integration.

<br/>
<div id="video"> 
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/T769XqaqeFU" frameborder="0" allowfullscreen></iframe>
 </div>
</div>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
