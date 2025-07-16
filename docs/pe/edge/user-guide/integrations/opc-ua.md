---
layout: docwithnav-pe-edge
title: OPC-UA Integration
description: OPC-UA Integration Guide
addConverter:
    0:
        image: /images/pe/edge/integrations/opc-ua/add-converter-step-1.webp
    1:
        image: /images/pe/edge/integrations/opc-ua/add-converter-step-2.webp

modifyConverter:
    0:
        image: /images/pe/edge/integrations/opc-ua/modify-converter-step-1.webp
    1:
        image: /images/pe/edge/integrations/opc-ua/modify-converter-step-2.webp

addDownlink:
    0:
        image: /images/pe/edge/integrations/opc-ua/add-downlink-step-1.webp
    1:
        image: /images/pe/edge/integrations/opc-ua/add-downlink-step-2.webp

addIntegration:
    0:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-0.webp
    1:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-1.webp
    2:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-2.webp
    3:
        image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-3.webp
    4:
      image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-4.webp
    5:
      image: /images/pe/edge/integrations/opc-ua/add-integration-template-step-5.webp

downlinkRule:
    0:
        image: /images/pe/edge/integrations/opc-ua/downlink-rule-step-1.webp
    1:
        image: /images/pe/edge/integrations/opc-ua/downlink-rule-step-2.webp
    2:
        image: /images/pe/edge/integrations/opc-ua/downlink-rule-step-3.webp

airconditionersDashboard:
    0:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-1.webp
        title: 'Go to the <b>Dashboard</b> section and select the <b>"Groups"</b> tab. Click the <b>"Add entity group"</b> button to create a new <b>Air conditioner</b> group.'
    1:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-2.webp
        title: 'Open the newly created <b>Air conditioner</b> group.'
    2:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-3.webp
        title: 'Click the <b>"Import dashboard"</b> button and browse for recently downloaded "airconditioners_dashboard.json" file. To proceed, click the <b>"Import"</b> button.'
    3:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-4.webp
        title: 'In the <b>Edge</b> instance, go to the <b>Edge management > Instances</b> section and click the <b>Manage edge dashboard groups</b> button.'
    4:
        image: /images/pe/edge/integrations/opc-ua/airconditioners-dashboard-step-5.webp
        title: 'Click the <b>"Assign to edge"</b> button and select the <b>Air conditioner</b> group from the drop-down menu to assign it to the <b>Edge</b>.'

assignIntegration:
    0:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-1.webp
        title: 'Add the <b>endpointHost</b> attribute to the <b>Edge</b> and set the <b>192.168.2.153</b> value as your <b>Edge</b>.'
    1:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-2.webp
        title: 'Click the <b>Manage Integrations</b> button of <b>Edge</b> entity.'
    2:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-3.webp
        title: 'Assign the <b>Integration</b> to the <b>Edge</b>.'
    3:
        image: /images/pe/edge/integrations/opc-ua/assign-integration-step-4.webp
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open the <b>Integrations</b> page. The placeholder is going to be replaced by the attribute value'

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

### Overview

**OPC UA Integration** allows you to stream data from the OPC UA server to ThingsBoard Edge and converts the device payloads to the ThingsBoard Edge format.

<object width="100%" style="display: block; margin: auto; max-width: max-content" data="/images/user-guide/integrations/opc-ua-integration.svg"></object>

In this tutorial, we will configure the integration between **ThingsBoard Edge** and **OPC-UA** 
to get the air conditioners data from the [OPC UA C++ Demo Server](https://www.unified-automation.com/downloads/opc-ua-servers.html){: target="_blank"} 
and allow the user to switch on/off any air conditioner using the **Integration downlink** feature.

#### Prerequisites

{% include templates/integration/opc-ua/opc-ua-server-setup-steps.md %}

### Create Converter templates

Converter and Integration templates are created on the **Cloud**, so please log in as Tenant administrator to cloud instance.

#### Uplink Converter template

Before creating the **Integration template**, create an Uplink and Downlink converter templates on the **Converters templates** page.

* **Uplink Converter** is a script that parses and transforms the data received by the OPC UA integration.
* **Downlink Converter** parses and transforms the data sent from ThingsBoard Edge to the format that is consumed by the existing device(s).

First, we need to create the **Uplink Data converter** that will be used to receive the messages from the OPC UA server. 
The converter should transform the incoming payload into the required message format.
The resulting message must contain the **deviceName** and **deviceType**. 
These fields are used to submit the data to the correct device. 
If a device is not found, a new device is created.
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

However, you can use a different mapping in your specific use cases.

We will also retrieve the values of the **temperature**, **humidity** and **powerConsumption** fields and use them as device telemetries.

Click the **"plus"** button and select the **"Create new converter"** option. To view the events, enable **"Debug"** mode.
In the **"Function decoder"** field, enter a script to parse and transform data.

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
{: .copy-code.expandable-14}

The purpose of the decoder function is to parse the incoming data and metadata into a format that **ThingsBoard Edge** can consume.
* **deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
* **Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

The decoder function can be changed during converter creation or later.

* If the converter has already been created, click it to open the **"Data converter details"** window. 
* To edit the converter, click the **"Edit"** button (the "pencil" icon).
* Copy the configuration example for the converter (or your own configuration) and paste it into the decoder function.
* To save the changes, click the **"Save"** button (the "checkmark" icon).

{% include images-gallery.html imageCollection="modifyConverter" %}

#### Downlink Converter template

To send **Downlink messages** from the **ThingsBoard Edge** to the **OPC UA node**, we need to define a **Downlink converter**.

In general, the output of the **Downlink converter** should have the following structure:

```ruby
[{
"contentType": "JSON",
"data": "{\"writeValues\":[],\"callMethods\":[{\"objectId\":\"ns=3;s=AirConditioner_1\",\"methodId\":\"ns=3;s=AirConditioner_1.Stop\",\"args\":[]}]}",
"metadata": {}
}]
```

- **contentType:** Defines how the data is encoded **{TEXT \| JSON \| BINARY}**. OPC UA Integration uses **JSON** encoding by default.
- **data:** The actual data that will be processed by OPC UA Integration and sent to the target OPC UA nodes:
    - **writeValues:** The array of write values methods [OPC UA Write Value format](https://documentation.unified-automation.com/uasdkc/1.9.3/html/structOpcUa__WriteValue.html){: target="_blank"}:
        - **nodeId:** The target node (`ns=<namespaceIndex>;<identifiertype>=<identifier>`)
        - **value:** The value to write
    - **callMethods:** The array of call methods [OPC UA Call Methods format](https://documentation.unified-automation.com/uasdkc/1.9.3/html/structOpcUa__CallMethodRequest.html):
        - **objectId:** The target object
        - **methodId:** The target method
        - **args:** The array of method input values
- **metadata:** Is not used for the OPC UA Integration and can be empty.


You can customize a downlink according to your configuration:
* The converter processes the RPC command to the device using the **setState** method and a boolean **params** value to call the 'Start' or 'Stop' method of the air conditioner.
* The **destination** node is determined using the **deviceName** field of the incoming message metadata.

Create the Downlink in **Converter templates** page as well. To see the events, check the **Debug** checkbox.

{% include images-gallery.html imageCollection="addDownlink" %}

An example of the downlink converter:

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

### Create Integration template

Now that the **Uplink** and **Downlink** converter templates have been created, it is possible to create an integration:
* Go to the **Integration templates** section and click **Add new integration** button. 
* Name it **OPC-UA air conditioners**, select the **OPC-UA** type, enable **Debug** mode, and add recently created **Uplink** and **Downlink** converters from the corresponding drop-down menus.

The other integration field values:
- **Application name:** \<empty\> (client application name)
- **Application uri:** \<empty\> (client application uri)
- **Host:** **$\{\{endpointHost\}\}** (we will add Edge attribute **endpointHost** in next steps)
- **Port:** **Endpoint Port** (see [Prerequisites](#prerequisites){: target="_blank"})
- **Scan period in seconds:** 10 (how often to rescan OPC UA nodes)
- **Timeout in milliseconds:** 5000 (the timeout, in milliseconds, before failing a request to OPC UA server)
- **Security:** None (can be *Basic128Rsa15 / Basic256 / Basic256Sha256 / None*)
- **Identity:** Anonymous (can be *Anonymous / Username*)
- **Mapping:**
    - **MappingType:** Fully Qualified Name (can be *Fully Qualified Name* / *ID*)
    - **Device Node Pattern:** `Objects\.BuildingAutomation\.AirConditioner_\d+$` (regular expression used to match scanned OPC UA Node FQNs/IDs to device name. 
  In this sample, path on OPC UA Explorer is `Objects/BuildingAutomation/AirConditioner_X`, where X is a number from 1 to *N*. 
  That's why we use `Objects\.BuildingAutomation\.AirConditioner_\d+$` as regular expression, because `\d+` means any number from 1 to *N*, and `$` means the end of the string)
    - The **Subscription tags** (the list of node tags (**Path**) to subscribe with mappings to keys (**Key**) used in the output message):
        - state - State
        - temperature - Temperature
        - humidity - Humidity
        - powerConsumption - PowerConsumption

To save the Integration, click the **Add** button.

{% include images-gallery.html imageCollection="addIntegration" %}

### Modify the Edge Root Rule chain for Downlinks

We can send a downlink message to the device from Rule chain using the rule node:
* To send a downlink over integration, we need to modify the **Edge Root Rule chain**.  
{% capture edge-4 %}
**Please note!** <br>
If you use **earlier versions of Edge**, you cannot create or edit a **Rule Chain** on the **Edge** itself. It must be configured as a template in the **Cloud (Server)**, and then assigned to the **Edge** instance.

Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
{% endcapture %}
{% include templates/info-banner.md content=edge-4 %}
* Add two rule nodes: the **originator fields** and **integration downlink** nodes.
* Set the **RPC Request to Device** link to the **originator fields** node and configure to add the originator name and type to the message metadata — in the **downlink converter** name of the device will be used to set proper *OPC-UA* node.
* And then add the **Success** link from the **originator fields** node to **integration downlink** node.
* When the RPC request is going to be triggered to a device on the Edge, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

### Air conditioners Dashboard

To visualize the air conditioners data and test the RPC commands, create the **air conditioners** dashboard and assign it to the **Edge**.
First, please download the [**airconditioners_dashboard.json**](/docs/pe/edge/user-guide/resources/airconditioners_dashboard.json){: target="_blank"} file.

{% include images-gallery.html imageCollection="airconditionersDashboard" showListImageTitles="true" %}

### Assign Integration to Edge

Once the converters and integration templates are created, we can assign the **Integration template** to the **Edge**.
Since we are using placeholder **$\{\{endpointHost\}\}** in the integration configuration, we need to add the **endpointHost** attribute to the **Edge** first.
You need to provide the **Endpoint Host** of the OPC-UA Server (see [Prerequisites](#prerequisites){: target="_blank"}).
Once the attribute is added, we are ready to assign the integration and verify that it has been added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

### Validation

Let's verify that the integration has been successfully started on the Edge and that the connection to the OPC-UA Demo Server has been established.

- Go to the **Device groups** page. You will see the **Air conditioners** group.
- You can see up-to-the-minute telemetry from all 10 air conditioners.

{% include images-gallery.html imageCollection="device" %}

- Open the details of one of the Air conditioners and select the **Latest Telemetry** tab.
- You will see that telemetry values are updated frequently.

{% include images-gallery.html imageCollection="deviceTelemetry" %}

- Go to the **Dashboards** section and open the **Air conditioners** dashboard.
- You can see up-to-the-minute telemetry from all 10 air conditioners.

{% include images-gallery.html imageCollection="airconditionersDashboardOnEdge" %}

- Open the "Air conditioner details" page by clicking the **"Details"** button in the **Entities** widget.

{% include images-gallery.html imageCollection="airconditionersDetails" %}

- You will find the Air conditioner status light green.
- To turn off the air conditioner, click the **On/Off Round switch**.
- The air conditioner status light will turn gray, the temperature and humidity begin to rise, and the power consumption stops.

{% include images-gallery.html imageCollection="rpcDownlink" %}

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
