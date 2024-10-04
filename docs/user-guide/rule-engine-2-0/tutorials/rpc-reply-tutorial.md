---
layout: docwithnav
title: RPC reply with data from related device
description: RPC reply with data from related device

---

* TOC
{:toc}


In this tutorial, we will explain how to work with [RPC call reply](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#rpc-call-reply-node) node and also how to:
- Create and connect different rule chains using [rule chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) node.
- Filter messages using filter [script](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#script-filter-node) node.
- Transform incoming messages with transformation [script](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node) node.
- Fetch latest telemetry data of related entities with [related entity data](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/enrichment-nodes/#related-attributes) node.
- Log messages with [log](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#log-node) node.


## Intro
We have 2 devices - controller and thermostat. We want to initiate [client-side RPC](/docs/{{docsPrefix}}user-guide/rpc/#client-side-rpc) call from controller and request related thermostat current temperature value.
RPC call will have 2 properties:

- method: **getCurrentTemperature**
- params: **empty JSON object**

## Model definition
There is a room where 2 devices are installed: thermostat and controller. 

- The thermostat is represented as Device with the name **Thermostat A** and type **Thermostat**. 
- The controller is represented as Device with name **Controller A** and type **Controller**. 
- Create relation from **Controller A** to **Thermostat A** via relation type **Thermostat**.

## Configure Rule Chains

### Create new Rule Chain: Related thermostat temperature

Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **Related thermostat temperature**

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/create-chain.png)

New Rule Chain is created. Press on the rule chain row to open it.

##### Add node: related entity data
Add **related entity data** node and connect it to the **input** node.
 
This node will fetch latest **temperature** reading of related thermostat **Thermostat A** and save it in message metadata with name **roomTemperature**.

Configuration:

- Name: **Get temperature from related Thermostat**
- Direction: **From originator**
- Max relation level: **1**
- Relation type : **Thermostat**
- Entity type : **Device**
- Data to fetch: **Latest telemetry**
- Source attribute key: **temperature**
- Target key: **roomTemperature**

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-related-entity-data-config-data-to-fetch.png)

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-related-entity-data-config-relations-query.png)

##### Add transformation node: script 
Add transformation **script** node and connect it to the **related entity data** node.

This node will transform an original message into RPC reply message. **RPC call reply** node sends message payload as the response 
to the request, so we need to construct proper payload in transformation node.

Configuration:

- Name: **Build response**
- ScriptLang: **TBEL**
- Script:
  ```javascript 
     return {msg: {"temperature": metadata.roomTemperature}, metadata: metadata, msgType: msgType};
  ```
  {: .copy-code}

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/transform.png)

##### Add action node: RPC call reply
**RPC call reply** node takes RPC requestId from message metadata. This id used to identify incoming RPC call. 

This node takes message payload and sends it as the response to the message originator.

Configuration:

- Name : **Send response**
- Request ID : **requestId**

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/reply.png)

<br>
<br>

This rule chain is ready and we should save it. Here is how **Related thermostat temperature** rule chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/rpc-chain-view.png)


### Connect Rule Chains
Now we will connect our new chain with the **Root Rule Chain**. 
We want to route incoming RPC requests with **method** property equals to **getCurrentTemperature** to our new rule chain **Related thermostat temperature**.
Let's return to the list of rule chains and open our **Root Rule Chain** to make required changes.

##### Add filter node: script 
Add filter **script** node and connect it to the default **message type switch** node with relation type **RPC Request from Device**. 
Default **Root Rule Chain** should already have such node connection from **message type switch** node to the **log** node with name "Log RPC from Device". 
In such case we need to replace log node **Log RPC from Device** with newly created **script** node. 
Please don't remove log node. We will reuse it for logging uknown RPC requests.

Configuration:

- Name: **Filter getCurrentTemperature RPC**
- ScriptLang: **TBEL**
- Script:
  ```javascript 
     return msg.method == "getCurrentTemperature";
  ```
  {: .copy-code}

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/filter-rpc-request.png)

After this, all incoming messages with message type **RPC Request from Device** will be routed to this node. 
Inside this node, function will filter only allowed RPC requests with **method** == **getCurrentTemperature**

##### Add node: rule chain
Add **rule chain** node with **True** node connection to the previous filter *script* node "Filter getCurrentTemperature RPC".

Configuration:

- Name: **To Related thermostat temperature**
- Rule Chain: **Related thermostat temperature**
- Forward message to the originator's default rule chain: **Disabled**

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/add-rule-chain-node.png)

Now, all messages that satisfy configured filter will be routed to **Related thermostat temperature** Rule Chain

##### Log unknown request
Reconnect the filter **script** node "Filter getCurrentTemperature RPC" with node connection **False** to the previously disconnected **log** node. 
All incoming RPC requests with method that doesn't equal to the "getCurrentTemperature" will be passed from filter **script** to the **log** node.

Configuration:

- Name: **Log RPC from Device**
- ScriptLang: **TBEL**
- Script:
  ```javascript 
     return '\nIncoming message:\n' + JSON.stringify(msg) + '\nIncoming metadata:\n' + JSON.stringify(metadata);
  ```
  {: .copy-code}

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/log-unexpected.png)

<br>
<br>

Changes in the **Root Rule Chain** are finished and we should save it. Here is how **Root Rule Chain** should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/root-chain-view.png)


## Verify configuration
Configuration is finished and we can verify that Rule Chains work as expected.

Let's start with publishing "temperature" telemetry for **Thermostat A** device. For sending HTTP request, we will use **curl** utility.

- To trigger telemetry upload let's go to **Check connectivity** tab of the device page and copy **curl** command to publish telemetry for our thermostat device.

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-reply/copy-curl-command.png)

- Execute the copied command:

```shell
curl -v -X POST http://demo.thingsboard.io/api/v1/CF8zr16VZeCk7zRyztZB/telemetry --header Content-Type:application/json --data "{temperature:25}"
```
{: .copy-code}

We will use REST RPC API for emulating **Controller A** device RPC requests from device to server.

For triggering RPC request, we need to do the same action for device **Controller A** as for the **Thermostat A** device, namely copy the **curl** command from the **Check connectivity** tab.
After that let's make a few changes to the command to trigger REST RPC API:

 - Change the API path by replacing **telemetry** with **rpc**
 - Change the payload from <code>{temperature:25}</code> to <code>{method: "getCurrentTemperature", params:{}}</code>

The resulted command should look like:

```shell
curl -v -X POST http://demo.thingsboard.io/api/v1/ZcHBHbptBqxgV1A6Qrtx/rpc --header Content-Type:application/json --data "{method: "getCurrentTemperature", params:{}}"
```
{: .copy-code}

Response:
```shell
{"temperature":"25"}
```
{: .copy-code}

It is expected result. **Controller A** sends RPC call to the ThingsBoard with method **getCurrentTemperature**. 
Message was routed via configured rule chain and latest telemetry of the related thermostat were fetched and returned in the response.

If we try to submit request with unknown method:

```shell
curl -v -X POST http://demo.thingsboard.io/api/v1/ZcHBHbptBqxgV1A6Qrtx/rpc --header Content-Type:application/json --data "{method: "getCurrentHumidity", params:{}}"
```
{: .copy-code}

we will see message in the ThingsBoard log file:

<br>

```less
[rule-dispatcher-0-3] INFO  o.t.rule.engine.action.TbLogNode -
Incoming message:
{"method":"getCurrentHumidity","params":{}}
Incoming metadata:
{"deviceType":"Controller","requestId":"1","sessionId":"54c2abd1-6496-4ab3-9036-e044083b1823","serviceId":"tb-core-1","deviceName":"Controller A"}
```
{: .copy-code}

<br>
<br>
For more details how RPC works in the ThingsBoard, please read [RPC capabilities](/docs/{{docsPrefix}}user-guide/rpc/) Article.
<br>
<br>
