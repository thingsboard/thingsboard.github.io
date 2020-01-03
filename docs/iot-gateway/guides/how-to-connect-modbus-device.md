---
layout: docwithnav
assignees:
- zbeacon
title: How to connect Modbus device to ThingsBoard using the gateway
description: Understand how to connect Modbus device to ThingsBoard using the gateway 

---

* TOC
{:toc}

## Device information

For the purpose of this guide, we will use Raspberry Pi with Modbus server to emulate Modnus device.
We will use [Modbus connector](/docs/iot-gateway/config/modbus/) to connect to the device and collect data.  

At this moment the only info about the device are:  


| Parameter     | Our value            |
|-|-|
| Device name   | **TH_sensor**        |
| IP Address    | **192.168.1.113**    |
| Port          | **5020**             |
| Unit id       | **1**                |
| Poll period   | **5 seconds**        | 
|-|-|

We want to read **temperature** (register address is **0**), **humidity** (register address is **1**) as telemetry in the ThingsBoard and **batteryLevel** (register address is **2**) as a device attribute in the ThingsBoard.    



## Step 1. Configuring the Modbus connector

We need to create ble setup file and put configuration there.  
We have taken a default configuration file for Modbus and replace some parameters with our values.  
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

In this guide we will use configuration above.

Let's analyze our settings:

1. General configuration for the connector. In this section we have defined general connector settings, such as connector name ("**Modbus Default Server**"), port (**5020**) etc. You can read more about available parameters [here](/docs/iot-gateway/config/modbus/#section-server).  
2. General device configuration. In this section we have defined general device settings, such as device name in ThingsBoard ("**TH_sensor**"), unit id ("**1**") etc. You can read more about available parameters [here](/docs/iot-gateway/config/modbus/#subsection-devices).
3. Timeseries configuration. In this section we have defined a configuration for temperature and humidity parameters. You can read more about available parameters [here](/docs/iot-gateway/config/modbus/#subsection-timeseries).  
4. Attributes configuration. In this section we have defined a configuration for **batteryLevel** parameter. You can read more about available parameters [here](/docs/iot-gateway/config/modbus/#subsection-attributes).    

We have saved the configuration file as **modbus.json** in the config folder (the directory, that contains the general configuration file - **tb_gateway.yaml**).  

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

Check data in your ThingsBoard instance, that you have been configured in the [general configuration guide](/docs/iot-gateway/configuration/).  
    - Go to the your ThingsBoard instance and login.  
    - Go to the "Devices" tab. "TH_sensor" will be there.
    <br>    
    ![](/images/gateway/gateway-modbus-device-added.png)
<br><br>
Go to the device details, **ATTRIBUTES** tab, it contains an attribute **batteryLevel**.  
<br>
![](/images/gateway/modbus-device-client-attribute.png)
<br><br>
Go to the device details, **LATEST TELEMETRY** tab, it contains telemetries: **temperature** and **humidity**.  
<br>
![](/images/gateway/modbus-device-telemetry.png)

