
* TOC
{:toc}

This article describes the most common deployment architectures supported by ThingsBoard. 
All deployment scenarios contain certain pros and cons. 
Choosing the right architecture for your deployment depends on the infrastructure cost, performance and high-availability requirements.
We will start from the most simple scenarios and see how the minimalistic deployment can be upgraded to the most complex ones.

In the following sections, you can find total infrastructure cost calculations for ThingsBoard deployed using AWS.  
<b>Important notice:</b> All pricing below is approximate and provided as an example, based only on core infrastructure components costs (EKS, EC2, EBS, ALB). A production-grade environment typically requires other essential operational services - such as backup tools, monitoring and secrets management - all of which will further increase the total cost. Please consult your cloud provider to get accurate pricing per your use case.

## Key infrastructure characteristics

The best way to set up your ThingsBoard system depends on several factors, including your business needs, compliance rules, and expected growth. Our goal is to make sure the technical details are clear, making your architecture decision easier. 

### Deployment Options and Scaling
Your choice of deployment affects how easily you can install, manage, and grow your system.
<table>
    <thead>
        <tr>
            <th>Deployment Option</th>
            <th>Best For</th>
            <th>Key Benefits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Standalone server (Scenario A)</strong></td>
            <td>Proof-of-concept, development, or small-scale use-cases.</td>
            <td>Easiest to install.</td>
        </tr>
        <tr>
            <td><strong>Single-AZ Microservices (Scenario B)</strong></td>
            <td>Expected growth in devices and users, starting small.</td>
            <td>Provides a good balance of initial startup cost and future scalability.</td>
        </tr>
        <tr>
            <td><strong>Multi-AZ Microservices (Scenario C)</strong></td>
            <td>Strict requirements for uptime (high-availability) and reliability (fault-tolerance).</td>
            <td>Ensures the system remains available even if one data center (Availability Zone) fails.</td>
        </tr>
    </tbody>
</table>

**Scaling**:

* Standalone deployment scales vertically (adding more CPU/RAM to a single machine).

* Microservice deployment scales horizontally (adding more servers).

**Database and Performance Limits**:

It's important to plan for how much data you will save (persisted data points). The number of data points you can record per second is heavily influenced by your database choice.

* Using Only PostgreSQL: If you plan to use PostgreSQL for all data, the recommended limit is 20,000 data points recorded per second.

* Using a Hybrid Database (PostgreSQL and Cassandra): This approach uses Cassandra for telemetry (high-volume time-series data) and PostgreSQL for other critical data (like device attributes and latest time-series). With this setup, you can scale telemetry write operations up to 1 million data points per second. Important Note: The 20,000 per second limit still applies to attribute updates, as these are written to PostgreSQL.

## Deployment Scenarios

###  Monolith Deployment (Scenario A)

This deployment scenario is designed for straightforward, cost-efficient deployments supporting applications with low to moderate workloads and limited horizontal scaling needs. It adopts a monolithic server approach, consolidating core services onto a single compute instance to reduce infrastructure complexity and operational effort.

The deployment pattern includes two configuration options, each tailored to different database management preferences.

#### Configuration 1: Simple Standalone Server

For the simplest, most cost-efficient setup, all components, including the database and proxy, are hosted on a single server. This configuration is ideal for prototyping, development environments, or small-scale production workloads where ease of management and cost are the primary concerns.

##### Compute Resources:

- AWS EC2 Instance: `m7g.xlarge` (4 vCPUs, 16 GiB memory, ARM64 architecture)

**Application Workloads:**

The following services run directly on the host:
<table>
    <thead>
    <tr>
        <th>Service</th>
        <th>Descripton</th>
    </tr>
    </thead>
    <tr>
        <td>tb service</td>
        <td>Core ThingsBoard application</td>
    </tr>
    <tr>
        <td>HAProxy</td>
        <td>Lightweight proxy/load balancer for managing external traffic.</td>
    </tr>
    <tr>
        <td>PostgreSQL</td>
        <td>Relational database for all entity metadata and time-series telemetry data.</td>
    </tr>
</table>

#### Configuration 2: Standalone Server with External Database (AWS RDS)

This configuration separates the application stack from the database, leveraging PostgreSQL (RDS) for managed persistence. This offers improved resilience, automated backups, and patching for the database layer, while keeping the application compute architecture simple.

##### Architectural Modifications:

- Entity and telemetry data: PostgreSQL (RDS)

##### Additional Compute Resources:

- AWS RDS Instance: `db.t4g.medium` (2 vCPUs, 4 GiB memory, ARM64 architecture)

**Application Workloads:**

<table>
    <thead>
    <tr>
        <th>Service</th>
        <th>Instance</th>
        <th>Descripton</th>
    </tr>
    </thead>
    <tr>
        <td>tb service</td>
        <td>EC2</td>
        <td>Core ThingsBoard application</td>
    </tr>
    <tr>
        <td>HAProxy</td>
        <td>EC2</td>
        <td>Lightweight proxy/load balancer for managing external traffic.</td>
    </tr>
    <tr>
        <td>PostgreSQL</td>
        <td>RDS</td>
        <td>Relational database for all entity metadata and time-series telemetry data.</td>
    </tr>
</table>

#### Kafka Integration (Optional)

Neither Scenario A configuration includes Kafka by default.
However, Kafka can be added as a supplemental component to handle bursts of telemetry data without overloading the main application, ensuring more reliable and fault-tolerant message handling.

Kafka may run:
- Locally on the same instance.
- In container.

**Pros**:

- Lowest cost deployment option.
- Very simple to install, manage, and upgrade.
- Easy backup/restore management (Configuration 2).
- Minimal operational expertise required.

**Cons**:

- No horizontal scaling.
- Single point of failure on the EC2 instance.
- Local PostgreSQL requires manual maintenance and backups (Configuration 1).
- Not suitable for high-availability or high-throughput scenarios.

**Total cost of ownership (TCO) example**:

Assuming 10,000 LoRaWAN smart meter devices send messages to the cloud once per hour.

Single AWS EC2 "m5.large" instance costs ~41.66 USD per month (~500 USD annually in case of 1 year upfront payment).
500 GB Storage price is 50 USD per month.
Approximate infrastructure cost, respectively, is ~100 USD per month.

Single ThingsBoard PE perpetual license (below v3.0) cost is 2,999 USD (including with optional updates and basic support within initial year of usage). 1,199 USD is the respective pricing for the subsequent years of software updates + basic support.

TCO: ~350 USD per month. This price correlates with 0.035 USD per month per device, while the amount of devices is 10k. 
Adding [Premium support](/services/support/) package results in ~850 USD per month or 0.085 USD per month per device.  

**Comments and Considerations**:

Scenario A provides the simplest and most cost-efficient deployment path but is best suited for environments with predictable, moderate workloads. While the monolithic design reduces operational overhead, it also introduces clear limitations in scalability and fault tolerance. Configuration 2 offers improved database reliability through RDS but still retains a single-node application footprint.

This scenario is ideal for early-stage deployments but may require re-architecture as system demands increase.

### Single-AZ microservices deployment (Scenario B)

This reference architecture targets horizontally scalable deployments for applications anticipating future growth beyond current operational loads. The architecture leverages AWS managed services - including Amazon Elastic Kubernetes Service (EKS), Elastic Load Balancing (ELB), and Amazon Relational Database Service (RDS) - to minimize operational overhead associated with infrastructure provisioning, patch management, and backup orchestration.

The deployment model encompasses two distinct configurations optimized for varying data ingestion throughput requirements.

#### Configuration 1: Low Telemetry Ingestion Profile

For workloads with moderate data ingestion rates, the architecture utilizes a PostgreSQL-backed persistence layer provisioned through Amazon RDS. This configuration consolidates both entity metadata and time-series telemetry data within a single relational datastore. Public access to the Thingsboard application inside the cluster provided by ELB.

##### Compute Resources:

- EKS cluster provisioned with a single worker node
- Instance type: `m7g.xlarge` (4 vCPUs, 16 GiB memory, ARM64 architecture)

**Application Workloads:**

The following containerized services are deployed to the compute node:
<table>
    <thead>
    <tr>
        <th>Service</th>
        <th>Replica count</th>
        <th>Descripton</th>
    </tr>
    </thead>
{% if docsPrefix == null %}
    <tr>
        <td>tb-node</td>
        <td>1</td>
        <td>Core ThingsBoard application server</td>
    </tr>
    <tr>
        <td>tb-js-executor</td>
        <td>3</td>
        <td>Distributed JavaScript execution runtime</td>
    </tr>
    <tr>
        <td>tb-web-ui</td>
        <td>1</td>
        <td>Static asset delivery service</td>
    </tr>
    <tr>
        <td>Kafka</td>
        <td>1</td>
        <td>Message broker and event streaming platform</td>
    </tr>
</table>
{% endif %}
{% if docsPrefix == "pe/" %}
    <tr>
        <td>tb-pe-node</td>
        <td>1</td>
        <td>Core ThingsBoard PE application server</td>
    </tr>
    <tr>
        <td>tb-pe-js-executor</td>
        <td>3</td>
        <td>Distributed JavaScript execution runtime</td>
    </tr>
    <tr>
        <td>tb-pe-web-ui</td>
        <td>1</td>
        <td>Static asset delivery service</td>
    </tr>
    <tr>
        <td>Kafka</td>
        <td>1</td>
        <td>Message broker and event streaming platform</td>
    </tr>
</table>
{% endif %}

##### Database Specification:

- Instance type: `db.t4g.medium` (2 vCPUs, 4 GiB memory, ARM64 architecture)
- Performance class: Burstable

A burstable instance is used because high CPU utilization is not expected for a SQL database. However, enabling **unlimited mode** is strongly recommended to prevent performance throttling during CPU credit depletion scenarios for burstable RDS instances. This configuration ensures consistent query performance during transient load spikes without exhausting the burst credit balance.

#### Configuration 2: High-Throughput Telemetry Ingestion Profile

When anticipating elevated telemetry write/read request volumes, the architecture transitions to a **hybrid database topology**. This pattern decouples entity metadata (PostgreSQL) from time-series telemetry data (Cassandra), enabling independent scaling of read-heavy and write-heavy workloads.

##### Architectural Modifications:

- Entity data: PostgreSQL (RDS) - unchanged from Configuration 1
- Telemetry data: Apache Cassandra cluster - newly provisioned

##### Additional Compute Resources:

Three additional EKS worker nodes are provisioned to host the distributed Cassandra cluster:

- Instance type: `m7g.large` (2 vCPUs, 8 GiB memory, ARM64 architecture)
- Node count: 3
- Deployment pattern: 1 Cassandra instance per node (ensuring fault tolerance and data replication)

**Retained Infrastructure:**

{% if docsPrefix == null %}
All application workloads (`tb-node`, `tb-js-executor`, `tb-web-ui`, `kafka`) and the original `m7g.xlarge` compute node remain unchanged from Configuration 1.
{% endif %}
{% if docsPrefix == "pe/" %}
All application workloads (`tb-pe-node`, `tb-pe-js-executor`, `tb-pe-web-ui`, `kafka`) and the original `m7g.xlarge` compute node remain unchanged from Configuration 1.
{% endif %}

**Pros:** 

- Easy to backup and maintain PostgreSQL database
- Production-ready deployment
- Ready to scale horizontally
- Self-healing cluster

**Cons:**

- Additional costs for managed Kubernetes and Database services
- Single point of failure (single availability zone)
- The Cassandra database needs to be maintained and backed up

### Cluster deployment with the Microservices architecture (Scenario C)

ThingsBoard supports Microservices architecture (MSA) to perform scalable deployments for millions of devices. See [platform architecture](/docs/{{docsPrefix}}reference/msa/) for more details, please. With MSA deployments, system administrator can flexibly tune number of transport, rule-engine, web-ui and JavaScript executor microservices to optimize the cluster according to the current load.

ThingsBoard uses [Kafka](https://kafka.apache.org/) as a main message queue and streaming solution, [Redis](https://redis.io/) as a distributed cache and [Cassandra](https://cassandra.apache.org/) as a highly available, scalable and fast NoSQL database. 
Note that Cassandra usage is optional and is recommended in case of high telemetry data rate (more then 20,000 data points per second)
In other cases PostgreSQL based deployment is sufficient.

**Pros**:

* Simple Kubernetes deployment.
* No SPOF.
* Highly available and system.
* No downtimes during minor version upgrades.

**Cons**:

* High TCO on small number of devices (<100 000 devices per ThingsBoard cluster).  

**Performance**:

Overall performance of the solution depends on the cluster hardware and heavily rely on the performance of the database used.
A cluster of virtual machines with 5 ThingsBoard servers and 5 Cassandra nodes can handle 1 million of devices;
See [key infrastructure characteristics](/docs/{{docsPrefix}}reference/iot-platform-deployment-scenarios/#key-infrastructure-characteristics) for more details.
  
**Total cost of ownership examples for Cluster deployment scenario**:

#### 1 Million Smart Meters TCO

**Example 1:** Assuming **1,000,000** LoRaWAN/NB-IoT **smart meter** devices sending messages to the cloud **once per hour**. 
Each message contains 3 data points that may need to be graphed/analyzed/fetched separately.
We consider the messages are being sent to ThingsBoard via HTTP or UDP Integration, which is typical for such case.

1,000,000 devices represent 280 messages per second load (1,000,000 devices/3600 sec), which causes 280 x 3 = 840 write requests to the database (data points) every second, or 72.6M requests per day.
Based on the chosen database type, above case results into approximately 1.2GB (Cassandra) or 4GB (PostgreSQL) of consumed disk space daily.

The following Kubernetes cluster is sufficient to support this use case:

- 2 x "r5.xlarge" instances (4vCPUs and 32 GB of RAM) to host 2 ThingsBoard Node containers. Approx. price is ~380 USD/month.
- 3 x "c5.large" instances (2vCPUs and 4 GB of RAM) to host 3 Zookeeper and ~9 JS Executors. Approx. price is ~120 USD/month.
- Amazon ElastiCache for Redis based on 2 x "cache.m5.large". Approx. price is ~200 USD/month. 
- Amazon Managed Streaming for Kafka based on 3 x "kafka.m5.large" and 1TB data storage. Estimate: 620 USD/month.
- Amazon RDS for PostgreSQL based on "db.m5.large" Multi-AZ deployment. Estimate: 220 USD/month.
- 1TB Multi-AZ deployment storage. The price is 230 USD/month. 

<object width="100%" data="/images/reference/deployment/smart-meter-cluster.svg"></object>

Hence, approximate infrastructure cost is ~1,770 USD/month or 0.00177 USD/month per device.

Two ThingsBoard PE perpetual licenses cost 5,998 USD (including optional updates and basic support within initial year of usage). 2,398 USD is the respective pricing for the subsequent years of software updates + basic support.
With more than 10k devices use cases we provide **Managed services** to support the production environment (not the basic Support subscriptions). The rate is 0.01 USD per device per month. 
 
TCO: ~12,270 USD per month or 0.01227 USD per month per device.

**If you would like to reproduce this case on your cluster setup, please follow this guide:**
[Smart Meters use case performance test](https://github.com/ashvayka/tb-pe-k8s-perf-tests/tree/scenario/1-million-smart-meters)

#### 1 Million Smart Trackers TCO

**Example 2:** Assuming 1,000,000 **smart tracker** devices sending readings to the cloud **once per minute**.
Each message contains 5 data points that may need to be graphed/analyzed/fetched separately. 

Typical message rate is 1,000,000 / 60 sec. = 16,667 messages per second.
This causes 16667 x 5 = 83,335 write requests to the database (data points) every second, or 7.2B requests per day.
This load can be reliably handled with Cassandra and results to 144GB daily. Since the data need to be replicated 3 times within Cassandra it results to 432GB of disk space daily.

The following Kubernetes cluster is sufficient to support this use case:

- 8 x "c5.large" instances (2vCPUs and 4 GB of RAM) to host 8 ThingsBoard MQTT Transport containers. Approx. price is ~320 USD/month.
- 15 x "c5.xlarge" instances (4vCPUs and 8 GB of RAM) to host 15 ThingsBoard Node containers. Approx. price is ~1095 USD/month.
- 15 x "c5.xlarge" instances (4vCPUs and 8 GB of RAM) to host 15 Cassandra containers. Approx. price is ~1095 USD/month.
- 3 x "c5.xlarge" instances (2vCPUs and 4 GB of RAM) to host 3 Zookeeper and ~30 JS Executors. Approx. price is ~240 USD/month.
- Amazon ElastiCache for Redis based on 2 x "cache.m5.large". Approx. price is ~200 USD/month. 
- Amazon Managed Streaming for Kafka based on 3 x "kafka.m5.large" and 1TB data storage. Estimate: 620 USD/month.
- Amazon RDS for PostgreSQL based on "db.m5.large" Multi-AZ deployment. Estimate: 220 USD/month. 
- 100TB of deployment storage. The price: 10,000 USD/month. 

<object width="100%" data="/images/reference/deployment/smart-tracker-cluster.svg"></object>

Thus approximate infrastructure cost is ~13,790 USD/month or 0.0138 USD/month per device.
15 ThingsBoard PE perpetual licenses (below v3.0) cost 44,985 USD (including optional updates and basic support within initial year of usage). 17,985 USD is the respective pricing for the subsequent years of software updates + basic support.
ThingsBoard **Managed services** to support the production environment: 0.01 USD per device per month. 

TCO: ~27,508 USD per month or 0.0275 USD per month per device.

**If you would like to reproduce this case on your cluster setup, please follow this guide:**
[Smart Trackers use case performance test](https://github.com/ashvayka/tb-pe-k8s-perf-tests/tree/scenario/1-million-smart-trackers)
