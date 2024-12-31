The configuration in this unit provides settings for processing data on Modbus server. These settings will be interpreted in ThingsBoard platform instance as attributes/time series of the device. For adding new attribute or time series use the following steps:

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

<br>
Also, **modifier** for attribute/time series value can be applied using the following settings:

| **Parameter** | **Description**                                                                                                                                                                  |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Type          | **multiplier** - the result of reading will be multiplied by the value of this parameter. <br>**divider** - the result of reading will be divided by the value of this parameter |
| Value         | The value that will be used to modify the read value                                                                                                                             | 
| ---           

![image](https://img.thingsboard.io/gateway/modbus-connector/modifier.png)