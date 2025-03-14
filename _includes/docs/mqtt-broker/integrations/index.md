
* TOC
{:toc}

{% assign sinceVersion = "2.1.0" %}
{% include templates/mqtt-broker/since.md %}

### Overview

**Integrations** in TBMQ are the data bridges that allow you to forward MQTT messages from connected clients to external systems such as HTTP endpoints, Kafka brokers, or other MQTT brokers. 
This enables seamless data flow between IoT devices and the broader data infrastructure — whether it's cloud services, analytics pipelines, or third-party applications.

#### How It Works

TBMQ uses a dedicated microservice called `TBMQ Integration Executor` (shortened as "TBMQ IE") to manage and run integrations.

With this feature, TBMQ supports two service types defined by the `TB_SERVICE_TYPE` environment variable:

* **tbmq** – the core MQTT broker service;
* **tbmq-integration-executor** – the integration execution service (tbmq-ie).

This separation allows each service to scale independently and keeps the broker fast and lightweight.

The executor service listens for integration events and messages from TBMQ (via Kafka), processes them based on the integration configuration, 
and then forwards the data to the correct external system.

#### Why Use Integrations?

Integrations make MQTT data useful outside the broker. They help you:

- Bridge MQTT messages to external systems for processing, storage, or real-time actions.
- Build complex event-driven workflows across different platforms.
- Offload processing logic from the broker to dedicated, scalable integration services.
- Maintain modularity and scalability in your IoT architecture.

#### High-Level Design

At a high level, the integration flow in TBMQ works like this:

1. **MQTT clients** connect to the **TBMQ broker** using **MQTT** or **MQTTS** and publish messages.
2. When a message matches an integration [rule](#integrations-configuration), **TBMQ** sends the message to the **Integration Executor (tbmq-ie)** using **Kafka**.
3. The **Integration Executor** receives the message, processes it, and forwards it to the correct external system, such as:
  - An **HTTP endpoint** over **HTTP or HTTPS**.
  - Another **MQTT broker** over **MQTT or MQTTS**.
  - A **Kafka broker** using the **Kafka binary protocol over TCP or TLS**.

> This architecture ensures clear separation of concerns, high availability, and improves scalability and system performance.

[Insert diagram here to illustrate the data flow and service interaction]

#### Deployment Options

In TBMQ, integrations are deployed using a separate microservice **TBMQ Integration Executor** (`tbmq-ie`).  
This service is responsible for executing all outbound integrations and must be deployed alongside the core TBMQ service.

> Why Not Embedded in the Broker?

We **intentionally do not embed integration logic** inside the TBMQ broker. This decision provides several key benefits:

- **Isolation**: Failures or slow responses from external systems (e.g., HTTP endpoints) do not affect MQTT message processing in the broker.
- **Scalability**: `tbmq-ie` instances can be scaled independently based on load, without impacting the performance of the broker.
- **Resilience**: Each executor can restart or fail independently without interrupting the core MQTT services.
- **Extensibility**: New integration types or improvements can be added to the executor without changing the broker itself.
- **Clear separation of responsibilities**: The broker handles MQTT protocol logic, while the executor focuses on data delivery to external systems.

### Architecture

In this section, you'll learn how TBMQ and the Integration Executor communicate internally, how data flows between components, and how the system remains scalable and fault-tolerant under load.

TBMQ’s integration system is based on a **modular, event-driven architecture**. 
It clearly separates MQTT message handling from integration execution by introducing a dedicated microservice and using Kafka as an internal communication layer.

#### Integration Entity

Each integration includes basic fields like:

- **Type** – HTTP, Kafka, or MQTT.
- **Name** – a human-readable name.
- **Enabled** – whether the integration is enabled or disabled.
- **Status** – actual status of the integration.
- **Configuration** – contains connection details and parameters for the external system.
- **Topic filters** – define MQTT-based subscriptions and act as triggers. When a broker receives a message matching a topic filter, the integration is triggered and forwards it to the configured external system.

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

The integration entity is **stored in the TBMQ's PostgreSQL database**.

#### TBMQ (MQTT Broker) Component

The core TBMQ service (`TB_SERVICE_TYPE=tbmq`) is responsible for:

- Handling MQTT protocol logic.
- Managing integration entities - handles create/update/delete integration requests to persist in DB.
- Delivering integration validation requests (configuration validation/check connection) to TBMQ IE.
- Delivering integration configuration events to TBMQ IE.
- Matching incoming messages to active integration subscriptions and delivering them to TBMQ IE.

The broker can be scaled independently to meet traffic demand.

When a message matches an integration topic filter, TBMQ does **not** process it directly. Instead, it publishes an **integration event** to an internal Kafka topic.

#### TBMQ Integration Executor Component

The Integration Executor (`TB_SERVICE_TYPE=tbmq-integration-executor`) is a standalone microservice responsible for:

- Processing integration validation requests and sending responses to TBMQ.
- Managing integration lifecycle based on received integration events from TBMQ.
- Executing the integration processing logic (retry mechanism + backpressure).
- Forwarding the message to the configured external system (HTTP, Kafka, or MQTT).
- Delivering integration events (Lifecycle, Error, Statistics) to TBMQ.

This service can be scaled independently and ensures that slow or failing external systems do not affect the broker nodes.

#### Kafka (Internal Communication Layer)

Kafka acts as the **bridge** between the brokers and executors. It is used to:

- Deliver integration events reliably between services.
- Buffer messages in case of any component delays, overload or downtime.
- Support parallel processing by allowing multiple broker and executor instances.

This asynchronous communication model ensures **non-blocking message flow**.

#### Diagram of data communication and detailed description

[Insert diagram here to illustrate the data flow and service interaction]


#### Kafka Topics and Parallel Processing

TBMQ and its Integration Executor microservices communicate asynchronously over Kafka using multiple dedicated topics.
Each topic serves a specific purpose and allows for decoupled, reliable, and scalable data flow between the components.

This separation also allows each part of the system (broker, integration type, response handling) to scale independently and process messages concurrently.

TBMQ and its Integration Executors use **dedicated Kafka topics** to exchange different types of data, including:

* **tbmq.ie.downlink.$type** — where $type is http, mqtt, kafka. Topic is used to send integration configurations and validation requests from TBMQ to TBMQ IE.
* **tbmq.ie.uplink** — to send events from TBMQ IE to TBMQ.
* **tbmq.ie.uplink.notifications.$serviceId** — to validation responses to correct TBMQ service by $serviceId.
* **tbmq.msg.ie.$integrationId** — Integration Message Processing Topic per each integration where $integrationId is auto-generated UUID of integration entity.

#### Downlink topics


### Configuration Storage Using Compact Topics

TBMQ uses **Kafka compact topics** for integration configuration delivery (`tbmq.ie.downlink.*`). This design ensures that the **latest configuration for each integration is always retained**, regardless of when the Integration Executor (TBMQ IE) starts or restarts.

### 🔁 How It Works

- Each integration lifecycle event (create, update, delete) is published to the corresponding **downlink compact topic** based on integration type (e.g., `tbmq.ie.downlink.http`).
- Kafka’s **log compaction** guarantees that only the **most recent event per integration ID** remains in the topic over time.
- On startup or partition reassignment, each `tbmq-ie` instance:
  1. **Seeks to the beginning** of the assigned topic partition.
  2. **Restores the latest state** of all relevant integrations from the compacted records.
  3. Once restoration is complete and the **end of the partition is reached**, it transitions to **real-time mode** and begins normal operation.
- Integrations are only launched after their **latest configurations have been fully restored** from Kafka.

---

### ✅ Benefits of This Approach

- **Resilience**: Ensures TBMQ IE can fully recover after restarts without requiring external config stores.
- **Consistency**: Always works with the latest valid config — no stale or conflicting states.
- **Scalability**: Stateless service design; all config state is persisted in Kafka.
- **Reduced Load**: Only changed configurations are written; no need to resend the full config set repeatedly.

---

This pattern provides a **durable, distributed configuration source** backed by Kafka, enabling reliable and scalable integration execution across multiple TBMQ IE instances.



Downlink topics are used to **send configuration and validation requests** from TBMQ to Integration Executors. Each integration type has its own dedicated topic:

- `tbmq.ie.downlink.http`
- `tbmq.ie.downlink.kafka`
- `tbmq.ie.downlink.mqtt`

##### Purpose

- Deliver integration configuration data when an integration is created, updated or deleted.
- Trigger **connection and validation requests** to test the connectivity or configuration before activation.

##### Why Separate Topics?

Although downlink topics are not used for message processing, separating them by integration type provides several key benefits:

- **Cleaner Routing**: Executors can subscribe only to the topics related to the integration types they support.
- **Service-Level Control**: Using the `TB_SERVICE_INTEGRATIONS_SUPPORTED` and `TB_SERVICE_INTEGRATIONS_EXCLUDED` environment variables, you can control which integration types are processed by each executor instance. This works hand-in-hand with topic separation.
- **Improved Isolation**: Different integration types often have different configuration payloads and validation logic. Dedicated topics ensure that only relevant messages are received by each executor.
- **Operational Simplicity**: Easier to debug and monitor traffic per integration type.
- **Future Scalability**: Enables fine-grained tuning of Kafka topic settings (e.g., partitions, retention) per integration domain, if needed later.

This design empowers operators to deploy **specialized executor instances** — for example, running only HTTP integrations in one pool and Kafka in another — giving you flexibility, isolation, and efficiency at scale.

#### Uplink Topic

This topic is used by the Integration Executors to **send messages back to the TBMQ Core**, such as:

- Integration lifecycle events (e.g., executor started, integration activated)
- Error reports from failed deliveries
- Integration statistics (success/failure counts)

#### Purpose:
- Allow TBMQ to persist operational data and metrics in the database.
- Enable observability and system-wide monitoring.


#### — Uplink Node-Specific Notifications

This topic prefix is used to **send direct replies from executors to specific TBMQ nodes**, typically in response to validation requests or one-time commands.

#### Example usage:

- Replying to a "Check Connection" request for an HTTP integration.
- Sending validation error details back to the correct broker node.

#### Purpose:

- Ensure responses go to the correct TBMQ instance in clustered setups.
- Maintain request-response correlation.





> All integration configurations are automatically sent to the Integration Executor (`tbmq-ie`) via Kafka compact topics. These topics ensure that the latest integration settings are always available, even after a restart.


#### Integration Lifecycle

The lifecycle of an integration in TBMQ includes its creation, update, deletion, execution, monitoring, and error handling.
Integrations can be created/updated/deleted either from the TBMQ Web UI or using the REST API.

[Insert diagrams here to illustrate lifecycle in 3 cases - OK, Failure, Timeout]

Once the request from UI or REST API is received by TBMQ, it generates the validation request and sends it to the Integration Executor.
The IE receives the request and do the validation of configuration based on the type of integration.
Note, similarly the `Check connection` feauture is working to send the request to test the connection to external system.
You can also test an integration connection via the UI or API using the **"Validate"** function, which checks if the external system is reachable.

Let's review 3 examples.

**Scenario 1. Integration Executor running**

When it is running - the expected result is Success.

**Scenario 2. Integration Executor running validation failed**

When it is running but the configuration is wrong - the expected result is Failure.

**Scenario 3. Integration Executor running validation failed**

When it is not running the integration will be be saved after the period of timeout and you will see Timeout exception.


In case the validation is success, the integration entity is saved in the DB and the configuration event is sent to IE.



[Insert diagram here to illustrate the data flow and service interaction]

### `tbmq.msg.ie` — Integration Message Processing Topic




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

#### Power & Design Choice:
- Messages from all integrations are published to this topic.
- Executors consume messages **in separate threads**, with processing logic specific to each integration instance.
- This design ensures:
  - High throughput and parallelism
  - Isolation between integration executions
  - Better resource utilization and fault tolerance

Thanks! Here’s a clear and well-structured version of that explanation, rewritten for documentation in a user-friendly, B1/B2 style. It explains the behavior, provides reassurance, and introduces the configuration parameters clearly.

### Integration Message Storage and Cleanup

Each integration in TBMQ has a **dedicated Kafka topic** for storing messages that match its topic filters. This design allows integrations to process messages reliably, even if the integration is temporarily disabled.

#### What Happens When an Integration is Disabled?

- While an integration is **disabled**, messages that match its topic filters are **still received and stored** in its dedicated Kafka topic.
- Once the integration is **enabled again**, the executor starts delivering those messages to the external system.

#### What If the Integration Stays Disabled for a Long Time?

To prevent unused topics from taking up storage indefinitely, TBMQ includes a **cleanup mechanism**:

- If an integration remains **disconnected or disabled for a long period**, its message topic will be **automatically deleted**, along with the stored data.
- Don’t worry — when you **re-enable the integration**, the system will **automatically recreate the topic** and resume normal operation.

---

#### Cleanup Configuration Parameters

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






#### Integration Metrics Overview

The Integration Executor collects and reports detailed metrics that provide visibility into the health, throughput, and behavior of each integration type. 
These metrics are logged periodically and can be integrated with external monitoring tools (e.g., Prometheus/Grafana).

Here’s a breakdown of the key metric categories shown in the log:

**1. Current Integration Activity**

These are **per-integration-type counters** for the current reporting period:

```
IntegrationStatisticsKey(integrationStatisticsMetricName=START, success=true, integrationType=HTTP) = [0]
```

This entry means:
- `START`: Number of times integration startup was attempted.
- `success=true/false`: Indicates whether the startup attempt was successful or not.
- `integrationType`: The type of integration (e.g., HTTP, MQTT, Kafka).

You also see:
- `integrationStatisticsMetricName=STOP`: Number of times integration stop was attempted.
- `integrationStatisticsMetricName=MSGS_UPLINK`: Number of messages forwarded from IE to external systems (e.g., Kafka, HTTP, MQTT).

Example insight:
```
MSGS_UPLINK, success=true, integrationType=MQTT = [38]
```
-> 38 messages were successfully forwarded to the external MQTT target.

**2. Integration State Summary**

This section shows the **current number of integrations** in each lifecycle state (`STARTED` or `FAILED`), grouped by integration type.

These values are recalculated whenever an integration changes state and reflect the **latest status** of all active integrations managed by the executor.

For example:
```
START, success=true, integrationType=MQTT = [1]
```
-> There is currently **one MQTT integration** in the `STARTED` state.

The executor updates:
- `success=true`: Number of integrations currently in `STARTED` state;
- `success=false`: Number of integrations currently in `FAILED` state.

These gauges help monitor the current health of the integration pool, showing how many integrations are actively running or have failed.

**3. Integration Uplink Queue Stats**

These metrics summarize the **uplink Kafka topic** used to send stats from the executor back to TBMQ:

```
queueSize = [0]
totalMsgs = [1]
successfulMsgs = [1]
failedMsgs = [0]
```

- `queueSize`: Current backlog in the Kafka uplink queue.
- `totalMsgs`: Total number of messages attempted to publish to the uplink topic.
- `successfulMsgs` / `failedMsgs`: Publishing outcome.

**4. Integration Message Processing Stats**

These stats are reported per integration instance and reflect **message-level processing**:

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

- `[integrationProcessor][f6e82897-dd18-4c6f-ac31-5f19ce75e2db]`: type of metric and Integration UUID.
- `totalMsgs`: Messages received for processing.
- `successfulMsgs`: Successfully processed and delivered messages.
- `timeoutMsgs`: Messages that exceeded the configured processing timeout.
- `failedMsgs`: Permanently failed messages after retries.
- `successfulIterations`: Number of successful handler executions.
- `failedIterations`: Any logic-level failures in the integration flow.









#### Integration Metrics Overview

The **Integration Executor** (`tbmq-ie`) collects and reports detailed metrics that give visibility into the health, performance, and behavior of all configured integrations.  
These metrics are logged periodically and can be exported to external monitoring systems like **Prometheus** or **Grafana** for alerting, dashboards, and historical analysis.

Below is a breakdown of the main metric categories recorded in the logs:

---

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
- `STOP`: Number of times integration shutdown was triggered.
- `MSGS_UPLINK`: Number of messages forwarded from the executor to external systems.

Example:
```
MSGS_UPLINK, success=true, integrationType=MQTT = [38]
```
→ 38 messages were successfully forwarded to an external MQTT broker.

---

**2. Integration State Summary**

This section tracks the **current state** of all integrations managed by the executor.

Example:
```
START, success=true, integrationType=MQTT = [1]
```
→ There is currently **one active MQTT integration** in the `STARTED` state.

**Key points:**
- `success=true`: Number of integrations in `STARTED` state.
- `success=false`: Number of integrations in `FAILED` state.

These values are updated whenever an integration changes state. They help operators understand the **real-time health** of all running integrations across types.

---

**3. Integration Uplink Queue Stats**

These metrics summarize the state of the **uplink Kafka topic**, which is used by the executor to send stats and status updates back to TBMQ Core.

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

---

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
- `timeoutMsgs`: Messages that exceeded the processing timeout.
- `failedMsgs`: Messages that failed permanently after retry attempts.
- `successfulIterations`: Number of successful handler executions (typically matches `successfulMsgs`).
- `failedIterations`: Internal processing failures (e.g., exceptions during mapping or delivery).

These metrics are essential for monitoring **message-level reliability**, troubleshooting integration issues, and ensuring timely delivery to external targets.

























#### Error Handling & Retry Mechanism

When an integration message fails to be processed (e.g., due to a timeout, unreachable external system, or malformed response), the `tbmq-integration-executor` handles the error based on the configured **acknowledgment and retry strategy** for the `tbmq.msg.ie` topic.

These behaviors are controlled via the following configuration block:

```yaml
integration-msg:
  poll-interval: 1000  # Interval in ms to poll for new messages
  pack-processing-timeout: 30000  # Timeout for processing a batch of messages
  ack-strategy:
    type: SKIP_ALL | RETRY_ALL
    retries: 5  # 0 means unlimited
    pause-between-retries: 1  # in seconds
```

#### ⚙️ Strategy Options

- **SKIP_ALL** (default):
  - If a message fails during processing, it is skipped after logging the error.
  - This ensures high throughput and avoids retry delays but sacrifices guaranteed delivery to external systems.

- **RETRY_ALL**:
  - The executor retries failed messages in-place, up to the configured number of times (`retries`).
  - A pause between retries is enforced (`pause-between-retries`) to avoid tight retry loops.
  - If `retries` is set to `0`, the executor retries the message indefinitely.

#### ⏱️ Timeout Control

Each batch of messages (or “pack”) has a **processing timeout** (`pack-processing-timeout`) to prevent long-running tasks from blocking the entire consumer thread.
This ensures system responsiveness even under high load or slow external targets.

This approach provides a flexible balance between performance and delivery guarantees, giving operators control over retry behavior, failure tolerance, and system resilience.

#### Hot Reinitialization of Failed Integrations

In addition to message-level retries, TBMQ supports **automatic reinitialization** of failed integrations through a periodic background check.

```yaml
reinit:
  enabled: true
  frequency: 300000  # 5 minutes
```

##### How it works:
- If an integration enters the `FAILED` state (e.g., due to repeated delivery errors, broken connections, or configuration issues), the executor will periodically **attempt to reinitialize it**.
- This process checks all failed integrations every `frequency` milliseconds.
- If the issue is resolved (e.g., the remote system becomes reachable), the integration is restored automatically without requiring manual intervention.

This feature ensures long-running integrations remain self-healing and robust in dynamic environments.

#### Scalability and Fault Tolerance

- **Executor Scaling**: Multiple instances of `tbmq-ie` can run in parallel, each consuming from the Kafka topic. Kafka ensures proper partitioning and load distribution.
- **Fault Isolation**: Failures in external systems (e.g., a down HTTP endpoint) only impact the executor; the broker remains unaffected.
- **Backpressure Handling**: Kafka acts as a buffer — if executors fall behind, messages are retained and retried based on Kafka configuration.
- **Resilience**: Executor microservices can crash or restart independently. Kafka ensures at-least-once delivery for integration events.

This model supports cloud-native scaling patterns and allows TBMQ to operate reliably in high-throughput environments.

### Supported Integration Types

TBMQ currently supports three outbound integration types, each designed for specific use cases:

- [**HTTP Integration**](/docs/mqtt-broker/integrations/http/) – Send MQTT messages to REST APIs or Webhooks via HTTP(S).
- [**MQTT Integration**](/docs/mqtt-broker/integrations/mqtt/) – Forward messages to external MQTT brokers for cross-broker communication.
- [**Kafka Integration**](/docs/mqtt-broker/integrations/kafka/) – Stream messages into Kafka topics for real-time processing.
