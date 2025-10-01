![image](/images/gateway/modbus-connector/values-subsection-1-ce.png)

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-rpc-methods) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples-2) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To add new value to the gateway slave, use the following steps:

{% assign maxTemperatureAttribute = '
    ===
        image: /images/gateway/modbus-connector/add-new-value-to-gateway-slave-1-ce.png,
        title: Click on "**pencil**" icon in the row of the selected section;
    ===
        image: /images/gateway/modbus-connector/add-new-value-to-gateway-slave-2-ce.png,
        title: In the opened window click "**Add attribute**" or other (depends on selected section);
    ===
        image: /images/gateway/modbus-connector/add-new-value-to-gateway-slave-3-ce.png,
        title: Fill in key, type, function code, objects count, address and value fields. Click "Apply".
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=maxTemperatureAttribute %}