![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/originator-fields-node.png)

Enriches the outgoing message with the message originator's details.

**Configuration**

* **Originator fields mapping** - list of mappings between **Source field** and **Target key**.
  * **Source field** - field that should be fetched.
  * **Target key** - key that will store fetched value in the outgoing message. 
    > **Note:** Target key fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/). 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-mapping.png)

> **Note:** If configured mapping contains fields that are not available for originator's entity type (for example, `phone` when originator is a device), then such mapping will be ignored.

* **Add mapped originator fields to** - controls whether the mapped fields should be added to the **_Message_** or **_Metadata_**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-fetch-to.png)

* **Skip empty fields** - if enabled, fields with no value or an empty string will not be added in the outgoing message.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-skip-empty-fields.png)

> **Note:** Following message originator's entity types are supported: **Tenant**, **Customer**, **User**, **Asset**, **Device**, **Alarm**, **Rule chain**, **Entity view** and **Edge**.

**Output connections**
* **Success:**
  * If message originator's fields were successfully fetched and added to the outgoing message.
* **Failure:**
  * If message originator's entity type is not supported. 
  * If unexpected error occurred during message processing.
