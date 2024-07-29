This option allows you to use a custom converter for specific data tasks. 
You need to add your custom converter to the extension folder and enter its class name in the UI settings. 
Any keys you provide will be sent as configuration to your custom converter.

{% assign dataConversionBasicCustomSubsection = '
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-custom-subsection-1-ce.png,
        title: Select "Custom" payload type, and fill in the fields in the "Device" section. Then click "pencil" icon of the "Keys" section to add new key;
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-custom-subsection-2-ce.png
        title: In the opened window click "Add key". Enter the key name and its value. Click "Apply";
    ===
        image: https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-basic-custom-subsection-3-ce.png
        title: Click "Add".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=dataConversionBasicCustomSubsection %}