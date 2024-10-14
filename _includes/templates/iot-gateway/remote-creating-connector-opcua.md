Let's add an **OPC-UA connector**, which will read some data from the demo server to the 
created gateway.

### Setup demo server

As a demo simulation server, we will use docker image, that can be installed and run using the following command:

```shell
docker run -it -p 4840:4840 thingsboard/tb-gw-opcua-server:latest
```
{:.copy-code}

After running docker image, you can see the following logs in your terminal:

![](https://img.thingsboard.io/gateway/dashboard/run-demo-opcua-server.png)

### Setup connector

This OPC-UA connector configuration establishes a connection to a server named **"OPC-UA Demo Server"** at **"opc.tcp://host.docker.internal:4840/freeopcua/server/"**. 
The configuration specifies various settings, including timeouts, scan periods, and security mechanisms such as **"Basic128Rsa15"** with anonymous identity.

The mapping section defines how OPC-UA nodes are mapped to devices and their attributes and time series. In this case, a device with the name **"Demo Device"** and type **"default"** is mapped to nodes under **"Root.Objects.MyObject"**. 
Attributes such as **frequency** and **power**, as well as time series like **temperature** and **humidity**, are mapped to specific paths in the OPC-UA server. 
Additionally, the configuration supports RPC methods and attribute updates.

To create a connector, follow these steps:

{% assign addNewConnector = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click on "**Connectors configuration**" button on the right panel;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-8-ce.png,
        title: Click the "**+ Add connector**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-opc-ua-9-ce.png,
        title: Choose "**OPCUA**" connector type from the dropdown, fill in "**Name**" field, choose "**Logging level**" to "**INFO**", turn off the "**Fill configuration with default values**" option and click on "**Add**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-opc-ua-10-ce.png,
        title: Connector created.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

First, we need to configure the connection to the demo OPC-UA server. Let's start from the "**Server**" tab. 
This section offers detailed connection configuration options and contains several important fields, including server endpoint url, security settings, scan period, poll period, subscriptions settings and other.

- Go to the "**Server**" tab, and fill in the fields with following values:

| **Field name**       | **Value**                                             |
|:---------------------|:------------------------------------------------------|
| Server endpoint url  | opc.tcp://host.docker.internal:4840/freeopcua/server/ |
| Enable subscription  | false                                                 |
| Security             | Anonymous                                             |
| Poll period          | 5000                                                  |
| Security policy      | Basic128RSA15                                         |
| ---                  

{% assign serverConfiguration = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/server-configuration-1-ce.png,
        title: Go to the "**Server**" tab, and fill in the fields with the value taken from the documentation.
'
%}

{% include images-gallery.liquid imageCollection=serverConfiguration %}

Now, we are ready to move to the "**Data mapping**" section. This configuration section contains list of nodes that the gateway will subscribe to after connecting to the OPC-UA server, along with settings for processing data from these nodes.

Let&#39;s add new node using the following steps:

- Go to the "**Data mapping**" tab, and click on "**Add mapping**" button.
- In the opened window, fill in the "**Device node**" with "**Path**" type and "**Root\.Objects\.MyObject**" value;
- For "**Device**" subsection use the following options/values:
    - The "**Name**" row: select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**Device Demo**" value;
    - The "**Profile name**" row: select "**Constant**" in the "**Source**" dropdown field, fill in the "**Value / Expression**" field with the "**default**" value.

{% assign dataMappingConfiguration1 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-1-ce.png,
        title: Go to the "**Data mapping**" tab, and click "**Add mapping**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-2-ce.png,
        title: Fill in the fields with values taken from the documentation.
'
%}

{% include images-gallery.liquid imageCollection=dataMappingConfiguration1 %}

Let&#39;s move to "**Attributes**" section to add "frequency" and "power" attributes. The configuration in this unit provides settings for processing data from OPC-UA server. These settings will be interpreted in ThingsBoard platform instance as attributes of the device. Also we will use path for finding corresponding node.

{% capture difference %}
A **Path** type refers to the hierarchical address within the OPC-UA server's namespace. It is used to navigate to specific nodes in the server. The path for the attribute/time series value can be absolute or relative (relative in our case).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let&#39;s configure attribute section using the following steps:

- Click on the "**pencil**" icon in the "**Attributes**" section;
- In the opened window, click on the "**Add attribute**" button;
- Fill in the "**Key**" field with the "**frequency**", select the "**Type**" field to the "**Path**", and fill in the "**Value**" with the "**${Frequency}**".

{% assign dataMappingConfiguration2 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-3-ce.png,
        title: Click on the "**pencil**" icon in the "**Attributes**" section;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-4-ce.png,
        title: In the opened window, click on the "**Add attribute**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-5-ce.png,
        title: Fill in the "**Key**" field with the "**frequency**", select the "**Type**" field to the "**Path**", and fill in the "**Value**" with the "**${Frequency}**".
'
%}

{% include images-gallery.liquid imageCollection=dataMappingConfiguration2 %}

Let&#39;s add another attribute. Collapse the recently added "frequency" attribute, click the "**Add attribute**" button, and fill in the fields with the following values, using the same process as before:

| **Field name** | **Value** |
|:---------------|:----------|
| Key            | power     |
| Type           | Path      |
| Value          | ${Power}  |
| ---            

Click the "**Apply**" button after you&#39;ve completed the configuration.

{% assign dataMappingConfiguration3 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-6-ce.png,
        title: Collapse the recently added "frequency" attribute, and click "**Add attribute**" button to add another attribute;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-7-ce.png,
        title: Fill in the fields with values taken from the documentation. Then, click "**Apply**".
'
%}

{% include images-gallery.liquid imageCollection=dataMappingConfiguration3 %}

We finish with the "**Attributes**" section, so let&#39;s move to the "**Time series**" section. The configuration in this unit provides settings for processing data from the OPC-UA server. These settings will be interpreted in ThingsBoard platform instance as time series of the device.

Let&#39;s configure time series section using the following steps:

- Click on the "**pencil**" icon in the "**Time series**" section;
- In the opened window, click on the "**Add time series**" button;
- Fill in the fields:
  - Fill in the "**Key**" field with the "**temperature**";
  - Select the "**Type**" field to the "**Path**";
  - Fill in the "**Value**" with "**${Temperature}**".

{% assign dataMappingConfiguration4 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-8-ce.png,
        title: Click on the "**pencil**" icon in "**Time series**" section;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-9-ce.png,
        title: In the opened window, click on "**Add time series**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-10-ce.png,
        title: Fill in the fields with values taken from the documentation.
'
%}

{% include images-gallery.liquid imageCollection=dataMappingConfiguration4 %}

Let&#39;s add another attribute. Collapse the recently added "**temperature**" time series, click the "**Add time series**" button, and fill in the fields with the following values, using the same process as before:

| **Field name** | **Value**   |
|:---------------|:------------|
| Key            | humidity    |
| Type           | Path        |
| Value          | ${Humidity} |
| ---            

{% assign dataMappingConfiguration5 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-11-ce.png,
        title: Collapse the recently added "**temperature**" time series, and click "**Add time series**" button to add another time series;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/data-mapping-configuration-12-ce.png,
        title: Fill in the fields with values taken from the documentation. Then, click "**Apply**".
'
%}

{% include images-gallery.liquid imageCollection=dataMappingConfiguration5 %}

The final view of your configured connector will look like on the following image. Click the "**Add**" button after you&#39;ve completed the configuration.

{% assign finalDataMappingConfiguration1 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/final-configured-data-mapping-1-ce.png,
        title: The final view of your configured connector. Click the "**Add**" button after you&#39;ve completed the configuration.
'
%}

{% include images-gallery.liquid imageCollection=finalDataMappingConfiguration1 %}

Finally, save the OPC-UA configuration by clicking the "**Save**" button.

{% assign finalDataMappingConfiguration2 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/final-configured-data-mapping-2-ce.png,
        title: Finally, the save OPC-UA configuration by clicking the "**Save**" button.
'
%}

{% include images-gallery.liquid imageCollection=finalDataMappingConfiguration2 %}

Following the steps outlined, your gateway will receive and apply the new configuration. It will then synchronize its state with the remote server.
You can view the synchronization status of the connector configuration in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with the remote settings.

{% assign finalDataMappingConfiguration3 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/final-configured-data-mapping-3-ce.png,
        title: You can view the synchronization status of the connector configuration in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with the remote settings.
'
%}

{% include images-gallery.liquid imageCollection=finalDataMappingConfiguration3 %}

Also, you can see the connector logs to make sure that the connector works, for this purpose, follow these steps:
{% assign seeConnectorLogs = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-opc-ua-12-ce.png,
        title: Click on logs icon to open connector logs page;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-opc-ua-logs-13-ce.png,
        title: You can see the "**Logs**" table that consists of "**Created time**", "**Status**" and "**Message**" columns.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured OPC-UA connector.