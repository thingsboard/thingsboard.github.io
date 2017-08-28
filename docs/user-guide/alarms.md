---
layout: docwithnav
assignees:
- ashvayka
title: Working with IoT device alarms
description: IoT device alarm management using Thingsboard alarms feature

---

* TOC
{:toc}

Thingsboard provides the ability to create and manage alarms related to your entities: devices, assets, customers, etc.  

### Alarm Lifecycle

Alarms have a lifecycle. Each Alarm can be cleared and acknowledged. By default, an alarm is not in the active and unacknowledged state.

### Alarm Originator, Type, and Propagation

Alarm Originator is an entity that is responsible for triggering an alarm. By default, an alarm is propagated to all related entities (parent relations only).
An alarm is identified by start time, originator and type. There can't be two active alarms for a same type and originator.

### Alarm Severity

One of the following alarm severities is supported: CRITICAL, MAJOR, MINOR, WARNING, INDETERMINATE.

### Alarm Updates

Alarm entity may be updated by external applications or Thingsboard rules. Alarm keeps track of both clear and acknowledge time and latest change as an end time. 

### Alarm REST API

Thingsboard provides REST API to manage and query alarms. See demo environment [Alarm REST API](https://demo.thingsboard.io/swagger-ui.html#/alarm-controller) and general [REST API](/docs/reference/rest-api/) documentation for more details.

### Alarm Rules

It is possible to generate alarm using Thingsboard [rule engine](/docs/user-guide/rule-engine/). 
Please review the following screen cast to learn how to provision this [**simple rule**](/docs/user-guide/resources/moisture_threshold_rule.json) that generates an alarm when moisture is below or above a certain threshold for a device with type "moisture-temperature". 
  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/K64rRA8WEF8" frameborder="0" allowfullscreen></iframe>
    </div>
</div>


    
