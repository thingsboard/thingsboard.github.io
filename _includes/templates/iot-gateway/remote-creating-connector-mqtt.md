Let's add an **MQTT connector**, which will subscribe to some data topics using the 
demo broker with a built-in data generator and send data to the gateway.

### Setup demo MQTT broker

As a demo MQTT broker, we will use docker image, that can be installed and run using the following command:

```shell
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
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
    "host": "host.docker.internal",
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
        "deviceNameJsonExpression": "Demo Device",
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

This MQTT connector configuration establishes a connection to a broker named **"Demo Broker"** at **"host.docker.internal"** on 
port **1884**, using an anonymous security type. It includes a mapping for the **"data/"** topic, specifying a JSON converter 
and defining attribute and timeseries mappings for device data. Additionally, it handles connect and disconnect 
requests for sensors with expressions to extract device names from topic filters.

To create a connector, follow these steps:

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

Also, you can see the connector logs to make sure that the connector works, for this purpose, follow these steps:
{% assign seeConnectorLogs = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-mqtt-11-ce.png,
        title: Click on logs icon to open connector logs page.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-mqtt-logs-12-ce.png,
        title: You can see the "**Logs**" table that consists of "**Created time**", "**Status**" and "**Message**" columns.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured MQTT connector.

Let's publish data to the MQTT Broker defined in the configuration above, you can follow these steps using a tool like 
**mosquitto_pub** or an MQTT client library in your preferred programming language. In this example, we'll use the 
**mosquitto_pub** command-line tool.

1.Ensure that the Mosquitto MQTT clients are installed on your system. Typically, you can install them using the 
package manager of your operating system:
- For Ubuntu:
    ```bash
    sudo apt-get install mosquitto-clients
    ```
    {:.copy-code}

- For Windows:

    Download the Mosquitto client tools from [the official website](https://mosquitto.org/download/).

    Install the tools, ensuring that the installation directory is added to the system's PATH.
- For MacOS:
    ```bash
    brew install mosquitto
    ```
    {:.copy-code}

2.Use the mosquitto_pub command to publish data to a specific MQTT topic. In this case, we'll use the "data/" topic as defined in the configuration:
```bash
mosquitto_pub -h localhost -p 1884 -t data/ -m '{"frequency": 50, "power": 100, "temperature": 25, "humidity": 60}'
```
{:.copy-code}

Where:
- `-h` - specifies the MQTT broker's host address;
- `-p` - specifies the MQTT broker's port;
- `-t` - specifies the MQTT topic to publish to ("data/" in our case);
- `-m` - specifies the payload or message to publish. It should be in JSON format, following the structure defined in the mapping section of your configuration.

Adjust the payload values as needed.
