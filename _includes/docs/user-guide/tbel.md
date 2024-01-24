* TOC
{:toc}


ThingsBoard supports user-defined functions (UDF) for data processing in the [Rule Engine]() and [Data Converters](). 
The original programming language for the UDF is JavaScript. It is popular, well-known, and simple. We plan to support JavaScript forever.
Nevertheless, we have decided to provide an alternative to JavaScript. You may find our motivation below.

## Motivation

ThingsBoard is written in Java and currently uses Java 11. There are two ways to execute the JS function in ThingsBoard:  

A) use remote JS Executor microservice written in Node.js. It is the default way for ThingsBoard to run in a cluster/microservices mode;

B) use local JS Executor powered by Nashorn JS engine that runs inside the JVM. It is the default way for ThingsBoard while deployed in monolithic mode.

The Nashorn JS engine is now deprecated and is removed from Java 16. It is also relatively slow. Some users already called Nashorn to be the platform's kryptonite.
That is why it was absolutely clear that we need a replacement to Nashorn. 
Many users suggested [GraalVM](https://www.graalvm.org/) for its built-in polyglot feature, but it was not suitable for us for multiple reasons.
The most important reason is security and the ability to control every aspect of the UDF execution.
Besides, most UDFs are relatively simple functions that transform or filter data, and we want to find a more effective way to execute them.   

Our search for existing Script/Expression Language (EL) implementations led us to the [MVEL](https://github.com/mvel/mvel).
The ThingsBoard Expression Language (TBEL) is basically a [fork](https://github.com/thingsboard/tbel) of MVEL with some important security constraints, 
built-in memory management, and frequently used helper functions that are specific to ThingsBoard.
 
#### TBEL vs Nashorn

TBEL is lightweight and is super fast compared to Nashorn. For example, the execution of 1000 simple scripts like:
"return msg.temperature > 20" took 16 seconds for Nashorn and 12 milliseconds for MVEL. More than 1000 times faster.
We have forked the TBEL codebase and added additional security improvements to ensure no CPU or memory abuse. 
So, no need to run Nashorn with the sandbox environment.

Of course, TBEL is not as powerful as JS, but the majority of the use cases do not need this.
{% if docsPrefix == 'paas/' %}
The one who requires JS flexibility may use remote [JS Executors](/docs/pe/reference/msa/#javascript-executor-microservices) as usual.
{% else %}
The one who requires JS flexibility may use remote [JS Executors](/docs/{{docsPrefix}}reference/msa/#javascript-executor-microservices) as usual.
{% endif %}

#### TBEL vs JS Executors

{% if docsPrefix == 'paas/' %}
[JS Executors](/docs/pe/reference/msa/#javascript-executor-microservices) is a separate microservice based on Node.js.
{% else %}
[JS Executors](/docs/{{docsPrefix}}reference/msa/#javascript-executor-microservices) is a separate microservice based on Node.js.
{% endif %}
It is powerful and supports the latest JS language standards. 
However, there is a noticeable overhead to execute JS functions remotely. 
The Rule Engine and JS executors communicate through the queue. 
This process consumes resources and introduces a relatively small latency (a few ms). 
The latter may become a problem if you have multiple rule nodes chained into one rule chain.  

TBEL execution consumes much less resources and has no extra latency for inter-process communications.

## TBEL Language Guide

TBEL is used to evaluate expressions written using Java syntax. Unlike Java however, TBEL is dynamically typed (with optional typing), meaning that the source code does not require type qualification.
The TBEL expression can be as simple as a single identifier, or as complicated as an expression with method calls and inline collections.

#### Simple Property Expression

```java
msg.temperature
```
{: .copy-code}

In this expression, we simply have a single identifier (msg.temperature), which by itself, is what we refer to in TBEL as a property expression, 
in that the only purpose of the expression is to extract a property out of a variable or context object.

TBEL can even be used for evaluating a boolean expression. 
Assuming you are using TBEL in the Rule Engine to define a simple script [filter node](https://thingsboard.io/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node):

```java
return msg.temperature > 10;
```
{: .copy-code}

Like Java, TBEL supports the full gamut of operator precedence rules, including the ability to use bracketing to control execution order.

```java
return (msg.temperature > 10 && msg.temperature < 20) || (msg.humidity > 10 && msg.humidity < 60);
```
{: .copy-code}

#### Multiple statements

You may write scripts with an arbitrary number of statements using the semi-colon to denote the termination of a statement. 
This is required in all cases except in cases where there is only one statement, or for the last statement in a script.

```java
var a = 2;
var b = 2;
return a + b
```
{: .copy-code}

Note the lack of a semi-colon after 'a + b'. New lines are not substitutes for the use of the semi-colon in MVEL.

#### Value Coercion

MVEL’s type coercion system is applied in cases where two incomparable types are presented by attempting to coerce the ‘’right’‘value to that of the type of the’‘left’’ value, and then vice-versa.

For example:

```java
"123" == 123;
```
{: .copy-code}

This expression is *true* in TBEL because the type coercion system will coerce the untyped number *123* to a String in order to perform the comparison.

#### Maps

TBEL allows you to create Maps. We use our own implementation of the Map to control memory usage.
That is why TBEL allows only inline creation of maps. Most common operation with the map:

```java
// Create new map
var map = {"temperature": 42, "nested" : {"rssi": 130}};
// Change value of the key
map.temperature = 0;

// Check existance of the key
if(map.temperature != null){
    // <you code>
}
// Null-Safe expressions using ?
if(map.?nonExistingKey.smth > 10){
        // <you code>
}
// Iterate through the map
foreach(element : map.entrySet()){
    // Get the key
    element.key
    // Get the value
    element.value;
}

// get Info
var size = map.size()                           // return  2 
var memorySize = map.memorySize()               // return 29 

// add new Entry/(new key/new value)
var mapAdd = {"test": 12, "input" : {"http": 130}};       
map.humidity = 73;                              // return nothing => map = {"temperature": 42, "nested" : {"rssi": 130}, "humidity": 73}
map.put("humidity", 73);                        // return nothing => map = {"temperature": 42, "nested" : {"rssi": 130}, "humidity": 73}
map.putIfAbsent("temperature1", 73);            // return nothing => map = {"temperature": 42, "nested" : {"rssi": 130}, "temperature1": 73}
map.putAll(mapAdd);                             // return nothing => map = {"temperature": 42, "nested" : {"rssi": 130}, {"test": 12, "input" : {"http": 130}}}

// change Value   
map.temperature = 73;                                  // return nothing => map = {"temperature": 73, "nested" : {"rssi": 130}}        
var put1 = map.put("temperature", 73)                  // return 42      => map = {"temperature": 73, "nested" : {"rssi": 130}}         
var putIfAbsent1 = map.putIfAbsent("temperature", 73); // return 42      => map = {"temperature": 42, "nested" : {"rssi": 130}}       
var replace = map.replace("temperature", 56);          // return 42      => map = {"temperature": 56, "nested" : {"rssi": 130}}       
var replace1 = map.replace("temperature", 42, 56);     // return true    => map = {"temperature": 56, "nested" : {"rssi": 130}}       
var replace3 = map.replace("temperature", 48, 56);     // return false   => map = {"temperature": 42, "nested" : {"rssi": 130}}       
        
// remove Entry from the map by key
map.remove("temperature");                             // return nothing => map = {"nested" : {"rssi": 130}}
        
// get Keys/Values  
var keys = map.keys();                                 // return ["temperature", "nested"]       
var values = map.values();                             // return [42, {"rssi": 130}]       
        
// sort
var sortByKey = map.sortByKey();                       // return nothing => map = {"nested": {"rssi": 130}, "temperature": 42}                                       
var sortByValue = map.sortByValue();                   // return nothing => map = {"temperature": 42, "nested" : {"rssi": 130}}
```
{: .copy-code}

In development: in our own Maps implementation, the *Tbel* library is planned to use additional methods:

```java
- slice()
- slice(int start)
- slice(int start, int end)
- toSortedByValue()
- toSortedByValue(asc)
- toSortedByKey()
- toSortedByKey(asc)
- invert()
- toInverted()
- reverse()
```

#### Lists

TBEL allows you to create Lists. We use our own implementation of the List to control memory usage of the script.
That is why TBEL allows only inline creation of lists. For example:

```java
// Create new list
var list = ["A", "B", "C"];
// List elelement access
list[0];
// Size of the list
list.size();
// Foreach 
foreach (item : list) { 
    var smth = item;
}
// For loop 
for (int i =0; i < list.size; i++) { 
    var smth = list[i];
}
```
{: .copy-code}

In our own list implementation The *Tbel* library uses most of the standard JavaScript methods from the [JavaScript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

**Examples:**

```java
var list = ["A", "B", "C", "B", "C", "hello", 34567];
var listAdd = [ "thigsboard", 4, 67];

    // add/push
var addAll = list.addAll(listAdd);         // return true    => list = ["A", "B", "C", "B", "C", "hello", 34567, "thigsboard", 4, 67]
var addAllI = list.addAll(2, listAdd);     // return true    => list = ["A", "B", "thigsboard", 4, 67, "C", "B", "C", "hello", 34567]
var add = list.add(3, "thigsboard");       // return true    => list = ["A", "B", "C", "thigsboard", "B", "C", "hello", 34567]
var push = list.push("thigsboard");        // return true    => list = ["A", "B", "C", "B", "C", "hello", 34567, "thigsboard"]
var unshift = list.unshift("Q", 4);        // return nothing => list = ["Q" "4", "A", "B", "C", "B", "C", "hello", 34567]

    // delete  
var removeI = list.remove(2);              // return "C"                           => list = ["A", "B", "B", "C", "hello", 34567]    
var removeO = list.remove("C");            // return true                          => list = ["A", "B", "B", "C", "hello", 34567] 
var shift = list.shift();                  // return "A"                           => list = ["B", "C", "B", "C", "hello", 34567]
var pop = list.pop();                      // return "34567"                       => list = ["A", "B", "C", "B", "C", "hello"]
var splice1 = list.splice(3)               // return ["B", "C", "hello", 34567]    => list = ["A", "B", "C"]
var splice2 = list.splice(2, 2)            // return ["C", "B"]                    => list = ["A", "B", "C", "hello", 34567]
var splice3 = list.splice(1, 4, "start", 5, "end") // return ["B", "C", "B", "C"]  => list = ["A", "start", 5, "end", "hello", 34567]
        
    // change
var set = list.set(5, "thigs");            // return "hello" => list = ["A", "B", "C", "B", "C", "thigs", 34567]
list[5] = "thigs";                         // return nothing => list = ["A", "B", "C", "B", "C", "thigs", 34567]          
list.sort();                               // return nothing => list = [34567, "A", "B", "B", "C", "C", "hello"] (sort Asc)
list.sort(true);                           // return nothing => list = [34567, "A", "B", "B", "C", "C", "hello"] (sort Asc)
list.sort(false);                          // return nothing => list = ["hello", "C", "C", "B", "B", "A", 34567] (sort Desc)
list.reverse();                            // return nothing => list = [34567, "hello", "C", "B", "C", "B", "A"]
var fill = list.fill(67);                  // return new List [67, 67, 67, 67, 67, 67, 67] => list = [67, 67, 67, 67, 67, 67, 67]
var fill = list.fill(67, 4);               // return new List ["A", "B", "C", "B", 67, 67, 67] => list = ["A", "B", "C", "B", 67, 67, 67]
var fill = list.fill(67, 4, 6);            // return new List ["A", "B", "C", "B", 67, 67, 34567] => list = ["A", "B", "C", "B", 67, 67, 34567]
        
    // return new List/new String 
var toSorted = list.toSorted();            // return new List [34567, "A", "B", "B", "C", "C", "hello"] (sort Asc) 
var toSorted_true = list.toSorted(true);   // return new List [34567, "A", "B", "B", "C", "C", "hello"] (sort Asc)  
var toSorted_false = list.toSorted(false); // return new List ["hello", "C", "C", "B", "B", "A", 34567] (sort Desc)
var toReversed = list.toReversed();        // return new List [34567, "hello", "C", "B", "C", "B", "A"] 
var slice = list.slice();                  // return new List ["A", "B", "C", "B", "C", "hello", 34567]  
var slice4 = list.slice(4);                // return new List ["C", "hello", 34567]    
var slice1_5 = list.slice(1,5);            // return new List ["B", "C", "B", "C"]   
var with = list.with(1, 67);               // return new List ["A", 67, "B", "C", "B", "C", "hello", 34567] 
var concat = list.concat(listAdd);         // return new List ["A", "B", "C", "B", "C", "hello", 34567, "thigsboard", 4, 67] 
var join = list.join() ;                   // return new String "A,B,C,B,C,hello,34567"        
var toSpliced1 = list.toSpliced(2)                       // return new List ["A", "B",]  
var toSpliced2 = list.toSpliced(2, 4)                    // return new List ["A", "B", 34567]  
var toSpliced3 = list.toSpliced(2, 4, "start", 5, "end") // return new List ["A", "B", "start", 5, "end", 34567] 

    // get Info        
var length = list.length()                  // return  7 
var memorySize = list.memorySize()          // return 42 
var indOf1 = list.indexOf("B", 1);          // return 1  
var indOf2 = list.indexOf("B", 2);          // return 3  
```
{: .copy-code}

{% capture difference %}
**Note**:
<br>
*sort/toSorted* operations:
- If the list consists only of a numeric value (12234 or a string in the form of a numeric value "12234") - the sort/toSorted... operation is used as a type of numeric value;
- If the list consists of one or more non-numeric values ("123K45" or "FEB" or {345: "re56"}) - the sort/toSorted... operation is interpreted as sorting the String;
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Arrays

TBEL allows you to create Arrays. To control the memory usage, we permit only arrays of primitive types. String arrays are automatically converted to lists.

```java
// Create new array
int[] array = new int[3];
array[0] = 1;
array[1] = 2;
array[2] = 3;

str = "My String";
str[0]; // returns 'M';

function sum(list){
    int result = 0;
    for(var i = 0; i < list.length; i++){
        result += list[i];
    }
    return result;
};

sum(array); // returns 6


array[3] = 4; // Will cause ArrayIndexOutOfBoundsException
```
{: .copy-code}

#### Literals

A literal is used to represent a fixed-value in the source of a particular script.

**String literals**

String literals may be denoted by single or double quotes.

```
"This is a string literal"
'This is also string literal'
```
{: .copy-code}

String escape sequences:

* \\ - Double escape allows rendering of single backslash in string.
* \n - Newline
* \r - Return
* \u#### - Unicode character (Example: \uAE00)
* \### - Octal character (Example: \73)

**Numeric literals**

Integers can be represented in decimal (base 10), octal (base 8), or hexadecimal (base 16).

A decimal integer can be expressed as any number that does not start with zero.

```java
125 // decimal
```
{: .copy-code}

An octal representation of an integer is possible by prefixing the number with a zero, followed by digits ranging from 0 to 7.

```java
0353 // octal
```
{: .copy-code}

Hexidecimal is represented by prefixing the integer with 0x followed by numbers ranging from 0-9..A-F.

```java
0xAFF0 // hex
```
{: .copy-code}

A floating point number consists of a whole number and a factional part denoted by the point/period character, with an optional type suffix.

```java
10.503 // a double
94.92d // a double
14.5f // a float
```
{: .copy-code}

You can represent `*`BigInteger`*` and `*`BigDecimal`*` literals by using the suffixes `B` and `I` (uppercase is mandatory).

```
104.39484B // BigDecimal
8.4I // BigInteger
```
{: .copy-code}

Boolean literals are represented by the reserved keywords `true` and `false`.

The null literal is denoted by the reserved keywords `null` or `nil`.

#### Using Java Classes

The TBEL implementation allows the usage of **some** Java classes from the `java.util` and `java.lang` packages. For example:

```java
var foo = Math.sqrt(4);
```
{: .copy-code}


##### Convert Number to Hexadecimal/Octal/Binary String
- Byte

```java
var b16 = Integer.toString(0x1A, 16); // Hexadecimal "1a"
var b10 = Integer.toString(0x1A, 10); // Decimal     "26"
var b8 = Integer.toString(0x1A, 8);   // Octal       "32"
var b2 = Integer.toString(0x1A, 2);   // Binary     "11010"
```
{: .copy-code}

- Integer

```java
var i16 = Integer.toString(-255, 16); // Hexadecimal "-ff"
var i10 = Integer.toString(-255, 10); // Decimal     "-255"
var i8 = Integer.toString(-255, 8);   // Octal       "-377"
var i2 = Integer.toString(-255, 2);   // Binary      "-11111111"
```
{: .copy-code}

- Float

```java
var f0 =7823764.8374;  
var f16 = Float.toHexString(f0);           // Hexadecimal "0x1.dd8654p22" 
var f10 = f0.toString();                   // Decimal     "7823764.8374"
```
{: .copy-code}

- Long

```java
var l16 = Long.toString(9223372036854775807, 16); // Hexadecimal "7fffffffffffffff"
var l10 = Long.toString(9223372036854775807, 10); // Decimal     "9223372036854775807"
var l8 = Long.toString(9223372036854775807, 8);   // Octal       "777777777777777777777"
var l2 = Long.toString(9223372036854775807, 2);   // Binary      "111111111111111111111111111111111111111111111111111111111111111"
```
{: .copy-code}

- Double

```java
var dd0 = 99993219.156013e-002;
var dd16 = Double.toHexString(dd0);              // Hexadecimal ""0x1.e83f862142b5bp19"
var dd10 = String.format("%.8f",dd0);            // Decimal     "999932,19156013"
```
{: .copy-code}

For the security reasons, the usage of those classes is constrained. You are able to call both static and non-static methods, but you are not able to assign the instance of the class to the variable:

```java
var list = ["A", "B", "C"];
java.util.Collections.reverse(list); // allowed
list = new java.util.ArrayList(); // Not allowed
```
{: .copy-code}

To simplify migration from the JS, we have added the `JSON` class with static methods: `JSON.stringify` and `JSON.parse` that work similarly to JS. For example:
For the same purpose, we have added `Date` class that you are able to use without the package name.
 
#### Flow Control

**If-Then-Else**

TBEL supports full, C/Java-style if-then-else blocks. For example:

```java
if (temperature > 0) {
   return "Greater than zero!";
} else if (temperature == -1) { 
   return "Minus one!";
} else { 
   return "Something else!";
}
```
{: .copy-code}

**Ternary statements**

Ternary statements are supported just as in Java:

```java
temperature > 0 ? "Yes" : "No";
```
{: .copy-code}

Nested ternary statements are also supported.

**Foreach**

One of the most powerful features in TBEL is its foreach operator. It is similar to the foreach operator in Java 1.5 in both syntax and functionality. 
It accepts two parameters separated by a colon. The first is the local variable for the current element, and the second is the collection or array to be iterated.

For example:

```java
sum = 0;
foreach (n : numbers) {
   sum+=n;
}
```
{: .copy-code}

Since TBEL treats Strings as iterable objects, you can iterate a String (character by character) with a foreach block:

```java
str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
foreach (c : str) {
   //do something 
}
```
{: .copy-code}

**For Loop**

```java
var sum = 0;
for (int i =0; i < 100; i++) { 
   sum += i;
}
```
{: .copy-code}

**Do While, Do Until**

`do while` and `do until` are implemented in TBEL, following the same convention as Java, with `until` being the inverse of `while`.

```java
do { 
   x = something();
} 
while (x != null);
```
{: .copy-code}

... is semantically equivalent to ...

```java
do {
   x = something();
}
until (x == null);
```
{: .copy-code}

**While, Until**

TBEL implements standard while, with the addition of the inverse until.

```java
while (isTrue()) {
   doSomething();
}
```
{: .copy-code}

... or ...

```java
until (isFalse()) {
   doSomething();
}
```
{: .copy-code}

## Helper functions

#### btoa

Creates a Base64-encoded ASCII string from a binary string (i.e., a string in which each character in the string is treated as a byte of binary data)

**Syntax:**

*String btoa(String input)*

**Parameters:**

<ul>
  <li><b>input:</b> <code>string</code> - The binary string to encode.</li>
</ul>

**Return value:**

An ASCII string containing the Base64 representation of the input.

**Examples:**

```java
var encodedData = btoa("Hello, world"); // encode a string
var decodedData = atob(encodedData); // decode the string
```
{: .copy-code}

#### atob

Decodes a string of data which has been encoded using Base64 encoding.

**Syntax:**

*String atob(String input)*

**Parameters:**

<ul>
  <li><b>input:</b> <code>string</code> - A binary string containing base64-encoded data.</li>
</ul>

**Return value:**

An ASCII string containing decoded data from encodedData.

**Examples:**

```java
var encodedData = btoa("Hello, world"); // encode a string
var decodedData = atob(encodedData); // decode the string
```
{: .copy-code}

#### bytesToString

Creates a string from the list of bytes

**Syntax:**

*String bytesToString(List<Byte> bytesList[, String charsetName])*

**Parameters:**

<ul>
  <li><b>bytesList:</b> <code>List of Bytes</code> - A list of bytes.</li>
  <li><b>charsetName:</b> <code>String</code> - optional Charset name. UTF-8 by default.</li>
</ul>

**Return value:**

A string constructed from the specified byte list.

**Examples:**

```java
var bytes = [0x48,0x45,0x4C,0x4C,0x4F];
return bytesToString(bytes); // Returns "HELLO"
```
{: .copy-code}

#### decodeToString

Alias for the [bytesToString](#bytestostring)

#### decodeToJson

Decodes a list of bytes to the JSON document.

**Syntax:**

*String decodeToJson(List<Byte> bytesList)*

**Parameters:**

<ul>
  <li><b>bytesList:</b> <code>List of Bytes</code> - A list of bytes.</li>
</ul>

**Return value:**

A JSON object or primitive.

**Examples:**

```java
var base64Str = "eyJoZWxsbyI6ICJ3b3JsZCJ9"; // Base 64 representation of the '{"hello": "world"}'
var bytesStr = atob(base64Str);
var bytes = stringToBytes(bytesStr);
return decodeToJson(bytes); // Returns '{"hello": "world"}'
```
{: .copy-code}

#### stringToBytes

Converts input binary string to the list of bytes.

**Syntax:**

*List<Byte> stringToBytes(String input[, String charsetName])*

**Parameters:**

<ul>
  <li><b>input:</b> <code>Binary string</code> - string in which each character in the string is treated as a byte of binary data.</li>
  <li><b>charsetName:</b> <code>String</code> - optional Charset name. UTF-8 by default.</li>
</ul>

**Return value:**

A list of bytes.

**Examples with:** <code>Binary string</code>

```java
var base64Str = "eyJoZWxsbyI6ICJ3b3JsZCJ9"; // Base 64 representation of the '{"hello": "world"}' 
var bytesStr = atob(base64Str);
return stringToBytes(bytesStr); // Returns [123, 34, 104, 101, 108, 108, 111, 34, 58, 32, 34, 119, 111, 114, 108, 100, 34, 125]

var inputStr = "hello world";
return stringToBytes(inputStr);  // Returns  [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
var charsetStr = "UTF8"
return stringToBytes(inputStr, charsetStr);  // Returns  [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
```
{: .copy-code}

**Examples with:** <code>Object from Json as String</code>

```java
var dataMap = {};
dataMap.inputStr = "hello world";
var dataJsonStr = JSON.stringify(dataMap);
var dataJson = JSON.parse(dataJsonStr);
return stringToBytes(dataJson.inputStr); // Returns  [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
```
{: .copy-code}

#### parseInt

Converts input string to integer.

**Syntax:**

*Integer parseInt(String str[, String radix])*

**Parameters:**

<ul>
  <li><b>str:</b> <code>string</code> - the String containing the integer representation to be parsed.</li>
  <li><b>radix:</b> <code>String</code> - optional radix to be used while parsing string.</li>
</ul>

**Return value:**

An integer value.

**Examples:**

```java
return parseInt("0") // returns 0
return parseInt("473") // returns 473
return parseInt("+42") // returns 42
return parseInt("-0", 10) // returns 0
return parseInt("-0xFF") // returns -255        
return parseInt("-FF", 16) // returns -255
return parseInt("1100110", 2) // returns 102
return parseInt("2147483647", 10) // returns 2147483647
return parseInt("-2147483648", 10) // returns -2147483648
return parseInt("2147483648", 10) throws a NumberFormatException
return parseInt("99", 8) throws a NumberFormatException
return parseInt("Kona", 10) throws a NumberFormatException
return parseInt("Kona", 27) // returns 411787
```
{: .copy-code}

#### parseLong

Converts input string to long.

**Syntax:**

*Long parseLong(String str[, String radix])*

**Parameters:**

<ul>
  <li><b>str:</b> <code>string</code> - the String containing the long representation to be parsed.</li>
  <li><b>radix:</b> <code>String</code> - optional radix to be used while parsing string.</li>
</ul>

**Return value:**

A long value.

**Examples:**

```java
return parseLong("0") // returns 0L
return parseLong("473") // returns 473L
return parseLong("+42") // returns 42L
return parseLong("-0", 10) // returns 0L
return parseLong("-0xFFFF") // returns -65535L        
return parseLong("-FFFF", 16) // returns -65535L
return parseLong("11001101100110", 2) // returns 13158L
return parseLong("777777777777777777777", 8) // returns 9223372036854775807L
return parseLong("KonaLong", 27) // returns 218840926543L
return parseLong("9223372036854775807", 10) // returns 9223372036854775807L
return parseLong("-9223372036854775808", 10) // returns -9223372036854775808L
return parseLong("9223372036854775808", 10) throws a NumberFormatException
return parseLong("0xFGFFFFFF", 16) throws a NumberFormatException
return parseLong("FFFFFFFF", 16) throws a NumberFormatException
return parseLong("1787", 8) throws a NumberFormatException
return parseLong("KonaLong", 10) throws a NumberFormatException
return parseLong("KonaLong", 16) throws a NumberFormatException
```
{: .copy-code}

#### parseFloat

Converts input string to float.

**Syntax:**

*Integer parseFloat(String str)*

**Parameters:**

<ul>
  <li><b>str:</b> <code>string</code> - the string to be parsed.</li>
</ul>

**Return value:**

A float value.

**Examples:**

```java
return parseFloat("4.2"); // returns 4.2
```
{: .copy-code}

#### parseDouble

Converts input string to double.

**Syntax:**

*Integer parseDouble(String str)*

**Parameters:**

<ul>
  <li><b>str:</b> <code>string</code> - the string to be parsed.</li>
</ul>

**Return value:**

A double precision value.

**Examples:**

```java
return parseDouble("4.2"); // returns 4.2
```
{: .copy-code}

#### parseHexToInt

Converts the hex string to integer.

**Syntax:**

*int parseHexToInt(String hex[, boolean bigEndian])*

**Parameters:**

<ul>
  <li><b>hex:</b> <code>string</code> - the hex string with big-endian byte order.</li>
  <li><b>bigEndian:</b> <code>boolean</code> - the big-endian (BE) byte order if true, little-endian (LE) otherwise.</li>
</ul>

**Return value:**

Parsed integer value.

**Examples:**

```java
return parseHexToInt("BBAA"); // returns 48042
return parseHexToInt("BBAA", true); // returns 48042
return parseHexToInt("AABB", false); // returns 48042
return parseHexToInt("BBAA", false); // returns 43707
```
{: .copy-code}

#### parseLittleEndianHexToInt

Alias for [parseHexToInt(hex, false)](#parsehextoint)

**Syntax:**

*int parseLittleEndianHexToInt(String hex)*

#### parseBigEndianHexToInt

Alias for [parseHexToInt(hex, true)](#parsehextoint)

**Syntax:**

*int parseBigEndianHexToInt(String hex)*

#### toFixed

Rounds the double value towards "nearest neighbor". 

**Syntax:**

*double toFixed(double value, int precision)*

**Parameters:**

<ul>
  <li><b>value:</b> <code>double</code> - the double value.</li>
  <li><b>precision:</b> <code>int</code> - the precision.</li>
</ul>

**Return value:**

Rounded double

**Examples:**

```java
return toFixed(0.345, 1); // returns 0.3
return toFixed(0.345, 2); // returns 0.35
```
{: .copy-code}

#### hexToBytes

Converts the hex string to list of integer values, where each integer represents single byte.

**Syntax:**

*List<Integer> hexToBytes(String hex)*

**Parameters:**

<ul>
  <li><b>hex:</b> <code>string</code> - the hex string with big-endian byte order.</li>
</ul>

**Return value:**

Parsed list of integer values.

**Examples:**

```java
return hexToBytes("BBAA"); // returns [-69, -86]
```
{: .copy-code}

#### bytesToHex

Converts the list of integer values, where each integer represents a single byte, to the hex string.

**Syntax:**

*String bytesToHex(List<Integer> bytes)*

**Parameters:**

<ul>
  <li><b>bytes:</b> <code>List of integer</code> - the list of integer values, where each integer represents a single byte.</li>
</ul>

**Return value:**

Hex string.

**Examples:**

```java
return bytesToHex([-69, -86]); // returns "BBAA"
```
{: .copy-code}

#### bytesToBase64

Converts the byte array, to Base64 string.

**Syntax:**

*String bytesToBase64(byte[] bytes)*

**Parameters:**

<ul>
  <li><b>bytes:</b> <code>List of integer</code> - the list of integer values, where each integer represents a single byte.</li>
</ul>

**Return value:**

Base64 string.

**Examples:**

```java
return bytesToBase64([42, 73]); // returns "Kkk="
```
{: .copy-code}

#### base64ToHex

Decodes the Base64 string, to hex string.

**Syntax:**

*String base64ToHex(String input)*

**Parameters:**

<ul>
  <li><b>input:</b> <code>String</code> - the Base64 string.</li>
</ul>

**Return value:**

Hex string

**Examples:**

```java
return base64ToHex("Kkk="); // returns "2A49"
```
{: .copy-code}

#### base64ToBytes

Decodes the Base64 string, to byte array.

**Syntax:**

*byte[] base64ToBytes(String input)*

**Parameters:**

<ul>
  <li><b>input:</b> <code>String</code> - the Base64 string.</li>
</ul>

**Return value:**

Byte array.

**Examples:**

```java
return base64ToBytes("Kkk="); // returns [42, 73]
```
{: .copy-code}

#### parseBytesToInt

Parses int from the byte array given the offset, length and optional endianness.

**Syntax:**

*int parseBytesToInt([byte[] or List<Byte>] data, int offset, int length[, boolean bigEndian])*

**Parameters:**

<ul>
  <li><b>data:</b> <code>byte[]</code> or <code>List of Byte</code> - the byte array.</li>
  <li><b>offset:</b> <code>int</code> - the offset in the array.</li>
  <li><b>length:</b> <code>int</code> - the length in bytes. Less then or equal to 4.</li>
  <li><b>bigEndian:</b> <code>boolean</code> - optional, LittleEndian if false, BigEndian otherwise.</li>
</ul>

**Return value:**

integer value.

**Examples:**

```java
return parseBytesToInt(new byte[]{(byte) 0xAA, (byte) 0xBB, (byte) 0xCC, (byte) 0xDD}, 0, 3, true); // returns 11189196 in Decimal or 0xAABBCC  
return parseBytesToInt(new byte[]{(byte) 0xAA, (byte) 0xBB, (byte) 0xCC, (byte) 0xDD}, 0, 3, false); // returns 13417386 in Decimal or 0xCCBBAA
```
{: .copy-code}

#### toFlatMap

Iterates recursive over the given object and creates a single level json object.  
If the incoming message contains arrays, the key for transformed value will contain index of the element.  

**Syntax:**

```java
Map<String, Object> toFlatMap(Map<String, Object> json)
Map<String, Object> toFlatMap(Map<String, Object> json, boolean pathInKey)
Map<String, Object> toFlatMap(Map<String, Object> json, List<String> excludeList)
Map<String, Object> toFlatMap(Map<String, Object> json, List<String> excludeList, boolean pathInKey)
```

**Parameters:**

 - **json** `Map<String, Object>` - input JSON object.  
 - **excludeList** `List<String>` - *optional* List with keys, for exclude from result. ***Default:*** `[]`.    
 - **pathInKey** `boolean` - *optional* Add path to keys. ***Default:*** `true`.  

{% capture warning %}
If parameter **pathInKey** is set to ***false*** - some keys can be overwritten by newly found values!  
Recommended to use with caution with objects that contains similar keys on different levels.  
{% endcapture %}
{% include templates/warn-banner.md content=warning %}

**Return value:**

JSON Object

**Examples:**

*Input:*

```json
{
    "key1": "value1",
    "key2": 12,
    "key3": {
        "key4": "value4",
        "key5": 34,
        "key6": [{
                "key7": "value7"
            },
            {
                "key8": "value8"
            },
            "just_string_value_in_array",
            56
        ],
        "key9": {
            "key10": ["value10_1", "value10_2", "value10_3"]
        }
    },
    "key_to_overwrite": "root_value",
    "key11": {
        "key_to_overwrite": "second_level_value"
    }
}
```

##### toFlatMap(json)

Expected behavior - get the single level object with paths in keys. 

```java
return toFlatMap(json);
```
{: .copy-code}

*Output:*

```json
{
    "key1": "value1",
    "key2": 12,
    "key3.key4": "value4",
    "key3.key5": 34,
    "key3.key6.0.key7": "value7",
    "key3.key6.1.key8": "value8",
    "key3.key6.2": "just_string_value_in_array",
    "key3.key6.3": 56,
    "key3.key9.key10.0": "value10_1",
    "key3.key9.key10.1": "value10_2",
    "key3.key9.key10.2": "value10_3",
    "key_to_overwrite": "root_value",
    "key11.key_to_overwrite": "second_level_value"
}
```

##### toFlatMap(json, pathInKey)

Expected behavior - get the single level object without paths in keys.  
**key_to_overwrite** should contain the value from **key11.key_to_overwrite**.  

```java
return toFlatMap(json, false);
```
{: .copy-code}

*Output:*

```json
{
    "key1": "value1",
    "key2": 12,
    "key4": "value4",
    "key5": 34,
    "key7": "value7",
    "key8": "value8",
    "key6.2": "just_string_value_in_array",
    "key6.3": 56,
    "key10.0": "value10_1",
    "key10.1": "value10_2",
    "key10.2": "value10_3",
    "key_to_overwrite": "second_level_value"
}
```

As you can see, **key_to_overwrite** is **second_level_value** instead of **root_value**.  
  
##### toFlatMap(json, excludeList)

Expected behavior - get the single level object with paths in keys, without keys **key1** and **key3**.  

```java
return toFlatMap(json, ["key1", "key3"]);
```
{: .copy-code}

*Output:*

```json
{
    "key2": 12,
    "key_to_overwrite": "root_value",
    "key11.key_to_overwrite": "second_level_value"
}
```

As you can see, **key1** and **key3** were removed from output. Excluding works on any level with incoming keys.   
  
##### toFlatMap(json, excludeList, pathInKey)

Expected behavior - get the single level object without paths in keys, without keys **key2** and **key4**.  
**key_to_overwrite** should contain the value from **key11.key_to_overwrite**.    

```java
return toFlatMap(json, ["key2", "key4"], false);
```
{: .copy-code}

*Output:*

```json
{
    "key1": "value1",
    "key5": 34,
    "key7": "value7",
    "key8": "value8",
    "key6.2": "just_string_value_in_array",
    "key6.3": 56,
    "key10.0": "value10_1",
    "key10.1": "value10_2",
    "key10.2": "value10_3",
    "key_to_overwrite": "second_level_value"
}
```

As you can see, **key2** and **key4** was excluded from the output and **key_to_overwrite** is **second_level_value**.  

####  tbDate: 

The *Tbel* library uses all standard JavaScript methods in the [JavaScript Date](https://www.w3schools.com/jsref/jsref_getdate.asp), such as **"toLocaleString"**,  **"toISOString"** and other methods;

##### Input format data:
- String with Optional: pattern, locale, time zone
- ints (year, month and etc) with Optional: pattern, locale, time zone

Locale default: *UTC*;

Time zone Id default: *ZoneId.systemDefault()*;

**Return value:**

a Date object as a string, using locale default: "UTC", time zone Id default: ZoneId.systemDefault().

###### String with Optional: pattern, locale, time zone 

**Examples:**
- Input data format: Only one - String (Variable the Time Zone in the input parameter), without pattern:

```ruby
assuming: "2007-12-03T10:15:30.00Z"           TZ = UTC
           "2007-12-03T10:15:30.00"           TZ = ZoneId.systemDefault() instant
           "2007-12-03T10:15:30.00-04"        TZ = "-04"
           "2007-12-03T10:15:30.00+02:00"     TZ = "+02"
           "2007-12-03T10:15:30.00+03:00:00"  TZ = "+03"
```

```java
var d = new Date("2023-08-06T04:04:05.123Z");        // TZ => "UTC"
var iso = d.toISOString()                            //  return "2023-08-06T04:04:05.123Z"   ZoneId "UTC"
```
{: .copy-code}

```java
var d = new Date("2023-08-06T04:04:05.123");        // TZ => Default, ZoneId "Europe/Kiev" = "+03:00"
var iso = d.toISOString()                            //  return "2023-08-06T01:04:05.123Z"   ZoneId  "Europe/Kiev" = "+03:00"
```
{: .copy-code}

```java
var d = new Date("2023-08-06T04:04:05.00-04");      //  TZ => "-04"
var iso = d.toISOString()                            //  return "2023-08-06T08:04:05Z"   ZoneId "America/New_York" = "-04:00"
```
{: .copy-code}

```java
var d = new Date("2023-08-06T04:04:05.00+02:00");   //  TZ => "+02:00"
var iso = d.toISOString()                            //  return "2023-08-06T02:04:05Z"   ZoneId "Europe/Berlin" = "+02:00"
```
{: .copy-code}

```java
var d = new Date("2023-08-06T04:04:05.00+03:00:00");   //  TZ => "+03:00:00"
var iso = d.toISOString()                               //  return "2023-08-06T01:04:05Z"   ZoneId  "Europe/Kiev" = "+03:00"
```
{: .copy-code}

```ruby
assuming RFC-1123 value: "Tue, 3 Jun 2008 11:05:30 GMT"         TZ = UTC
                         "Tue, 3 Jun 2008 11:05:30"             TZ = ZoneId.systemDefault() instant
                         "Tue, 3 Jun 2008 11:05:30 -03"         TZ = "-03"
                         "Tue, 3 Jun 2008 11:05:30 -0200"       TZ = "-02"                   
                         "Tue, 3 Jun 2008 11:05:30 +043056"     TZ = "+04:30:56"          
 ```

```java
var d = new Date("Tue, 3 Jun 2008 11:05:30 GMT");   //  TZ => "GMT"
var iso = d.toISOString()                            //  return "2008-06-03T11:05:30Z"   ZoneId  "GMT" = "0"
```
{: .copy-code}

```java
var d = new Date("Tue, 3 Jun 2008 11:05:30 +043056");   //  TZ => "+043056"
var iso = d.toISOString()                                //  return "2008-06-03T06:34:34Z"   ZoneId  "????" = "+04:30:56"
```
{: .copy-code}

```java
var d = new Date("Tue, 3 Jun 2008 11:05:30");           //  TZ => Default, ZoneId "Europe/Kiev" = "+03:00"
var iso = d.toISOString()                                //  return "2008-06-03T06:34:34Z"   ZoneId  "Europe/Kiev" = "+03:00"
msg.dLocal = d.toLocaleString();                        //  return "2008-06-03 11:05:30"   
```
{: .copy-code}

- Input data format: String + Pattern:

```java
var pattern = "yyyy-MM-dd HH:mm:ss.SSSXXX";
var d = new Date("2023-08-06 04:04:05.000Z", pattern);        //  Pattern without TZ => "UTC"
var iso = d.toISOString()                                      //  return "2008-06-03T08:05:30Z"    ZoneId "UTC" = "00:00"
```
{: .copy-code}


```java
var pattern = "yyyy-MM-dd HH:mm:ss.SSSXXX";
var d = new Date("2023-08-06 04:04:05.000-04:00", pattern);   // Pattern with TZ => "-04:00"
var iso = d.toISOString()                                      //  return "2023-08-06T08:04:05Z"    ZoneId "America/New_York" = "-04:00"
```
{: .copy-code}

```java
var pattern = "yyyy-MM-dd HH:mm:ss.SSS";
var d = new Date("2023-08-06 04:04:05.000", pattern);         //  Pattern without TZ, TZ => Default, ZoneId "Europe/Kiev" = "+03:00"
var iso = d.toISOString()                                      //  return "2023-08-06T08:04:05Z"    ZoneId  "Europe/Kiev" = "+03:00"
```
{: .copy-code}

- Input data format: String + Pattern + Locale:

```java
var pattern = "hh:mm:ss a, EEE M/d/uuuu"
var d = new Date("09:15:30 nachm., So. 10/09/2022", pattern, "de");         //  Pattern without TZ, TZ => Default, ZoneId "Europe/Kiev" = "+03:00"
var iso = d.toISOString()                                                   //  return "2022-10-09T18:15:30Z"    ZoneId  "Europe/Kiev" = "+03:00"
var local= d.toLocaleString("de")                                           //  return "09.10.22, 21:15:30"      
```
{: .copy-code}

```java
var pattern = "hh:mm:ss a, EEE M/d/uuuu"
var d = new Date("02:15:30 PM, Sun 10/09/2022", pattern, "en-US");         //  Pattern without TZ, TZ => Default, ZoneId "Europe/Kiev" = "+03:00"
var iso = d.toISOString()                                                   //  return "2022-10-09T11:15:30Z"    ZoneId  "Europe/Kiev" = "+03:00"
var local = d.toLocaleString("en-US")                                      //  return "10/9/22, 2:15:30 PM"      
```
{: .copy-code}

```java
var pattern = "hh:mm:ss a, EEE M/d/uuuu"
var d = new Date("02:15:30 PM, Sun 10/09/2022", pattern, "de");             //  return: error. The pattern with input parameter of date does not match the locale
  
```
{: .copy-code}
- Input data format: String + Pattern + Locale + Time Zone:

```java
var pattern = "hh:mm:ss a, EEE M/d/uuuu"
var d = new Date("2023-08-06 04:04:05.000-04:00", pattern, "de", "Europe/Kiev");    // Pattern with TZ => "-04:00" but `Time Zone` as parameter = "Europe/Kiev" = "+03:00"
var iso = d.toISOString()                                                            // return "2023-08-06T01:04:05Z"    ZoneId  "Europe/Kiev" = "+03:00"
var local_de = d.toLocaleString("de")                                               // return "06.08.23, 04:04:05"     
var local_us = d.toLocaleString("en-US")                                            // return "8/6/23, 4:04:05 AM"      
```
{: .copy-code}

###### Ints (year, month and etc) with Optional: time zone
```java
var d = new Date(2023, 8, 6, 4, 4, 5);
msg.dLocal = d.toLocaleString();        //  return "2023-08-06 04:04:05" (Locale: "UTC", ZoneId "Europe/Kiev")
msg.dIso = d.toISOString();             //  return 2023-08-06T01:04:05Z"
msg.dDate = d;                          //  return "неділя, 6 серпня 2023 р. о 04:04:05 за східноєвропейським літнім часом"
```
{: .copy-code}

```java
var d = new Date(2023, 8, 6, 4, 4, 5, "Europe/Berlin");         //  Parameters (int year, int month, int dayOfMonth, int hours, int minutes, int seconds) => TZ = "Europe/Berlin"
var iso = d.toISOString()                                       //  return "2023-08-06T02:04:05Z" ZoneId "Europe/Berlin" = "+02:00"
var local = d.toLocaleString("en-us",  "America/New_York");     //  return "8/5/23, 10:04:05 PM" (Locale: "en-US") TZ = "America/New_York" => "+04:00"
```
{: .copy-code}

##### locale

**Syntax:**

*String toLocaleString(String locale)*

**Parameters:**

Time zone Id default: *ZoneId.systemDefault()*;
<ul>
  <li><b>locale:</b> <code>string</code> - Language-specific format to use.</li>
</ul>

**Return value:**

a Date object as a string, using locale settings, time zone Id default: ZoneId.systemDefault().

**Examples:**
_Input date Without TZ (TZ Default = ZoneId.systemDefault())_
```java
var d = new Date(2023, 8, 6, 4, 4, 5);          //  Parameters (int year, int month, int dayOfMonth, int hours, int minutes, int seconds) => TZ Default = ZoneId.systemDefault();
msg.dLocal = d.toLocaleString("en-US");         //  return "8/6/23, 4:04:05 AM" (Locale: "en-US")
msg.dIso = d.toISOString();                     //  return "2023-08-06T01:04:05Z", ZoneId:  Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00";
msg.dDate = d;                                  //  return "неділя, 6 серпня 2023 р. о 04:04:05 за східноєвропейським літнім часом";
```
{: .copy-code}
        
```java
var d = new Date("2023-08-06T04:04:05.000");     //  Parameter (String 'yyyy-MM-ddThh:mm:ss.ms') => TZ Default = ZoneId.systemDefault():
var iso = d.toISOString()                        //  return "2023-08-06T01:04:05Z"
var local_de = d.toLocaleString("de");           //  return "06.08.23, 04:04:05"  (Locale: "de",  ZoneId "Europe/Kiev" = "+03:00")
var local_utc = d.toLocaleString("UTC");         //  return "2023-08-06 04:04:05" (Locale: "UTC", ZoneId "Europe/Kiev" = "+03:00")
```
{: .copy-code}

_Input date With TZ (TZ = parameter TZ or 'Z' equals 'UTC')_
```java
var d = new Date(2023, 8, 6, 4, 4, 5, "Europe/Berlin");         //  Parameters (int year, int month, int dayOfMonth, int hours, int minutes, int seconds, TZ) => TZ "Europe/Berlin"
var iso = d.toISOString()                                       //  return "2023-08-06T02:04:05Z"
var local1 = d.toLocaleString("UTC");                           //  return "2023-08-06 05:04:05" (Locale: "UTC",  ZoneId Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00";
var local2 = d.toLocaleString("en-us");                         //  return "8/6/23, 5:04:05 AM" (Locale: "en-US", ZoneId Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00";
var local3 = d.toLocaleString("de"");                           //  return "06.08.23, 05:04:05"  (Locale: "de",   ZoneId Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00";
```
{: .copy-code}


##### locale, time zone

**Syntax:**

*String toLocaleString(String locale, String tz)*

**Parameters:**
<ul>
  <li><b>locale:</b> <code>string</code> - Language-specific format to use.</li>
  <li><b>tz:</b> <code>string</code> - Id local time zone.</li>  
</ul>

**Return value:**

a Date object as a string, using locale settings and Id time zone.

**Examples:**

```java
```java
var d = new Date(2023, 8, 6, 4, 4, 5, "Europe/Berlin");         //  Parameters (int year, int month, int dayOfMonth, int hours, int minutes, int seconds, TZ) => TZ "Europe/Berlin"
var iso = d.toISOString()                                       //  return "2023-08-06T02:04:05Z"
var local1 = d.toLocaleString("UTC");                           //  return "2023-08-06 05:04:05" (Locale: "UTC",   ZoneId Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00";
var local2 = d.toLocaleString("en-us",  "America/New_York");    //  return "8/5/23, 10:04:05 PM" (Locale: "en-US", ZoneId "America/New_York" = "-04:00")
var local3 = d.toLocaleString("de",  "Europe/Berlin");          //  return "06.08.23, 04:04:05"  (Locale: "de",    ZoneId "Europe/Berlin" =    "+02:00")
```
{: .copy-code}```
{: .copy-code}

##### local, pattern (With Map options)

**Syntax:**

*String toLocaleString(String locale, String optionsStr)*

**Parameters:**
<ul>
  <li><b>locale:</b> <code>string</code> - Language-specific format to use.</li>
  <li><b>pattern:</b> <code>string</code> - Pattern, id time zone, Date/Time string format to use.</li>  
</ul>

**Return value:**

a Date object as a string, using locale settings, {"timeZone": "Id time zone",
                                                   "dateStyle": "full/long/medium/short",
                                                   "timeStyle": "full/long/medium/short",
                                                   "pattern": "M/d/yyyy, h:mm:ss a"}.

**Examples:**

```java
var d = new Date("2023-08-06T04:04:05.00Z");               // TZ => "UTC"
var iso = d.toISOString();                                 // return "2023-08-06T04:04:05Z"
var local1 = d.toLocaleString();                           // return "2023-08-06 07:04:05" (Locale: Default "UTC",   ZoneId Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00");

var options = {"timeZone":"America/New_York"};             // TZ = "-04:00"
var optionsStr = JSON.stringify(options);       
var local2 = d.toLocaleString("en-US", optionsStr);        // "8/6/23, 12:04:05 AM"  ("8/6/23, 00:04:05 AM", Locale:  "en-US",   ZoneId  => "America/New_York" = "-04:00");
```
{: .copy-code}

```java
var d = new Date("2023-08-06T04:04:05.000");                // TZ => Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00"
var iso = d.toISOString();                                  // return "2023-08-06T01:04:05Z"
var options = {"timeZone":"America/New_York"};
var optionsStr = JSON.stringify(options);
var local1 = d.toLocaleString("en-US", optionsStr);         // return "8/5/23, 9:04:05 PM" (Locale:  "en-US",   ZoneId  => "America/New_York" = "-04:00");
```
{: .copy-code}

```java
var d = new Date(2023, 8, 6, 4, 4, 5);                                              // TZ => Default = ZoneId.systemDefault => "Europe/Kiev" = "+03:00"
var iso = d.toISOString();                                                          // return "2023-08-06T01:04:05Z"
var  options = {"timeZone":"America/New_York", "pattern": "M-d/yyyy, h:mm=ss a"};
var optionsStr = JSON.stringify(options);
var local1 =d.toLocaleString("en-US", optionsStr);                                  // return "8-5/2023, 9:04=05 PM" (pattern, Locale:  "en-US",   ZoneId  => "America/New_York" = "-04:00");
```
{: .copy-code}

```java
var d = new Date(2023, 8, 6, 4, 4, 5, "UTC");                                           // TZ => "UTC"
var iso = d.toISOString();                                                              // return "2023-08-06T04:04:05Z"       
var options = {"timeZone":"America/New_York","dateStyle":"full","timeStyle":"full"};
var optionsStr = JSON.stringify(options);
var local1 =d.toLocaleString("uk-UA", optionsStr);                                      // return  "неділя, 6 серпня 2023 р. о 00:04:05 за північноамериканським східним літнім часом"
var local2 =d.toLocaleString("en-US", optionsStr);                                      // return  "Sunday, August 6, 2023 at 12:04:05 AM Eastern Daylight Time"
var local3 =d.toLocaleString("de", optionsStr);                                         // return  "Sonntag, 6. August 2023 um 00:04:05 Nordamerikanische Ostküsten-Sommerzeit"
```
{: .copy-code}
