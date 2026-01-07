---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Calculated fields
description: Calculated fields

create-new-calculated-field:
    0:
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-pe.png
        title: 'To create a calculated field, select to the Entity or Profile where the calculated field should be applied. In the entity details window, navigate to the "Calculated fields" tab. Click the "plus" icon button and select "Create new calculated field" from the dropdown menu.'
    1:
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-pe.png
        title: 'The calculated field configuration window will open — let&#39;s proceed with the setup.'

calculated-field-general:
    0:
        image: /images/user-guide/calculated-fields/calculated-field-general-1-pe.png
        title: 'Enter a title for the calculated field, and select the calculation type: Simple or Script.'

argument-name:
    0:
        image: /images/user-guide/calculated-fields/argument-name-1-pe.png
        title: 'Click "Add argument" and fill in the required fields.'

attribute-argument-type:
    0:
        image: /images/user-guide/calculated-fields/attribute-argument-type-1-pe.png
        title: 'Select the argument type "Attribute", choose the attribute scope, and specify the attribute key. Optionally, set the default value for the attribute. Finally, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/attribute-argument-type-2-pe.png
        title: 'A new argument has been added.'

latest-telemetry-argument-type:
    0:
        image: /images/user-guide/calculated-fields/latest-telemetry-argument-type-1-pe.png
        title: 'Select the argument type "Latest telemetry", and specify the time series key. If necessary, set a default value for the time series. Finally, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/latest-telemetry-argument-type-2-pe.png
        title: 'A new argument has been added.'

time-series-rolling-argument-type:
    0:
        image: /images/user-guide/calculated-fields/time-series-rolling-argument-type-1-pe.png
        title: 'Select the argument type "Time series rolling", and specify the time series key. Set the time period for data collection and the maximum number of values to be processed. Finally, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/time-series-rolling-argument-type-2-pe.png
        title: 'A new argument has been added.'

calculated-field-result:
    0:
        image: /images/user-guide/calculated-fields/calculated-field-result-1-pe.png
        title: 'After clicking the "Add" button, the calculated field will be added to your entity or profile.'

how-to-configure-reprocessing:
    0:
        image: /images/user-guide/calculated-fields/how-to-configure-reprocessing-1-pe.png
        title: 'Choose the target Entity or Profile, go to the "Calculated fields" tab, and either create a new calculated field or select an existing one that needs historical telemetry reprocessing. Click the "Reprocess calculated field" icon next to the desired field.'
    1:
        image: /images/user-guide/calculated-fields/how-to-configure-reprocessing-2-pe.png
        title: 'In the pop-up window, define the time interval for which you want to reprocess telemetry data, and click "Reprocess" — the system will start recalculating and update historical telemetry data according to the latest logic.'
    2:
        image: /images/user-guide/calculated-fields/how-to-configure-reprocessing-3-pe.png
        title: 'Once the data reprocessing is complete, click "Finish".'

reprocessing-example-1:
    0:
        image: /images/user-guide/calculated-fields/reprocessing-example-1-pe.png
        title: 'As shown on the widget, that displays time series data for the Smart Device, the dew point was first calculated at 13:44:35. Prior to that, no dew point calculations had been performed.'

reprocessing-example-2:
    0:
        image: /images/user-guide/calculated-fields/reprocessing-example-2-pe.png
        title: 'Navigate to the "<b>Calculated fields</b>" tab of your Smart Device and click the "<b>Reprocess calculated field</b>" icon button in the row of the specific calculated field.'
    1:
        image: /images/user-guide/calculated-fields/reprocessing-example-3-pe.png
        title: 'In the pop-up window, specify the time interval for which the data should be reprocessed. Click "<b>Reprocess</b>".'
    2:
        image: /images/user-guide/calculated-fields/reprocessing-example-4-pe.png
        title: 'Once the data reprocessing is complete, click "<b>Finish</b>".'

reprocessing-example-3:
    0:
        image: /images/user-guide/calculated-fields/reprocessing-example-5-pe.png
        title: 'Dew point values have been recalculated for the historical period you specified during the reprocessing configuration.'

task-manager:
    0:
        image: /images/user-guide/calculated-fields/task-manager-1-pe.png
        title: ''

calculated-field-debug-events-2:
    0:
        image: /images/user-guide/calculated-fields/calculated-field-debug-events-2-pe.png
        title: 'Check the debug events by clicking the "Events" icon button".'
    1:
        image: /images/user-guide/calculated-fields/calculated-field-debug-events-3-pe.png
        title: 'The debugging window displays calculated field arguments and the computed result.'

export-calculated-field:
    0:
        image: /images/user-guide/calculated-fields/export-calculated-field-1-pe.png
        title: 'To export a calculated field, navigate to the "Calculated fields" tab of the target entity or profile and click the export button located in the row of the specific calculated field.'

import-calculated-field-1:
    0:
        image: /images/user-guide/calculated-fields/import-calculated-field-1-pe.png
        title: 'Navigate to the "Calculated fields" tab of the target entity or profile. Click the "plus" icon button, and select "Import calculated field" from the dropdown menu.'
    1:
        image: /images/user-guide/calculated-fields/import-calculated-field-2-pe.png
        title: 'In the opened window, upload the JSON file with the calculated field configuration and click "Import".'
    2:
        image: /images/user-guide/calculated-fields/import-calculated-field-3-pe.png
        title: 'When importing, the edit window will open to allow modifications.'
    3:
        image: /images/user-guide/calculated-fields/import-calculated-field-4-pe.png
        title: 'Ensure the imported field is correctly applied and update any necessary parameters.'
    4:
        image: /images/user-guide/calculated-fields/import-calculated-field-5-pe.png
        title: 'Click "Add" to complete the import.'
    5:
        image: /images/user-guide/calculated-fields/import-calculated-field-6-pe.png
        title: 'You have imported the calculated field configuration.'
  
example-dew-point-calculated-fields:
    0:
        image: /images/user-guide/calculated-fields/example-dew-point-calculated-fields-1-pe.png
        title: 'Enter a title for the calculated field and select "Simple" as the calculation type. In the "Arguments" section, click "Add argument". Set the argument name to "temperature", choose "Current entity" as the entity type, leave the argument type as "Latest telemetry", and specify the time series key as "temperature". Click "Add".'
    1:
        image: /images/user-guide/calculated-fields/example-dew-point-calculated-fields-2-pe.png
        title: 'Similarly, create an argument named "humidity". All other parameters should remain the same, except for the telemetry key name — set it to "humidity".'
    2:
        image: /images/user-guide/calculated-fields/example-dew-point-calculated-fields-3-pe.png
        title: 'Define a mathematical expression for the calculation using the variables defined in the "Arguments" section. In the Output section, set the output type to "Time series" and assign "dewPoint" as the name of the new variable that will store the calculation result. Finally, click "Add".'
    3:
        image: /images/user-guide/calculated-fields/example-dew-point-calculated-fields-4-pe.png
        title: 'The calculated field has now been added.'
    4:
        image: /images/user-guide/calculated-fields/example-dew-point-calculated-fields-5-pe.png
        title: 'Now open the calculated field debugging window. Here, you can view the calculated field arguments and the computed result.'
    5:
        image: /images/user-guide/calculated-fields/example-dew-point-calculated-fields-6-pe.png
        title: 'Go to the "Latest telemetry" tab. You&#39;ll see three keys: "temperature" and "humidity" — the telemetry values received from the device, and "dewPoint" — the result of the calculated field, showing the computed dew point value.'
    
example-script-calculated-fields-1:
    0:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-1-pe.png
        title: 'Enter a title for the calculated field, and select the calculation type as "Script". In the "Arguments" section, click "Add argument". Set the argument name to "temperatureF", choose the "Current entity" as the entity type, set the argument type to "Latest telemetry", and the time series key to "temperature". Click "Add".'
    1:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-2-pe.png
        title: 'Define the calculation function that will use the variables added in the Arguments section. The name of the variable that stores the result is defined in the function. In the "Output" section, set the output type to Time series. Finally, click "Add".'
    2:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-3-pe.png
        title: 'The calculated field has been added.'
    3:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-4-pe.png
        title: 'Now open the debug configuration window of the calculated field.'
    4:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-5-pe.png
        title: 'You will see an event, where you can view the incoming message with the argument and the outgoing message with the calculation result. Note that the timestamp in both messages is the same.'
    5:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-6-pe.png
        title: 'Go to the "Latest telemetry" tab. You will see two keys: "temperature" - the temperature in degrees Fahrenheit and the "temperature" key - the result of the calculation, which displays the temperature in degrees Celsius.'

example-script-calculated-fields-2:
    0:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-1-pe.png
        title: 'Enter a title for the calculated field, and select the calculation type as "Script". In the "Arguments" section, click "Add argument". Set the argument name to "altitude", choose asset "Building A" as the entity, and set "altitude" as the attribute key. Click "Add".'
    1:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-2-pe.png
        title: 'Add another argument: name it "temperature", set the entity type to "Current entity", choose "Time series rolling" as the argument type, and set the time series key to "temperature". Click "Add".'
    2:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-3-pe.png
        title: 'Define the calculation function that will use the variables added in the "Arguments" section. The name of the variable that stores the result is defined in the function. In the "Output" section, set the output type to Time series. Finally, click "Add".'
    3:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-4-pe.png
        title: 'The calculated field has been added.'
    4:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-5-pe.png
        title: 'Now open the debug configuration window of the calculated field.'
    5:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-6-pe.png
        title: 'You&#39;ll see an event where you can review the input message and the output message with the calculation result.'
    6:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-7-pe.png
        title: 'Go to the "Latest telemetry" tab. The "airDensity" key is the result of the calculation and represents the value of air density.'

example-script-calculated-fields-3:
    0:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-1-pe.png
        title: 'Enter a title for the calculated field, and select the calculation type as "Script". In the "Arguments" section, click "Add argument". Set the argument name to "defrost", choose "Current entity" as the entity type, set the argument type to "Time series rolling", and the time series key to "defrost". Click "Add".'
    1:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-2-pe.png
        title: 'Add another argument: name it "temperature", set the entity type to "Current entity", the argument type to "Time series rolling", and the time series key to "temperature". Click "Add".'
    2:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-3-pe.png
        title: 'Define the calculation function that will use the variables added in the "Arguments" section. The name of the variable that stores the result is defined in the function. In the "Output" section, set the output type to Time series. Finally, click "Add".'
    3:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-4-pe.png
        title: 'The calculated field has been added.'
    4:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-5-pe.png
        title: 'Now open the debug configuration window of the calculated field.'
    5:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-6-pe.png
        title: 'You will see an event, where you can view the input message with the argument and the output message with the calculation result.'
    6:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-7-pe.png
        title: 'Go to the "Latest telemetry" tab. The "issue" key is the result of the calculation.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/calculated-fields/index.md %}