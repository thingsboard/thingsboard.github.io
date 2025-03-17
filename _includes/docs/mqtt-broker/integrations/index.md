
* TOC
{:toc}

{% assign sinceVersion = "2.1.0" %}
{% include templates/mqtt-broker/since.md %}

### Overview

**Integrations** in TBMQ are the data bridges that allow you to forward MQTT messages from connected clients to external systems such as HTTP endpoints, Kafka brokers, or other MQTT brokers. 
This enables seamless data flow between IoT devices and the broader data infrastructure, allowing the MQTT broker to act as a central integration point in your architecture.

#### Why Use Integrations?

Integrations make MQTT data useful outside the broker. They help you:

- Bridge MQTT messages to external systems for processing, storage, or analytics.
- Enable interoperability between MQTT and other protocols.
- Build complex event-driven workflows across different platforms.
- Maintain modularity and scalability in your IoT architecture.

#### High-Level Design

At a high level, the integration flow in TBMQ works like this:

1. **MQTT clients** connect to the **TBMQ** broker using **MQTT** or **MQTTS** and publish messages.
2. When a message matches an integration [topic filter](#integration-entity) (MQTT subscription), **TBMQ** sends the message to the [TBMQ Integration Executor](#new-microservice) using **Kafka**.
3. The **Integration Executor** receives the message, processes it, and forwards it to the correct external system, such as:
- An **HTTP endpoint** over **HTTP or HTTPS**.
- Another **MQTT broker** over **MQTT or MQTTS**.
- A **Kafka broker** using the **Kafka binary protocol over TCP or TLS**.

![image](/images/mqtt-broker/integrations/tbmq-ie-main.png)

#### New microservice

TBMQ uses a dedicated microservice called **TBMQ Integration Executor** (shortened as "TBMQ IE") to manage and run integrations.

With this feature, TBMQ supports two service types defined by the `TB_SERVICE_TYPE` environment variable:

* **tbmq** – the core MQTT broker service;
* **tbmq-integration-executor** – the integration execution service (tbmq-ie).

The Integration Executor service listens for integration events and messages from TBMQ (via Kafka), processes them based on the integration configuration, 
and forwards the data to the correct external system.

> This architecture ensures clear separation of concerns, high availability, and improves scalability and system performance.

#### Deployment Options

In TBMQ, integrations can only be deployed using Integration Executor microservice.

> Why Not Embedded in the TBMQ?

We **intentionally do not embed integration logic** inside the TBMQ broker. This decision provides several key benefits:

- **Isolation**: Failures or slow responses from external systems (e.g., HTTP endpoints) do not affect MQTT message processing in the broker.
- **Scalability**: `tbmq-ie` instances can be scaled independently based on load, without impacting the performance of the broker.
- **Resilience**: Each Integration Executor can restart or fail independently without interrupting the core MQTT services.
- **Extensibility**: New integration types or improvements can be added to the Integration Executor without changing the broker itself.
- **Clear separation of responsibilities**: The broker handles MQTT protocol logic, while the Integration Executor focuses on data delivery to external systems.

### Architecture

In this section, you'll learn how TBMQ and the Integration Executor communicate internally, how data flows between components, and how the system remains scalable and fault-tolerant under load.

#### Integration Entity

Integrations are stored in the TBMQ’s PostgreSQL database. Each integration entity includes basic fields like:

- **Type** – HTTP, Kafka, or MQTT.
- **Name** – a human-readable name.
- **Enabled** – whether the integration is enabled or disabled.
- **Status** – actual status of the integration:
  - **Disabled**: Not active.
  - **Active**: Running and processing messages.
  - **Failed**: Encountered connection failure.
  - **Pending**: Waiting for validation and activation.
- **Configuration** – contains connection details and parameters for the external system.
- **Topic filters** – define MQTT-based subscriptions and act as triggers. When a broker receives a message matching a topic filter, the integration is triggered and forwards it to the configured external system.

You can configure multiple integrations with different types, topic filters, and target systems. Each integration operates independently and can be enabled or disabled at any time.

An example of MQTT integration (partial configuration):

```json
{
  "name":"MQTT integration",
  "type":"MQTT",
  "enabled":true,
  "configuration":{
    "topicFilters":[
      "tbmq/#"
    ],
    "clientConfiguration":{
      "host":"10.7.3.148",
      "port":1883
    }
  },
  "status":{
    "success":true
  }
}
```

#### TBMQ (MQTT Broker) Component

The core TBMQ service (`TB_SERVICE_TYPE=tbmq`) is responsible for:

- Handling MQTT protocol logic, including client connections, subscriptions, and message routing.
- Managing integration entities — processing create, update, and delete requests and storing them in the database.
- Sending integration validation requests (for configuration validation or connection checks) to TBMQ IE.
- Publishing integration configuration events to TBMQ IE.
- Matching incoming MQTT messages against active integration subscriptions and forwarding them to TBMQ IE when applicable.

The broker is stateless with respect to integrations and can be scaled horizontally to handle increasing MQTT traffic.

#### TBMQ Integration Executor Component

The Integration Executor (`TB_SERVICE_TYPE=tbmq-integration-executor`) is a standalone microservice responsible for:

- Receiving and processing validation requests from TBMQ, then sending back responses.
- Managing the full integration lifecycle based on configuration events (create/update/delete).
- Executing integration logic, including retry mechanisms, timeout handling, and backpressure control.
- Delivering MQTT messages to the configured external system (HTTP, Kafka, or MQTT).
- Sending lifecycle, error, and statistics integration events back to TBMQ.

This component operates independently of the broker and can be scaled separately. 
It ensures that delays or failures in external systems do not affect the broker’s ability to process MQTT traffic.

#### Kafka (Internal Communication Layer)

Kafka acts as the **bridge** between the TBMQ brokers and Integration Executors. It enables:

- Reliable delivery of integration-related events between services.
- Buffering of messages in case of component downtime, processing delays, or spikes in load.
- Scalable and parallel processing by allowing multiple broker and executor instances to work concurrently.

![image](/images/mqtt-broker/integrations/tbmq-ie-communication.png)

TBMQ and its Integration Executor microservices communicate asynchronously over Kafka using multiple **dedicated** topics.
Each topic serves a specific purpose and allows for decoupled, reliable, and scalable data flow between the components.

* **tbmq.ie.downlink.$integrationType** — Compact topic used to send integration configurations and validation requests from TBMQ to IE. ($integrationType can be 'http', 'mqtt', or 'kafka').
* **tbmq.ie.uplink** — Shared topic for sending lifecycle events, statistics, and errors from IE back to TBMQ.
* **tbmq.ie.uplink.notifications.$serviceId** — Topic used for sending validation responses and other one-off replies to the correct TBMQ node (identified by $serviceId).
* **tbmq.msg.ie.$integrationId** — Per-integration message processing topic used to forward MQTT messages from TBMQ to the IE ($integrationId is the UUID of the integration entity).

#### Downlink topics

TBMQ configures downlink Kafka topics to be **compact** ones. Each integration type has its own dedicated topic:

- `tbmq.ie.downlink.http`
- `tbmq.ie.downlink.mqtt`
- `tbmq.ie.downlink.kafka`

These topics are used to:

- Deliver integration configuration data when integration is created, updated, or deleted.
- Trigger **connection and validation requests** to test the connectivity to external system or configuration before activation.

##### How It Works

- Integration lifecycle events (create, update, delete) are published to the relevant **downlink compact topic**, based on integration type (e.g., `tbmq.ie.downlink.http` for HTTP integration).
- Kafka’s **log compaction** mechanism keeps only the most recent configuration per integration ID, discarding outdated messages.
- On startup or partition reassignment, each `tbmq-ie` instance:
  1. **Seeks to the beginning** of the assigned topic partition.
  2. **Restores the latest state** of all relevant integrations from the compacted records.
  3. Once restoration is complete and the **end of the partition is reached**, it transitions to **real-time mode** and begins normal operation.
- Integrations are only initialized after their configurations are fully restored from Kafka.

##### Benefits of This Approach

- **Resilience**: Ensures TBMQ IE can fully recover after restarts without requiring external config stores.
- **Consistency**: Always works with the latest valid config — no stale or conflicting states.
- **Scalability**: Stateless service design; all config state is persisted in Kafka.
- **Reduced Load**: Only changed configurations are written; no need to resend the full config set repeatedly.

This pattern provides a **durable, distributed configuration source** backed by Kafka, enabling reliable and scalable integration execution across multiple TBMQ IE instances.

##### Why Separate Topics?

Although downlink topics are not used for message processing, separating them by integration type provides several key benefits:

- **Executor Specialization**: You can assign specific executor instances to process only certain types using the `TB_SERVICE_INTEGRATIONS_SUPPORTED` and `TB_SERVICE_INTEGRATIONS_EXCLUDED` environment variables.
- **Targeted Consumption**: Executors subscribe only to topics they are configured to handle.
- **Improved Isolation**: Different integration types often have different configuration payloads and validation logic. Dedicated topics ensure that only relevant messages are received by each executor.
- **Operational Simplicity**: Easier to debug and monitor traffic per integration type.
- **Flexible Scaling**: Each topic can be tuned individually (e.g., partitions, retention) based on the specific load characteristics of each integration type.

This design empowers admins to deploy **specialized executor instances** — for example, running only HTTP integrations in one pool and Kafka in another — giving you flexibility, isolation, and efficiency at scale.

#### Uplink Topic

This topic is used by the Integration Executors to **send messages back to the TBMQ**, such as:

- Integration lifecycle events (e.g., executor started, integration activated)
- Error reports from failed deliveries
- Integration statistics (success/failure counts)

##### Purpose:
- Allow TBMQ to persist operational data and metrics in the database.
- Enable observability and system-wide monitoring.


#### Uplink Node-Specific Notifications Topic

This topic prefix is used to **send direct replies from executors to specific TBMQ nodes**, typically in response to validation requests or one-time commands.

##### Example usage:

- Replying to a "Check Connection" request for an HTTP integration.
- Sending validation error details back to the correct broker node.

##### Purpose:

- Ensure responses go to the correct TBMQ instance in clustered setups.
- Maintain request-response correlation.



> All integration configurations are automatically sent to the Integration Executor (`tbmq-ie`) via Kafka compact topics. These topics ensure that the latest integration settings are always available, even after a restart.


#### Integration Lifecycle

The lifecycle of an integration in TBMQ includes its creation, update, deletion, execution, monitoring, and error handling.
Integrations can be created/updated/deleted either from the TBMQ Web UI or using the REST API.

Once the request from UI or REST API is received by TBMQ, it generates the validation request and sends it to the Integration Executor.
The IE receives the request and do the validation of configuration based on the type of integration.
Note, similarly the `Check connection` feauture is working to send the request to test the connection to external system.
You can also test an integration connection via the UI or API using the **"Validate"** function, which checks if the external system is reachable.

Let's review 3 examples.

**Scenario 1. Integration Executor running**

![image](/images/mqtt-broker/integrations/tbmq-ie-admin-ok.png)

When it is running - the expected result is Success.

**Scenario 2. Integration Executor running validation failed**

![image](/images/mqtt-broker/integrations/tbmq-ie-admin-error.png)

When it is running but the configuration is wrong - the expected result is Failure.

**Scenario 3. Integration Executor running validation failed**

![image](/images/mqtt-broker/integrations/tbmq-ie-admin-timeout.png)

When it is not running the integration will be be saved after the period of timeout and you will see Timeout exception.


In case the validation is success, the integration entity is saved in the DB and the configuration event is sent to IE.



![image](/images/mqtt-broker/integrations/tbmq-ie-msg-processing.png)

#### Integration Message Processing Topic




The integration processing flow in TBMQ follows a decoupled, event-driven model:

1. **MQTT Client publishes a message** to a topic handled by TBMQ Core.
2. TBMQ Core **checks for active integration rules** matching the topic.
3. If a match is found, the broker **serializes the message into an integration event** and **publishes it to an internal Kafka topic**.
4. One or more instances of `tbmq-integration-executor` **subscribe to the Kafka topic**, consume the event, and **forward the message to the target external system** (HTTP endpoint, Kafka topic, or MQTT broker).
5. Optional: the executor **logs the result** or error internally for monitoring and observability.

This decoupled architecture ensures non-blocking behavior — TBMQ Core never waits for external system responses.



Once an integration is created and enabled, it becomes **active immediately** and will start processing messages that match the topic filter.
In case integration is disabled, it continues receiveing messages in the dedicated Kafka topic and once it is back online the messages will start to be delivering to external system.

This is the **core topic used to deliver MQTT messages from TBMQ to Integration Executors** for actual processing and delivery to external systems.

Each integration, when triggered by an MQTT publish event, results in a message being placed on this topic.

##### Power & Design Choice:
- Messages from all integrations are published to this topic.
- Executors consume messages **in separate threads**, with processing logic specific to each integration instance.
- This design ensures:
  - High throughput and parallelism
  - Isolation between integration executions
  - Better resource utilization and fault tolerance

Thanks! Here’s a clear and well-structured version of that explanation, rewritten for documentation in a user-friendly, B1/B2 style. It explains the behavior, provides reassurance, and introduces the configuration parameters clearly.

##### Integration Message Storage and Cleanup

Each integration in TBMQ has a **dedicated Kafka topic** for storing messages that match its topic filters. This design allows integrations to process messages reliably, even if the integration is temporarily disabled.

##### What Happens When an Integration is Disabled?

- While an integration is **disabled**, messages that match its topic filters are **still received and stored** in its dedicated Kafka topic.
- Once the integration is **enabled again**, the executor starts delivering those messages to the external system.

##### What If the Integration Stays Disabled for a Long Time?

To prevent unused topics from taking up storage indefinitely, TBMQ includes a **cleanup mechanism**:

- If an integration remains **disconnected or disabled for a long period**, its message topic will be **automatically deleted**, along with the stored data.
- Don’t worry — when you **re-enable the integration**, the system will **automatically recreate the topic** and resume normal operation.


##### Cleanup Configuration Parameters

You can control the cleanup behavior using the following environment variables:

```yaml
cleanup:
  # How often the system checks for inactive integrations (in seconds).
  period: "${INTEGRATIONS_CLEANUP_PERIOD_SEC:10800}"  # Default: every 3 hours

  # Time-to-live (TTL) for inactive integration topics (in seconds).
  # Topics will be deleted if they stay inactive longer than this value.
  # Set to 0 or a negative number to disable cleanup.
  ttl: "${INTEGRATIONS_CLEANUP_TTL_SEC:604800}"  # Default: 1 week
```

This approach ensures that inactive integrations do not waste resources while still allowing for automatic recovery when they’re reactivated.





#### Message Delivery Error Handling & Retry Mechanism

When an integration message fails to be processed (e.g., due to a timeout, unreachable external system, or malformed response), 
the Integration Executor handles the error based on the configured **acknowledgment and retry strategy** for the `tbmq.msg.ie` topic.

These behaviors are controlled via the following configuration block:

```yaml
integration-msg:
  # Interval in milliseconds to poll messages from 'tbmq.msg.ie' topics
  poll-interval: "${TB_IE_MSG_POLL_INTERVAL:1000}"
  # Timeout in milliseconds for processing the pack of messages
  pack-processing-timeout: "${TB_IE_MSG_PACK_PROCESSING_TIMEOUT:30000}"
  ack-strategy:
    # Processing strategy for 'tbmq.msg.ie' topics. Can be: SKIP_ALL, RETRY_ALL
    type: "${TB_IE_MSG_ACK_STRATEGY_TYPE:SKIP_ALL}"
    # Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy
    retries: "${TB_IE_MSG_ACK_STRATEGY_RETRIES:5}"
    # Time in seconds to wait in consumer thread before retries
    pause-between-retries: "${TB_IE_MSG_ACK_STRATEGY_PAUSE_BETWEEN_RETRIES:1}"
```

##### Strategy Options

- **SKIP_ALL** (default):
  - If a message fails or timed out during processing, it is skipped after logging the error.
  - This ensures high throughput and avoids retry delays but sacrifices guaranteed delivery to external systems.

- **RETRY_ALL**:
  - The executor retries failed and timed out messages in-place, up to the configured number of times (`retries`).
  - A pause between retries is enforced (`pause-between-retries`) to avoid tight retry loops.
  - If `retries` is set to `0`, the executor retries the message indefinitely.

##### Timeout Control

Each batch of messages (or “pack”) has a **processing timeout** (`pack-processing-timeout`) to prevent long-running tasks from blocking the entire consumer thread.
This ensures system responsiveness even under high load or slow external targets.

This approach provides a flexible balance between performance and delivery guarantees, giving admins control over retry behavior, failure tolerance, and system resilience.

#### Hot Reinitialization of Failed Integrations

In addition to message-level retries, TBMQ supports **automatic reinitialization** of failed integrations through a periodic background check.

```yaml
reinit:
  # Enable/disable integrations hot reinitialization. This process is done for integrations with state 'FAILED'
  enabled: "${INTEGRATIONS_REINIT_ENABLED:true}"
  # Checking interval in milliseconds for reinit integrations. Defaults to 5 minutes
  frequency: "${INTEGRATIONS_REINIT_FREQUENCY_MS:300000}"
```

- If an integration enters the `FAILED` state (e.g., broken connections, or configuration issues), the executor will periodically **attempt to reinitialize it**.
- This process checks all failed integrations every `frequency` milliseconds.
- If the issue is resolved (e.g., the remote system becomes reachable), the integration is restored automatically without requiring manual intervention.

This feature ensures long-running integrations remain self-healing and robust in dynamic environments.

#### Integration Metrics Overview

The **Integration Executor** (`tbmq-ie`) collects and reports detailed metrics that give visibility into the health, performance, and behavior of all configured integrations.  
These metrics are logged periodically and can be exported to external monitoring systems like **Prometheus** or **Grafana** for alerting, dashboards, and historical analysis.

Below is a breakdown of the main metric categories recorded in the logs:

**1. Current Integration Activity**

This section logs **per-integration-type counters** for the current reporting interval.

Example:
```
IntegrationStatisticsKey(integrationStatisticsMetricName=START, success=true, integrationType=HTTP) = [0]
```

**Explanation:**
- `START`: Number of times an integration startup was attempted.
- `success=true | false`: Whether the attempt succeeded or failed.
- `integrationType`: The type of integration (e.g., HTTP, MQTT, Kafka).

Additional metric types you may see:
- `integrationStatisticsMetricName=STOP`: Number of times integration shutdown was triggered.
- `integrationStatisticsMetricName=MSGS_UPLINK`: Number of messages forwarded from the executor to external systems.

Example:
```
MSGS_UPLINK, success=true, integrationType=MQTT = [38]
```
-> 38 messages were successfully forwarded to an external MQTT broker.

**2. Integration State Summary**

This section tracks the **current state** of all integrations managed by the executor.

Example:
```
START, success=true, integrationType=MQTT = [1]
```
-> There is currently **one active MQTT integration** in the `STARTED` state.

**Key points:**
- `success=true`: Number of integrations in `STARTED` state.
- `success=false`: Number of integrations in `FAILED` state.

These values are updated whenever an integration changes state. They help admins understand the **real-time health** of all running integrations across types.

**3. Integration Uplink Queue Stats**

These metrics summarize the state of the **uplink Kafka topic**, which is used by the executor to send stats and lifecycle events back to TBMQ.

Example:
```
queueSize = [0]
totalMsgs = [1]
successfulMsgs = [1]
failedMsgs = [0]
```

**Metric descriptions:**
- `queueSize`: Number of messages currently waiting in the uplink Kafka queue.
- `totalMsgs`: Total number of messages sent to the uplink topic.
- `successfulMsgs`: Messages published successfully.
- `failedMsgs`: Messages that failed to publish.

These values help monitor the **reliability and health of internal communication** between executor and core services.

**4. Integration Message Processing Stats**

These are **per-integration-instance metrics** that reflect how messages are being processed and delivered to external systems.

Example:
```
[integrationProcessor][f6e82897-dd18-4c6f-ac31-5f19ce75e2db]
totalMsgs = [38]
successfulMsgs = [38]
tmpTimeout = [0]
tmpFailed = [0]
timeoutMsgs = [0]
failedMsgs = [0]
successfulIterations = [38]
failedIterations = [0]
```

**Metric descriptions:**
- `[integrationProcessor][<UUID>]`: The metric group for a specific integration instance.
- `totalMsgs`: Total messages received for processing.
- `successfulMsgs`: Messages successfully delivered.
- `tmpTimeout`: Messages that exceeded the processing timeout but will be retried.
- `tmpFailed`: Messages that failed but will be retried.
- `timeoutMsgs`: Messages that exceeded the processing timeout and will not be retried.
- `failedMsgs`: Messages that failed permanently after retry attempts.
- `successfulIterations`: Number of successful message batch executions (all messages in the batch processed without error).
- `failedIterations`: Number of message batch executions that resulted in one or more processing failures.

These metrics are essential for monitoring **message-level reliability**, troubleshooting integration issues, and ensuring timely delivery to external targets.

### Scalability and Fault Tolerance

- **Executor Scaling**: You can run multiple instances of the `tbmq-ie` service in parallel. Kafka handles partitioning and distributes integration messages across executors automatically, enabling horizontal scaling.
- **Fault Isolation**: Issues in external systems (e.g., a slow or unreachable HTTP endpoint) affect only the Integration Executor. The TBMQ broker continues operating normally without delay or message loss.
- **Backpressure Management**: Kafka acts as a message buffer. If executors become slow or temporarily overloaded, Kafka retains messages based on its configured retention policies until the executors are ready to process them.
- **Resilience**: Executor instances can restart or fail independently. Integrations are restored automatically using compacted configuration topics, without manual intervention.

This architecture supports modern cloud-native deployment models and ensures that TBMQ remains robust and responsive, even under heavy load or partial system failures.

### Supported Integration Types

TBMQ currently supports three outbound integration types, each designed for specific use cases:

- [**HTTP Integration**](/docs/mqtt-broker/integrations/http/) – Send MQTT messages to REST APIs or Webhooks via HTTP(S).
- [**MQTT Integration**](/docs/mqtt-broker/integrations/mqtt/) – Forward messages to external MQTT brokers for cross-broker communication.
- [**Kafka Integration**](/docs/mqtt-broker/integrations/kafka/) – Stream messages into Kafka topics for real-time processing.
