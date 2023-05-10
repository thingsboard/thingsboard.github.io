
**ThingsBoard MQTT Broker** is an open-source MQTT message broker that is specifically designed to operate quickly and reliably in common scenarios.
It is developed using Java and uses Kafka as an internal tool for persisting and processing messages.

#### ThingsBoard MQTT Broker Features

- Clean & persistent sessions
- Quality of Service (QoS) 0
- QoS 1
- QoS 2
- Retained messages
- Last Will and Testament
- Keep Alive & Client Takeover
- Transmission Control Protocol (TCP) / Secure Sockets Layer (SSL) connection support
- Username and password authentication support
- SSL certificate authentication support
- Wildcard subscriptions
- MQTT Ordered Topic guarantees for QoS 1 and QoS 2
- Session & message expiry intervals
- Multi-server node cluster (Cluster)
- Access control (ACL) based on client ID, username or SSL certificate
- REST query support for clients' status and subscriptions
- Rate limits of incoming messages per client
- MQTT 5 [*](https://github.com/thingsboard/thingsboard-mqtt-broker#thingsboard-mqtt-broker)


#### Architecture

ThingsBoard MQTT Broker is designed to be:

* **scalable**: the platform is horizontally scalable and built using the leading open-source technologies.
* **fault-tolerant**: there is no single point of failure, and every node in the cluster is identical, ensuring high availability and fault tolerance.
* **robust and efficient**: depending on the use case, a single server node can handle tens of thousands of clients and messages per second, making it highly efficient.
* **durable**: the broker ensures data durability, preventing data loss.

See [**ThingsBoard MQTT Broker Architecture**](/docs/mqtt-broker/architecture) for more details.
