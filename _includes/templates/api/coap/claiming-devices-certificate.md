Send POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
coap://{{HOST_NAME}}/api/v1/claim
```
{: .copy-code}

> ⚠️ Don&#39;t forget to replace <code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}

```shell
coap://{{coapHostName}}/api/v1/claim
```
{: .copy-code}

{% endif %}