---
layout: docwithnav-gw
title: OCPP Connector Configuration
description: OCPP protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you get familiar with OCPP Connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this Connector.
The purpose of this connector is to communicate between Charge Point and Central System using OCPP protocol.

We will describe the connector configuration file below.

## Connector configuration: ocpp.json
Connector configuration is a JSON file that contains information about how to connect to Charge Points, process
the data, and other service features. Let’s review the format of the configuration file using the example below.


<b>Example of OCPP Connector config file.</b>

{% capture ocppConf %}
{
  "centralSystem": {
    "name": "Central System",
    "host": "127.0.0.1",
    "port": 9000,
    "connection": {
      "type": "insecure"
    },
    "security": [
      {
        "type": "token",
        "tokens": [
          "Bearer ACCESS_TOKEN"
        ]
      },
      {
        "type": "basic",
        "credentials": [
          {
            "username": "admin",
            "password": "admin"
          }
        ]
      }
    ]
  },
  "chargePoints": [
    {
      "idRegexpPattern": "bidon/hello/CP_1",
      "deviceNameExpression": "${Vendor} ${Model}",
      "deviceTypeExpression": "default",
      "attributes": [
        {
          "messageTypeFilter": "MeterValues,",
          "key": "temp1",
          "value": "${meter_value[:].sampled_value[:].value}"
        },
        {
          "messageTypeFilter": "MeterValues,",
          "key": "vendorId",
          "value": "${connector_id}"
        }
      ],
      "timeseries": [
        {
          "messageTypeFilter": "DataTransfer,",
          "key": "temp",
          "value": "${data.temp}"
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
{% endcapture %}
{% include code-toggle.liquid code=ocppConf params="conf|.copy-code.expandable-20" %}

### Section "centralSystem"

This configuration section is used to configure Gateway as a Central System.

| **Parameter** | **Default value**  | **Description**                        |
|:--------------|:-------------------|----------------------------------------|
| name          | **Central System** | Central System name.                   |
| host          | **127.0.0.1**      | Central System hostname or ip address. |
| port          | **9000**           | Central System port.                   |
| ---           |                    |                                        |

#### Connection subsection

This configuration subsection is used for configuring connection type between Central System and Charge Point.
You can choose the next connection type:

{% capture ocppconnectorconnectiontogglespec %}
Insecure<small>No security</small>%,%insecure%,%templates/iot-gateway/ocpp-connector-insecure-connection-config.md%br%
TLS<small>Recommended</small>%,%tls%,%templates/iot-gateway/ocpp-connector-tls-connection-config.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="ocppConnectorConnectionConfig" toggle-spec=ocppconnectorconnectiontogglespec %} 

#### Security subsection

Security subsection provides configuration for Charge Point authorization at Central System.
You can choose the desired security type:

{% capture ocppconnectorsecuritytogglespec %}
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/ocpp-connector-anonymous-security-config.md%br%
Basic<small>Recommended</small>%,%basic%,%templates/iot-gateway/ocpp-connector-basic-security-config.md%br%
Token<small>Recommended</small>%,%token%,%templates/iot-gateway/ocpp-connector-token-security-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ocppConnectorSecurityConfig" toggle-spec=ocppconnectorsecuritytogglespec %}

**Note** You can combine _basic_ and _token_ security types. Security subsection in configuration file will look like this:

```json
    "security": [
      {
        "type": "token",
        "tokens": [
          "Bearer ACCESS_TOKEN"
        ]
      },
      {
        "type": "basic",
        "credentials": [
          {
            "username": "admin",
            "password": "admin"
          }
        ]
      }
    ]
```

### Section "chargePoints"

This subsection contains general settings for the Charge Points and subsections for processing data.

| **Parameter**        | **Default value**      | **Description**                                                                                                                                  |
|:---------------------|:-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| idRegexpPattern      | **charge_points/CP_1** | Regular expression, is used for looking the Charge Point for a current device.                                                                   |
| deviceNameExpression | **${Vendor} ${Model}** | Simple JSON expression, is used for looking up device name in the incoming message (parameter “Vendor + Model” will be used as the device name). |
| deviceTypeExpression | **${Model}**           | Simple JSON expression, is used for looking up device type in the incoming message (parameter “Model” will be used as the device type).          |
| attributes           |                        | Array of objects for processing device attributes.                                                                                               |
| timeseries           |                        | Array of objects for processing device telemetry.                                                                                                |
| attributeUpdates     |                        | Array of objects for processing attributeUpdate requests from ThingsBoard.                                                                       |
| serverSideRpc        |                        | Array of objects for processing RPC requests from ThingsBoard.                                                                                   |
| ---                  |                        |                                                                                                                                                  |

This part of configuration will look like this:

```json
  "chargePoints": [
    {
      "idRegexpPattern": "charge_points/CP_1",
      "deviceNameExpression": "${Vendor} ${Model}",
      "deviceTypeExpression": "${Model}",
      "attributes": [
        ...
      ],
      "timeseries": [
        ...
      ],
      "attributeUpdates": [
        ...
      ],
      "serverSideRpc": [
        ...
      ]
    }
  ]
```

#### Subsection attributes

This subsection contains general settings for processing data interpreted as attributes.

| **Parameter**         | **Default value**                            | **Description**                                                                                                                                                  |
|:----------------------|:---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| attributes            |                                              | This subsection contains parameters of the incoming message, to be interpreted as attributes for the device.                                                     |
| ... messageTypeFilter | **MeterValues,**                             | List of allowed message types divided by comma.                                                                                                                  |
| ... key               | **temp**                                     | Attribute name, to be sent to ThingsBoard instance.                                                                                                              |
| ... value             | **${meter_value[:].sampled_value[:].value}** | Simple JSON expression, is used for looking up value in the incoming message, which will then be sent to ThingsBoard instance as the value of the key parameter. |
| ---                   |                                              |                                                                                                                                                                  |

This subsection in configuration file looks like:

```json
      "attributes": [
        {
          "messageTypeFilter": "MeterValues,",
          "key": "temp",
          "value": "${meter_value[:].sampled_value[:].value}"
        },
        {
          "messageTypeFilter": "MeterValues,",
          "key": "vendorId",
          "value": "${connector_id}"
        }
      ]
```

#### Subsection time series

This subsection contains general settings for processing data interpreted as time series.

| **Parameter**         | **Default value**                            | **Description**                                                                                                                                                  |
|:----------------------|:---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| timeseries            |                                              | This subsection contains parameters of the incoming message, to be interpreted as telemetry for the device.                                                      |
| ... messageTypeFilter | **MeterValues,**                             | List of allowed message types divided by comma.                                                                                                                  |
| ... key               | **temp**                                     | Telemetry name, to be sent to ThingsBoard instance.                                                                                                              |
| ... value             | **${meter_value[:].sampled_value[:].value}** | Simple JSON expression, is used for looking up value in the incoming message, which will then be sent to ThingsBoard instance as the value of the key parameter. |
| ---                   |                                              |                                                                                                                                                                  |

This subsection in configuration file looks like:

```json
      "timeseries": [
        {
          "messageTypeFilter": "DataTransfer,",
          "key": "temp",
          "value": "${data.temp}"
        }
      ]
```

#### Attribute updates subsection

This configuration section is optional. ThingsBoard allows the provisioning of device attributes and fetches some of them from 
the device application. You can treat this as a remote configuration for devices, enabling them to request 
shared attributes from ThingsBoard. See [user guide](/docs/reference/mqtt-api/#attributes-api) for more details.

The “attributeUpdates” configuration allows you to configure the format of the corresponding attribute data that will be 
sent to the Charge Point.

| **Parameter**          | **Default value**                               | **Description**                                                                               |
|:-----------------------|:------------------------------------------------|-----------------------------------------------------------------------------------------------|
| attributeOnThingsBoard | **sharedName**                                  | Shared attribute name.                                                                        |
| valueExpression        | **{\"${attributeKey}\":\"${attributeValue}\"}** | JSON-path expression is used for creating the message data that will be sent to Charge Point. |
| ---                    |                                                 |                                                                                               |

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

ThingsBoard allows sending RPC commands to the device connected to ThingsBoard directly or via Gateway.

Configuration, provided in this section is used for sending RPC requests from ThingsBoard to Charge Point.

| **Parameter**   | **Default value** | **Description**                                                                         |
|:----------------|:------------------|-----------------------------------------------------------------------------------------|
| methodRPC       | **rpcMethod1**    | RPC method name.                                                                        |
| withResponse    | **true**          | Boolean value that determines whether to send response back to ThingsBoard.             |
| valueExpression | **${params}**     | JSON-path expression uses for creating the message data that will send to Charge Point. |
| ---             |                   |                                                                                         |

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
