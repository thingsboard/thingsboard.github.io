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

<hr>

## Adding alarm rules

First, you need to define the rules that will trigger the alarm. The simplest way to create the alarm rule is to configure it within the [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}. These rules specify the conditions under which reminders should be generated.

<hr>

### Rules for devices that use the air-sensor device profile

Devices using the **air-sensor** device profile transmit telemetry data such as temperature, humidity, and CO2 levels. 
Let&#39;s configure alarm rules for each of these telemetry keys:

<hr>

#### High temperature alarm rule

We will configure the **High temperature** alarm rule with two severity levels and a separate clearing condition:

- A **Major** alarm is created if the temperature exceeds **24 °C** but does not go above **26 °C** (inclusive).
- A **Critical** alarm is created if the temperature exceeds **26 °C**.
- When the temperature drops below **24 °C**, the alarm is **cleared**.

<b><font size="4">1. Create new alarm rule</font></b>
- Go to the **Device profile** page in the **Profiles** section.
- Click **air-sensor** to open its details.
- Navigate to the **Alarm rules** tab.
- Click the "**+**" button and select **Create new alarm rule**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-1" %} 

<br><b><font size="4">2. Configure the General parameters</font></b>

In the **General** section, specify the **alarm type** — *High temperature* (or any other name you prefer) — which serves as both the name and the unique identifier of the alarm.

<b><font size="4">3. Add an argument</font></b>

Before defining the alarm trigger condition, you must add an **argument** — the data source that the rule will use.

In the **Arguments** section:

- Click **Add argument** and fill in:
  - **Entity type:** *Current entity*
  - **Argument type:** *Latest telemetry*
  - **Time series key:** <span class="code-light">temperature</span>
  - **Argument name:** temperature
- Click **Add**.

This creates the variable <span class="code-light">temperature</span>, which will be used in all condition expressions.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-2" %}

<br><b><font size="4">4. Configure the condition for creating the Critical alarm</font></b>

In the **Create condition** section, click **Add create condition**.

- **Severity:** *Critical*
- **Condition**
  - Click **Add condition**.
  - In the configuration window, click **Add argument filter** and specify:
    - **General** block:
      - **Argument:** temperature (the argument added earlier)
      - **Value type:** *Numeric*
    - **Filters** block:
      - Click **Add** filter:
        - **Operation:** *greater than*
        - **Value source:** Static
        - **Value:** <span class="code-light">26</span>
    - Click **Add**.

  **Condition settings**
  - **Condition type:** *Simple*
  - Click **Save**.

An alarm with the severity "Critical" will be created when the temperature exceeds **26 °C**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-3" %}

<br><b><font size="4">5. Configure the condition for creating the Major alarm</font></b>

Click **Add create condition**.
- **Severity:** *Major*
- **Condition**
  - Click **Add condition**.
  - In the configuration window, click **Add argument filter** and specify:
    - **General** block:
      - **Argument:** temperature
      - **Value type:** *Numeric*
    - **Filters** block:
      - Click **Add** filter:
        - **Operation:** *greater than*
        - **Value source:** Static
        - **Value:** <span class="code-light">24</span>
      - Add another condition. Click **Add**
        - **Operation:** *less or equal*
        - **Value source:** Static
        - **Value:** <span class="code-light">26</span>
    - Click **Add**.

  **Condition settings**
  - **Condition type:** *Simple*
  - Click **Save**.

A **Major** alarm will be created when the temperature is between **24 °C** and **26 °C** inclusive.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-4" %}

<br><b><font size="4">6. Add the condition to clear the alarm</font></b>

Click **Add clearing condition**.
- **Severity:** *Major*
- **Condition**
  - Click **Add clearing condition**.
  - In the configuration window, click **Add argument filter** and specify:
    - **General** block:
      - **Argument:** temperature
      - **Value type:** *Numeric*
    - **Filters** block:
      - Click **Add**:
        - **Operation:** *less or equal*
        - **Value source:** Static
        - **Value:** <span class="code-light">24</span>
    - Click **Add**.

  **Condition settings**
  - **Condition type:** *Simple*
  - Click **Save**.

The alarm will be **cleared** automatically once the temperature drops below **24 °C**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-5" %}

<br><b><font size="4">7. Propagate alarm to related entities</font></b>

In the **Advanced settings** section, enable the **Propagate alarm to related entities** option to automatically forward the alarm to the asset linked to the device.   
Specify the relation type used between the device and the asset — **Contains**.

This allows device alarms to be displayed at higher levels of the hierarchy, for example: **Device → Office → Building**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-6" %}

<br><b><font size="4">Result</font></b>

The alarm rule will be created and activated.

{% include images-gallery.html imageCollection="final-high-temperature-alarm-rule" %}

<br>

**Now, using this example, you can configure additional alarm rules on your own for:**
- low temperature
- high humidity
- low humidity
- high CO₂ levels

Go ahead!

<hr>

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

<hr>

#### High humidity alarm rule

Alarm creation:

- An alarm with severity type "Major" will be created if humidity rises above `60` % but does not exceed `65` % (inclusive).
- An alarm with severity type "Critical" will be created if humidity exceeds `65` %.

Alarm clearing:

- The alarm will clear when humidity drops below `60` %.

{% include images-gallery.html imageCollection="final-high-humidity-alarm-rules" %}

<hr>

#### Low humidity alarm rule

Alarm creation:

- An alarm with severity type "Major" will be created if humidity drops below `40` % but does not fall below `35` % (inclusive).
- An alarm with severity type "Critical" will be created if humidity drops below `35` %.

Alarm clearing:

- The alarm will clear when humidity rises above `40` %.

{% include images-gallery.html imageCollection="final-low-humidity-alarm-rules" %}

<hr>

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

<hr>

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

<hr>

## Adding alarms table widget

Displaying alarms in a user-friendly format is essential for monitoring and managing them effectively. 
The "Alarms table" widget in ThingsBoard provides a customizable interface for easy monitoring and interaction with alarms.

Steps to add the "Alarm table" widget:

{% include images-gallery.html imageCollection="adding-alarms-table-widget-1" showListImageTitles="true" %}

A fully configured **air_sensor** state should look like this:

{% include images-gallery.html imageCollection="final-air-sensor-state-1" %}

<br>
Now that the alarm rules have been defined and the widget for displaying active alarms has been added, let&#39;s test its functionality by sending telemetry values that exceed the threshold specified in the alarm rule.

<hr>

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

<hr>

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

<hr>

### Adding alarm widget to building state

Similar to the previous steps, we will add an alarm widget to the **building** state. This widget will display alarms from all devices associated with the selected building. We will also add this widget using the copy method.

{% include images-gallery.html imageCollection="add-alarm-widget-to-building-a-state-1" showListImageTitles="true" %}

The alarm widget displays the alarms of the devices related to the selected building.

{% include images-gallery.html imageCollection="add-alarm-widget-to-building-a-state-2" %}

<hr>

### Adding alarm widget to buildings (default) state

Now it remains to add the alarm widget to the  **Building** (default) state. Also by copying method:

{% include images-gallery.html imageCollection="add-alarm-widget-to-buildings-state-1" showListImageTitles="true" %}

Now, if there are alarms on your devices, they will be displayed in the alarms widget in the **Building** (default) state.

{% include images-gallery.html imageCollection="add-alarm-widget-to-buildings-state-2" %}

<hr>

## Final view of the dashboard for this lesson

Finally, your dashboard should look like this:

{% include images-gallery.html imageCollection="dashboard-final-lesson-4" %}

The configuration of alarm creation rules for the Energy Meter and Water Flow Meter devices is slightly more complex. 
This is because the alarm should not be triggered by a single value but by the sum of telemetry values over an hour. 
To achieve this, we will use the [rule engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/){:target="_blank"} for additional calculations. 
The configuration of alarm creation rules for these devices will be covered in the following lessons.

<hr>

## Next step

In the next lesson, we will share this dashboard with customers. When you are ready to proceed, simply click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-5/" class="button">Lesson 5: Share dashboard with customer</a></p>