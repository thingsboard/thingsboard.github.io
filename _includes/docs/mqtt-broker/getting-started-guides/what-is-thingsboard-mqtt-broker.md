
**TBMQ** represents an open-source MQTT message broker. It has the capacity to handle more than **4M** concurrent client connections, 
supporting a minimum of [3M messages per second throughput](/docs/mqtt-broker/reference/3m-throughput-single-node-performance-test/) per single-node deployment 
with low latency delivery. 
In the cluster mode, its capabilities are further enhanced, 
enabling it to support more than [100M concurrently connected clients](/docs/mqtt-broker/reference/100m-connections-performance-test/).

At ThingsBoard, we’ve gained a lot of experience in building scalable IoT applications, which has helped us identify three main scenarios for MQTT-based solutions.

* In the first scenario, numerous devices generate a large volume of messages that are consumed by specific applications, resulting in a **fan-in** pattern. 
Normally, a few applications are set up to handle these lots of incoming data. It must be ensured that they do not miss any single message.

* The second scenario involves numerous devices subscribing to specific updates or notifications that must be delivered. 
This leads to a few incoming requests that cause a high volume of outgoing data. This case is known as a **fan-out (broadcast)** pattern.

* The third scenario, **point-to-point (P2P)** communication, is a targeted messaging pattern, primarily used for one-to-one communication. 
Ideal for use cases such as private messaging or command-based interactions where messages are routed between a single publisher and a specific subscriber through uniquely defined topics.

Acknowledging these scenarios, we intentionally designed TBMQ to be exceptionally well-suited for all three.

Implemented in Java, this cutting-edge solution is developed utilizing prominent open-source technologies such as Kafka, 
which ensures low-latency message delivery, data durability, and horizontal scalability of the platform.

Commencing in 2018, an active and continuous development process was initiated, leading to the integration of the broker into commercial applications as of 2021. 
Following its successful deployment in production environments, it was determined in early 2023 that a public version of the broker should be made available.

## TBMQ Features

* All MQTT v3.x features
* All MQTT v5.0 features
* Multi-node cluster support
* X.509 certificate chain authentication support
* Access control (ACL) based on client ID, username, or X.509 certificate chain
* REST query support for clients’ sessions and subscriptions
* Rate limits of message processing
* Cluster and clients' metrics monitoring
* Unauthorized clients
* MQTT WebSocket client
* Kafka topics and consumer groups monitoring

## Architecture

TBMQ is designed to be:

* **scalable**: the platform is horizontally scalable and built using the leading open-source technologies;
* **fault-tolerant**: there is no single point of failure, and every node in the cluster is identical, ensuring high availability and fault tolerance;
* **robust and efficient**: can manage millions of clients and process millions of messages per second;
* **durable**: the broker ensures data durability, preventing data loss.

See [**TBMQ Architecture**](/docs/mqtt-broker/architecture) for more details.

## Ready to get started?

<p><a href="/docs/mqtt-broker/getting-started/" class="button">Hello World Application</a></p>
