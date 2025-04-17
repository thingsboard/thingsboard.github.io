* TOC
{:toc}

{% assign sinceVersion = "4.0.0" %}
{% include templates/since.md %}

SCADA (Supervisory Control and Data Acquisition) systems play a crucial role in energy monitoring and management, providing real-time insights into power generation, distribution, and consumption. 

With ThingsBoard platform, businesses can integrate advanced SCADA solutions to optimize energy efficiency, reduce costs, and enhance system reliability. 
The ability to collect, analyze, and visualize data from multiple energy sources helps operators make informed decisions and respond swiftly to changing conditions.
All of this is showcased in our SCADA Energy solution, demonstrating how easily and effectively energy systems can be managed using ThingsBoard.

<br>
<object width="100%" data="/images/solutions/scada-energy-management/scada-energy-management-scheme.svg"></object>

## Key application areas

SCADA systems with energy monitoring capabilities are widely applicable in various sectors, including:

- **Industrial facilities**. Used in manufacturing plants to monitor, control, and optimize energy consumption across machines and processes.
- **Renewable energy plants**. Essential for managing solar farms and wind parks—tracking generation, performance, and system health in real time.
- **Utilities & power grids**. SCADA supports grid stability by supervising power distribution, load balancing, and fault detection across large-scale networks.
- **Smart buildings**. Improves energy efficiency in commercial and residential buildings by managing lighting, HVAC, and electrical systems.
- **Data centers**. Monitors energy usage, ensures continuous power delivery, and manages backup systems to avoid downtime.

## System components

The SCADA Energy management system includes:

- **Devices**. Sensors and actuators installed on energy generation sources. They collect and transmit data such as the condition of solar panels, rotor speed of a wind turbine, input and output voltage of a transformer, generator performance metrics, and many other parameters.
- **Modbus protocol**. The primary communication protocol for data exchange between devices. It ensures reliable connection and seamless integration of equipment with the SCADA system.
- **Gateway**. A device that transmits data from sensors to ThingsBoard platform. It converts and relays data over the network for further processing.
- **ThingsBoard**. An IoT platform where data is collected, analyzed, and visualized. It allows operators to access information and set up alerts for critical parameter changes.
- **Dashboard visualization**. Track solar, wind, battery, generator, and consumption data in a single unified dashboard, enabling energy managers to make smarter and faster decisions.

## Install solution template

To understand how the SCADA Energy management template works, let's start by installing it.

You will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://{{hostName}}/signup){:target="_blank"} server.
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

- Go to the "**Solution templates**" page. Find "**SCADA Energy management**" and click "**Install**" to start the installation process.
- Configuration instructions for this solution will be provided — follow the steps as instructed.
- Once done, click "**Close**" to complete the setup and proceed to the dashboard.

{% include images-gallery.html imageCollection="go-to-scada-energy-management-solution-templates" %}

## Dashboard

The SCADA System for Smart Energy Management dashboard is designed for monitoring, controlling, and optimizing energy resources in real time. 
It enables operators to track the status of the energy system, analyze energy flows, and oversee the performance of generators, inverters, transformers, batteries, solar panels, and wind turbines. 
The dashboard helps detect faults, prevent failures, and improve energy efficiency through built-in alarms and historical data analysis. 
This ensures reliable power supply, minimizes energy losses, and facilitates the seamless integration of multiple energy sources.

![image](/images/solutions/scada-energy-management/scada-energy-management-4-pe.png)

<br>

**Dashboard structure**

Navigate through dashboard states using navigation buttons to track and manage details for each energy component.

- <b>Main dashboard state</b>. Provides a high-level overview of the energy system. Shows the status of power sources (solar, wind, batteries, transformers, generators), real-time energy flow, and consumption. Key metrics like grid input, power usage, and battery levels are displayed with interactive controls to manage sources.
- <b>Inverters state</b>. Focuses on inverter performance and load distribution. Displays voltage, current, and power output for each phase (L1, L2, L3), with real-time graphs and an alarm section for issues like overload or overheating.
- <b>Solar panels state</b>. Monitors solar panel performance in real time: illumination, voltage, and power output. Includes historical trends for voltage, current, and temperature, plus alerts for generation issues.
- <b>Wind turbine state</b>. Tracks wind turbine data: wind speed, rotor speed, and power output. Graphs show rotor speed and energy trends over time. Alerts notify users of issues like excessive vibrations or speed spikes.
- <b>Batteries state</b>. Shows battery storage status including charge level (SOC), cycle count, and voltage. Graphs track charging/discharging currents, temperature, and voltage trends. The alarm section highlights battery health or operation problems.
- <b>Power transformer state</b>. Displays transformer performance: input/output voltage, current, and frequency. Real-time energy flow monitoring is supported by historical graphs and alerts for transformer faults or instabilities.
- <b>Generator state</b>. Provides insights into generator operation: fuel levels, voltage, current, and oil temperature. Shows operating hours, maintenance status, and alerts for critical conditions to ensure reliable backup power.
- <b>Consumption state</b>. Visualizes energy usage over daily and monthly periods. Graphs show consumption, voltage, current, and frequency to help optimize efficiency. Alarms flag unusual consumption patterns or system issues.
- <b>Alarms state</b>. Lists all active and historical system alarms with timestamps, severity, and status. Users can acknowledge or resolve alerts related to faults, vibrations, and performance deviations.

{% include images-gallery.html imageCollection="energy-management-dashboard" %}

<br>
**Mobile view**

The mobile view demonstrates the flexibility of the dashboard, allowing you to manage and monitor the SCADA Energy management across different devices, including tablets and smartphones.

<object width="40%" data="/images/solutions/scada-energy-management/mobile-view-scada-energy-management.png"></object>