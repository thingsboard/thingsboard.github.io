
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

## customer attributes

Identifies the message originator's customer and enriches the outbound message with the customer's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/). 
Available since **v2.0**.

**Configuration**

* **Attributes/Latest telemetry** - slide toggle to select whether to add attributes or the latest telemetry data to the message.

  * **Source attribute/telemetry key** - key that will be used to search for and retrieve the attribute/latest telemetry value from the customer.
  * **Target key** - key that will store the retrieved value in the outbound message.

  > **Note:** All input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

* **Add mapped attributes to** - an option selector that allows the user to choose whether the mapped attributes or latest telemetry should be added to the **Message** or **Metadata**.

![Configuration example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes-config.png)

Following message originator types are allowed: **Customer**, **User**, **Asset**, **Device**.

**Output**

* **Success**: if no error occurred during the attributes or latest telemetry retrieval.
* **Failure**: connection will be used if:
  * unsupported originator type found;
  * originator does not have assigned customer;
  * an unexpected error occurs during the attributes or latest telemetry retrieval.

**Usage example: smart subway management system**

Consider a smart subway management system where each train sends telemetry data, and the customer is the subway operator that manages the train. Subway operator has unique configurations for monitoring train operations. 
These configurations are stored as customer attributes.

For this case, we will use the configuration provided earlier.

We have a device "TrainA" that belongs to a customer "SubwayOperator".

"SubwayOperator" has the following attributes:

![SubwayOperator attributes](/images/user-guide/rule-engine-2-0/nodes/customer-attributes-example.png)

The incoming message from "TrainA" will be as follows:

```bash
msg: {"station": "Station X"}, metadata: {"ts": "1616510425200"}
```

The outbound message will be routed via **Success** chain and will include the following attribute in the message metadata: 

```bash
msg: {"station": "Station X"}, metadata: {"ts": "1616510425200", "speedThreshold": 60}
```

**Usage example: smart traffic management system**

Consider a smart traffic management system where intersection reports telemetry data for traffic light durations and traffic density.

This scenario will have the following configuration:

![Configuration usage example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes-config-example.png)

We have a device "TrafficLight" that belongs to a customer "Intersection".

"Intersection" has the following latest telemetry:

![Intersection latest telemetry](/images/user-guide/rule-engine-2-0/nodes/customer-latest-telemetry-example.png)

The incoming message from "TrafficLight" will be as follows:

```bash
msg: {"lightStatus": "green"}, metadata: {"ts": "1616510426300"}
```

The outbound message will be routed via **Success** chain and will include the following telemetry in the message body:

```bash
msg: {"lightStatus": "green", "greenLightDuration": 45, "density": 75}, metadata: {"ts": "1616510426300"}
```

You can see the real life example, where this node is used, in the tutorial [Send email to customer](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/).

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

##### Originator telemetry

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry.png)

Adds Message Originator telemetry values from particular time range that was selected in node configuration to the Message Metadata. 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-config.png)

Telemetry values added to Message Metadata without prefix.

The rule node has three fetch modes:

 - FIRST: retrieves telemetry from the database that is closest to the beginning of the time range

 - LAST: retrieves telemetry from the database that is closest to the end of the time range

 - ALL: retrieves all telemetry from the database, which is in the specified time range.
 
![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-mode.png)

If selected fetch mode **FIRST** or **LAST**, Outbound Message Metadata would contain JSON elements(key/value)

Otherwise if the selected fetch mode **ALL**, telemetry would be fetched as an array.

<table  style="width: 60%">
   <thead>
     <tr>
	 <td><strong><em>Note:</em></strong></td>
     </tr>
   </thead>
   <tbody>
     <tr>
	<td>
	<p>The rule node can extract a limit size of records into array: 1000 records</p>
	</td>
     </tr>
   </tbody>
</table>

This array will contain JSON objects with the timestamp and value. 

<table  style="width: 60%">
   <thead>
     <tr>
	 <td><strong><em>Note:</em></strong></td>
     </tr>
   </thead>
   <tbody>
     <tr>
	<td>
	<p>End of the interval must always be less than the beginning of the interval.</p>
	</td>
     </tr>
   </tbody>
</table>

If selected checkbox: **Use metadata interval patterns**, rule node will use Start Interval and End Interval patterns from metadata.

Patterns units sets in the milliseconds since the UNIX epoch (January 1, 1970 00:00:00 UTC)

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-patterns.png)

 - If any pattern will be absent in the Message metadata, the outbound message will be routed via **failure** chain.
 
 - In addition, if any pattern will have invalid data type, the outbound message will be also routed via **failure** chain.

Outbound Message Metadata will contain configured telemetry fields if they exist and belong to the selected range.

If attribute or telemetry was not found, it is not added into Message Metadata and still routed via **Success** chain. 
 
To access fetched telemetry in other nodes you can use this template: <code>JSON.parse(metadata.temperature)</code>

**Note:** Since TB Version 2.3 the rule node has the ability to choose telemetry sampling order when selected Fetch mode: **ALL**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-order-by.png)

You can see the real-life example, where this node is used, in the following tutorials:

- [Telemetry delta calculation](/docs/user-guide/rule-engine-2-0/tutorials/telemetry-delta-validation/)

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