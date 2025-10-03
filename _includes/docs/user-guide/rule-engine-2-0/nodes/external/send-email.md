<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-email.png)

Node sends incoming message using configured Mail Server. This Node works only with messages that where created using 
[**To Email**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#to-email-node) transformation Node, please connect this Node with **To Email** Node using **Success** chain.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-email-config.png)

- **Use system SMTP settings** - if enabled default Mail Server configured on System level will be used
- **Protocol** - Mail Server transport protocol: *SMTP* or *SMTPS*
- **SMTP host** - Mail Server host
- **SMTP port** - Mail Server port
- **Timeout ms** - read timeout in milliseconds
- **Enable TLS** - if true, enables the use of the STARTTLS command (if supported by the server)
- **Username** - username for the account at the mail host, if any
- **Password** - password for the account at the mail host, if any

This Node can work with default Mail Server configured on System level.
Please find more details about [how to configure default System SMTP Settings.](/docs/{{docsPrefix}}user-guide/ui/mail-settings/)

If specific Mail Server is required for this node - disable **Use system SMTP settings** checkbox and configure Mail Server manually.

<br>

Additionally this node can create email attachments if incoming message has prepared **attachments** metadata field with reference to files stored in DataBase.

Multiple attachments supported. Use a comma separated no whitespace references (uuids) to send many files. Here an example of message **metadata**:

{% highlight javascript %}
{
  "attachments": "e18b6950-dfca-11eb-affb-8db134b46d68,17383b4c-6000-4bb8-be04-b1cb15aa18c5"
}
{% endhighlight %}

**NOTE**: This is part of [File Storage](/docs/{{docsPrefix}}user-guide/file-storage/) feature supported by [ThingsBoard Professional Edition](/products/thingsboard-pe/).

<br>

In case of successful mail sending, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

You can see the real life example, where this node is used, in the next tutorial:

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)

<br>
