<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-script.png)

Changes Message payload, Metadata or Message type using configured JavaScript function.

JavaScript function receives 3 input parameters: 

- <code>msg</code> - is a Message payload.
- <code>metadata</code> - is a Message metadata.
- <code>msgType</code> - is a Message type.

Script should return the following structure:
{% highlight java %}
{   
    msg: new payload,
    metadata: new metadata,
    msgType: new msgType 
}
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-script-config.png)

All fields in resulting object are optional and will be taken from original message if not specified.

Outbound Message from this Node will be new Message that was constructed using configured JavaScript function.

JavaScript transform function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

<br>
**Example**

Node receives Message with **payload**:
{% highlight java %}
{
    "temperature": 22.4,
    "humidity": 78
}
{% endhighlight %}

Original **Metadata**:
{% highlight java %}
{ "sensorType" : "temperature" }
{% endhighlight %}


Original **Message Type** - POST_TELEMETRY_REQUEST
<br>

The following modifications should be performed:

- change message type to 'CUSTOM_UPDATE' 
- add additional attribute **_version_** into payload with value **_v1.1_**
- change _**sensorType**_ attribute value in Metadata to **_roomTemp_**

The following transform function will perform all necessary modifications:
{% highlight java %}
var newType = "CUSTOM_UPDATE";
msg.version = "v1.1";
metadata.sensorType = "roomTemp"
return {msg: msg, metadata: metadata, msgType: newType};
{% endhighlight %}

You can see real life example, how to use this node in those tutorials:

- [Transform incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/)
- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial#add-transform-script-node)
