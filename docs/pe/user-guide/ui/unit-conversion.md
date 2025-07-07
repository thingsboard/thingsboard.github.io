---
layout: docwithnav-pe
assignees:
- stitenko
title: Unit conversion
description: Unit conversion

unit-conversion-configuring:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-configuring-1-pe.png
        title: 'Unit conversion is configured in the <b>unit settings</b> available in the <b>telemetry keys</b>, <b>Y-axis</b>, and <b>thresholds</b> configurations within the widget settings.'
    1:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-configuring-2-pe.png
        title: 'Specify the <b>source unit</b> — the unit of the incoming telemetry value received from the server to ensure correct conversion to the target unit.'
    2:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-configuring-3-pe.png
        title: 'Enable unit conversion by toggling the "Enable unit conversion" switch. The system will automatically suggest commonly used target units for each unit system (e.g., °C for Metric, °F for Imperial, and °C for Hybrid). However, you can override these by selecting different units from the dropdown list. After, click "<b>Apply</b>" to save the changes.'
    3:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-configuring-4-pe.png
        title: 'Once unit conversion is enabled, an icon will appear in the Unit field indicating that the feature is active.'

range-color-settings:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/range-color-settings-1-pe.png
        title: 'Range color settings use the original telemetry value received from the server in its source units — before any unit conversion is applied.'

changing-unit-system:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/changing-unit-system-1-pe.png
        title: 'Click the three-dot icon in the top-right corner of the screen and select "<b>Account</b>".'
    1:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/changing-unit-system-2-pe.png
        title: 'In the <b>Profile</b> settings, choose the desired unit system from the dropdown list. Then, apply changes.'

unit-conversion-example-1:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-1-pe.png
        title: 'Let&#39;s walk through configuring the unit conversion feature using the <b>Temperature & Humidity dashboard</b> as an example. This dashboard contains widgets that display the <b>temperature</b> in degrees Celsius (<b>°C</b>) and <b>humidity</b> in percentage (<b>%</b>).'

unit-conversion-example-2:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-2-pe.png
        title: 'Switch to edit mode for the “Temperature and Humidity history” chart widget. First, configure the unit conversion for the "temperature" telemetry key: Click on the "Units" row in the "temperature" key field.'
    1:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-3-pe.png
        title: 'The source unit is already set to Celsius (°C), which is exactly what we need. To enable conversion, simply toggle on the “Enable unit conversion” option and specify the target unit for each unit system (e.g., °F for Imperial, °C for Metric and Hybrid). Then, click "Apply".'

unit-conversion-example-3:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-4-pe.png
        title: 'Repeat the same steps to convert temperature values for the Y-axis — enable unit conversion and specify the target units for each measurement system. Click "Apply".'
    1:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-5-pe.png
        title: 'For the threshold, also enable unit conversion and specify the target units for each unit system. Then, apply all changes.'

unit-conversion-example-4:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-6-pe.png
        title: 'Switch to edit mode for the "Temperature" card widget.'
    1:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-7-pe.png
        title: 'In the "Unit settings" dialog, enable unit conversion and provide the appropriate units for each unit system, just like before. Apply your changes and save the dashboard.'

unit-conversion-example-5:
    0:        
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-8-pe.png
        title: 'Since our current unit system is set to <b>Metric</b>, temperature values are shown in Celsius (<b>°C</b>).'

unit-conversion-example-6:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-9-pe.png
        title: 'Click the three-dot icon in the top-right corner of the screen and select "<b>Account</b>".'
    1:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-10-pe.png
        title: 'In the <b>Profile</b> settings, choose the <b>Imperial</b> unit system from the dropdown list. Then, apply changes.'

unit-conversion-example-7:
    0:
        image: https://img.thingsboard.io/user-guide/ui/widgets/unit-conversion/unit-conversion-example-11-pe.png
        title: 'Return to the dashboard — you will now see that the temperature value, Y-axis labels, and threshold have been converted from Celsius to Fahrenheit according to the selected unit system.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/unit-conversion.md %}