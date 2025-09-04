<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.4.2</em></strong></td>
     </tr>
   </thead>
</table> 

The rule node applies math function and saves the result into the message and/or database. See table of supported functions below:

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

| Function  | Number of arguments | Description                                                                                                                                                                                                           | Reference                                                                                                                 
|-----------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| ADD       | 2                   | x + y                                                                                                                                                                                                                 |                                                                                                                           |
| SUB       | 2                   | x - y                                                                                                                                                                                                                 |                                                                                                                           |
| MULT      | 2                   | x * y                                                                                                                                                                                                                 |                                                                                                                           |
| DIV       | 2                   | x / y                                                                                                                                                                                                                 |                                                                                                                           |
| SIN       | 1                   | Returns the trigonometric sine of an angle.                                                                                                                                                                           | [Math.sin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sin(double))                  |
| SINH      | 1                   | Returns the hyperbolic sine of a double value. The hyperbolic sine of x is defined to be (*e*<sup>x</sup> - *e*<sup>-x</sup>)/2 where *e* is Euler's number.                                                          | [Math.sinh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sinh(double))                |
| COS       | 1                   | Returns the trigonometric cosine of an angle.                                                                                                                                                                         | [Math.cos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cos(double))                  |
| COSH      | 1                   | Returns the hyperbolic cosine of a double value. The hyperbolic cosine of x is defined to be (*e*<sup>x</sup> + *e*<sup>-x</sup>)/2 where *e* is Euler's number.                                                      | [Math.cosh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cosh(double))                |
| TAN       | 1                   | Returns the trigonometric tangent of an angle.                                                                                                                                                                        | [Math.tan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tan(double))                  |
| TANH      | 1                   | Returns the hyperbolic tangent of a double value.                                                                                                                                                                     | [Math.tanh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tanh(double))                |
| ACOS      | 1                   | Returns the arc cosine of a value; the returned angle is in the range *0.0* through *pi*.                                                                                                                             | [Math.acos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#acos(double))                |
| ASIN      | 1                   | Returns the arc sine of a value; the returned angle is in the range *-pi/2* through *pi/2*.                                                                                                                           | [Math.asin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#asin(double))                |
| ATAN      | 1                   | Returns the arc tangent of a value; the returned angle is in the range -pi/2 through pi/2.                                                                                                                            | [Math.atan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan(double))                |
| ATAN2     | 2                   | Returns the angle theta from the conversion of rectangular coordinates (x, y) to polar coordinates (r, theta).                                                                                                        | [Math.atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan2(double,double))       |
| EXP       | 1                   | Returns the value *e*<sup>x</sup>, where *e* is the base of the natural logarithms.                                                                                                                                   | [Math.exp](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#exp(double))                  |
| EXPM1     | 1                   | Returns *e*<sup>x</sup>-1. Note that for values of x near 0, the exact sum of expm1(x) + 1 is much closer to the true result of *e*<sup>x</sup> than exp(x).                                                          | [Math.expm1](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#expm1(double))              |
| SQRT      | 1                   | Returns the correctly rounded positive square root of a double value.                                                                                                                                                 | [Math.sqrt](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sqrt(double))                |
| CBRT      | 1                   | Returns the cube root of a double value.                                                                                                                                                                              | [Math.cbrt](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cbrt(double))                | 
| GET_EXP   | 1                   | Returns the unbiased exponent used in the representation of a double.                                                                                                                                                 | [Math.getExponent](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#getExponent(double))  |
| HYPOT     | 2                   | Returns sqrt(x2 +y2) without intermediate overflow or underflow.                                                                                                                                                      | [Math.getExponent](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#hypot(double,double)) |
| LOG       | 1                   | Returns the natural logarithm (base e) of a double value.                                                                                                                                                             | [Math.log](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log(double))                  |
| LOG10     | 1                   | Returns the base 10 logarithm of a double value.                                                                                                                                                                      | [Math.log10](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log10(double))              |
| LOG1P     | 1                   | Returns the natural logarithm of the sum of the argument and 1. Note that for small values x, the result of log1p(x) is much closer to the true result of ln(1 + x) than the floating-point evaluation of log(1.0+x). | [Math.log1p](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#log1p(double))              |
| CEIL      | 1                   | Returns the smallest (closest to negative infinity) double value that is greater than or equal to the argument and is equal to a mathematical integer.                                                                | [Math.ceil](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#ceil(double))                |
| FLOOR     | 1                   | Returns the largest (closest to positive infinity) double value that is less than or equal to the argument and is equal to a mathematical integer.                                                                    | [Math.floor](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floor(double))              |
| FLOOR_DIV | 2                   | Returns the largest (closest to positive infinity) long value that is less than or equal to the algebraic quotient.                                                                                                   | [Math.floorDiv](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floorDiv(long,long))     |
| FLOOR_MOD | 2                   | Returns the floor modulus of the long arguments.                                                                                                                                                                      | [Math.floorMod](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#floorMod(long,long))     |
| ABS       | 1                   | Returns the absolute value of a double value.                                                                                                                                                                         | [Math.abs](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#abs(double))                  |
| MIN       | 2                   | Returns the smaller of two double values.                                                                                                                                                                             | [Math.min](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#min(double,double))           |
| MAX       | 2                   | Returns the greater of two double values.                                                                                                                                                                             | [Math.max](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#max(double,double))           |
| POW       | 2                   | Returns the value of the first argument raised to the power of the second argument.                                                                                                                                   | [Math.pow](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#pow(double,double))           |
| SIGNUM    | 1                   | Returns the signum function of the argument; zero if the argument is zero, 1.0 if the argument is greater than zero, -1.0 if the argument is less than zero.                                                          | [Math.signum](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#signum(double))            |
| RAD       | 1                   | Converts an angle measured in degrees to an approximately equivalent angle measured in radians.                                                                                                                       | [Math.toRadians](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toRadians(double))      |
| DEG       | 1                   | Converts an angle measured in radians to an approximately equivalent angle measured in degrees.                                                                                                                       | [Math.toDegrees](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toDegrees(double))      |
| CUSTOM    | 1-16                | Use this function to specify complex math expressions. For example, transform Fahrenheit to Celsius using (x - 32) / 1.8)                                                                                             | [exp4j](https://github.com/fasseg/exp4j)                                                                                  |

You may use 5 types of arguments:

* Constant;
* Value from the message body;
* Value from the message meta data;
* Value of the attribute that belongs to the message originator (device, asset, etc). Value should be of Numeric type or string that is convertible to float;
* Value of the latest time-series that belongs to the message originator (device, asset, etc). Value should be of Numeric type or string that is convertible to float;

Primary use case for this rule node is to take one or more values from the database and modify them based on data from the message. For example, you may increase `totalWaterConsumption` based on the `deltaWaterConsumption` reported by device.

Alternative use case is the replacement of simple JS `script` nodes with more light-weight and performant implementation. For example, you may transform Fahrenheit to Celsius (*C = (F - 32) / 1.8*) using CUSTOM operation and expression: *(x - 32) / 1.8)*.

The execution is synchronized in scope of message originator (e.g. device) and server node. If you have rule nodes in different rule chains, they will process messages from the same originator synchronously in the scope of the server node.

The result of the function may be added to the message body or metadata. You may also save the result to the database as an attribute or time-series.
