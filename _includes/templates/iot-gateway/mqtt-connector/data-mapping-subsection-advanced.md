| **Parameter**  | **Default value** | **Description**                                                                                                           |
|:---------------|:------------------|---------------------------------------------------------------------------------------------------------------------------|
| topicFilter    | **sensor/data**   | Topic address for subscribing.                                                                                            |
| QoS            | **0**             | An agreement between the message sender and receiver that defines the level of delivery guarantee for a specific message. |
| ---            

The **topicFilter** supports special symbols: '#' and '+', allowing to subscribe to multiple topics.

Also, MQTT connector supports shared subscriptions.
To create shared subscription you need to add "**$share/**" as a prefix for topic filter and shared subscription group name.
For example to subscribe to the *my-shared-topic* in group ***my-group-name*** you can set the topic filter to "$share/***my-group-name***/*my-shared-topic*".

![image](/images/gateway/mqtt-connector/data-mapping-advanced-section-1-ce.png)