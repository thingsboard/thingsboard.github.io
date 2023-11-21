---
layout: docwithnav-edge
title: Manage alarms and RPC requests on edge devices
description: ThingsBoard Edge use case #1

configureAlarmRules:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-1.png
        title: 'Login to your <b>ThingsBoard</b> instance and open Device profiles page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-2.png
        title: 'Click "+" to add new device profile.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-3.png
        title: 'Input device profile name. For example, type "edge thermostat". Click "Transport configuration" to proceed.'
    3:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-4.png
        title: 'For this example we will use default transport configuration. Click "Alarm rules" to proceed.'        
    4:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-5.png
        title: 'Click "Add alarm rule" button.'
    5:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-6.png
        title: 'Specify alarm type. For example, "High temperature". Click "+" icon to add new alarm condition.'
    6:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-7.png
        title: 'Click "Add key filter" button.'
    7:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-8.png
        title: 'Select key type, input key name, select value type and click "Add".'
    8:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-9.png
        title: 'Select operation and input threshold value. Click "Add".'
    9:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-10.png
        title: 'Click "Save" button.'
    10:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-11.png
        title: 'Click "Add" button.'
    11:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-12.png
        title: 'Newly create device profile will be show first in the list, because default sort order is by created time.'

configureAlarmRulesEdge:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-13.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device profiles page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/configure-rules-item-14.png
        title: 'Verify that "edge thermostat" was provisioned to edge as well.'

provisionDevicesEdge:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-1.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Devices page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-2.png
        title: 'Click on the "Add Device"("+") icon in the top right corner of the table.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-3.png
        title: 'Input device name. For example, "DHT22". Select "edge thermostat" from device profiles list. No other changes required at this time. Click "Add" to add the device.'
    3:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-4.png
        title: 'Now your "DHT22" device should be listed first, since table sort devices using created time by default. Click "Add" to add one more device.'
    4:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-5.png
        title: 'Input device name. For example, "Air Conditioner". No other changes required at this time. Click "Add" to add the device.'
    5:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-6.png
        title: 'Now your "Air Conditioner" device should be listed first, since table sort devices using created time by default.'
    6:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-7.png
        title: 'Click on "DHT22" device row to open device details and navigate to "Relations" tab. Click "+" icon to add new relation.'
    7:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-8.png
        title: 'Specify relation type "Manages" and select "Air Conditioner" device from the list. Click "Add" to add this relation. Now we verify that devices were provisioned to cloud.'

provisionDevices:    
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-10.png
        title: 'Login to your <b>ThingsBoard</b> instance and open Devices page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-11.png
        title: 'Make sure that "DHT22" and "Air Conditioner" devices are in the devices list.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/provision-devices-item-12.png
        title: 'Verify that relation from "DHT22" to "Air Conditioner" was provisioned as well.'

rootRuleChainPreview:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/root-rule-chain.png

updateRootRuleChain:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-1.png
        title: 'Login to your <b>ThingsBoard</b> instance and open Rule chain templates page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-2.png
        title: 'Open default "Edge Root Rule Chain".'
    2:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-3.png
        title: 'Filter node by "script" word and drag script node (Transformation) to rule chain.'
    3:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-4.png
        title: 'Input node name and add <b>JavaScript</b> code (you can copy and paste it from the snippet above) to create proper <b>enable</b> command for Air Conditioner device. Click "Add" to proceed.'
    4:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-5.png
        title: 'Drag connection from "Device Profile Node" to newly added <b>enabled</b> script node.'
    5:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-6.png
        title: 'Select "Alarm Created" from the list and click "Add" button.'
    6:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-7.png
        title: 'Click "Apply changes" to save current progress.'
    7:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-8.png
        title: 'Filter rule nodes by "change" word and add "change originator" node to rule chain.'
    8:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-9.png
        title: 'Select "Related" source. Select "Manages" filter. Select "Device" type. Click "Add".'
    9:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-10.png
        title: 'Add "Success" relations from script node to change originator. Add "Success" relation from change originator to RPC Call Request node. Save changes.'

updateRootRuleChainEdge:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-11.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Rule chains page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-12.png
        title: 'Open "Edge root rule chain" to verify changes.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/update-root-item-13.png
        title: 'Verify that rule chain is the same as you have updated on cloud.'

copyAccessTokenAirConditioner:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/copy-access-token-item-1.png
        title: 'Open Devices page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/copy-access-token-item-2.png
        title: 'Click on the <b>Air Conditioner</b> device row in the table to open device details.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/copy-access-token-item-3.png
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

copyAccessTokenDht22:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/copy-access-token-item-1.png
        title: 'Open Devices page in the ThingsBoard <b>Edge</b> instance.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/copy-access-token-item-4.png
        title: 'Click on the <b>DHT22</b> device row in the table to open device details.'
    3:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/copy-access-token-item-5.png  
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

deviceAlarmTab:
    0:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/copy-access-token-item-4.png
        title: 'Click on the <b>DHT22</b> device row in the table to open device details.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/manage-alarms/device-alarm-tab-item-1.png
        title: 'Navigate to the alarm tab.'

mqttWindows:
    0:
        image: https://img.thingsboard.io/edge/getting-started/mqtt-windows-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.'
    1:
        image: https://img.thingsboard.io/edge/getting-started/mqtt-windows-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click "Publish" button.'

---
* TOC
{:toc}

{% assign docsPrefix = "edge/" %}
{% assign appPrefix = "ThingsBoard" %}

## Use case

{% include templates/edge/use-cases/manage-alarms/use-case.md %}

## Prerequisites

{% include templates/edge/use-cases/prerequisites.md %}

## Configure Alarm Rules

{% include templates/edge/use-cases/manage-alarms/configure-alarm-rules.md %}

## Provision devices

{% include templates/edge/use-cases/manage-alarms/provision-devices.md %}

## Configure edge rule engine to handle alarms and send RPC calls

{% include templates/edge/use-cases/manage-alarms/configure-edge-rule-engine.md %}

## Connect "Air Conditioner" to edge and subscribe for RPC commands

{% include templates/edge/use-cases/manage-alarms/connect-air-conditioner.md %}

## Post telemetry to "DHT22" sensor to create alarm

{% include templates/edge/use-cases/manage-alarms/post-telemetry-to-dht22.md %}

## Verify that RPC request was send to "Air Conditioner" device

{% include templates/edge/use-cases/manage-alarms/verify-rpc-request.md %}

## Next Steps

{% assign currentGuide = "ManageAlarmsAndRpcRequestsOnEdgeDevices" %}
{% include templates/edge/guides-banner-edge.md %}
