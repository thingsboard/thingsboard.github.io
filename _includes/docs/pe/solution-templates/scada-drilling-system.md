* TOC
{:toc}

{% assign sinceVersion = "4.0.0" %}
{% include templates/since.md %}

A SCADA (Supervisory Control and Data Acquisition) system template for automating oil and gas drilling processes has been implemented based on ThingsBoard.
The use of SCADA systems allows operators to monitor drilling parameters in real time, control equipment, and prevent emergency situations. ThingsBoard, as an IoT platform, enables the collection, processing, and visualization of data from sensors and controllers, making drilling safer, more efficient, and more predictable.

<br>
<object width="100%" data="/images/solutions/scada-drilling-system/scada-systems-in-drilling-scheme.svg"></object>

## Install solution template

To understand how the SCADA Drilling system template works, let&#39;s start by installing it.

You will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/choose-region/){:target="_blank"} server.
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

- Go to the "**Solution templates**" page. Find "**SCADA Oil & Gas Drilling system**" and click "**Install**" to start the installation process.
- Configuration instructions for this solution will be provided — follow the steps as instructed.
- Once done, click "**Close**" to complete the setup and proceed to the dashboard.

{% include images-gallery.html imageCollection="go-to-drilling-solution-templates-page-1" %}

## System components

The SCADA Oil & Gas Drilling system includes:

- **Devices** – Sensors and actuators installed on drilling equipment. They collect data on drilling parameters such as rotation speed, tension, fluid level, and other indicators.
- **Modbus** protocol – The primary communication protocol for data exchange between devices. It ensures reliable connection and seamless integration of equipment with the SCADA system.
- **Gateway** – A device that transmits data from sensors to ThingsBoard platform. It converts and relays data over the network for further processing.
- **ThingsBoard** – An IoT platform where data is collected, analyzed, and visualized. It allows operators to access information and set up alerts for critical parameter changes.
- **Dashboard visualization** – SCADA dashboards provide a clear representation of all drilling processes, enabling real-time monitoring and informed decision-making.

## Dashboard

As part of this solution, we have developed a comprehensive SCADA Oil & Gas Drilling system dashboard, providing real-time monitoring and control of key drilling parameters such as rotary speed, depth, tension, and fluid flow rate.
Operators can manage equipment (pump, rotor, preventer), analyze the condition of the drilling rig, drill bit, and drilling mud, and track load and vibration levels.
The system features interactive graphs, alarm logs, and notifications, helping to prevent accidents and enhance operational efficiency.

![image](/images/solutions/scada-drilling-system/go-to-drilling-dashboard-2-pe.png)

**Dashboard structure:**

- **Main drilling SCADA system state** – Real-time monitoring of drilling parameters (speed, depth, tension, flow rate) with control over pump, rotor, and preventer.
- **Data monitoring SCADA system state** – Tracks drill bit position, well pressure, mud flow, mechanical tension, drilling performance, equipment status, and environmental conditions while analyzing temperature, vibration, and gas levels to prevent failures.
- **Drilling rig state** –Monitoring and controlling the rotational speed, hoisting speed, and drilling rig pressure, with real-time load analysis and drilling progress tracking.
- **Preventer (BOP) state** – Ensures well pressure control, monitors leaks, mud temperature, and gas levels, with real-time pressure trend analysis.
- **Drill bit state** – Tracks drilling speed, bit position, vibration, and temperature to optimize penetration rate and efficiency.
- **Drilling mud state** – Monitors and controls drilling fluid properties, ensuring proper lubrication, cooling, and circulation.
- **Drawwork state** – Controls hoisting and lowering of the drill string, adjusting speed, direction, and tension while tracking vibrations and position.
- **Alarms state** – Logs real-time alerts and warnings for quick response to failures, abnormal pressure, or unexpected temperature.

Navigate through dashboard states using navigation buttons to track and manage details for each drilling rig component.

{% include images-gallery.html imageCollection="drilling-dashboard-1" %}

Try modifying some equipment configurations. For example, set a greater well depth, change the drilling speed, or turn off the pump — and observe the results of these actions.

{% include images-gallery.html imageCollection="drilling-dashboard-2" %}

<br>
**Mobile view**

The mobile view demonstrates the flexibility of the dashboard, allowing you to manage and monitor the SCADA Oil & Gas Drilling system across different devices, including tablets and smartphones.

{% include images-gallery.html imageCollection="scada-mobile" %}

<object width="40%" data="/images/solutions/scada-drilling-system/drilling-tablet-and-mobile.png"></object>

## Conclusion

The implementation of SCADA and the ThingsBoard platform in drilling significantly enhances operational efficiency and safety. Through a comprehensive monitoring system, operators can track all key drilling process parameters, respond to changes promptly, and minimize risks of equipment failure. The integration of sensors, communication protocols, and powerful analytical tools enables the creation of smart drilling rigs, ensuring maximum productivity and resilience against potential disruptions.