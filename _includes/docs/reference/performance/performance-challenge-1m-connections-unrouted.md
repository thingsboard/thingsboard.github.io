### 1M connection setup with Docker and Ubuntu

How to modify the docker file to handle more connections out of the box (optional)

```dockerfile
FROM thingsboard/tb:latest
USER root
RUN echo 'net.ipv4.ip_local_port_range = 1024 65535' >> /etc/sysctl.conf
RUN echo 'fs.file-max = 1048576' >> /etc/sysctl.conf
RUN echo '*                soft    nofile          1048576' >> /etc/security/limits.conf
RUN echo '*                hard    nofile          1048576' >> /etc/security/limits.conf
RUN echo 'root             soft    nofile          1048576' >> /etc/security/limits.conf
RUN echo 'root             hard    nofile          1048576' >> /etc/security/limits.conf
USER thingsboard
```
{: .copy-code}

Add lines to your limits.conf file.

cat | sudo tee -a /etc/security/limits.conf

```
## /etc/security/limits.conf
## "nofile" mean "number of open files"
#<user>     <type>    <item>     <value>
*           soft      nofile     1048576
*           hard      nofile     1048576
root        soft      nofile     1048576
root        hard      nofile     1048576
```

Add lines to your sysctl.conf file.

cat | sudo tee -a /etc/sysctl.conf

```
## /etc/sysctl.conf
## Increase outbound connections
net.ipv4.ip_local_port_range = 1024 65535

## Increase inbound connections
## 1M+ file descriptors
fs.file-max = 1048576
```

### m6a.2xlarge (8 vCPUs AMD EPYC 3rd, 32 GiB, EBS GP3) + Cassandra - 500k devices, 5k msg/sec, 15k tps

Architecture is 1 Thingsboard server + 20 client instances each supply 25k devices (500k in total).

500k devices connected

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-2xlarge/500k-5k-15k/500k-is-connected-watsh-ss.png)

### m6a.4xlarge (16 vCPUs AMD EPYC 3rd, 64 GiB, EBS GP3)- 500k devices, 10k msg, 30k tps - almost handle

Almost handle, but it's hard to handle 10k mps rate with 500k devices without further optimization. Work in progress!

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/queue-stats.png)

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/api-usage.png)

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/aws-instance-monitoring.png)

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/aws-storage-monitoring.png)

### m6a.4xlarge (16 vCPUs AMD EPYC 3rd, 64 GiB, EBS GP3) + Cassandra - 1Million devices, 5k msg/sec, 15k tps

Architecture is 1 Thingsboard server + 32 clients instances each supply 31250 devices (1 million in total).

Prepare the instance `pt01` example. See the particular scripts that manages many instances at once

```bash
ssh tb2 <<'ENDSSH'
set +x
#optional. replace with your Thingsboard instance ip
#echo '52.50.5.45 thingsboard' | sudo tee -a /etc/hosts
#extend the local port range up to 64500 
cat /proc/sys/net/ipv4/ip_local_port_range
#32768	60999
echo "net.ipv4.ip_local_port_range = 1024 65535" | sudo tee -a /etc/sysctl.conf
sudo -s sysctl -p
cat /proc/sys/net/ipv4/ip_local_port_range
#1024	65535
sudo apt update
sudo apt install -y git maven docker docker-compose htop iotop mc screen
# manage Docker as a non-root user
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
# test non-root docker run
docker run hello-world
cd ~
git clone https://github.com/thingsboard/performance-tests.git
# git pull
cd performance-tests
./build.sh
ENDSSH
```

```bash
ssh pt01 <<'ENDSSH'
cd ~/performance-tests
export REST_URL=http://172.31.25.132:8080
export MQTT_HOST=54.171.220.200
export DEVICE_START_IDX=0
export DEVICE_END_IDX=50000
export MESSAGES_PER_SECOND=500
export ALARMS_PER_SECOND=1
export DURATION_IN_SECONDS=86400
export DEVICE_CREATE_ON_START=true
nohup mvn spring-boot:run &
ENDSSH
```

Important: to handle more than 256k (limit depends on total memory size) TCP connections, please adjust the `conntrack_max` system parameter.

Run this once on `thingsboard` node to increase file descriptor and net filter limits. This is required to handle about 1M TCP connections.

```bash
ulimit -n 1048576
sudo sysctl -a | grep conntrack_max
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576
```

scripts for managing 20-32 test instances

_includes/docs/reference/performance-scripts/*.sh
init-tests.sh
ping-from-tests.sh
reboot-tests.sh
run-test.sh
ssh-tests.sh
test-ips.sh

Here the docker-compose config

```bash
#1M (million) devices
version: '3.0'
services:
  cassandra:
    image: bitnami/cassandra:4.0
    network_mode: "host"
    restart: "always"
    volumes:
      - cassandra:/bitnami
    environment:
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      HEAP_NEWSIZE: "6144M"
      MAX_HEAP_SIZE: "12288M"
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
#      KAFKA_CFG_LISTENERS: "PLAINTEXT://:9092"
#      KAFKA_CFG_ADVERTISED_LISTENERS: "PLAINTEXT://127.0.0.1:9092"
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
    image: "thingsboard/tb"
#    build:
#      context: .
#      dockerfile: Dockerfile # for the custom build for experimental setup
    depends_on:
      - postgres
      - kafka
      - cassandra
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      DATABASE_TS_TYPE: "cassandra"
      DATABASE_TS_LATEST_TYPE: "cassandra" # this is a key difference
      #Cassandra
      CASSANDRA_CLUSTER_NAME: "Thingsboard Cluster"
      CASSANDRA_LOCAL_DATACENTER: "datacenter1"
      CASSANDRA_KEYSPACE_NAME: "thingsboard"
      CASSANDRA_URL: "127.0.0.1:9042"
      CASSANDRA_USE_CREDENTIALS: "true"
      CASSANDRA_USERNAME: "cassandra"
      CASSANDRA_PASSWORD: "cassandra"
      CASSANDRA_QUERY_BUFFER_SIZE: "3000000"
      CASSANDRA_QUERY_CONCURRENT_LIMIT: "3000"
      CASSANDRA_QUERY_POLL_MS: "3"
      #Kafka
      TB_QUEUE_TYPE: "kafka"
      TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
      TB_KAFKA_LINGER_MS: "5" # default is 1
      TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "2048" # default is 8192
      TB_SERVICE_ID: "tb-node-0"
      HTTP_BIND_PORT: "8088"
      # Queue
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
      TB_QUEUE_CORE_PACK_PROCESSING_TIMEOUT_MS: "20000"
      TB_QUEUE_RE_MAIN_CONSUMER_PER_PARTITION: "true"
      TB_QUEUE_RE_HP_CONSUMER_PER_PARTITION: "false"
      TB_QUEUE_RE_SQ_CONSUMER_PER_PARTITION: "false"
      ACTORS_SYSTEM_RULE_DISPATCHER_POOL_SIZE: "8"
      # Postgres connection
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      SPRING_DATASOURCE_MAXIMUM_POOL_SIZE: "25"
      # Cache specs
      #1M devices
      CACHE_SPECS_DEVICES_MAX_SIZE: "1048000" # default is 10000
      CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE: "1048000" # default is 10000 
      CACHE_SPECS_SESSIONS_MAX_SIZE: "1048000" # default is 10000
      TS_KV_PARTITIONS_MAX_CACHE_SIZE: "4194000" # default is 100000
      # Device state service
      DEFAULT_INACTIVITY_TIMEOUT: "1800" # defailt is 600 sec (10min)
      DEFAULT_STATE_CHECK_INTERVAL: "900" # default is 60 sec(1min)
      TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT: "60000" # default is 3000 msec
      TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT: "600000" # default is 300000 msec
      PERSIST_STATE_TO_TELEMETRY: "true" # Persist device state to the Cassandra. Default is false (Postgres, as device server_scope attributes)
      #Transport API
      TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS: "1000000" # default is 10k
      #DEBUG
      CASSANDRA_USE_JMX: "true"
      CASSANDRA_USE_METRICS: "true"
      # Java options for 64G instance and JMX enabled 
      JAVA_OPTS: " -Xss512k -Xmx20480M -Xms20480M -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
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

How to forward JMX port with ssh for all Java application in this deployment.
```bash
ssh -L 9999:127.0.0.1:9999 -L 1099:127.0.0.1:1099 -L 9199:127.0.0.1:9199 -L 7199:127.0.0.1:7199 thingsboard 
```

Enable pg_stat_statements preload library for PostgreSQL
```bash
#config before 
docker exec -it ubuntu_postgres_1 tail /var/lib/postgresql/data/postgresql.conf
#apply changes
docker exec -it ubuntu_postgres_1 /bin/bash
echo "shared_preload_libraries = 'pg_stat_statements'" >> /var/lib/postgresql/data/postgresql.conf
exit
#check the result 
docker exec -it ubuntu_postgres_1 tail /var/lib/postgresql/data/postgresql.conf
```

Check network connection count.
`watch -n 1 ss -s`

How to make a Java heap dump
```bash
ssh thingsboard
#docker exec -it ubuntu_tb_1 /bin/bash
docker exec -it ubuntu_tb_1 ps -A | grep java
# 8 ?        00:01:46 java
docker exec -it ubuntu_tb_1 jmap -dump:live,format=b,file=/data/dump.hprof 8
# Heap dump file created
sudo mv /var/lib/docker/volumes/ubuntu_thingsboard-data/_data/dump.hprof ~
sudo chown ubuntu:ubuntu ~/dump.hprof
exit
#copy with compression - much faster
scp -C tb2:/home/ubuntu/dump.hprof ~
```

Here the results for 1M devices!

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/queue-stats.png)

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/api-usage.png)

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/aws-instance-monitoring.png)

![](https://img.thingsboard.io/reference/performance-aws-instances/method/m6a-4xlarge/500k-10k-30k/aws-storage-monitoring.png)

Conclusion:
1. We did it! Thingsboard has been demonstrated the code and design quality.
2. It is too risky to go production with monolith with more than 100k devices on a single node.
3. Never do such experiments on the production environment.
4. This case helps to discover the bottlenecks and further improve performance.