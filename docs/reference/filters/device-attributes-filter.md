---
layout: docwithnav
assignees:
- ashvayka
title: Device Attributes Filter

---

## Overview

This component allows filtering incoming messages by attributes of the device. 
This filter is very useful if you want to apply the rule only to the certain sub-set of your device. 
Filter expression is a javascript expression and basically defines this sub-set. You are able to use any [attribute types](/docs/user-guide/attributes#attribute-types).

## Configuration

You are able to write boolean javascript expression using following bindings:

 - **cs** - client-side attributes map.
 - **ss** - server-side attributes map.
 - **shared** - shared attributes map.
 
If you are not sure that certain attribute is present, you can add check it's type for undefined.
For example, filter below will match if client-side attribute 'firmware_version' is set and equal to '1.0.0'  

```javascript
typeof cs.firmware_version !== 'undefined' && cs.firmware_version === '1.0.0' 
```

## Example

Assuming following device attributes and their types
 - firmware_version - client-side 
 - country - client-side
 - subscription_plan - shared
 - balance - server-side
 
The following filter will match all premium subscription devices with positive balance that are located in the USA with firmware version equal to 1.1.0

```javascript
cs.firmware_version=='1.1.0' && cs.country=='USA' && shared.subscription_plan=='premium' && ss.balance > 0
```

If you are not sure that all attributes are present for your device, you should use the following syntax that adds all necessary "null" checks

```javascript
typeof cs.firmware_version !== 'undefined' && 
typeof cs.country !== 'undefined' && 
typeof shared.subscription_plan !== 'undefined' && 
typeof ss.balance !== 'undefined' && 
cs.firmware_version=='1.1.0' && cs.country=='USA' && shared.subscription_plan=='premium' && ss.balance > 0
```

