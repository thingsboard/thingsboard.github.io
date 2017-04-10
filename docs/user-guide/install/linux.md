---
layout: docwithnav
assignees:
- ashvayka
title: Installing Thingsboard on Linux
description: Installing Thingsboard on Linux

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install Thingsboard on a Linux based server machine.
Instructions below are provided for Ubuntu 16.04 and CentOS 7. 
This instructions can be easily adopted to other similar operation systems. 

#### Hardware requirements

To run Thingsboard and third-party components on a single machine you will need at least 1Gb of RAM.

#### Third-party components installation

##### Java

Thingsboard service is running on Java 8. 
Although you are able to start the service using [OpenJDK](http://openjdk.java.net/), 
solution is actively tested on [Oracle JDK](http://www.oracle.com/technetwork/java/javase/overview/index.html).

Follow this instructions to install Oracle JDK 8:

 - [Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04#installing-the-oracle-jdk)
 - [CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora#install-oracle-java-8)

Please don't forget to configure your operation system to use Oracle JDK 8 by default. 
Corresponding instructions are in the same articles listed above.


##### Cassandra

Thingsboard service requires Cassandra database.
Instructions listed below will help you to install Cassandra.

{% capture tabspec %}cassandra-installation
A,Ubuntu,shell,resources/cassandra-ubuntu-installation.sh,/docs/user-guide/install/resources/cassandra-ubuntu-installation.sh
B,CentOS,shell,resources/cassandra-centos-installation.sh,/docs/user-guide/install/resources/cassandra-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Thingsboard service installation

Download installation package or [build it from source](/docs/user-guide/install/building-from-source).

{% capture tabspec %}thingsboard-download
A,Ubuntu,shell,resources/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/thingsboard-ubuntu-download.sh
B,CentOS,shell,resources/thingsboard-centos-download.sh,/docs/user-guide/install/resources/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

Install thingsboard as a service

{% capture tabspec %}thingsboard-installation
A,Ubuntu,shell,resources/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/thingsboard-ubuntu-installation.sh
B,CentOS,shell,resources/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

##### Provision database schema and initial data

Once Cassandra and Thingsboard services are installed, you can execute following scripts:

```bash
cqlsh -f /usr/share/thingsboard/data/schema.cql
cqlsh -f /usr/share/thingsboard/data/system-data.cql
cqlsh -f /usr/share/thingsboard/data/demo-data.cql
```

##### Memory update for slow machines (1GB of RAM)

In case you are running Cassandra and Thingsboard on a single instance that has only 1 GB of RAM memory you need to update memory usage for these services to avoid being killed by OS kernel once services start consuming a lot of memory

For Cassandra service:

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

For Thingsboard service:

```bash
# Update Thingsboard memory usage and restrict it to 150MB in /etc/thingsboard/conf/thingsboard.conf
export JAVA_OPTS="$JAVA_OPTS -Xms150M -Xmx150M"
```


If you are running on a single instance that has 2GB this still can be insufficient for Cassandra under heavy load

In this case if services started to failing please update memory usage accordingly, but with less restrict parameters (for example '300M' instead of '150M')

##### Start Thingsboard service

Execute following command to start Thingsboard:

```bash
sudo service thingsboard start
```
 
Once started, you will be able to open Web UI using following link:

```bash
http://localhost:8080/
```

**NOTE**: Please allow up to 90 seconds for the Web UI to start

##### Troubleshooting

Thingsboard logs are stored in the following directory:
 
```bash
/var/log/thingsboard
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```
