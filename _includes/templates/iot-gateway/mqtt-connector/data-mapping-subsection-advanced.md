| **Parameter**  | **Default value** | **Description**                                                                                                                                                              |
|:---------------|:------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| topicFilter    | **sensor/data**   | Topic address for subscribing.                                                                                                                                               |
| QoS            | **1**             | An agreement between the message sender and receiver that defines the level of delivery guarantee for a specific message. (0-At most once, 1-At least once, 2-Exactly once)  |
| ---            

The **topicFilter** supports special symbols: '#' and '+', allowing to subscribe to multiple topics.

Also, MQTT connector supports shared subscriptions.
To create shared subscription you need to add "**$share/**" as a prefix for topic filter and shared subscription group name.
For example to subscribe to the *my-shared-topic* in group ***my-group-name*** you can set the topic filter to "$share/***my-group-name***/*my-shared-topic*".

![image](https://img.thingsboard.io/gateway/mqtt-connector/data-mapping-advanced-section-1-ce.png)