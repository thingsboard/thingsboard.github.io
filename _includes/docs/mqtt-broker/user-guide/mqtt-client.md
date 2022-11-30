
* TOC
{:toc}

ThingsBoard MQTT Broker implements two types of clients: **DEVICE** and **APPLICATION**.
Based on our experience in the IoT ecosystem we decided to split the clients into the above categories since mostly there are:

* clients that publish a lot of messages, but subscribe to a few topics with low message rates (DEVICE);
* clients that subscribe to topics with high message rates and with the requirement to persist messages when the client is offline (APPLICATION).

In this way, it is much more convenient to implement different use cases and this helps to maximize performance.

The client type is set for the client during the processing of the _CONNECT_ packet.
The authentication process is the key factor here for client-type identification. See [security](/docs/mqtt-broker/security/) and 
[MQTT listeners](/docs/mqtt-broker/mqtt-listeners/) guides for more details.

In case the Basic and TLS authentications are disabled, the connecting client will always be of type **DEVICE**.
Otherwise, during the authentication process, the client achieves its type from the MQTT credentials that authenticated it.
Each MQTT client credentials has the `clientType` field that defines the client type.
See the [MQTT credentials](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) guide on how to create MQTT credentials.

### General info

All the published messages from all MQTT clients are persisted in the general `publish_msg` (by default, this name can be changed via [Configuration properties](/docs/mqtt-broker/install/config/)) Kafka topic. 
From there the processing differs based on client type and if client is persistent or not.
See [Clean Session](https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718030) property in the Variable header for MQTT v3.x
or [Clean Start](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901039)
and [Session Expiry Interval](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901048) properties for MQTT v5 for more details 
about whether the client is persistent or not.

Kafka consumer is actively polling messages from `publish_msg` topic to send messages further.
For non-persistent clients they are published directly to the subscribed clients.
For persistent clients, however, the logic is different. Continue reading for more details below.

### Device client

Clients of the **DEVICE** client type can be both persistent or non-persistent depending on the configuration of the _CONNECT_ packet.
In case it is persistent, then the messages are pushed to additional Kafka topic named ...
After they are read from it, they are stored in PosgreSQL.

TODO...

### Application client

Clients of the **APPLICATION** client type can only be persistent. In case the client is not matching the persistent criteria, but is authenticated as Application client type,
messages will be sent to it considering it as is non-persistent client.

From that general Kafka topic the messages are pushed to special Kafka topic that is created for each APPLICATION client.
A separate Kafka consumer is polling messages from such topic and sending them to clients. This allows to maximize performance dramatically since the processing is done in the 
separate thread for each APP client.

TODO ...