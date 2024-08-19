---
layout: docwithnav-edge
title: Manage alarms and RPC requests on edge devices
description: ThingsBoard Edge use case #1

configureAlarmRules:
    0:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-1.png
        title: 'Login to your <b>ThingsBoard</b> instance and open <b>Device profiles</b> menu page.'
    1:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-2.png
        title: 'Click the <b>("+")</b> icon to add new device profile.'
    2:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-3.png
        title: '1. Input device profile name. For e.g., <b>edge thermostat</b>. 2. Click on the <b>Transport configuration</b> to proceed.'
    3:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-4.png
        title: 'For this example we will use default transport configuration. Click on the <b>Alarm rules</b> to proceed.'
    4:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-5.png
        title: 'Click on the <b>Add alarm rule</b> button.'
    5:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-6.png
        title: '1. Specify alarm type. For e.g., <b>High temperature</b>. 2. Click on the <b>("+")</b> icon to add new alarm condition.'
    6:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-7.png
        title: 'Click on the <b>Add key filter</b> button.'
    7:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-8.png
        title: '1. Select key type <b>Time series</b>. 2. Input key name <b>temperature</b>. 3. Select value type <b>Numeric</b>. 4. Click on the <b>Add</b> button.'
    8:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-9.png
        title: '1. Select operation <b>greater than</b>. 2. Input threshold value <b>50</b>. 3. Click on the <b>Add</b> button.'
    9:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-10.png
        title: 'Click on the <b>Save</b> button.'
    10:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-11.png
        title: 'Click on the <b>Add</b> button.'
    11:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-12.png
        title: 'Newly create device profile will be show first in the list, because default sort order is by created time.'

configureAlarmRulesEdge:
    0:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-13.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open <b>Device profiles</b> menu page.'
    1:
        image: /images/edge/use-cases/manage-alarms/configure-rules-item-14.png
        title: 'Verify that <b>edge thermostat</b> was provisioned to edge as well.'

provisionDevicesEdge:
    0:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-1.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open <b>Devices</b> menu page.'
    1:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-2.png
        title: 'Click on the <b>("+")</b> icon in the top right corner of the table.'
    2:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-3.png
        title: '1. Input device name. For e.g., <b>DHT22</b>. 2. Select <b>edge thermostat</b> from device profiles list. No other changes required at this time. 3. Click <b>Add</b> to add the device.'
    3:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-4.png
        title: 'Now your <b>DHT22</b> device should be listed first, since table sort devices using created time by default.'
    4:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-5.png
        title: 'To add more devices, click on the <b>("+")</b> icon then <b>Add new device</b>.'
    5:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-6.png
        title: '1. Input device name. For e.g., <b>Air Conditioner</b>. No other changes required at this time. 2. Click on the <b>Add</b> to add the device.'
    6:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-7.png
        title: 'Now your <b>Air Conditioner</b> device should be listed first, since table sort devices using created time by default.'
    7:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-8.png
        title: '1. Click on the <b>DHT22</b>. 2. Click on the <b>Relations</b>. 3. Click on the <b>("+")</b> icon.'
    8:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-9.png
        title: '1. Specify <b>Manages</b> type. 2. Specify <b>Device</b> type. 3. Select <b>Air Conditioner</b> device. 4. Click on the "Add" button. Now we verify that devices were provisioned to cloud.'

provisionDevices:
    0:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-10.png
        title: 'Login to your <b>ThingsBoard</b> instance and open <b>Devices</b> menu page.'
    1:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-11.png
        title: 'Make sure that <b>DHT22</b> and <b>Air Conditioner</b> devices are in the devices list.'
    2:
        image: /images/edge/use-cases/manage-alarms/provision-devices-item-12.png
        title: 'Verify that relation from <b>DHT22</b> to <b>Air Conditioner</b> was provisioned as well.'

rootRuleChainPreview:
    0:
        image: /images/edge/use-cases/manage-alarms/root-rule-chain.png

updateRootRuleChain:
    0:
        image: /images/edge/use-cases/manage-alarms/update-root-item-1.png
        title: 'Login to your <b>ThingsBoard</b> instance and open <b>Rule chain templates</b> menu page.'
    1:
        image: /images/edge/use-cases/manage-alarms/update-root-item-2.png
        title: 'Open default <b>Edge Root Rule Chain</b>.'
    2:
        image: /images/edge/use-cases/manage-alarms/update-root-item-3.png
        title: 'Filter node by <b>script</b> word and drag script node (Transformation) to rule chain.'
    3:
        image: /images/edge/use-cases/manage-alarms/update-root-item-4.png
        title: 'Input node name and add <b>TBEL</b> script language code (you can copy and paste it from the snippet above) to create proper <b>enable</b> command for Air Conditioner device. Click <b>Add</b> to proceed.'
    4:
        image: /images/edge/use-cases/manage-alarms/update-root-item-5.png
        title: 'Drag connection from <b>Device Profile Node</b> to newly added <b>enabled</b> script node.'
    5:
        image: /images/edge/use-cases/manage-alarms/update-root-item-6.png
        title: 'Select <b>Alarm Created</b> from the list and click on the <b>Add</b> button.'
    6:
        image: /images/edge/use-cases/manage-alarms/update-root-item-7.png
        title: 'Click on the <b>Apply changes</b> button to save current progress.'
    7:
        image: /images/edge/use-cases/manage-alarms/update-root-item-8.png
        title: 'Filter rule nodes by <b>change</b> word and add <b>change originator</b> node to rule chain.'
    8:
        image: /images/edge/use-cases/manage-alarms/update-root-item-9.png
        title: '1. Input <b>Switch to Air Conditioner</b>. 2. Select <b>Related entity</b>. 3. Select <b>Manages</b>. 4. Select <b>Device type</b>. 5. Click on the "Add" button'
    9:
        image: /images/edge/use-cases/manage-alarms/update-root-item-10.png
        title: 'Add <b>Success</b> relations from script node to change originator and <b>Success</b> relation from change originator to <b>RPC Call Request</b> node. Save changes.'

updateRootRuleChainEdge:
    0:
        image: /images/edge/use-cases/manage-alarms/update-root-item-11.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open <b>Rule chains</b> menu page.'
    1:
        image: /images/edge/use-cases/manage-alarms/update-root-item-12.png
        title: 'Open <b>Edge Root Rule Chain</b> to verify changes.'

copyAccessTokenAirConditioner:
    0:
        image: /images/edge/use-cases/manage-alarms/copy-access-token-item-1.png
        title: 'Open <b>Devices</b> menu page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/use-cases/manage-alarms/copy-access-token-item-2.png
        title: 'Click on the <b>Air Conditioner</b> device row in the table to open device details.'
    2:
        image: /images/edge/use-cases/manage-alarms/copy-access-token-item-3.png
        title: 'Click on the <b>Copy access token</b>. Token will be copied to your clipboard. Save it to a safe place.'

copyAccessTokenDht22:
    0:
        image: /images/edge/use-cases/manage-alarms/copy-access-token-item-1.png
        title: 'Open <b>Devices</b> menu page in the ThingsBoard <b>Edge</b> instance.'
    2:
        image: /images/edge/use-cases/manage-alarms/copy-access-token-item-4.png
        title: 'Click on the <b>DHT22</b> device row in the table to open device details.'
    3:
        image: /images/edge/use-cases/manage-alarms/copy-access-token-item-5.png
        title: 'Click on the <b>Copy access token</b>. Token will be copied to your clipboard. Save it to a safe place.'

deviceAlarmTab:
    0:
        image: /images/edge/use-cases/manage-alarms/copy-access-token-item-4.png
        title: 'Click on the row of the <b>DHT22</b> device in the table to view the device details'
    1:
        image: /images/edge/use-cases/manage-alarms/device-alarm-tab-item-1.png
        title: 'Navigate to the <b>alarm tab</b>.'

mqttWindows:
    0:
        image: /images/edge/getting-started/mqtt-windows-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.'
    1:
        image: /images/edge/getting-started/mqtt-windows-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click on the <b>Publish</b> button.'

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

