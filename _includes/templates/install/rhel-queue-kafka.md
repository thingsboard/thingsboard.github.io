#### Kafka Installation

[Apache Kafka](https://kafka.apache.org/) is an open-source stream-processing software platform.

##### Install Kafka

We recommend to use Kafka in Docker container, use this [instruction](https://github.com/wurstmeister/kafka-docker) for installing.

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