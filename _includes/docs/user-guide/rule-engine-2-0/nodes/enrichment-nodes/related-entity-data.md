![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/related-entity-data-node.png)

Finds entity related to the message originator using configured [relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) query
and adds related entity attributes, latest telemetry or fields to the outgoing message.

**Configuration: Relations query**

* **Direction** - direction of the relation query. Either **_From originator_** or **_To originator_**.
* **Max relation level** - maximum depth for the relation search. Optional. If value is not set the depth is unlimited.
  > **Note:** Search query result returns only one entity even if multiple entities were found.
  * **Fetch last level relation only** - if enabled, forces the rule node to search for related entities only at the level set in the **Max relation level**.
    > **Note:** Available only when **Max relation level** is greater than one.
* **Relation filters** - query filters based on relation type and entity type. Optional. If filters are not set the relation query will search for relations with any type.

![Configuration: Relations query example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-related-entity-data-config-relations-query.png)

**Configuration: Data to fetch**

* **Attributes/Latest telemetry/Fields** - controls whether to fetch attributes, latest telemetry or fields.
  * **Source attribute/telemetry key** or **field** - key that will be used to fetch the attribute, latest telemetry or entity field value from the related entity.
  * **Target key** - key that will store fetched value in the outgoing message.

  > **Note:** All input fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).
* **Add mapped attributes/latest telemetry/fields to** - controls whether fetched data should be added to the **_Message_** or **_Metadata_**.

![Configuration: Data to fetch example image](/images/user-guide/rule-engine-2-0/nodes/enrichment-related-entity-data-config-data-to-fetch.png)

**Output connections**
* **Success:**
  * If related entity was found, even if the specified **Data to fetch** does not exist for the related entity.
* **Failure:**
  * If related entity was not found.
  * If unexpected error occurs during message processing.

**Usage example**

You can see the real life example, where this node is used, in the next tutorial [Reply to RPC calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-related-attributes-node).
