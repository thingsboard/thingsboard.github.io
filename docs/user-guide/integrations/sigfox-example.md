---
layout: docwithnav
title: Get device parameters using SigFox integration
description: SigFox integration guide

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This tutorial will show how to push downlink messages to devices connected via Sigfox integration
 when user updates device attribute using ThingsBoard UI

* TOC
{:toc}
 
## Use case

In this tutorial we will get a shared attribute of specified device using SigFox integration.
SigFox backend will be simulated using Postman.

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [SigFox Integration](/docs/user-guide/integrations/sigfox/).
  * [Data converters](/docs/user-guide/integrations/index/#data-converters). 

## Model definition
  
We will operate with device that has name "Thermostat A" which will be
automatically created in the process of integration work.

![image](/images/user-guide/integrations/sigfox/sigfox-device.png)

**Note**: a shared attribute of this device has to be created.

## Getting started

### Creating converters

In order for integration to work, downlink and uplink converters should be created.

- Go to **Data Converters** -> **Add new Data Converter** -> **Import Converter** 

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png)

- Import following files: [**uplink converter**](/docs/user-guide/resources/sigfox/uplink-sigfox-converter.json),
 [**downlink converter**](/docs/user-guide/resources/sigfox/downlink-sigfox-converter.json).

Uplink converter should look like this:

![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter.png) 

Downlink converter should look like this:

![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter.png)

### Creating integration

Integration should look like this:

- Go to **Integrations** -> **Add new Integration**

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/add-new-integration.png)

- Fill in the fields with the input data shown in the following table: 

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>New SigFox Integration</td>
      </tr>
      <tr>
          <td>Type</td>
          <td>SigFox</td>
      </tr>
      <tr>
          <td>Debug mode</td>
          <td>False</td>
      </tr>
      <tr>
          <td>Uplink data converter</td>
          <td>New uplink SigFox converter</td>
      </tr>
      <tr>
          <td>Downlink data converter</td>
          <td>New downlink SigFox converter</td>
      </tr>
      <tr>
          <td>Base URl</td>
          <td>http://thingsboard.cloud</td>
      </tr>
      <tr>
          <td>Enable secrurity</td>
          <td>False</td>
      </tr>
   </tbody>
</table> 

![image](/images/user-guide/integrations/sigfox/sigfox-create-integration.png)

## Message flow

In this section, we explain the purpose of each node in this tutorial. There will be one rule chain involved:

- **Root rule chain** - rule chain that saves telemetry from devices into the database, and redirects the 
attribute updates to **To SigFox integration** chain.
- **To SigFox integration** - rule chain that sends all incoming data which has a specified key to integration.

The following screenshots show how the above Rule Chains should look like:

- **To SigFox integration**:

![image](/images/user-guide/integrations/sigfox/sigfox-rule-chain.png)

- **Root Rule Chain**:

![image](/images/user-guide/integrations/sigfox/sigfox-root-rule-chain.png)

Download and [**import**](/docs/user-guide/ui/rule-chains/#rule-import) the attached json
 [**file**](/docs/user-guide/integrations/tutorials/resources/sigfox/to-sigfox-integration.json) for the
  **To SigFox integration** rule chain.
  
Create Node C as shown on the image above in the root rule chain to forward attribute update messages to the imported 
rule chain. 

The following section shows you how to create this rule chain from scratch.

#### Create new Rule Chain (**To SigFox integration**)

Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **To SigFox integration**

![image](/images/user-guide/integrations/sigfox/add-to-sigfox-integration-chain.png)

New Rule Chain is created. Press **Edit** button and configure Chain.

###### Adding the required nodes

In this rule chain, you will create 2 nodes as it will be explained in the following sections:

###### Node A: **Check existence filter**

- Add the **Check existence filter** node and connect it to the **Input** node with a relation type **Success**.
  This rule node checks if incoming updated attribute is "status" or not. 

![image](/images/user-guide/integrations/sigfox/check-status-field.png)

- Fill in the fields with the input data shown in the following table: 

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>Check status field</td>
      </tr>
      <tr>
          <td>Message data</td>
          <td>status</td>
      </tr>
   </tbody>
</table> 

###### Node B: **Integration downlink**

- Add the **Integration downlink** node and connect it to the **Check existence filter** node with a relation type
 **Success**. This rule node pushes message to specified integration. 
 
 ![image](/images/user-guide/integrations/sigfox/push-to-integration.png)

- Fill in the fields with the input data shown in the following table: 

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>Push to integration</td>
      </tr>
      <tr>
          <td>Integration</td>
          <td>New SigFox Integration</td>
      </tr>
   </tbody>
</table> 

#### Modify Root Rule Chain

The initial root Rule Chain has been modified by adding the following node:

###### Node С: **Rule Chain**

- Add the **Rule Chain** node and connect it to the **Message type switch** node with a relation type 
**Update attributes**. This node forwards incoming Message to specified Rule Chain **To SigFox integration**.

- Select the Rule Chain field: **To SigFox integration**.

![image](/images/user-guide/integrations/sigfox/add-rule-chain-node.png)

The following screenshot shows how the final **Root Rule Chain** should look like:

![image](/images/user-guide/integrations/sigfox/sigfox-root-rule-chain.png)

## Conclusion

Now when "status" attribute is updated, integration will send downlink message.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
