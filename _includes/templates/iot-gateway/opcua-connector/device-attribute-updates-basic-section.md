In order to add new attribute update, follow these steps:

{% assign attrUpdates = '
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-11-ce.png,
        title: Click the “**pencil**” icon in the “**Attribute updates**” section to add new attribute update;
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-12-ce.png,
        title: Click on "**Add attribute update**" in the opened window;
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-gateway-configuring-13-ce.png,
        title: Enter the "**Key**" field, select the "**Type**" (can be [path](#path-types), [identifier](#identifier-types) or constant), enter "**Value**" and click "**Apply**" button.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=attrUpdates %}
