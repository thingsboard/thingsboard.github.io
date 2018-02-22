---
layout: docwithnav
assignees:
- ashvayka
title: Getting started with ThingsBoard IoT Gateway
description: Write your first IoT project using ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide covers initial IoT Gateway installation and configuration.
We will connect IoT Gateway to ThingsBoard server and visualize some basic gateway statistics: the amount of devices connected and messages processed.
We will also configure MQTT and OPC-UA extension in order to subscribe to device data feed from external devices or applications.  

### Prerequisites

If you don't have access to a running ThingsBoard instance, use either [**Live Demo**](https://demo.thingsboard.io/signup) or
[**Installation Guide**](/docs/user-guide/install/installation-options/) 
to fix this. 

**NOTE** ThingsBoard version 1.1 or greater is required.

## Step 1: Choose installation option

Browse available gateway [**installation options**](/docs/iot-gateway/installation/) and choose the most suitable installation guide.

## Step 2: Follow installation steps

Follow steps (1-3) in the chosen gateway installation guide. The Gateway configuration steps are covered below.
 
## Step 3: Gateway provisioning

In order to connect your IoT gateway to ThingsBoard server, you need to provision gateway credentials first. We will use access token credentials as the most simple one.
See [device authentication options](/docs/user-guide/device-credentials/) for more details.

Login as tenant administrator. Use [default credentials](/docs/samples/demo-account/#demo-tenant) in case of local ThingsBoard server.
Open **Devices** and click on big red "+" button in the bottom right corner.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-page.png)
{: refdef} 

Populate your gateway name and select "Is gateway" checkbox.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-add.png)
{: refdef} 

**NOTE:** Gateway and device names should be unique in the scope of a tenant.

Open new device card and click on "Copy Access Token" button.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-token.png)
{: refdef} 

## Step 4: Gateway configuration

Thingsboard Gateway supports per-tenant configuration. This means that each tenant can have own connectivity and extensions configuration.

Navigate to the gateway configuration folder and edit **tb-gateway.yml** file.
```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```
  
Change **gateway.connection.host** and **gateway.connection.port** properties to your ThingsBoard host (leave without modifications in case of live demo instance).

Change **gateway.connection.security.accessToken** property to your access token that was copied during step 3.

You gateway configuration should look similar to this file:

```text

gateways:
  tenants:
    -
      label: "Tenant"
      reporting:
        interval: 60000
      persistence:
        type: file
        path: storage
        bufferSize: 1000
      connection:
        host: "${GATEWAY_HOST:YOUR_HOST}"
        port: 1883
        retryInterval: 3000
        maxInFlight: 1000
        security:
          accessToken: "${GATEWAY_ACCESS_TOKEN:YOUR_TOKEN}"    
      remoteConfiguration: true

server:
  address: "0.0.0.0"
  port: "9090"
  
updates:
enabled: "${UPDATES_ENABLED:true}"

```

**remoteConfiguration** property specifies whether this tenant's extensions configuration should be managed remotely (through ThingsBoard GUI)
or locally (through current configuration file)



## Step 5. Launch your gateway

Follow steps (5-6) in the chosen installation guide.

## Step 6. Review gateway statistics

Open the web UI of your ThingsBoard server and review statistics that is uploaded from your thingsboard gateway.
Login as Tenant Administrator and open **Devices** page. Click on the gateway device card. 
Open "Latest Telemetry" tab and review following statistics: "**devicesOnline**", "**attributesUploaded**" and "**telemetryUploaded**".
All values should be set to "0".
 
{:refdef: style="text-align: center;"}
![image](/images/gateway/gateway-statistics.png)
{: refdef} 

The presence of those values on the UI means that your gateway has successfully connected to ThingsBoard server.
  
## Step 7. Choose your extension
  
Based on your use case, you can choose following options:
 
 - connect to [**MQTT broker**](/docs/iot-gateway/getting-started/#step-8-connect-to-external-mqtt-broker)
 - connect to [**OPC-UA server**](/docs/iot-gateway/getting-started/#step-9-connect-to-external-opc-ua-server) 
 - connect to [**Sigfox Backend**](/docs/iot-gateway/getting-started/#step-10-connect-to-sigfox-backend)

or follow instruction for all steps.
  
## Step 8. Connect to external MQTT broker

In this step, we will connect to the external MQTT broker in order to start collecting data from third-party or legacy applications and devices.

There are two options available:

 - [**GUI configuration**](/docs/iot-gateway/getting-started/#step-81-mqtt-broker-gui-configuration)
 - [**File configuration**](/docs/iot-gateway/getting-started/#step-82-mqtt-broker-file-configuration)


### Step 8.1 MQTT broker GUI configuration

To configure ThingsBoard Gateway through ThingsBoard GUI, **remoteConfiguration** must be enabled in **tb-gateway.yaml**:

```yaml
gateways:
  tenants:
    -
      label: "Tenant"
      # Some configuration omitted
      remoteConfiguration: true
```
If **remoteConfiguration** is set to **false**, GUI configuration will not take effect and ThingsBoard Gateway will look for configuration in config files. 
See [**file configuration**](/docs/iot-gateway/getting-started/#step-82-mqtt-broker-file-configuration) for more details.

{% include templates/gateway-mosquitto.md %}

Go to **Devices**, select your Gateway and click on **Extensions** tab. 

At this point we recommend to download and import sample MQTT configuration file [mqtt-gui-extension-configuration.json](/docs/iot-gateway/resources/mqtt-gui-extension-configuration.json){:target="_blank"}. 
 
You may as well configure MQTT extension step-by-step, but this is recommended for users who are already experienced with 
ThingsBoard IoT Gateway. 
 
Click **Import extension configuration** and upload the downloaded **mqtt-gui-extension-configuration.json** file:

{:refdef: style="text-align: center;"}
![image](/images/gateway/gateway-import-configuration.png)
{: refdef} 

When the configuration is imported, click on **Edit extension** button to review the imported configuration.

{:refdef: style="text-align: center;"}
![image](/images/gateway/gateway-mqtt-edit-extension-1.png)
{: refdef} 

MQTT Extension configuration contains one or more broker configurations:
 
{:refdef: style="text-align: center;"}
![image](/images/gateway/gateway-mqtt-edit-extension-2.png)
{: refdef} 
 
Each broker configuration has the following sections:

 - Broker connection settings:
    - Port
    - Host
    - Retry interval
    - Credentials
 - Mapping
 - Connect Requests
 - Disconnect Requests
 - Attribute Requests
 - Attribute Updates
 - Server side RPC

**NOTE** Broker connection settings **ARE NOT** ThingsBoard server connection parameters. These settings are for an external MQTT 
broker, which ThingsBoard IoT Gateway collects data from and then sends them to ThingsBoard server. The Gateway takes 
ThingsBoard server connection settings from tb-gateway.yml file as was described before.
    
Mapping described in detail in 
[**MQTT Extension Configuration Details**](/docs/iot-gateway/getting-started/#step-83-mqtt-extension-configuration-details) section 

### Step 8.2 MQTT broker file configuration
 
Navigate to gateway configuration folder and edit **tb-gateway.yml** file.
Configuration folder location:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

Change **mqtt.enabled** property value to **true**.

{% include templates/gateway-mosquitto.md %}

Restart your gateway using following commands

```bash
Windows: 
net stop tb-gateway
net start tb-gateway
Linux: 
sudo service tb-gateway restart
```

The **mqtt-config.json** contains sample configuration that allows mapping of JSON messages from external MQTT broker to ThingsBoard device attributes and telemetry.

### Step 8.3 MQTT Extension Configuration Details

The following section describes each part of MQTT Extension configuration settings, both file and GUI-based.
 
#### Step 8.3.1 Basic mapping example

As an example, the default mapping listed below will force gateway to subscribe to the **sensors** topic and use **serialNumber** from incoming json message as a device name.
Similar, **model** and **temperature** json object fields will be mapped to corresponding ThingsBoard device attribute and telemetry fields.
 
```json
{
  "topicFilter": "sensors",
  "converter": {
    "type": "json",
    "filterExpression": "",
    "deviceNameJsonExpression": "${$.serialNumber}",
    "attributes": [
      {
        "type": "string",
        "key": "model",
        "value": "${$.model}"
      }
    ],
    "timeseries": [
      {
        "type": "double",
        "key": "temperature",
        "value": "${$.temperature}"
      }
    ]
  }
}
```

The same mapping configured via GUI:

{:refdef: style="text-align: center;"}
![image](/images/gateway/gateway-mqtt-mapping-1.png)
{: refdef} 

Let's see this mapping in action. We will use **mosquitto_pub** command to emulate data from device that is connected to external mqtt broker:
 
```bash
mosquitto_pub -h localhost -p 1883 -t "sensors" -m '{"serialNumber":"SN-001", "model":"T1000", "temperature":36.6}'
```

**NOTE** On Windows the JSON string may not be interpreted correctly by Gateway. You may see the following error in the Gateway log:

```
 com.fasterxml.jackson.core.JsonParseException: Unexpected character (''' (code 39)): was expecting double-quote to start field name
```

If this is the case, use double quotes on the outside and escaping double quotes on the inside 
of the message, like: 

```
 "{\"serialNumber\":\"SN-001\", \"model\":\"T1000\", \"temperature\":36.6}"
```

You should observe following log message in the gateway logs:
 
```text
... INFO  o.t.g.service.MqttGatewayService - [SN-001] Device Connected!
```
Logs are located in the following folder:

```bash
Windows: YOUR_INSTALL_DIR/logs
Linux: /var/log/tb-gateway
```

Now you can navigate to the ThingsBoard Web UI and observe new device **SN-001** on the **Devices** page.
You can click on the device card and observe delivered attributes and telemetry in the corresponding tabs.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-model-attribute.png)
{: refdef}

#### Step 8.3.2 Mapping JSON arrays

By default, gateway supports mapping of json arrays, by mapping each array element as a separate entity. For example, following command will create or update two devices: **SN-002** and **SN-003**.
   
```bash
mosquitto_pub -h localhost -p 1883 -t "sensors" -m '[{"serialNumber":"SN-002", "model":"M2", "temperature":42.0}, {"serialNumber":"SN-003", "model":"M3", "temperature":73.0}]'
```

#### Step 8.3.3 Mapping MQTT topic to device name

In some cases, the device name is a part of the MQTT topic. In this case, you are able to use the regular expression to extract device name value. 
This regular expression is configured in the **deviceNameTopicExpression** field.

See example publish command and mapping (already present in default configuration) below:
 
```bash
mosquitto_pub -h localhost -p 1883 -t "sensor/SN-004/temperature" -m '{"value":36.6}'
``` 
 
```json
{
  "topicFilter": "sensor/+/temperature",
  "converter": {
    "type": "json",
    "filterExpression": "",
    "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/temperature)",
    "timeseries": [
      {
        "type": "double",
        "key": "temperature",
        "value": "${$.value}"
      }
    ]
  }
}
```

The same configuration in GUI:

{:refdef: style="text-align: center;"}
![image](/images/gateway/gateway-mqtt-mapping-2.png)
{: refdef}

#### Step 8.3.4 Advanced mapping syntax and filtering

Gateway MQTT extension uses [**JsonPath**](https://github.com/jayway/JsonPath) library to provide the ability of flexible mapping and filtering of JSON structures.
You can define filterExpression based on the [**path**](https://github.com/jayway/JsonPath#path-examples) and [**filter**](https://github.com/jayway/JsonPath#filter-operators) examples.

#### Step 8.3.5 Custom MQTT message mappers

As a gateway developer, you are able to fork and add custom mappers using following [interface](https://github.com/thingsboard/thingsboard-gateway/blob/release-1.0/src/main/java/org/thingsboard/gateway/extensions/mqtt/client/conf/mapping/MqttDataConverter.java). 
Feel free to submit PRs with your custom mapper implementations if you believe that they may be useful for the ThingsBoard community.


## Step 9. Connect to external OPC-UA server

This example will demonstrate how to 

 - connect to your local KEPServerEX installation running on Windows.
 - transform sample OPC-UA tag values to ThingsBoard attributes and telemetry.
 - visualize OPC-UA tag values using ThingsBoard widgets.

We assume that KEPServerEX is already installed on your Windows machine. 
We will use Windows 10 and [Free Demo](https://my.kepware.com/download/demo/ex/?utm_content=) server.  
 
### Step 9.1. Provision gateway credentials to KEPServerEX
 
Open KEPServerEX "OPC UA Configuration Manager" application and navigate to "Trusted Clients" page.

Import **example.der** certificate from the gateway configuration folder. Configuration folder location:
  
```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

**NOTE** This certificate is added to the configuration folder for the demonstration purposes. Both the certificate and the key are in public access, thus it is not secure and is not for production usage.
You can create and configure your own certificate pair for production usage.
 
{:refdef: style="text-align: center;"}
![image](/images/gateway/certificate-import.png)
{: refdef}


### Step 9.2. Add server endpoint KEPServerEX

This step is required if you want to deploy ThingsBoard IoT Gateway and KEPServerEX on different hosts.

KEPServerEX needs to be configured to accept remote connections. Open KEPServerEX "OPC UA Configuration Manager" application and navigate to "Server Endpoints" page.

{:refdef: style="text-align: center;"}
![image](/images/gateway/server-endpoint.png)
{: refdef}

**NOTE** KEPServerEX restart is required.

### Step 9.3 Enable OPC-UA extension

#### Step 9.3.1 OPC-UA extension file configuration
If you are using file-based configuration, navigate to gateway configuration folder and edit **tb-gateway.yml** file.
Configuration folder location:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

Change **opc.enabled** property value to **true**.

If you decide to use different OPC-UA server that is deployed to external host or has specific security configuration, please edit **opc-config.json** file and modify connection parameters.
See OPC-UA extension [configuration guide](/docs/iot-gateway/opc-ua/) for more details.

The **opc-config.json** contains sample configuration that allows mapping of OPC-UA tags to ThingsBoard device attributes and telemetry.
Once started, OPC-UA extension will monitor your OPC-UA server using this pre-defined configuration.

Restart your gateway using following commands

```bash
Windows: 
net stop tb-gateway
net start tb-gateway
Linux: 
sudo service tb-gateway restart
```

#### Step 9.3.1 OPC-UA extension GUI configuration

You can import sample configuration  
[opc-ua-gui-extension-configuration.json](/docs/iot-gateway/resources/opc-ua-gui-extension-configuration.json){:target="_blank"}

or configure OPC-UA extension manually. In GUI the extension configuration looks like:


### Step 9.4. Explore data from devices

 
The default mapping listed below will force gateway to treat all OPC-UA tags that match **deviceNodePattern** as ThingsBoard devices.
Gateway will use **deviceNamePattern** to calculate the device name based on values of different tags using relative to the device node tag (For example, **_System._DeviceId**).
Similar, **Tag1** and **Tag2** relative OPC-UA tags will be mapped to corresponding ThingsBoard device attribute and telemetry fields.
 
```json
{
  "deviceNodePattern": "Channel1\\.Device\\d+$",
  "deviceNamePattern": "Device ${_System._DeviceId}",
  "attributes": [
    {"key":"Tag1", "type": "string", "value": "${Tag1}"}
  ],
  "timeseries": [
    {"key":"Tag2", "type": "long", "value": "${Tag2}"}
  ]
}
```

You should observe following log message in the gateway logs:
 
```text
... INFO  o.t.g.service.MqttGatewayService - [Device 1] Device Connected!
```

Logs are located in the following folder:

```bash
Windows: YOUR_INSTALL_DIR/logs
Linux: /var/log/tb-gateway
```

Now you can navigate to the ThingsBoard Web UI and observe new device **Device 1** on the **Devices** page.
You can click on the device card and observe delivered attributes and telemetry in the corresponding tabs.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-opc-telemetry.png)
{: refdef}

## Step 10. Connect to Sigfox Backend

In this step, we will connect to Sigfox Backend in order to start collecting data from sigfox modules.

Navigate to gateway configuration folder and edit **tb-gateway.yml** file.
Configuration folder location:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

Change **sigfox.enabled** property value to **true**.

Restart your gateway using following commands

```bash
Windows: 
net stop tb-gateway
net start tb-gateway
Linux: 
sudo service tb-gateway restart
```

The **sigfox-config.json** contains configuration that allows mapping of JSON messages from Sigfox Backend to ThingsBoard telemetry.

### Step 10.1 Sigfox Backend configuration

Let's assume we want to publish coordinates, temperature and humidity data from your Sigfox module to ThingsBoard.
In order to achieve this, you will need to select device type and configure custom callback from Sigfox Backend to our IoT Gateway.

{:refdef: style="text-align: center;"}
![image](/images/gateway/sigfox/4.sigfox_device_type_callback_configuration.jpg)
{: refdef}

Few things to notice:

 - This is **UPLINK** data callback;
 - **URL pattern** contains IoT Gateway host, port and device type id;
 - **Authorization** header is used to authenticate Sigfox server;
 - **POST** HTTP method is required;
 - Message body is a **valid** JSON document;
 - Message body uses **regular variables**: device, lat, lng;
 - Message body uses **custom variables** which are case sensitive: Temperature and Humidity.

We assume you have deployed the gateway on some cloud server to get the static IP address or hostname.
 
### Step 10.2 Basic mapping example 

The default mapping listed below will allow to convert data from Sigfox Backend and publish it to ThingsBoard.
 
```json
{
  "deviceTypeConfigurations": [
    {
      "deviceTypeId": "YOUR_DEVICE_TYPE_ID",
      "token": "SECURITY_TOKEN",
      "converter": {
        "deviceNameJsonExpression": "${$.device}",
        "attributes": [
          {
            "type": "string",
            "key": "lat",
            "value": "${$.lat}"
          },
          {
            "type": "string",
            "key": "lng",
            "value": "${$.lng}"
          }
        ],
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${$.data.temperature}",
            "transformer": {
              "type": "intToDouble"
            }
          },
          {
            "type": "double",
            "key": "humidity",
            "value": "${$.data.humidity}",
            "transformer": {
              "type": "intToDouble"
            }
          }
        ]
      }
    }
  ]
}
```

Few things to notice:

 - **YOUR_DEVICE_TYPE_ID** need to be replaced with the actual value ("58cb911a5005742b3b4c41a0" in our case)
 - **SECURITY_TOKEN** need to be replaced with the random value ("Basic U0lHRk9YX1RFU1RfVE9LRU4=" in our case)
 - **[JsonPath](https://github.com/jayway/JsonPath)** expression are used to extract values from incoming JSON ("$.data.temperature" in our case).
 - **All** JsonPath expressions need to be placed into **${}**.
 - **Transformers** are used to convert data types. For example, integer to double using "(65536-X)/10" formula. You can plugin your own converters.

### Step 10.3 Dry Run

Once your Sigfox Beckend callback is configured, you may observe incoming messages in ThingsBoard IoT Gateway logs.
If everything is configured correctly, you will see new devices in your Tenant Administrator device list.

{:refdef: style="text-align: center;"}
![image](/images/gateway/sigfox/devices.png)
{: refdef}

You are able to open a particular device and check that telemetry values arrived successfully.

### Step 10.4 Custom Data type transformers

As a gateway developer, you are able to fork and add custom transformers using following [interface](https://github.com/thingsboard/thingsboard-gateway/blob/release-1.2/src/main/java/org/thingsboard/gateway/extensions/sigfox/conf/mapping/DataValueTransformer.java). 
Feel free to submit PRs with your custom transformer implementations if you believe that they may be useful for the ThingsBoard community.

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.



