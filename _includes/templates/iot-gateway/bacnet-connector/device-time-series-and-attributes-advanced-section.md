This converter is designed for binary payloads, and interprets binary data to retrieve attributes and 
time series, using specific byte positions for data extraction.

| **Parameter**  | **Description**                                                                                                |
|----------------|----------------------------------------------------------------------------------------------------------------|
| timeseries     | This subsection contains parameters of the device data, that will be interpreted as timeseries for the device. |
| ... key        | Name for timeseries in the platform.                                                                           |
| ... objectType | Object type in the BACnet device.                                                                              |
| ... objectId   | Object id in the BACnet device.                                                                                |
| ... propertyId | Property id in the BACnet device.                                                                              |
| attributes     | This subsection contains parameters of the device data, that will be interpreted as attributes for the device. |
| ... key        | Name for attribute in the platform.                                                                            |
| ... objectType | Object type in the BACnet device.                                                                              |
| ... objectId   | Object id in the BACnet device.                                                                                |
| ... propertyId | Property id in the BACnet device.                                                                              |
| ---            | ---                                                                                                            |

Example:

```json
"attributes": [
    {
      "key": "temperature",
      "objectType": "analogOutput",
      "objectId": "1",
      "propertyId": "presentValue"
    }
],
"timeseries": [
    {
      "key": "state",
      "objectType": "binaryValue",
      "objectId": "1",
      "propertyId": "presentValue"
    }
],
```

{% assign deviceAttrTimeseriesAdvanced = '
    ===
        image: /images/gateway/bacnet-connector/bacnet-subsection-time-series-advanced-1-ce.png,
    ===
        image: /images/gateway/bacnet-connector/bacnet-subsection-attributes-advanced-1-ce.png
    '
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=deviceAttrTimeseriesAdvanced %}
