For adding new data mapping, click the "plus" icon:

![image](https://img.thingsboard.io/gateway/mqtt-connector/data-mapping-basic-section-1-ce.png)

Opened modal window provide the following fields: topic filter, QoS, payload type:

![image](https://img.thingsboard.io/gateway/mqtt-connector/data-mapping-basic-section-2-ce.png)

The **Topic filter** - topic address for subscribing. The **Topic filter** supports special symbols: '#' and '+', allowing to subscribe to multiple topics.

Also, MQTT connector supports shared subscriptions. 
To create shared subscription you need to add "**$share/**" as a prefix for topic filter and shared subscription group name. 
For example to subscribe to the *my-shared-topic* in group ***my-group-name*** you can set the topic filter to "$share/***my-group-name***/*my-shared-topic*".

**MQTT Quality of Service** (QoS) is an agreement between the message sender and receiver that defines the level of delivery guarantee for a specific message. (0-At most once, 1-At least once, 2-Exactly once)