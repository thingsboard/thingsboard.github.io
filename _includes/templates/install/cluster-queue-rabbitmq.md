For installing RabbitMQ use this [instruction](https://www.rabbitmq.com/install-debian.html).

Configure ThingsBoard environment file:

```text
nano .env
```
{: .copy-code}

Check following line:

```bash
TB_QUEUE_TYPE=rabbitmq
```
{: .copy-code}

Configure RabbitMQ environment file for ThingsBoard queue service:

```text
nano queue-rabbitmq.env
```
{: .copy-code}

Don't forget to replace "YOUR_USERNAME" and "YOUR_PASSWORD" with your **real user credentials**, "localhost" and "5672" with your **real RabbitMQ host and port**:

```bash
TB_QUEUE_TYPE=rabbitmq
TB_QUEUE_RABBIT_MQ_HOST=localhost
TB_QUEUE_RABBIT_MQ_PORT=5672
TB_QUEUE_RABBIT_MQ_USERNAME=YOUR_USERNAME
TB_QUEUE_RABBIT_MQ_PASSWORD=YOUR_PASSWORD
```
{: .copy-code}
