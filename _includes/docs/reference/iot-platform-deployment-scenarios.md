
* TOC
{:toc}

This article describes the most common deployment architectures supported by ThingsBoard.
All deployment scenarios contain certain pros and cons.
Choosing the right architecture for your deployment depends on the infrastructure cost, performance and high-availability requirements.

In the following sections, you can find total infrastructure cost calculations for ThingsBoard deployed using AWS.

<b>Important notice:</b> All pricing below is approximate and provided as an example, based only on core infrastructure components costs (computing, storage, load-balancing). A production-grade environment typically requires additional operational services, such as backup tools, monitoring and secrets management. All of these will further increase the total cost. Please consult your cloud provider to get accurate pricing per your use case.

## Key infrastructure characteristics

The best way to set up your ThingsBoard system depends on several factors, including your business needs, compliance rules, and expected growth. Our goal is to make sure the technical details are clear, making your architecture decision easier.

### Deployment options overview

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
            <td><strong>Standalone Monolith (Scenario A)</strong></td>
            <td>Proof-of-concept, development, or small-scale use-cases.</td>
            <td>Easiest to install.</td>
        </tr>
        <tr>
            <td><strong>Single-Node Cluster (Scenario B)</strong></td>
            <td>Expected growth in devices and users, starting small.</td>
            <td>Provides a good balance of initial startup cost and future scalability.</td>
        </tr>
        <tr>
            <td><strong>High Availability Microservices (Scenario C)</strong></td>
            <td>Strict requirements for uptime (high-availability) and reliability (fault-tolerance).</td>
            <td>Ensures the system remains available even if one data center (Availability Zone) fails.</td>
        </tr>
    </tbody>
</table>

**Scaling**:

* Standalone deployment scales vertically (adding more CPU/RAM to a single machine).

* Microservice deployment (MSA) scales horizontally (adding more servers).

### Database topology approach

It is important to plan both amount of data you expect to store (persisted telemetry) and amount of data will be queried (dashboard widgets, API responses). The volume of data your system can write and read with sustainable performance is significantly influenced by your database choice.

ThingsBoard supports two primary database topologies: SQL-only and Hybrid.

1. **SQL-only topology** uses PostgreSQL exclusively for storing all ThingsBoard data, including entities and telemetry.
  This approach simplifies architecture and maintenance, and best suited for environments with predictable data volume.
2. **Hybrid topology** uses Cassandra database for historical time-series (telemetry) data, while PostgreSQL handles entity and latest telemetry data. Deploying a dedicated NoSQL database enables exclusive features, such as per-item telemetry retention, and provides more predictable storage management, but comes with increased architectural complexity and maintenance overhead.
  This approach is best for environments with continuous telemetry and data volume growth, requiring optimized storage for historical time-series.

#### Choosing the right approach

There is no universal hard limit on the number of reads or writes a PostgreSQL-only topology can handle, nor is there a specific threshold where a Hybrid approach becomes mandatory. Performance relies heavily on use-case specifics, such as the number of devices, telemetry sending interval and volume, dashboard complexity, and the way telemetry is processed and stored.

However, we generally recommend considering the Hybrid topology if any of the following characteristics match your ThingsBoard environment:

- **Long retention periods (1 year or more) are required, and older data is frequently queried** (dashboards or API calls).
  Cassandra offers more predictable and efficient long-term storage, especially when the total dataset grows into hundreds of gigabytes.
- **Dashboards display complex widgets with multiple time-series on a single page**. That is especially relevant for dashboards with time windows spanning weeks, or using aggregations with large amount of data points and short grouping intervals.
  ThingsBoard’s telemetry storage model is significantly more optimized for Cassandra when reading older or wide-range timestamp data.
- **Different telemetry types require different retention periods.**
  PostgreSQL supports only global TTL; Cassandra allows per-key or per-row TTL, enabling flexible retention strategies.

Additionally, before opting for a Hybrid topology, keep in mind the architectural implications introduced by Cassandra:

- **Your engineering team must be prepared to operate two distinct databases simultaneously**, and possess (or develop) expertise in Cassandra’s architecture and operational model.
  Cassandra is a distributed database requiring specialized maintenance routines, which differ substantially from SQL systems. Its operational management requires unique processes and dedicated tools.
- **Expect increased architectural complexity and higher infrastructure costs.**
  While offering better efficiency for telemetry, Cassandra requires additional server resources and careful cluster management compared to a PostgreSQL-only deployment.

While it is crucial to set up a suitable database architecture during initial deployment to ensure the best performance with minimal infrastructure and maintenance costs - note that it is possible to [migrate from PostgreSQL-only topology to a hybrid one](https://github.com/thingsboard/database-migrator) in case required.

## Deployment scenarios

### Scenario A (Monolith)

This deployment scenario is designed for straightforward, cost-efficient deployments supporting applications with low to moderate workloads and limited horizontal scaling needs. It adopts a monolithic server approach, consolidating core services onto a single compute instance to reduce infrastructure complexity and operational effort.

The deployment pattern includes two configuration options, each tailored to different database management preferences.

#### Setup 1. Simple standalone server

For the simplest, most cost-efficient setup, all components, including the database and proxy, are hosted on a single server. This configuration is ideal for prototyping, development environments, or small-scale production workloads where ease of management and cost are the primary concerns.

<object width="80%" data="/images/reference/deployment/scenario-a-basic.png"></object>

You can further improve this architecture by applying optional addons, described below.

**Compute Resources:**

- AWS EC2 Instance: `m7g.xlarge` (4 vCPUs, 16 GiB memory, ARM64 architecture)

**Application Components:**

The following services run directly on the host:
<table>
    <thead>
    <tr>
        <th>Service</th>
        <th>Descripton</th>
    </tr>
    </thead>
    <tr>
        <td>ThingsBoard service</td>
        <td>Monolith ThingsBoard application</td>
    </tr>
    <tr>
        <td>Reverse Proxy</td>
        <td>Generic proxy/load balancer for managing external traffic</td>
    </tr>
    <tr>
        <td>PostgreSQL</td>
        <td>Relational database for all entity and time-series data</td>
    </tr>
</table>

**Pros:**

- Lowest cost deployment option;
- Very simple to install, manage, and upgrade;
- Minimal operational expertise required.

**Cons:**

- No horizontal scaling;
- Single point of failure on the EC2 instance;
- Local PostgreSQL requires manual maintenance and backups;
- Not suitable for high-availability or high-throughput scenarios.

**Infrastructure costs:**

- EC2: 1 × m7g.xlarge - $119.14/month
- Elastic IP: $3.60/month
- Storage: 50 GB system node volume - $5/month

*Estimated Total:* ~$129/month

##### (Optional) Kafka

Neither of Scenario A configuration includes Kafka by default.
However, Kafka can be added as a supplemental component to handle bursts of telemetry data without overloading the main application, ensuring more reliable message handling.

##### (Optional) AWS RDS as external DB

This configuration separates the application stack from the data storage, leveraging AWS RDS service for database management. This offers improved resilience, automated backups, and patching for the database layer, while keeping the application deployment simple.

<object width="80%" data="/images/reference/deployment/scenario-a-optional.png"></object>

**Architectural Modifications:**

- Entity and telemetry data: migrate from self-managed PostgreSQL to AWS-managed RDS instance.

**Additional Compute Resources:**

- Instance type: `db.t4g.medium` (2 vCPUs, 4 GiB memory, ARM64 architecture)
  - since ThingsBoard does not cause consistently high CPU utilization on the SQL database, low-cost burstable instances are suited.

#### Summary

Scenario A provides the simplest and most cost-efficient deployment path but is best suited for environments with predictable, moderate workloads. While the monolithic design reduces operational overhead, it also introduces clear limitations in scalability and fault tolerance. Setup 2 offers improved database reliability through RDS but still retains a single-node application simplicity.

This scenario is ideal for early-stage deployments but may require vertical scaling as system demands increase.

### Scenario B (Single-Node Cluster)

This reference targets horizontally scalable deployment. While ThingsBoard within this environment still runs as a single instance (monolith), the overall architecture is fundamentally different from [Scenario A](#scenario-a-monolith). By deploying into a Kubernetes cluster (EKS), this setup achieves true horizontal scalability and self-healing capabilities.

It is ideal for production environments anticipating future growth beyond initial operational loads. The architecture utilizes managed AWS services (including Amazon EKS, ELB, and RDS) to minimize operational overhead such as instance provisioning, patch management, and backup orchestration.

The deployment pattern includes two configuration options, each optimized for varying data ingestion throughput requirements.

#### Setup 1: General-Purpose Scalable Deployment

For workloads with moderate data ingestion rates, this setup utilizes Amazon RDS as entity and telemetry data storage. Public access to the Thingsboard application inside the cluster provided by ELB.

<object width="80%" data="/images/reference/deployment/scenario-b-sql.png"></object>

**Compute Resources:**

- EKS cluster provisioned with a single worker node
- Instance type: `m7g.xlarge` (4 vCPUs, 16 GiB memory, ARM64 architecture)

**Application Components:**

The following containerized services are deployed to the compute node:
<table>
    <thead>
    <tr>
        <th>Service</th>
        <th>Replica count</th>
        <th>Descripton</th>
    </tr>
    </thead>
    <tr>
        <td>tb-node</td>
        <td>1</td>
        <td>Monolith ThingsBoard application</td>
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
    <tr>
        <td>AWS RDS</td>
        <td>1</td>
        <td>AWS-managed relational database for all entity and time-series data</td>
    </tr>
</table>

**Database Specifications:**

- Instance type: `db.t4g.medium` (2 vCPUs, 4 GiB memory, ARM64 architecture)
  - since ThingsBoard does not cause consistently high CPU utilization on the SQL database, low-cost burstable instances are suited.

**Pros:**

- Easy to backup and maintain PostgreSQL database
- Production-ready deployment
- Ready to scale horizontally
- Self-healing cluster

**Cons:**

- Additional costs for managed Kubernetes and Database services
- Single point of failure (single availability zone)

**Infrastructure costs:**

- EC2: 1 × m7g.xlarge - $119.14/month
- Elastic IP: $3.60/month
- RDS: 1 × db.t4g.medium - $54/month
- Storage:
  - 20 GB system node volume - $2/month
  - 50 GB RDS storage - $6/month
- EKS Control Plane: $75/month
- ELB: $22/month

*Estimated Total:* ~$282/month

#### Setup 2: High-Capability Scalable Deployment

With increased telemetry write/read request rates, the architecture may be transitioned to a **hybrid database topology**. This approach separates entity data (PostgreSQL) from time-series data (Cassandra), enabling independent scaling of read- and write-heavy workloads.

<object width="80%" data="/images/reference/deployment/scenario-b-hybrid.png"></object>

**Architectural Modifications:**

- Entity data: AWS RDS - unchanged from Setup 1
- Telemetry data: migrate from AWS RDS to self-hosted Apache Cassandra cluster

**Additional Compute Resources:**

Three additional EKS worker nodes are provisioned to host the distributed Cassandra cluster:

- Instance type: `m7g.large` (2 vCPUs, 8 GiB memory, ARM64 architecture)
  - for maximum performance on read-intensive loads, it is recommended to use Intel- or AMD-based instance types (`m7i` or `m7a`)
- Node count: 3
- Deployment pattern: 1 Cassandra instance per node (ensuring fault tolerance and data replication)

**Pros:**

- Easy to backup and maintain PostgreSQL database;
- Cassandra provides enhanced read/write performance for telemetry data;
- Production-ready deployment;
- Ready to scale horizontally;
- Self-healing cluster.

**Cons:**

- Additional costs for managed Kubernetes and Database services;
- Single point of failure (single availability zone);
- Self-hosted Cassandra database needs to be maintained and backed up.

**Infrastructure costs:**

- EC2:
  - 1 × m7g.xlarge (ThingsBoard) - $119.14/month
  - 3 × m7g.large (Cassandra) - $178.70/month
- Elastic IP: $3.60/month
  - RDS: 1 × db.t4g.medium - $54/month
- Storage:
  - 4 × 20 GB system node volumes - $8/month
  - 1 x 50 GB RDS storage - $6/month
  - 3 × 50 GB Cassandra storage volumes - $12/month
- EKS Control Plane - $75/month
- ELB - $22/month

*Estimated Total:* ~$479/month

#### Summary

Scenario B offers a significant step up from the previous approach, establishing a production-ready, horizontally scalable environment. This architecture effectively minimizes operational overhead related to infrastructure management.

While this setup is still contained within a single Availability Zone, it provides a self-healing cluster capable of recovering from individual service or node issues.

This scenario is ideal for organizations anticipating future growth and requiring a robust foundation that can scale out effortlessly.

### Scenario C (High Availability)

This deployment option is designed for production instances requiring high availability and fault tolerance. Additionally, as a result of scaled amount of ThingsBoard and third-party services, it can handle higher operational loads and data ingestion rates with increased server capacity.

This scenario is a direct upgrade to [Scenario B](#scenario-b-single-node-cluster), featuring multiple replicas spanned across different Availability Zones in horizontal scaling manner. Like it's preceding scenario, the architecture leverages AWS managed services that provide similar perks of minimalized operational overhead of infrastructure provisioning, patch management, and backup orchestration. Similarly to [Scenario B](#scenario-b-single-node-cluster), there are two distinct configurations optimized for varying data ingestion requirements.

#### Setup 1: General-Purpose MSA Cluster

For workloads with moderate data ingestion rates, this setup utilizes Amazon RDS as entity and telemetry data storage. Public access to the Thingsboard application inside the cluster provided by ELB.

<object width="80%" data="/images/reference/deployment/scenario-c-sql.png"></object>

**Compute Resources:**

- EKS cluster provisioned within 3 Availability Zones
  - each of 3 worker nodes are deployed within corresponding Availability Zone
- Instance type: `m7g.xlarge` (4 vCPUs, 16 GiB memory, ARM64 architecture)

**Application Components:**

The following containerized services are deployed accross all compute nodes. Each service should utilize anti-affinity rules to ensure proper spreading accross Availability Zones:
<table>
    <thead>
    <tr>
        <th>Service</th>
        <th>Replica count</th>
        <th>Descripton</th>
    </tr>
    </thead>
    <tr>
        <td>tb-core</td>
        <td>3</td>
        <td>Core ThingsBoard application server</td>
    </tr>
    <tr>
        <td>tb-rule-engine</td>
        <td>3</td>
        <td>Rule Engine server</td>
    </tr>
    <tr>
        <td>tb-mqtt-transport</td>
        <td>3</td>
        <td>MQTT transport API server</td>
    </tr>
    <tr>
        <td>tb-js-executor</td>
        <td>9</td>
        <td>Distributed JavaScript execution runtime</td>
    </tr>
    <tr>
        <td>tb-web-ui</td>
        <td>3</td>
        <td>Static asset delivery service</td>
    </tr>
    <tr>
        <td>Kafka</td>
        <td>3</td>
        <td>Message broker and event streaming platform</td>
    </tr>
    <tr>
        <td>Redis</td>
        <td>6</td>
        <td>Low-latency in-memory database used as a distributed cache</td>
    </tr>
    <tr>
        <td>Zookeeper</td>
        <td>3</td>
        <td>Synchronization application for distributed coordination of ThingsBoard microservices</td>
    </tr>
    <tr>
        <td>AWS RDS</td>
        <td>2</td>
        <td>AWS-managed relational database for all entity and time-series data</td>
    </tr>
</table>

**Database Specifications:**

- Instance type: `db.t4g.medium` (2 vCPUs, 4 GiB memory, ARM64 architecture)
  - since ThingsBoard does not cause consistently high CPU utilization on the SQL database, low-cost burstable instances are suited
- "Multi-AZ" read-only replica enabled (a total of 2 database instances) for fault tolerance purporses

**Pros:**

- Easy to backup and maintain PostgreSQL database;
- Self-healing cluster;
- Multi-replica deployment that satisfy strict availability requirements;
- Scaled services naturally provide significantly improved performance.

**Cons:**

- Extra costs for managing multiplied Kubernetes and Database services;
  - additional costs for associated EKS networking and storage services.

**Infrastructure costs:**

- EC2:
  - 3 × m7g.xlarge - $358/month
Elastic IP: 3 × $3.60/month - $11/month
- RDS:
  - 1 × db.t4g.medium - $54/month
  - 1 × db.t4g.medium (replica) - $54/month
- Storage:
  - 3 × 20 GB system node volumes - $6/month
  - 2 × 50 GB RDS storage allocations - $12/month
- EKS Control Plane: $75/month
- ELB: 3 × $22/month - $66/month

*Estimated Total:* ~$630/month

#### Setup 2: High-Capability MSA Cluster

Similarly to [Scenario B](#scenario-b-single-node-cluster), the second configuration option transitions to a **hybrid database topology**. This enables independent scaling of read-heavy and write-heavy workloads.

<object width="80%" data="/images/reference/deployment/scenario-c-hybrid.png"></object>

**Architectural Modifications:**

- Entity data: AWS RDS - unchanged from Setup 1
- Telemetry data: migrate from AWS RDS to self-hosted Apache Cassandra cluster

**Additional Compute Resources:**

Three additional EKS worker nodes are provisioned to host the distributed Cassandra cluster:

- Instance type: `m7g.large` (2 vCPUs, 8 GiB memory, ARM64 architecture)
  - for maximum performance on read-intensive loads, its recommended to use Intel- or AMD-based instance types (`m7i` or `m7a`)
- Node count: 3
- Deployment pattern: 1 Cassandra instance per node (ensuring fault tolerance and data replication)

**Pros:**

- Easy to backup and maintain PostgreSQL database;
- Cassandra provides enhanced read/write performance for telemetry data;
- Self-healing cluster;
- Multi-replica deployment that satisfy strict availability requirements;
- Scaled services naturally provide maximum performance.

**Cons:**

- Extra costs for managing multiplied Kubernetes and Database services;
  - additional costs for associated EKS networking and storage services;
- Self-hosted Cassandra database needs to be maintained and backed up.

**Infrastructure costs:**

- EC2:
  - 5 × m7g.xlarge (ThingsBoard) - $596/month
  - 3 × m7g.large (Cassandra) - $179/month
- Elastic IP: 3 × $3.60/month - $11/month
- RDS:
  - 1 × db.t4g.medium - $54/month
  - 1 × db.t4g.medium (replica) - $54/month
- Storage:
  - 8 × 20 GB system node volumes - $16/month
  - 2 × 100 GB RDS storage allocations - $24/month
  - 3 × 100 GB Cassandra storage volumes - $24/month
- EKS Control Plane: $75/month
- ELB: 3 × $22/month - $66/month

*Estimated Total:* ~$1,100/month

#### Summary

Scenario C is the definitive choice for production deployments that have strict high availability and fault tolerance requirements. As a direct evolution of Scenario B, this architecture expands its benefits by spanning all critical services, including the EKS worker nodes and the database, across multiple Availability Zones.

The deployment of multiple replicas with anti-affinity rules ensures that the application remains fully operational even during a catastrophic failure of an entire AZ. This multi-AZ scaling simultaneously delivers significantly improved performance and resilience by distributing load across more resources.

This scenario is ideal for mission-critical applications where uptime and performance under high load are paramount.