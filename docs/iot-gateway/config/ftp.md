---
layout: docwithnav-gw
title: FTP Connector Configuration
description: FTP protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with FTP Connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this Connector. 
The purpose of this Connector is to connect to an external FTP server and get data from files from specific paths. 
The connector is also able to push data to FTP server files based on the updates/commands from ThingsBoard.

This connector is useful when you have some FTP server in your device or some data in an external resource and you would like to push this data to the ThingsBoard.    

We will describe the connector configuration file below. 

## Connector configuration: ftp.json

Connector configuration is a JSON file that contains information about how to connect to an external FTP server, what paths to use when reading data, and how to process the data.  
Let's review the format of the configuration file using the example below.

<b>Example of FTP Connector config file.</b>

The example listed below will connect to FTP server in a local network deployed on server with IP 0.0.0.0. 
The connector will utilize basic FTP auth using username and password. 
Then, connector will subscribe to a list of paths from the mapping section. See more info in the description below.

{% capture ftpConf %}

{
  "host": "0.0.0.0",
  "port": 21,
  "TLSSupport": false,
  "security": {
    "type": "basic",
    "username": "admin",
    "password": "admin"
  },
  "paths": [
    {
      "devicePatternName": "asd",
      "devicePatternType": "Device",
      "delimiter": ",",
      "path": "fol/*_hello*.txt",
      "readMode": "FULL",
      "maxFileSize": 5,
      "pollPeriod": 5,
      "txtFileDataView": "SLICED",
      "withSortingFiles": true,
      "attributes": [
        {
          "key": "temp",
          "value": "[1:]"
        },
        {
          "key": "tmp",
          "value": "[0:1]"
        }
      ],
      "timeseries": [
        {
          "type": "int",
          "key": "[0:1]",
          "value": "[0:1]"
        },
        {
          "type": "int",
          "key": "temp",
          "value": "[1:]"
        }
      ]
    }
  ],
  "attributeUpdates": [
    {
      "path": "fol/hello.json",
      "deviceNameFilter": ".*",
      "writingMode": "WRITE",
      "valueExpression": "{'${attributeKey}':'${attributeValue}'}"
    }
  ],
  "serverSideRpc": [
    {
      "deviceNameFilter": ".*",
      "methodFilter": "read",
      "valueExpression": "${params}"
    },
    {
      "deviceNameFilter": ".*",
      "methodFilter": "write",
      "valueExpression": "${params}"
    }
  ]
}

{% endcapture %}
{% include code-toggle.liquid code=ftpConf params="conf|.copy-code.expandable-20" %}

### General section

| **Parameter** | **Default value** | **Description**                                        |
|:--------------|:------------------|--------------------------------------------------------|
| host          | **localhost**     | Domain address or ip of the server.                    |
| port          | **21**            | Port of the server.                                    |
| TLSSupport    | **true**          | Verify whether TLS support is available on the server. |
| ---           |                   |                                                        |

#### Subsection "security"

Subsection "security" provides configuration for client authorization at FTP Server.

{% capture mqttconnectorsecuritytogglespec %}
Basic<small>Recommended</small>%,%accessToken%,%templates/iot-gateway/ftp-connector-basic-security-config.md%br%
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/ftp-connector-anonymous-security-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttConnectorCredentialsConfig" toggle-spec=mqttconnectorsecuritytogglespec %}  

### Section "paths"

This configuration section contains an array of objects with paths that the gateway will try to read after connecting to the server.  
Also, this section contains settings for processing incoming messages (converter).  

| **Parameter** | **Default value** | **Description**                |
|:--------------|:------------------|--------------------------------|
| path          | **data/log.txt**  | Path to file for reading data. |
| ---           |                   |                                |

**Note** Make sure that your file extension is one of the supported extensions by FTP connector (.txt, .json, .csv)

The **path** supports special symbols, such as '*' to allow subscription to multiple paths and files.
Let's look at another example of using **path** parameter:

|**Example Name**|**Path**|**Comments**|
|:-|:-|:-|-
| Example 1 | data/log.txt | Read data from one file (if it exists) |
| Example 2 | data/*/log.txt | Read all log.txt files from all folders that contain data folder |
| Example 3 | data/\*/\*_log.txt | Read all files that name containing _log.txt from all folders that contain data folder |
| Example 3 | data/\*.\* | Read all files with all supported extensions that are included in data folder |
|---

Now let's review another required parameter in path section.

|**Parameter**|**Available value**|**Description**|
|:-|:-|:-|-
| delimiter | , | Symbol that will be used to split the data in the file |
| readMode | FULL/PARTIAL | If parameter is equal to FULL, the file will be read from the start to the end. If parameter is equal to PARTIAL, the file will be read from the line that was previously being read |
| maxFileSize | 5 | The max file size in MB that will be read (if file size is more than 5 MB, it will be skipped) |
| pollPeriod | 60 | The period of time (in seconds) during which files in the path will be read |
| txtFileDataView | TABLE/SLICED | The txtFileDataView parameter is used only for .txt files |
| withSortingFiles | true/false | This is how the found files in path will be appended to the array |
| attributes |  | This subsection contains parameters of the incoming message, that will be interpreted as attributes for the device. |
| timeseries |  | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device. |
|---

Let's look at how we can configure this section for different file extensions:


1. For .txt with TABLE data view and .csv files
    ```json
      "paths": [
        {
          "devicePatternName": "${temp}",
          "devicePatternType": "Device",
          "delimiter": ",",
          "path": "fol/*.*",
          "readMode": "FULL",
          "maxFileSize": 5,
          "pollPeriod": 60,
          "txtFileDataView": "TABLE",
          "withSortingFiles": true,
          "attributes": [
            {
              "type": "int",
              "key": "key",
              "value": "${temp}"
            }
          ],
          "timeseries": [
            {
              "type": "int",
              "key": "${hum}",
              "value": "${temp}"
            },
            {
              "type": "int",
              "key": "temp",
              "value": "${hum}"
            }
          ]
        }
      ]
    ```
    
    That means that FTP converter will look for the following file structure:
    ```txt
    temp,hum
    1,2
    23,34
    ```
2. For .txt file with SLICED data view
    ```json
      "paths": [
        {
          "devicePatternName": "DeviceName",
          "devicePatternType": "[0:1]",
          "delimiter": ",",
          "path": "fol/table.txt",
          "readMode": "FULL",
          "maxFileSize": 5,
          "pollPeriod": 60,
          "txtFileDataView": "SLICED",
          "withSortingFiles": true,
          "attributes": [
            {
              "key": "temp",
              "value": "[1:]"
            },
            {
              "key": "tmp",
              "value": "[0:1]"
            }
          ],
          "timeseries": [
            {
              "type": "int",
              "key": "[0:1]",
              "value": "[0:1]"
            },
            {
              "type": "int",
              "key": "temp",
              "value": "[1:]"
            }
          ]
        }
      ]    
    ```

    That mean that FTP converter will look for the next file structure:
    ```txt
    1,2
    23,34
    ```
3. For .json file
    ```json
    "paths": [
        {
          "devicePatternName": "${temp}",
          "devicePatternType": "Device",
          "delimiter": ",",
          "path": "fol/*.json",
          "readMode": "FULL",
          "maxFileSize": 5,
          "pollPeriod": 60,
          "withSortingFiles": true,
          "attributes": [
            {
              "type": "int",
              "key": "key",
              "value": "${temp}"
            }
          ],
          "timeseries": [
            {
              "type": "int",
              "key": "key",
              "value": "${temp}"
            },
            {
              "type": "int",
              "key": "temp",
              "value": "${tmp}"
            }
          ]
        }
      ]
    ```
4. Combine attributes, telemetry, and serverSideRpc section, for example, in a .json file:
  ```json
  "paths": [
          {
            "devicePatternName": "${temp}",
            "devicePatternType": "Device",
            "delimiter": ",",
            "path": "fol/*.json",
            "readMode": "FULL",
            "maxFileSize": 5,
            "pollPeriod": 60,
            "withSortingFiles": true,
            "attributes": [],
            "timeseries": [
              {
                "type": "int",
                "key": "hum",
                "value": "${hum}"
              },
              {
                "type": "int",
                "key": "temp",
                "value": "${tmp}"
              },
              {
                "type": "string",
                "key": "combine",
                "value": "${tmp}::${hum}"
              }
            ]
          }
        ]
  ```

### Section "attributeUpdates"


This configuration section is optional.
ThingsBoard allows the provisioning of device attributes and fetches some of them from the device application. You can treat this as a remote configuration for devices, enabling them to request shared attributes from ThingsBoard. See [user guide](/docs/user-guide/attributes/) for more details.

The “attributeRequests” configuration allows you to configure the format of the corresponding attribute data that will be written to the specific files.

| **Parameter**    | **Default value**                             | **Description**                                                                                                                                                      |
|:-----------------|:----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| path             | **fol/${attributeKey}/${attributeValue}.txt** | JSON-path expression that is used for finding specific files                                                                                                         |
| deviceNameFilter | **.\***                                       | Regular expression device name filter, used to determine, which function to execute.                                                                                 |
| writingMode      | **OVERRIDE/WRITE**                            | If writingMode is equal to OVERRIDE, the found files will be overwritten. If writingMode is equal to WRITE, new data will be appended at the end of the found files. |
| valueExpression  | **,,,,${attributeKey},,,${attributeValue}**   | Expression is used for creating the message data that will be sent to FTP server. In this case, ',' serves as the delimiter and you can insert your data before it.  |
| ---              |                                               |                                                                                                                                                                      |

This section in configuration file looks like this:

```json
  "attributeUpdates": [
    {
      "path": "fol/${attributeKey}/${attributeValue}.txt",
      "deviceNameFilter": ".*",
      "writingMode": "OVERRIDE",
      "valueExpression": ",,,,${attributeKey},,,${attributeValue}"
    }
  ]
```

### Server side RPC commands

ThingsBoard allows for sending RPC commands to devices connected directly to ThingsBoard or via Gateway.

Configuration, provided in this section uses for sending RPC requests from ThingsBoard to device.

| **Parameter**    | **Default value**                           | **Description**                                                                                                                                                          |
|:-----------------|:--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| deviceNameFilter | **.\***                                     | Regular expression device name filter, used to determine, which function to execute.                                                                                     |
| methodFilter     | **read/write**                              | Mode for opening file                                                                                                                                                    |
| valueExpression  | **,,,,${attributeKey},,,${attributeValue}** | JSON-path expression, is used to create data for sending to FTP server, if methodFilter is equal to write. If methodFilter is equal to read, this field will be passing. |
| ---              |                                             |                                                                                                                                                                          |

This section in configuration file looks like this:

```json
"serverSideRpc": [
  {
    "deviceNameFilter": ".*",
    "methodFilter": "read",
    "valueExpression": "${params}"
  },
  {
    "deviceNameFilter": ".*",
    "methodFilter": "write",
    "valueExpression": "${params}"
  }
]
```

**Let’s look at an examples.**

**Read data example**

Suppose you want to read data from the file on connected FTP server. Go to enabled FTP connector RPC page and fill in 
fields with the following configuration and click on "**Send**" button:

{:refdef: style="text-align: left;"}
![image](/images/gateway/ftp-rpc-request-read-1.png)
{: refdef}

After that, response will be shown in the "**Response**" field:

{:refdef: style="text-align: left;"}
![image](/images/gateway/ftp-rpc-response-read-1.png)
{: refdef}

**Write data example**

{% capture difference %}
**Make sure the file you want to write data to has the appropriate permissions. 
Otherwise, you will get a 550 Permission denied error.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Suppose you want to write some data to the file on connected FTP server. Go to enabled FTP connector RPC page and fill in 
fields with the following configuration and click on "**Send**" button:

{:refdef: style="text-align: left;"}
![image](/images/gateway/ftp-rpc-request-write-1.png)
{: refdef}

After that, response will be shown in the "**Response**" field:

{:refdef: style="text-align: left;"}
![image](/images/gateway/ftp-rpc-response-write-1.png)
{: refdef}

Let's check if the data was written to the file on the FTP server, for this purpose use the previously described 
"**Read data**" example:

{:refdef: style="text-align: left;"}
![image](/images/gateway/ftp-rpc-request-read-2.png)
{: refdef}

Your response should contain the data you wrote to the file as in the image below:

{:refdef: style="text-align: left;"}
![image](/images/gateway/ftp-rpc-response-read-2.png)
{: refdef}

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
