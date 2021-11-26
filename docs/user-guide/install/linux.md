---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard on Linux
description: Installing ThingsBoard on Linux
redirect_to: "/docs/user-guide/install/ubuntu"

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install ThingsBoard on a Linux based server machine.
Instructions below are provided for Ubuntu 16.04 and CentOS 7. 
These instructions can be easily adapted to other similar operating	 systems. 

### Hardware requirements

To run ThingsBoard and third-party components on a single machine you will need at least 1Gb of RAM.

### Third-party components installation

#### Java

ThingsBoard service is running on Java 11. 
The solution is actively tested on both [OpenJDK](http://openjdk.java.net/) and [Oracle JDK](http://www.oracle.com/technetwork/java/javase/overview/index.html).

Follow this instructions to install OpenJDK 11:

{% capture tabspec %}java-installation
A,Ubuntu,shell,resources/java-ubuntu-installation.sh,/docs/user-guide/install/resources/java-ubuntu-installation.sh
B,CentOS,shell,resources/java-centos-installation.sh,/docs/user-guide/install/resources/java-centos-installation.sh{% endcapture %}  
{% include tabs.html %}   

Please don't forget to configure your operating system to use OpenJDK 11 by default. 
See corresponding instructions:

 - [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04#managing-java)
 - [CentOS](https://computingforgeeks.com/how-to-install-java-11-openjdk-11-on-rhel-8/#h-selecting-java-versions-with-alternatives)


#### External database installation

{% include templates/install/install-db.md %}

###### SQL Database: PostgreSQL

{% include templates/install/optional-db.md %}

Instructions listed below will help you to install PostgreSQL.

{% capture tabspec %}postgresql-installation
A,Ubuntu,shell,resources/postgresql-ubuntu-installation.sh,/docs/user-guide/install/resources/postgresql-ubuntu-installation.sh
B,CentOS,shell,resources/postgresql-centos-installation.sh,/docs/user-guide/install/resources/postgresql-centos-installation.sh{% endcapture %}  
{% include tabs.html %}   


{% include templates/install/postgres-post-install.md %}

{% include templates/install/create-tb-db.md %}

###### NoSQL Database: Cassandra

{% include templates/install/optional-db.md %}

Instructions listed below will help you to install Cassandra.

{% capture tabspec %}cassandra-installation
A,Ubuntu,shell,resources/cassandra-ubuntu-installation.sh,/docs/user-guide/install/resources/cassandra-ubuntu-installation.sh
B,CentOS,shell,resources/cassandra-centos-installation.sh,/docs/user-guide/install/resources/cassandra-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

### ThingsBoard service installation

Download installation package or [build it from source](/docs/user-guide/install/building-from-source).

{% capture tabspec %}thingsboard-download
A,Ubuntu,shell,resources/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/thingsboard-ubuntu-download.sh
B,CentOS,shell,resources/thingsboard-centos-download.sh,/docs/user-guide/install/resources/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

Install ThingsBoard as a service

{% capture tabspec %}thingsboard-installation
A,Ubuntu,shell,resources/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/thingsboard-ubuntu-installation.sh
B,CentOS,shell,resources/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

### Configure ThingsBoard to use the external database
  
Edit ThingsBoard configuration file 

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.yml
```

{% include templates/disable-hsqldb.md %} 

For **PostgreSQL**:

{% include templates/enable-postgresql.md %} 

For **Cassandra DB**:

Locate and set database type configuration parameters to 'cassandra'.
 
```text
database:
  ts:
    type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

{% include templates/memory-update-for-slow-machines.md %} 

For ThingsBoard service:

```bash
# Update ThingsBoard memory usage and restrict it to 256MB in /etc/thingsboard/conf/thingsboard.conf
export JAVA_OPTS="$JAVA_OPTS -Xms256M -Xmx256M"
```

{% include templates/run-install.md %} 

{% include templates/start-service.md %}

**NOTE**: Please allow up to 90 seconds for the Web UI to start

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
