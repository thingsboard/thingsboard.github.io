Action Nodes execute various actions based on incoming Message.

* TOC
{:toc}

## Math Function Node

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

| Function | Number of arguments | Description   | Reference
|-----------|---|-------------|--------|
| ADD       | 2 | x + y       | |
| SUB       | 2 | x - y       | |
| MULT      | 2 | x * y       | |
| DIV       | 2 | x / y       | |
| SIN       | 1 | Returns the trigonometric sine of an angle.      | [Math.sin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sin(double))|
| SINH      | 1 | Returns the hyperbolic sine of a double value. The hyperbolic sine of x is defined to be (*e*<sup>x</sup> - *e*<sup>-x</sup>)/2 where *e* is Euler's number.     | [Math.sinh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sinh(double))|
| COS       | 1 | Returns the trigonometric cosine of an angle.       | [Math.cos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cos(double))|
| COSH      | 1 | Returns the hyperbolic cosine of a double value. The hyperbolic cosine of x is defined to be (*e*<sup>x</sup> + *e*<sup>-x</sup>)/2 where *e* is Euler's number.     | [Math.cosh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cosh(double))|
| TAN       | 1 | Returns the trigonometric tangent of an angle.      | [Math.tan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tan(double))|
| TANH      | 1 | Returns the hyperbolic tangent of a double value.      | [Math.tanh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tanh(double))|
| ACOS      | 1 | Returns the arc cosine of a value; the returned angle is in the range *0.0* through *pi*.     | [Math.acos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#acos(double))|
| ASIN      | 1 | Returns the arc sine of a value; the returned angle is in the range *-pi/2* through *pi/2*.     | [Math.asin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#asin(double))|
| ATAN      | 1 | Returns the arc tangent of a value; the returned angle is in the range -pi/2 through pi/2.     | [Math.atan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan(double))|
| ATAN2     | 2 | Returns the angle theta from the conversion of rectangular coordinates (x, y) to polar coordinates (r, theta). | [Math.atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan2(double,double))|
| EXP       | 1 | Returns the value *e*<sup>x</sup>, where *e* is the base of the natural logarithms.         |  [Math.exp](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#exp(double))|
| EXPM1     | 1 | Returns *e*<sup>x</sup>-1. Note that for values of x near 0, the exact sum of expm1(x) + 1 is much closer to the true result of *e*<sup>x</sup> than exp(x).            |  [Math.expm1](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#expm1(double)) |
| SQRT      | 1 | Returns the correctly rounded positive square root of a double value. | [Math.sqrt](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sqrt(double))|
| CBRT      | 1 | Returns the cube root of a double value. | [Math.cbrt](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cbrt(double))| 
| GET_EXP   | 1 | Returns the unbiased exponent used in the representation of a double.            |  [Math.getExponent](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#getExponent(double))|
| HYPOT     | 2 | Returns sqrt(x2 +y2) without intermediate overflow or underflow.   | [Math.getExponent](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#hypot(double,double)) |
| LOG       | 1 | Returns the natural logarithm (base e) of a double value. | [Math.log](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log(double))|
| LOG10     | 1 | Returns the base 10 logarithm of a double value. |  [Math.log10](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log10(double))  |
| LOG1P     | 1 | Returns the natural logarithm of the sum of the argument and 1. Note that for small values x, the result of log1p(x) is much closer to the true result of ln(1 + x) than the floating-point evaluation of log(1.0+x).            |  [Math.log1p](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log1p(double))|
| CEIL      | 1 | Returns the smallest (closest to negative infinity) double value that is greater than or equal to the argument and is equal to a mathematical integer. |  [Math.ceil](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#ceil(double)) |
| FLOOR     | 1 | Returns the largest (closest to positive infinity) double value that is less than or equal to the argument and is equal to a mathematical integer. |  [Math.floor](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floor(double)) |
| FLOOR_DIV | 2 | Returns the largest (closest to positive infinity) long value that is less than or equal to the algebraic quotient. |  [Math.floorDiv](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floorDiv(long,long)) |
| FLOOR_MOD | 2 | Returns the floor modulus of the long arguments. |  [Math.floorMod](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floorMod(long,long)) |
| ABS       | 1 | Returns the absolute value of a double value.             |  [Math.abs](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#abs(double)) |
| MIN       | 2 | Returns the smaller of two double values.            |  [Math.min](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#min(double,double)) |
| MAX       | 2 | Returns the greater of two double values.             |  [Math.max](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#max(double,double)) |
| POW       | 2 | Returns the value of the first argument raised to the power of the second argument.             |  [Math.pow](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#pow(double,double)) |
| SIGNUM    | 1 | Returns the signum function of the argument; zero if the argument is zero, 1.0 if the argument is greater than zero, -1.0 if the argument is less than zero.            |  [Math.signum](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#signum(double)) |
| RAD       | 1 | Converts an angle measured in degrees to an approximately equivalent angle measured in radians.             |  [Math.toRadians](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toRadians(double)) |
| DEG       | 1 | Converts an angle measured in radians to an approximately equivalent angle measured in degrees.            |  [Math.toDegrees](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toDegrees(double)) |
| CUSTOM    | 1-16| Use this function to specify complex math expressions. For example, transform Fahrenheit to Celsius using (x - 32) / 1.8) | [exp4j](https://github.com/fasseg/exp4j)  |

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


## Create Alarm Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-alarm.png)

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

    ![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-alarm-config-from-msg.png)
  
Note: Since TB Version 2.4.3 the rule node has the ability to:

- filter propagation to parent entities by relation types:

    ![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-alarm-propagate-list.png)

**Alarm Details Builder** script used for generating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata. 

**Alarm Details Builder** script should return **details** object.
 
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-alarm-config.png)

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

<br>

## Clear Alarm Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-clear-alarm.png)

This Node loads the latest Alarm with configured **Alarm Type** for Message Originator and Clear the Alarm if it exist.

Node Configuration:

- **Alarm Details Builder** script
- **Alarm Type** - any string that represents Alarm Type

Note: Since TB Version 2.3.0 the rule node has the ability to get alarm type using pattern with fields from message metadata:

   ![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-clear-alarm-fetch-alarm-type-from-metadata.png)

**Alarm Details Builder** script used for updating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata.

**Alarm Details Builder** script should return **details** object. 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-clear-alarm-config.png)
 
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

<br>

## delay (deprecated)


<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

Delays incoming messages for a configurable period. In other words, node receives a message, holds it for a set duration, and then sends it to the next rule nodes for further action.

**Configuration**

![Configuration example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delay-config.png)

- **Period value**: number that tells the node how long to delay. For example, if you put 5 here, it means you want the node to wait for 5 units of time.
- **Period time unit**: time unit you're using for the delaying period. Available values are: seconds, minutes, hours. So, when paired with the **Period value**, if you chose 5 for **Period Value** and seconds for **Period time unit**, the node would wait for 5 seconds.
- **Maximum pending messages**: limit on how many messages the node can delay at once. For example, If you set a number like 1000, it means the node can delay up to 1000 messages at a time. Once this limit is reached, any new incoming messages will be routed via **Failure** connection type until there's space available.

> **Note**: **Period value** and **Period time unit** fields support templatization.

**Output**
- **Success**: If message was delayed successfully.
- **Failure**: If maximum pending messages is reached or unexpected error happened during messages processing.

> **Note**: Incoming messages are not modified during processing.

**Usage example: waiting for external long-running tasks**

Consider the following scenario: we have an external API that initiates a long-running task. Upon the initial request, the API responds immediately, indicating that the task has started. However, we need to ensure the task is completed before we can proceed with further processing.

Solution with delay node:
1. **Initiate the task**: Our rule chain starts with the REST API call node, which makes a request to the external API to initiate the long-running task.
2. **Receive immediate response**: The external API quickly returns a response, confirming the task has been launched.
3. **Waiting for completion**: After receiving the initial response, instead of proceeding immediately, we introduce the delay node into our rule chain. This node is configured to introduce a 30-second wait, providing time for the external task to complete.
4. **Continue processing**: Once the delay is over, processing resumes, possibly involving another REST API call to check the status or retrieve results of the long-running task, and then proceeding with the next steps in the rule chain based on the task's completion status.

By using the delay node in this manner, we handle scenarios where immediate processing is not feasible due to external dependencies, ensuring smoother and more accurate message handling.

![Rule chain example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delay-chain.png)

**Deprecation**

Because this node temporarily stores delayed messages in memory (thus, while message is in processing it is not persistent), they may be lost if ThingsBoard is restarted or node configuration is changed: these actions trigger node initialization during which old node state (which holds currently delayed messages) is cleared and new empty one is created.

**Notes**

Usage with sequential processing strategy: please, be aware that this node acknowledges incoming message, which will trigger processing of the next message in the queue.

<br>

## Generator Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-generator.png)

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

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-generator-config.png)

All fields in resulting object are optional and will be taken from previously generated Message if not specified.

Outbound Message from this Node will be new Message that was constructed using configured JavaScript function.

JavaScript generator function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

This node can be used for Rule Chain debugging purposes.

<br>

## Log Node 

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-log.png)

Transform incoming Message with configured JavaScript function to String and log final value into the Thingsboard log file. 

**INFO** log level is used for logging.

JavaScript function receive 3 input parameters 

- <code>metadata</code> - is a Message metadata.
- <code>msg</code> - is a Message payload.
- <code>msgType</code> - is a Message type.

Script should return String value.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-log-config.png)

JavaScript transform function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

You can see the real life example, where this node is used, in the next tutorial:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial#log-unknown-request)

## RPC Call Reply Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-rpc-call-reply.png)

Sends response to the RPC Call originator. All incoming RPC requests are passed through Rule Chain as Messages.
Also all RPC requests have request ID field. It is used for mapping requests and responses.
Message Originator must be a **Device** entity because RPC response is initiated to the Message Originator.

Node configuration has special request ID field mapping. If the mapping is not specified, **requestId** metadata field is used by default. 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-rpc-call-reply-config.png)

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

## RPC Call Request Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-rpc-call-request.png)

Sends RPC requests to the Device and routing response to the next Rule nodes.
Message Originator must be a **Device** entity as RPC request can be initiated only to device.

Node configuration has **Timeout** field used to specify timeout waiting for response from device.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-rpc-call-request-config.png)

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

<br>

## Save Attributes Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-attributes.png)

Stores attributes from incoming Message payload to the database and associate them to the Entity, that is identified by the Message Originator. 
Configured **scope** is used to identify attributes scope.

Supported scope types:

- Client attributes
- Shared attributes
- Server attributes

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-attributes-config.png)

Expects messages with **POST_ATTRIBUTES_REQUEST** message type.
If message Type is not **POST_ATTRIBUTES_REQUEST**, Message will be routed via **Failure** chain. 

When attributes are uploaded over existing API (HTTP / MQTT / CoAP / etc.) Message with correct payload and type will be passed into **Input** node of the **Root Rule Chain**.

In cases when it is required to trigger attributes saving inside Rule Chain, the Rule Chain should be configured to transform Message payload 
to the expected format and set message type to **POST_ATTRIBUTES_REQUEST**. It could be done using [**Script Transformation Node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node).

**Expected Message Payload example:**
{% highlight json %}
{
  "firmware_version": "1.0.1",
  "serial_number": "SN-001"
}
{% endhighlight %}

After successful attributes saving, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

<br>

## Save Timeseries Node 

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-timeseries.png)

Stores Timeseries data from incoming Message payload to the database and associate them to the Entity, that is identified by the Message Originator. 
Configured **TTL** seconds is used for timeseries data expiration. **0** value means that data will never expire.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-timeseries-config.png)

Additionally, you could disable updating values for incoming keys for the latest timeseries data (ts_kv_latest table) if **'Skip latest persistence'** flag is set to **true**.
This could be helpful for highly loaded use-cases to decrease the pressure on the DB. 
Please note, this feature could be enabled when the use-case does not require advanced filtering on the Dashboards. 
For getting the latest value, the historical data could be fetched with limit 1 and DESC order.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-timeseries-config-latest.png)

Expects messages with **POST_TELEMETRY_REQUEST** message type. 
If message Type is not **POST_TELEMETRY_REQUEST**, Message will be routed via **Failure** chain.
 
When timeseries data is published over existing API (HTTP / MQTT / CoAP / etc.) Message with correct payload and type will be passed into **Input** node of the **Root Rule Chain**.

In cases when it is required to trigger timeseries data saving inside Rule Chain, the Rule Chain should be configured to transform Message payload  
to the expected format and set message type to **POST_TELEMETRY_REQUEST**. It could be done using [**Script Transformation Node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node).

Message Metadata must contain **ts** field. This field identifies timestamp in milliseconds of published telemetry.

Also, if Message Metadata contains **TTL** field, its value is used for timeseries data expiration, otherwise **TTL** 
from Node Configuration is used.

**Since TB Version 3.3.3** you can enable 'useServerTs' param to use the timestamp of the message processing instead of the timestamp from the message. 
Useful for all sorts of sequential processing if you merge messages from multiple sources (devices, assets, etc).

In the case of sequential processing, the platform guarantees that the messages are processed in the order of their submission to the queue. 
However, the timestamp of the messages originated by multiple devices/servers may be unsynchronized long before they are pushed to the queue. 
The DB layer has certain optimizations to ignore the updates of the "attributes" and "latest values" tables if the new record has a timestamp that is older than the previous record. 

So, to make sure that all the messages will be processed correctly, one should enable this parameter for sequential message processing scenarios.


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

<br>

## Save to Custom Table

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table.png)

Node stores data from incoming Message payload to the Cassandra database into the predefined custom table that should have **cs_tb_** prefix, to avoid the data insertion to the common TB tables.

Please note, that rule node can be used only for **Cassandra DB**.

Configuration:

Administrator should set the custom table name without prefix: **cs_tb_**.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table-name-config.png)

Administrator can configure the mapping between the Message field names and Table columns name. If the mapping key is **$entityId**, that is identified by the Message Originator, then to the appropriate column name(mapping value) will be write the message originator id.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table-config.png)

If specified message field does not exist in the **data** of the message or is not a JSON Primitive, the outbound message will be routed via **Failure** chain, otherwise, the message will be routed via **Success** chain.

**NOTE**: Please make sure that you are not using **metadata** keys in the configuration - only **data** keys are possible.  

<br>

## Assign To Customer Node 

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-assign-to-customer-node.png)

Assign Message Originator Entity to [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/). 

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Dashboard**.

Finds target Customer by customer name pattern and then assign Originator Entity to this customer.

Will create new Customer if it doesn't exists and **Create new Customer if not exists** is set to **true**.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-assign-to-customer-node-configuration.png)

- **Customer name pattern** - can be set direct customer name or pattern can be used, that will be resolved to the real customer name using Message metadata.
- **Create new customer if not exists** - if checked will create new customer if it doesn't exist.
- **Customers cache expiration time** - specifies maximum time interval is seconds allowed to store found customers records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target customer doesn't exist and **Create customer if not exists** is unchecked.

In other cases Message will be routed via **Success** chain. 

<br>

## Unassign From Customer Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-unassign-from-customer-node.png)

Unassign Message Originator Entity from [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/). 

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Dashboard**.

Finds target Customer by customer name pattern and then unassign Originator Entity from this customer.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-unassign-from-customer-node-configuration.png)

- **Customer name pattern** - can be set direct customer name or pattern can be used, that will be resolved to the real customer name using Message metadata.
- **Customers cache expiration time** - specifies maximum time interval is seconds allowed to store found customers records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target customer doesn't exist.

In other cases Message will be routed via **Success** chain. 

<br>

## Create Relation Node 

<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-relation.png)

Create the relation from the selected entity to originator of the message by type and direction. 

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Customer**, **Tenant**, **Dashboard**.

Finds target Entity by metadata key patterns and then create a relation between Originator Entity and the target entity.

If selected entity type **Asset**, **Device** or **Customer**  rule node will create new Entity if it doesn’t exist and selected checkbox: **Create new Entity if not exists**.

**Note:** if selected entity type **Asset** or **Device** you need to set two patterns: 

 - entity name pattern; 
 
 - entity type pattern. 

Otherwise, only name pattern should be set.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-relation-node-configuration.png)

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

    ![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-relation-node-remove-relations.png)

 - change the originator of the incoming message to the selected entity and process outboud messages as messages from another entity: 
 
    ![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-relation-node-change-originator.png)

<br>

## Delete Relation Node

<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
     </tr>
   </thead>
</table> 


![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delete-relation.png)

Delete the relation from the selected entity to originator of the message by type and direction.

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Customer**, **Tenant**, **Dashboard**.

Finds target Entity by entity name pattern and then delete a relation between Originator Entity and this entity.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delete-relation-node-configuration.png)

- **Direction** - following types are allowed: **From**, **To**.
- **Relation type** - type of directed connections to message originator entity. Default types **Contains** and **Manages** can be selected from the drop-down list.
- **Name pattern** - can be set direct entity name or pattern can be used, that will be resolved to the real entity name using Message metadata.
- **Entities cache expiration time** - specifies maximum time interval is seconds allowed to store found target entity records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity doesn't exist.

In other cases Message will be routed via **Success** chain. 


**Note:** Since TB Version 2.3 the rule node has the ability to deletes relation from the originator of the incoming message to the specified entity or to the list of entities based on direction and type by disabling the following checkbox in the rule node configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delete-relation-node-new-functionality.png)

<br>

## GPS Geofencing Events Node

<table  style="width:15%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-gps-geofencing-event-node.png)

Produces incoming messages by GPS based parameters. Extracts latitude and longitude from incoming message data or metadata and returns different events based on configuration parameters (geo fence).

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-default-config.png)

The rule node fetches perimeter information from message metadata by default. If **Fetch perimeter information from message metadata** is unchecked, additional information should be configured.

<br>

###### Fetch perimeter information from message metadata

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

###### Fetch perimeter information from node configuration
 
There are two options of area definition based on the perimeter type:
 
- Polygon 
             
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-polygon-config.png)           

- Circle
                  
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-circle-config.png)       

###### Event Types
There are 4 types of events managed by geofencing rule node:

- **Entered** — is reporting whenever latitude and longitude from the incoming message to belong the required perimeter area for the first time;
- **Left** — is reporting whenever latitude and longitude from the incoming message not belong the required perimeter area for the first time;
- **Inside** and **Outside** events are used to report current status.

Administrator can configure duration time threshold for reporting inside or outside event. For example, whenever minimal inside time is set to 1 minute the message originator is considered as being inside the perimeter 60 seconds after entering the area.
Minimal outside time defines whenever message originator is considered as out of the perimeter as well.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-gps-geofencing-event-node-duration-config.png)  
 
**Failure** chain will to be used when:

   - incoming message has no configured latitude or longitude key in data or metadata. 
   - missing perimeter definition;     

{% include templates/edge/edge-nodes.md %}
