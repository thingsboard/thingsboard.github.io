* TOC
{:toc}

**Alarm rules** define the conditions for triggering alarms, the logic for setting severity levels, and the rules for clearing and automatically closing notifications. This enables administrators and developers to maintain full control over system behavior in real time and respond promptly to abnormal conditions.

Starting from ThingsBoard **4.3**, alarm rule configuration capabilities have been significantly enhanced. Rules can now be defined at the level of a [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}, [Asset](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"}, **their Profiles**, or even a [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"}, enabling a multi-layered monitoring system that respects organizational structure and contextual logic. This approach allows precise control over when and where an alarm should be raised — globally, at the profile level, or for a specific device or entity.

Unified mechanisms for alarm uniqueness, severity levels, timestamps, and alarm propagation ensure consistent data handling and help operators efficiently analyze, filter, and process critical events.

<hr>

## Create alarm rule

> **Note:** The process of creating an alarm rule is the same for **Devices**, **Assets**, **Device profiles**, **Asset profiles**, or **Customers**.

<b><font size="3">Where should you create an alarm rule?</font></b>

You can create an alarm rule in two ways:

**1. On the global Alarm Rules page**   
   This page allows you to centrally manage all alarm rules in the system — both for individual entities and for profiles.

**2. Inside a specific entity or profile**   
   You can also create a rule directly in the settings of a particular:
   - [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}
   - [Asset](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"}
   - [Device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}
   - [Asset profile](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"}
   - [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"}

   Alarm rules are configured on the **Alarm rules** tab within the details of the selected entity or profile.

{% capture difference %}
**Recommendation:** Create alarm rules in **Device profiles** or **Asset profiles** to avoid duplicating configurations across multiple entities.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<hr>

### Step 1. Add new alarm rule

**Option 1 — From the global Alarm Rules page**
- Open the **Alarms** page from the left-hand menu.
- Go to the **Alarm rules** tab.
- Click the "**+**" button in the top-right corner.
- Select **Create new alarm rule** from the dropdown menu.

{% include images-gallery.html imageCollection="step-1-add-alarm-rule-1" %}

**Option 2 — Inside a Device / Asset / Profile / Customer**
- Click the **entity** or **profile** to open its details.
- Navigate to the **Alarm rules** tab.
- Click the "**+**" button in the top-right corner.
- Select **Create new alarm rule** from the dropdown menu.

{% include images-gallery.html imageCollection="step-1-add-alarm-rule-2" %}

<hr>

### Step 2. General section

<b><font size="3">2.1 Alarm type</font></b>

In the **General** section, specify the **alarm type** — the name and unique identifier of the alarm (for example, "High Temperature").   
The alarm type defines which event the alarm represents and allows ThingsBoard to determine whether a new alarm should be created or an existing active one should be updated.

<b><font size="3">2.2 Target entity type (<i>only on the global Alarm rules page</i>)</font></b>

If you create an alarm rule from the **global Alarm rules** page, you must additionally:
- Select the **Target entity type** 
- Specify the **specific entity or profile** that the rule should apply to

{% include images-gallery.html imageCollection="step-2-general-section-1" %}

{% assign feature = "alarm rule" %}
{% include templates/debug-mode.md %}

<hr>

### Step 3. Arguments

Before defining alarm conditions, you must add at least one **argument** — a data source that the rule will use during evaluation.

Click **Add argument** and configure the following parameters:

{% include images-gallery.html imageCollection="step-3-arguments-1" %}

<b><font size="3">Entity type</font></b>

Defines where the argument value comes from:
- **Current entity** — the entity you are configuring (device, asset, customer, or profile).   
  If the rule is created at the **Device profile** or **Asset profile** level, it will apply to all entities that use this profile.
- Another **Device or Asset** — references telemetry or attributes from a different device or asset.
- **Customer** — retrieves data from the associated customer entity.
- **Current tenant** — uses data from the tenant entity.
- **Current owner** — data from the owner of the current entity

{% include images-gallery.html imageCollection="step-3-arguments-2" %}

<b><font size="3">Argument type</font></b>

Defines what kind of data the argument will represent:
- **Attribute**. Uses a key–value attribute stored on the entity. (e.g., model, max temperature).   
  You must specify:
  - **Attribute scope**: **Server** attributes, **Client** attributes, or **Shared** attributes
  - **Attribute key**
  - Optional: **Default value** (used when attribute value is missing)
- **Latest telemetry**. Uses the latest time series value from the entity. (e.g., temperature, speed, voltage).
  You must specify:
  - **Time series key**
  - Optional: **Default value**

{% include images-gallery.html imageCollection="step-3-arguments-3" %}

<b><font size="3">Argument name</font></b>

Enter an argument name — the identifier you will use in formulas and conditions (e.g., temperature, maxThreshold, deviceEnabled).

After configuring the fields, click **Add**.

{% include images-gallery.html imageCollection="step-3-arguments-4" %}

<hr>

### Step 4. Trigger conditions

This step defines the core logic of the alarm rule:
- **when** the alarm should be created,
- **which severity** it receives, and
- **when** the rule is active based on the schedule.

Click **Add trigger condition** and configure the following parameters:

{% include images-gallery.html imageCollection="step-4-creation-conditions-1" %}

<hr>

#### Step 4.1 Severity

**Severity** defines the criticality of the alarm at the moment it is created.   
It affects incident prioritization, UI representation, and automation workflows (Rule Engine, notification rules, etc.).

Available severity levels:   
**Critical**, **Major**, **Minor**, **Warning**, **Indeterminate**.

<b><font size="3">How severity works</font></b>

The severity level applies to:
- **New alarms** created by the rule
- **Updates to an existing active alarm**, when the create condition triggers again with different criteria 
  For example, if a *Warning* alarm remains active but the new condition qualifies as *Major*, the severity will be increased.

{% include images-gallery.html imageCollection="step-4-creation-conditions-severity-1" %}

<hr>

#### Step 4.2 Condition

The **Condition** defines the logic that determines whether an alarm should be created or updated.   
This is the primary expression used to evaluate whether the rule is fulfilled.

Examples use cases:
- <span class="code-light">temperature > 30</span>
- <span class="code-light">device is offline</span>
- complex expressions using multiple arguments, telemetry fields, or attributes   
  (e.g., <span class="code-light">temperature > threshold AND doorState == open</span>)

<hr>

<b><font size="3">Add create condition</font></b>

Click **Add condition**

Configure the alarm trigger logic by defining one or more filters.

> You can create filters manually or use [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} script functions for more advanced expressions.

Click **Add argument filter** and configure:

**1. General configuration**   
- **Argument** — the variable you want to compare (e.g., temperature)
- **Value type** — the data type of the value being evaluated (Numeric, Boolean, String, etc.)

**2. Configure filters**   
Under **Filters**, click **Add** and specify:
- **Operation** — the comparison operator, such as: *equal, not equal, missing for, greater than, less than, greater or equal, less or equal, starts with, ends with, contains, not contains, in, not in*ю
- **Value source** — select one of the following:
  - **Static** — use a fixed predefined value 
  - **Dynamic** — use a value retrieved from another argument 
- **Value** — specify the value to compare against

**Combine multiple conditions**   
If you add more than one filter, choose a logical operator:
- **AND** — all conditions must be true
- **OR** — at least one condition must be true

After adding all required filters, click **Add** to save the condition.

{% include images-gallery.html imageCollection="step-4-creation-condition-add-filter-1" %}

<b><font size="3">Condition types</font></b>

ThingsBoard supports **three types** of conditions:

- **Simple.**   
  Triggers immediately when the expression becomes true.   
  Used for instant threshold violations.   
  *Example:* <span class="code-light">temperature > 10</span>
- **Duration.**   
  The condition must stay true continuously for a defined time period.   
  Helps reduce false positives caused by short data spikes.   
  *Example:* <span class="code-light">temperature > 10</span> for 60 seconds 
- **Repeating.**   
  Triggers only after the condition occurs a specified number of times.   
  Useful when repeated errors matter more than a single event.   
  *Example:* <span class="code-light">signalLost == true</span> three times in a row

{% include images-gallery.html imageCollection="step-4-creation-condition-types-1" %}

<hr>

#### Step 4.3 Schedule

The **Schedule** defines the time periods during which the alarm creation rule is active.   
The system evaluates create conditions only when the current time falls within an allowed interval.

> If the create condition becomes true **outside the defined schedule**, the alarm **will not be created** — even if the logical expression evaluates to true.

{% include images-gallery.html imageCollection="step-4-schedule-1" %}

<b><font size="3">Schedule types</font></b>

**Static mode**

ThingsBoard supports three schedule modes:
- **Active all time** — always active
- **Active at a specific time range**
  *Example:* Mon–Fri, 09:00–18:00 
- **Custom schedule** - define different intervals for each day of the week

{% include images-gallery.html imageCollection="step-4-schedule-types-1" %}

**Dynamic mode**

Instead of configuring the schedule manually, you can provide a JSON object through an attribute or telemetry.
This is useful when the schedule needs to vary from one device to another or from one customer to another.

**How to enable dynamic mode**
- In the **Schedule** section, choose **Dynamic mode**.
- Select the argument (attribute or telemetry) that contains the JSON with the desired schedule configuration.

{% include images-gallery.html imageCollection="step-4-schedule-dynamic-mode-1" %}

<b><font size="3">Examples of schedule JSON</font></b>

**1. Active all time**

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
**2. Specific time schedule**

This format allows you to define an exact time range for selected days of the week.

**Example:**   
Active all day on **Tuesday** and **Thursday**:

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
**3. Custom schedule**

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

**Examples of useful additions:**
- operator notes
- troubleshooting steps
- links to documentation
- contextual fields such as:
  - zone ID 
  - critical threshold description 
  - responsible person

<hr>

#### Step 4.5 Mobile dashboard

This option defines which **mobile dashboard** will open in the ThingsBoard mobile app when a user views the alarm.

<b><font size="3">How it works</font></b>

After selecting a mobile dashboard:
- the mobile app automatically opens it when navigating to the alarm 
- the user immediately sees relevant widgets and indicators 
- troubleshooting becomes much faster

<b><font size="3">Example use cases</font></b>

- Diagnostic dashboard for **High Temperature** alarms
- Technician-focused dashboard with control buttons
- Geolocation dashboard for mobile assets

<b><font size="3">Especially useful when:</font></b>
- field engineers respond to alarms on-site
- quick diagnostics is required
- monitoring distributed devices (refrigerators, sensors, vehicles)

<hr>

### Step 5. Clear condition

The **Clear condition** defines the logic by which ThingsBoard automatically transitions an alarm into the **Cleared** state.

If no clear condition is configured, the alarm will **never** clear automatically, even if the monitored values return to normal.   
In such cases, the alarm can only be cleared manually — via the UI or API.

Click **Add clear condition** and configure the following parameters:

{% include images-gallery.html imageCollection="step-5-clear-conditions-1" %}

<br><b><font size="4">Step 5.1 Clear condition</font></b>

The Clear condition specifies **when an alarm is considered resolved** and can safely transition into the *Cleared* state.

**Examples of clear conditions:**
 - <span class="code-light">temperature ≤ 30</span>
- values return to normal ranges 
- device connection restored 
- complex expressions involving multiple arguments

<hr>

<b><font size="3">Add clear condition</font></b>

Click **Add condition** to define the logic for clearing the alarm.

Configure the clear condition by adding one or more filters.   
Filters can be created manually or using TBEL script functions for more advanced scenarios.

**1. General configuration**   
Click **Add argument filter** and specify:
- **Argument** — the variable to evaluate (e.g., temperature)
- **Value type** — the expected input type (Numeric, Boolean, String, etc.)

**2. Configure filters**   
In the **Filters** section, click **Add** and set:
- **Operation** — the comparison operator, for example: *equal, not equal, missing for, greater than, less than, greater or equal, less or equal, starts with, ends with, contains, not contains, in, not in*.
- **Value source:**
  - **Static** — use a fixed value 
  - **Dynamic** — use a value retrieved from another argument
- **Value** — the value to compare against

**Combine multiple conditions**   
If you add more than one filter, choose a logical operator:
- **AND** — all conditions must be true 
- **OR** — at least one condition must be true

After adding all required filters, click **Add** to save the clear condition.

{% include images-gallery.html imageCollection="step-5-clearing-condition-add-filter-1" %}

**Condition types**

ThingsBoard supports the same condition types as for alarm creation:
- **Simple** — clears immediately when the condition becomes true
- **Duration** — must remain true for a specified period before clearing
- **Repeating** — the condition must be satisfied a certain number of times before clearing

{% include images-gallery.html imageCollection="step-5-clearing-condition-types-1" %}

After completing all required configurations, click **Save** to store the clear condition.

<hr>

<b><font size="4">Step 5.2 Schedule</font></b>

The **Clear Schedule** defines *when* a clear condition is allowed to trigger.

**Example use cases:**
- callow automatic clearing only during working hours 
- allow clearing only at night 
- restrict clearing during specific time intervals

> If the clear condition becomes true outside the allowed schedule, the alarm will not be cleared 

{% include images-gallery.html imageCollection="step-5-schedule-1" %}

<hr>

<b><font size="4">Step 5.3 Additional info</font></b>

This block allows you to attach extra data that will be stored in **Alarm Details** at the moment the alarm is cleared.

Useful for:
- keeping a structured event log
- adding operator notes 
- saving additional diagnostic context 
- providing hints for follow-up actions

Supports dynamic placeholders using *${attributeName}*.

<hr>

<b><font size="4">Step 5.4 Mobile dashboard</font></b>

Defines which mobile dashboard is opened in the ThingsBoard mobile app when viewing a cleared alarm.

This is useful when:
- additional diagnostics should be shown after clearance
- the operator must confirm system recovery
- the user needs to be redirected to another scenario or dashboard

<hr>

### Step 6. Configure the Advanced settings

In this step, you can define **alarm propagation** — how the alarm is distributed across other entities in the system.      
Propagation determines **who can see the alarm** and at **which level of the entity hierarchy** it becomes visible.

This is especially important for multi-level asset structures, customer hierarchies, enterprise environments, and MSP deployments.

<hr>

<b><font size="3">Available propagation options</font></b>

<b><font size="3">Propagate alarm to related entities</font></b>

When enabled, the alarm becomes visible to **all entities related** to the originator, regardless of the relation type.

Useful when:
- a **Device** is assigned to an **Asset**
- an **Asset** is linked to a **Customer**
- you want alarms to be visible across interconnected entities

This ensures that all entities within the relation graph—such as *Device → Office → Building* — can view and process the alarm.

{% include images-gallery.html imageCollection="step-6-propagate-alarm-1" %}

<hr>

<b><font size="3">Propagate alarm to the owner (Customer / Tenant)</font></b>

Makes the alarm visible to the **direct owner** of the originator — either a **Customer** or the **Tenant**.

This allows owners to see alarms from all their managed devices/assets **without needing to set up additional relations**.

{% include images-gallery.html imageCollection="step-6-propagate-alarm-2" %}

<hr>

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
<b><font size="3">Propagate alarm to entity owners hierarchy</font></b>

Propagates the alarm **up the entire ownership chain**, ensuring visibility at every parent level:   
**Asset → Customer → Tenant**

**Useful for:**
- **B2B platforms** with nested customer structures
- **MSP (Managed Service Provider)** deployments
- **Large enterprises** with multi-level organizational hierarchies

All higher-level owners will be able to see the alarm, even if they do not have a direct relation to the originator.

{% include images-gallery.html imageCollection="step-6-propagate-alarm-3" %}

<hr>
{% endif %} 

<b><font size="3">Propagate alarm to Tenant</font></b>

Makes the alarm visible **at the Tenant level**, regardless of ownership or relations.

**Use this when:**
- the Tenant Administrator needs visibility into **all critical events**
- a **centralized overview** of the entire infrastructure is required

This is the most global visibility option.

{% include images-gallery.html imageCollection="step-6-propagate-alarm-4" %}

<hr>

### Step 7. Save the rule

Click **Add** to save the rule configuration.

After saving, ThingsBoard will automatically begin creating, updating, and processing alarms according to the conditions, schedule, and propagation settings you defined.

{% include images-gallery.html imageCollection="step-7-save-rule-1" %}

<hr>

## Managing Alarm Rules in the Alarm rules list

After you create an alarm rule, it appears in the table on the **Alarms → Alarm rules** page.    
Here, you can quickly view the key parameters of each rule — alarm type, target entity, severity levels, and whether a clear condition is configured — and manage the rule using a set of available actions.

Each rule row includes an action panel that lets you copy, export, debug, edit, or delete the configuration.

Below is an overview of the available buttons.

1. **Copy alarm rule configuration**. Copies the rule configuration, allowing you to quickly create a new rule based on the existing one.
2. **Export**. Exports the rule as a JSON file for backup or migration to another ThingsBoard instance.
3. **Events**. Opens the event log associated with the rule, including triggers, clears, state changes, and errors.
4. **Debug configuration**. Enables debug mode and provides access to detailed execution information for troubleshooting.
5. **Edit**. Opens the rule editor where you can modify any configuration parameters.
6. **Delete**. Removes the alarm rule from the system.

{% include images-gallery.html imageCollection="alarm-rules-parameters" %}

<hr>

## Import alarm rule

ThingsBoard allows you to import previously exported alarm rules in JSON format. This simplifies configuration migration between instances, rapid deployment of standard alarm templates, and restoration from backups.

<b><font size="3">How to import an Alarm rule</font></b>

- Navigate to **Alarms → Alarm rules**,   
or open the details page of the required device, asset, or profile, and navigate to the **Alarm rules** tab.

- Click the "**+**" button in the upper-right corner. 
- Select **Import alarm rule** from the drop-down menu. 
- In the import dialog, drag and drop the JSON file or choose it manually. 
- Click **Import** to upload the configuration.

<b><font size="3">After importing</font></b>

If required, update the **target profile or entity**.   
Verify that all arguments, telemetry keys, and attributes used by the rule exist in the current environment and update them if necessary.

<b><font size="3">Complete the import</font></b>

Click **Add** to save the rule.   
After saving, the rule becomes active immediately and ThingsBoard starts applying it according to its configured logic.

{% include images-gallery.html imageCollection="import-alarm-rule-1" %}

<hr>

## Examples of alarm rule configurations

To better understand how alarm rules work, let&#39;s review several practical examples. Each example demonstrates a specific scenario, condition type, or alarm rule feature that can be used in real-world projects.

In the scenarios below, we will create alarm rules **directly on a device**.

{% capture difference %}
**Recommendation:** If the same rule should apply to multiple devices, create it at the **Device Profile** level.   
This ensures centralized alarm logic, reduces duplication, and simplifies ongoing maintenance.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<b><font size="3">Preparation</font></b>

For the following examples, you need a device named **Thermometer** that sends **temperature** telemetry.

You can create this device on the **Devices** page under the **Entities** section and assign it to any Device Profile.

{% include images-gallery.html imageCollection="alarm-rules-example-prepare-device-1" %}

<hr>

### Example 1. Simple alarm condition: temperature monitoring

**Scenario:**   
A refrigeration chamber is used to store perishable goods.   
The temperature inside must be continuously monitored to prevent product loss and maintain proper storage conditions.

**Goal:**   
Create a **critical alarm** when the temperature exceeds **10°C**.

<hr>

<b><font size="3">Step 1. Create the alarm rule</font></b>

- Open the **Alarms** page from the left-hand menu.
- Go to the **Alarm rules** tab.
- Click the "**+**" button in the top-right corner.
- Select **Create new alarm rule** from the dropdown menu.

<b><font size="3">Step 2. General section</font></b>

In the **General** section, specify:
- **Alarm type:** *High Temperature*
- Select the **Target entity type** - Device 
- Specify the specific **entity** that the rule should apply to - Thermometer

<b><font size="3">Step 3. Add argument</font></b>

- In the **Arguments** section, click **Add argument** and fill in:
  - **Argument name:** temperature
  - **Entity type:** *Current entity*
  - **Argument type:** *Latest telemetry*
  - **Time series key:** <span class="code-light">temperature</span>
- Click **Add** when finished.

This creates a <span class="code-light">temperature</span> variable that you will use in the rule&#39;s logical condition.

<b><font size="3">Step 4. Configure the trigger condition</font></b>

In the **Trigger condition** section, click **Add trigger condition**.

**Step 4.1 Severity**
- **Severity:** *Critical*

**Step 4.2 Condition**

Click "<b>Add condition</b>".   

In the filter configuration window, click **Add argument filter** and specify:
- **Argument:** <span class="code-light">temperature</span>
- **Value type:** *Numeric*
- **Operation:** *greater than* 
- **Value:** 10
- Click **Add**

**Type:** *Simple*
- Click **Save**

As a result, the alarm will be created immediately once the temperature exceeds **10°C**.

<b><font size="3">Step 5. Save the rule</font></b>

Click **Add** to save the rule.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will automatically create a critical alarm whenever the <span class="code-light">temperature</span> value exceeds **10°C**.

{% include images-gallery.html imageCollection="alarm-rules-example-simple-1" %}

<hr>

### Example 2. Alarm clear condition

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)"*

**Scenario**   
A refrigerator is used to store perishable products. After the critical **High Temperature** alarm is triggered, it must be cleared automatically once the temperature returns to a safe level.

**Goal**   
Update the existing **High Temperature** rule by adding a clear condition that sets the alarm to **Cleared** when the temperature is **≤ 4°C**.

<hr>

<b><font size="3">Step 1. Open the High Temperature rule</font></b>

- In the side menu, go to **Alarm** → **Alarm rules**.
- Find the **High Temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<b><font size="3">Step 2. Configure clear condition</font></b>

Scroll down to the **Clear condition** section:
- Click **Add clear condition**.
- Click "**Add condition**" to open the configuration window.

<b><font size="3">Step 2.1 Add a filter</font></b>

In the configuration window, click **Add argument filter** and specify:
- **Argument:** <span class="code-light">temperature</span>
- **Value type:** *Numeric*
- **Operation:** *less or equal*
- **Value:** 4

This condition defines the moment when the temperature returns to a safe level. Click **Add**

**Type:** *Simple*
- Click **Save**

After this, the alarm will be cleared as soon as the temperature drops to **4°C or below**.

<b><font size="3">Step 3. Save the rule</font></b>

Click **Apply** to save the updated rule.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create a **Critical** — **High Temperature** alarm when the temperature exceeds **10°C**
- automatically clear the alarm when the temperature is **≤ 4°C**

This configuration forms a complete alarm lifecycle, keeps the system state accurate, and eliminates the need for manual intervention.

{% include images-gallery.html imageCollection="alarm-rule-example-clear-condition-1" %}

<hr>

### Example 3. Alarm condition with a duration

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)".*

**Goal:**   
Update the existing **High Temperature** rule so that it triggers only when the temperature exceeds the threshold for a specified duration — for example, **1 minute**.
This mechanism helps avoid false alarms caused by short-term temperature spikes.

<hr>

<b><font size="3">Step 1. Open the High Temperature rule</font></b>

- In the side menu, go to **Alarm** → **Alarm rules**.
- Find the **High Temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<b><font size="3">Step 2. Configure trigger condition</font></b>

Scroll down to the **Trigger condition** section and edit the existing condition:
- **Condition type:** change *Simple* → **Duration**
- **Duration value:** 1
- **Time unit:** *Minutes*
- Click **Save** to apply the updated alarm condition settings.

The alarm will now be triggered only if the temperature exceeds the threshold **continuously for 60 seconds**.

<b><font size="3">Step 3. Save the updated rule</font></b>

Click **Apply** to save the updated rule configuration.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create the **High Temperature** alarm only when the temperature exceeds the threshold for **1 full minute**
- ignore short, random temperature spikes
- provide a more stable alarm system with fewer false alerts

{% include images-gallery.html imageCollection="alarm-rules-example-condition-duration-1" %}

<hr>

### Example 4. Alarm with dynamic duration (based on an attribute value)

*Continuation of the example "[Alarm condition with a duration](#example-3-alarm-condition-with-a-duration)".*

**Scenario**   
You already have a **High Temperature** alarm configured to trigger when the temperature exceeds the threshold for **1 minute**.   
In this example, we extend that logic by making the duration **dynamic** — meaning the duration required to trigger the alarm will be defined by a **server attribute** on the device.

**Goal**   
Update the High Temperature rule so that:
- the alarm is created only when the temperature stays above the critical threshold for the duration specified in the device&#39;s <span class="code-light">highTemperatureDurationThreshold</span> [server attribute](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes){:target="_blank"}
- the duration can be changed without editing the alarm rule — simply by updating the device’s attribute value

<hr>

**Preparation**   
Add a **server attribute** to the **Thermometer** device:
- **Key:** <span class="code-light">highTemperatureDurationThreshold</span>
- **Value type** *Integer*
- **Value:** 2

{% include images-gallery.html imageCollection="alarm-rules-example-condition-with-dynamic-duration-1" %}

This value will be used by the alarm rule as the duration requirement.

<hr>

<b><font size="3">Step 1. Open the High Temperature rule</font></b>

- In the side menu, go to **Alarm** → **Alarm rules**.
- Find the **High Temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<b><font size="3">Step 2. Add argument</font></b>

In the **Arguments** section:
- Click **Add argument**
- Fill in the fields:
  - **Entity type:** *Current entity* 
  - **Argument type:** *Attribute*
  - **Attribute scope:** *Server attributes* 
  - **Attribute key:** <span class="code-light">highTemperatureDurationThreshold</span>
  - **Argument name:** highTemperatureDurationThreshold
- Click **Add**

You now have a dynamic variable that can be used in the **Duration** condition.

<b><font size="3">Step 3. Configure trigger condition</font></b>

Scroll to the **Trigger condition** section and edit the existing condition:
- **Condition type:** *Duration* 
- **Value type:** change *Static* to **Dynamic** 
- **Value:** specify the argument <span class="code-light">highTemperatureDurationThreshold</span>
- **Unit:** *Minutes*
- Click **Save** inside the condition block.

From now on, the duration required to trigger the alarm is determined by the device attribute rather than a fixed number.

<b><font size="3">Step 4. Save the rule</font></b>

Click **Apply** to save the updated configuration.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create a **High Temperature** alarm if the temperature:
  - exceeds the threshold (e.g., >10°C), **and**
  - remains above it for the period defined in the <span class="code-light">highTemperatureDurationThreshold</span> attribute (e.g., 2 minutes)

This ensures the alarm responds only to **sustained deviations**, not to short-term sensor spikes.

{% include images-gallery.html imageCollection="alarm-rules-example-condition-with-dynamic-duration-2" %}

<hr>

### Example 5. Alarm with repeating condition

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)".*

**Goal:**   
Update the **High Temperature** rule so that the alarm is created only when the threshold condition occurs a specified number of times in a row.
This helps filter out random sensor spikes and react only to repeated or consistent deviations.

<hr>

<b><font size="3">Step 1. Open the High Temperature rule</font></b>

- In the side menu, go to **Alarm** → **Alarm rules**.
- Find the **High Temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<b><font size="3">Step 2. Edit the trigger condition</font></b>

Update the existing trigger condition by changing the following parameters:
- **Condition type:** *Repeating*
- **Count of events:** 3   
Click **Save** to apply the changes.

With this configuration, ThingsBoard will check whether the threshold condition occurs **three times in a row** before creating the alarm.

<b><font size="3">Step 3. Save the rule</font></b>

Click **Apply** to save the updated configuration.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard behaves as follows:
- create the **High Temperature** alarm only when the condition is met **3 times in a row**
- Single or random temperature spikes will not trigger an alarm

{% include images-gallery.html imageCollection="alarm-rules-example-condition-repeating-1" %}

<hr>

### Example 6. Define alarm rule schedule

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)".*

**Goal:**   
Update the **High Temperature** rule so that the alarm triggers **only during working hours**.
This is useful when monitoring is required only at certain times—for example, during staff working hours.

<hr>

<b><font size="3">Step 1. Open the High Temperature rule</font></b>

- In the side menu, go to **Alarm** → **Alarm rules**.
- Find the **High Temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

<b><font size="3">Step 2. Configure the alarm rule schedule</font></b>

Scroll to the **Trigger condition** section and open the **Schedule** settings.
- **Select the schedule type:** *Active at a specific time*
- Configure the working hours:
  - **Timezone:** Europe/Kiev (UTC+02:00)
  - **Days**: Monday, Tuesday, Wednesday, Thursday, Friday
  - **Time range:**
    - **From:** 10:00
    - **To:** 19:00
- Click **Save** to apply the schedule configuration.

With this setup, the rule is active **only on weekdays from 10:00 to 19:00**.
Outside this interval, the system will **not** create a **High Temperature** alarm, even if <span class="code-light">temperature > 10°C</span> is true.

<b><font size="3">Step 3. Save the rule</font></b>

Click **Apply** to save the updated configuration.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- activate the **High Temperature** rule only on weekdays **from 10:00 to 19:00**
- ignore temperature threshold violations that occur outside this time window

{% include images-gallery.html imageCollection="alarm-rules-example-schedule-1" showListImageTitles="true" %}

<hr>

### Example 7. Advanced thresholds

*Continuation of the example "[Simple alarm condition: temperature monitoring](#example-1-simple-alarm-condition-temperature-monitoring)".*

**Goal:**   
Update the **High Temperature** rule by adding the ability to enable or disable the alarm using a server attribute at the device level.

In this example, the alarm should trigger **only when both conditions are true**:
1. <span class="code-light">temperatureAlarmFlag == true</span>
2. <span class="code-light">temperature > 10°C</span>

This allows you to flexibly control whether the alarm should be active for a specific device — **without editing the rule**.

<hr>

**Preparation**   
Add a **server attribute** to the **Thermometer** device:
- **Key:** <span class="code-light">temperatureAlarmFlag</span>
- **Type:** Boolean 
- **Value:** `true`

This attribute determines whether the alarm rule is active for the device.

{% include images-gallery.html imageCollection="alarm-rules-example-advanced-thresholds-1" %}

<hr>

<b><font size="3">Step 1. Open the High Temperature alarm rule</font></b>

- In the side menu, go to **Alarm** → **Alarm rules**.
- Find the **High Temperature** rule in the list.
- Click the **Edit** icon (pencil) to open the rule editor.

- <b><font size="3">Step 2. Add an argument</font></b>

In the **Arguments** section:
- Click **Add argument**
- Fill in the fields:
  - **Entity type:** *Current entity* 
  - **Argument type:** *Attribute*
  - **Attribute scope:** *Server attributes*
  - **Attribute key:** <span class="code-light">temperatureAlarmFlag</span>
  - **Argument name:** temperatureAlarmFlag
- Click **Add**

You now have a boolean variable that can be used in the alarm conditions.

<b><font size="3">Step 3. Configure the trigger condition</font></b>

Scroll to the **Trigger condition** section and edit the existing condition.

Add another condition:
- Click **Add argument filter** and configure:
  - **Argument:** <span class="code-light">temperatureAlarmFlag</span>
  - **Value type:** *Boolean* 
  - **Operation:** *equal* 
  - **Value:** `true`
- Click **Add**.

This filter determines whether the alarm is allowed to trigger for the specific device.

<b><font size="3">Step 4. Save the rule</font></b>

Click **Apply** to save the updated configuration.

<hr>

<b><font size="4">Result</font></b>

After saving, ThingsBoard will:
- create the High Temperature alarm only if:
  - <span class="code-light">temperatureAlarmFlag == true</span>, and 
  - the <span class="code-light">temperature</span> exceeds **10°C**
- ignore the rule entirely for this device if temperatureAlarmFlag == false, even when the threshold is exceeded

{% include images-gallery.html imageCollection="alarm-rules-example-advanced-thresholds-2" %}

<hr>

<b><font size="4">Benefits of this approach</font></b>

- You can enable or disable alarms **without editing a rule**
- Each device can have its own alarm activation state 
- Ideal for large projects with varying alerting policies across devices 
- Easy to integrate with dashboards — operators can toggle the alarm using a simple switch

<hr>

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.