---
layout: docwithnav
assignees:
- ashvayka
title: OPC-UA Extension Configuration

---

* TOC
{:toc}

This guide will help you to get familiar with OPC-UA extension configuration for Thingsboard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe extension configuration file below.

### Extension configuration: opc-config.json

Extension configuration is a JSON file that contain information about how to connect and monitor list of OPC-UA servers.
The root JSON element should contain "servers" array. Each server in array is configured using following properties:

#### Basic connection properties

| **Property**        | **Description**                                                                                                                                                                                                  | **Default Value**         |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| applicationName     | Name of the client application, used for OPC-UA connection.                                                                                                                                                      | Thingsboard OPC-UA client |
| applicationUri      | URI of the client application, used for OPC-UA connection.                                                                                                                                                       | urn:thingsboard:client    |
| host                | OPC-UA server host                                                                                                                                                                                               | localhost                 |
| port                | OPC-UA server port                                                                                                                                                                                               | 49320                     |
| scanPeriodInSeconds | Interval for complete OPC-UA server structure re-scan. Used to detect new or deleted devices.                                                                                                                    | 10                        |
| timeoutInMillis     | OPC-UA server connection timeout in milliseconds.                                                                                                                                                                | 5000                      |
| security            | OPC-UA security option. See [SecurityPolicy](https://github.com/eclipse/milo/blob/master/opc-ua-stack/stack-core/src/main/java/org/eclipse/milo/opcua/stack/core/security/SecurityPolicy.java) for more details. | Basic128Rsa15             |

For Example:

```json
{
  "servers": [
    {
      "applicationName": "Thingsboard OPC-UA client",
      "applicationUri": "urn:thingsboard:client",
      "host": "localhost",
      "port": 49320,
      "scanPeriodInSeconds": 10,
      "timeoutInMillis": 5000,
      "security": "Basic128Rsa15"
      ...
    }
  ]
}
      
```

#### Client identity properties

OPC-UA extension supports "anonymous" and "username" client identities.
Example of anonymous identity configuration:

```json
{
      ...
      "identity": {
        "type": "anonymous"
      }
      ...
}
      
```

Example of username identity configuration:

```json
{
      ...
      "identity": {
        "type": "username",
        "username": "Your username",
        "password": "Your password"
      }
      ...
}
      
```

#### Keystore configuration

Keystore information is used to setup encrypted connection between Gateway OPC-UA client and your OPC-UA server.
Many OPC-UA servers require provisioning of client key on the server, before client can connect.
Supported keystore types are JKS and PKCS12.
Example of keystore configuration:

```json
{
      ...
      "keystore": {
        "type": "PKCS12",
        "location": "your-certs.pfx",
        "password": "your-keystore-password",
        "alias": "your-client-key",
        "keyPassword": "your-client-password"
      }
      ...
}
```

#### Mapping

Mapping configuration basically setups rules of OPC-UA server monitoring and data conversion to Thingsboard Key-Value format.

Mapping process periodically travers OPC-UA server node tree and applies regular expression that is configured in **deviceNodePattern** parameter for each mapping configuration.
List of nodes that match regular expression are stored as device nodes. 
Now mapping process will use **deviceNamePattern** to get device name value. 
You can use OPC-UA tags inside the pattern by specifying their relative (to device node) names. See example below. 
Similar mapping rules are applied for **attributes** and **timeseries** values:

 - **key** - constant Attribute or Timeseries Thingsboard key.
 - **type** - either boolean, long, double or string.
 - **value** - expression based on relative tag values specified inside **${}** 

### KEPServerEX connection example

This example will demonstrate how to 

 - connect to your local KEPServerEX installation running on Windows.
 - transform sample OPC-UA tag values to Thingsboard attributes and telemetry.
 - visualize OPC-UA tag values using Thingsboard widgets.
 
#### Prerequisites

We assume that KEPServerEX is already installed on your Windows machine. 
We will use Windows 10 and [Free Demo](https://my.kepware.com/download/demo/ex/?utm_content=) server.  
 
#### Step 1. Provision gateway credentials to KEPServerEX
 
Open KEPServerEX "OPC UA Configuration Manager" application and navigate to "Trusted Clients" page.

Import **example.der** certificate from the gateway configuration folder. Configuration folder location:
  
```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

**NOTE** This certificate is added to the configuration folder for the demonstration purposes. Both certificate and key is in public access, thus it is not secure and is not for production usage.
 
{:refdef: style="text-align: center;"}
![image](/images/gateway/certificate-import.png)
{: refdef}


#### Step 2. Add server endpoint KEPServerEX

This step is required if you want to deploy Thingsboard IoT Gateway and KEPServerEX on different hosts. 

KEPServerEX need to be configured to accept remote connections. Open KEPServerEX "OPC UA Configuration Manager" application and navigate to "Server Endpoints" page.

{:refdef: style="text-align: center;"}
![image](/images/gateway/server-endpoint.png)
{: refdef}

**NOTE** KEPServerEX restart is required.

#### Step 3. Enable OPC-UA extension

Navigate to gateway configuration folder and edit **tb-gateway.yml** file.
Configuration folder location:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

Change **opc.enabled** property value to **true**.

If you decide to use different OPC-UA server that is deployed to external host or has specific security configuration, please edit **opc-config.json** file and modify connection parameters.
See OPC-UA extension [configuration guide](/docs/iot-gateway/opc-ua/) for more details.

Restart your gateway using following commands

```bash
Windows: 
net stop tb-gateway
net start tb-gateway
Linux: 
sudo service tb-gateway restart
```

#### Step 4. Explore data from devices

The **opc-config.json** contains sample configuration that allows mapping of OPC-UA tags to Thingsboard device attributes and telemetry.
Once started, OPC-UA extension will monitor your OPC-UA server using this pre-defined configuration.
 
For example, the default mapping listed below will force gateway to treat all OPC-UA tags that match **deviceNodePattern** as Thingsboard devices.
Gateway will use **deviceNamePattern** to calculate the device name based on values of different tags using relative to device node tag (For example, **_System._DeviceId**).
Similar, **Tag1** and **Tag2** relative OPC-UA tags will be mapped to corresponding Thingsboard device attribute and telemetry fields.  
 
```json
{
  "deviceNodePattern": "Channel1\\.Device\\d+$",
  "deviceNamePattern": "Device ${_System._DeviceId}",
  "attributes": [
    {"key":"Tag1", "type": "string", "value": "${Tag1}"}
  ],
  "timeseries": [
    {"key":"Tag2", "type": "long", "value": "${Tag2}"}
  ]
}
```

You should observe following log message in the gateway logs:
 
```text
... INFO  o.t.g.service.MqttGatewayService - [Device 1][*] Device Connected!
```

Logs are located in the following folder:

```bash
Windows: YOUR_INSTALL_DIR/logs
Linux: /var/log/tb-gateway
```

Now you can navigate to the Thingsboard Web UI and observe new device **Device 1** on the **Devices** page.
You can click on the device card and observe delivered attributes and telemetry in the corresponding tabs.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-opc-telemetry.png)
{: refdef}


## Next steps

Explore extension configuration guides:
 
 - [MQTT extension configuration](/docs/iot-gateway/mqtt)
 - [OPC-UA extension configuration](/docs/iot-gateway/opc-ua/)

Explore guides related to main Thingsboard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
