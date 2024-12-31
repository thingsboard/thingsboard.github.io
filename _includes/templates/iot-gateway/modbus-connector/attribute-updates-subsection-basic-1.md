{% assign attributeUpdatesSubsection = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/attribute-updates-1-ce.png,
        title: To add new requests mapping, navigate to the "Attribute updates" section and click the "pencil" icon;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/attribute-updates-2-ce.png,
        title: In the opened window click "Add attribute update";
===
        image: https://img.thingsboard.io/gateway/modbus-connector/attribute-updates-3-ce.png,
        title: Set an attribute key name, type, function code, objects count, and address. Then, click "Apply".
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributeUpdatesSubsection %}

The table below describes the attribute updates parameters:

| **Parameter** | **Description**                                                       |
|:--------------|:----------------------------------------------------------------------
| Key           | Shared attribute name                                                 |
| Type          | Type of value                                                         | 
| Function code | The function to use in data processing, specifically Modbus functions |
| Objects count | Count of objects to write                                             | 
| Address       | Object address                                                        |
| ---           

For example, create a new attribute "maxTemperature" and give it a value "25".

{% assign maxTemperatureAttribute = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/max-temperature-attribute-1-ce.png,
        title: Go to the "Devices" page. Click on your device to open the device details, then navigate to the "Attributes" tab. Select "Server attributes" as the entity attributes scope. Then, click the "plus" icon to add a new attribute;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/max-temperature-attribute-2-ce.png,
        title: Name the attribute "maxTemperature", select "Integer" as the value type, and set the value to 25;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/max-temperature-attribute-3-ce.png,
        title: Shared attribute is added.
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=maxTemperatureAttribute %}