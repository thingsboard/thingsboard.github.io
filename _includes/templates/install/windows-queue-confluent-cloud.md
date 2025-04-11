{% include templates/install/queue-confluent-cloud-config.md %}

##### ThingsBoard Configuration

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "queue:" block. Make sure the queue type is "kafka", replication factor is "3" and use confluent cloud is "true".

**Don't forget** to replace "CLUSTER_API_KEY", "CLUSTER_API_SECRET" and "localhost:9092" with your real Confluent Cloud bootstrap servers:

```yml
queue:
  type: "${TB_QUEUE_TYPE:kafka}"
...
  kafka:
    bootstrap.servers: "${TB_KAFKA_SERVERS:localhost:9092}"
...
    replication_factor: "${TB_QUEUE_KAFKA_REPLICATION_FACTOR:3}"
...
    use_confluent_cloud: "${TB_QUEUE_KAFKA_USE_CONFLUENT_CLOUD:true}"
...
      sasl.config: "${TB_QUEUE_KAFKA_CONFLUENT_SASL_JAAS_CONFIG:org.apache.kafka.common.security.plain.PlainLoginModule required username=\"CLUSTER_API_KEY\" password=\"CLUSTER_API_SECRET\";}"
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
