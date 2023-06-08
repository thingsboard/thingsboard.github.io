* TOC
{:toc}

Retained Messages is an MQTT feature that allows storing the "last known good" message for a 
particular topic on the broker and delivering the message to a client whenever the client subscribes to a matching topic.

There are a few important notes to mention regarding retained messages:
* Only **one message** can be stored on the broker **per topic**.
* The **next message** published on the same topic will **replace the previous one**.
* The subscribers for the topic will receive **only the last message**.

### Publish Retained Message

In MQTT, a retained message is a regular message with the `retained` flag set to `true`.
Let's consider a simple command using `mosquitto_pub` to publish a retained message. Do not forget to put your hostname instead of `YOUR_MQTT_BROKER_HOST`.

```shell
mosquitto_pub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -D PUBLISH user-property hello world -q 0 -t demo/topic -V mqttv5 -m "Hello world" -r
```
{: .copy-code}

### Payload, User Properties

To access and view the payload message and user properties of the last message for a specific topic on the WEB UI Retained Messages page, please follow these steps:

1. Open page Retained Messages.
2. To view the payload of a retained message, click on the icon `{}`. 
3. To see the User Properties of retained message click on the icon `[]`. Please note that if the button is disabled, the retained message does not have any user properties.

{% include images-gallery.html imageCollection="details-retained-messages" %}

### Deleting Retained Message

Deleting a retained message is a straightforward process. To remove a previous retained message, you can send a new retained message with a `zero-byte payload` to the 
specific topic associated with the retained message you want to delete. Subsequently, any new subscribers to that topic will no longer receive the previously retained message.

To delete a retained message for the topic `demo/topic`, you can use the following command, specifying the `-n` flag with a zero-byte payload:

```shell
mosquitto_pub -d -h "YOUR_MQTT_BROKER_HOST" -p 1883 -q 1 -t demo/topic -n -r
```
{: .copy-code}

To delete retained messages using the WEB UI of ThingsBoard MQTT Broker, you have two options based on the number of messages you want to delete:
1. **Deleting a Single Retained Message.** Click on the icon 'Delete retained message' and confirm action.
2. **Deleting Multiple Retained Messages:** 
  * Select messages you want to delete.
  * Click on the 'Delete retained messages' button in the top right corner and confirm the action when prompted.

{% include images-gallery.html imageCollection="delete-retained-messages" %}

### Clearing Empty Retained Message Nodes

When a retained message is deleted, the broker removes the message payload from its memory and marks the node as empty.
Over time, if many retained messages are deleted, there may be many empty nodes left in the broker's memory.
These empty nodes can cause inefficiencies and waste memory resources.

Clearing empty retained message nodes frees up memory, resources and can improve the performance of the broker, 
as it can process MQTT messages more quickly when there are fewer empty nodes to search through.

To Clear empty retained message nodes click on the button 'Clear empty retained messages nodes' in the top right corner and confirm action.

{% include images-gallery.html imageCollection="clear-empty-retained-messages" %}
