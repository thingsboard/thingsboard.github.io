---
layout: docwithnav
title: Thingsboard Data Collection Performance

---

* TOC
{:toc}

One of the key features of Thingsboard open-source IoT Platform is data collection and this is crucial feature that must work reliable under high load. 
In this article we are going to describe steps and improvements that we have made to ensure that single instance of Thingsboard server 
can constantly handle **10,000+** devices and **30,000+** MQTT publish messages per second, 
which in summary gives us around **2 million published messages per minute**.

## Architecture

Thingsboard performance is based on three main projects: 

 - [Netty](http://netty.io/) for high performance MQTT server/broker for IoT devices.
 - [Akka](http://akka.io/) for high performance actor system to coordinate messages between millions of devices.
 - [Cassandra](http://cassandra.apache.org/) for scalable high-performance NoSQL DB to store timeseries data from devices. 
 
We also use [Zookeeper](https://zookeeper.apache.org/) for coordination and [gRPC](http://www.grpc.io/) in cluster mode. See [platform architecture](/docs/reference/architecture) for more details.

## Data flow and test tools
 
IoT devices connect to Thingsboard server via MQTT and issue "publish" commands with JSON payload. 
Size of single publish message is approximately 100 bytes. 
MQTT is light-weight publish/subscribe messaging protocol and offers number of advantages over HTTP request/response protocol.
 
Thingsboard server process MQTT publish messages and store them to Cassandra asynchronously. 
Server may also push data to websocket subscriptions from the Web UI dashboards (if present).
We try to avoid any blocking operations and this is critical for overall system performance.  

We have used [Gatling](http://gatling.io/) load testing framework that is also based on Akka and Netty. 
Gatling is able to simulate 10K MQTT devices using 5-10% of a 2-core CPU. 
See our separate [article](/docs/reference/performance-tools) about how we improved unofficial Gatling MQTT plugin to support our use case.

## Performance improvement steps

### Asynchronous Cassandra Driver API 

The results of first performance tests on the modern 4-core laptop with SSD was quite poor. Platform was able to process only 200 messages per second.
The root cause and main performance bottle-neck was also on the surface. 
It appears that the processing was not 100% asynchronous and we were executing blocking API of Cassandra driver inside the [Telemetry plugin](/docs/user-guide/telemetry/) actor.
Quick refactoring of the plugin implementation resulted in more then 10X performance improvement and we received approximately 2500 published messages per second from 1000 devices.
We would like to recommend [this article](http://www.datastax.com/dev/blog/java-driver-async-queries) about async queries to Cassandra. 

### Connection pooling

We have decided to move to AWS EC2 instances to be able to share both results and tests we executed and 
executed tests on [c4.xlarge](http://www.ec2instances.info/?selected=c4.xlarge) instance (4 vCPUs and 7.5 Gb of RAM) with Cassandra and Thingsboard services co-located.

TODO: DIAGRAM

Test specification:

 - Amount of devices: 10 000
 - Publish frequency per device: once per second
 - Total load: 10 000 messages/second
 
First test results was obviously unacceptable:

![image](/images/reference/performance/single_node_no_fix_stats.png) 
 
The huge responce time above is caused by the fact that server simply not able to process 10 K messages per second and they are getting queued.

We have started investigation with monitoring memory and CPU load on the testing instance. 
Initially our guessing regarding poor performance was because of the heavy and fully load of the CPU or RAM memory. 
But in fact during load testing we have seeing that CPU in particular moments is idle for a couple of seconds. 
This 'pause' event is happening every 3-7 seconds, see chart below.
 
![image](/images/reference/performance/single_node_no_fix_rps.png) 

As next step we have decided to do the thread dump during these pauses. 
We were expecting to see threads that are blocked and this could give us some clue what is happening while pauses. 
So we have opened in separate console CPU load and in another we were doing thread dump while performing stress tests:

```bash

kill -3 THINGSBOARD_PID

```

We have identified that during pause there is always one thread in TIMED_WAITING state and the root cause for the is method awaitAvailableConnection in Cassandra driver:

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

As a result we have realized that default Connection Pool config for cassandra driver causes bad results in our use case.

[Official configuration](http://docs.datastax.com/en/developer/java-driver/2.1/manual/pooling/) for connection pool feature contains special option 
**‘Simultaneous requests per connection’** that allows you to tune concurrent request per single connection. 
We use cassandra driver protocol v3 and by default it uses next values: 
 
 - 1024 for LOCAL hosts
 - 256 for REMOTE hosts. 

Considering fact that we are actually pulling data from 10,000 devices, default values for sure are not enough. 
So we have done changes in code and update values for LOCAL and REMOTE hosts and set them to maximum possible values:

```java
poolingOptions
    .setMaxRequestsPerConnection(HostDistance.LOCAL, 32768)
    .setMaxRequestsPerConnection(HostDistance.REMOTE, 2000); 
```

Test results after the applied changes:

![image](/images/reference/performance/single_node_with_fix_stats.png)
 
![image](/images/reference/performance/single_node_with_fix_rps.png) 

The results were much better, but far from even 1 million messages per minute. We have not seen pauses in CPU load during our tests on c4.xlarge any more.
CPU load was high (80-95%) during entire test. We have done couple thread dumps during testing to verify that cassandra driver doesn’t await available connections 
and indeed we didn’t see that this issue has been happening anymore.

### Vertical scaling
 
We have decided to run same tests on twice more powerful node [c4.2xlarge](http://www.ec2instances.info/?selected=c4.2xlarge) with 8 vCPUs and 15Gb of RAM.
The performance increase was not linear and the CPU was still loaded (80-90%).

![image](/images/reference/performance/single_node_x2_with_fix_stats.png)

We may notice significant improvement in response time. After significant peak on the start of the test, max response time is within 200ms and avg response time is ~ 50ms. 

![image](/images/reference/performance/single_node_x2_with_fix_time.png)

Number of requests per second is arround 10K

![image](/images/reference/performance/single_node_x2_with_fix_rps.png)


We have also executed test on [c4.4xlarge](http://www.ec2instances.info/?selected=c4.4xlarge) with 16 vCPUs and 30Gb of RAM but have not noticed significant improvements and decided to try horizontal scaling of Cassandra cluster.

### Horizontal scaling

Our main goal was to identify how much MQTT messages we can handle using single Thingsboard node runing on [c4.2xlarge](http://www.ec2instances.info/?selected=c4.2xlarge).
We will cover horizontal scalability of Thingsboard cluster in a separate article. 
So, we decided to move Cassandra to three [c4.xlarge](http://www.ec2instances.info/?selected=c4.xlarge) separate instances with default configuration 
and launch gatling stress test tool from two separate [c4.xlarge](http://www.ec2instances.info/?selected=c4.xlarge) instances simultaneously 
to minimize possible affect on latency and throughput by thirdparty.

TODO: DIAGRAM

Test specification:

 - Amount of devices: 20 000
 - Publish frequency per device: twice per second
 - Total load: 40 000 messages/second

The stats of **two** simultaneous test runs launched on different client machines are listed below.
 
![image](/images/reference/performance/cluster_tenant1_stats.png)
![image](/images/reference/performance/cluster_tenant2_stats.png)

![image](/images/reference/performance/cluster_tenant1_rps.png)
![image](/images/reference/performance/cluster_tenant2_rps.png)

Based on the data from two simultaneous test runs we have reached 30400 published messages per second which is equal to **1.8 million per minute**.

## Conclusion

This performance test demonstrates how small Thingsboard cluster that cost approximately **1$ per hour** can easily receive,
store and visualize more than **100 million messages per hour** from your devices. 
We will continue our work on performance improvements and going to publish performance results for cluster of Thingsboard servers.   
We hope this article will be useful for people who are evaluating the platform and want to execute performance tests on their own.
We also hope that performance improvement steps will be useful for any engineers who use similar technologies. 

Please let us know your feedback and follow our project on [**Github**](https://github.com/thingsboard/thingsboard).
