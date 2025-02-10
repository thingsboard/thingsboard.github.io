This converter designed for binary payloads, this converter directly interprets binary data to retrieve attributes and 
time series, using specific byte positions for data extraction.

To add new time series or attribute key, use the following steps:

{% assign creatingAttrAndTimeseries = '
    ===
        image: /images/gateway/socket-connector/socket-adding-device-1-ce.png,
        title: Click “**pencil**” icon of the “**Attributes**” section to add new attribute key;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-2-ce.png,
        title: In the opened window click “**Add attribute**”;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-3-ce.png,
        title: Enter the **key name** and fill in the **byte positions**. Click “**Apply**”;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-5-ce.png,
        title: Now click on the “**pencil**” icon of the “**Time series**” section to add new time series key;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-6-ce.png,
        title: In the opened window click “**Add time series**”;
    ===
        image: /images/gateway/socket-connector/socket-adding-device-7-ce.png,
        title: Enter the **key name**, fill in the **byte positions** and click “**Apply**”.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingAttrAndTimeseries %}

Under the every time series or attribute you can enable specific report strategy. This strategy defines how often the 
data will be sent to the ThingsBoard server. The following strategies are available:

- **On report period** - sending data to ThingsBoard after the report period;
- **On value change** - sending data to ThingsBoard after the value change;
- **On value change and report period** - sending data to ThingsBoard after the value change or report period;
- **On received** - sending data to ThingsBoard after receiving data from the device (default strategy).

![image](/images/gateway/socket-connector/socket-adding-device-9-ce.png)
