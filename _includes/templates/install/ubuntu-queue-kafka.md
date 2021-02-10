#### Kafka Installation

[Apache Kafka](https://kafka.apache.org/) is an open-source stream-processing software platform.

##### Install ZooKeeper

Kafka uses [ZooKeeper](https://zookeeper.apache.org/) so you need to first install ZooKeeper server:

```text
sudo apt-get install zookeeper
```
{: .copy-code}

##### Install Kafka

```text
wget http://www-us.apache.org/dist/kafka/2.3.0/kafka_2.12-2.3.0.tgz

tar xzf kafka_2.12-2.3.0.tgz

sudo mv kafka_2.12-2.3.0 /usr/local/kafka
```
{: .copy-code}

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

Add the below content. Make sure **to replace** "PUT_YOUR_JAVA_PATH" with your **real JAVA_HOME path** as per the Java installed on your system, by default like "/usr/lib/jvm/java-1.8.0-openjdk-xxx": 
```bash
[Unit]
Description=Apache Kafka Server
Documentation=http://kafka.apache.org/documentation.html
Requires=zookeeper.service

[Service]
Type=simple
Environment="JAVA_HOME=PUT_YOUR_JAVA_PATH"
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
{: .copy-code}

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following line to the configuration file. **Don't forget** to replace "localhost:9092" with your real Kafka bootstrap servers:

```bash
export TB_QUEUE_TYPE=kafka
export TB_KAFKA_SERVERS=localhost:9092
```
{: .copy-code}
