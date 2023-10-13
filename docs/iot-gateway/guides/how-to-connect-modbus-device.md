---
layout: docwithnav
assignees:
- zbeacon
title: How to connect Modbus device to ThingsBoard using the ThingsBoard IoT Gateway
description: Understand how to connect Modbus device to ThingsBoard using the ThingsBoard IoT Gateway 

---

* TOC
{:toc}

## Device information

For the purpose of this guide, we will use Raspberry Pi with Modbus server to emulate Modbus device.
We will use [Modbus connector](/docs/iot-gateway/config/modbus/) to collect data.  

The info available at this moment:  


| Parameter     | Our value            |
|-|-|
| Device name   | **TH_sensor**        |
| IP Address    | **192.168.1.113**    |
| Port          | **5020**             |
| Unit id       | **1**                |
| Poll period   | **5 seconds**        | 
|-|-|

We want to write **temperature** (register address is 0) and **humidity** (register address is 1) as the telemetry to ThingsBoard and **batteryLevel** (register address is 2) as the device client-side attribute.      



## Step 1. Configuring the Modbus connector

In order to configure the connector, we must create MODBUS setup file and put configuration there.
You may use default modbus.json file (from /etc/thingsboard-gateway/config in case of daemon installation or from folder with tb_gateway.json file in case you use python package).  
Simply replace some parameters with our values.
For example: 

```json
{
  "server": {
    "name": "Modbus Default Server",
    "type": "tcp",
    "host": "192.168.1.113",
    "port": 5020,
    "timeout": 35,
    "method": "socket",
    "devices": [
      {
        "unitId": 1,
        "deviceName": "TH_sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": false,
        "attributes": [
          {
            "byteOrder": "BIG",
            "tag": "batteryLevel",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 2
          }
        ],
        "timeseries": [
          {
            "byteOrder": "BIG",
            "tag": "humidity",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 1
          },
          {
            "byteOrder": "BIG",
            "tag": "temperature",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 0
          }
        ]
      }
    ]
  }
}
```
{: .copy-code}

  
About sections of Modbus configuration file you can [read more here](/docs/iot-gateway/config/modbus/).  

Let's analyze our settings:

1. General configuration of connector. In this section we have defined main settings (e. g. connector name — Modbus Default Server, port — 5020 etc.). You can read more about available parameters here.
2. General device configuration. In this section we have defined main settings of our Modbus device (e. g. device name within ThingsBoard — TH_sensor, unit id — 1 etc.). You can read more about available parameters here.
3. Timeseries configuration. In this section we set up temperature and humidity parameters. You can read more about available parameters here.
4. Attributes configuration. In this section we have defined the settings for batteryLevel attribute within ThingsBoard. You can read more about available parameters here.

Save the configuration file as modbus.json in configuration folder (the directory, that contains the general configuration file - **tb_gateway.yaml**).  

## Step 3. Turn on the connector 

To use the connector, we must turn it on in the main configuration file (**[tb_gateway.yaml](/docs/iot-gateway/configuration/#connectors-configuration)**)

In "connectors" section we should uncomment following strings:

```yaml
  -
    name: Modbus Connector
    type: modbus
    configuration: modbus.json
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
    - Go to the "Devices" tab. "TH_sensor" will be there.
    <br>    
    ![](/images/gateway/gateway-modbus-device-added.png)
<br><br>
Go to the device details, **ATTRIBUTES** tab, there you may see the attribute **batteryLevel** with some value.  
<br>
![](/images/gateway/modbus-device-client-attribute.png)
<br><br>
Go to the device details, **LATEST TELEMETRY** tab, to see your telemetries data: **temperature** and **humidity**.  
<br>
![](/images/gateway/modbus-device-telemetry.png)

