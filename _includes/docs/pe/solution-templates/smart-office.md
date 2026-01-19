
* TOC 
{:toc}

{% include templates/solution-templates.md %}

The **Smart office** solution template delivers a ready-to-use facility management application that enables real-time monitoring, resource tracking, and remote control of building assets.

With a single installation action, the template deploys a complete digital representation of a modern office, including sensors, meters, HVAC control, dashboards, alarms, and device profiles. No custom rule chains, widgets, or backend configuration are required.

The solution is suitable for proof-of-concept demonstrations as well as scalable production deployments across single or multiple facilities.

{% include images-gallery.html imageCollection="solution-highlights" %}

## Key application areas

The **Smart office** solution template can be used as a foundation for:
- **Productive offices**. Maintaining optimal indoor climate and air quality to improve employee comfort and performance. 
- **Sustainability and cost reduction**. Monitoring energy and water consumption to identify inefficiencies, leaks, and waste. 
- **Multi-site facility management**. Scaling monitoring and control across multiple buildings, warehouses, or commercial properties using a unified dashboard.

## Install solution template

To understand how the Smart office solution works, start by installing the solution template.

You will need access to ThingsBoard Professional Edition. The easiest way is to use the [ThingsBoard Cloud](/installations/choose-region/){:target="_blank"}. Alternatively, you can install ThingsBoard using the [Professional Edition installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

- Go to the **Solution templates** page.
- Find **Smart office** and click **Install**.
- Follow the provided configuration instructions.
- Once the installation is complete, click **Close**.
- The **Smart office** dashboard opens automatically.

After installation, a fully functional simulation for managing office facilities is created automatically. No devices, integrations, or custom code are required to start exploring the solution.

{% include images-gallery.html imageCollection="install-solution-template" %}

## System components

Smart office template includes:
- **Dashboard**. The Smart Office dashboard provides interactive visualization of environmental and consumption data, floor-plan–based device representation, centralized alarm monitoring, and direct HVAC control from the user interface.
- **Devices**. The solution includes pre-provisioned smart sensors, HVAC devices, energy meters, and water meters that are already connected and populated with demo data.
- **Assets**. An Office asset is created to represent the facility structure, with all devices logically associated to reflect real-world relationships.
- **Device Profiles and Logic**. Dedicated device profiles are provided for smart-sensor, hvac, energy-meter, and water-meter devices, including built-in logic and preconfigured alarm rules for environmental monitoring.

**Edge Support**. The solution can optionally be deployed to [ThingsBoard Edge](/docs/edge/){:target="_blank"} for local data processing and control.

## Dashboard

The Smart Office dashboard acts as a centralized command center for facility monitoring and control.

Using the dashboard, you can:
- Observe office devices and their locations
- Browse historical temperature, energy, and water consumption data
- Monitor temperature alarms
- Control HVAC systems remotely (requires connected device)
- View and manage device-specific details

<b><font size="3">Dashboard states</font></b>

The dashboard consists of multiple states:
- **Main state**. Displays the list of devices and their locations on the office map or floor plan.
- **Device Details state**. Opens when a device is selected.   
  The layout and controls depend on the selected device type (sensor, HVAC, meter).

The dashboard can be customized using the ThingsBoard [dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} development tools.

{% include images-gallery.html imageCollection="navigation-between-dashboard-states" %}

## Devices

The **Office** asset and four related devices are created automatically with demonstration data for these devices:
- **Smart sensor** (owned by **Tenant**)
- **HVAC** (owned by **Tenant**)
- **Energy meter** (owned by **Tenant**)
- **Water meter** (owned by **Tenant**)

<b><font size="3">Telemetry format and testing</font></b>

Each device type expects specific telemetry keys. The examples below use the HTTP API. Other connectivity options are also supported.

**Energy meter**

Payload example:
```json
{"voltage":  220, "frequency":  60, "amperage": 16, "power": 3000, "energy": 300 }
```
{: .copy-code}

**Water meter**

Payload example:
```json
{"water": 2.3, "voltage": 3.9 }
```
{: .copy-code}

**Smart sensor**

Payload example:
```json
{"co2": 500, "tvoc": 0.3, "temperature": 22.5, "humidity": 50, "occupancy": true}
```
{: .copy-code}

**HVAC**

Payload example:
```json
{"airFlow": 300, "targetTemperature": 21.5, "enabled": true}
```
{: .copy-code}

**HVAC control**

The HVAC device also accepts RPC commands from the dashboard to:
- enable or disable the system
- change the target temperature

RPC communication is handled via the ThingsBoard [RPC API](/docs/{{docsPrefix}}user-guide/rpc/){:target="_blank"}..

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#view-instructions){:target="_blank"}..
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/){:target="_blank"}. for various connectivity options to connect real devices.

## Alarms

Alarm generation is handled by [alarm rules](/docs/{{docsPrefix}}user-guide/alarm-rules/){:target="_blank"} configured in the **smart-sensor** [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}.

{% include images-gallery.html imageCollection="alarms-1" %}

Alarms are displayed in a centralized alarm widget on the dashboard, allowing operators to quickly detect and respond to abnormal conditions.

{% include images-gallery.html imageCollection="alarms-2" %}

## Conclusion

The Smart office solution template provides a ready-to-use foundation for facility monitoring and control, combining environmental sensing, resource metering, alarms, and HVAC management in a single solution. 
It enables rapid deployment, clear operational visibility, and easy extension for real-world office and facility management scenarios.