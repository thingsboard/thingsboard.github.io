{% if docsPrefix == nil or docsPrefix == "pe/" %} {% assign HOST_NAME = "$THINGSBOARD_HOST_NAME" %} {% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}{% assign HOST_NAME = "$THINGSBOARD_EDGE_HOST_NAME" %} {% endif %}
{% if docsPrefix == "paas/" %} {% assign HOST_NAME = "thingsboard.cloud" %} {% endif %}
{% if docsPrefix == "paas/eu/" %} {% assign HOST_NAME = "eu.thingsboard.cloud" %} {% endif %}

* TOC
{:toc}

In ThingsBoard, IoT attributes are key-value pairs that describe the properties, current state, and configuration of connected devices. 
Attribute values can be stored as different data types, such as strings, booleans, double, integer or JSON objects. 
They can represent both static information (for example, firmware version or serial number) and semi-dynamic data (such as device state or temperature), enabling remote monitoring, management, and control of devices within an IoT ecosystem.

Unlike telemetry, attributes are not intended to represent continuously changing sensor data. 

ThingsBoard stores only the latest attribute value along with the timestamp of the last update in the SQL database. This enables use of [entity filters](/docs/{{docsPrefix}}user-guide/dashboards/#entity-filters) in the dashboards.
Changes to the attributes initiated by the user are recorded in the [audit logs](/docs/{{docsPrefix}}user-guide/audit-log/){:target="_blank"}.

> As a platform user, you can define any attribute name. However, we recommend using the [camelCase](https://en.wikipedia.org/wiki/Camel_case){:target="_blank"} naming convention. This makes it easier to write custom JavaScript functions for data processing and visualization.

<hr>

## Attribute types

ThingsBoard supports three attribute scopes:
- **Server-side attributes**
- **Shared attributes**
- **Client-side attributes**

Each scope defines who can write the attribute, who can read it, and what it is typically used for.

<hr>

### Server-side attributes

{:refdef: style="text-align: center;"}
![image](/images/user-guide/server-side-attributes.svg)
{: refdef}

<br>

Server-side attributes are used to store platform-managed metadata and configuration parameters for entities. These attributes are managed only by the ThingsBoard platform and cannot be modified directly by devices.

> They are available for all major entity types, including **Device, Asset, Customer, Tenant, User, etc**.

<b><font size="3">When to use</font></b>   
Use server-side attributes when entity parameters must be controlled centrally by the platform (for example, location data, alarm thresholds, or operational settings).

<b><font size="3">Device interaction</font></b>   
From the device perspective, server-side attributes are not writable. A device cannot publish or update server-side attributes.
However, server-side attributes can be used by the platform to control Rule Engine logic, dashboards, calculated fields, and alarm processing.

**Server-side attributes example**
```json
{
  "latitude": 40.7128,
  "longitude": -74.0060,
  "maxTemperatureThreshold": 40,
  "alarmEnabled": true
}
```

**Explanation**   
This example shows server-side attributes configured by the platform.
- _latitude_ and _longitude_ specify the entity’s location and are commonly used in map widgets. 
- _maxTemperatureThreshold_ defines a temperature limit that can be used by the Rule Engine to trigger alarms or automation. 
- _alarmEnabled_ controls whether alarm generation is active.

These attributes are managed via the ThingsBoard UI or REST API and cannot be modified directly by the device.

<hr>

### Shared attributes

{:refdef: style="text-align: center;"}
![image](/images/user-guide/shared-attributes.svg)
{: refdef}

<br>

Shared attributes are used to deliver configuration and operational parameters (for example, thresholds or feature enable/disable flags) from the platform to the device.

> Shared attributes are available only for [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} entities.

<b><font size="3">When to use</font></b>   
Use shared attributes when the platform needs to remotely control or configure device behavior.

<b><font size="4">Device interaction</font></b>   
From the device perspective, shared attributes are **read-only**. A device cannot publish or modify shared attribute values.   
However, the device can:
- **Send a request to the server** to retrieve the current values of shared server attributes.
- **Subscribe to updates** and receive notifications when shared attribute values change on the server.
- **Receive updates via downlink** (for certain network integrations, shared attribute updates can be delivered to the device as [downlink messages](/docs/user-guide/integrations/#example){:target="_blank"}).

<b><font size="4">Protocol behavior</font></b>   
The method for receiving updates usually depends on the communication protocol used by the device:
- **Real-time subscriptions** (e.g., [MQTT](/docs/{{docsPrefix}}reference/mqtt-api/#attributes-api){:target="_blank"}): Devices that use bi-directional protocols typically subscribe to attribute updates and receive notifications immediately when a value changes.
- **Periodic polling** (e.g., [HTTP](/docs/{{docsPrefix}}reference/http-api/#attributes-api){:target="_blank"}): Devices that use request-response protocols usually poll the server periodically to retrieve the latest shared attribute values.

**Shared attributes example**

```json
{
"targetFirmwareVersion": "v2.4.0",
"reportingInterval": 60,
"maxTemperatureThreshold": 45
}
```

**Explanation**   
This example represents shared attributes, which are used to deliver configuration parameters from the platform to the device:
- _targetFirmwareVersion_ defines the firmware version that the device is expected to run. Devices can use this value to decide whether a firmware upgrade is required.
- _reportingInterval_ defines how frequently the device should publish telemetry data (for example, every 60 seconds).
- _maxTemperatureThreshold_ defines the temperature limit that the device should use locally for control logic (for example, enabling cooling systems).

Shared attributes are writable from the platform and readable by the device. Devices can request their current values or subscribe to updates.

<hr>

### Client-side attributes

{:refdef: style="text-align: center;"}
![image](/images/user-guide/client-side-attributes.svg)
{: refdef}

<br>

**Client-side attributes** are used to report semi-static information from the device (client) to ThingsBoard (server).   
The device firmware or application sends attribute values to the platform, where they can be stored and viewed but not modified from the UI or REST API.

This type of attributes is available only for Devices. It is used to report various semi-static data from Device (Client) to ThingsBoard (Server). 
It is similar to [shared attributes](/docs/{{docsPrefix}}user-guide/attributes/#shared-attributes), but has one important difference.
The device firmware/application may send the value of the attributes from device to the platform.

> Client-side attributes are available only for [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} entities.

<b><font size="3">When to use</font></b>   
The most common use case of client attributes is to report device state.

**Client-side attributes example**

```json
{
"currentFirmwareVersion": "v2.3.1",
"currentConfiguration": {
"mode": "auto",
"interval": 30
},
"deviceState": "ACTIVE"
}
```

**Explanation**   
This example represents client-side attributes, which are reported by the device to ThingsBoard:
- _currentFirmwareVersion_ reports the firmware version currently installed on the device. This can be used for monitoring and fleet management.
- _currentConfiguration_ is a JSON object that reports the device’s active configuration. For example:
- _mode_ defines the operating mode (auto)
- _interval_ defines an internal interval value used by the firmware
- _deviceState_ represents the current device status (for example, ACTIVE, IDLE, ERROR, etc.).

Client-side attributes are writable only by the device. The platform can read them via UI or REST API but cannot modify them.

<hr>

## Create attribute via administration UI

You can create or update attributes directly from the ThingsBoard Administration UI.

1. Select the required entity (for example, **Entities &#8702; Device** (Asset, Customer, etc.)). 
2. Navigate to the **Attributes** tab. 
3. Select the appropriate **scope**:   
   &#8194;&#8226;&#8194;Server-side attribute   
   &#8194;&#8226;&#8194;Shared attribute (Device only)   
   &#8194;&#8226;&#8194;Client-side attribute (read-only, published by device)
4. Click **+** (**Add**) attribute. 
5. Enter:   
   &#8194;&#8226;&#8194;**Key** (attribute name)   
   &#8194;&#8226;&#8194;Select the appropriate **data type** (String, Boolean, Integer, Double, or JSON)   
   &#8194;&#8226;&#8194;**Value**
6. Click **Add**.

The attribute will be stored immediately and become available for [dashboards](https://thingsboard.io/docs/pe/user-guide/dashboards/){:target="_blank"}, [Rule Engine](/docs/pe/user-guide/rule-engine-2-0/overview/){:target="_blank"} and [Calculated fields](/docs/pe/user-guide/calculated-fields/){:target="_blank"} processing, and [REST API](/docs/reference/rest-api/){:target="_blank"} queries.

> **Note:** Client-side attributes cannot be created or modified from the UI because they are published by the device.

{% capture bulk_provisioning %}
[Bulk provisioning](/docs/{{docsPrefix}}user-guide/bulk-provisioning/){:target="_blank"} feature allows you to quickly create multiple devices and assets and their attributes from CSV file.
{% endcapture %}
{% include templates/info-banner.md content=bulk_provisioning %}

<hr>

## REST API

The APIs listed below are available through **Swagger UI**.

Before sending requests, obtain a valid JWT token using the [REST API documentation](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}.
Include the token in the **X-Authorization** header of each request to authenticate API calls.

**Select attribute type**

{% capture attributetypes %}
Server-side attributes<small></small>%,%serverSide%,%templates/attributes/server-side-attributes.md%br%
Shared attributes<small>(Device only)</small>%,%shared%,%templates/attributes/shared-attributes.md%br%
Client-side attributes<small>(read-only, published by device)</small>%,%clientSide%,%templates/attributes/client-side-attributes.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="attributetypes" toggle-spec=attributetypes %}

{% capture api_note %}
**NOTE:** The API is backward compatible with TB v1.0+ and this is the main reason why API call URLs contain "plugin".
{% endcapture %}
{% include templates/info-banner.md content=api_note %}

<hr>

## Data visualization

Once device attributes are provisioned, they can be used in dashboards for monitoring and interaction.

If you are new to dashboards, refer to the [Dashboards overview](/docs/{{docsPrefix}}user-guide/dashboards/){:target}.

Attributes can be visualized using various widgets from the Widget Library:
- [Digital](/docs/{{docsPrefix}}user-guide/ui/widget-library/#digital-gauges){:target="_blank"} and [Analog](/docs/{{docsPrefix}}user-guide/ui/widget-library/#analog-gauges){:target="_blank"} gauges to display numeric attribute values (for example, temperature, speed, or pressure).
- [Cards](/docs/{{docsPrefix}}user-guide/ui/widget-library/#cards){:target="_blank"} to present multiple attribute values in a compact format.
- [Entities table](/docs/{{docsPrefix}}user-guide/ui/entity-table-widget/){:target="_blank"} to display attributes across multiple entities.

In addition to visualization, you can use [Input widgets](/docs/{{docsPrefix}}user-guide/ui/widget-library/#input-widgets){:target="_blank"} to allow dashboard users to modify writable attributes directly from the dashboard (for example, updating shared or server-side attributes).

## Rule engine

The [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/){:target="_blank"} processes incoming data and events, including attribute updates.

Attributes are commonly used in the following scenarios:

**Generate alarms based on attribute values**

You can configure alarm conditions using:
- [Alarm rules](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules){:target="_blank"} for standard use cases.
- [Filter nodes](/docs/user-guide/rule-engine-2-0/nodes/filter/){:target="_blank"} with custom JavaScript for advanced logic.

This allows alarm generation based on logical expressions that reference attribute values.

**Modify incoming client-side attributes before persistence**

To process client-side attributes before they are stored:
- Use the [message type switch](/docs/user-guide/rule-engine-2-0/nodes/filter/message-type-switch/){:target="_blank"} node to filter messages containing a "Post attributes" request.
- Use [transformation nodes](/docs/user-guide/rule-engine-2-0/nodes/transformation/){:target="_blank"} to modify the attribute payload.

This enables validation, normalization, or enrichment before saving data.

**React to server-side attribute updates**

To trigger actions when a server-side attribute changes:
- Use the [message type switch](/docs/user-guide/rule-engine-2-0/nodes/filter/message-type-switch/){:target="_blank"} node to filter "Attributes Updated" events.
- Use [action](/docs/user-guide/rule-engine-2-0/nodes/action/){:target="_blank"} or [external](/docs/user-guide/rule-engine-2-0/nodes/external/){:target="_blank"} nodes to execute the required logic.

This allows dynamic reconfiguration and automation when platform-managed settings are updated.

**Enrich telemetry with attribute values**

Use [enrichment](/docs/user-guide/rule-engine-2-0/nodes/enrichment/){:target="_blank"} nodes to add attribute values to incoming telemetry messages.

This technique allows you to:
- Apply dynamic thresholds
- Adjust processing logic
- Personalize behavior per device, asset, customer, or tenant

Enrichment based on attributes is a powerful method for building scalable and configurable IoT solutions.

{% unless docsPrefix contains "paas/" %}

## Performance enhancement

You can achieve higher performance with Attributes Cache enabled (see <b>cache.attributes.enabled</b> property of the [Configuration properties](/docs/user-guide/install/{{docsPrefix}}config/#thingsboard-core-settings){:target="_blank"}) 

Having attributes cache enabled ThingsBoard will load the specific attribute from the database only once, all subsequent requests to the attribute will be loaded from the faster cache connection.

> **NOTE:** If you are using Redis or Valkey cache, make sure that you change <b>maxmemory-policy</b> to <b>allkeys-random</b> to prevent the service from filling up all available memory.

{% endunless %}
