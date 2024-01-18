{% include templates/install/queue-aws-sqs-config.md %}

Create docker compose file for ThingsBoard queue service:

```text
nano docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace "YOUR_KEY", "YOUR_SECRET" with your **real AWS SQS IAM user credentials** and "YOUR_REGION" with your **real AWS SQS account region**, and "PUT_YOUR_LICENSE_SECRET_HERE" with your **license secret obtained on the first step**:

```yml
version: '3.0'
services:
  mytbpe:
    restart: always
    image: "thingsboard/tb-pe:{{ site.release.pe_full_ver }}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "7070:7070"
      - "5683-5688:5683-5688/udp"
    environment:
      TB_QUEUE_TYPE: aws-sqs
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/thingsboard
      TB_QUEUE_AWS_SQS_ACCESS_KEY_ID: YOUR_KEY
      TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY: YOUR_SECRET
      TB_QUEUE_AWS_SQS_REGION: YOUR_REGION
      TB_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data

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
    volumes:
      - ~/.mytbpe-data:/data
      - ~/.mytbpe-logs:/var/log/thingsboard
  postgres:
    restart: always
    image: "postgres:15"
    ports:
    - "5432"
    environment:
      POSTGRES_DB: thingsboard
      POSTGRES_PASSWORD: postgres
    volumes:
      - ~/.mytbpe-data/db:/var/lib/postgresql/data
```
{: .copy-code}

You can update default Rule Engine queues configuration using UI. More about ThingsBoard Rule Engine queues see in [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/).
