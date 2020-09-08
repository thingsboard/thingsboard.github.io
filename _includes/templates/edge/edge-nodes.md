# Push to cloud 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/edge/nodes/push-to-cloud.png)

Sends messages from ThingsBoard Edge to the cloud (ThingsBoard Platform).

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

Sends messages from cloud (ThingsBoard Platform) to ThingsBoard Edge.

![image](/images/edge/nodes/push-to-edge-form.png)

Message will be routed via **Failure** chain in the following cases:

- Cloud has lost connection with the ThingsBoard Edge