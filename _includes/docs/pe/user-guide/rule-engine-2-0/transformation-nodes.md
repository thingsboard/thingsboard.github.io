{% include docs/user-guide/rule-engine-2-0/ce-transformation-nodes.md %}

{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

## Duplicate To Group Node

{% assign feature = "PE Transformation Nodes" %}{% include templates/pe-feature-banner.md %}

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-group.png)

Duplicates message to all entities belonging to specific [Entity Group](/docs/{{peDocsPrefix}}user-guide/groups/).

Entities are fetched from Entity Group detected according to the configuration.

Entity Group can be specified directly or can be message originator entity itself.

For each entity from group new message is created with entity as originator and message parameters copied from original message.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-group-config.png)

- **Entity group is message originator** - if set, message originator will be considered as Entity Group used to fetch entities.
  In this case incoming message will be routed via **Failure** chain if message originator type is not Entity Group.
- **Target entity group** - specific target Entity Group used to fetch entities.

New messages will be duplicated to group entities and forwarded via **Success** chain if target Entity Group is detected successfully and contains at least one entity.
Otherwise original message will be forwarded via **Failure** chain.

<br>

## Duplicate To Related Node

{% assign feature = "PE Transformation Nodes" %}{% include templates/pe-feature-banner.md %}

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-related.png)

Duplicates message to related entities fetched by relation query.

Related Entities found using configured relation direction and Relation Type.

For each found related entity new message is created with related entity as originator and message parameters copied from original message.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-related-config.png)

- **Relations query** - query used to find new entities starting from incoming message originator.
  In ‘Relations query’ configuration Administrator can select required **Direction** and **relation depth level**. Also set of **Relation filters** can be configured with required Relation type and Entity Types.

New messages will be duplicated to found entities and forwarded via **Success** chain if at least one entity will be found using Relations Query.
Otherwise original message will be forwarded via **Failure** chain.

<br>
