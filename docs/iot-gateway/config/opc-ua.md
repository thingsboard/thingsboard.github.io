---
layout: docwithnav-gw
assignees:
- ashvayka
title: OPC-UA Connector Configuration
description: OPC-UA protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

{% capture difference %}
**From Gateway version 3.1 we added a new OPC-UA connector based on the AsyncIO library. 
Note that the connector is in the early beta, so it can have bugs. 
Also, it is not recommended to use it in production mode for now.
For enabling it, use the type of connector "opcua_asyncio".**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

This guide will help you to get familiar with OPC-UA connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe connector configuration file below.

<b>Example of OPC-UA Connector config file.</b>

{% capture opcuaConf %}

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
            "key": "CertificateNumber",
            "path": "${ns=2;i=5}"
          }
        ],
        "timeseries": [
          {
            "key": "temperature °C",
            "path": "${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Temperature}"
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

{% endcapture %}
{% include code-toggle.liquid code=opcuaConf params="conf|.copy-code.expandable-20" %}

## Section "server"

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

<br>
**Let's look an example.**
<br>
In this example uses the Prosys OPC UA Simulation Server to demonstrate how to configure the OPC-UA connector.
<br>

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-simulation-server-1.png)
{: refdef}


On the main **"Status"** tab, copy connection address (UA TCP).

To connect your OPC UA server to ThingsBoard, in the OPC-UA Connector configuration file (opcua.json), replace the "url" value with the copied connection address.

Our **server** section would look like this:

```json
  "server": {
    "name": "OPC-UA Default Server",
    "url": "localhost:53530/OPCUA/SimulationServer",
    "timeoutInMillis": 5000,
    "scanPeriodInMillis": 5000,
    "disableSubscriptions": false,
    "subCheckPeriodInMillis": 100,
    "showMap": false,
    "security": "Basic128Rsa15",
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-configuration-1.png)
{: refdef}

### Subsection "identity"
There are several types available for this subsection:  
1. anonymous  
2. username  
3. cert.PEM  

{% capture identityopcuatogglespec %}
<b>anonymous</b><br> <small>(recommended if all servers in the local network)</small>%,%anonymous%,%templates/iot-gateway/opcua-identity-anonymous-config.md%br%
<b>username</b><br> <small>(recommended as basic level of security)</small>%,%username%,%templates/iot-gateway/opcua-identity-username-config.md%br%
<b>cert.PEM</b><br> <small>(recommended as better level of security)</small>%,%certpem%,%templates/iot-gateway/opcua-identity-certpem-config.md%br%{% endcapture %}

{% include content-toggle.html content-toggle-id="opcuaIdentityConfig" toggle-spec=identityopcuatogglespec %}

## Section "mapping"
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
<br>
<br><br>
**Let's look an example.**

Specify **deviceNodePattern** as on our test server. In this example it is **"Root\\.Objects\\.Simulation"**.

**deviceNamePattern** specify as **"Device OPC-UA"**.

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-simulation-server-2.png)
{: refdef}

<br>
In this example, the **mapping** section would look like this:

```json
        "deviceNodePattern": "Root\\.Objects\\.Simulation",
        "deviceNamePattern": "Device OPC-UA",
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-configuration-2.png)
{: refdef}

After running **ThingsBoard IoT gateway**, you see the new device **Device OPC-UA** in your ThingsBoard instance.

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-1.png)
{: refdef}

### Subsection "attributes"
This subsection contains configurations for variables of the object, that will be interpreted as attributes for the device.

| **Parameter**   | **Default value**           | **Description**                                                                                      |
|:-|:-|-
| key             | **CertificateNumber**       | Tag, that will interpreted as attribute for ThingsBoard platform instance.                           |
| path            | **${ns=2;i=5}**             | Name of the variable in the OPC-UA object, uses for looking the value in some variable. ** \* **     |
|---

{% capture difference %}
<br>
**If you don't specify the "key" parameter, the node name will use instead**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

** \* ** You can put here some expression for search like:
1. Full path to node - **${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.CertificateNumber}**
2. Relative path from device object - **${TemperatureAndHumiditySensor\\.CertificateNumber}** 
3. Some regular expression to search - **${Root\\.Objects\\.Device\\d\*\\.TemperatureAndHumiditySensor\\.CertificateNumber}**
4. Namespace identifier and node identifier - **${ns=2;i=5}**

This part of configuration will look like:  

```json
        "attributes": [
          {
            "key": "CertificateNumber",
            "path": "${ns=2;i=5}"
          }
        ],
```

<br>
**Let's look an example.**
<br>
In the "path" line set the NodeId value taken from our test server.
<br>

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-simulation-server-3.png)
{: refdef}

In this example, the **attributes** section would look like this:

```json
        "attributes": [
          {
            "key": "model",
            "path": "${ns=3;i=1008}"
          },
          {
            "key": "CertificateNumber",
            "path": "${ns=3;i=1007}"
          }
        ],
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-configuration-3.png)
{: refdef}

You must see the attributes you sent to ThingsBoard in the **Attributes** section of your device.:

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-2.png)
{: refdef}

### Subsection "timeseries"
This subsection contains configurations for variables of the object, that will be interpreted as telemetry for the device.

| **Parameter**   | **Default value**           | **Description**                                                                   |
|:-|:-|-
| key             | **temperature °C**                                                             | Tag, that will interpreted as telemetry for ThingsBoard platform instance.        |
| path            | **${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Temperature}**   | Name of the variable in the OPC-UA object, uses for looking the value in some variable. ** \* ** |
|---

** \* ** You can put here some expression for search like:
1. Full path to node - **${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Temperature}**
2. Relative path from device object - **${TemperatureAndHumiditySensor\\.Temperature}** 
3. Some regular expression to search - **${Root\\.Objects\\.Device\\d\*\\.TemperatureAndHumiditySensor\\.Temperature}**
4. Namespace identifier and node identifier - **${ns=2;i=5}**

This part of configuration will look like:  

```json
        "timeseries": [
          {
            "key": "temperature °C",
            "path": "${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Temperature}"
          }
        ],
```

<br>
**Let's look an example.**

Replace "path" value to the "NodeId" value, relative path from device object or Display Name identifier, taken from our test server.
<br>

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-simulation-server-4.png)
{: refdef}

In this example, the **timeseries** section would look like this:

```json
        "timeseries": [
          {
            "key": "humidity",
            "path": "${Counter}"
          },
          {
            "key": "pressure",
            "path": "${Root\\.Objects\\.Simulation\\.Triangle}"
          },
          {
            "key": "temperature °C",
            "path": "${ns=3;i=1002}"
          }
        ],
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-configuration-4.png)
{: refdef}

You must see the telemetry you sent to ThingsBoard in the **Latest telemetry** section of your device:

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-3.png)
{: refdef}

### Subsection "rpc_methods"
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
        ]
```

{% capture methodFilterOptions %}
Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).
{% endcapture %}
{% include templates/info-banner.md content=methodFilterOptions %}

### Subsection "attributes_updates"
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

**Let’s look an example.**

Suppose you want to set the value of the **"deviceName"** attribute. Currently, the attribute hasn't any value.

In the OPC-UA Connector configuration file (opcua.json) change **"attributeOnDevice"** value to the full path to the node "deviceName".

In this example it is **"Root\\.Objects\\.Simulation\\.deviceName"**.

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-updates-2.png)
{: refdef}

Our **attributes_updates** section would look like this:

```json
  "attributes_updates": [
    {
      "attributeOnThingsBoard": "deviceName",
      "attributeOnDevice": "Root\\.Objects\\.Simulation\\.deviceName"
    }
  ]
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-updates-1.png)
{: refdef}

Go to **"Shared attributes"** and create a new one for your device in the ThingsBoard instance.

Specify the key name - deviceName, value type - String, string value - Device OPC-UA.

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-updates-3.png)
{: refdef}

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-updates-4.png)
{: refdef}

Now go to OPC UA server and make sure the value of the deviceName node is updated.

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-attributes-updates-5.png)
{: refdef}

## Next steps

Explore guides related to main ThingsBoard features:
 - [How to connect OPC-UA server to the gateway](/docs/iot-gateway/guides/how-to-connect-opcua-server/)
 - [ThingsBoard IoT Gateway Features](/docs/iot-gateway/features/)
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
