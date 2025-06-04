---
layout: docwithnav-pe
assignees:
- stitenko
title: SCADA Energy management
description: SCADA Energy management overview

go-to-scada-energy-management-solution-templates:
    0:
        image: /images/solutions/scada-energy-management/scada-energy-management-1-pe.png
        title: 'Go to the "Solution templates" page. Find "SCADA Energy management" and click "Install" to start the installation process.'
    1:
        image: /images/solutions/scada-energy-management/scada-energy-management-2-pe.png
        title: 'Configuration instructions for this solution will be provided — follow the steps as instructed.'
    2:
        image: /images/solutions/scada-energy-management/scada-energy-management-3-pe.png
        title: 'Once done, click "Close" to complete the setup and proceed to the dashboard.'
    3:
        image: /images/solutions/scada-energy-management/scada-energy-management-4-pe.png
        title: 'SCADA Energy management dashboard.'

energy-management-dashboard:
    0:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-1-pe.png
        title: '<b>Main dashboard state</b>. Provides a high-level overview of the energy system. Shows the status of power sources (solar, wind, batteries, transformers, generators), real-time energy flow, and consumption. Key metrics like grid input, power usage, and battery levels are displayed with interactive controls to manage sources.'
    1:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-2-pe.png
        title: '<b>Inverters</b>. Focuses on inverter performance and load distribution. Displays voltage, current, and power output for each phase (L1, L2, L3), with real-time graphs and an alarm section for issues like overload or overheating.'
    2:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-3-pe.png
        title: '<b>Solar panels</b>. Monitors solar panel performance in real time: illumination, voltage, and power output. Includes historical trends for voltage, current, and temperature, plus alerts for generation issues.'
    3:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-4-pe.png
        title: '<b>Wind turbine</b>. Tracks wind turbine data: wind speed, rotor speed, and power output. Graphs show rotor speed and energy trends over time. Alerts notify users of issues like excessive vibrations or speed spikes.'
    4:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-5-pe.png
        title: '<b>Batteries</b>. Shows battery storage status including charge level (SOC), cycle count, and voltage. Graphs track charging/discharging currents, temperature, and voltage trends. The alarm section highlights battery health or operation problems.'
    5:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-6-pe.png
        title: '<b>Power transformer</b>. Displays transformer performance: input/output voltage, current, and frequency. Real-time energy flow monitoring is supported by historical graphs and alerts for transformer faults or instabilities.'
    6:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-7-pe.png
        title: '<b>Generator</b>. Provides insights into generator operation: fuel levels, voltage, current, and oil temperature. Shows operating hours, maintenance status, and alerts for critical conditions to ensure reliable backup power.'
    7:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-8-pe.png
        title: '<b>Consumption</b>. Visualizes energy usage over daily and monthly periods. Graphs show consumption, voltage, current, and frequency to help optimize efficiency. Alarms flag unusual consumption patterns or system issues.'
    8:
        image: /images/solutions/scada-energy-management/energy-management-dashboard-9-pe.png
        title: '<b>Alarms</b>. Lists all active and historical system alarms with timestamps, severity, and status. Users can acknowledge or resolve alerts related to faults, vibrations, and performance deviations.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/solution-templates/scada-energy-management.md %}
