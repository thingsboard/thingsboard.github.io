Let's add an **OPC-UA connector**, which will read some data from the demo server to the 
created gateway.

### Setup demo server

As a demo simulation server, we will use docker image, that can be installed and run using the following command:

```shell
docker run -it -p 4840:4840 thingsboard/tb-gw-opcua-server:latest
```
{:.copy-code}

After running docker image, you can see the following logs in your terminal:

![](/images/gateway/dashboard/run-demo-opcua-server.png)

### Setup connector

This OPC-UA connector configuration establishes a connection to a server named **"OPC-UA Demo Server"** at 
**"opc.tcp://host.docker.internal:4840/freeopcua/server/"**. The configuration specifies various settings, including 
timeouts, scan periods, and security mechanisms such as **"Basic128Rsa15"** with anonymous identity.

The mapping section defines how OPC-UA nodes are mapped to devices and their attributes and time series. In this case, 
a device with the name **"Demo Device"** and type **"default"** is mapped to nodes under **"Root.Objects.MyObject"**. 
Attributes such as **frequency** and **power**, as well as time series like **temperature** and **humidity**, 
are mapped to specific paths in the OPC-UA server. Additionally, the configuration supports RPC methods and 
attribute updates.

To create a connector, follow these steps:

{% assign addNewConnector = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click on "**Connectors configuration**" button on the right panel;
    ===
        image: /images/gateway/dashboard/gateway-getting-started-8-ce.png,
        title: Click the "**+ Add connector**" button;
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-9-ce.png,
        title: Choose "**OPCUA**" connector type from the dropdown, fill in "**Name**" field, choose "**Logging level**" to INFO, disable "**Fill configuration with default values**" field and click on "**Add**" button;
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-10-ce.png,
        title: Connector created.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

To go to the Modbus connector configuration, navigate to the "Configuration" tab.

{% assign configurationTab = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-11-ce.png,
        title: To go to the Modbus connector configuration, navigate to the "Configuration" tab.
'
%}

{% include images-gallery.liquid imageCollection=configurationTab %}

Default OPC-UA connector configuration:

```json
{
  "server": {
    "name": "OPC-UA Demo Server",
    "url": "opc.tcp://host.docker.internal:4840/freeopcua/server/",
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
        "deviceNamePattern": "Demo Device",
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

Following the steps outlined, your gateway will receive and apply the new configuration. It will then synchronize 
its state with the remote server. You can view the synchronization status of the connector configuration 
in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with 
the remote settings.

Also, you can see the connector logs to make sure that the connector works, for this purpose, follow these steps:
{% assign seeConnectorLogs = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-12-ce.png,
        title: Click on logs icon to open connector logs page.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-opc-ua-logs-13-ce.png,
        title: You can see the "**Logs**" table that consists of "**Created time**", "**Status**" and "**Message**" columns.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured OPC-UA connector.
