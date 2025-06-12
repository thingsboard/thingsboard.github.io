---
layout: docwithnav-pe-edge
title: HTTP Integration
description: HTTP integration guide

downlink-rule:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-rule-1-edge.png
        title: 'Go to the <b>Edge management</b> > <b>Rule chain templates</b> section and click on the "<b>Edge Root Rule Chain</b>" to open it.'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-rule-2-edge.png
        title: 'Create an &#39;<b>integration downlink</b>&#39; node. Specify your integration in the settings;'
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-rule-3-edge.png
        title: 'Set the <b>"Attributes Updated"</b> and <b>"Post attributes"</b> links from the &#39;<b>message type switch</b>&#39; node to the &#39;<b>integration downlink</b>&#39; node. When the attribute is created or changes are made to the attribute, the downlink message is sent to the integration. Apply the changes.'

assign-integration:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/http/assign-integration-1-edge.png
        title: 'Go to the <b>Edge management > Instances</b> section, click on your edge instance to open the <b>"Edge details"</b> window, and navigate to the <b>"Attributes"</b> tab. Click the <b>"plus"</b> button to add a new <b>server attribute</b> to the Edge.'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/http/assign-integration-2-edge.png
        title: 'Enter the new attribute name - <b>"baseUrl</b>, and set the value <b>IP:port</b>. Then click the <b>"Add"</b> button.'
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/http/assign-integration-3-edge.png
        title: 'The <b>"baseUrl"</b> server attribute is now added to the edge.'
    3:
        image: https://img.thingsboard.io/pe/edge/integrations/http/assign-integration-4-edge.png
        title: 'To assign the integration to the Edge, click the <b>"Manage edge integrations"</b> button.'
    4:
        image: https://img.thingsboard.io/pe/edge/integrations/http/assign-integration-5-edge.png
        title: 'Click the <b>"+"</b> button at the top right of the corner. Select your integration from the drop-down menu and click the <b>"Assign"</b> button.'
    5:
        image: https://img.thingsboard.io/pe/edge/integrations/http/assign-integration-6-edge.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. You should see your integration. Click on it.'
    6:
        image: https://img.thingsboard.io/pe/edge/integrations/http/assign-integration-7-edge.png
        title: 'In the <b>"Integration details"</b> window, the <b>${{baseUrl}}</b> placeholder will be replaced with the value of the attribute.'

send-uplink:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/http/send-uplink-1-edge.png
        title: 'Go to the <b>Integrations center > Integrations</b> section. Find your HTTP integration and click on it and copy the <b>"HTTP endpoint URL"</b>. Send the uplink message using the command from the tutorial;'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/http/send-uplink-2-edge.png
        title: 'Go to the <b>"Events"</b> tab. There you will find an uplink message with the status &#39;OK&#39;. To see the message, click the three dots in the <b>"Message"</b> column.'

device:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/http/device-1-edge.png
        title: 'To see the created device with data, go to the <b>Entities > Devices</b> section on the Edge.'

converter-events:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/http/converter-events-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the uplink converter to open the <b>"Data converter details"</b> window, and select the "<b>Events</b>" tab. There you will find an uplink message.'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/http/converter-events-2-edge.png
        title: 'To see the incoming message to the converter, click the three dots in the <b>"In"</b> column.'
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/http/converter-events-3-edge.png
        title: 'To see the outgoing message from the converter, click the three dots in the <b>"Out"</b> column.'

send-again-message:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-responce-1-edge.png
        title: 'Send again the uplink message to the HTTP integration;'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-responce-2-edge.png
        title: 'We will receive a response from the ThingsBoard in the terminal.'

downlink-converter-message:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-converter-message-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the downlink converter to open the <b>"Data converter details"</b> window, and select the <b>"Events"</b> tab. There you will find a downlink message.'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-converter-message-2-edge.png
        title: 'Click the three dots in the <b>In</b> column to see the message that came from the integration to the converter.'
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/http/downlink-converter-message-3-edge.png
        title: 'Click the three dots in the <b>Out</b> column to see the message sent to the device after processing by the converter.'

---

* TOC
{:toc}

{% assign integrationName = "HTTP" %}
{% assign integrationUrl = "http" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

### Overview

**HTTP integration** allows existing protocols and payload formats to be converted to the ThingsBoard Edge message format and is useful in multiple deployment scenarios: 

 - Stream device and/or asset data from an external system, IoT platform or connectivity provider back-end.
 - Stream device and/or asset data from your custom application running in the cloud.
 - Connect the existing device to ThingsBoard Edge using a custom HTTP-based protocol.

### Create converter and integration templates

Only the **ThingsBoard Professional Edition** creates converters and integration templates.
So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup){: target="_blank"} or [**install**](/docs/user-guide/install/pe/installation-options/){: target="_blank"} your own platform instance to log in as a **Tenant administrator**.

Follow the steps below to add the **HTTP integration**:

- Go to the**Edge management > Integration templates** section and click the **"plus"** button to add a new integration. Select the **"HTTP"** type. Name it **"Edge HTTP Integration"**. Then click **Next**;

{% include templates/edge/integrations/debug-mode-info.md %}

![image](https://img.thingsboard.io/pe/edge/integrations/http/add-http-integration-template-1-edge.png)

- The next step is to create an **Uplink data converter**. 

Uplink is needed to convert the data coming from the device into the format needed to display it on ThingsBoard. For this example, use the following code:

{% include templates/tbel-vs-js.md %}

{% capture httpuplinkconverteredgeconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/http/http-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/http/http-uplink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="httpuplinkconverteredgeconfig" toggle-spec=httpuplinkconverteredgeconfig %}

- The next step is to create a **Downlink Converter**.

The **downlink converter** converts the outbound **RPC message** and then the integration sends it to your device.
You can customize a downlink according to your configuration.
Let's consider an example where we send an attribute update message. For this example, use the following code.

{% include templates/tbel-vs-js.md %}

{% capture httpdownlinkconveredgeterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/http/http-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/http/http-downlink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="httpdownlinkconverteredgeconfig" toggle-spec=httpdownlinkconveredgeterconfig %}

- Finally, we go to the "**Connection**" page:

  - Enter the **IP address and port of your Edge instance** in the format 'host:port' as the **Base URL**. Or, you can use the placeholder **$\{\{ATTRIBUTE_KEY\}\}** to replace the integration field with an attribute value from a specific Edge entity.
    In this example, we will use the placeholder **$\{\{baseUrl\}\}** for **Base URL**.
  - Then click the **"Add"** button.

![image](https://img.thingsboard.io/pe/edge/integrations/http/add-http-integration-template-4-edge.png)

**HTTP integration** is created.

### Modify Edge Root Rule Chain for downlinks

We can send a **downlink message** to the device from the **Rule chain** using the rule node. 
To send downlink over integration, we need to modify **Edge Root Rule chain**.

{% capture edge-4 %}
**Please note!** <br>
If you use **earlier versions of Edge**, you cannot create or edit a **Rule Chain** on the **Edge** itself. It must be configured as a template in the **Cloud (Server)**, and then assigned to the **Edge** instance.

Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
{% endcapture %}
{% include templates/info-banner.md content=edge-4 %}

{% include images-gallery.html imageCollection="downlink-rule" showListImageTitles="true" %}

### Assign Integration to Edge

Once the converter and integration templates are created, we can assign the **Integration template** to **Edge**. 
Since we are using placeholder **$\{\{baseUrl\}\}** in the integration configuration, we need to add attribute **baseUrl** to Edge first.
You need to provide **IP address** and **port** of your **Edge** instance as **baseUrl** attribute.
Once the attribute is added, we're ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assign-integration" showListImageTitles="true" %}

### Send uplink message

To send an uplink message, you need the **HTTP endpoint URL** from the integration. 
Log in to **ThingsBoard Edge** and go to the **Integrations center > Integrations** section. Find your **HTTP integration** and click it. Find and copy the "**HTTP endpoint URL"**.

Use the command below to send a message. Remember to replace **$DEVICE_NAME** and **$YOUR_HTTP_ENDPOINT_URL** with the corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code} 

![image](https://img.thingsboard.io/pe/edge/integrations/http/send-uplink-1-edge.png)

Now, select the **"Events"** tab in your HTTP integration. If you have done everything correctly, you will see an uplink message with the status **'OK'**. To see the message itself, click on the three dots in the **"Message"** column.

![image](https://img.thingsboard.io/pe/edge/integrations/http/send-uplink-2-edge.png)

When you sent the message, a new device was created. The created device with data can be seen in the **Entities > Devices** section on the **Edge**:

![image](https://img.thingsboard.io/pe/edge/integrations/http/device-1-edge.png)

You can also view the received data in the **Uplink Converter**. In the **"In"** and **"Out"** blocks of the "**Events**" tab:

{% include images-gallery.html imageCollection="converter-events" %}

### Send downlink message

Now let's check the downlink functionality. 

Let's add a **'firmware'** shared attribute. Go to the **"Devices"** section, select your device, and open the "**Attributes**" tab on the **ThingsBoard Edge**. Select the **"Shared attributes"** scope and click the **"plus"** button to create new attribute.
Then set the **attribute name** and **value** (_e.g., the key name is 'firmware', value: '01052020.v1.1'_), and **save** the data.

![image](https://img.thingsboard.io/pe/edge/integrations/http/add-shared-attribute-1-edge.png)

To make sure that downlink message is sent to integration, check the **Events** tab of the integration:

![image](https://img.thingsboard.io/pe/edge/integrations/http/downlink-message-1-edge.png)

Now we need to send another message to the **HTTP integration**.
Use the same command you used before. Remember to replace **$DEVICE_NAME** and **$YOUR_HTTP_ENDPOINT_URL** with the corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

{% include images-gallery.html imageCollection="send-again-message" %}

The received and sent data can be viewed in the downlink converter. The received data is displayed in **"In"** block of the **"Events"** tab.  
The **"Out"** field shows the message sent to the device:

{% include images-gallery.html imageCollection="downlink-converter-message" %}

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}