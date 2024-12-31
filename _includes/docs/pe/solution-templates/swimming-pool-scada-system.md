* TOC
{:toc}

{% include templates/solution-templates.md %}

SCADA systems are generally divided into two types: Traditional, which focuses on basic monitoring and control, and High-Performance, emphasizing streamlined interfaces, faster decision-making, and enhanced operational efficiency.

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

The **Swimming Pool Device Rule Chain** is the core of the Swimming Pool SCADA system, processing telemetry, managing devices, and triggering automated actions. Each message flows through structured nodes that handle telemetry, generate alarms, and control devices. This ensures smooth data flow, real-time monitoring, and timely responses for all connected devices. 
The data is then visualized on the dashboard, allowing users to interact with and control devices while monitoring system performance in real time.

**Message Processing Flow**

* **Alarm Generation**:
Every message first passes through the [**device profile node**](/docs/{{docsPrefix}}user-guide/device-profiles/#device-profile-rule-node). This step allows the system to generate alarms based on the conditions defined in the device profiles (such as for the heat pump, water pump, and sand filter). If the telemetry exceeds the set thresholds, alarms are triggered and displayed on the dashboard.

* **Message Type Switch**:
After the initial profile processing, the message moves to the [**message type switch node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#message-type-switch-node). This node routes messages based on their type, such as telemetry data, attribute updates, or RPC requests. It sends each message down the appropriate path for further processing.

* **General Logic – Save Attributes, Time Series, and RPC Requests**:
Independent of the message type, several actions occur for all devices.

  * [**save attributes node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node): The telemetry data from devices is saved as attributes.
  * [**save time series node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node): Time series data is saved for historical analysis and monitoring.
  * [**rpc call request node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node): The system can generate and send RPC requests to devices. These RPC commands may turn devices on/off, change operational modes, or control valve positions. For example, valves can be opened/closed, and pumps can be activated/deactivated based on predefined conditions or manual requests.
  
* **Activity/Inactivity Events**:
This part of the rule chain is responsible for monitoring the activity and inactivity of devices. The system catches these events, propagating the device states to the asset. This data is crucial for further calculations and to ensure real-time updates about which devices are active.

* **Device Profile Filtering**:
Once the telemetry data is saved, the message is routed through the [**device profile switch node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#device-profile-switch). This node filters the devices based on their profile, allowing for device-specific actions:

  * **Heat pump**: When telemetry from the heat pump is detected, the system checks specific conditions—like target temperature, outdoor temperature, and pool temperature—through a [**switch node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#switch-node). If the telemetry conditions meet the thresholds for turning the heat pump on or off, an RPC request is sent to control the heat pump’s state.

  * **Sand filter, Water pump, Water sensor, Valve**: For these devices, the message passes through a [**script node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node) that adds the device name to the necessary telemetry. This step ensures that the telemetry is properly propagated as attributes on the asset for further use.

* **Main Calculation Script for Flowing Pipes**:
Once the telemetry is processed for sand filters, water pumps, and valves, the data enters the main calculation script in the [**script node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node). This script is crucial for determining which pipe segments are currently flowing. The calculation determines whether water is flowing through specific pipes, based on device activity, and saves this value. The flow status is later displayed on the dashboard, allowing operators to see, in real-time, which pipes have water flowing through them.
