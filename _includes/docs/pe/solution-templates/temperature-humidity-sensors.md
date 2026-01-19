
* TOC 
{:toc}

{% include templates/solution-templates.md %}

The **Temperature & Humidity sensors** solution template provides a ready-to-use monitoring system for tracking environmental conditions. With a single installation action, the template deploys a fully functional solution that includes dashboards, devices, alarms, users, and access control.

This template allows you to evaluate and demonstrate the solution from an End User perspective immediately, without configuring rule chains, dashboards, or device profiles manually.

The solution is suitable for proof-of-concept deployments as well as a foundation for production IoT applications such as smart buildings, offices, retail, and cold chain monitoring.

{% include images-gallery.html imageCollection="solution-highlights" %}

## Key application areas

This solution template can be used as a baseline for:
- **Smart Home**. Monitoring indoor climate conditions and automating HVAC systems.
- **Smart Office**. Improving comfort and productivity by maintaining optimal temperature and humidity levels.
- **Retail and Cold Chain**. Monitoring refrigerators and storage units to detect temperature violations and prevent product spoilage.

## Install solution template

To understand how the Temperature & Humidity sensors solution works, start by installing the solution template.

You will need access to ThingsBoard Professional Edition. The easiest way is to use the [ThingsBoard Cloud](/installations/choose-region/){:target="_blank"}. Alternatively, you can install ThingsBoard using the [Professional Edition installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

- Go to the **Solution templates** page.
- Find **Temperature & Humidity sensors** and click **Install**.
- Follow the provided configuration instructions.
- Once the installation is complete, click **Close**.
- The **Temperature & Humidity** dashboard opens automatically.

After installation, a fully functional simulation for monitoring environmental conditions is created automatically. No devices, integrations, or custom code are required to start exploring the solution.

{% include images-gallery.html imageCollection="install-solution-template" %}

## System components

Temperature & Humidity sensors template includes:
- **Dashboard**. The Temperature & Humidity dashboard provides real-time visualization of sensor telemetry, alarm management, sensor configuration, and an interactive map with device locations.
- **Devices**. The solution includes two pre-provisioned demo temperature sensor devices that are already connected and immediately provide demo telemetry data.
- **Device Profile and Logic**. A predefined Temperature Sensor device profile is included with built-in logic and preconfigured alarms for high temperature and low humidity conditions. 
- **Customers and Users**. The system contains one demo customer (Customer D) and two read-only customer users with predefined role-based access control.

**Edge Support.** The solution can optionally be deployed to [ThingsBoard Edge](/docs/edge/){:target="_blank"} for local data processing and reduced latency.

## Dashboard

The Temperature & Humidity dashboard displays telemetry data from multiple sensors and provides tools for alarm management and device configuration.

![image](/images/solutions/temperature-sensors/temperature-humidity-sensors-template-1.png)

Using the dashboard, you can:
- Add new sensors
- Place sensors on the map
- Configure alarm thresholds
- Browse historical telemetry data
- Manage sensor settings

<b><font size="3">Dashboard states</font></b>

The dashboard consists of two states:
- **Main state.** Displays a table of all sensors and their locations on the map.
- **Sensor Details state.** Opens when a sensor row is selected.   
  Allows viewing historical temperature and humidity data, editing sensor parameters, and changing location.

The dashboard can be fully customized using the ThingsBoard [dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} development tools.

## Devices

Two demo devices are created automatically: 
- **Sensor T1** (owned by **Tenant**) 
- **Sensor C1** (owned by **Customer D**)

The solution expects devices to publish telemetry data in JSON format using the following keys:

```json
{
  "temperature": 42,
  "humidity": 73
}
```
{: .copy-code}

[Other connectivity options](/docs/{{docsPrefix}}getting-started-guides/connectivity/){:target="_blank"} (MQTT, CoAP, LwM2M, etc.) are supported as well.

## Alarms

Alarm generation is handled by [alarm rules](/docs/{{docsPrefix}}user-guide/alarm-rules/){:target="_blank"} configured in the **Temperature Sensor** [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}.

| Entity Profile     | Alarm Type       | Severity |
| ------------------ | ---------------- | -------- |
| Temperature Sensor | High Temperature | Critical |
| Temperature Sensor | Low Humidity     | Major    |

Alarm thresholds and enable/disable state can be modified directly from the dashboard using the **Edit Sensor** action.

{% include images-gallery.html imageCollection="solution-alarms" %}

## Customers

To demonstrate multi-tenancy and data isolation, the solution creates a sample customer:
- Customer name: Customer D
- Assigned device: Sensor C1

**Customer users**

The following users are created and assigned to Customer D:
- Toni Collier (toni.collier@thingsboard.io)
- Sheri Addison (sheri.addison@thingsboard.io)

These users:
- Have read-only access to the dashboard
- Can only see devices owned by **Customer D**
- Do not have permissions to modify dashboards or tenant-level entities

Additional [Customers](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"} and [Users](/docs/{{docsPrefix}}user-guide/ui/users/){:target="_blank"} can be created via the administration UI. Device ownership can be reassigned to make sensors visible to specific customers.

## Conclusion

The Temperature & Humidity Sensors solution template delivers an out-of-the-box monitoring solution with real-time visualization, configurable alarms, and built-in access control. 
It enables fast onboarding and serves as a solid foundation for both demonstrations and production environmental monitoring use cases.