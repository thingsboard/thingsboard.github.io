---
layout: docwithnav
assignees:
- ashvayka
title: Alarm Deduplication Processor

---

## Overview

This component allows generating unique alarms. You are able to specify *alarm ID* and *alarm body* templates.
Template evaluation is based on [velocity engine](http://velocity.apache.org/).
When component process incoming device messages it substitutes message values and device attributes into template.
Alarm uniqueness is controlled by result value of *alarm ID*.
If processor detects unique alarm, it will add following metadata:
 
 - *isNewAlarm* boolean flag to *true*.
 - *alarmId* string.
 - *alarmBody* string.

## Configuration

Template evaluation is done using certain context. This context is populated with values based on device message and attributes.
Attribute values are available using maps with following names:
 
 - **cs** - client-side attributes map.
 - **ss** - server-side attributes map.
 - **shared** - shared attributes map.

Telemetry values are pushed directly to the context using their keys.
You can also use *date*, *deviceId*, *deviceName*, and *deviceType*.

For example, following template:

``` javascript
[$date.get('yyyy-MM-dd HH:mm:ss')] Device $deviceType+$cs.get('serialNumber')($cs.get('model')) temperature is $temperature.valueAsString!
```

Will be evaluated into 

``` 
[2016-01-02 03:04:05] Device Killbot4000+SN-001(A) temperature is 100!
```

for Device with 

 - client-side attribute *serial number* = SN-001
 - client-side attribute *model* = A

and telemetry message

```json
{"temperature":100}
``` 

We recommend to include the truncated date and some unique device attribute into alarm id template. 
This will ensure that you will not generate alarms for the same device problem too often. 

## Example

As a tenant administrator, you are able to review processor example inside **Rules->Demo Alarm Rule->Processors->Alarm Deduplication Processor**.