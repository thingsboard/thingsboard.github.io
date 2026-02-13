
<b><font size="4">Create or update shared attribute</font></b>

To create or update a shared attribute, send a **POST** request with a JSON payload to:

```shell
https://{{HOST_NAME}}/api/plugins/telemetry/$ENTITY_TYPE/$ENTITY_ID/SHARED_SCOPE
```
{: .copy-code}

Replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.{% endunless %}   
&#8194;&#8226;&#8194;<code>$ENTITY_TYPE</code> with your entity type.   
&#8194;&#8226;&#8194;<code>$ENTITY_ID</code> with your entity ID.

**Example**: create a shared attribute with the name _**newAttributeName**_ and value _**newAttributeValue**_ for device with ID _**ad17c410-914c-11eb-af0c-d5862211a5f6**_:

```shell
curl -v '{{httpsUrl}}/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/SHARED_SCOPE' \
-H 'X-Authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
-H 'Content-Type: application/json' \
--data-raw '{"newAttributeName":"newAttributeValue"}'
```
{: .copy-code}

Replace <code>$YOUR_JWT_TOKEN_HERE</code> with your JWT token value.

<br><b><font size="4">Fetch shared attributes</font></b>

To retrieve all shared attributes for a device, send a GET request:

```shell
curl -v -X GET '{{httpsUrl}}/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/values/attributes/SHARED_SCOPE' \
-H 'X-Authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
-H 'Content-Type: application/json'
```
{: .copy-code}

**Response example**   
The response contains the attribute key, value, and the timestamp of the last update:

```json
[
  {
    "lastUpdateTs": 1617633139380,
    "key": "newAttributeName",
    "value": "newAttributeValue"
  }
]
```

As an alternative to curl, you may use the official [Java](/docs/{{docsPrefix}}reference/rest-client/){:target="_blank"} or [Python](/docs/{{docsPrefix}}reference/python-rest-client/){:target="_blank"} REST clients.

<b><font size="4">Device API</font></b>

Devices can interact with shared attributes using the following APIs:
- Request shared attribute values:
  - [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#request-attribute-values-from-the-server){:target="_blank"}
  - [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#request-attribute-values-from-the-server){:target="_blank"}
  - [HTTP API](/docs/{{docsPrefix}}reference/http-api/#request-attribute-values-from-the-server){:target="_blank"}
  - [LwM2M API](/docs/{{docsPrefix}}reference/lwm2m-api/#attributes-api){:target="_blank"}

- Subscribe to shared attribute updates:
  - [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#subscribe-to-attribute-updates-from-the-server){:target="_blank"}
  - [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#subscribe-to-attribute-updates-from-the-server){:target="_blank"}
  - [HTTP API](/docs/{{docsPrefix}}reference/http-api/#subscribe-to-attribute-updates-from-the-server){:target="_blank"}
  - [LwM2M API](/docs/{{docsPrefix}}reference/lwm2m-api/#attributes-api){:target="_blank"}

{% capture missed_updates %}
If a device goes offline, it may miss attribute update notifications.
We recommend subscribing to attribute updates on application startup and requesting the latest attribute values after each connection or reconnection.
{% endcapture %}
{% include templates/info-banner.md content=missed_updates %}
