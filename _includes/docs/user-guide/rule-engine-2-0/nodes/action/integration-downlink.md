<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-integration-downlink.png)

Forwards Message to selected [Integration](/docs/{{peDocsPrefix}}user-guide/integrations/) as downlink message.

Message will be pushed to the selected integration downlink queue.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-integration-downlink-config.png)

- **Integration** - target Integration for downlink message processing.

**Failure** chain is used if Message push to Integration will fail, otherwise **Success** chain.
