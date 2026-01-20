* TOC
{:toc}

## Getting Started

{% if docsPrefix == null %}

### What is TBMQ Community Edition (CE)?

TBMQ is a high-performance MQTT broker developed by ThingsBoard. 
It enables efficient, reliable, and scalable communication between MQTT clients and IoT applications. 
TBMQ supports **MQTT 3.x** and **MQTT 5.0**, ensuring compatibility with a wide range of devices and industry use cases.

The broker is available in two editions: **Community Edition (CE)** and **Professional Edition (PE)**.

The **Community Edition** is a **free and open-source** version, ideal for developers and teams who want to explore, prototype, and test MQTT-based solutions without licensing costs. 
It provides a robust MQTT broker that can be deployed locally, on-premises, or in the cloud.
CE delivers all the essential features for reliable messaging, scalability, and monitoring — making it a perfect starting point for both learning and production-scale use cases.

If this is your first experience with TBMQ, we recommend reviewing the [What is TBMQ](/docs/{{docsPrefix}}mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/) and [Getting Started Guide](/docs/{{docsPrefix}}mqtt-broker/getting-started/) to learn more about its architecture, setup, and key capabilities.

{% endif %}

{% if docsPrefix == "pe/" %}

### What is TBMQ Professional Edition (PE)?

TBMQ is a high-performance MQTT broker developed by ThingsBoard. 
It enables efficient, reliable, and scalable communication between MQTT clients and IoT applications. 
TBMQ supports **MQTT 3.x** and **MQTT 5.0**, ensuring compatibility with a wide range of devices and industry use cases.

The broker is available in two editions: **Community Edition (CE)** and **Professional Edition (PE)**.

The **Professional Edition** is the **enterprise-grade** version of TBMQ, designed for **commercial IoT deployments** and large-scale production environments. 
It includes all the capabilities of the Community Edition, plus advanced features such as:

* **White-label branding** and UI customization
* **Advanced security and access control**
* **Enhanced monitoring, analytics, and reporting**
* **Professional support and maintenance**

PE is built for organizations that require high throughput, operational reliability, and premium management capabilities to run mission-critical IoT infrastructures.

If this is your first experience with TBMQ, we recommend reviewing the [What is TBMQ](/docs/{{docsPrefix}}mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/) and [Getting Started Guide](/docs/{{docsPrefix}}mqtt-broker/getting-started/) to understand its features and deployment options in detail.

{% endif %}

### How do I get started?

We recommend [installing](/docs/{{docsPrefix}}mqtt-broker/install/installation-options/) TBMQ locally on your laptop or PC using **Docker** and following the [Getting Started Guide](/docs/{{docsPrefix}}mqtt-broker/getting-started/).
The guide walks you through installation, configuration, and initial testing, helping you establish your first MQTT connections quickly and reliably.

### How do I install TBMQ?

You can install TBMQ locally or in the cloud using **Docker**, **Kubernetes scripts**, or **Helm**.
Detailed step-by-step guides are available in the [Installation Guide](/docs/{{docsPrefix}}mqtt-broker/install/installation-options/), including configuration of Kafka, Redis, and PostgreSQL dependencies.

### How can I start TBMQ using Docker or Helm?

To start TBMQ with **Docker**, run the provided Docker Compose file, which launches all required services (Kafka, Redis, PostgreSQL, and the MQTT broker) in a single command.
For **Kubernetes**, use the official Helm chart to deploy TBMQ as a scalable, fault-tolerant cluster. The Helm chart includes configurable parameters for persistence, resource limits, and monitoring.
Both methods provide a quick way to get TBMQ running in minutes, whether for testing or production.

### What are the system requirements for TBMQ?

TBMQ can run on modest hardware for testing or small-scale evaluation. The **minimum requirements** to start TBMQ are:

* **CPU:** 1 core
* **Memory:** 2 GB RAM

However, for stable performance and smoother operation in typical environments, the **recommended configuration** is:

* **CPU:** 4 cores
* **Memory:** 8 GB RAM
* **Storage:** 50 GB of free disk space
* **Operating System:** Linux (x86-64 architecture)

For clustered or production environments, hardware needs depend on the expected number of clients and message throughput. 
High-volume setups should allocate dedicated nodes for **Kafka**, **Redis**, and **PostgreSQL** to ensure optimal scalability and reliability.

### How can I upgrade TBMQ to a newer version?

Upgrading TBMQ is straightforward. [The Upgrade Guide](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
provides version-specific instructions and notes about compatibility changes or configuration updates introduced in each release.


## Configuration & Deployment

### How do I configure TBMQ for production use?

For production environments, TBMQ should be configured for performance, security, and fault tolerance.
It is recommended to:

* Enable **SSL/TLS** encryption for MQTT and WebSocket connections.
* Configure **authentication providers** for secure client validation.
* Configure an appropriate number of **Kafka partitions** for each topic, tune producer and consumer parameters, and adjust **Redis stateful connection** settings to achieve optimal throughput.
* Tune JVM memory and thread pool settings according to system resources.

### Can I deploy TBMQ in Kubernetes?

Yes. TBMQ fully supports **Kubernetes deployments** through the official **Helm chart** or k8s manifests.
This approach provides easy scaling, automatic recovery, and rolling updates.
You can configure node roles, persistence volumes, and monitoring integrations directly through Helm values, making it suitable for cloud or hybrid environments.

### How do I set up clustering in TBMQ?

TBMQ supports **horizontal scaling** through clustering. Each node in the cluster handles a portion of MQTT clients and message flow, ensuring reliability and load balancing.
Cluster coordination is achieved using **Kafka** for message routing.
To enable clustering, deploy multiple TBMQ instances connected to the same Kafka, Redis, and PostgreSQL services, and configure a unique broker ID (`TB_SERVICE_ID`) in the environment variables per node.

### What ports does TBMQ use?

By default, TBMQ listens on the following ports:

* **1883** – MQTT (plain TCP)
* **8883** – MQTT over SSL/TLS
* **8084** – MQTT over WebSocket
* **8085** – MQTT over Secure WebSocket (WSS)
* **8083** - HTTP Web UI access

These ports can be modified in the TBMQ configuration file or via environment variables before startup.
Make sure your firewall or Kubernetes ingress rules allow access to the selected ports.

### How can I enable TLS/SSL for secure connections?

You can enable SSL/TLS by providing a valid **server certificate** and **private key** in the TBMQ configuration.
TBMQ supports both server-side encryption and **client certificate authentication (X.509)** for stronger security.
Certificates can be issued by a trusted CA or generated internally for testing.
Once configured, restart the broker to apply the changes.

### How can I configure authentication providers in TBMQ?

TBMQ uses a **pluggable authentication model**, allowing you to define how clients are authenticated.
You can choose between:

* **Basic authentication** (client ID, username, and password)
* **SSL-based authentication** (X.509 certificate chain)
* **JWT authentication** (JSON Web Tokens)
* **Enhanced authentication** (MQTT 5.0)

Authentication rules are defined in the database and evaluated during each connection attempt.


## Connectivity

### Which MQTT protocol versions are supported?

TBMQ fully supports **MQTT 3.1.1** and **MQTT 5.0**, ensuring compatibility with all major MQTT clients and libraries.
Support for MQTT 5.0 introduces advanced features such as **shared subscriptions**, **user properties**, **topic aliases**, **enhanced authentication**, and **reason codes**, giving developers greater flexibility and control over client interactions.

### Does TBMQ support MQTT over WebSocket?

Yes. TBMQ supports **MQTT over WebSocket** and **Secure WebSocket (WSS)**, allowing browser-based applications and web dashboards to publish and subscribe to topics in real time.
You can enable the WebSocket endpoints by default on:

* **8084** – MQTT over WebSocket
* **8085** – MQTT over Secure WebSocket (WSS)

WebSocket support makes it easy to integrate MQTT communication into modern web applications and IoT portals.

### How can I configure Keep Alive and Clean Start options?

TBMQ supports **Keep Alive** and **Clean Start** according to the MQTT specification.

* **Keep Alive** defines the maximum allowed idle time between messages from the client. If no packets are sent within this interval, the broker considers the connection lost.
* **Clean Start** (MQTT 5.0) or **Clean Session** (MQTT 3.1.1) determines whether the broker should maintain the client’s session state after disconnect.

These options can be configured on the client side. TBMQ automatically handles session persistence and message queuing based on the chosen settings, ensuring reliable reconnect behavior.


## Usage and Capabilities

### What can I do with TBMQ?

TBMQ enables seamless communication between MQTT clients, ensuring secure and efficient message exchange.
It supports advanced MQTT 5.0 features such as **shared subscriptions**, **enhanced authentication**, **topic aliasing**, and **flow control**, providing flexibility for IoT applications of any scale.
TBMQ is built for performance and scalability — whether you’re running a single instance for testing or a clustered setup serving thousands of clients.

### Where can I host TBMQ?

You can host TBMQ in **cloud environments**, **on-premises setups**, or **locally** on your laptop or PC.
For the fastest setup, we recommend using the [Docker installation guide](/docs/{{docsPrefix}}mqtt-broker/install/docker/).
If you plan to deploy TBMQ for production or cluster environments, refer to the [Cluster Setup Guide](/docs/{{docsPrefix}}mqtt-broker/install/cluster/docker-compose-setup/) for step-by-step instructions on configuring multi-node deployments using Docker Compose.

### Can I replace the default TBMQ logo in the menu?

{% if docsPrefix == null %}

The **Community Edition** of TBMQ does not include a built-in white-labeling feature. However, it is technically possible to replace the default logo by modifying the source code and rebuilding the platform.
This approach requires **development experience** and **familiarity with the TBMQ front-end codebase**.

If you need an easier and fully supported way to customize the interface, consider upgrading to the **Professional Edition**.
It allows you to upload your own **logo** and **favicon**, customize **login** and **system pages**, and adjust **colors and branding palettes** — all directly from the web interface, without any code changes.

{% endif %}

{% if docsPrefix == "pe/" %}

Yes. In the **Professional Edition**, all branding and visual identity settings can be configured directly from the **White Label** page in the user interface — no code changes required.
You can fully adapt the platform to your company’s look and feel with just a few clicks:

* **Replace** the default TBMQ logo and favicon with your own corporate visuals.
* **Customize** login, dashboard, and system pages to greet users with your brand from the first interaction.
* **Adjust** color palettes, accent tones, logo size, and styling options (including CSS tweaks) to match your identity.
* **Preview** all changes live before publishing them.
* **Configure custom domains** — map your own URL (for example, `portal.company.com`) so users access TBMQ through your branded domain.

These tools make it easy to deliver a fully branded experience that aligns with your organization’s visual standards.

{% endif %}


## Security and Reliability

### What about security?

TBMQ ensures secure message exchange by supporting **MQTT over SSL/TLS encryption**, preventing unauthorized access and data tampering.
It allows creating custom **authentication providers** for validating client credentials, and supports **enhanced authentication (MQTT 5.0)** for more flexible security models.
You can integrate TBMQ with your existing certificate authority or use username/password-based authentication.
These features provide a strong foundation for building secure and reliable IoT communication networks.

### What authentication methods does TBMQ support?

TBMQ supports multiple authentication mechanisms to ensure secure and flexible client validation.
The available methods include:

* **Basic authentication** – verifies client ID, username, and password credentials stored in the database.
* **X.509 certificate chain authentication** – validates clients using SSL/TLS certificates.
* **Enhanced authentication (MQTT 5.0)** – supports SCRAM-based authentication flows defined by the MQTT 5.0 specification.
* **JWT authentication** – enables token-based authentication and integration with external identity systems via the TBMQ authentication API.

These options allow you to choose the best approach depending on your deployment and security requirements.

### How can I enable client certificate authentication (SSL)?

TBMQ supports **SSL/TLS encryption** and **client certificate authentication** (X.509 certificate chain).
To enable this feature:

1. Provide a valid **server certificate** and **private key** in the configuration file.
2. Enable the **secure MQTT port** (default: `8883`).
3. Configure TBMQ to verify client certificates for mutual authentication using X.509 Certificate Chain credentials.

This ensures that both the client and server validate each other’s identity before establishing a connection, adding a strong layer of security for IoT and enterprise deployments.

### Does TBMQ support JWT authentication?

Yes. TBMQ supports **JWT (JSON Web Token)**–based authentication through authentication providers.
This approach enables clients to connect securely using signed tokens instead of static credentials.
JWT support is ideal for dynamic or short-lived sessions where credentials are issued by an external identity service.

### How are unauthorized client connections handled?

TBMQ automatically detects and logs unauthorized connection attempts.
When a client fails authentication, the broker records details such as **client ID**, **IP address**, **username**, and **TLS status**.
This data can be reviewed in the **Unauthorized Clients** dashboard or queried via API for further analysis.

### How can I monitor and block unauthorized clients?

TBMQ provides tools to monitor unauthorized clients directly through the web interface or REST API.
Administrators can filter, inspect, and delete recorded entries.
You can also apply blocking rules to reject future connection attempts from known malicious IP addresses or repeated offenders.
This feature helps maintain system integrity and visibility into potential security risks.


## Subscriptions & Messaging

### How does TBMQ manage subscriptions?

TBMQ manages client subscriptions using a **Trie-based data structure**, which provides fast and memory-efficient topic lookups.
All client subscriptions are consumed from a Kafka topic and stored in memory within the Trie, where each node represents a level in the topic filter hierarchy.

The Trie structure enables **prefix-based matching**, allowing TBMQ to quickly identify all clients subscribed to topics that match a published message. 
When a **PUBLISH** message is read from Kafka, TBMQ uses the Trie to determine the set of clients with relevant subscriptions and forwards the message to each of them.

This approach ensures **high-performance message routing**, as the lookup time depends on the length of the topic rather than the total number of subscriptions. 
It scales efficiently even in large environments with **millions of active subscriptions**.
While this method slightly increases memory usage due to in-memory storage of the Trie, it provides predictable and low-latency message delivery.

### Does TBMQ support shared subscriptions?

Yes. TBMQ supports **shared subscriptions** as defined by the MQTT 5.0 specification.
Shared subscriptions allow multiple clients to consume messages from the same topic group in a **load-balanced** manner.
This feature is especially useful for scaling message processing horizontally — for example, distributing telemetry data processing among several backend services.

### How are retained messages handled in TBMQ?

TBMQ supports **retained messages**, which ensure that newly connected subscribers immediately receive the most recent message published on a topic.
When a client publishes a retained message, TBMQ stores it and delivers it automatically to any future subscribers of that topic.
If a retained message with an empty payload is received, TBMQ clears the retained message for that topic, following the MQTT specification.

### What is the difference between persistent and non-persistent sessions?

A **persistent session** stores the client’s subscriptions and undelivered QoS 1/2 messages, allowing message delivery to resume after reconnecting.
A **non-persistent session** (Clean Start = true) is temporary — all subscriptions and queued messages are discarded when the client disconnects.
TBMQ fully supports both modes and automatically handles session recovery for persistent clients after reconnecting.

### How does TBMQ handle Last Will and Testament (LWT)?

TBMQ follows the MQTT standard for **Last Will and Testament (LWT)** messages.
When a client connects, it can specify an LWT message that the broker will publish automatically if the client disconnects unexpectedly.
This feature helps notify other clients or monitoring systems about abnormal disconnections, improving visibility and reliability in IoT systems.

### How can I monitor the number of messages published and received?

TBMQ provides detailed metrics on message throughput, including the number of **published**, **received**, and **dropped** messages.
These statistics are available through the built-in **monitoring dashboard**.
Administrators can use these insights to track broker performance and optimize system configuration.


## Performance and Scalability

### How many clients and messages per second can TBMQ support?

TBMQ offers **horizontal scalability**, meaning it can grow seamlessly with your workload.
Each broker node in a cluster handles a portion of the load, ensuring balanced message processing and uninterrupted performance.
Actual throughput depends on hardware, configuration, and message characteristics (size, QoS level, persistence).
Optimized setups can handle **millions of simultaneous client connections** and **millions of messages per second**.
For detailed metrics and benchmarks, visit the [Performance Test Page](/docs/{{docsPrefix}}mqtt-broker/reference/100m-connections-performance-test/).

### How can I monitor TBMQ performance?

TBMQ exposes detailed performance metrics through its **monitoring dashboard** and **Prometheus endpoint**.
You can track key indicators such as:

* Number of connected clients
* Message publish and receive rates
* Queue sizes and processing latency
* Redis and Kafka performance

These metrics can be visualized in **Grafana** or other observability platforms to gain real-time insights into system health and throughput trends.

### How does TBMQ handle backpressure when clients are slow?

TBMQ implements an internal **backpressure management mechanism** to maintain stable performance when clients are unable to consume messages quickly.
When a client’s network channel becomes non-writable, TBMQ temporarily pauses message delivery for that client.
Once the channel becomes writable again, queued messages are delivered in the correct order.
This design prevents slow consumers from impacting other clients, ensuring consistent throughput across the cluster.


## Data Storage and Persistence

### Where does TBMQ store data?

TBMQ integrates with [Kafka](https://kafka.apache.org/), [Redis](https://redis.io/), and [PostgreSQL](https://www.postgresql.org/) to ensure reliable, high-performance data storage:

* **Kafka** – handles unprocessed PUBLISH messages, persistent messages for Application clients, and stores client sessions and subscriptions.
* **Redis** – stores Device persistent messages for fast access and recovery.
* **PostgreSQL** – stores metadata such as user credentials, MQTT client credentials, system statistics, etc.

This hybrid architecture ensures data durability, high availability, and efficient delivery across distributed systems.


## Licensing and Support

### What license type does TBMQ use?

{% if docsPrefix == null %}

TBMQ CE is distributed under the **Apache 2.0 License**, allowing both personal and commercial usage.
You can freely deploy, modify, and distribute it in any environment without additional licensing costs.

{% endif %}
{% if docsPrefix == "pe/" %}

TBMQ PE is a commercially licensed version of TBMQ available under a subscription-based license.
It includes additional enterprise-grade features, support services, and maintenance.
Use of the PE version requires a valid license agreement with ThingsBoard, Inc.

{% endif %}

### How to get support?

You can access community-driven troubleshooting guides and documentation, or [contact us](/docs/{{docsPrefix}}mqtt-broker/help) directly for technical assistance.
Learn more about [services](/services/) we provide.
