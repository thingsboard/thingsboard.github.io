* TOC
{:toc}

## Introduction

[SCADA](https://en.wikipedia.org/wiki/SCADA) (Supervisory Control and Data Acquisition) refers to an architecture used to monitor and control various machines and manufacturing processes. 
In this system, ThingsBoard serves as the supervisory computer element, gathering data from various PLCs (Programmable Logic Controllers) and RTUs (Remote Terminal Units), 
often with the assistance of the [IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/) software or physical gateway devices. 
Additionally, ThingsBoard offers robust [alarm](/docs/user-guide/alarms/) and [notification](/docs/user-guide/notifications/) systems, which are essential components of any IoT system.

Starting from release 3.7.1, ThingsBoard introduces support for SCADA-like HMI dashboards, which we will cover in this documentation.

## SCADA dashboard layout

A SCADA dashboard in ThingsBoard provides all the functionalities of a typical platform [Dashboard](/docs/user-guide/dashboards/) with a specialized SCADA [layout](/docs/user-guide/dashboards/#layouts), 
designed to facilitate the creation of SCADA HMIs (Human-Machine Interfaces).

The SCADA dashboard typically consists of special scalable widgets known as SCADA symbols. 
Each symbol can represent the state of a physical object such as a valve, pump, motor, tank, or pipe. 
Users can also interact with these widgets to send commands to the physical objects, such as turning a pump on or off, or opening or closing a valve. 
Additionally, you can combine SCADA widgets with over 500 existing ThingsBoard [widgets](/docs/user-guide/widgets/) on the same dashboard.

To begin building a SCADA dashboard, create a new dashboard and navigate to the Layouts panel. Then, simply change the layout from 'Default' to 'SCADA'.

*TODO: Add screenshots*

### Layout settings

Here are some key settings for the SCADA layout:

- **Number of columns**  
  The number of columns in the layout settings must be divisible by 24 (e.g., 24, 48, 72, up to 1008). 
  This value defines how your screen is divided into a widget placeholder matrix and determines the dashboard's granularity. 
  You can configure different layout settings for each layout breakpoint: xl, lg, md, sm, xs.

- **Margin**  
  In the SCADA layout, there is no margin between widgets. This intentional design ensures that pipes and other SCADA symbols always connect properly.

- **Widget appearance**  
  By default, regular widgets are placed with a transparent background and without a shadow, allowing them to blend seamlessly into the SCADA dashboard.

*TODO: Add screenshots*

### Multi-state dashboards

Experienced platform users know that a dashboard can contain multiple [states](/docs/user-guide/dashboards/#states).
A single dashboard can combine regular dashboard states with SCADA states. 
For instance, the main state might display a high-level overview of the SCADA system, while clicking on a particular element can open a regular dashboard state or a popup widget.

Below is a sample dashboard that does not display real data, but you can import it into your environment to explore how navigation between states is implemented:

*TODO: Prepare example of the dashboard and screenshots*

## SCADA symbol

ThingsBoard SCADA symbols are based on [SVG](https://en.wikipedia.org/wiki/SVG) (Scalable Vector Graphics) files. 
The use of vector graphics ensures that SCADA symbols scale seamlessly to any screen size. 
ThingsBoard's engineers have extended the SVG format to make these symbols interactive.
Specifically, we define how the SVG object changes based on the properties configured by the user or the data received from the device.
We also define clickable areas of the SVG object, allowing users to configure actions that can be triggered once the symbol is added to the dashboard. 

We currently provide 60+ SCADA symbols available out of the box, with plans to increase this number to 500+ in upcoming releases. 
If you need a symbol that is not available, you are encouraged to create your own using the following [guide](/docs/user-guide/scada/symbols-dev-guide/).

## SCADA symbol widget

The SCADA symbol widget is designed to place any SCADA symbol onto the dashboard. It acts as a bridge between the generic SCADA symbol and the dashboard.

The SCADA symbol widget contains five configuration blocks, which we will explain below using the 'Horizontal wheel valve' symbol as a reference:

##### Target entity

This points the widget to a single entity: device, asset, etc. 
It defines the entity that will be used to control the behavior of the symbol. 
You may omit the target entity parameter if interactive behavior is not required.
Experienced users may use [entity aliases](/docs/user-guide/ui/aliases/) that resolve to a single entity. 
This is particularly useful for advanced use cases, such as configuring the target entity to an asset instead of a device.

In our example, we will select the smart device that controls our valve. Typically, this device is connected via an IoT Gateway using a Modbus connector, but we will omit these details for simplicity in this guide.

*TODO: screen with the selected target device*

##### SCADA symbol

This points to a specific SCADA [symbol](#scada-symbol) from the [library](#scada-symbols-library). 
In our case, we have selected the 'Horizontal wheel valve' from the library. 
Ensure you have selected 'Include system symbols' if this symbol is not visible in the library.

*TODO: screen with the selected SCADA symbol device*

##### Behavior

The list of behavior parameters is specific to the chosen SCADA symbol and is entirely controlled by the symbol's author. 
There are three types of behavior parameters: value, action, and widget action.

- **Value** parameters usually control the visual representation of the symbol and may change over time. 
  In the case of our valve, we have one value parameter that identifies whether the valve is 'Opened' or 'Closed'. 
  The state of the valve may change dynamically, typically based on device attributes or time series data. 
  There are five possible actions the dashboard can perform to get the value:

  - 'Do nothing' will just take the constant defined by the user. *TODO: screen*
  - 'Execute RPC' will send a command to the target device to get the value. The value is resolved once during the creation of the widget. *TODO: screen*
  - 'Get attribute' will subscribe to the value of the target entity's attribute. The widget will receive updates when the attribute value changes. *TODO: screen*
  - 'Get time series' will subscribe to the value of the target entity's time series field. The widget will receive updates when new time series data arrives. *TODO: screen*
  - 'Get dashboard state' will use the name of the current dashboard state. This is useful in specific cases that are not related to the state of the target device. *TODO: screen*

- **Action** parameters define the actions performed against the target device when a specific event occurs. 
  For our valve, we have two actions: 'Open' and 'Close'. As a dashboard developer, you can define which actions should be performed when the user opens or closes the valve. 
  Since the action is performed against the target entity, the platform supports three types of actions:

  - 'Execute RPC' will send a command to the target device. You can define the method and parameters of the command. *TODO: screen*
  - 'Set attribute' will send a command to the target device. You can define the scope, key, and value of the attribute to set. *TODO: screen*
  - 'Add time series' will add a new time series value to the target device. You can define the key and value of the new time series data. *TODO: screen*

- **Widget Action** parameters define the actions triggered when the user clicks on the component. 
  In our example, the valve symbol does not have any widget action parameters, but you may explore other symbols like 'Left motor pump' for such actions. 
  Possible action types are documented [here](/docs/user-guide/ui/widget-actions/#action-types).

##### Appearance

There are common appearance parameters, such as symbol title and icon, available for any SCADA symbol. 
Other parameters are specific to the chosen SCADA symbol and are controlled by the symbol's author. 
In the case of our valve, you can define the color of the valve symbol in both the opened and closed states. 
You can also configure the animation of the wheel by setting the angle of rotation. 
There are several types of appearance parameters, which are intuitive for the end user. 
For more details, see the symbol development [guide](/docs/user-guide/scada/symbols-dev-guide/).

*TODO: screen*

##### Card Appearance

The card appearance settings are generic for any SCADA symbol and include background (transparent by default), list of enabled card buttons, card border radius, and padding parameters.

*TODO: screen*

## SCADA symbols library

TODO: Describe similar to [Image gallery](/docs/user-guide/image-gallery/). Highlight "Include system symbols", and ability to export symbol to JSON. The description of the SCADA symbol editor will be placed [here](/docs/user-guide/scada/symbols-dev-guide/).
