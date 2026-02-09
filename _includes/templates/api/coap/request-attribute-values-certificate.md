Send GET request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap://{{HOST_NAME}}/api/v1/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

> ⚠️ Don&#39;t forget to replace <code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.

{% else %}

```shell
coap://{{coapHostName}}/api/v1/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

{% endif %}

{% capture difference %}
**Note**: This example shown with the coap-client instead of CoAP cli since CoAP cli does not support query parameters. Please refer to [Client libraries setup](#docsContent).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Execute the command:**

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap-client -m get "coap://{{HOST_NAME}}/api/v1/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
```
{: .copy-code}

{% else %}

```shell
coap-client -m get "coap://{{coapHostName}}/api/v1/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
```
{: .copy-code}

{% endif %}