---
layout: docwithnav-mqtt-broker
title: Installing ThingsBoard MQTT Broker using Docker (Linux or Mac OS)
description: Installing ThingsBoard MQTT Broker using Docker (Linux or Mac OS)

---

* TOC
{:toc}

This guide will help you to install and start standalone ThingsBoard MQTT Broker using Docker on Linux or Mac OS.
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/mqtt-broker/install/cluster/docker-compose-setup/).

## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)

- [Install Docker Compose](https://docs.docker.com/compose/install/)

{% include templates/install/docker-install-note.md %}

## Configuration

Create docker-compose file for ThingsBoard MQTT Broker:

```bash
nano docker-compose.yml
```
{: .copy-code}

Add the following lines to the yml file.

```yml
version: '3.0'
services:
  postgres:
    restart: always
    image: "postgres:12.8"
    ports:
    - "5432"
    environment:
      POSTGRES_DB: thingsboard_mqtt_broker
      POSTGRES_PASSWORD: postgres
    volumes:
    - ~/.tb-mqtt-broker-data/postgres:/var/lib/postgresql/data
  zookeeper:
    restart: always
    image: "zookeeper:3.8"
    ports:
      - "2181"
    environment:
      ZOO_MY_ID: 1
      ZOO_SERVERS: server.1=zookeeper:2888:3888;zookeeper:2181
  kafka:
    restart: always
    image: "wurstmeister/kafka:2.13-2.8.1"
    depends_on:
      - zookeeper
    ports:
      - "9092"
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_LISTENERS: INSIDE://:9093,OUTSIDE://:9092
      KAFKA_ADVERTISED_LISTENERS: INSIDE://:9093,OUTSIDE://kafka:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: INSIDE:PLAINTEXT,OUTSIDE:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: INSIDE
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: 'false'
      KAFKA_LOG_RETENTION_BYTES: 1073741824
      KAFKA_LOG_SEGMENT_BYTES: 268435456
      KAFKA_LOG_RETENTION_MS: 300000
      KAFKA_LOG_CLEANUP_POLICY: delete
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
  tb-mqtt-broker:
    restart: always
    image: "thingsboard/tb-mqtt-broker:1.0.0-SNAPSHOT"
    depends_on:
      - postgres
      - kafka
    ports:
      - "8083:8083"
      - "1883:1883"
    environment:
      SPRING_JPA_DATABASE_PLATFORM: org.hibernate.dialect.PostgreSQLDialect
      SPRING_DRIVER_CLASS_NAME: org.postgresql.Driver
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/thingsboard_mqtt_broker
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      TB_KAFKA_SERVERS: kafka:9092
      SECURITY_MQTT_BASIC_ENABLED: 'false'
    volumes:
      - ~/.tb-mqtt-broker-data/conf:/config
      - ~/.tb-mqtt-broker-data/log:/var/log/thingsboard-mqtt-broker
```
{: .copy-code}

Where:

- `8083:8083`               - connect local port 8083 to exposed internal HTTP port 8083
- `1883:1883`               - connect local port 1883 to exposed internal MQTT port 1883
- `~/.tb-mqtt-broker-data/postgres:/data`   - mounts the host's dir `~/.tb-mqtt-broker-data/postgres` to ThingsBoard MQTT Broker DataBase data directory
- `~/.tb-mqtt-broker-data/conf:/config`   - mounts the host's dir `~/.tb-mqtt-broker-data/conf` to ThingsBoard MQTT Broker config directory
- `~/.tb-mqtt-broker-data/log:/var/log/thingsboard`   - mounts the host's dir `~/.tb-mqtt-broker-data/log` to ThingsBoard MQTT Broker logs directory
- `tb-mqtt-broker`          - friendly local name of this machine
- `restart: always`         - automatically start ThingsBoard MQTT Broker in case of system reboot and restart in case of failure.
- `SECURITY_MQTT_ENABLED: false`         - by default security is disabled. **Note**: make sure to configure security in production environment


Before starting Docker container run following commands to create a directory for storing data and logs and then change its owner to docker container user.
To be able to change user, **chown** command is used, which requires sudo permissions (command will request password for a sudo access):

```
mkdir -p ~/.tb-mqtt-broker-data/log && mkdir -p ~/.tb-mqtt-broker-data/conf && mkdir -p ~/.tb-mqtt-broker-data/postgres && sudo chown -R 799:799 ~/.tb-mqtt-broker-data
```
{: .copy-code}

**NOTE**: Replace directory `~/.tb-mqtt-broker-data` with directory you're planning to use in `docker-compose.yml`.

## Installation

Set the terminal to the directory which contains the `docker-compose.yml` file and execute the following command to install ThingsBoard MQTT Broker:

```
docker compose pull
docker compose up -d postgres
docker compose run --no-deps --rm -e INSTALL_TB=true tb-mqtt-broker
```
{: .copy-code}

## Running

To run the broker execute the following command:

```
docker compose up -d
```
{: .copy-code}


After executing this command you can open `http://{your-host-ip}:8083` in your browser (e.g. [http://localhost:8083](http://localhost:8083)).

{% include templates/mqtt-broker/login.md %}

## Stop and start commands

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard MQTT Broker logs execute the following command:

```
docker compose logs -f tb-mqtt-broker
```
{: .copy-code}

To stop the containers:

```
docker compose stop
```
{: .copy-code}

To start the containers:

```
docker compose start
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}