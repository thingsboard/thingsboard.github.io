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

> Note: Since TB Version 2.3.0 the rule node has the ability to get alarm type using pattern with fields from message metadata:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-clear-alarm-fetch-alarm-type-from-metadata.png)

**Alarm Details Builder** script used for updating Alarm Details JsonNode. It is useful for storing additional parameters
inside Alarm. For example you can save attribute name/value pair from Original Message payload or Metadata.

**Alarm Details Builder** script should return **details** object.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-clear-alarm-config.png)

- Message _payload_ can be accessed via <code>msg</code> property. For example <code>msg.temperature</code><br>
- Message _metadata_ can be accessed via <code>metadata</code> property. For example <code>metadata.customerName</code><br>
- Message _type_ can be accessed via <code>msgType</code> property. For example <code>msgType</code><br>
- Current Alarm Details can be accessed via <code>metadata.prevAlarmDetails</code>.

**Note** that  <code>metadata.prevAlarmDetails</code> is a raw String field and it needs to be converted into object using this construction:

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

- [Create and Clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)
