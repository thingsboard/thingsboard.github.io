#### RabbitMQ Installation

Since RabbitMQ is written in Erlang, you need to install Erlang before you can use RabbitMQ:

```text
cd ~
wget http://packages.erlang-solutions.com/site/esl/esl-erlang/FLAVOUR_1_general/esl-erlang_20.1-1~ubuntu~xenial_amd64.deb
sudo dpkg -i esl-erlang_20.1-1\~ubuntu\~xenial_amd64.deb
```
{: .copy-code}

Install the rabbitmq-server package:

```text
sudo apt-get install rabbitmq-server
```
{: .copy-code}

Start the Server:

```text
sudo systemctl start rabbitmq-server.service
sudo systemctl enable rabbitmq-server.service
```
{: .copy-code}

By default, RabbitMQ creates a user named "guest" with a password "guest". 
You can also create your own administrator account on RabbitMQ server using following commands.
Don’t forget to replace "PUT_YOUR_USER_NAME" like: "admin" and "PUT_YOUR_PASSWORD" with your **own user name and password:**
```text
sudo rabbitmqctl add_user PUT_YOUR_USER_NAME PUT_YOUR_PASSWORD 
sudo rabbitmqctl set_user_tags PUT_YOUR_USER_NAME administrator
sudo rabbitmqctl set_permissions -p / PUT_YOUR_USER_NAME ".*" ".*" ".*"
```

You will need to change following Queue type parameter in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
  type: "${TB_QUEUE_TYPE:rabbitmq}"
```


Add your credentials in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml).  Don’t forget to replace "YOUR_USERNAME" and "YOUR_PASSWORD" with your **real user credentials:**

```bash
queue:
...
  rabbitmq:
    username: "${TB_QUEUE_RABBIT_MQ_USERNAME:YOUR_USERNAME}"
    password: "${TB_QUEUE_RABBIT_MQ_PASSWORD:YOUR_PASSWORD}"
```

If need you can configure default RabbitMQ parameters in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
...
  rabbitmq:
...
    exchange_name: "${TB_QUEUE_RABBIT_MQ_EXCHANGE_NAME:}"
      host: "${TB_QUEUE_RABBIT_MQ_HOST:localhost}"
      port: "${TB_QUEUE_RABBIT_MQ_PORT:5672}"
      virtual_host: "${TB_QUEUE_RABBIT_MQ_VIRTUAL_HOST:/}"
      automatic_recovery_enabled: "${TB_QUEUE_RABBIT_MQ_AUTOMATIC_RECOVERY_ENABLED:false}"
      connection_timeout: "${TB_QUEUE_RABBIT_MQ_CONNECTION_TIMEOUT:60000}"
      handshake_timeout: "${TB_QUEUE_RABBIT_MQ_HANDSHAKE_TIMEOUT:10000}"
      queue-properties:
        rule-engine: "${TB_QUEUE_RABBIT_MQ_RE_QUEUE_PROPERTIES:x-max-length-bytes:1048576000;x-message-ttl:604800000}"
        core: "${TB_QUEUE_RABBIT_MQ_CORE_QUEUE_PROPERTIES:x-max-length-bytes:1048576000;x-message-ttl:604800000}"
        transport-api: "${TB_QUEUE_RABBIT_MQ_TA_QUEUE_PROPERTIES:x-max-length-bytes:1048576000;x-message-ttl:604800000}"
        notifications: "${TB_QUEUE_RABBIT_MQ_NOTIFICATIONS_QUEUE_PROPERTIES:x-max-length-bytes:1048576000;x-message-ttl:604800000}"
        js-executor: "${TB_QUEUE_RABBIT_MQ_JE_QUEUE_PROPERTIES:x-max-length-bytes:1048576000;x-message-ttl:604800000}"
```
