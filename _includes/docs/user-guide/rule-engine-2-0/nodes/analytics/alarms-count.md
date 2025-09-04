<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count.png)

Count alarms when receives input message about new alarm. The input message may be 'ALARM', 'ALARM_ACK', 'ALARM_CLEAR', or 'ENTITY_CREATED' and 'ENTITY_UPDATED' message about the alarm. 
Executes count query based on the alarm count mappings and the originator of the message (device, asset, etc.) 

Result of alarms count then set to specified target timeseries attribute of the entity.

Message of type **POST_TELEMETRY_REQUEST** is generated for each entity and alarms count result.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count-config-new.png)

- **Count alarms for propagation entities** - if enabled, will count alarms not only for originator of the alarm, but also for all propagated entities.
- **Alarms count mappings** - table of mapping configurations specifying rules used to count alarms.

Mapping Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count-mapping-config.png)

- **Target telemetry** - name of the target telemetry key of the entity used to store alarms count result.
- **Status filter** - list of allowed alarm statuses used to filter alarms. If not specified alarms with any status will be selected.
- **Severity filter** - list of allowed alarm severities used to filter alarms. If not specified alarms with any severity will be selected.
- **Type filter** - list of allowed alarm types used to filter alarms. If not specified alarms with any type will be selected.
- **Specify interval** - if checked only alarms created during specified interval will be selected otherwise alarms will be selected for the entire time.

For each selected entity node will generate and forward via **Success** chain new messages of type **POST_TELEMETRY_REQUEST**
and json body containing target telemetry with alarms count value.
In case when alarms count for some entity will fail node will generate failure message
with failure reason and entity as originator. Failure message is forwarded via **Failure** chain.

**Since TB Version 3.3.3** you can select the queue name:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-queue-name.png)

<br>
