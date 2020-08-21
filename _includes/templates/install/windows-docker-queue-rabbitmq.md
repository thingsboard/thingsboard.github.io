#### RabbitMQ Installation

For installing RabbitMQ use this [instruction](https://www.rabbitmq.com/install-windows.html).

Create docker compose file for ThingsBoard queue service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don't forget to replace "YOUR_USERNAME" and "YOUR_PASSWORD" with your **real user credentials**, "localhost" and "5672" with your **real RabbitMQ host and port**:

```yml
version: '2.2'
services:
  mytb:
    restart: always
    image: "thingsboard/tb-postgres"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "5683:5683/udp"
    environment:
      TB_QUEUE_TYPE: rabbitmq
      TB_QUEUE_RABBIT_MQ_USERNAME: YOUR_USERNAME
      TB_QUEUE_RABBIT_MQ_PASSWORD: YOUR_PASSWORD
      TB_QUEUE_RABBIT_MQ_HOST: localhost
      TB_QUEUE_RABBIT_MQ_PORT: 5672
    volumes:
      - mytb-data:/data
      - mytb-logs:/var/log/thingsboard
volumes:
  mytb-data:
    external: true
  mytb-logs:
    external: true
```
{: .copy-code}
