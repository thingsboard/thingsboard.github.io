* TOC
{:toc}

{% include templates/solution-templates.md %}

Fuel Level Monitoring integrates advanced technology to provide real-time insights into fuel levels, enabling efficient management and informed decision-making to optimise maintenance schedules and reduce operational costs. 
The intuitive dashboard facilitates seamless monitoring of fuel levels, customisation of alerts for fuel thresholds, and detailed tracking of fuel consumption patterns.

<br>
{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have created the dashboard. This dashboard contains 2 states that are specialised for monitoring fuel levels in tanks, observing consumption statistics, managing devices.

Main State:
 - provides location and status of tanks through colored markers that could be filtered upon specific statuses by switchers, each color representing a different status like normal, low battery, alarm conditions, etc;
 - displays a list of all tanks, allowing users to edit, delete, or add new tanks, and providing essential data such as remaining fuel percentage, temperature, battery, and connection status. Here, users can select different tanks and switch between various units of measurement to tailor the view to their specific needs;
 - monitor lists all alarms related to fuel level, temperature, and battery level, and allows users to set conditions under which alarms will be triggered;

Tank State:
 - shows the remaining fuel in a specific tank.
 - displays extensive tank details and allows editing of main fields and tank location.
 - provides a list displaying consumption, remaining fuel, and fuel replenishment along with timestamps.
 - offers a graphical representation of the tank’s remaining fuel and consumption over time.
 - shows a list of alarms for a specific tank.

The incorporation of tanks and units selection further personalises the user interface, enabling more precise monitoring and management, while the streamlined interface ensures swift navigation and enhanced user experience, catering to various monitoring and management needs related to fuel level in tanks.

### Devices

We have already created nine sensors and loaded some demo data for them. The solution expects that the sensor device will upload temperature, fuel and battery level. The most simple example of the expected payload is in JSON format:

```text
{"battery": 77, "fuelLevel": 91, "fuelHeight": 125, "temperature": 32 }
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Level measurement representation

Our dashboard can calculate the volume of the presented tank shapes based on the “filling height” or “remaining space”.

 - Filling Height:
The dashboard calculates the volume of different tank shapes based on “filling height”, allowing for adaptable and precise level measurement representation.

 - Remaining Space:
Similarly, the volume can also be calculated considering the “remaining space” in the tank, factoring in additional components like the “Sensor gap”, which represents parts of the tank not included in the height calculation. This approach ensures more flexible and detailed tank volume calculation, particularly when specific parts of the tank, such as the neck, are not to be included in the volume calculation.

You can find more detailed information about calculating the volume of the presented tank shapes based on the “filling height” or “remaining space” in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).

### Alarms

Alarms are generated using four [Alarm rules](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules) in the “Tank Sensor” [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/). User may configure the alarm rules via the "Fuel Level Monitoring" dashboard using “Alarm rules” form.