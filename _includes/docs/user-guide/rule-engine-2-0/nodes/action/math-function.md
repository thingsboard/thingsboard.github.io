Performs mathematical operations and functions on numeric data. Arguments can be retrieved from multiple sources (constants, message data, message metadata, attributes, or time
series data) and results can be saved to the message or directly to database as attributes or time series.

## Configuration

### Supported functions

<style>

  div.mathFunctionsTable + table tr th:nth-child(1) {
     width: 10%
  }

  div.mathFunctionsTable + table tr th:nth-child(2) {
     width: 10%
  }

  div.mathFunctionsTable + table tr th:nth-child(3) {
     width: 65%
  }

  div.mathFunctionsTable + table tr th:nth-child(4) {
     width: 15%
  }

</style>

<div class="mathFunctionsTable"></div>

| Function  | Number of arguments | Description                                                                                                                                                                                                           | Reference                                                                                                                |
|-----------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| ADD       | 2                   | x + y                                                                                                                                                                                                                 |                                                                                                                          |
| SUB       | 2                   | x - y                                                                                                                                                                                                                 |                                                                                                                          |
| MULT      | 2                   | x * y                                                                                                                                                                                                                 |                                                                                                                          |
| DIV       | 2                   | x / y                                                                                                                                                                                                                 |                                                                                                                          |
| SIN       | 1                   | Returns the trigonometric sine of an angle.                                                                                                                                                                           | [Math.sin](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#sin(double))                 |
| SINH      | 1                   | Returns the hyperbolic sine of a double value. The hyperbolic sine of x is defined to be (*e*<sup>x</sup> - *e*<sup>-x</sup>)/2 where *e* is Euler's number.                                                          | [Math.sinh](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#sinh(double))               |
| COS       | 1                   | Returns the trigonometric cosine of an angle.                                                                                                                                                                         | [Math.cos](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#cos(double))                 |
| COSH      | 1                   | Returns the hyperbolic cosine of a double value. The hyperbolic cosine of x is defined to be (*e*<sup>x</sup> + *e*<sup>-x</sup>)/2 where *e* is Euler's number.                                                      | [Math.cosh](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#cosh(double))               |
| TAN       | 1                   | Returns the trigonometric tangent of an angle.                                                                                                                                                                        | [Math.tan](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#tan(double))                 |
| TANH      | 1                   | Returns the hyperbolic tangent of a double value.                                                                                                                                                                     | [Math.tanh](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#tanh(double))               |
| ACOS      | 1                   | Returns the arc cosine of a value; the returned angle is in the range *0.0* through *pi*.                                                                                                                             | [Math.acos](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#acos(double))               |
| ASIN      | 1                   | Returns the arc sine of a value; the returned angle is in the range *-pi/2* through *pi/2*.                                                                                                                           | [Math.asin](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#asin(double))               |
| ATAN      | 1                   | Returns the arc tangent of a value; the returned angle is in the range -pi/2 through pi/2.                                                                                                                            | [Math.atan](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#atan(double))               |
| ATAN2     | 2                   | Returns the angle theta from the conversion of rectangular coordinates (x, y) to polar coordinates (r, theta). First argument is Y (ordinate coordinate), second argument is X (abscissa coordinate).                 | [Math.atan2](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#atan2(double,double))      |
| EXP       | 1                   | Returns the value *e*<sup>x</sup>, where *e* is the base of the natural logarithms.                                                                                                                                   | [Math.exp](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#exp(double))                 |
| EXPM1     | 1                   | Returns *e*<sup>x</sup>-1. Note that for values of x near 0, the exact sum of expm1(x) + 1 is much closer to the true result of *e*<sup>x</sup> than exp(x).                                                          | [Math.expm1](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#expm1(double))             |
| SQRT      | 1                   | Returns the correctly rounded positive square root of a double value.                                                                                                                                                 | [Math.sqrt](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#sqrt(double))               |
| CBRT      | 1                   | Returns the cube root of a double value.                                                                                                                                                                              | [Math.cbrt](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#cbrt(double))               | 
| GET_EXP   | 1                   | Returns the unbiased exponent used in the representation of a double.                                                                                                                                                 | [Math.getExponent](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#getExponent(double)) |
| HYPOT     | 2                   | Returns √(x² + y²) without intermediate overflow or underflow.                                                                                                                                                        | [Math.hypot](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#hypot(double,double))      |
| LOG       | 1                   | Returns the natural logarithm (base e) of a double value.                                                                                                                                                             | [Math.log](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#log(double))                 |
| LOG10     | 1                   | Returns the base 10 logarithm of a double value.                                                                                                                                                                      | [Math.log10](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#log10(double))             |
| LOG1P     | 1                   | Returns the natural logarithm of the sum of the argument and 1. Note that for small values x, the result of log1p(x) is much closer to the true result of ln(1 + x) than the floating-point evaluation of log(1.0+x). | [Math.log1p](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#log1p(double))             |
| CEIL      | 1                   | Returns the smallest (closest to negative infinity) double value that is greater than or equal to the argument and is equal to a mathematical integer.                                                                | [Math.ceil](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#ceil(double))               |
| FLOOR     | 1                   | Returns the largest (closest to positive infinity) double value that is less than or equal to the argument and is equal to a mathematical integer.                                                                    | [Math.floor](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#floor(double))             |
| FLOOR_DIV | 2                   | Returns the largest (closest to positive infinity) long value that is less than or equal to the algebraic quotient.                                                                                                   | [Math.floorDiv](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#floorDiv(long,long))    |
| FLOOR_MOD | 2                   | Returns the floor modulus of the long arguments.                                                                                                                                                                      | [Math.floorMod](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#floorMod(long,long))    |
| ABS       | 1                   | Returns the absolute value of a double value.                                                                                                                                                                         | [Math.abs](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#abs(double))                 |
| MIN       | 2                   | Returns the smaller of two double values.                                                                                                                                                                             | [Math.min](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#min(double,double))          |
| MAX       | 2                   | Returns the greater of two double values.                                                                                                                                                                             | [Math.max](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#max(double,double))          |
| POW       | 2                   | Returns the value of the first argument raised to the power of the second argument.                                                                                                                                   | [Math.pow](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#pow(double,double))          |
| SIGNUM    | 1                   | Returns the signum function of the argument; zero if the argument is zero, 1.0 if the argument is greater than zero, -1.0 if the argument is less than zero.                                                          | [Math.signum](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#signum(double))           |
| RAD       | 1                   | Converts an angle measured in degrees to an approximately equivalent angle measured in radians.                                                                                                                       | [Math.toRadians](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#toRadians(double))     |
| DEG       | 1                   | Converts an angle measured in radians to an approximately equivalent angle measured in degrees.                                                                                                                       | [Math.toDegrees](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html#toDegrees(double))     |
| CUSTOM    | 0-16                | Use this function to specify complex math expressions. For example, transform Fahrenheit to Celsius using (x - 32) / 1.8)                                                                                             | [exp4j](https://www.objecthunter.net/exp4j)                                                                              |

### Using CUSTOM function

When you select the CUSTOM operation, you can write your own mathematical expression instead of using predefined operations. This allows you to perform complex calculations that
combine multiple operations in a single node.

**Key points:**

- You can use up to 16 arguments with predefined names (displayed on the configuration form)
- Use these predefined argument names directly in your expression
- The expression is evaluated using the [exp4j library](https://www.objecthunter.net/exp4j/) - refer to its documentation for detailed syntax rules
- Supports standard mathematical operators: `+`, `-`, `*`, `/`, `^` (power), and parentheses
- Supports standard functions (`sin()`, `cos()`, `sqrt()`, `abs()`, etc.) plus custom functions: `ln(x)` (natural logarithm), `lg(x)` (base 10 logarithm), `logab(a, b)` (logarithm
  of b with base a)
- Available built-in constants: `π` or `pi` (3.14159265358979323846), `e` (2.7182818284590452354), `φ` (1.61803398874)

**Expression examples:**

| Use case              | Expression        | Description                                     |
|-----------------------|-------------------|-------------------------------------------------|
| Fahrenheit to Celsius | `(x - 32) / 1.8`  | Convert temperature from °F to °C               |
| Pythagorean theorem   | `sqrt(x^2 + y^2)` | Calculate hypotenuse using square root function |
| Circle area           | `pi * r^2`        | Calculate area using the built-in π constant    |

### Arguments

Arguments for mathematical operations can be retrieved from the following sources:

- **Constant** - A fixed numerical value specified directly in the configuration
- **Message** - Reads a value from a field in the JSON message payload
- **Metadata** - Reads a value from the message metadata
- **Attribute** - Fetch the attribute value from the database for the message originator
- **Time series** - Retrieve the latest time series value from the database for the message originator

Each argument can have a default value that will be used if the source value is missing.

{% capture template_support_note %}
**Note**: When specifying keys to fetch or extract values, you can use [templatization](/docs/{{docsPrefix}}user-guide/templatization/) (e.g., `${metadataKey}` or
`$[dataKey]`) to dynamically construct key names based on message content.
{% endcapture %}
{% include templates/info-banner.md content=template_support_note %}

{% capture numeric_values_note %}
**Note**: All argument values must be numeric or strings that can be parsed as numbers. The node will fail if a value is an array, object, or non-numeric string, unless a default
value is specified.
{% endcapture %}
{% include templates/info-banner.md content=numeric_values_note %}

### Result

The calculation result can be saved to one or more destinations:

- **Message** - Save the result to a specified key in the message data
- **Metadata** - Save the result to a specified key in the metadata
- **Attribute** - Save as an originator attribute (with configurable scope: Server or Shared)
- **Time series** - Save as a time series data point with the current timestamp

When saving to attributes or time series, you can optionally also add the result to the message data and/or metadata for use in subsequent rule nodes.

You can specify the number of digits after the decimal point for the result. The value will be rounded to the specified precision using half-up rounding mode (rounds towards the
nearest neighbor, and if both neighbors are equidistant, rounds up).

{% capture synchronization_note %}
**Note**: Processing for a given originator is performed sequentially within the scope of a server node, preventing race conditions when reading from and writing to the database.
{% endcapture %}
{% include templates/info-banner.md content=synchronization_note %}

{% capture performance_note %}
**Performance tip**: This node is optimized for mathematical calculations and provides better performance than script nodes, as it eliminates the overhead of script compilation and
execution. Use this node whenever possible for numeric operations.
{% endcapture %}
{% include templates/info-banner.md content=performance_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMathNodeConfiguration",
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "ADD",
        "SUB",
        "MULT",
        "DIV",
        "SIN",
        "SINH",
        "COS",
        "COSH",
        "TAN",
        "TANH",
        "ACOS",
        "ASIN",
        "ATAN",
        "ATAN2",
        "EXP",
        "EXPM1",
        "SQRT",
        "CBRT",
        "GET_EXP",
        "HYPOT",
        "LOG",
        "LOG10",
        "LOG1P",
        "CEIL",
        "FLOOR",
        "FLOOR_DIV",
        "FLOOR_MOD",
        "ABS",
        "MIN",
        "MAX",
        "POW",
        "SIGNUM",
        "RAD",
        "DEG",
        "CUSTOM"
      ],
      "description": "The mathematical operation to perform."
    },
    "customFunction": {
      "type": "string",
      "description": "Custom mathematical expression (required when operation is CUSTOM)."
    },
    "arguments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Predefined variable name for the argument (displayed in configuration form)."
          },
          "type": {
            "type": "string",
            "enum": [
              "CONSTANT",
              "MESSAGE_BODY",
              "MESSAGE_METADATA",
              "ATTRIBUTE",
              "TIME_SERIES"
            ],
            "description": "Source type for the argument value."
          },
          "key": {
            "type": "string",
            "description": "Key name to retrieve the value from (supports template patterns)."
          },
          "attributeScope": {
            "type": "string",
            "description": "Attribute scope (required only for ATTRIBUTE type)."
          },
          "defaultValue": {
            "type": "number",
            "description": "Default value if the source is missing or invalid."
          }
        },
        "required": [
          "name",
          "type",
          "key"
        ]
      },
      "description": "List of input arguments for the mathematical operation."
    },
    "result": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "MESSAGE_BODY",
            "MESSAGE_METADATA",
            "ATTRIBUTE",
            "TIME_SERIES"
          ],
          "description": "Destination type for the calculation result."
        },
        "key": {
          "type": "string",
          "description": "Key name for storing the result (supports template patterns)."
        },
        "attributeScope": {
          "type": "string",
          "description": "Attribute scope (required only for ATTRIBUTE type)."
        },
        "resultValuePrecision": {
          "type": "integer",
          "description": "Number of decimal places for rounding (0 for integer)."
        },
        "addToBody": {
          "type": "boolean",
          "description": "Also add the result to message data (for ATTRIBUTE/TIME_SERIES types)."
        },
        "addToMetadata": {
          "type": "boolean",
          "description": "Also add the result to message metadata (for ATTRIBUTE/TIME_SERIES types)."
        }
      },
      "required": [
        "type",
        "key"
      ]
    }
  },
  "required": [
    "operation",
    "arguments",
    "result"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. For each argument, the node retrieves the value from the configured source (constant, message data, metadata, attribute, or time series). If a value cannot be retrieved and no
   default value is specified, processing fails.
2. All argument values are converted to numeric (double) format. If conversion fails, processing fails.
3. The node performs the mathematical calculation using the retrieved argument values according to the selected operation.
4. The result is formatted according to the configured precision (rounded to the specified number of decimal places).
5. The result is saved to the configured destination(s): message, metadata, attribute, and/or time series.
6. When processing completes successfully, the message is forwarded via the `Success` connection.

## Output connections

- `Success`
    - The mathematical operation completed successfully and the result was saved.
- `Failure`
    - An error occurred during processing, such as:
        - Missing required argument without a default value
        - Failed to convert an argument value to a number
        - Division by zero
        - Invalid mathematical operation (e.g., square root of negative number for real numbers)
        - Other unexpected error

## Examples

### Example 1 — Accumulating water consumption

A water meter device reports incremental consumption. You need to update the total consumption stored as an attribute.

**Incoming message**

Data:

```json
{
  "deltaConsumption": 15.7
}
```

**State of the system**

Originator has a server attribute: `totalConsumption` = `12543.8`

**Node configuration**

```json
{
  "operation": "ADD",
  "arguments": [
    {
      "name": "x",
      "type": "ATTRIBUTE",
      "key": "totalConsumption",
      "attributeScope": "SERVER_SCOPE",
      "defaultValue": 0
    },
    {
      "name": "y",
      "type": "MESSAGE_BODY",
      "key": "deltaConsumption"
    }
  ],
  "result": {
    "type": "ATTRIBUTE",
    "key": "totalConsumption",
    "attributeScope": "SERVER_SCOPE",
    "resultValuePrecision": 2,
    "addToBody": true,
    "addToMetadata": false
  }
}
```

**Outgoing message**

Data:

```json
{
  "deltaConsumption": 15.7,
  "totalConsumption": 12559.5
}
```

Routed via the `Success` connection.

**Result**

The originator attribute `totalConsumption` is updated from 12543.8 to 12559.5 (12543.8 + 15.7). The new total is also added to the message data for use in subsequent rule nodes.

---

### Example 2 — Complex signal processing calculation

Calculate a signal quality indicator using a custom formula that combines distance, signal strength, and environmental factors. The formula uses trigonometric
functions, logarithms, and built-in constants.

Formula: `quality = 100 * e^(-distance / 1000) * (1 + 0.5 * sin(2 * pi * frequency/1000)) * sqrt(abs(signalStrength))`

**Incoming message**

Originator: `DEVICE`

Data:

```json
{
  "distance": 250,
  "frequency": 2400,
  "signalStrength": -45
}
```

**Node configuration**

```json
{
  "operation": "CUSTOM",
  "customFunction": "100 * e^(-x / 1000) * (1 + 0.5 * sin(2 * pi * y / 1000)) * sqrt(abs(z))",
  "arguments": [
    {
      "name": "x",
      "type": "MESSAGE_BODY",
      "key": "distance"
    },
    {
      "name": "y",
      "type": "MESSAGE_BODY",
      "key": "frequency"
    },
    {
      "name": "z",
      "type": "MESSAGE_BODY",
      "key": "signalStrength"
    }
  ],
  "result": {
    "type": "MESSAGE_BODY",
    "key": "signalQuality",
    "resultValuePrecision": 2,
    "addToBody": true,
    "addToMetadata": false
  }
}
```

**Outgoing message**

Data:

```json
{
  "distance": 250,
  "frequency": 2400,
  "signalStrength": -45,
  "signalQuality": 675.98
}
```

Routed via the `Success` connection.

**Result**

The signal quality indicator is calculated using exponential decay for distance, sinusoidal modulation for frequency effects, and square root transformation of signal strength. The
formula demonstrates the use of:

- The built-in constant `e` (Euler's number) for exponential calculations
- The built-in constant `pi` for trigonometric calculations
- Functions: `sin()`, `sqrt()`, `abs()`
- Complex expression with multiple operations

The result (675.98) is saved to the message data for further processing.
