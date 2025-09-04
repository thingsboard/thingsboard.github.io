<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count.png)

Periodically does count of alarms for selected set of entities.

Performs count of alarms for selected entities including their child entities if specified with configurable period.

Result of alarms count then set to specified target timeseries attribute of the entity.

Message of type **POST_TELEMETRY_REQUEST** is generated for each entity and alarms count result.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count-config.png)

- **Execution period value/time unit** - specifies period of alarms count task.
- **Entities** - specifies set of entities for which alarms count should be performed. Can be: 
    - **Single entity** - one specific entity. 
    - **Group of entities** - specific entity group. 
    - **Relations query** - set of entities found by **Relations query** starting from the **Root entity**.
- **Count alarms for child entities** - whether to perform alarms count for child entities of each found entity.    
- **Child entities** - specifies **Relations query** used to find child entities starting from the parent entity.
Should be specified only when **Count alarms for child entities** is checked and **Single entity** or **Relations query** is selected for entities.
In case of **Group of entities** child entities selected from the entity group itself.
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
