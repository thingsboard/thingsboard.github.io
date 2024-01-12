---
layout: docwithnav-pe-edge
title: OPC-UA Integration
description: OPC-UA Integration Guide
addConverter:
    0:
        image: /images/pe/edge/integrations/opc-ua/add-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/opc-ua/add-converter-step-2.png

modifyConverter:
    0:
        image: /images/pe/edge/integrations/opc-ua/modify-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/opc-ua/modify-converter-step-2.png

addDownlink:
    0:
        image: /images/pe/edge/integrations/opc-ua/add-downlink-step-1.png
    1:
        image: /images/pe/edge/integrations/opc-ua/add-downlink-step-2.png

addIntegration:
    0:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-1.png
    1:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-2.png
    2:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-3.png
    3:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-4.png

downlinkRule:
    0:
        image: /images/pe/edge/integrations/opc-ua/downlink-rule-step-1.png
    1:
        image: /images/pe/edge/integrations/opc-ua/downlink-rule-step-2.png
    2:
        image: /images/pe/edge/integrations/opc-ua/downlink-rule-step-3.png

airconditionersDashboard:
    0:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-1.png
        title: 'Open Dashboard groups and create new <b>Airconditioner</b> group'
    1:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-2.png
        title: 'Open newly created <b>Airconditioner</b> group'
    2:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-3.png
        title: 'Click import icon and browse recently downloaded airconditioners_dashboard.json file. Click Import button'
    3:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-4.png
        title: 'Go to Edge instance and click on Manage Dashboard icon'
    4:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-5.png
        title: 'Assign <b>Airconditioner</b> group to the edge'

assignIntegration:
    0:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-1.png
        title: 'Add <b>endpointHost</b> attribute to Edge and set value as your Edge <b>192.168.2.153</b>'
    1:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-2.png
        title: 'Click <b>Manage Integrations</b> button of Edge entity'
    2:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-3.png
        title: 'Assign Integration to the Edge'
    3:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-4.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open Integrations page - placeholder is going to be replaced by attribute value'

device:
    0:
        image: /images/pe/edge/integrations/opc-ua/device.png

deviceTelemetry:
    0:
        image: /images/pe/edge/integrations/opc-ua/device-telemetry.png

airconditionersDashboardOnEdge:
    0:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-on-edge-step-1.png
    1:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-on-edge-step-2.png

airconditionersDetails:
    0:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-details.png

rpcDownlink:
    0:
        image: /images/pe/edge/integrations/opc-ua/rpc-downlink-step-1.png
    1:
        image: /images/pe/edge/integrations/opc-ua/rpc-downlink-step-2.png

---

* TOC
{:toc}

{% assign integrationName = "OPC-UA" %}
{% assign integrationUrl = "opc-ua" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

## Overview

OPC UA Integration allows you to stream data from the OPC UA server to ThingsBoard Edge and converts the device payloads to the ThingsBoard Edge format.

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/opc-ua-integration.svg"></object>

In this tutorial, we will configure the integration between ThingsBoard Edge and OPC-UA 
to get the Airconditioners data from the [OPC UA C++ Demo Server](https://www.unified-automation.com/downloads/opc-ua-servers.html) 
and allow the user to switch on/off any Airconditioner using the Integration downlink feature.

### Prerequisites

{% include templates/integration/opc-ua/opc-ua-server-setup-steps.md %}

## Create Converter templates

Converter and Integration templates are created on the **Cloud**, so please log in as Tenant administrator to cloud instance.

### Uplink Converter template

Before creating the Integration template, you need to create an Uplink and Downlink converter templates in **Converters templates** page.

**Uplink Converter** is a script for parsing and transforming the data received by OPC UA integration.
**Downlink Converter** parses and transforms the data sent from ThingsBoard Edge to the format that is consumed by existing device(s).

First, we need to create the Uplink Data converter that will be used for receiving the messages from the OPC UA server. 
The converter should transform the incoming payload into the required message format.
The result message must contain the **deviceName** and **deviceType**. 
These fields are used to submit the data to the correct device. 
If a device cannot not be found, a new device will be created.
Here is a sample of the payload from the OPC UA Server:

Payload:
```ruby
{
    "temperature": "72.15819999999641"
}
```

Metadata:
```ruby
{
    "opcUaNode_namespaceIndex": "3",
    "opcUaNode_name": "AirConditioner_1",
    "integrationName": "OPC-UA Airconditioners",
    "opcUaNode_identifier": "AirConditioner_1",
    "opcUaNode_fqn": "Objects.BuildingAutomation.AirConditioner_1"
}
```

We will take the **opcUaNode_name** metadata value and map it to the **deviceName** and set the **deviceType** as **default**.

However, you can use another mapping in your specific use cases.

Also, we will retrieve the values of the **temperature**, **humidity** and **powerConsumption** fields and use them as device telemetries.

Click on the "plus" and on "Create new converter". To view the events, enable Debug.
In the function decoder field, specify a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

**Example for the Uplink converter:**

```ruby
/** Decoder **/

var data = decodeToJson(payload);
var deviceName = metadata['opcUaNode_name'];
var deviceType = 'default';

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
```
{: .copy-code}

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard Edge can consume.
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

You can change the decoder function while creating the converter or after creating it.
If the converter has already been created, then click on the 'pencil' icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function.
Save changes by clicking on the 'checkmark' icon.

{% include images-gallery.html imageCollection="modifyConverter" %}

### Downlink Converter template

For sending Downlink messages from the ThingsBoard Edge to the OPC UA node, we need to define a Downlink Converter.

In general, the output from a Downlink converter should have the following structure:

```ruby
[{
"contentType": "JSON",
"data": "{\"writeValues\":[],\"callMethods\":[{\"objectId\":\"ns=3;s=AirConditioner_1\",\"methodId\":\"ns=3;s=AirConditioner_1.Stop\",\"args\":[]}]}",
"metadata": {}
}]
```

- **contentType** - defines how data will be encoded {TEXT \| JSON \| BINARY}. In case of OPC UA Integration, JSON is used by default.
- **data** - the actual data that will be processed by OPC UA Integration and sent to the target OPC UA nodes:
    - **writeValues** - array of write values methods [OPC UA Write Value format](https://documentation.unified-automation.com/uasdkc/1.9.3/html/structOpcUa__WriteValue.html):
        - **nodeId** - target node (`ns=<namespaceIndex>;<identifiertype>=<identifier>`)
        - **value** - value to write
    - **callMethods** - array of call methods [OPC UA Call Methods format](https://documentation.unified-automation.com/uasdkc/1.9.3/html/structOpcUa__CallMethodRequest.html):
        - **objectId** - target object
        - **methodId** - target method
        - **args** - array of method input values
- **metadata** - not used in case of OPC UA Integration and can be empty.


You can customize a downlink according to your configuration.
This converter will process the RPC command to the device using the method **setState** and a boolean **params** value to call the 'Start' or 'Stop' method of the Airconditioner.
Destination node is detected using the **deviceName** field of the incoming message metadata.

Create Downlink in **Converter templates** page as well. To see events select **Debug** checkbox.

{% include images-gallery.html imageCollection="addDownlink" %}

An example of downlink converter:

```ruby
/** Encoder **/

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
```
{: .copy-code}

## Create Integration template

Now that the Uplink and Downlink converter templates have been created, it is possible to create an integration.
Go to **Integration templates** section and click **Add new integration** button. Name it **OPC-UA Airconditioners**, select type **OPC-UA**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Here are the other integration field values:
- Application name: \<empty\> (client application name)
- Application uri: \<empty\> (client application uri)
- Host: **$\{\{endpointHost\}\}** (we will add Edge attribute **endpointHost** in next steps)
- Port: **Endpoint Port** (see [Prerequisites](#prerequisites))
- Scan period in seconds: 10 (how often to rescan OPC UA nodes)
- Timeout in milliseconds: 5000 (the timeout, in milliseconds, before failing a request to OPC UA server)
- Security: None (can be *Basic128Rsa15 / Basic256 / Basic256Sha256 / None*)
- Identity: Anonymous (can be *Anonymous / Username*)
- Mapping:
    - MappingType: Fully Qualified Name (can be *Fully Qualified Name* / *ID*)
    - Device Node Pattern: `Objects\.BuildingAutomation\.AirConditioner_\d+$` (regular expression used to match scanned OPC UA Node FQNs/IDs to device name. 
  In this sample, path on OPC UA Explorer is `Objects/BuildingAutomation/AirConditioner_X`, where X is a number from 1 to *N*. 
  That's why we use `Objects\.BuildingAutomation\.AirConditioner_\d+$` as regular expression, because `\d+` means any number from 1 to *N*, and `$` means the end of the string)
    - Subscription tags (list of node tags (**Path**) to subscribe with mappings to keys (**Key**) used in the output message):
        - state - State
        - temperature - Temperature
        - humidity - Humidity
        - powerConsumption - PowerConsumption

Click **Add** to save the Integration.

{% include images-gallery.html imageCollection="addIntegration" %}

## Modify Edge Root Rule chain for Downlinks

We can send a downlink message to the device from Rule chain using the rule node.
To be able to send downlink over integration we need to modify **'Edge Root Rule chain'** on the cloud.
We'll need to add two rule nodes - **originator fields** and **integration downlink** nodes.
Set **'RPC Request to Device'** link to **originator fields** and configure to add originator name and type to the message metadata - in the **downlink converter** name of the device will be used to set proper *OPC-UA* node.
And then add **Success** link from **originator fields** node to **integration downlink** node.
When RPC request is going to be triggered to a device on the Edge, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

## Airconditioners Dashboard

To visualize the Airconditioners data and test RPC commands, we will create the **Airconditioners** dashboard and assign it to edge.
First, please download the [**airconditioners_dashboard.json**](/docs/pe/edge/user-guide/resources/airconditioners_dashboard.json) file.

{% include images-gallery.html imageCollection="airconditionersDashboard" showListImageTitles="true" %}

## Assign Integration to Edge

Once converters and integration templates are created, we can assign Integration template to Edge.
Because we are using placeholder **$\{\{endpointHost\}\}** in the integration configuration, we need to add attribute **endpointHost** to edge first.
You need to provide **Endpoint Host** of the OPC-UA Server (see [Prerequisites](#prerequisites)).
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

## Validation

Let's verify that integration was successfully started on Edge and connection to OPC-UA Demo Server was established.  

- Go to the **Device groups** page. You will see the **Airconditioners** group.
- When you open this group, you will see the 10 Airconditioner devices.

{% include images-gallery.html imageCollection="device" %}

- Open the details of one of the Airconditioners and select the **Latest Telemetry** tab.
- You will see that telemetry values are frequently updated.

{% include images-gallery.html imageCollection="deviceTelemetry" %}

- Go to **Dashboards** and open the **Airconditioners** dashboard.
- You will see the telemetry till the last minute from all the 10 airconditioners.

{% include images-gallery.html imageCollection="airconditionersDashboardOnEdge" %}

- Open the Airconditioner details page by clicking on the details button in the Entities widget.

{% include images-gallery.html imageCollection="airconditionersDetails" %}

- You will find the Airconditioner status light green.
- Try to switch off the airconditioner by clicking on the **On/Off Round switch**.
- The Airconditioner status light will turn into grey, the temperature will start rising, the humidity will start increasing and the power consumption will stop.

{% include images-gallery.html imageCollection="rpcDownlink" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
