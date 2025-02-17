Configuration in this subsection provides settings for processing data from BACnet device as timeseries and 
attributes on the platform instance.

To add new time series or attribute key, follow these steps:

1. Click “**pencil**” icon of the “**Attributes**” section to add new attribute key;
2. Click “**Add attribute**” in the opened window;
3. Enter the **key name**, select "Object ID" and "Property ID" from the dropdown list. Click “**Apply**”;
4. Now click on the “**pencil**” icon of the “**Time series**” section to add new time series key;
5. Click "**Add time series**" in the opened window;
6. Enter the **key name**, select "Object ID" and "Property ID" from the dropdown list. Click “**Apply**”;

**images**

For each time series or attribute, you can enable specific report strategy. This strategy defines how often the 
data will be sent to the ThingsBoard server. The following strategies are available:

- **On report period** - sends data to ThingsBoard after the report period;
- **On value change** - sends data to ThingsBoard when the value changes;
- **On value change and report period** - sends data to ThingsBoard when the value changes or after the report period;
- **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

![image](/images/gateway/socket-connector/socket-adding-device-9-ce.png)

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
