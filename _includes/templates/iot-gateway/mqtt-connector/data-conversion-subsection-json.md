Converter for this payload type processes MQTT messages in JSON format. 
It uses JSON Path expressions to extract vital details such as device names, device profile names, attributes, and time series from the message. 
And regular expressions to get device details from topics.

{% assign dataConversionBasicJsonSubsection = '
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-json-subsection-1-ce.png,
        title: Select "JSON" payload type, and fill in the fields in the "Device" section. Then click "pencil" icon of the "Attributes" section to add new attribute key;
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-json-subsection-2-ce.png,
        title: In the opened window click "Add attribute". Enter the key name, select the type and enter the value of the key. Click "Apply";
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-json-subsection-3-ce.png,
        title: Now click on the "pencil" icon of the "Time series" section to add new time series key;
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-json-subsection-4-ce.png,
        title: In the opened window click "Add time series". Enter the key name, select the type and enter the value of the key. Click "Apply";
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-json-subsection-5-ce.png,
        title: Click "Add".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=dataConversionBasicJsonSubsection %}