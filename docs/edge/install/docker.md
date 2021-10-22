---
layout: docwithnav-edge
title: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
description: Installing ThingsBoard Edge using Docker (Linux or Mac OS)

---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Edge using Docker on Linux or Mac OS.

{% include templates/edge/install/prerequisites.md %}

{% include templates/edge/install/hardware-requirements.md %}

- [Install Docker CE](https://docs.docker.com/engine/install/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}

### Step 1. Pull ThingsBoard Edge Images

{% include templates/edge/install/pull-images.md %}

### Step 2. Running ThingsBoard Edge

{% include templates/edge/install/docker-images-location.md %}

Create docker compose file for ThingsBoard Edge service:
```
sudo nano docker-compose.yml
```
{: .copy-code}

Add the following lines to the yml file:

```
version: '2.2'

services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge-monolith:3.3.0EDGE"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683-5688:5683-5688/udp"
    environment:
      EDGE_LICENSE_INSTANCE_DATA_FILE: /data/edge-license.data
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_RPC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.250, demo.thingsboard.io or thingsboard.cloud
    volumes:
      - ~/.mytb-edge-data:/data
      - ~/.mytb-edge-logs:/var/log/tb-edge
      
```

{% include templates/edge/install/docker_compose_details_explain.md %}

Before starting Docker container run following commands to create a directory for storing data and logs and then change its owner to docker container user, to be able to change user, chown command is used, which requires sudo permissions (command will request password for a sudo access):
```
$ mkdir -p ~/.mytb-edge-data && sudo chown -R 799:799 ~/.mytb-edge-data
$ mkdir -p ~/.mytb-edge-logs && sudo chown -R 799:799 ~/.mytb-edge-logs
```
{: .copy-code}

**NOTE**: Replace directory **~/.mytb-edge-data** and **~/.mytb-edge-logs** with directories you’re planning to use in **docker-compose.yml**.

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to up this docker compose directly:

```
docker-compose pull
docker-compose up
```
{: .copy-code}

### Step 3. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %}

### Step 4. Detaching, stop and start commands

{% include templates/edge/install/docker-control.md %}

### Troubleshootings

**NOTE** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

**NOTE** If you see errors related to edge is not able to connect to database, for example

```bash
Caused by: org.postgresql.util.PSQLException: Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
mytbedge_1_f5648ad89a6e | 	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:262)
mytbedge_1_f5648ad89a6e | 	at org.postgresql.core.ConnectionFactory.openConnection(ConnectionFactory.java:52)
mytbedge_1_f5648ad89a6e | 	at org.postgresql.jdbc.PgConnection.<init>(PgConnection.java:216)
mytbedge_1_f5648ad89a6e | 	at org.postgresql.Driver.makeConnection(Driver.java:404)
mytbedge_1_f5648ad89a6e | 	at org.postgresql.Driver.connect(Driver.java:272)
mytbedge_1_f5648ad89a6e | 	at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138)
mytbedge_1_f5648ad89a6e | 	at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:358)
mytbedge_1_f5648ad89a6e | 	at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:206)
mytbedge_1_f5648ad89a6e | 	at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:477)
mytbedge_1_f5648ad89a6e | 	at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:560)
mytbedge_1_f5648ad89a6e | 	at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:115)
mytbedge_1_f5648ad89a6e | 	at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112)
mytbedge_1_f5648ad89a6e | 	at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122)
mytbedge_1_f5648ad89a6e | 	at org.hibernate.internal.NonContextualJdbcConnectionAccess.obtainConnection(NonContextualJdbcConnectionAccess.java:38)
mytbedge_1_f5648ad89a6e | 	at org.hibernate.resource.jdbc.internal.LogicalConnectionManagedImpl.acquireConnectionIfNeeded(LogicalConnectionManagedImpl.java:108)
mytbedge_1_f5648ad89a6e | 	... 117 common frames omitted
mytbedge_1_f5648ad89a6e | Caused by: java.net.ConnectException: Connection refused (Connection refused)
mytbedge_1_f5648ad89a6e | 	at java.net.PlainSocketImpl.socketConnect(Native Method)
mytbedge_1_f5648ad89a6e | 	at java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)
mytbedge_1_f5648ad89a6e | 	at java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)
mytbedge_1_f5648ad89a6e | 	at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)
mytbedge_1_f5648ad89a6e | 	at java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)
mytbedge_1_f5648ad89a6e | 	at java.net.Socket.connect(Socket.java:607)
mytbedge_1_f5648ad89a6e | 	at org.postgresql.core.PGStream.<init>(PGStream.java:61)
mytbedge_1_f5648ad89a6e | 	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:144)
mytbedge_1_f5648ad89a6e | 	... 131 common frames omitted
mytbedge_1_f5648ad89a6e | pg_ctl: could not send stop signal (PID: 10): No such process
```

Stop and remove container:

```
docker-compose stop
docker-compose rm
```
{: .copy-code}

Remove **postmaster.pid** file:

```bash
sudo rm -rf ~/.mytb-edge-data/db/postmaster.pid
```
{: .copy-code}

Start container:

```
docker-compose up
```
{: .copy-code}

## Next Steps

{% include templates/edge/install/next-steps.md %}



