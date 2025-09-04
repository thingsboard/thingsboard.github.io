<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-generator.png)

Generates Messages with configurable period. JavaScript function is used for message generation.

Node Configuration:

- Message generation frequency in seconds
- Message originator
- JavaScript function that will generate the actual message.

JavaScript function receive 3 input parameters:

- <code>prevMsg</code> - is a previously generated Message payload.
- <code>prevMetadata</code> - is a previously generated Message metadata.
- <code>prevMsgType</code> - is a previously generated Message type.

Script should return the following structure:
{% highlight java %}
{   
msg: new payload,
metadata: new metadata,
msgType: new msgType
}
{% endhighlight %}

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-generator-config.png)

All fields in resulting object are optional and will be taken from previously generated Message if not specified.

Outbound Message from this Node will be new Message that was constructed using configured JavaScript function.

JavaScript generator function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

This node can be used for Rule Chain debugging purposes.
