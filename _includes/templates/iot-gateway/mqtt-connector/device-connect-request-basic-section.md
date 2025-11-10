In order to add new connect request mapping, follow these steps:

{% assign ConnectRequest = '
    ===
        image: /images/gateway/mqtt-connector/mqtt-gateway-configuring-11-ce.png,
        title: Click the “**Add mapping**” under “**Requests mapping**” section to add new connect request mapping.
    ===
        image: /images/gateway/mqtt-connector/mqtt-gateway-configuring-12-ce.png,
        title: Select "**Connect request**" in the **Request type** field, enter the "**Topic filter**", and select source 
        type for **Name** and **Profile name** fields (`Message`, `Constant`, or `Topic`). Enter the corresponding 
        value which can be [json path](/docs/iot-gateway/config/mqtt/#json-path), [regex](/docs/iot-gateway/config/mqtt/#regular-expressions), or constant value based on the selected source type.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=ConnectRequest %}
