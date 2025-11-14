
* TOC
{:toc}

Point-to-point (P2P) communication is one of the core MQTT patterns, enabling devices to exchange messages directly in a one-to-one manner.
This pattern is especially relevant for IoT scenarios requiring reliable, targeted messaging, like private messaging, command delivery, and other direct interaction use cases.
We aimed to evaluate how well the broker performs with [persistent DEVICE clients](/docs/{{docsPrefix}}mqtt-broker/architecture/#persistent-device-client) in a P2P communication scenario.
Persistent DEVICE clients are well-suited for P2P messaging because they use a shared Kafka topic, reducing the load on [Kafka](/docs/{{docsPrefix}}mqtt-broker/architecture/#kafka-topics), while leveraging [Redis](/docs/{{docsPrefix}}mqtt-broker/architecture/#redis)
to ensure reliable message delivery even if the client is temporarily offline. The tests involved scaling the infrastructure while progressively increasing
the load from 200,000 to **1,000,000 messages per second**, demonstrating TBMQ’s scalability and consistent performance.

![image](/images/mqtt-broker/reference/p2p-test/tbmq-perf-test-diagram.png)

## Test methodology

To assess the TBMQ's ability to handle point-to-point communication at scale, we conducted five tests to measure performance, efficiency, and latency, 
with a maximum throughput of 1M msg/sec. Throughput refers to the total number of messages per second, including both incoming and outgoing messages.
We deployed the performance test environment on an AWS EKS cluster and scaled it horizontally as the workload increased. 
This allowed us to evaluate how TBMQ handles growing demands while maintaining reliable performance.

Each test ran for 10 minutes, using an equal number of publishers and subscribers.
Both publishers and subscribers operated with **QoS 1**, ensuring reliable message delivery.
Subscribers were configured with `clean_session` set to `false`,
ensuring all messages could be retained during offline periods and delivered upon reconnection.
Publishers sent 62-byte messages to unique topics `"europe/ua/kyiv/$number"` once per second, 
while subscribers subscribed to corresponding topics `"europe/ua/kyiv/$number/+"`. 
Here, `$number` used as the unique identifier for each pair of publisher and subscriber.

### Test agent setup

The [test agent](/docs/{{docsPrefix}}mqtt-broker/reference/1m-throughput-p2p-performance-test/#how-to-repeat-the-1m-msgsec-throughput-test) 
was designed to simulate publishers and subscribers, ensuring a realistic evaluation of TBMQ's performance under growing message traffic. 
It consisted of a cluster of performance test pods (runners) and an orchestrator pod to supervise their operation. 
We have two types of runner pods: publishers and subscribers. In our tests, the number of publisher pods always matches the number of subscriber pods, 
and the number of instances used for publisher pods is always equal to the number used for subscriber pods. Please refer to the table below, 
which outlines the number of pods per instance and the number of instances deployed **for one runner type (either publishers or subscribers)** across different throughput levels.

| Throughput (msg/sec) | Pods/Instance | Number of EC2 instances |
|----------------------|---------------|-------------------------|
| 200k                 | 5             | 1                       |
| 400k                 | 5             | 1                       |
| 600k                 | 10            | 1                       |
| 800k                 | 5             | 2                       |
| 1M                   | 5             | 4                       |

The orchestrator pod was deployed on a separate EC2 instance, which also hosted additional components, including [Kafka Redpanda console](https://www.redpanda.com/redpanda-console-kafka-ui) and [Redis Insight](https://redis.io/docs/latest/operate/redisinsight/) pods, to facilitate monitoring and coordination. 
This flexible configuration enabled the test agent to adapt to rising traffic demands while addressing infrastructure constraints, such as port limitations.

### Infrastructure Overview

To provide a clear understanding of our test environment, this section details the hardware specifications of the services used and illustrates how the EKS cluster pods were distributed across the AWS EC2 instances.

**Hardware Specifications**

| Service Name              | TBMQ        | Kafka     | Redis     | AWS RDS (PostgreSQL) |
|---------------------------|-------------|-----------|-----------|----------------------|
| Instance Type             | c7a.4xlarge | c7a.large | c7a.large | db.m6i.large         |
| vCPU                      | 16          | 2         | 2         | 2                    |
| Memory (GiB)              | 32          | 4         | 4         | 8                    |
| Storage (GiB)             | 20          | 30        | 8         | 20                   |
| Network bandwidth (Gibps) | 12.5        | 12.5      | 12.5      | 12.5                 |

> **Note:** For all tests, we used only Redis master nodes without replicas to reduce costs during load testing. 
  This configuration allowed us to focus on achieving the target throughput without over-provisioning resources.

**EC2 Instances and Pod Distribution**

The following images provide a detailed overview of our AWS EC2 instances and how the EKS cluster pods were distributed across them in our test setup:

{% include images-gallery.html imageCollection="tbmq-p2p-test-aws-infrastructure" %}

> **Note:** Provided images illustrate the infrastructure setup used in the final test, achieving a throughput of 1M msg/sec.

Instance scaling was adjusted during each test to match workload demands, as described in the next section.

## Performance tests

TBMQ's performance was tested in phases, starting at 200k msg/sec and increasing by 200k each time, up to 1M msg/sec.
In each phase, we scaled the number of TBMQ brokers, Redis nodes. For 1M msg/sec test we also scaled the number of Kafka nodes to handle the corresponding workload.
The test configurations are summarized in the table below.

| Throughput (msg/sec) | Publishers/Subscribers | TBMQ Nodes | Redis Nodes | Kafka Nodes |
|----------------------|------------------------|------------|-------------|-------------|
| 200k                 | 100k                   | 1          | 3           | 3           |
| 400k                 | 200k                   | 2          | 5           | 3           |
| 600k                 | 300k                   | 3          | 7           | 3           |
| 800k                 | 400k                   | 4          | 9           | 3           |
| 1M                   | 500k                   | 5          | 11          | 5           |

**Key takeaways from the tests include:**

 - Scalability: TBMQ demonstrated linear scalability. By incrementally adding TBMQ nodes, Redis nodes, and Kafka nodes at higher workloads, we maintained reliable performance as the message throughput increased from 200k to 1M msg/sec.
 - Efficient Resource Utilization: CPU utilization on TBMQ nodes remained consistently around ~90% across all test phases, indicating that the system effectively used available resources without overconsumption.
 - Latency Management: The observed latency across all tests remained **within two-digit bounds**. This was predictable given the **QoS 1** level chosen for our test, applied to both publishers and **persistent** subscribers. 
   We also tracked the average acknowledgment latency for publishers, which stayed within **single-digit bounds** across all test phases.
 - High Performance: TBMQ’s one-to-one communication pattern showed excellent efficiency, processing about **8900 msg/s per CPU core**. 
   We calculated this by dividing the total throughput by the total number of CPU cores used in the setup.

Additionally, the following table and screenshots provide a comprehensive summary of the key elements and results of the final 1M msg/sec test.

| QoS | Msg latency Avg | Pub Ack Avg | TBMQ CPU Avg | Payload(bytes) |
|-----|-----------------|-------------|--------------|----------------|
| 1   | ~75ms           | ~8ms        | 91%          | 62             |

Where,

 - TBMQ CPU Avg: The average CPU utilization across all TBMQ nodes.
 - Msg Latency Avg: The average duration from when a message is transmitted by the publisher to when it is received by the subscriber.
 - Pub Ack Avg: The average time elapsed between the message transmission by the publisher and the reception of the PUBACK acknowledgment.

{% include images-gallery.html imageCollection="tbmq-p2p-test-monitoring" %}

These results demonstrate TBMQ's ability to provide reliable and scalable point-to-point messaging with excellent performance.
Our focus remains on further optimization to enhance performance without compromising reliability. 
For more details on potential improvements, see the [Future optimizations](/docs/{{docsPrefix}}mqtt-broker/reference/1m-throughput-p2p-performance-test/#future-optimizations) section.

## How to repeat the 1M Msg/sec throughput test

We recommend referring to our [installation guide](/docs/{{docsPrefix}}mqtt-broker/install/cluster/aws-cluster-setup/), which provides step-by-step instructions on how to deploy TBMQ on AWS.
In addition, you may explore the [branch](https://github.com/thingsboard/tbmq/tree/p2p-perf-test/k8s/aws#readme) containing the scripts and parameters used for running TBMQ during this performance test,
enabling you to gain deeper insights into our configuration. For the practical execution of performance tests, we offer a dedicated [performance testing tool](https://github.com/thingsboard/tb-mqtt-perf-tests/tree/p2p-perf-test)
capable of generating MQTT clients and simulating the desired message load. Especially for the P2P scenario testing, we improved our testing tool to have the ability to autogenerate the configuration for publishers and subscribers instead of loading it from a JSON configuration file.
Please refer to the [README.md](https://github.com/thingsboard/tb-mqtt-perf-tests/tree/p2p-perf-test/k8s#readme) for more details about P2P testing configuration.

## Migrating from Jedis to Lettuce: Overcoming a Key Testing Challenge

One of the most significant challenges during performance testing was overcoming the limitations of the [Jedis](https://github.com/redis/jedis) library, whose synchronous nature became a bottleneck in high-throughput scenarios.
With Jedis, each Redis command is sent and processed sequentially, meaning the system has to wait for each command to complete before issuing the next one.
This approach significantly limited Redis’s potential to handle concurrent operations and fully utilize available system resources.

To address this, we [migrated](https://github.com/thingsboard/tbmq/pull/174) to the [Lettuce](https://github.com/redis/lettuce) client, which leverages [Netty](https://github.com/netty/netty) under the hood for efficient asynchronous communication.
Unlike Jedis, Lettuce allows multiple commands to be sent in parallel without waiting for their completion, enabling non-blocking operations and better resource utilization.
This architecture made it possible to fully exploit Redis’s performance capabilities, especially under high message loads. Migration to Lettuce, however, was not trivial. 
It required rewriting a substantial portion of the codebase to transition from synchronous to asynchronous workflows. This included restructuring how Redis commands were issued and handled. 
Careful planning and rigorous testing ensured that these changes maintained system reliability and correctness.

## Future optimizations

Currently, we use [Lua scripts](https://redis.io/docs/latest/develop/interact/programmability/eval-intro/) in Redis to process messages for DEVICE persistent clients.
These scripts ensure atomic operations for saving, updating, and deleting messages, which is crucial for maintaining data consistency.
However, we execute one script per client to comply with Redis Cluster constraints, where all keys accessed in a script must reside in the same hash slot.

To optimize performance, we are considering adjusting the hashing mechanism for client IDs to intentionally group more clients into the same Redis hash slots.
By doing so, we aim to increase the likelihood of batching operations into a single script execution per hash slot, allowing the Lua scripts to handle multiple clients simultaneously.
This approach could reduce overhead and improve Redis efficiency, while still adhering to the cluster’s constraints.

## Conclusion

Across all five tests, TBMQ demonstrated linear scalability and efficient resource utilization. As the workload increased from 200,000 to 1,000,000 msg/sec, 
the system ensured reliable message delivery and maintained sufficiently low latency, remaining within efficient bounds for point-to-point messaging scenarios.

These capabilities make TBMQ a dependable solution for IoT use cases requiring high-performance one-to-one communication with guaranteed delivery. 
While we plan to explore further optimizations to enhance performance, TBMQ has proven its suitability for high-throughput scenarios.

We value your feedback and encourage you to stay connected with our project on [GitHub](https://github.com/thingsboard/tbmq) and [Twitter](https://twitter.com/thingsboard).
