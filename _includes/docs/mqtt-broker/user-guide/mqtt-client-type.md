
* TOC
{:toc}

ThingsBoard MQTT Broker implements two types of clients: **DEVICE** and **APPLICATION**.
Based on our experience in the IoT ecosystem, we decided to split the clients into these categories, since most clients fall into one of two use cases:

* Clients that publish a lot of messages, but subscribe to a few topics with low message rates (DEVICE).
* Clients that subscribe to topics with high message rates and require messages to persist when the client is offline (APPLICATION).

Splitting the clients in this way makes it much more convenient to implement different use cases, which helps to maximize performance.

The client type is set during the processing of the _CONNECT_ packet, with the authentication process being the key factor for client-type identification. 
For more information, please refer to the [security](/docs/mqtt-broker/security/) and [MQTT listeners](/docs/mqtt-broker/mqtt-listeners/) guides.

If Basic and TLS authentications are disabled, the connecting client will always be of type **DEVICE**. 
Otherwise, the client type is determined by the MQTT credentials used to authenticate it. 
Each MQTT client credential includes a `clientType` field that defines the client type. 
For instructions on how to create MQTT credentials, please refer to this [guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/).

### General info

All published messages from MQTT clients are persisted in the `publish_msg` Kafka topic (which can be renamed via [Configuration properties](/docs/mqtt-broker/install/config/)). 
The processing of messages differs depending on the client type and whether the client is persistent or non-persistent.
For more details on client persistence, please refer to the [Clean Session](https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718030) property 
in the Variable header for MQTT v3.x or the [Clean Start](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901039) and
[Session Expiry Interval](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901048) properties for MQTT v5.

The Kafka consumer actively polls messages from the `publish_msg` topic to send messages further. 
For non-persistent clients, messages are published directly to the subscribed clients. For persistent clients, however, the logic is different. 
Continue reading for more details below.

### Device client

Clients of the **DEVICE** type can be either persistent or non-persistent, depending on the properties set in the _CONNECT_ packet (as described in the [General Info](#general-info) section). 
If the client is persistent, messages are pushed to an additional Kafka topic named `device_persisted_msg` (which can be renamed via [Configuration properties](/docs/mqtt-broker/install/config/)).

A dedicated Kafka consumer actively polls messages from the `device_persisted_msg` topic. 
The processor persists these messages in a PostgreSQL database before sending them to the subscribed online clients. 
In this way, both online and offline clients can receive all messages. 
Offline clients will receive all the persisted messages once they reconnect to the broker. 
The `MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT` environment variable can be changed to control the number of messages that the offline client will receive on reconnect.

### Application client

**Clients of the APPLICATION type can only be persistent**. I
If a client is not persistent but is authenticated as an APPLICATION client type, messages will be sent to it directly without being additionally persisted.

After the messages are published to the `publish_msg` Kafka topic, they are forwarded to a unique Kafka topic 
that is created automatically for each APPLICATION client as soon as it connects to the broker. 
The naming format of this topic is as follows:

```
mqtt_broker_application_client_$CLIENT_ID
```

where $CLIENT_ID represents the client ID of the connecting client.

A separate Kafka consumer continuously polls messages from the aforementioned topic and delivers them to the corresponding application client. 
This approach greatly enhances performance as each application client is processed in a separate thread.
