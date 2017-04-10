---
layout: docwithnav
assignees:
- ashvayka
title: Installing Thingsboard on Raspberry Pi 3 Model B
description: Installing Thingsboard IoT Platform on Raspberry Pi 3 Model B

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install Thingsboard on a Raspberry Pi 3 running Raspbian Jessie.

#### Third-party components installation

##### Java

Thingsboard service is running on Java 8. Oracle Java 8 is already pre-installed on Raspbian. 
You can check java version using following command

```bash
$ java -version
java version "1.8.0_65"
Java(TM) SE Runtime Environment (build 1.8.0_65-b17)
Java HotSpot(TM) Client VM (build 25.65-b01, mixed mode)
```

Any Java version higher then or equal to 1.8 is fine. 

##### Cassandra

Thingsboard service requires Cassandra database.
Instructions listed below will help you to install Cassandra.

Download and install cassandra using following commands

```bash
$ wget http://dl.bintray.com/apache/cassandra/pool/main/c/cassandra/cassandra_3.9_all.deb
$ sudo dpkg -i cassandra_3.9_all.deb
```

By default, Cassandra will consume almost all RAM on the board and will be quite slow. 
In order to fix this run following commands:

```bash
# Stop cassandra service
$ sudo service cassandra stop

# Find and set memory options in /etc/cassandra/cassandra-env.sh
MAX_HEAP_SIZE="150M"
HEAP_NEWSIZE="50M"

# Find and set timeout options in /etc/cassandra/cassandra.yaml
read_request_timeout_in_ms: 20000
range_request_timeout_in_ms: 20000
write_request_timeout_in_ms: 20000
counter_write_request_timeout_in_ms: 50000
cas_contention_timeout_in_ms: 10000
truncate_request_timeout_in_ms: 120000
request_timeout_in_ms: 60000

# Start cassandra service
$ sudo service cassandra start
```

#### Thingsboard service installation

Download installation package or [build it from source](/docs/user-guide/install/building-from-source).

```bash
# Download the package
$ wget https://github.com/thingsboard/thingsboard/releases/download/v1.2.2/thingsboard-1.2.2.deb
# Install Thingsboard as a service
$ sudo dpkg -i thingsboard-1.2.2.deb
# Update Thingsboard memory usage and restrict it to 150MB in /etc/thingsboard/conf/thingsboard.conf
export JAVA_OPTS="$JAVA_OPTS -Dplatform=rpi -Xms150M -Xmx150M"
```

##### Provision database schema and initial data

Once Cassandra and Thingsboard services are installed, you can execute following scripts:

```bash
# Open cassandra shell and create thingsboard keyspace
# This may cause timeout due to it's a heavy operation. 
# In case of timeout just wait a minute or two.
$ cqlsh
cqlsh> CREATE KEYSPACE IF NOT EXISTS thingsboard WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 1};

# This may cause timeout. In case of timeout just repeat the command.
$ cqlsh -f /usr/share/thingsboard/data/schema.cql
$ cqlsh -f /usr/share/thingsboard/data/system-data.cql
$ cqlsh -f /usr/share/thingsboard/data/demo-data.cql
```

##### Start Thingsboard service

Execute following command to start Thingsboard:

```bash
# Start the service
$ sudo service thingsboard start
# Monitor startup status
$ tail -f /var/log/thingsboard/thingsboard.log | grep Started
2016-12-13 13:44:52,407 [main] INFO  o.t.s.ThingsboardServerApplication - Started ThingsboardServerApplication in 113.64 seconds (JVM running for 118.624)
```
 
Once started, you will be able to open Web UI using following link:

```bash
http://your_raspberry_pi_ip_address:8080/

```
**NOTE**: Please allow up to 2 minutes for the Web UI to start

##### Troubleshooting

Thingsboard logs are stored in the following directory:
 
```bash
/var/log/thingsboard
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```
