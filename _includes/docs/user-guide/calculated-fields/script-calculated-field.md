### Script calculated field

For complex calculations, [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} is used.
It enables advanced operations such as conditional statements, loops, and access to historical data.

#### Script

Define a function that will perform calculations using the variables defined in the ["Arguments"](#arguments) section.

> The variable name that will store the calculation result is defined within the function itself.

<br>

Example: the function below uses the `temperature` and `humidity` arguments to calculate the dew point value.
The calculation result will be stored in the variable `dewPoint`, rounding the value to one decimal places.

```js
// Constants for Magnus formula
var a = 17.625;
var b = 243.04;

var alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100.0);
var dewPoint = toFixed((b * alpha) / (a - alpha), 1);

return {"dewPoint": dewPoint};
```
{: .copy-code}

{% include images-gallery.html imageCollection="expression-script-calculated-fields-1" %}

Script calculated fields require the definition of a `calculate(ctx, ...)` function. This function receives the `ctx` object and arguments declared in the configuration.

```javascript
function calculate(ctx, arg1, arg2, ...): object | object[]
```

- `ctx`: context object that stores `latestTs` and provides access to all configured arguments.

  Context structure:
    - `ctx.latestTs`: the most recent timestamp (in milliseconds) from the arguments telemetry. Useful for aligning the result with the incoming data time instead of the server time.
    - `ctx.args`: an object that contains all declared arguments, where each argument can be accessed using `.` notation:
        - **single value arguments** (attribute or latest telemetry):
            - `ctx.args.<arg>.ts`: timestamp of the argument.
            - `ctx.args.<arg>.value`: actual value of the argument.
        - **time series rolling arguments**:
            - `ctx.args.<arg>.timeWindow`: object with `startTs` and `endTs` timestamps.
            - `ctx.args.<arg>.values`: array of `{ ts, value }` records representing timestamped telemetry.
            - `ctx.args.<arg>.<method>`: call built-in aggregation methods such as `mean()`, `sum()`, `min()`, `max()`, `first()`, `last()`, `merge(...)`, and others.
      > For more details, refer to the [time series rolling argument](#arguments).
- `arg1, arg2, ...`: direct access to arguments by name as function parameters. This can be useful for cleaner or more concise expressions. These arguments may be:
    - single value arguments (attribute or latest telemetry arguments): telemetry value may be of type boolean, int64 (long), double, string, or JSON.
    - time series rolling arguments: objects that contain time series data within a defined time window.

Use either `ctx.args.<arg>` or direct parameter access depending on preference and context clarity.

#### Output

> See [how calculated field output is processed](#calculated-field-output-processing) for details on rule engine behavior and data persistence.

The calculated values are returned as a JSON object containing **keys** that represent the computed results, which are then used to store those values in the system.

- Specify the **Output type** for storing the calculation result:
    - [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}: function must return a JSON object or array with or without a timestamp containing the computed value.
    - [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}: function must return a JSON object **without timestamp** information containing the computed value.
        - Choose the **attribute scope**: **Server attributes**, **Client attributes**, or **Shared attributes**.
- To align the result with the latest timestamp of the input arguments telemetry, use `ctx.latestTs` and assign it explicitly to the `ts` field in the returned object.
- To finish adding the calculated field, click "Add".

{% include images-gallery.html imageCollection="output-script-1" %}