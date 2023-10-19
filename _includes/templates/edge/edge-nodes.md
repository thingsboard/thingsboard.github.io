## Push to cloud 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/edge/nodes/push-to-cloud.png)

Push messages from edge to cloud. This node used only on edge to push messages from edge to cloud. Once message arrived into this node it’s going to be converted into cloud event and saved to the local database. Node doesn't push messages directly to cloud, but stores event(s) in the cloud queue.
Supports next originator types:
- DEVICE
- ASSET
- ENTITY_VIEW
- DASHBOARD
- TENANT
- CUSTOMER
- EDGE

As well node supports next message types:
- POST_TELEMETRY_REQUEST
- POST_ATTRIBUTES_REQUEST
- ATTRIBUTES_UPDATED
- ATTRIBUTES_DELETED
- ALARM

In case successful storage edge event to database message will be routed via **Success** route.

![image](/images/edge/nodes/push-to-cloud-form.png)

Message will be routed via **Failure** chain in the following cases:
- Node was not able to save edge event to database
- Unsupported originator type arrived
- Unsupported message type arrived

## Push to edge 

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/edge/nodes/push-to-edge.png)

Push messages from cloud to edge. Message originator must be assigned to particular edge or message originator is **EDGE** entity itself. This node used only on cloud instances to push messages from cloud to edge. Once message arrived into this node it’s going to be converted into edge event and saved to the database. Node doesn't push messages directly to edge, but stores event(s) in the edge queue.
Supports next originator types:
- DEVICE
- ASSET
- ENTITY_VIEW
- DASHBOARD
- TENANT
- CUSTOMER
- EDGE

As well node supports next message types:
- POST_TELEMETRY_REQUEST
- POST_ATTRIBUTES_REQUEST
- ATTRIBUTES_UPDATED
- ATTRIBUTES_DELETED
- ALARM

In case successful storage edge event to database message will be routed via **Success** route.

![image](/images/edge/nodes/push-to-edge-form.png)

Message will be routed via **Failure** chain in the following cases:
- Node was not able to save edge event to database
- Unsupported originator type arrived
- Unsupported message type arrived
