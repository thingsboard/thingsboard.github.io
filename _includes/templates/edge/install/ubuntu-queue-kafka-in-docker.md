### Docker installation

Install Docker for [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

{% include templates/install/docker-install-note.md %}

{% include templates/edge/install/queue-kafka-in-docker.md %}

##### ThingsBoard Edge Configuration

Edit the **ThingsBoard Edge** configuration file (tb-edge.conf):

```text
echo -e "export TB_QUEUE_TYPE=kafka\nexport TB_KAFKA_SERVERS=localhost:9092" | sudo tee -a /etc/tb-edge/conf/tb-edge.conf > /dev/null
```
{: .copy-code}

**Make sure** to replace "localhost:9092" with your real Kafka bootstrap servers if necessary
