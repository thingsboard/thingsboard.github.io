Let's add a **Modbus connector**, which will read some data from the demo slave to the 
created gateway.

### Setup demo server

As a demo simulation slave, we will use docker image, that can be installed and run using the following command:

```shell
docker run -it -p 5021:5021 thingsboard/tb-gw-modbus-server:latest
```
{:.copy-code}

After running docker image, you can see the following logs in your terminal:

![](https://img.thingsboard.io/gateway/dashboard/run-demo-modbus-server.png)

### Setup connector

Copy the following connector configuration (we will use it later):  

```json
{
  "master": {
    "slaves": [
      {
        "host": "host.docker.internal",
        "port": 5021,
        "type": "tcp",
        "method": "socket",
        "timeout": 35,
        "byteOrder": "LITTLE",
        "wordOrder": "LITTLE",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 5000,
        "unitId": 1,
        "deviceName": "Demo Device",
        "deviceType": "default",
        "sendDataOnlyOnChange": false,
        "connectAttemptTimeMs": 5000,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 300000,
        "attributes": [
          {
            "tag": "frequency",
            "type": "8int",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 4
          },
          {
            "tag": "power",
            "type": "16float",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 8
          }
        ],
        "timeseries": [
          {
            "tag": "humidity",
            "type": "8uint",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 4
          },
          {
            "tag": "temperature",
            "type": "16uint",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 4
          }
        ],
        "attributeUpdates": [],
        "rpc": []
      }
    ]
  }
}
```
{:.copy-code.expandable-20}

This Modbus connector configuration sets up a master to communicate with a slave device located at 
**"host.docker.internal"** on port 5021 using TCP. The configuration includes specifications for data retrieval such as 
byte and word order, timeout, and polling period. The slave device, named **"Demo Device"** is configured to handle 
Modbus function code 4 requests. Attribute and timeseries mappings are defined for parameters like **frequency**, **power**, 
**humidity**, and **temperature**. Additionally, settings for connection attempts, retries, and wait times after failed 
attempts are provided.

To create a connector, follow these steps:

{% assign addNewConnector = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click "**Connectors configuration**" button on the right panel.
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-8-ce.png,
        title: Click the "**+**" button, fill in "**Name**", "**Type**" and "**Logging level**" fields, paste your connector configuration into **Configuration** field and click on **Save** button.
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-9-ce.png,
        title: Connector has been successfully added.
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-10-ce.png,
        title: Toggle the switch to enable the connector.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

Following the steps outlined, your gateway will receive and apply the new configuration. It will then synchronize 
its state with the remote server. You can view the synchronization status of the connector configuration 
in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with 
the remote settings.

Also, you can see the connector logs to make sure that the connector works, for this purpose, follow these steps:
{% assign seeConnectorLogs = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-11-ce.png,
        title: Click on logs icon to open connector logs page.
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-logs-12-ce.png,
        title: You can see the "**Logs**" table that consists of "**Created time**", "**Status**" and "**Message**" columns.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured Modbus connector.
