
**TBMQ** represents an open-source MQTT message broker renowned for its remarkable capacity to handle a staggering number of connected MQTT clients, 
reaching up to **4M** clients, while proficiently processing a minimum of **200K messages per second** per node. 
In the cluster mode, its capabilities are further enhanced, enabling it to effortlessly support an impressive **100M** concurrently connected clients 
and handle **3M messages per second**. For more comprehensive insights and detailed information, kindly refer to the [performance tests page](/docs/mqtt-broker/reference/performance-tests/).

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
- SSL certificate authentication support
- Wildcard subscriptions
- MQTT Ordered Topic guarantees for QoS 1 and QoS 2
- Session & message expiry intervals
- Multi-server node cluster (Cluster)
- Access control (ACL) based on client ID, username or SSL certificate
- REST query support for clients' status and subscriptions
- Rate limits of incoming messages per client
- MQTT 5 [*](https://github.com/thingsboard/tbmq#tbmq)


#### Architecture

TBMQ is designed to be:

* **scalable**: the platform is horizontally scalable and built using the leading open-source technologies.
* **fault-tolerant**: there is no single point of failure, and every node in the cluster is identical, ensuring high availability and fault tolerance.
* **robust and efficient**: depending on the use case, a single server node can handle millions of clients and hundreds of thousands of messages per second, making it highly efficient.
* **durable**: the broker ensures data durability, preventing data loss.

See [**TBMQ Architecture**](/docs/mqtt-broker/architecture) for more details.
