* TOC
{:toc}

We continue to develop our dashboard. In the previous lesson, we added and configured separate states for each device and configured them to display telemetry data. 
We recommend reviewing it if you haven't done so yet.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/" class="button">Lesson 3: Adding and configuring individual states for each device</a></p>

<br>

In this lesson, we will talk about alarms.

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

<br>
As you may recall, the **Indoor Air Quality Sensor** transmits telemetry values such as temperature, humidity, and CO2 levels to ThingsBoard.
In this lesson, we will configure alarm rules for the Indoor Air Quality Sensor and add a widget to manage the device&#39;s alarms. Let&#39;s start.

{% include default-carousel.liquid collectionMap = 'dashboard-lesson-4' nonActiveItemsVisibility = false %}

## Adding alarm rules

First, you need to define the rules that will trigger the alarm. The simplest way to create the alarm rule is to configure it within the [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}. These rules specify the conditions under which reminders should be generated.

### Rules for devices that use the air-sensor device profile

Devices using the **air-sensor** device profile transmit telemetry data such as temperature, humidity, and CO2 levels. 
Let&#39;s configure alarm rules for each of these telemetry keys:

#### High temperature alarm rule

We will set two conditions for creating a high temperature alarm for the "temperature" key, and one condition for clear alarm:

- An alarm with the severity type "Major" will be created if the temperature exceeds 24 °C but does not go above 26 °C (inclusive);
- If the temperature exceeds 26 °C, an alarm with the severity type "Critical" will be created; 
- When the temperature drops below 24 °C, the alarm will be cleared.

Let&#39;s start with adding the alarm rule condition with "Major" severity type:

- Go to the "Device profiles" page and click on the "air-sensor" device profile to open its details;
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
Add one more alarm rule condition with severity type "Critical":

- Click the "Add create condition" button;
- Select "Critical" severity, and click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "greater than" operation from drop-down menu, and input `26` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition.

An alarm with the type "Critical" will be created if the temperature exceeds `26` °C.

{% include images-gallery.html imageCollection="critical-high-temperature-alarm-rule" %}

<br>
Now, add the condition to clear the alarm:

- Click the "Add clear condition" button;
- Click on the red "+" sign;
- Click the "Add key filter" button;
- Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;
- Select the "less or equal" operation from drop-down menu, and input `24` as the threshold value. Click "Add" to confirm adding key filter;
- Click the "Save" button to apply the alarm condition;
- Finally, apply changes.

The alarm will be automatically cleared when the temperature drops below `24` °C.

{% include images-gallery.html imageCollection="high-temperature-clear-alarm-rule" %}

Finally, the configured rule for creating a high-temperature alarm and the condition for clearing it will look as follows:

{% include images-gallery.html imageCollection="final-high-temperature-alarm-rules" %}

<br>

**Now, drawing on your previous experience, you can independently configure the alarm rules for low temperature, high and low humidity, and high CO2 levels. Go ahead!**

#### Low temperature alarm rule

Set the following rules for creating and clearing a low air temperature alarm:

Alarm creation:

- If the temperature drops below `20` °C but not below `18` °C (inclusive), an alarm of the severity type "Major" will be created;
- If the temperature drops below `18` °C, an alarm of the severity type "Critical" will be created.

Alarm clearing:

- When the temperature rises above `20` °C, the alarm will be cleared.

{% include images-gallery.html imageCollection="final-low-temperature-alarm-rules" %}

<br>
**Rules for creating and clearing high and low humidity alarms**

For the telemetry key "humidity", we will define two conditions for triggering a high humidity alarm and one condition for clearing the alarm:

#### High humidity alarm rule

Alarm creation:

- An alarm with severity type "Major" will be created if humidity rises above `60` % but does not exceed `65` % (inclusive).
- An alarm with severity type "Critical" will be created if humidity exceeds `65` %.

Alarm clearing:

- The alarm will clear when humidity drops below `60` %.

{% include images-gallery.html imageCollection="final-high-humidity-alarm-rules" %}

#### Low humidity alarm rule

Alarm creation:

- An alarm with severity type "Major" will be created if humidity drops below `40` % but does not fall below `35` % (inclusive).
- An alarm with severity type "Critical" will be created if humidity drops below `35` %.

Alarm clearing:

- The alarm will clear when humidity rises above `40` %.

{% include images-gallery.html imageCollection="final-low-humidity-alarm-rules" %}

#### High CO2 alarm rule

Finally, for the telemetry key "co2", we will define the following conditions for creating and clearing alarms:

Alarm creation:

- If the CO2 level is equal to or exceeds `490` ppm  but does not exceed `500` ppm, the alarm with severity type "Major" will be created.
- If the CO2 level exceeds `500` ppm, the alarm with severity type "Critical" will be triggered.

Alarm clearing:

- The alarm will be cleared when the CO2 level drops below `490` ppm.

{% include images-gallery.html imageCollection="final-co2-alarm-rules" %}

<br>
Now that we have defined all the alarm rules for the **air-sensor** device profile, the next step is to add a widget to manage the alarms.

<br>

**Import device profile**

If, for any reason, you were unable to configure the rules mentioned above, you can [download the air-sensor device profile with pre-configured alarm rules](/docs/user-guide/advanced-guides-for-working-with-dashboard/files-from-tutorial/air_sensor_imported.json){:target="_blank"} and import it into your ThingsBoard instance.

{% capture difference %}
**Important!** If you choose to import the device profile, you will need to assign the new device profile **air-sensor(imported)** to all devices currently using the **air-sensor** device profile, specifically the **Indoor Air Quality Sensor** and **IAQ Sensor**.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Customizing rule chain

As you may recall, [we created a separate rule chain](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/#simulation-of-the-devices-telemetry-data){:target="_blank"} where telemetry for our devices is generated by generator nodes and directly stored in the database.
However, for the reminder rules configured in the device profiles to work, messages from the generator nodes must pass through the [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/#device-profile-rule-node){:target="_blank"} node before being stored in the database.
The device profile rule node processes all incoming messages and reacts to the telemetry values.   
Therefore, we need to add the device profile node in the [Device Telemetry Emulators rule chain](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/#simulation-of-the-devices-telemetry-data){:target="_blank"} before the "save timeseries" node.

- Go to the "Rule chains" page, and open the "Device Telemetry Emulators" rule chain;
- Remove all links from the "generator" nodes to the "save telemetry" node;
- Find the "device profile" node in the node library, and drag it into the rule chain canvas;
- Node configuration window will be opened. Name it "Device profile node", and click "Add";
- Link the "generator" nodes to the "device profile" node. Select the "Success" link for these connections;
- Connect the "device profile" node to the "save timeseries" node. Again, select the "Success" link;
- Afterwards, save rule chain.

{% include images-gallery.html imageCollection="customizing-rule-chain-1" %}

## Adding alarms table widget

Displaying alarms in a user-friendly format is essential for monitoring and managing them effectively. 
The "Alarms table" widget in ThingsBoard provides a customizable interface for easy monitoring and interaction with alarms.

Steps to add the "Alarm table" widget:

{% include images-gallery.html imageCollection="adding-alarms-table-widget-1" showListImageTitles="true" %}

A fully configured **air_sensor** state should look like this:

{% include images-gallery.html imageCollection="final-air-sensor-state-1" %}

<br>
Now that the alarm rules have been defined and the widget for displaying active alarms has been added, let&#39;s test its functionality by sending telemetry values that exceed the threshold specified in the alarm rule.

## Alarm trigger testing

To test the alarm triggering, it is not necessary to wait for the generator node to produce telemetry values exceeding the threshold. 
We can manually send telemetry with a value that exceeds the threshold specified in the alarm rule. 
As you may recall, if the temperature value exceeds 24°C, an alarm with a severity type of "Major" is triggered.

{% include images-gallery.html imageCollection="alarm-send-telemetry-1" showListImageTitles="true" %}

Return to the **air_sensor** dashboard state. In the "Alarms table" widget, an alarm should appear displaying the created time, originator of the alarm, its severity and its status.
When an alarm is triggered, it initially has the status "Active" and "Unacknowledged". A user can acknowledge the alarm, changing its status to "Acknowledged". However, it will remain active until it is resolved (cleared).

{% include images-gallery.html imageCollection="alarm-send-telemetry-2" %}

You will also receive a notification about the triggered alarm in the Notification center.
Learn more about notifications and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"}.

{% include images-gallery.html imageCollection="alarm-send-telemetry-3" %}

<br>

**Acknowledge alarm**

To acknowledge an alarm, click the "Acknowledge" icon next to the alarm event and confirm the action.

{% include images-gallery.html imageCollection="acknowledge-alarm-1" %}

**Clear alarm**

To clear an alarm, click the "Clear" icon next to the alarm event and confirm the action.

{% include images-gallery.html imageCollection="clear-alarm-1" %}

## Adding alarm widget to all other states

Next, we will add the alarm widget to each state of the dashboard to monitor alarms that appear on your device at any level of the dashboard.

### Adding alarm widget to office state

Add an alarm widget to the office state. This widget will display alarms from all devices associated with the selected office. We&#39;ll add this widget using the copy method.

{% include images-gallery.html imageCollection="add-alarm-widget-to-office-state-1" showListImageTitles="true" %}

After saving the changes, you will automatically be redirected to the **air_sensor** state. Switch to the **Office A** state to check the result. 

As you may notice, active alarms are not displayed in the widget.
This happens because the "Office A" entity is currently selected, while the alarm was created on a [device that has a relationship with this office](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-1/#adding-relations-between-entities){:target="_blank"}. 
Previously, in the alarm rule, we specified that the [alarm should propagate to related entities](#high-temperature-alarm-rule). 

{% include images-gallery.html imageCollection="add-alarm-widget-to-office-state-2" %}

Now we need to configure the widget to search for and display alarms for both the selected entity and its child entities, provided that relationships exist between them:

{% include images-gallery.html imageCollection="add-alarm-widget-to-office-state-3" showListImageTitles="true" %}

Now, as you can see, the widget displays the alarms of the devices that have a relation to the selected office.

{% include images-gallery.html imageCollection="final-office-state-1" %}

### Adding alarm widget to building state

Similar to the previous steps, we will add an alarm widget to the **building** state. This widget will display alarms from all devices associated with the selected building. We will also add this widget using the copy method.

{% include images-gallery.html imageCollection="add-alarm-widget-to-building-a-state-1" showListImageTitles="true" %}

The alarm widget displays the alarms of the devices related to the selected building.

{% include images-gallery.html imageCollection="add-alarm-widget-to-building-a-state-2" %}

### Adding alarm widget to buildings (default) state

Now it remains to add the alarm widget to the  **Building** (default) state. Also by copying method:

{% include images-gallery.html imageCollection="add-alarm-widget-to-buildings-state-1" showListImageTitles="true" %}

Now, if there are alarms on your devices, they will be displayed in the alarms widget in the **Building** (default) state.

{% include images-gallery.html imageCollection="add-alarm-widget-to-buildings-state-2" %}

## Final view of the dashboard for this lesson

Finally, your dashboard should look like this:

{% include images-gallery.html imageCollection="dashboard-final-lesson-4" %}

The configuration of alarm creation rules for the Energy Meter and Water Flow Meter devices is slightly more complex. 
This is because the alarm should not be triggered by a single value but by the sum of telemetry values over an hour. 
To achieve this, we will use the [rule engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/){:target="_blank"} for additional calculations. 
The configuration of alarm creation rules for these devices will be covered in the following lessons.

## Next step

In the next lesson, we will share this dashboard with customers. When you are ready to proceed, simply click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-5/" class="button">Lesson 5: Share dashboard with customer</a></p>