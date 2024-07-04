For adding new data mapping, click the "plus" icon:

![image](/images/gateway/mqtt-connector/data-mapping-basic-section-1-ce.png)

Opened modal window provide the following fields: topic filter, QoS, payload type:

![image](/images/gateway/mqtt-connector/data-mapping-basic-section-2-ce.png)

The **Topic filter** - topic address for subscribing. The **Topic filter** supports special symbols: '#' and '+', allowing to subscribe to multiple topics.

Also, MQTT connector supports shared subscriptions. 
To create shared subscription you need to add "**$share/**" as a prefix for topic filter and shared subscription group name. 
For example to subscribe to the *my-shared-topic* in group ***my-group-name*** you can set the topic filter to "$share/***my-group-name***/*my-shared-topic*".
