{% include templates/edge/install/queue-kafka-in-docker.md %}

##### ThingsBoard Edge Configuration

Edit **ThingsBoard Edge** configuration file:

```bash 
sudo nano /etc/tb-edge/conf/tb-edge.conf
``` 
{: .copy-code}

Add the following line to the configuration file. Replace "localhost:9092" with **your real Kafka bootstrap servers** if needed:

```bash
export TB_QUEUE_TYPE=kafka
export TB_KAFKA_SERVERS=localhost:9092
```