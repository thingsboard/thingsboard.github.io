
* TOC
{:toc}

Official [doc](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901250).

### What are Shared Subscriptions?

Shared subscriptions are 

### Shared subscription Use Cases

There are some use cases that are especially suitable for shared subscriptions.

### Subscribing to Shared Subscriptions

In order to initiate a shared subscription the one needs to do the following...

### Shared Subscriptions Load Balancing Strategy

Currently, ThingsBoard MQTT Broker supports only **ROUND_ROBIN** strategy type. 
Stay tuned for more types in the near future (like random, hash, etc.). 

### Shared Subscriptions & Client Type

Processing is different for APPLICATION and DEVICE client types. So, if one has created SS by subscribing to it with DEVICE and APPLICATION clients,
they will be split into 2 different SS...

#### DEVICE client type

Nothing fancy, just subscribe to it, and it will work by default without any additional actions required.

#### APPLICATION client type

First you need to create an Application Shared Subscription entity in the PostgreSQL database. You can do this via the REST API. 
See the doc(add link here) for more details.

Once this entity is created, the following Kafka topic is created automatically.
The format of the topic is as follows:

```
add here the topic format...
```

