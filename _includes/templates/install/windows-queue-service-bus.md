{% include templates/install/queue-service-bus-config.md %}

##### ThingsBoard Configuration

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "queue:" block. Make sure the queue type is "service-bus", and don't forget to replace "YOUR_NAMESPACE_NAME" with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials. Note: "YOUR_SAS_KEY_NAME" it is "SAS Policy", "YOUR_SAS_KEY" it is "SAS Policy Primary Key":**

```yml
queue:
  type: "${TB_QUEUE_TYPE:service-bus}"
...
  service_bus:
    namespace_name: "${TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME:YOUR_NAMESPACE_NAME}"
    sas_key_name: "${TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME:YOUR_SAS_KEY_NAME}"
    sas_key: "${TB_QUEUE_SERVICE_BUS_SAS_KEY:YOUR_SAS_KEY}"
    max_messages: "${TB_QUEUE_SERVICE_BUS_MAX_MESSAGES:1000}"
```

**These params affect the number of requests per second from each partitions per each queue.**

Number of requests to particular Message Queue calculated based on the formula:

((Number of Rule Engine and Core Queues) * (Number of partitions per Queue) + 
(Number of transport queues) + (Number of microservices) + (Number of JS executors)) * 1000 / POLL_INTERVAL_MS

For example, number of requests based on default parameters is:

Rule Engine queues:

Main **10** partitions + HighPriority **10** partitions + SequentialByOriginator **10** partitions = **30**

Core queue **10** partitions

Transport request Queue + response Queue = **2**

Rule Engine Transport notifications Queue + Core Transport notifications Queue = **2**

Total = **44**

Number of requests per second = **44 * 1000 / 25 = 1760** requests

Based on the use case, you can compromise latency and decrease number of partitions/requests to the queue, if the message load is low.

By UI set the parameters - interval (1000) and partitions (1) for Rule Engine queues.

Sample parameters to fit into **10** requests per second on a "monolith" deployment:

```yml
queue:
...
  transport_api:
    request_poll_interval: "${TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS:1000}"
    response_poll_interval: "${TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS:1000}"
...
  core:
    poll-interval: "${TB_QUEUE_CORE_POLL_INTERVAL_MS:1000}"
    partitions: "${TB_QUEUE_CORE_PARTITIONS:2}"
...
  vc:
    partitions: "${TB_QUEUE_VC_PARTITIONS:1}"
    poll-interval: "${TB_QUEUE_VC_INTERVAL_MS:1000}"
...
  js:
    response_poll_interval: "${REMOTE_JS_RESPONSE_POLL_INTERVAL_MS:1000}"
...
  rule-engine:
    poll-interval: "${TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS:1000}"
...
  transport:
    poll_interval: "${TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS:1000}"
```

You can update default Rule Engine queues configuration using UI. More about ThingsBoard Rule Engine queues see in [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/).
