#### RabbitMQ Installation

Use this [instruction](https://www.rabbitmq.com/install-debian.html) for installing RabbitMQ.

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don't forget to replace "YOUR_USERNAME" and "YOUR_PASSWORD" with your **real user credentials**, "localhost" and "5672" with your **real RabbitMQ host and port**:

```bash
export TB_QUEUE_TYPE=rabbitmq
export TB_QUEUE_RABBIT_MQ_USERNAME=YOUR_USERNAME
export TB_QUEUE_RABBIT_MQ_PASSWORD=YOUR_PASSWORD
export TB_QUEUE_RABBIT_MQ_HOST=localhost
export TB_QUEUE_RABBIT_MQ_PORT=5672
```
{: .copy-code}