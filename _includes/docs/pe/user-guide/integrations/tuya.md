{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

Tuya is an IoT platform that enables device manufacturers and solution providers to connect, manage, and control smart devices through the Tuya Cloud.

The Tuya Cloud Integration in ThingsBoard allows you to:
- Connect Tuya-managed devices to ThingsBoard
- Receive telemetry and device state updates
- Send control commands from ThingsBoard to Tuya devices
- Visualize device data and manage devices centrally

This guide describes how to configure an end-to-end integration using a real device - **Tuya Smart Plug**.   
Also, you can use a [virtual Tuya device](https://developer.tuya.com/en/docs/iot/manage-virtual-devices?id=Ka4725tiyfhg0){:target="_blank"} for testing.

## Prerequisites

Before starting, ensure you have:
- A ThingsBoard account with permission to create integrations 
- A Tuya IoT Platform account 
- At least one Tuya device (physical or virtual)
- Tuya Smart App installed and logged in

## Install smart device control application

The first step is to install the smart device control application (Smart Life, Tuya Smart, or other) on your mobile device and register your Smart Plug device in the application.

{% include images-gallery.html imageCollection="tuya-application-add-device" %}

## Tuya cloud configuration

### Create cloud project

The next step is to register an account on [Tuya](https://www.tuya.com/){:target="_blank"} and create cloud project.
- Go to the **Cloud** tab &#8702; **Project Management**. Click the **Create Cloud Project** button. 
- In a pop-up window, fill required fields and click "Create".
- Make additional settings in the **Authorize API Services** window and click **Authorize**.
- Now your cloud project is created. In this window, remember the **Access ID/Client ID** and **Access Secret/Client Secret** values. These values will be needed during the Tuya Integration setup.

### Enable Tuya message service

Enable the message service to timely receive messages about device registration, data reporting, and status change.
- Go to the **Message Service** tab.
- Toggle to enable Message Service.
- In the pop-up window, set up the messaging service. Configure the settings for **Message Service Type** and **Alert Contact**. Click **Ok**.
- Message Service enabled.

### Link Tuya App account

You need to link your devices to this project using your Smart Life app account.
- Go to **Cloud** tab -> **Project management**. Select your project. 
- Navigate to the **Devices** tab -> select the **Link App Account** tab. Click **Add App Account**.
- Select Tuya Account Authorization option.
- Scan the QR code with Smart Life App to authorize.
- In the pop-up window, select Automatic Link and Click **Ok**.
- Now your devices under the mobile app account have been added to the project.
- Navigate to the "All Devices" tab. You can see your device added to the project.

Make sure you enabled Messaging rule (filter) to receive uplinks. The very basic filter (statusReport) should be sufficient for testing purposes:

{% include images-gallery.html imageCollection="tuya-enable-rules-environment" showListImageTitles="true" %}

## ThingsBoard integration configuration

Let&#39;s move on to setting up the integration between the ThingsBoard platform and Tuya.

<b><font size="4">1. Basic settings</font></b>

- Log in to your ThingsBoard account.
- Go to the **Integrations center** &#8702; **Integrations**.
- Click **+** (**plus**) button.
- From the list, select **Tuya** integration type.
- If you&#39;d like to monitor events and troubleshoot, enable **debug mode**.
  > Enabling debug mode allows you to track events, states, and potential errors related to the execution of . This greatly simplifies development and troubleshooting.
- Click **Next**.

<b><font size="4">2. Uplink data converter</font></b>

Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard.
- Enter a name for the converter. It must be unique. 
- To view the events, enable debug mode. 
- In the **Main decoding configuration** section, provide your own script or use the script below.

{% include templates/tbel-vs-js.md %}

{% capture tuyauplink %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/tuya/tuya-uplink-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/tuya/tuya-uplink-java.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="tuyauplink" toggle-spec=tuyauplink %}

- Once the uplink converter is set up, click **Next**.

<b><font size="4">3. Downlink data converter</font></b>

The Downlink converter transforming outgoing RPC message and then the Integration sends it to your device.   
You can use our example of Downlink Converter, or write your own according to your configuration:

{% capture tuyadownlink %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/tuya/tuya-downlink-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/tuya/tuya-downlink-java.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="tuyadownlink" toggle-spec=tuyadownlink %}

- Click **Next**.

<b><font size="4">4. Connection</font></b>

In the last step, fill in the following fields:
- **Region** - specify your region;
- **Environment**:
  - Choose **PROD** for real devices. 
  - Select **TEST** if you want to connect a **virtual device** to Thingsboard and test its operation before you buy it.
- **Access Id** and **Access Key** is an authorization certificate distributed by Tuya. Paste [previously copied Access Id and Access Key](#create-cloud-project) into the integration.
- Click **Add** to create an integration.

## Rule Chain configuration

When integration configured and ready to use, we need to go to **Rule Chains**, choose **"Root Rule Chain"** and here create rule node **Integration Downlink**. Input some name here, choose earlier created Tuya integration, and tap **Add**.

![image](/images/user-guide/integrations/tuya/tuya-rule-chain-downlink-1-pe.png)

After these steps, we need to tap on a right grey circle of rule node **message type switch** and drag this circle to left side of **Integration Downlink**. In pop-up window add **"RPC Request to Device"** link, and tap **Add**. **Save** the Root Rule Chain.

![image](/images/user-guide/integrations/tuya/tuya-rule-chain-downlink-2-pe.png)

## Uplink message

Once ThingsBoard Tuya Integration has been created, you must disconnect Smart Plug from power and reconnect. The device will send an uplink message with telemetry and attributes to the integration.

Go to **Entities &#8702; Devices**. You should find your device provisioned by the Integration.

In my case it is - **SmartPlug268970**.

## Tuya Smart Plug Dashboard

To visualize the Smart Plug data and test RPC commands, we will create the **Tuya Smart Plug** dashboard.
- Download the [tuya_smart_plug_dashboard.json](/docs/user-guide/resources/tuya_smart_plug_dashboard.json){:target="_blank" download="tuya_smart_plug_dashboard.json"} file.
- Go to the **Dashboards**.
- Click the **+** (**plus**) icon at the upper right corner of the table, and select **Import dashboard**.
- Drag the previously downloaded JSON file into the window. 
- Tap **Import**.

![image](/images/user-guide/integrations/tuya/tuya-dashboard-1-pe.png)

- Open the **Tuya Smart Plug** dashboard.
- Enter **Edit mode**, and update **Entity aliases** - specify your device as target device in the **smartPlug** alias

![image](/images/user-guide/integrations/tuya/tuya-alias-1-pe.png)

{% capture difference %}
**NOTE:** Time series data keys of your device may differ from those presented. If necessary, you will need to replace them, according to the documentation for your device (for each widget).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/user-guide/integrations/tuya/tuya-edit-timeseries-data-keys-pe.png)

<br>
If you have everything configured correctly, you will see Smart Plug status light (on/off) and telemetry for the last hour: voltage, power, and current.

![image](/images/user-guide/integrations/tuya/tuya-dashboard-2-pe.png)

Smart Plug status light is green. Try to switch off the Smart Plug by clicking on the **On/Off Round switch**

![image](/images/user-guide/integrations/tuya/tuya-dashboard-3-pe.png)

The Smart Plug status indicator turns grey. Power consumption stops.

![image](/images/user-guide/integrations/tuya/tuya-dashboard-4-pe.png)

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
