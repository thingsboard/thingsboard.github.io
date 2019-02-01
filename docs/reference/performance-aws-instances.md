---
layout: docwithnav
title: ThingsBoard Performance on different AWS instances
description: ThingsBoard Performance on different AWS instances results

---

* TOC
{:toc}

One of the key features of ThingsBoard open-source IoT Platform is data collection and this is a crucial feature that must work reliably under long-running a heavy load of the instance.

In this article, we are going to describe what are the maximum messages different AWS instance are able to handle and as well we are going to provide the CPU and memory load of different AWS instances under long-running loads.

Considering these numbers and your project requirements you’ll be able to analyze what type o the instance is needed for your project.

## Data flow and test tools

IoT devices connect to ThingsBoard server via MQTT or HTTP Device API and sends dummy test data to the platform. 
ThingsBoard server processes MQTT or HTTP messages and stores them to Cassandra/PostgreSQL asynchronously. 

As a data tool we have used updated version of Performance Test project that is able to send messages over MQTT/HTTP Device API in an asynchronous way very efficiently. 

Considering microservice architecture of the ThingsBoard platform and to measure performance in an accurate way, we have created an additional Rule Chain Node that is able to calculate a number of messages that this Node has been received per 1 second (this is a configurable parameter that could be changed) and store this value as telemetry.

This additional Rule Chain Node is located after the ‘Save telemetry’ Node of the Root Chain and calculates how many messages ThingsBoard instance processed during the performance testing. This data is stored on a tenant level as telemetry. 

![image](/images/reference/performance-aws-instances/modified-rule-chain.png)

Performance Test tool, after test completion, is taking this telemetry value from the platform and provides result in the console of the test:

```bash
12:20:03.772 [main] INFO  o.t.t.s.stats.StatisticsCollector - ============ Node [692dc903cf52] AVG is 500.0 per 1 second ============
12:20:03.772 [main] INFO  o.t.t.s.stats.StatisticsCollector - ============ Total AVG is 500.0 per 1 second ============
```

This telemetry value could be shown as well as general telemetry on the ThingsBoard Dashboard. 

## How to repeat the tests

Please use documentation of the [Performance test project](https://github.com/thingsboard/performance-tests/tree/develop/2.0) for more details.

## Test Results

### Maximum number of requests that instance is able to handle per second

#### MQTT API

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- |
| t2.micro | 1 vCPUs for a 2h 24m burst, 1GB | PostgreSQL | 500 | 1000 | **~450** | 
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | 900 | 1000 | **~780** |
| c5.large | 2 vCPUs , 4GB | PostgreSQL | 1100 | 1000 | **~1020** |
| t2.xlarge | 4 vCPUs for a 5h 24m burst, 16GB | PostgreSQL | 1800 | 1000 | **~1700** |
| t2.xlarge | 4 vCPUs for a 5h 24m burst, 16GB | Cassandra | 3000 | 1000 | **~3000** |
| m5d.xlarge | 4 vCPUs, 16GB, 150GB SSD mounted | Cassandra | 3500 | 750 | **~3500** |

#### HTTP API

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Maximum number of messages per second |
| --- | --- | --- | --- | --- | --- |
| m5d.xlarge | 4 vCPUs, 16GB RAM, 150GB SSD mounted | Cassandra | 2000 | 1000 | **~950** |

### CPU/memory load of the instances during a long run of the tests

#### MQTT API

- **t2.micro** AWS Instance Type, Test Run #1

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- |
| t2.micro | 1 vCPUs for a 2h 24m burst, 1GB | PostgreSQL | 50 | 1000 | 10 | 


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

- **t2.micro** AWS Instance Type, Test Run #2

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours |
| --- | --- | --- | --- | --- | --- |
| t2.micro | 1 vCPUs for a 2h 24m burst, 1GB | PostgreSQL | 100 | 1000 | 10 | 


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

- **t2.medium** AWS Instance Type, Test Run #1

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | 150 | 1000 | 10 | 


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

- **t2.medium** AWS Instance Type, Test Run #2

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | 200 | 1000 | 10 | 

Result shows that **t2.medium** AWS Instance Type is not able to handle more than 200 requests per second, because of the [AWS CPU Credit Balance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html).

Here is the Credit Balance chart line for the **t2.medium** during publishing 200 messages per second.

The line goes down and after some period instance will be dramatically decreased by CPU (20% of total).

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-200msgs-failing-cpu-credit.png)

- **t2.medium** AWS Instance Type, Test Run #3

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- |
| t2.medium | 2 vCPUs for a 4h 48m burst, 4GB | PostgreSQL | 300 | 1000 | 10 | 

The same results as previous run, but CPU Credit Balance chart line goes down more faster.

![image](/images/reference/performance-aws-instances/t2-medium/postgresql-300msgs-failed-cpu-credit.png)

- **c5.large** AWS Instance Type, Test Run #1

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | 500 | 1000 | 10 | 

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

- **c5.large** AWS Instance Type, Test Run #2

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- |
| c5.large | 2 vCPUs, 4GB | PostgreSQL | 700 | 1000 | 10 | 


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

- **m5.xlarge** AWS Instance Type, Test Run #1

| Instance Type | Instance details | Database Type | Number of devices | Delay between messages in millis | Count of test run hours | 
| --- | --- | --- | --- | --- | --- |
| m5.xlarge | 4 vCPUs, 16GB | Cassandra | 2100 | 1000 | 10 | 


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
