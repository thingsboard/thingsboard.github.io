* TOC
{:toc}

In the previous lesson, we added two customers and configured shared access for them to the dashboard.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-4/" class="n-button add-device">Lesson 4. Share dashboard with customers</a></p>

<br>

ThingsBoard allows you to create and manage alarm signals for various entities such as devices, assets, clients, and others. These alarms help respond quickly to issues, prevent potential failures, and maintain efficient system operation.

In this lesson, we will learn how to configure alert rules, add the "Alarms table" widget, and manage alarm signals.

Let's start.

## Creating alarm rules

We will configure ThingsBoard to automatically create alarm signals when the readings from our sensors exceed certain thresholds. Alarm rules are set in the device profile. 
Let's consider the following scenarios:

### "smart-device" device profile

Devices using the device profile "smart-device" transmit telemetry readings such as temperature, humidity, and CO2 levels. 
Let's define individual alarm creation rules for each telemetry key. 

*High temperature alarm rule*

We will set three conditions for creating a high temperature alarm for the "temperature" key: An alarm with the type "Major" will be created if the temperature exceeds 30 but does not go above 32 (inclusive). If the temperature exceeds 32, an alarm with the type "Critical" will be created. When the temperature drops below 30 degrees, the alarm will be cleared.

Let's start with adding the alarm rule condition with "Major" type:

- Open the "Device profiles" page, click on the "smart-sensor" device profile to open its details;
- Enter editing mode by clicking the big orange pencil button;
- Click the "Add alarm rule" button;
- Input the "High temperature alarm" as alarm type;
- Select "Major" severity, and click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "greater than" operation from drop-down menu, and input `30` as the threshold value. Click "Add" again to add another rule;
- Select the "less or equal" operation from drop-down menu, and input `32` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition.

Now, when the temperature value is between `30` and `32` (inclusive), an alarm with the type "Major" will be created.

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
- Input the "High temperature alarm" as alarm type;
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
