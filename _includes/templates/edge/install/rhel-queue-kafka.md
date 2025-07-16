#### Docker installation

Install Docker for [CentOS/RHEL](https://docs.docker.com/engine/install/centos/)

{% include templates/install/docker-install-note.md %}

{% include templates/edge/install/queue-kafka-in-docker.md %}

##### ThingsBoard Edge Configuration

Edit the **ThingsBoard Edge** configuration file (tb-edge.conf):

```bash
echo -e "\nexport TB_QUEUE_TYPE=kafka\nexport TB_KAFKA_SERVERS=localhost:9092" | sudo tee -a /etc/tb-edge/conf/tb-edge.conf > /dev/null
```