The configuration in this unit provides settings for processing data on Modbus server. These settings will be 
interpreted in ThingsBoard platform instance as attributes/time series of the device. The following parameters are used 
to configure device attributes and time series:

- **Key** - key of the attribute or time series on the platform.
- **Type** - data type of the Modbus register.
- **Function code** - Modbus function code for reading the register.
- **Objects count** - number of registers to read.
- **Address** - address of the register on the Modbus server.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-mapping) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](https://img.thingsboard.io/gateway/modbus-connector/attributes-and-timeseries-overview.png)

For adding a new attribute or time series, use the following steps:

{% assign attributes = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/attributes-1-ce.png,
        title: Click on "**pencil**" icon in the "Attributes" or "**Time series**" section (depends on the selected section);
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/attributes-2-ce.png,
        title: In the opened window click "**Add attribute**" or "**Add time series**" (depends on selected section);
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/attributes-3-ce.png,
        title: Fill in key, type, function code, objects count and address fields. Click "Apply".
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributes %}

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

Also, **modifier** for attribute/time series value can be applied using the following settings:

| **Parameter** | **Description**                                                                                                                                                                  |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Type          | **multiplier** - the result of reading will be multiplied by the value of this parameter. <br>**divider** - the result of reading will be divided by the value of this parameter |
| Value         | The value that will be used to modify the read value                                                                                                                             | 
| ---           |                                                                                                                                                                                  |

![image](https://img.thingsboard.io/gateway/modbus-connector/modifier.png)
