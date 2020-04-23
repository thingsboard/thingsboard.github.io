#### Kafka Installation

[Apache Kafka](https://kafka.apache.org/) is an open-source stream-processing software platform. 
ThingsBoard uses Kafka like queue service for some API calls between micro-services.

##### Install ZooKeeper

Kafka uses [ZooKeeper](https://zookeeper.apache.org/) so you need to first install ZooKeeper server:

```text
sudo apt-get install zookeeper
```
{: .copy-code}

##### Install Kafka

```text
wget http://www-us.apache.org/dist/kafka/2.4.0/kafka_2.13-2.4.0.tgz

tar xzf kafka_2.13-2.4.0.tgz

sudo mv kafka_2.13-2.4.0 /usr/local/kafka
```

##### Setup ZooKeeper Systemd Unit file

Create systemd unit file for Zookeeper:
```text
sudo nano /etc/systemd/system/zookeeper.service
```
{: .copy-code}

Add below contnet:
```bash
[Unit]
Description=Apache Zookeeper server
Documentation=http://zookeeper.apache.org
Requires=network.target remote-fs.target
After=network.target remote-fs.target

[Service]
Type=simple
ExecStart=/usr/local/kafka/bin/zookeeper-server-start.sh /usr/local/kafka/config/zookeeper.properties
ExecStop=/usr/local/kafka/bin/zookeeper-server-stop.sh
Restart=on-abnormal

[Install]
WantedBy=multi-user.target
```
{: .copy-code}

##### Setup Kafka Systemd Unit file

Create systemd unit file for Kafka:
```text
sudo nano /etc/systemd/system/kafka.service
```
{: .copy-code}

Add the below content. Make sure **to replace** "PUT_YOUR_JAVA_PATH" with your **real JAVA_HOME path** as per the Java installed on your system: 
```bash
[Unit]
Description=Apache Kafka Server
Documentation=http://kafka.apache.org/documentation.html
Requires=zookeeper.service

[Service]
Type=simple
Environment="JAVA_HOME=/usr/lib/jvm/PUT_YOUR_JAVA_PATH"
ExecStart=/usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties
ExecStop=/usr/local/kafka/bin/kafka-server-stop.sh

[Install]
WantedBy=multi-user.target
```
{: .copy-code}
##### Start ZooKeeper and Kafka:
```text
sudo systemctl start zookeeper

sudo systemctl start kafka

```

##### Kafka configuration

You will need to change following Queue type parameter in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
  type: "${TB_QUEUE_TYPE:kafka}"
```

If need you can configure default Kafka parameters in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):
```bash
queue:
...
  kafka:
    bootstrap.servers: "${TB_KAFKA_SERVERS:localhost:9092}"
    acks: "${TB_KAFKA_ACKS:all}"
    retries: "${TB_KAFKA_RETRIES:1}"
    batch.size: "${TB_KAFKA_BATCH_SIZE:16384}"
    linger.ms: "${TB_KAFKA_LINGER_MS:1}"
    buffer.memory: "${TB_BUFFER_MEMORY:33554432}"
    replication_factor: "${TB_QUEUE_KAFKA_REPLICATION_FACTOR:1}"
    topic-properties:
      rule-engine: "${TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES:retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000}"
      core: "${TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES:retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000}"
      transport-api: "${TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES:retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000}"
      notifications: "${TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES:retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000}"
      js-executor: "${TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES:retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600}"
```
