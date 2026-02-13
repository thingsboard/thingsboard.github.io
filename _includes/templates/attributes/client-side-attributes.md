
### Fetch client-side attributes

To retrieve client-side attributes, send a **GET** request to:

```shell
https://{{HOST_NAME}}/api/plugins/telemetry/$ENTITY_TYPE/$ENTITY_ID/values/attributes/CLIENT_SCOPE
```
{: .copy-code}

Replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.{% endunless %}   
&#8194;&#8226;&#8194;<code>$ENTITY_TYPE</code> with your entity type.   
&#8194;&#8226;&#8194;<code>$ENTITY_ID</code> with your entity ID.

**Example**: fetch all client-side attributes for a device with ID _**ad17c410-914c-11eb-af0c-d5862211a5f6**_:

```shell
curl -v -X GET '{{httpsUrl}}/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/values/attributes/CLIENT_SCOPE' \
-H 'X-Authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
-H 'Content-Type: application/json'
```
{: .copy-code}

Replace <code>$YOUR_JWT_TOKEN_HERE</code> with your JWT token value.

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

### Device API

Devices can interact with client-side attributes using the following APIs:
- Publish client-side attributes:
  - [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server){:target="_blank"}
  - [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#publish-attribute-update-to-the-server){:target="_blank"}
  - [HTTP API](/docs/{{docsPrefix}}reference/http-api/#publish-attribute-update-to-the-server){:target="_blank"}
- Request client-side attributes:
  - [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#request-attribute-values-from-the-server){:target="_blank"}
  - [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#request-attribute-values-from-the-server){:target="_blank"}
  - [HTTP API](/docs/{{docsPrefix}}reference/http-api/#request-attribute-values-from-the-server){:target="_blank"}

Client-side attributes are published by the device and can be read from the platform, but cannot be modified via UI or REST API.