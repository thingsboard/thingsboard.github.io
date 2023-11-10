---
layout: docwithnav
title: RPC Reply With data from Related Device
description: RPC Reply With data from Related Device

---

* TOC
{:toc}


In this tutorial, we will explain how to work with **RPC call reply** Rule Node and also how to:

- Create and connect different Rule Chains using **Rule Chain** node
- Filter messages using **Script** node
- Transform incoming messages with **Script** node
- Fetch attributes of related entities with **Related Attributes** node
- Process RPC Calls from devices with **RPC call reply** node
- Log Message with **Log** node


## Intro
We have 2 devices - Controller and Thermostat. We want to initiate RPC call from Controller and request related Thermostat current temperature value.
RPC call will have 2 properties:

- method: **getTemperature**
- params: **empty array**

## Model definition
There is a room where 2 devices are installed: Thermostat and Controller. 

- The Thermostat is represented as Device with the name **Thermostat A** and type **Thermostat**. 
- The Controller is represented as Device with name **Controller A** and type **Controller**. 
- Create relation from **Controller A** to **Thermostat A** via relation **Thermostat**
- Add the attribute, with server scope, to the device **Thermostat A**. 
    - Attribute name: **temperature**
    - Attribute value: **52**
    
We want to initiate RPC request from **Controller A** and ask the latest temperature of the Thermostat in the same room (**Thermostat A**)
<br>
<br>

## Configure Rule Chain

### Create new Rule Chain **Related thermostat temperature**

Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **Related thermostat temperature**

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/create-chain.png)

New Rule Chain is created. Press **Edit** button and configure Chain.

##### Add **Related attributes** node
Add **Related attributes** node and connect it to the **Input** node.
 
This node will load **temperature** attribute of related Thermostat and save it in Message metadata with name **temp**.

Configuration:

- Name: **get related temperature**
- Direction: **From**
- Max relation level: **1**
- Relation type : **Thermostat**
- Entity type : **Device**
- Latest telemetry : **false**
- Source attribute : **temperature**
- Target attribute : **temp**

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/get-related.png)

##### Add **Transform Script** node 
Add **Transform Script** node and connect it to the **Related attributes** node.

This node will transform an original message into RPC reply message. **RPC call reply** node sends Message payload as the response 
to the request, so we need to construct proper payload in Transformation node.

Configuration:

- Name: **build response**
- Script: {% highlight javascript %} msg = {"temperature" : metadata.temp} return {msg: msg, msgType: msgType}; {% endhighlight %}

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/transform.png)

##### Add **RPC call reply** node
**RPC call reply** node takes RPC request ID from message metadata. This ID used to identify incoming RPC call. 

This node takes message payload and sends it as the response to the Message Originator.

Configuration:

- Name : **send response**
- Request ID : **requestId**

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/reply.png)

<br>
<br>

This Rule chain is ready and we should save it. Here is how **Related thermostat temperature** Rule Chain should look like:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/rpc-chain-view.png)


### Connect Rule Chains
Now we will connect our new chain with the **Root Chain**. 
We want to route incoming RPC requests with **method** property equals **getTemperature** to our new rule chain (**Related thermostat temperature**).

Let's return to the **Root Rule Chain**, press **Edit** button and make required changes.

##### Add **Filter Script** node 
Add **Filter Script** node and connect it to the **Message Type Switch** node with relation type **RPC Request**.

Configuration:

- Name : filter getTemperature
- Script: {% highlight javascript %} return msg.method === 'getTemperature'; {% endhighlight %}

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/root-filter.png)

After this, all incoming messages with Message Type **RPC Request** will be routed to this node. 
Inside this node, function will filter only allowed RPC requests with **method** = **getTemperature**

##### Add **Rule Chain** node
Add **Rule Chain** node with **True** relation type to the previous *Filter Script* node (**filter getTemperature**).

Configuration:

- Rule Chain: **Related thermostat temperature**

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/connect-Rule-Chain.png)

Now, all messages that satisfy configured filter will be routed to **Related thermostat temperature** Rule Chain

##### Log unknown request
We also want to log all other RPC requests if they are unknown. We need to add **Log** node with relation type **False** 
to the **Filter Script** node (**filter getTemperature**). 

All incoming RPC requests with **method** NOT EQUALS  **getTemperature** will be passed from **Filter Script** to the **Log** node.

Configuration:

- Name : log others
- Script : {% highlight javascript %} return 'Unexpected RPC call request message:\n' + JSON.stringify(msg) + '\metadata:\n' + JSON.stringify(metadata); {% endhighlight %}

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/log-unexpected.png)

<br>
<br>

Changes in the **Root Rule Chain** are finished and we should save it. Here is how **Root Rule Chain** should look like:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/root-chain-view.png)


## Verify configuration
Configuration is finished and we can verify that Rule Chain works as we expect. 

We will use REST RPC API for emulating **Controller A** device.

For sending HTTP request, we will use **curl** utility.
 

For triggering RPC request, we need to:

- Take **Controller A** device API token. We can copy token from Device page. In this tutorial it is **IAkHBb9N7kKD9ieLRMFN** but it is unique and you need to copy your device token.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/tutorials/rpc-reply/copy-token.png)

- Make **POST** request to the Thingsboard URL - http://localhost:8080/api/v1/**$ACCESS_TOKEN**/rpc 
with content type = **application/json** and payload <code>{"method": "getTemperature", "params":{}}</code>

{% highlight bash%}
curl -X POST -d '{"method": "getTemperature", "params":{}}' http://localhost:8080/api/v1/IAkHBb9N7kKD9ieLRMFN/rpc --header "Content-Type:application/json"
{% endhighlight %}

Response:
{% highlight bash %}
{"temperature":"52"}
{% endhighlight %}

It is expected result. **Controller A** sends RPC call to the Thingsboard with method **getTemperature**. 
Message was routed via configured Rule Chain and attribute of the related thermostat were fetched and returned in the response.

If we try to submit request with unknown method we will see message in the Thingsboard log file:
{% highlight bash %}
curl -X POST -d '{"method": "UNKNOWN", "params":{}}' http://localhost:8080/api/v1/IAkHBb9N7kKD9ieLRMFN/rpc --header "Content-Type:application/json"
{% endhighlight %}

<code>
[pool-35-thread-3] INFO  o.t.rule.engine.action.TbLogNode - Unexpected RPC call request message:
{"method":"UNKNOWN","params":{}}metadata:
{"deviceType":"Controller","requestId":"0","deviceName":"Controller A"}
</code>

<br>
<br>
For more details how RPC works in the Thignsboard, please read [RPC capabilities](/docs/user-guide/rpc/#server-side-rpc-api) Article.
<br>
<br>
