![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/customer-details-node.png)

Enriches the outgoing message with the customer's details.

**Configuration**

* **Select details** - list of the details to be fetched from the customer.
* **Add selected details to** - controls whether the fetched details should be added to the **_Message_** or **_Metadata_**.

![Configuration example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-details-config.png)

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

![Customer details image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-details-example.png)

The incoming message from "Greenhouse Sensor 01" will be as follows:

```bash
msg: {"temperature": 25.0, "humidity": 70}, metadata: {"ts": "1616510425200"}
```

The outgoing message will be routed via **Success** chain and will include the following details in the message:

```bash
msg: {"temperature": 25.0, "humidity": 70, "customer_title": "Warehouse manager", "customer_country": "United States", "customer_phone": "+12124567890"}, metadata: {"ts": "1616510425200", "speedThreshold": 60}
```
