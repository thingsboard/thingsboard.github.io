
* TOC 
{:toc}

{% include templates/solution-templates.md %}

Fleet Tracking template refers to the bus tracking solution.
With this template you get an interactive dashboard with real-time vehicles’ tracking
as well as route details, status of the asset on the route, etc.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we created a "Fleet Tracking" dashboard that displays data from multiple buses. This dashboard contains 2 states - **Main state** and **Bus state**.

You may use the **Main state** to:
- observe the location of the buses on the interactive map in real-time;
- control the buses status, speed and fuel level;
- monitor bus tracking events (alarms).

<br>
In order to go to **Bus state**, click on the row of the desired sensor in the Buses section.

<br>
You may use the **Bus state** to:
- view a specific bus history of the route in the form of a route record with the possibility of playing it;
- see the current bus route;
- monitor speed, fuel level, and status in real-time. Also, the ability to view bus speed statistics;
- respond to events that have arisen using the alert system.

Also, for the convenience of viewing information, the user can switch from day to night mode and vice versa.

You may always customize the "Fleet Tracking" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).


### Devices

We have already created four bus tracking devices and loaded some demo data for them. 
See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created devices and their credentials.

Solution expects that the bus tracking device will upload "latitude", "longitude", "speed", "fuel" and "status" values.
The most simple example of the expected payload is in JSON format:

```json
{"latitude":  37.764702, "longitude":  -122.476071, "speed":  50, "fuel":  5, "status": "On route"}
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms

Alarms are generated using two Alarm rules in the "bus" [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/).
