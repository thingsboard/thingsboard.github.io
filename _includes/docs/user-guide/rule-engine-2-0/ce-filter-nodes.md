
Filter Nodes are used for Message filtering and routing. You may find list of available nodes below.

* TOC
{:toc}
  
## asset profile switch

Route incoming messages based on the name of the asset profile. The asset profile name is case-sensitive. Available since **v3.4.4**.

**Output**

The output connection of the rule node corresponds to the asset profile name. For example: "Freezer room", "Building", etc. 
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Usage example**

Experienced platform users utilize [Asset Profiles](/docs/{{docsPrefix}}user-guide/asset-profiles/) and configure specific rule chains per Asset Profile. 
This is useful to automatically route messages the platform generates: Asset Created, Deleted, Attribute Updated, etc.
But most of the messages are derived from the sensor data.
Let's assume we have temperature sensors in the room assets with profiles: "Freezer Room" and "Boiler Room". We also take that there is a relation between room asset and temperature device of type "Contains". 
The below rule chain will change the originator of the message from the device to the related asset and route the incoming messages to the "Freezer Room" or "Boiler Room" rule chains.  
 
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/asset-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-asset-profile-switch-example-json) and import the rule chain. 
Note that the "rule chain" nodes will point to not existing rule chains in your environment.

<br>

## device profile switch

Route incoming messages based on the name of the device profile. The device profile name is case-sensitive. Available since **v3.4.4**.

**Output**

The output connection of the rule node corresponds to the device profile name. For example: "Temperature sensor", "Humidity sensor", etc. 
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Usage example**

Experienced platform users utilize [Device Profiles](/docs/{{docsPrefix}}user-guide/device-profiles/) and configure specific Rule Chains per Device Profile.
This is useful in most of the cases, except when the device data is derived from some other message.
For example, you may use BLE to MQTT gateway and BLE beacons. The Gateway payload typically contains MAC of the beacon and beacon data:

```json
{"mac": "7085C2F13DCD", "rssi": -25, "payload": "AABBCC"}
```

Let's assume you have different beacon profiles - indoor air quality ("IAQ sensor") and leak sensors ("Leak sensor"). 
The below rule chain will change the originator of the message from gateway to device and forward the message to the corresponding rule chain:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/device-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-device-profile-switch-example-json) and import the rule chain. 
Note that the "rule chain" nodes will point to not existing rule chains in your environment.

<br>

## check alarm status

Checks the [Alarm](/docs/{{docsPrefix}}user-guide/alarms/) status to match one of the specified statuses.

**Configuration**

 * Alarm status filter - Contains list of alarms statuses. 
  Available statuses: "Active Acknowledged", "Active Unacknowledged", "Cleared Acknowledged", "Cleared Unacknowledged".

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/check-alarm-status-configuration.png)

**Output**

Output connection types: "True" or "False".

**Example**

The rule chain below will check that the acknowledged alarm is still active or already cleared.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/check-alarm-status-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-check-alarm-status-example-json) and import the rule chain.

<br>

## check fields presence {#check-existence-fields-node}

Checks the presence of the specified fields in the message and/or metadata. 
Both message and metadata is typically a JSON object. 
User specifies message and/or metadata field names in the configuration.
 

**Configuration**

 * Message field names - list of field names that should be present in the message;
 * Metadata field names - list of field names that should be present in the metadata;
 * 'Check that all specified fields are present' checkbox - check the presence of all (if checked) or of at least one field (if unchecked). 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/check-fields-presence-configuration.png)

**Output**

Output connection types: "True" or "False".

**Example**

See configuration screenshot. 

<br>

## check relation {#check-relation-filter-node}

Checks the presence of the [Relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) between the originator of the message and other entities.
If 'check relation to specific entity' is selected, one must specify a related entity. Otherwise, the rule node checks the presence of a relation to any entity that matches the direction and relation type criteria.

**Configuration**

 * 'check relation to specific entity' checkbox enables configuration of specific entity used to check the relation.
 * Direction - configures direction of the relation. It is either 'From' or 'To'. The value corresponds to direction of the relation from the specific/any entity to the originator.
   See example.
 * Relation type - arbitrary relation type. Default relation types are 'Contains' and 'Manages', but you may create relation of any type. 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/check-relation-configuration.png)

**Output**

Output connection types: "True" or "False".

**Example**

Let's assume you have temperature sensor inside the office and also inside the warehouses. 
During the data processing, you may want to know either the sensor is located in the office or in the warehouse.
To achieve this one should provision the "OfficeToDevice" relation from the Office asset to the sensor device located in the office.  
See configuration screenshot to learn how to configure the rule node for this specific case. 

<br>

## entity type {#originator-type-filter-node}

Filter incoming messages by the type of message originator entity. 
Checks that the entity type of the incoming message originator matches one of the values specified in the filter.

**Configuration**

 * Originator types filter - list of entity types: Device, Asset, User, etc.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/entity-type-configuration.png)

**Output**

Output connection types: "True" or "False".

**Example**

See configuration screenshot.

<br>

## entity type switch {#originator-type-switch-node}

Switch incoming messages by the type of message originator entity.

**Output**

The output connection of the rule node corresponds to the entity type of the message originator. For example: "Device", "Asset", "User", etc.

**Example**

Let's assume you have messages from different entities processed in one rule chain. 
You may want to split the message flow based on entity type.
See below:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/entity-type-switch-chain.png)

<br>

## message type {#message-type-filter-node}

Filter incoming messages based on one or more [predefined](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) or custom message types. 
Checks that the message type of the incoming message matches one of the values specified in the filter.

**Configuration**

 * Message types filter - list of [predefined](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) message types. 
   Custom message types are supported as well.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/message-type-configuration.png)

**Output**

Output connection types: "True" or "False".

**Example**

See configuration screenshot.

<br>

## message type switch {#message-type-switch-node}

Route incoming messages by the message type value. 
If incoming Message has known [Message Type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) 
then it is sent to the corresponding chain, otherwise, message is sent to **Other** chain.

If you use custom message types than you can route those messages via **Other** chain of **Message Type Switch Node** 
to the [**message type**](#message-type) configured with required routing logic.

**Output**

The output connection of the rule node corresponds to the type of the message. For example: "Device", "Asset", "User", etc.

**Example**

Let's assume you have messages with different types processed in one rule chain. 
You may want to split the message flow based on message type.
See below:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/message-type-switch-chain.png)

<br>

## script {#script-filter-node}

Evaluates boolean function using incoming message. The function may be written using [TBEL](/docs/{{docsPrefix}}user-guide/tbel/)(recommended) or plain JavaScript.  
Script function should return boolean value and accepts three parameters.

**Configuration**

TBEL/JavaScript function receive 3 input parameters: 

- <code>msg</code> - is a message payload, typically a JSON object or array.
- <code>metadata</code> - is a message metadata. Represented as a Key-Value map. Both keys and values are strings.
- <code>msgType</code> - is a message type, string.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/script-filter-node-configuration.png)

**Output**

Output connection types: "True" or "False".

**Examples**
 
Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.deviceType === 'DHT11';</code><br> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br> 

Full script example:

```javascript
if(msgType === 'POST_TELEMETRY_REQUEST') {
    if(metadata.deviceType === 'vehicle') {
        return msg.humidity > 50;
    } else if(metadata.deviceType === 'controller') {
        return msg.temperature > 20 && msg.humidity > 60;
    }
}

return false;
```
{: .copy-code}

TBEL/JavaScript condition can be verified using [test filter function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

You can see the real life examples, where this node is used, in the next tutorials:

- [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)
- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-filter-script-node)

<br>

## switch {#switch-node}

Routes incoming message to one OR multiple output connections. 
Node executes configured [TBEL](/docs/{{docsPrefix}}user-guide/tbel/)(recommended) or JavaScript function that returns array of strings (connection names).

**Configuration**

TBEL/JavaScript function receive 3 input parameters: 

- <code>msg</code> - is a message payload, typically a JSON object or array.
- <code>metadata</code> - is a message metadata. Represented as a Key-Value map. Both keys and values are strings.
- <code>msgType</code> - is a message type, string.

The script should return **_an array of next Relation names_** where Message should be routed.
If returned array is empty - message will not be routed to any Node and discarded.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/filter-switch-configuration.png)

**Output**

The output connection of the rule node corresponds to the result of the script execution. For example: "Low Temperature Telemetry", "Normal Temperature Telemetry", "Idle State", etc.
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Examples**

Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.customerName === 'John';</code><br> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br> 

Full script example:

```javascript
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
```
{: .copy-code}

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/filter-switch.png)

TBEL/JavaScript condition can be verified using [test filter function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

<br>

## GPS geofencing filter {#gps-geofencing-filter-node}

Filter incoming messages by GPS-based geofencing. 
Extracts latitude and longitude parameters from the incoming message and checks them according to configured perimeter.

**Configuration**

 * Latitude key name - name of the message field that contains location latitude;
 * Longitude key name - name of the message field that contains location longitude;
 * Perimeter type - Polygon or Circle;
 * Fetch perimeter from message metadata - checkbox to load perimeter from message metadata; 
   Enable if your perimeter is specific to device/asset and you store it as device/asset attribute;
 * Perimeter key name - name of the metadata key that stores perimeter information;
 * For Polygon perimeter type:  
    * Polygon definition - string that contains array of coordinates in the following format: [[lat1, lon1],[lat2, lon2],[lat3, lon3], ... , [latN, lonN]]
 * For Circle perimeter type:      
    * Center latitude - latitude of the circle perimeter center;
    * Center longitude - longitude of the circle perimeter center;
    * Range - value of the circle perimeter range, double-precision floating-point value;
    * Range units - one of: Meter, Kilometer, Foot, Mile, Nautical Mile;
    
Rule node will use default metadata key names, if the "Fetch perimeter from message metadata" is enabled and "Perimeter key name" is not configured.
Default metadata key names for polygon perimeter type is "perimeter". Default metadata key names for circle perimeter are: "centerLatitude", "centerLongitude", "range", "rangeUnit".

Structure of the circle perimeter definition (stored in server-side attribute, for example):

```json
{"latitude":  48.198618758582384, "longitude": 24.65322245153503, "radius":  100.0, "radiusUnit": "METER" }
```

Available radius units: METER, KILOMETER, FOOT, MILE, NAUTICAL_MILE;
    
**Output**

Output connection types: "True" or "False". 
The "Failure" connection will to be used when: a) incoming message has no configured latitude or longitude key in data or metadata or b) missing perimeter definition;     

**Examples**

*Static circle perimeter*

Let's assume you would like to check that the location of the device is within 100 meters from the Ukraine's Independence Monument, located in the center of Kyiv.
The coordinates of the monument are the following: latitude = 50.4515652, longitude = 0.5236963. The configuration of the rule node is quite simple:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-circle-static-configuration.png)

*Static polygon perimeter*

Let's assume a simple livestock location monitoring use case. Let's configure the rule node to monitor that the sheep is within area perimeter:

We will use static polygon coordinates of the farm field: 

```json
[[48.19736726399899, 24.652353415807884], [48.19800374220741, 24.65060461551745], [48.19918370897885, 24.65317953619048], [48.19849718616351, 24.65420950445969]]
```  

You may test that rule node returns 'True' if you submit the following coordinates in the message: 

```json
{ latitude: 48.198618758582384, longitude: 24.65322245153503 }
```

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-perimeter-static-configuration.png)

*Dynamic circle/polygon perimeter*

Let's review more complex livestock location monitoring case, where you may have sheeps located in different farms.
Let's assume we have created two farms: Farm A and Farm B. Each livestock tracker device is related either to Farm A or Farm B asset.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-farm-relation.png)

We will configure server-side attribute called "perimeter" with the JSON value: "[[48.19736726399899, 24.652353415807884], [48.19800374220741, 24.65060461551745], [48.19918370897885, 24.65317953619048], [48.19849718616351, 24.65420950445969]]";

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-farm-attribute.png)

The below rule chain will fetch the attribute from the related asset (Farm A) and use it in the geofencing node:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-dynamic-example.png)

Rule node configuration is fairly simple. Please note that perimeter key name is without any prefix:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-dynamic-configuration.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-gps-geofencing-filter-example) and import the rule chain. 
Note that the "rule chain" nodes will point to not existing device in the "Sheep Tracker Generator" node. 
You will need to provision device and asset to replicate the example.

<br>
