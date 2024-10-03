
Enrichment Nodes are used to include additional information about the message originator, entities related to originator, and other contextual data into the outgoing message for further processing steps within the rule chain. 
You may find list of available nodes below.

* TOC
{:toc}

## calculate delta

Calculates delta based on the previous time series reading and current reading and adds it to the message.
Delta calculation is done in scope of the message originator, e.g. device, asset or customer.

**Configuration**

* **Input value key** - key that will be used to calculate the delta.
* **Output value key** - key that will store the delta value in the outgoing message.
* **Number of digits after floating point** - precision of the delta calculation. Optional. If provided rounds calculated delta to specified number of digits.
* **Tell Failure if delta is negative** - if enabled, fails message processing if delta value is negative.
* **Add the time difference between "Input value key" readings** - if enabled, rule node will compute the time difference between the current and previous telemetry reading timestamps.
  * **Period value key** - key that will store the time difference in the outgoing message. 
    Required only if **Add the time difference between "Input value key" readings** is enabled.
* **Exclude zero deltas from outbound message** - if enabled, the **Output value key** will be included in the outgoing message only when its value is non-zero.
* **Use caching** - if enabled, **Input value key** value will be cached in memory to improve performance. 
    > **Note:** The cache will not be updated if the **Input value key** value is modified elsewhere in the system or by other rule nodes.
  The rule node will use the cached value to compute the delta upon the arrival of the next message.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-calculate-delta-config.png)

**Output connections**
* **Success:**
  * If key configured via **Input value key** parameter is present in the incoming message.
* **Other:**
  * If incoming message type is not a **POST_TELEMETRY_REQUEST**. 
  * If key configured via **Input value key** parameter is not present in the incoming message.
* **Failure:**
  * If **Tell Failure if delta is negative** is enabled and the delta calculation returns negative value.
  * If unexpected error occurs during message processing.

**Usage example: smart-metering use case**

Imagine a scenario where a water metering device reports the absolute value of the pulse counter once per day. 
To determine the daily water consumption, you need to compare the value from the previous day with the value from the current day.

Let's examine the rule node behavior using an example with the configuration shown in the screenshot above. 
Assume that the following messages, originating from the same device, arrive at the rule node in the listed sequence:

```bash
msg: {"pulseCounter": 42.6754}, metadata: {"ts": "1717772034000"}
msg: {"pulseCounter": 73.3456}, metadata: {"ts": "1717858434000"}
msg: {"temperature": 22.5}, metadata: {"ts": "1717944834000"}
msg: {"pulseCounter": 73.3456}, metadata: {"ts": "1718031234000"}
msg: {"pulseCounter": 53.1245}, metadata: {"ts": "1718117634000"}
```

The output will be the following:

```bash
msg: {"pulseCounter": 42.6754, "delta": 0, "periodInMs": 0}, metadata: {"ts": "1717772034000"}, "output connection": "Success" # first pulseCounter reading, so the "delta" and "periodInMs" both equals to 0.
msg: {"pulseCounter": 73.3456, "delta": 30.67, "periodInMs": 86400000}, metadata: {"ts": "1717858434000"}, "output connection": "Success" # both "delta" and "periodInMs" calculated relative to the previous msg.
msg: {"temperature": 22.5}, metadata: {"ts": "1717944834000"}, "output connection": "Other" # input value key is missing in the incoming msg
msg: {"pulseCounter": 73.3456}, metadata: {"ts": "1718031234000"}, "output connection": "Success" # zero delta excluded since the "pulseCounter" became unchanged since the previous msg.
msg: {"pulseCounter": 53.1245}, metadata: {"ts": "1718117634000"}, "output connection": "Failure" # force failure due to a negative result of the "delta" calculation.
```

## customer attributes

Identifies the message originator's customer and enriches the outgoing message with the customer's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/). 

**Configuration**

* **Customer's attributes/latest telemetry mapping** - controls whether to add attributes or the latest telemetry data to the message.

  * **Source attribute/telemetry key** - key that will be used to fetch the attribute or latest telemetry value from the customer.
  * **Target key** - key that will store the fetched value in the outgoing message.

  > **Note:** All input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

* **Add mapped attributes/latest telemetry to** - controls whether the mapped **_Attributes/Latest telemetry_** should be added to the **_Message_** or **_Metadata_**.

![Configuration example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes-config.png)

> **Note:** Following message originator's entity types are supported: **Customer**, **User**, **Asset**, **Device**.

**Output connections**
* **Success:**
  * If customer's attributes or latest telemetry were found and successfully fetched.
  * If customer's attributes or latest telemetry were not found.
* **Failure:**
  * If message originator's entity type is unsupported.
  * If message originator is not assigned to customer.
  * If unexpected error occurs during message processing.

**Usage example: smart subway management system**

Consider a smart subway management system where each train sends telemetry data, and the customer is the subway operator that manages the train. Subway operator has unique configurations for monitoring train operations. 
These configurations are stored as customer attributes.

For this case, we will use the configuration provided earlier.

We have a device "TrainA" that belongs to a customer "SubwayOperator".

"SubwayOperator" has the following attributes:

![SubwayOperator attributes](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/customer-attributes-example.png)

The incoming message from "TrainA" will be as follows:

```bash
msg: {"station": "Station X"}, metadata: {"ts": "1616510425200"}
```

The outgoing message will be routed via **Success** chain and will include the following attribute in the message metadata: 

```bash
msg: {"station": "Station X"}, metadata: {"ts": "1616510425200", "speedThreshold": 60}
```

**Usage example: smart traffic management system**

Consider a smart traffic management system where intersection reports telemetry data for traffic light durations and traffic density.

This scenario will have the following configuration:

![Configuration usage example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes-config-example.png)

We have a device "TrafficLight" that belongs to a customer "Intersection".

"Intersection" has the following latest telemetry:

![Intersection latest telemetry](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/customer-latest-telemetry-example.png)

The incoming message from "TrafficLight" will be as follows:

```bash
msg: {"lightStatus": "green"}, metadata: {"ts": "1616510426300"}
```

The outgoing message will be routed via **Success** chain and will include the following telemetry in the message:

```bash
msg: {"lightStatus": "green", "greenLightDuration": 45, "density": 75}, metadata: {"ts": "1616510426300"}
```

You can see the real life example, where this node is used, in the tutorial [Send email to customer](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/).

## related device attributes {#device-attributes}

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

![Configuration: Device relations query example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config-device-relations-query.png)

**Configuration: Related device attributes**

* **Client/Shared/Server attributes** and **Latest telemetry** - list of the keys that will be used to fetch attributes or latest telemetry from the related device.
  > **Note:** All input fields in this section support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).
    * **Fetch latest telemetry with timestamp** - if enabled, fetched latest telemetry values will be added to the message with timestamp.
      > **Note:** Available only when the configuration has at least one latest telemetry key set.
* **Add selected attributes to** - controls whether the mapped attributes should be added to the **_Message_** or **_Metadata_**.

![Configuration: Related device attributes example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config-related-device-attributes.png)

**Configuration: other**

* **Tell failure if any of the attributes are missing** - if enabled, fails message processing if at least one selected key does not exist.
    > **Note:** Even in case of failure, outgoing message will contain telemetry keys that were successfully fetched.

![Configuration: other example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config-other.png)

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

![ControlUnitDevice relations](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-example-device-relations.png)

ControlUnitDevice has the following attributes and latest telemetry:

![ControlUnitDevice attributes](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-example-device-attributes.png)

![ControlUnitDevice latest telemetry](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-device-telemetry.png)

The incoming message from "WaterPressureSensor" will be as follows:

```bash
msg: {"pressure": 75.5}, metadata: {"ts": "1616510425200"}
```

The outgoing message will be routed via **Success** chain and will include the following attribute and latest telemetry in the message:

```bash
msg: {"pressure": 75.5, "ss_pressureThreshold": "80", "temperature": "{"ts":1718611002573, "value":23}"}, metadata: {"ts": "1616510425200"}
```

## originator attributes

Enriches the outgoing message with the message originator's [attributes](/docs/user-guide/attributes/) and/or [latest telemetry](/docs/user-guide/telemetry/).

**Configuration**
* **Client/Shared/Server attributes** and **Latest telemetry** - list of the keys that will be used to fetch originator's attributes or latest telemetry.
  > **Note:** All input fields in this section support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).
  * **Fetch latest telemetry with timestamp** - if enabled, fetched latest telemetry values will be added to the message with timestamp.
    > **Note:** Available only when the configuration has at least one latest telemetry key set.
* **Add originator attributes to** - controls whether the mapped attributes should be added to the **_Message_** or **_Metadata_**.

* **Tell failure if any of the attributes are missing** - if enabled, fails message processing if at least one selected key does not exist.
  > **Note:** Even in case of failure, the outgoing message will contain telemetry keys that were successfully fetched.

![Configuration example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-attributes-config.png)

Attributes are added into outgoing message with scope prefix:

*  <code>cs_</code> - [client-side attributes](/docs/user-guide/attributes/#client-side-attributes)
*  <code>ss_</code> - [server-side attributes](/docs/user-guide/attributes/#server-side-attributes)
*  <code>shared_</code> - [shared attributes](/docs/user-guide/attributes/#shared-attributes)

> **Note:** Latest telemetry is added to the outgoing message without any prefix.

**Output connections**
* **Success:** 
  * If message originator's attributes or latest telemetry were found and successfully fetched.
  * If **Tell failure if any of the attributes are missing** is disabled, and message originator's attributes or latest telemetry were not found.
* **Failure:** 
  * If **Tell failure if any of the attributes are missing** is enabled, and at least one selected key does not exist.
  * If unexpected error occurs during message processing.

**Usage example**

You can see the real life example, where this node is used, in the following tutorials:

* [Send email to customer](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/)
* [Using queues for synchronization](/docs/user-guide/rule-engine-2-5/tutorials/queues-for-synchronization/)

## originator fields

Enriches the outgoing message with the message originator's details.

**Configuration**

* **Originator fields mapping** - list of mappings between **Source field** and **Target key**.
  * **Source field** - field that should be fetched.
  * **Target key** - key that will store fetched value in the outgoing message. 
    > **Note:** Target key fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/). 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-mapping.png)

> **Note:** If configured mapping contains fields that are not available for originator's entity type (for example, `phone` when originator is a device), then such mapping will be ignored.

* **Add mapped originator fields to** - controls whether the mapped fields should be added to the **_Message_** or **_Metadata_**.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-fetch-to.png)

* **Skip empty fields** - if enabled, fields with no value or an empty string will not be added in the outgoing message.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-skip-empty-fields.png)

> **Note:** Following message originator's entity types are supported: **Tenant**, **Customer**, **User**, **Asset**, **Device**, **Alarm**, **Rule chain**, **Entity view** and **Edge**.

**Output connections**
* **Success:**
  * If message originator's fields were successfully fetched and added to the outgoing message.
* **Failure:**
  * If message originator's entity type is not supported. 
  * If unexpected error occurred during message processing.

## related entity data {#related-attributes}

Finds entity related to the message originator using configured [relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) query
and adds related entity attributes, latest telemetry or fields to the outgoing message.

**Configuration: Relations query**

 * **Direction** - direction of the relation query. Either **_From originator_** or **_To originator_**.
 * **Max relation level** - maximum depth for the relation search. Optional. If value is not set the depth is unlimited.
   > **Note:** Search query result returns only one entity even if multiple entities were found.
   * **Fetch last level relation only** - if enabled, forces the rule node to search for related entities only at the level set in the **Max relation level**.
     > **Note:** Available only when **Max relation level** is greater than one.
 * **Relation filters** - query filters based on relation type and entity type. Optional. If filters are not set the relation query will search for relations with any type.

![Configuration: Relations query example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-related-entity-data-config-relations-query.png)

**Configuration: Data to fetch**

 * **Attributes/Latest telemetry/Fields** - controls whether to fetch attributes, latest telemetry or fields.
   * **Source attribute/telemetry key** or **field** - key that will be used to fetch the attribute, latest telemetry or entity field value from the related entity.
   * **Target key** - key that will store fetched value in the outgoing message.

   > **Note:** All input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/). 
 * **Add mapped attributes/latest telemetry/fields to** - controls whether fetched data should be added to the **_Message_** or **_Metadata_**.

![Configuration: Data to fetch example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-related-entity-data-config-data-to-fetch.png)

**Output connections**
* **Success:**
  * If related entity was found, even if the specified **Data to fetch** does not exist for the related entity.
* **Failure:**
  * If related entity was not found.
  * If unexpected error occurs during message processing.

**Usage example**

You can see the real life example, where this node is used, in the next tutorial [Reply to RPC calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-related-attributes-node).

## tenant attributes

Identifies the message originator's tenant and enriches the outgoing message with the tenant's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/).

**Configuration**

* **Tenant's attributes/latest telemetry mapping** - controls whether to add attributes or the latest telemetry data to the message.

    * **Source attribute/telemetry key** - key that will be used to fetch the attribute or latest telemetry value from the tenant.
    * **Target key** - key that will store the fetched value in the outgoing message.

  > **Note:** All input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

* **Add mapped attributes/latest telemetry to** - controls whether the mapped **_Attributes/Latest telemetry_** should be added to the **_Message_** or **_Metadata_**.

![Configuration example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-tenant-attributes-config.png)

**Output connections**
* **Success:**
  * If tenant's attributes or latest telemetry were found and successfully fetched.
  * If tenant's attributes or latest telemetry were not found.
* **Failure:**
  * If unexpected error occurs during message processing.

This node functions similarly to the customer attributes node. The key difference is that this node fetches attributes or latest telemetry from the tenant, 
while the customer attributes node fetches them from the customer. For a usage example, please refer to the [customer attributes node](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#customer-attributes).

## originator telemetry

Adds message originator's time series data, found using configured **Fetch interval** and **Fetch strategy**, into message metadata.

**Configuration: general**
 - **Time series keys** - list of time series keys that will be used to fetch originator's time series data. 
   > **Note:** All input keys support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-time-series-keys.png)

**Configuration: Fetch interval**  

Fetch interval is the time period for which time series data will be fetched. The fetch interval can be configured in one of two ways:

- **Fixed interval** - both **Interval start** and **Interval end** are configured by specifying a duration value and a time unit. This interval is relative, meaning that for each message, the start and end times are calculated by subtracting the specified duration from the time the message is processed.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fixed-interval.png)

- **Use dynamic interval** - if enabled, **Interval start** and **Interval end** are configured by specifying templates. Values extracted using these templates are considered to be [UNIX millisecond timestamps](https://en.wikipedia.org/wiki/Unix_time). This interval is absolute, meaning that start and end times are based on specific points in time provided by the templates.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-dynamic-interval.png)

> **Note:** In both cases, interval start must be before the interval end.

**Configuration: Fetch strategy**

Fetch strategy controls what values to fetch from the specified **Fetch interval**. There are three strategies:
- **First** - fetch the first time series entry within the interval.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-first.png)

- **Last** - fetch the last time series entry within the interval.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-last.png)

The fetched time series entry will be placed in the outgoing message metadata as a simple key-value entry. Example:
```json
{
  "frequency": "67.88"
}
```

- **All** - fetch all time series entries within the interval.

By default, the node is not configured to aggregate fetched data (**None** option selected in **Data aggregation function**). 
In this case, you can specify **Order by timestamp** direction and **Limit** for number of entries fetched.

> **Note:** Maximum number of time series entries fetched is 1000.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-all-none-aggregation.png)

Fetched time series entries will be placed in the outgoing message metadata as an array of objects, each containing a `ts` (timestamp) and `value` fields. Example:
```json
{
  "velocity": "[{\"ts\":1718874345362,\"value\":45.777},{\"ts\":1718874365362,\"value\":50.346},{\"ts\":1718875365362,\"value\":60.117}]"
}
```

You can specify a **Data aggregation function** to apply to fetched data. Available functions: Min, Max, Average, Sum and Count.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-all-average-aggregation.png)

Aggregated data will be placed in the outgoing message's metadata as a simple key-value entry, like in the **First** or **Last** strategies.

**Output connections**
* **Success:**
  * If time series data is found and added to the outgoing message metadata. 
  * If time series data is not found.
* **Failure:**
  * If **Use dynamic interval** is enabled, and one or both templates are not found in the incoming message.
  * If **Use dynamic interval** is enabled, and value extracted using one or both templates cannot be parsed into a number.
  * If unexpected error occurs during message processing.

> **Note:** The outgoing message is not a new message, it is an incoming message with modified metadata.

**Usage example: [telemetry delta calculation](/docs/user-guide/rule-engine-2-0/tutorials/telemetry-delta-validation/) tutorial**

**Tips**

> **Tip:** If you want to fetch a time series entry with a specific timestamp, toggle **Use dynamic interval** and provide templates such that the **Interval end** is equal to **Interval start** *plus one millisecond*. This will effectively create a one-millisecond interval, capturing the entry at **Interval start**.

> **Tip:** All data in metadata is stored as strings, so in other nodes you can use `JSON.parse()` to convert data to a JSON format.

## tenant details

Enriches the outgoing message with the tenant's details.

**Configuration**

* **Select details** - list of the details to be fetched from the tenant.
* **Add selected details to** - controls whether the fetched details should be added to the **_Message_** or **_Metadata_**.


![Configuration example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-tenant-details-config.png)

Selected details are added into the outgoing message with prefix: <code>tenant_</code>.

**Output connections**
* **Success:**
  * If tenant's details were successfully fetched.
* **Failure:**
  * If unexpected error occurs during message processing.

This node functions similarly to the customer details node. The key difference is that this node fetches details from the tenant,
while the customer details node fetches them from the customer. For a usage example, please refer to the [customer details node](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#customer-details).

## customer details

Enriches the outgoing message with the customer's details.

**Configuration**

* **Select details** - list of the details to be fetched from the customer.
* **Add selected details to** - controls whether the fetched details should be added to the **_Message_** or **_Metadata_**.

![Configuration example image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-customer-details-config.png)

Selected details are added into the outgoing message with prefix: <code>customer_</code>.

> **Note:** Following message originator's entity types are supported: **Asset**, **Device**, **Entity View**, **User**, **Edge**.

**Output connections**
* **Success:**
  * If customer's details were found and successfully fetched.
  * If customer's details were not found.
* **Failure:**
  * If message originator's entity type is unsupported.
  * If message originator is not assigned to customer.
  * If unexpected error occurs during message processing.

**Usage example**

Consider a scenario where a greenhouse monitoring system sends data to the rule chain. The goal is to enrich the telemetry data with customer details for further processing. 
For this purpose we can use **customer details** node.

For this case, we will use the configuration provided earlier.

We have a device "Greenhouse Sensor 01" that belongs to a customer "Warehouse Manager".

Here is information about customer:

![Customer details image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-customer-details-example.png)

The incoming message from "Greenhouse Sensor 01" will be as follows:

```bash
msg: {"temperature": 25.0, "humidity": 70}, metadata: {"ts": "1616510425200"}
```

The outgoing message will be routed via **Success** chain and will include the following details in the message:

```bash
msg: {"temperature": 25.0, "humidity": 70, "customer_title": "Warehouse manager", "customer_country": "United States", "customer_phone": "+12124567890"}, metadata: {"ts": "1616510425200", "speedThreshold": 60}
```

## fetch device credentials

Enriches the outgoing message with the device credentials.

**Configuration**

 * **Fetch credentials to** - controls whether the fetched credentials should be added to the **_Message_** or **_Metadata_**.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/enrichment-fetch-device-credentials-config.png)

**Output connections**
* **Success:**
  * If credentials were successfully fetched.
* **Failure:**
  * If incoming message originator's entity type is not a **_DEVICE_**.
  * If unexpected error occurs during message processing.

**Usage example**

Let's examine the rule node behavior using an example with the configuration shown in the screenshot above.
Assume that the following messages, originating from the different devices, arrive at the rule node:

```bash
msg: {"pulseCounter": 678}, metadata: {"deviceType": "WaterMeter", "deviceName": "WM-001"} # WaterMeter device with Access token credentials
msg: {"temperature": 22}, metadata: {"deviceType": "Thermostat", "deviceName": "TH-001"} # Thermostat device with X.509 credentials
msg: {"humidity": 75}, metadata: {"deviceType": "Hygrometer", "deviceName": "HG-001"} # Hygrometer device with MQTT Basic credentials
```

The output will be the following:

```bash
msg: {"pulseCounter": 678}, metadata: {"deviceType": "WaterMeter", "deviceName": "WM-001", "credentials": "yNfZ6lL2cWhS5lh8Nd9u", "credentialsType": "ACCESS_TOKEN"} # WaterMeter device with Access token credentials
msg: {"temperature": 22}, metadata: {"deviceType": "Thermostat", "deviceName": "TH-001", "credentials": "MIIFPjCCAyYCFCk6PrTFzUn5/h0yULiwTy4anVLmMA0GCSqGSIb3DQEBCwUAMFwxCzAJBgNVBAYTAlVBMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQxFTATBgNVBAMMDGludGVybWVkaWF0ZTAeFw0yMzA1MjkxMjQ3MDlaFw0yNDA1MjgxMjQ3MDlaMFsxCzAJBgNVBAYTAlVBMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQxFDASBgNVBAMMC2RldmljZUBuYW1lMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuUCNlaBe1Qoy3CN2UpTuaJ5So3Nq+YRZS8OW3SXQihCndJDm2g7+5AiiKvYClNNqjcm+rJzWfRlWrJsQ8BQpY/r2sXVLwwjxDHKiE6wiifGtIhyBag9wsZ4DehQ7lYN0dDgypE3iRnvTqq7nQOeTWwJqxGCzTGM2EHmiReXg8WHjXBZFOZxj7hFepw+byBCFXhEEEuiZ5lOpTcw+HvJLMo0PwgCv8OOSGczm7Hb2Nw6ZEGkCJ0dlRxtxIRWMaLQDjz8wyUhuTe2Bvn3qy+4e+Kd0kU2FX9t7VPJ9CU+rHUfp7Y4I0jm/06Sj5bv2HlB2Qs/6hKZQq1DHFGQQC1snRljm1ZwjanTvuyGbzrpKPsAarck6mmNInmWELdMgj9PTrWpN3hkuDXI4U4FumiA6344CYIa+0cefjKdHljnyE/U04YNZJs1ECygsflXzyuUwAwa0Y9EgyadbSOCiMhLITOqtD+bV6uHw2pjCp9MyNIMuUMNQkqnVj6rA5XCGVx5eTnPNljxWVVCdtqcfw6H/DH8Den4FL46zJJhb3ZFLryCzNdzvDZz6eJWFhqmAGSiCXu/EE9/LCC6ic0lBlzIgjabaZbSpZXcQ0Xx7S1zj+mbJN4u2rhE8I9+sLttjR7gczhJGyk4Gqvi7GwJ2NS5e53DxQlSwyxcM3SbsgZhtfhkCAwEAATANBgkqhkiG9w0BAQsFAAOCAgEARloOcoBWGk5/OIkMZZLyey+80mKEeD+7aNTvsC5OW/Pdnof1ElHoUG5q/ANLxmXD5gGU8z15mcjJIZt1OqqRqB+s7nOQxqv9TY+L/8l25iE0wZRw1ljCi3Av+gACBFNLiu5hJPneopncofGWNeDZlAVzClpkDu2hHD5f7W6gxrnN372+csHfb8ksD/bS/f736woaacCrgcAzXfHoLlpR+7YkF0Je21GWXbw5FqwctMxQP7NO8PyYqcjEg8XhZomiqqYp3q8tBYLZVM3BbdpxFrRjJpW3+hXhLNhZgM7pYjbqHj5BCFrpK3IvH4ZtowCIUKc1uwcip/rBCgYr1+TpfKmWmnyxpDHnlItKjyprhLsXrgPAA8PcmNu7C+pOsbwjDLubdJ19LcVHOJknu3YQm/8BvKj1QMzAHirl2UxCqRfMoZpkmYLotGSGQy8Qp6IlhBLIMcPaqMObpyhSr0RVdoAulhtFg6rVvpKPM/OQkFfUFfWvp52UDYh1wsJzoIwFOXk7edHqXKTKWYpJNe039NGqdo2+B9GAbzqQorwan7WYEtETNUdTw30mwiNEZAxgP9QXUSW14GzIxwlzbQgmyGZfeH+YwN0MCJgoAwL+Zij0TXjJ+YW+st0Dp8tQrpJjofa8o4IYQJUSx2I8mNberFywsbmzLdE+BoxFaLDvZNs=", "credentialsType": "X509_CERTIFICATE",} # Thermostat device with X.509 credentials
msg: {"humidity": 75}, metadata: {"deviceType": "Hygrometer", "deviceName": "HG-001", "credentials": "{\"clientId\":\"bv1ilvxhq50m8cyi5jjz\",\"userName\":\"ejkkd1fm9csvwakzym1o\",\"password\":\"o04xj87rguv8d6nvi158\"}", "credentialsType": "MQTT_BASIC",} # Hygrometer device with MQTT Basic credentials
```
