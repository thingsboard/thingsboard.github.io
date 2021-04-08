* TOC
{:toc}

One of the key features of ThingsBoard open-source IoT Platform is data collection and this is a crucial feature that must work reliably under a heavy long-running messages upload.

In this article, we are going to execute long-running data collection tests of ThingsBoard on different AWS instances.
We are going to check how many messages per second each instance can handle and will provide the CPU and memory load stats.

Considering test results and your project requirements you will be able to identify what type of the instance is the most suitable for your project.

## Data flow and test tools

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

## How to repeat the tests

Please use documentation of the [Performance Test Project](https://github.com/thingsboard/performance-tests/) for more details.

## Performance by AWS Instance Type


| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages| Maximum number of messages |
| --- | --- | --- | --- | --- | --- | --- |
| [t2.micro](#t2micro) | 1 vCPUs for a 2h 24m burst, 1GB | PostgreSQL | MQTT | 500 | 1000 ms | **~450/sec** | 
| [t2.medium](#t2medium)  | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | MQTT | 900 | 1000 ms | **~780/sec** |
| [c5.large](#c5large)  | 2 vCPUs , 4GB | PostgreSQL | MQTT | 1100 | 1000 ms | **~1020/sec** |
| t2.xlarge | 4 vCPUs for a 5h 24m burst, 16GB | PostgreSQL | MQTT |  1800 | 1000 ms | **~1700/sec** |
| t2.xlarge | 4 vCPUs for a 5h 24m burst, 16GB | Cassandra | MQTT | 3000 | 1000 ms | **~3000/sec** |
| [m5.xlarge](#m5xlarge)  | 4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | MQTT | 3500 | 1000 ms | **~3500/sec** |
| [m5.xlarge](#m5xlarge)  | 4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | HTTP | 2000 | 1000 ms | **~950/sec** |

## t2.micro

**Performance Results**

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages | Maximum number of messages |
| --- | --- | --- | --- | --- | --- | --- |
| t2.micro | 1 vCPUs for a 2h 24m burst, 1GB | PostgreSQL | MQTT | 500 | 1000 ms | **~450/sec** |

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=500

PUBLISH_COUNT=300
PUBLISH_PAUSE=1000
...
```

### Test Run #1

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| t2.micro | 1 vCPUs for a 2h 24m burst, 1GB | PostgreSQL | MQTT | 50 | 1000 ms | 10 | 

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=50

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
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

Used Physical Memory (MB)

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-50msgs-memory-1.png)

TB dashboard

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-50msgs-tb.png)

### Test Run #2

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours |
| --- | --- | --- | --- | --- | --- | --- |
| t2.micro | 1 vCPUs for a 2h 24m burst, 1GB | PostgreSQL | MQTT | 100 | 1000 ms | 10 | 

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=100

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
...
```

**CPU/Memory Load**

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 32 | 8.1 | 100 |
| Memory Utilization (%) | 97 | 81.3 | 98.37 | 
| Used Physical Memory (MB) | 952 | 800 | 968 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-100msgs-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-100msgs-memory.png)

Used Physical Memory (MB)

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-100msgs-memory-1.png)

TB dashboard

![image](/images/reference/performance-aws-instances/t2-micro/postgresql-100msgs-tb.png)

## t2.medium

**Performance Results**

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | MQTT | 900 | 1000 ms | **~780/sec** |

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=900

PUBLISH_COUNT=300
PUBLISH_PAUSE=1000
...
```

### Test Run #1

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | MQTT | 150 | 1000 ms | 10 | 

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=150

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
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

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-150msgs-memory.png)

Used Physical Memory (MB)

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-150msgs-memory-1.png)

TB dashboard

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-150msgs-tb.png)

### Test Run #2

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | MQTT | 200 | 1000 ms | 10 | 

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=200

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
...
```

**CPU/Memory Load**

Result shows that **t2.medium** AWS Instance Type is not able to handle more than 200 requests per second, because of the [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

Here is the Credit Balance chart line for the **t2.medium** during publishing 200 messages per second.

The line goes down and after some period instance will be dramatically decreased by CPU (20% of total).

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-200msgs-failing-cpu-credit.png)

### Test Run #3

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | MQTT | 300 | 1000 ms | 10 | 

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=300

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
...
```

**CPU/Memory Load**

The same results as previous run, but CPU Credit Balance chart line goes down more faster.

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-300msgs-failed-cpu-credit.png)

## c5.large

**Performance Results**

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs , 4GB | PostgreSQL | MQTT | 1100 | 1000 ms | **~1020/sec** |

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=1100

PUBLISH_COUNT=300
PUBLISH_PAUSE=1000
...
```

### Test Run #1

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | MQTT |  500 | 1000 ms | 10 |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):


```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=500

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
...
```

**CPU/Memory Load**

**c5.large** AWS instance does not have CPU burst that why CPU Credit Balance is not applicable to verify in this case.

But to be able to support 500 requests per seconds correct volume must be provisioned - with enough [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html) limits.

For the PostgreSQL database, 500 requests per seconds are equal to ~500 IOPS.

So AWS volume for this test must be provisioned with at least 600 IOPS.

| Property | Avg | Min | Max |
| --- | --- | --- | --- |
| CPU Utilization (%) | 48 | 3 | 57.4 |
| Memory Utilization (%) | 34 | 32.79 | 37.76 |
| Used Physical Memory (MB) | 1254 | 1215 | 1399 |

CPU Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-cpu.png)

Memory Utilization (%)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-memory.png)

Used Physical Memory (MB)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-memory-1.png)

TB dashboard

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-tb.png)

AWS write IOPS for the volume

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-iops.png)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-500msgs-iops-1.png)

### Test Run #2

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | MQTT |  700 | 1000 ms | 10 |

**Test Configuration**

Test run configuration (see [Performance Test Project](https://github.com/thingsboard/performance-tests/#running) for more details):

```bash
...
DEVICE_API=MQTT
DEVICE_START_IDX=0
DEVICE_END_IDX=700

PUBLISH_COUNT=36000
PUBLISH_PAUSE=1000
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

Used Physical Memory (MB)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-memory-1.png)

TB dashboard

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-tb.png)

AWS write IOPS for the volume

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-iops.png)

![image](/images/reference/performance-aws-instances/c5-large/postgresql-700msgs-iops-1.png)

## m5.xlarge

**Performance Results**

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| m5.xlarge | 4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | MQTT | 3500 | 1000 ms | **~3500/sec** |

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

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- | --- |
| m5.xlarge |  4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | HTTP | 2000 | 1000 ms | **~950/sec** |

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

| Instance Type | Instance details | Database Type | Device API | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- | --- |
| m5.xlarge | 4 vCPUs, 16GB | Cassandra | MQTT | 2100 | 1000 ms | 10 |

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
