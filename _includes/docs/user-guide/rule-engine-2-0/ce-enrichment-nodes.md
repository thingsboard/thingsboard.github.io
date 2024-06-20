
Enrichment Nodes are used to add additional information about the message originator, related originator entities, and other contextual data into the message or its metadata for further processing steps within the rule chain. 
You may find list of available nodes below.

* TOC
{:toc}

## calculate delta

Calculates 'delta' based on the previous time-series reading and current reading and adds it to the message.
Delta calculation is done in scope of the message originator, e.g. device, asset or customer. Available since **v3.2.2**.

**Configuration**

* **Input value key** - specifies the key that will be used to calculate the delta.
* **Output value key** - specifies the key that will store the delta value in the enriched message.
* **Number of digits after floating point** - precision of the delta calculation. Optional.
* **Tell Failure if delta is negative** - enables force failure of message processing by a rule node if delta value is negative.
* **Add the time difference between "Input value key" readings** - enables computation of the time difference between the current and previous telemetry reading timestamp.
  * **Period value key** - specifies the key that will store the timestamp delta value in the enriched message. Required only if **Add the time difference between "Input value key" readings** is enabled.
* **Exclude zero deltas from outbound message** - enables the **Output value key** to be included in the outbound message only when its value is non-zero.
* **Use caching** - enables caching of the **Input value key** value in memory to improve performance. The cache will not be updated if the Input value key value is modified elsewhere in the system or by other rule nodes.
  The rule node will use the cached value to compute the delta upon the arrival of the next message.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-calculate-delta-config.png)

**Output**

 * **Success** - if the key configured via **Input value key** parameter is present in the incoming message;
 * **Other** - if the key configured via **Input value key** parameter is not present in the incoming message;
 * **Failure** - if the **Tell Failure if delta is negative** is set and the delta calculation returns negative value;

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
msg: {"pulseCounter": 42.6754, "delta": 0, "periodInMs": 0}, metadata: {"ts": "1717772034000"}, "outgoing connection": "Success" # first pulseCounter reading, so the "delta" and "periodInMs" both equals to 0.
msg: {"pulseCounter": 73.3456, "delta": 30.67, "periodInMs": 86400000}, metadata: {"ts": "1717858434000"}, "outgoing connection": "Success" # both "delta" and "periodInMs" calculated relative to the previous msg.
msg: {"temperature": 22.5}, metadata: {"ts": "1717944834000"}, "outgoing connection": "Other" # input value key is missing in the incoming msg
msg: {"pulseCounter": 73.3456}, metadata: {"ts": "1718031234000"}, "outgoing connection": "Success" # zero delta excluded since the "pulseCounter" became unchanged since the previous msg.
msg: {"pulseCounter": 53.1245}, metadata: {"ts": "1718117634000"}, "outgoing connection": "Failure" # force failure due to a negative result of the "delta" calculation.
```

##### Customer attributes

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes.png)

Node finds Customer of the Message Originator entity and adds Customers Attributes or Latest Telemetry value into Message Metadata. 

Administrator can configure the mapping between original attribute name and Metadata attribute name.

There is **Latest Telemetry** checkbox in the Node configuration. 
If this checkbox selected, Node will fetch Latest telemetry for configured keys. Otherwise, Node will fetch server scope attributes.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes-config.png)

Outbound Message Metadata will contain configured attributes if they exist.
To access fetched attributes in other nodes you can use this template '<code>metadata.temperature</code>'

Following Message Originator types are allowed: **Customer**, **User**, **Asset**, **Device**.
 
If unsupported Originator type found, an error is thrown.

If Originator does not have assigned Customer Entity **Failure** chain is used, otherwise **Success** chain.

**Note:** Since TB Version 3.3.3 you can use `${metadataKey}` for value from metadata, `$[messageKey]` for value from the message body.

**Example:**  You have the following metadata `{"country": "England"}`.
In addition, you have an attribute, which key is country name and value is capital city (`{"England": "London"}`).

The aim is to get capital city from attribute for the country from metadata and add result to metadata with the key **"city"**.
To achieve this you can use `${country}` as a **Source attribute** and the "city" as a **Target attribute**.

Result would be `{"city": "London"}`.

You can see the real life example, where this node is used, in the next tutorial:

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)

##### Device attributes

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes.png)

Node finds Related Device of the Message Originator entity using configured query and adds Attributes (client\shared\server scope) 
and Latest Telemetry value into Message Metadata.

Attributes are added into metadata with scope prefix:

- shared attribute -> <code>shared_</code>
- client attribute -> <code>cs_</code>
- server attribute -> <code>ss_</code>
- telemetry -> no prefix used 

For example, shared attribute 'version' will be added into Metadata with the name 'shared_version'. Client attributes will use 'cs_' prefix. 
Server attributes use 'ss_' prefix. Latest telemetry value added into Message Metadata as is, without prefix.

In 'Device relations query' configuration Administrator can select required **Direction** and **relation depth level**.
Also **Relation type** can be configured with required set of **Device types**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config.png)

If multiple Related Entities were found, **_only the first Entity is used_** for attributes enrichment, other entities will be discarded.

**Failure** chain is used if no Related Entity was found, otherwise - **Success** chain.

If attribute or telemetry was not found, it is not added into Message Metadata and still routed via **Success** chain.

Outbound Message Metadata will contain configured attributes only if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.temperature</code>'

**Note:** Since TB Version 2.3.1 the rule node has the ability to enable/disable reporting **Failure** if at least one selected key doesn't exist in the outbound message.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-orignator-and-device-attributes-tell-failure.png)

##### Originator attributes

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-attributes.png)

Add Message Originator Attributes (client\shared\server scope) and Latest Telemetry value into Message Metadata. 

Attributes are added into metadata with scope prefix:

- shared attribute -> <code>shared_</code>
- client attribute -> <code>cs_</code>
- server attribute -> <code>ss_</code>
- telemetry -> no prefix used 

For example, shared attribute 'version' will be added into Metadata with the name 'shared_version'. Client attributes will use 'cs_' prefix. 
Server attributes use 'ss_' prefix. Latest telemetry value added into Message Metadata as is, without prefix.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-attributes-config.png)

Outbound Message Metadata will contain configured attributes if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.cs_temperature</code>'

**Note:** Since TB Version 2.3.1 the rule node has the ability to enable/disable reporting **Failure** if at least one selected key doesn't exist in the outbound message.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-orignator-and-device-attributes-tell-failure.png)

You can see the real life example, where this node is used, in the following tutorials:

- [Transform telemetry using previous record](/docs/user-guide/rule-engine-2-0/tutorials/transform-telemetry-using-previous-record/)
- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)

##### Originator fields

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0.1</em></strong></td>
     </tr>
   </thead>
</table> 


![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields.png)

Node fetches fields values of the Message Originator entity and adds them into Message Metadata. 
Administrator can configure the mapping between field name and Metadata attribute name.
If specified field is not part of Message Originator entity fields it will be ignored.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-config.png)

Following Message Originator types are allowed: **Tenant**, **Customer**, **User**, **Asset**, **Device**, **Alarm**, **Rule Chain**.

**Failure** chain is used If unsupported Originator type found, otherwise - **Success** chain.

If field value was not found, it is not added into Message Metadata and still routed via **Success** chain.

Outbound Message Metadata will contain configured attributes only if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.devType</code>'

## related entity data {#related-attributes}

Finds related entity to the message originator entity using configured [Relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) query
and adds related entity attributes or latest telemetry or fields into message or message metadata

**Configuration**

Since rule node have multiple configuration sections. We decided to separate configuration fields into the same sections here.

**Configuration: Relations query**

 * **Direction** - configures the direction of the relation query. It is either **From originator** or **To originator**.
 * **Max relation level** - specifies the maximum depth for the relation search. Optional. No value set means **Unlimited level**.
   > **Note:** Search query result returns only first entity even if multiple entities were found.
   * **Fetch last level relation only** - a toggle that forces the rule node to search for related entities only at the level set in the **Max relation level**.
     > **Note:** Available only when **Max relation level** is greater than one.
 * **Relation filters** - allows configuring filters to refine the relation query based on relation type and entity type.

**Configuration: Data to fetch**

 * **Attributes/Latest telemetry/Fields** - slide toggle to select whether to fetch attributes or the latest telemetry or related entity fields.
   * **Source attribute key/telemetry key/field** - key that will be used to search for and retrieve the attribute/latest telemetry/entity field value from the related entity.
   * **Target key** - key that will store the retrieved value in the outbound message.

   > **Note:** For cases when **Attributes** or **Latest telemetry** is selected - all input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/). 
     For **Fields** only target keys support templatization, since **Source field** has a predefined values set.

* **Add mapped attributes/latest telemetry/fields to** - an option selector that allows the user to choose whether the specified **Data to fetch** should be added to the **Message** or **Metadata**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-related-entity-data-config.png)

**Output**

 * **Success** - if a related entity was found, even if the specified **Data to fetch** doesn't exist for the related entity.
 * **Failure** - if a related entity wasn't found, or an unexpected error occurs during data retrieval.

**Usage example**

You can see the real life example, where this node is used, in the next tutorial [Reply to RPC calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-related-attributes-node).

##### Tenant attributes

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-attributes.png)

Node finds Tenant of the Message Originator entity and adds Tenant Attributes or Latest Telemetry value into Message Metadata. 

Administrator can configure the mapping between original attribute name and Metadata attribute name.

There is **Latest Telemetry** checkbox in the Node configuration. If this checkbox selected, Node will fetch Latest telemetry for configured keys. Otherwise, Node will fetch server scope attributes.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-attributes-config.png)

Outbound Message Metadata will contain configured attributes if they exist. To access fetched attributes in other nodes you can use this template '<code>metadata.tempo</code>'

Following Message Originator types are allowed: **Tenant**, **Customer**, **User**, **Asset**, **Device**, **Alarm**, **Rule Chain**.

If unsupported Originator type found, an error is thrown.

**Failure** chain is used if Originator does not have assigned Tenant Entity, otherwise - **Success** chain.

**Note:** Since TB Version 3.3.3 you can use `${metadataKey}` for value from metadata, `$[messageKey]` for value from the message body.

An example of this feature you can see in the description for the **Customer attributes node**.

## originator telemetry

Adds message originator's time series data, found using configured **Fetch interval** and **Fetch strategy**, into message metadata.

**Configuration: general**
 - **Time series keys** - a list of time series keys to fetch from the originator's time series data. Supports [templates](/docs/{{docsPrefix}}user-guide/templatization/).

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-time-series-keys.png)

**Configuration: fetch interval**  

Fetch interval is the time period for which time series data will be fetched. The fetch interval can be configured in one of two ways:

- **Fixed interval** - both **Interval start** and **Interval end** are configured by specifying a duration value and a time unit. This interval is relative, meaning that for each message, the start and end times are calculated by subtracting the specified duration from the time the message is processed.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fixed-interval.png)

- **Dynamic interval** - if **Use dynamic interval** is toggled, **Interval start** and **Interval end** are configured by specifying templates. Values extracted using these templates are considered to be [UNIX millisecond timestamps](https://en.wikipedia.org/wiki/Unix_time). This interval is absolute, meaning that start and end times are based on specific points in time provided by the templates.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-dynamic-interval.png)

> **Note:** In both cases, interval start must be before the interval end.

**Configuration: fetch strategy**

Fetch strategy defines what values to fetch from the specified **Fetch interval**. There are three strategies:
- **First** - fetch the first time series entry within the interval.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-first.png)

- **Last** - fetch the last time series entry within the interval.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-last.png)

The fetched time series entry will be placed in outgoing message's metadata as a simple key-value entry. Example:
```json
{
  "frequency": "67.88"
}
```

- **All** - fetch all time series entries within the interval.

By default, the node is not configured to aggregate fetched data (**None** option selected in **Data aggregation function**). In this case, you can specify **Order by timestamp** direction and **Limit** for number of entries fetched.

> **Note:** Maximum number of time series entries fetched is 1000.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-all-none-aggregation.png)

Fetched time series entries will be placed in the outgoing message's metadata as an array of objects, each containing a `ts` (timestamp) and `value` fields. Example:
```json
{
  "velocity": "[{\"ts\":1718874345362,\"value\":45.777},{\"ts\":1718874365362,\"value\":50.346},{\"ts\":1718875365362,\"value\":60.117}]"
}
```

You can specify a **Data aggregation function** to apply to fetched data. Available functions: Min, Max, Average, Sum and Count.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-all-average-aggregation.png)

Aggregated data will be placed in outgoing message's metadata as a simple key-value entry, like in the **First** or **Last** strategies.

**Output**

 - **Success**
    - Time series data is found, and is placed in the outgoing message's metadata.
    - If no time series data is found, nothing is placed in the outgoing message's metadata.
 - **Failure**
    - **Use dynamic interval** is toggled, and one or both templates are not found in the incoming message.
    - **Use dynamic interval** is toggled, and value extracted using one or both templates cannot be parsed into a number.

> **Note:** Outgoing message is not a new message, it is an incoming message with modified metadata.

**Usage example: [telemetry delta calculation](/docs/user-guide/rule-engine-2-0/tutorials/telemetry-delta-validation/) tutorial**

**Tips**

> **Tip:** If you want to fetch a time series entry with a specific timestamp, toggle **Use dynamic interval** and provide templates such that the **Interval end** is equal to **Interval start** *plus one millisecond*. This will effectively create a one-millisecond interval, capturing the entry at **Interval start**.

> **Tip:** All data in metadata is stored as strings, so in other nodes you can use `JSON.parse()` to convert data to a JSON format.

##### Tenant details

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-details.png)

Rule Node Adds fields from Tenant details to the message body or metadata.

There is **Add selected details to the message metadata** checkbox in the Node configuration. If this checkbox selected, existing fields will be added to the message metadata instead of message data.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-details-config.png)

Selected details are added into metadata with prefix: **tenant_**. Outbound Message will contain configured details if they exist.

To access fetched details in other nodes you can use one of the following template: 

- <code>metadata.tenant_address</code>

- <code>msg.tenant_address</code>

**Failure** chain is used if Originator does not have assigned Tenant Entity, otherwise - **Success** chain.

##### Customer details

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-details.png)

Rule Node Adds fields from Customer details to the message body or metadata.

There is **Add selected details to the message metadata** checkbox in the Node configuration. If this checkbox selected, existing fields will be added to the message metadata instead of message data.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-details-config.png)

Selected details are added into metadata with prefix: **customer_**. Outbound Message will contain configured details if they exist.

To access fetched details in other nodes you can use one of the following template: 

- <code>metadata.customer_email</code>

- <code>msg.customer_email</code>

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**.
  
If unsupported Originator type found, an error is thrown.
 
If Originator does not have assigned Customer Entity **Failure** chain is used, otherwise **Success** chain.

## fetch device credentials

Adds device credentials fields to the message or message metadata.

**Configuration**

 * **Fetch credentials to** - an option selector that allows the user to choose whether the fetched credentials should be added to the **Message** or **Metadata**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-fetch-device-credentials-config.png)

**Output**

* **Success** - if credentials successfully fetched and added to the configured **Fetch credentials to** option.
* **Failure** - if the incoming message originator is not a device entity, or unexpected error occurs.

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
