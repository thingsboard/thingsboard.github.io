---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: SCADA Energy management
description: SCADA Energy management overview

go-to-solution-templates-page-1:
    0:
        image: /images/solutions/swimming_pool_scada_system/go-to-solution-templates-page-1-pe.png
        title: 'Navigate to the "Solution templates" page. Locate "Swimming Pool SCADA system" in your solution templates library. Click "Install" to begin the installation process;'
    1:
        image: /images/solutions/swimming_pool_scada_system/solution-instruction-1-pe.png
        title: 'After installation, the instructions for setting up the solution will open.'

launch-modbus-pool-emulator-1:
    0:
        image: /images/solutions/swimming_pool_scada_system/launch-modbus-pool-emulator-1-pe.png
        title: 'Run the command to start the Modbus pool emulator.'
    1:
        image: /images/solutions/swimming_pool_scada_system/launch-modbus-pool-emulator-2-pe.png
        title: ''

launch-iot-gateway-1:
    0:
        image: /images/solutions/swimming_pool_scada_system/launch-iot-gateway-1-pe.png
        title: 'Run the command from the folder where you&#39;ve saved the docker-compose.yml file to run the IoT Gateway:'
    1:
        image: /images/solutions/swimming_pool_scada_system/launch-iot-gateway-2-pe.png
        title: ''

docker-compose-yml:
    0:
        image: /images/solutions/swimming_pool_scada_system/solution-instruction-2-pe.png
        title: 'Copy the configuration for the docker-compose.yml file from the instructions;'
    1:
        image: /images/solutions/swimming_pool_scada_system/docker-compose-yml.png
        title: 'Create a new docker-compose.yml file on your PC, paste the copied configuration into it, and save the file.'

go-to-dashboard-1:
    0:
        image: /images/solutions/swimming_pool_scada_system/go-to-dashboard-1-pe.png
        title: 'Click "Close" to proceed to the dashboard;'
    1:
        image: /images/solutions/scada_system_in_smart_energy_management/go-to-smart-energy-managemen-dashboard-2-pe.png
        title: 'Swimming pool SCADA system dashboard.'

smart-energy-management-dashboard:
    0:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-1-pe.png
        title: '<b>Main Dashboard</b> – Provides an overview of the energy system, displaying power sources, energy flow, and consumption in real time. It includes key parameters like power consumption, grid input, and battery charge levels, with interactive controls for managing energy sources.'
    1:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-2-pe.png
        title: '<b>Inverters Monitoring</b> – Tracks inverter performance and load distribution, showing voltage, current, and power output for each phase (L1, L2, L3). It includes real-time graphs and alerts for critical issues like overloads and overheating.'
    2:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-3-pe.png
        title: '<b>Solar Batteries Dashboard</b> – Monitors solar panel performance, displaying illumination levels, voltage, and power output. It also tracks historical data and alerts users to operational anomalies affecting solar power generation.'
    3:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-4-pe.png
        title: '<b>Wind Turbine Monitoring</b> – Provides real-time data on wind speed, rotor speed, and power output. It includes graphical trends and alerts for issues like excessive vibrations or high-speed fluctuations.'
    4:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-5-pe.png
        title: '<b>Battery Storage System</b> – Displays battery status, including charge level (SOC), cycle count, and voltage. Graphs show charge/discharge trends, temperature, and voltage, while alarms notify users of battery health concerns.'
    5:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-6-pe.png
        title: '<b>Power Transformer Monitoring</b> – Monitors transformer performance by tracking input/output voltage, current, and power frequency. It ensures stable grid integration and highlights warnings related to transformer operation.'
    6:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-7-pe.png
        title: '<b>Generator Control Dashboard</b> – Provides insights into generator operation, fuel levels, and power output. It tracks voltage, current, and oil temperature trends while managing operating hours and maintenance schedules.'
    7:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-8-pe.png
        title: '<b>Energy Consumption Analysis</b> – Visualizes energy usage trends over different timeframes, helping optimize efficiency. It includes graphs for power consumption, voltage, and frequency, with alarms for anomalies.'
    8:
        image: /images/solutions/scada_system_in_smart_energy_management/smart-energy-management-dashboard-9-pe.png
        title: '<b>Alarm Management Dashboard</b> – Centralizes system alerts with timestamps, severity levels, and statuses. It helps operators quickly identify, acknowledge, and resolve critical issues.'

scada-alarms-traditional-2:
    0:
        image: /images/solutions/swimming_pool_scada_system/scada-alarms-traditional-3.png
        title: 'Switching to the "Alarms" tab will display all active and cleared alarms in the system, organized by the originating device, and their respective alarm types and severities.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/solution-templates/scada-energy-management.md %}
