[Apache Cassandra](https://cassandra.apache.org/_/index.html){: target="_blank"} is an open source NoSQL database designed to manage massive amounts of data.

[Apache Kafka](https://kafka.apache.org/){: target="_blank"} is an open source stream processing software platform.

Create the **docker compose file** and populate it with configuration lines:

```
cat > docker-compose.yml <<EOF && docker compose -f docker-compose.yml up -d
version: '3.8'
services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge:{{ site.release.edge_full_ver }}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683-5688:5683-5688/udp"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/tb-edge
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_RPC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.1 or demo.thingsboard.io
      TB_QUEUE_TYPE: "kafka"
      TB_KAFKA_SERVERS: "kafka:9092"
      DATABASE_TS_TYPE: "cassandra"
      CASSANDRA_URL: "cassandra:9042"
    volumes:
      - tb-edge-data:/data
      - tb-edge-logs:/var/log/tb-edge
  postgres:
    restart: always
    image: "postgres:15"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - tb-edge-postgres-data:/var/lib/postgresql/data
  kafka:
    restart: always
    image: bitnami/kafka:3.8.1
    ports:
      - 9092:9092 #to localhost:9092 from host machine
      - 9093 #for Kraft
      - 9094 #to kafka:9094 from within Docker network
    environment:
      ALLOW_PLAINTEXT_LISTENER: "yes"
      KAFKA_CFG_LISTENERS: "OUTSIDE://:9092,CONTROLLER://:9093,INSIDE://:9094"
      KAFKA_CFG_ADVERTISED_LISTENERS: "OUTSIDE://localhost:9092,INSIDE://kafka:9094"
      KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP: "INSIDE:PLAINTEXT,OUTSIDE:PLAINTEXT,CONTROLLER:PLAINTEXT"
      KAFKA_CFG_INTER_BROKER_LISTENER_NAME: "INSIDE"
      KAFKA_CFG_AUTO_CREATE_TOPICS_ENABLE: "false"
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: "1"
      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: "1"
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: "1"
      KAFKA_CFG_PROCESS_ROLES: "controller,broker" #KRaft
      KAFKA_CFG_NODE_ID: "0" #KRaft
      KAFKA_CFG_CONTROLLER_LISTENER_NAMES: "CONTROLLER" #KRaft
      KAFKA_CFG_CONTROLLER_QUORUM_VOTERS: "0@kafka:9093" #KRaft
    volumes:
      - kafka-data:/bitnami
  cassandra:
    restart: always
    image: "cassandra:4.0"
    container_name: cassandra
    environment:
      CASSANDRA_CLUSTER_NAME: "Thingsboard Edge Cluster"
      CASSANDRA_KEYSPACE_NAME: "tb_edge"
      CASSANDRA_LOCAL_DATACENTER: "datacenter1"
    ports:
      - 9042:9042
    volumes:
      - ./data/cassandra:/var/lib/cassandra
    networks:
      - cassandra-network
volumes:
  tb-edge-data:
    name: tb-edge-data
  tb-edge-logs:
    name: tb-edge-logs
  tb-edge-postgres-data:
    name: tb-edge-postgres-data
  kafka-data:
    driver: local
networks:
  cassandra-network:
    driver: bridge
EOF
```
{: .copy-code.expandable-15}

{% include templates/edge/install/docker_compose_details_explain.md %}

{% include templates/install/docker/docker-compose-up.md %}
