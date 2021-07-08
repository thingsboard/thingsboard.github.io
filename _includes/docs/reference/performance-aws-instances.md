* TOC
{:toc}

One of the key features of ThingsBoard open-source IoT Platform is data collection and this is a crucial feature that must work reliably under a heavy long-running messages upload.

In this article, we are going to execute long-running data collection tests of ThingsBoard on different AWS instances.
We are going to check how many messages per second each instance can handle and will provide the CPU and memory load stats.

Considering test results and your project requirements you will be able to identify what type of the instance is the most suitable for your project.


# Data flow and test tools

IoT devices connect to ThingsBoard server via MQTT or HTTP Device API and send sample test data (*single telemetry of long type*) to the platform. 
ThingsBoard server processes MQTT or HTTP messages and stores them to Cassandra/PostgreSQL asynchronously. 

As a test tool we have used updated version of [Performance Test Project](https://github.com/thingsboard/performance-tests) that is able to send messages over MQTT/HTTP Device API in an asynchronous way quite efficiently. 

Considering microservice architecture of the ThingsBoard platform and to measure performance in an accurate way, we have created an additional Rule Chain Node that is able to calculate a number of messages that this Node has been received per 1 second (this is a configurable parameter that could be changed) and stores this value as telemetry on a tenant level.

This additional Rule Chain Node is located after the ‘Save telemetry’ Node of the Root Chain and calculates how many messages ThingsBoard instance processed during the performance testing. This data is stored on a tenant level as telemetry with predefined key prefix. 

![image](/images/reference/performance-aws-instances/modified-rule-chain.png)

Performance Test Tool, after test completion, take this telemetry value from the platform and provides result in the console of the test:

```bash
12:20:03.772 [main] INFO  o.t.t.s.stats.StatisticsCollector - ============ Node [692dc903cf52] AVG is 500.0 per 1 second ============
12:20:03.772 [main] INFO  o.t.t.s.stats.StatisticsCollector - ============ Total AVG is 500.0 per 1 second ============
```

This telemetry value could be shown as well as general telemetry on the ThingsBoard Dashboard. 

**NOTE:** If you have multiple ThingsBoard nodes in the cluster, additional Rule Chain Node will save statistics under different telemetry keys on tenant level, but Performance Test Tool in the result will aggregate these values into a single result.

# How to repeat the tests

Please use documentation of the [Performance Test Project](https://github.com/thingsboard/performance-tests/) for more details.

# Notation

1. t2 instances are used [burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html) please read the official documentation. We recommend don't count on it. btw you can get more messages on the peak.

2. To support ~20000 data points per seconds correct volume must be provisioned - with enough [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html) limits. Please read [official documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) for understand how it work. For the PostgreSQL database, 20000 data points per seconds are equal to ~750 IOPS. From time to time you can use [credit balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) to get more data points.

# Performance by AWS Instance Type

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [t2.medium](#t2medium)  | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT | 10000  | **~3000/sec (15000/sec*)** |
| [c5.large](#c5large)  | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT | 20000  | **~22500/sec** |
| [c5.large](#c5large)  | 2 vCPUs, 4GB | PostgreSQL | Kafka | MQTT | 20000  | **~22500/sec** |
| [m5.large](#m5large) | 4 vCPUs, 8GB | PostgreSQL | In Memory | MQTT |  20000  | **~23000/sec** |
| [m5.large](#m5large) | 4 vCPUs, 8GB | Cassandra | In memory | MQTT | 20000  | **~10000/sec**|
| [m5.xlarge](#m5xlarge)  | 4 vCPUs, 16GB | PostgreSQL | Kafka | MQTT | 25000  | **~30000/sec** |

# t2.medium

In this test, we will show that Thingsboard consistently receives about 3000 data points per second on t2.medium. And also at its peak, it can process up to 15,000 data points using the [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html). Please read the official documentation for understanding how it works.

### Test Run #1 (stable)

There is stable test. CPU <= 20%, this means it will not be used [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT | 10000  | 12 | **~3000/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=10000

MESSAGES_PER_SECOND=600
DURATION_IN_SECONDS=43200
...
```

**CPU/Memory Load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 10 | 0 | 58 |
| Memory Utilization (%) | 36 | 33.07 | 38.26 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/t2-medium/postgres-stable-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/t2-medium/postgres-stable-memory.png)

**TB dashboard**

**~10.5m data points per hour**

![image](/images/reference/performance-aws-instances/t2-medium/postgres-stable-tb.png)

### Test Run #2 (burstable)

There is burstable test. CPU => 20%, this means it will be used [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT | 10000  | 2 | **~15000/sec** | 

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=10000

MESSAGES_PER_SECOND=3000
DURATION_IN_SECONDS=12000
...
```

**CPU/Memory Load**

t2 instances have [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html) and you can use more request per second time by time

Here is the Credit Balance chart line for the **t2.medium** during publishing 15000 data points per second.

The line goes down and after some period instance will be dramatically decreased by CPU (20% of total).

![image](/images/reference/performance-aws-instances/t2-medium/postgres-failed-cpu-credit.png)

**TB dashboard**

**~54m data points per hour**

![image](/images/reference/performance-aws-instances/t2-medium/postgres-burst-tb.png)

# c5.large

### Test Run #1 (postgres)

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT |  20000  | 12 | **~22500/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=20000

MESSAGES_PER_SECOND=4500
DURATION_IN_SECONDS=43200
...
```
 
**CPU/Memory Load**
 
| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 58 | 0 | 99.8 |
| Memory Utilization (%) | 33 | 33.39 | 33.85 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgres-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgres-memory.png)

**TB dashboard**

**~80m data points per hour**

![image](/images/reference/performance-aws-instances/c5-large/postgres-tb.png)

### Test Run #2 (kafka)

**We don't recommend use kafka on c5.large instance (because 4gb RAM).**

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | Kafka | MQTT |  20000  | 12 | **~22500/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=20000

MESSAGES_PER_SECOND=4500
DURATION_IN_SECONDS=43200
...
```

**CPU/Memory Load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 40 | 1.3 | 99.7 |
| Memory Utilization (%) | 87 | 44.66 | 92.56 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgres-kafka-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgres-kafka-memory.png)

**TB dashboard**

**~80m data points per hour**

![image](/images/reference/performance-aws-instances/c5-large/postgres-kafka-tb.png)

# m5.large

### Test Run #1 (postgres)

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- |
| m5.large | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT |  20000  | 6 | **~23000/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=20000

MESSAGES_PER_SECOND=4600
DURATION_IN_SECONDS=21600
...
```

**CPU/Memory Load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 33 | 0 | 100 |
| Memory Utilization (%) | 46 | 16.08 | 69.96 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/m5-large/postgresql-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/m5-large/postgresql-memory.png)

**TB dashboard**

**~83m data points per hour**

![image](/images/reference/performance-aws-instances/m5-large/postgresql-tb-dashboard.png)

### Test Run #2 (cassandra)

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | Cassandra | In memory | MQTT |  20000  | 6 | **~10000/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=20000

MESSAGES_PER_SECOND=2000
DURATION_IN_SECONDS=43200
...
```

**CPU/Memory Load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 25 | 0.2 | 100 |
| Memory Utilization (%) | 59 | 38.94 | 61.66 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/m5-large/cassandra-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/m5-large/cassandra-memory.png)

**TB dashboard**

**~36m data points per hour**

![image](/images/reference/performance-aws-instances/m5-large/cassandra-tb-dashboard.png)

# m5.xlarge

### Test Run #1 (kafka)

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of data points |
| --- | --- | --- | --- | --- | --- | --- |
| m5.xlarge | 4 vCPUs, 16GB | PostgreSQL | KAfka | MQTT | 25000  | 12 | **~30000/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=25000

MESSAGES_PER_SECOND=6000
DURATION_IN_SECONDS=43200
...
```

**CPU/memory load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 34 | 0.5 | 100 |
| Memory Utilization (%) | 48 | 14.02 | 55.26 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/m5-xlarge/postgres-kafka-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/m5-xlarge/postgres-kafka-memory.png)

**TB dashboard**

**~108m data points per hour**

![image](/images/reference/performance-aws-instances/m5-xlarge/postgres-kafka-tb-dashboard.png)