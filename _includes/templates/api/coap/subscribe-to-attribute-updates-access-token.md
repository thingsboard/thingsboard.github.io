Send GET request with Observe option to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% else %}

```shell
coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}

> ⚠️ Don&#39;t forget to replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> with your device&#39;s access token.

Once shared attribute will be changed by one of the server-side components (REST API or Rule Chain) the client will receive the following update:

**Execute the command:**

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap get -o coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% else %}

```shell
coap get -o coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}