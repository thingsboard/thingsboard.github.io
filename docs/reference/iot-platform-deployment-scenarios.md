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

### Scenario A: Standalone server deployment

The most simple deployment scenario capable of handling up to 500 000 devices, 10,000 messages and 20,000 data points.  
  
* Production installation with less then 50 000 devices and no strict uptime or data durability SLA.

**Description**:
Both ThingsBoard platform and PostgreSQL database is deployed on one same server either on-premise or in the cloud. 
The HAProxy load balancer is also installed on the same server and acts as a reverse proxy and optionally TLS termination proxy.
See diagram below.

**Pros**:

* Very simple setup. Literally 10 minutes to deploy using our installation guides;
* Easy to maintain and update the software instance;

**Cons**:

* Minimum high-availability. In case of hardware or application failure all devices and users are affected; 
* No data durability. Everything is stored on one server;
* Performance of the system is limited by performance of the single server;

**Performance**:

Overall performance of the solution depends on the instance hardware and heavily rely on the performance of the database.
We suggest to use PostgreSQL for both entities and telemetry data in this scenario.
An average virtual environment can handle ~ 5,000 telemetry data points per second.    

**Recommendations**:

We recommend to setup the data backup scripts and periodically upload database snapshots to durable storage (AWS S3, etc).
It is also a good idea to create regular snapshots of your server instance to minimize the recovery time in case of possible outage.

If you would like to minimize time and resources spent for the database support, we recommend to use managed database from one of the cloud vendors. 
ThingsBoard customers successfully utilize [AWS RDS](https://aws.amazon.com/rds/postgresql/), [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) and
[Google Cloud SQL](https://cloud.google.com/sql/docs/postgres/)


### Scenario B: Standalone single-server deployment with managed database