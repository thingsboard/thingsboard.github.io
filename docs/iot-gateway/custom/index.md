---
layout: docwithnav-gw
title: IoT Gateway customization

---


* TOC
{:toc}

This section of documentation may help you to customize your IoT Gateway to meet your specific requirements.
In the gateway we have "extensions" which are used to customize the gateway, add your own connectors or converters.  
In general extensions usage looks like this:
1. You need to create a file with your extension or extensions in the gateway extension folder. (Name of folder with your extension is a type of connector)
2. You need to add your extension to the configuration file of the gateway:  

    2.1. Custom connector: add your connector to the "connectors" section of the main configuration (tb_gateway.json). For example:  
    ```
    ...
    "connectors": [
        {
             "name": "Custom connector name",
             "type": "folder_name_with_your_connector",
             "class": "NameOfYourConnectorClass",
             "configuration": "configuration_file_name_for_your_connector_in_config_folder.json"
        }
    ]
    ```  
    {:.copy-code}
    
    2.2. Custom converter: It depends on realization of connector, but usually you need to add "converter" parameter to the configuration of the connector.  
         You can get more information in configuration article of the interesting connector.  
         Below you can see configuration example for MQTT and OPCUA connectors.  
    
    MQTT:
    
    ```
    ...
    "topicFilter": "custom/sensors/+",
    "converter": {
    "type": "custom",
    "extension": "CustomMqttUplinkConverter",
    "cached": true,
    "extension-config": {
        "temperatureBytes": 2,
        "humidityBytes": 2,
        "batteryLevelBytes": 1
      }
    }
    ...
    ```  
    
    OPCUA:
      
    ```
    ...
    "mapping": [
      {
      "deviceNodePattern": "Root\\.Objects\\.Device1",
      "deviceNamePattern": "Device ${Root\\.Objects\\.Device1\\.serialNumber}",
      "converter": "CustomOpcUaConverter",
      "attributes": [
        {
          "key": "temperature °C",
          "path": "${ns=2;i=5}"
        }
      ],
      ...
    ...
    ```

3. To apply changes - you need to restart a gateway (If you want to add connector) or connector (If you want to add converter).  

In this section we have the following articles to help you with the customization:  

1. [Methods and datatypes](methods-and-datatypes.md) - This article describes the methods and data types that are used in the IoT Gateway.
    This article will be useful to understand flow of data and methods in the IoT Gateway.  
2. [Serial connector](serial-connector.md) - This article describes how to create the serial connector and converters for it for IoT Gateway.
    This article contains custom connector, converters and steps to use them.  

