
* TOC
{:toc}

Shared subscriptions are a powerful feature introduced in MQTT v5, which was highly requested by end-users. 
Although ThingsBoard MQTT Broker does not require this feature to work only with MQTT v5 clients, clients with any protocol version can use it.
The official [documentation](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901250) provides more information on this feature. 
In this tutorial, we will go through the essential aspects of this feature.

### What are Shared Subscriptions?

For standard subscriptions, each subscribed client receives a copy of every published message to the topic. 
However, shared subscriptions allow MQTT clients to share the subscription load between several clients in a group, known as **client load balancing**.

Shared subscriptions are identified using a special style of topic filter in the following format:
```
$share/{ShareName}/{TopicFilter}
```

where:
* $share - is a constant that identifies the subscription as shared.
* {ShareName} - is the identifier of the shared subscription.
* {TopicFilter} - is the actual topic filter, as for a regular subscription. It can include wildcards (`#`, `+`).

For example, the following is a shared subscription:

```
$share/group1/country/+/city/+/home/#
```

### Shared Subscription Use Cases

One can use shared subscriptions for any use case appropriate to the feature. 
However, there are several use cases that are especially suitable and commonly used:

* Specific backend applications subscribe to the MQTT message stream with a requirement to scale horizontally.
* The topic has a high message rate, which clients cannot handle alone.
* Distribute system resources more evenly to prevent bottlenecks.

### Subscribing to Shared Subscriptions

In this tutorial, we will be using the Mosquitto client library, which can be installed using the following command:
```
apt-get install mosquitto-clients
```
{: .copy-code}

To initiate a shared subscription, execute the following commands in two separate terminals:

```bash
mosquitto_sub -d -t '$share/group/home/temp' -q 1 -V mqttv5 -i client1

mosquitto_sub -d -t '$share/group/home/temp' -q 1 -V mqttv5 -i client2
```
{: .copy-code}

As a result, a new shared subscription is initiated (with ShareName equal to `group`) with two clients (`client1` and `client2`) subscribing to the `home/temp` topic. 
Both clients will receive messages published on the mentioned topic evenly.

You can now publish some messages to the broker for the `home/temp` topic so that the clients from the shared subscription can receive messages. 
Execute the following command to do so:

```bash
mosquitto_pub -d -t 'home/temp' -m 32 -q 1
```
{: .copy-code}

The number of subscriptions in the group can be **increased** by subscribing a new client or **decreased** by unsubscribing present clients.

Let's see this in action:

![image](/images/mqtt-broker/user-guide/shared-subscription-demo.gif)

### Shared Subscriptions Load Balancing Strategy

At present, ThingsBoard MQTT Broker supports only the **ROUND_ROBIN** load balancing strategy type. We plan to add more types in the near future, such as random and hash. Please stay tuned for updates.

### Shared Subscriptions & Client Type

The **DEVICE** and **APPLICATION** clients are implemented differently, which affects the shared subscription feature's usage and processing capabilities for each.

If you create a shared subscription with the same structure and subscribe to it with DEVICE and APPLICATION clients, 
they will be separated into two different shared subscription groups.

#### DEVICE client type

From the user's perspective, no action is required to start using the feature for DEVICE clients. 
You can simply subscribe with your clients, and everything will work as designed.

However, if the shared subscription group contains persistent clients, there are some special cases you should be aware of:
1. If the shared subscription group **contains some persistent clients**, they will share the message load for the subscription topic until they go offline. 
Once they are offline, the messages will not be distributed among them.
2. On the other hand, if the shared subscription group **contains only persistent clients**, and they all go offline, 
newly received messages will be stored per shared subscription group in the PostgreSQL database. 
Once the first client from the group reconnects to the broker, it will receive persistent messages.

#### APPLICATION client type

To start using the shared subscription feature for APPLICATION clients, you must first create an Application Shared Subscription entity in the PostgreSQL database. 
You can do this using the REST API. Please refer to the [documentation](/docs/mqtt-broker/application-shared-subscription/) on how to create such an entity in the system and how to manage it.

Once this entity is created, the corresponding Kafka topic is automatically created, and everything is ready to go. 
When the first client connects to the broker and initiates a shared subscription, a new Kafka consumer is created for 
that client and added to the [Consumer Group](https://docs.confluent.io/platform/current/clients/consumer.html) (CG). 
As new clients subscribe to the shared subscription, their consumers are added to the CG to share the load. 
Similarly, when a client unsubscribes, its consumer is removed from the CG, and the group rebalances.

In this way, the performance and scalability of Kafka help us achieve greater performance and reliability.
