{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

HTTP Integration allows converting existing protocols and payload formats to ThingsBoard message format and is useful in several deployment scenarios: 

 - stream device and/or asset data from external system, IoT platform or connectivity provider back-end.
 - stream device and/or asset data from your custom application running in the cloud.
 - connect the existing device with custom HTTP based protocol to ThingsBoard.

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/http-integration.svg"></object>

## Create Uplink Converter

Before creating the integration, you need to create an Uplink converter in Data converters. Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard. 
Click on the “plus” and on “Create new converter”. To view the events, enable Debug. 
In the function decoder field, specify a script to parse and transform data.

{% assign feature = "integrations" %}{% include templates/debug-mode.md %}

{% include templates/tbel-vs-js.md %}

{% capture httpuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/http/http-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/http/http-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="httpuplinkconverterconfig" toggle-spec=httpuplinkconverterconfig %}

Now that the Uplink converter has been created, it is possible to create an integration.

## Create integration

- Go to the "**Integrations center**" section -> "**Integrations**" page and click "plus" button to create new integration. Name it "**HTTP Integration**", select type '**HTTP**'. Click "Next";

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-add-integration-1-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/add-integration-1-pe.png)
{% endif %}

- At this step, you can select a previously created or create a new upnlink converter right in this window. Select the previously created "**HTTP Uplink Converter**". Click "Next";

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-add-integration-2-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/add-integration-2-pe.png)
{% endif %}

- At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "Downlink data converter" field empty. Click "Skip";

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-add-integration-3-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/add-integration-3-pe.png)
{% endif %}

 - At this step, specify your '**Base URL**';

 - Please note down '**HTTP endpoint URL**' we will use this value later;

 - In '**Advanced settings**' enable "**Replace response status from 'No-Content' to 'OK'**";

 - Click "Add" button to save the Integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-add-integration-4-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/add-integration-4-pe.png)
{% endif %}

## Send uplink message

To send an uplink message, you need the previously copied '**HTTP endpoint URL**' from the integration.

Use this command to send the message. Don't forget to replace `$DEVICE_NAME`, `$DEVICE_TYPE` and `$YOUR_HTTP_ENDPOINT_URL` with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"deviceType\":\"$DEVICE_TYPE\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-send-uplink-message-1-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/send-uplink-message-1-pe.png)
{% endif %}

<br>
Go to the "**Events**" tab in your HTTP integration. If you have done everything correctly, you should see one event with the status 'OK'.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-send-uplink-message-3-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/send-uplink-message-3-pe.png)
{% endif %}

{% if docsPrefix == "pe/" %}
<br>
When you sent the message, a new device was created. You should receive a notification about it. To view notification, click on the bell icon in the upper right corner of the screen. 
The notification will contain an action button by clicking which you can go to the details of the new device. Click this button.

![image](/images/user-guide/integrations/http/http-device-2-pe.png)

<br>
Here you will see information about the new device. As well as the telemetry which we sent from the device to the ThingsBoard.

![image](/images/user-guide/integrations/http/http-device-1-pe.png)

<br>
Learn more about **notifications** and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/).

{% endif %}

{% if docsPrefix contains "paas/" %}
<br>
The created device with data can be seen in the section "**Device groups**" -> "**All**".

![image](/images/user-guide/integrations/http/device-1-pe.png)

{% endif %}

{% capture difference %}
**NOTE**
<br>
If the "Allow create devices or assets" checkbox is unchecked, when sending a message to the ThingsBoard with any parameters of the device (or asset), if such a device (asset) does not exist, then device (asset) will not be created.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Also, sent and received data can be viewed in the Uplink converter. In the 'In' and 'Out' blocks of the "**Events**" tab.

{% include images-gallery.html imageCollection="send-uplink-1" %}

<br>
Use the [Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/) to work with data. Dashboards are a modern format for collecting and visualizing data sets. Visibility of data presentation is achieved through a variety of widgets.  
ThingsBoard has examples of several types of dashboards that you can use. Learn more about **Solution templates** [here](/docs/{{docsPrefix}}solution-templates/overview/).

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-solution-templates.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/solution-templates.png)
{% endif %}

### Enable security option

If necessary, you can specify additional parameters, without which the data will not be included in the integration.
To do this, check the Enable security checkbox and click on the Headers filter. Specify an arbitrary value and save the changes.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-enable-security-1-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/security-1-pe.png)
{% endif %}

Once the Headers filter has been configured, it will also need to be specified in the uplink message as follows:

```ruby
-H "test-header:secret"
```

Use this command to send the message with enable security option. Don't forget to replace `$DEVICE_NAME`, `$DEVICE_TYPE`, `$YOUR_HTTP_ENDPOINT_URL` and `$VALUE` with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"deviceType\":\"$DEVICE_TYPE\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json" -H "$VALUE"
```
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-enable-security-2-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/security-2-pe.png)
{% endif %}

## Downlink Converter

Create downlink converter in the "**Data converters**" page. To see events enable 'Debug mode'.

{% include templates/tbel-vs-js.md %}

{% capture httpdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/http/http-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/http/http-downlink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="httpdownlinkconverterconfig" toggle-spec=httpdownlinkconverterconfig %}

Now you need to add the created downlink converter to the integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-add-downlink-converter-1-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/http-add-downlink-converter-1-pe.png)
{% endif %}

<br>
To be able to send downlink over integration we need to modify a "**Root Rule chain**":

- Go to the "**Rule chains**" page and click on the "**Root Rule Chain**" to open it;
- Create an '**integration downlink**' node. Specify your integration in its settings;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-downlink-rule-chain-1-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/downlink-rule-chain-1-pe.png)
{% endif %}

- Set the "**Attributes updated**" and "**Post attributes**" links from the '**message type switch**' node to the '**integration downlink**' node. Apply changes.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-downlink-rule-chain-2-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/downlink-rule-chain-2-pe.png)
{% endif %}

<br>
When the attribute is created or changes are made to the attribute, the downlink message will be sent to the integration.

To see this with an example, we go to the "**Devices**" page. Select your device and navigate to the "**Attributes**" tab. Select **Shared attributes** and click on the "plus" icon to create new attribute.
Then set the attribute name, its value (for example, the key name is 'firmware', value: '01052020.v1.1') and save the data.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-downlink-add-attribute-1-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/http/downlink-add-attribute-1-pe.png)
{% endif %}

<br>
Send the uplink message again. We will receive a response from the ThingsBoard in the terminal:

{% include images-gallery.html imageCollection="downlink-terminal" %}

Received data and data that was sent can be viewed in the downlink converter. In the "In" block of the Events tab, we see what data entered and in the "Out" field, the message sent to the device is displayed:

{% include images-gallery.html imageCollection="downlink-message" %}


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
