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

> Note: Since TB Version 2.3.0 the rule node has the ability to:

-  read alarm config from message:

-  get alarm type using pattern with fields from message metadata:

   ![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-create-alarm-config-from-msg.png)

> Note: Since TB Version 2.4.3 the rule node has the ability to:

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
