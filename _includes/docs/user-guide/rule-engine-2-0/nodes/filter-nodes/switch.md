![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/filter-switch.png)

Routes incoming message to one or multiple output connections. 
Node executes configured [TBEL](/docs/{{docsPrefix}}user-guide/tbel/)(recommended) or JavaScript function that returns array of strings (connection names).

**Configuration**

**TBEL/JavaScript** - controls in which language the function will be written. It receives 3 input parameters:
  * <code>msg</code> - is a message payload, typically a JSON object or array.
  * <code>metadata</code> - is a message metadata. Represented as a key-value map. Both keys and values are strings.
  * <code>msgType</code> - is a message type, string.

The script should return an array of node connection names where incoming message should be routed.
If returned array is empty - message will not be routed to any node and discarded.

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/switch-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/switch-2-pe.png"></object>
{% endif %}

> **Note:** The output connection of the rule node corresponds to the result of the script execution. For example: "Low Temperature Telemetry", "Normal Temperature Telemetry", "Idle State", etc.
See rule node [connections](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection) for more details.

**Output connections**
* "Low Temperature Telemetry"/"Idle State"/etc:
  * If message is successfully routed with the relation type corresponding with the result of the script execution.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.customerName === 'John';</code><br> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br> 

Full script example:

```javascript
if (msgType === 'POST_TELEMETRY_REQUEST') {
    if (msg.temperature < 18) {
        return ['Low Temperature Telemetry'];
    } else {
        return ['Normal Temperature Telemetry'];
    }
} else if (msgType === 'POST_ATTRIBUTES_REQUEST') {
    if (msg.currentState === 'IDLE') {
        return ['Idle State', 'Update State Attribute'];
    } else if (msg.currentState === 'RUNNING') {
        return ['Running State', 'Update State Attribute'];
    } else {
        return ['Unknown State'];
    }
}
return [];
```
{: .copy-code}

TBEL/JavaScript condition can be verified using [test filter function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).
