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

![image](/images/gateway/modbus-connector/attributes-and-timeseries-overview.png)

For adding a new attribute or time series, use the following steps:

{% assign attributes = '
    ===
        image: /images/gateway/modbus-connector/attributes-1-ce.png,
        title: Click on "**pencil**" icon in the "Attributes" or "**Time series**" section (depends on the selected section);
    ===
        image: /images/gateway/modbus-connector/attributes-2-ce.png,
        title: In the opened window click "**Add attribute**" or "**Add time series**" (depends on selected section);
    ===
        image: /images/gateway/modbus-connector/attributes-3-ce.png,
        title: Fill in key, type, function code, objects count and address fields. Click "Apply".
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributes %}

##### Report strategy

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

##### Modifier

Also, **modifier** for attribute/time series value can be applied using the following settings:

| **Parameter** | **Description**                                                                                                                                                                  |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Type          | **multiplier** - the result of reading will be multiplied by the value of this parameter. <br>**divider** - the result of reading will be divided by the value of this parameter |
| Value         | The value that will be used to modify the read value                                                                                                                             | 
| ---           |                                                                                                                                                                                  |

{% capture difference %}
More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/modbus-connector/modifier.png)

##### Batch reading (Advanced configuration mode only)

To optimize the reading process, you can group multiple registers into a single batch read request. This approach 
reduces the number of requests sent to the Modbus server, which can enhance performance and decrease network traffic.
Take attention that the registers in a batch read request must be of the same type and function code.

Two parameters are important for group reading configuration: `address` and `tag`. Let's look at them in more detail:

- **address** - is the address of the starting register and the address of the ending register, separated by a `-`
  character. For example, `0-10` means that the group read starts with the register at address `0` and ends at the
  register at address `10`, inclusive.
- **tag** - is a unique identifier for each register within a group read. It is used to identify a specific register within
  a given address range. The tag name can be formed using an expression using the following variables:
    - `${address}` - register address within group read.
    - `${unitId}` - slave ID.
    - `${functionCode}` - function code.
    - `${type}` - data type of register.
    - `${objectsCount}` - number of objects.

Also, `divider` and `multiplier` parameters work as expected.

Example of group reading configuration:

```json
{
  "tag": "${unitId} - ${type} - ${address}",
  "type": "16int",
  "functionCode": 3,
  "objectsCount": 1,
  "address": "0-10"
}
```

{% capture difference %}
More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
