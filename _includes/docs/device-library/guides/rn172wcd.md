
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://en.radionode365.com/kr/product/product_view.php?idx=111&part_idx=1" %}
{% assign officialManualLink = "/docs/device-library/resources/manuals/rn172wcd-user-manual-v1.01.pdf" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [RN172WCD user manual](' | append: officialManualLink | append: '){: target="_blank"}
  '
  %}

## Introduction

The [RN172WCD]({{deviceVendorLink}}){: target="_blank"} by RADIONODE is a versatile Wi-Fi sensor data transmitter designed for real-time environmental monitoring in industrial, commercial, and laboratory settings.   
It supports a wide range of UA series sensors, including gas detectors (CO₂, O₂, NH₃, etc.), thermal sensors (PT100, thermocouples), and analog transmitters (4–20 mA, 0–1 V), enabling flexible deployment across various applications.   
With Wi-Fi (IEEE 802.11 b/g), MODBUS TCP, and HTTP/HTTPS connectivity, the device seamlessly transmits data to cloud platforms like Radionode365, local servers, or PLCs for centralized monitoring. Additional features include a built-in buzzer, dual-color LED indicators, and a 4-digit display for real-time readings and alerts.   
The RN172WCD also supports remote configuration via Telnet and offers robust alarm functionalities, including SMS and voice call notifications, making it an ideal solution for safety-critical environments such as gas monitoring, HVAC systems, and industrial automation.

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Create device on ThingsBoard

For simplicity, we will create the device manually using the UI.
- Log in to your ThingsBoard instance and navigate to **Entities**. Then open the **Devices** page.
- Click the **+** icon in the top right corner of the table and select **Add new device**. 
- Enter a device name, for example, **My Device**. No other changes are required at this stage. 
- Click **Add** to create the device.

Your device has been successfully added.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-1.png)

## Install required Payload decoders

After adding the device we need to create an Integration for creating the device connection with the thingsboard platform.

- Click the integrations tab and start to add an integration by pressing the “+” sign.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-2.png)

- Click the integrations tab and start to add an integration by selecting an integration type.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-3.png)

- Here we are selecting the HTTP for our RN172 device.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-4.png)

- Then add a name for the integration.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-5.png)

The next step is to <b>create a data converter</b> for our device.

- Give a name to the data converter
- Click the decoding configuration as js type and add the code given below.

```javascript
/**
 * Helper function to decode raw payload bytes to a string using a simple loop.
 * This method is more robust and compatible with older JS environments.
 */
function decodeToString(payload) {
    var text = "";
    var i = 0;
    while (i < payload.length) {
        text += String.fromCharCode(payload[i]);
        i++;
    }
    return text;
}

/**
 * Helper function to decode raw payload bytes to a JSON object.
 * It safely parses the string and returns a JSON object.
 */
function decodeToJson(payload) {
    try {
        var str = decodeToString(payload);
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

/**
 * A custom parser to handle URL-encoded payloads.
 */
function parseUrlEncoded(payload) {
    var data = {};
    var bodyStr = decodeToString(payload).trim();
    if (bodyStr.indexOf('=') !== -1) {
        var pairs = bodyStr.split("&");
        var i = 0;
        while (i < pairs.length) {
            var parts = pairs[i].split("=");
            if (parts.length === 2) {
                var key = decodeURIComponent(parts[0].trim());
                var value = decodeURIComponent((parts[1] || "").trim());
                data[key] = value;
            }
            i++;
        }
    }
    return data;
}

// --- Main ThingsBoard Decode Function ---
function decodePayload(payload, metadata) {
    var deviceName = "Unknown_Device";
    var attributes = {};
    var telemetry = {};
    var telemetryTimestamp = null;
    var data = null;
    var detectedModel = null;

    // --- Model Lookup Table ---
    const ua_models_js = {
        "UA58-KFG": ["CO", "O2", "H2S", "CO2"],
        "UA58-CO2": ["CO2", "TEMP", "RH"],
        "UA58-DFG": ["CO", "CH2O", "C6H6"],
        "UA58-LEL": ["LEL", "TEMP", "RH", "CLAS"],
        "UA58-APC": ["CO2", "O3", "TEMP", "RH"],
        "UA50": ["TVOC", "ECO2"],
        "UA52-CO2": ["CO2", "TEMP"],
        "UA52-O2": ["O2", "TEMP"],
        "UA53-CO": ["CO", "TEMP", "RH"],
        "UA53-H2S": ["H2S", "TEMP", "RH"],
        "UA53-O3": ["O3", "TEMP", "RH"],
        "UA53-SO2": ["SO2", "TEMP", "RH"],
        "UA53-NO2": ["NO2", "TEMP", "RH"],
        "UA54-NH3": ["NH3", "TEMP", "RH"],
        "UA54-H2S": ["H2S", "TEMP", "RH"],
        "UA54-C2H4": ["C2H4", "TEMP", "RH"],
        "UA54-EO": ["EO", "TEMP", "RH"],
        "UA54-H2": ["H2", "TEMP", "RH"],
        "UA54-HCL": ["HCL", "TEMP", "RH"],
        "UA54-NO": ["NO", "TEMP", "RH"],
        "UA54-CL2": ["CL2", "TEMP", "RH"],
        "UA54-O2": ["O2", "TEMP", "RH"],
        "UA54-VOC": ["VOC", "TEMP", "RH"],
        "UA10": ["TEMP", "RH"],
        "UA11": ["TEMP", "TEMP"],
        "UA12": ["TEMP", "TEMP"],
        "UA13": ["TEMP"],
        "UA20A": ["mA", "mA"],
        "UA20B": ["mA"],
        "UA20C": ["mV", "mV"],
        "UA20D": ["Puls"],
        "UA20E": ["CH1", "CH2", "CH3", "CH4", "CH5", "CH6"],
        "UA59-CO2": ["CO2", "TEMP"],
        "UA60-PMVT": ["PM25", "PM10", "PM01", "TVOC", "TEMP", "RH"],
        "UA-DEVICE": ["TEMP", "RH"],
        "RN400-PG": [],
        "RN172WC": []
    };

    // --- Step 1: Payload Parsing ---
    var inputString = decodeToString(payload).trim();
    var atcqMatch = inputString.match(/ATCQ\s+([^,]+),([^,]+),([^,]+),([^,]+)/);
    
    if (atcqMatch) {
        // ATCQ payload format
        data = {};
        data.co2 = parseFloat(atcqMatch[1]);
        data.o3 = parseFloat(atcqMatch[2]);
        data.temperature = parseFloat(atcqMatch[3]);
        data.humidity = parseFloat(atcqMatch[4]);
        detectedModel = 'UA58-APC';
    } else {
        // Other payload formats (JSON, URL-encoded)
        data = decodeToJson(payload);
        if (!data) {
            data = parseUrlEncoded(payload);
        }
    }

    if (!data || Object.keys(data).length === 0) {
        return null;
    }

    // --- Step 2: Model Identification and Override ---
    var originalSModel = data.model || data.SMODEL;
    detectedModel = detectedModel || originalSModel;

    // Override the model if the payload structure matches UA58-APC.
    if (detectedModel === 'UA-DEVICE' && data.C000) {
        var channelData = data.C000.split('|').filter(x => x.trim() !== '');
        if (channelData.length === 5) {
            detectedModel = 'UA58-APC';
        }
    }

    var modelVars = ua_models_js[detectedModel];

    // --- Step 3: Process Telemetry and Attributes ---
    if (data.mac) {
        deviceName = data.mac;
        attributes.mac = data.mac;
    }
    if (data.ver) attributes.firmware = data.ver;
    if (originalSModel) attributes.SMODEL = originalSModel;
    if (data.model) attributes.model = data.model;
    if (detectedModel) attributes.detected_model = detectedModel;
    if (data.ip) attributes.ip = data.ip;
    if (data.splrate) attributes.samplingRate = parseFloat(data.splrate);
    if (data.rsti) attributes.rsti = parseFloat(data.rsti);
    if (data.interval) attributes.transmitInterval = parseFloat(data.interval);
    if (data.tags) attributes.tags = data.tags;

    // Process dynamic channels based on the detected model
    if (detectedModel && modelVars) {
        var dynamicKey;
        for (dynamicKey in data) {
            if (dynamicKey.match(/^(C|P|CH)\d+/)) {
                var channelData = data[dynamicKey].split('|').filter(x => x.trim() !== '');
                if (channelData.length > 1) {
                    telemetryTimestamp = parseInt(channelData[0]) * 1000;
                    var i = 0;
                    while (i < modelVars.length) {
                        var varName = modelVars[i];
                        if (varName !== '----') {
                            var value = parseFloat(channelData[i + 1]);
                            if (!isNaN(value)) {
                                telemetry[varName.toLowerCase()] = value;
                            }
                        }
                        i++;
                    }
                }
            }
        }
    }

    // Process static keys
    if (data.co2 !== undefined) telemetry.co2 = parseFloat(data.co2);
    if (data.o3 !== undefined) telemetry.o3 = parseFloat(data.o3);
    if (data.temperature !== undefined) telemetry.temperature = parseFloat(data.temperature);
    if (data.humidity !== undefined) telemetry.humidity = parseFloat(data.humidity);
    if (data.sig !== undefined) telemetry.signal = parseFloat(data.sig);
    if (data.bat !== undefined) telemetry.battery = parseFloat(data.bat);
    if (data.analog_1 !== undefined) telemetry.analog_1 = parseFloat(data.analog_1);
    if (data.analog_2 !== undefined) telemetry.analog_2 = parseFloat(data.analog_2);

    // Process RN172WC 'tags' payload separately
    if (detectedModel === "RN172WC" && data.tags) {
        var tagValues = data.tags.split('|').filter(s => s.trim() !== '');
        if (tagValues.length >= 2) {
            telemetry.temperature = parseFloat(tagValues[0].trim());
            telemetry.humidity = parseFloat(tagValues[1].trim());
        }
    }

    // If no telemetry values are found, add a heartbeat to ensure a valid payload
    if (Object.keys(telemetry).length === 0) {
        telemetry.heartbeat = Date.now();
    }
    
    // --- Step 4: Construct the final output object in the correct format ---
    var result = {
        deviceName: deviceName,
        telemetry: {}
    };

    var finalTelemetryTs = telemetryTimestamp || Date.now();
    for (var key in telemetry) {
        result.telemetry[key] = telemetry[key];
    }

    for (var key in attributes) {
        result.telemetry[key] = attributes[key];
    }
    
    // Return the formatted result for ThingsBoard.
    return result;
}

return decodePayload(payload, metadata);
```
{:.copy-code.expandable-12}

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-6.png)

- Then completed the integration setup.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-7.png)

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-8.png)

## Connect device to ThingsBoard

- Download the [RadioNode terminal program](https://en.radionode365.com/kr/customer/download.php?cate=32){:target="_blank"}
- Run the RadioNode terminal program
- Enter the password radionode114 and enter the console menu.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-9.png)

- In the network setup we can add the Wi-Fi SSID and Password.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-10.png))

- Go to the "2. System Setup" menu and select "B. Set Destination of HTTP". 
- Select "2:CUSTOMER_V2" from the three destinations. 

This means the data will be sent to the custom server V2.<br>

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-11.png)

- From the **Integration** tab of ThingsBoard, copy **HTTP endpoint URL** to set in the Radionode terminal program.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-12.png)

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-13.png)

Go to the "4. HTTP Destination Setup" menu and select "A. Set Host URL:thingsboard.cloud" Select "D.Set HTTP DATAIN : endpoint from the integration", "E.Set HTTP TIMESTAMP:endpoint from the integration", "F.Set HTTP BACKUPIN :endpoint from the integration".

## Check data on ThingsBoard 

Once the device is connected, On the devices page you can check the latest telemetry.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-14.png)

## Setting up the Dashboard

Now configure the dashboard by adding the necessary widgets.

- Go to the **Dashboards** page and press the **+** button to create a new Dashboard.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-15.png)

- **Enter a name** for the Dashboard and then click the **Add** button.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-16.png)

After creation, the dashboard will open automatically, and you can start adding widgets right away. Click **Add widget**.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-17.png)

ThingsBoard provides many widget options to choose from. For example, select a **Time series chart** from the **Charts** widget bundle to visualize data from your device.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-18.png)

- In the widget settings, you can define the display [time window](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window){:target="_blank"}. 
- In the **Datasource** field, specify your device whose data you want to display. If you need to add another data series, click **Add series**.   
- Once configured, click **Add**. Don&#39;t forget to save the dashboard.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-19.png)

A sample dashboard featuring the Indoor temperature chart card, Indoor humidity chart card, and Temperature and Humidity history line chart.

You can [download this dashboard in JSON format](/docs/device-library/resources/dashboards/rn172plus/temp-and-rh-dashboard.json){:target="_blank" download="temp-and-rh-dashboard.json"} and [import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into your own ThingsBoard instance.

![image](/images/devices-library/ready-to-go-devices/rn172wcd/rn172wcd-20.png)
{% include add-device-banner.liquid %}
