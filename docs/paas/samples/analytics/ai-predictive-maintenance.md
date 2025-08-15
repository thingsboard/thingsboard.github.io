---
layout: docwithnav-paas
title: Industrial Equipment Health — AI-Based Anomaly Detection with ThingsBoard
description: Using Calculated Fields and Rule Engine AI nodes for predictive maintenance in ThingsBoard

import-calculated-field-into-profile:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-calculated-field-into-profile-1-pe.png
        title: 'Navigate to the "<b>Calculated fields</b>" tab of the target entity or profile. Click the "<b>plus</b>" icon button, and select "<b>Import calculated field</b>" from the dropdown menu.'
    1:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-calculated-field-into-profile-2-pe.png
        title: 'In the opened window, <b>upload the JSON file</b> with the calculated field configuration and click "<b>Import</b>".'
    2:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-calculated-field-into-profile-3-pe.png
        title: 'Verify the imported configuration: when importing, the edit window will open to allow modifications. Click "<b>Add</b>" to complete the import.'
    3:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-calculated-field-into-profile-4-pe.png
        title: 'You have imported the calculated field configuration.'

import-equipment-sensor-device-profile:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-sensor-device-profile-1-pe.png
        title: 'Navigate to the "<b>Device profiles</b>" page. Click the "<b>plus</b>" icon button, and select "<b>Import device profile</b>" from the dropdown menu.'
    1:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-sensor-device-profile-2-pe.png
        title: 'In the opened window, upload the JSON file with the device profile configuration and click "<b>Import</b>".'
    2:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-sensor-device-profile-3-pe.png
        title: 'You have imported the device profile configuration.'

import-equipment-health-analysis-rule-chain:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-health-analysis-rule-chain-1-pe.png
        title: 'Navigate to the "<b>Rule chains</b>" page. Click the "<b>plus</b>" icon button, and select "<b>Import rule chain</b>" from the dropdown menu.'
    1:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-health-analysis-rule-chain-2-pe.png
        title: 'In the opened window, upload the JSON file with the rule chain configuration and click "<b>Import</b>".'
    2:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-health-analysis-rule-chain-3-pe.png
        title: 'Locate "<b>AI request</b>" node and enter its <b>edit mode</b>.'
    3:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-health-analysis-rule-chain-4-pe.png
        title: 'Click "<b>Create new</b>" AI model.'
    4:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-health-analysis-rule-chain-5-pe.png
        title: 'Enter a <b>name for the AI model</b>, choose the <b>AI provider</b>, and paste your <b>API key</b>. This example uses <b>o4-mini</b> from OpenAI. <b>Test connectivity</b> before saving. Then, click "<b>Save</b>".'
    5:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-health-analysis-rule-chain-6-pe.png
        title: '<b>Apply changes</b> to "AI request" node.'
    6:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/import-equipment-health-analysis-rule-chain-7-pe.png
        title: '<b>Save rule chain</b>.'
  
update-equipment-sensor-profile:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/update-equipment-sensor-profile-1-pe.png
        title: 'Go to the "<b>Device profiles</b>" page. Click on the "<b>EquipmentSensor</b>" profile and enter edit mode.'
    1:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/update-equipment-sensor-profile-2-pe.png
        title: 'Specify "<b>Equipment Health Analysis</b>" as the default rule chain.'
    2:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/update-equipment-sensor-profile-3-pe.png
        title: ''

create-test-device-1:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/create-test-device-1-pe.png
        title: 'Navigate to the "<b>Devices</b>" page. Click the "<b>plus</b>" icon button, and select "<b>Add new device</b>" from the dropdown menu.'
    1:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/create-test-device-2-pe.png
        title: 'Name the device "<b>Equipment Sensor 1</b>". Set the device to the "<b>EquipmentSensor</b>" profile. Click "<b>Add</b>".'

create-test-device-2:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/create-test-device-3-paas.png
        title: 'Copy the <b>check connection</b> command.'

check-connectivity-command-from-device:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/check-connectivity-command-from-device-1-pe.png
        title: ''

send-test-data-no-alarm-case:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/send-test-data-no-alarm-case-1-pe.png

send-test-data-bearing-wear-detection:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/alarm-created-1-pe.png

send-test-data-misalignment-detection:
    0:
        image: https://img.thingsboard.io/samples/analytics/ai-predictive-maintenance/alarm-created-2-pe.png

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include /docs/samples/analytics/ai-predictive-maintenance.md %}
