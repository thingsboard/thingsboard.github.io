---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Test calculated fields
description: Test calculated fields
---

* TOC
{:toc}

The Calculate Tester is a tool that allows you to debug the code of the Calculate Fields. To open the Calculate Tester window, you need to click on the **Test** button in the Calculate field settings.

![image](/images/trendz/test-calculated-open.png)

The layout is divided into four sections:

* **Preview**: This section displays a visualization, just like in the non-tester mode.
* **Function**: This field serves as the input area for the Calculation Field code, just like in the non-tester mode.
* **Input**: Here you can view and modify the input data values.
* **Output**: The resulting output data after the calculation will be shown here, along with any logs if the "Function" field contains any console.log() statements.

![image](/images/trendz/test-calculated-details.png)

#### Preview
This part is just a smaller copy of the main visualization. It is not dependent on test data; it is based solely on real data. 
This means that changes to the telemetry value in the Input field will not affect it. Changes can only be seen if you change the Formula itself.
The Preview will be updated if you click on the "Build" or "Get real data" button. However, in the second case, if you have changed the input data, it will also be overwritten.

#### Input
The input data helps you understand what data is involved in the calculation and gives you the opportunity to change it for tests.
The initial input data can be obtained or updated by clicking either the 'Test' or 'Get real data' button. 
But we recommend that you first request real data, and then test it. So the list of input data will be more complete. Also, "Get real data" in some cases can give a more full list of logs when it comes to the "Row" object.

Main fields

* startTs - Start of time period
  * type - number/unix format
  * example - 1677621600000
* endTs - End of time period
    * type - number/unix format
    * example - 1685566799999
* groupBy - Grouping by time. The value is "null" when the visualization does not contain a RAW date field or calculate field is butch type.
    * type - `"week" | "day", "hour" | "minute" | "null"`
    * example - "week"
* row - An object where keys represent the names of the visualization fields for a single iteration. This can be visualized as one row in a table, but this object is also accessible for other chart types. However, it is not available for batch calculated fields. To refer to a specific row, use square brackets with the key name (row['key name']).
  * type - `{[key]: string | number}`
  * example - `{"CalculatedSUM": 100,    "GR greenhouseUNIQ": "London",    "consumptionWaterSUM": 2684}`
* telemetry - These are aggregated or raw values (depending on the type of Calculated Field), used in the formula.
  * for simple fields
    * type  - `string | number`
    * example - `"sum(GR water meter.consumptionWater)": 100`
  * for batch fields
    * type  - `Array<{ts: number, value: number | string}>`
    * example - `"none(GR water meter.consumptionWater)": [{"ts": 1677621600000, "value": 100 }, … ]`

In the Input, you can change the values for the tests, but you cannot change the keys.

Pressing **Get real data** again will overwrite the current changes.


#### Example for simple Calculated Field

![image](/images/trendz/test-calculated-simple-field.png)

#### Example for batch Calculated Field

![image](/images/trendz/test-calculated-batch-field.png)

#### Function
More details on how to write a function for the Calculated Field can be found in the corresponding section of the documentation. 
This field is the same. It is only worth recalling that you can work with aggregated data or with raw data. In the second option, you need to enable the **batch** mode by activating the corresponding checkbox.

#### Output
This is a non-editable field that has two modes:

* **Output data**:  you can see the calculation results. This is the value that the function returns at the end. For non-batch Calculate Fields, this will be a simple value (number or string), and for batch ones, it will be an array of objects similar to Input Data.

![image](/images/trendz/test-calculated-output.png)

* **Logs**: logs are displayed, similar to those displayed in the browser console, if any console.log() is present in the "Formula" field.

![image](/images/trendz/test-calculated-logs.png)


Output data and logs updated after clicking the **Test** button. The logs are also updated when you click on **Get real data**, which sometimes makes it possible to make them more complete than the **Test** button.

When you are satisfied with the calculation results, don't forget to click the **Save** button. Afterward, the new function will be available in the Calculate Field.

## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}