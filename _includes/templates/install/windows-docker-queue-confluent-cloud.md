{% include templates/install/queue-confluent-cloud-config.md %}

Create docker compose file for ThingsBoard queue service:

```text
notepad docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace “CLUSTER_API_KEY”, "CLUSTER_API_SECRET" and "localhost:9092" with your real Confluent Cloud bootstrap servers:

```yml
services:
  postgres:
    restart: always
    image: "postgres:16"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: thingsboard
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data
  thingsboard-ce:
    restart: always
    image: "thingsboard/tb-node:4.0.1.1"
    ports:
      - "8080:8080"
      - "7070:7070"
      - "1883:1883"
      - "8883:8883"
      - "5683-5688:5683-5688/udp"
    logging:
      driver: "json-file"
      options:
        max-size: "100m"
        max-file: "10"
    environment:
      TB_SERVICE_ID: tb-ce-node
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/thingsboard
      TB_QUEUE_TYPE: kafka
      TB_KAFKA_SERVERS: localhost:9092
      TB_QUEUE_KAFKA_REPLICATION_FACTOR: 3
      TB_QUEUE_KAFKA_USE_CONFLUENT_CLOUD: true
      TB_QUEUE_KAFKA_CONFLUENT_SASL_JAAS_CONFIG: 'org.apache.kafka.common.security.plain.PlainLoginModule required username="CLUSTER_API_KEY" password="CLUSTER_API_SECRET";'
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
      # 
      # Based on the use case, you can compromise latency and decrease number of partitions/requests to the queue, if the message load is low.
      # By UI set the parameters - interval (1000) and partitions (1) for Rule Engine queues.
      # Sample parameters to fit into 10 requests per second on a "monolith" deployment: 
      TB_QUEUE_CORE_POLL_INTERVAL_MS: 1000
      TB_QUEUE_CORE_PARTITIONS: 2
      TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS: 1000
      TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS: 1000
      TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS: 1000
      TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS: 1000
      TB_QUEUE_VC_INTERVAL_MS: 1000
      TB_QUEUE_VC_PARTITIONS: 1      
    depends_on:
      - postgres

volumes:
  postgres-data:
    name: tb-postgres-data
    driver: local
```
{: .copy-code.expandable-15}

You can update default Rule Engine queues configuration using UI. More about ThingsBoard Rule Engine queues see in [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/).
