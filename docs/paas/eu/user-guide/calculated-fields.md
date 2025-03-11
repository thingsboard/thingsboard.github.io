---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Calculated fields
description: Calculated fields

create-new-calculated-field:
    0:
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-pe.png
        title: 'To create a new calculated field, select the entity or profile for which you want to apply this function. In the details window, navigate to the "Calculated fields" tab. Click the "plus" icon, and from the dropdown menu, select "Create new calculated field";'
    1:
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-pe.png
        title: 'A calculated field configuration window will open with four sections: "General", "Arguments", "Expression", and "Output".'

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

expression-simple-calculated-fields-1:
    0:
        image: /images/user-guide/calculated-fields/expression-simple-calculated-fields-1-pe.png
        title: 'Specify the mathematical expression that will be used for calculations, using the variables added in the "Arguments" section. In the "Output" section, specify the type ("Time series" or "Attribute") and assign a name to the new variable that will store the calculation result. Then, click "Add";'
    1:
        image: /images/user-guide/calculated-fields/expression-simple-calculated-fields-2-pe.png
        title: 'The calculated field has been added;'
    2:
        image: /images/user-guide/calculated-fields/expression-simple-calculated-fields-3-pe.png
        title: 'Navigate to the "Latest telemetry" tab. You will see the two keys - "temperature" (Fahrenheit) and "temperatureC" (Celsius) and their values.'

expression-script-calculated-fields-1:
    0:
        image: /images/user-guide/calculated-fields/expression-script-calculated-fields-1-pe.png
        title: 'Specify the calculate function that will be used for calculations, using the variables added in the "Arguments" section. Then, select the type and assign a name to the new variable that will store the calculation result;'
    1:
        image: /images/user-guide/calculated-fields/expression-script-calculated-fields-2-pe.png
        title: 'The calculated field has been added;'
    2:
        image: /images/user-guide/calculated-fields/expression-script-calculated-fields-3-pe.png
        title: 'Navigate to the "Latest telemetry" tab. You will see the two keys - "temperature" (Fahrenheit) and "temperatureC" (Celsius) and their values.'

output-simple-1:
    0:
        image: /images/user-guide/calculated-fields/output-simple-1-pe.png
        title: 'Select the output type as "Time series". Set a name to the variable that will store the calculation result. Optionally, specify the number of decimal places.'
    1:
        image: /images/user-guide/calculated-fields/output-simple-2-pe.png
        title: 'Select the output type as "Attribute" and choose its scope: "Server attributes", "Client attributes", or "Shared attributes". Set a name to the variable that will store the calculation result. Optionally, set the number of decimal places.'

output-script-1:
    0:
        image: /images/user-guide/calculated-fields/output-script-1-pe.png
        title: 'Select the output type as "Time series". THe variable name is defined within the calculate function.'
    1:
        image: /images/user-guide/calculated-fields/output-script-2-pe.png
        title: 'Select the output type as "Attribute" and choose its scope: "Server attributes", "Client attributes", or "Shared attributes". The variable name is defined within the calculate function.'

import-calculated-field-1:
    0:
        image: /images/user-guide/calculated-fields/import-calculated-field-1-pe.png
        title: 'To import the calculated field configuration, select the entity or profile for which you want to apply this function. In the details window, navigate to the "Calculated fields" tab. Click the "plus" icon, and from the dropdown menu, select "Import calculated field";'
    1:
        image: /images/user-guide/calculated-fields/import-calculated-field-2-pe.png
        title: 'In the opened window, upload the JSON file with the calculated field configuration and click "Import";'
    2:
        image: /images/user-guide/calculated-fields/import-calculated-field-3-pe.png
        title: 'You have imported the calculated field configuration.'
  
example-script-calculated-fields-1:
    0:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-1-pe.png
        title: 'Enter a title for the calculated field, and select the calculation type as "Script". In the "Arguments" section click "Add argument", and fill in the required fields. Then, click "Add" to add a new argument;'
    1:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-2-pe.png
        title: 'Specify the calculate function that will be used for calculations, using the variables added in the "Arguments" section. The variable name that stores the calculation result is defined within the function. In the "Output" section, set the output type for the variable to "Time series". Finally, click "Add";'
    2:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-3-pe.png
        title: 'The calculated field has been added;'
    3:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-4-pe.png
        title: 'Open the calculated field debug window;'
    4:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-5-pe.png
        title: 'You will see an event, where you can view the incoming message with the argument and the outgoing message with the calculation result. Note that the timestamp in both messages is the same;'
    5:
        image: /images/user-guide/calculated-fields/example-script-calculated-fields-6-pe.png
        title: 'Go to the "Latest telemetry" tab. You will see two keys: "temperature" – the temperature in Fahrenheit, and "temperatureC" – the result of the calculated field, displaying the temperature in Celsius.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/calculated-fields.md %}
