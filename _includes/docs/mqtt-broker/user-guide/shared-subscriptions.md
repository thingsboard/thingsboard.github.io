
* TOC
{:toc}

Shared subscriptions are an advanced capability introduced in MQTT v5 that has been widely anticipated by users. 
While TBMQ does not restrict its usage to MQTT v5 clients exclusively, clients with any protocol version can leverage this feature. 
The official [documentation](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901250) offers comprehensive details on shared subscriptions, 
and this tutorial will focus on the fundamental aspects of this functionality. 
By understanding and exploring shared subscriptions, users can harness the full potential of this powerful feature in their MQTT interactions.

### What are Shared Subscriptions?

In traditional or standard subscriptions, each subscribed client receives a duplicate copy of every published message that matches the subscribed topic. 
This approach ensures that all clients receive the same set of messages. 
However, shared subscriptions introduce a more efficient mechanism for distributing the subscription load among multiple clients within a defined group. 
This technique, known as **client load balancing**, enables MQTT clients to collectively handle the incoming message flow more effectively, 
optimizing network bandwidth and reducing overall processing overhead.

Shared subscriptions are identified by a distinct style of topic filter, which follows a specific format. 
The format for a shared subscription topic filter is as follows:
```
$share/{ShareName}/{TopicFilter}
```

where:
* $share - is a constant that denotes the subscription as shared.
* {ShareName} - is the identifier of the shared subscription, which helps distinguish it from other shared subscriptions.
* {TopicFilter} - represents the topic filter used for the subscription, similar to regular subscriptions. 
It can include wildcards such as `#` and `+` to match multiple topics.

For example, the following is a shared subscription:

```
$share/group1/country/+/city/+/home/#
```

### Shared Subscription Use Cases

Shared subscriptions can be applied to various use cases based on their suitability and advantages. 
However, there are several common scenarios where shared subscriptions are particularly beneficial:

* **Horizontal scaling of backend applications.** When specific backend applications need to subscribe to the MQTT message stream and 
handle a high volume of messages, shared subscriptions allow for horizontal scaling. Multiple application instances can be part of the shared subscription group, 
distributing the workload and improving scalability.
* **High message rate topics.** In situations where certain topics experience a high message rate that individual clients may struggle to handle, 
shared subscriptions can be utilized. By distributing the load among multiple clients within the shared subscription group, 
the message processing can be more efficient and avoid overwhelming a single client.
* **Balancing system resources**. Shared subscriptions help distribute system resources evenly, mitigating the risk of bottlenecks. 
By leveraging multiple clients within the shared subscription group, message processing and resource utilization can be optimized, 
ensuring a balanced and efficient operation of the system.

In summary, shared subscriptions offer flexibility and scalability for scenarios involving backend applications, 
high message rates, and resource optimization, allowing for better management of MQTT message streams.

### Subscribing to Shared Subscriptions

In this tutorial, we will be connecting [DEVICE](/docs/mqtt-broker/user-guide/mqtt-client-type/#device-client) non-persistent clients and using the Mosquitto client library, 
which can be installed using the following command:
```
sudo apt-get install mosquitto-clients
```
{: .copy-code}

To initiate a shared subscription, execute the following commands in two separate terminals:

```bash
mosquitto_sub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -t '$share/group/home/temp' -q 1 -V mqttv5 -i client1
```
{: .copy-code}

```bash
mosquitto_sub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -t '$share/group/home/temp' -q 1 -V mqttv5 -i client2
```
{: .copy-code}

**Note,** do not forget to put your hostname instead of `YOUR_MQTT_BROKER_HOST`.
Make sure authentications are disabled. Otherwise, adjust the commands in this guide appropriately.

As a result, a new shared subscription is initiated (with ShareName equal to `group`) with two clients (`client1` and `client2`) subscribing to the `home/temp` topic. 
Both clients will receive messages published on the mentioned topic evenly.

To ensure that the clients belonging to the shared subscription receive messages, you can publish some messages to the broker targeting the `home/temp` topic.
Execute the following command to do so:

```bash
mosquitto_pub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -t 'home/temp' -m 32 -q 1
```
{: .copy-code}

The number of subscriptions within a shared subscription group can be **increased** by subscribing a new client to the group, 
or **decreased** by unsubscribing existing clients from the group. 
This dynamic adjustment allows for flexibility in managing the load distribution and scaling of the shared subscription.

Let's see shared subscription processing in action:

![image](/images/mqtt-broker/user-guide/shared-subscription-demo.gif)

### Shared Subscriptions Load Balancing Strategy

Currently, TBMQ supports the **ROUND_ROBIN** load balancing strategy type for shared subscriptions. 
This means that incoming messages for a shared subscription are evenly distributed among the subscribed clients in a round-robin fashion. 
Each client in the group receives messages in sequential order, taking turns to handle the message load.
We are continuously working on enhancing TBMQ and plan to introduce additional load-balancing strategy types in the near future. 
These may include random and hash-based load-balancing strategies. Stay tuned for updates as we expand the capabilities of TBMQ.

### Shared Subscriptions & Client Type

The **DEVICE** and **APPLICATION** clients in TBMQ are implemented differently, and this impacts how the shared subscription feature 
is utilized and how it processes messages for each client type.

If you create a shared subscription with the same structure and subscribe to it with both DEVICE and APPLICATION clients,
TBMQ will treat them as separate shared subscription groups. 
This means that messages published to the shared subscription topic will be distributed only among clients of the same type. 
DEVICE clients will receive messages within the DEVICE shared subscription group, while APPLICATION clients will receive messages within the APPLICATION shared subscription group.

Therefore, it's important to consider the client type when working with shared subscriptions in TBMQ, 
as the messages will be processed and distributed accordingly based on the client type within their respective shared subscription groups.

#### DEVICE client type

From the user's perspective, using the shared subscription feature for DEVICE clients in TBMQ is seamless. 
Simply subscribe your clients to the shared subscription, and the feature will work as intended.

However, there are some considerations when persistent clients are involved in the shared subscription group:
1. If the shared subscription group **contains some persistent clients**, they will share the message load for the subscription topic as well until they go offline. 
Once they are offline, the messages will not be distributed among them.
2. On the other hand, if the shared subscription group **consists solely of persistent clients**, and they all go offline, 
newly received messages will be stored per shared subscription group in the PostgreSQL database. 
Once the first client from the group reconnects to the broker, it will receive stored persistent messages related to the shared subscription.

These considerations ensure that message distribution and persistence are handled appropriately for shared subscription groups containing persistent clients.

#### APPLICATION client type

To utilize the shared subscription feature for APPLICATION clients in TBMQ, you need to follow an additional step. 
First, you'll need to create an Application Shared Subscription entity in the PostgreSQL database. 
To do so follow the instructions from the following [guide](/docs/mqtt-broker/user-guide/ui/shared-subscriptions/).
This can also be done through the REST API, and detailed instructions can be found in the next [documentation](/docs/mqtt-broker/application-shared-subscription/). 
The entity creation process includes the automatic creation of a corresponding Kafka topic.

Once the entity is created, you're all set to start using the shared subscription feature. 
When the first client connects to the broker and initiates a shared subscription, a new Kafka consumer is created for that client and added to the 
[Consumer Group](https://docs.confluent.io/platform/current/clients/consumer.html) (CG).
As more clients subscribe to the shared subscription, their consumers are added to the CG as well, allowing them to share the message load. 
Likewise, when a client unsubscribes, its consumer is removed from the CG, and the group rebalances accordingly.

This utilization of Kafka's capabilities enables enhanced performance, scalability, and reliability for shared subscriptions with APPLICATION clients in TBMQ. 
By leveraging Kafka's features, the system can effectively manage and distribute the workload among the subscribed clients, ensuring optimal performance and fault tolerance.

