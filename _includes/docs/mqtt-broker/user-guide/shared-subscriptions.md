
* TOC
{:toc}

Shared subscription is a powerful feature that was officially introduced in MQTT v5. It had high importance from the end-users perspective whose requests brought it to life.
However, ThingsBoard MQTT Broker does not require this feature to work only with the MQTT v5 clients, so clients with any protocol version can use it.
The official [documentation](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901250) can shed more light on this feature.
Let's go through the essential items of the feature in this tutorial though.

### What are Shared Subscriptions?

For the standard subscription, each subscribed client will receive a copy of each published message to the topic.
The shared subscriptions feature allows MQTT clients to share the load of the subscription between several MQTT clients in the group.
This is often called client load balancing.

Shared Subscription is identified using a special style of Topic Filter. The format is as follows:

```
$share/{ShareName}/{TopicFilter}
```

where 
* $share - constant that identifies the subscription is shared.
* {ShareName} - identifier of the shared subscription.
* {TopicFilter} - actual topic filter as for the regular subscription. It can include wildcards (`#`, `+`).

For instance, below you can see the shared subscription:

```
$share/group1/country/+/city/+/home/#
```

### Shared Subscription Use Cases

One can think of any use case appropriate for a shared subscription feature.
However, there are several use cases that are especially suitable for it and used often:

* specific backend application subscribes to the MQTT message stream with the requirement to be able to scale horizontally;
* when the topic has an enormous message rate so that the clients can not cope with that on their own;
* distribute the system resources more evenly to prevent any bottlenecks.

### Subscribing to Shared Subscriptions

In this tutorial we will be using the Mosquitto client library that can be installed using the following command: 
```
apt-get install mosquitto-clients
```
{: .copy-code}

In order to initiate a shared subscription one needs to execute the following commands (do this in two different terminals):

```bash
mosquitto_sub -d -t '$share/group/home/temp' -q 1 -V mqttv5 -i client1

mosquitto_sub -d -t '$share/group/home/temp' -q 1 -V mqttv5 -i client2
```
{: .copy-code}

As a result, the new shared subscription (ShareName equals to `group`) is initiated with two clients (`client1` and `client2`) that subscribed to
`home/temp` topic. Both clients will evenly receive the messages published on the mentioned topic.

Now, you can publish some messages to the broker for `home/temp` topic so that the clients from the shared subscription can receive messages. 
Execute the below command to do so.

```bash
mosquitto_pub -d -t 'home/temp' -m 32 -q 1
```
{: .copy-code}

One can increase the count of subscriptions in the group by subscribing the new client or decrease the count by unsubscribing some present clients.

Let's review this in action:

![image](/images/mqtt-broker/user-guide/shared-subscription-demo.gif)

### Shared Subscriptions Load Balancing Strategy

Currently, ThingsBoard MQTT Broker supports only **ROUND_ROBIN** strategy type. 
Stay tuned for more types in the near future (like random, hash, etc.). 

### Shared Subscriptions & Client Type

DEVICE and APPLICATION clients are implemented differently, thus the shared subscription feature differs in terms of usage and processing capabilities for them.
Respectively, if one has created a shared subscription with the same structure by subscribing to it with DEVICE and APPLICATION clients,
they will be forcefully split into two different shared subscription groups.

#### DEVICE client type

Generally, no actions are required from the user's perspective to start using the feature for DEVICE clients.
One can just subscribe with the clients, and everything will work as designed.

Persistent clients add some complexity to the shared subscription feature, so you need to know several special cases about how the logic is implemented.
In case the shared subscription group contains persistent clients, they will share the message load for the subscription topic until they are offline. 
Once they go offline, the messages will not be distributed among them. However, if the shared subscription group contained only persistent clients and all of them went offline, 
the newly received messages will be stored per shared subscription group in the PostgreSQL database. 
Once the first client from the group is reconnected to the broker, it will receive persistent messages.

#### APPLICATION client type

In order to start using the shared subscription feature for APPLICATION clients you need to create an Application Shared Subscription entity 
in the PostgreSQL database first. You can do this via the REST API. 
See the [doc](/docs/mqtt-broker/application-shared-subscription/) on how to create such an entity in the system and how to manage it.

Once this entity is created, the corresponding Kafka topic is created automatically and everything is ready for the start.
When the first client connects to the broker and initiates a shared subscription, 
the new Kafka consumer is created for that client and added to the [Consumer Group](https://docs.confluent.io/platform/current/clients/consumer.html) (CG further).
As new clients subscribe to shared subscription, their consumers are added to the CG to share the load. Respectively, when the client unsubscribes, the consumer 
is kicked out from the CG and the group rebalance begins. 

In such a way, the performance and scalability power of Kafka helps us gain greater performance and reliability.
