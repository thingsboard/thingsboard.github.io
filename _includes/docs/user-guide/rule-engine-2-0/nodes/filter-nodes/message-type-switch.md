Routes incoming messages by the message type value. 
If the incoming message has known [message type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) then it is sent to the corresponding chain, otherwise, message is sent to **Other** chain.

> **Note:** The output connection of the rule node corresponds to the type of the message. For example: "Post Telemetry", "Custom", etc.
If you use custom message types than you can route those messages via **Other** chain.

**Output connections**
* "Post telemetry"/**Other**:
  * If message is successfully routed with the relation type corresponding with message type value.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Let's assume you have messages with different types processed in one rule chain. 
You may want to split the message flow based on message type.
See below:

![image](/images/user-guide/rule-engine-2-0/nodes/message-type-switch-chain.png)
