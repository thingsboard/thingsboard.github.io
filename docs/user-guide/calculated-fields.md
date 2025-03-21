---
layout: docwithnav
assignees:
- stitenko
title: Calculated fields
description: Calculated fields

create-new-calculated-field:
    0:
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-ce.png
        title: 'To create a new calculated field, select the entity or profile for which you want to apply this function. In the details window, navigate to the "Calculated fields" tab. Click the "plus" icon, and from the dropdown menu, select "Create new calculated field";'
    1:
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-ce.png
        title: 'A calculated field configuration window will open with four sections: "General", "Arguments", "Expression", and "Output".'

calculated-field-general:
    0:
        image: /images/user-guide/calculated-fields/calculated-field-general-1-ce.png
        title: 'Enter a title for the calculated field, and select the calculation type: Simple or Script.'

argument-name:
    0:
        image: /images/user-guide/calculated-fields/argument-name-1-ce.png
        title: 'Click "Add argument" and fill in the required fields.'

attribute-argument-type:
    0:
        image: /images/user-guide/calculated-fields/attribute-argument-type-1-ce.png
        title: 'Select the argument type "Attribute", choose the attribute scope, and specify the attribute key from the drop-down list of available keys. Optionally, set the default value for the attribute. Finally, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/attribute-argument-type-2-ce.png
        title: 'A new argument has been added.'

latest-telemetry-argument-type:
    0:
        image: /images/user-guide/calculated-fields/latest-telemetry-argument-type-1-ce.png
        title: 'Select the argument type "Latest telemetry", and specify the time series key from the drop-down list of available keys. If necessary, set a default value for the time series. Finally, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/latest-telemetry-argument-type-2-ce.png
        title: 'A new argument has been added.'

time-series-rolling-argument-type:
    0:
        image: /images/user-guide/calculated-fields/time-series-rolling-argument-type-1-ce.png
        title: 'Select the argument type "Time series rolling", and specify the time series key from the drop-down list of available keys. Set the time period for data collection and the maximum number of values to be processed. Finally, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/time-series-rolling-argument-type-2-ce.png
        title: 'A new argument has been added.'

expression-simple-calculated-fields-1:
    0:
        image: /images/user-guide/calculated-fields/expression-simple-calculated-fields-1-ce.png
        title: 'Specify the mathematical expression using the variables from the "Arguments" section. In the "Output" section, specify the type ("Time series" or "Attribute") and assign a name to the new variable that will store the calculation result. Then, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/expression-simple-calculated-fields-2-ce.png
        title: 'The calculated field has been added;'
    2:
        image: /images/user-guide/calculated-fields/expression-simple-calculated-fields-3-ce.png
        title: 'Navigate to the "Latest telemetry" tab. You will see the two keys - "temperature" (Fahrenheit) and "temperatureC" (Celsius) and their values.'

expression-script-calculated-fields-1:
    0:
        image: /images/user-guide/calculated-fields/expression-script-calculated-fields-1-ce.png
        title: 'Define a function that performs calculations using arguments from the Arguments section. Then, select the type and assign a name to the new variable that will store the calculation result;'
    1:
        image: /images/user-guide/calculated-fields/expression-script-calculated-fields-2-ce.png
        title: 'The calculated field has been added;'
    2:
        image: /images/user-guide/calculated-fields/expression-script-calculated-fields-3-ce.png
        title: 'Navigate to the "Latest telemetry" tab. You will see the two keys - "temperature" (Fahrenheit) and "temperatureC" (Celsius) and their values.'

output-simple-1:
    0:
        image: /images/user-guide/calculated-fields/output-simple-1-ce.png
        title: 'Select the output type as "Time series". Set a name to the variable that will store the calculation result. Optionally, specify the number of decimal places.'
    1:
        image: /images/user-guide/calculated-fields/output-simple-2-ce.png
        title: 'Select the output type as "Attribute" and choose its scope: "Server attributes", "Client attributes", or "Shared attributes". Set a name to the variable that will store the calculation result. Optionally, set the number of decimal places.'

output-script-1:
    0:
        image: /images/user-guide/calculated-fields/output-script-1-ce.png
        title: 'Select the output type as "Time series". THe variable name is defined within the calculate function.'
    1:
        image: /images/user-guide/calculated-fields/output-script-2-ce.png
        title: 'Select the output type as "Attribute" and choose its scope: "Server attributes", "Client attributes", or "Shared attributes". The variable name is defined within the calculate function.'

import-calculated-field-1:
  0:
    image: /images/user-guide/calculated-fields/import-calculated-field-1-ce.png
    title: 'Navigate to the "Calculated fields" tab of the target entity or profile. Click the "plus" icon, and select "Import calculated field" from the dropdown menu.'
  1:
    image: /images/user-guide/calculated-fields/import-calculated-field-2-ce.png
    title: 'In the opened window, upload the JSON file with the calculated field configuration and click "Import".'
  2:
    image: /images/user-guide/calculated-fields/import-calculated-field-3-ce.png
    title: 'When importing, the edit window will open to allow modifications.'
  3:
    image: /images/user-guide/calculated-fields/import-calculated-field-4-ce.png
    title: 'Ensure the imported field is correctly applied and update any necessary parameters.'
  4:
    image: /images/user-guide/calculated-fields/import-calculated-field-5-ce.png
    title: 'Click "Add" to complete the import.'
  5:
    image: /images/user-guide/calculated-fields/import-calculated-field-6-ce.png
    title: 'You have imported the calculated field configuration.'

example-script-calculated-fields-1:
    0:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-1-ce.png
        title: 'Enter a title for the calculated field, and select the calculation type as "Script". In the "Arguments" section, click "Add argument". Set the argument name to "temperatureF", choose the "Current entity" as the entity type, set the argument type to "Latest telemetry", and the time series key to "temperature". Click "Add".'
    1:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-2-ce.png
        title: 'Define the calculation function that will use the variables added in the Arguments section. The name of the variable that stores the result is defined in the function. In the "Output" section, set the output type to Time series. Finally, click "Add".'
    2:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-3-ce.png
        title: 'The calculated field has been added.'
    3:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-4-ce.png
        title: 'Now open the debug configuration window of the calculated field.'
    4:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-5-ce.png
        title: 'You will see an event, where you can view the incoming message with the argument and the outgoing message with the calculation result. Note that the timestamp in both messages is the same.'
    5:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-6-ce.png
        title: 'Go to the "Latest telemetry" tab. You will see two keys: "temperature" - the temperature in degrees Fahrenheit and the "temperature" key - the result of the calculation, which displays the temperature in degrees Celsius.'

example-script-calculated-fields-2:
    0:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-1-ce.png
        title: 'Enter a title for the calculated field, and select the calculation type as "Script". In the "Arguments" section, click "Add argument". Set the argument name to "altitude", choose asset "Building A" as the entity, and set "altitude" as the attribute key. Click "Add".'
    1:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-2-ce.png
        title: 'Add another argument: name it "temperature", set the entity type to "Current entity", choose "Time series rolling" as the argument type, and set the time series key to "temperature". Click "Add".'
    2:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-3-ce.png
        title: 'Define the calculation function that will use the variables added in the "Arguments" section. The name of the variable that stores the result is defined in the function. In the "Output" section, set the output type to Time series. Finally, click "Add".'
    3:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-4-ce.png
        title: 'The calculated field has been added.'
    4:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-5-ce.png
        title: 'Now open the debug configuration window of the calculated field.'
    5:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-6-ce.png
        title: 'You&#39;ll see an event where you can review the input message and the output message with the calculation result.'
    6:
        image: /images/user-guide/calculated-fields/example-2-script-calculated-fields-7-ce.png
        title: 'Go to the "Latest telemetry" tab. The "airDensity" key is the result of the calculation and represents the value of air density.'

example-script-calculated-fields-3:
    0:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-1-ce.png
        title: 'Enter a title for the calculated field, and select the calculation type as "Script". In the "Arguments" section, click "Add argument". Set the argument name to "defrost", choose "Current entity" as the entity type, set the argument type to "Time series rolling", and the time series key to "defrost". Click "Add".'
    1:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-2-ce.png
        title: 'Add another argument: name it "temperature", set the entity type to "Current entity", the argument type to "Time series rolling", and the time series key to "temperature". Click "Add".'
    2:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-3-ce.png
        title: 'Define the calculation function that will use the variables added in the "Arguments" section. The name of the variable that stores the result is defined in the function. In the "Output" section, set the output type to Time series. Finally, click "Add".'
    3:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-4-ce.png
        title: 'The calculated field has been added.'
    4:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-5-ce.png
        title: 'Now open the debug configuration window of the calculated field.'
    5:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-6-ce.png
        title: 'You will see an event, where you can view the input message with the argument and the output message with the calculation result.'
    6:
        image: /images/user-guide/calculated-fields/example-3-script-calculated-fields-7-ce.png
        title: 'Go to the "Latest telemetry" tab. The "issue" key is the result of the calculation.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/calculated-fields.md %}