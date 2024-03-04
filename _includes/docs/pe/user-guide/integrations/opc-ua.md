{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

OPC UA Integration allows you to stream data from the OPC UA server to ThingsBoard and converts the device payloads to the ThingsBoard format.

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/opc-ua-integration.svg"></object>


## OPC-UA Integration Tutorial

In this tutorial, we will configure the integration between ThingsBoard and OPC-UA
to get the Airconditioners data from the [OPC UA C++ Demo Server](https://www.unified-automation.com/downloads/opc-ua-servers.html)
and allow the user to switch on/off any Airconditioner using the Integration downlink feature.

## Prerequisites

{% include templates/integration/opc-ua/opc-ua-server-setup-steps.md %}

## ThingsBoard setup

### Uplink Data Converter

First, we need to create the Uplink Data converter that will be used for receiving the messages from the OPC UA server. The converter should transform the incoming payload into the required message format.
The message must contain the *deviceName* and *deviceType*. These fields are used to submit the data to the correct device. If a device cannot not be found, a new device will be created.
Here is how the payload from the OPC UA integration will look like:

Payload:
{% highlight json %}
{
    "temperature": "72.15819999999641"
}
{% endhighlight %}

Metadata:
{% highlight json %}
{
    "opcUaNode_namespaceIndex": "3",
    "opcUaNode_name": "AirConditioner_1",
    "integrationName": "OPC-UA Airconditioners",
    "opcUaNode_identifier": "AirConditioner_1",
    "opcUaNode_fqn": "Objects.BuildingAutomation.AirConditioner_1"
}
{% endhighlight %}

We will take the *opcUaNode_name* metadata value and map it to the *deviceName* and set the *deviceType* as *airconditioner*.

However, you can use another mapping in your specific use cases.

Also, we will retrieve the values of the *temperature*, *humidity* and *powerConsumption* fields and use them as device telemetries.

<br>
Go to the **Integrations center** section -> **Data converters** page and create a new uplink converter

{% include templates/tbel-vs-js.md %}

{% capture opcuauplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/opc-ua/opc-ua-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/opc-ua/opc-ua-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="opcuauplinkconverterconfig" toggle-spec=opcuauplinkconverterconfig %}

### Downlink Data Converter

For sending Downlink messages from the Thingsboard to the OPC UA node, we need to define a
downlink Converter.

 In general, the output from a Downlink converter should have the following structure:

{% highlight json %}
[{
    "contentType": "JSON",
    "data": "{\"writeValues\":[],\"callMethods\":[{\"objectId\":\"ns=3;s=AirConditioner_1\",\"methodId\":\"ns=3;s=AirConditioner_1.Stop\",\"args\":[]}]}",
    "metadata": {}
}]
{% endhighlight %}

- *contentType* - defines how data will be encoded {TEXT \| JSON \| BINARY}. In case of OPC UA Integration, JSON is used by default.
- *data* - the actual data that will be processed by OPC UA Integration and sent to the target OPC UA nodes:
    - *writeValues* - array of write values methods:
        - *nodeId* - target node in [OPC UA NodeId format](https://documentation.unified-automation.com/uasdkhp/1.4.1/html/_l2_ua_node_ids.html) (`ns=<namespaceIndex>;<identifiertype>=<identifier>`)
        - *value* - value to write
    - *callMethods* - array of call methods:
        - *objectId* - target object in [OPC UA NodeId format](https://documentation.unified-automation.com/uasdkhp/1.4.1/html/_l2_ua_node_ids.html)
        - *methodId* - target method in [OPC UA NodeId format](https://documentation.unified-automation.com/uasdkhp/1.4.1/html/_l2_ua_node_ids.html)
        - *args* - array of method input values
- *metadata* - not used in case of OPC UA Integration and can be empty.

<br>
Go to the **Integrations center** section -> **Data converters** page and create a new downlink converter.

{% include templates/tbel-vs-js.md %}

{% capture opcuadownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/opc-ua/opc-ua-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/opc-ua/opc-ua-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="opcuadownlinkconverterconfig" toggle-spec=opcuadownlinkconverterconfig %}

This converter will process the RPC command to the device using the method *setState*
and a boolean *params* value to call the 'Start' or 'Stop' method of the airconditioner.

Destination node is detected using the *deviceName* field of the incoming message metadata.

### OPC-UA Integration

 - Open the **Integrations center** section -> **Integrations** page and click 'plus' button to create new integration. 
Name it **OPC-UA Integration**, select type **OPC-UA**. Click 'Next';

![image](/images/user-guide/integrations/opc-ua/opc-ua-create-integration-1.png)

 - The next steps is to add the recently created uplink and downlink converters;

![image](/images/user-guide/integrations/opc-ua/opc-ua-create-integration-2.png)

![image](/images/user-guide/integrations/opc-ua/opc-ua-create-integration-3.png)

- Specify host: **Endpoint Host** (see [Prerequisites](#prerequisites));
- Specify port: **Endpoint Port** (see [Prerequisites](#prerequisites));
- Security: **None** (can be *Basic128Rsa15* / *Basic256* / *Basic256Sha256* / *None*);
- Identity: **Anonymous** (can be *Anonymous* / *Username*).

![image](/images/user-guide/integrations/opc-ua/opc-ua-create-integration-4.png)

- Mapping:
     - MappingType: **Fully Qualified Name** (can be *Fully Qualified Name* / *ID*)
     - Device Node Pattern: **Objects\.BuildingAutomation\.AirConditioner_\d+$** (regular expression used to match scanned OPC UA Node FQNs/IDs to device name. 
  In this sample, path on OPC UA Explorer is `Objects/BuildingAutomation/AirConditioner_X`, where X is a number from 1 to N. 
  That's why we use `Objects\.BuildingAutomation\.AirConditioner_\d+$` as regular expression, because `\d+` means any number from 1 to *N*, and `$` means the end of the string)
     - Subscription tags (list of node tags (**Path**) to subscribe with mappings to keys (**Key**) used in the output message):
        - *state* - State;
        - *temperature* - Temperature;
        - *humidity* - Humidity;
        - *powerConsumption* - PowerConsumption.

![image](/images/user-guide/integrations/opc-ua/opc-ua-create-integration-5.png)

### Devices

After created OPC-UA integration, go to the **Entities** section -> **Devices** page. You will see 10 devices created by the integration.

![image](/images/user-guide/integrations/opc-ua/opc-ua-devices-1.png)

Open the details of any Airconditioner and navigate to the **Latest Telemetry** tab.
You will see that telemetry values are frequently updated.

![image](/images/user-guide/integrations/opc-ua/opc-ua-devices-2.png)

### Airconditioners Rule Chain

To demonstrate OPC-UA Integration and Rule Engine capabilities, we will create a separate Rule Chain
to process the uplink and downlink messages related to the OPC-UA Integration.

Let's create the **Airconditioners** Rule Chain.

 - Download the [**airconditioners.json**](/docs/user-guide/resources/airconditioners.json) file;
 - Go to the **Rule Chain** page. To import this JSON file, click the `+` button at the top right corner of the **Rule chains** page and click '**Import rule chain**';
 - Drag and drop downloaded JSON file to the **Import rule chain** window. Click 'Import';
 - The **Airconditioners** rule chain will open. Double-click on the **integration downlink** node and specify **OPC-UA Integration** in the integration field;
 - Save all changes.

{% include images-gallery.html imageCollection="create_rule_chain" %}

 - Open and edit the **Root Rule Chain**;
 - Find a **rule chain** node, drag and drop it to the rule chain. Name it Airconditioners, specify **Airconditioners** rule chain and click 'Add';
 - Tap on a right grey circle of **message type switch** node and drag this circle to left side of **rule chain** node, here lets choose **Attributes Updated**, **Post telemetry** and **RPC Request to Device**;
 - Tap 'Add' and save rule chain.

{% include images-gallery.html imageCollection="create_rule_chain_2" %}

### Airconditioners Dashboard

To visualize the Airconditioners data and test RPC commands, we will create the **Airconditioners** dashboard.

- Download the [**airconditioners_dashboard.json**](/docs/user-guide/resources/airconditioners_dashboard.json) file;
- Go to the **Dashboards** page;
- To import this JSON file, click the `+` button at the top right corner of the **Dashboards** page and select '**Import dashboard**'.
- Drag and drop downloaded JSON file to the **Import dashboard** window. Click 'Import'.

![image](/images/user-guide/integrations/opc-ua/opc-ua-dashboard-1.png)

 - Open the **Airconditioners** dashboard;
 - You will see the telemetry till the last minute from all the 10 airconditioners;
 - Open any Airconditioner details page by clicking on the details button in the Entities widget;

![image](/images/user-guide/integrations/opc-ua/opc-ua-dashboard-2.png)

 - You will find the Airconditioner status light green. Try to switch off the airconditioner by clicking on the **On/Off Round switch**;

![image](/images/user-guide/integrations/opc-ua/opc-ua-dashboard-4.png)

 - The Airconditioner status light will turn into grey, the temperature will start rising, the humidity will start increasing and the power consumption will stop.

![image](/images/user-guide/integrations/opc-ua/opc-ua-dashboard-5.png)

## Video tutorial

See video tutorial below for step-by-step instruction how to setup OPC-UA Integration.

<br>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/KK0gXGXFQ0E" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 

<br>

## See also

- [Integration Overview](/docs/{{peDocsPrefix}}user-guide/integrations/)
- [Uplink Converters](/docs/{{peDocsPrefix}}user-guide/integrations/#uplink-data-converter)
- [DownLink Converters](/docs/{{peDocsPrefix}}user-guide/integrations/#downlink-data-converter)
- [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/)

  
## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
