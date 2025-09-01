![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/tenant-attributes-node.png)

Identifies the message originator's tenant and enriches the outgoing message with the tenant's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/).

**Configuration**

* **Tenant's attributes/latest telemetry mapping** - controls whether to add attributes or the latest telemetry data to the message.

  * **Source attribute/telemetry key** - key that will be used to fetch the attribute or latest telemetry value from the tenant.
  * **Target key** - key that will store the fetched value in the outgoing message.

  > **Note:** All input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

* **Add mapped attributes/latest telemetry to** - controls whether the mapped **_Attributes/Latest telemetry_** should be added to the **_Message_** or **_Metadata_**.

![Configuration example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-attributes-config.png)

**Output connections**
* **Success:**
  * If tenant's attributes or latest telemetry were found and successfully fetched.
  * If tenant's attributes or latest telemetry were not found.
* **Failure:**
  * If unexpected error occurs during message processing.

This node functions similarly to the customer attributes node. The key difference is that this node fetches attributes or latest telemetry from the tenant,
while the customer attributes node fetches them from the customer. For a usage example, please refer to the [customer attributes node](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#customer-attributes).
