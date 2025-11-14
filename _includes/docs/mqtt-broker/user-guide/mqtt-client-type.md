
* TOC
{:toc}

In TBMQ, two distinct types of clients are supported: **DEVICE** and **APPLICATION**. 
This classification is designed to optimize message processing, reliability, and resource usage based on the typical usage patterns observed in real-world IoT deployments.
It reflects our extensive experience in the IoT ecosystem, where most clients naturally fall into one of these two primary categories.

* DEVICE clients are primarily engaged in publishing a significant volume of messages while subscribing to a limited number of topics with relatively low message rates. 
These clients are typically associated with IoT devices or sensors that frequently transmit data to TBMQ.

* APPLICATION clients specialize in subscribing to topics with high message rates. 
They often require messages to be persisted when the client is offline with later delivery, ensuring the availability of crucial data. 
APPLICATION clients are commonly utilized for real-time analytics, data processing, or other application-level functionalities.

> For example, a temperature sensor publishing readings every second would typically be a DEVICE client, while a cloud analytics service subscribing to aggregated data across thousands of sensors would be an APPLICATION client.

By categorizing clients into these distinct types, we can better tailor TBMQ to accommodate the specific 
requirements and performance expectations of each use case. 
This segregation of clients simplifies the implementation of different IoT scenarios, thereby optimizing overall system performance.

The determination of client type occurs during the processing of the _CONNECT_ packet, with client authentication playing 
a pivotal role in identifying the client type. Further details regarding client authentication can be found in the [security](/docs/{{docsPrefix}}mqtt-broker/security/overview/) guide, 
which provides comprehensive information on securing client connections.

If both Basic and TLS authentications are disabled, the connecting client will always be assigned the DEVICE type. 
However, when Basic or TLS authentication is enabled, the client type is determined by the MQTT credentials used during the authentication process. 
Each MQTT client credential incorporates a `clientType` field that explicitly defines the client type. 
For step-by-step instructions on creating MQTT credentials, please refer to the designated [guide](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/mqtt-client-credentials/).

## Client persistence

All messages published by MQTT clients are persistently stored in the `tbmq.msg.all` Kafka topic. 
The subsequent processing of these messages varies based on the client type and whether the client is persistent or non-persistent.

{% capture difference %}
To delve into the details of client persistence, it is worthwhile to explore the concept of the 
[Clean Session](https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718030) property in MQTT v3.x or 
the [Clean Start](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901039) and
[Session Expiry Interval](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901048) properties in MQTT v5. 
These properties, defined in the respective MQTT specifications, provide insights into the behavior and handling of client sessions in terms of persistence.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

TBMQ employs Kafka consumer(s) that actively polls messages from the `tbmq.msg.all` topic, subsequently forwarding these messages to their intended recipients. 
However, the processing logic differs between persistent and non-persistent clients.

* For [non-persistent clients](/docs/{{docsPrefix}}mqtt-broker/architecture/#non-persistent-client), messages are directly published to the subscribed clients.

* [Persistent clients](/docs/{{docsPrefix}}mqtt-broker/architecture/#persistent-client) maintain a session state that persists beyond individual connections, allowing them to receive messages even when they were offline. 
This persistence enables TBMQ to ensure message delivery to the client once it reconnects. Consequently, a distinct approach is employed for message processing intended for such clients.
However, **please note**, that if the subscribing client is both persistent and subscribed with a Quality of Service (QoS) level of _0_ (_AT_MOST_ONCE_), 
all the messages associated with that subscription will be delivered to the client without any supplementary steps. 
The same holds true for a persistent subscriber with a QoS level higher than 0, as long as the publisher is transmitting messages with a QoS level of 0. 
This behavior is implemented as a result of QoS level downgrading.

By leveraging Kafka as intermediary message storage and employing different processing strategies based on client characteristics, 
TBMQ optimizes message delivery and ensures reliable communication in both persistent and non-persistent client scenarios.

## Device client

Clients of the **DEVICE** type can exhibit either persistent or non-persistent behavior, depending on the settings specified in the _CONNECT_ packet, 
as discussed in the [Client persistence](#client-persistence) section. 
In the case of persistent DEVICE clients available, related messages are directed to an additional Kafka topic known as `tbmq.msg.persisted`.

To facilitate the delivery of messages to both online and offline clients, dedicated Kafka consumer(s) diligently polls messages from the `tbmq.msg.persisted` topic. 
These messages are then processed and persisted in a **Redis** database before being dispatched to the subscribed online clients. 
This approach ensures that both online and offline clients can receive all messages, guaranteeing consistent message delivery across different client states.

When offline clients reconnect to the broker, they receive the persisted messages that were stored in Redis during their offline period. 
The number of messages received by an offline client upon reconnection can be controlled by modifying the 
`MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT` environment variable. 
This enables fine-tuning of the message retrieval behavior for offline clients, allowing for customized handling of the number of messages they receive upon reconnection.

## Application client

{% capture app_client_persistence_warn %}
**APPLICATION clients are expected to use persistent sessions.**
{% endcapture %}
{% include templates/warn-banner.md content=app_client_persistence_warn %}

While TBMQ is designed with the assumption that APPLICATION clients require persistence, this behavior is not strictly enforced.
If a client is authenticated as an APPLICATION type but initiates a non-persistent session, messages will still be delivered to the client; 
however, no additional persistence mechanisms will be applied. This means messages may be lost if the client disconnects or becomes unavailable during delivery.
To alert about the implications of non-persistent APPLICATION clients, a warning message is displayed prominently on the client session details page.

{% include images-gallery.html imageCollection="mqtt-client-type" %}

Upon polling messages from the `tbmq.msg.all` Kafka topic, TBMQ forwards messages to a dedicated Kafka topic for each persistent APPLICATION client.
These per-client topics are automatically created only when the client is both authenticated as an APPLICATION type and uses a persistent session.
The naming convention for this topic follows the format:

```
tbmq.msg.app.$CLIENT_ID
```
where **$CLIENT_ID** represents the unique client ID associated with the connecting client.

**Important notice:** if the client ID contains characters other than alphanumeric characters, 
a hash value derived from the client ID will be used for the construction of the topic. 
This ensures compatibility and adherence to topic naming conventions, as some special characters may not be allowed or supported in topic names. 
By generating a hash from the client ID, any incompatible or prohibited characters are effectively handled, ensuring proper topic construction and functionality.

```
tbmq.msg.app.$CLIENT_ID_HASH
```

The behavior described above, where a hash is used for topic construction when the client ID contains special characters, 
is controlled by the `TB_APP_PERSISTED_MSG_CLIENT_ID_VALIDATION` environment variable. 
By default, this variable is enabled, meaning that the validation process is active, ensuring proper topic creation. 
However, if you choose to disable this validation by setting the variable to _false_, 
the system will no longer create Kafka topics for clients with special characters in their client ID, resulting in a failure to create the corresponding topics. 
It's important to consider this when configuring your environment and handling client IDs with special characters.

To ensure efficient processing and optimal performance, a distinct Kafka consumer continuously polls messages from the aforementioned topic. 
This consumer is responsible for delivering the messages to the corresponding APPLICATION client. 
By processing each APPLICATION client in a separate thread, this approach enables enhanced performance and streamlined message delivery.

## Summary

> The following table summarizes the key differences between DEVICE and APPLICATION clients in TBMQ, highlighting their roles, persistence behavior, message routing strategies, and typical use cases.

| Feature / Behavior                             | **DEVICE Client**                                                                      | **APPLICATION Client**                              |
|------------------------------------------------|----------------------------------------------------------------------------------------|-----------------------------------------------------|
| **Typical Role**                               | Primarily publishes data; subscribe with moderate traffic (e.g., sensor or IoT device) | Data consumer (e.g., analytics system, rule engine) |
| **Persistence Support**                        | Persistent or non-persistent                                                           | Expected to be persistent                           |
| **Default Type (unauthenticated clients)**     | Yes                                                                                    | No                                                  |
| **Message Storage (non-persistent clients)**   | No persistence                                                                         | No persistence                                      |
| **Message Storage (persistent clients)**       | Redis                                                                                  | Dedicated Kafka topic                               |
| **Message Delivery While Offline**             | Yes (if persistent) via Redis                                                          | Yes (if persistent) via Kafka                       |
| **Common Use Cases**                           | IoT sensors, telemetry publishers                                                      | Analytics systems, real-time data processors        |
