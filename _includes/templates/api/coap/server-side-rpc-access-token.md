Send GET request with observe flag to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}

```shell
coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is your device&#39;s access token.

Once subscribed, a client may receive RPC requests. An example of RPC request body is shown below:

```json
{
  "id": "1",
  "method": "setGpio",
  "params": {
    "pin": "23",
    "value": 1
  }
}
```

> Where   
&#8194;&#8226;&#8194;**id** - request id, integer request identifier   
&#8194;&#8226;&#8194;**method** - RPC method name, string   
&#8194;&#8226;&#8194;**params** - RPC method params, custom json object

To reply to an RPC request, send a POST request to the following URL

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}

```shell
coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}

> Where <code>$id</code> is an integer request identifier.

**Example**

- Use **RPC debug terminal** widget in your ThingsBoard instance.
- Subscribe to RPC commands from the server using the command below. To do this, in the first terminal window send GET request with observe flag:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
coap-client -m get coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}

```shell
coap-client -m get coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}

{% endif %}


{% capture difference %}
The "`s`" option stands for subscribe and the value has to be specified in seconds.

The "`B`" options stands for break (the operation will be break after desired timeout) and the value has to be specified in seconds
{% endcapture %}
{% include templates/info-banner.md content=difference %}

- Send an RPC request "connect" to the device using **RPC debug terminal** widget.
- Save the [rpc-response.json](/docs/reference/resources/rpc-response.json){:target="_blank" download="rpc-response.json"} file to your PC.
- In the second terminal window simulate sending a response from the device to the server:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap-client -f rpc-response.json -m post coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc/1
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}

```shell
cat rpc-response.json | coap post coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc/1
```
{: .copy-code}

{% endif %}

> ⚠️ Replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> with your device&#39;s access token.

You should receive a response from the device:

```shell
{"result":"ok"}
```

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.html imageCollection="server-side-rpc" %}
{% endif %}