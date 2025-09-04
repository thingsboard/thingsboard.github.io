To add new time series or attribute key, follow these steps:

{% assign attrAndTimeseries = '
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-3-ce.png,
        title: Click the “**pencil**” icon in the “**Attributes**” section to add new attribute key;
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-4-ce.png,
        title: Click on "**Add attribute**" in the opened window;
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-5-ce.png,
        title: Enter the "**Key**" field, select the "**Type**" (can be [path](#path-types), [identifier](#identifier-types) or constant), enter "**Value**" and click "**Apply**" button;
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-6-ce.png,
        title: Now click on the “**pencil**” icon in the “**Time series**” section to add new time series key;
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-7-ce.png,
        title: Click on "**Add time series**" in the opened window;
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-8-ce.png,
        title: Enter the "**Key**" field, select the "**Type**" (can be [path](#path-types), [identifier](#identifier-types) or constant), enter "**Value**" and click "**Apply**" button.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=attrAndTimeseries %}

You can enable a specific report strategy for each time series or attribute. This strategy defines how often  
data is sent to the ThingsBoard server. The following strategies are available:

- **On report period** - sends data to ThingsBoard after the report period;
- **On value change** - sends data to ThingsBoard when the value changes;
- **On value change or report period** - sends data to ThingsBoard when the value changes or after the report period;
- **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-10-ce.png)
