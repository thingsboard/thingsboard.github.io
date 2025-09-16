In order to add new attribute update, follow these steps:

{% assign attributeUpdatesSubsection = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/attribute-updates-1-ce.png,
        title: Navigate to the "**Attribute updates**" section and click the "**pencil**" icon;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/attribute-updates-2-ce.png,
        title: In the opened window click "**Add attribute update**";
===
        image: https://img.thingsboard.io/gateway/modbus-connector/attribute-updates-3-ce.png,
        title: Set an attribute key name, type, function code, objects count, and address. Then, click "**Apply**".
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributeUpdatesSubsection %}
