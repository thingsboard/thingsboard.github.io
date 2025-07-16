
[Apache Kafka](https://kafka.apache.org/) is an open-source stream-processing software platform.

Create docker compose file for ThingsBoard queue service:

```text
notepad docker-compose.yml
```
{: .copy-code}

Add the following lines to the yml file.

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
  kafka:
    restart: always
    image: bitnami/kafka:4.0
    ports:
      - 9092:9092 #to localhost:9092 from host machine
      - 9093 #for Kraft
    environment:
      ALLOW_PLAINTEXT_LISTENER: "yes"
      KAFKA_CFG_LISTENERS: "PLAINTEXT://:9092,CONTROLLER://:9093"
      KAFKA_CFG_ADVERTISED_LISTENERS: "PLAINTEXT://:9092"
      KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP: "CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT"
      KAFKA_CFG_INTER_BROKER_LISTENER_NAME: "PLAINTEXT"
      KAFKA_CFG_AUTO_CREATE_TOPICS_ENABLE: "false"
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: "1"
      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: "1"
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: "1"
      KAFKA_CFG_PROCESS_ROLES: "controller,broker" #KRaft
      KAFKA_CFG_NODE_ID: "0" #KRaft
      KAFKA_CFG_CONTROLLER_LISTENER_NAMES: "CONTROLLER" #KRaft
      KAFKA_CFG_CONTROLLER_QUORUM_VOTERS: "0@kafka:9093" #KRaft
      KAFKA_CFG_LOG_RETENTION_MS: "300000"
      KAFKA_CFG_SEGMENT_BYTES: "26214400"
    volumes:
      - kafka-data:/bitnami
  thingsboard-ce:
    restart: always
    image: "thingsboard/tb-node:{{ site.release.ce_full_ver }}"
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
      TB_KAFKA_SERVERS: kafka:9092
    depends_on:
      - postgres
      - kafka

volumes:
  postgres-data:
    name: tb-postgres-data
    driver: local
  kafka-data:
    name: tb-ce-kafka-data
    driver: local

```
{: .copy-code.expandable-15}
