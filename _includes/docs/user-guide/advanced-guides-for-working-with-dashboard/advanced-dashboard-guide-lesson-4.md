* TOC
{:toc}

We continue developing our dashboard. In the previous lesson, we added and configured separate states for each device and configured them to display telemetry data.

If you have not completed the previous lesson yet, we strongly recommend reviewing it before proceeding.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/" class="button">Lesson 3: Adding and configuring individual states for each device</a></p>

<br>

In this lesson, we focus on configuring alarm rules and visualizing alarms on the dashboard.   
Specifically, we will:
- Configure alarm rules for the Indoor Air Quality Sensor that generate alarms when temperature or humidity thresholds are violated, or when CO₂ levels exceed the defined limits.
- Add dashboard widgets for monitoring active alarms.
- Test alarm triggering, acknowledgment, and clearing.

Let&#39;s get started.

{% include default-carousel.liquid collectionMap = 'dashboard-lesson-4' nonActiveItemsVisibility = false %}

<hr>

An **alarm** is a notification generated when critical conditions defined in **alarm rules** are detected in your IoT system.

For more information on [working with alarms](/docs/pe/user-guide/alarms/){:target="_blank"} and [configuring alarm rules](/docs/pe/user-guide/alarm-rules/){:target="_blank"}, refer to the relevant documentation.

## Adding alarm rules

The **Indoor Air Quality** sensor device that sends telemetry data such as temperature, humidity, and CO₂ levels to ThingsBoard uses the **air-sensor** device profile. 

Configure alarm rules for this profile to ensure they are applied to all sensors using the profile.

#### High temperature alarm rule

First, configure an alarm rule with the **High temperature** type using the following conditions:
- If the temperature exceeds **24 °C** but does not exceed **26 °C** (inclusive), a **Major** severity alarm is created.
- If the temperature exceeds **26 °C**, a **Critical** severity alarm is created.
- If the temperature drops below **24 °C**, the alarm is automatically **cleared**.

<b><font size="4">1. Create new alarm rule</font></b>

- Go to the **Alarm rules** tab of the **Alarms** page.
- Click the "**+**" button in the top-right corner and select **Create new alarm rule**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-1" %} 

<br><b><font size="4">2. Configure the General parameters</font></b>

In the **General** section, specify the following settings:
- **Alarm type**: High temperature
- **Entity type**: Device profile
- **Device profile**: air-sensor

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-2" %}

<b><font size="4">3. Add an argument</font></b>

Add an **argument** — the variable whose data will be used in the rule condition.

In the **Arguments** section:
- Click **Add argument** and fill in:
  - **Entity type:** Current entity
  - **Argument type:** Latest telemetry
  - **Time series key:** <span class="code-light">temperature</span>
  - **Argument name:** temperature
- Click **Add**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-3" %}

<br><b><font size="4">4. Add "Critical" trigger condition</font></b>

Add an alarm trigger condition with **"Critical" severity** that is activated when the temperature exceeds **26 °C**.

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
        - **Value:** 26
    - Click **Add**.
  - Click **Save**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-4" %}

<br><b><font size="4">5. Add "Major" trigger condition</font></b>

Add an alarm trigger condition with **"Major" severity** that is activated when the temperature is between **24 °C** and **26 °C**, inclusive.

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
        - **Value:** 24
      - Add another condition. Click **Add**
        - **Operation:** *less or equal*
        - **Value source:** Static
        - **Value:** 26
    - Click **Add**.
  - Click **Save**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-5" %}

<br><b><font size="4">6. Add alarm clearing condition</font></b>

Add an automatic alarm clear condition that is triggered when the temperature drops below **24 °C**.

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
        - **Value:** 24
    - Click **Add**.
  - Click **Save**.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-6" %}

<br><b><font size="4">7. Propagate alarm to related entities and save the rule</font></b>

- Enable **Propagate alarm to related entities** in the advanced settings to automatically propagate the alarm to the asset and then to the building linked to this device.   
Set **Relation type** to "Contains".
- Click **Add** to save the rule configuration.

The **High temperature** alarm rule will be created and activated.

{% include images-gallery.html imageCollection="high-temperature-alarm-rule-7" %}

> You can download a [JSON configuration file containing predefined high-temperature alarm rules](/docs/user-guide/resources/alarm-rules/high_temperature_alarm_rule.json){:target="_blank" download="high_temperature_alarm_rule.json"} and [import](/docs/pe/user-guide/alarm-rules/#import-alarm-rule){:target="_blank"} it into your ThingsBoard instance.

### Creating additional alarm rules

Using the same approach, configure the remaining alarm rules on your own.

> ⚠️ Alternatively, you can download the preconfigured alarm rule configurations and [import](/docs/pe/user-guide/alarm-rules/#import-alarm-rule){:target="_blank"} them into your ThingsBoard instance.   
Make sure to set the **"air-sensor" device profile** as the target entity of the alarm rule.

{% include images-gallery.html imageCollection="all-alarms-rules" %}

<b><font size="4">Low temperature</font></b>

[Click to download the "Low temperature" alarm rule configuration (JSON)](/docs/user-guide/resources/alarm-rules/low_temperature_alarm_rule.json){:target="_blank" download="low_temperature_alarm_rule.json"}.

**Configuration:**   
&#8211; **Alarm creation:**   
&#8195;&#8211; If the temperature drops below **20 °C** but not below **18 °C** (inclusive), an alarm of the severity type **"Major"** will be created.   
&#8195;&#8211; If the temperature drops below **18 °C**, an alarm of the severity type **"Critical"** will be created.   
&#8211; **Alarm clearing:**   
&#8195;&#8211; When the temperature rises above **20 °C**, the alarm will be cleared.

<b><font size="4">High humidity</font></b>

[Click to download the "High humidity" alarm rule configuration (JSON)](/docs/user-guide/resources/alarm-rules/high_humidity_alarm_rule.json){:target="_blank" download="high_humidity_alarm_rule.json"}.

**Configuration:**   
&#8211; **Alarm creation:**   
&#8195;&#8211; An alarm with severity type **"Major"** will be created if humidity rises above **60 %** but does not exceed **65 %** (inclusive).   
&#8195;&#8211; An alarm with severity type **"Critical"** will be created if humidity exceeds **65 %**.   
&#8211; **Alarm clearing:**   
&#8195;&#8211; The alarm will clear when humidity drops below **60 %**.

<b><font size="4">Low humidity</font></b>

[Click to download the "Low humidity" alarm rule configuration (JSON)](/docs/user-guide/resources/alarm-rules/low_humidity_alarm_rule.json){:target="_blank" download="low_humidity_alarm_rule.json"}.

**Configuration:**   
&#8211; **Alarm creation:**   
&#8195;&#8211; An alarm with severity type **"Major"** will be created if humidity drops below **40 %** but does not fall below **35 %** (inclusive).   
&#8195;&#8211; An alarm with severity type **"Critical"** will be created if humidity drops below **35 %**.   
&#8211; **Alarm clearing:**   
&#8195;&#8211; The alarm will clear when humidity rises above **40 %**.

<b><font size="4">High CO₂ levels</font></b>

[Click to download the "High CO₂" alarm rule configuration (JSON)](/docs/user-guide/resources/alarm-rules/high_co₂_alarm_rule.json){:target="_blank" download="high_co₂_alarm_rule.json"}.

**Configuration:**   
&#8211; **Alarm creation:**   
&#8195;&#8211; If the CO₂ level is equal to or exceeds **490 ppm**  but does not exceed **500 ppm**, the alarm with severity type **"Major"** will be created.   
&#8195;&#8211; If the CO₂ level exceeds **500 ppm**, the alarm with severity type **"Critical"** will be triggered.   
&#8211; **Alarm clearing:**   
&#8195;&#8211; The alarm will be cleared when the CO₂ level drops below **490 ppm**.

<br>

Configuring alarm rules for the **Energy Meter** and **Water Flow Meter** devices is slightly more complex. This is because the alarm must be triggered not by a single value, but by the hourly sum of telemetry values. 
To achieve this, we will use [Calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"} feature for additional calculations. Alarm rule configuration for these devices is covered in the next lessons.

Now that we have defined all the alarm rules for the **air-sensor** device profile, the next step is to add a widget to manage the alarms.

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
As you may recall, if the temperature value exceeds 24 °C, an alarm with a severity type of "Major" is triggered.

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

{% include images-gallery.html imageCollection="dashboard-final-lesson-4" %}

<hr>

## Next step

In the next lesson, we will share this dashboard with customers. When you are ready to proceed, simply click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-5/" class="button">Lesson 5: Share dashboard with customer</a></p>