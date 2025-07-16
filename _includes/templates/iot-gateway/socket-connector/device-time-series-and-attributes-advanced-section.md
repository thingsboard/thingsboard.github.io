This converter is designed for binary payloads. It directly interprets binary data to retrieve attributes and 
time series, using specific byte positions for data extraction.

| **Parameter** | **Default value** | **Description**                                                                                                      |
|:--------------|:------------------|----------------------------------------------------------------------------------------------------------------------|
| telemetry     |                   | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.   |
| ... key       | **temp**          | Name for telemetry in ThingsBoard.                                                                                   |
| ... byteFrom  | **0**             | Used to slice received data from the specific index.                                                                 |
| ... byteTo    | **-1**            | Used to slice received data to the specific index.                                                                   |
| attributes    |                   | This subsection contains parameters of the incoming requests, that will be interpreted as attributes for the device. |
| ... key       | **hum**           | Name for attribute in ThingsBoard.                                                                                   |
| ... byteFrom  | **2**             | Used to slice received data from the specific index.                                                                 |
| ... byteTo    | **4**             | Used to slice received data to the specific index.                                                                   |
| ---           |                   |                                                                                                                      |

The attributes section uses the same parameters as the telemetry section.

Example:
```json
{
  "address": "127.0.0.1:50001",
  "deviceName": "Device Example",
  "deviceType": "default",
  "encoding": "utf-8",
  "telemetry": [
    {
      "key": "temp",
      "byteFrom": 0,
      "byteTo": -1
    },
    {
      "key": "hum",
      "byteFrom": 0,
      "byteTo": 2
    }
  ],
  "attributes": [
    {
      "key": "name",
      "byteFrom": 0,
      "byteTo": -1
    },
    {
      "key": "num",
      "byteFrom": 2,
      "byteTo": 4
    }
  ]
}
```

{% assign deviceAttrTimeseriesAdvanced = '
    ===
        image: /images/gateway/socket-connector/socket-subsection-time-series-advanced-1-ce.png,
    ===
        image: /images/gateway/socket-connector/socket-subsection-attributes-advanced-1-ce.png
    '
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=deviceAttrTimeseriesAdvanced %}
