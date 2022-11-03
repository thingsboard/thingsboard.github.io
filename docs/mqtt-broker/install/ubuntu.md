---
layout: docwithnav-mqtt-broker
title: Installing ThingsBoard MQTT Broker on Ubuntu
description: Installing ThingsBoard MQTT Broker on Ubuntu

---

* TOC
  {:toc}

### Prerequisites

This guide describes how to install ThingsBoard MQTT Broker on Ubuntu Server 18.04 LTS.

**Hardware requirements** depend on amount of analyzed data and amount of devices connected to the system.
To run ThingsBoard MQTT Broker on a single machine you will need at least 1Gb of free RAM.

In small and medium installations ThingsBoard MQTT Broker can be installed **on the same** server with ThingsBoard.

### Step 1. Install Java 11 (OpenJDK)

{% include templates/install/ubuntu-java-install.md %}

### Step 2. ThingsBoard MQTT Broker service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/thingsboard-mqtt-broker-1.0.0.deb
```
{: .copy-code}

Install ThingsBoard MQTT Broker as a service

```bash
sudo dpkg -i thingsboard-mqtt-broker-1.0.0.deb
```
{: .copy-code}

### Step 3. Configure ThingsBoard MQTT Broker Database

ThingsBoard MQTT Broker uses PostgreSQL as a database.

#### PostgreSQL Installation

{% include templates/install/postgres-install-ubuntu.md %}

#### Create Database for ThingsBoard MQTT Broker

Then, press "Ctrl+D" to return to main user console and connect to the database to create <b>thingsboard_mqtt_broker</b> DB:

```text
psql -U postgres -d postgres -h 127.0.0.1 -W
CREATE DATABASE thingsboard_mqtt_broker;
\q
```

#### Configure database connection for ThingsBoard MQTT Broker

Edit ThingsBoard MQTT Broker configuration file

```bash 
sudo nano /etc/thingsboard-mqtt-broker/conf/thingsboard-mqtt-broker.conf
``` 
{: .copy-code}

Add the following lines to the configuration file. Don't forget **to replace** "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your **real postgres user password**:

```bash
# DB Configuration 
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard_mqtt_broker
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
```
{: .copy-code}

### Step 4. Install Kafka

ThingsBoard MQTT Broker uses Kafka as the internal queue for storing and transferring messages inside of the system.
In order to install Kafka on your system please follow these instructions:

{% capture contenttogglespeckafka %}
Kafka %,%kafka%,%templates/install/ubuntu-install-kafka.md%br%
Kafka in docker container %,%kafka-in-docker%,%templates/install/queue-kafka-in-docker.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuMqttBrokerQueue" toggle-spec=contenttogglespeckafka %}

##### Configure Kafka connection for ThingsBoard MQTT Broker

Edit ThingsBoard MQTT Broker configuration file

```text
sudo nano /etc/thingsboard-mqtt-broker/conf/thingsboard-mqtt-broker.conf
```
{: .copy-code}

Add the following line to the configuration file. **Don't forget** to replace "localhost:9092" with your real Kafka bootstrap servers:

```bash
export TB_KAFKA_SERVERS=localhost:9092
```
{: .copy-code}


### Step 5. Run installation script

Once ThingsBoard MQTT Broker service is installed, you can execute the following script:

```bash
sudo /usr/share/thingsboard-mqtt-broker/bin/install/install.sh
``` 

### Step 6. Start ThingsBoard MQTT Broker service

Execute the following command to start ThingsBoard MQTT Broker:

```bash
sudo service thingsboard-mqtt-broker start
```
{: .copy-code}

{% include templates/mqtt-broker/authentication.md %}

### Troubleshooting

ThingsBoard MQTT Broker logs are stored in the following directory:

```bash
/var/log/thingsboard-mqtt-broker
```

You can issue the following command in order to check if there are any errors on the backend side:

```bash
cat /var/log/thingsboard-mqtt-broker/thingsboard-mqtt-broker.log | grep ERROR
```
