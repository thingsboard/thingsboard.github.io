---
layout: docwithnav
title: Upgrade instructions for ThingsBoard PE/CE server
description: Upgrade instructions for ThingsBoard Professional/Community Edition server
---

* TOC
{:toc}

{% capture beta_note %}
**Important note before upgrading to ThingsBoard 3.3beta**
 - ThingsBoard Edge and ThingsBoard Professional/Community Edition **3.3beta** version that supports edge functionality is currently in **beta** phase, so please upgrade only in case you are interested in evaluating the Edge functionality
 - Please make sure you have backup of your database before upgrading - especially if this ThingsBoard Professional/Community Edition server instance has some critical data
 - Usage of the **beta** version in your production environment not recommended and could be used only on your own risk
{% endcapture %}
{% include templates/info-banner.md content=beta_note %}

### Ubuntu/CentOS {#ubuntucentos-33beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2. In order to upgrade to 3.3beta you need to [**upgrade to 3.2.2 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-322).

#### ThingsBoard package download & service upgrade

{% capture packagedownloadtogglespec %}
ThingsBoard Professional Edition%,%professional%,%templates/edge/upgrade-server/package-download-pe.md%br%
ThingsBoard Community Edition%,%community%,%templates/edge/upgrade-server/package-download-ce.md{% endcapture %}
{% include content-toggle.html content-toggle-id="edgeThingsBoardPackageDownload" toggle-spec=packagedownloadtogglespec %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  

Execute regular upgrade script:

```bash
# Execute regular upgrade script
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.2.0
```

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

**NOTE**: This port must be accessible by edge to be able to communicate. Please update your firewall settings or docker configuration if required.

{% include templates/edge/ssl-grpc-note.md %}

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows {#windows-33beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2. In order to upgrade to 3.3beta you need to [**upgrade to 3.2.2 first**](/docs/user-guide/install/upgrade-instructions/#windows-322).

#### ThingsBoard package download

// TODO: voba - fix this link

Download ThingsBoard installation archive for Windows: 
* **ThingsBoard Professional Edition** [thingsboard-windows-3.3beta.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3beta/thingsboard-windows-3.3beta.zip).
* **ThingsBoard Community Edition** [thingsboard-windows-3.3beta.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3beta/thingsboard-windows-3.3beta.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.2.0
```

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

**NOTE**: This port must be accessible by edge to be able to communicate. Please update your firewall settings or docker configuration if required.

{% include templates/edge/ssl-grpc-note.md %}

#### Start the service

```text
net start thingsboard
```
