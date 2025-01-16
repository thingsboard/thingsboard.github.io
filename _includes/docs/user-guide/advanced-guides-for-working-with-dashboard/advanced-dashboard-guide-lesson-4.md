* TOC
{:toc}

In the previous lesson, we added two customers and configured shared access for them to the dashboard.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/" class="n-button add-device">Lesson 3: Adding and configuring individual states for each device</a></p>

<br>

**An alarm** is a notification generated when a predefined condition or rule is met. Alarms are associated with entities such as devices, assets, customers, and others.

Alarms in ThingsBoard are a powerful mechanism to monitor and react to critical events and conditions occurring in your IoT ecosystem. 
An alarm represents a significant state or condition that requires attention, such as a device malfunction, a breach of predefined thresholds, or unexpected behavior in your system. 
Understanding and effectively utilizing alarms is key to maintaining the health, performance, and security of your IoT infrastructure.

**Core Concepts of Alarms in ThingsBoard:**

- **Severity Levels**: Alarms are categorized by severity levels, which include Critical, Major, Minor, Warning, and Indeterminate. This categorization helps prioritize responses.

- **Lifecycle States**: Each alarm has a lifecycle consisting of states such as Active, Cleared, and Acknowledged. The state transitions allow effective tracking and resolution.

- **Rule-Based Triggers**: Alarms are triggered by rules defined in device profiles or rule chains. These rules evaluate incoming telemetry data, attribute changes, or other events.

- **Visualization and Management**: ThingsBoard provides a centralized interface to view, filter, and manage alarms. This includes tools for real-time monitoring and historical analysis.

By implementing alarms, you can automate responses to predefined conditions, improve operational efficiency, and ensure system reliability.

In this lesson, we will configure alarm rules for our devices, and the widget for managing alarm signals will be added to each state.

Let's start.

## Creating alarm rules

**Defining Alarm Rules in Device Profiles**

To configure alarms in ThingsBoard, you need to define rules within device profiles. These rules specify the conditions under which alarms should be generated. Follow these steps to set up alarm rules:

### Rules for devices that use the "air-sensor" device profile

Devices using the device profile “air-sensor” transmit telemetry readings such as temperature, humidity, and CO2 levels. Below is an example of defining individual alarm creation rules for the "temperature" telemetry key.

**High temperature alarm rule**

We will set two conditions for creating a high temperature alarm for the "temperature" key, and one condition for clear alarm: 
- An alarm with the type "Major" will be created if the temperature exceeds 24 but does not go above 26 (inclusive).
- If the temperature exceeds 26, an alarm with the type "Critical" will be created. 
- When the temperature drops below 24 degrees, the alarm will be cleared.

Let's start with adding the alarm rule condition with "Major" severity type:

- Go to the "Device profile" page and click on the "air-sensor" device profile to open its details;
- Navigate to the "Alarm rules" tab;
- Enter editing mode by clicking the big orange pencil button, and click the "Add alarm rule" button;
- Input the "High temperature alarm" as alarm type;
- Check the "Propagate alarm to related entities" option in the advanced settings to propagate the alarm to all related entities.
- Select "Major" severity, and click on the red "+" sign;
- Set the Key Filter:
  - In the opened window, click the "Add key filter" button;
  - Specify the time series key to monitoring: 
    - Select the "Time series" as key type;
    - Input the "temperature" as the key name; 
    - Change "Value type" to "Numeric";
    - Click the "Add" button in the "Filters" section to add first filter;
    - Set the threshold:
      - Select the "greater than" operation from drop-down menu;
      - Input `24` as the threshold value; 
      - Click "Add" again to add another filter:
      - Select the "less or equal" operation from drop-down menu; 
      - Input `26` as the threshold value;
      - Click "Add" to confirm adding the key filter;
- Click the "Save" button to apply the alarm condition.

Now, when the temperature value is between `24` and `26` (inclusive), an alarm with the type "Major" will be created.

{% include images-gallery.html imageCollection="major-high-temperature-alarm-rule" %}

<br>
Add one more alarm rule condition with "Critical" type:

- Click the "Add create condition" button;
- Select "Critical" severity, and click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "greater than" operation from drop-down menu, and input `32` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition.

An alarm with the type "Critical" will be created if the temperature exceeds `32` degrees.

{% include images-gallery.html imageCollection="critical-high-temperature-alarm-rule" %}

<br>
Finally, add the condition to clear the rule:

- Click the "Add clear condition" button;
- Click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "less or equal" operation from drop-down menu, and input `30` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition;
- Finally, apply changes.

The alarm will be automatically cleared when the temperature drops below `30` degrees.

{% include images-gallery.html imageCollection="high-temperature-clear-alarm-rule" %}

<br>
Finally, the high temperature alarm rules will look like this:

{% include images-gallery.html imageCollection="final-high-temperature-alarm-rules" %}

<br>






By effectively configuring alarm rules in device profiles, you can proactively monitor device performance and ensure timely responses to critical conditions.


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

We will configure ThingsBoard to automatically create alarm signals when the readings from our sensors exceed certain thresholds. Alarm rules are set in the device profile. 
Let's consider the following scenarios:

*Low temperature alarm rule*

Similarly, add a rule for the creation and clearing of low temperature alerts: If the temperature falls below `20` but is not below `18` (inclusive), the alarm with the type "Major" will be created. 
If the temperature drops below `18`, an alarm with the type "Critical" will be created. 
When the temperature rises above `20` degrees again, the alarm will be cleared.

{% include images-gallery.html imageCollection="final-low-temperature-alarm-rules" %}

<br>

Add the rules for the creation and clearing of alerts for low and high humidity, as well as exceeding CO2 levels, on your own using previous experience.

For "humidity" readings, we will set the following rules:

*High humidity alarm rule*

The alarm with the type "Major" will be created if the humidity exceeds `45` but does not rise above `55` (inclusive). 
If the humidity exceeds `55`, an alarm with the type "Critical" will be created. When the humidity drops below `55`, the alarm will be cleared.

{% include images-gallery.html imageCollection="final-high-humidity-alarm-rules" %}

*Low humidity alarm rule*

If the humidity falls below `30` but is not below `28` (inclusive), the alarm with the type "Major" will be created.
If the humidity drops below `28`, an alarm with the type "Critical" will be created.
When the humidity rises above `30` degrees again, the alarm will be cleared.

{% include images-gallery.html imageCollection="final-low-humidity-alarm-rules" %}

<br>
For "CO2" readings, we will set the High CO2 alarm rule:

If the CO2 level is equal to or exceeds `450` ppm, a "Major" alarm will be created. 
If the CO2 level exceeds `550` ppm, a "Critical" alarm will be generated. When the CO2 level drops below `450` ppm, the alarm will be cleared.

{% include images-gallery.html imageCollection="final-co2-alarm-rules" %}

### "energy-sensor" device profile

The device that uses the "energy-sensor" device profile transmits telemetry data on power consumption. Let's define a rule for generating an alarm.

Set the following conditions for creating an alarm when power consumption exceeds the threshold:

1. Major alarm: If energy consumption exceeds 2 kWh but does not exceed 3 kWh (inclusive), a "Major" alarm will be created.

2. Critical alarm: If energy consumption exceeds 3 kWh, a "Critical" alarm will be triggered.

3. Alarm clearance: When energy consumption drops below 2 kWh, the alarm will be cleared automatically.

Let's start with adding the alarm rule condition with "Major" type:

- Open the "Device profiles" page, click on the "energy-sensor" device profile to open its details;
- Enter editing mode by clicking the big orange pencil button;
- Click the "Add alarm rule" button;
- Input the "Power consumption alarm" as alarm type;
- Select "Major" severity, and click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "powerConsumption" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "greater than" operation from drop-down menu, and input `2` as the threshold value. Click "Add" again to add another rule;
- Select the "less or equal" operation from drop-down menu, and input `3` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition.

Now, when the power consumption value is between `2` and `3` kWh (inclusive), an alarm with the type "Major" will be created.

{% include images-gallery.html imageCollection="major-power-consumption-alarm-rule" %}

<br>
Add one more alarm rule condition with "Critical" type:

- Click the "Add create condition" button;
- Select "Critical" severity, and click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "powerConsumption" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "greater than" operation from drop-down menu, and input `3` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition.

An alarm with the type "Critical" will be created if the power consumption exceeds `3` kWh.

{% include images-gallery.html imageCollection="critical-power-consumption-alarm-rule" %}

<br>
Finally, add the condition to clear the rule:

- Click the "Add clear condition" button;
- Click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "powerConsumption" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "less or equal" operation from drop-down menu, and input `2` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition;
- Finally, apply changes.

The alarm will be automatically cleared when the power consumption drops below `2` kWh.

{% include images-gallery.html imageCollection="clear-power-consumption-alarm-rule" %}

Finally, the power consumption alarm rules will look like this:

{% include images-gallery.html imageCollection="final-power-consumption-alarm-rule" %}

### "water-sensor" device profile

A device that uses the "water-sensor" device profile sends telemetry data on water consumption. 
Let's set up a rule to generate alarms when certain water consumption thresholds are reached.

Alarm conditions:

1. Major alarm: Triggered when water consumption exceeds 2 gallons per hour but stays at or below 3 gallons per hour.

2. Critical alarm: Triggered when water consumption exceeds 3 gallons per hour.

3. Alarm clearance: The alarm will clear automatically when water consumption drops below 2 gallons per hour.

Let's start with adding the alarm rule condition with "Major" type:

- Open the "Device profiles" page, and click on the "water-sensor" device profile to open its details;
- Click the orange pencil icon to edit the profile;
- Click the "Add alarm rule" button;
- Input the "Water consumption alarm" as alarm type;
- Select "Major" severity;
- Click the red "+" icon;
- In the opened window, click the "Add key filter" button;
- Set the "Key type" to "Time series" and select "waterConsumption" as the key name. Change the "Value type" to "Numeric";
- Click the "Add" button in the "Filters" section. Add a filter for values `greater than 2` and another for values `less or equal to 3`. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the "Major" alarm condition.

Now, when the water consumption is between `2` and `3` (inclusive) gallons, an alarm with the type "Major" will be created.

{% include images-gallery.html imageCollection="major-water-consumption-alarm-rule" %}

<br>
Add one more alarm rule condition with "Critical" type:

- Click the "Add create condition" button;
- Select "Critical" severity, and click on the red "+" sign;
- Add a key filter for "waterConsumption" with a value `greater than 3`.
- Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the "Critical" alarm condition.

An alarm with the type "Critical" will be created if the water consumption exceeds 3 gallons per hour.

{% include images-gallery.html imageCollection="critical-water-consumption-alarm-rule" %}

<br>
Finally, add the condition to clear the rule:

- Click the "Add clear condition" button;
- Click on the red "+" sign;
- Add a key filter for "waterConsumption" with a value `less or equal to 2`;
- Click the "Save" button to apply the alarm condition;
- Finally, apply changes.

The alarm will be automatically cleared when the water consumption drops below 2 gallons per hour.

{% include images-gallery.html imageCollection="clear-water-consumption-alarm-rule" %}

Finally, the water consumption alarm rule will look like this:

{% include images-gallery.html imageCollection="final-water-consumption-alarm-rule" %}

## Adding alarms table widget

Displaying alarms in a user-friendly manner is crucial for monitoring and management. 
The Alarm Table widget in ThingsBoard provides a customizable interface to view and interact with alarms.

Steps to Add an Alarm Table Widget:

{% include images-gallery.html imageCollection="adding-alarms-table-widget-1" showListImageTitles="true" %}

*Send telemetry*

{% include images-gallery.html imageCollection="alarm-send-telemetry-1" showListImageTitles="true" %}

*Clear alarm*

To clear the alarm, click on the "Clear" icon in the "Alarms" widget.

{% include images-gallery.html imageCollection="clear-alarm-1" showListImageTitles="true" %}


## Next step

At this stage, the development of our dashboard is complete. In the next lesson, we will share this dashboard with customers.
When you are ready to proceed, simply click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-5/" class="n-button add-device">Lesson 5: Share dashboard with customer</a></p>