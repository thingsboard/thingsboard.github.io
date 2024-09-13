Converter for this payload type designed for binary MQTT payloads, this converter directly interprets binary data to retrieve device names and device profile names, along with attributes and time series, using specific byte positions for data extraction.

{% assign dataConversionBasicBytesSubsection = '
    ===
        image: /images/gateway/mqtt-connector/data-conversion-basic-bytes-subsection-1-ce.png,
        title: Select "Bytes" payload type, and fill in the fields in the "Device" section. Then click "pencil" icon of the "Attributes" section to add new attribute key;
    ===
        image: /images/gateway/mqtt-connector/data-conversion-basic-bytes-subsection-2-ce.png,
        title: In the opened window click "Add attribute". Enter the key name, select the type and enter the value of the key. Click "Apply";
    ===
        image: /images/gateway/mqtt-connector/data-conversion-basic-bytes-subsection-3-ce.png,
        title: Now click on the "pencil" icon of the "Time series" section to add new time series key;
    ===
        image: /images/gateway/mqtt-connector/data-conversion-basic-bytes-subsection-4-ce.png,
        title: In the opened window click "Add time series". Enter the key name, select the type and enter the value of the key. Click "Apply";
    ===
        image: /images/gateway/mqtt-connector/data-conversion-basic-bytes-subsection-5-ce.png,
        title: Click "Add".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=dataConversionBasicBytesSubsection %}