* TOC
{:toc}

{% assign sinceVersion = "4.0.0" %}
{% include templates/since.md %}

A SCADA (Supervisory Control and Data Acquisition) system template for automating oil and gas drilling processes has been implemented based on ThingsBoard.
The use of SCADA systems allows operators to monitor drilling parameters in real time, control equipment, and prevent emergency situations. ThingsBoard, as an IoT platform, enables the collection, processing, and visualization of data from sensors and controllers, making drilling safer, more efficient, and more predictable.

<br>
<object width="95%" data="/images/solutions/scada-drilling-system/scada-systems-in-drilling-scheme.svg"></object>

<br>
To understand how the SCADA Drilling system template works, let&#39;s start by installing it.

## Install solution template

You will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/choose-region/){:target="_blank"} server.
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

{% include images-gallery.html imageCollection="go-to-drilling-solution-templates-page-1" showListImageTitles="true" %}

**Follow the next steps:**

\- **Step 1**: Install Docker Compose. Follow the instructions in the official [Docker Compose installation guide](https://docs.docker.com/compose/install/){:target="_blank"};

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

The IoT Gateway is running. Click "Close" to proceed to the dashboard.

{% include images-gallery.html imageCollection="go-to-dashboard-1" %}

## System components

The SCADA Oil & Gas Drilling system includes:

- **Devices** – Sensors and actuators installed on drilling equipment. They collect data on drilling parameters such as rotation speed, tension, fluid level, and other indicators.
- **Modbus** protocol – The primary communication protocol for data exchange between devices. It ensures reliable connection and seamless integration of equipment with the SCADA system.
- **Gateway** – A device that transmits data from sensors to the cloud platform. It converts and relays data over the network for further processing.
- **ThingsBoard** – An IoT platform where data is collected, analyzed, and visualized. It allows operators to access information and set up alerts for critical parameter changes.
- **Dashboard visualization** – SCADA dashboards provide a clear representation of all drilling processes, enabling real-time monitoring and informed decision-making.

## Dashboard

As part of this solution, we have developed a comprehensive SCADA Oil & Gas Drilling system dashboard, providing real-time monitoring and control of key drilling parameters such as rotary speed, depth, tension, and fluid flow rate.
Operators can manage equipment (pumps, rotors, preventers), analyze the condition of the drilling rig, drill bit, and drilling mud, and track load and vibration levels.
The system features interactive graphs, alarm logs, and notifications, helping to prevent accidents and enhance operational efficiency.

![image](/images/solutions/scada-drilling-system/go-to-drilling-dashboard-2-pe.png)

<br>

**Key features:**

- **Main drilling SCADA system state** – Real-time monitoring of drilling parameters (speed, depth, tension, flow rate) with control over pumps, rotors, and preventers.
- **Data monitoring SCADA system state** – Tracks drill bit position, well pressure, mud flow, mechanical tension, drilling performance, equipment status, and environmental conditions while analyzing temperature, vibration, and gas levels to prevent failures.
- **Drilling rig state** –Monitoring and controlling the rotational speed, hoisting speed, and drilling rig pressure, with real-time load analysis and drilling progress tracking.
- **Blowout preventer (BOP) state** – Ensures well pressure control, monitors leaks, mud temperature, and gas levels, with real-time pressure trend analysis.
- **Drill bit performance state** – Tracks drilling speed, bit position, vibration, and temperature to optimize penetration rate and efficiency.
- **Drilling mud system state** – Monitors and controls drilling fluid properties, ensuring proper lubrication, cooling, and circulation.
- **Draw works system state** – Controls hoisting and lowering of the drill string, adjusting speed, direction, and tension while tracking vibrations and position.
- **Alarms and notifications** – Logs real-time alerts and warnings for quick response to failures, abnormal pressure, and leaks. 

Navigating through the states provides detailed metrics and control elements for the drilling rig components.

{% include images-gallery.html imageCollection="drilling-dashboard-1" %}

The mobile view demonstrates the flexibility of the dashboard, allowing you to manage and monitor the SCADA Oil & Gas Drilling system across different devices, including tablets and smartphones.

{% include images-gallery.html imageCollection="scada-mobile" %}

## Key components of a drilling rig

These symbols represent key structural elements of the drilling system:

**Drilling rig**

Main structure essential for supporting drilling operations.

![image](/images/solutions/scada-drilling-system/hp-drilling-rig.png)

<br>

**Preventer**

Blowout preventer for pressure control and system safety.

![image](/images/solutions/scada-drilling-system/hp-preventer.png)

<br>

**Drill**

Represents the drill bit responsible for boring into the ground.

![image](/images/solutions/scada-drilling-system/hp-drill.png)

<br>

**Drawwork**

Controls the hoisting and lowering of the drill string.

![image](/images/solutions/scada-drilling-system/hp-drawwork.png)

<br>

**Drilling mud pump**

Controls the circulation of the drilling fluid.

![image](/images/solutions/scada-drilling-system/drilling-mud-pump.png)

## Conclusion

The implementation of SCADA and the ThingsBoard platform in drilling significantly enhances operational efficiency and safety. Through a comprehensive monitoring system, operators can track all key drilling process parameters, respond to changes promptly, and minimize risks of equipment failure. The integration of sensors, communication protocols, and powerful analytical tools enables the creation of smart drilling rigs, ensuring maximum productivity and resilience against potential disruptions.