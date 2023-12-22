{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

KPN Things is an IoT (Internet of Things) platform provided by KPN, a telecommunications company.  
This platform allows users to connect and manage their IoT devices, facilitating communication and data exchange between these devices and the cloud.  
After integrating KPN Things with the ThingsBoard, you can connect, manage, communicate, process and visualize data from your devices in the ThingsBoard IoT platform.

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/http-integration.svg"></object>

## Create integration

- Go to **Integrations center** section -> **Integrations** page and click "plus" button to create new integration. Select type **KPN**. Click "Next";

![image](/images/user-guide/integrations/kpn/kpn-add-integration-1-pe.png)

- At this step, choose "Create new" uplink converter. The new converter will contain necessary code to convert incoming data and click "Next";

![image](/images/user-guide/integrations/kpn/kpn-add-integration-2-pe.png)

- At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "Downlink data converter" field empty. Click "Skip";

![image](/images/user-guide/integrations/kpn/kpn-add-integration-3-pe.png)

- At this step, specify your **Base URL**;

- Please note down **HTTP endpoint URL** we will use this value later;

- Click **Add** button to save the Integration.

![image](/images/user-guide/integrations/kpn/kpn-add-integration-4-pe.png)

We have pre-configured integration on ThingsBoard, but we need to configure KPN Things to send data to ThingsBoard.

## Configure KPN Things

To configure KPN Things, you need to open [KPN Things Portal](https://portal.kpnthings.com/) and log in to your account.
*The KPN Things Portal interface may change in the future.*

**Add new device**:

- Go to the "Things manager" tab, and click on the "Add new device";
- Choose the "Device Simulator", set a name for your device, and click on the "Add device" button;
- Install and open the "KPN Things Device simulator" app on your phone. Follow the instructions on your phone to scan this QR code. Then, click on the "Add Network Info" button;
- KPN Internet Network is created. Now, click on the "Finish" button;
 
{% include images-gallery.html imageCollection="kpn-things-configure-1" %}

**Link the device to the "Flow":**

- Go to the "Flows" in left menu and click on the "My first flow" row;
- Click on the "Link Device" button in the "Devices" row;
- Click on the "Link" button next to the device you created earlier;
- The device has been successfully linked to the "Flow". Now, click on the "My Device" row;

{% include images-gallery.html imageCollection="kpn-things-configure-2" %}

**Data processing setup for my flow:**

- A "Device & Connectivity detail" page will open. Now, go to the "Flows" tab, and click on "My first flow" row;
- Click on the "Data Processing" row to open "Data Processing details" page;
- Change the switch to enabled state for "Decoders" section;

{% include images-gallery.html imageCollection="kpn-things-configure-3" %}

**Add new Destination:**

- Go to "Destinations" in left menu and click on the "Add new Destination" button;
- Find the "ThingsBoard" destination type, and click on "Choose ThingsBoard" button;
- Set a name for your destination. 
- Paste "HTTP endpoint URL" from ThingsBoard integration page to "HTTP endpoint URL" field. 
- Now, click on the "Generate" button, and save generated value. We will use it on ThingsBoard. 
- Click on the "Add ThingsBoard Destination" button;

{% include images-gallery.html imageCollection="kpn-things-configure-4" %}

**Link the "Destination" to the "Flow":**

- Go to the "Flows" -> "My first flow" and click on the "Link Destination" button in the "Destinations" row;
- Click on the "Link" button next to the destination you created earlier;
- The "Destination" has been successfully linked to the Flow.

{% include images-gallery.html imageCollection="kpn-things-configure-5" %}



## Update integration

In order to validate the sender we can add a token to integration on ThingsBoard. To do this, please follow the steps below:
- Go to Integrations center section -> Integrations page and click on the integration you created earlier. Click on "Edit" button to enter edit mode.

![image](/images/user-guide/integrations/kpn/kpn-add-integration-5-pe.png)

- Switch "Enable security (Headers filter)" toggle to enabled state and click "Add" button in "Headers filter" section.

![image](/images/user-guide/integrations/kpn/kpn-add-integration-6-pe.png)

- Put "X-Things-Secret" to "Header" field and generated token to "Value" field. Finally, apply changes.

![image](/images/user-guide/integrations/kpn/kpn-add-integration-7-pe.png)

That's all that is needed to configured integration between KPN Things and ThingsBoard. Now we can send data from KPN Things to ThingsBoard.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}