
## Possible performance issues

Here we will describe different possible scenarios of what may go wrong.

{% capture contenttogglespecscenario %}
No Message Processing%,%no-message-processing%,%templates/troubleshooting/scenarios/no-message-processing.md%br%
Growing Latency For Messages%,%growing-latency%,%templates/troubleshooting/scenarios/growing-latency.md{% endcapture %}

{% include content-toggle.html content-toggle-id="scenario" toggle-spec=contenttogglespecscenario %}

## Troubleshooting instruments and tips

### Rule Engine Statistics Dashboard
You can see if there are any Failures, Timeouts or Exceptions during the processing of your rule-chain. More detailed information you can find [here](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-engine-statistics).

### Consumer group message lag for Kafka Queue

**Note:** This method can be used only if Kafka is selected as a queue.

With this log you can identify if there's some issue with processing of your messages (since Queue is used for all messaging inside the system you can analyze not only rule-engine queues but also <b>transport</b>, <b>core</b> etc).
For more detailed information about troubleshooting rule-engine processing using consumer-group lag click [here](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#troubleshooting).

### CPU/Memory Usage

Sometimes the problem is that you don't have enough resources for some service. You can view CPU and Memory usage by logging into your server/container/pod and executing <code>top</code> linux command.

For the more convenient monitoring it is better to have configured Prometheus and Grafana.

If you see that some services sometimes use 100% of the CPU, you should either scale the service horizontally by creating new nodes in cluster or scale it vertically by increasing the total amount of CPU.

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

### Clearing Redis Cache

**Note:** This can be used only if Redis is selected as a cache.

It is possible that the data inside the cache somehow got corrupted. Regardless of the reason, it is always safe to clear cache, ThingsBoard will just refill it at the runtime.
To clear Redis cache you need to log into the server/container/pod with Redis on it and call <code>redis-cli FLUSHALL</code> command.

So if you are struggling with identifying the reason of some problem, you can safely clear Redis cache to make sure it isn't the reason of the issue.


## Logs

### Read logs

Regardless of the deployment type, ThingsBoard logs are stored on the same server/container as ThingsBoard Server/Node itself in the following directory:

```bash
/var/log/thingsboard
```

Different deployment tools provide different ways to view logs:

{% capture contenttogglespecdeploymenttype %}
Standalone Deployment%,%standalone%,%templates/troubleshooting/logs/view-logs/standalone-view-logs.md%br%
Docker-Compose Deployment%,%docker-compose%,%templates/troubleshooting/logs/view-logs/docker-compose-view-logs.md%br%
Kubernetes Deployment%,%kubernetes%,%templates/troubleshooting/logs/view-logs/kubernetes-view-logs.md{% endcapture %}

{% include content-toggle.html content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}


### Enable certain logs

ThingsBoard provides the ability to enable/disable logging for certain parts of the system depending on what information do you need for troubleshooting.

You can do this by modifying <b>logback.xml</b> file. As logs itself, it is stored on the same server/container as ThingsBoard Server/Node in the following directory:

```bash
/usr/share/thingsboard/conf
```

Here's an example of the <b>logback.xml</b> configuration:

```bash
<!DOCTYPE configuration>
<configuration scan="true" scanPeriod="10 seconds">

    <appender name="fileLogAppender"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>/var/log/thingsboard/thingsboard.log</file>
        <rollingPolicy
                class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>/var/log/thingsboard/thingsboard.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
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

{% capture contenttogglespecdeploymenttype %}
Standalone Deployment%,%standalone%,%templates/troubleshooting/logs/enable-logs/standalone-enable-logs.md%br%
Docker-Compose Deployment%,%docker-compose%,%templates/troubleshooting/logs/enable-logs/docker-compose-enable-logs.md%br%
Kubernetes Deployment%,%kubernetes%,%templates/troubleshooting/logs/enable-logs/kubernetes-enable-logs.md{% endcapture %}

{% include content-toggle.html content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}


## Metrics

You may enable prometheus metrics by setting environment variable `METRICS_ENDPOINTS_EXPOSE` to value `prometheus` in the configuration file.

These metrics are exposed at the path: `https://<yourhostname>/actuator/prometheus` which can be scraped by prometheus (No authentication required).

## Getting help

<section id="talkToUs">
    <main>
        <div id="gettingHelp">
            <div>
                <a href="https://gitter.im/thingsboard/chat">Community chat</a>
                <p>Our Gitter channel is the best way to contact our engineers and share your ideas with them.</p>
            </div>
            <div>
                <a href="https://groups.google.com/forum/#!forum/thingsboard">Q&A forum</a>
                <p>Our user forum is a great place to go for community support.</p>
            </div>
            <div>
                <a href="http://stackoverflow.com/questions/tagged/thingsboard">Stack Overflow</a>
                <p>The ThingsBoard team will also monitor posts tagged thingsboard. If there aren’t any existing questions that help, please ask a new one!</p>
            </div>
        </div>
    </main>
</section>

If your problem isn't answered by any of the guides above, feel free to contact ThingsBoard team.

<a class="button" href="/docs/contact-us/">Contact us</a>
