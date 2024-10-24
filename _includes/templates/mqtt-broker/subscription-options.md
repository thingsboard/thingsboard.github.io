* **Topic filter**. The MQTT topic filter.
* **QoS**. Quality of Service of the subscription.
* **Retain as Published**. When true, messages forwarded using this subscription keep the RETAIN flag they were published with.
* **Retain Handling** This option determines how the broker should handle retained messages when the client subscribes to a topic.
    * 0 - send retained messages at subscription time;
    * 1 - send retained messages at subscription time if the subscription does not already exist;
    * 2 - do not send retained messages at subscription time.
* **No local**. When true, the broker will not forward messages from this client back to the connection on which this subscription was made.
* **Subscription Identifier**. It is a unique numerical value that assigned to subscription, allowing the client to distinguish messages from different subscriptions.