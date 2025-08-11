* TOC
{:toc}

## Troubleshooting instruments and tips

### MessagePack Processing Log

To enable logging for the slowest and most frequently called rule-nodes, 
[update your logging configuration](#enable-certain-logs) with the following **logger**:

```bash
<logger name="org.thingsboard.server.service.queue.TbMsgPackProcessingContext" level="DEBUG" />
```

After this, you can find the following messages in your [logs](#logs):

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

Regardless of the deployment type, ThingsBoard Edge logs are stored in the following directory:

```bash
/var/log/tb-edge
```

Different deployment tools provide different ways to view logs:

{% capture contenttogglespecdeploymenttype %}
Standalone Deployment%,%standalone%,%templates/edge/troubleshooting/logs/view-logs/standalone-view-logs.md%br%
Docker-Compose Deployment%,%docker-compose%,%templates/edge/troubleshooting/logs/view-logs/docker-compose-view-logs.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="deploymentType" toggle-spec=contenttogglespecdeploymenttype %}


### Enable specific logs

ThingsBoard provides the ability to enable/disable logging for specific parts of the system, depending on the information you need for troubleshooting.

You can do this by modifying the `logback.xml` file. Like the logs themselves, the file is stored in the following directory:

```bash
/usr/share/tb-edge/conf
```

Here's an example of the `logback.xml` configuration:

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

The most useful for the troubleshooting parts of the config files are **loggers**.
They allow you to enable/disable logging for a specific class or group of classes.

In the example above, the default logging level is set to **INFO** (meaning that logs will contain only general information, warnings and errors). 
However, for the `org.thingsboard.js.api` package we enabled the most detailed level of logging by setting it to **TRACE**.

It’s also possible to completely disable logging for certain parts of the system. 
In the example above, we did this to the `com.microsoft.azure.servicebus.primitives.CoreMessageReceiver` class by setting the log-level to **OFF**.

To enable/disable logging for a specific part of the system, you need to add the appropriate `</logger>` configuration, and wait up to 10 seconds.

Different deployment tools provide different ways to update logs:

{% capture contenttogglespecdeploymenttype2 %}
Standalone Deployment%,%standalone%,%templates/edge/troubleshooting/logs/enable-logs/standalone-enable-logs.md%br%
Docker-Compose Deployment%,%docker-compose%,%templates/edge/troubleshooting/logs/enable-logs/docker-compose-enable-logs.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="deploymentType2" toggle-spec=contenttogglespecdeploymenttype2 %}

## Metrics

You can enable Prometheus metrics by setting the following environment variables in the configuration file:
* set `METRICS_ENABLED` to `true`
* set `METRICS_ENDPOINTS_EXPOSE` to `prometheus` 

These metrics are exposed at the path: `https://<yourhostname>/actuator/prometheus` which can be scraped by prometheus (no authentication is required).

## Prometheus metrics

Some internal state metrics can be exposed by the **Spring Boot Actuator** using **Prometheus**.

Here is the list of stats that **ThingsBoard** pushes to **Prometheus**:

### tb-edge metrics:

- **attributes_queue_${index_of_queue}** (statsNames - **totalMsgs, failedMsgs, successfulMsgs**): The stats that represent **attribute writes** to the database.  
  _Note that several queues (threads) are used to persist attributes for maximum performance._
- **ruleEngine_${name_of_queue}** (statsNames - **totalMsgs, failedMsgs, successfulMsgs, tmpFailed, failedIterations, successfulIterations, timeoutMsgs, tmpTimeout**):
  The stats that represent message processing in the Rule Engine. They are persisted for each queue (e.g. Main, HighPriority, SequentialByOriginator etc).
  Descriptions of some metrics:
    - **tmpFailed**: The number of messages that failed and got reprocessed later.
    - **tmpTimeout**: The number of messages that timed out and got reprocessed later.
    - **timeoutMsgs**: The number of messages that timed out and were discarded.
    - **failedIterations**: The iterations of processing message packs where at least one message wasn't processed successfully.
- **ruleEngine_${name_of_queue}_seconds** (for each present **tenantId**): The stats that represent the time it took to process messages in different queues.
- **core** (statsNames - **totalMsgs, toDevRpc, coreNfs, sessionEvents, subInfo, subToAttr, subToRpc, deviceState, getAttr, claimDevice, subMsgs**):
  The stats that represent the processing of internal system messages.
  Descriptions of some metrics:
    - **toDevRpc**: The number of processed RPC responses from Transport services.
    - **sessionEvents**: The number of session events from Transport services.
    - **subInfo**: The number of subscription infos from Transport services.
    - **subToAttr**: The number of subscribes to attribute updates from Transport services.
    - **subToRpc**: The number of subscribes to RPC from Transport services.
    - **getAttr**: The number of 'get attributes' requests from Transport services.
    - **claimDevice**: The number of device claims from Transport services.
    - **deviceState**: The number of processed changes to Device State.
    - **subMsgs**: The number of processed subscriptions.
    - **coreNfs**: The number of processed specific 'system' messages.
- **jsInvoke** (statsNames - **requests, responses, failures**): The stats that represent the number of total, successful and failed requests to the JS executors.
- **attributes_cache** (results - **hit, miss**): The stats that represent the number of attribute requests that went to the cache.


### transport metrics:
- **transport** (statsNames - **totalMsgs, failedMsgs, successfulMsgs**): The stats that represent the number of requests received by Transport from Core.
- **ruleEngine_producer** (statsNames - **totalMsgs, failedMsgs, successfulMsgs**): The stats that represent the number of messages pushed from Transport to the Rule Engine.
- **core_producer<** (statsNames - **totalMsgs, failedMsgs, successfulMsgs**): The stats that represent the number of messages pushed from Transport to the ThingsBoard node device actor.
- **transport_producer** (statsNames - **totalMsgs, failedMsgs, successfulMsgs**): The stats that represent the number of requests from Transport to the Core.


### PostgreSQL-specific metrics:
- **ts_latest_queue_${index_of_queue}** (statsNames - **totalMsgs, failedMsgs, successfulMsgs**): The stats that represent the **latest telemetry** writes to the database.  
  Note that multiple queues (threads) are used to ensure maximum performance.
- **ts_queue_${index_of_queue}**(statsNames - **totalMsgs, failedMsgs, successfulMsgs**): The stats that represent the **telemetry** writes to the database.  
  Note that multiple queues (threads) are used to ensure maximum performance.

## Monitoring message statistics

{% assign sinceVersion = "4.2" %}
{% include templates/edge/since-edge.md %}

To diagnose and resolve issues with message delivery between the Cloud and Edge, you can monitor the state of **uplink** (Edge → Cloud) 
and **downlink** (Cloud → Edge) message flows.

* [Download](/docs/edge/user-guide/download-dashboard/edges.zip) the preconfigured Edge dashboard. 
* Import the dashboard to your **Cloud**:
  * Go to the **Dashboards** section.
  * Click the **"+"** button, select the **"Import dashboard"** option and browse for the `.json` file on your computer. Click the **"Import"** button to proceed.

{% include images-gallery.html imageCollection="how-to-import-dashboard" %}

### Dashboard overview

#### Main widgets
* **Entities table (Edges):** The widget displays the list of connected Edge instances and includes interactive controls, and links to deeper views. 
* **Edge quick overview:** The widget displays a hierarchical snapshot of key components synced from Cloud to each Edge (_Assets, Devices, Entity Views, Dashboards, and Rule Chains_)
* **Map:** Visualizes the geographical location of Edge nodes.
* **Message flow widgets (Uplink and Downlink):** The time-series widgets detect message buildup or delivery issues from Cloud to Edge, as well as whether there are communication delays or data loss at the Edge.

{% include images-gallery.html imageCollection="internal-monitoring-main" %}

#### Edge Details view
When you click on a specific Edge instance, the dashboard opens a detailed view that includes:
* **HTML card:** You can fill in the card with any information related to the Edge (_e.g., contact details, software version, or current alarm status_)
* **Local alarms:** The widget tracks recent alarms (_e.g., critical events or device failures_) originating from this Edge.
* **Uplinks/Downlinks time-series graphs:** The message flow widget filtered specifically for the selected Edge.
* **Entities table (Devices):** The widget lists all devices connected to this Edge instance.

{% include images-gallery.html imageCollection="internal-monitoring-details" %}

### The telemetry keys for statistics monitoring

ThingsBoard Edge exposes a set of telemetry keys that allow you to monitor message statistics between Edge and Cloud.

#### Uplink
* **uplinkMsgsAdded:** The number of messages added to the queue.
* **uplinkMsgsPushed:** The number of messages successfully sent to the Cloud.
* **uplinkMsgsPermanentlyFailed:** The number of permanently failed messages.
* **uplinkMsgsTmpFailed:** The number of temporarily failed messages (e.g., due to network issues).
* **uplinkMsgsLag:** The number of messages remaining in the queue (lag).

#### Downlink
* **downlinkMsgsAdded:** The number of messages added to the queue.
* **downlinkMsgsPushed:** The number of messages successfully sent to the Cloud.
* **downlinkMsgsPermanentlyFailed:** The number of permanently failed messages.
* **downlinkMsgsTmpFailed:** The number of temporarily failed messages (e.g., due to network issues).
* **downlinkMsgsLag:** The number of messages remaining in the queue (lag).

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
