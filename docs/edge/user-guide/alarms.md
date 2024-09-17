---
layout: docwithnav-edge
assignees: 
- ThingsBoard Team
title: Alarms
description: Alarms

createDeviceProfile:
    0:
      image: /images/edge/user-guide/alarms/create-device-profile-1.png
      title: 'Log in to ThingsBoard <b>PE</b> instance. Open <b>"Device profiles"</b> menu page.'
      
    1:
      image: /images/edge/user-guide/alarms/create-device-profile-2.png
      title: 'Click the <b>"+"</b> icon, then click <b>"Create new device profile"</b> button.'
      
    2:
      image: /images/edge/user-guide/alarms/create-device-profile-3.png
      title: 'Input device profile name (e.g., edge_thermostat). 2. Click <b>"Next: Transport configuration"</b> button.'
    
    3:
      image: /images/edge/user-guide/alarms/create-device-profile-4.png
      title: 'Use <b>"Default"</b> transport type. No changes required. 2. Click <b>"Next: Alarm rules"</b> button.'
    
    4:
      image: /images/edge/user-guide/alarms/create-device-profile-5.png
      title: 'Click <b>"Add alarm rule"</b> button.'
      
    5:
      image: /images/edge/user-guide/alarms/create-device-profile-6.png
      title: 'Specify alarm type (e.g., <b>"High Temperature"</b>). 2. Click <b>"+"</b> icon to add alarm rule condition.'
      
    6:
      image: /images/edge/user-guide/alarms/create-device-profile-7.png
      title: 'Click <b>"Add key filter"</b> button.'
  
    7:
      image: /images/edge/user-guide/alarms/create-device-profile-8.png
      title: '1. Select <b>"Key type"</b>. 2. Input <b>"Key name"</b>. 3. Select <b>"Value type"</b>. 4. Click <b>"Add"</b> button.'
      
    8:
      image: /images/edge/user-guide/alarms/create-device-profile-9.png
      title: '1. Select operation. 2. Input threshold value. 3. Click <b>"Add"</b> button.'
    
    9:
      image: /images/edge/user-guide/alarms/create-device-profile-10.png
      title: 'Click <b>"Save"</b> button.'
      
    10:
      image: /images/edge/user-guide/alarms/create-device-profile-11.png
      title: 'Click <b>"Add" button"</b>.'
    
    11:
      image: /images/edge/user-guide/alarms/create-device-profile-12.png
      title: 'Verify that the device profile was created successfully.'


createDevice:
    0:
      image: /images/edge/user-guide/alarms/create-device-1.png
      title: 'Log in to ThingsBoard <b>PE</b> instance. Open <b>"Devices"</b> menu page. Click <b>"+"</b>, then click <b>Add new device</b>.'
    1:
      image: /images/edge/user-guide/alarms/create-device-2.png
      title: '1. Enter device name (e.g., IoT Device). 2. Select device profile (e.g., edge thermostat). 3. Click <b>"Add"</b> button.'
      
verifyAlarm:
    0:
      image: /images/edge/user-guide/alarms/verify-alarm.png
      title: 'Verify that the alarm event has occurred.'
    
---

{% assign docsPrefix = "edge/" %}
{% include docs/edge/user-guide/alarms.md %}