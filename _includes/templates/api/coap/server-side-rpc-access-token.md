Send GET request with observe flag to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** is your localhost, or the platform address;
- **$ACCESS_TOKEN** is device access token.

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}
```shell
coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where **$ACCESS_TOKEN** is device access token.

{% endif %}

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

Where

- **id** - request id, integer request identifier;
- **method** - RPC method name, string;
- **params** - RPC method params, custom json object.

and can reply to them using POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}
```shell
coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}

Where **$id** is an integer request identifier.

<br>
**Let's look at an example**:

- Use **RPC debug terminal** widget in your ThingsBoard instance;

{% if docsPrefix == null or docsPrefix == "pe/" %}
- Subscribe to RPC commands from the server using the command below. To do this, in the first terminal window send GET request with observe flag. Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
coap-client -m get coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
- Subscribe to RPC commands from the server using the command below. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
coap-client -m get coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
- Subscribe to RPC commands from the server using the command below. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
coap-client -m get coap://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}
{% endif %}

{% capture difference %}
The "`s`" option stands for subscribe and the value has to be specified in seconds.

The "`B`" options stands for break (the operation will be break after desired timeout) and the value has to be specified in seconds
{% endcapture %}
{% include templates/info-banner.md content=difference %}

- Send an RPC request "connect" to the device using **RPC debug terminal** widget;

- Save the "[rpc-response.json](/docs/reference/resources/rpc-response.json)" file to your PC;

- In the second terminal window simulate sending a response from the device to the server:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
coap-client -f rpc-response.json -m post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/1
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```shell
cat rpc-response.json | coap post coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc/1
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
coap-client -f rpc-response.json -m post coap://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/1
```
{: .copy-code}
{% endif %}

- You should receive a response from the device:

```shell
{"result":"ok"}
```

{% include images-gallery.html imageCollection="server-side-rpc" %}