In order to add new attribute request mapping, follow these steps:

{% assign AttributesRequest = '
    ===
        image: /images/gateway/mqtt-connector/mqtt-gateway-configuring-11-ce.png,
        title: Click the "**Add mapping**" under "**Requests mapping**" section to add new attribute request mapping.
    ===
        image: /images/gateway/mqtt-connector/mqtt-attribute-requests-1.png,
        title: Select "**Attribute request**" in the **Request type** field, enter the "**Topic filter**"
    ===
        image: /images/gateway/mqtt-connector/mqtt-attribute-requests-2.png,
        title: Configure the **Device name expression**, **Response topic expression**, and **Attribute name expression** fields. 
        Select the source type for each field (`Message`, `Topic`, or `Constant`) and enter the corresponding values. 
        You can also set the **Retain** option to determine whether the attribute response message should be retained by the MQTT broker.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=AttributesRequest %}
