{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

Tuya is a cloud platform that connects a range of devices via the IoT. After integrating Tuya with the ThingsBoard, you can connect, manage, communicate, process and visualize data from your devices in the ThingsBoard IoT platform.

## Tuya Integration Tutorial

In this tutorial we will use a real device - Smart Plug. 

Also, you can use a [**virtual device**](https://developer.tuya.com/en/docs/iot/manage-virtual-devices?id=Ka4725tiyfhg0). Virtual devices help you to perform cloud development without an actual IoT device.

### Prerequisites

The first step is to install the smart device control application (Smart Life, Tuya Smart, or other) on your mobile device and register your Smart Plug device in the application.

{% include images-gallery.html imageCollection="tuya-application-add-device" %}

### Tuya setup

#### Create cloud project

The next step is to register an account on [Tuya](https://www.tuya.com/) and create cloud project.

{% include images-gallery.html imageCollection="tuya-create-cloud-project" showListImageTitles="true" %}

#### Enable Tuya message service

Enable the message service to timely receive messages about device registration, data reporting, and status change.

{% include images-gallery.html imageCollection="tuya-message-service-enable" showListImageTitles="true" %}

#### Link Tuya App Account

You need to link your devices to this project using your Smart Life app account.

{% include images-gallery.html imageCollection="tuya-add-smart-life-app" showListImageTitles="true" %}

<br>
**Note:**
<br>
Make sure you enabled Messaging rule (filter) to receive uplinks. The very basic filter (statusReport) should be sufficient for testing purposes

{% include images-gallery.html imageCollection="tuya-enable-rules-environment" showListImageTitles="true" %}

## Tuya Integration Configuration

### Uplink Converter

Before setting up a **Tuya integration**, you need to create an **Uplink Converter** which is a script for parsing and transforming the data received by Tuya integration to a format that ThingsBoard can consume.

To create an **Uplink Converter**, go to the **Data Converters** section and click **Add new data converter —> Create new converter**, name it **"Tuya Uplink Converter"** and select type **Uplink**. Use debug mode for now.

{% capture difference %}
**NOTE**
<br>
Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when debugging is done.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Choose device payload type to for decoder configuration:**

{% include templates/tbel-vs-js.md %}

{% capture tuyauplink %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/tuya/tuya-uplink-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/tuya/tuya-uplink-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tuyauplink" toggle-spec=tuyauplink %}

### Downlink Converter

The Downlink converter transforming outgoing RPC message and then the Integration sends it to your device.

Create another converter with the name **"Tuya Downlink Converter"** and type **Downlink**. To see events - enable Debug.

{% capture tuyadownlink %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/tuya/tuya-downlink-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/tuya/tuya-downlink-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tuyadownlink" toggle-spec=tuyadownlink %}

### Tuya Integration Setup

Go to **Integrations** section and click Add new integration button. Name it **Tuya Integration**, select type **Tuya**;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-1-pe.png)
{% endif %}

In this step, you can select the recently created **Tuya Uplink Converter** or create a new uplink data converter;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-2-pe.png)
{% endif %}

Add **Tuya Downlink Converter** to the integration or create a new downlink data converter;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-3-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-3-pe.png)
{% endif %}

In the last step, fill in the following fields:

- **Region** - specify your region;

- **Environment:** choose **PROD** or **TEST**. Choose **PROD** for real devices. Select **TEST** if you want to connect a [**virtual device**](https://developer.tuya.com/en/docs/iot/manage-virtual-devices?id=Ka4725tiyfhg0) to Thingsboard and test its operation before you buy it.

- **Access Id** and **Access Key** is an authorization certificate distributed by Tuya. Paste previously copied **Access Id** and **Access Key** into the integration. 

Click "Add" to create an integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-4-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-integration-4-pe.png)
{% endif %}

### Rule Chain configuration

When integration configured and ready to use, we need to go to **Rule Chains**, choose **"Root Rule Chain"** and here create rule node **Integration Downlink**. Input some name here, choose earlier created Tuya integration, and tap **Add**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-rule-chain-downlink-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-rule-chain-downlink-1-pe.png)
{% endif %}

After these steps, we need to tap on a right grey circle of rule node **message type switch** and drag this circle to left side of **Integration Downlink**. In pop-up window add **"RPC Request to Device"** linl, and tap "Add". Save the Root Rule Chain.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-rule-chain-downlink-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-rule-chain-downlink-2-pe.png)
{% endif %}

### Uplink message

Once ThingsBoard **Tuya Integration** has been created, you must disconnect Smart Plug from power and reconnect. The device will send an uplink message with telemetry and attributes to the integration

Go to **Device Groups** -> **All** you should find your device  provisioned by the Integration. In my case it is - **SmartPlug268970**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-integration-create-device-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-integration-create-device-pe.png)
{% endif %}

### Tuya Smart Plug Dashboard

To visualize the Smart Plug data and test RPC commands, we will create the **Tuya Smart Plug** dashboard.

- Download the [**tuya_smart_plug_dashboard.json**](/docs/user-guide/resources/tuya_smart_plug_dashboard.json) file
- Go to the **Dashboard groups** tab. Create dashboard group - **Smart Plug** and go to it.
- To import this JSON file, click the `import` button at the upper right corner of the dashboard group page and drag the previously downloaded file into the window. Tap **Import**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-1-pe.png)
{% endif %}

- Open the **Tuya Smart Plug** dashboard
- **Enter edit mode**, click **Entity aliases** button and add your device to **smartPlug** alias

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-alias-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-alias-1-pe.png)
{% endif %}

{% capture difference %}
**NOTE:**
<br>
timeseries data keys of your device may differ from those presented. If necessary, you will need to replace them, according to the documentation for your device (for each widget).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-edit-timeseries-data-keys-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-edit-timeseries-data-keys-pe.png)
{% endif %}

<br>
If you have everything configured correctly, you will see Smart Plug status light (on/off) and telemetry for the last hour: voltage, power, and current.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-2-pe.png)
{% endif %}

Smart Plug status light is green. Try to switch off the Smart Plug by clicking on the **On/Off Round switch**

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-3-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-3-pe.png)
{% endif %}

The Smart Plug status indicator turns grey. Power consumption stops.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-4-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-dashboard-4-pe.png)
{% endif %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
