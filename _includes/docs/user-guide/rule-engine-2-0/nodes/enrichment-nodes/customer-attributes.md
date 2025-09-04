![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/customer-attributes-node.png)

Identifies the message originator's customer and enriches the outgoing message with the customer's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/). 

**Configuration**

* **Customer's attributes/latest telemetry mapping** - controls whether to add attributes or the latest telemetry data to the message.

  * **Source attribute/telemetry key** - key that will be used to fetch the attribute or latest telemetry value from the customer.
  * **Target key** - key that will store the fetched value in the outgoing message.

  > **Note:** All input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

* **Add mapped attributes/latest telemetry to** - controls whether the mapped **_Attributes/Latest telemetry_** should be added to the **_Message_** or **_Metadata_**.

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/customer-attributes-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/customer-attributes-node-2-pe.png"></object>
{% endif %}

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

![SubwayOperator attributes](/images/user-guide/rule-engine-2-0/nodes/customer-attributes-example.png)

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

![Configuration usage example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes-config-example.png)

We have a device "TrafficLight" that belongs to a customer "Intersection".

"Intersection" has the following latest telemetry:

![Intersection latest telemetry](/images/user-guide/rule-engine-2-0/nodes/customer-latest-telemetry-example.png)

The incoming message from "TrafficLight" will be as follows:

```bash
msg: {"lightStatus": "green"}, metadata: {"ts": "1616510426300"}
```

The outgoing message will be routed via **Success** chain and will include the following telemetry in the message:

```bash
msg: {"lightStatus": "green", "greenLightDuration": 45, "density": 75}, metadata: {"ts": "1616510426300"}
```

You can see the real life example, where this node is used, in the tutorial [Send email to customer](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/).
