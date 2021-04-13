
* TOC 
{:toc}

{% include templates/solution-templates.md %}

Fleet Tracking template refers to the bus tracking solution.
With this template you get an interactive dashboard with real-time vehicles’ tracking
as well as route details, status of the asset on the route, etc.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have created the "Fleet Tracking" dashboard that displays data from multiple buses. You may use the dashboard to:

* observe location and status of the buses;
* monitor bus tracking events (alarms);
* browse individual bus route, speed and fuel level history;

The dashboard has two states. The main state displays the list of the buses, their location on the map as well as the list of their alarms.
You may browse bus location history popup by clicking on the "Route history" icon located on the right side of the bus table row.  
You may drill down to the bus details state by clicking on the table row. The bus details state allows to browse alarms, location, speed, and fuel level history.

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
