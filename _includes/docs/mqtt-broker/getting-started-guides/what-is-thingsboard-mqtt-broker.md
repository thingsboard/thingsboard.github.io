
**TBMQ** represents an open-source MQTT message broker. It has the capacity to handle more than **4M** concurrent client connections, 
supporting a minimum of [3M messages per second throughput](/docs/mqtt-broker/reference/3m-throughput-single-node-performance-test/) per single cluster node 
with low latency delivery. 
In the cluster mode, its capabilities are further enhanced, 
enabling it to support more than [100M concurrently connected clients](/docs/mqtt-broker/reference/100m-connections-performance-test/).

Within the ThingsBoard company, our expertise and understanding of diverse IoT requirements and use cases have enabled us to discern
two primary scenarios in which our clients develop their solutions. 
The first scenario entails numerous devices generating a substantial volume of messages that are consumed by specific applications, 
resulting in a fan-in pattern. Conversely, the second scenario involves numerous devices subscribing to specific updates or notifications, 
leading to a few incoming requests that necessitate a high volume of outgoing data, known as a fan-out pattern. 
Acknowledging these scenarios, we purposefully designed TBMQ to be exceptionally well-suited for both.

Implemented in Java, this cutting-edge solution is developed utilizing prominent open-source technologies such as Kafka, 
which ensures low-latency message delivery, data durability, and horizontal scalability of the platform.

Commencing in 2018, an active and continuous development process was initiated, leading to the integration of the broker into commercial applications as of 2021. 
Following its successful deployment in production environments, it was determined in early 2023 that a public version of the broker should be made available.

#### TBMQ Features

- Clean & persistent sessions
- Quality of Service (QoS) 0
- QoS 1
- QoS 2
- Retained messages
- Last Will and Testament
- Keep Alive & Client Takeover
- Transmission Control Protocol (TCP) / Secure Sockets Layer (SSL) connection support
- Username and password authentication support
- X.509 certificate chain authentication support
- Wildcard subscriptions
- MQTT Ordered Topic guarantees for QoS 1 and QoS 2
- Session & message expiry intervals
- Multi-server node cluster (Cluster)
- Access control (ACL) based on client ID, username or X.509 certificate chain
- REST query support for clients' status and subscriptions
- Rate limits of incoming messages per client
- MQTT 5 [*](https://github.com/thingsboard/tbmq#tbmq)


#### Architecture

TBMQ is designed to be:

* **scalable**: the platform is horizontally scalable and built using the leading open-source technologies;
* **fault-tolerant**: there is no single point of failure, and every node in the cluster is identical, ensuring high availability and fault tolerance;
* **robust and efficient**: depending on the use case, a single server node can handle millions of clients and hundreds of thousands of messages per second, making it highly efficient;
* **durable**: the broker ensures data durability, preventing data loss.

See [**TBMQ Architecture**](/docs/mqtt-broker/architecture) for more details.

#### Ready to get started?

<p><a href="/docs/mqtt-broker/getting-started/" class="button">Hello World Application</a></p>
