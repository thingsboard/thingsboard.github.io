Send POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
coap://{{HOST_NAME}}/api/v1/rpc
```
{: .copy-code}

> ⚠️ Where <code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
coap://{{coapHostName}}/api/v1/rpc
```
{: .copy-code}

{% endif %}

Both request and response body should be valid JSON documents. The content of the documents is specific to the rule node that will handle your request.

<br>
**Example**

- In the {% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}**Edge** {% endif %}**Root Rule Chain** add two nodes: [transformation script](/docs/user-guide/rule-engine-2-0/nodes/transformation/script){:target="_blank"} and [rpc call reply](/docs/user-guide/rule-engine-2-0/nodes/action/rpc-call-reply){:target="_blank"}. Connect them to "[Log RPC from Device](/docs/user-guide/rule-engine-2-0/nodes/action/log){:target="_blank"}" action node with "**Success**" link.
- In the **script** node enter the function:

```shell
return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};
```
{: .copy-code}

- Save the [rpc-client-request.json](/docs/reference/resources/rpc-client-request.json){:target="_blank" download="rpc-client-request.json"} file to your PC;
- Now, send request to the server using the command below:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
cat rpc-client-request.json | coap post coap://{{HOST_NAME}}/api/v1/rpc
```
{: .copy-code}

> ⚠️ Replace <code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
cat rpc-client-request.json | coap post coap://{{coapHostName}}/api/v1/rpc
```
{: .copy-code}

{% endif %}

- You should receive a response from the server:

```shell
{"time":"2016 11 21 12:54:44.287"}
```

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.html imageCollection="client-side-rpc-certificate" %}
{% endif %}