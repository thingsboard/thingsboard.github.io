
* TOC
{:toc}

This article describes the most common deployment architectures supported by ThingsBoard.
All deployment scenarios contain certain pros and cons.
Choosing the right architecture for your deployment depends on the infrastructure cost, performance and high-availability requirements.

In the following sections, you can find total infrastructure cost calculations for ThingsBoard deployed using AWS.

<b>Important notice:</b> All pricing below is approximate and provided as an example, based only on core infrastructure components costs (computing, storage, load-balancing). A production-grade environment typically requires additional operational services - such as backup tools, monitoring and secrets management - all of which will further increase the total cost. Please consult your cloud provider to get accurate pricing per your use case.

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

## Deployment scenarios

### Scenario A (Monolith)

This deployment scenario is designed for straightforward, cost-efficient deployments supporting applications with low to moderate workloads and limited horizontal scaling needs. It adopts a monolithic server approach, consolidating core services onto a single compute instance to reduce infrastructure complexity and operational effort.

The deployment pattern includes two configuration options, each tailored to different database management preferences.

#### Setup 1. Simple standalone server

For the simplest, most cost-efficient setup, all components, including the database and proxy, are hosted on a single server. This configuration is ideal for prototyping, development environments, or small-scale production workloads where ease of management and cost are the primary concerns.

You can further improve this architecture by applying optional addons, described below.

**Compute Resources:**

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
        <td>ThingsBoard service</td>
        <td>Monolith ThingsBoard application</td>
    </tr>
    <tr>
        <td>HAProxy</td>
        <td>Lightweight proxy/load balancer for managing external traffic</td>
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

**Architectural Modifications:**

- Entity and telemetry data: migrate from self-managed PostgreSQL to AWS-managed RDS instance.

**Additional Compute Resources:**

- Instance type: `db.t4g.medium` (2 vCPUs, 4 GiB memory, ARM64 architecture)
  - since ThingsBoard does not cause consistently high CPU utilization on the SQL database, low-cost burstable instances are suited.

#### Summary

Scenario A provides the simplest and most cost-efficient deployment path but is best suited for environments with predictable, moderate workloads. While the monolithic design reduces operational overhead, it also introduces clear limitations in scalability and fault tolerance. Setup 2 offers improved database reliability through RDS but still retains a single-node application simplicity.

This scenario is ideal for early-stage deployments but may require vertical scaling as system demands increase.

### Scenario B (Scalable Deployment)

This reference targets horizontally scalable deployment. It is ideal for production environments anticipating future growth beyond initial operational loads. The architecture utilizes managed AWS services - including Amazon EKS, ELB, and RDS - to minimize operational overhead such as instance provisioning, patch management, and backup orchestration.

The deployment pattern includes two configuration options, each optimized for varying data ingestion throughput requirements.

#### Setup 1: Low-frequency telemetry rate

For workloads with moderate data ingestion rates, this setup utilizes Amazon RDS as entity and telemetry data storage. Public access to the Thingsboard application inside the cluster provided by ELB.

**Compute Resources:**

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
    <tr>
        <td>tb-node</td>
        <td>1</td>
        <td>Core ThingsBoard application service</td>
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

#### Setup 2: High-frequency telemetry rate

With increased telemetry write/read request rates, the architecture may be transitioned to a **hybrid database topology**. This approach separates entity data (PostgreSQL) from time-series data (Cassandra), enabling independent scaling of read- and write-heavy workloads.

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

This scenario is a direct upgrade to [Scenario B](#scenario-b-scalable-deployment), featuring multiple replicas spanned across different Availability Zones in horizontal scaling manner. Like it's preceding scenario, the architecture leverages AWS managed services that provide similar perks of minimalized operational overhead of infrastructure provisioning, patch management, and backup orchestration. Similarly to [Scenario B](#scenario-b-scalable-deployment), there are two distinct configurations optimized for varying data ingestion requirements.

#### Setup 1: Low-frequency telemetry rate

For workloads with moderate data ingestion rates, this setup utilizes Amazon RDS as entity and telemetry data storage. Public access to the Thingsboard application inside the cluster provided by ELB.

**Compute Resources:**

- EKS cluster provisioned within 3 Availability Zones
  - each of 3 worker nodes are deployed within corresponding Availability Zone
- Instance type: `m7g.xlarge` (4 vCPUs, 16 GiB memory, ARM64 architecture)

**Application Workloads:**

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
        <td>tb-node</td>
        <td>3</td>
        <td>Core ThingsBoard application server</td>
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
- ELB: $22/month

*Estimated Total:* ~$585/month

#### Setup 2: High-frequency telemetry rate

Similarly to [Scenario B](#scenario-b-scalable-deployment), the second configuration option transitions to a **hybrid database topology**. This enables independent scaling of read-heavy and write-heavy workloads.

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
- ELB: $22/month

*Estimated Total:* ~$1,055/month

#### Summary

Scenario C is the definitive choice for production deployments that have strict high availability and fault tolerance requirements. As a direct evolution of Scenario B, this architecture expands its benefits by spanning all critical services, including the EKS worker nodes and the database, across multiple Availability Zones.

The deployment of multiple replicas with anti-affinity rules ensures that the application remains fully operational even during a catastrophic failure of an entire AZ. This multi-AZ scaling simultaneously delivers significantly improved performance and resilience by distributing load across more resources.

This scenario is ideal for mission-critical applications where uptime and performance under high load are paramount.