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
