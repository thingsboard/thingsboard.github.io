Let's add an **MQTT connector**, which will subscribe to some data topics using the 
demo broker with a built-in data generator and send data to the gateway.

### Setup demo MQTT broker

As a demo MQTT broker, we will use docker image, that can be installed and run using the following commands:

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
docker run -it --net=container:$(docker inspect -f '{{containerId}}' ${TB_GATEWAY_CONTAINER_NAME}) thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

After running docker image, you can see the following logs in your terminal:

![](/images/gateway/dashboard/run-demo-mqtt-broker-image.png)

### Setup connector

Copy the following connector configuration (we will use it later):  

```json
{
  "broker": {
    "name": "Demo Broker",
    "host": "localhost",
    "port": 1884,
    "clientId": "ThingsBoard_gateway",
    "version": 5,
    "maxMessageNumberPerWorker": 10,
    "maxNumberOfWorkers": 100,
    "sendDataOnlyOnChange": false,
    "security": {
      "type": "anonymous"
    }
  },
  "mapping": [
    {
      "topicFilter": "data/",
      "converter": {
        "type": "json",
        "deviceNameJsonExpression": "Device Demo",
        "deviceTypeJsonExpression": "default",
        "sendDataOnlyOnChange": false,
        "timeout": 60000,
        "attributes": [
          {
            "type": "integer",
            "key": "frequency",
            "value": "${frequency}"
          },
          {
            "type": "integer",
            "key": "power",
            "value": "${power}"
          }
        ],
        "timeseries": [
          {
            "type": "integer",
            "key": "temperature",
            "value": "${temperature}"
          },
          {
            "type": "integer",
            "key": "humidity",
            "value": "${humidity}"
          }
        ]
      }
    }
  ],
  "connectRequests": [
    {
      "topicFilter": "sensor/connect",
      "deviceNameJsonExpression": "${SerialNumber}"
    },
    {
      "topicFilter": "sensor/+/connect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/connect)"
    }
  ],
  "disconnectRequests": [
    {
      "topicFilter": "sensor/disconnect",
      "deviceNameJsonExpression": "${SerialNumber}"
    },
    {
      "topicFilter": "sensor/+/disconnect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/disconnect)"
    }
  ],
  "attributeRequests": [],
  "attributeUpdates": [],
  "serverSideRpc": []
}
```
{:.copy-code.expandable-20}

To create a connector, use the following steps:

{% assign addNewConnector = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click "**Connectors configuration**" button on the right panel.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-mqtt-8-ce.png,
        title: Click the "**+**" button, fill in "**Name**", "**Type**" and "**Logging level**" fields, paste your connector configuration into **Configuration** field and click on **Save** button.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-mqtt-9-ce.png,
        title: Connector has been successfully added.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-mqtt-10-ce.png,
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
        image: /images/gateway/dashboard/gateway-getting-started-mqtt-logs-11-ce.png,
        title: Click on logs icon to open connector logs page.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-mqtt-logs-12-ce.png,
        title: You can see the "**Logs**" table that consists of "**Created time**", "**Status**" and "**Message**" columns.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured MQTT connector.
