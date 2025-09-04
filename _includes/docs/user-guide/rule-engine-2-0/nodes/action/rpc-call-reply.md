<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-rpc-call-reply.png)

Sends response to the RPC Call originator. All incoming RPC requests are passed through Rule Chain as Messages.
Also all RPC requests have request ID field. It is used for mapping requests and responses.
Message Originator must be a **Device** entity because RPC response is initiated to the Message Originator.

Node configuration has special request ID field mapping. If the mapping is not specified, **requestId** metadata field is used by default.

![image](/images/user-guide/rule-engine-2-0/nodes/action-rpc-call-reply-config.png)

RPC request can be received via different transports:

- MQTT
- HTTP
- CoAP

Message payload example:
{% highlight json %}
{
"method": "setGpio",
"params": {
"pin": "23",
"value": 1
}
}
{% endhighlight %}

Message will be routed via **Failure** chain in the following cases:

- Inbound Message originator is not a **Device** entity
- Request id is not present in the Message metadata
- Inbound Message payload is empty

For more details how RPC works in the Thingsboard, please read [RPC capabilities](/docs/{{docsPrefix}}user-guide/rpc/) Article.

You can see the real life example, where this node is used, in the next tutorial:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial)
