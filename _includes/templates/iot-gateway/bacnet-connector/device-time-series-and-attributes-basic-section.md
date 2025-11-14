Configuration in this subsection provides settings for processing data from BACnet device as timeseries and 
attributes on the platform instance.

To add new time series or attribute key, follow these steps:

{% assign creatingAttrAndTimeseries = '
    ===
        image: /images/gateway/bacnet-connector/bacnet-gateway-configuring-3-ce.png,
        title: Click “**pencil**” icon of the “**Attributes**” section to add new attribute key;
    ===
        image: /images/gateway/bacnet-connector/bacnet-gateway-configuring-4-ce.png,
        title: Click “**Add attribute**” in the opened window;
    ===
        image: /images/gateway/bacnet-connector/bacnet-gateway-configuring-5-ce.png,
        title: Enter the **key name**, select "Object ID" and "Property ID" from the dropdown list. Click “**Apply**”;
    ===
        image: /images/gateway/bacnet-connector/bacnet-gateway-configuring-6-ce.png,
        title: Now click on the “**pencil**” icon of the “**Time series**” section to add new time series key;
    ===
        image: /images/gateway/bacnet-connector/bacnet-gateway-configuring-7-ce.png,
        title: Click "**Add time series**" in the opened window;
    ===
        image: /images/gateway/bacnet-connector/bacnet-gateway-configuring-8-ce.png,
        title: Enter the **key name**, select "Object ID" and "Property ID" from the dropdown list. Click “**Apply**”.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingAttrAndTimeseries %}

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the
[Advanced configuration](/docs/iot-gateway/config/bacnet/#device-attributes-and-time-series) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/bacnet/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Filtering (from v.3.7.5 and only in advanced configuration mode)

You can set up filtering for time series and attributes based on Object Type, Object ID and Property ID. This allows 
you to specify which data should be collected and sent to the platform. Let's review each filtering option:

**Object Type Filtering**

This filter allows you to specify the type of BACnet objects from which data should be collected. For example, you can 
choose to collect data only from "**Analog Input**" or "**Binary Output**" object types or both:
- `"objectType": "*"` - will collect data from all [supported object types](/docs/iot-gateway/config/bacnet/#supported-object-types);
- `"objectType": "analogValue"` - will collect data only from Analog Value objects;
- `"objectType": ["analogValue", "binaryInput"]` - will collect data from both "Analog Value" and "Binary Input" objects.

**Object ID Filtering**

This filter allows you to specify particular Object IDs for data collection. You can define a single Object ID or a list
of Object IDs:
- `"objectId": 1234` - will collect data only from the object with ID 1234;
- `"objectId": "*"` - will collect data from all Object IDs;
- `"objectId": "0-10"` - will collect data from Object IDs in the range 0 to 10 (inclusive);
- `"objectId": ["0-10", "12-15"]` - will collect data from Object IDs in the ranges 0 to 10 and 12 to 15 (inclusive).

**Property ID Filtering**

This filter allows you to specify particular Property IDs for data collection. You can define a single Property ID or a list
of Property IDs:
- `"propertyId": "presentValue"` - will read only the "presentValue" property;
- `"propertyId": "*"` - will read all [supported properties](/docs/iot-gateway/config/bacnet/#supported-property-identifiers);
- `"propertyId": ["presentValue", "location"]` - will read both "presentValue" and "location" properties.

{% capture info %}
<div>
  <p>
    <b style="color:red">WARNING:</b>
    <span style="color:black">It is not allowed to use the Object Types list (except "*") with Object ID range or a list of ranges.</span>
  </p>
</div>
{% endcapture %}
{% include templates/warn-banner.md content=info %}

Example of filtering configuration:

```json
{
  "timeseries": [
    {
      "key": "${objectName} - ${objectType} | ${units}",
      "objectType": "analogInput",
      "objectId": "*",
      "propertyId": ["presentValue", "statusFlags"]
    }
  ]
}
```

{% capture difference %}
More usage examples can be found in the [Example usage](/docs/iot-gateway/config/bacnet/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Report strategy

For each time series or attribute, you can enable specific report strategy. This strategy defines how often the 
data will be sent to the ThingsBoard server. The following strategies are available:

- **On report period** - sends data to ThingsBoard after the report period;
- **On value change** - sends data to ThingsBoard when the value changes;
- **On value change or report period** - sends data to ThingsBoard when the value changes or after the report period;
- **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

![image](/images/gateway/bacnet-connector/bacnet-gateway-configuring-10-ce.png)

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
