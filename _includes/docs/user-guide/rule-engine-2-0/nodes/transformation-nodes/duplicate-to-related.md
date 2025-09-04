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

