Send POST request to the following URL:

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

Publish client-side attributes update using data from [new-attributes-values.json](/docs/reference/resources/new-attributes-values.json){:target="_blank" download="new-attributes-values.json"} file.

The content of the **"new-attributes-values.json"** file:

```json
{
  "attribute1": "value1",
  "attribute2": true,
  "attribute3": 42.0,
  "attribute4": 73,
  "attribute5": {
    "someNumber": 42,
    "someArray": [1,2,3],
    "someNestedObject": {"key": "value"}
  }
}
```

**Execute the command:**

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
cat new-attributes-values.json | coap post coap://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% else %}

```shell
cat new-attributes-values.json | coap post coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}