---
layout: docwithnav
title: How to repeat the tests
description: ThingsBoard IoT Platform performance tests

---

We have prepared several AWS AMIs for anyone who is interested in replication of these tests.
These AMIs contain some tuned OS parameters, for example, the maximum amount of threads per process and open file descriptors:

 - [ThingsBoard AMI](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-09b1ed69) (username **ubuntu**)

    **Following ports must be accessible for the cluster nodes: 8080, 1883**

 - [Cassandra AMI](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-4db2ee2d) (username **ubuntu**)

    **Following ports must be accessible for the cluster nodes: 7000 - 7001, 9160, 9042**

 - [Test Client AMI](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-30b0ec50) (username **ubuntu**)


If you would like to verify performance for all components hosted on a single server instance, simply run ThingsBoard AMI instance.
By default this instance will be using Cassandra that runs locally.

If you would like to verify performance for standalone ThingsBoard server that uses external Cassandra Cluster, please init Cassandra cluster using provided Cassandra AMI first.
For example, let's do the configuration for three Cassandra instances.
Once you have launched 3 AWS instances using Cassandra AMI please update **cassandra.yml** file to make them run in a cluster.
In our case we have 3 instances with the following IP addresses:

 - 172.21.12.100, *instance A*
 - 172.21.12.101, *instance B*
 - 172.21.12.102, *instance C*

Login into every cluster instance, clean up cassandra data directories and modify cassandra configuration:

```bash
sudo rm -rf /var/lib/cassandra/saved_caches/*
sudo rm -rf /var/lib/cassandra/commitlog/*
sudo rm -rf /var/lib/cassandra/data/*
sudo nano /etc/cassandra/cassandra.yaml
```

Find in the file next lines and update them accordingly.

For instance A:

```bash
seeds: "172.21.12.100,172.21.12.101,172.21.12.102"

listen_address: "172.21.12.100"

rpc_address: "172.21.12.100"
```

For instance B:

```bash
seeds: "172.21.12.100,172.21.12.101,172.21.12.102"

listen_address: "172.21.12.101"

rpc_address: "172.21.12.101"
```

For instance C:

```bash
seeds: "172.21.12.100,172.21.12.101,172.21.12.102"

listen_address: "172.21.12.102"

rpc_address: "172.21.12.102"

```

On every instance restart cassandra:

```bash
sudo service cassandra stop
sudo service cassandra start
```

And verify that Cassandra cluster setup was successful:

```bash
nodetool status
```

In the output should be something similar:

```bash
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address        Load       Tokens       Owns (effective)  Host ID                               Rack
UN  172.31.28.47   192.99 KiB  256          30.9%             a323e6fb-2e8c-4bb4-82d0-4e621cb7cba8  rack1
UN  172.31.19.231  132.23 KiB  256          33.9%             6da17a19-2a4b-4f99-9ac7-e38f05ebf7a9  rack1
UN  172.31.25.178  289.4 KiB  256          35.2%             87f1ab4d-16d4-4969-aea8-b858e62d1d73  rack1
```

Once the cluster is ready we need to create schema, system and demo data. At any of the Cassandra cluster node (here we use instance A) execute following commands:

```bash
cqlsh 172.21.12.100 -f /usr/share/thingsboard/data/schema.cql 
cqlsh 172.21.12.100 -f /usr/share/thingsboard/data/system-data.cql 
cqlsh 172.21.12.100 -f /usr/share/thingsboard/data/demo-data.cql 
```

Once Cassandra cluster setup is done please run ThingsBoard AMI instance. You need to update **thingsboard.yml** config to use Cassandra cluster instead of a local instance:

```bash
sudo nano /etc/thingsboard/conf/thingsboard.yml
```

And update the cassandra url from localhost to IPs of cassandra ring:

```bash
url: "${CASSANDRA_URL:172.21.12.100:9042,172.21.12.101:9042,172.21.12.102:9042}"
```

After configuration update, restart ThingsBoard service:

```bash
sudo service thingsboard stop
sudo service thingsboard start
```

Once you will setup your cluster configuration using ThingsBoard and Cassandra AMIs you can execute tests from "client" machines (ThingsBoard Performance Test AMIs) using following commands:
 
```bash
cd projects/performance-tests
```

Update **mqttUrls** and **restUrl** and set private IPs of AWS instance where ThingsBoard service is deployed in **test.properties** file:

```bash
nano src/main/resources/test.properties
```

Re-install project so Gatling can pick up latest config files and start test:

```bash
mvn clean install gatling:execute
```
