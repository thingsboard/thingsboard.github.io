---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Data function based on telemetry from 2 devices
description: Data function based on telemetry from 2 devices using the Calculated fields feature

adding-asset:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/adding-asset-1-pe.png
        title: 'Go to the "Asset" page of the "Entities" section. Click on the "+" icon in the top right corner of the table, and select "Add new asset" from drop-down menu. Create a new asset and a corresponding asset profile for it. Name the asset "Warehouse A", and the profile — "warehouse".'

added-devices:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/adding-devices-1-pe.png
        title: 'Go to the "Devices" page of the "Entities" section. Create two devices named "Indoor Thermometer" and "Outdoor Thermometer". Create a device profile called "thermometer" and assign it to these devices.'
    
adding-relation-from-devices:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/adding-relation-from-devices-1-pe.png
        title: 'Create relationships between the Warehouse A asset and the Indoor Thermometer and Outdoor Thermometer devices.'

thermostat-emulator-nodes:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/thermostat-emulator-nodes-1-pe.png
        title: 'Let&#39;s add two generator nodes that will periodically produce messages with random temperature readings. Route the messages from these nodes to the device profile node.'
    1:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/thermostat-emulator-nodes-2-pe.png
        title: 'Generator node for the "Indoor Thermometer" device.'
    2:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/thermostat-emulator-nodes-3-pe.png
        title: 'Generator node for the "Outdoor Thermometer" device.'

thermometer-telemetry:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/indoor-thermometer-telemetry-1-pe.png
        title: 'Go to the "Devices" page under the "Entities" section. Select the "Indoor Thermometer" device and open the "Latest telemetry" tab, where you will see the generated telemetry data.'
    1:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/outdoor-thermometer-telemetry-1-pe.png
        title: 'Select the "Outdoor Thermometer" device and open the "Latest telemetry" tab, where you will see the generated telemetry data.'

create-calculated-field-1:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/create-calculated-field-1-pe.png
        title: 'Go back to your device and open its details, and navigate to the "Calculated fields" tab. Click the "plus" icon button and select "Create new calculated field" from the dropdown menu.'

create-calculated-field-2:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/create-calculated-field-2-pe.png
        title: 'The calculated field configuration window will open. Enter a descriptive title for the calculated field. Select "Simple" as the calculated field type. This allows you to perform uses basic mathematical operations and functions.'

create-calculated-field-3:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/create-calculated-field-3-pe.png
        title: 'Click the "Add argument" button, enter "indoorTemperature" as the argument name, select the "Indoor Thermometer" device as the entity, keep the argument type as "Latest telemetry", set "temperature" as the time series key, and click "Add".'

create-calculated-field-4:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/create-calculated-field-4-pe.png
        title: 'Click the "Add argument" button again, enter "outdoorTemperature" as the argument name, select the "Outdoor Thermometer" device as the entity, keep the argument type as "Latest telemetry", set "temperature" as the time series key, and finally click the "Add" button.'

create-calculated-field-5:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/create-calculated-field-5-pe.png
        title: 'Enter the mathematical expression for the calculation using the variables defined in the "Arguments" section.'

create-calculated-field-6:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/create-calculated-field-6-pe.png
        title: 'Set the "Time series" as the output type. Set "deltaTemperature" as the name of the variable that will store the calculation result. Optionally, specify the number of decimal places. To finish adding the calculated field, click "Add".'
    1:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/create-calculated-field-7-pe.png
        title: 'The calculated field has been successfully added to your device.'

check-calculated-field-configuration:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/check-calculated-field-configuration-1-pe.png
        title: 'To verify that your configuration is working correctly, go to the “Latest telemetry” tab of the "Warehouse A" asset. If everything is set up properly, you should see the "deltaTemperature" key and its value.'

delta-temperature-dashboard:
    0:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/delta-temperature-dashboard-1-pe.png
        title: 'Download and import the dashboard specifically prepared for this example to monitor the temperature difference in real time.'
    1:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/delta-temperature-dashboard-2-pe.png
        title: 'After importing, you&#39;ll need to specify your asset "Warehouse A" in the entity alias to display the correct data.'
    2:
        image: https://img.thingsboard.io/tutorials/function-based-on-telemetry-from-two-devices/delta-temperature-dashboard-3-pe.png
        title: 'After that, the dashboard should display the temperature delta data between the two thermometers of the "Warehouse A" asset.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/tutorials/function-based-on-telemetry-from-two-devices.md %}