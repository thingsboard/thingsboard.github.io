
For installing RabbitMQ use this [instruction](https://www.rabbitmq.com/install-debian.html).

Configuration environment file for ThingsBoard queue service:

```text
nano tb-node.env
```
{: .copy-code}

Add the following line to the file. Don't forget to replace "YOUR_USERNAME" and "YOUR_PASSWORD" with your **real user credentials**, "localhost" and "5672" with your **real RabbitMQ host and port**:

```bash
TB_QUEUE_TYPE=rabbitmq
TB_QUEUE_RABBIT_MQ_USERNAME=YOUR_USERNAME
TB_QUEUE_RABBIT_MQ_PASSWORD=YOUR_PASSWORD
TB_QUEUE_RABBIT_MQ_HOST=localhost
TB_QUEUE_RABBIT_MQ_PORT=5672
```
{: .copy-code}

Check docker-compose.yml and configure ports if you need:

```bash
nano docker-compose.yml
```

```bash
services:
  tbpe:
    restart: always
    image: "${DOCKER_REPO}/${TB_NODE_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "7070:7070"
      - "5683-5688:5683-5688/udp"
```
{: .copy-code}
