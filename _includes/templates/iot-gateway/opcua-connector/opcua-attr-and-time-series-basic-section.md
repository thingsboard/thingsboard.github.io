To add new time series or attribute key, follow these steps:

1. Click “**pencil**” icon of the “**Attributes**” section to add new attribute key;
2. Click on "**Add attribute**" in the opened window;
3. Enter the "**Key**" field, select the "**Type**" (can be [path](#path-types), [identifier](#identifier-types) or constant), enter "**Value**" and click "**Apply**" button;
4. Now click on the “**pencil**” icon of the “**Time series**” section to add new time series key;
5. Click on "**Add time series**" in the opened window;
6. Enter the "**Key**" field, select the "**Type**" (can be [path](#path-types), [identifier](#identifier-types) or constant), enter "**Value**" and click "**Apply**" button.

**images**

You can enable a specific report strategy for each time series or attribute. This strategy defines how often  
data is sent to the ThingsBoard server. The following strategies are available:

- **On report period** - sends data to ThingsBoard after the report period;
- **On value change** - sends data to ThingsBoard when the value changes;
- **On value change and report period** - sends data to ThingsBoard when the value changes or report period;
- **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

**image**

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
