{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

The ChirpStack open-source LoRaWAN Network Server stack provides open-source components for LoRaWAN networks. After integrating ChirpStack with ThingsBoard, you can connect, communicate, process and visualize data from devices in the ThingsBoard IoT platform.

## Prerequisites

In order to get data you should have configured instance of ChirpStack Network server stack. In this guide we will use the **configured local instance**, installed by docker compose.
[Click to learn, how to install ChirpStack Network server stack using docker compose](https://www.chirpstack.io/project/guides/docker-compose/){:target="_blank"}.

Also, you must connect the device. How to connect it you can find in [connection guide from the official site](https://www.chirpstack.io/project/guides/connect-device/){:target="_blank"}.

## Add ChirpStack integration

**1. Basic settings**.

Go to the "Integrations" page of the "Integrations center" section. Click "plus" button to start adding new integration. Select type "ChirpStack" integration and click "Next";

{% assign feature = "integrations" %}{% include templates/debug-mode.md %}

![image](https://img.thingsboard.io/user-guide/integrations/chirpstack/chirpstack-integration-setup-1-pe.png)

<br>
**2. Uplink data converter**. 

Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in the ThingsBoard.
Click on the "plus" and on "Create new converter". To view the events, use "Debug mode".

In the function decoder field, specify a script to parse and transform data. For our example, use the default decoder function (or use your own configuration) when adding the integration. Then, click "Next";

{% include templates/tbel-vs-js.md %}

{% capture chirpstackuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/chirpstack/chirpstack-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/chirpstack/chirpstack-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="chirpstackuplinkconverterconfig" toggle-spec=chirpstackuplinkconverterconfig %}

You can always change the decoder function after creating it.

<br>
**3. Downlink data converter**.

At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "Downlink data converter" field empty. Click "Skip";

![image](https://img.thingsboard.io/user-guide/integrations/chirpstack/chirpstack-integration-setup-3-pe.png)

<br>
**4. Connection**.

To complete adding integration, you need to:

- Specify your "Base URL";
- Note down "HTTP endpoint URL" we will use this value later;
- Specify "Application server URL" - address of application server or REST API service. Usually, with a standard installation, only the port is changed to 8090;
- Specify "Application server API Token" - taken from the application server. To get its we need to open ChirpStack application server UI, navigate to the "API keys" page from the left top menu and create new an API key.  

{% include images-gallery.html imageCollection="api-keys" %}

Finally, click "Add" button to complete adding the ChirpStack integration.

![image](https://img.thingsboard.io/user-guide/integrations/chirpstack/chirpstack-integration-setup-4-pe.png)

## Configure integration on your ChirpStack application

In order for data to be transferred from ChirpStack to ThingsBoard, you need to configure an integration in your ChirpStack application.

To create integration on ChirpStack Network server stack, we need to do the following steps:

- Go to the "Applications" page in the left menu of the ChirpStack Network server user interface, and click "Add application" button;
- Named it and click "Submit" button;
- Application created. Now, navigate to the "Integrations" tab;
- Find and add a HTTP integration by clicking "+" icon;
- Fill in the field with the "HTTP endpoint URL" previously copied from the ChirpStack integration in the ThingsBoard. Then, click "Submit" button.

HTTP integration created.

{% include images-gallery.html imageCollection="configure-chirpstack-integration" %}

## Processing uplink message

When your device sends an uplink message, a new device will appear in the ThingsBoard user interface.

{% include images-gallery.html imageCollection="device" %}

You will receive an uplink event in the ChirpStack integration.

{% include images-gallery.html imageCollection="uplink-message-in-integration" %}

Received data can be viewed in the uplink converter. In the "In" and "Out" blocks of the "Events" tab:

{% include images-gallery.html imageCollection="uplink-converter-events" %}

<br>
Use the [Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/) to work with data. Dashboards are a modern format for collecting and visualizing data sets. Visibility of data presentation is achieved through a variety of widgets.  
ThingsBoard has examples of several types of dashboards that you can use. Learn more about **Solution templates** [here](/docs/{{docsPrefix}}solution-templates/overview/).

{% include images-gallery.html imageCollection="solution-templates" %}

## Advanced usage: downlink

For sending downlink messages from the Thingsboard to the device, we need to define a downlink converter. You can customize the downlink according to your configuration.  

### Add downlink converter

Let's consider an example where we send an attribute update message. 

{% include templates/tbel-vs-js.md %}

{% capture chirpstackdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/chirpstack/chirpstack-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/chirpstack/chirpstack-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="chirpstackdownlinkconverterconfig" toggle-spec=chirpstackdownlinkconverterconfig %}

You can add a downlink converter when creating or editing an integration.

### Modify Root Rule Chain

In order to send downlink, we'll use the rule chain to process shared attribute update. Let's import this rule chain:

- Download the [downlink_to_chirpstack.json](/docs/user-guide/integrations/resources/downlink_to_chirpstack.json){:target="_blank"} file;
- Go to the "Rule Chains" page. To import this JSON file, click the "+" icon in the upper right corner of the screen and select "Import rule chain";
- Drag the downloaded JSON file into the import rule chain window. Click "Import";
- The "Downlink to Chirpstack" rule chain will open. Double-click on the "integration downlink" node, specify ChirpStack integration in the "Integration" field and save changes;
- Save rule chain by pressing on checkmark.

{% include images-gallery.html imageCollection="downlink-rule-chain" %}

Now you need to configure the **Root Rule Chain**:

{% include images-gallery.html imageCollection="root-rule-chain" showListImageTitles="true" %}

### Test downlink

A downlink message will be sent to the integration when an attribute is added or modified.

To see this with an example, we go to the "Devices" page. Select your device and navigate to the "Attributes" tab. 
Select "Shared attributes" and click on the "plus" icon to add new attribute. Then enter the attribute name and its value (for example, the key name is 'downlink', value: '01040203') and click "Add".

{% include images-gallery.html imageCollection="add-shared-attribute" %}

Received data and data that was sent can be viewed in the downlink converter. In the "In" block of the "Events" tab, we see what data entered and the "Out" field displays messages to device:

{% include images-gallery.html imageCollection="downlink-events" %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}