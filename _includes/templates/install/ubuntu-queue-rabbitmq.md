#### RabbitMQ Installation

For installation RabbitMQ you can use [official docs](https://www.rabbitmq.com/install-debian.html), or our instruction bellow:

Since RabbitMQ is written in Erlang, you need to install Erlang before you can use RabbitMQ:

```text
sudo apt-get install erlang
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
{: .copy-code}

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