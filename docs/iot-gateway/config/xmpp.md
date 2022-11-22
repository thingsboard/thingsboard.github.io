---
layout: docwithnav-gw
title: XMPP Connector Configuration
description: XMPP protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with MQTT Connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this Connector.
The purpose of this connector is to collect data from IoT devices using XMPP protocol.

We will describe connector configuration file below.

## Connector configuration: xmpp.json
Connector configuration is a JSON file that contains information about how to connect to devices, how to process
the data and other service features. Let’s review the format of the configuration file using example below.

<br>
<details>

<summary>
<b>Example of XMPP Connector config file. Press to expand.</b>
</summary>

{% highlight json %}
{
  "server": {
    "jid": "gateway@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222,
    "use_ssl": false,
    "disable_starttls": false,
    "force_starttls": true,
    "timeout": 10000,
    "plugins": [
      "xep_0030",
      "xep_0323",
      "xep_0325"
    ]
  },
  "devices": [
    {
      "jid": "device@localhost/TMP_1101",
      "deviceNameExpression": "${serialNumber}",
      "deviceTypeExpression": "default",
      "attributes": [
        {
          "key": "temperature",
          "value": "${temp}"
        }
      ],
      "timeseries": [
        {
          "key": "humidity",
          "value": "${hum}"
        },
        {
          "key": "combination",
          "value": "${temp}:${hum}"
        }
      ],
      "attributeUpdates": [
        {
          "attributeOnThingsBoard": "shared",
          "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
        }
      ],
      "serverSideRpc": [
        {
          "methodRPC": "rpc1",
          "withResponse": true,
          "valueExpression": "${params}"
        }
      ]
    }
  ]
}
{% endhighlight %}

</details>

### Section "server"

This configuration section using for configure Gateway XMPP device and connection to XMPP server. 

| **Parameter**     | **Default value**                    | **Description**                                                                                     |
|:-|:-|-
| jid             | **gateway@localhost**                  | The JID of the XMPP user account.                                                                   |
| password        | **password**                           | The password for the XMPP user account.                                                             |
| host            |  **localhost**                         | The host of XMPP server.                                                                            |
| port            | **5222**                               | The port of XMPP server.                                                                            |
| use_ssl         | **false**                              | Indicates if the older SSL connection method should be used.                                        |
| disableStarttls | **false**                              | Disables TLS for the connection.                                                                    |
| forceStarttls   | **true**                               | Indicates that negotiation should be aborted if the server does not advertise support for STARTTLS. |
| timeout         | **10000**                              |  |
| plugins         | **["xep_0030","xep_0323","xep_0325"]** | List of plugins that will be registered by client. |
|---

Configuration section will look like:
```json
{
  "server": {
    "jid": "gateway@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222,
    "use_ssl": false,
    "disable_starttls": false,
    "force_starttls": true,
    "timeout": 10000,
    "plugins": [
      "xep_0030",
      "xep_0323",
      "xep_0325"
    ]
  }
}
```

### Section "devices"

This configuration section contains an array of devices that can be connected to the connector and
send the data. It is mean that connector reject all device connections, which JID is not included in this array.

#### Device subsection

This object configuration section includes the parameters of how to proceed with incoming data.

| **Parameter**        | **Default value**             | **Description**                                                                                                                       |
|:-|:-|-
| jid                  | **device@localhost/TMP_1101** | The JID of the XMPP user account.                                                                                                     |
| deviceNameExpression | **${serialNumber}**           | JSON-path expression, for looking the device name.                                                                                    |
| deviceTypeExpression | **${sensorType}**             | JSON-path expression, for looking the device type.                                                                                    |
| attributes           |                               | This subsection contains parameters of the incoming requests, that will be interpreted as attributes for the device.                  |
| ... key              | **temperature**               | Name for attribute in ThingsBoard.                                                                                                    |
| ... value            | **${temp}**                   | Simple JSON expression, uses for looking value in the incoming message, to be sent to ThingsBoard instance as value of key parameter. |
| timeseries           |                               | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.                    |
| ... key              | **humidity**                  | Name for telemetry in ThingsBoard.                                                                                                    |
| ... value            | **${hum}**                    | Simple JSON expression, uses for looking value in the incoming message, to be sent to ThingsBoard instance as value of key parameter. |
|---

Example:
```json
{
  "jid": "device@localhost/TMP_1101",
  "deviceNameExpression": "${serialNumber}",
  "deviceTypeExpression": "default",
  "attributes": [
    {
      "key": "temperature",
      "value": "${temp}"
    }
  ],
  "timeseries": [
    {
      "key": "humidity",
      "value": "${hum}"
    },
    {
      "key": "combination",
      "value": "${temp}:${hum}"
    }
  ]
}
```

#### Attribute updates subsection

This configuration section is optional. ThingsBoard allows provisioning device attributes and fetch some of them from 
the device application. You can treat this as a remote configuration for devices. Your devices are able to request 
shared attributes from ThingsBoard. See user guide for more details.

The “attributeUpdates” configuration allows configuring the format of the corresponding attribute data that will be 
sending to the XMPP device.

| **Parameter**           | **Default value**                               | **Description**                                                                   |
|:-|:-|-
| attributeOnThingsBoard  | **sharedName**                                  | Shared attribute name.                                                            |
| valueExpression         | **{\"${attributeKey}\":\"${attributeValue}\"}** | JSON-path expression uses for creating the message data that will send to device. |
|---

This section in configuration file looks like: 
```json
"attributeUpdates": [
  {
    "attributeOnThingsBoard": "shared",
    "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
  }
]
```

#### Server side RPC subsection

ThingsBoard allows sending RPC commands to the device that is connected to ThingsBoard directly or via Gateway.

Configuration, provided in this section uses for sending RPC requests from ThingsBoard to device.

| **Parameter**           | **Default value**    | **Description**                                                                   |
|:-|:-|-
| methodRPC               | **rpcMethod1**       | RPC method name.                                                                  |
| withResponse            | **true**             | Boolean value that means as send or not response back to ThingsBoard.             |
| valueExpression         | **${params}**        | JSON-path expression uses for creating the message data that will send to device. |
|---

This subsection in configuration file looks like:

```json
"serverSideRpc": [
  {
    "methodRPC": "rpc1",
    "withResponse": true,
    "valueExpression": "${params}"
  }
]
```

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
