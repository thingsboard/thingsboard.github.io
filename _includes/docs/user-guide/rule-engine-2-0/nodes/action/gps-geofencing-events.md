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

