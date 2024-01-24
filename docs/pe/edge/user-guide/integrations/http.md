---
layout: docwithnav-pe-edge
title: HTTP Integration
description: HTTP integration guide

downlink-rule:
    0:
        image: /images/pe/edge/integrations/http/downlink-rule-1-edge.png
        title: 'Go to the "<b>Edge management</b>" section -> "<b>Rule chain templates</b>" page and click on the "<b>Edge Root Rule Chain</b>" to open it;'
    1:
        image: /images/pe/edge/integrations/http/downlink-rule-2-edge.png
        title: 'Create an &#39;<b>integration downlink</b>&#39; node. Specify your integration in its settings;'
    2:
        image: /images/pe/edge/integrations/http/downlink-rule-3-edge.png
        title: 'Set the "<b>Attributes Updated</b>" and "<b>Post attributes</b>" links from the &#39;<b>message type switch</b>&#39; node to the &#39;<b>integration downlink</b>&#39; node. When the attribute is created or changes are made to the attribute, the downlink message will be sent to the integration. Apply changes.'

assign-integration:
    0:
        image: /images/pe/edge/integrations/http/assign-integration-1-edge.png
        title: 'Go to the "<b>Edge management</b>" section -> "<b>Instances</b>" page, click on your edge instance to open "Edge details" window, and navigate to the "<b>Attributes</b>" tab. Click "plus" icon to add new <b>server attribute</b> to Edge;'
    1:
        image: /images/pe/edge/integrations/http/assign-integration-2-edge.png
        title: 'Named <b>baseUrl</b> and set value as your Edge <b>IP:port</b>. After, click "Add" button;'
    2:
        image: /images/pe/edge/integrations/http/assign-integration-3-edge.png
        title: 'Added the server attribute &#39;<b>&#39;baseUrl&#39;</b>&#39; to the edge;'
    3:
        image: /images/pe/edge/integrations/http/assign-integration-4-edge.png
        title: 'Now, click "<b>Manage edge integrations</b>" icon of Edge entity;'
    4:
        image: /images/pe/edge/integrations/http/assign-integration-5-edge.png
        title: 'Click the "+" icon at the top right of the corner. Specify your integration and click "Assign" button to assign it to the Edge;'
    5:
        image: /images/pe/edge/integrations/http/assign-integration-6-edge.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open "<b>Integrations center</b>" section -> "<b>Integrations</b>" page. You should see your integration. Click on it;'
    6:
        image: /images/pe/edge/integrations/http/assign-integration-7-edge.png
        title: 'In the "<b>Integration details</b>" window placeholder <b>${{baseUrl}}</b> will be replaced with the value of the attribute.'

send-uplink:
    0:
        image: /images/pe/edge/integrations/http/send-uplink-1-edge.png
        title: 'Go to the "<b>Integrations center</b>" section -> "<b>Integrations</b>" page. Find your HTTP integration and click on it and copy the "<b>HTTP endpoint URL</b>". Send the uplink message using the command from the tutorial;'
    1:
        image: /images/pe/edge/integrations/http/send-uplink-2-edge.png
        title: 'Navigate to the "<b>Events</b>" tab. There you will find an uplink message with the status &#39;OK&#39;. To see the message itself, click the three dots in the "Message" column.'

device:
    0:
        image: /images/pe/edge/integrations/http/device-1-edge.png
        title: 'Go to the "<b>Entities</b>" section -> "<b>Devices</b>" page on the Edge to see the created device with data.'

converter-events:
    0:
        image: /images/pe/edge/integrations/http/converter-events-1-edge.png
        title: 'Go to the "<b>Integrations center</b>" section -> "<b>Data converters</b>" page, click on the uplink converter to open "Data converter details" window, and navigate to the "<b>Events</b>" tab. There you will find an uplink message;'
    1:
        image: /images/pe/edge/integrations/http/converter-events-2-edge.png
        title: 'To see the incoming message to the converter, click the three dots in the &#39;In&#39; column;'
    2:
        image: /images/pe/edge/integrations/http/converter-events-3-edge.png
        title: 'To see the outgoing message from the converter, click the three dots in the &#39;Out&#39; column.'

send-again-message:
    0:
        image: /images/pe/edge/integrations/http/downlink-responce-1-edge.png
        title: 'Send again the uplink message to HTTP integration;'
    1:
        image: /images/pe/edge/integrations/http/downlink-responce-2-edge.png
        title: 'We will receive a response from the ThingsBoard in the terminal.'

downlink-converter-message:
    0:
        image: /images/pe/edge/integrations/http/downlink-converter-message-1-edge.png
        title: 'Go to the "<b>Integrations center</b>" section -> "<b>Data converters</b>" page, click on the downlink converter to open "Data converter details" window, and navigate to the "<b>Events</b>" tab. There you will find a downlink message;'
    1:
        image: /images/pe/edge/integrations/http/downlink-converter-message-2-edge.png
        title: 'Click the three dots in the &#39;In&#39; column to see the message that came from the integration to the converter;'
    2:
        image: /images/pe/edge/integrations/http/downlink-converter-message-3-edge.png
        title: 'Click the three dots in the &#39;Out&#39; column to see the message sent to the device after processing by the converter.'

---

* TOC
{:toc}

{% assign integrationName = "HTTP" %}
{% assign integrationUrl = "http" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

## Overview

HTTP Integration allows converting existing protocols and payload formats to ThingsBoard Edge message format and is useful in several deployment scenarios: 

 - stream device and/or asset data from external system, IoT platform or connectivity provider back-end.
 - stream device and/or asset data from your custom application running in the cloud.
 - connect the existing device with custom HTTP based protocol to ThingsBoard Edge.

## Create converter and integration templates

Converter and integration templates are created only on the **ThingsBoard Professional Edition**.
So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup) or [**install**](/docs/user-guide/install/pe/installation-options/) your own platform instance to log in as Tenant administrator.

Follow the steps below to add the **HTTP integration**:

- Go to "**Edge management**" section -> "**Integration templates**" page and click "plus" button to add new integration. Select type '**HTTP**'. Name it "Edge HTTP integration". Then, click "Next";

{% include templates/edge/integrations/debug-mode-info.md %}

![image](/images/pe/edge/integrations/http/add-http-integration-template-1-edge.png)

- The next step is create an **Uplink data converter**. 

Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard. For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture httpuplinkconverteredgeconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/http/http-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/http/http-uplink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="httpuplinkconverteredgeconfig" toggle-spec=httpuplinkconverteredgeconfig %}

- At the next step is create a **Downlink converter**. 

The Downlink converter transforms outgoing RPC message and then the integration sends it to your device.
You can customize a downlink according to your configuration.
Let’s consider an example where we send an attribute update message. For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture httpdownlinkconveredgeterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/http/http-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/http/http-downlink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="httpdownlinkconverteredgeconfig" toggle-spec=httpdownlinkconveredgeterconfig %}

- Finally, we go to the "**Connection**" page:

  - Enter **IP address and port of your Edge instance** in the format: 'host:port' as '**Base URL**'. Or, you can use placeholder **$\{\{ATTRIBUTE_KEY\}\}** to substitute integration field with attribute value from specific Edge entity. 
  In this example, we will use the placeholder **$\{\{baseUrl\}\}** for '**Base URL**'.
  - Then, click the "Add" button.

![image](/images/pe/edge/integrations/http/add-http-integration-template-4-edge.png)

<br>
HTTP integration is created.

## Modify Edge Root Rule Chain for downlinks

We can send a downlink message to the device from Rule chain using the rule node.
To be able to send downlink over integration we need to modify **"Edge Root Rule chain"** on the **ThingsBoard PE**.

{% include images-gallery.html imageCollection="downlink-rule" showListImageTitles="true" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to **Edge**. 
Because we are using placeholder **$\{\{baseUrl\}\}** in the integration configuration, we need to add attribute '**baseUrl**' to edge first.
You need to provide **IP address** and **port** of your **Edge** instance as '**baseUrl**' attribute.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assign-integration" showListImageTitles="true" %}

## Send uplink message

To send an uplink message, you need '**HTTP endpoint URL**' from the integration. 
Log in to ThingsBoard **Edge** and go to the "**Integrations center**" section -> "**Integrations**" page. Find your HTTP integration and click on it. Find and copy the 'HTTP endpoint URL'.

Use the command below to send a message. Don't forget to replace `$DEVICE_NAME` and `$YOUR_HTTP_ENDPOINT_URL` with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code} 

![image](/images/pe/edge/integrations/http/send-uplink-1-edge.png)

Now, navigate to the "**Events**" tab in your HTTP integration. If you have done everything correctly, you will find an uplink message with the status 'OK'. To see the message itself, click the three dots in the 'Message' column.

![image](/images/pe/edge/integrations/http/send-uplink-2-edge.png)

When you sent the message, a new device was created. The created device with data can be seen in the "**Entities**" section -> "**Devices**" page on the **Edge**:

![image](/images/pe/edge/integrations/http/device-1-edge.png)

Also, received data can be viewed in the uplink converter. In the 'In' and 'Out' blocks of the "**Events**" tab:

{% include images-gallery.html imageCollection="converter-events" %}

## Send downlink message

Now let's check downlink functionality. Let's add a 'firmware' shared attribute. Go to the "**Devices**" page, select your device, and navigate to the "**Attributes**" tab on the **ThingsBoard Edge**. Select the "**Shared attributes**" scope and click on the "plus" icon to create new attribute.
Then set the attribute name, its value (for example, the key name is 'firmware', value: '01052020.v1.1') and save the data.

![image](/images/pe/edge/integrations/http/add-shared-attribute-1-edge.png)

To make sure that downlink message sent to integration you can check "**Events**" tab of the integration:

![image](/images/pe/edge/integrations/http/downlink-message-1-edge.png)

Now we'll need to send again message to HTTP integration.
Please use the same command that was used before. Don't forget to replace `$DEVICE_NAME` and `$YOUR_HTTP_ENDPOINT_URL` with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

{% include images-gallery.html imageCollection="send-again-message" %}

Received data and data that was sent can be viewed in the downlink converter. In the 'In' block of the "**Events**" tab, we see what data entered and in the 'Out' field, the message sent to the device is displayed:

{% include images-gallery.html imageCollection="downlink-converter-message" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}