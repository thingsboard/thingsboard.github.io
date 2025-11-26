* TOC
{:toc}

**Alarm rules** define the conditions for triggering alarms, the logic for setting severity levels, and the rules for clearing and automatically closing notifications. This enables administrators and developers to maintain full control over system behavior in real time and respond promptly to abnormal conditions.

Starting from ThingsBoard **4.3**, alarm rule configuration capabilities have been significantly enhanced. Rules can now be defined at the level of a [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}, [Asset](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"}, **their Profiles**, or even a [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"}, enabling a multi-layered monitoring system that respects organizational structure and contextual logic. This approach allows precise control over when and where an alarm should be raised — globally, at the profile level, or for a specific device or entity.

Unified mechanisms for alarm uniqueness, severity levels, timestamps, and alarm propagation ensure consistent data handling and help operators efficiently analyze, filter, and process critical events.

<hr>

## Create alarm rule

> **Note:** The process is identical for a **Devices**, **Assets**, **Device profiles**, **Asset profiles**, or **Customers**.

<b><font size="3">Choose where to create the alarm rule</font></b>

You have two options:

**Option 1 — From the global Alarms page**
- Open **Alarms** page from the **side menu**
- Go to the **Alarm rules** tab

**Option 2 — Inside a specific Device / Asset / Profile / Customer**
- Select the **entity** or **profile** to which the alarm rule should be added.
- In the entity details window, navigate to the **Alarm rules** tab.

{% capture difference %}
**Recommendation:** Create alarm rules in **Device profiles** or **Asset profiles** to avoid duplicating configurations across multiple entities.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<hr>

### Step 1. Add new alarm rule

- Click the "**plus**" icon button
- Select **Create new alarm rule** from the dropdown menu
- Click the "**plus**" icon button

<hr>

### Step 2. General section

In the **General** section, specify the **alarm type** — the name and unique identifier of the alarm (for example, "High temperature").   
The alarm type defines which event the alarm represents and allows ThingsBoard to determine whether a new alarm should be created or an existing active one should be updated.

If you are creating the rule from the global **Alarms** page, additionally:
- Select the **target entity type** 
- Specify the **entity or profile** to which the rule will apply

<hr>

### Step 3. Add arguments

Before defining conditions, you must add at least one argument.

Click **Add argument** and configure:
- **Argument name**. Set a reference name for the variable that will be used in the alarm condition.
- **Entity type**. Specifies the source from which the argument value is taken:
    - **Current entity** — is the entity whose details page you are configuring the rule from. If the rule is created at the Asset Profile or Device Profile level, it will run for every entity using that profile.
    - **Another Device or Asset** — references telemetry or attributes from a different device or asset.
    - **Customer** — retrieves data from the associated customer entity.
    - **Current tenant** — uses data from the tenant entity.
    - **Current owner** — data from the owner of the current entity
- **Argument type**. Defines what kind of data the argument represents:
    - **Attribute**. Uses static or semi-static key–value pairs associated with an entity (e.g., model, max temperature).
        - Choose the **Attribute scope**: **Server** attributes, **Client** attributes, or **Shared** attributes
        - Specify the **Attribute key**
        - Optionally, set a **Default value** for the attribute
    - **Latest telemetry**. Most recent time series value (e.g., temperature, speed, voltage).
        - Specify the **Time series key**
        - Optionally, set a **Default value** for time series
- Click **Add** to save the argument.

<hr>

### Step 4. Add alarm creating condition

This section defines the alarm trigger logic:   
the **conditions** under which the alarm should be created, the **severity level** it will receive, and the time periods during which the rule is active according to the **schedule**.

#### Step 4.1 Severity

**Severity** defines the criticality of an alarm at the moment it is created.   
The severity level helps prioritize incidents, affects how they are visually represented in the UI, and is used in automation workflows (Rule Engine, notifications, etc.).

Available severity levels: **Critical**, **Major**, **Minor**, **Warning**, **Indeterminate**.

<b><font size="3">How severity is applied</font></b>

The selected Severity level affects:
- **New alarms** created by this rule
- **Updates to an active alarm**, if the create condition triggers again and meets new criteria   
  (for example, if an alarm was previously *Warning* but the condition now qualifies as *Major*, the severity level will be increased)

<hr>

#### Step 4.2 Condition

The **Condition** defines the logic the system uses to determine whether an alarm should be created or updated. This is the core part of the rule — it specifies exactly when the rule is considered fulfilled.

**Examples of typical conditions:**
- <span class="code-light">temperature > 50</span>
- <span class="code-light">device is offline</span>
- complex expressions using multiple arguments, telemetry fields, or attributes   
  (e.g., <span class="code-light">temperature > threshold AND doorState == open</span>)

ThingsBoard supports **three types of conditions**, each suited for different monitoring scenarios.

<b><font size="3">Condition types</font></b>

- **Simple.** The alarm triggers immediately when the expression becomes true.
  This is used when any threshold violation should raise an alarm instantly.   
  *Example:* <span class="code-light">temperature > 10</span>
- **Duration.** The condition must remain true continuously for a defined period. 
  This helps avoid false alarms caused by short-lived telemetry spikes.   
  *Example:* <span class="code-light">temperature > 10</span> for 60 seconds 
- **Repeating.** The alarm is created only after the condition becomes true a specified number of times. 
  This is used when repeated issues matter more than a single occurrence.   
  *Example:* <span class="code-light">signalLost == true</span> three times in a row

<hr>

#### Step 4.3 Schedule

The **Schedule** defines the time periods during which the alarm creation rule is active.
The system evaluates create conditions only when the current time falls within an allowed interval.

If the create condition becomes true outside the defined schedule, the alarm **will not** be created — even if the logical expression evaluates to true.

<b><font size="3">Schedule options</font></b>

ThingsBoard supports three main types of rule activation schedules:

- **Active all time.** The rule operates continuously, **24/7**.
- **Active at a specific time range.** The rule is active only during a fixed time window, for example: **Mon–Fri, 09:00–18:00**
- **Custom schedule.** You can define separate time intervals for each day of the week, allowing full flexibility.

<b><font size="3">Dynamic schedule mode</font></b>

In addition to the standard schedule options, ThingsBoard allows you to define the schedule **dynamically** by providing a JSON object through an attribute or telemetry.
This is useful when the schedule needs to vary from one device to another or from one customer to another.

**How to enable dynamic mode**
- In the **Schedule** section, select **Dynamic mode**.
- Specify the argument (attribute or telemetry) that contains the JSON with the desired schedule configuration.

<b><font size="3">Examples of schedule JSON configurations</font></b>

**1. Active all time** schedule

The JSON object may include:

```json
{}
```
{:.copy-code}

or

```json
{
  "type": "ANY_TIME"
}
```
{:.copy-code}

<br>
**2. "Specific time"** schedule

This format allows you to define an exact time range for selected days of the week.

**Example:**   
Active on **Tuesday** and **Thursday** for the entire day:

```json
{
  "type": "SPECIFIC_TIME",
  "daysOfWeek": [2, 4],
  "startsOn": 0,
  "endsOn": 0,
  "timezone": "Europe/Kiev"
}
```
{:.copy-code}

**Field explanation:**
- **timezone** — the time zone in which the schedule is interpreted
- **daysOfWeek** — days of the week in numeric format (1–7, where 1 = Monday)
- **startsOn** — the start of the active period, in milliseconds from the beginning of the day 
- **endsOn** — the end of the active period, in milliseconds from the beginning of the day

When both **startsOn** and **endsOn** are set to **0**, it means the rule is active for the entire day.

<br>
**3. "Custom schedule"** format

Defines a separate time interval for each individual day.

**Example:**   
The schedule is active every day for the full 24 hours:

```json
{
  "type": "CUSTOM",
  "timezone": "Europe/Kiev",
  "items": [
    { "dayOfWeek": 1, "enabled": true, "startsOn": 0, "endsOn": 0 },
    { "dayOfWeek": 2, "enabled": true, "startsOn": 0, "endsOn": 0 },
    { "dayOfWeek": 3, "enabled": true, "startsOn": 0, "endsOn": 0 },
    { "dayOfWeek": 4, "enabled": true, "startsOn": 0, "endsOn": 0 },
    { "dayOfWeek": 5, "enabled": true, "startsOn": 0, "endsOn": 0 },
    { "dayOfWeek": 6, "enabled": true, "startsOn": 0, "endsOn": 0 },
    { "dayOfWeek": 7, "enabled": true, "startsOn": 0, "endsOn": 0 }
  ]
}
```
{:.copy-code}

**Field explanation:**

- **timezone** — the time zone used for interpreting the schedule
- **items** — an array containing the configuration for each day

Each item includes:
- **daysOfWeek** - a list of days in numeric format (Monday = 1, Tuesday = 2, etc.) during which the schedule will be active.
- **enabled** — whether the rule is active on that day
- **startsOn** - a timestamp in milliseconds from which the schedule becomes active for the specified days.
- **endsOn**: - a timestamp in milliseconds until which the schedule remains active for the specified days.

When both **startsOn** and **endsOn** are set to **0**, it means the rule is active for the entire day.

<hr>

#### Step 4.4 Additional info

The **Additional info** field allows you to enrich an alarm with extra contextual data that may be useful for incident analysis or troubleshooting.
This information is stored together with the alarm and displayed in the alarm details view, helping operators, technicians, and analysts work more efficiently.

**What you can include:**
- **Operator notes** — short explanations or comments
- **Troubleshooting instructions** — steps for quick diagnosis
- **Documentation links** — help pages, internal guides, or SOPs
- **Contextual data** — any additional fields that help clarify the incident, such as:
  - camera/zone identifier 
  - critical threshold information 
  - contact person 
  - automation scenario name

<hr>

#### Step 4.5 Mobile dashboard

This option defines which **mobile dashboard** will be opened in the ThingsBoard mobile application when a user views a specific alarm.

By selecting a dedicated dashboard, operators, technicians, and field engineers gain immediate access to the relevant context—without extra navigation or searching for the right data.

**How it works**

Once you choose a dashboard in the **Mobile dashboard** field:
- the mobile app automatically opens the specified dashboard when navigating to the alarm
- the user sees relevant widgets, metrics, and indicators
- this significantly speeds up problem diagnosis and decision-making

**Examples of use**

- Open a **diagnostic dashboard** for alarms such as High temperature
- Display a **technician&#39;s dashboard** with equipment control buttons
- Show a **geolocation dashboard** for alarms related to mobile assets

**When this is especially useful**

- When field engineers need to respond to alarms on-site
- In scenarios requiring fast diagnostics
- For monitoring distributed devices (refrigerators, sensors, meters, vehicles)

<hr>

### Step 5. Add alarm clearing condition (optional)

The **Clear condition** defines the logic by which ThingsBoard automatically transitions an alarm into the **Cleared** state.

If a clear condition is not configured, the alarm will **never** be cleared automatically, even if all values return to normal.   
In this case, the alarm can be cleared only manually — through the UI or via the API.

#### Step 5.1 Clear condition

The clear condition specifies the circumstances under which the alarm is considered resolved and becomes **Cleared**.

**Examples of clear conditions:**
 
- <span class="code-light">temperature ≤ 50</span>
- values returned to the normal range
- device connection restored
- complex expressions combining multiple arguments

**Condition types**

ThingsBoard supports the same condition types as for alarm creation:
- **Simple** — triggers immediately when the condition becomes true
- **Duration** — the condition must remain true for a defined period
- **Repeating** — the condition must be met a certain number of times before clearing

<hr>

#### Step 5.2 Schedule

The clear schedule controls when the clear condition is allowed to trigger.

**Example use cases:**
- clearing alarms only during working hours
- allowing alarm clearance during night shifts
- blocking clearance during specific time windows

If the clear condition becomes true outside the allowed schedule, the alarm will not be cleared until the current time enters the permitted interval.

<hr>

#### Step 5.3 Additional info

In this block, you can add data that will appear in the Alarm Details section at the moment the alarm is cleared.   
This is useful for: maintaining an event log, adding operator notes, automatically saving diagnostic information, providing contextual hints

Supports dynamic substitution of telemetry or attribute values using ${attributeName} syntax.

<hr>

#### Step 5.4 Mobile dashboard

Defines which mobile dashboard is opened in the ThingsBoard mobile app when viewing a cleared alarm.

This is useful when:
- additional diagnostics should be shown after clearance
- the operator must confirm system recovery
- the user needs to be redirected to another scenario or dashboard

<hr>

### Step 6. Configure the Advanced settings

In this step, you can define how the alarm is **propagated** across different entities in the platform.   
Propagation determines **who can see the alarm** and **at which hierarchy level** it becomes visible.   
This is especially important in multi-level organizational structures, asset hierarchies, or tenant–customer environments.

**Available propagation options:

<hr>

<b><font size="3">Propagate alarm to related entities</font></b>

When enabled, the alarm becomes visible to all entities that are related to the originator, regardless of the relation type.

**Useful when:**
- a **Device** is assigned to an **Asset**
- an **Asset** is linked to a **Customer**
- you want alarms to be accessible from all interconnected entities

This ensures that all relevant entities within the relation graph can view and process the alarm.

<hr>

<b><font size="3">Propagate alarm to the owner (Customer / Tenant)</font></b>

Makes the alarm visible to the **direct owner** of the originator — either a **Customer** or the **Tenant**.

It allows owners to see alarms from all devices or assets they manage, without manually configuring additional relations.

<hr>

<b><font size="3">Propagate alarm to entity owners hierarchy</font></b>

Propagates the alarm **up the entire ownership chain**, ensuring visibility at every parent level:   
**Asset → Customer → Tenant**

**Useful for:**
- **B2B platforms** with nested customer structures
- **MSP (Managed Service Provider)** deployments
- **Large enterprises** with multi-level organizational hierarchies

All higher-level owners will be able to see the alarm, even if they do not have a direct relation to the originator.

<hr>

<b><font size="3">Propagate alarm to Tenant</font></b>

Makes the alarm visible at the Tenant level, regardless of the ownership structure or entity relation graph.

**Use this when:**
- the Tenant Administrator needs visibility into **all critical events**
- a **centralized overview** of the entire infrastructure is required

<hr>

### Step 7. Save the rule

- Click **Add** to save the rule configuration.

After saving, ThingsBoard will automatically start creating, updating, and processing alarms according to the conditions, schedules, and propagation settings you have configured.

<hr>

## Examples of alarm rule configurations

To better understand the capabilities and behavior of alarm rules, let’s examine several practical examples. Each example demonstrates a specific scenario, condition type, or ThingsBoard feature that can be used in real projects.

In the scenarios below, we will create alarm rules directly on an individual device.

{% capture difference %}
**Recommendation:** If the same rule needs to be applied to multiple devices, create it at the **Device profile** level.   
This ensures centralized management of alarm logic, simplifies maintenance, and eliminates configuration duplication.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Preparation:** 

To follow the examples, you need a device named "**Thermometer**" that sends <span class="code-light">temperature</span> telemetry.
You can create this device in **Entities** → **Devices** and assign it to any Device Profile.

{% include images-gallery.html imageCollection="example-prepare-device" %}

<hr>

### Example 1. Simple alarm condition: temperature monitoring

**Scenario:**   
A refrigeration chamber is used to store perishable goods. The temperature inside must be continuously monitored to prevent product loss and maintain proper storage conditions.

**Goal:**   
Create a **critical alarm** when the temperature exceeds **10°C**.

<hr>

<b><font size="3">Step 1. Open the device&#39;s alarm rule settings</font></b>

- Go to the **Devices** page under **Entities**.
- Select the **Thermometer** device.
- In the **device details**, go to the **Alarm rules** tab.
- Click the "**+**" button and choose **Create new alarm rule**.

<hr>

<b><font size="3">Step 2. General section</font></b>

In the **General** section, specify:
- **Alarm type:** *High temperature*

<hr>

<b><font size="3">Step 3. Add an argument</font></b>

- In the **Arguments** section, click **Add argument** and fill in:
  - **Argument name:** temperature
  - **Entity type:** *Current entity*
  - **Argument type:** *Latest telemetry*
  - **Time series key:** <span class="code-light">temperature</span>
- Click **Add** when finished.

This creates a <span class="code-light">temperature</span> variable that you will use in the rule&#39;s logical condition.

<hr>

<b><font size="3">Step 4. Configure the create condition</font></b>

In the **Create condition** section, click **Add create condition**.

**Step 4.1 Severity**
- **Severity:** *Critical*

**Step 4.2 Condition**

Click "<b>Add alarm creating condition</b>".   

In the filter configuration window, click **Add filter** and specify:
- **Argument:** <span class="code-light">temperature</span>
- **Value type:** *Numeric*
- **Operation:** *greater than* 
- **Value:** <span class="code-light">10</span>
- Click **Add**

**Condition settings**
- **Condition type:** *Simple*
- Click **Save**

As a result, the alarm will be created immediately once the temperature exceeds **10°C**.

<hr>

<b><font size="3">Step 5. Save the rule</font></b>

Click **Add** to save the rule.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will automatically create a critical alarm whenever the <span class="code-light">temperature</span> value exceeds **10°C**.

{% include images-gallery.html imageCollection="example-simple-alarm-condition-1" showListImageTitles="true" %}

<hr>

### Example 2. Alarm clear condition

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)"*

**Scenario**   
A refrigerator is used to store perishable products. After the critical **High temperature** alarm is triggered, it must be cleared automatically once the temperature returns to a safe level.

**Goal**   
Update the existing **High temperature** rule by adding a clear condition that sets the alarm to **Cleared** when the temperature is **≤ 4°C**.

<hr>

<b><font size="3">Step 1. Open the High temperature rule</font></b>

- In the side menu, go to **Rules** → **Alarm rules**.
- Find the **High temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<hr>

<b><font size="3">Step 2. Configure the clear condition</font></b>

Scroll down to the **Clear condition** section:
- Click **Add clear condition**.
- Click "**Add alarm creating condition**" to open the configuration window.

<b><font size="3">Step 2.1 Add a filter</font></b>

In the configuration window, click **Add filter** and specify:
- **Argument:** <span class="code-light">temperature</span>
- **Value type:** *Numeric*
- **Operation:** *less or equal*
- **Value:** <span class="code-light">4</span>
- Click **Add**

This condition defines the moment when the temperature returns to a safe level.

<b><font size="3">Step 2.2 Condition settings</font></b>
- **Condition type:** *Simple*
- Click **Save**

After this, the alarm will be cleared as soon as the temperature drops to **4°C or below**.

<hr>

<b><font size="3">Step 3. Save the rule</font></b>

Click **Apply** to save the updated rule.

{% include images-gallery.html imageCollection="alarm-example-clear-alarm-condition-1" showListImageTitles="true" %}

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create a **Critical** — **High temperature** alarm when the temperature exceeds **10°C**
- automatically clear the alarm when the temperature is **≤ 4°C**

This configuration forms a complete alarm lifecycle, keeps the system state accurate, and eliminates the need for manual intervention.

<hr>

### Example 3. Alarm condition with a duration

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)".*

**Goal:**   
Update the existing **High temperature** rule so that it triggers only when the temperature exceeds the threshold for a specified duration — for example, **1 minute**.
This mechanism helps avoid false alarms caused by short-term temperature spikes.

<hr>

<b><font size="3">Step 1. Open the High temperature rule</font></b>

- In the side menu, go to **Rules** → **Alarm rules**.
- Find the **High temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<hr>

<b><font size="3">Step 2. Configure the create condition</font></b>

Scroll down to the **Create condition** section and edit the existing condition:
- **Condition type:** change *Simple* → **Duration**
- **Duration value:** <span class="code-light">1</span>
- **Time unit:** *minutes*
- Click **Save** to apply the updated alarm condition settings.

The alarm will now be triggered only if the temperature exceeds the threshold **continuously for 60 seconds**.

<hr>

<b><font size="3">Step 3. Save the updated rule</font></b>

Click **Apply** to save the updated rule configuration.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create the **High temperature** alarm only when the temperature exceeds the threshold for **1 full minute**
- ignore short, random temperature spikes
- provide a more stable alarm system with fewer false alerts

{% include images-gallery.html imageCollection="alarm-example-clear-with-duration-1" %}

<hr>

### Example 4. Alarm with dynamic duration (based on an attribute value)

*Continuation of the example "[Alarm condition with a duration](#example-3-alarm-condition-with-a-duration)".*

**Scenario**   
You already have a **High temperature** alarm configured to trigger when the temperature exceeds the threshold for **1 minute**.   
In this example, we extend that logic by making the duration **dynamic** — meaning the duration required to trigger the alarm will be defined by a **server attribute** on the device.

**Goal**   
Update the High temperature rule so that:
- the alarm is created only when the temperature stays above the critical threshold for the duration specified in the device&#39;s <span class="code-light">highTemperatureDurationThreshold</span> [server attribute](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes){:target="_blank"}
- the duration can be changed without editing the alarm rule — simply by updating the device’s attribute value

<hr>

**Preparation**   
Add a server attribute to the **Thermometer** device:
- **Key:** <span class="code-light">highTemperature</span>
- **Value type** *Integer*
- **Value:** <span class="code-light">2</span> (for example, 2 minutes)

{% include images-gallery.html imageCollection="alarm-example-clear-with-dynamic-duration-1" %}

This value will be used by the alarm rule as the duration requirement.

<hr>

<b><font size="3">Step 1. Open the High temperature rule</font></b>

- In the side menu, go to **Rules** → **Alarm rules**.
- Find the **High temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<hr>

<b><font size="3">Step 2. Add an argument</font></b>

In the **Arguments** section:
- Click **Add argument**
- Fill in the fields:
  - **Argument name:** highTemperatureDurationThreshold
  - **Entity type:** *Current entity* 
  - **Argument type:** *Attribute*
  - **Attribute scope:** *Server attributes* 
  - **Attribute key:** <span class="code-light">highTemperatureDurationThreshold</span>
- Click **Add**

You now have a dynamic variable that can be used in the **Duration** condition.

<hr>

<b><font size="3">Step 3. Configure the create condition</font></b>

Scroll to the **Create condition** section and edit the existing condition:
- **Condition type:** *Duration* 
- **Value type:** change *Static* → **Dynamic** 
- **Value:** select the argument <span class="code-light">highTemperatureDurationThreshold</span>
- **Time unit:** *minutes*
- Click **Save** inside the condition block.

From now on, the duration required to trigger the alarm is determined by the device attribute rather than a fixed number.

<hr>

<b><font size="3">Step 4. Save the rule</font></b>

Click **Apply** to save the updated configuration.

{% include images-gallery.html imageCollection="alarm-example-clear-with-dynamic-duration-2" %}

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create a **High temperature** alarm if the temperature:
  - exceeds the threshold (e.g., >10°C), **and**
  - remains above it for the period defined in the <span class="code-light">highTemperatureDurationThreshold</span> attribute (e.g., 2 minutes)

This ensures the alarm responds only to **sustained deviations**, not to short-term sensor spikes.

<hr>

### Example 5. Alarm with repeating condition

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)".*

**Goal:**   
Update the **High temperature** rule so that the alarm is created only when the threshold condition occurs a specified number of times in a row.
This helps filter out random sensor spikes and react only to repeated or consistent deviations.

<hr>

<b><font size="3">Step 1. Open the High temperature rule</font></b>

- In the side menu, go to **Rules** → **Alarm rules**.
- Find the **High temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<hr>

<b><font size="3">Step 2. Edit the Create condition</font></b>

Configure a fixed repeat count.

Scroll to the **Create condition** section and update the existing condition.   
Modify the parameters as follows:
- **Condition type:** *Repeating*
- **Repeats count:** <span class="code-light">3</span>
- Click **Save** to apply the changes.

With this configuration, ThingsBoard will check whether the threshold condition occurs **three times in a row** before creating the alarm.

<hr>

<b><font size="3">Step 3. Save the rule</font></b>

Click **Apply** to save the updated configuration.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating2" %}

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard behaves as follows:
- create the **High temperature** alarm only when the condition is met **3 times in a row**
- Single or random temperature spikes will not trigger an alarm

<hr>

### Example 6. Define alarm rule schedule

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)".*

**Goal:**   
Update the **High temperature** rule so that the alarm triggers **only during working hours**.
This is useful when monitoring is required only at certain times—for example, during staff working hours.

<hr>

<b><font size="3">Step 1. Open the High temperature rule</font></b>

- In the side menu, go to **Rules** → **Alarm rules**.
- Find the **High temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<hr>

<b><font size="3">Step 2. Configure the alarm rule schedule</font></b>

Scroll to the **Create condition** section and open the **Schedule** settings.
- **Select the schedule type:** *Active at a specific time*
- Configure the working hours:
  - **Timezone:** Europe/Kiev (UTC+02:00)
  - **Days**: Monday, Tuesday, Wednesday, Thursday, Friday
  - **Time range:**
    - **From:** 10:00
    - **To:** 19:00
- Click **Save** to apply the schedule configuration.

With this setup, the rule is active **only on weekdays from 10:00 to 19:00**.
Outside this interval, the system will **not** create a High temperature alarm, even if <span class="code-light">temperature > 10°C</span> is true.

<hr>

<b><font size="3">Step 3. Save the rule</font></b>

Click **Apply** to save the updated configuration.

{% include images-gallery.html imageCollection="alarmСonditionsSchedule" showListImageTitles="true" %}

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- activate the **High temperature** rule only on weekdays **from 10:00 to 19:00**
- ignore temperature threshold violations that occur outside this time window

<hr>

### Example 7. Advanced thresholds

**Goal**   
Update the **High temperature** rule by adding the ability to enable or disable the alarm using a server attribute at the device level.

In this example, the alarm should trigger **only when both conditions are true**:
1. <span class="code-light">temperatureAlarmFlag == true</span>
2. <span class="code-light">temperature > 10°C</span>

This allows you to flexibly control whether the alarm should be active for a specific device — **without editing the rule**.

<hr>

Preparation

Add a server attribute to the **Thermometer** device:
- **Key:** temperatureAlarmFlag 
- **Type:** Boolean 
- **Value:** true

This attribute determines whether the alarm rule is active for the device.

<hr>

<b><font size="3">Step 1. Open the High temperature rule</font></b>

- In the side menu, go to **Rules** → **Alarm rules**.
- Find the **High temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<hr>

<b><font size="3">Step 2. Add an argument</font></b>

In the **Arguments** section:
- Click **Add argument**
- Fill in the fields:
  - **Argument name:** temperatureAlarmFlag 
  - **Entity type:** *Current entity* 
  - **Argument type:** *Attribute*
  - **Attribute scope:** *Server attributes*
  - **Attribute key:** <span class="code-light">temperatureAlarmFlag</span>
- Click **Add**

You now have a boolean variable that can be used in the alarm conditions.

<hr>

<b><font size="3">Step 3. Configure the create condition</font></b>

Scroll to the Create condition section and edit the existing condition.

- Click **Add filter** and configure:
  - **Argument:** <span class="code-light">temperatureAlarmFlag</span>
  - **Value type:** *Boolean* 
  - **Operation:** *equal* 
  - **Value:** `true`
- Click **Add**.

This filter determines whether the alarm is allowed to trigger for the specific device.

<b><font size="3">Step 3. Save the rule</font></b>

Click **Apply** to save the updated configuration.

{% include images-gallery.html imageCollection="alarmСonditionsAdvanced1" %}

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create the High temperature alarm only if:
  - <span class="code-light">temperatureAlarmFlag == true</span>, and 
  - the <span class="code-light">temperature</span> exceeds **10°C**
- ignore the rule entirely for this device if temperatureAlarmFlag == false, even when the threshold is exceeded

{% include images-gallery.html imageCollection="alarmСonditionsAdvanced2" %}

<hr>

<b><font size="4">Benefits of this approach</font></b>

- You can enable or disable alarms **without editing a rule**
- Each device can have its own alarm activation state 
- Ideal for large projects with varying alerting policies across devices 
- Easy to integrate with dashboards — operators can toggle the alarm using a simple switch

<hr>

