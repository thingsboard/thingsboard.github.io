Let's add a **Modbus connector**, which will read some data from the demo slave to the 
created gateway.

### Setup demo server

As a demo simulation slave, we will use docker image, that can be installed and run using the following commands:
```shell
docker ps
```
{:.copy-code}

Find your gateway container name as you can see on the following image and copy it:

![](/images/gateway/dashboard/copy-gateway-docker-container-name.png)

Create an environment variable using the following command, replace `YOUR_TB_GATEWAY_CONTAINER_NAME` with the copied 
gateway container name. Copy and run the provided command in your terminal:

```shell
export TB_GATEWAY_CONTAINER_NAME=YOUR_TB_GATEWAY_CONTAINER_NAME
```
{:.copy-code}

Copy and execute the following command in your terminal:

{% assign containerId = "{" | append: "{" | append: ".Id" | append: "}" | append: "}" %}

```shell
docker run -it --net=container:$(docker inspect -f '{{containerId}}' ${TB_GATEWAY_CONTAINER_NAME}) thingsboard/tb-gw-modbus-server:latest
```
{:.copy-code}

After running docker image, you can see the following logs in your terminal:

![](/images/gateway/dashboard/run-demo-modbus-server.png)

### Setup connector

Copy the following connector configuration (we will use it later):  

```json
{
  "master": {
    "slaves": [
      {
        "host": "localhost",
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
        "deviceName": "Device Demo",
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

To create a connector, use the following steps:

{% assign addNewConnector = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click "**Connectors configuration**" button on the right panel.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-modbus-8-ce.png,
        title: Click the "**+**" button, fill in "**Name**", "**Type**" and "**Logging level**" fields, paste your connector configuration into **Configuration** field and click on **Save** button.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-modbus-9-ce.png,
        title: Connector has been successfully added.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-modbus-10-ce.png,
        title: Toggle the switch to enable the connector.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

Following the steps outlined, your gateway will receive and apply the new configuration. It will then synchronize 
its state with the remote server. You can view the synchronization status of the connector configuration 
in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with 
the remote settings.

Also, you can see the connector logs to make sure that connector works, for this purpose, use the following steps:
{% assign seeConnectorLogs = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-modbus-logs-11-ce.png,
        title: Click on logs icon to open connector logs page.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-modbus-logs-12-ce.png,
        title: You can see the "**Logs**" table that consists of "**Created time**", "**Status**" and "**Message**" columns.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured Modbus connector.
