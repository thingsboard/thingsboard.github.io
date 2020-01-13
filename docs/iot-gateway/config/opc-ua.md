---
layout: docwithnav
assignees:
- ashvayka
title: OPC-UA Extension Configuration
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
    "scanPeriodInMillis": 10000,
    "timeoutInMillis": 5000,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    },
    "mapping": [
      {
        "deviceNodePattern": "MyObject\\d+",
        "deviceNamePattern": "Device ${MyVariable22}",
        "attributes": [
          {
            "key": "Tag1",
            "path": "${MyVariable1}"
          }
        ],
        "timeseries": [
          {
            "key": "Tag3",
            "path": "${Tag3}"
          },
          {
            "key": "Tag2",
            "path": "${MyVariable3}"
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
            "attributeOnThingsBoard": "t",
            "attributeOnDevice": "MyVariable1"
          }
        ]
      }
    ]
  }
}

{% endhighlight %}

</details>

### Section "server"

Configuration in this section uses for connecting to Modbus server.  

| **Parameter**                 | **Default value**                    | **Description**                                                                       |
|:-|:-|-
| name                          | **OPC-UA Default Server**            | Name of connector to server.                                                          |
| host                          | **localhost:4840/freeopcua/server/** | Hostname or ip address of Modbus server.                                              |
| scanPeriodInMillis            | **10000**                            | Port of Modbus server for connect.                                                    |
| timeoutInMillis               | **5000**                             | Timeout in seconds for connecting to Modbus server.                                   |
| security                      | **Basic128Rsa15**                    | Security policy (**Basic128Rsa15**, **Basic256**, **Basic256Sha256**)                 |
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
| deviceNodePattern             | **MyObject\\d+**                     | Regular expression, uses for looking the node for a current device.                   |
| deviceNamePattern             | **Device ${MyVariable22}**           | JSON-path expression, uses for looking the device name in some variable.              |
|---

This part of configuration will look like:  

```json
        "deviceNodePattern": "MyObject\\d+",
        "deviceNamePattern": "Device ${MyVariable22}",
```

***Optionally, you can add in this section parameter "converter" for using custom converter.***

#### Subsection "attributes"
This subsection contains configurations for variables of the object, that will be interpreted as attributes for the device.

| **Parameter**   | **Default value**           | **Description**                                                                   |
|:-|:-|-
| key             | **Tag1**                    | Tag, that will interpreted as attribute for ThingsBoard platform instance.        |
| path            | **${MyVariable}**           | JSON-path expression, uses for looking the value in some variable.                |
|---

This part of configuration will look like:  

```json
        "attributes": [
          {
            "key": "Tag1",
            "path": "${MyVariable1}"
          }
        ],
```

#### Subsection "timeseries"
This subsection contains configurations for variables of the object, that will be interpreted as telemetry for the device.

| **Parameter**   | **Default value**           | **Description**                                                                   |
|:-|:-|-
| key             | **Tag1**                    | Tag, that will interpreted as telemetry for ThingsBoard platform instance.        |
| path            | **${MyVariable}**           | JSON-path expression, uses for looking the value in some variable.                |
|---

This part of configuration will look like:  

```json
        "timeseries": [
          {
            "key": "Tag3",
            "path": "${Tag3}"
          }
        ],
```


#### Subsection "rpc_methods"
This subsection contains configuration for RPC request from ThingsBoard platform instance.

| **Parameter**         | **Default value**                 | **Description**                                                                                    |
|:-|:-|-
| method                | **multiply**                      | Name of method on OPC-UA server.                                                                   |
| arguments             | **[2,4]**                         | Arguments for the method (if this parameter doesn't exist, arguments will take from rpc request). |
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

| **Parameter**             | **Default value**                 | **Description**                                                                               |
|:-|:-|-
| attributeOnThingsBoard    | **t**                             | Name of server side argument.                                                                 |
| attributeOnDevice         | **MyVariable1**                   | Name of variable that will change itself value with a value from attribute update request.    |
|---

This part of configuration will look like:  

```json
        "attributes_updates": [
          {
            "attributeOnThingsBoard": "t",
            "attributeOnDevice": "MyVariable1"
          }
        ]
```

## Next steps

Explore guides related to main ThingsBoard features:

 - [How to connect OP-UA server to the gateway](/docs/iot-gateway/guides/how-to-connect-opcua-server/)
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
