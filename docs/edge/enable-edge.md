---
layout: docwithnav-edge
title: Activate edge functionality on ThingsBoard PE/CE server
description: Activate edge functionality on ThingsBoard PE/CE server
---

* TOC
{:toc}

### Ubuntu/CentOS
#### Enable edges support 

Edges functionality disabled on ThingsBoard Professional/Community Edition server by default. 
To enable it please edit ThingsBoard configuration file:

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file:

```bash
export EDGES_ENABLED=true
```
{: .copy-code}

#### RPC port for edge communication

ThingsBoard **Edge** connects to ThingsBoard **Professional/Community Edition** server on 7070 port (by default).

You can overwrite this by setting **EDGES_RPC_PORT** variable in configuration file.
To change it please edit ThingsBoard configuration file:

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file:

```bash
export EDGES_RPC_PORT=**NEW_EDGES_RPC_PORT**
```
{: .copy-code}

{% include templates/edge/edge-service-port-warn.md %}

{% include templates/edge/ssl-grpc-note.md %}

#### Restart the service

```bash
$ sudo service thingsboard stop
$ sudo service thingsboard start
```

### Windows

#### Enable edges support 

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "# Edges parameters" block:

```yml
# Edges parameters
edges:
  enabled: "${EDGES_ENABLED:false}"
  rpc:
    port: "${EDGES_RPC_PORT:7070}"
    client_max_keep_alive_time_sec: "${EDGES_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC:300}"
    ssl:
      # Enable/disable SSL support
      enabled: "${EDGES_RPC_SSL_ENABLED:false}"
      cert: "${EDGES_RPC_SSL_CERT:certChainFile.pem}"
      private_key: "${EDGES_RPC_SSL_PRIVATE_KEY:privateKeyFile.pem}"
  storage:
    max_read_records_count: "${EDGES_RPC_STORAGE_MAX_READ_RECORDS_COUNT:50}"
    no_read_records_sleep: "${EDGES_RPC_NO_READ_RECORDS_SLEEP:1000}"
    sleep_between_batches: "${EDGES_RPC_SLEEP_BETWEEN_BATCHES:1000}"
  scheduler_pool_size: "${EDGES_SCHEDULER_POOL_SIZE:4}"
  edge_events_ttl: "${EDGES_EDGE_EVENTS_TTL:0}"
  state:
    persistToTelemetry: "${EDGES_PERSIST_STATE_TO_TELEMETRY:false}"
``` 
{: .copy-code}

locate "EDGES_ENABLED" parameter. Replace "false" with "true".

```yml
  enabled: "${EDGES_ENABLED:true}"
```

ThingsBoard **Edge** connects to ThingsBoard **Professional/Community Edition** server on 7070 port (by default).

You can overwrite this by updating **EDGES_RPC_PORT** variable in configuration file.
locate "EDGES_RPC_PORT" parameter. Replace "7070" with "**NEW_EDGES_RPC_PORT**".

```yml
  rpc:
    port: "${EDGES_RPC_PORT:NEW_EDGES_RPC_PORT}"
```

{% include templates/edge/edge-service-port-warn.md %}

{% include templates/edge/ssl-grpc-note.md %}

#### Restart the service

```text
net stop thingsboard
net start thingsboard
```
