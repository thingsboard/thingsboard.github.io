<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![deviceProfileNode](/images/user-guide/rule-engine-2-0/nodes/device-profile-node.png)

<br>

The Device profile rule node creates and clears alarms based on the alarm rules defined in the device profile. By default, it is the first node in the processing chain. This node processes all incoming messages and reacts to both attribute values and telemetry data.

<br>

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/device-profile-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/device-profile-node-2-pe.png"></object>
{% endif %}

Node configuration:

- **Persist state of alarm rules**<br>
  Stores the processing state of alarm rules. **Disabled by default**.
  This option is useful when using [duration](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-condition-with-a-duration){:target="_blank"} or [repeating](/docs/{{docsPrefix}}user-guide/device-profiles/#repeating-alarm-condition){:target="_blank"} conditions.   
  *For example:* If you have a condition like "**Temperature is greater than 50°C for 1 hour**" and the first temperature reading above 50°C arrives at **13:00**, then at **14:00** PM the alarm should be triggered (assuming the temperature remains above the threshold).   
  However, if the **server is restarted between 13:00 PM and 14:00 PM**, the rule node needs to **retrieve the state from the database** to trigger the alarm as expected.   
  If this option is **enabled together with "Fetch state of alarm rules**", the rule node will be able to create the alarm even after a restart.
  If it remains **disabled**, the rule node will **not generate the alarm** after a restart.   
  It is **disabled by default for performance reasons**. When enabled, every incoming message that matches at least one alarm condition will cause an additional **write operation to persist the state** in the database.

- **Fetch state of alarm rules**<br>
  Restores the alarm rule processing state when the rule node initializes. **Disabled by default**.   
  This setting is also useful for [duration](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-condition-with-a-duration){:target="_blank"} or [repeating](/docs/{{docsPrefix}}user-guide/device-profiles/#repeating-alarm-condition){:target="_blank"} conditions.   
  It works in tandem with "**Persist state of alarm rules**", but in certain cases you might want to keep **"Persist state" enabled while disabling this option**.
  For example, if you have many devices that send data frequently or continuously, disabling this option can **avoid loading the state from the database during startup**.   
  In this case, the rule node will **load the state from the database only when the first message arrives from a specific device**.
