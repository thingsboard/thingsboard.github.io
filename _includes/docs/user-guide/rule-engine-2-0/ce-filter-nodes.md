
Filter Nodes are used for Message filtering and routing.

* TOC
{:toc}

##### Check Relation Filter Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-check-relation.png)

Checks the relation from the selected entity to originator of the message by type and direction.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-check-relation-config.png)

If relation exists - Message is sent via **True** chain, otherwise **False** chain is used.

**Note:** Since TB Version 2.3 the rule node has the ability to check the existence of relation to a specific entity or<br> to any entity based on direction and relation type by disabling the following checkbox in the rule node configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/check-relation-checkbox.png)

In case that checkbox disabled and any relation exists - Message is sent via **True** chain, otherwise **False** chain is used.

##### Check Existence Fields Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/check-existance-fields.png)

Rule node checks the existence of the selected keys from incoming message data and metadata.

![image](/images/user-guide/rule-engine-2-0/nodes/check-existance-fields-config.png)

If selected checkbox **Check that all selected keys are present** and all keys in message data and metadata exists - send Message via **True** chain, otherwise, **False** chain is used.<br>
In case that checkbox is not selected, and at least one of the keys from data or metadata of the message exists - send Message via **True** chain, otherwise, **False**  chain is used.

##### Message Type Filter Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-message-type.png)

In the Node configuration, administrator defines set of allowed Message Types for incoming Message. 
There are [predefined Message Types](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) in the system, like **Post attributes**, **Post telemetry**, **RPC Request**, etc.
An administrator can also define any Custom Message Types in the node configuration.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-message-type-config.png)

If incoming Message Type is expected - Message is sent via **True** chain, otherwise **False** chain is used.

##### Message Type Switch Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-message-type-switch.png)

Route incoming messages by Message Type. If incoming Message has known [Message Type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) then it is sent to the corresponding chain, 
otherwise, message is sent to **Other** chain.

If you use Custom Message Types than you can route those messages via **Other** chain of **Message Type Switch Node** 
to the **Switch Node** or **Message Type Filter Node** configured with required routing logic.

##### Originator Type Filter Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-originator-type.png)

In the Node configuration, administrator defines set of allowed Originator [Entity](/docs/{{docsPrefix}}user-guide/entities-and-relations/) types for incoming Message. 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-originator-type-config.png)

If incoming Originator Type is expected - Message is sent via **True** chain, otherwise **False** chain is used.

##### Originator Type Switch Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-originator-type-switch.png)

Routes incoming messages by Originator [Entity](/docs/{{docsPrefix}}user-guide/entities-and-relations/) type. 

##### Script Filter Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-script.png)

Evaluates incoming Message with configured JavaScript condition. 

JavaScript function receive 3 input parameters: 

- <code>msg</code> - is a Message payload.
- <code>metadata</code> - is a Message metadata.
- <code>msgType</code> - is a Message type.

Script should return Boolean value.
If **True** - send Message via **True** chain, otherwise **False** chain is used.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-script-config.png)
 
Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br/> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.customerName === 'John';</code><br/> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br/> 

Full script example:

{% highlight javascript %}
if(msgType === 'POST_TELEMETRY_REQUEST') {
    if(metadata.deviceType === 'vehicle') {
        return msg.humidity > 50;
    } else if(metadata.deviceType === 'controller') {
        return msg.temperature > 20 && msg.humidity > 60;
    }
}

return false;
{% endhighlight %}

JavaScript condition can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-javascript-functions).

You can see the real life examples, where this node is used, in the next tutorials:

- [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)
- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-filter-script-node)

##### Switch Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch.png)

Routes incoming Message to one OR multiple output chains. Node executes configured JavaScript function.

JavaScript function receive 3 input parameters: 

- <code>msg</code> - is a Message payload.
- <code>metadata</code> - is a Message metadata.
- <code>msgType</code> - is a Message type.
 
The script should return **_an array of next Relation names_** where Message should be routed.
If returned array is empty - message will not be routed to any Node and discarded.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch-config.png)

Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br/> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.customerName === 'John';</code><br/> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br/> 

Full script example:

{% highlight javascript %}
if (msgType === 'POST_TELEMETRY_REQUEST') {
    if (msg.temperature < 18) {
        return ['Low Temperature Telemetry'];
    } else {
        return ['Normal Temperature Telemetry'];
    }
} else if (msgType === 'POST_ATTRIBUTES_REQUEST') {
    if (msg.currentState === 'IDLE') {
        return ['Idle State', 'Update State Attribute'];
    } else if (msg.currentState === 'RUNNING') {
        return ['Running State', 'Update State Attribute'];
    } else {
        return ['Unknown State'];
    }
}
return [];
{% endhighlight %}

JavaScript switch function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-javascript-functions).

In order to specify custom relation name **Custom** type should be selected. This will allow to input custom relation name.
Custom relation names are case-insensitive.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch-custom-relation.png)

##### GPS Geofencing Filter Node

<table  style="width:15%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing.png)

Filters incoming messages by GPS based parameters. Extracts latitude and longitude from data or metadata and checks if they are inside configured perimeter (geo fence).

![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-default-config.png)

The rule node fetches perimeter information from message metadata by default. If **Fetch perimeter information from message metadata** is unchecked, additional information should be configured.

<br>

###### Fetch perimeter information from message metadata

There are two options of area definition based on the perimeter type:

- Polygon 
           
    Metadata of the incoming message must include key with name **perimeter** and following data structure:
     
{% highlight java %}[[lat1,lon1],[lat2,lon2], ... ,[latN,lonN]]{% endhighlight %}
 
- Circle
                 

{% highlight java %}"centerLatitude": "value1", "centerLongitude": "value2", "range": "value3"

All values for these keys are in double-precision floating-point data type.

The "rangeUnit" key requires specific value from a list of METER, KILOMETER, FOOT, MILE, NAUTICAL_MILE (capital letters obligatory).
{% endhighlight %}

###### Fetch perimeter information from node configuration
 
There are two options of area definition based on the perimeter type:
 
- Polygon 
             
![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-polygon-config.png)           

- Circle
                  
![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-circle-config.png)          
    
if configured latitude and longitude are inside configured perimeter message sent via **True** chain, otherwise **False** chain is used.
      
**Failure** chain will to be used when:

   - incoming message has no configured latitude or longitude key in data or metadata. 
   - missing perimeter definition;     
        
