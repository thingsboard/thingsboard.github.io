---
layout: docwithnav
title: ThingsBoard IoT Platform deployment scenarios
description: Overview of deployment scenarios and tips

---

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

We have prepared a list of questions to quickly describe typical IoT solution performance requirements:

1. Total number of connected devices, assets, customers, customer users and tenants;
2. Maximum and average amount of messages per day per device;
3. Maximum and average size of device payload;
4. Average amount of data points in each message; 
5. Communication protocol or Integration type used for device connectivity.
6. How long ThingsBoard should store the data from devices;

ThingsBoard performance heavily depends on the amount of messages devices produce and also the structure of those messages.
See some examples below.

**Example 1: 20,000 trackers**
 
20,000 devices send message to the cloud once per minute. Each message structure is the following:

```json
{"latitude": 42.222222, "longitude":  73.333333, "speed":  55.5, "fuel": 92, "batteryLevel":  81}
```

ThingsBoard constantly maintains 20,000 connections and processes 333 messages per second. 
Each message contains 5 data points that may need to be graphed/analyzed/fetched separately. 
This causes 1,667 write requests to the database each second and produces 143M requests per day.
Based on the chosen database type, this results into approximately 1-2GB(Cassandra) or 7-10GB (PostgreSQL).

**Example 2: 100,000 smart meters** 

100,000 LoRaWAN devices send message to the cloud once per hour. Each message structure is the following:

```json
{"pulseCounter": 1234567, "leakage":  false, "batteryLevel":  81}
```

ThingsBoard receives uplink messages from one of the available Network Servers over HTTP or MQTT. 
Typical message rate is 100,000 / 3600 = 28 messages per second which is quite low. 
Each message contains 3 data points that may need to be graphed/analyzed/fetched separately. 
However, we decide not to store "leakage" property since it is redundant ("false" most of the time). 
We will only use it to generate the alarm.
This causes 55.5 write requests to the database each second and produces 4.78M requests per day.
Based on the chosen database type, this results into approximately 100MB(Cassandra) or 238MB (PostgreSQL).

## Key infrastructure characteristics

Based on the [performance requirements](/docs/reference/iot-platform-deployment-scenarios/#performance-requirements), 
we can identify key ThingsBoard server/cluster characteristics:

1. Number of **incoming messages per second** - Mostly impacts RAM and CPU consumption;
2. Number of concurrent **active device sessions** - Mostly impacts RAM consumption;
3. Number of **messages processed by Rule Engine** - Mostly impacts CPU consumption;
4. Number of **persisted data points** - Directly impacts IOPS and corresponding database; 

ThingsBoard cluster can scale horizontally, so you can quite easily solve items 1-3. 
However, you need to carefully plan amount of persisted data points.
In case you plan to use PostgreSQL we recommend to plan no more then 20,000 data points per second.
In case you plan to use Hybrid database approach (PostgreSQL and Cassandra) you can scale telemetry(Cassandra) writes to 1M data points/second, 
although the attribute updates are still pushed to PostgreSQL and the 20,000 attribute updates limit is still active.  

## Deployment Scenarios

### Standalone server deployment (Scenario A)

The most simple deployment scenario capable of handling up to 300 000 devices, 10,000 messages and 10,000 data points per second based on real production use cases.  
Both ThingsBoard platform and PostgreSQL database is deployed on the same server either on-premise or in the cloud. 
The HAProxy load balancer is also installed on the same server and acts as a reverse proxy and optionally TLS termination proxy.
See diagram below.

![image](/images/reference/deployment/single.png)

**Pros**:

* Very simple setup. Literally 10 minutes to deploy using our installation guides;
* Easy to maintain and update the software instance;

**Cons**:

* Upgrades cause downtime. The downtime is approximately 5 minute per upgrade;  
* Minimum high-availability. In case of hardware or application failure all devices and users are affected; 
* No data durability. Everything is stored on one server;
* Performance of the system is limited by performance of the single server;

**Performance**:

Overall performance of the solution depends on the instance hardware and heavily rely on the performance of the database.
We suggest to use PostgreSQL for both entities and telemetry data in this scenario.
An average virtual environment can handle ~ 5,000 telemetry data points per second.
See [key infrastructure characteristics](/docs/reference/iot-platform-deployment-scenarios/#key-infrastructure-characteristics)
and [performance tests](/docs/reference/performance-aws-instances/) on different AWS instances.

**Total cost of ownership (TCO) example**:

Assuming 10,000 LoRaWAN smart meter devices that send message to the cloud once per hour.

Single AWS EC2 "m5.large" instance cost per month is ~41.66 USD (~ 500 USD annually in case of 1 year full upfront payment).
500 GB Storage price is 50 USD/month.
Approximate infrastructure cost: ~100 USD/month.

Single ThingsBoard PE perpetual license cost is 2999 USD for the first year and 1199 USD for the subsequent years (software updates + basic support).

TCO: ~350 USD per month or 0.035 USD per month per device. 
Adding [Premium support](/docs/services/support/) package results in ~850 USD per month or 0.085 USD per month per device.  

**Comments and Recommendations**:

This deployment scenario is quite simple and suites well for development environments, prototyping and early stage startup companies. 
Before you go to production, we recommend to setup the data backup scripts and periodically upload database snapshots to durable storage (AWS S3, etc).
It is also a good idea to create regular snapshots of your server instance to minimize the recovery time in case of possible outage.
  
If you would like to minimize time and resources spent for the database support, we recommend to use managed database from one of the cloud vendors. See Scenario B for more details. 

### Single-server deployment with external database (Scenario B)

Same as scenario A but with a fully-managed database deployed on a separate server(s). 
ThingsBoard customers successfully utilize [AWS RDS](https://aws.amazon.com/rds/postgresql/), [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) and
[Google Cloud SQL](https://cloud.google.com/sql/docs/postgres/) to minimize efforts on database setup, backups and support.
See diagram below.

![image](/images/reference/deployment/standalone.png)

**Pros**:

* Very simple setup. Literally 1 hour to deploy using our installation guides;
* Easy to maintain and update the software instance;
* Data is stored separately with managed backups and failover;

**Cons**:

* Upgrades cause downtime. The downtime is approximately 5 minute per upgrade;
* Minimum high-availability. In case of hardware or application failure administrator need to perform manual actions to restore the system; 
* Performance of the system is limited by performance of the single server;

**Performance**:

Overall performance of the solution depends on the instance hardware and heavily rely on the performance of the database.
We suggest to use PostgreSQL for both entities and telemetry data in this scenario.
An average virtual environment can handle ~ 5,000 telemetry data points per second.
See [key infrastructure characteristics](/docs/reference/iot-platform-deployment-scenarios/#key-infrastructure-characteristics)
and [performance tests](/docs/reference/performance-aws-instances/) on different AWS instances.

**Total cost of ownership (TCO) example**:

Assuming 10,000 LoRaWAN smart meter devices that send message to the cloud once per hour.

Single AWS EC2 "m5.large" instance cost per month is ~41.66 USD (~ 500 USD annually in case of 1 year full upfront payment).
Amazon RDS PostgreSQL instance cost is ~200 USD /month in case of db.t2.medium and Multi-AZ deployment.
Approximate infrastructure cost: ~250 USD/month.

Single ThingsBoard PE perpetual license cost is 2999 USD for the first year and 1199 USD for the subsequent years (software updates + basic support).

TCO: ~500 USD per month or 0.05 USD per month per device. 
Adding [Premium support](/docs/services/support/) package results in ~1000 USD per month or 0.1 USD per month per device.  

### Cluster deployment with the Microservices architecture (Scenario C)

ThingsBoard supports Microservices architecture (MSA) to perform scalable deployments for millions of devices. See [platform architecture](/docs/reference/msa/) for more details.
With MSA deployments, system administrator can flexibly tune number of transport, rule-engine, web-ui and JavaScript executor microservices to optimize the cluster according to the current load.

ThingsBoard uses [Kafka](https://kafka.apache.org/) as a main message queue and streaming solution, [Redis](https://redis.io/) as a distributed cache 
and [Cassandra](http://cassandra.apache.org/) as a highly available, scalable and fast NoSQL database. 
Note that Cassandra usage is optional and is required only in case of high telemetry data rate (more then 20 000 data points per second)
In other cases PostgreSQL based deployment is sufficient.

**Pros**:

* Simple Kubernetes deployment;
* No SPOF, highly available, scalable deployment;
* No downtimes during minor version upgrades;

**Cons**:

* Higher TCO on small number of devices (<100 000 devices per ThingsBoard cluster).  

**Performance**:

Overall performance of the solution depends on the cluster hardware and heavily rely on the performance of the database used.
A cluster of virtual machines with 5 ThingsBoard servers and 5 Cassandra nodes can handle 1 million of devices;
See [key infrastructure characteristics](/docs/reference/iot-platform-deployment-scenarios/#key-infrastructure-characteristics)
and [performance tests](/docs/reference/1m-devices-test/) for more details.
  
**Total cost of ownership (TCO) examples**:

**Example 1:** Assuming 1,000,000 LoRaWAN/NB-IoT **smart meter** devices that send message to the cloud **once per hour**. 
Each message contains 3 data points that may need to be graphed/analyzed/fetched separately.
We assume messages are sent to ThingsBoard via HTTP or UDP Integration which is typical for such case.

Typical message rate is 1,000,000 / 3600 = 280 messages per second.
This causes 280*3=840 data points (write requests to the database) each second and produces 72.6M requests per day.
Based on the chosen database type, this results into approximately 1.2GB(Cassandra) or 4GB (PostgreSQL) daily.

The following Kubernetes cluster is sufficient to support this use-case:

- 2x"r5.xlarge" instances (4vCPUs and 32 GB of RAM) to host 2 ThingsBoard Node containers. Estimate: ~380 USD/month.
- 3x"c5.large" instances (2vCPUs and 4 GB of RAM) to host 3 Zookeeper and ~9 JS Executors. Estimate: ~120 USD/month.
- Amazon ElastiCache for Redis based on 2x"cache.m5.large". Estimate: ~200 USD/month. 
- Amazon Managed Streaming for Kafka based on 3x"kafka.m5.large" and 1TB data storage. Estimate: 620 USD/month
- Amazon RDS for PostgreSQL based on db.m5.large multi-AZ deployment. Estimate: 220 USD/month 
- 1TB Multi-AZ deployment storage. Estimate: 230 USD/month 

![image](/images/reference/deployment/smart-meter-cluster.png)

Approximate infrastructure cost: ~1770 USD/month or 0.00177 USD/month/device.

Two ThingsBoard PE perpetual licenses cost is 5998 USD for the first year and 2398 USD for the subsequent years (software updates + basic support).
ThingsBoard Managed services to support the production environment: 0.01 USD per device per month. 
 
TCO: ~12,270 USD per month or 0.01227 USD per month per device.

**Example 2:** Assuming 1,000,000 **smart tracker** devices that send message to the cloud **once per minute**.
Each message contains 5 data points that may need to be graphed/analyzed/fetched separately. 

Typical message rate is 1,000,000 / 60 = 16667 messages per second.
This causes 16667*5=83335 data points (write requests to the database) each second and produces 7.2B requests per day.
This load can be reliably handled with Cassandra and results to 144GB daily. Since the data need to be replicated 3 times it results to 432GB daily.

The following Kubernetes cluster is sufficient to support this use-case:

- 4x"c5.large" instances (2vCPUs and 4 GB of RAM) to host 4 ThingsBoard MQTT Transport containers. Estimate: ~160 USD/month.
- 15x"c5.xlarge" instances (4vCPUs and 8 GB of RAM) to host 15 ThingsBoard Node containers. Estimate: ~1095 USD/month.
- 15x"c5.xlarge" instances (4vCPUs and 8 GB of RAM) to host 15 Cassandra containers. Estimate: ~1095 USD/month.
- 3x"c5.xlarge" instances (2vCPUs and 4 GB of RAM) to host 3 Zookeeper and ~30 JS Executors. Estimate: ~240 USD/month.
- Amazon ElastiCache for Redis based on 2x"cache.m5.large". Estimate: ~200 USD/month. 
- Amazon Managed Streaming for Kafka based on 3x"kafka.m5.large" and 1TB data storage. Estimate: 620 USD/month
- Amazon RDS for PostgreSQL based on db.m5.large multi-AZ deployment. Estimate: 220 USD/month 
- 100TB of deployment storage. Estimate: 10000 USD/month 

Approximate infrastructure cost: ~13630 USD/month or 0.0134 USD/month/device.
15 ThingsBoard PE perpetual licenses cost is 44985 USD for the first year and 17985 USD for the subsequent years (software updates + basic support).
ThingsBoard Managed services to support the production environment: 0.01 USD per device per month. 

TCO: ~27,378 USD per month or 0.0273 USD per month per device.

