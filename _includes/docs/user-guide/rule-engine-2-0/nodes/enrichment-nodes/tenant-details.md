![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/tenant-details-node.png)

Enriches the outgoing message with the tenant's details.

**Configuration**

* **Select details** - list of the details to be fetched from the tenant.
* **Add selected details to** - controls whether the fetched details should be added to the **_Message_** or **_Metadata_**.

![Configuration example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-details-config.png)

Selected details are added into the outgoing message with prefix: <code>tenant_</code>.

**Output connections**
* **Success:**
  * If tenant's details were successfully fetched.
* **Failure:**
  * If unexpected error occurs during message processing.

This node functions similarly to the customer details node. The key difference is that this node fetches details from the tenant,
while the customer details node fetches them from the customer. For a usage example, please refer to the [customer details node](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#customer-details).
