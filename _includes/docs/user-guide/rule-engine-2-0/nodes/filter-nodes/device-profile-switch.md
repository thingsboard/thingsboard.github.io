![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/entity-type-filter-node.png)

Routes incoming messages based on the name of the device profile. The device profile name is case-sensitive.

> **Note:** The output connection of the rule node corresponds to the device profile name. For example: "Temperature sensor", "Humidity sensor", etc.
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Output connections**
* "Temperature sensor"/"Humidity sensor"/etc:
  * If message is successfully routed with the relation type corresponding with the device profile name.
* **Failure:**
  * If message originator`s entity is not a **Device**. 
  * If message originator does not have assigned device profile. 
  * If unexpected error occurred during message processing.

**Usage example**

Experienced platform users utilize [device profiles](/docs/{{docsPrefix}}user-guide/device-profiles/) and configure specific rule chains per device profile.
This is useful in most of the cases, except when the device data is derived from some other message.
For example, you may use BLE to MQTT gateway and BLE beacons. The Gateway payload typically contains MAC of the beacon and beacon data:

```json
{"mac": "7085C2F13DCD", "rssi": -25, "payload": "AABBCC"}
```

Let's assume you have different beacon profiles - indoor air quality "IAQ sensor" device profile and leak sensors "Leak sensor" device profile. 
The below rule chain will change the originator of the message from gateway to device and forward the message to the corresponding rule chain:

![image](/images/user-guide/rule-engine-2-0/nodes/device-profile-switch-chain.png)

You may [download](https://gist.github.com/ashvayka/f67f9415c625e8a2d12340e18248111f#file-device-profile-switch-example-json) and import the rule chain.   
⚠️ Note that the [rule chain nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) will point to not existing rule chains in your environment.
