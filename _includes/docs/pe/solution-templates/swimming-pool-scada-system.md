* TOC
{:toc}

{% include templates/solution-templates.md %}

The Swimming Pool SCADA template provides a comprehensive monitoring and control solution specifically designed for swimming pool operations.
With this template, you get a feature-rich dashboard, offering real-time device management, intuitive alarm configuration, and the flexibility to monitor and control your system from any device.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have provided a comprehensive Swimming Pool SCADA system dashboard that allows you to visualize, interact with, and control real-time data from multiple devices. The dashboard is designed to display critical information for water management, temperature control, and equipment performance. 
It also enables operators to interact with various system components for real-time control and monitoring.

* **Interactive States**: The dashboard provides an interactive interface where you can click on individual devices to navigate to different states and view detailed metrics. 

* **Flexible Layouts for Multi-Device Access**: The dashboard’s flexible layout allows you to manage your system seamlessly from various devices, including desktops, tablets, and smartphones. This flexibility ensures you can monitor and control your swimming pool system from anywhere, at any time.

* **Water Quality Management**: Displays water level data and monitors pH levels to ensure optimal pool conditions. This helps maintain water quality and prevent imbalances.

* **Temperature Control**: Utilizes data from both outdoor and pool temperature sensors to intelligently manage heat pumps. The system ensures that the water temperature is maintained efficiently according to predefined targets.

* **Equipment Monitoring**: Tracks the performance of pumps, sand filters, and other critical equipment. The dashboard provides insights into rotation speed, vibration, flow rates, power consumption, and more to monitor operational efficiency.

* **Valve Control**: Remotely manages water flow across different segments of the system by controlling valves. This adds flexibility to the system and enables quick adjustments to water flow as needed. You can interact with the valves directly through the dashboard to turn them on or off as necessary.

* **Energy Management**:  Monitors energy usage for devices such as heat pump and filtration systems. By tracking power consumption, operators can optimize energy usage and reduce operational costs.

* **Remote System Management**: Enables operators to remotely control devices, such as turning pumps on/off, switching between operational modes, and controlling valves, which improves response times and operational convenience.

For further customization of the Swimming Pool SCADA system dashboard refer to the [dashboard](/docs/{{docsPrefix}}user-guide/dashboards/) development guide.

For real-time monitoring of device data received from Modbus servers, you can access the **ThingsBoard IoT Gateways** dashboard to view the status and data of connected devices.

{% include images-gallery.html imageCollection="solution-dashboard" %}

### Devices

The Swimming Pool SCADA system integrates 15 devices, including a gateway and 14 operational devices, essential for monitoring and controlling various components of the pool system.

* **Gateway**: The system includes one gateway that integrates devices using an emulator. This emulator generates and sends data to all devices, allowing for seamless device communication and data transfer within the SCADA system.

The 14 additional devices include:

* **Heat pump**: The heat pump controls the pool temperature and operates automatically based on predefined temperature settings. This behavior is managed within the Swimming Pool Device Rule Chain to ensure efficient energy usage and precise temperature regulation. Depending on the temperature readings, the heat pump will automatically:
  * turn off if the pool temperature exceeds the target set on the heat pump, or if the outdoor temperature is above the defined threshold.
  * turn on if both the pool temperature and outdoor temperature fall below their respective target values.
* **Water pump**: Manage the circulation of water throughout the pool.
* **pH filter**: Ensure the water pH levels are within optimal ranges by managing the filtration and chemical treatment process.
* **Sand filter**: Allow for efficient debris removal from the pool. The filter supports multiple functions, including filtration, wasting, backwashing, recirculation and rinsing, all of which can be controlled remotely via the SCADA system.
* **Water level meter**: Measure the water level in the pool, providing critical data to maintain optimal water levels and detect potential leaks.
* **Valves**: Allow for precise control of water flow between different sections of the pool system.

{% include images-gallery.html imageCollection="solution-devices" %}

### Alarms 

The Swimming Pool SCADA system includes alarm configurations for key devices, allowing operators to monitor critical conditions and respond swiftly to potential issues. Alarms are triggered based on predefined thresholds and rules defined in [device profiles](/docs/{{docsPrefix}}user-guide/device-profiles/), helping to maintain the optimal performance of the system.

**Device-Specific Alarms**

**Heat pump**: The heat pump has five alarm rules based on the following metrics:

* Vibration levels
* Power consumption
* Rotation speed
* Refrigerant pressure
* Compressor temperature

**Water pump**: The water pump is monitored by four alarm rules based on:

* Vibration levels
* Power consumption
* Rotation speed
* Temperature

**Sand filter**: The sand filter is equipped with three alarm rules that track:

* Vibration levels
* Rotation speed
* Pressure

{% include images-gallery.html imageCollection="solution-alarms" %}

### Assets

The Swimming Pool SCADA system includes a single asset named **Swimming Pool SCADA system**. This asset serves as the central hub for propagating data from all connected devices. 
The data collected by the asset is later used to monitor and control various components of the system. Additionally, a script within the rule engine processes this data to calculate the statuses of each pipe, indicating whether water is flowing or not, which is then displayed on the dashboard for real-time monitoring.

### Rule Chains

The **Swimming Pool Device Rule Chain** is the main mechanism in the Swimming Pool SCADA system, responsible for processing incoming telemetry data, managing device interactions, and triggering automated responses. It enables efficient data flow between devices and the dashboard, ensuring real-time monitoring and control.

**Rule Chain Workflow**

* **Data Processing**: Processes incoming telemetry data, filtering it based on device profiles. Each device, such as heat pumps, water pumps, and sand filters, has a unique profile that governs how its data is handled.

* **RPC Requests**: Manages RPC to send commands to devices. These requests are triggered by changes in the system state, ensuring seamless operation of connected devices.

* **Automation**: Contains the logic that automatically turns the heat pump on or off based on temperature measurements.

* **Data Storage and Propagation**: Saves key attributes and time series data for each device, allowing the system to retain information for real-time analysis and historical reporting. This is critical for devices such as heat pumps and water pumps, where data like vibration, power consumption, and flow rates are continuously monitored.

* **Status Calculations**: For devices like sand filters, valves, and water meters, the rule chain computes specific attributes, such as determining whether water is flowing through pipes. These calculations are critical for monitoring the system’s real-time status, and the data is saved and displayed on the dashboard.

The **Swimming Pool Device Rule Chain** is designed to be flexible, allowing further customization to integrate additional devices, logic flows, and automated responses that suit the pool system's operational requirements.
