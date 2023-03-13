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

sparkplug-device-created:
    0:
        image: /images/sparkplug/sparkplug-device-created-before.png
        title: 'Creating The Device Sparkplug before connect'
    1:
        image: /images/sparkplug/sparkplug-device-created-after.png
        title: 'Created The Device Sparkplug after connect'

sparkplug-node-device-attributes:
    0:
        image: /images/sparkplug/sparkplug-device-created-before.png
        title: 'Metric of MQTT EON with name <span style="color:brown">["Node Control/Next Server"]</span> with <b>value</b> send to attributes of MQTT EON <span style="color:green">“NodeSparkplug”</span>'
    1:
        image: /images/sparkplug/sparkplug-device-created-after.png
        title: 'Metrics of Device with names <span style="color:brown">["Outputs/LEDs/Green", "Last Update FW"]</span> with <b>value</b> send to attributes of Device <span style="color:green">“DeviceSparkplugId1”</span>'

---

{% include docs/reference/mqtt-sparkplug-api.md %}
