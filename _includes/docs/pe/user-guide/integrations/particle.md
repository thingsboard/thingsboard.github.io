{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

Particle is a cloud platform that connects a range of devices via the IoT.  
After integrating Particle with the ThingsBoard, you can connect, manage, communicate, process, and visualize data from your devices in the ThingsBoard IoT platform.

## Particle Integration Tutorial

In this tutorial, we will use a development board Particle Photon.  
You can use any other Particle device to connect it to Particle and get the data in ThingsBoard.  

### Prerequisites

- To get data, we will need an [account in Particle Console](https://console.particle.io/).  
- To send downlinks we will also need a [Particle CLI](https://docs.particle.io/getting-started/developer-tools/cli/) to generate access token.  

### Particle Photon setup

At first, we need to connect device to Particle Console to get any data from it.  
To do this, we need to the following steps from [official guide](https://docs.particle.io/quickstart/photon/#connect-your-photon):
1. **Power On Your Device**:
   Plug the USB cable into your power source. (Your computer works perfectly for this purpose.) Your Particle device does not need your computer to connect to Wi-Fi.  
   You could just as easily power your device with a power brick, a battery shield, or another power source wired to the VIN pin.  
   As soon as it is plugged in, the RGB LED on your device should begin blinking blue.  
   If your device is not blinking blue, **hold** down the **SETUP** button.
2. **Connect your Photon to the Internet using the setup web application**: 
   -  Go to **[setup.particle.io](https://setup.particle.io/)**
   -  Click on **Setup a Photon**
   -  After clicking on NEXT, you should be presented with a file (**photonsetup.html**)
   -  Open the file

After connecting the device, it will become visible on the Particle console. This will allow you to create an integration to receive data on ThingsBoard.  

![Devices list](https://img.thingsboard.io/user-guide/integrations/particle/particle-console-device-list.png)

## ThingsBoard Integration Configuration

To receive data from Particle Console, we need to create an integration on ThingsBoard and get a URL for Particle Integration.  

### Uplink Converter

Before setting up a **Particle integration**, you need to create an **Uplink Converter**, a script for parsing and transforming the data received by Particle integration to a format that ThingsBoard can consume.

To create an **Uplink Converter**, go to the **Data Converters** section and click **Add new data converter** -> **Create new converter**, name it **"Uplink data converter for Particle Integration"** and select type **Uplink**. Use debug mode for now.

{% capture difference %}
**NOTE**
<br>
Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space used by the database because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when debugging is done.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/tbel-vs-js.md %}

{% capture particleuplink %}
TBEL<small>Recommended</small>%,%tbel%,%templates/integration/particle/particle-uplink-tbel.md%br%
JavaScript<small></small>%,%js%,%templates/integration/particle/particle-uplink-js.md{% endcapture %}

{% include content-toggle.html content-toggle-id="particleuplink" toggle-spec=particleuplink %}

### Downlink Configuration (Optional)

#### Create downlink converter

The Downlink converter transforms outgoing RPC message, and then the Integration sends it to your device.

Create another converter named **"Downlink data converter for Particle Integration"**, and type **Downlink**. To see events - enable Debug.

{% capture particledownlink %}
TBEL<small>Recommended</small>%,%tbel%,%templates/integration/particle/particle-downlink-tbel.md%br%
JavaScript<small></small>%,%js%,%templates/integration/particle/particle-downlink-js.md{% endcapture %}

{% include content-toggle.html content-toggle-id="particledownlink" toggle-spec=particledownlink %}

#### Create access token in Particle CLI

To send message to a device, we will need an access token. To create it, you can use [Particle CLI](https://docs.particle.io/getting-started/developer-tools/cli/).  
To install it, you can use the following command:  
```bash
bash <( curl -sL https://particle.io/install-cli )
```
{:.copy-code}

Then, according to [official documentation](https://docs.particle.io/reference/developer-tools/cli/#particle-login), you will need to login using the following command:  
```bash
particle login
```
{:.copy-code}

![Login](https://img.thingsboard.io/user-guide/integrations/particle/cli-login.png)

After logging in, you will need to [create an access token](https://docs.particle.io/reference/developer-tools/cli/#particle-token-create).  
You can do this using one of the following commands:  
-  Create token that will never be expired (**Useful for integration**) - 
   ```bash
   particle token create --never-expires
   ```
   {:.copy-code}
-  Create token with default expiration time (**90 days**) - 
   ```bash
   particle token create
   ```
   {:.copy-code}
![Login](https://img.thingsboard.io/user-guide/integrations/particle/cli-token-created.png)

Save created token, we will need it in the next step.  

### Particle Integration Setup

{% assign createIntegrationUsingWizard = '
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/tb-create-integration.png,
      title: Go to **Integrations** section and click Add new integration button. Name it **Particle Integration**, and select type **Particle**.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/tb-select-uplink.png,
      title: Now, you can select the recently created **Uplink data Converter for Particle Integration**. Click **Next**.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/tb-select-downlink.png,
      title: If you added a downlink converter, select it. Click **Next**.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/tb-create-integration-configuration.png,
      title: If you added a downlink converter and created a token - toggle **Allow downlink** and paste your access token. Click **Add** to create integration. 
'
%}

Now, we should create an integration in ThingsBoard. To do this, you can follow next steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createIntegrationUsingWizard %}

### Integration on particle.io

To receive incoming data from Particle cloud, we need to configure an integration on Particle CLI.  
To do this, please follow next steps:  

{% assign createParticleCloudIntegration = '
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-console-integrations-2.png,
      title: Go to **Integrations** section and click "**Add new integration**" button.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-console-integrations-3.png,
      title: Click on the **Webhook**.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-console-integrations-4.png,
      title: Fill in all required fields. Then click **Create webhook**.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-console-integrations-5.png,
      title: Your integration was created successfully.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createParticleCloudIntegration %}

### Uplink message

Once integration is created and any message arrives to it - you will be able to see a new device in your **Devices**.

![image](https://img.thingsboard.io/user-guide/integrations/particle/tb-new-device-created.png)

### Rule Chain configuration

When integration is configured and ready to use, we need to go to **Rule Chains**, choose **"Root Rule Chain"** and create rule node **Integration Downlink**. Input some name here, choose earlier created Particle integration, and tap **Add**.

![image](https://img.thingsboard.io/user-guide/integrations/particle/tb-create-downlink-rule-node.png)

After these steps, we need to tap on a right grey square of rule node **message type switch** and drag this square to left side of **Integration Downlink**. In pop-up window, add **"RPC Request to Device"** relation and tap "Add".

![image](https://img.thingsboard.io/user-guide/integrations/particle/tb-root-rule-chain.png)

Click on check mark in bottom right corner of the screen to save the Root Rule Chain.

### Downlink message to device from dashboard

To process command on device, we will use an example app **Web-Connected LED** from [Particle WebIDE](https://build.particle.io/build).  

![Particle WebIDE](https://img.thingsboard.io/user-guide/integrations/particle/particle-webide-example.png)  

Click on **Use this example** and thunder icon to flash it to the device.  

#### Configure dashboard

Let's return to ThingsBoard and configure the dashboard to control device.  
To demonstrate how to send a command to the device, we will use a **Switch Control Widget**. To use it, you can follow next steps:  
- Click on **Edit mode** button to enable edit mode.  
- Open existing or create a new dashboard.  
- Add new alias (Click on **Aliases** button -> **Add alias** -> Put the name for alias and select created device).  
- Add switch control widget (Click on **Add widget** button -> Click on **Control widgets** bundle -> Click on **Switch Control**).  
- Select your entity alias.  
- Open tab **Appearance** -> Change value for field "Retrieve value using method" to **Don't retrieve**.  
- Change "RPC set value method" to **led**.  
- Paste to the convert value function the following code:  
  ```javascript
  return value ? "on" : "off";
  ```
  {:.copy-code}
- Click on **Add** button to save a widget.  
- Click on save button to save a dashboard.

Now, you can toggle the button and LED on your Photon should change it&#39;s led state.  
If no - check that your device is connected to Particle and connection is stable.

{% assign createParticleDashboard = '
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-add-widget-1.png,
      title: Go to the "**Dashboards**" page, create a new dashboard and select "**Switch Control**" widget from the "**Control Widgets**" bundle.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-add-widget-2.png,
      title: Add new alias with previously created device. Then navigate to the "**Appearance**" tab.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-add-widget-3.png,
      title: Change retrieve value to "**Don&#39;t retrieve**" and change "***RPC set value method***" to "**led**". Then paste the convert value function copied from the documentation. Click "**Add**", then save dashboard.
   ===
      image: https://img.thingsboard.io/user-guide/integrations/particle/particle-add-widget-5.png,
      title: Now toggle the button and LED on your Photon should change it&#39;s led state.
'
%}

{% include images-gallery.liquid imageCollection=createParticleDashboard %}

Read more about dashboards [here](/docs/{{docsPrefix}}user-guide/dashboards/).

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}