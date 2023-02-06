
Filter Nodes are used for Message filtering and routing. You may find list of available nodes below.

* TOC
{:toc}
  
## asset profile switch

Route incoming messages based on the name of the asset profile. The asset profile name is case-sensitive. Available since **v3.4.4**.

**Output**

The output relation of the rule node corresponds to the asset profile name. For example: "Freezer room", "Building", etc. 

**Usage example**

Experienced platform users utilize [Asset Profiles](/docs/{{docsPrefix}}user-guide/asset-profiles/) and configure specific rule chains per Asset Profile. 
This is useful to automatically route messages the platform generates: Asset Created, Deleted, Attribute Updated, etc.
But most of the messages are derived from the sensor data.
Let's assume we have temperature sensors in the room assets with profiles: "Freezer Room" and "Boiler Room". We also take that there is a relation between room asset and temperature device of type "Contains". 
The below rule chain will change the originator of the message from the device to the related asset and route the incoming messages to the "Freezer Room" or "Boiler Room" rule chains.  
 
![image](/images/user-guide/rule-engine-2-0/nodes/asset-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-asset-profile-switch-example-json) and import the rule chain. 
Note that the "rule chain" nodes will point to not existing rule chains in your environment.

## device profile switch

Route incoming messages based on the name of the device profile. The device profile name is case-sensitive. Available since **v3.4.4**.

**Output**

The output relation of the rule node corresponds to the device profile name. For example: "Temperature sensor", "Humidity sensor", etc. 

**Usage example**

Experienced platform users utilize [Device Profiles](/docs/{{docsPrefix}}user-guide/device-profiles/) and configure specific Rule Chains per Device Profile.
This is useful in most of the cases, except when the device data is derived from some other message.
For example, you may use BLE to MQTT gateway and BLE beacons. The Gateway payload typically contains MAC of the beacon and beacon data:

```java
{"mac": "7085C2F13DCD", "rssi": -25, "payload": "AABBCC"}
```

Let's assume you have different beacon profiles - indoor air quality ("IAQ sensor") and leak sensors ("Leak sensor"). 
The below rule chain will change the originator of the message from gateway to device and forward the message to the corresponding rule chain:

![image](/images/user-guide/rule-engine-2-0/nodes/device-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-device-profile-switch-example-json) and import the rule chain. 
Note that the "rule chain" nodes will point to not existing rule chains in your environment.

## check alarm status

Checks the [Alarm](/docs/{{docsPrefix}}user-guide/alarms/) status to match one of the specified statuses.

**Configuration**

 * Alarm status filter - Contains list of alarms statuses. 
  Available statuses: "Active Acknowledged", "Active Unacknowledged", "Cleared Acknowledged", "Cleared Unacknowledged".

![image](/images/user-guide/rule-engine-2-0/nodes/check-alarm-status-configuration.png)

**Output**

Output relation types: "True" or "False".

**Example**

The rule chain below will check that the acknowledged alarm is still active or already cleared.

![image](/images/user-guide/rule-engine-2-0/nodes/check-alarm-status-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-check-alarm-status-example-json) and import the rule chain.


## check fields presence

Checks the presence of the specified fields in the message and/or metadata. 
Both message and metadata is typically a JSON object. 
User specifies message and/or metadata field names in the configuration.
 

**Configuration**

 * Message field names - list of field names that should be present in the message;
 * Metadata field names - list of field names that should be present in the metadata;
 * 'Check that all specified fields are present' checkbox - check the presence of all (if checked) or of at least one field (if unchecked). 

![image](/images/user-guide/rule-engine-2-0/nodes/check-fields-presence-configuration.png)

**Output**

Output relation types: "True" or "False".

**Example**

See configuration screenshot. 

## check relation

Checks the presence of the [Relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) between the originator of the message and other entities.
If 'check relation to specific entity' is selected, one must specify a related entity. Otherwise, the rule node checks the presence of a relation to any entity that matches the direction and relation type criteria.

**Configuration**

 * 'check relation to specific entity' checkbox enables configuration of specific entity used to check the relation.
 * Direction - configures direction of the relation. It is either 'From' or 'To'. The value corresponds to direction of the relation from the specific/any entity to the originator.
   See example.
 * Relation type - arbitrary relation type. Default relation types are 'Contains' and 'Manages', but you may create relation of any type. 

![image](/images/user-guide/rule-engine-2-0/nodes/check-relation-configuration.png)

**Output**

Output relation types: "True" or "False".

**Example**

Let's assume you have temperature sensor inside the office and also inside the warehouses. 
During the data processing, you may want to know either the sensor is located in the office or in the warehouse.
To achieve this one should provision the "OfficeToDevice" relation from the Office asset to the sensor device located in the office.  
See configuration screenshot to learn how to configure the rule node for this specific case. 

## entity type

Filter incoming messages by the type of message originator entity. 
Checks that the entity type of the incoming message originator matches one of the values specified in the filter.

**Configuration**

 * Originator types filter - list of entity types: Device, Asset, User, etc.

![image](/images/user-guide/rule-engine-2-0/nodes/check-relation-configuration.png)

**Output**

Output relation types: "True" or "False".

**Example**

See configuration screenshot.

## entity type switch

Switch incoming messages by the type of message originator entity.

**Output**

The output relation of the rule node corresponds to the entity type of the message originator. For example: "Device", "Asset", "User", etc.

**Example**

Let's assume you have messages from different entities processed in one rule chain. 
You may want to split the message flow based on entity type.
See below:

![image](/images/user-guide/rule-engine-2-0/nodes/entity-type-switch-chain.png)


### OTHER


##### Check Relation Filter Node

{% assign sinceVersion = "2.0.1" %}
{% include templates/since.md %}

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
        
