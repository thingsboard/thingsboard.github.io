* TOC
{:toc}
<!-- This will parse content of HTML tags as markdown when uncomment {::options parse_block_html="true" /} -->

ThingsBoard has been run in production by numerous companies in both [monolithic](/docs/{{docsPrefix}}reference/monolithic/) 
and [microservices](/docs/{{docsPrefix}}reference/msa/) deployment modes.
This article describes the performance of a single ThingsBoard server in the most popular usage scenarios. 
It is helpful to understand how ThingsBoard scales vertically (monolith) before describing how it scales horizontally (cluster mode).   

## Performance test methodology

For simplicity, we have deployed a single ThingsBoard instance with all related third-party components in a docker-compose environment on a single EC2 instance.
The test agent provisions and connects a configurable number of device emulators that constantly publish time-series data over MQTT.

Various IoT device profiles differ based on the number of messages they produce and the size of each message.
We have emulated smart-meter devices that send messages as a JSON with three data points: pulse counter, leakage flag, and battery level.
Each device used a separate MQTT connection to the server.

ThingsBoard stored all the time-series data in the database.
ThingsBoard also processed the data using the [alarm rules](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules) to create alarms if the battery level is low.
We have scaled the test from 5K to 100K devices and message rate from 1K msg/second to 10K messages per second.
Our team executed the tests for at least 24 hours to ensure no resource leakage or performance degradation over time.
We have also included instructions to replicate the tests. Links to the instructions are in the details of each test run.

Additional tool set we use for our tests: 
[Postgres](/docs/{{docsPrefix}}reference/performance/tools/postgres-pgadmin-monitoring/), 
[Java](/docs/{{docsPrefix}}reference/performance/tools/java-jmx-monitoring/) and 
[Thingsboard](/docs/{{docsPrefix}}reference/performance/tools/thingsboard-performance-charts/) used to visualize the performance.

Note: Each IoT use case is different and may impact the performance numbers. 
The tests cover the main functionality of data ingestion and alarm generation.  

## Performance test summary

The test scenarios differ in the number of connected devices, messages per second, server type and database used to store time-series data. 

| Scenario                  | Devices | Data points per second | Instance Type                          | Queue type | Database               | CPU Usage | Write IOPS |
|---------------------------|---------|------------------------|----------------------------------------|------------|------------------------|-----------|------------|
| [Scenario A](#scenario-a) | 5K      | 1K                     | t3.medium ( 2 burstable vCPU, 4GB RAM) | in-memory  | PostgreSQL             | 27%       | 800        |
| [Scenario B](#scenario-b) | 5K      | 15K                    | m6a.large (2 vCPU, 8GB RAM)            | Kafka      | PostgreSQL             | 95%       | 850        |
| [Scenario C](#scenario-c) | 25K     | 30K                    | m6a.2xlarge (4 vCPU, 16GB RAM)         | Kafka      | PostgreSQL + Cassandra | 75%       | 200        |
| [Scenario D](#scenario-d) | 100K    | 15K                    | m6a.2xlarge (4 vCPU, 16GB RAM)         | Kafka      | PostgreSQL + Cassandra | 71%       | 700        |
| [Scenario E](#scenario-e) | 100K    | 30K                    | m6a.2xlarge (4 vCPU, 16GB RAM)         | Kafka      | PostgreSQL + Cassandra | 95%       | 240        |

[comment]: <> ( To format table as markdown, please use the online table generator https://www.tablesgenerator.com/markdown_tables )

## Postgres only performance

### Scenario A

Load configuration: 

 * 5000 devices;
 * 1000 msg/sec over MQTT, each mqtt message contains 3 data points resulting in 3000 data points/sec;
 * PostgreSQL Database;
 * In-memory queue.  

Instance: AWS t3.medium (2 vCPUs Intel, 4 GiB, EBS GP3)

Estimated cost 19$ EC2 + x$ CPU burst + 8$ EBS GP3 100GB = 30$/mo

Statistics related to the test execution on **x64** architecture:

{% include images-gallery.html imageCollection="postgres-only-1000" %}

Statistics related to the test execution on **ARM** architecture (t4g.medium):

{% include images-gallery.html imageCollection="postgres-only-1000-arm" %}

**Lessons learned**

This setup is mostly for the development environments, due to the in-memory queue.
System can survive and run stable with an up to x3 message rate (3000 msg/sec).  
Cloud provider will charge you against CPU burst, but the production will up and running fine.

Note: t3.medium is a **burstable instance** with a base level performance 20% of CPU load. When you idle, unused CPU time accumulated up to max limit.
So please, design your instance to use below 20% in average.

<details markdown="1">
<summary>
Tip: Enable Unlimited mode in credit specification to get a good performance at first steps
</summary>

And survive extra load above the limit (additional charges may apply).
Without unlimited mode at the first start you have 0 credits to burst CPU up and the system is throttled down to baseline 20% CPU. That will cause the first setup is quite slow without "unlimited mode".

![AWS enable unlimited mode in credit specification](../../../images/reference/performance-aws-instances/method/t3-medium/postgres/aws-credit-spec-unlimited-mode.png)

</details>

**How to reproduce the test**

<details markdown="1">
<summary>
Setup the Thingsboard instance on AWS EC2
</summary>

Use the Docker Compose file listed below to setup the AWS EC2 instance based on the [instruction](/docs/{{docsPrefix}}reference/performance/setup-aws-instances/).  

```bash
version: '3'
services:
  postgres:
    image: "postgres:14"
    network_mode: "host"
    restart: "always"
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: "thingsboard"
      POSTGRES_PASSWORD: "postgres"
  tb:
    depends_on:
      - postgres
    image: "thingsboard/tb"
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      DATABASE_TS_TYPE: "sql"
      TB_QUEUE_TYPE: "in-memory"
      TB_SERVICE_ID: "tb-node-0"
      HTTP_BIND_PORT: "8080"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
      TB_QUEUE_RE_MAIN_CONSUMER_PER_PARTITION: "false"
      # Postgres connection
      SPRING_JPA_DATABASE_PLATFORM: "org.hibernate.dialect.PostgreSQLDialect"
      SPRING_DRIVER_CLASS_NAME: "org.postgresql.Driver"
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      # Java options for 4G instance and JMX enabled
      JAVA_OPTS: " -Xmx2048M -Xms2048M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
volumes: # to persist data between container restarts or being recreated
  postgres:
  thingsboard-data:
  thingsboard-logs:
```
{: .copy-code}

</details>

<details markdown="1">
<summary>
Launch performance test tool
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=5000 \
  --env MESSAGES_PER_SECOND=1000 \
  --env ALARMS_PER_SECOND=10 \
  --env DURATION_IN_SECONDS=86400 \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

### Postgres - x3 peak survive

Load configuration: 5000 devices, MQTT, 3333 msg/sec, 10000 data point/sec, postgres, in-memory queue.   
Instance: AWS t3.medium (2 vCPUs Intel, 4 GiB, EBS GP3)

In previous section we got the first **Thingsboard successful** deployment designed up to 1000 msg/sec.  

Looks perfect, **but what happen** when we face a peak load on production? Should we worry about?  
The **cost of failure** may be money loss, reputation or carries issue.  
The **benefits** of reliable design may bring you to a better life, no stress, success and constant growing.

Let's try to handle a messages flood about x3 of regular rate up to 10000 data point/sec.

Thingsboard docker compose with no change with the previous section. 
Message rate have been increased gradually.  

<details markdown="1">
<summary>
Performance test was stopped and run with a greater numbers step by step
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=5000 \
  --env MESSAGES_PER_SECOND=3333 \
  --env ALARMS_PER_SECOND=10 \
  --env DURATION_IN_SECONDS=86400 \
  --env DEVICE_CREATE_ON_START=false \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

Test have been passed successfully. Here some great shots.

{% include images-gallery.html imageCollection="postgres-only-x3-stress" %}

This is a good trade-off configuration to survive and handle message burst with shared CPU instance type and in-memory queue.

However, the shared CPU instances did not guarantee that additional CPU resources will be available at any moment.
So you can starve with the base CPU level (20% for t3.medium) at the most important moment.
The best practice approach is to set up a persistent queue service like a Kafka and handle the high load whether it is possible.

### Postgres - x10 peak & crash

Load configuration: 5000 devices, MQTT, 10_000 msg/sec, 30_000 data point/sec, postgres, in-memory queue.   
Instance: AWS t3.medium (2 vCPUs Intel, 4 GiB, EBS GP3)

**Let's burn** this tiny instance with x10 message rate!

Maybe it is **not a good idea** to crash the Thingsboard IoT platform with the *in-memory queue*.
But it may benefit **new users** who just started using the Thingsboard IoT platform.
The goal is **to help the community** avoid choosing the wrong design and help save data, customers, reputation, and money.

So let's generate some message rate spike. CPU and disk will not be able to process all the messages.
Some lag will build up. Let's see what is happening inside the memory and the consequences of the in-memory queue flood.

<details markdown="1">
<summary>
Launch performance test tool
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=5000 \
  --env MESSAGES_PER_SECOND=10000 \
  --env ALARMS_PER_SECOND=10 \
  --env DURATION_IN_SECONDS=86400 \
  --env DEVICE_CREATE_ON_START=false \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

In the beginning, the system looks busy but responsive.

Then the instance becomes short on memory, and overall performance will degrade.

Now we see that heap memory used is constantly growing on the JMX monitor.

It takes about 10 minutes to flood all the memory, and the system becomes unresponsive.

Queue stats drop to zero and do not respond anymore.

CPU is still 100% load, but mainly spending on the garbage collector.

JMX VusialVM monitoring shows how the system dies due to out-of-memory.

In the next 3 minutes, the system will die.

{% include images-gallery.html imageCollection="postgres-only-x10-stress" %}

**Why** it happens? 

As you know, the resource is limited.
CPU has limited by performance. Memory has limited by size and throughput.
Storage has a limited capacity, operations per second (IOPS), throughput, and read/write latencies.
The network has limited by speed, throughput, latency, packets, etc.

Despite all these boring limitations, we all experience fast and reliable services all over the internet.

So how is it possible that software goes down at the most critical moment?
Is it buggy code? Is it slow? Why?
Should I spend few thousand dollars on the most powerful high-end cloud and keep calm?
Unfortunately, it does not work in that way.

Eventually, you can get in-memory messages more than your memory available.

Typical scenario: processing less than 100% -> messages flood the memory -> out of memory -> messages lost -> service down for 1-2 minutes.

Any solutions? Yes! Please, check out the Kafka or other persistent queue.

### Postgres - vertical scaling boundary

Load configuration: 6000 devices, MQTT, 6000 msg/sec, 18000 data point/sec, postgres, in-memory queue.   
Instance: AWS _m6a.large_ (2 vCPUs AMD EPYC 3rd, 8 GiB, EBS GP3)

Disclaimer: do not go production with this design and load!

Scaling up vertically means you buy much expensive hardware and get much better performance.  
But there is **boundaries** that is **hard to scale vertically**. 

The Postgres is an SQL database and store the data as a rows in tables.
All operations likely to written in a single transaction log and simply looks like one-by-one transactions.
A bunch of rows shares a single data page and cause the wait locks on concurrent insert or update.
Eventually you will face that putting more CPUs and memory have no positive effect on data collecting performance.

<details markdown="1">
<summary>
Launch performance test tool
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=6000 \
  --env MESSAGES_PER_SECOND=6000 \
  --env ALARMS_PER_SECOND=10 \
  --env DURATION_IN_SECONDS=600 \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

![Queue stats dashboard](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-queue-stats-dashboard.png)

![Thingsboard API usage](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-api-usage-dashboard.png)

![htop CPU, memory, IO read/write](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-htop-cpu-memory-io-monitoring.png)

![Java CPU and heap monitoring with JMX VisualVM](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-jmx-visualvm-monitoring.png)

![Postgres pgadmin dashboard](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-postgresql-pgadmin-dashboard.png)

![AWS CPU, network monitoring](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-cpu-network-monitoring.png)

![Storage type](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-disk-type.png)

![AWS Storage monitoring](../../../images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-disk-monitoring.png)

This is the upper boundary that we experienced on AWS instance with Thingsboard + Postgres only configuration. Please, do not design your instance to utilize 98% CPU as show in this stress test.

To scale horizontally we recommend to use Cassandra NOSQL database.

To run reliable production we recommend to use Kafka queue.

### Postgres - summary

Average CPU load is about 27% on 1000 msg/sec. This is good setup up to 1000 msg/sec.

The system is able to survive the peak up to 3000 msg/sec without any additional load.

In real production the CPU load may be higher because of additional logic performed by custom rule chains.

To make system much reliable and peak resistant, please consider using a persistent queue type. Kafka is a good one.

## Kafka + Postgres performance

### Scenario B

Load configuration: 5000 devices, MQTT, 5000 msg/sec, 15000 data point/sec, Postgres, Kafka.  
Instance: AWS m6a.large (2 vCPUs AMD EPYC 3rd, 8 GiB, EBS GP3)

Estimated cost 42$ EC2 + 8$ EBS GP3 100GB = 50$/mo, disk space for telemetry may add additional costs.

Here results for Kafka + Postgres:

{% include images-gallery.html imageCollection="postgres-kafka-5000" %}

Long-running result about 14 hours:

{% include images-gallery.html imageCollection="postgres-kafka-5000-long-running" %}

**How to reproduce the test**

<details markdown="1">
<summary>
Let's set up **Kafka queue** and run the **Thingsboard** performance test to find the pros and cons.
</summary>

Take a note that Zookeeper is required to run Kafka these days.
Here is the docker-compose file to set up _Thingsboard + Postgresql + Zookeeper + Kafka_ on AWS EC2 instance based on the [instruction](/docs/{{docsPrefix}}reference/performance/setup-aws-instances/).

```bash
version: '3'
services:
  zookeeper:
    image: docker.io/bitnami/zookeeper:3.7
    network_mode: "host"
    restart: "always"
    volumes:
      - zookeeper:/bitnami
    environment:
      ALLOW_ANONYMOUS_LOGIN: "yes"
      ZOO_ENABLE_ADMIN_SERVER: "no"
      JVMFLAGS: "-Xmx128m -Xms128m -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9199 -Dcom.sun.management.jmxremote.rmi.port=9199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  kafka:
    image: docker.io/bitnami/kafka:3
    network_mode: "host"
    restart: "always"
    volumes:
      - kafka:/bitnami
    environment:
      - KAFKA_CFG_ZOOKEEPER_CONNECT=localhost:2181
      - ALLOW_PLAINTEXT_LISTENER=yes
    depends_on:
      - zookeeper
  postgres:
    image: "postgres:14"
    network_mode: "host"
    restart: "always"
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: "thingsboard"
      POSTGRES_PASSWORD: "postgres"
  tb:
    depends_on:
      - postgres
      - kafka
    image: "thingsboard/tb"
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      DATABASE_TS_TYPE: "sql"
      TB_QUEUE_TYPE: "kafka"
      TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
      TB_KAFKA_LINGER_MS: "5" # default is 1
      TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "2048" # default is 8192
      TB_SERVICE_ID: "tb-node-0"
      HTTP_BIND_PORT: "8080"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
      # Postgres connection
      SPRING_JPA_DATABASE_PLATFORM: "org.hibernate.dialect.PostgreSQLDialect"
      SPRING_DRIVER_CLASS_NAME: "org.postgresql.Driver"
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      # Java options for 8G instance and JMX enabled
      JAVA_OPTS: " -Xmx3072M -Xms3072M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
volumes: # to persist data between container restarts or being recreated
  kafka:
  zookeeper:
  postgres:
  thingsboard-data:
  thingsboard-logs:
```
{: .copy-code}

</details>

<details markdown="1">
<summary>
Launch performance test tool
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=5000 \
  --env MESSAGES_PER_SECOND=5000 \
  --env ALARMS_PER_SECOND=50 \
  --env DURATION_IN_SECONDS=86400 \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

This is the high load configuration with CPU 95% average utilization. 
In that example we intentionally pick almost 100% load to try to crash this in the next test.
You definitely need add more CPU to process some custom rule chains, render your dashboards and maintain stable 5000 msg/sec.
This is good setup up to 5000 msg/sec, with peak performance up to 6000 msg/sec.

System can survive peak message rate up to message rate 20000 msg/sec (60000 data point/sec).

Conclusion: Persistent queue is essential to survive peak loads. 
Kafka CPU and disk IO overhead are tiny relative to Postgres and Thingsboard CPU consumption. 
The memory footprint is about 1G in default configuration and can be easily adjusted for smaller instances. 

### Kafka + Postgres - x3 stress test

Load configuration: 5000 devices, MQTT, 15000 msg/sec, 45000 data point/sec, Postgres, Kafka.  
Instance: AWS m6a.large (2 vCPUs AMD EPYC 3rd, 8 GiB, EBS GP3)

Let's take a stress test to find out how the Kafka bring the stability into operations. 

Statistics related to the test execution:

We can see 100% CPU utilization. The system is overloaded.

But all non-processed messages go to Kafka (will be persisted eventually) and wait until the rule engine can poll and process them.

Java machine feels good. Heap memory has enough space to operate. Let's perform garbage collection manually to find the lowest point of the memory consumption. The free memory level goes back to the average level. That is a good result.

Another way to ensure that we run stable is to check the Kafka producer state with JMX MBean.

**Kafka Lag** is building up. That means that the rule engine processing speed is lower than messages coming.

{% include images-gallery.html imageCollection="postgres-kafka-x3-stress" %}

Now let's stop the x3 test and get back to the average message rate (5000 msg/sec) in a minute.

After a while, we may see that the lag is going down from 2.8M to 1.2M. Eventually, the numbers back to nominal.

{% include images-gallery.html imageCollection="postgres-kafka-x3-stress-back-to-x1" %}


<details markdown="1">
<summary>
Launch performance test tool
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=5000 \
  --env MESSAGES_PER_SECOND=15000 \
  --env ALARMS_PER_SECOND=50 \
  --env DURATION_IN_SECONDS=86400 \
  --env DEVICE_CREATE_ON_START=false \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

### Kafka + Postgres - summary

**Conclusion**: Thingsboard + Postgres + **Kafka** - is a reliable solution to survive peak loads.
Despite the maximum performance shown above, we recommend to use m6a.large instance design for up to 3k msg/sec, 10k data points/sec.  
The logic is quite simple: to be able to process x2 message load in case of any peak load.  
In a real production, the Thingsboard may serve all kind of user requests, run custom rule chains and supply the web services for all fancy dashboards.
When you need more performance, simply upgrade the instance to the next m6a.xlarge or c6i.xlarge instance (restart required).  
Another way to improve is to customize PostgreSQL config to gain much faster read query performance for dashboards, analytics, etc.
For even more performance, please consider the **Cassandra** usage.   

Pros:
 * Reliable solution to survive the peak load
 * Reasonable price for performance and reliability
 * Able to scale (vertically).
 * Narrow technology stack (Postgres, Kafka)
Cons: 
 * The telemetry storage consumption is quite intensive. It may become expensive if the telemetry time-to-live (TTL) is a year or infinite. 
 * Scale only vertical (faster instance, more storage IOPS) - very limited by hardware available and become expensive.
 * Kafka here is a single instance. Messages persist eventually (no fsync called). It causes potential latest message loss if Kafka crashes (quite rare, but possible).
 * Maintain or fail any of component will lead to downtime for all the system.

## Timescale + Kafka + Postgres performance

### Timescale + Kafka + Postgres - 2000 msg/sec

Load configuration: 5000 devices, MQTT, 5000 msg/sec, 15000 data point/sec, Postgres, Kafka, Timescale.  
Instance: AWS m6a.large (2 vCPUs AMD EPYC 3rd, 8 GiB, EBS GP3)

Estimated cost 42$ EC2 + 8$ EBS GP3 100GB = 50$/mo, disk space for telemetry may add additional costs.

Here the docker-compose with Thingsboard + Postgresql + Zookeeper + Kafka + Timescale
```bash
version: '3'
services:
  zookeeper:
    image: docker.io/bitnami/zookeeper:3.7
    network_mode: "host"
    restart: "always"
    volumes:
      - zookeeper:/bitnami
    environment:
      ALLOW_ANONYMOUS_LOGIN: "yes"
      ZOO_ENABLE_ADMIN_SERVER: "no"
      JVMFLAGS: "-Xmx128m -Xms128m -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9199 -Dcom.sun.management.jmxremote.rmi.port=9199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  kafka:
    image: docker.io/bitnami/kafka:3
    network_mode: "host"
    restart: "always"
    volumes:
      - kafka:/bitnami
    environment:
      - KAFKA_CFG_ZOOKEEPER_CONNECT=localhost:2181
      - ALLOW_PLAINTEXT_LISTENER=yes
    depends_on:
      - zookeeper
  postgres:
    image: "timescale/timescaledb:latest-pg14"
    network_mode: "host"
    restart: "always"
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: "thingsboard"
      POSTGRES_PASSWORD: "postgres"
  tb:
    depends_on:
      - postgres
      - kafka
    image: "thingsboard/tb"
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      DATABASE_TS_TYPE: "timescale"
      SQL_TIMESCALE_CHUNK_TIME_INTERVAL: 2592000000 # Number of milliseconds MONTH
      TB_QUEUE_TYPE: "kafka"
      TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
      TB_KAFKA_LINGER_MS: "5" # default is 1
      TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "2048" # default is 8192
      TB_SERVICE_ID: "tb-node-0"
      HTTP_BIND_PORT: "8080"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
      # Postgres connection
      SPRING_JPA_DATABASE_PLATFORM: "org.hibernate.dialect.PostgreSQLDialect"
      SPRING_DRIVER_CLASS_NAME: "org.postgresql.Driver"
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      # Java options for 8G instance and JMX enabled
      JAVA_OPTS: " -Xmx3072M -Xms3072M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
volumes: # to persist data between container restarts or being recreated
  kafka:
  zookeeper:
  postgres:
  thingsboard-data:
  thingsboard-logs:
```
{: .copy-code}

<details markdown="1">
<summary>
Launch performance test tool
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=5000 \
  --env MESSAGES_PER_SECOND=5000 \
  --env ALARMS_PER_SECOND=50 \
  --env DURATION_IN_SECONDS=86400 \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

Conclusion: with the Timescale it was hard to process about 2k msg/sec on the same instance as Postgres was able to handle 5k messages.
The reason is a high CPU usage.
We made a try to give more resources (m6a.2xlarge), but maximum that Timescale can hit is 5k msg/sec with a lot of free CPU and memory available.
The "TS timescale" queues were always filled and much more than others.
Hopefully, the Timescale can do much better, but for the docker image `timescale/timescaledb:latest-pg14` provided by Timescale we are not able reaching the Moon today.

## Cassandra + Kafka + Postgres performance

### Cassandra - 25k devices

Load configuration: 25000 devices, MQTT, 10000 msg/sec, 30000 data point/sec, MQTT, Postgres (TS latest), Kafka queue, Cassandra (TS)  
Instance: AWS m6a.2xlarge (8 vCPUs AMD EPYC 3rd, 32 GiB, EBS GP3)

Estimated cost 167$ EC2 m6a.2xlarge + 24$ EBS GP3 300GB = 191$/mo

**Cassandra** is essential for massive telemetry flow.

Peaks will be handled with Kafka queue. It is a **top monolith deployment**. 

Here the docker-compose with Thingsboard + Postgresql + Zookeeper + Kafka + **Cassandra**

```bash
version: '3'
services:
  cassandra:
    image: bitnami/cassandra:4.0
    network_mode: "host"
    restart: "always"
    volumes:
      - cassandra:/bitnami
    environment:
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      HEAP_NEWSIZE: "1024M"
      MAX_HEAP_SIZE: "2048M"
      JVM_EXTRA_OPTS: "-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=7199 -Dcom.sun.management.jmxremote.rmi.port=7199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  zookeeper:
    image: docker.io/bitnami/zookeeper:3.7
    network_mode: "host"
    restart: "always"
    volumes:
      - zookeeper:/bitnami
    environment:
      ALLOW_ANONYMOUS_LOGIN: "yes"
      ZOO_ENABLE_ADMIN_SERVER: "no"
      JVMFLAGS: "-Xmx128m -Xms128m -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9199 -Dcom.sun.management.jmxremote.rmi.port=9199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  kafka:
    image: docker.io/bitnami/kafka:3
    network_mode: "host"
    restart: "always"
    volumes:
      - kafka:/bitnami
    environment:
      KAFKA_CFG_ZOOKEEPER_CONNECT: "localhost:2181"
      ALLOW_PLAINTEXT_LISTENER: "yes"
      KAFKA_JMX_OPTS: "-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.rmi.port=1099 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
      JMX_PORT: "1099"
    depends_on:
      - zookeeper
  postgres:
    image: "postgres:14"
    network_mode: "host"
    restart: "always"
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: "thingsboard"
      POSTGRES_PASSWORD: "postgres"
  tb:
    depends_on:
      - postgres
      - kafka
      - cassandra
    image: "thingsboard/tb"
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      DATABASE_TS_TYPE: "cassandra"
      DATABASE_TS_LATEST_TYPE: "sql"
      #Cassandra
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      CASSANDRA_LOCAL_DATACENTER: "datacenter1"
      CASSANDRA_KEYSPACE_NAME: "thingsboard"
      CASSANDRA_URL: "127.0.0.1:9042"
      CASSANDRA_USE_CREDENTIALS: "true"
      CASSANDRA_USERNAME: "cassandra"
      CASSANDRA_PASSWORD: "cassandra"
      CASSANDRA_QUERY_BUFFER_SIZE: "100000"
      CASSANDRA_QUERY_CONCURRENT_LIMIT: "1000"
      CASSANDRA_QUERY_POLL_MS: "10"
      #Kafka
      TB_QUEUE_TYPE: "kafka"
      TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
      TB_KAFKA_LINGER_MS: "5" # default is 1
      TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "2048" # default is 8192
      TB_SERVICE_ID: "tb-node-0"
      HTTP_BIND_PORT: "8080"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
      # Postgres connection
      SPRING_JPA_DATABASE_PLATFORM: "org.hibernate.dialect.PostgreSQLDialect"
      SPRING_DRIVER_CLASS_NAME: "org.postgresql.Driver"
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      # Cache specs
      CACHE_SPECS_DEVICES_MAX_SIZE: "123456" # default is 10000
      CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE: "123456" # default is 10000 
      CACHE_SPECS_SESSIONS_MAX_SIZE: "123456" # default is 10000
      # Java options for 8G instance and JMX enabled
      JAVA_OPTS: " -Xmx3072M -Xms3072M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
volumes: # to persist data between container restarts or being recreated
  cassandra:
  kafka:
  zookeeper:
  postgres:
  thingsboard-data:
  thingsboard-logs:
```
{: .copy-code}

<details markdown="1">
<summary>
Launch performance test tool
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
export TB_HOST_VPC=172.31.16.229 # put your Thingsboard virtual private cloud VPC IP address here
export TB_HOST=52.50.5.45 # put your Thingsboard public IP address here
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_HOST_VPC:8080 \
  --env MQTT_HOST=$TB_HOST \
  --env DEVICE_END_IDX=25000 \
  --env MESSAGES_PER_SECOND=10000 \
  --env ALARMS_PER_SECOND=50 \
  --env DURATION_IN_SECONDS=86400 \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}

</details>

Here the queue stats. It looks solid. A small fluctuation on the chart is nominal.  
All systems have to run maintenance in background, so it is completely fine to have those chart for Thingsboard monolith deployment.    

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/queue-stats.png)

API usage about 10 hours. 1.1B data points

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/api-usage.png)

htop shows the system is working normally and have a plenty of resources to handle another jobs.
Memory consumption is about 9GiB, other memory is the system file cache. 
The instance with 16GiB is more that enough to run that load.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/htop.png)

Postgres is quite intensive update the TS latest values and reach the peak value about 60k updates/sec.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/postgresql-pgadmin-dashboard.png)

AWS instance monitoring shows about 75% average CPU load with a peak up to 88%

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/aws-instance-monitoring.png)

AWS storage monitoring. The disk load is extremely low compare to the PostgreSQL only deployment

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/aws-storage-monitoring.png)

Cassandra's disk size and IOPS usage is quite low (cheaper) compare to PostgreSQL-only deployments.

For 1.15B data points Cassandra uses 33GiB of disk space (29 GiB per 1B data points). 
As reminder, PostgreSQL takes about 161 GiB to persist 1.06B data points (152 GiB per 1B data points). 
It is more than x5 times (152 / 29) cheaper than PostgreSQL disk consumption!

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/cassandra-disk-size.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/telemetry-persisted-chart.png)

Finally, let's check the JVM state on each Thingboard, Zookeeper, Kafka and Cassandra
Let's forward JMX port with SSH to connect and monitor all Java applications presented.

```bash
ssh -L 9999:127.0.0.1:9999 -L 1099:127.0.0.1:1099 -L 9199:127.0.0.1:9199 -L 7199:127.0.0.1:7199 thingsboard 
```

Open VisualVM, add the local applications, open it and let the data being gathered for a few minutes. 

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/visualvm-forwarded-applications.png)

Here the JMX monitoring for Thingsboard. The system is stable.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/jmx-thingsboard.png)

Here the JMX monitoring for Kafka. The system is stable.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/jmx-kafka.png)

Here the JMX monitoring for Zookeeper. The system is stable.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/jmx-zookeeper.png)

Here the JMX monitoring for Cassandra.  The system is stable.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-15k/jmx-cassandra.png)

Conclusion: Cassandra requires more CPU resources, but it save x5 disk space, lower IOPS load.
CPU avg 75%. This is good setup with average load 10k msg/sec, 30k data point/sec.
Cassandra can handle x2-x3 more load (compare to PostgreSQL only) with a single instance deployment and able to scale up horizontally by adding a new nodes to the Cassandra cluster.    
It is a good idea to start with Cassandra from the very beginning of your Thingsboard instance and maintain the same stack for the entire project lifetime.
For the lower message rate, you can fit the Cassandra deployment to a much smaller instance adjusting the heap size limits.
System can be scaled up vertically up to 50-100%. For significant horizontal scaling, please, consider to set up a Thingsboard cluster.

### Cassandra - 100k devices, 5k msg/s

Load configuration: 100_000 devices, MQTT, 5000 msg/sec, 15000 data point/sec, MQTT, Postgres (TS latest), Kafka queue, Cassandra (TS)  
Instance: AWS m6a.2xlarge (8 vCPUs AMD EPYC 3rd, 32 GiB, EBS GP3)

To produce 100k simultaneous connection we need at least 2 performance-test instances. Regarding the maximum port count 65535 on a single server.

First, we need to increase ip local port range on performance test instance that setup many outgoing connections. Now we can open up to 64511 IP ports.  

```bash
ssh pt
cat /proc/sys/net/ipv4/ip_local_port_range
#32768	60999
echo "net.ipv4.ip_local_port_range = 1024 65535" | sudo tee -a /etc/sysctl.conf
sudo -s sysctl -p
cat /proc/sys/net/ipv4/ip_local_port_range
#1024	65535
ulimit -n 1048576
sudo sysctl -a | grep conntrack_max
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576
```
{: .copy-code}

Let's prepare the Thingsboard 

Here the docker-compose with Thingsboard + Postgresql + Zookeeper + Kafka + **Cassandra**

```bash
version: '3'
services:
  cassandra:
    image: bitnami/cassandra:4.0
    network_mode: "host"
    restart: "always"
    volumes:
      - cassandra:/bitnami
    environment:
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      HEAP_NEWSIZE: "4096M"
      MAX_HEAP_SIZE: "8192M"
      JVM_EXTRA_OPTS: "-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=7199 -Dcom.sun.management.jmxremote.rmi.port=7199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  zookeeper:
    image: docker.io/bitnami/zookeeper:3.7
    network_mode: "host"
    restart: "always"
    volumes:
      - zookeeper:/bitnami
    environment:
      ALLOW_ANONYMOUS_LOGIN: "yes"
      ZOO_ENABLE_ADMIN_SERVER: "no"
      JVMFLAGS: "-Xmx128m -Xms128m -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9199 -Dcom.sun.management.jmxremote.rmi.port=9199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  kafka:
    image: docker.io/bitnami/kafka:3
    network_mode: "host"
    restart: "always"
    volumes:
      - kafka:/bitnami
    environment:
      KAFKA_CFG_ZOOKEEPER_CONNECT: "localhost:2181"
      ALLOW_PLAINTEXT_LISTENER: "yes"
      KAFKA_JMX_OPTS: "-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.rmi.port=1099 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
      JMX_PORT: "1099"
    depends_on:
      - zookeeper
  postgres:
    image: "postgres:14"
    network_mode: "host"
    restart: "always"
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: "thingsboard"
      POSTGRES_PASSWORD: "postgres"
  tb:
    depends_on:
      - postgres
      - kafka
      - cassandra
    image: "thingsboard/tb"
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      DATABASE_TS_TYPE: "cassandra"
      DATABASE_TS_LATEST_TYPE: "sql"
      #Cassandra
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      CASSANDRA_LOCAL_DATACENTER: "datacenter1"
      CASSANDRA_KEYSPACE_NAME: "thingsboard"
      CASSANDRA_URL: "127.0.0.1:9042"
      CASSANDRA_USE_CREDENTIALS: "true"
      CASSANDRA_USERNAME: "cassandra"
      CASSANDRA_PASSWORD: "cassandra"
      CASSANDRA_QUERY_BUFFER_SIZE: "200000"
      CASSANDRA_QUERY_CONCURRENT_LIMIT: "1000"
      CASSANDRA_QUERY_POLL_MS: "5"
      #Kafka
      TB_QUEUE_TYPE: "kafka"
      TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
      TB_KAFKA_LINGER_MS: "5" # default is 1
      TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "2048" # default is 8192
      TB_SERVICE_ID: "tb-node-0"
      HTTP_BIND_PORT: "8080"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
      # Postgres connection
      SPRING_JPA_DATABASE_PLATFORM: "org.hibernate.dialect.PostgreSQLDialect"
      SPRING_DRIVER_CLASS_NAME: "org.postgresql.Driver"
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      # Cache specs
      CACHE_SPECS_DEVICES_MAX_SIZE: "512000" # default is 10000
      CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE: "512000" # default is 10000 
      CACHE_SPECS_SESSIONS_MAX_SIZE: "512000" # default is 10000
      TS_KV_PARTITIONS_MAX_CACHE_SIZE: "3000000" # default is 100000
      # Device state service
      DEFAULT_INACTIVITY_TIMEOUT: "1800" # defailt is 600 (10min)
      DEFAULT_STATE_CHECK_INTERVAL: "600" # default is 60 (1min)
      PERSIST_STATE_TO_TELEMETRY: "true" # Persist device state to the Cassandra. Default is false (Postgres, as device server_scope attributes)
      # Java options for 16G instance and JMX enabled
      JAVA_OPTS: " -Xmx8192M -Xms8192M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
    ulimits:
      nofile:
        soft: 1048576
        hard: 1048576
volumes: # to persist data between container restarts or being recreated
  cassandra:
  kafka:
  zookeeper:
  postgres:
  thingsboard-data:
  thingsboard-logs:
```
{: .copy-code}

Performance tests will be started as an application to reduce network setup complexity using the container.
Before you started, clone and build the performance test from source:
```bash
cd ~
git clone https://github.com/thingsboard/performance-tests.git
# git pull
cd performance-tests
./build.sh
```
{: .copy-code}


<details markdown="1">
<summary>
Launch performance test tool on the _first node_
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
cd ~/performance-tests
export REST_URL=http://172.31.16.229:8080 # put Thingsboard VPC IP here
export MQTT_HOST=52.50.5.45 # put Thingsboard public IP here
export DEVICE_START_IDX=0
export DEVICE_END_IDX=50000
export MESSAGES_PER_SECOND=2500
export ALARMS_PER_SECOND=10
export DURATION_IN_SECONDS=86400
export DEVICE_CREATE_ON_START=true # set true once
nohup mvn spring-boot:run &
```
{: .copy-code}

</details>

<details markdown="1">
<summary>
Launch performance test tool on the _second node_
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
cd ~/performance-tests
export REST_URL=http://172.31.16.229:8080 # put Thingsboard VPC API here
export MQTT_HOST=52.50.5.45 # put Thingsboard public IP here
export DEVICE_START_IDX=50000
export DEVICE_END_IDX=100000
export MESSAGES_PER_SECOND=2500
export ALARMS_PER_SECOND=10
export DURATION_IN_SECONDS=86400
export DEVICE_CREATE_ON_START=true # set true once
nohup mvn spring-boot:run &
```
{: .copy-code}

</details>

Test runs 24 hour and here the results:

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/queue-stats.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/api-usage.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/htop.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/postgresql-pgadmin-dashboard.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/jmx-visualvm-monitoring.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/aws-instance-monitoring.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/aws-storage-monitoring.png)
 

### Cassandra - 100k devices, 10k msg/sec

Load configuration: 100_000 devices, MQTT, 10_000 msg/sec, 30_000 data point/sec, MQTT, Postgres (TS latest), Kafka queue, Cassandra (TS, _device state_)  
Instance: AWS m6a.2xlarge (8 vCPUs AMD EPYC 3rd, 32 GiB, EBS GP3)

#### Persist device state to attributes (PostgreSQL)

With the msg rate is 10k/sec for 100k devices system can handle about 9k/sec in average.
The CPU load is 90%, so we face the PostgreSQL performance bottleneck. 
It is too many attribute updates with different keys.
The attribute 'lastActivityTime' in trying to update on each message received from device. 
With 5k devices it is no problem, but with 100k devices transaction became much slower.
As the next step we are going to write device state to the Cassandra.

#### Persist device state to telemetry (Cassandra)

Great improvement for performance is to persist **device state to Cassandra telemetry**.

```yaml
      PERSIST_STATE_TO_TELEMETRY: "true" # Persist device state to the Cassandra. Default is false (Postgres, as device server_scope attributes)
```

Here the docker-compose with Thingsboard + Postgresql + Zookeeper + Kafka + **Cassandra**

```yaml
version: '3'
services:
  cassandra:
    image: bitnami/cassandra:4.0
    network_mode: "host"
    restart: "always"
    volumes:
      - cassandra:/bitnami
    environment:
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      HEAP_NEWSIZE: "4096M"
      MAX_HEAP_SIZE: "8192M"
      JVM_EXTRA_OPTS: "-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=7199 -Dcom.sun.management.jmxremote.rmi.port=7199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  zookeeper:
    image: docker.io/bitnami/zookeeper:3.7
    network_mode: "host"
    restart: "always"
    volumes:
      - zookeeper:/bitnami
    environment:
      ALLOW_ANONYMOUS_LOGIN: "yes"
      ZOO_ENABLE_ADMIN_SERVER: "no"
      JVMFLAGS: "-Xmx128m -Xms128m -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9199 -Dcom.sun.management.jmxremote.rmi.port=9199  -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
  kafka:
    image: docker.io/bitnami/kafka:3
    network_mode: "host"
    restart: "always"
    volumes:
      - kafka:/bitnami
    environment:
      KAFKA_CFG_ZOOKEEPER_CONNECT: "localhost:2181"
      ALLOW_PLAINTEXT_LISTENER: "yes"
      KAFKA_JMX_OPTS: "-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.rmi.port=1099 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
      JMX_PORT: "1099"
    depends_on:
      - zookeeper
  postgres:
    image: "postgres:14"
    network_mode: "host"
    restart: "always"
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: "thingsboard"
      POSTGRES_PASSWORD: "postgres"
  tb:
    depends_on:
      - postgres
      - kafka
      - cassandra
    image: "thingsboard/tb"
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      DATABASE_TS_TYPE: "cassandra"
      DATABASE_TS_LATEST_TYPE: "sql"
      #Cassandra
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      CASSANDRA_LOCAL_DATACENTER: "datacenter1"
      CASSANDRA_KEYSPACE_NAME: "thingsboard"
      CASSANDRA_URL: "127.0.0.1:9042"
      CASSANDRA_USE_CREDENTIALS: "true"
      CASSANDRA_USERNAME: "cassandra"
      CASSANDRA_PASSWORD: "cassandra"
      CASSANDRA_QUERY_BUFFER_SIZE: "200000"
      CASSANDRA_QUERY_CONCURRENT_LIMIT: "1000"
      CASSANDRA_QUERY_POLL_MS: "5"
      #Kafka
      TB_QUEUE_TYPE: "kafka"
      TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
      TB_KAFKA_LINGER_MS: "5" # default is 1
      TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "2048" # default is 8192
      TB_SERVICE_ID: "tb-node-0"
      HTTP_BIND_PORT: "8080"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
      # Postgres connection
      SPRING_JPA_DATABASE_PLATFORM: "org.hibernate.dialect.PostgreSQLDialect"
      SPRING_DRIVER_CLASS_NAME: "org.postgresql.Driver"
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      # Cache specs
      CACHE_SPECS_DEVICES_MAX_SIZE: "512000" # default is 10000
      CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE: "512000" # default is 10000 
      CACHE_SPECS_SESSIONS_MAX_SIZE: "512000" # default is 10000
      TS_KV_PARTITIONS_MAX_CACHE_SIZE: "3000000" # default is 100000
      # Device state service
      #DEFAULT_INACTIVITY_TIMEOUT: "1800" # defailt is 600 (10min)
      #DEFAULT_STATE_CHECK_INTERVAL: "600" # default is 60 (1min)
      PERSIST_STATE_TO_TELEMETRY: "true" # Persist device state to the Cassandra. Default is false (Postgres, as device server_scope attributes)
      # Java options for 16G instance and JMX enabled
      JAVA_OPTS: " -Xss512k -Xmx8192M -Xms8192M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
    ulimits:
      nofile:
        soft: 1048576
        hard: 1048576
volumes: # to persist data between container restarts or being recreated
  cassandra:
  kafka:
  zookeeper:
  postgres:
  thingsboard-data:
  thingsboard-logs:
```
{: .copy-code}

Performance tests will be started as an application to reduce complexity using the container
Before you started, clone and build once the performance test:
```bash
cd ~
git clone https://github.com/thingsboard/performance-tests.git
# git pull
cd performance-tests
./build.sh
```
{: .copy-code}

<details markdown="1">
<summary>
Launch performance test tool on the _first node_
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
cd ~/performance-tests
export REST_URL=http://172.31.16.229:8080 # put your Thingsboard virtual private cloud VPC IP address here
export MQTT_HOST=52.50.5.45 # put your Thingsboard API here
export DEVICE_START_IDX=0
export DEVICE_END_IDX=50000
export MESSAGES_PER_SECOND=5000
export ALARMS_PER_SECOND=10
export DURATION_IN_SECONDS=86400
export DEVICE_CREATE_ON_START=true # set true once
nohup mvn spring-boot:run &
```
{: .copy-code}

</details>

<details markdown="1">
<summary>
Launch performance test tool on the _second node_
</summary>

Use the Docker command listed below to launch the performance test tool based on the [instruction](/docs/{{docsPrefix}}reference/performance/performance-test-methodology/).

```bash
cd ~/performance-tests
export REST_URL=http://172.31.16.229:8080 # put your Thingsboard virtual private cloud VPC IP address here
export MQTT_HOST=52.50.5.45 # put your Thingsboard API here
export DEVICE_START_IDX=50000
export DEVICE_END_IDX=100000
export MESSAGES_PER_SECOND=5000
export ALARMS_PER_SECOND=10
export DURATION_IN_SECONDS=86400
export DEVICE_CREATE_ON_START=true # set true once
nohup mvn spring-boot:run &
```
{: .copy-code}

</details>

Test results looks fine:

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/queue-stats.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/api-usage.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/htop.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/jmx-visualvm-monitoring.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/postgresql-pgadmin-dashboard.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/aws-instance-monitoring.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/aws-storage-monitoring.png)

**Conclusion**: the m6a.2xlarge can handle up to 100k devices with a message rate of up to 10k/sec.
CPU usage is 93%, so there are almost no extra resources left for a peak load and user activities.

#### Do we really have 100k device connected?

Here are some pointers on how to ensure that you have a valid test run with all devices created and connected

* All devices created. Open device List and check total device count.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-is-connected/devices-list-100k-thingsboard.png)

* All devices connected. Check the logs. Device count has to be greater than 100k

```bash
tb_1         | 2022-01-06 16:37:11,716 [TB-Scheduling-3] INFO  o.t.s.c.t.s.DefaultTransportService - Transport Stats: openConnections [100000]
```

* All device connected. Java JMX. VisualVM -> Thingsboard -> MBeans -> java.lang -> OpenFileDescriptorCount -> more than 100000

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-is-connected/jmx-mbeans-java-lang-operating-system-open-file-descriptor-count.png)

* Count TCP connections using command

```bash
ss -s
```
{: .copy-code}

#### 24h test run

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/queue-stats.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/api-usage.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/aws-instance-monitoring.png)

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/aws-storage-monitoring.png)


## Disk usage

### Postgres

By the end of the day in [Scenario B](#scenario-b), the system run out of the disk space.

The 200Gb disk was filled out in about 24 hours with average 5k msg/sec, 15k datapoints/sec; total messages 363M, data points 1.1B.

**Postgres** database size is 160GiB. It is about 7M data points per 1 GiB disk space. To reach much better disk space efficiency please, check the Cassandra disk space usage.

![](../../../images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/postgresql-disk-usage-total.png)

Detailed [PostgreSQL disk usage](https://wiki.postgresql.org/wiki/Disk_Usage) by tables and indexes

```postgresql
SELECT nspname || '.' || relname AS "relation", pg_size_pretty(pg_relation_size(C.oid)) AS "size"
  FROM pg_class C
  LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
  WHERE nspname NOT IN ('pg_catalog', 'information_schema')
  ORDER BY pg_relation_size(C.oid) DESC LIMIT 20;
```
{: .copy-code}

You can see the biggest table is timeseries (TS, telemetry, data points) and TS index. All telemetry divided my month to gain a stable performance.  
Test started in December and finished in January. The TS have two tables 2021_12 and 2022_01 for respective months.

![](../../../images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/postgresql-disk-usage-by-table.png)

**Kafka** size is 20GiB.

Tip: to plan and manage the Kafka disk space, please, adjust the [size retention policy](https://kafka.apache.org/documentation/#brokerconfigs_log.retention.bytes) and [period retention policy](https://www.baeldung.com/kafka-message-retention).

![](../../../images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/kafka-disk-usage-total.png)

Here the Kafka size by topics.

![](../../../images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/kafka-disk-usage-by-topic.png)

### Cassandra - disk usage

For 24 hours (100k devices, 432M msg) total datapoint stored is 1.3B

Cassandra's disk usage is about 20 GiB per 1.3B data points. It is about 65M data points per 1 GiB disk space.

![](../../../images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/disk-usage-cassandra.png)

Note: data size on disk may vary depends on the content.

### Disk usage summary

Compared with Postgresql, Cassandra's disk space consumption is about x10 times less.

Cassandra's advantage is the data compression and less overhead in a data structure.

Another benefit is Cassandra does less write operations than Postgres. It is enough to order storage with a standard IOPS plan and save money. 

## Thank you

Thank you for taking your time to read all this stuff.
Thanks to the Thingsboard community that filed issues and shared performance solutions around the time.
Thanks to all my colleagues that help me speed up the Thingsboard.

It was Thingsboard 3.3.3 version.

Feel free to send us feedback or share your fancy setup on [GitHub](https://github.com/thingsboard/performance-tests/issues)

See You next release!