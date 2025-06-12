---
layout: docwithnav-pe-edge
title: Remote Integrations
description: Remote Integrations Documentation

addConverter:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/add-converter-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/add-converter-step-2.webp


addIntegration:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/add-integration-template-step-1.webp
        title: '1. Open <b>Integration templates</b> menu page. 2. Click the <b>("+")</b> icon to add a new integration.'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/add-integration-template-step-2.webp
        title: '1. Select integration type: <b>HTTP</b>. 2. Input integration name, e.g., <b>HTTP Demo Remote</b>. 3. Click <b>Next</b> button.'
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/add-integration-template-step-3.webp
        title: '1. Click <b>Select existing</b> button. 2. Select uplink data converter: <b>Temperature Converter</b>. 3. Click <b>Next</b> button.'
    3:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/add-integration-template-step-4.webp
        title: 'Enter the converter name, e.g., <b>Temperature converter</b>. 2. Select converter type: <b>Uplink</b>. 3. Insert the code snippet from the example. 4. Click the <b>Add</b> button.'
    4:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/add-integration-template-step-5.webp
        title: 'Verify that our <b>HTTP Demo Remote</b> integration template was created successfully.'

assignIntegration:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-1.webp
        title: 'Go to the <b>Edge management > Instances</b> section and click on the corresponding <b>Edge</b> instance.'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-2.webp
        title: 'On the <b>Edge details</b> page, select the <b>Attributes</b> tab and add click the <b>"Add"</b> button to add a new attribute.'
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-3.webp
        title: 'In the <b>"Add attribute"</b> pop-up window, enter the <b>remoteHttpIntegrationUrl</b> attribute. Set <b>http://IP:port</b> as the remote URL for your HTTP integration and click the <b>Add</b> button.'
    3:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-4.webp
        title: 'Once you added the new attribute, close the <b>Edge details</b> page and stay on the <b>Instances</b> section.'
    4:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-5.webp
        title: 'To assign the integration to the <b>Edge</b>, click the <b>"Manage edge integrations"</b> button.'
    5:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-6.webp
        title: 'Click the <b>Assign to edge</b> button.'
    6:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-7.webp
        title: 'In the <b>"Assign Integrations To Edge"</b> pop-up window, select the target integration from the <b>"Entity list"</b> drop-down menu and click the <b>Assign</b> button.'
    7:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/assign-integration-step-8.webp
        title: 'Open the <b>Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. Click on <b>HTTP Demo Remote</b> integration to check that placeholder is substituted with the value of the attribute.'

copyCredentials:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/copy-credentials.webp

sendUplink:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/send-uplink-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/send-uplink-step-2.webp

device:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/remote/device-1-edge.webp
        title: 'Go to the "<b>Entities</b>" section -> "<b>Devices</b>" page on the Edge to see the created device with data.'

---

* TOC
{:toc}

### Introduction

It is possible to run any **ThingsBoard Integration** remotely from the main **ThingsBoard Edge** instance.
This guide provides step-by-step instructions for launching **ThingsBoard integration remotely**.

We'll demonstrate how to **set up a remote HTTP integration** to push data to **ThingsBoard Edge**.

For more general details, see the [deployment options](/docs/pe/edge/user-guide/integrations/#deployment-options){: target="_blank"}.

#### Prerequisites

* A running **ThingsBoard Edge** instance, already connected to the **Server**, with access as a **Tenant administrator**.

### ThingsBoard Server configuration steps

To create **Converter** and **Integration templates**, log in to the **Cloud** instance as **Tenant administrator**.

Before creating the **Integration template**, create an **Uplink converter template** in the **Converters templates** section.

#### Step 1. Create Uplink Converter

The **uplink data converter** is needed to convert the incoming data from the device into the format required for display on **ThingsBoard Edge**.
* Log in to the **Cloud** and go to the **Edge management > Converter templates** section. To create a Converter template, click the **"Add data converter"** button (the **+** icon) and select the **"Create new converter"** option.
* In the **"Add data converter"** pop-up window:
    * **Name:** Enter the name of the data converter.
    * **Type:** Select the **"Uplink"** converter type from the drop-down menu.
    * To view the events, enable **Debug** mode.
    * **function Decoder:** Enter a script to parse and transform data.
    * Click the **"Add"** button.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

**Example for the Uplink converter:**

```ruby
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder **/
// decode payload to string
// var payloadStr = decodeToString(payload);
// decode payload to JSON
var data = decodeToJson(payload);
var deviceName = data.deviceName;
// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: 'default',
   attributes: {
       model: data.model,
   },
   telemetry: {
       temperature: data.temperature
   }
};
/** Helper functions **/
function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);
   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}
return result;
```
{: .copy-code.expandable-15}

#### Step 2. Create Remote Integration 

Once the **Uplink converter template** is created, you can proceed to create the **Integration**:
Go to the **Edge management > Integration templates** section, click the **"Add new integration"** button (the + icon) and select the **“Create new integration”** option.
* In the **“Add integration”** pop-up window and fill out the **"Basic settings"** block:
  * **Integration type:** Select the **"HTTP"** integration type from the drop-down menu.
  * **Name:** Enter the name of the integration.
* In the **"Uplink data converter"** block:
  * Select the **"Select existing"** tab.
  * **Uplink data converter:** Select the uplink data converter from the drop-down menu.
* The **"Downlink data converter"** block is optional and can be skipped.
* * In the **"Connection"** block:
  * **Base URL:** Set **$\{\{remoteHttpIntegrationUrl\}\}** as the base URL.
  * **Execute remotely:** Toggle this option to enable remote execution of the integration.
* To save the Integration, click the **Add** button.

{% include images-gallery.html imageCollection="addIntegration" %}

#### Step 3. Save Remote Integration credentials.
Later during the **Remote integration installation steps**, we'll use integration credentials. 
* To view and copy the credentials, go to the **Edge management > Integration templates** section and click the integration.
* On the **"Integration details"** page, in the **"Execute remotely"** block copy the **Integration key** and **Secret** by clicking the corresponding button.

{% include images-gallery.html imageCollection="copyCredentials" %}

#### Step 4. Assign Integration to Edge.

Once the converter and integration templates are created, we can assign the **Integration template** to the **Edge**.

Since we are using the **$\{\{remoteHttpIntegrationUrl\}\}** placeholder in the integration configuration, we must first add the **remoteHttpIntegrationUrl** attribute to the **Edge**.
Provide the **IP address** and **port** of your remote *HTTP* integration as the **remoteHttpIntegrationUrl** attribute.
By default, the HTTP remote integration uses port **8082**. 

We will use the same port in the demo, and the **IP address** will be set as the IP of the machine where the remote integration service will be launched.
Once the attribute is added, we are ready to assign the integration and verify that it has been added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

### Remote integration installation steps

#### Choose your platform and install

You can install the ThingsBoard integration via **Docker**, **Debian** or **RPM packages**. Please use one of the following steps.

{% capture selectPlatform %}
Docker on Linux or Mac OS%,%docker%,%templates/edge/integrations/resources/docker-on-linux-mac.md%br%
Docker on Windows%,%docker-windows%,%templates/edge/integrations/resources/docker-on-windows.md%br%
Ubuntu%,%ubuntu%,%templates/edge/integrations/resources/ubuntu.md%br%
CentOS/RHEL Server%,%centos%,%templates/edge/integrations/resources/centos-rhel.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="selectPlatform" toggle-spec=selectPlatform %}

### Remote HTTP integration validation

To send an uplink message, you need an HTTP endpoint URL from the integration.  
Let's log in to the **ThingsBoard Edge** and go to the **Integrations** section. 
Find the HTTP integration and click it. There you can find the HTTP endpoint URL. Click the icon to copy the URL.

{% capture local-deployment %}
**Important!** 

Please make sure that your machine is able to access the machine on which the remote HTTP integration is running, and **the port 8082 is not blocked by any firewall rules**.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

To send the message, use the following command. Replace **$DEVICE_NAME** and **$YOUR_HTTP_ENDPOINT_URL** with the corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

{% include images-gallery.html imageCollection="sendUplink" %}

The created device with data can be viewed in the **Device groups > All** on the **Edge section**:

{% include images-gallery.html imageCollection="device" %}

### Remote integration configuration

Configuring remote integrations is done through the **ThingsBoard** interface, with no special steps required.
Explore the following guides and video tutorials related to the specific integrations:

 - [HTTP](/docs/pe/edge/user-guide/integrations/http/){: target="_blank"}
 - [MQTT](/docs/pe/edge/user-guide/integrations/mqtt/){: target="_blank"}
 - [OPC-UA](/docs/pe/edge/user-guide/integrations/opc-ua/){: target="_blank"}
 - [TCP](/docs/pe/edge/user-guide/integrations/tcp/){: target="_blank"}
 - [UDP](/docs/pe/edge/user-guide/integrations/udp/){: target="_blank"}
 - [CoAP](/docs/pe/edge/user-guide/integrations/coap/){: target="_blank"}

### Remote integration troubleshooting

Check the log files. Their location is specific to the platform and installation package you are using and is indicated in the installation steps.

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}




