---
layout: docwithnav
title: ThingsBoard Data Collection Performance
description: ThingsBoard IoT Platform data collection performance overview

---

* TOC
{:toc}

One of the key features of ThingsBoard open-source IoT Platform is data collection and this is a crucial feature that must work reliably under high load.
In this article, we are going to describe steps and improvements that we have made to ensure that single instance of ThingsBoard server
can constantly handle **20,000+** devices and **30,000+** MQTT publish messages per second,
which in summary gives us around **2 million published messages per minute**.

## Architecture

ThingsBoard performance leverages three main projects:

 - [Netty](http://netty.io/) for high-performance MQTT server/broker for IoT devices.
 - [Cassandra](http://cassandra.apache.org/) for scalable high-performance NoSQL DB to store timeseries data from devices.
 - Actor System for high-performance coordination of messages between millions of devices.
 - Kafka (or RabbitMQ, AWS SQS, Azure Event Hub, Google PubSub) - as a scalable message queue 
 
We also use [Zookeeper](https://zookeeper.apache.org/) for coordination and [gRPC](http://www.grpc.io/) in cluster mode. See [platform architecture](/docs/reference/) for more details.

## Data flow and test tools
 
IoT devices connect to ThingsBoard server via MQTT and issue "publish" commands with JSON payload.
Size of single publish message is approximately 100 bytes. 
[MQTT](http://mqtt.org/) is lightweight publish/subscribe messaging protocol and offers a number of advantages over HTTP request/response protocol.
 
![image](/images/reference/performance/performance-diagram-0.svg)

ThingsBoard server processes MQTT publish messages and stores them to Cassandra asynchronously.
The server may also push data to websocket subscriptions from the Web UI dashboards (if present).
We try to avoid any blocking operations and this is critical for overall system performance.
ThingsBoard supports MQTT QoS level 1, which means that a client receives a response to the publish message only after data is stored to Cassandra DB.
Data duplicates which are possible with QoS level 1 are just the overwrites to the corresponding Cassandra row and thus are not present in persisted data. 
This functionality provides reliable data delivery and persistence. 

We have used [Gatling](http://gatling.io/) load testing framework that is also based on Akka and Netty. 
Gatling is able to simulate 10K MQTT clients using 5-10% of a 2-core CPU. 
See our separate [article](/docs/reference/performance-tools) about how we improved unofficial Gatling MQTT plugin to support our use case.

## Performance improvement steps

### Step 1. Asynchronous Cassandra Driver API 

The results of first performance tests on the modern 4-core laptop with SSD were quite poor. The platform was able to process only 200 messages per second.
The root cause and a main performance bottle-neck were quite obvious and easy to find. 
It appears that the processing was not 100% asynchronous and we were executing blocking API call of Cassandra driver inside the [Telemetry Service](/docs/user-guide/telemetry/) actor.
Quick refactoring of the service implementation resulted in more than 10X performance improvement and we received approximately 2500 published messages per second from 1000 devices.

### Step 2. Connection pooling

We have decided to move to AWS EC2 instances to be able to share both results and tests we executed. We start running tests on [c4.xlarge](http://www.ec2instances.info/?selected=c4.xlarge) instance (4 vCPUs and 7.5 Gb of RAM) with Cassandra and ThingsBoard services co-located.

![image](/images/reference/performance/performance-diagram-1.svg)

Test specification:

 - Number of devices: 10 000
 - Publish frequency per device: once per second
 - Total load: 10 000 messages per second
 
First test results were obviously unacceptable:

![image](/images/reference/performance/single_node_no_fix_stats.png) 
 

The huge response time above was caused by the fact that the server was simply not able to process 10 K messages per second and they are getting queued.

We have started our investigation with monitoring memory and CPU load on the testing instance. 
Initially, our guessing regarding poor performance was because of the heavy load on CPU or RAM. 
But in fact, during load testing, we have seen that CPU in particular moments was idle for a couple of seconds. 
This 'pause' event was happening every 3-7 seconds, see chart below.
 
![image](/images/reference/performance/single_node_no_fix_rps.png) 

As a next step, we have decided to do the thread dump during these pauses. 
We were expecting to see threads that are blocked and this could give us some clue what is happening while pauses. 
So we have opened separate console to monitor CPU load and another one to execute thread dump while performing stress tests using the following command:

```bash

kill -3 THINGSBOARD_PID

```

We have identified that during pause there was always one thread in TIMED_WAITING state and the root cause was in method awaitAvailableConnection of Cassandra driver:

```bash
java.lang.Thread.State: TIMED_WAITING (parking)
at sun.misc.Unsafe.park(Native Method)
parking to wait for  <0x0000000092d9d390> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)
at java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:215)
at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2163)
at com.datastax.driver.core.HostConnectionPool.awaitAvailableConnection(HostConnectionPool.java:287)
at com.datastax.driver.core.HostConnectionPool.waitForConnection(HostConnectionPool.java:328)
at com.datastax.driver.core.HostConnectionPool.borrowConnection(HostConnectionPool.java:251)
at com.datastax.driver.core.RequestHandler$SpeculativeExecution.query(RequestHandler.java:301)
at com.datastax.driver.core.RequestHandler$SpeculativeExecution.sendRequest(RequestHandler.java:281)
at com.datastax.driver.core.RequestHandler.startNewExecution(RequestHandler.java:115)
at com.datastax.driver.core.RequestHandler.sendRequest(RequestHandler.java:91)
at com.datastax.driver.core.SessionManager.executeAsync(SessionManager.java:132)
at org.thingsboard.server.dao.AbstractDao.executeAsync(AbstractDao.java:91)
at org.thingsboard.server.dao.AbstractDao.executeAsyncWrite(AbstractDao.java:75)
at org.thingsboard.server.dao.timeseries.BaseTimeseriesDao.savePartition(BaseTimeseriesDao.java:135)
```

As a result, we have realized that the default connection pool configuration for cassandra driver caused bad results in our use case.

[Official configuration](http://docs.datastax.com/en/developer/java-driver/2.1/manual/pooling/) for connection pool feature contains special option 
**‘Simultaneous requests per connection’** that allows you to tune concurrent request per single connection. 
We use cassandra driver protocol v3 and it uses the next values by default: 
 
 - 1024 for LOCAL hosts.
 - 256 for REMOTE hosts. 

Considering the fact that we are actually pulling data from 10,000 devices, default values are definitely not enough. 
So we have done changes in the code and updated values for LOCAL and REMOTE hosts and set them to the maximum possible values:

```java
poolingOptions
    .setMaxRequestsPerConnection(HostDistance.LOCAL, 32768)
    .setMaxRequestsPerConnection(HostDistance.REMOTE, 32768);
```

Test results after the applied changes are listed below.

![image](/images/reference/performance/single_node_with_fix_stats.png)
 
![image](/images/reference/performance/single_node_with_fix_rps.png) 

The results were much better, but far from even 1 million messages per minute. We have not seen pauses in CPU load during our tests on c4.xlarge anymore.
CPU load was high (80-95%) during the entire test. We have done couple thread dumps to verify that cassandra driver does not await available connections 
and indeed we have not seen this issue anymore.

### Step 3: Vertical scaling
 
We have decided to run the same tests on twice as more powerful node [c4.2xlarge](http://www.ec2instances.info/?selected=c4.2xlarge) with 8 vCPUs and 15Gb of RAM.
The performance increase was not linear and the CPU was still loaded (80-90%).

![image](/images/reference/performance/single_node_x2_with_fix_stats.png)

We have noticed a significant improvement in response time. After significant peak on the start of the test maximum response time was within 200ms and average response time was ~ 50ms. 

![image](/images/reference/performance/single_node_x2_with_fix_time.png)

Number of requests per second was around 10K

![image](/images/reference/performance/single_node_x2_with_fix_rps.png)

We have also executed test on [c4.4xlarge](http://www.ec2instances.info/?selected=c4.4xlarge) with 16 vCPUs and 30Gb of RAM but have not noticed significant improvements and decided to separate ThingsBoard server and move Cassandra to three nodes cluster.

### Step 4: Horizontal scaling

Our main goal was to identify how much MQTT messages we can handle using single ThingsBoard server running on [c4.2xlarge](http://www.ec2instances.info/?selected=c4.2xlarge).
We will cover horizontal scalability of ThingsBoard cluster in a separate article.
So, we decided to move Cassandra to three [c4.xlarge](http://www.ec2instances.info/?selected=c4.xlarge) separate instances with default configuration 
and launch gatling stress test tool from two separate [c4.xlarge](http://www.ec2instances.info/?selected=c4.xlarge) instances simultaneously 
to minimize the possible affect on latency and throughput by thirdparty.

![image](/images/reference/performance/performance-diagram-2.svg)

Test specification:

 - Number of devices: 20 000
 - Publish frequency per device: twice per second
 - Total load: 40 000 messages per second

The statistics of two simultaneous test runs launched on different client machines is listed below.
 
![image](/images/reference/performance/cluster_stats.png)
![image](/images/reference/performance/cluster_rps.png)
![image](/images/reference/performance/cluster_responses_ps.png)

Based on the data from two simultaneous test runs we have reached **30 000 published messages per second** which is equal to **1.8 million per minute**.

## How to repeat the tests

We have prepared several AWS AMIs for anyone who is interested in replication of these tests. See separate [documentation page](/docs/reference/performance-tests) with detailed instructions.

## Conclusion

This performance test demonstrates how a small ThingsBoard cluster, that costs approximately **1$ per hour**, can easily receive,
store and visualize more than **100 million messages** from your devices. 
We will continue our work on performance improvements and are going to publish performance results for the cluster of ThingsBoard servers in our next blog post.
We hope this article will be useful for people who are evaluating the platform and want to execute performance tests on their own.
We also hope that performance improvement steps will be useful for any engineers who use similar technologies. 

Please let us know your feedback and follow our project on [**Github**](https://github.com/thingsboard/thingsboard) or [**Twitter**](https://twitter.com/thingsboard).
