---
layout: docwithnav
assignees:
- nick
title: MQTT Sparkplug API
description: Supported MQTT Sparkplug API Reference for IoT Devices 

infrastructure-components:
    0:
        image: /images/sparkplug/infrastructure-components.png
        title: 'Sparkplug Network Infrastructure Components'

sparkplug-device-profile-created:
    0:
        image: /images/sparkplug/sparkplug-device-profile-created.png
        title: 'Created The Device profile for device type MQTT EON'
    1:
        image: /images/sparkplug/sparkplug-device-profile-created-config.png
        title: 'Transport configuration the Device profile for device type MQTT EON'
    2:
        image: /images/sparkplug/sparkplug-device-profile-created-config-without-attr.png
        title: 'Transport configuration the Device profile for device type MQTT EON (Without Attribute Metric...) '

sparkplug-node-created:
    0:
        image: /images/sparkplug/sparkplug-node-created.png
        title: 'Creating The Device MQTT EON with ID <span style="color:brown">"NodeSparkplug"</span> before connect.'
    1:
        image: /images/sparkplug/sparkplug-node-created-credentials.png
        title: 'The Type Credential of The Device MQTT EON is <b>Access token</b>, value of token <span style="color:brown">"admin"</span>.'

sparkplug-node-device-attributes:
    0:
        image: /images/sparkplug/sparkplug-node-attributes-before-update.png
        title: 'Metric of MQTT EON with name <span style="color:brown">["Node Control/Next Server"]</span> with <b>value</b> the attributes after Birth <b>before update</b> of MQTT EON <span style="color:green">“NodeSparkplug”</span>'
    1:
        image: /images/sparkplug/sparkplug-node-attributes-after-update.png
        title: 'Metric of MQTT EON with name <span style="color:brown">["Node Control/Next Server"]</span> with <b>value</b> send  to attributes of MQTT EON <span style="color:green">“NodeSparkplug”</span>'
    2:
        image: /images/sparkplug/sparkplug-device1-attributes-before-update.png
        title: 'Metrics of Device with names <span style="color:brown">["Outputs/LEDs/Green", "Last Update FW"]</span> with <b>value</b> the attributes after Birth <b>before update</b>  of Device <span style="color:green">“DeviceSparkplugId1”</span>'
    3:
        image: /images/sparkplug/sparkplug-device1-attributes-after-update.png
        title: 'Metrics of Device with names <span style="color:brown">["Outputs/LEDs/Green", "Last Update FW"]</span> with <b>value</b> send to attributes of Device <span style="color:green">“DeviceSparkplugId1”</span>'

sparkplug-node-device-telemetry:
    0:
        image: /images/sparkplug/sparkplug-node-telemetry-before-update.png
        title: 'Metric of MQTT EON with name <span style="color:brown">["Current Grid Voltage", "Properties/Hardware Make"]</span> with <b>value</b> the telemetry after Birth <b>before update</b> of MQTT EON <span style="color:green">“NodeSparkplug”</span>'
    1:
        image: /images/sparkplug/sparkplug-node-telemetry-after-update.png
        title: 'Metric of MQTT EON with name <span style="color:brown">["Current Grid Voltage", "Properties/Hardware Make"]</span> with <b>value</b> send  to telemetry of MQTT EON <span style="color:green">“NodeSparkplug”</span>'
    2:
        image: /images/sparkplug/sparkplug-device1-telemetry-before-update.png
        title: 'Metrics of Device with names <span style="color:brown">["Properties/Hardware Make", "Current Grid Voltage"]</span> with <b>value</b> the telemetry after Birth <b>before update</b>  of Device <span style="color:green">“DeviceSparkplugId1”</span>'
    3:
        image: /images/sparkplug/sparkplug-device1-telemetry-after-update.png
        title: 'Metrics of Device with names <span style="color:brown">["Properties/Hardware Make", "Current Grid Voltage"]</span> with <b>value</b> send to telemetry of Device <span style="color:green">“DeviceSparkplugId1”</span>'

sparkplug-node-device-change-shared-sttributes:
    0:
        image: /images/sparkplug/sparkplug-node-telemetry-before-update.png
        title: 'Metrics of Device with names <span style="color:brown">["Outputs/LEDs/Green"]</span>, send value <b>["true"]</b>, dataType value <b>["Boolean"]</b> to Device <span style="color:green">“DeviceSparkplugId1”</span>' 
    1:
        image: /images/sparkplug/sparkplug-node-telemetry-after-update.png
        title: 'Metric of MQTT EON with name <span style="color:brown">["Current Grid Voltage", "Properties/Hardware Make"]</span> with <b>value</b> send  to telemetry of MQTT EON <span style="color:green">“NodeSparkplug”</span>'
    2:
        image: /images/sparkplug/sparkplug-device1-telemetry-before-update.png
        title: 'Metrics of Device with names <span style="color:brown">["Properties/Hardware Make", "Current Grid Voltage"]</span> with <b>value</b> the telemetry after Birth <b>before update</b>  of Device <span style="color:green">“DeviceSparkplugId1”</span>'
    3:
        image: /images/sparkplug/sparkplug-device1-telemetry-after-update.png
        title: 'Metrics of Device with names <span style="color:brown">["Properties/Hardware Make", "Current Grid Voltage"]</span> with <b>value</b> send to telemetry of Device <span style="color:green">“DeviceSparkplugId1”</span>'

---

{% include docs/reference/mqtt-sparkplug-api.md %}
