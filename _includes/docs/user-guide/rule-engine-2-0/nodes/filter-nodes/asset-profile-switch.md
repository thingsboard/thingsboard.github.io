![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/asset-profile-switch-node.png)

Routes incoming messages based on the name of the asset profile. The asset profile name is case-sensitive.

> **Note:** The output connection of the rule node corresponds to the asset profile name. For example: "Freezer room", "Building", etc.
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Output connections**
* "Freezer room"/"Building"/etc:
  * If message is successfully routed with the relation type corresponding with the asset profile name.
* **Failure:**
  * If message originator`s entity is not an **Asset**.
  * If message originator does not have assigned asset profile.
  * If unexpected error occurred during message processing.

**Usage example**

Experienced platform users utilize [asset profiles](/docs/{{docsPrefix}}user-guide/asset-profiles/) and configure specific rule chains per asset profile. 
This is useful to automatically route messages the platform generates: Entity Created, Entity Deleted, Attributes Updated, etc.
But most of the messages are derived from the sensor data.
Let's assume we have temperature sensors in the room assets with profiles: "Freezer Room" and "Boiler Room". 
We also take that there is a relation between room asset and temperature device of type "Contains". 
The below rule chain will change the originator of the message from the device to the related asset and route the incoming messages to the "Freezer Room" or "Boiler Room" rule chains.

![image](/images/user-guide/rule-engine-2-0/nodes/asset-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-asset-profile-switch-example-json) and import the rule chain.   
⚠️ Note that the [rule chain nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) will point to not existing rule chains in your environment.
