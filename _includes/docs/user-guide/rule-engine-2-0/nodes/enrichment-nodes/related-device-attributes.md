![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/related-device-attributes-node.png)

Finds related device of the message originator entity using configured [Relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) query and enriches the outgoing message
with the device's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/).

**Configuration: Device relations query**

* **Direction** - direction of the relation query. Either **_From originator_** or **_To originator_**.
* **Max relation level** - maximum depth for the relation search. Optional. If value is not set the depth is unlimited.
  > **Note:** Search query result returns only one entity even if multiple entities were found.
  * **Fetch last level relation only** - if enabled, forces the rule node to search for related entities only at the level set in the **Max relation level**.
    > **Note:** Available only when **Max relation level** is greater than one.
* **Relation type** - type of the relation. Optional. If value is not set the relation query will search for relations with any type.
> **Note:** By default set to **_Contains_**. However, you can specify your own relation type.
* **Device profiles** - device profile filter. Only devices with specified profiles will be found.

![Configuration: Device relations query example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config-device-relations-query.png)

**Configuration: Related device attributes**

* **Client/Shared/Server attributes** and **Latest telemetry** - list of the keys that will be used to fetch attributes or latest telemetry from the related device.
  > **Note:** All input fields in this section support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).
  * **Fetch latest telemetry with timestamp** - if enabled, fetched latest telemetry values will be added to the message with timestamp.
    > **Note:** Available only when the configuration has at least one latest telemetry key set.
* **Add selected attributes to** - controls whether the mapped attributes should be added to the **_Message_** or **_Metadata_**.

![Configuration: Related device attributes example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config-related-device-attributes.png)

**Configuration: other**

* **Tell failure if any of the attributes are missing** - if enabled, fails message processing if at least one selected key does not exist.
  > **Note:** Even in case of failure, outgoing message will contain telemetry keys that were successfully fetched.

![Configuration: other example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config-other.png)

Attributes are added into outgoing message with scope prefix:

*  <code>cs_</code> - [client-side attributes](/docs/user-guide/attributes/#client-side-attributes)
*  <code>ss_</code> - [server-side attributes](/docs/user-guide/attributes/#server-side-attributes)
*  <code>shared_</code> - [shared attributes](/docs/user-guide/attributes/#shared-attributes)

> **Note:** Latest telemetry is added to the outgoing message without any prefix.

**Output connections**
* **Success:**
  * If related device's attributes or latest telemetry were found and successfully fetched.
  * If **Tell failure if any of the attributes are missing** is disabled, and related device's attributes or latest telemetry were not found.
* **Failure:**
  * If related device was not found.
  * If **Tell failure if any of the attributes are missing** is enabled, and at least one selected key does not exist.
  * If unexpected error occurs during message processing.

**Usage example**

Consider a water pressure monitoring system where a water pressure sensor device reports telemetry data for water pressure levels, temperature, and humidity.
This system also includes a control unit device that manages the water pressure sensor and logs its data.

For this case, we will use the configuration provided earlier.

We have a device "ControlUnitDevice" that manages a device "WaterPressureSensor".

![ControlUnitDevice relations](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-example-device-relations.png)

ControlUnitDevice has the following attributes and latest telemetry:

![ControlUnitDevice attributes](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-example-device-attributes.png)

![ControlUnitDevice latest telemetry](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-device-telemetry.png)

The incoming message from "WaterPressureSensor" will be as follows:

```bash
msg: {"pressure": 75.5}, metadata: {"ts": "1616510425200"}
```

The outgoing message will be routed via **Success** chain and will include the following attribute and latest telemetry in the message:

```bash
msg: {"pressure": 75.5, "ss_pressureThreshold": "80", "temperature": "{"ts":1718611002573, "value":23}"}, metadata: {"ts": "1616510425200"}
```
