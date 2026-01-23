Define the calculation logic using a [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} function based on the variables configured in [Arguments](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments).

Script calculated fields must implement:

```js
function calculate(ctx, arg1, arg2, ...): object | object[]
```
The function can return a single JSON object (multiple output keys) or an array of JSON objects (multiple time series records).

> The output variable names are defined directly in the returned object.

Example: Dew point calculation

```js
// Constants for Magnus formula
var a = 17.625;
var b = 243.04;

var alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100.0);
var dewPoint = toFixed((b * alpha) / (a - alpha), 1);

return {"dewPoint": dewPoint};
```
{: .copy-code}

The function uses the <span class="code-light">temperature</span> and <span class="code-light">humidity</span> arguments to calculate the dew point value.
The calculation result will be stored in the variable <span class="code-light">dewPoint</span>, rounding the value to one decimal places.

<b><font size="4">Direct argument access</font></b>   
Arguments are also passed as function parameters (`arg1`, `arg2`, ...), so you can use them directly (for example, temperature, humidity) for cleaner scripts.

> Use either direct parameters or `ctx.args.<arg>` depending on clarity and your preferred style.

<br><b><font size="4">Context object (ctx)</font></b>

The `ctx` object provides metadata and access to argument values:
- `ctx.latestTs` — the most recent timestamp (milliseconds) from telemetry-based arguments. Useful for storing results with the same timestamp as incoming data.
- `ctx.args` — an object containing all configured arguments, accessible via dot (`.`) notation:
    - **Single-value arguments** <i>(attributes or latest telemetry)</i>
        - `ctx.args.<arg>.ts` — timestamp of the argument.
        - `ctx.args.<arg>.value` — value of the argument.
    - **Rolling time series arguments**
        - `ctx.args.<arg>.timeWindow` — object with start and end timestamps `{ startTs, endTs }`.
        - `ctx.args.<arg>.values` — array of `{ ts, value }` records representing timestamped telemetry.
        - `ctx.args.<arg>.<method>()` — built-in methods such as `mean()`, `sum()`, `min()`, `max()`, `first()`, `last()`, `merge()`, and others.

{% assign scriptFunction = '
===
image: /images/user-guide/calculated-fields/script/script-function-1-ce.png
title: Define a function that will perform calculations using the variables defined in the "Arguments" section. The variable name that will store the calculation result is defined within the function itself.
'
%}

{% include images-gallery.liquid imageCollection=scriptFunction %}
