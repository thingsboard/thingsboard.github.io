---
layout: docwithnav
title: How to repeat the tests
description: Thingsboard IoT Platform performance tests

---

We have prepared several AWS AMIs for anyone who is interested in replication of these tests.
These AMIs contain some tuned OS parameters, for example maximum amount of threads per process and open file descriptors:

 - [Thingsboard AMI](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-09b1ed69) (username **ubuntu**)

    **Following ports must be accessible for the cluster nodes: 8080, 1883**

 - [Cassandra AMI](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-4db2ee2d) (username **ubuntu**)

    **Following ports must be accessible for the cluster nodes: 7000 - 7001, 9160, 9042**

 - [Test Client AMI](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-30b0ec50) (username **ubuntu**)


If you would like to verify performance for all components hosted on a single server instance, simply run Thingsboard AMI instance. 
By default this instance will be using Cassandra that runs locally.

If you would like to verify performance for standalone Thingsboard server that uses external Cassandra Cluster, please init Cassandra cluster using provided Cassandra AMI first.
For example let's do the configuration for three Cassandra instances.
Once you have launched 3 AWS instances using Cassandra AMI please update **cassandra.yml** file to make them run in a cluster.
In our case we have 3 instances with the following IP addresses:

 - 172.21.12.100, *instance A*
 - 172.21.12.101, *instance B*
 - 172.21.12.102, *instance C*

Login into every cluster instance and do the following:

```bash
sudo nano /etc/cassandra/cassandra.yaml
```

Find in the file next lines and update them accordingly.

For instance A:

```bash
seeds: "172.21.12.100:9042,172.21.12.101:9042,172.21.12.102:9042"

listen_address: "172.21.12.100"

rpc_address: "172.21.12.100"
```

For instance B:

```bash
seeds: "172.21.12.100:9042,172.21.12.101:9042,172.21.12.102:9042"

listen_address: "172.21.12.101"

rpc_address: "172.21.12.101"
```

For instance C:

```bash
seeds: "172.21.12.100:9042,172.21.12.101:9042,172.21.12.102:9042"

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

Once Cassandra cluster setup is done please run Thingsboard AMI instance. You need to update **thingsbaord.yml** config to use Cassandra cluster instead of local instance:

```bash
sudo nano /etc/thingsboard/conf/thingsboard.yml
```

And update cassandra url from localhost to IPs of cassandra ring:

```bash
url: "${CASSANDRA_URL:172.21.12.100:9042,172.21.12.101:9042,172.21.12.102:9042}"
```

After configuration update restart Thingsboard service:

```bash
sudo service thingsboard stop
sudo service thingsboard start
```

Once you will setup your cluster configuration using Thingsboard and Cassandra AMIs you can execute tests from "client" machines (Thingsboard Performance Test AMIs) using following commands:
 
```bash
cd projects/performance-tests
```

Update **mqttUrls** and **restUrl** and set private IPs of AWS instance where Thingsboard service is deployed in **test.properties** file:

```bash
nano src/main/resources/test.properties
```

Re-install project so Gatling can pick up latest config files and start test:

```bash
mvn clean install gatling:execute
```