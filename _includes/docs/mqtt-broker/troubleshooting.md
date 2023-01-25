* TOC
{:toc}

## Troubleshooting instruments and tips

### Consumer group message lag for Kafka Queue

With the log shown below, you can identify if there's some issue with the processing of your messages or other parts of the MQTT broker infrastructure
(since Kafka is used for MQTT message processing and other major parts of the system like **client_session**, **client_subscriptions**, **retain_msg**, etc.
you can analyze the overall state of the broker).

ThingsBoard MQTT broker provides the ability to monitor if the rate of pushing messages to the Kafka is faster than rate of consuming and processing them (in such case you will have a growing latency for message processing).
To enable this functionality, you need to ensure that Kafka consumer-stats are enabled (see <b>queue.kafka.consumer-stats</b> section of the [Configuration properties](/docs/mqtt-broker/install/config/))

Once Kafka consumer-stats are enabled, you will see logs (see [Troubleshooting](#logs)) about offset lag for consumer groups.

Here's an example of the log message:

```bash
2022-11-27 02:33:23,625 [kafka-consumer-stats-1-thread-1] INFO  o.t.m.b.q.k.s.TbKafkaConsumerStatsService - [publish-msg-consumer-group] Topic partitions with lag: [[topic=[publish_msg], partition=[2], lag=[5]]].
```

From this message we can see that there are 5 messages pushed to the <b>publish_msg</b> topic but not yet processed.

In general the logs have the following structure:

```bash
TIME [STATS_PRINTING_THREAD_NAME] INFO  o.t.m.b.q.k.s.TbKafkaConsumerStatsService - [CONSUMER_GROUP_NAME] Topic partitions with lag: [[topic=[KAFKA_TOPIC], partition=[KAFKA_TOPIC_PARTITION], lag=[LAG]],[topic=[ANOTHER_TOPIC], partition=[], lag=[]],...].
```

Where:
- `CONSUMER_GROUP_NAME` - name of the consumer group which is processing messages;
- `KAFKA_TOPIC` - name of the exact Kafka topic;
- `KAFKA_TOPIC_PARTITION` - number of the topic's partition;
- `LAG` - the amount of unprocessed messages.

**NOTE:** Logs about consumer lag are printed only if there is a lag for this consumer group.

### CPU/Memory Usage

Sometimes the problem is that you don't have enough resources for some service. You can view CPU and Memory usage by logging into your server/container/pod and executing <code>top</code> linux command.

For the more convenient monitoring it is better to have configured Prometheus and Grafana.

If you see that some services sometimes use 100% of the CPU, you should either scale the service horizontally by creating new nodes in cluster or scale it vertically by increasing the total amount of CPU.

## Logs

### Read logs

Regardless of the deployment type, ThingsBoard MQTT Broker logs are stored in the following directory:

```bash
/var/log/thingsboard-mqtt-broker
```

Different deployment tools provide different ways to view logs:

{% capture contenttogglespecdeploymenttype %}
Docker-Compose Deployment%,%docker-compose%,%templates/mqtt-broker/troubleshooting/logs/view-logs/docker-compose-view-logs.md%br%
Kubernetes Deployment%,%kubernetes%,%templates/mqtt-broker/troubleshooting/logs/view-logs/kubernetes-view-logs.md{% endcapture %}

{% include content-toggle.html content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}

### Enable certain logs

ThingsBoard MQTT Broker provides the ability to enable/disable logging for certain parts of the system depending on what information do you need for troubleshooting.

You can do this by modifying <b>logback.xml</b> file. As logs itself, it is stored in the following directory:

```bash
/usr/share/thingsboard-mqtt-broker/conf
```

You can find respectful files for k8s and docker deployments.

Here's an example of the <b>logback.xml</b> configuration:

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

The most useful for the troubleshooting parts of the config files are <i>loggers</i>.
They allow you to enable/disable logging for the certain class or group of classes.
In the example above the default logging level is <b>INFO</b> (it means that logs will contain only general information, warnings and errors), but for the package <code>org.thingsboard.mqtt.broker.actors.client.service.connect</code> we enabled the most detailed level of logging.
There's also a possibility to completely disable logs for some part of the system, in the example above we did it to <code>org.thingsboard.mqtt.broker.actors.DefaultTbActorSystem</code> class using <b>OFF</b> log-level.

To enable/disable logging for some part of the system you need to add proper <code></logger></code> configuration and wait up to 10 seconds.

Different deployment tools provide different ways to update logs:

{% capture contenttogglespecdeploymenttype %}
Docker-Compose Deployment%,%docker-compose%,%templates/mqtt-broker/troubleshooting/logs/enable-logs/docker-compose-enable-logs.md%br%
Kubernetes Deployment%,%kubernetes%,%templates/mqtt-broker/troubleshooting/logs/enable-logs/kubernetes-enable-logs.md{% endcapture %}

{% include content-toggle.html content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}

## Metrics

You may enable prometheus metrics by setting environment variables `STATS_ENABLED` to value `true` and `METRICS_ENDPOINTS_EXPOSE` to value `prometheus` in the configuration file.

These metrics exposed at the path: `https://<yourhostname>/actuator/prometheus` which can be scraped by prometheus (No authentication required).

## Prometheus metrics

Some internal state metrics can be exposed by the Spring Actuator using Prometheus.

Here's the list of metrics ThingsBoard MQTT Broker pushes to Prometheus.

#### MQTT Broker-specific metrics:

- <i>incomingPublishMsg.published</i> (statsNames - <i>totalMsgs, successfulMsgs, failedMsgs</i>): stats about incoming Publish messages to be persisted in the general queue.
- <i>incomingPublishMsg.consumed</i> (statsNames - <i>totalMsgs, successfulMsgs, timeoutMsgs, failedMsgs, tmpTimeout,
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
- <i>appProcessor.latency</i> (statsNames - <i>puback, pubrec, pubcomp</i>): stats about APPLICATION processor latency of different message types.
- <i>actors.processing</i> (statsNames - <i>MQTT_CONNECT_MSG, MQTT_PUBLISH_MSG, MQTT_PUBACK_MSG, etc.</i>): 
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
- <i>pendingProducerMessages</i> (statsNames - <i>applicationMsg, deviceMsg, basicDownlink, persistentDownlink, publishMsg</i>): 
  stats about pending messages count that should be persisted in Kafka topics.

#### PostgreSQL-specific metrics:
- <i>sqlQueue.UpdatePacketTypeQueue_queueIndex_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about updating <b>persisted packet's type</b> to the database.
  Note that there are several queues (threads) in order to reach maximum performance.
- <i>sqlQueue.DeletePacketQueue_queueIndex_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about deleting <b>persisted packets</b> from the database.
  Note that there are several queues (threads) in order to reach maximum performance.

## Getting help

<section id="talkToUs">
    <div id="gettingHelp">
        <a href="https://gitter.im/thingsboard/chat">
            <h1>Community chat</h1>
            <p>Our Gitter channel is the best way to contact our engineers and share your ideas with them.</p>
        </a>
        <a href="https://groups.google.com/forum/#!forum/thingsboard">
            <h1>Q&A forum</h1>
            <p>Our user forum is a great place to go for community support.</p>
        </a>
        <a href="http://stackoverflow.com/questions/tagged/thingsboard">
            <h1>Stack Overflow</h1>
            <p>The ThingsBoard team will also monitor posts tagged thingsboard. If there aren’t any existing questions that help, please ask a new one!</p>
        </a>
    </div>
</section>

If your problem isn't answered by any of the guides above, feel free to contact ThingsBoard team.

<a class="button" href="/docs/contact-us/">Contact us</a>
