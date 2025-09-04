![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/gps-geofencing-filter-node.png)

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

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/gps-geofencing-circle-static-configuration-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/gps-geofencing-circle-static-configuration-2-pe.png"></object>
{% endif %}

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
⚠️ Note that the "Sheep Tracker Generator" [generator node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#generator-node) will point to not existing device.
You will need to provision device and asset to replicate the example.
