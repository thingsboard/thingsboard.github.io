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

# Performance by AWS Instance Type

**NOTE:** t2 instances are used [burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html) please read the official documentation. We recommend don't count on it. btw you can get more messages on the peak.

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Maximum number of messages | Peak with [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html)|
| --- | --- | --- | --- | --- | --- | --- | --- |
| [t2.small](#t2small) | 1 vCPUs, 2GB | PostgreSQL | In memory | MQTT | 500  | **~1500/sec** | **up to 7500/sec** |
| [t2.medium](#t2medium)  | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT | 900  | **~3000/sec** | **up to 15000/sec** |
| [c5.large](#c5large)  | 2 vCPUs , 4GB | PostgreSQL | In memory | MQTT | 20000  | **~22500/sec** | N/A  |
| [c5.large](#c5large)  | 2 vCPUs , 4GB | PostgreSQL | Kafka | MQTT | 20000  | **~22500/sec** | N/A  |
| t2.xlarge | 4 vCPUs, 16GB | PostgreSQL | In memory | MQTT |  20000  | --- | --- |
| t2.xlarge | 4 vCPUs, 16GB | Cassandra | In memory | MQTT | 20000  | --- | --- |
| [m5.xlarge](#m5xlarge)  | 4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | In memory | MQTT | 40000  | **~3500/sec** | N/A  |
| [m5.xlarge](#m5xlarge)  | 4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | In memory | HTTP | 40000  | **~950/sec** | N/A  |

# t2.small

**Performance Results**

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices  | Maximum number of messages |
| --- | --- | --- | --- | --- | --- | --- |
| t2.small | 1 vCPUs, 2GB | PostgreSQL | In memory | MQTT | 500  | **~1500/sec** |

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=500

MESSAGES_PER_SECOND=300
DURATION_IN_SECONDS=43200
...
```

### Test Run #1 (stable)

There is stable test. CPU <= 20%, this means it will not be used [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of messages |
| --- | --- | --- | --- | --- | --- | --- | --- |
| t2.small | 1 vCPUs, 2GB | PostgreSQL | In memory | MQTT | 500  | 12 | **~1500/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=500

MESSAGES_PER_SECOND=300
DURATION_IN_SECONDS=43200
...
```

**CPU/Memory Load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 18 | 8.9 | 55 |
| Memory Utilization (%) | 96 | 81 | 97.36 |
| Used Physical Memory (MB) | 940 | 797 | 958 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-50msgs-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-50msgs-memory.png)

TB dashboard

**~~5.4m request per hour.**

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-50msgs-tb.png)

### Test Run #2 (burstable)

There is burstable test. CPU => 20%, this means it will be used [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of messages |
| --- | --- | --- | --- | --- | --- | --- | --- |
| t2.small | 1 vCPUs, 2GB | PostgreSQL | In memory | MQTT | 500  | 3 | **~1500/sec** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=100

MESSAGES_PER_SECOND=600
DURATION_IN_SECONDS=10800
...
```

**CPU/Memory Load**

t2 instances have [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html) and you can use more request per second time by time


Here is the Credit Balance chart line for the **t2.medium** during publishing 15000 messages per second.

The line goes down and after some period instance will be dramatically decreased by CPU (20% of total).

![image](/images/reference/performance-aws-instances/t2-micro/t2Smallpostgresql-burstable-dashboard.png)

TB dashboard

**~~27m request per hour.**
\
![image](/images/reference/performance-aws-instances/t2-micro/postgresql-100msgs-tb.png)



# t2.medium

**Performance Results**

In this test, we will show that Thingsboard consistently receives about 3000 requests per second on t2.medium. And also at its peak, it can process up to 15,000 requests using the [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html). Please read the official documentation for understanding how it works.

### Test Run #1 (stable)

There is stable test. CPU <= 20%, this means it will not be used [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT | 900  | 12 | **~3000** |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=900

MESSAGES_PER_SECOND=600
DURATION_IN_SECONDS=43200
...
```

**CPU/Memory Load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 19 | 1.5 | 25 |
| Memory Utilization (%) | 25 | 3.54 | 28.3 |
| Used Physical Memory (MB) | 1014 | 551 | 1116 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-150msgs-cpu.png)

Used Physical Memory (MB)

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-150msgs-memory-1.png)

TB dashboard

**~~10.5m request per hour.**

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-150msgs-tb.png)

### Test Run #2 (burstable)

There is burstable test. CPU => 20%, this means it will be used [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT | 900  | 2 | **~15000** | 

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=200

MESSAGES_PER_SECOND=3000
DURATION_IN_SECONDS=12000
...
```

**CPU/Memory Load**

t2 instances have [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html) and you can use more request per second time by time


Here is the Credit Balance chart line for the **t2.medium** during publishing 15000 messages per second.

The line goes down and after some period instance will be dramatically decreased by CPU (20% of total).

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-200msgs-failing-cpu-credit.png)

TB dashboard

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-burstable-dashboard.png)


# c5.large

**c5.large** AWS instance does not have CPU burst that why CPU Credit Balance is not applicable to verify in this case.

But to be able to support ~20000 requests per seconds correct volume must be provisioned - with enough [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html) limits. Please read [official documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) for understand how it work.

For the PostgreSQL database, 20000 requests per seconds are equal to ~550 IOPS.

From time to time you can use [credit balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) to get more requests. Instance has few free resources left for get more requests (+~5000/s) at the peak. Read the official documentation for understand how it work.

**Performance Results**

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs , 4GB | PostgreSQL | In memory | MQTT | 20000  | **~22500/sec** |

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

### Test Run #1

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | In memory | MQTT |  20000  | 7 | **~22500** |

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
| CPU Utilization (%) | 70 | 66.8 | 76.1 |
| Memory Utilization (%) | 33 | 33.39 | 33.85 |
| Used Physical Memory (MB) | 1241 | 1237 | 1254 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-memory.png)

TB dashboard

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-tb.png)

AWS write IOPS for the volume

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-iops.png)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-iops-1.png)

### Test Run #2 (kafka)

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | Kafka | MQTT |  20000  | 12 | **~22500** |

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
| CPU Utilization (%) | 48 | 3 | 57.4 |
| Memory Utilization (%) | 34 | 32.79 | 37.76 |
| Used Physical Memory (MB) | 1254 | 1215 | 1399 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-memory.png)

TB dashboard

~80m request per hour

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-tb.png)

AWS IOPS statistics

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-iops.png)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-iops-1.png)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-iops-2.png)

# m5.xlarge

**Performance Results**

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| m5.xlarge | 4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | In memory | MQTT | 3500  | **~3500/sec** |

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=3500

PUBLISH_COUNT=300
PUBLISH_PAUSE=1000
...
```

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| m5.xlarge |  4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | In memory| HTTP | 2000  | **~950/sec** |

Test run configuration:

```bash
...
DEVICE_API=HTTP
DEVICE_START_IDX=0
DEVICE_END_IDX=2000

PUBLISH_COUNT=300
PUBLISH_PAUSE=1000
...
```

### Test Run #1

| Instance Type | Instance details | Database Type 	 | Queue Type  | Device API | Number of devices | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| m5.xlarge | 4 vCPUs, 16GB | Cassandra | In memory | MQTT | 2100  | 10 |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=2100

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
...
```

**CPU/memory load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 36 | 8.3 | 61.2 |
| Memory Utilization (%) | 40 | 39.83 | 40.14 |
| Used Physical Memory (MB) | 6235 | 6205 | 6252 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/m5-xlarge/cassandra-2100msgs-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/m5-xlarge/cassandra-2100msgs-memory.png)

Used Physical Memory (MB)

![image](/images/reference/performance-aws-instances/m5-xlarge/cassandra-2100msgs-memory-1.png)

TB dashboard

![image](/images/reference/performance-aws-instances/m5-xlarge/cassandra-2100msgs-tb.png)