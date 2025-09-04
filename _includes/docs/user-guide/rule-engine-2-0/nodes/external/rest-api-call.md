<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-rest-api-call.png)

Invoke REST API calls to the external REST server.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-rest-api-call-config.png)

- **Endpoint URL pattern** - Can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code>
- **Request method** - *GET*, *POST*, *PUT*, *DELETE*
- **Headers** - request headers, header or value can be a static string, or pattern that is resolved using Message Metadata properties.

**Endpoint URL**

URL can be a static string or a pattern. Only Message metadata is used for resolving patterns. 
So property names that are used in the patterns must exist in the Message Metadata, otherwise raw pattern will be added into URL.

For example, if Message payload contains property **deviceType** with value **container**, then this pattern: 

<code>http://localhost/api/${deviceType}/update</code> 

will be resolved to 

<code>http://localhost/api/container/update</code>   

**Headers**

Collection of header name/value can be configured. Those headers will be added into Rest request. Pattern should be used for configured both header name and header value.
For example <code>${deviceType}</code>. Only Message metadata is used for resolving patterns. 
So property names that are used in the pattern must exist in the Message Metadata, otherwise raw pattern will be added into header. 

**Request body** - Node will send full Message payload to the configured REST endpoint. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload.

**Outbound message** from this node will contain response **status**, **statusCode**, **statusReason** and responce **headers** in the Message metadata.
Outbound Message payload will be the same as response body. Original Message type and originator will not be changed.

<br>

To send a single file as request body, add a field **attachments** to the message **metadata** with file uuid stored in DataBase. In that case any message data will be ignored and only file content will be sent. 
To define a request content type use the header setting like

<code>Content-Type: application/json; charset=UTF-8</code>

Here an example of message **metadata** to send a single file:

{% highlight javascript %}
{
  "attachments": "e18b6950-dfca-11eb-affb-8db134b46d68"
}
{% endhighlight %}

**NOTE**: This is part of [File Storage](/docs/{{docsPrefix}}user-guide/file-storage/) feature supported by [ThingsBoard Professional Edition](/products/thingsboard-pe/).

<br>

In case of successful request, outbound message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

<br>
