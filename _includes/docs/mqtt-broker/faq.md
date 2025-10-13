* TOC
{:toc}

## Getting Started

### What is TBMQ?

TBMQ is an open-source MQTT broker developed by ThingsBoard. It is designed to facilitate efficient, reliable, and scalable communication between MQTT clients.
The broker supports MQTT versions **3.x** and **5.0**, ensuring compatibility with a wide range of IoT devices and applications.
TBMQ is available for both **personal** and **commercial** use and can be deployed in any environment — from local development setups to large-scale distributed clusters.
If you are new to TBMQ, we recommend reviewing the [What is TBMQ](/docs/{{docsPrefix}}mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/) and [Getting Started Guide](/docs/{{docsPrefix}}mqtt-broker/getting-started/) to understand its architecture and setup process in detail.

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
* Set proper **Kafka partitions** and **Redis connection pools** for high throughput.
* Tune JVM memory and thread pool settings according to system resources.

### Can I deploy TBMQ in Kubernetes?

Yes. TBMQ fully supports **Kubernetes deployments** through the official **Helm chart** or custom manifests.
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

* **Basic authentication** (client id, username, and password)
* **SSL-based authentication** (X.509 certificate chain)
* **JWT authentication** (JSON Web Tokens)
* **Enhanced authentication** (MQTT 5.0)

Authentication rules are defined in the database and evaluated during each connection attempt.


## Usage and Capabilities

### What can I do with TBMQ?

TBMQ enables seamless communication between MQTT clients, ensuring secure and efficient message exchange.
It supports advanced MQTT 5.0 features such as **shared subscriptions**, **enhanced authentication**, **topic aliasing**, and **flow control**, providing flexibility for IoT applications of any scale.
TBMQ is built for performance and scalability — whether you’re running a single instance for testing or a clustered setup serving thousands of clients.

### Where can I host TBMQ?

You can host TBMQ in **cloud environments**, **on-premises setups**, or **locally** on your laptop or PC.
For the fastest setup, we recommend using the [Docker installation guide](/docs/{{docsPrefix}}mqtt-broker/install/docker/).
If you plan to deploy TBMQ for production or cluster environments, refer to the [Cluster Setup Guide](/docs/{{docsPrefix}}mqtt-broker/install/cluster/docker-compose-setup/) for step-by-step instructions on configuring multi-node deployments using Docker Compose.


## Security and Reliability

### What about security?

TBMQ ensures secure message exchange by supporting **MQTT over SSL/TLS encryption**, preventing unauthorized access and data tampering.
It allows creating custom **authentication providers** for validating client credentials, and supports **enhanced authentication (MQTT 5.0)** for more flexible security models.
You can integrate TBMQ with your existing certificate authority or use username/password-based authentication.
These features provide a strong foundation for building secure and reliable IoT communication networks.


## Performance and Scalability

### How many clients and messages per second can TBMQ support?

TBMQ offers **horizontal scalability**, meaning it can grow seamlessly with your workload.
Each broker node in a cluster handles a portion of the load, ensuring balanced message processing and uninterrupted performance.
Actual throughput depends on hardware, configuration, and message characteristics (size, QoS level, persistence).
Optimized setups can handle **millions of simultaneous client connections** and **millions of messages per second**.
For detailed metrics and benchmarks, visit the [Performance Test Page](/docs/{{docsPrefix}}mqtt-broker/reference/100m-connections-performance-test/).


## Data Storage and Persistence

### Where does TBMQ store data?

TBMQ integrates with [Kafka](https://kafka.apache.org/), [Redis](https://redis.io/), and [PostgreSQL](https://www.postgresql.org/) to ensure reliable, high-performance data storage:

* **Kafka** – handles unprocessed PUBLISH messages, persistent messages for Application clients, and stores client sessions and subscriptions.
* **Redis** – stores Device persistent messages for fast access and recovery.
* **PostgreSQL** – stores metadata such as user credentials, MQTT client credentials, system statistics, etc.

This hybrid architecture ensures data durability, high availability, and efficient delivery across distributed systems.


## Licensing and Support

### What license type does TBMQ use?

TBMQ is distributed under the **Apache 2.0 License**, allowing both personal and commercial usage.
You can freely deploy, modify, and distribute it in any environment without additional licensing costs.

### How to get support?

You can access community-driven troubleshooting guides and documentation, or [contact us](/docs/{{docsPrefix}}mqtt-broker/help) directly for technical assistance.
Learn more about [services](/services/) we provide.
