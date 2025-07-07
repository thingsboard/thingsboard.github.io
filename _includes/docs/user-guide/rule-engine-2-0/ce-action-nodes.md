Action Nodes execute various actions based on incoming Message.

* TOC
{:toc}

## Calculated fields node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 4.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-calculated-fields.png)

This node is used to trigger calculated field processing **without storing the incoming telemetry in the database**.
By default, the processing of calculated fields are triggered by the [save attributes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node){:target="_blank"} and [save time series](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node){:target="_blank"} nodes.
The **calculated fields** node accepts the same type of messages as these nodes, but allows you to decouple processing from data persistence — ideal when you want to use telemetry for calculated fields processing only.
> **Note**: This node does **not store any telemetry or attribute data** in the database — it simply triggers calculated field execution based on the incoming telemetry.

To **avoid persisting unnecessary data to the database**, route messages to this node instead of **save time series** or **save attributes** nodes.
> **Important**: when a calculated field is evaluated, new message with the originator which calculated field state was updated is generated and pushed into the root rule chain of originator.
To store the calculated result, you still need to use a **save time series** or **save attributes** node in the rule chain.

**Output connections**

* **Success:**
    * If the message payload contains valid telemetry or attribute data to process, or it is empty.
* **Failure:**
    * If an incoming message type is not `POST_TELEMETRY_REQUEST` or `POST_ATTRIBUTES_REQUEST`.
    * If unexpected error occurs during message processing.

**Usage example**:

Consider a **smart building energy management system**, where the building operator wants to monitor the **Energy Efficiency Ratio (EER)** of air conditioning systems to analyze performance trends.

There are two types of devices involved:
* **Sensor** (e.g., flow meters, power meters): these devices send high-frequency telemetry such as cooling output and power usage that can be used for calculated fields processing.
  Since the data changes rapidly and is not useful on its own, it **is not worth to persist**.
* **HVAC unit** (e.g., HVAC controllers, logical aggregators for zone-based HVAC systems): these devices send critical telemetry such as compressor temperature and vibration level required for diagnostics and analytics.
  This data, along with the calculated EER, is persisted for long-term analysis.

The **calculated field** is defined on the **HVAC controller** and uses telemetry from **Sensor** devices.
When telemetry message, for example, from the flow meter, enters the rule chain, **device profile switch** node routes this message to **calculated fields** node.
**Calculated fields** node triggers processing of the calculated field based on incoming telemetry from the message.
As a result of calculation a new message is generated with the **HVAC controller** as the originator, containing the calculated value.
This message enters rule chain where the [device profile switch](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#device-profile-switch){:target="_blank"} node routes it to the **save time series** node to persist the result.

![image](/images/user-guide/rule-engine-2-0/nodes/action-calculated-fields-example-rule-chain.png)

## Create alarm node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-create-alarm.png)

This Node tries to load the latest Alarm with configured **Alarm Type** for Message Originator.
If **Uncleared** Alarm exist, then this Alarm will be updated, otherwise a new Alarm will be created.

Node Configuration:

- **Alarm Details Builder** script
- **Alarm Type** - any string that represents Alarm Type
- **Alarm Severity** - {CRITICAL \| MAJOR \| MINOR \| WARNING \| INDETERMINATE}
- is **Propagate** - whether Alarm should be propagated to all parent related entities.

Note: Since TB Version 2.3.0 the rule node has the ability to:

-  read alarm config from message:

-  get alarm type using pattern with fields from message metadata:

    ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-alarm-config-from-msg.png)
  
Note: Since TB Version 2.4.3 the rule node has the ability to:

- filter propagation to parent entities by relation types:

    ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-alarm-propagate-list.png)

**Alarm Details Builder** script used for generating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata. 

**Alarm Details Builder** script should return **details** object.
 
![image](/images/user-guide/rule-engine-2-0/nodes/action-create-alarm-config.png)

- Message _payload_ can be accessed via <code>msg</code> property. For example <code>msg.temperature</code><br> 
- Message _metadata_ can be accessed via <code>metadata</code> property. For example <code>metadata.customerName</code><br> 
- Message _type_ can be accessed via <code>msgType</code> property. For example <code>msgType</code><br>

**Optional:** previous Alarm Details can be accessed via <code>metadata.prevAlarmDetails</code>. 
If previous Alarm does not exist, this field will not be present in Metadata. **Note** that  <code>metadata.prevAlarmDetails</code> 
is a raw String field and it needs to be converted into object using this construction:
{% highlight javascript %}
var details = {};
if (metadata.prevAlarmDetails) {
    details = JSON.parse(metadata.prevAlarmDetails);
}
{% endhighlight %}


**Alarm Details Builder** script function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).
 
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

More details about Alarms in the Thingsboard can be found in [this tutorial](/docs/{{docsPrefix}}user-guide/alarms/)

You can see the real life example, where this node is used, in the next tutorial:

- [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)

## Clear alarm node

<table  style="width:250px;">
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

Note: Since TB Version 2.3.0 the rule node has the ability to get alarm type using pattern with fields from message metadata:

   ![image](/images/user-guide/rule-engine-2-0/nodes/action-clear-alarm-fetch-alarm-type-from-metadata.png)

**Alarm Details Builder** script used for updating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata.

**Alarm Details Builder** script should return **details** object. 

![image](/images/user-guide/rule-engine-2-0/nodes/action-clear-alarm-config.png)
 
- Message _payload_ can be accessed via <code>msg</code> property. For example <code>msg.temperature</code><br> 
- Message _metadata_ can be accessed via <code>metadata</code> property. For example <code>metadata.customerName</code><br> 
- Message _type_ can be accessed via <code>msgType</code> property. For example <code>msgType</code><br>
- Current Alarm Details can be accessed via <code>metadata.prevAlarmDetails</code>. 

**Note** that  <code>metadata.prevAlarmDetails</code> 
is a raw String field and it needs to be converted into object using this construction:
{% highlight javascript %}
var details = {};
if (metadata.prevAlarmDetails) {
    details = JSON.parse(metadata.prevAlarmDetails);
}
{% endhighlight %}

**Alarm Details Builder** script function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

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


More details about Alarms in the Thingsboard can be found in [this tutorial](/docs/{{docsPrefix}}user-guide/alarms/)

You can see the real life example, where this node is used, in the next tutorial:

- [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)


## Create relation node 

<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
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

**Note:** Since TB Version 2.3 the rule node has the ability to:

- remove current relations from the originator of the incoming message based on direction and type:

  ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-remove-relations.png)

- change the originator of the incoming message to the selected entity and process outboud messages as messages from another entity:

  ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-change-originator.png)

<br>

## Delay node (deprecated)

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

Delays incoming messages for configurable period.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delay-config.png)

- **Period in seconds** - specifies the value of the period during which incoming message should be suspended
- **Maximum pending messages** - specifies the amount of maximum allowed pending messages (queue of suspended messages) 

When delay period for particular incoming message will be reached it will be removed from pending queue and routed to the next nodes via **Success** chain.
  
Each next message will be routed via **Failure** chain if the maximum pending messages limit will be reached.  

## Delete relation node

<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
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


**Note:** Since TB Version 2.3 the rule node has the ability to deletes relation from the originator of the incoming message to the specified entity or to the list of entities based on direction and type by disabling the following checkbox in the rule node configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delete-relation-node-new-functionality.png)

## Device profile node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![deviceProfileNode](/images/user-guide/rule-engine-2-0/nodes/device-profile-node.png)

<br>

The Device profile rule node creates and clears alarms based on the alarm rules defined in the device profile. By default, it is the first node in the processing chain. This node processes all incoming messages and reacts to both attribute values and telemetry data.

<br>

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/device-profile-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/device-profile-node-2-pe.png"></object>
{% endif %}

Node configuration:

- **Persist state of alarm rules**<br>
Stores the processing state of alarm rules. **Disabled by default**. 
This option is useful when using [duration](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-condition-with-a-duration){:target="_blank"} or [repeating](/docs/{{docsPrefix}}user-guide/device-profiles/#repeating-alarm-condition){:target="_blank"} conditions.   
*For example:* If you have a condition like "**Temperature is greater than 50°C for 1 hour**" and the first temperature reading above 50°C arrives at **13:00**, then at **14:00** PM the alarm should be triggered (assuming the temperature remains above the threshold).   
However, if the **server is restarted between 13:00 PM and 14:00 PM**, the rule node needs to **retrieve the state from the database** to trigger the alarm as expected.   
If this option is **enabled together with "Fetch state of alarm rules**", the rule node will be able to create the alarm even after a restart.
If it remains **disabled**, the rule node will **not generate the alarm** after a restart.   
It is **disabled by default for performance reasons**. When enabled, every incoming message that matches at least one alarm condition will cause an additional **write operation to persist the state** in the database.

- **Fetch state of alarm rules**<br>
Restores the alarm rule processing state when the rule node initializes. **Disabled by default**.   
This setting is also useful for [duration](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-condition-with-a-duration){:target="_blank"} or [repeating](/docs/{{docsPrefix}}user-guide/device-profiles/#repeating-alarm-condition){:target="_blank"} conditions.   
It works in tandem with "**Persist state of alarm rules**", but in certain cases you might want to keep **"Persist state" enabled while disabling this option**.
For example, if you have many devices that send data frequently or continuously, disabling this option can **avoid loading the state from the database during startup**.   
In this case, the rule node will **load the state from the database only when the first message arrives from a specific device**.

## Generator node

<table  style="width:250px;">
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

JavaScript generator function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

This node can be used for Rule Chain debugging purposes.

## Log node

<table  style="width:250px;">
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

JavaScript transform function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

You can see the real life example, where this node is used, in the next tutorial:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial#log-unknown-request)

## Math function node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.4.2</em></strong></td>
     </tr>
   </thead>
</table> 

The rule node applies math function and saves the result into the message and/or database. See table of supported functions below:

<style>

  div.mathFunctionsTable + table tr th:nth-child(1) {
     width: 10%
  }

  div.mathFunctionsTable + table tr th:nth-child(2) {
     width: 10%
  }

  div.mathFunctionsTable + table tr th:nth-child(3) {
     width: 65%
  }

  div.mathFunctionsTable + table tr th:nth-child(4) {
     width: 15%
  }

</style>

<div class="mathFunctionsTable"></div>

| Function  | Number of arguments | Description                                                                                                                                                                                                           | Reference                                                                                                                 
|-----------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| ADD       | 2                   | x + y                                                                                                                                                                                                                 |                                                                                                                           |
| SUB       | 2                   | x - y                                                                                                                                                                                                                 |                                                                                                                           |
| MULT      | 2                   | x * y                                                                                                                                                                                                                 |                                                                                                                           |
| DIV       | 2                   | x / y                                                                                                                                                                                                                 |                                                                                                                           |
| SIN       | 1                   | Returns the trigonometric sine of an angle.                                                                                                                                                                           | [Math.sin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sin(double))                  |
| SINH      | 1                   | Returns the hyperbolic sine of a double value. The hyperbolic sine of x is defined to be (*e*<sup>x</sup> - *e*<sup>-x</sup>)/2 where *e* is Euler's number.                                                          | [Math.sinh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sinh(double))                |
| COS       | 1                   | Returns the trigonometric cosine of an angle.                                                                                                                                                                         | [Math.cos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cos(double))                  |
| COSH      | 1                   | Returns the hyperbolic cosine of a double value. The hyperbolic cosine of x is defined to be (*e*<sup>x</sup> + *e*<sup>-x</sup>)/2 where *e* is Euler's number.                                                      | [Math.cosh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cosh(double))                |
| TAN       | 1                   | Returns the trigonometric tangent of an angle.                                                                                                                                                                        | [Math.tan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tan(double))                  |
| TANH      | 1                   | Returns the hyperbolic tangent of a double value.                                                                                                                                                                     | [Math.tanh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tanh(double))                |
| ACOS      | 1                   | Returns the arc cosine of a value; the returned angle is in the range *0.0* through *pi*.                                                                                                                             | [Math.acos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#acos(double))                |
| ASIN      | 1                   | Returns the arc sine of a value; the returned angle is in the range *-pi/2* through *pi/2*.                                                                                                                           | [Math.asin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#asin(double))                |
| ATAN      | 1                   | Returns the arc tangent of a value; the returned angle is in the range -pi/2 through pi/2.                                                                                                                            | [Math.atan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan(double))                |
| ATAN2     | 2                   | Returns the angle theta from the conversion of rectangular coordinates (x, y) to polar coordinates (r, theta).                                                                                                        | [Math.atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan2(double,double))       |
| EXP       | 1                   | Returns the value *e*<sup>x</sup>, where *e* is the base of the natural logarithms.                                                                                                                                   | [Math.exp](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#exp(double))                  |
| EXPM1     | 1                   | Returns *e*<sup>x</sup>-1. Note that for values of x near 0, the exact sum of expm1(x) + 1 is much closer to the true result of *e*<sup>x</sup> than exp(x).                                                          | [Math.expm1](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#expm1(double))              |
| SQRT      | 1                   | Returns the correctly rounded positive square root of a double value.                                                                                                                                                 | [Math.sqrt](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sqrt(double))                |
| CBRT      | 1                   | Returns the cube root of a double value.                                                                                                                                                                              | [Math.cbrt](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cbrt(double))                | 
| GET_EXP   | 1                   | Returns the unbiased exponent used in the representation of a double.                                                                                                                                                 | [Math.getExponent](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#getExponent(double))  |
| HYPOT     | 2                   | Returns sqrt(x2 +y2) without intermediate overflow or underflow.                                                                                                                                                      | [Math.getExponent](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#hypot(double,double)) |
| LOG       | 1                   | Returns the natural logarithm (base e) of a double value.                                                                                                                                                             | [Math.log](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log(double))                  |
| LOG10     | 1                   | Returns the base 10 logarithm of a double value.                                                                                                                                                                      | [Math.log10](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log10(double))              |
| LOG1P     | 1                   | Returns the natural logarithm of the sum of the argument and 1. Note that for small values x, the result of log1p(x) is much closer to the true result of ln(1 + x) than the floating-point evaluation of log(1.0+x). | [Math.log1p](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log1p(double))              |
| CEIL      | 1                   | Returns the smallest (closest to negative infinity) double value that is greater than or equal to the argument and is equal to a mathematical integer.                                                                | [Math.ceil](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#ceil(double))                |
| FLOOR     | 1                   | Returns the largest (closest to positive infinity) double value that is less than or equal to the argument and is equal to a mathematical integer.                                                                    | [Math.floor](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floor(double))              |
| FLOOR_DIV | 2                   | Returns the largest (closest to positive infinity) long value that is less than or equal to the algebraic quotient.                                                                                                   | [Math.floorDiv](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floorDiv(long,long))     |
| FLOOR_MOD | 2                   | Returns the floor modulus of the long arguments.                                                                                                                                                                      | [Math.floorMod](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floorMod(long,long))     |
| ABS       | 1                   | Returns the absolute value of a double value.                                                                                                                                                                         | [Math.abs](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#abs(double))                  |
| MIN       | 2                   | Returns the smaller of two double values.                                                                                                                                                                             | [Math.min](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#min(double,double))           |
| MAX       | 2                   | Returns the greater of two double values.                                                                                                                                                                             | [Math.max](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#max(double,double))           |
| POW       | 2                   | Returns the value of the first argument raised to the power of the second argument.                                                                                                                                   | [Math.pow](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#pow(double,double))           |
| SIGNUM    | 1                   | Returns the signum function of the argument; zero if the argument is zero, 1.0 if the argument is greater than zero, -1.0 if the argument is less than zero.                                                          | [Math.signum](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#signum(double))            |
| RAD       | 1                   | Converts an angle measured in degrees to an approximately equivalent angle measured in radians.                                                                                                                       | [Math.toRadians](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toRadians(double))      |
| DEG       | 1                   | Converts an angle measured in radians to an approximately equivalent angle measured in degrees.                                                                                                                       | [Math.toDegrees](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toDegrees(double))      |
| CUSTOM    | 1-16                | Use this function to specify complex math expressions. For example, transform Fahrenheit to Celsius using (x - 32) / 1.8)                                                                                             | [exp4j](https://github.com/fasseg/exp4j)                                                                                  |

You may use 5 types of arguments:

* Constant;
* Value from the message body;
* Value from the message meta data;
* Value of the attribute that belongs to the message originator (device, asset, etc). Value should be of Numeric type or string that is convertible to float;
* Value of the latest time-series that belongs to the message originator (device, asset, etc). Value should be of Numeric type or string that is convertible to float;

Primary use case for this rule node is to take one or more values from the database and modify them based on data from the message. For example, you may increase `totalWaterConsumption` based on the `deltaWaterConsumption` reported by device.

Alternative use case is the replacement of simple JS `script` nodes with more light-weight and performant implementation. For example, you may transform Fahrenheit to Celsius (*C = (F - 32) / 1.8*) using CUSTOM operation and expression: *(x - 32) / 1.8)*.

The execution is synchronized in scope of message originator (e.g. device) and server node. If you have rule nodes in different rule chains, they will process messages from the same originator synchronously in the scope of the server node.

The result of the function may be added to the message body or metadata. You may also save the result to the database as an attribute or time-series.

## RPC call reply node

<table  style="width:250px;">
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

For more details how RPC works in the Thingsboard, please read [RPC capabilities](/docs/{{docsPrefix}}user-guide/rpc/) Article.

You can see the real life example, where this node is used, in the next tutorial:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial)

## RPC call request node

<table  style="width:250px;">
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

For more details how RPC works in the Thingsboard, please read [RPC capabilities](/docs/{{docsPrefix}}user-guide/rpc/) article.

## Save attributes node

<table style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

Stores the incoming message payload as attribute data of the message originator.

**Expected incoming message format**

The node accepts messages of type `POST_ATTRIBUTES_REQUEST` and expects incoming message payload to be an object where each property name represents an attribute key, and its corresponding value is the attribute value. For example:
```json
{
  "firmware_version": "1.0.1",
  "serial_number": "SN-001"
}
```

**Configuration: Processing settings**

The save attributes node can perform three distinct actions, each governed by configurable processing strategies:
- **Attributes**: saves attribute data to the database.
- **WebSockets**: notifies WebSocket subscriptions about updates to the attribute data.
- **Calculated fields**: notifies calculated fields about updates to the attribute data.

For each of these actions, you can choose from the following **processing strategies**:
{% include docs/user-guide/rule-engine-2-0/processing-strategies-explanation.md %}

> **Note**: Processing strategies are available since TB version 4.0.

Processing strategies can be set using either **Basic** or **Advanced processing settings**.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-pe.png)
{% endif %}

- **Basic processing settings** - provide predefined strategies for all actions:
  - On every message: applies the **On every message** strategy to all actions. All actions are performed for all messages.
  - Deduplicate: applies the **Deduplicate** strategy (with a specified interval) to all actions.
  - WebSockets only: for all actions except WebSocket notifications, the **Skip** strategy is applied, while WebSocket notifications use the **On every message** strategy.
    Effectively, nothing is stored in a database; data is available only in real-time via WebSocket subscriptions.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-pe.png)
{% endif %}

- **Advanced processing settings** - allow you to configure each action’s processing strategy independently.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-processing-settings-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-processing-settings-pe.png)
{% endif %}

When configuring the processing strategies in advanced mode, certain combinations can lead to unexpected behavior. Consider the following scenarios:

{% include docs/user-guide/rule-engine-2-0/advanced-processing-strategies-hazards.md %}

Due to the scenarios described above, the ability to configure each persistence action independently—including setting different deduplication intervals—should be treated as a performance optimization rather than a strict processing guarantee.

**Configuration: Scope**

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-scope-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-scope-pe.png)
{% endif %}

The node determines the attribute scope for each incoming message by evaluating the `scope` property in its metadata. 
The supported scope types are **Client attributes**, **Shared attributes**, and **Server attributes**. The algorithm is as follows:

1. If the incoming message metadata contains a non-empty `scope` property, the node compares its value against the supported scope values:
   - `CLIENT_SCOPE` corresponds to **Client attributes**
   - `SHARED_SCOPE` corresponds to **Shared attributes**
   - `SERVER_SCOPE` corresponds to **Server attributes**
2. If a match is found, the corresponding scope is applied, and processing continues.
3. If no valid match is found, the message processing fails.
4. If the `scope` property is absent or an empty string, the node uses the scope specified in the node configuration.

**Configuration: Advanced settings**

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-settings.png)

* **Save attributes only if the value changes** – if enabled, the node first retrieves the current values for the specified attribute keys and then compares them with the incoming values.
  If an attribute is missing, its value has changed, or its data type differs from what’s stored, it is marked for saving. If no changes are detected, the node skips the save operation.

  > **Note**: Avoid concurrent writes of the same attributes because change-detection is not transactional and may produce unexpected results in such cases.

  > **Note**: If the attribute save is skipped because the value has not changed, the attribute’s last updated timestamp will not be updated.

* **Send attributes updated notification** – if enabled, and if the attribute scope is not `CLIENT_SCOPE` (i.e., for `SHARED_SCOPE` and `SERVER_SCOPE`), 
  the node puts an [Attributes Updated](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) event to the queue named `Main`.
* **Force notification to the device** - the node determines whether to notify the device about attribute updates by evaluating the **Force notification to the device** option and the `notifyDevice` property in the incoming message metadata. The algorithm is as follows:
  1. If the **Force notification to the device** option is enabled, the node always sends attribute update notifications to the device, regardless of the `notifyDevice` metadata value.
  2. If the option is disabled, the node checks the `notifyDevice` property in the message metadata:
     * If the property is absent or an empty string, it defaults to sending the notification.
     * If the property is provided, the notification is sent only if its value is `true` (ignoring case).
  3. In all cases, the notification is only sent if the device has an active subscription for the updated (or deleted) attributes.
  4. Additionally, attribute notifications are not sent if:
     * The attribute save is skipped because its value did not change (when **Save attributes only if the value changes** is enabled).
     * The attribute save is skipped due to the configured processing strategy (e.g., set to Skip).

**Output connections**

* **Success:**
  * If an incoming message was successfully processed.
* **Failure:**
  * If an incoming message type is not `POST_ATTRIBUTES_REQUEST`.
  * If an incoming message payload cannot be parsed to attribute key-value pairs.
  * If the incoming message metadata includes a non-empty `scope` property whose value does not match one of the valid attribute scopes (i.e. `CLIENT_SCOPE`, `SHARED_SCOPE`, or `SERVER_SCOPE`).
  * If unexpected error occurs during message processing.

## Save timeseries node 

<table style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

Stores the incoming message payload as time series data of the message originator.

**Expected incoming message format**

The node accepts messages of type `POST_TELEMETRY_REQUEST` and supports the following three **payload formats**:

1. Key-value pairs: an object where each property name represents a time series key, and its corresponding value is the time series value.
    ```json
    {
      "temperature": 42.2,
      "humidity": 70
    }
    ```

2. Timestamped key-value pairs: an object that includes a `ts` property for the timestamp and a `values` property containing key-value pairs (defined in format 1).
    ```json
    {
      "ts": 1737963587742,
      "values": {
        "temperature": 42.2,
        "humidity": 70
      }
    }
    ```

3. Multiple timestamped key-value pairs: an array of timestamped key-value pair objects (defined in format 2).
    ```json
    [
      {
        "ts": 1737963595638,
        "values": {
          "temperature": 42.2,
          "humidity": 70
        }
      },
      {
        "ts": 1737963601607,
        "values": {
          "pressure": 2.56,
          "velocity": 0.553
        }
      }
    ]
    ```

**Configuration: Processing settings**

The save time series node can perform four distinct actions, each governed by configurable processing strategies:
- **Time series**: saves time series data to the `ts_kv` table in the database.
- **Latest values**: updates time series data in the `ts_kv_latest` table in the database, if new data is more recent.
- **WebSockets**: notifies WebSocket subscriptions about updates to the time series data.
- **Calculated fields**: notifies calculated fields about updates to the time series data.

For each of these actions, you can choose from the following **processing strategies**:
{% include docs/user-guide/rule-engine-2-0/processing-strategies-explanation.md %}

> **Note**: Processing strategies are available since TB version 4.0. "Skip latest persistence" toggle from earlier TB versions corresponds to "Skip" strategy for Latest values.

Processing strategies can be set using either **Basic** or **Advanced processing settings**.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-pe.png)
{% endif %}

- **Basic processing settings** - provide predefined strategies for all actions:
    - On every message: applies the **On every message** strategy to all actions. All actions are performed for all messages.
    - Deduplicate: applies the **Deduplicate** strategy (with a specified interval) to all actions.
    - WebSockets only: applies the **Skip** strategy to Time series and Latest values, and the **On every message** strategy to WebSockets. 
      Effectively, nothing is stored in a database; data is available only in real-time via WebSocket subscriptions.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-pe.png)
{% endif %}

- **Advanced processing settings** - allow you to configure each action’s processing strategy independently.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-processing-settings-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-processing-settings-pe.png)
{% endif %}

When configuring the processing strategies in advanced mode, certain combinations can lead to unexpected behavior. Consider the following scenarios:

{% include docs/user-guide/rule-engine-2-0/advanced-processing-strategies-hazards.md %}

Due to the scenarios described above, the ability to configure each persistence action independently—including setting different deduplication intervals—should be treated as a performance optimization rather than a strict processing guarantee.

**Configuration: Advanced settings**

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-settings-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-settings-pe.png)
{% endif %}

* **Use server timestamp** - if enabled, rule node will use current server time when time series data does not have an explicit timestamp associated with it (**payload format 1** is used). Available since TB Version 3.3.3

    The node determines the timestamp for each time series data point using the following priority:
    1. If the time series data includes a `ts` property (**payload formats 2 and 3**), this timestamp is used.
    2. If the **Use server timestamp** option is enabled, the current server time is used.
    3. If the message metadata contains a `ts` property (expected in UNIX milliseconds), this value is used.
    4. If none of the above are provided, the timestamp when the message was created is used.

    Using server time is particularly important in sequential processing scenarios where messages may arrive with out-of-order timestamps from multiple sources.
    The DB layer has certain optimizations to ignore the updates of the attributes and latest values if the new record has a timestamp that is older than the previous record.
    So, to make sure that all the messages will be processed correctly, one should enable this parameter for sequential message processing scenarios.

* **Default TTL (Time-to-Live)** - determines how long the stored data remains in the database. The TTL is set based on the following priority:
    1. If the metadata contains a `TTL` property (expected as integer representing seconds), this value is used.
    2. If the metadata does not specify a `TTL`, the node's configured TTL value is applied.
    3. If the node's configured TTL is set to **0**, the Storage TTL defined in the tenant profile is used.

> **Note**: TTL value of 0 means that the data never expires.

**Output connections**
* **Success:**
  * If an incoming message was successfully processed.
* **Failure:**
  * If an incoming message type is not `POST_TELEMETRY_REQUEST`.
  * If an incoming message payload is empty (for example, `{}` or `[]` or even `[{}, {}, {}]`).
  * If unexpected error occurs during message processing.

## Save to custom table node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table.png)

Node stores data from incoming Message payload to the Cassandra database into the predefined custom table that should have **cs_tb_** prefix, to avoid the data insertion to the common TB tables.

Please note, that rule node can be used only for **Cassandra DB**.

Configuration:

Administrator should set the custom table name without prefix: **cs_tb_**.

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table-name-config.png)

Administrator can configure the mapping between the Message field names and Table columns name. If the mapping key is **$entityId**, that is identified by the Message Originator, then to the appropriate column name(mapping value) will be write the message originator id.

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table-config.png)

If specified message field does not exist in the **data** of the message or is not a JSON Primitive, the outbound message will be routed via **Failure** chain, otherwise, the message will be routed via **Success** chain.

**NOTE**: Please make sure that you are not using **metadata** keys in the configuration - only **data** keys are possible.  

## Assign To Customer node 

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-assign-to-customer-node.png)

Assign Message Originator Entity to [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/). 

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

## Unassign From Customer node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-unassign-from-customer-node.png)

Unassign Message Originator Entity from [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/). 

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

<br>

## Create relation node 

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
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

**Note:** Since TB Version 2.3 the rule node has the ability to:

 - remove current relations from the originator of the incoming message based on direction and type: 

    ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-remove-relations.png)

 - change the originator of the incoming message to the selected entity and process outboud messages as messages from another entity: 
 
    ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-change-originator.png)

<br>

## Delete relation node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
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


**Note:** Since TB Version 2.3 the rule node has the ability to deletes relation from the originator of the incoming message to the specified entity or to the list of entities based on direction and type by disabling the following checkbox in the rule node configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delete-relation-node-new-functionality.png)

<br>

## GPS geofencing events node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-gps-geofencing-event-node.png)

Produces incoming messages by GPS based parameters. Extracts latitude and longitude from incoming message data or metadata and returns different events based on configuration parameters (geo fence).

![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-default-config.png)

The rule node fetches perimeter information from message metadata by default. If **Fetch perimeter information from message metadata** is unchecked, additional information should be configured.

### Fetch perimeter information from message metadata

There are two options of area definition based on the perimeter type: **Polygon** and **Circle**

Metadata of the incoming message must include key with name **perimeter** and following data structure:

- Polygon

{% highlight java %}[[latitude1,longitude1],[latitude2,longitude2], ... ,[latitudeN,longitudeN]]{% endhighlight %}

- Circle

{% highlight java %}
{"latitude":"value1","longitude":"value2","radius":"value3","radiusUnit":"KILOMETER"}
{% endhighlight %}

Keys **"latitude"** and **"longitude"** it's coordinates of the point.

The **"radius"** key - it's the distance from the coordinate point to the circle.

All values for these keys are in double-precision floating-point data type.

The **"radiusUnit"** key requires specific value from a list of **METER**, **KILOMETER**, **FOOT**, **MILE**, **NAUTICAL_MILE** (capital letters obligatory).

### Fetch perimeter information from node configuration
 
There are two options of area definition based on the perimeter type:
 
- Polygon 
             
![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-polygon-config.png)           

- Circle
                  
![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-circle-config.png)       

### Event types

There are 4 types of events managed by geofencing rule node:

- **Entered** — is reporting whenever latitude and longitude from the incoming message to belong the required perimeter area for the first time;
- **Left** — is reporting whenever latitude and longitude from the incoming message not belong the required perimeter area for the first time;
- **Inside** and **Outside** events are used to report current status.

Administrator can configure duration time threshold for reporting inside or outside event. For example, whenever minimal inside time is set to 1 minute the message originator is considered as being inside the perimeter 60 seconds after entering the area.
Minimal outside time defines whenever message originator is considered as out of the perimeter as well.

![image](/images/user-guide/rule-engine-2-0/nodes/action-gps-geofencing-event-node-duration-config.png)  
 
**Failure** chain will to be used when:

   - incoming message has no configured latitude or longitude key in data or metadata. 
   - missing perimeter definition;

<br>

## REST call reply node

<table  style="width:250px;">
  <thead>
    <tr>
      <td style="text-align: center">
        <strong>
          {% if docsPrefix == 'pe/' or docsPrefix == 'paas/' %}
            <em>Since TB Version 2.1</em>
          {% else %}
            <em>Since TB Version 3.8.0</em>
          {% endif %}
        </strong>
      </td>
    </tr>
  </thead>
</table>

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-rest-call-reply.png)

Sends reply to REST API call that was originally sent to rule engine.

Expects messages with any message type. Forwards incoming message as a reply to REST API call sent to rule engine.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-rest-call-reply-config.png)

<br>

{% include templates/edge/edge-nodes.md %}