---
layout: docwithnav-gw
title: ThingsBoard IoT Gateway Features
description: ThingsBoard IoT Gateway features 

---


* TOC
{:toc}


This guide explains how to use RPC API on ThingsBoard IoT Gateway.  

For the purpose of this tutorial, you need:  
1. Locally installed instance of ThingsBoard platform (In case you are new with ThingsBoard [use this 'how to install' documentation](/docs/user-guide/install/installation-options/)).
2. [Installed](/docs/iot-gateway/installation/) and [configured](/docs/iot-gateway/configuration/) ThingsBoard IoT Gateway. 

## Gateway RPC methods 

To send RPC requests to the gateway the one should use **RPC Debug Terminal** from **Control widgets** bundle.  
ThingsBoard IoT gateway has several RPC methods, which called from WEB UI, available by default.  
The list of OOTB methods will be extended within upcoming releases.


### gateway_ping RPC method
  
**gateway_ping RPC method** is used to check connection to the gateway and RPC processing status.
Every command with prefix "**gateway_**" will be interpreted as a command to general gateway service and not as an RPC request to the connector or device.
Command:  

```bash
gateway_ping
```

{: .copy-code}

The response is:  

```json
{
  "code": 200,
  "resp": "pong"
}
```

![Gateway RPC ping method](/images/gateway/gateway-rpc-ping.png)

### gateway_devices RPC method

**gateway_devices RPC method** is used to list devices connected through the gateway with info about the type of connector used.
This method returns object in “resp” with **key-value** parameters, where:
key — is a device name
value — identifies the connector

Command:

```bash
gateway_devices
```

{: .copy-code}

Returns object like:

```json
{
  "code": 200,
  "resp": {
    "Device Number One": "OPC-UA Connector"
  }
}
```

![Gateway RPC devices method](/images/gateway/gateway-rpc-devices.png)


### gateway_restart RPC method

**gateway_restart RPC method** is used to schedule restart action, e.g. ```bash gateway_restart 60``` set up the restart of the gateway service in 60 seconds.
This method uses seconds as measuring unit.

**Note:** The response will be returned after adding the task to the gateway scheduler.

Command:  

```bash
gateway_restart 60
```

{: .copy-code}

The response is:  

```json
{"success": true}
```

![Gateway RPC restart method](/images/gateway/gateway-rpc-restart.png)

### gateway_reboot RPC method

**gateway_reboot RPC method** is used to schedule rebooting of the gateway device (hardware?), e. g. ```bash gateway_reboot 60``` set up the reboot of the gateway device in one minute.
**Take into account: this method available if you start the gateway service as a python module instead of daemon approach and the user that is running the gateway has reboot permissions.** 
Command:  

```bash
gateway_reboot 60
```

{: .copy-code}

The response is:  

```json
{"success": true}
```

**Notate:** The response will be returned after adding the task to the gateway scheduler.  

![Gateway RPC reboot method](/images/gateway/gateway-rpc-reboot.png)
