In order to add new attribute update mapping, follow these steps:

{% assign AttributesUpdate = '
    ===
        image: /images/gateway/mqtt-connector/mqtt-gateway-configuring-11-ce.png,
        title: Click the "**Add mapping**" under "**Requests mapping**" section to add new attribute request mapping.
    ===
        image: /images/gateway/mqtt-connector/mqtt-attribute-updates-1.png,
        title: Select "**Attribute update**" in the **Request type** field, enter the "**Device name filter**"
    ===
        image: /images/gateway/mqtt-connector/mqtt-attribute-updates-2.png,
        title: Configure the **Attribute filter**, **Response value expression**, and **Response topic expression** fields.
        You can also set the **Retain** option to determine whether the attribute response message should be retained by the MQTT broker.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=AttributesUpdate %}
