---
layout: docwithnav-paas
assignees:
- ashvayka
title: Device Profiles
description: IoT device profiles
redirect_from: "/docs/pe/user-guide/ui/device-profiles"
ruleChainSetting:
    0:
        image: /images/user-guide/device-profile/rule-chain-setting-pe.png

queueNameSetting:
    0:
        image: /images/user-guide/device-profile/queue-name-setting-pe.png

mqttTransportSetting:
    0:
        image: /images/user-guide/device-profile/transport-setting-pe.png
        
coapTransportSetting:    
    0:
        image: /images/user-guide/device-profile/coap-transport-setting-pe.png

mqttProtobufSetting:
    0:
        image: /images/user-guide/device-profile/mqtt-protobuf-setting-pe.png
        
coapProtobufSetting:
    0:
        image: /images/user-guide/device-profile/coap-protobuf-setting-pe.png
    
alarmСonditions:
    0:
        image: /images/user-guide/device-profile/alarm-example-1-step-1-pe.png  
        title: 'Step 1. Open the device profile and toggle edit mode.'
    1:
        image: /images/user-guide/device-profile/alarm-example-1-step-2-pe.png
        title: 'Step 2. Click the "Add alarm rule" button.'
    2:
        image: /images/user-guide/device-profile/alarm-example-1-step-3-pe.png
        title: 'Step 3. Input Alarm Type and click on the red "+" sign.'
    3:
        image: /images/user-guide/device-profile/alarm-example-1-step-4-pe.png
        title: 'Step 4. Click the "Add Key Filter" button.'
    4:
        image: /images/user-guide/device-profile/alarm-example-1-step-5-pe.png
        title: 'Step 5. Select the "Timeseries" key type. Input the "temperature" key name. Change "Value type" to "Numeric". Click the "Add" button.'
    5:
        image: /images/user-guide/device-profile/alarm-example-1-step-6-pe.png
        title: 'Step 6. Select the "greater than" operation and input the threshold value. Click "Add".'
    6:
        image: /images/user-guide/device-profile/alarm-example-1-step-7-pe.png
        title: 'Step 7. Click the "Save" button.'
    7:
        image: /images/user-guide/device-profile/alarm-example-1-step-8-pe.png
        title: 'Step 8. Finally, apply changes.'

alarmСonditionsWithDuration:
    0:
        image: /images/user-guide/device-profile/alarm-example-2-step-1-pe.png  
        title: 'Step 1. Edit the alarm condition and change the condition type to "Duration". Specify duration value and unit. Save the condition.'
    1:
        image: /images/user-guide/device-profile/alarm-example-2-step-2-pe.png
        title: 'Step 2. Apply changes.'

alarmСonditionsWithDuration2:
    0:
        image: /images/user-guide/device-profile/alarm-example-2-step-3-paas.png  
        title: 'Step 3. Edit the alarm condition and change the condition type to "Duration". Specify default duration value and time unit. This value will be used by default, if no attribute is set for your device;'
    1:
        image: /images/user-guide/device-profile/alarm-example-2-step-4-paas.png
        title: 'Step 4. Go to the dynamic value of the alarm delay by pressing the "Switch to dynamic value" button;'
    2:
        image: /images/user-guide/device-profile/alarm-example-2-step-5-paas.png
        title: 'Step 5. Select a value: current device, current customer or current tenant. And specify the attribute from which the alarm threshold value will be taken.
        You may optionally check "Inherit from owner". Inheritance allows to take the threshold value from customer if it is not set on the device level. If the attribute value is not set on both device and customer levels, rule will take the value from the tenant attributes;'
    3:
        image: /images/user-guide/device-profile/alarm-example-2-step-6-paas.png
        title: 'Step 6. Apply all changes.'
 
alarmСonditionsWithRepeating:
    0:
        image: /images/user-guide/device-profile/alarm-example-3-step-1-pe.png  
        title: 'Step 1. Edit the alarm condition and change the condition type to "Repeating". Specify 3 as "Count of events".  Save the condition.'
    1:
        image: /images/user-guide/device-profile/alarm-example-3-step-2-pe.png
        title: 'Step 2. Apply changes.'

alarmСonditionsWithRepeating2:
    0:
        image: /images/user-guide/device-profile/alarm-example-3-step-3-paas.png  
        title: 'Step 3. Edit the alarm condition and change the condition type to "Repeating". Specify default value "Count of events" to trigger the alarm; This value will be used by default, if no attribute is set for your device;'
    1:
        image: /images/user-guide/device-profile/alarm-example-3-step-4-paas.png
        title: 'Step 4. Go to the dynamic value of the repeating alarm condition by pressing the "Switch to dynamic value" button;'
    2:
        image: /images/user-guide/device-profile/alarm-example-3-step-5-paas.png
        title: 'Step 5. Select a value: current device, current customer or current tenant. And specify the attribute from which the value will be taken, how many times the threshold value must be exceeded for an alarm to be triggered. You may optionally check "Inherit from owner". Inheritance allows to take the threshold value from customer if it is not set on the device level. If the attribute value is not set on both device and customer levels, rule will take the value from the tenant attributes;'
    3:
        image: /images/user-guide/device-profile/alarm-example-3-step-6-paas.png
        title: 'Step 6. Apply all changes.'
        
alarmСonditionsClear:
    0:
        image: /images/user-guide/device-profile/alarm-example-4-step-1-pe.png  
        title: 'Step 1. Open the device profile and toggle edit mode. Click the "Add clear condition" button.'
    1:
        image: /images/user-guide/device-profile/alarm-example-4-step-2-pe.png
        title: 'Step 2. Click on the red "+" sign.'
    2:
        image: /images/user-guide/device-profile/alarm-example-4-step-3-pe.png
        title: 'Step 3. Add Key Filter.'
    3:
        image: /images/user-guide/device-profile/alarm-example-4-step-4-pe.png
        title: 'Step 4. Finally, apply changes.'
 
alarmСonditionsSchedule:
    0:
        image: /images/user-guide/device-profile/alarm-example-5-step-1-pe.png  
        title: 'Step 1. Edit the schedule of the alarm rule.'
    1:
        image: /images/user-guide/device-profile/alarm-example-5-step-2-pe.png
        title: 'Step 2. Select timezone, days, time interval, and click "Save".'
    2:
        image: /images/user-guide/device-profile/alarm-example-5-step-3-pe.png
        title: 'Step 3. Finally, apply changes.'
        
alarmСonditionsAdvanced:
    0:
        image: /images/user-guide/device-profile/alarm-example-6-step-1-pe.png  
        title: 'Step 1. Modify the temperature key filter and change the value type to dynamic.'
    1:
        image: /images/user-guide/device-profile/alarm-example-6-step-2-pe.png
        title: 'Step 2. Select a dynamic source type and input the *temperatureAlarmThreshold*, then click "Update". You may optionally check "Inherit from owner". Inheritance allows to take the threshold value from customer if it is not set on the device level. If the attribute value is not set on both device and customer levels, rule will take the value from the tenant attributes.'
    2:
        image: /images/user-guide/device-profile/alarm-example-6-step-3-pe.png
        title: 'Step 3. Add another key filter for the *temperatureAlarmFlag*, then click "Add".'
    3:
        image: /images/user-guide/device-profile/alarm-example-6-step-4-pe.png
        title: 'Step 4. Finally, click "Save" and apply changes.'
    4:
        image: /images/user-guide/device-profile/alarm-example-6-step-5-pe.png
        title: 'Step 5. Provision device attributes either manually or via the script.'

alarmСonstantFilters:
    0:
        image: /images/user-guide/device-profile/alarm-example-7-step-1-pe.png  
        title: 'Choose constant type and value and compare it with the value of the tenant or customer attribute.'

ruleNode:
    0:
        image: /images/user-guide/device-profile/device-profile-rule-node-pe.png 
    1:
        image: /images/user-guide/device-profile/device-profile-rule-node-2-pe.png
        
notifications:
    0:
        image: /images/user-guide/device-profile/device-profile-notifications-pe.png           
---

{% assign docsPrefix = "paas/" %}
{% include docs/user-guide/device-profiles.md %}