<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 4.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-calculated-fields.png)

This node is used to trigger calculated field processing **without storing the incoming telemetry in the database**.
By default, the processing of calculated fields are triggered by the [save attributes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node){:target="_blank"} and [save time series](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node){:target="_blank"} nodes.
The **calculated fields** node accepts the same type of messages as these nodes, but allows you to decouple processing from data persistence — ideal when you want to use telemetry for calculated fields processing only.
> **Note**: This node does **not store any telemetry or attribute data** in the database — it simply triggers calculated field execution based on the incoming telemetry.

To **avoid persisting unnecessary data to the database**, route messages to this node instead of **save time series** or **save attributes** nodes.
> **Important**: when a calculated field is evaluated, new message with the originator which calculated field state was updated is generated and pushed into the root rule chain of originator.
To store the calculated result, you still need to use a **save time series** or **save attributes** node in the rule chain.

**Output connections**

* **Success:**
    * If the message payload contains valid telemetry or attribute data to process, or it is empty.
* **Failure:**
    * If an incoming message type is not `POST_TELEMETRY_REQUEST` or `POST_ATTRIBUTES_REQUEST`.
    * If unexpected error occurs during message processing.

**Usage example**:

Consider a **smart building energy management system**, where the building operator wants to monitor the **Energy Efficiency Ratio (EER)** of air conditioning systems to analyze performance trends.

There are two types of devices involved:
* **Sensor** (e.g., flow meters, power meters): these devices send high-frequency telemetry such as cooling output and power usage that can be used for calculated fields processing.
  Since the data changes rapidly and is not useful on its own, it **is not worth to persist**.
* **HVAC unit** (e.g., HVAC controllers, logical aggregators for zone-based HVAC systems): these devices send critical telemetry such as compressor temperature and vibration level required for diagnostics and analytics.
  This data, along with the calculated EER, is persisted for long-term analysis.

The **calculated field** is defined on the **HVAC controller** and uses telemetry from **Sensor** devices.
When telemetry message, for example, from the flow meter, enters the rule chain, **device profile switch** node routes this message to **calculated fields** node.
**Calculated fields** node triggers processing of the calculated field based on incoming telemetry from the message.
As a result of calculation a new message is generated with the **HVAC controller** as the originator, containing the calculated value.
This message enters rule chain where the [device profile switch](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#device-profile-switch){:target="_blank"} node routes it to the **save time series** node to persist the result.

![image](/images/user-guide/rule-engine-2-0/nodes/action-calculated-fields-example-rule-chain.png)

