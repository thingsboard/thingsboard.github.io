* TOC
{:toc}

## Troubleshooting instruments and tips

### Message Pack Processing Log

You can enable logging of the slowest and most frequently called rule-nodes.
To do this you need to [update your logging configuration](#enable-certain-logs) with the following <i>logger</i>:

```bash
<logger name="org.thingsboard.server.service.queue.TbMsgPackProcessingContext" level="DEBUG" />
```

After this you can find the following messages in your [logs](#logs):

```bash
2021-03-24 17:01:21,023 [tb-rule-engine-consumer-24-thread-3] DEBUG o.t.s.s.q.TbMsgPackProcessingContext - Top Rule Nodes by max execution time:
2021-03-24 17:01:21,024 [tb-rule-engine-consumer-24-thread-3] DEBUG o.t.s.s.q.TbMsgPackProcessingContext - [Main][3f740670-8cc0-11eb-bcd9-d343878c0c7f] max execution time: 1102. [RuleChain: Thermostat|RuleNode: Device Profile Node(3f740670-8cc0-11eb-bcd9-d343878c0c7f)]
2021-03-24 17:01:21,024 [tb-rule-engine-consumer-24-thread-3] DEBUG o.t.s.s.q.TbMsgPackProcessingContext - [Main][3f6debf0-8cc0-11eb-bcd9-d343878c0c7f] max execution time: 1. [RuleChain: Thermostat|RuleNode: Message Type Switch(3f6debf0-8cc0-11eb-bcd9-d343878c0c7f)]
2021-03-24 17:01:21,024 [tb-rule-engine-consumer-24-thread-3] INFO  o.t.s.s.q.TbMsgPackProcessingContext - Top Rule Nodes by avg execution time:
2021-03-24 17:01:21,024 [tb-rule-engine-consumer-24-thread-3] INFO  o.t.s.s.q.TbMsgPackProcessingContext - [Main][3f740670-8cc0-11eb-bcd9-d343878c0c7f] avg execution time: 604.0. [RuleChain: Thermostat|RuleNode: Device Profile Node(3f740670-8cc0-11eb-bcd9-d343878c0c7f)]
2021-03-24 17:01:21,025 [tb-rule-engine-consumer-24-thread-3] INFO  o.t.s.s.q.TbMsgPackProcessingContext - [Main][3f6debf0-8cc0-11eb-bcd9-d343878c0c7f] avg execution time: 1.0. [RuleChain: Thermostat|RuleNode: Message Type Switch(3f6debf0-8cc0-11eb-bcd9-d343878c0c7f)]
2021-03-24 17:01:21,025 [tb-rule-engine-consumer-24-thread-3] INFO  o.t.s.s.q.TbMsgPackProcessingContext - Top Rule Nodes by execution count:
2021-03-24 17:01:21,025 [tb-rule-engine-consumer-24-thread-3] INFO  o.t.s.s.q.TbMsgPackProcessingContext - [Main][3f740670-8cc0-11eb-bcd9-d343878c0c7f] execution count: 2. [RuleChain: Thermostat|RuleNode: Device Profile Node(3f740670-8cc0-11eb-bcd9-d343878c0c7f)]
2021-03-24 17:01:21,028 [tb-rule-engine-consumer-24-thread-3] INFO  o.t.s.s.q.TbMsgPackProcessingContext - [Main][3f6debf0-8cc0-11eb-bcd9-d343878c0c7f] execution count: 1. [RuleChain: Thermostat|RuleNode: Message Type Switch(3f6debf0-8cc0-11eb-bcd9-d343878c0c7f)]
```

## Logs

### Read logs

Regardless of the deployment type, ThingsBoard Edge logs stored in the following directory:

```bash
/var/log/tb-edge
```

Different deployment tools provide different ways to view logs:

{% capture contenttogglespecdeploymenttype %}
Standalone Deployment%,%standalone%,%templates/edge/troubleshooting/logs/view-logs/standalone-view-logs.md%br%
Docker-Compose Deployment%,%docker-compose%,%templates/edge/troubleshooting/logs/view-logs/docker-compose-view-logs.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}


### Enable certain logs

ThingsBoard provides the ability to enable/disable logging for certain parts of the system depending on what information do you need for troubleshooting.

You can do this by modifying <b>logback.xml</b> file. As logs itself, it is stored in the following directory:

```bash
/usr/share/tb-edge/conf
```

Here's an example of the <b>logback.xml</b> configuration:

```bash
<!DOCTYPE configuration>
<configuration scan="true" scanPeriod="10 seconds">

    <appender name="fileLogAppender"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>/var/log/tb-edge/tb-edge.log</file>
        <rollingPolicy
                class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>/var/log/tb-edge/tb-edge.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <maxFileSize>100MB</maxFileSize>
            <maxHistory>30</maxHistory>
            <totalSizeCap>3GB</totalSizeCap>
        </rollingPolicy>
        <encoder>
            <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <logger name="org.thingsboard.server" level="INFO" />
    <logger name="org.thingsboard.js.api" level="TRACE" />
    <logger name="com.microsoft.azure.servicebus.primitives.CoreMessageReceiver" level="OFF" />

    <root level="INFO">
        <appender-ref ref="fileLogAppender"/>
    </root>
</configuration>
```

The most useful for the troubleshooting parts of the config files are <i>loggers</i>.
They allow you to enable/disable logging for the certain class or group of classes.
In the example above the default logging level is <b>INFO</b> (it means that logs will contain only general information, warnings and errors), but for the package <code>org.thingsboard.js.api</code> we enabled the most detailed level of logging.
There's also a possibility to completely disable logs for some part of the system, in the example above we did it to <code>com.microsoft.azure.servicebus.primitives.CoreMessageReceiver</code> class using <b>OFF</b> log-level.

To enable/disable logging for some part of the system you need to add proper <code></logger></code> configuration and wait up to 10 seconds.

Different deployment tools provide different ways to update logs:

{% capture contenttogglespecdeploymenttype2 %}
Standalone Deployment%,%standalone%,%templates/edge/troubleshooting/logs/enable-logs/standalone-enable-logs.md%br%
Docker-Compose Deployment%,%docker-compose%,%templates/edge/troubleshooting/logs/enable-logs/docker-compose-enable-logs.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="deploymentType2" toggle-spec=contenttogglespecdeploymenttype2 %}

## Metrics

You may enable prometheus metrics by setting environment variables `METRICS_ENABLED` to value `true` and `METRICS_ENDPOINTS_EXPOSE` to value `prometheus` in the configuration file.

These metrics exposed at the path: `https://<yourhostname>/actuator/prometheus` which can be scraped by prometheus (No authentication required).

## Prometheus metrics

Some internal state metrics can be exposed by the Spring Actuator using Prometheus.

Here's the list of metrics ThingsBoard pushes to Prometheus.

#### <b>tb-edge</b> metrics:
- <i>attributes_queue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about writing <b>attributes</b> to the database.
  Note that there are several queues (threads) for persisting attributes in order to reach maximum performance.
- <i>ruleEngine_${name_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs, tmpFailed, failedIterations, successfulIterations, timeoutMsgs, tmpTimeout</i>):
  stats about processing of the messages inside of the Rule Engine. They are persisted for each queue (e.g. Main, HighPriority, SequentialByOriginator etc).
  Some stats descriptions:
    - <i>tmpFailed</i>: number of messages that failed and got reprocessed later
    - <i>tmpTimeout</i>: number of messages that timed out and got reprocessed later
    - <i>timeoutMsgs</i>: number of messages that timed out and were discarded afterwards
    - <i>failedIterations</i>: iterations of processing messages pack where at least one message wasn't processed successfully
- <i>ruleEngine_${name_of_queue}_seconds</i> (for each present <i>tenantId</i>): stats about the time message processing took for different queues.
- <i>core</i> (statsNames - <i>totalMsgs, toDevRpc, coreNfs, sessionEvents, subInfo, subToAttr, subToRpc, deviceState, getAttr, claimDevice, subMsgs</i>):
  stats about processing of the internal system messages.
  Some stats descriptions:
    - <i>toDevRpc</i>: number of processed RPC responses from Transport services
    - <i>sessionEvents</i>: number of session events from Transport services
    - <i>subInfo</i>: number of subscription infos from Transport services
    - <i>subToAttr</i>: number of subscribes to attribute updates from Transport services
    - <i>subToRpc</i>: number of subscribes to RPC from Transport services
    - <i>getAttr</i>: number of 'get attributes' requests from Transport services
    - <i>claimDevice</i>: number of Device claims from Transport services
    - <i>deviceState</i>: number of processed changes to Device State
    - <i>subMsgs</i>: number of processed subscriptions
    - <i>coreNfs</i>: number of processed specific 'system' messages
- <i>jsInvoke</i> (statsNames - <i>requests, responses, failures</i>): stats about total, successful and failed requests to the JS executors
- <i>attributes_cache</i> (results - <i>hit, miss</i>): stats about how much attribute requests went to the cache


#### <b>transport</b> metrics:
- <i>transport</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about requests received by Transport from Core
- <i>ruleEngine_producer</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about pushing messages from Transport to the Rule Engine.
- <i>core_producer</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about pushing messages from Transport to the TB node Device actor.
- <i>transport_producer</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about requests from Transport to the Core.


#### PostgreSQL-specific metrics:
- <i>ts_latest_queue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about writing <b>latest telemetry</b> to the database.
  Note that there are several queues (threads) in order to reach maximum performance.
- <i>ts_queue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about writing <b>telemetry</b> to the database.
  Note that there are several queues (threads) in order to reach maximum performance.

## Getting help

<section id="talkToUs">
    <div id="gettingHelp">
        <a href="https://app.gitter.im/#/room/#thingsboard_chat:gitter.im">
            <span class="phrase-heading">Community chat</span>
            <p>Our Gitter channel is the best way to contact our engineers and share your ideas with them.</p>
        </a>
        <a href="https://groups.google.com/forum/#!forum/thingsboard">
            <span class="phrase-heading">Q&A forum</span>
            <p>Our user forum is a great place to go for community support.</p>
        </a>
        <a href="https://stackoverflow.com/questions/tagged/thingsboard">
            <span class="phrase-heading">Stack Overflow</span>
            <p>The ThingsBoard team will also monitor posts tagged thingsboard. If there aren’t any existing questions that help, please ask a new one!</p>
        </a>
    </div>
</section>

If your problem isn't answered by any of the guides above, feel free to contact ThingsBoard team.

<a class="button" href="/docs/contact-us/">Contact us</a>
