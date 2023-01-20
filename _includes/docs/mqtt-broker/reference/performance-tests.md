
* TOC
{:toc}

One of the key features of the MQTT broker is to receive messages published by clients, 
filter the messages by topic, and distribute them to subscribers, and this is a crucial process that must work reliably under high load. 
In this article, we are going to describe steps that we have made to ensure that ThingsBoard MQTT Broker can constantly handle around **1M** connected clients 
and process **200k MQTT publish messages per second** as inbound and outbound traffic.

### Test methodology

We have chosen Amazon Web Services (AWS) as the target cloud provider to conduct the performance test.
We have deployed the ThingsBoard (TB) MQTT broker cluster of 5 nodes in [EKS](https://aws.amazon.com/eks/) 
cluster (on a single EC2 instance, or node, 1 broker pod is deployed) with the connection to [RDS](https://aws.amazon.com/rds/) and [MSK](https://aws.amazon.com/msk/). 
See the next page for more information about the ThingsBoard MQTT broker [architecture](/docs/mqtt-broker/architecture/).
RDS has been deployed as a single instance and MSK has been deployed containing 3 brokers, each located in a separate Availability Zone (AZ).

The [test agent](#how-to-repeat-the-tests) provisions and connects a configurable number of MQTT clients that constantly publish time-series data over MQTT to specific topics.
Additionally, it provisions a configurable number of MQTT clients that subscribe by topic filters to receive published messages.

Various IoT device profiles differ based on the number of messages they produce and the size of each message.
We have emulated smart tracker devices that send messages with five data points once per second. The size of a single "publish" message is approximately **114 bytes**.
Below you can see the emulated message structure with some differences from a real test case since the test agent generates the payload values.
```json
{ "lat": 40.761894, "long": -73.970455, "speed": 55.5, "fuel": 92, "batLvl": 81 }
```

Publishers are split into 20 groups, each sending data to their own topic pattern (e.g. `usa/ny/manh/west/${id}`, where id - publisher client identifier). 
In total, publishers are sending data to 200k different topics.
Accordingly, 20 subscriber groups are configured with 1 `APPLICATION` subscriber in each. The topic filter corresponds to the topic pattern of the publisher group resulting 
in 10k topics per subscriber or 10k messages received per second.

In this case, the ThingsBoard MQTT broker cluster constantly maintains 1M connections and processes 200k messages per second or 8,640M messages overall during 12 hours of running the test.
This causes ~1TB of data to the initial Kafka topic (`publish_msg`).
Each subscriber receives 432M messages overall and has its special topic in Kafka where those messages are stored.
Configuration of 20 APPLICATION subscribers means only Kafka is used to collect data and Postgres is not since 
`DEVICE` persistent clients are not configured.

**Tip**: to plan and manage the Kafka disk space, please, adjust the [size retention policy](https://kafka.apache.org/documentation/#brokerconfigs_log.retention.bytes) 
and [period retention policy](https://www.baeldung.com/kafka-message-retention). You can find all the needed configurations for every topic in the 
[configuration](/docs/mqtt-broker/install/config/) document.

Each MQTT client uses a separate connection to the broker.

### Hardware used

| Service Name             | **TB MQTT Broker** | **AWS RDS (PostgreSQL)** | **AWS MSK**    |
|--------------------------|--------------------|--------------------------|----------------|
| Instance Type            | m6a.2xlarge        | db.m6i.large             | kafka.m5.large |
| Memory (GiB)             | 32                 | 8                        | 8              |
| vCPU                     | 8                  | 2                        | 2              |
| Storage (GiB)            | 80                 | 100                      | 1500           |
| Network bandwidth (Gbps) | 12.5               | 10                       | 10             |

[comment]: <> ( To format table as markdown, please use the online table generator https://www.tablesgenerator.com/markdown_tables )

### Test summary

1M clients were connected to the cluster within less than 1 minute, resulting in approximately 20k connected clients per second.
The test was running for 12 hours to ensure there is no resource leakage or performance degradation over time.
200k messages published per second result in 8,640M messages overall or ~1TB incoming/outgoing throughput.
MQTT Quality of Service (QoS) level of **1** (`AT_LEAST_ONCE`) was used for publishers and subscribers.

Let's review a simple table with the main points of the test.

| Devices | Msgs/sec | Broker CPU | Broker Memory | Kafka CPU | Kafka  Network RX/TX packets | PostgreSQL  CPU | PostgreSQL Read/Write IOPS |
|---------|----------|------------|---------------|-----------|------------------------------|-----------------|----------------------------|
| 1M      | 200k     | 74.6%      | 10.3GB        | 27%       | 3.5k                         | 2%              | less than 1/ less than 3   |

Below you can see the stats from the Kafka topics (i.e. `publish_msg` is the main Kafka topic where all the messages are stored, and several examples of application 
topics for `APPLICATION` subscribers that receive the data).

{% include images-gallery.html imageCollection="broker-topics-monitoring" %}

Note, based on the above info we can see that 100% of messages were processed successfully. 
`publish_msg` topic has less storage size than mentioned before due to the fact that producers are sending compressed data and Kafka brokers
retain the original compression codec set by the producers (`compression.type` property). Application topics do not preserve all the messages due to the retention policy configured.

What about the message processing latency? Below you can find the table with the most important stats.

| Msg latency Avg | Msg latency 95th | Pub Ack Avg | Pub Ack 95th |
|-----------------|------------------|-------------|--------------|
| 250 ms          | 387 ms           | 92 ms       | 186 ms       |

where "Msg latency Avg" - is the average time passed from the message being sent from the publisher to be received by the subscriber, 
"Pub Ack Avg" - is the average time elapsed from the message being sent from the publisher to the time `PUBACK` is received by the one, 
and 95th is the 95th percentile of the respectful latency statistics.

**Lessons learned**

ThingsBoard MQTT Broker cluster in the current configuration contains the capacity to process an even bigger load. Kafka provides reliable and highly-available processing of messages.
PostgreSQL is almost not loaded in such a case since it processed a few operations per second due to the nature of the test and usage of `APPLICATION` subscribers.
There is 0 communication between the TB MQTT broker nodes in this test meaning we can scale horizontally more and receive nearly linear growth of performance.
Thus, we expect 25 TB MQTT Brokers to be enough to process 1M messages per second.
The QoS level of 0 would give an even higher message rate, however, we wanted to demonstrate the processing capabilities with a more generic setup. 
The QoS level of 1 is the most popular configuration in general, giving both speed and reliability of message delivery.
ThingsBoard MQTT Broker is a great choice for both low and high message rates, different processing use cases (e.g. fan-in, fan-out), and either small or big deployments 
since it can easily be scaled vertically and horizontally.

### TCO calculations

Herewith you can find total cost of ownership (TCO) calculations for ThingsBoard MQTT Broker deployed using AWS.

**Important notice**: all calculations and pricing below are approximate and are listed as an example.
Please consult your cloud provider in order to get your accurate pricing.

AWS EKS cluster in us-east-1 region. Approx. price is ~73 USD/month.

AWS Instance Type: 5 x m6a.2xlarge instances (8 vCPUs AMD EPYC 3rd, 32 GiB, EBS GP3 80GiB) to host 5 ThingsBoard MQTT brokers. Approx. price is ~1300 USD/month.

AWS RDS: db.m6i.large (2 vCPU, 8 GiB), 100GiB storage. Approx. price is ~142 USD/month.

AWS MSK: 3 brokers (1 broker per AZ), kafka.m5.large (2 vCPU, 8 GiB), 1,500GiB storage. Approx. price is ~620 USD/month.

**TCO**: ~2,135 USD per month or 0.002 USD per month per device.

### Running tests

**Load configuration:**

* ~1M connected MQTT clients (smart tracker devices);
* 20 subscribe MQTT clients (specific applications that consume the data - e.g. for analysis/graphs);
* 200k msg/sec over MQTT, each MQTT message contains 5 data points, approx. message size is 114 bytes;
* PostgreSQL database to store MQTT client credentials, client session states;
* Kafka queue to persist messages.

The above message rate and message size, as seen previously, cause **~82GB** of data per hour in the initial Kafka topic, and **4GB** of data per hour per subscriber topic.

However, the data is not needed to be stored for the long term for visualization, analysis purposes, or others. MQTT broker is required to receive messages, distribute them 
among the subscribers and optionally store them for a short period of time for offline clients. That's why we recommend configuring a reasonable amount of storage size 
based on your requirements. **Note**, as a reminder, do not forget to configure the size retention policy and period retention policy for Kafka topics.

The test agent represents the cluster of performance test nodes (runners) and an orchestrator that rules the runners.
We have deployed 40 small Kubernetes pods to serve the runner's purpose and 1 pod to be the orchestrator.

The topic prefix is constructed to simulate smart trackers collecting data in NY city, USA, for all
5 boroughs (Brooklyn, Manhattan, etc.) divided by 4 areas (west, east, north, south).

With the JSON configuration, we are able to specify the publishers and subscribers separately, gathered into groups for more flexible control.
Let's review the publishers' and subscribers' configurations.

Publisher group:
```json
{
    "id":1,
    "publishers":10000,
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

**Test run**

The test is starting with the clients connecting to the cluster, `APPLICATION` clients subscribing to the appropriate topics.
All the 1M clients are distributed among 40 performance test nodes, connecting those clients to the broker in parallel.

After approximately 1 minute all the clients are connected successfully and each performance test node is notifying the orchestrator about its readiness.

We can see on the ThingsBoard MQTT broker UI the connected sessions.

![image](/images/mqtt-broker/reference/1m-mqtt-clients.png)

Once all the runners are ready, the orchestrator notifies the cluster is ready and the message publishing is started.

```text
09:12:35.407 [main] INFO  o.t.m.b.tests.MqttPerformanceTest - Start msg publishing.
```

After some time of processing, we can review the monitoring tools (JMX, [Kafka UI](https://github.com/redpanda-data/console)) 
used for the test and AWS CloudWatch for more details. 
We can see pretty good results. Published and consumed messages are processed without the delay. 
Application processors are delivering the messages to the subscribers fast enough to not experience the lag. 
All 1,000,020 clients are stably connected to the broker.

AWS instance (where TB MQTT Brokers are deployed) monitoring shows about 70% average CPU load. 
AWS RDS resources are almost not used due to the absence of DEVICE persistent clients and few requests per second processed to update sessions. 
AWS MSK monitoring shows Kafka has plenty of resources left to receive even more load.

{% include images-gallery.html imageCollection="broker-tests-aws-monitoring" %}

Finally, let’s check the JVM state on several ThingBoard MQTT brokers. For that, we need to forward the JMX port to connect and monitor Java applications.

```bash
kubectl port-forward tb-broker-0 9999:9999
```
{: .copy-code}

Open [VisualVM](https://visualvm.github.io/), add the local applications, open it and let the data be gathered for a few minutes.
Here is the JMX monitoring for ThingsBoard MQTT brokers. The broker nodes are stable.

{% include images-gallery.html imageCollection="broker-tests-jmx-monitoring" %}

### How to repeat the tests

Check out the next [installation guide](/docs/mqtt-broker/install/cluster/aws-cluster-setup/) on how to deploy ThingsBoard MQTT Broker on AWS.
Additionally, check out the [folder](https://github.com/thingsboard/thingsboard-mqtt-broker/tree/perf-tests/k8s/aws) with scripts and parameters of the broker used during the run.
And finally, the [performance tests tool](https://github.com/thingsboard/tb-mqtt-perf-tests) generates MQTT clients and produces the load.
Performance tests [configuration file](https://github.com/thingsboard/tb-mqtt-perf-tests/blob/master/k8s/mqtt-broker-test-run-config.yml#L59) can be reviewed and adjusted 
to simulate the desired load.

### Conclusion

This performance test demonstrates how a ThingsBoard MQTT Broker cluster can receive, process and distribute approximately 200k messages per second from your devices. 
We will continue our work on performance improvements and are going to publish updated performance results for the cluster of ThingsBoard MQTT Broker in the near future. 
We hope this article will be useful for people who are evaluating the platform and want to execute performance tests on their own.

Please let us know your feedback and follow our project on [GitHub](https://github.com/thingsboard/thingsboard-mqtt-broker) or [Twitter](https://twitter.com/thingsboard).