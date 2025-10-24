{% include templates/mqtt-broker/pe-tbmq-explore-banner.md %}

**TBMQ {{tbmqSuffix}}** is an {{tbmqDefinition}} <a target="_blank" href="/products/mqtt-broker/">MQTT message broker</a> designed for massive scalability and high-performance message routing.
It efficiently handles **millions** of concurrent client connections and delivers [millions of messages per second](/docs/{{docsPrefix}}mqtt-broker/reference/3m-throughput-single-node-performance-test/)
with low latency in a single-node setup.
In cluster mode, TBMQ’s capabilities scale even further, enabling it to support [large-scale IoT deployments](/docs/{{docsPrefix}}mqtt-broker/reference/100m-connections-performance-test/) 
with exceptional reliability and throughput.

At ThingsBoard, we’ve accumulated extensive experience in building scalable IoT applications, which has allowed us to identify **three key patterns** commonly found in MQTT-based solutions.

* **Fan-in pattern:**
  In this scenario, a large number of devices generate high message volumes that are consumed by a smaller set of applications. 
  These applications must process all incoming data streams reliably and without message loss.

* **Fan-out (broadcast) pattern:**
  Here, numerous devices subscribe to specific updates or notifications that must be delivered efficiently. 
  A small number of incoming messages can result in a large number of outgoing updates, creating a high-output distribution flow.

* **Point-to-point (P2P) pattern:**
  This is a targeted one-to-one communication model, ideal for use cases like private messaging or command-response interactions. 
  Messages are exchanged directly between a single publisher and a specific subscriber through uniquely defined topics.

Recognizing these common patterns, we designed TBMQ to be exceptionally well-suited for all three.
Developed in **Java**, TBMQ leverages leading open-source technologies, including **Kafka**, to provide low-latency message delivery, data durability, and horizontal scalability across the platform.

## Full MQTT Specification Support

TBMQ is fully compliant with the MQTT protocol, delivering complete support for all core MQTT features across both single-node and clustered environments.
Whether you're building scalable IoT solutions or ensuring reliable communication for connected devices, TBMQ meets the latest standards for seamless interoperability.

### Supported MQTT versions

TBMQ supports the following MQTT versions:

* [MQTT 3.1](https://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html)
* [MQTT 3.1.1](https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/mqtt-v3.1.1.html)
* [MQTT 5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)

Our implementation ensures reliable performance and compatibility across diverse use cases.

## TBMQ Features

* All MQTT v3.x features
* All MQTT v5.0 features
* Multi-node cluster support
* X.509 certificate chain authentication support
* JWT authentication
* Access control (ACL) based on client ID, username, or X.509 certificate chain
* REST query support for clients’ sessions and subscriptions
* Rate limits of message processing
* Cluster and clients' metrics monitoring
* Unauthorized clients
* MQTT WebSocket client
* Integrations with external systems (HTTP, MQTT, Kafka)
* Kafka topics and consumer groups monitoring
* Proxy protocol
* Blocked clients
* MQTT channel backpressure support
{% if docsPrefix == "pe/" %}
* Single Sign-On (SSO)
* Role-Based Access Control (RBAC)
* White labeling
{% endif %}

## Architecture

TBMQ is designed to be:

* **scalable**: the platform is horizontally scalable and built using the leading open-source technologies;
* **fault-tolerant**: there is no single point of failure, and every node in the cluster is identical, ensuring high availability and fault tolerance;
* **robust and efficient**: can manage millions of clients and process millions of messages per second;
* **durable**: the broker ensures data durability, preventing data loss.

See [**TBMQ Architecture**](/docs/{{docsPrefix}}mqtt-broker/architecture) for more details.

## Ready to get started?

<p><a href="/docs/{{docsPrefix}}mqtt-broker/getting-started/" class="button">Hello World Application</a></p>
