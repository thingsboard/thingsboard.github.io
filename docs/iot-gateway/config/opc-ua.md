---
layout: docwithnav-gw
assignees:
- ashvayka
title: OPC-UA Connector Configuration
description: OPC-UA protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with OPC-UA connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe connector configuration file below.


<br>

<details>

<summary>
<b>Example of OPC-UA Connector config file. Press to expand.</b>
</summary>

{% highlight json %}

{
  "server": {
    "name": "OPC-UA Default Server",
    "url": "localhost:4840/freeopcua/server/",
    "timeoutInMillis": 5000,
    "scanPeriodInMillis": 5000,
    "disableSubscriptions":false,
    "subCheckPeriodInMillis": 100,
    "showMap": false,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    },
    "mapping": [
      {
        "deviceNodePattern": "Root\\.Objects\\.Device1",
        "deviceNamePattern": "Device ${Root\\.Objects\\.Device1\\.serialNumber}",
        "attributes": [
          {
            "key": "temperature °C",
            "path": "${ns=2;i=5}"
          }
        ],
        "timeseries": [
          {
            "key": "humidity",
            "path": "${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Humidity}"
          },
          {
            "key": "batteryLevel",
            "path": "${Battery\\.batteryLevel}"
          }
        ],
        "rpc_methods": [
          {
            "method": "multiply",
            "arguments": [2, 4]
          }
        ],
        "attributes_updates": [
          {
            "attributeOnThingsBoard": "deviceName",
            "attributeOnDevice": "Root\\.Objects\\.Device1\\.serialNumber"
          }
        ]
      }
    ]
  }
}

{% endhighlight %}

</details>

### Section "server"

Configuration in this section uses for connecting to OPC-UA server.  

| **Parameter**                 | **Default value**                    | **Description**                                                                                                                                                        |
|:-|:-|-
| name                          | **OPC-UA Default Server**            | Name of connector to server.                                                                                                                                           |
| host                          | **localhost:4840/freeopcua/server/** | Hostname or ip address of OPC-UA server.                                                                                                                               |
| timeoutInMillis               | **5000**                             | Timeout in seconds for connecting to OPC-UA server.                                                                                                                    |
| scanPeriodInMillis            | **5000**                             | Period to rescan the server.                                                                                                                                           |
| disableSubscriptions          | **false**                            | If true - the gateway will subscribe to interesting nodes and wait for data update and if false - the gateway will rescan OPC-UA server every **scanPeriodInMillis**   |
| subCheckPeriodInMillis        | **100**                              | Period to check the subscriptions in the OPC-UA server.                                                                                                                |
| showMap                       | **true**                             | Show nodes on scanning **true** or **false**.                                                                                                                          |
| security                      | **Basic128Rsa15**                    | Security policy (**Basic128Rsa15**, **Basic256**, **Basic256Sha256**)                                                                                                  |
|---

#### Subsection "identity"
There are several types available for this subsection:  
1. anonymous  
2. username  
3. cert.PEM  

{% capture identityopcuatogglespec %}
<b>anonymous</b><br/> <small>(recommended if all servers in the local network)</small>%,%anonymous%,%templates/iot-gateway/opcua-identity-anonymous-config.md%br%
<b>username</b><br/> <small>(recommended as basic level of security)</small>%,%username%,%templates/iot-gateway/opcua-identity-username-config.md%br%
<b>cert.PEM</b><br/> <small>(recommended as better level of security)</small>%,%certpem%,%templates/iot-gateway/opcua-identity-certpem-config.md%br%{% endcapture %}

{% include content-toggle.html content-toggle-id="opcuaIdentityConfig" toggle-spec=identityopcuatogglespec %}

### Section "mapping"
This configuration section contains array of nodes that the gateway will subscribe to after connecting to the OPC-UA server and settings about processing data from these nodes.

| **Parameter**                 | **Default value**                    | **Description**                                                                       |
|:-|:-|-
| deviceNodePattern             | **Root\\.Objects\\.Device1**                     | Regular expression, uses for looking the node for a current device.                   |
| deviceNamePattern             | **Device ${Root\\.Objects\\.Device1\\.serialNumber}**           | Path to variable with device name, uses for looking the device name in some variable.              |
|---

This part of configuration will look like:  

```json
        "deviceNodePattern": "Root\\.Objects\\.Device1",
        "deviceNamePattern": "Device ${Root\\.Objects\\.Device1\\.serialNumber}",
```

***Optionally, you can add in this section parameter "converter" for using custom converter.***

#### Subsection "attributes"
This subsection contains configurations for variables of the object, that will be interpreted as attributes for the device.

| **Parameter**   | **Default value**           | **Description**                                                                   |
|:-|:-|-
| key             | **temperature °C**          | Tag, that will interpreted as attribute for ThingsBoard platform instance.                                     |
| path            | **${ns=2;i=5}**             | Name of the variable in the OPC-UA object, uses for looking the value in some variable. ** \* **               |
|---

** \* ** You can put here some expression for search like:
1. Full path to node - **${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Humidity}**
2. Relative path from device object - **${TemperatureAndHumiditySensor\\.Humidity}** 
3. Some regular expression to search - **${Root\\.Objects\\.Device\\d\*\\.TemperatureAndHumiditySensor\\.Humidity}**
4. Namespace identifier and node identifier - **${ns=2;i=5}**

This part of configuration will look like:  

```json
        "attributes": [
          {
            "key": "temperature °C",
            "path": "${ns=2;i=5}"
          }
        ],
```

#### Subsection "timeseries"
This subsection contains configurations for variables of the object, that will be interpreted as telemetry for the device.

| **Parameter**   | **Default value**           | **Description**                                                                   |
|:-|:-|-
| key             | **humidity**                    | Tag, that will interpreted as telemetry for ThingsBoard platform instance.        |
| path            | **${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Humidity}**           | Name of the variable in the OPC-UA object, uses for looking the value in some variable. ** \* ** |
|---

** \* ** You can put here some expression for search like:
1. Full path to node - **${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Humidity}**
2. Relative path from device object - **${TemperatureAndHumiditySensor\\.Humidity}** 
3. Some regular expression to search - **${Root\\.Objects\\.Device\\d\*\\.TemperatureAndHumiditySensor\\.Humidity}**
4. Namespace identifier and node identifier - **${ns=2;i=5}**

This part of configuration will look like:  

```json
        "timeseries": [
          {
            "key": "humidity",
            "path": "${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Humidity}"
          }
        ],
```


#### Subsection "rpc_methods"
This subsection contains configuration for RPC request from ThingsBoard platform instance.

| **Parameter**         | **Default value**                 | **Description**                                                                                    |
|:-|:-|-
| method                | **multiply**                      | Name of method on OPC-UA server.                                                                   |
| arguments             | **[2,4]**                         | Arguments for the method (if this parameter doesn't exist, arguments will take from rpc request).  |
|---

This part of configuration will look like:  

```json
        "rpc_methods": [
          {
            "method": "multiply",
            "arguments": [2, 4]
          }
        ],
```


#### Subsection "attributes_updates"
This subsection contains configuration for attribute updates request from ThingsBoard platform instance.

| **Parameter**             | **Default value**                                            | **Description**                                                                               |
|:-|:-|-
| attributeOnThingsBoard    | **deviceName**                                               | Name of server side argument.                                                                 |
| attributeOnDevice         | **Root\\.Objects\\.Device1\\.serialNumber**                     | Name of variable that will change itself value with a value from attribute update request.    |
|---

This part of configuration will look like:  

```json
        "attributes_updates": [
          {
            "attributeOnThingsBoard": "deviceName",
            "attributeOnDevice": "Root\\.Objects\\.Device1\\.serialNumber"
          }
        ]
```

## Next steps

Explore guides related to main ThingsBoard features:
 - [How to connect OPC-UA server to the gateway](/docs/iot-gateway/guides/how-to-connect-opcua-server/)
 - [ThingsBoard IoT Gateway Features](/docs/iot-gateway/features/)
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
