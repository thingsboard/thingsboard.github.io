# Push to cloud 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.6.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/thingsboard-edge/nodes/push-to-cloud.png)

Pushes messages to cloud. This node used only on Edge instances to push messages from ThingsBoard Edge to Cloud.

Once specific message arrived into this node it's going to be converted into cloud event and saved to the database.

This message doesn't push messages to cloud directly, but using cloud queue.

![image](/images/thingsboard-edge/nodes/push-to-cloud-form.png)

Message will be routed via **Failure** chain in the following cases:

- Node was not able to save cloud event to database 

# Push to edge 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.6.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/thingsboard-edge/nodes/push-to-edge.png)

Pushes messages from Cloud to ThingsBoard Edge if Message Originator assigned to particular edge or is Edge entity. 

This node used only on Cloud instances to push messages from Cloud to ThingsBoard Edge. 

Once specific message arrived into this node it's going to be converted into edge event and saved to the database.

This message doesn't push messages to edge directly, but using edge queue.

Supports only **DEVICE, ENTITY_VIEW, ASSET and EDGE Message Originator(s)**.

![image](/images/thingsboard-edge/nodes/push-to-edge-form.png)

Message will be routed via **Failure** chain in the following cases:

- Node was not able to save edge event to database 