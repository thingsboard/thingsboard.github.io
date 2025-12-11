* TOC
{:toc}

Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as `sqrt` (square root), `pow` (power), `abs` (absolute value), etc.

#### Expression

In the "Expression" section, enter the mathematical expression for the calculation using the variables defined in the ["Arguments"](#arguments) section.

{% include images-gallery.html imageCollection="expression-simple-calculated-fields-1" %}

#### Output

The result of the calculation can be saved either as a [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or as an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.
> See [how calculated field output is processed](#calculated-field-output-processing) for details on rule engine behavior and data persistence.

In the "Output" section:
- Specify the variable type: **Time series** or **Attribute**, along with the **attribute scope**.
- Assign a name to the variable that will store the calculation result.
- Optionally, set **Decimals by default** to define how many decimal places the result should be rounded to. If not specified, the result will not be rounded.
- To finish adding the calculated field, click "Add".

> **[Only for Time series]**<br>
"**Use latest timestamp**" option — when enabled, the calculated value will be stored using the most recent timestamp from the arguments telemetry instead of the server time.

{% include images-gallery.html imageCollection="output-simple-1" %}