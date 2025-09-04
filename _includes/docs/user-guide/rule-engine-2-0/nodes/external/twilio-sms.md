<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0.2</em></strong></td>
     </tr>
   </thead>
</table> 

{% assign rulenode = "Twilio SMS" %}{% include templates/pe-rule-node-banner.md %}

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-twilio-sms.png)

Sends incoming message payload as SMS message via Twilio service.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-twilio-sms-config.png)

- **Phone Number From** - can be set direct phone number as Number From of SMS
                          or pattern can be used, that will be resolved to the real Number From using Message metadata.
- **Phone Numbers To** - comma separated recipient Phone Numbers list. Can be set direct phone numbers or pattern can be used, that will be resolved to the real phone numbers using Message metadata.
- **Twilio Account SID** - your Account Sid at twilio.com/console
- **Twilio Account Token** - your Account Token at twilio.com/console

SMS message will be sent to all recipients taken from **Phone Numbers To** list.

If SMS message will be sent to all recipients successfully, original Message will be passed to the next nodes via **Success** chain, otherwise **Failure** chain is used.
