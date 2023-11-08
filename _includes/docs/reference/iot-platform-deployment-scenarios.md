
* TOC
{:toc}

This article describes most popular deployment architectures supported by ThingsBoard. 
All deployment scenarios contain certain pros and cons. 
Choosing the right architecture for your deployment depends on the TCO, performance and high-availability requirements.
We will start from the most simple scenarios and see how the minimalistic deployment can be upgraded to most complex ones.

Herewith you can find total cost of ownership (TCO) calculations for ThingsBoard deployed using AWS.  
Important notice: all calculation and pricing below are approximate and are listed as an example.
Please consult your cloud provider in order to get your accurate pricing.

## Performance requirements

We have prepared a list of items to quickly estimate typical IoT solution performance requirements:

1. Total number of connected devices, assets, customers, customer users and tenants in production or per year;
2. Maximum and average amount of messages per day per device;
3. Maximum and average size of device payload;
4. Average amount of data points in each message; 
5. Communication protocol or Integration type used for device connectivity;
6. Entities data lifetime (in years).

Once we have rough vision over above mentioned parameters we (as well as you) will be able to estimate required infrastucture.  
ThingsBoard performance heavily depends on both the amount of messages produced by devices and the structure of those messages.

**Example 1: 20,000 trackers**
 
20,000 devices send messages to the cloud once per minute. Each message contains parameters as follows:

```json
{"latitude": 42.222222, "longitude": 73.333333, "speed": 55.5, "fuel": 92, "batteryLevel": 81}
```
In this case ThingsBoard constantly maintains 20,000 connections and processes 333 messages per second. 
Each message delivers 5 data points that may need to be graphed/analyzed/fetched separately. 
This causes 1,667 write requests to the database per second and produces 143M requests per day.
Based on the chosen database type, this results into approximately 1-2GB (Cassandra) or 7-10GB (PostgreSQL) daily.

**Example 2: 100,000 smart meters** 

100,000 LoRaWAN devices send messages to the cloud once per hour. Each message structure is the following:

```json
{"pulseCounter": 1234567, "leakage": false, "batteryLevel": 81}
```
ThingsBoard receives uplink messages from one of the available Network Servers over HTTP or MQTT. 
Typical message rate is 100,000 / 3600 = 28 messages per second, which is quite low. 
Each message contains 3 data points, that may need to be graphed/analyzed/fetched separately. 
However, we decide not to store "leakage" property since it is redundant ("false" most of the time). 
We will only use it to generate the alarm.
This causes 55.5 write requests to the database per second and produces 4.78M requests per day.
Based on the chosen database type, this results into approximately 100MB (Cassandra) or 238MB (PostgreSQL) daily.

## Key infrastructure characteristics

Based on the [performance requirements](/docs/{{docsPrefix}}reference/iot-platform-deployment-scenarios/#performance-requirements), 
you can identify key ThingsBoard server/cluster characteristics:

- the number of **incoming messages per second** (mostly impacts RAM and CPU consumption);
- the number of concurrent **active device sessions** (mostly impacts RAM consumption);
- the number of **messages processed by Rule Engine** (mostly impacts CPU consumption);
- the number of **persisted data points** (directly impacts IOPS and corresponding database). 

ThingsBoard cluster can scale horizontally, so you quite easily deal with RAM/CPU influencers. 
However, you need to carefully plan amount of persisted data points (the last item in the list above).
In case you intent to use PostgreSQL, we recommend to have less then 20,000 data points records per second.
In case you plan to use Hybrid database approach (PostgreSQL and Cassandra) you can scale telemetry (Cassandra) writes to 1M data points/second, although the attribute updates are pushed to PostgreSQL, so 20,000 limit remains valid.  

## Deployment Scenarios

### Standalone server deployment (Scenario A)

The most simple deployment scenario is suitable for up to 300 000 devices with 10,000 messages and 10,000 data points per second based on real production use cases.  
This scenario requires both ThingsBoard platform and PostgreSQL database deployment within the same server (on-premise or in the cloud). 
The HAProxy load balancer is also installed on the same server and acts as a reverse proxy and optionally TLS termination proxy.
See diagram below.

<object width="80%" data="https://img.thingsboard.io/reference/deployment/single.svg"></object>

**Pros**:

* Very simple setup, literally: 10 minutes to deploy using [our installation guides](/docs/user-guide/install/{{docsPrefix}}installation-options/).
* Easy to maintain and update the software instance.

**Cons**:

* Upgrades cause downtime, which is approximately 5-10 minute per upgrade.  
* Minimum high-availability. In case of hardware or application failure all devices and users are affected. 
* No data durability. Everything is stored on one server.
* Performance of the system is limited by performance of the single server.

**Performance**:

Overall performance of the solution depends on the instance hardware and heavily rely on the performance of the database.
We suggest to use PostgreSQL for both entities and telemetry data in Standalone server deployment scenario.
An average virtual environment can handle ~ 5,000 telemetry data points per second.
See [key infrastructure characteristics](/docs/{{docsPrefix}}reference/iot-platform-deployment-scenarios/#key-infrastructure-characteristics)
and [performance tests](/docs/{{docsPrefix}}reference/performance-aws-instances/) on different AWS instances. This information is useful for making right decision regarding the infrastructure for your solution. 

**Total cost of ownership (TCO) example**:

Assuming 10,000 LoRaWAN smart meter devices send messages to the cloud once per hour.

Single AWS EC2 "m5.large" instance costs ~41.66 USD per month (~500 USD annually in case of 1 year upfront payment).
500 GB Storage price is 50 USD per month.
Approximate infrastructure cost, respectively, is ~100 USD per month.

Single ThingsBoard PE perpetual license (below v3.0) cost is 2,999 USD (including with optional updates and basic support within initial year of usage). 1,199 USD is the respective pricing for the subsequent years of software updates + basic support.

TCO: ~350 USD per month. This price correlates with 0.035 USD per month per device, while the amount of devices is 10k. 
Adding [Premium support](/docs/services/support/) package results in ~850 USD per month or 0.085 USD per month per device.  

**Comments and Recommendations**:

This deployment scenario is quite simple and suites well for development environments, prototyping and early stage startup companies. 
Before you go to production, we recommend to setup the data backup scripts and periodically upload database snapshots to durable storage (AWS S3, etc.). It is also useful to have regular snapshots of your server instance implemented in order to minimize the recovery time in case of possible outage.
  
If you would like to minimize resources spent for the database maintenance, we recommend to use cloud managed database. See Scenario B for more details. 

### Single-server deployment with external database (Scenario B)

This deployment scenario rather similar to scenario A, but requires fully-managed database deployed on a separate server(s). 
ThingsBoard customers successfully utilize [AWS RDS](https://aws.amazon.com/rds/postgresql/), [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) and
[Google Cloud SQL](https://cloud.google.com/sql/docs/postgres/) to minimize efforts on database setup, backups and support.
See diagram below.

<object width="80%" data="https://img.thingsboard.io/reference/deployment/standalone.svg"></object>

**Pros**:

* Very simple setup (approximately 1 hour to deploy using our installation guides).
* Easy to maintain and update the software instance.
* The data is stored separately with managed backups and failover.

**Cons**:

* Upgrades cause downtime. The downtime is approximately 5 minute per upgrade.
* Minimum high-availability. In case of hardware or application failure administrator is obliged to perform manual actions to up and run  the system. 
* Performance of the system is limited by performance of the single server.

**Performance**:

Overall performance of the solution depends on the instance hardware and heavily rely on the performance of the database.
We suggest to use PostgreSQL for both entities and telemetry data in this scenario.
An average virtual environment can handle ~ 5,000 telemetry data points per second.
See [key infrastructure characteristics](/docs/{{docsPrefix}}reference/iot-platform-deployment-scenarios/#key-infrastructure-characteristics)
and [performance tests](/docs/{{docsPrefix}}reference/performance-aws-instances/) on different AWS instances.

**Total cost of ownership example for Scenario B**:

Assuming 10,000 LoRaWAN smart meter devices that send messages to the cloud once per hour.

Single AWS EC2 "m5.large" instance cost per month is ~41.66 USD (~500 USD annually in case of yearly upfront payment).
Amazon RDS PostgreSQL instance cost is ~200 USD per month in case of db.t2.medium and Multi-AZ deployment.
Approximate infrastructure cost: ~250 USD/month.

Single ThingsBoard PE perpetual license costs 2,999 USD (including optional updates and basic support within initial year of usage). 1,199 USD  is the respective pricing for the subsequent years of software updates + basic support.

TCO: ~500 USD per month or 0.05 USD per month per device for up to 10k devices use case. 
Adding [Premium support](/docs/services/support/) package results in ~1000 USD per month or 0.1 USD per month per device.  

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

<object width="100%" data="https://img.thingsboard.io/reference/deployment/smart-meter-cluster.svg"></object>

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

<object width="100%" data="https://img.thingsboard.io/reference/deployment/smart-tracker-cluster.svg"></object>

Thus approximate infrastructure cost is ~13,790 USD/month or 0.0138 USD/month per device.
15 ThingsBoard PE perpetual licenses (below v3.0) cost 44,985 USD (including optional updates and basic support within initial year of usage). 17,985 USD is the respective pricing for the subsequent years of software updates + basic support.
ThingsBoard **Managed services** to support the production environment: 0.01 USD per device per month. 

TCO: ~27,508 USD per month or 0.0275 USD per month per device.

**If you would like to reproduce this case on your cluster setup, please follow this guide:**
[Smart Trackers use case performance test](https://github.com/ashvayka/tb-pe-k8s-perf-tests/tree/scenario/1-million-smart-trackers)
