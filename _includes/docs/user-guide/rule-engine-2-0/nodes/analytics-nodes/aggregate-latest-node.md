<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-latest.png)

Periodically does aggregation of child entities attributes or latest timeseries for specified set of parent entities.

Performs aggregation of attributes or latest timeseries fetched from child entities with configurable period.

Aggregation result then set to specified target timeseries attribute of parent entity.
 
Message of type **POST_TELEMETRY_REQUEST** is generated for each parent entity and aggregated attribute.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-latest-config.png)

- **Execution period value/time unit** - specifies period of aggregation task.
- **Entities** - specifies set of parent entities for which aggregation should be performed. Can be: 
    - **Single entity** - one specific entity. 
    - **Group of entities** - specific entity group. 
    - **Relations query** - set of entities found by **Relations query** starting from the **Root entity**.
- **Child entities** - specifies **Relations query** used to find child entities starting from the parent entity.
Should be specified only when **Single entity** or **Relations query** is selected for parent entities.
In case of **Group of entities** child entities selected from the entity group itself.
- **Aggregate latest mappings** - table of mapping configurations specifying rules of child attributes aggregation.

Mapping Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-latest-mapping-config.png)

- **Latest telemetry** - specifies whether value of child latest telemetry or attribute should be aggregated.
- **Source telemetry/attribute** - child latest telemetry or attribute key name.  
- **Attribute scope** - specifies scope of child attribute in case when attribute used as source (**Latest telemetry** is unchecked).
- **Default value** - numeric value used by default in cases when source attribute is not defined or is absent for child entity.
- **Aggregation function** - mathematical function used for child values aggregation. Can be:
    - **Minimum** - detects minimum attribute value among all child entities. 
    - **Maximum** - detects maximum attribute value among all child entities.
    - **Sum** - calculates total sum of attribute values of child entities.
    - **Average** - calculates average value for attribute values of child entities.
    - **Count** - performs count of child entities. In this case **Source telemetry/attribute** is not used and can be empty. 
    - **Count unique** - performs count of unique attribute values of child entities.
- **Target telemetry** - name of the target telemetry key of parent entity used to store aggregation result. 
- **Filter entities** - whether to perform filtering of child entities before their attribute values aggregation. 
- **Entity filter** - filter used to filter child entities. It has two parts:
    1. List of entity attribute/latest timeseries keys that should be fetched and used in JavaScript filter function.
    1. JavaScript filter function that should return filtering result as boolean value.
    It receives **attributes** map containing fetched attributes/latest timeseries values as input argument.
    Fetched attribute values are added into **attributes** map using attribute/latest timeseries keys with scope prefix:
        - shared attribute -> <code>shared_</code>
        - client attribute -> <code>cs_</code>
        - server attribute -> <code>ss_</code>
        - telemetry -> no prefix used 

For each parent entity node will generate and forward via **Success** chain new messages of type **POST_TELEMETRY_REQUEST**,
parent entity itself as originator and json body containing target telemetry with aggregated value.
In case when aggregation of some child attributes will fail node will generate failure message
with failure reason and parent entity as originator. Failure message is forwarded via **Failure** chain.

**Since TB Version 3.3.3** you can select the queue name:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-queue-name.png)

<br>
