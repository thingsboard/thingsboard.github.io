Let's add an **OPC-UA connector**, which will read some data from the demo server to the 
created gateway.

As a demo simulation server, we will use docker image, that can be installed and run using the following commands:

```shell
docker ps
```
{:.copy-code}

Find your gateway container name as you can see on the following image and copy it:

![](/images/gateway/dashboard/copy-gateway-docker-container-name.png)

Create environment variable using the following command, replace `YOUR_TB_GATEWAY_CONTAINER_NAME` with copied gateway container name:

```shell
export TB_GATEWAY_CONTAINER_NAME=YOUR_TB_GATEWAY_CONTAINER_NAME
```
{:.copy-code}

Copy and execute the following command in your terminal:

{% assign containerId = "{" | append: "{" | append: ".Id" | append: "}" | append: "}" %}

```shell
docker run -it --net=container:$(docker inspect -f '{{containerId}}' ${TB_GATEWAY_CONTAINER_NAME}) tb-demo-opcua-server:latest
```
{:.copy-code}

After running docker image, you can see the following logs in your terminal:

![](/images/gateway/dashboard/run-demo-opcua-server.png)

Copy the following connector configuration (we will use it later):  

```json
{
  "server": {
    "name": "OPC-UA Demo Server",
    "url": "opc.tcp://localhost:4840/freeopcua/server/",
    "timeoutInMillis": 5000,
    "scanPeriodInMillis": 5000,
    "disableSubscriptions": false,
    "subCheckPeriodInMillis": 100,
    "showMap": true,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    },
    "mapping": [
      {
        "deviceNodePattern": "Root\\.Objects\\.MyObject",
        "deviceNamePattern": "Device Demo",
        "deviceTypePattern": "default",
        "attributes": [
          {
            "key": "frequency",
            "path": "${Frequency}"
          },
          {
            "key": "power",
            "path": "${Power}"
          }
        ],
        "timeseries": [
          {
            "key": "temperature",
            "path": "${Temperature}"
          },
          {
            "key": "humidity",
            "path": "${Humidity}"
          }
        ],
        "rpc_methods": [],
        "attributes_updates": []
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
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-8-ce.png,
        title: Fill in "**Name**", "**Type**" and "**Logging level**" fields, paste your connector configuration into **Configuration** field and click on **Save** button.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-9-ce.png,
        title: Connector added.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-10-ce.png,
        title: Enable created connector.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

After the steps above, your gateway will receive the configuration, apply it, and synchronize the state with the remote 
(you will be able to see the synchronization status of connector configuration in the **Configuration** column).

Also, you can see the connector logs to make sure that connector works, for this purpose, use the following steps:
{% assign seeConnectorLogs = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-11-logs-ce.png,
        title: Click on logs icon to open connector logs page.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-logs-12-ce.png,
        title: See the logs.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured OPC-UA connector.
