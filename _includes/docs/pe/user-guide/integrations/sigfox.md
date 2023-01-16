{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

Sigfox Integration allows to stream data from Sigfox Backend to ThingsBoard and converts binary device payloads to the ThingsBoard format.

Please review the integration diagram to learn more.

 ![image](/images/user-guide/integrations/sigfox-integration.svg)

## SigFox Integration Tutorial

### Prerequisites

In this tutorial, we will use:

{% if docsPrefix == "pe/" %}
- The instance of [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/) installed locally;
  {% endif %}
  {% if docsPrefix == "paas/" %}
- ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
  {% endif %}
 
 - working sigfox device;

 - you must have a [Sigfox](https://www.sigfox.com/) account.

Let’s assume that we have a device **Sigfox-6529853**. Our sensor device publishes "temperature", "humidity", "co2" and  "co2Baseline" readings.

### SigFox Integration Configuration

#### Create Uplink Converter

Before creating the integration, you need to create an Uplink converter in Data converters. Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard. 

Click on the "plus" and on “Create new converter”. To view the events, enable Debug. In the function decoder field, specify a script to parse and transform data.

{% capture difference %}
**NOTE**
<br>
While Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode can significantly increase the disk space used by the database since all the debug data is stored there. It is highly recommended turning the Debug mode off after debugging is complete.  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/tbel-vs-js.md %}

{% capture sigfoxuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/sigfox/sigfox-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/sigfox/sigfox-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="sigfoxuplinkconverterconfig" toggle-spec=sigfoxuplinkconverterconfig %}

#### SigFox Integration Setup

 - Go to **Integrations** section and click **Add new integration button**. Name it **"SigFox Integration"**, select type **SigFox**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-1-paas.png)
{% endif %}

 - Add recently created **SigFox Uplink Converter**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-2-paas.png)
{% endif %}

- For now, leave the “Downlink Data Converter” field blank.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-3-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-3-paas.png)
{% endif %}

 - Copy **SigFox endpoint URL** - we will use it later.

If necessary, you can specify additional parameters, without which the data will not be included in the integration. To do this, check the **Enable security** checkbox and click on the Headers filter. Specify an arbitrary value and save the changes.

 - Click **Add** to create an integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-4-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-integration-setup-4-paas.png)
{% endif %}

### SigFox Configuration

Go to your **Sigfox** account -> **Device type** -> **Callbacks** tab. 

Specify the copied **HTTP endpoint URL** in **URL pattern** line and specify **header filter**.
Add a message body whose structure matches the message from your device.

Click **Add**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/sigfox/sigfox-device-callbacks-1-paas.png)
{% endif %}

After this, the device is ready to send data to Thingsboard.

Once you go to **Device Groups** -> **All** you should find a **Sigfox-6529853** device provisioned by the Integration. 
Click on the device, go to the **Latest Telemetry** tab to see the “temperature” key and its value (-40) there, the “co2Baseline” key and its value (400),the “co2” key and its value (0) and also the “humidity” key and its value (0) there as well.

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

{% capture difference %}
**NOTE**
<br>
If the "Allow create devices or assets" checkbox is unchecked, when sending a message to thingsboard with any parameters of the device (or asset), if such a device (asset) does not exist, then device (asset) will not be created.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

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
