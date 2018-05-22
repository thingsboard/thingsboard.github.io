---
layout: docwithnav
title: Action Nodes
description: Rule Engine 2.0 Action Nodes

---

Action Nodes execute various actions based on incoming Message.

* TOC
{:toc}


# Clear Alarm Node
This Node loads latest Alarm with configured **Alarm Type** for Message Originator and Clear this Alarm if it exist.

Node Configuration:

- **Alarm Details Builder** script
- **Alarm Type** - any string that represents Alarm Type

**Alarm Details Builder** script used for updating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata. 

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


In case when Alarm do not exist or it is already **Cleared** Alarm, original Message will be passed to the next nodes via **False** chain.

Otherwise new Massage will be passed via **Cleared** chain.

**Outbound message will have following structure:**

- **Message Type** - *ALARM*
- **Originator** - same originator from inbound Message
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
  "status": "ACTIVE_UNACK",
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


More details about Alarms in the Thingsboard can found in [this tutorial](/docs/user-guide/alarms/)

**!!! TODO-RE - add link to tutorial**
{: style="color:red" }

<br/>

# Create Alarm Node
This Node tries to load latest Alarm with configured **Alarm Type** for Message Originator. If **Uncleared** Alarm exist, 
then this Alarm will be updated with this Node, otherwise new Alarm will be created.

Node Configuration:

- **Alarm Details Builder** script
- **Alarm Type** - any string that represents Alarm Type
- **Alarm Severity** - {CRITICAL \| MAJOR \| MINOR \| WARNING \| INDETERMINATE}
- is **Propagate** - should Alarm be propagate to all parent related entities.


**Alarm Details Builder** script used for generating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata. 

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
- Alarm start time - if **new alarm** -> *current system Time*. If **existing Alarm** -> does not changed
- Alarm end time - *current system Time*

**Outbound message will have following structure:**

- **Message Type** - *ALARM*
- **Originator** - same originator from inbound Message
- **Payload** - JSON representation of new Alarm that was created/updated
- **Metadata** - all fields from original Message Metadata  

After new Alarm **_created_**, Outbound message will contain additional property inside Metadata - **isNewAlarm** with **true** value.
Message passed via **Created** chain.

After existing Alarm **_updated_**, Outbound message will contain additional property inside Metadata - **isExistingAlarm** with **true** value.
Message passed via **Updated** chain.

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

More details about Alarms in the Thingsboard can found in [this tutorial](/docs/user-guide/alarms/)

**!!! TODO-RE - add link to tutorial**
{: style="color:red" }

<br/>


# Generator Node
You can configure:
- Message generation frequency in seconds
- Message originator 
- Javascript function that will generate the actual message.

This node can be used for debugging Rule Chains. 

For more details how to write generation function, please see **Script Transformation** Node description

# Log Node
Transform incoming Message with configured JS function to String and log final value into the Thingsboard log file. 

**INFO** log level is used for logging.

JavaScript function receive 3 input parameters 

- <code>metadata</code> - is a Message metadata.
- <code>msg</code> - is a Message payload.
- <code>msgType</code> - is a Message type.

During Node configuration, Administrator can make test executions of configured Script. Just press **Test to String function** 
button and new test window will be opened.

You can define:

- Message payload in left 'Message' section.
- Message Type in the top left field.
- Metadata in right 'Metadata' section.
- Actual JS script in 'toString' section.

After pressing **Test** output will be returned in left **Output** section.

You can see real life example, how to use this node in those tutorials:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial.md#log-unknown-request)

# RPC Call Reply Node
Sends responce to the RPC Call originator. All incoming RPC requests are passed through Rule Chain as Messages.
Also all RPC request have request ID field. It is used for mapping requests and responses.

RPC request can be received via different channels:

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

Message Type is **RPC Request**

For more details how RPC works in the Thignsboard, please read [RPC capabilities](/docs/user-guide/rpc/) Article.

You can see real life example, how to use this node in those tutorials:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial.md)

# RPC Call Request Node
Used for sending RPC requests to the Device and routing responce to the next Rule nodes.

Message Originator must be a **DeviceId** entity because RPC request initiated to the Message Originator.

Message payload must have correct format for RPC request. It must contains **method** and **params** fields. Example
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

Outbound Message will have same originator and metadata as in inbound Message. Responce from teh Device will be added into Message payload.
 
Configured **Timeout** used for failing requests. If Node will not receive responce during configured timeout, outbound 
message will be routed via **Failure** , otherwise **Successful** chain is used.

For more details how RPC works in the Thignsboard, please read [RPC capabilities](/docs/user-guide/rpc/) Article.

<br/>

# Save Attributes Node
Saves attributes from incoming Message payload to the Entity, that is identified by Message Originator field. 
Configured **scope** is used to identify attribute scope.  

Supported scope types:

- Client attributes
- Shared attributes
- Server attributes

Expects messages with **POST_ATTRIBUTES_REQUEST** message type. If message Type is not **POST_ATTRIBUTES_REQUEST**, exception is thrown. 
When attributes are updated over existing API (Rest / MQTT / CoAP / etc) Message with correct payload and type will be passed into **Input** node of the **Root Rule Chain**.

In cases when it is required to trigger attributes saving inside Rule Chain, Administrator should transform Message payload 
to the expected format and set message type to **POST_ATTRIBUTES_REQUEST**. It could be done using **Script Transformation Node**.

**Expected Message Payload example:**
{% highlight json %}
{
  "firmware_version": "1.0.1",
  "serial_number": "SN-001"
}
{% endhighlight %}

After successful attributes saving, original Message will be passed to the next nodes via **Successful** chain, 
otherwise **Failure** chain is used.

<br/>

# Save Timeseries Node
Saves Timeseries data from incoming Message payload to the Entity, that is identified by Message Originator field. 
Configured **TTL** seconds is used timeseries data expiration. **0** - data never expired.



Expects messages with **POST_TELEMETRY_REQUEST** message type. If message Type is not **POST_TELEMETRY_REQUEST**, exception is thrown. 
When timeseries data is published over existing API (Rest / MQTT / CoAP / etc) Message with correct payload and type will be passed into **Input** node of the **Root Rule Chain**.

In cases when it is required to trigger timeseries data saving inside Rule Chain, Administrator should transform Message payload 
to the expected format and set message type to **POST_TELEMETRY_REQUEST**. It could be done using **Script Transformation Node**.

Message Metadata must contains field **ts**. This field identifies timestamp in milliseconds for published telemetry.

Also, if Message Metadata contains field **TTL**, this values is used for timeseries data expiration, otherwise **TTL** 
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

After successful timeseries data saving, original Message will be passed to the next nodes via **Successful** chain, 
otherwise **Failure** chain is used.

<br/>



