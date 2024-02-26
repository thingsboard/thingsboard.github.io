* TOC
{:toc}

## Possible performance issues

Here we will describe different possible scenarios of what may go wrong.

{% capture contenttogglespecscenario %}
No Message Processing%,%no-message-processing%,%templates/troubleshooting/scenarios/no-message-processing.md%br%
Growing Latency For Messages%,%growing-latency%,%templates/troubleshooting/scenarios/growing-latency.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="scenario" toggle-spec=contenttogglespecscenario %}

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
To clear Redis cache you need to log into the server/container/pod with Redis on it and call <code>redis-cli FLUSHALL</code> command. To clear the cache in Redis Sentinel mode, access the master container and execute the cache-clearing command.

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

{% include content-toggle.liquid content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}


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

{% capture contenttogglespecdeploymenttype2 %}
Standalone Deployment%,%standalone%,%templates/troubleshooting/logs/enable-logs/standalone-enable-logs.md%br%
Docker-Compose Deployment%,%docker-compose%,%templates/troubleshooting/logs/enable-logs/docker-compose-enable-logs.md%br%
Kubernetes Deployment%,%kubernetes%,%templates/troubleshooting/logs/enable-logs/kubernetes-enable-logs.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype2 %}


## Metrics

You may enable prometheus metrics by setting environment variables `METRICS_ENABLED` to value `true` and `METRICS_ENDPOINTS_EXPOSE` to value `prometheus` in the configuration file.
If you are running ThingsBoard as microservices with separate services for MQTT and COAP transport, you also need to set environment variables `WEB_APPLICATION_ENABLE` to value `true`, 
`WEB_APPLICATION_TYPE` to value `servlet` and `HTTP_BIND_PORT` to value `8081` for MQTT and COAP services in order to enable web-server with Prometheus metrics.

These metrics are exposed at the path: `https://<yourhostname>/actuator/prometheus` which can be scraped by prometheus (No authentication required).

## Prometheus metrics

Some internal state metrics can be exposed by the Spring Actuator using Prometheus.

Here's the list of metrics ThingsBoard pushes to Prometheus.

#### <b>tb-node</b> metrics
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


#### <b>transport</b> metrics
- <i>transport</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about requests received by Transport from TB nodes 
- <i>ruleEngine_producer</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about pushing messages from Transport to the Rule Engine.
- <i>core_producer</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about pushing messages from Transport to the TB node Device actor.
- <i>transport_producer</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about requests from Transport to the TB.


<b>Some metrics depends on the type of the database you are using to persist timeseries data.</b>

#### PostgreSQL-specific metrics
- <i>ts_latest_queue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about writing <b>latest telemetry</b> to the database. 
Note that there are several queues (threads) in order to reach maximum performance.
- <i>ts_queue_${index_of_queue}</i> (statsNames - <i>totalMsgs, failedMsgs, successfulMsgs</i>): stats about writing <b>telemetry</b> to the database. 
Note that there are several queues (threads) in order to reach maximum performance.

#### Cassandra-specific metrics
- <i>rateExecutor_currBuffer</i>: number of messages that are currently being persisted inside the Cassandra.
- <i>rateExecutor_tenant</i> (for each present <i>tenantId</i>): number of requests that got rate-limited
- <i>rateExecutor</i> (statsNames - <i>totalAdded, totalRejected, totalLaunched, totalReleased, totalFailed, totalExpired, totalRateLimited</i>)
Stats descriptions:
    - <i>totalAdded</i>: number messages that were submitted for persisting
    - <i>totalRejected</i>: number messages that were rejected while trying to submit for persisting
    - <i>totalLaunched</i>: number messages sent to the Cassandra
    - <i>totalReleased</i>: number successfully persisted messages
    - <i>totalFailed</i>: number of messages that were not persisted
    - <i>totalExpired</i>: number of expired messages that were not sent to the Cassandra
    - <i>totalRateLimited</i>: number of messages that were not processed because of the Tenant's rate-limits
    
## Grafana Dashboards

You can import preconfigured Grafana dashboards from [here](https://github.com/thingsboard/thingsboard/tree/master/docker/monitoring/grafana/provisioning/dashboards). 
**Note:** Depending on the cluster configuration you may need to make changes to the dashboards.

Also, you can view Grafana dashboards after deploying ThingsBoards docker-compose cluster configuration (for more information please follow [this guide](/docs/user-guide/install/{{docsPrefix}}cluster/docker-compose-setup/)).
Make sure that `MONITORING_ENABLED` environment variable is set to `true`. 
After deployment, you will be able to reach Prometheus at `http://localhost:9090` and Grafana at `http://localhost:3000` (default login is `admin` and password `foobar`).

Here's screenshots of default preconfigured Grafana dashboards:

{% include images-gallery.html imageCollection="metrics-dashboards" %}


## OAuth2

Sometimes after configuring OAuth you can not see the button for logging in with OAuth provider. This happens when “Domain name” and “Redirect URI Template” contain faulty values, they need to be the same you use for accessing your ThingsBoard web page.

Example:

| Base URL |  Domain name     |  Redirect URI Template                    |
|-----------------|----------------- |----------------------------------         |
|http://mycompany.com:8080    |mycompany.com:8080     | http://mycompany.com:8080/login/oauth2/code  |
|https://mycompany.com          |mycompany.com          | https://mycompany.com/login/oauth2/code       |

Base URL in "HOME" section should not contain "/" or other characters.

> Go to your ThingsBoard as a System Administrator. Check the General
> Settings -> Base URL should not contain “/” at the end (e.g. “https://
> mycompany.com ” instead of “https://mycompany.com/”).

For OAuth2 configuration click [here](/docs/{{docsPrefix}}user-guide/oauth-2-support/).

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
