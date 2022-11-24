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

In this expression, we simply have a single identifier (msg.temperature), which by itself, is what we refer to in TBEL as a property expression, 
in that the only purpose of the expression is to extract a property out of a variable or context object.

TBEL can even be used for evaluating a boolean expression. 
Assuming you are using TBEL in the Rule Engine to define simple script [filter node](https://thingsboard.io/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node):

```java
  return msg.temperature > 10;
```

Like Java, TBEL supports the full gamut of operator precedence rules, including the ability to use bracketing to control execution order.

```java
  return (msg.temperature > 10 && msg.temperature < 20) || (msg.humidity > 10 && msg.humidity < 60);
```

#### Multiple statements

You may write scripts with an arbitrary number of statements using the semi-colon to denote the termination of a statement. 
This is required in all cases except in cases where there is only one statement, or for the last statement in a script.

```java
    var a = 2;
    var b = 2;
    return a + b
```

Note the lack of semi-colon after 'a + b'. New lines are not substitutes for the use of the semi-colon in MVEL.

#### Value Coercion

MVEL’s type coercion system is applied in cases where two incomparable types are presented by attempting to coerce the ‘’right’‘value to that of the type of the’‘left’’ value, and then vice-versa.

For example:

```java
    "123" == 123;
```

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

#### Literals

A literal is used to represent a fixed-value in the source of a particular script.

**String literals**

String literals may be denoted by single or double quotes.

```
"This is a string literal"
'This is also string literal'
```

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

An octal representation of an integer is possible by prefixing the number with a zero, followed by digits ranging from 0 to 7.

```java
0353 // octal
```

Hexidecimal is represented by prefixing the integer with 0x followed by numbers ranging from 0-9..A-F.

```java
0xAFF0 // hex
```

A floating point number consists of a whole number and a factional part denoted by the point/period character, with an optional type suffix.

```java
10.503 // a double
94.92d // a double
14.5f // a float
```

You can represent `*`BigInteger`*` and `*`BigDecimal`*` literals by using the suffixes `B` and `I` (uppercase is mandatory).

```
104.39484B // BigDecimal
8.4I // BigInteger
```

Boolean literals are represented by the reserved keywords `true` and `false`.

The null literal is denoted by the reserved keywords `null` or `nil`.

#### Using Java Classes

The TBEL implementation allows usage of **some** Java classes from the `java.util` and `java.lang` packages. For example:

```java
var foo = java.lang.Math.sqrt(4);
```

For the security purpose, usage of those classes is constrained. You are able to call both static and non-static methods, but you are not able to assign the instance of the class to the variable:

```java
var list = ["A", "B", "C"];
java.util.Collections.reverse(list); // allowed
list = new java.util.ArrayList(); // Not allowed
```

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

**Ternary statements**

Ternary statements are supported just as in Java:

```java
temperature > 0 ? "Yes" : "No";
```

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

Since TBEL treats Strings as iterable objects you can iterate a String (character by character) with a foreach block:

```java
str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (c : str) {
   //do something 
}
```

**For Loop**

```java
for (int i =0; i < 100; i++) { 
   System.out.println(i);
}
```

**Do While, Do Until**

`do while` and `do until` are implemented in TBEL, following the same convention as Java, with `until` being the inverse of `while`.

```java
do { 
   x = something();
} 
while (x != null);
```

... is semantically equivalent to ...

```java
do {
   x = something();
}
until (x == null);
```

**While, Until**

TBEL implements standard while, with the addition of the inverse until.

```java
while (isTrue()) {
   doSomething();
}
```

... or ...

```java
until (isFalse()) {
   doSomething();
}
```