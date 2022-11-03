---
layout: docwithnav-mqtt-broker
title: MQTT Client
description: Create/Update/Delete MQTT Client

---

* TOC
  {:toc}

In order to maximize performance we created 2 types of MQTT client:
- **DEVICE** - for regular mostly publishing MQTT clients
- **APPLICATION** - for MQTT clients that subscribe to multiple topics

By default, client is considered to be of **DEVICE** type, unless it wasn't saved to the system as **APPLICATION** client.

**APPLICATION** client type is preferred for clients with multiple subscriptions because system creates the separate thread and separate Kafka topic for this type of clients.
This way we can use Kafka to persist all messages before sending them to the client and ensure no message is lost.
**Note:** the separate topic is created only if client is connected with `CLearSession` flag set to `false`.

For **DEVICE** clients persisted messages are stored inside of the database and therefore the read and write operations are a bit slower than the ones with Kafka.

To create a new client in the system first of all you need to authorize as an Admin.

{% include templates/mqtt-broker/authentication.md %}

##### Create/update MQTT Client

```bash
curl --location --request GET 'http://localhost:8083/api/mqtt/client' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id":$CLIENT_INTERNAL_ID,
    "clientId":"clientId",
    "name":"Test Client",
    "type":"APPLICATION"
}'

```
{: .copy-code}

If <i>$CLIENT_INTERNAL_ID</i> is empty (_null_), the new client will be created, otherwise the client with <i>$CLIENT_INTERNAL_ID</i> identifier will be updated.

##### Get all MQTT Clients

```bash
curl --location --request GET 'http://localhost:8083/api/mqtt/client' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}
