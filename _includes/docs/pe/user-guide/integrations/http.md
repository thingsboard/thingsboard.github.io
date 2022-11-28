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

One can use either JavaScript or TBEL (ThingsBoard expression language) to develop decoder functions. We recommend utilizing TBEL as it shows much better performance compared to JS.

{% capture httpuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/http/http-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/http/http-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="httpuplinkconverterconfig" toggle-spec=httpuplinkconverterconfig %}

{% capture difference %}
**NOTE**
<br>
While Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode can significantly increase the disk space used by the database since all the debug data is stored there. It is highly recommended turning the Debug mode off after debugging is complete.  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Create integration

Now that the Uplink converter has been created, it is possible to create an integration.

{% include images-gallery.html imageCollection="add-integration" %}

#### Enable security option

If necessary, you can specify additional parameters, without which the data will not be included in the integration.
To do this, check the Enable security checkbox and click on the Headers filter. Specify an arbitrary value and save the changes.

{% include images-gallery.html imageCollection="security" %}

Once the Headers filter has been configured, it will also need to be specified in the uplink message as follows.

```ruby
-H "test-header:secret"
```
{: .copy-code}

{% include images-gallery.html imageCollection="security-1" %}

## Send uplink message

To send an uplink message, you need a HTTP endpoint URL from the integration.  
Let`s go to the Integrations tab in ThingsBoard. Find your HTTP integration and click on it. There you can find the HTTP endpoint URL. Click on the icon to copy the url.

{% include images-gallery.html imageCollection="send-uplink" %}

Use this command to send the message. Replace $DEVICEname, $DEVICEtype and $YOUR_HTTP_ENDPOINT_URL with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICEname\",\"deviceType\":\"$DEVICEtype\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

Use this command to send the message. Replace $DEVICEname, $DEVICEtype, $YOUR_HTTP_ENDPOINT_URL and $VALUE with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICEname\",\"deviceType\":\"$DEVICEtype\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json" -H "$VALUE"
```
{: .copy-code}

The created device with data can be seen in the section **Device groups -> All**

{% include images-gallery.html imageCollection="device" %}

Received data can be viewed in the Uplink converter. In the **“In”** and **“Out”** blocks of the Events tab:

{% include images-gallery.html imageCollection="send-uplink-1" %}

{% capture difference %}
**NOTE**
<br>
If the "Allow create devices or assets" checkbox is unchecked, when sending a message to thingsboard with any parameters of the device (or asset), if such a device (asset) does not exist, then device (asset) will not be created.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Use the Dashboards to work with data. Dashboards are a modern format for collecting and visualizing data sets. Visibility of data presentation is achieved through a variety of widgets.  
ThingsBoard has examples of several types of dashboards that you can use. You can find them in **Solution templates** tab.

{% include images-gallery.html imageCollection="solution-templates" %}

How to work with dashboards [read here](/docs/{{docsPrefix}}user-guide/dashboards/).

## Downlink Converter

Create Downlink in Data converters. To see events enable Debug.

One can use either JavaScript or TBEL (ThingsBoard expression language) to develop decoder functions. We recommend utilizing TBEL as it shows much better performance compared to JS.

{% capture httpdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/http/http-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/http/http-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="httpdownlinkconverterconfig" toggle-spec=httpdownlinkconverterconfig %}

We can send a message to the device from Rule chain using the rule node. 
For example, create an **integration downlink** node and set the “**Attributes updated**” link to it. 
When changes are made to the attribute, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="downlink-rule" %}

To see this with an example, we go to the "Device group" section, the "All" folder. In the "Shared attributes" of our device, create an attribute with the serial number of the device. Click on the "plus" icon.
Then set the attribute name, its value (for example, the key name is firmware, value: 01052020.v1.1) and save the data.

{% include images-gallery.html imageCollection="downlink-add-attribute" %}

Received data and data that was sent can be viewed in the downlink converter. In the “In” block of the Events tab, we see what data entered and in the “Out” field displays messages to device:

{% include images-gallery.html imageCollection="downlink-message" %}

An example of a sent message and a response from ThingsBoard in the terminal:

{% include images-gallery.html imageCollection="downlink-terminal" %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
