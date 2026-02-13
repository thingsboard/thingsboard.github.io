
### Create or update server-side attribute

Send a **POST** request with a JSON payload to:

```shell
https://{{HOST_NAME}}/api/plugins/telemetry/$ENTITY_TYPE/$ENTITY_ID/SERVER_SCOPE
```
{: .copy-code}

Replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.{% endunless %}   
&#8194;&#8226;&#8194;<code>$ENTITY_TYPE</code> with your entity type.   
&#8194;&#8226;&#8194;<code>$ENTITY_ID</code> with your entity ID.

**Example**: create a server-side attribute with the name _**newAttributeName**_ and value _**newAttributeValue**_ for device with ID _**ad17c410-914c-11eb-af0c-d5862211a5f6**_:

```shell
curl -v '{{httpsUrl}}/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/SERVER_SCOPE' \
-H 'x-authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
-H 'content-type: application/json' \
--data-raw '{"newAttributeName":"newAttributeValue"}'
```
{: .copy-code}

Replace <code>$YOUR_JWT_TOKEN_HERE</code> with your JWT token value.

### Fetch server-side attributes

To retrieve all server-side attributes for an entity, send a **GET** request:

```shell
curl -v -X GET '{{httpsUrl}}/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/values/attributes/SERVER_SCOPE' \
  -H 'x-authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
  -H 'content-type: application/json' 
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
