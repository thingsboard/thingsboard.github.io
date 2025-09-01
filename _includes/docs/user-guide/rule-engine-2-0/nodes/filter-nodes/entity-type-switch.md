![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/entity-type-switch-node.png)

Routes incoming messages based on the entity type of the message originator.

**Output**

> **Note:** The output connection of the rule node corresponds to the entity type of the message originator. For example: "Device", "Asset", "User", etc.

**Output connections**
* "Device"/"Asset"/etc:
  * If message is successfully routed with the relation type corresponding with the entity type.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Let's assume you have messages from different entities processed in one rule chain. 
You may want to split the message flow based on entity type.
See below:

![image](/images/user-guide/rule-engine-2-0/nodes/entity-type-switch-chain.png)
