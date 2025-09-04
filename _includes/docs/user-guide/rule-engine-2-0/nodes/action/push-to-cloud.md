> Only [EDGE](/docs/edge/){:target="_blank"} feature

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/edge/nodes/push-to-cloud.png)

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

<object width="70%" data="https://img.thingsboard.io/edge/nodes/push-to-cloud-node-2-edge.png"></object>

Message will be routed via **Failure** chain in the following cases:
- Node was not able to save edge event to database
- Unsupported originator type arrived
- Unsupported message type arrived
