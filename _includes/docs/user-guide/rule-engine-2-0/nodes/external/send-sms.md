<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.2</em></strong></td>
     </tr>
   </thead>
</table> 

Node is able to construct SMS message based on the metadata fields from the incoming message and send it using AWS SNS or Twilio SMS providers.
We recommend enabling debug mode for the rule node.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-sms.png)

- **Use system SMS provider settings** - if enabled default SMS Provider Server configured on System level will be used.
{% unless docsPrefix contains "paas/" %}
See [SMS Provider](/docs/{{docsPrefix}}user-guide/ui/sms-provider-settings) settings for more details;
{% endunless %}
- **Phone Numbers To template** - Allows to configure multiple phone numbers where the SMS will be sent to. Optionally, you may reference fields from the message metadata.  
- **SMS message template** - Allows to configure body of the SMS message. Optionally, you may reference fields from the message metadata.

This Node can work with default SMS provider configured on System level. 
If SMS message will be sent to all recipients successfully, original Message will be passed to the next nodes via Success chain, otherwise Failure chain is used.
