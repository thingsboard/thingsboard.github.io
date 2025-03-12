* TOC
{:toc}

{% assign sinceVersion = "4.0.0" %}
{% include templates/since.md %}

A SCADA (Supervisory Control and Data Acquisition) system template for automating oil and gas drilling processes has been implemented based on ThingsBoard.
The use of SCADA systems allows operators to monitor drilling parameters in real time, control equipment, and prevent emergency situations. ThingsBoard, as an IoT platform, enables the collection, processing, and visualization of data from sensors and controllers, making drilling safer, more efficient, and more predictable.

<br>
<object width="95%" data="/images/solutions/scada-drilling-system/scada-systems-in-drilling-scheme.svg"></object>

<br>
To understand how the SCADA systems in Drilling template works, let&#39;s start by installing it.

## Install solution template

You will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/choose-region/){:target="_blank"} server.
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

{% include images-gallery.html imageCollection="go-to-drilling-solution-templates-page-1" showListImageTitles="true" %}

**Follow the next steps:**

\- **Step 1**: Install Docker Compose on your system. Follow the instructions in the official [Docker Compose installation guide](https://docs.docker.com/compose/install/){:target="_blank"};

\- **Step 2**: Launch the Modbus Pool Emulator. Execute the provided command to simulate a comprehensive swimming pool system:

```text
docker run --pull always --rm -d --name tb-drilling-emulator -p 5035-5039:5035-5039 thingsboard/tb-drilling-emulator:latest && docker logs -f tb-drilling-emulator
```
{: .copy-code}

This command will launch a Modbus pool emulator containing 5 separate devices, which act as a unified system and communicate through the ModBus protocol.

{% include images-gallery.html imageCollection="launch-modbus-pool-emulator-1" %}

\- **Step 3**: Launch the IoT Gateway.

ThingsBoard will automatically generate a yml file with the required settings. All you need to do is copy and save this configuration as a **docker-compose.yml** file in a convenient location on your computer for storage and execution.

{% include images-gallery.html imageCollection="docker-compose-yml" %}

Here&#39;s an example of the configuration:

```text
services:
  # ThingsBoard IoT Gateway Service Configuration
  tb-gateway:
    image: thingsboard/tb-gateway:latest
    container_name: tb-gateway-scada-drilling-system
    restart: always

    # Necessary mapping for Linux
    extra_hosts:
      - "host.docker.internal:host-gateway"

    # Environment variables
    environment:
      - host=$YOUR_INSTANCE_HOST
      - port=$YOUR_INSTANCE_PORT
      - accessToken=$ACCESS_TOKEN
```

where

- **$YOUR_INSTANCE_HOST** is a host of your ThingsBoard instance
- **$YOUR_INSTANCE_PORT** is a port of your ThingsBoard instance
- **$ACCESS_TOKEN** is an access token for the gateway from platform server

<br>
Now, run the command below from the folder where you've saved the docker-compose.yml file to run the IoT Gateway:

```text
docker compose up
```
{: .copy-code}

{% include images-gallery.html imageCollection="launch-iot-gateway-1" %}

We will explore the IoT Gateway in more detail in the "[Gateway](#gateway)" section, where we will discuss how the gateway operates within the ThingsBoard environment, devices connectivity, and data transmission configuration.

The IoT Gateway is running. Click "Close" to proceed to the dashboard.

{% include images-gallery.html imageCollection="go-to-dashboard-1" %}

You will need to have access to ThingsBoard Professional Edition. The easiest way is to use ThingsBoard Cloud server. The alternative option is to install ThingsBoard using installation guide.

## Dashboard

As part of this solution, we have developed a comprehensive SCADA system for a drilling dashboard, providing real-time monitoring and control of key drilling parameters such as rotary speed, depth, tension, and fluid flow rate.
Operators can manage equipment (pumps, rotors, preventers), analyze the condition of the drilling rig, drill bit, and drilling mud, and track load and vibration levels.
The system features interactive graphs, alarm logs, and notifications, helping to prevent accidents and enhance operational efficiency.

Key features:

- **Drilling Rig State** – Monitoring and control of rotary speed, hoisting speed, and pressure, with real-time load analysis and drilling progress tracking.
- **Draw Works System State** – Control of lifting speed, direction, and tension, with vibration, position, and inclination monitoring.
- **Blowout Preventer (BOP) State** – Well pressure control, activation/deactivation of the preventer, leak detection, mud temperature, and gas cut monitoring.
- **Drill Bit Performance State** – Tracking drilling speed, bit position, vibration, and temperature to ensure optimal penetration rate (ROP).
- **Drilling Mud System State** – Monitoring flow rate, mud level, density, pressure, and temperature to ensure proper lubrication and cooling.
- **Alarms and Notifications** – Real-time logging of alerts and warnings for quick response to failures, abnormal pressure, or leaks.
- **Modbus Gateway & Device Connectivity** – Monitoring device connectivity, status, communication protocols, and troubleshooting in real time.

![image](/images/solutions/scada-drilling-system/go-to-drilling-dashboard-2-pe.png)

Clicking on different devices provides detailed metrics and controls for each component.

{% include images-gallery.html imageCollection="solution-scada-dashboard-high-performance" %}

The mobile view demonstrates the flexibility of the dashboard, allowing you to manage and monitor the swimming pool SCADA system across different devices, including tablets and smartphones.

{% include images-gallery.html imageCollection="scada-mobile-high-performance" %}

## System components

The SCADA Swimming Pool system includes:

- **Devices** – Sensors and actuators installed on drilling equipment. They collect data on drilling parameters such as rotation speed, tension, fluid level, and other indicators.
- **Modbus** Protocol – The primary communication protocol for data exchange between devices. It ensures reliable connection and seamless integration of equipment with the SCADA system.
- **Gateway** – A device that transmits data from sensors to the cloud platform. It converts and relays data over the network for further processing.
- **ThingsBoard** – An IoT platform where data is collected, analyzed, and visualized. It allows operators to access information and set up alerts for critical parameter changes.
- **Dashboard Visualization** – SCADA dashboards provide a clear representation of all drilling processes, enabling real-time monitoring and informed decision-making.

## Key components of a drilling rig

These symbols represent key structural elements of the drilling system:

**Drilling Rig**

Main structure essential for supporting drilling operations.

![image](/images/solutions/scada-drilling-system/hp-drilling-rig.png)

**Preventer**

Blowout preventer for pressure control and system safety.

![image](/images/solutions/scada-drilling-system/hp-preventer.png)

**Drill**

Represents the drill bit responsible for boring into the ground.

![image](/images/solutions/scada-drilling-system/hp-drill.png)

**Drawwork**

Controls the hoisting and lowering of the drill string.

![image](/images/solutions/scada-drilling-system/hp-drawwork.png)

### Connection Components

These connector symbols facilitate the integration and linking of different equipment and symbols within the SCADA system, ensuring structured and logical connections

### Real-Time Monitoring and Control

These components provide real-time visualization and control over key parameters in the system:

- HP Control Panel – Allows toggling system components on and off.
- HP Simple Horizontal Scale – Basic monitoring for horizontal parameters.
- HP Dynamic Horizontal Scale – Adjustable monitoring of real-time horizontal metrics.
- HP Simple Vertical Scale – Vertical parameter representation for monitoring.

This structured SCADA system enhances precision, efficiency, and safety in drilling operations by integrating high-performance visual symbols.

## Conclusion

SCADA symbols provide critical visualization and control capabilities across industries that rely on automation, precision, and safety. Their adaptability ensures seamless integration into various industrial control systems, optimizing operations and reducing risks.

## Summary

The implementation of SCADA and the ThingsBoard platform in drilling significantly enhances operational efficiency and safety. Through a comprehensive monitoring system, operators can track all key drilling process parameters, respond to changes promptly, and minimize risks of equipment failure. The integration of sensors, communication protocols, and powerful analytical tools enables the creation of smart drilling rigs, ensuring maximum productivity and resilience against potential disruptions.
