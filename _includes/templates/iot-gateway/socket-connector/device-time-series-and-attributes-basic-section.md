This converter is designed for binary payloads. It directly interprets binary data to retrieve attributes and 
time series, using specific byte positions for data extraction.

To add new time series or attribute key, follow these steps:

{% assign creatingAttrAndTimeseries = '
    ===
        image: /images/gateway/socket-connector/socket-adding-device-1-ce.png,
        title: Click “**pencil**” icon of the “**Attributes**” section to add new attribute key;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-2-ce.png,
        title: Click on "**Add attribute**" in the opened window;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-4-ce.png,
        title: Enter the **key name** and fill in the **byte positions**. Click “**Apply**”;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-5-ce.png,
        title: Now click on the “**pencil**” icon of the “**Time series**” section to add new time series key;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-6-ce.png,
        title: Click on "**Add time series**" in the opened window;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-7-ce.png,
        title: Enter the **key name**, fill in the **byte positions** and click “**Apply**”.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingAttrAndTimeseries %}

You can enable a specific report strategy for each time series or attribute. This strategy defines how often  
data is sent to the ThingsBoard server. The following strategies are available:

- **On report period** - sends data to ThingsBoard after the report period;
- **On value change** - sends data to ThingsBoard when the value changes;
- **On value change or report period** - sends data to ThingsBoard when the value changes or report period;
- **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

![image](/images/gateway/socket-connector/socket-adding-device-9-ce.png)

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
