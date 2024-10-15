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

This Modbus connector configuration sets up a master to communicate with a slave device located at **"host.docker.internal"** on port 5021 using TCP. 
The configuration includes specifications for data retrieval such as byte and word order, timeout, and polling period. 
The slave device, named **"Demo Device"** is configured to handle Modbus function code 4 requests. 
Attribute and time series mappings are defined for parameters like **frequency**, **power**, **humidity**, and **temperature**. Additionally, settings for connection attempts, retries, and wait times after failed attempts are provided.

To create a connector, follow these steps:

{% assign addNewConnector = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click on "**Connectors configuration**" button on the right panel;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-8-ce.png,
        title: Click the "**+ Add connector**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-9-ce.png,
        title: Choose "**MODBUS**" connector type from the dropdown, fill in "**Name**" field, choose "**Logging level**" to "**INFO**", turn off the "**Fill configuration with default values**" option and click on "**Add**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-10-ce.png,
        title: Connector created.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

First, we need to add new slave and configure the connection to it. Let's start from the "**Master Connections**" tab. 
This section offers slave adding and detailed connection configuration options that contains several important fields, including connection type, host, port, unit ID, method, and other.

- Go to the "**Master Connections**" tab, and click "**Add Slave**" button;
- Fill in fields with the following values:

| **Field name**    | **Value**            |
|:------------------|:---------------------|
| Server Connection | TCP                  |
| Host              | host.docker.internal |
| Port              | 5021                 |
| Method            | Socket               |
| Unit ID           | 1                    |
| Device name       | Demo Device          |
| Device profile    | default              |
| ---               

{% assign addNewSlave = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/add-new-slave-1-ce.png,
        title: Go to the "**Master Connections**" tab, and click "**Add Slave**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/add-new-slave-2-ce.png,
        title: Fill in the fields with values taken from the documentation.
'
%}

{% include images-gallery.liquid imageCollection=addNewSlave %}

Now, we are ready to move to the "**Attributes**" section. The configuration in this unit provides settings for processing data on Modbus server. These settings will be interpreted in the ThingsBoard platform instance as attributes of the device.

Let&#39;s configure attribute section using the following steps:

- Click on "**pencil**" icon in the "**Attributes**" section;
- In the opened window, click on "**Add attribute**" button;
- Fill in the fields: 
  - Fill the "**Key**" field with "**frequency**";
  - Select the "**Type**" field to "**8int**";
  - Select the "**Function code**" to "**04 - Read Input Registers**";
  - Set "**Objects count**" to "**1**";
  - Set "**Address**" field to "**4**".

{% assign attributeConfiguration1 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-1-ce.png,
        title: Click on "**pencil**" icon in the "**Attributes**" section;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-2-ce.png,
        title: In the opened window, click on "**Add attribute**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-3-ce.png,
        title: Fill in the fields with values taken from the documentation.
'
%}

{% include images-gallery.liquid imageCollection=attributeConfiguration1 %}

Let&#39;s add another attribute. Collapse the recently added "frequency" attribute, click the "**Add attribute**" button, and fill in the fields with the following values, using the same process as before:

| **Field name** | **Value**   |
|:---------------|:------------|
| Key            | power       |
| Type           | 16float     |
| Function code  | 4           |
| Objects count  | 1           |
| Address        | 8           |
| ---            

Click the "**Apply**" button after you&#39;ve completed the "**Attributes**" section configuration.

{% assign attributeConfiguration2 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-4-ce.png,
        title: Collapse the recently added "frequency" attribute, and click "**Add attribute**" button to add another attribute;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-5-ce.png,
        title: Fill in the fields with values taken from the documentation. Then, click "**Apply**".
'
%}

{% include images-gallery.liquid imageCollection=attributeConfiguration2 %}

We finish with the "**Attributes**" section, so let&#39;s move to the "**Time series**" section. The configuration in this unit provides settings for processing data on Modbus server. These settings will be interpreted in ThingsBoard platform instance as time series of the device.

Let&#39;s configure time series section using the following steps:

- Click on "**pencil**" icon on "**Time series**" section.
- In the opened window, click on "**Add time series**" button;
- Fill in the fields:
  - Fill the "**Key**" field with "**humidity**";
  - Select the "**Type**" field to "**8uint**"; 
  - Select the "**Function code**" to "**04 - Read Input Registers**";
  - Set "**Objects count**" to "**1**"; 
  - Set "**Address**" field to "**4**".

{% assign timeSeriesConfiguration1 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-6-ce.png,
        title: Click on the "**pencil**" icon in "**Time series**" section;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-7-ce.png,
        title: In the opened window, click on "**Add time series**" button;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-8-ce.png,
        title: Fill in the fields with values taken from the documentation.
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesConfiguration1 %}

Let&#39;s add another time series. Collapse the recently added "**humidity**" time series, click the "**Add time series**" button, and fill in the fields with the following values, using the same process as before:

| **Field name** | **Value**   |
|:---------------|:------------|
| Key            | temperature |
| Type           | 16uint      |
| Function code  | 4           |
| Objects count  | 1           |
| Address        | 8           |
| ---            

{% assign timeSeriesConfiguration2 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-9-ce.png,
        title: Collapse the recently added "**humidity**" time series, and click "**Add time series**" button to add another time series;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/slave-configuration-10-ce.png,
        title: Fill in the fields with values taken from the documentation. Then, click "**Apply**".
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesConfiguration2 %}

The final view of your configured connector will look like on the following image. Click the "**Add**" button after you&#39;ve completed the configuration.

{% assign finalSlaveConfiguration = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/final-configured-slave-1-ce.png,
        title: The final view of your configured connector. Click the "**Add**" button after you&#39;ve completed the configuration.
'
%}

{% include images-gallery.liquid imageCollection=finalSlaveConfiguration %}

Finally, save the Modbus configuration by clicking the "**Save**" button.

{% assign finalSlaveConfiguration2 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/final-configured-slave-2-ce.png,
        title: Finally, the save Modbus configuration by clicking the "**Save**" button.
'
%}

{% include images-gallery.liquid imageCollection=finalSlaveConfiguration2 %}

Following the steps outlined, your gateway will receive and apply the new configuration. It will then synchronize its state with the remote server. 
You can view the synchronization status of the connector configuration in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with the remote settings.

{% assign finalSlaveConfiguration3 = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/final-configured-slave-3-ce.png,
        title: You can view the synchronization status of the connector configuration in the "**Configuration**" column, which will indicate whether the gateway is successfully aligned with the remote settings.
'
%}

{% include images-gallery.liquid imageCollection=finalSlaveConfiguration3 %}

Also, you can see the connector logs to make sure that the connector works, for this purpose, follow these steps:
{% assign seeConnectorLogs = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-12-ce.png,
        title: Click on "**logs**" icon to open connector logs page;
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-modbus-logs-13-ce.png,
        title: You can see the "**Logs**" table that consists of "**Created time**", "**Status**" and "**Message**" columns.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=seeConnectorLogs %}

For now, the gateway is ready to process data through the newly created and configured Modbus connector.