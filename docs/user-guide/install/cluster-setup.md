---
layout: docwithnav
assignees:
- ashvayka
title: Cluster setup
description: ThingsBoard IoT platform cluster setup guide

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode. There are two options available. 

## Cluster setup using microservices architecture (recommended)

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page and [**deployment**](https://github.com/thingsboard/thingsboard/blob/master/docker/README.md) 
tips for more details how to launch the ThingsBoard cluster in a "dockerized" environment. This option is recommended for advanced users only.

## Cluster setup using monolithic architecture (before v2.2)
  
Installing cluster of monolithic ThingsBoard applications where each one contains all necessary transport and core components in a single VM is no longer recommended option.
However, you may still want to use this option in case you would like to minimize amount of third-party used. See instructions below.   

### Assumptions

ThingsBoard requires Zookeeper for cluster coordination, Cassandra as a NoSQL database and Redis for cluster cache.
You can host Cassandra and Redis on the same nodes where you install ThingsBoard or on separate nodes.

We assume following topology
 
![image](/images/user-guide/cluster-topology.svg)
 
In this case, both Zookeeper and Cassandra nodes are deployed in cluster mode. 
We use two nodes clusters only for demonstration purposes. 
This is not recommended for production.

Let's assume following hostnames:

 - **tb1**, **tb2** and **tb3** - ThingsBoard hosts
 - **zk1** and **zk2** - Zookeeper hosts
 - **c1** and **c2** - Cassandra hosts 
 - **r1** and/or **r2** (for redis cluster)
 
We will use default ports for Cassandra (9042), Zookeeper(2181) and Redis(6379).

### Installation

You can install ThingsBoard services using single node [installation guide](/docs/user-guide/install/linux/)
Please note that you don't need to execute "Provision database schema and initial data" step only once per cluster.

### Configuration

You will need to change following Zookeeper and Cassandra parameters in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml)

```bash
zk:
  enabled: "${ZOOKEEPER_ENABLED:true}"
  url: "${ZOOKEEPER_URL:zk1:2181,zk2:2181}"

cassandra:
  url: "${CASSANDRA_URL:c1:9042,c2:9042}"
  # Cassandra cluster connection query parameters  #
  query:
    read_consistency_level: "${CASSANDRA_READ_CONSISTENCY_LEVEL:QUORUM}"
    write_consistency_level: "${CASSANDRA_WRITE_CONSISTENCY_LEVEL:QUORUM}"
    
redis: 
  # standalone or cluster
  connection:
    type: standalone
    host: "${REDIS_HOST:localhost}"
    port: "${REDIS_PORT:6379}"
    db: "${REDIS_DB:0}"
    password: "${REDIS_PASSWORD:}"

```

Also, you need to specify **rpc.bind_host** to match your current host for each thingsboard server. For example, **tb1** configuration:

```bash
rpc:
  bind_host: "${RPC_HOST:tb1}"
```

### Networking

Following ports need to be accessible within cluster for corresponding servers:
 
 - Zookeeper - **2181** port (used for coordination and can be modified using **zk.url** property).
 - Cassandra - **9042** port (used for coordination and can be modified using **cassandra.url** property).
 - ThingsBoard - **9001** port (used for RPC and can be modified using **rpc.bind_port** property).
 - Redis     - **6379** port (used for redis connection and can be modified using **redis.port** property)

Following ThingsBoard server ports need to be accessible outside cluster for device connectivity:
 
 - HTTP - **8080** port (can be modified using **server.port** property).
 - MQTT - **1883** port (can be modified using **mqtt.bind_port** property).
 - CoAP - **5683** port (can be modified using **coap.bind_port** property).

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
