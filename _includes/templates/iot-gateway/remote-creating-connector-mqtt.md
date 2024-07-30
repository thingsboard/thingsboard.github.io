Let's add an **MQTT connector**, which will subscribe to some data topics using the 
demo broker with a built-in data generator and send data to the gateway.

### Setup demo MQTT broker

As a demo MQTT broker, we will use docker image, that can be installed and run using the following command:

```shell
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

After running docker image, you can see the following logs in your terminal:

![](https://img.thingsboard.io/gateway/dashboard/run-demo-mqtt-broker-image.png)

### Setup connector

MQTT connector will establish a connection to a broker named **“Demo Broker”** at **“host.docker.internal”** on port **1884**, using an anonymous security type. 
It will include a data mapping for the **“data/”** topic, specifying a JSON converter and defining attribute and time series mappings for device data. 
Additionally, it will handle connect and disconnect requests for sensors with expressions to extract device names from topic filters.

To create a connector, follow these steps:

{% assign addNewConnector = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click on "**Connectors configuration**" button on the right panel;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-8-ce.png,
        title: Click the "**+ Add connector**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-mqtt-9-ce.png,
        title: Choose "**MQTT**" connector type from the dropdown, fill in "**Name**" field, choose "**Logging level**" to INFO, disable "**Fill configuration with default values**" field and click on "**Add**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-mqtt-10-ce.png,
        title: Connector created.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

First, we need to configure the connection to the demo broker. Let’s start from the "**Connection to broker**" section. 
This section offers detailed connection configuration options and contains several important fields, including host, port, MQTT version, client ID, and security settings. 
The **host** field specifies the address of the broker, while the **port** field indicates the communication port. The **MQTT version** field ensures compatibility with the protocol version being used. The **client ID** uniquely identifies the client, and the **security** settings provides configuration for client authorization at MQTT Broker.

Fill in the following fields with values:

| **Field name** | **Value**            |
|:---------------|:---------------------|
| Host           | host.docker.internal |
| Port           | 1884                 |
| MQTT version   | 5                    |
| Client ID      | randomly generated   |
| Security       | Anonymous            |
| ---            

{% assign connectionToBroker = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/connection-to-broker-section-1-ce.png,
        title: First, we need to configure the connection to the demo broker. Let’s start from the "**Connection to broker**" section. This section offers detailed connection configuration options and contains several important fields, including host, port, MQTT version, client ID, and security settings. The **host** field specifies the address of the broker, while the **port** field indicates the communication port. The **MQTT version** field ensures compatibility with the protocol version being used. The **client ID** uniquely identifies the client, and the **security** settings provides configuration for client authorization at MQTT Broker. Then, click "Save".
'
%}

{% include images-gallery.liquid imageCollection=connectionToBroker %}

<br>
Now, we are ready to move to the "**Data mapping**" section. This configuration section contains an array of topics that the gateway will subscribe to after connecting to the broker, along with settings about processing incoming messages (converter).

Let's configure data map using the following steps:
- Click on "**Add mapping**" button
- In the opened window, fill in the "**Topic filter**" field with "**data/**", select the "**QoS**" field to "**0 - At most once**", and select the "**Payload type**" to **JSON**.

{% assign dataMapping1 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-0-ce.png,
        title: Click "**Connectors configuration**" button on the right panel.
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-1-ce.png,
        title: In the opened window, fill in the "**Topic filter**" field with "**data/**", select the "**QoS**" field to "**0 - At most once**", and select the "**Payload type**" to **JSON**.
'
%}

{% include images-gallery.liquid imageCollection=dataMapping1 %}

- Scroll down to "**Data conversion**" section:
  - For "**Device**" subsection use the following options/values:
    - In the "**Name**" row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**Device Demo**" value.
    - In the "**Profile name**" row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**default**" value.

{% assign dataMapping2 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-2-ce.png,
        title: Scroll down to "**Data conversion**" section. For "**Device**" subsection use the following options/values: In the **Name** row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**Device Demo**" value. In the "**Profile name**" row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**default**" value.
'
%}

{% include images-gallery.liquid imageCollection=dataMapping2 %}

  - Click on pencil icon opposite to "**Attributes**" subsection and use the following options/values in the opened window:
    - Click on "**Add attribute**" button and fill in "**Key**" field with "**frequency**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${frequency}**" value.
    - Click on "**Add attribute**" button and fill in "**Key**" field with "**power**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${power}**" value.
    - Click on "**Apply**" button.

{% assign dataMapping3 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-3-ce.png,
        title: Click on pencil icon opposite to "**Attributes**" subsection;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-4-ce.png,
        title: Click on "**Add attribute**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-5-ce.png,
        title: Fill in "**Key**" field with "**frequency**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${frequency}**" value. Click on "**Add attribute**" button again;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-6-ce.png,
        title: Fill in "**Key**" field with "**power**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${power}**" value. Click on "**Apply**" button.
'
%}

{% include images-gallery.liquid imageCollection=dataMapping3 %} 

  - Click on pencil icon opposite to "**Time series**" subsection and use the following options/values in the opened window:
    - Click on "**Add time series**" button and fill in "**Key**" field with "**temperature**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${temperature}**" value.
    - Click on "**Add time series**" button and fill in "**Key**" field with "**humidity**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${humidity}**" value.
    - Click on "**Apply**" button.
- Click "**Add**" button. Data mapping added.

{% assign dataMapping4 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-7-ce.png,
        title: Click on pencil icon opposite to "**Time series**" subsection;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-8-ce.png,
        title: Click on "**Add time series**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-9-ce.png,
        title: Fill in "**Key**" field with "**temperature**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${temperature}**" value. Click on "**Add time series**" button again;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-10-ce.png,
        title: Fill in "**Key**" field with "**humidity**" value, select "**Integer**" option in "**Type**" field and fill in "**Value**" field with "**${humidity}**" value. Click "**Apply**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-11-ce.png,
        title: Click "**Add**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-12-ce.png,
        title: Data mapping added.
'
%}

{% include images-gallery.liquid imageCollection=dataMapping4 %}

<br>
"**Requests mapping**" section of the configuration outlines an array that includes all the supported requests for both the gateway and ThingsBoard:
- connect requests;
- disconnect requests;
- attribute requests;
- attribute updates;
- RPC commands.

But for now, we need only connect and disconnect requests. Let's configure requests map using the following steps:
- Click on "**Add mapping**" button;
- In the opened window, select "**Connect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/connect**" value. For "**Device**" subsection use the following options/values:
  - In the "**Name**" row, select "**Extract from message**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**${SerialNumber}**" value.
  - In the "**Profile name**" row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**default**" value.
- Click on "**Add**" button.

{% assign requestsMapping = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-1-ce.png,
        title: Click on "**Add mapping**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-2-ce.png,
        title: In the opened window, select "**Connect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/connect**" value. For "**Device**" subsection use the following options/values: in the "**Name**" row, select "**Extract from message**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**${SerialNumber}**" value; in the "**Profile name**" row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**default**" value. Click on "**Add**" button;
  ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-3-ce.png,
        title: Mapping added.
'
%}

{% include images-gallery.liquid imageCollection=requestsMapping %}

Now, let's add another connect request using the following steps:

- Click on "**+**" button;
- In the opened window, select "**Connect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/+/connect**" value. For "**Device**" subsection use the following options/values:
  - In the "**Name**" row, select "**Extract from topic**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**(?<=sensor\/)(.*?)(?=\/connect)**" value.
  - In the "**Profile name**" row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**default**" value.
- Click on "**Add**" button.

{% assign requestsMapping2 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-4-ce.png,
        title: Click on "**+**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-5-ce.png,
        title: select "**Connect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/+/connect**" value. For "**Device**" subsection use the following options/values: in the "**Name**" row, select "**Extract from topic**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**(?<=sensor\/)(.*?)(?=\/connect)**" value; in the "**Profile name**" row, select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**default**" value. Click on "**Add**" button.;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-6-ce.png,
        title: Mapping added.
'
%}

{% include images-gallery.liquid imageCollection=requestsMapping2 %}

And finally, let's add disconnect requests. For this purpose, follow the steps below:

- Click on "**+**" button;
- In the opened window, select "**Disconnect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/disconnect**" value. For "**Device**" subsection use the following options/values:
    - In the "**Name**" row, select "**Extract from message**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**${SerialNumber}**" value.
- Click on "**Add**" button.

{% assign requestsMapping3 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-7-ce.png,
        title: Click on "**+**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-8-ce.png,
        title: In the opened window, select "**Disconnect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/disconnect**" value. For "**Device**" subsection use the following options/values: in the "**Name**" row, select "**Extract from message**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**${SerialNumber}**" value. Click on "**Add**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-9-ce.png,
        title: Mapping added.
'
%}

{% include images-gallery.liquid imageCollection=requestsMapping3 %}

Now, let's add another disconnect request using the following steps:

- Click on "**+**" button;
- In the opened window, select "**Disconnect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/+/disconnect**" value. For "**Device**" subsection use the following options/values:
    - In the "**Name**" row, select "**Extract from topic**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**(?<=sensor\/)(.*?)(?=\/disconnect)**" value.
- Click on "**Add**" button.

{% assign requestsMapping4 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-10-ce.png,
        title: Click on "**+**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-11-ce.png,
        title: In the opened window, select "**Disconnect request**" in the "**Request type**" dropdown field, fill in "**Topic filter**" with "**sensor/+/disconnect**" value. For "**Device**" subsection use the following options/values: in the "**Name**" row, select "**Extract from topic**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**(?<=sensor\/)(.*?)(?=\/disconnect)**" value. Click on "**Add**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/requests-mapping-12-ce.png,
        title: Mapping added. Click "**Save**" button.
'
%}

{% include images-gallery.liquid imageCollection=requestsMapping4 %}

- Click on "**Save**" button.

Following the steps outlined, your gateway will receive and apply the new configuration. 
It will then synchronize its state with the remote server. You can view the synchronization status of the connector configuration in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with the remote settings.

Also, you can see the connector logs to make sure that the connector works, for this purpose, follow these steps:
{% assign seeConnectorLogs = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-mqtt-11-ce.png,
        title: Click on logs icon to open connector logs page;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-mqtt-logs-12-ce.png,
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
