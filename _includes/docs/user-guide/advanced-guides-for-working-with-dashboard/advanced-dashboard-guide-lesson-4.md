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

## Adding alarm rules

First, you need to define the rules that will trigger the alarm. The simplest way to create the alarm rule is to configure it within the [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}. These rules specify the conditions under which reminders should be generated.

### Rules for devices that use the "air-sensor" device profile

Devices using the "air-sensor" device profile transmit telemetry data such as temperature, humidity, and CO2 levels. 
Let's configure alarm rules for each of these telemetry keys:

##### High temperature alarm rule

We will set two conditions for creating a high temperature alarm for the "**temperature**" key, and one condition for clear alarm: 
- An alarm with the severity type "**Major**" will be created if the temperature exceeds 24 °C but does not go above 26 °C (inclusive);
- If the temperature exceeds 26 °C, an alarm with the severity type "**Critical**" will be created; 
- When the temperature drops below 24 °C, the alarm will be **cleared**.

Let's start with adding the alarm rule condition with "**Major**" severity type:

- Go to the "Device profile" page and click on the "air-sensor" device profile to open its details;
- Navigate to the "Alarm rules" tab;
- Enter editing mode by clicking the big orange pencil button, and click the "Add alarm rule" button;
- Input the "High temperature alarm" as alarm type;
- Check the "Propagate alarm to related entities" option in the advanced settings to propagate the alarm to all related entities.
- Select "Major" severity, and click on the red "+" sign;

{% include images-gallery.html imageCollection="major-high-temperature-alarm-rule" %} 

- Add alarm rule condition:
  - Click the "Add key filter" button;
  - In the opened window, click the "Add key filter" button;
  - Set the following: 
    - Key type: "Time series";
    - Key name: "temperature";
    - Value type: "Numeric";
    - Click the "Add" button in the "Filters" section. Define conditions:
      - For the first condition, select the "greater than" operation from the drop-down menu and input `24` as the threshold value. Click "Add";
      - For the second condition, select the "less or equal" operation and input `26` as the threshold value. Click "Add" to confirm adding the key filter.
  - Click the "Save" button to apply the alarm condition.

Now, when the temperature value is between `24` °C  and `26` °C (inclusive), an alarm with the severity type "Major" will be created.

{% include images-gallery.html imageCollection="major-high-temperature-alarm-rule-2" %}

<br>
Add one more alarm rule condition with severity type "**Critical**":

- Click the "Add create condition" button;
- Select "Critical" severity, and click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "greater than" operation from drop-down menu, and input `26` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition.

An alarm with the type "Critical" will be created if the temperature exceeds `26` °C.

{% include images-gallery.html imageCollection="critical-high-temperature-alarm-rule" %}

<br>
Now, add the **condition to clear** the alarm:

- Click the "Add clear condition" button;
- Click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "less or equal" operation from drop-down menu, and input `24` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition;
- Finally, apply changes.

The alarm will be automatically cleared when the temperature drops below `24` °C.

{% include images-gallery.html imageCollection="high-temperature-clear-alarm-rule" %}

Finally, the configured rules for creating a high-temperature alarm and its clearing rule will look as follows:

{% include images-gallery.html imageCollection="final-high-temperature-alarm-rules" %}

<br><br>

**Now, drawing on your previous experience, you can independently configure the alarm rules for low temperature, high and low humidity, and high CO2 levels. Go ahead!**

##### Low temperature alarm rule

Set the following rules for creating and clearing a low air temperature alarm:

Alarm creation:

- If the temperature drops below `20` °C but not below `18` °C (inclusive), an alarm of the severity type "**Major**" will be created;
- If the temperature drops below `18` °C, an alarm of the severity type "**Critical**" will be created.

Alarm clearing:

- When the temperature rises above `20` °C, the alarm will be cleared.

{% include images-gallery.html imageCollection="final-low-temperature-alarm-rules" %}

<br>
**Rules for creating and clearing high and low humidity alarms**

For the telemetry key "humidity", we will define two conditions for triggering a high humidity alarm and one condition for clearing the alarm:

##### High humidity alarm rule

Alarm creation:

- An alarm with severity type "Major" will be created if humidity rises above `60` % but does not exceed 65% (inclusive).
- An alarm with severity type "Critical" will be created if humidity exceeds `65` %.

Alarm clearing:

- The alarm will clear when humidity drops below `60` %.

{% include images-gallery.html imageCollection="final-high-humidity-alarm-rules" %}

##### Low humidity alarm rule

Alarm creation:

- An alarm with severity type "Major" will be created if humidity drops below `40` % but does not fall below `35` % (inclusive).
- An alarm with severity type "Critical" will be created if humidity drops below `35` %.

Alarm clearing:

- The alarm will clear when humidity rises above `40` %.

{% include images-gallery.html imageCollection="final-low-humidity-alarm-rules" %}

##### High CO2 alarm rule

Finally, for the telemetry key "co2", we will define the following conditions for creating and clearing alarms:

Alarm Creation:

- If the CO2 level is equal to or exceeds `490` ppm  but does not exceed `500` ppm, the alarm with severity type "Major" will be created.
- If the CO2 level exceeds `500` ppm, the alarm with severity type "Critical" will be triggered.

Alarm Clearing:

- The alarm will be cleared when the CO2 level drops below `490` ppm.

{% include images-gallery.html imageCollection="final-co2-alarm-rules" %}

### Rules for devices that use the "energy-sensor" device profile

The "Energy Meter" device, which uses the "energy-sensor" device profile, transmits telemetry data on power consumption. Let's set up a rule for creating the alarm.

##### Power consumption alarm rule

Set two conditions for triggering the alarm about exceeding energy consumption and one condition for clearing it:

- An alarm with a severity type of "**Major**" will be triggered if water consumption exceeds `7` kWh but does not exceed `8` kWh (inclusive).
- If water consumption exceeds `8` kWh, an alarm with a severity type of "**Critical**" will be triggered.
- The alarm will be **cleared** when water consumption drops below `7` kWh.

Let's start with adding the alarm rule condition with "**Major**" severity type:

- Go to the "Device profiles" page and click on the "energy-sensor" profile to open its details;
- Switch to the "Alarm rules" tab;
- Click the big orange pencil button to enable editing mode;
- Click the "Add alarm rule" button;
- Enter "Power consumption alarm" as the alarm type;
- In the advanced settings, check the "Propagate alarm to related entities" option to propagate the alarm to all related entities.
- Select "Major" as the severity type and click the red "+" sign;

- Add alarm rule condition:
  - Click the "Add key filter" button;
  - Set the following:
    - Key type: "Time series";
    - Key name: "powerConsumption";
    - Value type: "Numeric";
    - Click the "Add" button in the "Filters" section. Define conditions:
      - For the first condition, select the "greater than" operation from the drop-down menu and input `7` as the threshold value. Click "Add".
      - For the second condition, select the "less or equal" operation and input `8` as the threshold value. Click "Add" to confirm adding the key filter.
  - Click the "Save" button to apply the alarm condition.

An alarm with the severity type "Major" will now be created when the power consumption value is between `7` kWh and `8` kWh (inclusive).

{% include images-gallery.html imageCollection="major-power-consumption-alarm-rule" %}

<br>
Add one more alarm rule condition with the "**Critical**" severity type:

- Click the "Add create condition" button in the alarm configuration panel;
- Select "Critical" as the severity type and click the red "+" sign;

- Add alarm rule condition:
  - Click the "Add key filter" button;
  - Set the following:
    - Key type: "Time series";
    - Key name: "powerConsumption";
    - Value type: "Numeric";
    - Click the "Add" button in the "Filters" section. Define the condition:
      - Select the "greater than" operation from the drop-down menu and input `8` as the threshold value. Click "Add" to confirm adding the key filter.
  - Click the "Save" button to apply the alarm condition.

An alarm with the severity type "Critical" will now be created if the power consumption exceeds `8` kWh.

{% include images-gallery.html imageCollection="critical-power-consumption-alarm-rule" %}

<br>
Add the **condition to clear** the "Power consumption alarm" alarm:

- Click the "Add clear condition" button in the alarm configuration panel;
- Click the red "+" sign to start defining the condition;
- Add alarm rule condition:
  - Click the "Add key filter" button;
  - Set the following:
    - Key type: "Time series";
    - Key name: "powerConsumption";
    - Value type: "Numeric";
    - Click the "Add" button in the "Filters" section. Define the condition:
      - Select the "less or equal" operation from the drop-down menu and input `7` as the threshold value. Click "Add" to confirm adding the key filter.
  - Click the "Save" button to apply the clear condition.
- Ensure all configurations are correct and save the overall changes to finalize the rule.

The alarm will automatically clear when the power consumption drops to `7` kWh or below.

{% include images-gallery.html imageCollection="clear-power-consumption-alarm-rule" %}

Finally, the power consumption alarm rules will look like this:

{% include images-gallery.html imageCollection="final-power-consumption-alarm-rule" %}

### Rules for devices that use the "water-sensor" device profile

The "Water Flow Meter" device using the "water-sensor" device profile send telemetry data on water consumption. 
Let's configure an alarm rule to trigger when specific water consumption thresholds are reached.

##### Water consumption alarm rule

Set two conditions for triggering the alarm about exceeding water consumption and one condition for clearing it:

- An alarm with a severity type of "**Major**" will be triggered if water consumption exceeds `4` gallons per hour but does not exceed `5` gallons per hour (inclusive).
- If water consumption exceeds `5` gallons per hour, an alarm with a severity type of "**Critical**" will be triggered.
- The alarm will be **cleared** when water consumption drops below `4` gallons per hour.

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

### Importing the pre-configured "air-sensor" device profile

If, for any reason, you were unable to configure the rules mentioned above, you can [download the air-sensor device profile with pre-configured alarm rules](/docs/user-guide/advanced-guides-for-working-with-dashboard/files-from-tutorial/air_sensor_imported_.json){:target="_blank"} and import it into your ThingsBoard instance.

{% capture difference %}
**Important!** If you choose to import the device profile, you will need to assign the new device profile "**air-sensor(imported)**" to all devices currently using the "**air-sensor**" device profile, specifically the **Indoor Air Quality Sensor** and **IAQ Sensor**.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

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