![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/calculate-delta-node.png)

Calculates delta based on the previous time series reading and current reading and adds it to the message.
Delta calculation is done in scope of the message originator, e.g. device, asset or customer.

**Configuration**

* **Input value key** - key that will be used to calculate the delta.
* **Output value key** - key that will store the delta value in the outgoing message.
* **Number of digits after floating point** - precision of the delta calculation. Optional. If provided rounds calculated delta to specified number of digits.
* **Tell Failure if delta is negative** - if enabled, fails message processing if delta value is negative.
* **Add the time difference between "Input value key" readings** - if enabled, rule node will compute the time difference between the current and previous telemetry reading timestamps.
  * **Period value key** - key that will store the time difference in the outgoing message. 
    Required only if **Add the time difference between "Input value key" readings** is enabled.
* **Exclude zero deltas from outbound message** - if enabled, the **Output value key** will be included in the outgoing message only when its value is non-zero.
* **Use caching** - if enabled, **Input value key** value will be cached in memory to improve performance. 
    > **Note:** The cache will not be updated if the **Input value key** value is modified elsewhere in the system or by other rule nodes.
  The rule node will use the cached value to compute the delta upon the arrival of the next message.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-calculate-delta-config.png)

**Output connections**
* **Success:**
  * If key configured via **Input value key** parameter is present in the incoming message.
* **Other:**
  * If incoming message type is not a **POST_TELEMETRY_REQUEST**. 
  * If key configured via **Input value key** parameter is not present in the incoming message.
* **Failure:**
  * If **Tell Failure if delta is negative** is enabled and the delta calculation returns negative value.
  * If unexpected error occurs during message processing.

**Usage example: smart-metering use case**

Imagine a scenario where a water metering device reports the absolute value of the pulse counter once per day. 
To determine the daily water consumption, you need to compare the value from the previous day with the value from the current day.

Let's examine the rule node behavior using an example with the configuration shown in the screenshot above. 
Assume that the following messages, originating from the same device, arrive at the rule node in the listed sequence:

```bash
msg: {"pulseCounter": 42.6754}, metadata: {"ts": "1717772034000"}
msg: {"pulseCounter": 73.3456}, metadata: {"ts": "1717858434000"}
msg: {"temperature": 22.5}, metadata: {"ts": "1717944834000"}
msg: {"pulseCounter": 73.3456}, metadata: {"ts": "1718031234000"}
msg: {"pulseCounter": 53.1245}, metadata: {"ts": "1718117634000"}
```

The output will be the following:

```bash
msg: {"pulseCounter": 42.6754, "delta": 0, "periodInMs": 0}, metadata: {"ts": "1717772034000"}, "output connection": "Success" # first pulseCounter reading, so the "delta" and "periodInMs" both equals to 0.
msg: {"pulseCounter": 73.3456, "delta": 30.67, "periodInMs": 86400000}, metadata: {"ts": "1717858434000"}, "output connection": "Success" # both "delta" and "periodInMs" calculated relative to the previous msg.
msg: {"temperature": 22.5}, metadata: {"ts": "1717944834000"}, "output connection": "Other" # input value key is missing in the incoming msg
msg: {"pulseCounter": 73.3456}, metadata: {"ts": "1718031234000"}, "output connection": "Success" # zero delta excluded since the "pulseCounter" became unchanged since the previous msg.
msg: {"pulseCounter": 53.1245}, metadata: {"ts": "1718117634000"}, "output connection": "Failure" # force failure due to a negative result of the "delta" calculation.
```
