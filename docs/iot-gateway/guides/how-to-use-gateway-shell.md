---
layout: docwithnav-gw
title: How to use Gateway Shell
description: How to use Gateway Shell

---

* TOC
{:toc}


This guide explains how to use Gateway Shell and provide examples of how to use each command defined in Gateway Shell.
The Gateway Shell feature allows users to interact with a gateway through a command-line interface.
By using the provided commands and corresponding arguments, users can execute specific actions and retrieve information 
from the Gateway. Refer to the usage examples outlined in this guide to effectively utilize the Gateway Shell feature.

For the purpose of this tutorial, you need:  
1. Locally installed instance of ThingsBoard platform (In case you are new with ThingsBoard [use this 'how to install' documentation](/docs/user-guide/install/installation-options/)).
2. [Installed](/docs/iot-gateway/installation/) and [configured](/docs/iot-gateway/configuration/) ThingsBoard IoT Gateway.

### Storage Command
The `storage` command provides functionality related to storage operations.

#### Get Storage Name
To retrieve the storage name, use the following command:

```bash
tb-gateway-shell storage -n
```
{: .copy-code}

#### Get Storage Events Count
To obtain the count of storage events, use the following command:

```bash
tb-gateway-shell storage -c
```
{: .copy-code}

### Connector Command
The `connector` command enables actions related to connectors.

#### Get Available Connectors
To list the available connectors, use the following command:

```bash
tb-gateway-shell connector -l
```
{: .copy-code}

#### Get Connector Status
To retrieve the status of a specific connector, provide the connector name as follows:

```bash
tb-gateway-shell connector -s <name>
```
{: .copy-code}

#### Get Connector Config
To obtain the configuration of a specific connector, provide the connector name as follows:

```bash
tb-gateway-shell connector -c <name>
```
{: .copy-code}

### Gateway Command
The `gateway` command allows operations related to the gateway itself.

#### Get Gateway Status
To retrieve the status of the gateway, use the following command:

```bash
tb-gateway-shell gateway -s
```
{: .copy-code}

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
