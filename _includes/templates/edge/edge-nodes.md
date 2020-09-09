# Push to cloud 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/edge/nodes/push-to-cloud.png)

Pushes messages to cloud. This node is used only on Edge instances to push messages from ThingsBoard Edge to Cloud.

![image](/images/edge/nodes/push-to-cloud-form.png)

Message will be routed via **Failure** chain in the following cases:

- Edge has lost connection with the Cloud

# Push to edge 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/edge/nodes/push-to-edge.png)

Pushes messages from Cloud to ThingsBoard Edge if Message Originator assigned to particular edge or is Edge entity. This node is used only on Cloud instances to push messages from Cloud to ThingsBoard Edge. 

Supports only **DEVICE, ENTITY_VIEW, ASSET and EDGE Message Originator(s)**.

![image](/images/edge/nodes/push-to-edge-form.png)

Message will be routed via **Failure** chain in the following cases:

- Cloud has lost connection with the ThingsBoard Edge