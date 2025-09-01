![image](/images/user-guide/rule-engine-2-0/nodes/device-state-1.png)

Triggers device connectivity events.
If the incoming message originator is a device, this node registers the configured event for that device in the Device State Service, which then sends the appropriate message to the Rule Engine. If the metadata **ts** property is present, it will be used as the event timestamp; otherwise, the message timestamp will be used.

If the originator entity type is not **DEVICE** or an unexpected error occurs during processing, the incoming message is forwarded to the **Failure** chain.
If the rate of connectivity events for a given originator is too high, the incoming message is forwarded to the **Rate limited** chain.

Supported device connectivity events:
- Connect event
- Disconnect event
- Activity event
- Inactivity event

This node is particularly useful when the device does not use transport protocols to send data, such as when data is fetched from an external API or computed within the rule chain itself.

Configuration:

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/device-state-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/device-state-2-pe.png"></object>
{% endif %}

