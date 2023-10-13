---
layout: docwithnav
assignees:
- zbeacon
title: How to connect OPC-UA server
description: Understand how to connect OPC-UA server

---

* TOC
{:toc}

## Device information

For the purpose of this guide, we will use Raspberry Pi with OPC-UA server.  
We will use [OPC-UA connector](/docs/iot-gateway/config/opc-ua/) to collect data.  

The info available at this moment:  


| Parameter             | Our value                         | **Description**                                                           |
|-|-|-|
| Url to server         | **192.168.1.113:4840/server/**    | OPC-UA server addres.                                                     |
| Device node path      | **Device\d\*$**                   | Regular expression for path to device object on server.                   |
| Device name path      | **${server.deviceName}**          | Relative path from the device object to variable contains device name.    | 
|-|-|

We want to write **Humidity** ( relative path is **${humidity_value}** ) as the telemetry to ThingsBoard and **batteryLevel** ( relative path is **${Battery.Level}** ) as the device client-side attribute.      



## Step 1. Configuring the OPC-UA connector

In order to configure the connector, we must create OPC-UA setup file and put configuration there.
You may use default opcua.json file (from /etc/thingsboard-gateway/config in case of daemon installation or from folder with tb_gateway.json file in case you use python package).  
Simply replace some parameters with our values.
For example: 

```json
{
  "server": {
    "name": "OPC-UA Default Server",
    "url": "192.168.1.113:4840/server/",
    "scanPeriodInMillis": 10000,
    "timeoutInMillis": 5000,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    },
    "mapping": [
      {
        "deviceNodePattern": "Device\\d*$",
        "deviceNamePattern": "${server.deviceName}",
        "attributes": [
          {
            "key": "batteryLevel",
            "path": "${Battery.Level}"
          }
        ],
        "timeseries": [
          {
            "key": "Humidity",
            "path": "${humidity_value}"
          }
        ]
      }
    ]
  }
}
```
{: .copy-code}

  
About sections of OPC-UA configuration file you can [read more here](/docs/iot-gateway/config/opc-ua/).  

Let's analyze our settings:

1. General configuration of connector. In this section we have defined main settings (e. g. connector name — OPC-UA Default Server, url — 192.168.1.113:4840/server/ etc.). You can read more about available parameters [here](/docs/iot-gateway/config/opc-ua/#section-server).  
2. General device configuration. In this section we have defined main settings of our OPC-UA device (e. g. device object in OPC-UA server pattern - Device\\d*$, device name pattern within ThingsBoard — Device\\d*$ etc.). You can read more about available parameters [here](/docs/iot-gateway/config/opc-ua/#section-mapping).  
3. Attributes configuration. In this section we have defined the settings for batteryLevel attribute within ThingsBoard. You can read more about available parameters [here](/docs/iot-gateway/config/opc-ua/#subsection-attributes).  
4. Timeseries configuration. In this section we set up temperature and humidity parameters. You can read more about available parameters [here](/docs/iot-gateway/config/opc-ua/#subsection-timeseries).  

Save the configuration file as opcua.json in configuration folder (the directory, that contains the general configuration file - **tb_gateway.yaml**).  

## Step 3. Turn on the connector 

To use the connector, we must turn it on in the main configuration file (**[tb_gateway.yaml](/docs/iot-gateway/configuration/#connectors-configuration)**)

In "connectors" section we should uncomment following strings:

```yaml
  -
    name: OPC-UA Connector
    type: opcua
    configuration: opcua.json
```

## Step 4. Run the gateway
  
Command for run depends on type of installation.  
If you have installed the gateway as daemon, run the following command:  
```bash
sudo systemctl restart thingsboard-gateway
```  
{: .copy-code}

If you have installed the gateway as a python module (using [pip package manager](/docs/iot-gateway/install/pip-installation/) or [from sources](/docs/iot-gateway/install/source-installation/)), use following command or script to run the gateway.  
**Notice**: You must place correct path to the main configuration file (**tb_gateway.yaml**) in the command/script.  

```bash
sudo python3 -c 'from thingsboard_gateway.gateway.tb_gateway_service import TBGatewayService; TBGatewayService("YOUR_PATH_HERE")'
```

or script:

```python
from thingsboard_gateway.gateway.tb_gateway_service import TBGatewayService 

config_file_path = "YOUR_PATH_HERE"

TBGatewayService(config_file_path)
```

## Step 5. Check information from device

Check data in your ThingsBoard instance.  
    - Go to the your ThingsBoard instance and login.  
    - Go to the "Devices" tab. "Humidity Sensor" will be there.
<br>    
Go to the device details, **ATTRIBUTES** tab, there you may see the attribute **batteryLevel** with some value.  
<br>
    ![](/images/gateway/opcua-sensor-attributes.png)
<br><br>
Go to the device details, **LATEST TELEMETRY** tab, to see your telemetries data: **Humidity** with some value.  
<br>
![](/images/gateway/opcua-sensor-telemetry.png)
