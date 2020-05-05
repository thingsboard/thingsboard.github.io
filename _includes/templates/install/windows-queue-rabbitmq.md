#### RabbitMQ Installation

For installing RabbitMQ use this [instruction](https://www.rabbitmq.com/install-windows.html).

##### ThingsBoard Configuration


Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "queue:" block. Make sure the queue type is "rabbitmq" and don't forget to replace "YOUR_USERNAME" and "YOUR_PASSWORD" with your **real user credentials**, "localhost" and "5672" with your **real RabbitMQ host and port**:

```yml
queue:
  type: "${TB_QUEUE_TYPE:rabbitmq}"
...
  rabbitmq:
    exchange_name: "${TB_QUEUE_RABBIT_MQ_EXCHANGE_NAME:}"
    host: "${TB_QUEUE_RABBIT_MQ_HOST:localhost}"
    port: "${TB_QUEUE_RABBIT_MQ_PORT:5672}"
    virtual_host: "${TB_QUEUE_RABBIT_MQ_VIRTUAL_HOST:/}"
    username: "${TB_QUEUE_RABBIT_MQ_USERNAME:YOUR_USERNAME}"
    password: "${TB_QUEUE_RABBIT_MQ_PASSWORD:YOUR_PASSWORD}"
    automatic_recovery_enabled: "${TB_QUEUE_RABBIT_MQ_AUTOMATIC_RECOVERY_ENABLED:false}"
    connection_timeout: "${TB_QUEUE_RABBIT_MQ_CONNECTION_TIMEOUT:60000}"
    handshake_timeout: "${TB_QUEUE_RABBIT_MQ_HANDSHAKE_TIMEOUT:10000}"
    queue-properties:
```
