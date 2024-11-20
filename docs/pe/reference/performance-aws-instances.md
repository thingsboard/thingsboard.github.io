---
layout: docwithnav-pe
title: ThingsBoard Performance on different AWS instances
description: ThingsBoard Performance on different AWS instances results

postgres-only-1000:
    0:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/queue-stats.png  
        title: 'Thingsboard queue stats'
    1:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/api-usage.png
        title: 'Thingsboard API usage'
    2:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/htop.png
        title: 'htop'
    3:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/jmx-visualvm-monitoring.png
        title: 'JMX VisualVM monitoring'
    4:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard'
    5:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/aws-instance-monitoring.png
        title: 'AWS instance monitoring'
    6:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/aws-storage-monitoring.png
        title: 'AWS storage monitoring'

postgres-only-1000-arm:
    0:
        image: /images/reference/performance-aws-instances/method/arm/t4g-medium/postgres/queue-stats.png  
        title: 'Thingsboard queue stats on ARM architecture'
    1:
        image: /images/reference/performance-aws-instances/method/arm/t4g-medium/postgres/api-usage.png
        title: 'Thingsboard API usage on ARM architecture'
    2:
        image: /images/reference/performance-aws-instances/method/arm/t4g-medium/postgres/htop.png
        title: 'htop on ARM architecture'
    3:
        image: /images/reference/performance-aws-instances/method/arm/t4g-medium/postgres/jmx-visualvm-monitoring.png
        title: 'JMX VisualVM monitoring on ARM architecture'
    4:
        image: /images/reference/performance-aws-instances/method/arm/t4g-medium/postgres/postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard on ARM architecture'
    5:
        image: /images/reference/performance-aws-instances/method/arm/t4g-medium/postgres/aws-instance-monitoring.png
        title: 'AWS instance monitoring on ARM architecture'
    6:
        image: /images/reference/performance-aws-instances/method/arm/t4g-medium/postgres/aws-storage-monitoring.png
        title: 'AWS storage monitoring on ARM architecture'

postgres-only-x3-stress:
    0:
        image: /images/reference/performance-aws-instances/method/t3-medium/burst-x3/burst-x3-queue-stats.png  
        title: 'Thingsboard queue stats'
    1:
        image: /images/reference/performance-aws-instances/method/t3-medium/burst-x3/burst-x3-api-usage.png
        title: 'Thingsboard API usage'
    2:
        image: /images/reference/performance-aws-instances/method/t3-medium/burst-x3/burst-x3-htop.png
        title: 'htop'
    3:
        image: /images/reference/performance-aws-instances/method/t3-medium/burst-x3/burst-x3-jmx-visualvm-monitoring.png
        title: 'JMX VisualVM monitoring'
    4:
        image: /images/reference/performance-aws-instances/method/t3-medium/burst-x3/burst-x3-postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard'
    5:
        image: /images/reference/performance-aws-instances/method/t3-medium/burst-x3/burst-x3-aws-instance-monitoring.png
        title: 'AWS instance monitoring'
    6:
        image: /images/reference/performance-aws-instances/method/t3-medium/burst-x3/burst-x3-aws-storage-monitoring.png
        title: 'AWS storage monitoring'

postgres-only-x10-stress:
    0:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/beginning-htop.png  
        title: '100% CPU load at the beginning x10 stress test'
    1:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/beginning-queue-stats.png
        title: 'Queue stats - performance degrade'
    2:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/beginning-jmx-visualvm-monitoring.png
        title: 'Heap memory used is constantly growing on the JMX monitor'
    3:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/queue-stats.png
        title: 'Queue stats drop to zero and do not respond anymore'
    4:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/htop.png
        title: 'CPU is still 100% load, but mainly spending on the garbage collector'
    5:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/jmx-visualvm-monitoring.png
        title: 'JMX VusialVM monitoring on system dying due to out of memory'
    6:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/out-of-memory.png
        title: 'Out of memory log message'
    7:
        image: /images/reference/performance-aws-instances/method/t3-medium/flood-x10/aws-instance-monitoring.png
        title: 'AWS instance monitoring during the x10 stress test'

postgres-only-6000:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-queue-stats-dashboard.png  
        title: 'Queue stats dashboard'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-api-usage-dashboard.png
        title: 'Thingsboard API usage dashboard'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-htop-cpu-memory-io-monitoring.png
        title: 'htop: CPU, memory, IO read/write'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-jmx-visualvm-monitoring.png
        title: 'Java CPU and heap monitoring with JMX VisualVM'
    4:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-postgresql-pgadmin-dashboard.png
        title: 'Postgres PgAdmin dashboard'
    5:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-cpu-network-monitoring.png
        title: 'AWS CPU and network monitoring'
    6:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-disk-monitoring.png
        title: 'AWS storage monitoring'
    7:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres/thingsboard-aws-m6a-large-disk-type.png
        title: 'Storage type GP3, 3000 IOPS, 125 MB/s'

postgres-kafka-5000:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/queue-stats.png  
        title: 'Thingsboard queue stats'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/api-usage.png
        title: 'Thingsboard API usage'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/htop.png
        title: 'htop'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/jmx-visualvm-monitoring.png
        title: 'JMX VisualVM monitoring'
    4:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard'
    5:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/aws-instance-monitoring.png
        title: 'AWS instance monitoring'
    6:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/aws-storage-monitoring.png
        title: 'AWS storage monitoring'

postgres-kafka-5000-long-running:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/long-running/queue-stats-long-running.png  
        title: 'Thingsboard queue stats'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/long-running/api-usage-long-running.png
        title: 'Thingsboard API usage'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/long-running/jmx-visualvm-monitoring-long-running.png
        title: 'JMX VisualVM monitoring'

postgres-kafka-x3-stress:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/htop-stress-x3.png  
        title: '100% CPU utilization. The system is overloaded'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/queue-stats-stress-x3.png
        title: 'Thingsboard queue stats under x3 stress test'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/jmx-visualvm-monitoring-long-running-stress-x3.png
        title: 'Java machine feels good. Heap memory has enough space to operate'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/kafka-producer-jmx-mbean-stress-x3.png
        title: 'Kafka producer state with JMX MBean'
    4:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/kafka-lag-stress-x3.png
        title: 'Kafka Lag is building up'
   
postgres-kafka-x3-stress-back-to-x1:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/queue-stats--x1--stress-x3--x1.png
        title: 'Rule engine stats for x1, x3, and back to x1 loads'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/api-usage--x1--stress-x3--x1.png
        title: 'Here are the API usage stats that shows the transport rate (incoming messages and data points) and the rule engine performance'
    2:
       image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/kafka-lag-stress-x3-after.png  
       title: 'Kafka lag is going down'

cassandra-25k-10k-30k:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/queue-stats.png  
        title: 'Queue stats dashboard'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/api-usage.png
        title: 'Thingsboard API usage dashboard'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/htop.png
        title: 'htop: CPU, memory, IO read/write'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/postgresql-pgadmin-dashboard.png
        title: 'Postgres PgAdmin dashboard'
    4:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/aws-instance-monitoring.png
        title: 'AWS CPU and network monitoring'
    5:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/aws-storage-monitoring.png
        title: 'AWS storage monitoring'

cassandra-25k-10k-30k-disk:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/cassandra-disk-size.png
        title: 'Cassandra disk size usage'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/telemetry-persisted-chart.png
        title: 'Telemetry persisted chart'

cassandra-25k-10k-30k-jmx:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/visualvm-forwarded-applications.png
        title: 'VisualVM Java application list'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/jmx-thingsboard.png
        title: 'JMX monitoring for the Thingsboard. The system is stable'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/jmx-kafka.png
        title: 'JMX monitoring for the Kafka. The system is stable'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/jmx-zookeeper.png
        title: 'JMX monitoring for the Zookeeper. The system is stable'
    4:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/25k-10k-30k/jmx-cassandra.png
        title: 'JMX monitoring for the Cassandra. The system is stable'

cassandra-100k-5k-15k:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/queue-stats.png  
        title: 'Queue stats dashboard'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/api-usage.png
        title: 'Thingsboard API usage dashboard'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/htop.png
        title: 'htop: CPU, memory, IO read/write'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/jmx-visualvm-monitoring.png
        title: 'JMX VisualVM monitoring'
    4:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/postgresql-pgadmin-dashboard.png
        title: 'Postgres PgAdmin dashboard'
    5:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/aws-instance-monitoring.png
        title: 'AWS CPU and network monitoring'
    6:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/aws-storage-monitoring.png
        title: 'AWS storage monitoring'
    7:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/disk-usage-cassandra.png
        title: 'Cassandra disk usage'

cassandra-100k-10k-30k:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/queue-stats.png  
        title: 'Queue stats dashboard'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/api-usage.png
        title: 'Thingsboard API usage dashboard'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/htop.png
        title: 'htop: CPU, memory, IO read/write'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/jmx-visualvm-monitoring.png
        title: 'JMX VisualVM monitoring'
    4:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/postgresql-pgadmin-dashboard.png
        title: 'Postgres PgAdmin dashboard'
    5:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/aws-instance-monitoring.png
        title: 'AWS CPU and network monitoring'
    6:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/aws-storage-monitoring.png
        title: 'AWS storage monitoring'

cassandra-100k-10k-30k-24h:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/queue-stats.png  
        title: 'Queue stats dashboard'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/api-usage.png
        title: 'Thingsboard API usage dashboard'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/aws-instance-monitoring.png
        title: 'AWS CPU and network monitoring'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-10k-30k/24h-run/aws-storage-monitoring.png
        title: 'AWS storage monitoring'

thingsboard-100k-devices-connected:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-is-connected/devices-list-100k-thingsboard.png  
        title: 'Device List with 100k+ lines'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-is-connected/jmx-mbeans-java-lang-operating-system-open-file-descriptor-count.png
        title: 'Jmx MBeans java.lang.operating_system open_file_descriptor_count'

postgres-kafka-disk-usage:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/postgresql-disk-usage-total.png  
        title: 'Postgres disk usage total'
    1:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/postgresql-disk-usage-by-table.png
        title: 'Postgres disk usage by table'
    2:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/kafka-disk-usage-total.png
        title: 'Kafka disk usage total'
    3:
        image: /images/reference/performance-aws-instances/method/m6a-large/postgres-kafka/stress-x3/kafka-disk-usage-by-topic.png
        title: 'Kafka disk usage by topic'

cassandra-disk-usage:
    0:
        image: /images/reference/performance-aws-instances/method/m6a-2xlarge/100k-5k-15k/disk-usage-cassandra.png  
        title: 'Cassandra disk usage is about 20 GiB per 1.3B data points'


---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include /docs/reference/performance-aws-instances.md %}
