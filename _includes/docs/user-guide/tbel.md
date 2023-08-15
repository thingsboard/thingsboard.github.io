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

Our search for existing Script/Expression Language (EL) implementations lead us to the [MVEL](https://github.com/mvel/mvel).
The ThingsBoard Expression Language (TBEL) is basically a [fork](https://github.com/thingsboard/tbel) of MVEL with some important security constraints, 
built-in memory management, and frequently used helper functions that are specific to ThingsBoard.
 
#### TBEL vs Nashorn

TBEL is lightweight and is super fast comparing to Nashorn. For example, the execution of 1000 simple scripts like:
"return msg.temperature > 20" took 16 seconds for Nashorn and 12 milliseconds for MVEL. More than 1000 times faster.
We have forked the TBEL codebase and added additional security improvements to ensure no CPU or memory abuse. 
So, no need to run Nashorn with the sandbox environment.

Of course, TBEL is not as powerful as JS, but most of the use cases do not need this. 
The one who requires JS flexibility may use remote [JS Executors](/docs/{{docsPrefix}}reference/msa/#javascript-executor-microservices) as usual. 

#### TBEL vs JS Executors

[JS Executors](/docs/{{docsPrefix}}reference/msa/#javascript-executor-microservices) is a separate microservice based on Node.js. 
It is powerful and supports the latest JS language standards. 
However, there is a noticeable overhead to execute JS functions remotely. 
The Rule Engine and JS executors communicate through the queue. 
This process consumes resources and introduces a relatively small latency (a few ms). 
The latter may become a problem if you have multiple rule nodes chained into one rule chain.  

TBEL execution consumes much less resources and has no extra latency for inter process communications.

## TBEL Language Guide

TBEL is used to evaluate expressions written using Java syntax. Unlike Java however, TBEL is dynamically typed (with optional typing), meaning type qualification is not required in the source.
The TBEL expression can be as simple as a single identifier, or as complicated as an expression with method calls and inline collections.

#### Simple Property Expression

```java
msg.temperature
```
{: .copy-code}

In this expression, we simply have a single identifier (msg.temperature), which by itself, is what we refer to in TBEL as a property expression, 
in that the only purpose of the expression is to extract a property out of a variable or context object.

TBEL can even be used for evaluating a boolean expression. 
Assuming you are using TBEL in the Rule Engine to define simple script [filter node](https://thingsboard.io/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node):

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

Note the lack of semi-colon after 'a + b'. New lines are not substitutes for the use of the semi-colon in MVEL.

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
That is why, TBEL allows inline creation of the maps only. Most common operation with the map:

```java
// Create new map
var map = { "temperature": 42, "nested" : {"rssi": 130}};
// Change value of the key
map.temperature = 0;
// Add new key
map.humidity = 73;
// Check existance of the key
if(map.temperature != null){

}
// Null-Safe expressions using ?
if(map.?nonExistingKey.smth > 10){

}
// Iterate through the map
foreach(element : map.entrySet()){
    // Get the key
    element.key
    // Get the value
    element.value;
}
// remove value from the map
map.remove("temperature");
// get map size
map.size();
```
{: .copy-code}

#### Lists

TBEL allows you to create Lists. We use our own implementation of the List to control memory usage of the script. 
That is why, TBEL allows inline creation of the lists only. For example:

```java
// Create new list
var list = ["A", "B", "C"];
// List elelement access
list[0];
// Add element
list.add("F");
// Add element using index
list.add(3, "D");
// Remove element by index
list.remove(4);
// Remove element by value
list.remove("D");
// Set element using index
list[2] = "C";
list.set(2, "C");
// Size of the list
list.size();
// Get sub list - JS style
list.slice(1, 3);
// Foreach 
for (item: list) { 
    var smth = item;
}
// For loop 
for (int i =0; i < list.size; i++) { 
    var smth = list[i];
}
```
{: .copy-code}

#### Arrays

TBEL allows you to create Arrays. To control the memory usage, we allow arrays of primitive types only. String arrays are automatically converted to lists.

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

The TBEL implementation allows usage of **some** Java classes from the `java.util` and `java.lang` packages. For example:

```java
var foo = java.lang.Math.sqrt(4);
```
{: .copy-code}

For the security purpose, usage of those classes is constrained. You are able to call both static and non-static methods, but you are not able to assign the instance of the class to the variable:

```java
var list = ["A", "B", "C"];
java.util.Collections.reverse(list); // allowed
list = new java.util.ArrayList(); // Not allowed
```
{: .copy-code}

To simplify migration from the JS, we have added the `JSON` class with static methods: `JSON.stringify` and `JSON.parse` that work similar to JS. For example:
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

One of the most powerful features in TBEL is it's foreach operator. It is similar to the for each operator in Java 1.5 in both syntax and functionality. 
It accepts two parameters separated by a colon, the first is the local variable for the current element, and the second is the collection or array to be iterated.

For example:

```java
sum = 0;
for (n : numbers) {
   sum+=n;
}
```
{: .copy-code}

Since TBEL treats Strings as iterable objects you can iterate a String (character by character) with a foreach block:

```java
str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (c : str) {
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
  <li><b>charsetName:</b> <code>String</code> - optional Charset name. UTF_8 by default.</li>
</ul>

**Return value:**

A string constructed from the specified byte list.

**Examples:**

```java
var bytes = [(byte)0x48,(byte)0x45,(byte)0x4C,(byte)0x4C,(byte)0x4F];
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
  <li><b>charsetName:</b> <code>String</code> - optional Charset name. UTF_8 by default.</li>
</ul>

**Return value:**

A list of bytes.

**Examples:**

```java
var base64Str = "eyJoZWxsbyI6ICJ3b3JsZCJ9"; // Base 64 representation of the '{"hello": "world"}' 
var bytesStr = atob(base64Str);
return stringToBytes(bytesStr); // Returns [123, 34, 104, 101, 108, 108, 111, 34, 58, 32, 34, 119, 111, 114, 108, 100, 34, 125]
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
return hexToBytes("BBAA"); // returns [187, 170]
```
{: .copy-code}

#### bytesToHex

Converts the list of integer values, where each integer represents single byte, to the hex string.

**Syntax:**

*String bytesToHex(List<Integer> bytes)*

**Parameters:**

<ul>
  <li><b>bytes:</b> <code>List of integer</code> - the list of integer values, where each integer represents single byte.</li>
</ul>

**Return value:**

Hex string.

**Examples:**

```java
return bytesToHex([187, 170]); // returns "BBAA"
```
{: .copy-code}

#### bytesToBase64

Converts the byte array, to Base64 string.

**Syntax:**

*String bytesToBase64(byte[] bytes)*

**Parameters:**

<ul>
  <li><b>bytes:</b> <code>List of integer</code> - the list of integer values, where each integer represents single byte.</li>
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
If the incoming message contains arrays, key for transformed value will contain index of the element.  

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
If parameter **pathInKey** set to ***false*** - some keys can be overwritten by newly found values!  
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

As you can see, **key1** and **key3** was removed from output. Excluding works on any level with incoming keys.   
  
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
