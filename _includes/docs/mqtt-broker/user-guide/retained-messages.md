
Retained Messages is an MQTT feature that allows storing the "last known good" message for a 
particular topic on the broker and delivering the message to a client whenever the client subscribes to a matching topic.

This feature can useful in different cases. For example, if you have a rain sensor that periodically updates status when the weather condition
changes and a new subscriber subscribes to this status. The subscriber would not receive the last status and would need to wait until the next update.
But using the retained messages feature guarantees that subscribers will get the last successfully published message from the broker.

**CHECK WITH QOS usage if such case possible.**

Important notes on retained messages:
* Only **one message** can be stored on the broker **per topic**.
* The **next message** published on the same topic will **replace the previous one**.
* The subscribers for the topic will receive **only the last message**.

### Publish Retained Message

Basically, retained message is a normal MQTT message that has flag `retained` set to `true`. E.g. in  use `-r/--retain` flag.
Let’s review a simple command to upload status readings using [Eclipse Mosquitto]() to ThingsBoard MQTT Broker as retained message to a topic `demo/topic`.

```shell
mosquitto_pub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -q 1 -t demo/topic -m {"status":1} -r
```

### Retained Message Details

On the WEB UI _Retained Messages_ page administator is able to check the payload message and user properties of last message for particular topic.

#### Payload

To see the payload of retained message click on the _icon {} 'Payload'_.

[image]

#### User Properties

```shell
mosquitto_pub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -D PUBLISH user-property tb_mqtt_1 user_details_1 -q 0 -t demo/topic -V mqttv5 -m "ThingsBoard MQTT" -r
```

To see the User Properties of retained message click on the _icon [] 'User Properties'_. Note, if the button is inactive - message has no User Properties.

[image]

### Deleting Retained Message

Deleting a retained message is simple. You can send a retained message with a zero-byte payload on the topic where you want to delete the previous retained message. 
The broker deletes the retained message, and new subscribers no longer receive the retained message for that topic.

For example, this simple command will delete retained message for topic `demo/topic` by sending `-n` flag as zero-byte.

```shell
mosquitto_pub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -q 1 -t demo/topic -n -r
```

Or you can use WEB UI of ThingsBoard MQTT Broker to delete messages.

To **delete single** retained message:
- Click on the _icon trash 'Delete retained message'_ and confirm action.

[image]

To **delete multiple** retained messages:
- Click on the checkbox icon.
- Click _Delete retained messages_ button in the top right corner and confirm action.

[image]

### Clearing Empty Retained Message Nodes

When a retained message is deleted, the broker removes the message payload from its memory and marks the node as empty.
Over time, if many retained messages are deleted, there may be many empty nodes left in the broker's memory.
These empty nodes can cause inefficiencies and waste memory resources.

Clearing empty retained message nodes frees up memory, resources and can improve the performance of the broker, 
as it can process MQTT messages more quickly when there are fewer empty nodes to search through.

To Clear empty retained message nodes click on the _trash icon_ in the top right corner of the Retained messages table.

[image]
