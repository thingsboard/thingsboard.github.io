
* TOC
{:toc}

One of the key features of the MQTT broker is to receive messages published by clients, 
filter the messages by topic, and distribute them to subscribers, and this is a crucial process that must work reliably under high load. 
In this article, we are going to describe steps that we have made to ensure that ThingsBoard MQTT Broker can constantly handle **1M** connected clients 
and around **200k MQTT publish messages per second**.

Herewith you can find total cost of ownership (TCO) calculations for ThingsBoard MQTT Broker deployed using AWS.

**Important notice**: all calculations and pricing below are approximate and are listed as an example. 
Please consult your cloud provider in order to get your accurate pricing.


### Hardware

| Service Name             | **TB MQTT Broker** | **AWS RDS (PostgreSQL)** | **AWS MSK**    |
|--------------------------|--------------------|--------------------------|----------------|
| Instance Type            | m6a.2xlarge        | db.m6i.large             | kafka.m5.large |
| Memory (GiB)             | 32                 | 8                        | 8              |
| vCPU                     | 8                  | 2                        | 2              |
| Storage (GiB)            | 80                 | 100                      | 1500           |
| Network bandwidth (Gbps) | 12.5               | 10                       | 10             |

### Test methodology

We have deployed the ThingsBoard MQTT broker cluster of 6 pods in [EKS](https://aws.amazon.com/eks/) cluster with the connection to [RDS](https://aws.amazon.com/rds/) 
and [MSK](https://aws.amazon.com/msk/). See the next page for more information about the ThingsBoard MQTT broker [architecture](/docs/mqtt-broker/architecture/).

The [test agent](#how-to-repeat-the-tests) provisions and connects a configurable number of MQTT clients that constantly publish time-series data over MQTT to specific topics.
Additionally, it provisions a configurable number of MQTT clients that subscribe by topic filters to receive published messages. The test agent represents the cluster of 
performance test nodes (runners) and an orchestrator that rules the runners.

Various IoT device profiles differ based on the number of messages they produce and the size of each message.
We have emulated smart tracker devices that send messages with eight data points once per minute. The size of a single "publish" message is approximately 400 bytes.
Below you can see the emulated message structure with some differences from a real test case since the test agent generates the payload values.
```json
{ "lat": 40.761894, "long": -73.970455, "speed": 55.5, "fuel": 92, "batLvl": 81 }
```

With the JSON configuration, we are able to specify the publishers and subscribers separately, gathered into groups for more flexible control.
Let's review the publishers' and subscribers' configurations.

Publisher group:
```json
{
    "id":1,
    "publishers":50000,
    "topicPrefix":"usa/ny/brkl/east/",
    "clientIdPrefix":null
}
```
where 
* _id_ - identifier of the publisher group;
* _publishers_ - number of publisher clients in the group;
* _topicPrefix_ - respectively topic prefix to which publish messages;
* _clientIdPrefix_ - client id prefix of publishers.

Subscriber group:
```json
{
    "id":1,
    "subscribers":1,
    "topicFilter":"usa/ny/brkl/east/+",
    "expectedPublisherGroups":[1],
    "persistentSessionInfo":{
        "clientType":"APPLICATION"
    },
    "clientIdPrefix":null
}
```
where
* _id_ - identifier of the subscriber group;
* _subscribers_ - number of subscriber clients in the group;
* _topicFilter_ - respectively topic filter to subscribe to;
* _expectedPublisherGroups_ - list of ids of publisher groups whose messages current subscribers will receive (parameter is used for debugging and statistics purposes - e.g. to calculate the total expected received messages);
* _persistentSessionInfo_ - persistent info object containing [client type](/docs/mqtt-broker/user-guide/mqtt-client-type/);
* _clientIdPrefix_ - client id prefix of subscribers.

1M publishers are split into 20 groups, each containing 50,000 clients. The topic prefix is constructed to simulate smart trackers collecting data in NY city, USA, for all 
5 boroughs (Brooklyn, Manhattan, etc.) divided by 4 areas (west, east, north, south).
Accordingly, 20 subscriber groups are configured with 1 `APPLICATION` subscriber in each. The topic filter corresponds to the topic prefix of the publisher group.

In this case, the ThingsBoard MQTT broker cluster constantly maintains 1M connections and processes 1M messages per minute or 16,667 messages per second.
Configuration of 20 APPLICATION subscribers means only Kafka is used to collect data and Postgres is not since `DEVICE` persistent clients 
are not configured.

This causes 1M write requests per minute, resulting in ~20GB of data per hour to the initial Kafka topic (`publish_msg`). 
Each APPLICATION subscriber has its special topic in Kafka where all its related (by subscription) messages are stored. 
APPLICATION subscriber receives data from 50,000 publishers resulting in 3M messages or ~1GB of data per hour.

**Tip**: to plan and manage the Kafka disk space, please, adjust the [size retention policy](https://kafka.apache.org/documentation/#brokerconfigs_log.retention.bytes) 
and [period retention policy](https://www.baeldung.com/kafka-message-retention). You can find all the needed configurations for every topic in the 
[configuration](/docs/mqtt-broker/install/config/) document.

Each MQTT client uses a separate connection to the broker.

Below we can see the performance tests configuration before the test is actually started. Main points: 1M publishers, 20 APPLICATION subscribers, 
60M total published messages, and 60M expected total received messages.

```text
09:11:28.239 [main] INFO  o.t.m.b.tests.MqttPerformanceTest - Test run info: publishers - 1000000, non-persistent subscribers - 0, regular persistent subscribers - 0, 
'APPLICATION' persistent subscribers - 20, dummy client connections - 0, publisher QoS - AT_LEAST_ONCE, subscriber QoS - AT_LEAST_ONCE, max messages per minute - 1, 
run time - 3600s, total published messages - 60000000, expected total received messages - 60000000, msg bytes size - 402
```

### Test summary

Let's review a simple table with the main points of the test.

| Devices | Messages/min | Instance Type                 | CPU Usage | Kafka CPU | Kafka  Network RX/TX packets | PostgreSQL  CPU | PostgreSQL  Write IOPS |
|---------|--------------|-------------------------------|-----------|-----------|------------------------------|-----------------|------------------------|
| 1M      | 1M           | m6a.2xlarge: 8 vCPU, 32GB RAM | 32%       | 12%       | 1k                           | 3%              | 5                      |

[comment]: <> ( To format table as markdown, please use the online table generator https://www.tablesgenerator.com/markdown_tables )

Statistics of several performance test nodes:

```text
12:14:23.636 [main] INFO  o.t.m.b.tests.MqttPerformanceTest - Latency stats: median - 110.0, avg - 138.57021133316206, max - 5405.0, min - 37.0, 95th - 161.0, 
lost messages - 0, duplicated messages - 0, total received messages - 3000000, publish sent messages - 1500000, publish sent latency median - 0.0, 
publish sent latency max - 31.0, publish acknowledged messages - 1500000, publish acknowledged latency median - 16.0, publish acknowledged latency max - 2849.0, 
msg processing latency median - 0.0.
```

```text
12:14:23.426 [main] INFO  o.t.m.b.tests.MqttPerformanceTest - Latency stats: median - 109.0, avg - 350.9275383332272, max - 6013.0, min - 37.0, 95th - 2382.0, 
lost messages - 0, duplicated messages - 0, total received messages - 3000000, publish sent messages - 1500000, publish sent latency median - 0.0, 
publish sent latency max - 39.0, publish acknowledged messages - 1500000, publish acknowledged latency median - 16.0, publish acknowledged latency max - 2963.0, 
msg processing latency median - 0.0.
```

Note, based on the above info we can see that no messages were lost and no duplicated messages are present. 
Similar output can be seen for all other performance test nodes.

### Running tests

**Load configuration:**

* 1 000 000 publish MQTT clients (smart tracker devices);
* 20 subscribe MQTT clients (specific applications that consume the data - e.g. for analysis/graphs);
* 1 000 000 msg/min over MQTT, each MQTT message contains 8 data points, approx. message size is 400 bytes;
* PostgreSQL database to store MQTT client credentials, client session states;
* Kafka queue to persist messages.

The above message rate and message size, as seen previously, cause **20GB** of data per hour in the initial Kafka topic, and **1GB** of data per hour per subscriber topic.

![image](/images/mqtt-broker/reference/app-subs-topic.png)

This gives us **40GB of data per hour** or **~1TB of data daily**. 

However, the data is not needed to be stored for the long term for visualization, analysis purposes, or others. MQTT broker is required to receive messages, distribute them 
among the subscribers and optionally store them for a short period of time for offline clients. That's why we recommend configuring a reasonable amount of storage size 
based on your requirements. **Note**, as a reminder, do not forget to configure the size retention policy and period retention policy for Kafka topics.
Let's assume that 1TB of storage per broker is enough for our case.

**Total cost of ownership example:**

AWS EKS cluster in us-east-1 region. Approx. price is ~73 USD/month.

AWS Instance Type: 3 x m6a.2xlarge instances (8 vCPUs AMD EPYC 3rd, 32 GiB, EBS GP2 80GiB) is sufficient to host 6 ThingsBoard MQTT brokers. Approx. price is ~780 USD/month.

AWS RDS: db.m5.large (2 vCPU, 8 GiB), 100GiB storage. Approx. price is ~142 USD/month.

AWS MSK: 3 brokers (1 broker per AZ), kafka.m5.large (2 vCPU, 8 GiB), 3,000GiB storage. Approx. price is ~760 USD/month.

TCO: ~1,755 USD per month or 0.0018 USD per month per device.

**Test run**

The test is starting with the clients connecting to the cluster, `APPLICATION` clients subscribing to the appropriate topics.
All the 1M clients are distributed among 40 performance test nodes, connecting those clients to the broker in parallel.

Let's review the logs of one of the performance test (runner) nodes.

```text
09:11:32.471 [main] INFO  o.t.m.b.s.ClusterProcessServiceImpl - Started processing 25000 with PUBLISHERS_CONNECT task.
09:11:33.155 [main] INFO  o.t.m.b.s.ClusterProcessServiceImpl - [PUBLISHERS_CONNECT] The result of await processing is: true
09:11:33.156 [main] DEBUG o.t.m.b.s.ClusterProcessServiceImpl - Processing 250 PUBLISHERS_CONNECT took 684 ms.
```

Waiting until all the clients are connected.

```text
09:12:31.192 [main] INFO  o.t.m.b.s.ClusterProcessServiceImpl - Finished processing PUBLISHERS_CONNECT task.
```

After approximately 1 minute all the clients are connected successfully and each performance test node is notifying the orchestrator about its readiness.

```text
09:12:31.192 [main] INFO  o.t.m.b.s.o.TestRestServiceImpl - Notifying orchestrator about node readiness
```

We can see on the ThingsBoard MQTT broker UI the connected sessions.

![image](/images/mqtt-broker/reference/1m-mqtt-clients.png)

Once all the runners are ready, the orchestrator notifies the cluster is ready and the message publishing is started.

```text
09:12:35.407 [main] INFO  o.t.m.b.s.o.ClusterSynchronizerImpl - Cluster is ready.
09:12:35.407 [main] INFO  o.t.m.b.tests.MqttPerformanceTest - Start msg publishing.
```

After some time of processing, we can review the logs of the broker nodes. We can see pretty good results. Published and consumed messages are processed without
the delay. Application processors are delivering the messages to the subscribers fast enough to not experience the lag. 
All 1,000,020 clients are stably connected to the broker.

![image](/images/mqtt-broker/reference/broker-logs.png)

AWS instance monitoring shows about 20% average CPU load. AWS RDS resources are almost not used due to the absence of DEVICE persistent clients. 
AWS MSK monitoring shows Kafka has plenty of resources left to receive even more load.

{% include images-gallery.html imageCollection="broker-tests-aws-monitoring" %}

Finally, let’s check the JVM state on each ThingBoard MQTT broker. For that, we need to forward the JMX port to connect and monitor Java applications.

```bash
kubectl port-forward tb-broker-0 9999:9999
```
{: .copy-code}

Open [VisualVM](https://visualvm.github.io/), add the local applications, open it and let the data be gathered for a few minutes.
Here is the JMX monitoring for ThingsBoard MQTT brokers. The broker nodes are stable.

{% include images-gallery.html imageCollection="broker-tests-jmx-monitoring" %}

Finally, let's review Kafka processing, stats, and lag with a fancy [Kafka UI](https://github.com/redpanda-data/console).

We can see how data is coming to the `publish_msg` topic and specific APPLICATION client topic 
`mqtt_broker_application_client_test_sub_client_5_0`. The size of the topic is constantly increasing as well as the topic offset is incrementing. 
Application consumer groups are processing messages in the real time.

![image](/images/mqtt-broker/reference/broker-kafka-ui.gif)

**Note**, UI differs from the link above due to Redpanda acquiring CloudHut, makers of Kowl in the first half of 2022.

### How to repeat the tests

Check out the next [installation guide](/docs/mqtt-broker/install/cluster/aws-cluster-setup/) on how to deploy ThingsBoard MQTT Broker on AWS.
Additionally, check out the [folder](https://github.com/thingsboard/thingsboard-mqtt-broker/tree/perf-tests/k8s/aws) with scripts and parameters of the broker used during the run.
And finally, the [performance tests tool](https://github.com/thingsboard/tb-mqtt-perf-tests) that generates MQTT clients and produces the load.
Performance tests [configuration file](https://github.com/thingsboard/tb-mqtt-perf-tests/blob/master/k8s/mqtt-broker-test-run-config.yml#L59) can be reviewed and adjusted 
to simulate the desired load.

### Conclusion

This performance test demonstrates how a ThingsBoard MQTT Broker cluster can receive, process and distribute approximately 200k messages per second from your devices. 
We will continue our work on performance improvements and are going to publish updated performance results for the cluster of ThingsBoard MQTT Broker in the near future. 
We hope this article will be useful for people who are evaluating the platform and want to execute performance tests on their own.

Please let us know your feedback and follow our project on [GitHub](https://github.com/thingsboard/thingsboard-mqtt-broker) or [Twitter](https://twitter.com/thingsboard).