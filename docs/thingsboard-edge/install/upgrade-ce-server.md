---
layout: docwithnav
title: Upgrade instructions for ThingsBoard CE server (beta)
description: Upgrade instructions for ThingsBoard CE server (beta)
---

* TOC
{:toc}

### Ubuntu/CentOS {#ubuntucentos-260beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5. In order to upgrade to 2.6.0beta you need to [**upgrade to 2.5.5 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-255).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-6-0-beta
thingsboard-download-2-6-0-beta-ubuntu,Ubuntu,shell,resources/2.6.0beta/thingsboard-ubuntu-download.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-ubuntu-download.sh
thingsboard-download-2-6-0-beta-centos,CentOS,shell,resources/2.6.0beta/thingsboard-centos-download.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-6-0-beta
thingsboard-installation-2-6-0-beta-ubuntu,Ubuntu,shell,resources/2.6.0beta/thingsboard-ubuntu-installation.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-6-0-beta-centos,CentOS,shell,resources/2.6.0beta/thingsboard-centos-installation.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-centos-installation.sh{% endcapture %} 
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  

#### Enable edges support 

Edges functionality disabled on cloud by default. 
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

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows {#windows-260beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5. In order to upgrade to 2.6.0beta you need to [**upgrade to 2.5.5 first**](/docs/user-guide/install/upgrade-instructions/#windows-255).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.6.0beta.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.6.0beta/thingsboard-windows-2.6.0beta.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

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
  rpc:
    enabled: "${EDGES_ENABLED:false}"
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
  edge_events_ttl: "${EDGES_EDGE_EVENTS_TTL:0}"
  state:
    persistToTelemetry: "${EDGES_PERSIST_STATE_TO_TELEMETRY:false}"
``` 
{: .copy-code}

locate "EDGES_ENABLED" parameter. Replace "false" with "true".

```yml
    enabled: "${EDGES_ENABLED:true}"
```

#### Start the service

```text
net start thingsboard
```