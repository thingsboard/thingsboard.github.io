Send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/rpc
```
{: .copy-code}

Where **$THINGSBOARD_HOST_NAME** is your localhost, or the platform address.

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}
```shell
coap://{{coapHostName}}/api/v1/rpc
```
{: .copy-code}

{% endif %}

Both request and response body should be valid JSON documents. The content of the documents is specific to the rule node that will handle your request.

<br>
**Let's look at an example**:

- Add two nodes to the Rule Chain: "**script**" and "**rpc call reply**";

- In the **script** node enter the function:

```shell
return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};
```
{: .copy-code}

- Save the "[rpc-client-request.json](/docs/reference/resources/rpc-client-request.json)" file to your PC;

{% if docsPrefix == null or docsPrefix == "pe/" %}
- Now, send request to the server using the command below. Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host:

```shell
cat rpc-client-request.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/rpc
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}
- Now, send request to the server using the command below:

```shell
cat rpc-client-request.json | coap post coap://{{coapHostName}}/api/v1/rpc
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
- Now, send request to the server using the command below. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host:

```shell
cat rpc-client-request.json | coap post coap://$THINGSBOARD_EDGE_HOST_NAME/api/v1/rpc
```
{: .copy-code}
{% endif %}

- You should receive a response from the server:

```shell
{"time":"2016 11 21 12:54:44.287"}
```

{% include images-gallery.html imageCollection="client-side-rpc-certificate" %}