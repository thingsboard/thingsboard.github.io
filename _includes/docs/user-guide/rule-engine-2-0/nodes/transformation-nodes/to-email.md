<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-to-email.png)

Transforms message to Email Message by populating email fields using values derived from Message metadata.
Set 'SEND_EMAIL' output Message type that can be accepted later by [**Send Email Node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-email-node).
All email fields can be configured to use values from metadata. Supports sending of HTML pages and images.
  
![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-to-email-config.png)

For example incoming message has **deviceName** field in metadata and email body should contain its value.

In this case value of **deviceName** can be referenced as <code>${deviceName}</code> like in the following example:

 ```
 Device ${deviceName} has high temperature
 ```
 
<br>

If you like to send html or image you have to choose **HTML** or **Dynamic** in field **Mail Body type**. See [send HTML or image inside email](/docs/user-guide/rule-engine-2-0/tutorials/send-email-html)
examples.

Additionally, this node can prepare email attachments if incoming message metadata contains **attachments** field with reference to files stored in DataBase.
> **Note** This is part of [File Storage](/docs/{{docsPrefix}}user-guide/file-storage/) feature supported by [ThingsBoard Professional Edition](/products/thingsboard-pe/).

<br>

You can see the real life example, where this node is used, in the next tutorial:

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)
- [Send HTML or image inside email](/docs/user-guide/rule-engine-2-0/tutorials/send-email-html)
