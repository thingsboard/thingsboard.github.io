---
layout: docwithnav
title: OPC-UA Integration
description: OPC-UA Integration Guide 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


## Overview

OPC UA Integration allows to stream data from OPC UA server to ThingsBoard and converts device payloads to the ThingsBoard format.

![image](/images/user-guide/integrations/opc-ua-integration.svg)

### OPC-UA Integration Tutorial

In this tutorial we will configure ThingsBoard with OPC-UA Integration 
to get Airconditioners data from [OPC UA C++ Demo Server](https://www.unified-automation.com/downloads/opc-ua-servers/file/download/details/opc-ua-c-demo-server-v161-windows.html)
and ability to switch on/off Airconditioners using Integration downlink feature.

#### Prerequisites

Download and install [OPC UA C++ Demo Server](https://www.unified-automation.com/downloads/opc-ua-servers/file/download/details/opc-ua-c-demo-server-v161-windows.html).
After installation launch **UA Admin Dialog**. 
Verify that **Endpoint URL** is set correctly and remember values of **Endpoint Host** and **Endpoint Port**. These values will be needed during OPC-UA Integration setup. 

![image](/images/user-guide/integrations/opc-ua/opc-ua-server-config.png)

Launch **UaCPPServer**. Console dialog with server endpoints URLs will be opened. 

#### ThingsBoard setup

##### Uplink Data Converter

First, we need to create Uplink Data converter that will be used for receiving messaged from the OPC UA server. The converter should transform incoming payload into the required message format. 
Message must contain **deviceName** and **deviceType**. Those fields are used for submitting data to the correct device. If a device was not found then new device will be created.
Here is how payload from OPC UA integration will look like:

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

We will take **opcUaNode_name** metadata value and map it to the **deviceName** and set **airconditioner** to the **deviceType**.
But you can use another mapping in your specific use cases.
Also, we will take the values of **temperature**, **humidity** and **powerConsumption** fields and use them as a device telemetry.

Go to **Data Converters** and create new **uplink** Converter with this function:
{% highlight javascript %}

var data = decodeToJson(payload);
var deviceName = metadata['opcUaNode_name'];
var deviceType = 'airconditioner';

var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   telemetry: {
   },
   attributes: {
   }
};

if (data.temperature) {
    result.telemetry.temperature = Number(Number(data.temperature).toFixed(2));
}

if (data.humidity) {
    result.telemetry.humidity = Number(Number(data.humidity).toFixed(2));
}

if (data.powerConsumption) {
    result.telemetry.powerConsumption = Number(Number(data.powerConsumption).toFixed(2));
}

if (data.state !== undefined) {
    result.attributes.state = data.state === '1' ? true : false;
}

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   var str = decodeToString(payload);
   var data = JSON.parse(str);
   return data;
}

return result;
{% endhighlight %}

![image](/images/user-guide/integrations/opc-ua/uplink-converter.png)

##### Downlink Data Converter

For sending Downlink messages from the Thingsboard to the OPC UA node, we need to define 
downlink Converter. In general, output from Downlink converter should have the following structure:

{% highlight json %}
[{
    "contentType": "JSON",
    "data": "{\"writeValues\":[],\"callMethods\":[{\"objectId\":\"ns=3;s=AirConditioner_1\",\"methodId\":\"ns=3;s=AirConditioner_1.Stop\",\"args\":[]}]}",
    "metadata": {}
}]
{% endhighlight %}

- **contentType** - defines how data will be encoded {TEXT \| JSON \| BINARY}. In case of OPC UA Integration JSON is used by default. 
- **data** - actual data that will be processed by OPC UA Integration and sent to the target OPC UA nodes:
    - **writeValues** - array of write values methods:
        - **nodeId** - target node in [OPC UA NodeId format](http://documentation.unified-automation.com/uasdkhp/1.0.0/html/_l2_ua_node_ids.html#UaNodeIdsConcept) (`ns=<namespaceIndex>;<identifiertype>=<identifier>`)
        - **value** - value to write
    - **callMethods** - array of call methods:
        - **objectId** - target object in [OPC UA NodeId format](http://documentation.unified-automation.com/uasdkhp/1.0.0/html/_l2_ua_node_ids.html#UaNodeIdsConcept)
        - **methodId** - target method in [OPC UA NodeId format](http://documentation.unified-automation.com/uasdkhp/1.0.0/html/_l2_ua_node_ids.html#UaNodeIdsConcept)
        - **args** - array of method input values
- **metadata** - not used in case of OPC UA Integration and can be empty.

Go to **Data Converters** and create new **downlink** Converter with this function: 

{% highlight javascript %}
var data = {
    writeValues: [],
    callMethods: []
};

if (msgType === 'RPC_CALL_FROM_SERVER_TO_DEVICE') {
    if (msg.method === 'setState') {
        var targetMethod = msg.params === 'true' ? 'Start' : 'Stop';
        var callMethod = {
              objectId: 'ns=3;s=' + metadata['deviceName'],
              methodId: 'ns=3;s=' +metadata['deviceName']+'.'+targetMethod,
              args: []
        };
        data.callMethods.push(callMethod);
    }
}

var result = {
    contentType: "JSON",
    data: JSON.stringify(data),
    metadata: {}
};

return result;
{% endhighlight %}

This converter will process RPC command to device with method **setState** 
and boolean **params** value to call 'Start' or 'Stop' method of Airconditioner. 
Destination node is detected using **deviceName** field of incoming message metadata.

![image](/images/user-guide/integrations/opc-ua/downlink-converter.png)

##### OPC-UA Integration

Next we will create Integration with OPC UA server inside the ThingsBoard.
Open **Integrations** section and add new Integration with type **OPC-UA**

- Name: OPC-UA Airconditioners
- Type: OPC-UA
- Uplink data converter: Airconditioner Uplink
- Downlink data converter: Airconditioner Downlink
- Application name: \<empty\> (client application name)
- Application uri: \<empty\> (client application uri)
- Host: **Endpoint Host** (see [Prerequisites](/docs/user-guide/integrations/opc-ua/#prerequisites))
- Port: **Endpoint Port** (see [Prerequisites](/docs/user-guide/integrations/opc-ua/#prerequisites))
- Scan period in seconds: 10 (how often to rescan OPC UA nodes)
- Timeout in milliseconds: 5000 (the timeout, in milliseconds, before failing a request to OPC UA server)
- Security: None (can be *Basic128Rsa15 / Basic256 / Basic256Sha256 / None*)
- Identity: Anonymous (can be *Anonymous / Username*)
- Mapping:
     - Device Node Pattern: `Objects\.BuildingAutomation\.AirConditioner_\d+$` (regular expression used to match scanned OPC UA Node FQNs/IDs to device name.)
     - MappingType: Fully Qualified Name (can be *Fully Qualified Name* / *ID*)
     - Subscription tags (list of node tags (**Path**) to subscribe with mappings to keys (**Key**) used in output message):
        - state - State
        - temperature - Temperature
        - humidity - Humidity
        - powerConsumption - PowerConsumption

![image](/images/user-guide/integrations/opc-ua/opc-ua-integration-mapping.png)

##### Airconditioners Rule Chain

To demonstrate OPC-UA Integration and Rule Engine capabilities we will create separate Rule Chain
to process uplink and downlink messages related to OPC-UA Integration.
Lets create **Airconditioners** Rule Chain.
Download [**airconditioners.json**](/docs/user-guide/resources/airconditioners.json). Import this json file by pressing `+` 
button in bottom right corner of **Rule Chains** page and selecting **Import rule chain**. 
Then double-click on **Airconditioners** integration downlink node and select **OPC-UA Airconditioners** in **Integrations** field.
Apply and save all changes.   
 
![image](/images/user-guide/integrations/opc-ua/airconditioners-rule-chain.png)
![image](/images/user-guide/integrations/opc-ua/airconditioners-integration-downlink.png)

Open and edit **Root Rule Chain**. 
Add **rule chain** node, select **Airconditioners** Rule Chain and connect it with the Message Type Switch Node using the following relation labels:
**Attributes Updated** / **Post telemetry** / **RPC Request to Device**.

![image](/images/user-guide/integrations/opc-ua/root-rule-chain.png)

##### Airconditioners Dashboard

To visualize Airconditioners data and test RPC commands we will create **Airconditioners** dashboard.
Download [**airconditioners_dashboard.json**](/docs/user-guide/resources/airconditioners_dashboard.json). Import this json file by pressing `+` 
button in bottom right corner of **Dashboards** page and selecting **Import dashboard**. 

#### Validation

Lets verify our integration. Go to **Device groups** page. You should see now **Airconditioners** group.
When you open this group you should see 10 Airconditioner devices. 

![image](/images/user-guide/integrations/opc-ua/airconditioners-group.png)

Open details for one of the Airconditioners and select **Latest Telemetry** tab.
You should see that telemetry values are constantly updated.

![image](/images/user-guide/integrations/opc-ua/airconditioner-latest-telemetry.png)

Goto **Dashboards** and open **Airconditioners** dashboard. 
You should see telemetry for last minute from all 10 airconditioners.   

![image](/images/user-guide/integrations/opc-ua/airconditioners-dashboard.png)

Open Airconditioner details page by clicking on the details button in the Entities widget.

![image](/images/user-guide/integrations/opc-ua/airconditioners-dashboard-click-details.png)

Airconditioner status light should be green. Try to switch off airconditioner by clicking on **Round switch** button.
Airconditioner status light should become gray, temperature and humidity should start growing and power consumption will be stopped. 

![image](/images/user-guide/integrations/opc-ua/airconditioners-dashboard-details.png)

## Next steps

- [Integration Overview](/docs/user-guide/integrations/) 
- [Uplink Converters](/docs/user-guide/integrations/#uplink-data-converter) 
- [DownLink Converters](/docs/user-guide/integrations/#downlink-data-converter) 
- [Rule Engine](/docs/user-guide/rule-engine-2-0/re-getting-started/) 

  
