---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard PE on Ubuntu
description: Installing ThingsBoard on Ubuntu

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard on Ubuntu Server 18.04 LTS. 
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 1Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

### Step 1. Install Java 8 (OpenJDK) 

ThingsBoard service is running on Java 8. Follow this instructions to install OpenJDK 8:

```bash
sudo apt update
sudo apt install openjdk-8-jdk
```

Please don't forget to configure your operating system to use OpenJDK 8 by default. 
You can configure which version is the default using the following command:

```bash
sudo update-alternatives --config java
```

You can check the installation using the following command:

```bash
java -version
```

Expected command output is:

```text
openjdk version "1.8.0_xxx"
OpenJDK Runtime Environment (...)
OpenJDK 64-Bit Server VM (build ...)
```

### Step 2. ThingsBoard service installation

Download installation package.

```bash
wget https://d2yx87vr19hm2o.cloudfront.net/thingsboard.deb
```

Install ThingsBoard as a service

```bash
sudo dpkg -i thingsboard-2.3.1.deb
```

### Step 3. Obtain and configure license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](/TODO) or [How-to get perpatual license](TODO) for more details.

Once you get the license secret, you should put it to the thingsboard configuration file. 
Open the file for editing using the following command:

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 

Locate the following configuration block:

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
# export TB_LICENSE_SECRET=
```

and put your license secret. Please don't forget to uncomment the export statement. See example below: 

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
export TB_LICENSE_SECRET=YOUR_LICENSE_SECRET_HERE
``` 

### Step 4. Configure ThingsBoard database 

{% include templates/install-db.md %}

{% capture postgresql-install-capture %}

ThingsBoard team recommends to use PostgreSQL for development and production environments with reasonable load (< 5000 msg/sec).
Many cloud vendors support managed PostgreSQL servers which is a cost-effective solution for most of ThingsBoard instances.

#### PostgreSQL Installation (recommended)

Instructions listed below will help you to install PostgreSQL.

```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

{% include templates/postgres-post-install.md %}

{% include templates/create-tb-db.md %}

{% endcapture %}

{% capture hybrid-install-capture %}

ThingsBoard team recommends to use Hybrid database approach if you do plan to have 1M+ devices in production or high data ingestion rate (> 5000 msg/sec).
In this case, ThingsBoard will be storing timeseries data in Cassandra while continue to use PostgreSQL for main entities (devices/assets/dashboards/customers).  


#### [Optional] Cassandra Installation

**NOTE:** This is an **optional** step. It is required only for specific production cases with high performance and scalability requirements. 

{% include templates/cassandra-ubuntu-install.md %}

{% endcapture %}


{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%{{postgresql-install-capture}}%br%
Hybrid <br/>PostgreSQL+Cassandra<br/><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%{{hybrid-install-capture}}{% endcapture %}

{% include content-toggle.html toggle-spec=contenttogglespec %}
  
Edit ThingsBoard configuration file 

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 

To use **PostgreSQL** only (recommended):

Add the following lines to the configuration file. Don't forget to replace "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your real postgres user password:

```bash
# DB Configuration 
export DATABASE_ENTITIES_TYPE=sql
export DATABASE_TS_TYPE=sql
export SPRING_DRIVER_CLASS_NAME=org.postgresql.Driver
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
```

To use **PostgreSQL** and **Cassandra** in a **hybrid mode** (advanced usage):

Add the following lines to the configuration file. Don't forget to replace "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your real postgres user password:

```bash
# DB Configuration 
export DATABASE_ENTITIES_TYPE=sql
export DATABASE_TS_TYPE=cassandra
export SPRING_DRIVER_CLASS_NAME=org.postgresql.Driver
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
``` 

You can optionally add the following parameters to reconfigure your ThingsBoard instance to connect to external Cassandra nodes:

```bash
export CASSANDRA_CLUSTER_NAME=Thingsboard Cluster
export CASSANDRA_KEYSPACE_NAME=thingsboard
export CASSANDRA_URL=127.0.0.1:9042
export CASSANDRA_USE_CREDENTIALS=false
export CASSANDRA_USERNAME=
export CASSANDRA_PASSWORD=
```

To use **Cassandra DB** only (not recommended):

```bash
# DB Configuration 
export DATABASE_ENTITIES_TYPE=cassandra
export DATABASE_TS_TYPE=cassandra
```

### Step 6. [Optional] Memory update for slow machines (1GB of RAM) 

For ThingsBoard service:

```bash
# Update ThingsBoard memory usage and restrict it to 256MB in /etc/thingsboard/conf/thingsboard.conf
export JAVA_OPTS="$JAVA_OPTS -Xms256M -Xmx256M"
```

### Step 7. Run installation script
{% include templates/run-install.md %} 


### Step 8. Start ThingsBoard service

{% include templates/start-service.md %}

**NOTE**: Please allow up to 90 seconds for the Web UI to start. This is applicable for slow machines with 1-2 CPUs.

### Troubleshooting

ThingsBoard logs are stored in the following directory:
 
```bash
/var/log/thingsboard
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
