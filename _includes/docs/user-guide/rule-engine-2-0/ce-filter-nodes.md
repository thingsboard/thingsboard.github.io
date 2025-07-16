
Filter nodes are used for message filtering and routing. You may find list of available nodes below.

* TOC
{:toc}

## asset profile switch

Routes incoming messages based on the name of the asset profile. The asset profile name is case-sensitive.

> **Note:** The output connection of the rule node corresponds to the asset profile name. For example: "Freezer room", "Building", etc.
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Output connections**
* "Freezer room"/"Building"/etc:
  * If message is successfully routed with the relation type corresponding with the asset profile name.
* **Failure:**
  * If message originator`s entity is not an **Asset**.
  * If message originator does not have assigned asset profile.
  * If unexpected error occurred during message processing.

**Usage example**

Experienced platform users utilize [asset profiles](/docs/{{docsPrefix}}user-guide/asset-profiles/) and configure specific rule chains per asset profile. 
This is useful to automatically route messages the platform generates: Entity Created, Entity Deleted, Attributes Updated, etc.
But most of the messages are derived from the sensor data.
Let's assume we have temperature sensors in the room assets with profiles: "Freezer Room" and "Boiler Room". 
We also take that there is a relation between room asset and temperature device of type "Contains". 
The below rule chain will change the originator of the message from the device to the related asset and route the incoming messages to the "Freezer Room" or "Boiler Room" rule chains.

![image](/images/user-guide/rule-engine-2-0/nodes/asset-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-asset-profile-switch-example-json) and import the rule chain. 
Note that the [rule chain nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) will point to not existing rule chains in your environment.

## device profile switch

Routes incoming messages based on the name of the device profile. The device profile name is case-sensitive.

> **Note:** The output connection of the rule node corresponds to the device profile name. For example: "Temperature sensor", "Humidity sensor", etc.
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Output connections**
* "Temperature sensor"/"Humidity sensor"/etc:
  * If message is successfully routed with the relation type corresponding with the device profile name.
* **Failure:**
  * If message originator`s entity is not a **Device**. 
  * If message originator does not have assigned device profile. 
  * If unexpected error occurred during message processing.

**Usage example**

Experienced platform users utilize [device profiles](/docs/{{docsPrefix}}user-guide/device-profiles/) and configure specific rule chains per device profile.
This is useful in most of the cases, except when the device data is derived from some other message.
For example, you may use BLE to MQTT gateway and BLE beacons. The Gateway payload typically contains MAC of the beacon and beacon data:

```json
{"mac": "7085C2F13DCD", "rssi": -25, "payload": "AABBCC"}
```

Let's assume you have different beacon profiles - indoor air quality "IAQ sensor" device profile and leak sensors "Leak sensor" device profile. 
The below rule chain will change the originator of the message from gateway to device and forward the message to the corresponding rule chain:

![image](/images/user-guide/rule-engine-2-0/nodes/device-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-device-profile-switch-example-json) and import the rule chain. 
Note that the [rule chain nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) will point to not existing rule chains in your environment.

## alarm status filter {#check-alarm-status}

Filters messages based on the specified [alarm](/docs/{{docsPrefix}}user-guide/alarms/) statuses.

**Configuration**

* **Alarm status** - controls the statuses to filter by. Available statuses: **_Active Acknowledged_**, **_Active Unacknowledged_**, **_Cleared Acknowledged_**, **_Cleared Unacknowledged_**.

![image](/images/user-guide/rule-engine-2-0/nodes/check-alarm-status-configuration.png)

**Output connections**
* **True:**
  * If the message matches any of the selected alarm statuses.
* **False:** 
  * If the message does not match any of the selected alarm statuses.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Consider a scenario where you want to process alarms that are currently active. 
You can configure the rule node to filter for **_Active Unacknowledged_** and **_Active Acknowledged_** statuses. 
This setup ensures that only alarms which are currently active, whether they have been acknowledged or not, are processed further.

![image](/images/user-guide/rule-engine-2-0/nodes/check-alarm-status-chain.png)

You may [download](https://gist.github.com/ShvaykaD/dce641880a78013a273f8f8c82fa7f1e#file-alarm-status-filter-example-json) and import the rule chain.

## check fields presence {#check-existence-fields-node}

Checks the presence of the specified fields in the message and/or metadata. 
Both message and metadata is typically a JSON object.

**Configuration**

* **Message field names** - list of field names that should be present in the message.
* **Metadata field names** - list of field names that should be present in the metadata. 
* **Check that all specified fields are present** - if enabled, checks the presence of all fields, otherwise at least one. 

![image](/images/user-guide/rule-engine-2-0/nodes/check-fields-presence-configuration.png)

**Output connections**
* **True:**
  * If all specified fields are present when the **Check that all specified fields are present** toggle is enabled. 
  * If at least one specified field is present when the **Check that all specified fields are present** toggle is disabled.
* **False:**
  * If any of the specified fields are missing when the **Check that all specified fields are present** toggle is enabled. 
  * If none of the specified fields are present when the **Check that all specified fields are present** toggle is disabled.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

See configuration screenshot.

## check relation presence {#check-relation-filter-node}

Checks the presence of the [relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) between the message originator and other entities.

**Configuration**

* **Direction** - direction of the relation. Either **_From originator_** or **_To originator_**.
  > **Note:** The value corresponds to the direction of the relation from the originator to the specific/any entity or from the specific/any entity to the originator.
* **Relation type** - type of the relation. Default relation types are "Contains" and "Manages", but you may create relation of any type.
* **Check relation to specific entity** - if enabled, checks the presence of the relation to a particular entity, otherwise to an entity that matches the direction and relation type criteria.
  > **Note:** The configuration to specify a particular entity appears, only if **Check relation to specific entity** is enabled.

![image](/images/user-guide/rule-engine-2-0/nodes/check-relation-configuration.png)

**Output connections**
* **True:**
  * If the specified relation to the specific entity is present when the **Check relation to specific entity** toggle is enabled. 
  * If the specified relation to any entity is present when the **Check relation to specific entity** toggle is disabled.
* **False:**
  * If the specified relation to the specific entity is not present when the **Check relation to specific entity** toggle is enabled. 
  * If the specified relation to any entity is not present when the **Check relation to specific entity** toggle is disabled.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Let's assume you have temperature sensor inside the office and also inside the warehouses. 
During the data processing, you may want to know either the sensor is located in the office or in the warehouse.
To achieve this one should provision the "OfficeToDevice" relation from the Office asset to the sensor device located in the office.  
See configuration screenshot to learn how to configure the rule node for this specific case. 

## entity type filter {#originator-type-filter-node}

Filters incoming messages by type of message originator entity. 
Checks that the entity type of the incoming message originator matches one of the values specified in the filter.

**Configuration**

* **Select entity types** - list of entity types to filter messages: **Device**, **Asset**, **User**, etc.

![image](/images/user-guide/rule-engine-2-0/nodes/entity-type-configuration.png)

**Output connections**
* **True:**
  * If the message originator type matches one of the selected entity types.
* **False:**
  * If the message originator type does not match any of the selected entity types.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

See configuration screenshot.

## entity type switch {#originator-type-switch-node}

Routes incoming messages based on the entity type of the message originator.

**Output**

> **Note:** The output connection of the rule node corresponds to the entity type of the message originator. For example: "Device", "Asset", "User", etc.

**Output connections**
* "Device"/"Asset"/etc:
  * If message is successfully routed with the relation type corresponding with the entity type.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Let's assume you have messages from different entities processed in one rule chain. 
You may want to split the message flow based on entity type.
See below:

![image](/images/user-guide/rule-engine-2-0/nodes/entity-type-switch-chain.png)

## message type filter {#message-type-filter-node}

Filters incoming messages based on one or more [predefined](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) or custom message types. 
Checks that the message type of the incoming message matches one of the values specified in the configuration.

**Configuration**

* **Select message types** - list of message types. Both [predefined](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) and custom message types are supported.

![image](/images/user-guide/rule-engine-2-0/nodes/message-type-configuration.png)

**Output connections**
* **True:**
  * If the incoming message type matches one of the selected message types.
* **False:**
  * If the incoming message type does not match any of the selected message types.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

See configuration screenshot.

## message type switch {#message-type-switch-node}

Routes incoming messages by the message type value. 
If the incoming message has known [message type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) then it is sent to the corresponding chain, otherwise, message is sent to **Other** chain.

> **Note:** The output connection of the rule node corresponds to the type of the message. For example: "Post Telemetry", "Custom", etc.
If you use custom message types than you can route those messages via **Other** chain.

**Output connections**
* "Post telemetry"/**Other**:
  * If message is successfully routed with the relation type corresponding with message type value.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Let's assume you have messages with different types processed in one rule chain. 
You may want to split the message flow based on message type.
See below:

![image](/images/user-guide/rule-engine-2-0/nodes/message-type-switch-chain.png)

## script {#script-filter-node}

Evaluates boolean function using incoming message. The function may be written using [TBEL](/docs/{{docsPrefix}}user-guide/tbel/)(recommended) or plain JavaScript. 
Script function should return boolean value and accepts three parameters.

**Configuration**

**TBEL/JavaScript** - controls in which language the function will be written. It receives 3 input parameters:
  * <code>msg</code> - is a message payload, typically a JSON object or array.
  * <code>metadata</code> - is a message metadata. Represented as a key-value map. Both keys and values are strings.
  * <code>msgType</code> - is a message type, string.

![image](/images/user-guide/rule-engine-2-0/nodes/script-filter-node-configuration.png)

**Output connections**
* **True:**
  * If the script evaluation returns <code>true</code>.
* **False:**
  * If the script evaluation returns <code>false</code>.
* **Failure:**
  * If the script evaluation fails.

**Usage example**
 
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

* [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/).
* [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-filter-script-node).

## switch {#switch-node}

Routes incoming message to one or multiple output connections. 
Node executes configured [TBEL](/docs/{{docsPrefix}}user-guide/tbel/)(recommended) or JavaScript function that returns array of strings (connection names).

**Configuration**

**TBEL/JavaScript** - controls in which language the function will be written. It receives 3 input parameters:
  * <code>msg</code> - is a message payload, typically a JSON object or array.
  * <code>metadata</code> - is a message metadata. Represented as a key-value map. Both keys and values are strings.
  * <code>msgType</code> - is a message type, string.

The script should return an array of node connection names where incoming message should be routed.
If returned array is empty - message will not be routed to any node and discarded.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch-configuration.png)

> **Note:** The output connection of the rule node corresponds to the result of the script execution. For example: "Low Temperature Telemetry", "Normal Temperature Telemetry", "Idle State", etc.
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Output connections**
* "Low Temperature Telemetry"/"Idle State"/etc:
  * If message is successfully routed with the relation type corresponding with the result of the script execution.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

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

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch.png)

TBEL/JavaScript condition can be verified using [test filter function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

## GPS geofencing filter {#gps-geofencing-filter-node}

Filters incoming messages by GPS-based geofencing. 
Extracts latitude and longitude parameters from the incoming message and checks them according to configured perimeter.

**Configuration: Coordinate field names**
* **Latitude field name** - message field that contains location latitude.
* **Longitude field name** - message field that contains location longitude.

> **Note:** Rule node tries to fetch the specified fields from the message. If they are not present, it will look them up in the message metadata.

**Configuration: Geofence configuration**
* **Perimeter type** - **Polygon** or **Circle**.
* **Fetch perimeter information from metadata** - if enabled, rule node will fetch the perimeter information from the message metadata.  
  > **Note:** Useful if your perimeter is specific to the entity(device/asset/etc) and you store it as entity [attribute](/docs/{{docsPrefix}}user-guide/attributes).
* **Perimeter key name** - metadata key that stores perimeter information.
  * For **Polygon** perimeter type:  
     * **Polygon definition** - string that contains array of coordinates in the following format: <code>[[lat1, lon1],[lat2, lon2],[lat3, lon3], ... , [latN, lonN]]</code>.
  * For **Circle** perimeter type:      
     * **Center latitude** - latitude of the circle perimeter center;
     * **Center longitude** - longitude of the circle perimeter center;
     * **Range** - value of the circle perimeter range, double-precision floating-point value;
     * **Range units** - one of: Meter, Kilometer, Foot, Mile, Nautical Mile.
    
> **Note:** Rule node will use default metadata key names, if the **Fetch perimeter from message metadata** is enabled and **Perimeter key name** is not configured.
Default metadata key names for polygon perimeter type is "perimeter". Default metadata key names for circle perimeter are: "centerLatitude", "centerLongitude", "range", "rangeUnit".

Structure of the circle perimeter definition (stored in server-side attribute, for example):

```json
{"latitude": 48.198618758582384, "longitude": 24.65322245153503, "radius": 100.0, "radiusUnit": "METER"}
```

Available radius units: "METER", "KILOMETER", "FOOT", "MILE", "NAUTICAL_MILE";

**Output connections**
* **True:**
  * If coordinate from message inside the configured geofence.
* **False:**
  * If coordinate from message outside the configured geofence.
* **Failure:**
  * If the incoming message has no configured latitude or longitude key in message or message metadata. 
  * If missing perimeter definition. 
  * If unexpected error occurred during message processing.

**Usage example: static circle perimeter**

Let's assume you would like to check that the location of the device is within 100 meters from the Ukraine's Independence Monument, located in the center of Kyiv.
The coordinates of the monument are the following: 

* latitude: <code>50.4515652</code>; 
* longitude: <code>0.5236963</code>.

The configuration of the rule node is quite simple:

![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-circle-static-configuration.png)

**Usage example: static polygon perimeter**

Let's assume a simple livestock location monitoring use case. Let's configure the rule node to monitor that the sheep is within area perimeter:

We will use static polygon coordinates of the farm field: 

```json
[[48.19736726399899, 24.652353415807884], [48.19800374220741, 24.65060461551745], [48.19918370897885, 24.65317953619048], [48.19849718616351, 24.65420950445969]]
```  

You may test that rule node returns **True** if you submit the following coordinates in the message: 

```json
{"latitude": 48.198618758582384, "longitude": 24.65322245153503}
```

![image](/images/user-guide/rule-engine-2-0/nodes/filter-gps-geofencing-perimeter-static-configuration.png)

**Usage example: dynamic circle/polygon perimeter**

Let's review more complex livestock location monitoring case, where you may have sheeps located in different farms.
Let's assume we have created two farms: "Farm A" and "Farm B". Each livestock tracker device is related either to "Farm A" or "Farm B" asset.

![image](/images/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-farm-relation.png)

We will configure server-side attribute called "perimeter" with the JSON value: 

```json
[[48.19736726399899, 24.652353415807884], [48.19800374220741, 24.65060461551745], [48.19918370897885, 24.65317953619048], [48.19849718616351, 24.65420950445969]]
```

![image](/images/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-farm-attribute.png)

The below rule chain will fetch the attribute from the related asset "Farm A" and use it in the geofencing node:

![image](/images/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-dynamic-example.png)

Rule node configuration is fairly simple. Please note that perimeter key name is without any prefix:

![image](/images/user-guide/rule-engine-2-0/nodes/gps-geofencing-filter-dynamic-configuration.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-gps-geofencing-filter-example) and import the rule chain. 
Note that the "Sheep Tracker Generator" [generator node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#generator-node) will point to not existing device. 
You will need to provision device and asset to replicate the example.
