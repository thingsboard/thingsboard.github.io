---
layout: docwithnav
title: Action Nodes
description: Rule Engine 2.0 Action Nodes

---

Action Nodes execute various actions based on incoming Message.

* TOC
{:toc}

# Create Alarm Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-create-alarm.png)

This Node tries to load latest Alarm with configured **Alarm Type** for Message Originator.
If **Uncleared** Alarm exist, then this Alarm will be updated, otherwise a new Alarm will be created.

Node Configuration:

- **Alarm Details Builder** script
- **Alarm Type** - any string that represents Alarm Type
- **Alarm Severity** - {CRITICAL \| MAJOR \| MINOR \| WARNING \| INDETERMINATE}
- is **Propagate** - whether Alarm should be propagated to all parent related entities.

**Alarm Details Builder** script used for generating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata. 

**Alarm Details Builder** script should return **details** object.
 
![image](/images/user-guide/rule-engine-2-0/nodes/action-create-alarm-config.png)

- Message _payload_ can be accessed via <code>msg</code> property. For example <code>msg.temperature</code><br/> 
- Message _metadata_ can be accessed via <code>metadata</code> property. For example <code>metadata.customerName</code><br/> 
- Message _type_ can be accessed via <code>msgType</code> property. For example <code>msgType</code><br/>

**Optional:** previous Alarm Details can be accessed via <code>metadata.prevAlarmDetails</code>. 
If previous Alarm does not exist, this field will not be present in Metadata. **Note** that  <code>metadata.prevAlarmDetails</code> 
is a raw String field and it needs to be converted into object using this construction:
{% highlight javascript %}
var details = {};
if (metadata.prevAlarmDetails) {
    details = JSON.parse(metadata.prevAlarmDetails);
}
{% endhighlight %}

**Alarm Details Builder** script function can be verified using [Test JavaScript function](/docs/user-guide/rule-engine-2-0/overview/#test-javascript-functions).
 
**Example of Details Builder Function**

This function takes <code>count</code> property from previous Alarm and increment it. Also put <code>temperature</code>
attribute from inbound Message payload into Alarm details.

{% highlight javascript %}
var details = {temperature: msg.temperature, count: 1};

if (metadata.prevAlarmDetails) {
    var prevDetails = JSON.parse(metadata.prevAlarmDetails);
    if(prevDetails.count) {
        details.count = prevDetails.count + 1;
    }
}

return details;
{% endhighlight %}


**Alarm created/updated with those properties:**

- Alarm details - object returned from **Alarm Details Builder** script
- Alarm status - if **new alarm** -> *ACTIVE_UNACK*. If **existing Alarm** -> does not changed
- Severity - value from Node Configuration
- Propagation - value from Node Configuration
- Alarm type - value from Node Configuration
- Alarm start time - if **new alarm** -> *current system time*. If **existing Alarm** -> does not changed
- Alarm end time - *current system time*

**Outbound message will have the following structure:**

- **Message Type** - *ALARM*
- **Originator** - the same originator from inbound Message
- **Payload** - JSON representation of new Alarm that was created/updated
- **Metadata** - all fields from original Message Metadata  

After new Alarm **_created_**, Outbound message will contain additional property inside Metadata - **isNewAlarm** with **true** value.
Message will be passed via **Created** chain.

After existing Alarm **_updated_**, Outbound message will contain additional property inside Metadata - **isExistingAlarm** with **true** value.
Message will be passed via **Updated** chain.

Here is an example of Outbound Message **payload**
{% highlight json %}
{
  "tenantId": {
    "entityType": "TENANT",
    "id": "22cd8888-5dac-11e8-bbab-ad47060c9bbb"
  },
  "type": "High Temperature Alarm",
  "originator": {
    "entityType": "DEVICE",
    "id": "11cd8777-5dac-11e8-bbab-ad55560c9ccc"
  },
  "severity": "CRITICAL",
  "status": "ACTIVE_UNACK",
  "startTs": 1526985698000,
  "endTs": 1526985698000,
  "ackTs": 0,
  "clearTs": 0,
  "details": {
    "temperature": 70,
    "ts": 1526985696000
  },
  "propagate": true,
  "id": "33cd8999-5dac-11e8-bbab-ad47060c9431",
  "createdTime": 1526985698000,
  "name": "High Temperature Alarm"
}
{% endhighlight %}

More details about Alarms in the Thingsboard can be found in [this tutorial](/docs/user-guide/alarms/)

You can see the real life example, where this node is used, in the next tutorial:

- [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)

<br/>

# Clear Alarm Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-clear-alarm.png)

This Node loads the latest Alarm with configured **Alarm Type** for Message Originator and Clear the Alarm if it exist.

Node Configuration:

- **Alarm Details Builder** script
- **Alarm Type** - any string that represents Alarm Type

**Alarm Details Builder** script used for updating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata.

**Alarm Details Builder** script should return **details** object. 

![image](/images/user-guide/rule-engine-2-0/nodes/action-clear-alarm-config.png)
 
- Message _payload_ can be accessed via <code>msg</code> property. For example <code>msg.temperature</code><br/> 
- Message _metadata_ can be accessed via <code>metadata</code> property. For example <code>metadata.customerName</code><br/> 
- Message _type_ can be accessed via <code>msgType</code> property. For example <code>msgType</code><br/>
- Current Alarm Details can be accessed via <code>metadata.prevAlarmDetails</code>. 

**Note** that  <code>metadata.prevAlarmDetails</code> 
is a raw String field and it needs to be converted into object using this construction:
{% highlight javascript %}
var details = {};
if (metadata.prevAlarmDetails) {
    details = JSON.parse(metadata.prevAlarmDetails);
}
{% endhighlight %}

**Alarm Details Builder** script function can be verified using [Test JavaScript function](/docs/user-guide/rule-engine-2-0/overview/#test-javascript-functions).

**Example of Details Builder Function**

This function takes <code>count</code> property from previous Alarm and increment it. Also put <code>temperature</code>
attribute from inbound Message payload into Alarm details.
{% highlight javascript %}
var details = {temperature: msg.temperature, count: 1};

if (metadata.prevAlarmDetails) {
    var prevDetails = JSON.parse(metadata.prevAlarmDetails);
    if(prevDetails.count) {
        details.count = prevDetails.count + 1;
    }
}

return details;
{% endhighlight %}

 
This Node updates Current Alarm:

- change alarm **status** to **CLEARED_ACK** if it was already acknowledged, otherwise to **CLEARED_UNACK**
- set **clear time** to current system time
- update Alarm details with new object returned from **Alarm Details Builder** script


In case when Alarm does not exist or it is already **Cleared** Alarm, original Message will be passed to the next nodes via **False** chain.

Otherwise new Message will be passed via **Cleared** chain.

**Outbound message will have the following structure:**

- **Message Type** - *ALARM*
- **Originator** - the same originator from inbound Message
- **Payload** - JSON representation of Alarm that was cleared
- **Metadata** - all fields from original Message Metadata. Also additional property inside Metadata will be added -> **isClearedAlarm** with **true** value.

Here is an example of Outbound Message **payload**
{% highlight json %}
{
  "tenantId": {
    "entityType": "TENANT",
    "id": "22cd8888-5dac-11e8-bbab-ad47060c9bbb"
  },
  "type": "High Temperature Alarm",
  "originator": {
    "entityType": "DEVICE",
    "id": "11cd8777-5dac-11e8-bbab-ad55560c9ccc"
  },
  "severity": "CRITICAL",
  "status": "CLEARED_UNACK",
  "startTs": 1526985698000,
  "endTs": 1526985698000,
  "ackTs": 0,
  "clearTs": 1526985712000,
  "details": {
    "temperature": 70,
    "ts": 1526985696000
  },
  "propagate": true,
  "id": "33cd8999-5dac-11e8-bbab-ad47060c9431",
  "createdTime": 1526985698000,
  "name": "High Temperature Alarm"
}
{% endhighlight %}


More details about Alarms in the Thingsboard can be found in [this tutorial](/docs/user-guide/alarms/)

You can see the real life example, where this node is used, in the next tutorial:

- [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)

<br/>

# Delay Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-delay.png)

Delays incoming messages for configurable period.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delay-config.png)

- **Period in seconds** - specifies the value of the period during which incoming message should be suspended
- **Maximum pending messages** - specifies the amount of maximum allowed pending messages (queue of suspended messages) 

When delay period for particular incoming message will be reached it will be removed from pending queue and routed to the next nodes via **Success** chain.
  
Each next message will be routed via **Failure** chain if the maximum pending messages limit will be reached.  

<br/>

# Generator Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-generator.png)

Generates Messages with configurable period. JavaScript function is used for message generation.

Node Configuration:

- Message generation frequency in seconds
- Message originator 
- JavaScript function that will generate the actual message.

JavaScript function receive 3 input parameters: 

- <code>prevMsg</code> - is a previously generated Message payload.
- <code>prevMetadata</code> - is a previously generated Message metadata.
- <code>prevMsgType</code> - is a previously generated Message type.

Script should return the following structure:
{% highlight java %}
{   
    msg: new payload,
    metadata: new metadata,
    msgType: new msgType 
}
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/nodes/action-generator-config.png)

All fields in resulting object are optional and will be taken from previously generated Message if not specified.

Outbound Message from this Node will be new Message that was constructed using configured JavaScript function.

JavaScript generator function can be verified using [Test JavaScript function](/docs/user-guide/rule-engine-2-0/overview/#test-javascript-functions).

This node can be used for Rule Chain debugging purposes.

<br/>

# Log Node 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-log.png)

Transform incoming Message with configured JavaScript function to String and log final value into the Thingsboard log file. 

**INFO** log level is used for logging.

JavaScript function receive 3 input parameters 

- <code>metadata</code> - is a Message metadata.
- <code>msg</code> - is a Message payload.
- <code>msgType</code> - is a Message type.

Script should return String value.

![image](/images/user-guide/rule-engine-2-0/nodes/action-log-config.png)

JavaScript transform function can be verified using [Test JavaScript function](/docs/user-guide/rule-engine-2-0/overview/#test-javascript-functions).

You can see the real life example, where this node is used, in the next tutorial:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial.md#log-unknown-request)

# RPC Call Reply Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-rpc-call-reply.png)

Sends response to the RPC Call originator. All incoming RPC requests are passed through Rule Chain as Messages.
Also all RPC requests have request ID field. It is used for mapping requests and responses.
Message Originator must be a **Device** entity because RPC response is initiated to the Message Originator.

Node configuration has special request ID field mapping. If the mapping is not specified, **requestId** metadata field is used by default. 

![image](/images/user-guide/rule-engine-2-0/nodes/action-rpc-call-reply-config.png)

RPC request can be received via different transports:

- MQTT
- HTTP
- CoAP  

Message payload example:
{% highlight json %}
{
  "method": "setGpio",
  "params": {
    "pin": "23",
    "value": 1
  }
}
{% endhighlight %}

Message will be routed via **Failure** chain in the following cases:

- Inbound Message originator is not a **Device** entity
- Request id is not present in the Message metadata
- Inbound Message payload is empty

For more details how RPC works in the Thingsboard, please read [RPC capabilities](/docs/user-guide/rpc/) Article.

You can see the real life example, where this node is used, in the next tutorial:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial.md)

# RPC Call Request Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-rpc-call-request.png)

Sends RPC requests to the Device and routing response to the next Rule nodes.
Message Originator must be a **Device** entity as RPC request can be initiated only to device.

Node configuration has **Timeout** field used to specify timeout waiting for response from device.

![image](/images/user-guide/rule-engine-2-0/nodes/action-rpc-call-request-config.png)

Message payload must have correct format for RPC request. It must contains **method** and **params** fields.
Example:

{% highlight json %}
{
  "method": "setGpio",
  "params": {
    "pin": "23",
    "value": 1
  }
}
{% endhighlight %}

If Message Payload contains **requestId** field, its value used to identify RPC request to the Device. 
Otherwise random requestId will be generated.

Outbound Message will have same originator and metadata as in inbound Message. Response from the Device will be added into Message payload.

Message will be routed via **Failure** chain in the following cases:

- Inbound Message originator is not a **Device** entity
- Inbound Message has missed **method** or **params** fields
- If Node will not receive a response during configured timeout
 
Otherwise Message will be routed via **Success** chain.

For more details how RPC works in the Thingsboard, please read [RPC capabilities](/docs/user-guide/rpc/) article.

<br/>

# Save Attributes Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes.png)

Stores attributes from incoming Message payload to the database and associate them to the Entity, that is identified by the Message Originator. 
Configured **scope** is used to identify attributes scope.

Supported scope types:

- Client attributes
- Shared attributes
- Server attributes

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-config.png)

Expects messages with **POST_ATTRIBUTES_REQUEST** message type.
If message Type is not **POST_ATTRIBUTES_REQUEST**, Message will be routed via **Failure** chain. 

When attributes are uploaded over existing API (HTTP / MQTT / CoAP / etc.) Message with correct payload and type will be passed into **Input** node of the **Root Rule Chain**.

In cases when it is required to trigger attributes saving inside Rule Chain, the Rule Chain should be configured to transform Message payload 
to the expected format and set message type to **POST_ATTRIBUTES_REQUEST**. It could be done using [**Script Transformation Node**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node).

**Expected Message Payload example:**
{% highlight json %}
{
  "firmware_version": "1.0.1",
  "serial_number": "SN-001"
}
{% endhighlight %}

After successful attributes saving, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

<br/>

# Save Timeseries Node 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries.png)

Stores Timeseries data from incoming Message payload to the database and associate them to the Entity, that is identified by the Message Originator. 
Configured **TTL** seconds is used for timeseries data expiration. **0** value means that data will never expire.

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-config.png)

Expects messages with **POST_TELEMETRY_REQUEST** message type. 
If message Type is not **POST_TELEMETRY_REQUEST**, Message will be routed via **Failure** chain.
 
When timeseries data is published over existing API (HTTP / MQTT / CoAP / etc.) Message with correct payload and type will be passed into **Input** node of the **Root Rule Chain**.

In cases when it is required to trigger timeseries data saving inside Rule Chain, the Rule Chain should be configured to transform Message payload  
to the expected format and set message type to **POST_TELEMETRY_REQUEST**. It could be done using [**Script Transformation Node**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node).

Message Metadata must contain **ts** field. This field identifies timestamp in milliseconds of published telemetry.

Also, if Message Metadata contains **TTL** field, its value is used for timeseries data expiration, otherwise **TTL** 
from Node Configuration is used.

**Expected Message Payload example:**
{% highlight json %}
{  
  "values": {
    "key1": "value1",
    "key2": "value2"
  }
}
{% endhighlight %}

After successful timeseries data saving, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

<br/>

# Assign To Customer Node 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-assign-to-customer-node.png)

Assign Message Originator Entity to [Customer](/docs/user-guide/ui/customers/). 

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Dashboard**.

Finds target Customer by customer name pattern and then assign Originator Entity to this customer.

Will create new Customer if it doesn't exists and **Create new Customer if not exists** is set to **true**.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-assign-to-customer-node-configuration.png)

- **Customer name pattern** - can be set direct customer name or pattern can be used, that will be resolved to the real customer name using Message metadata.
- **Create new customer if not exists** - if checked will create new customer if it doesn't exist.
- **Customers cache expiration time** - specifies maximum time interval is seconds allowed to store found customers records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target customer doesn't exist and **Create customer if not exists** is unchecked.

In other cases Message will be routed via **Success** chain. 

<br/>

# Unassign From Customer Node

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-unassign-from-customer-node.png)

Unassign Message Originator Entity from [Customer](/docs/user-guide/ui/customers/). 

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Dashboard**.

Finds target Customer by customer name pattern and then unassign Originator Entity from this customer.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-unassign-from-customer-node-configuration.png)

- **Customer name pattern** - can be set direct customer name or pattern can be used, that will be resolved to the real customer name using Message metadata.
- **Customers cache expiration time** - specifies maximum time interval is seconds allowed to store found customers records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target customer doesn't exist.

In other cases Message will be routed via **Success** chain. 

<br/>

# Create Relation Node 

<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Release in TB Version 2.2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation.png)

Create the relation from the selected entity to originator of the message by type and direction. 

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Customer**, **Tenant**, **Dashboard**.

Finds target Entity by metadata key patterns and then create a relation between Originator Entity and the target entity.

If selected entity type **Asset**, **Device** or **Customer**  rule node will create new Entity if it doesn’t exist and selected checkbox: **Create new Entity if not exists**.

**Note:** if selected entity type **Asset** or **Device** you need to set two patterns: 

 - entity name pattern; 
 
 - entity type pattern. 

Otherwise, only name pattern should be set.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-configuration.png)

- **Direction** - following types are allowed: **From**, **To**.
- **Relation type** - type of directed connections to message originator entity. Default types **Contains** and **Manages** can be selected from the drop-down list.
- **Name pattern** and **Type pattern** - can be set direct entity name/type or pattern can be used, that will be resolved to the real entity name/type using Message metadata.
- **Entities cache expiration time** - specifies maximum time interval is seconds allowed to store found target entity records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity doesn't exist.

In other cases Message will be routed via **Success** chain. 

<br/>

# Delete Relation Node

<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Release in TB Version 2.2.1</em></strong></td>
     </tr>
   </thead>
</table> 


![image](/images/user-guide/rule-engine-2-0/nodes/action-delete-relation.png)

Delete the relation from the selected entity to originator of the message by type and direction.

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Customer**, **Tenant**, **Dashboard**.

Finds target Entity by entity name pattern and then delete a relation between Originator Entity and this entity.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delete-relation-node-configuration.png)

- **Direction** - following types are allowed: **From**, **To**.
- **Relation type** - type of directed connections to message originator entity. Default types **Contains** and **Manages** can be selected from the drop-down list.
- **Name pattern** - can be set direct entity name or pattern can be used, that will be resolved to the real entity name using Message metadata.
- **Entities cache expiration time** - specifies maximum time interval is seconds allowed to store found target entity records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity doesn't exist.

In other cases Message will be routed via **Success** chain. 

<br/>