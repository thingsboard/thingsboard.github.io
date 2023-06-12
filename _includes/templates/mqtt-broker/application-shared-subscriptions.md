
The construction of the topic name is determined by mapping the MQTT topic filter to the corresponding Kafka topic. 
This mapping is achieved by following a specific naming convention (MQTT topic filter -> Kafka topic).

```
test/topic -> tbmq.msg.app.shared.test.topic
test/# -> tbmq.msg.app.shared.test.mlw
test/+ -> tbmq.msg.app.shared.test.slw
```

where
* `tbmq.msg.app.shared.` is added as a prefix
* `/` is replaced by `.`
* `#` is replaced by `mlw` (multi-lvl wildcard)
* `+` is replaced by `slw` (single-lvl wildcard)

If the MQTT topic filter contains any special characters not mentioned earlier (other than alphanumeric characters), 
the hash derived from the topic filter will be utilized to create the Kafka topic. 
This approach ensures that the resulting Kafka topic remains valid and adheres to the necessary naming conventions.

```
tbmq.msg.app.shared.$TOPIC_FILTER_HASH
```

The behavior described above can be regulated by the `TB_APP_PERSISTED_MSG_SHARED_TOPIC_VALIDATION` property.
By default, this variable is enabled, meaning that the validation process is active, ensuring proper topic creation.
However, if you choose to disable this validation by setting the variable to _false_,
the system will no longer create Kafka topics for shared subscriptions having topic filters with special characters, 
resulting in a failure to create the corresponding topics.
It's important to consider this when configuring your environment and handling client IDs with special characters.
