![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/script-node.png)

Evaluates boolean function using incoming message. The function may be written using [TBEL](/docs/{{docsPrefix}}user-guide/tbel/)(recommended) or plain JavaScript. 
Script function should return boolean value and accepts three parameters.

**Configuration**

**TBEL/JavaScript** - controls in which language the function will be written. It receives 3 input parameters:
  * <code>msg</code> - is a message payload, typically a JSON object or array.
  * <code>metadata</code> - is a message metadata. Represented as a key-value map. Both keys and values are strings.
  * <code>msgType</code> - is a message type, string.

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/script-filter-node-configuration-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/script-filter-node-configuration-2-pe.png"></object>
{% endif %}

**Output connections**
* **True:**
  * If the script evaluation returns <code>true</code>.
* **False:**
  * If the script evaluation returns <code>false</code>.
* **Failure:**
  * If the script evaluation fails.

**Usage example**
 
Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.deviceType === 'DHT11';</code><br> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br> 

Full script example:

```javascript
if(msgType === 'POST_TELEMETRY_REQUEST') {
    if(metadata.deviceType === 'vehicle') {
        return msg.humidity > 50;
    } else if(metadata.deviceType === 'controller') {
        return msg.temperature > 20 && msg.humidity > 60;
    }
}

return false;
```
{: .copy-code}

TBEL/JavaScript condition can be verified using [test filter function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

You can see the real life examples, where this node is used, in the next tutorials:

* [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/).
* [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-filter-script-node).
