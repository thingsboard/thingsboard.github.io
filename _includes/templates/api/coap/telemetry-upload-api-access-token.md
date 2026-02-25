Send POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

{% else %}

```shell
coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

{% endif %}

> ⚠️ Don&#39;t forget to replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> with your device&#39;s access token.