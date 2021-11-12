{% include templates/install/queue-service-bus-config.md %}

Configure ThingsBoard environment file:

```text
nano .env
```
{: .copy-code}

Check following line:

```bash
TB_QUEUE_TYPE=service-bus
```
{: .copy-code}

Configure Service Bus environment file for ThingsBoard queue service:

```text
nano queue-service-bus.env
```
{: .copy-code}

Don't forget to replace “YOUR_NAMESPACE_NAME” with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials. Note: "YOUR_SAS_KEY_NAME" it is "SAS Policy", "YOUR_SAS_KEY" it is "SAS Policy Primary Key":**

```bash
TB_QUEUE_TYPE=service-bus
TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME=YOUR_NAMESPACE_NAME
TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME=YOUR_SAS_KEY_NAME
TB_QUEUE_SERVICE_BUS_SAS_KEY=YOUR_SAS_KEY

# These params affect the number of requests per second from each partitions per each queue.
# Number of requests to particular Message Queue is calculated based on the formula:
# ((Number of Rule Engine and Core Queues) * (Number of partitions per Queue) + (Number of transport queues)
#  + (Number of microservices) + (Number of JS executors)) * 1000 / POLL_INTERVAL_MS
# For example, number of requests based on default parameters is:

# Rule Engine queues:
# Main 10 partitions + HighPriority 10 partitions + SequentialByOriginator 10 partitions = 30
# Core queue 10 partitions
# Transport request Queue + response Queue = 2
# Rule Engine Transport notifications Queue + Core Transport notifications Queue = 2
# Total = 44
# Number of requests per second = 44 * 1000 / 25 = 1760 requests

# Based on the use case, you can compromise latency and decrease number of partitions/requests to the queue, if the message load is low.
# Sample parameters to fit into 10 requests per second on a "monolith" deployment: 

TB_QUEUE_CORE_POLL_INTERVAL_MS=1000
TB_QUEUE_CORE_PARTITIONS=2
TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_MAIN_PARTITIONS=2
TB_QUEUE_RE_HP_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_HP_PARTITIONS=1
TB_QUEUE_RE_SQ_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_SQ_PARTITIONS=1
TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS=1000
TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS=1000
TB_QUEU_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS=1000
```
