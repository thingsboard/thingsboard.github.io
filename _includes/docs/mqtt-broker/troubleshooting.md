* TOC
{:toc}

### Troubleshooting Tools and Tips

#### Kafka Queue: Consumer Group Message Lag 

You can use the log shown below to identify any issues with the processing of messages or other parts of TBMQ infrastructure. 
Since Kafka is used for MQTT message processing and other major parts of the system, such as `client sessions`, `client subscriptions`, `retained messages`, etc., 
you can analyze the overall state of the broker.

TBMQ provides the ability to monitor whether the rate of producing messages to Kafka is faster than the rate of consuming and processing them. 
In such cases, you will experience a growing latency for message processing. 
To enable this functionality, ensure that Kafka consumer-stats are enabled (see the **queue.kafka.consumer-stats** section of the [Configuration properties](/docs/mqtt-broker/install/config/)).

Once Kafka consumer-stats are enabled, logs (see [Troubleshooting](#logs)) about offset lag for consumer groups will be generated.

Here is an example of the log message:

```bash
2022-11-27 02:33:23,625 [kafka-consumer-stats-1-thread-1] INFO  o.t.m.b.q.k.s.TbKafkaConsumerStatsService - [msg-all-consumer-group] Topic partitions with lag: [[topic=[tbmq.msg.all], partition=[2], lag=[5]]].
```

From this message we can see that there are five messages pushed to the `tbmq.msg.all` topic but not yet processed.

In general, the logs have the following structure:

```bash
TIME [STATS_PRINTING_THREAD_NAME] INFO  o.t.m.b.q.k.s.TbKafkaConsumerStatsService - [CONSUMER_GROUP_NAME] Topic partitions with lag: [[topic=[KAFKA_TOPIC], partition=[KAFKA_TOPIC_PARTITION], lag=[LAG]],[topic=[ANOTHER_TOPIC], partition=[], lag=[]],...].
```

Where:
- `CONSUMER_GROUP_NAME` - Name of the consumer group that is processing messages.
- `KAFKA_TOPIC` - Name of the exact Kafka topic.
- `KAFKA_TOPIC_PARTITION` - Number of the topic's partition.
- `LAG` - The amount of unprocessed messages.

**NOTE:** Logs about consumer lag are printed only if there is a lag for this consumer group.

#### CPU/Memory Usage

Sometimes, a problem arises due to a lack of resources for a particular service. 
You can view CPU and Memory usage by logging into your `server/container/pod` and executing the `top` Linux command.

For more convenient monitoring, it is better to configure Prometheus and Grafana.

If you see that some services sometimes use 100% of the CPU, you should either scale the service horizontally by creating new nodes 
in the cluster or scale it vertically by increasing the total amount of CPU.

### Logs

#### Reading Logs

Regardless of the deployment type, TBMQ logs are stored in the following directory:

```bash
/var/log/thingsboard-mqtt-broker
```

Different deployment tools provide different ways to view logs:

{% capture contenttogglespecdeploymenttype %}
Docker-Compose Deployment%,%docker-compose%,%templates/mqtt-broker/troubleshooting/logs/view-logs/docker-compose-view-logs.md%br%
Kubernetes Deployment%,%kubernetes%,%templates/mqtt-broker/troubleshooting/logs/view-logs/kubernetes-view-logs.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}

#### Enabling Certain Logs

To facilitate troubleshooting, TBMQ allows users to enable or disable logging for specific parts of the system. 
This can be achieved by modifying the **logback.xml** file, which is located in the following directory:

```bash
/usr/share/thingsboard-mqtt-broker/conf
```

Please note that there are separate files for **k8s** and **Docker** deployments.

Here's an example of the **logback.xml** configuration:

```bash
<!DOCTYPE configuration>
<configuration scan="true" scanPeriod="10 seconds">

    <appender name="fileLogAppender"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>/var/log/thingsboard-mqtt-broker/${TB_SERVICE_ID}/thingsboard-mqtt-broker.log</file>
        <rollingPolicy
                class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>/var/log/thingsboard-mqtt-broker/${TB_SERVICE_ID}/thingsboard-mqtt-broker.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <maxFileSize>100MB</maxFileSize>
            <maxHistory>30</maxHistory>
            <totalSizeCap>3GB</totalSizeCap>
        </rollingPolicy>
        <encoder>
            <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <logger name="org.thingsboard.mqtt.broker.actors.client.service.connect" level="TRACE"/>
    <logger name="org.thingsboard.mqtt.broker.actors.client.service.disconnect.DisconnectServiceImpl" level="INFO"/>
    <logger name="org.thingsboard.mqtt.broker.actors.DefaultTbActorSystem" level="OFF"/>

    <root level="INFO">
        <appender-ref ref="fileLogAppender"/>
    </root>
</configuration>
```

The configuration files contain _loggers_ which are the most useful for troubleshooting, as they allow you to enable or disable logging for a certain class or group of classes. 
In the example given above, the default logging level is set to **INFO**, which means that the logs will contain general information, warnings, and errors. 
However, for the `org.thingsboard.mqtt.broker.actors.client.service.connect` package, the most detailed level of logging is enabled. 
You can also completely disable logs for a part of the system, as is done for the `org.thingsboard.mqtt.broker.actors.DefaultTbActorSystem` class using the **OFF** log-level.

To enable or disable logging for a certain part of the system, you need to add the appropriate `</logger>` configuration and wait for up to 10 seconds.

Different deployment tools have different ways to update logs:

{% capture contenttogglespecdeploymenttype2 %}
Docker-Compose Deployment%,%docker-compose%,%templates/mqtt-broker/troubleshooting/logs/enable-logs/docker-compose-enable-logs.md%br%
Kubernetes Deployment%,%kubernetes%,%templates/mqtt-broker/troubleshooting/logs/enable-logs/kubernetes-enable-logs.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype2 %}

### Metrics

To enable Prometheus metrics in TBMQ you must: 
- Set the `STATS_ENABLED` environment variable to `true`.
- Set the `METRICS_ENDPOINTS_EXPOSE` environment variable to `prometheus` in the configuration file.

The metrics can then be accessed via the following path: `https://<yourhostname>/actuator/prometheus`, and scraped by Prometheus (authentication is not required).

### Prometheus metrics

The Spring Actuator in TBMQ can expose some internal state metrics through Prometheus.

Here is a list of the metrics that TBMQ pushes to Prometheus:

#### TBMQ-specific metrics:

- <i>incomingPublishMsg_published</i> (statsNames - <i>totalMsgs, successfulMsgs, failedMsgs</i>): stats about incoming Publish messages to be persisted in the general queue.
- <i>incomingPublishMsg_consumed</i> (statsNames - <i>totalMsgs, successfulMsgs, timeoutMsgs, failedMsgs, tmpTimeout,
  tmpFailed, successfulIterations, failedIterations</i>): stats about incoming Publish messages processing from general queue.
- <i>deviceProcessor</i> (statsNames - <i>successfulMsgs, failedMsgs, tmpFailed, successfulIterations, failedIterations</i>):
  stats about DEVICE client messages processing.
  Some stats descriptions:
  - <i>failedMsgs</i>: number of failed messages to be persisted in database and were discarded afterwards
  - <i>tmpFailed</i>: number of failed messages to be persisted in database and got reprocessed later
- <i>appProcessor</i> (statsNames - <i>successfulPublishMsgs, successfulPubRelMsgs, tmpTimeoutPublish, tmpTimeoutPubRel, timeoutPublishMsgs,
  timeoutPubRelMsgs, successfulIterations, failedIterations</i>): stats about APPLICATION client messages processing.
  Some stats descriptions:
  - <i>tmpTimeoutPubRel</i>: number of PubRel messages that timed out and got reprocessed later
  - <i>tmpTimeoutPublish</i>: number of Publish messages that timed out and got reprocessed later
  - <i>timeoutPubRelMsgs</i>: number of PubRel messages that timed out and were discarded afterwards
  - <i>timeoutPublishMsgs</i>: number of Publish messages that timed out and were discarded afterwards
  - <i>failedIterations</i>: iterations of processing messages pack where at least one message wasn't processed successfully
- <i>appProcessor_latency</i> (statsNames - <i>puback, pubrec, pubcomp</i>): stats about APPLICATION processor latency of different message types.
- <i>actors_processing</i> (statsNames - <i>MQTT_CONNECT_MSG, MQTT_PUBLISH_MSG, MQTT_PUBACK_MSG, etc.</i>): 
  stats about actors processing average time of different message types.
- <i>clientSubscriptionsConsumer</i> (statsNames - <i>totalSubscriptions, acceptedSubscriptions, ignoredSubscriptions</i>):
  stats about the client subscriptions read from Kafka by the broker node.
  Some stats descriptions:
  - <i>totalSubscriptions</i>: total number of new subscriptions added to the broker cluster
  - <i>acceptedSubscriptions</i>: number of new subscriptions persisted by the broker node
  - <i>ignoredSubscriptions</i>: number of ignored subscriptions since they were already initially processed by the broker node
- <i>retainedMsgConsumer</i> (statsNames - <i>totalRetainedMsgs, newRetainedMsgs, clearedRetainedMsgs</i>): stats about retain messages processing.
- <i>subscriptionLookup</i>: stats about average time of client subscriptions lookup in trie data structure.
- <i>retainedMsgLookup</i>: stats about average time of retain messages lookup in trie data structure.
- <i>clientSessionsLookup</i>: stats about average time of client sessions lookup from found client subscriptions for publish message.
- <i>notPersistentMessagesProcessing</i>: stats about average time for processing message delivery for not persistent clients.
- <i>persistentMessagesProcessing</i>: stats about average time for processing message delivery for persistent clients.
- <i>delivery</i>: stats about average time for message delivery to clients.
- <i>subscriptionTopicTrieSize</i>: stats about client subscriptions count in trie data structure.
- <i>subscriptionTrieNodes</i>: stats about client subscriptions nodes count in trie data structure.
- <i>retainMsgTrieSize</i>: stats about retain message count in trie data structure.
- <i>retainMsgTrieNodes</i>: stats about retain message nodes count in trie data structure.
- <i>lastWillClients</i>: stats about last will clients count.
- <i>connectedSessions</i>: stats about connected sessions count.
- <i>allClientSessions</i>: stats about all client sessions count.
- <i>clientSubscriptions</i>: stats about client subscriptions count in the in-memory map.
- <i>retainedMessages</i>: stats about retain messages count in the in-memory map.
- <i>activeAppProcessors</i>: stats about active APPLICATION processors count.
- <i>activeSharedAppProcessors</i>: stats about active APPLICATION processors count for shared subscriptions.
- <i>runningActors</i>: stats about running actors count.

#### PostgreSQL-specific metrics:
- <i>sqlQueue_UpdatePacketTypeQueue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about updating <b>persisted packet's type</b> to the database.
- <i>sqlQueue_DeletePacketQueue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about deleting <b>persisted packets</b> from the database.
- <i>sqlQueue_TimeseriesQueue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about <b>historical stats persistence</b> to the database.

Please note that in order to achieve maximum performance, **TBMQ uses several queues (threads)** per each of the specified queues above.

### Getting help

<section id="talkToUs">
    <div id="gettingHelp">
        <a href="https://app.gitter.im/#/room/#thingsboard_chat:gitter.im">
            <span class="phrase-heading">Community chat</span>
            <p>The best way to contact our engineers and share your ideas with them is through our Gitter channel.</p>
        </a>
        <a href="https://groups.google.com/forum/#!forum/thingsboard">
            <span class="phrase-heading">Q&A forum</span>
            <p>For community support, we recommend visiting our user forum. It's a great place to connect with other users and find solutions to common issues.</p>
        </a>
        <a href="https://stackoverflow.com/questions/tagged/thingsboard">
            <span class="phrase-heading">Stack Overflow</span>
            <p>The ThingsBoard team actively monitors posts that are tagged with "thingsboard" on the user forum. If you can't find an existing question that addresses your issue, feel free to ask a new one. Our team will be happy to assist you.</p>
        </a>
    </div>
</section>

If you are unable to find a solution to your problem from any of the guides provided above, please do not hesitate to contact the ThingsBoard team for further assistance.

<a class="button" href="/docs/contact-us/">Contact us</a>
