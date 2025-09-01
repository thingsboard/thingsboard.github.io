![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/originator-attributes-node.png)

Enriches the outgoing message with the message originator's [attributes](/docs/user-guide/attributes/) and/or [latest telemetry](/docs/user-guide/telemetry/).

**Configuration**
* **Client/Shared/Server attributes** and **Latest telemetry** - list of the keys that will be used to fetch originator's attributes or latest telemetry.
  > **Note:** All input fields in this section support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).
  * **Fetch latest telemetry with timestamp** - if enabled, fetched latest telemetry values will be added to the message with timestamp.
    > **Note:** Available only when the configuration has at least one latest telemetry key set.
* **Add originator attributes to** - controls whether the mapped attributes should be added to the **_Message_** or **_Metadata_**.

* **Tell failure if any of the attributes are missing** - if enabled, fails message processing if at least one selected key does not exist.
  > **Note:** Even in case of failure, the outgoing message will contain telemetry keys that were successfully fetched.

![Configuration example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-attributes-config.png)

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
