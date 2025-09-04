<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.5</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-to-slack.png)

The node create a message based on the incoming data and metadata, and send it via [Slack](https://slack.com/) to a public channel, private channel or direct message.
If chosen to use system Slack settings, the node will take the Slack API token from system settings. Otherwise, you need to specify the token in the node configuration.
Learn more about how to configure Slack settings in Thingsboard [here](/docs/{{docsPrefix}}user-guide/ui/slack-settings/).

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-to-slack-config.png)

- **Message template** - the template for a Slack message; you may optionally reference fields from incoming message data and metadata;
- **Use system slack settings** - if enabled, the node will take the Slack API token from system settings;
- **Slack API token** - token to integrate Thingsboard with Slack;
- **Slack channel type** - send message via Slack to a public channel, private channel or direct message;
- **Conversation** - public channel, private channel or user in Slack to send message to.

