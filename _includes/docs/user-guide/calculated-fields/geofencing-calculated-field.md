* TOC
{:toc}

The **Geofencing** Calculated Field allows you to monitor entity movement in real-time without complex rule chains. 
It allows you to abstract complex spatial logic into a simple configuration, automatically monitoring whether an entity 
(such as a vehicle or container) is located within specific areas like restricted zones, parking lots, or operational boundaries.

<hr>

## Why use the Geofencing Calculated Field?

Before this feature, GPS geofencing in ThingsBoard was typically implemented using Rule Engine nodes. While this approach works for basic checks, the [GPS Geofencing Events](/docs/user-guide/rule-engine-2-0/nodes/action/gps-geofencing-events/){:target="_blank"} node has an important architectural limitation related to state storage.

**Limitation of the GPS Geofencing Events node**   
- **Single-state storage per entity** The node stores the geofencing state (INSIDE/OUTSIDE) using a fixed internal key associated with the Rule Engine service processing the node. In practice, this means it maintains **only one geofencing state record per entity**.
- **Why this is a problem:** Because the state is shared, you cannot reliably track multiple independent zones at the same time (for example, _Safe Zone_ and _Restricted Zone_). If you check Zone A and then Zone B, the node overwrites the same state record. This causes the status to flip between zones and can generate false **ENTERED/LEFT** events.

**How the Geofencing calculated field solves this**   
The Geofencing calculated field introduces **Zone Groups**, which eliminate state conflicts and improve scalability:
- **Independent state management per zone group**. The calculated field maintains a separate INSIDE/OUTSIDE state for each zone group. This makes it possible to track multiple zone categories simultaneously (for example, a device can be INSIDE _safeArea_ while being OUTSIDE _restrictedArea_) without overwriting state or producing incorrect transitions.
- **Logical zone grouping (prevents false transitions)**. When zones are discovered via Related entities, multiple physical polygons can be treated as one logical group. If a device moves between adjacent zones within the same group (for example, between two _Restricted_ polygons), the field preserves a continuous INSIDE status and avoids generating false ENTERED/LEFT events.
- **Alarm-ready output**. For each zone group, the field produces standardized telemetry keys (**Status** and **Event**) that can be used directly in [Alarm Rules](https://thingsboard.io/docs/pe/user-guide/alarm-rules/){:target="_blank"}. This reduces or eliminates the need for complex rule chain logic for geofencing-based alarms and notifications.

<hr>

## Configuration

Define the entity coordinates, configure zone groups with their perimeter sources and reporting strategies.

### General

{% assign calculatedFieldType = "Select the **Geofencing** calculated field type — it evaluates real-time GPS coordinates against configured zone groups to track entity presence and detect transition events."%} 
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Entity coordinates

This section defines the **input data** used for geofencing. Map the incoming telemetry keys that represent the entity&#39;s GPS position.

<b><font size="3">Latitude / Longitude</font></b>   
Enter the exact time series key names (for example, _latitude / longitude_ or _lat / lng_).

> **Requirement:** Values must be numeric. If either coordinate is missing or invalid, the calculation is skipped.

{% assign geofencingEntityCoordinates = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-entity-coordinates-1-ce.png
        title: Specifies the input data for the calculation. You must map the timeseries keys from the incoming telemetry that represent the entity&#39;s GPS location.
'
%}

{% include images-gallery.liquid imageCollection=geofencingEntityCoordinates %}

<hr>

### Geofencing zone groups

A **zone group** is a logical container that bundles one or more physical geofencing zones (for example, _Parking, Restricted, Loading_) into a single, aggregated evaluation.

The calculated field checks all zones within the group and determines the entity&#39;s state:
- **INSIDE** - the entity is located inside **at least one** zone in the group.
- **OUTSIDE** - the entity is not located inside **any** zone in the group.

Click **Add zone group** to create a new group.

{% assign geofencingZoneGroupsAdd = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-zone-groups-add-1-ce.png
        title: A zone group is a logical category that bundles one or more physical zones (e.g., "Parking", "Restricted", "Loading") into an aggregated status check. The field evaluates all zones in the group to determine the entity’s position.<br>Click **Add zone group** to configure a new group.
'
%}

{% include images-gallery.liquid imageCollection=geofencingZoneGroupsAdd %}

<br>
In the zone group configuration dialog, configure the following settings:

<hr>

#### Name

The zone group **Name** is used as a prefix for the generated geofencing telemetry keys (for example, Name + `Status` and Name + `Event`).

We recommend using **camelCase** (e.g., _restrictedArea_ instead of _Restricted Area_) to keep output keys consistent and easy to use in dashboards, widgets, and rules (for example, `restrictedAreaStatus`, `restrictedAreaEvent`).

{% assign geofencingZoneGroupsName = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-zone-groups-name-1-ce.png
        title: The zone group **Name** is used as a prefix for the generated geofencing telemetry keys (for example, **Name** + **Status** and **Name** + **Event**).
'
%}

{% include images-gallery.liquid imageCollection=geofencingZoneGroupsName %}

<hr>

#### Entity type

When configuring a zone group, you must specify where the **zone perimeter definitions** (polygons/circles) are stored. This is controlled by the **Entity type** (source) setting:
- **Current entity** - the current entity to which the calculated field is applied.   
  If the field is created at the **Device profile** or **Asset profile** level, the calculation is performed for each entity associated with that profile.
- Another **Device** or **Asset** — another entity from which data is read.
- **Customer** — the associated customer.
- **Current tenant** — the current tenant.
- **Current owner** — the owner of the current entity.

> ⚠️ Note on static sources   
You can select a specific **Device**, **Asset**, or **Customer**, but this is generally not recommended for production. It hardcodes a single entity reference, reduces reusability across tenants/customers, and often requires manual updates when environments change.

{% assign geofencingZoneGroupsEntityType = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-zone-groups-entity-type-1-ce.png
        title: When you configure a group, the system needs to know where the zone definitions (the polygons) are stored. This is determined by the Entity Type (Source) setting.
'
%}

{% include images-gallery.liquid imageCollection=geofencingZoneGroupsEntityType %}

<br><b><font size="3">Tips</font></b>

To choose the correct source, consider the following common patterns:

**1) Self-geofencing (each entity has its own zone)**

**Question:** Does each tracker have a unique zone stored on itself (e.g., a personal Home Zone)?   
**Answer:** Yes.   
**Action:** Select **Current entity**.   
**How it works:** The calculated field reads the perimeter attribute directly from the entity where the field is applied. This is ideal for device-specific zones such as _Home_ or custom _Safe Areas_.

<br>
**2) Dynamic zone lists (zones added/removed via relations)**

**Question:** Will the zone group contain multiple zones, or will zones change dynamically over time?
**Answer:** Yes.
**Action:** Select **Related entities** and configure a [Path from the entity to the zone](#path-from-entity-to-zones).
**How it works:** The calculated field discovers zones by traversing the configured relation path starting from the source entity. The path can include multiple steps and directions (UP/DOWN), allowing you to reach zone assets through hierarchy relations.

**Example path:**   
**-** Go **UP** from _Vehicle_ to _Fleet_ using relation type _FleetToVehicle_   
**-** Then go **DOWN** from _Fleet_ to _Zone_ using relation type _FleetToRestrictedZone_

**Best practice:**   
This approach scales best. You can store all geometries in a single **Zone asset profile** and use relation types (e.g., _FleetToParking_, _FleetToRestricted_) to build multiple logical zone groups without duplicating configuration.

<br>
**3) Organization-level zones (inherited from Tenant/Owner)**

**Question:** Is the zone defined at an organizational level for an entire hierarchy (e.g., per Tenant or per Customer/Owner)?   
**Answer:** Yes.   
**Action:** Select **Current tenant** or **Current owner**.   
**How it works**: The calculated field retrieves the perimeter attribute from the Tenant or Customer that owns the entity. The device effectively inherits a zone defined at the business level.

**Best practice:**   
This is ideal for high-level policies. For example, in a multi-customer solution, each Customer can define its own global _Service Area_ polygon, and all devices under that customer automatically apply it without per-device configuration.

<hr>

#### Path from Entity to Zones

<table style="width:auto">
   <thead>
     <tr>
	 <td style="text-align: center"><b><em>* only for the "Related Entities" entity type</em></b></td>
     </tr>
   </thead>
</table> 

This section defines the precise "road map" the system follows to find the zone entities.
The path starts from the **source entity** (the Device or Asset running this Calculated Field) and follows the relations you specify.

<b><font size="3">Level</font></b>   
The sequence number indicating the depth of the relation step.
> **⚠️ Note:** The minimum level is 1. The maximum allowed depth is determined by the "Maximum relation level per 'Related entities' argument" in your Tenant Profile configuration.

<b><font size="3">Direction</font></b>   
- **Up:** Looks for parent entities (e.g., from Device up to Fleet).
- **Down:** Looks for child entities (e.g., from Fleet down to Zone).

<b><font size="3">Relation type</font></b>   
The specific connection name to follow for each step (e.g., "FleetToVehicle", "FleetToRestrictedZone", "FleetToNoParkingZone").

> **💡 Configuration flexibility:** You are not restricted to a specific topology.
> You can configure a single-level path (e.g., just one Up step if the zone is directly related to the source entity)
> or a complex multi-level path (mixing Up and Down) depending on your entities hierarchy.

<b><font size="4">Example configuration</font></b>   
To find zones for a vehicle (Source Entity) that belongs to a fleet:
- **Level 1:** Direction: "Up", Relation type: VehicleToFleet (Finds the Fleet).
- **Level 2:** Direction: "Down", Relation type: "FleetToRestrictedZone" (Finds all zone entities linked to that Fleet with the "FleetToRestrictedZone" relation type).

{% assign geofencingPathFromEntityToZones = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-path-from-entity-to-zones-1-ce.png
        title: This section defines the precise "road map" the system follows to find the zone entities.<br>The path starts from the **Source Entity** (the Device or Asset running this Calculated Field) and follows the relations you specify.
'
%}

{% include images-gallery.liquid imageCollection=geofencingPathFromEntityToZones %}

<hr>

#### Perimeter attribute key

Specify the name of the **server-side attribute key** (on the selected source entity) that stores the zone geometry. Both [polygons](/docs/user-guide/widgets/map-widgets/#polygon){:target="_blank"} and [circles](/docs/user-guide/widgets/map-widgets/#circle){:target="_blank"} are supported.

> **Requirement:** The attribute value must be a valid **JSON object** that defines the zone boundaries.

{% assign geofencingZoneGroupsPerimeterAttributeKey = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-zone-groups-perimeter-attribute-key-1-ce.png
        title: Specify the name of the **server-side attribute key** (on the selected source entity) that stores the zone geometry.
'
%}

{% include images-gallery.liquid imageCollection=geofencingZoneGroupsPerimeterAttributeKey %}

<hr>

#### Report strategy

This setting controls which telemetry the calculated field generates for the zone group. Choose the option that best matches your monitoring requirements:

<b><font size="3">Transition events only</font></b>   
**- Output:** Generates only transition events (**ENTERED / LEFT**) when the status changes.   
**- Best for:** Event-driven workflows and minimal storage. Use this when you only care about boundary crossings (for example, counting how many times a vehicle entered a site).

<b><font size="3">Presence status only</font></b>   
**- Output:** Generates only the current status (**INSIDE / OUTSIDE**).   
**- Best for:** Simple state monitoring. Use this when you only need the current location state (for example, "Is the truck in the garage?") without keeping an event history.

<b><font size="3">Presence status and transition events</font></b>   
**- Output:** Generates both status (**INSIDE / OUTSIDE**) and transition events (**ENTERED / LEFT**).   
**- Best for:** Full monitoring and automation. This option supports dashboards (current state) and real-time alerts/notifications based on entry/exit events.

{% assign geofencingZoneGroupsReportStrategy = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-zone-report-strategy-1-ce.png
        title: This setting controls what telemetry data the calculated field generates for the group.
'
%}

{% include images-gallery.liquid imageCollection=geofencingZoneGroupsReportStrategy %}

<hr>

#### Create relations with matched zones

<table style="width:auto">
   <thead>
     <tr>
	 <td style="text-align: center"><b><em>* only for the "Related entities" entity type</em></b></td>
     </tr>
   </thead>
</table> 

This option is disabled by default. When enabled, the calculated field automatically creates and maintains relations between the **Source Entity** and each **Zone Entity** the source is currently inside.

**Lifecycle:**   
Relations are managed dynamically based on movement:
- **On Enter:** A relation is created immediately when the entity enters a zone.
- **On Leave:** The relation is removed immediately when the entity leaves the zone.

<b><font size="4">Configuration</font></b>

<b><font size="3">Relation direction:</font></b>   
- **From zone to entity** — the Zone is treated as the parent, and the Source Entity as the child.
- **From entity to zone** — the Source Entity is treated as the parent, and the Zone as the child.

<b><font size="3">Relation type</font></b>   
Defines the relation type name to create (for example, <span class="code-light">currentlyInside</span>).

<b><font size="4">Use case</font></b>   
This feature is especially useful for dashboards and real-time monitoring scenarios where you need to identify which entities are currently located inside a specific zone.

<b><font size="3">Example:</font></b>   
Query the _Parking Area_ asset to list all _Vehicle_ entities that currently have a <span class="code-light">currentlyInside</span> relation to it.

{% assign geofencingCreateRelationsWithMatchedZones = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-create-relations-with-matched-zones-1-ce.png
        title: This feature is disabled by default. When enabled, the calculated field automatically creates relations between your Source Entity and the specific Zone Entity it is currently inside.
'
%}

{% include images-gallery.liquid imageCollection=geofencingCreateRelationsWithMatchedZones %}

<hr>

#### Zone groups refresh interval

<table style="width:auto">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>* available when at least one group uses "Related entities" entity type</em></strong></td>
     </tr>
   </thead>
</table> 

This setting controls how often ThingsBoard refreshes the cached list of dynamically discovered zones. Adjust it to balance **zone assignment freshness** against **database and system load**.

<b><font size="3">Function</font></b>   
Defines how long the system waits before re-checking the database for updates in zone relations (for example, when a device is reassigned to a different fleet, and therefore should use a different set of zones).

<b><font size="3">Configuration</font></b>
- **Disabled:** Zone relations are fetched once and never refreshed. Use this only when entity relations are permanent and will not change at runtime (for example, static infrastructure).
- **Enabled:** Zone relations are refreshed periodically based on the configured interval (in seconds).
  > **⚠️ Note:** The minimum allowed value is controlled by the Tenant Profile parameter **"Min allowed update interval for 'Related entities' arguments"**.

<b><font size="3">Tuning guidelines</font></b>
- **Low interval (e.g., 60s):** Recommended when zone relations change dynamically. The system detects reassignment sooner and applies the latest zones with minimal delay.
- **High interval (e.g., 3600s):** Recommended when relations rarely change. This reduces database load by caching relations longer and improves overall performance.

{% assign geofencingOutput = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-zone-groups-refresh-interval-1-ce.png
        title: This setting controls how frequently the system updates the cache for dynamically found zones. You can disable, increase, or decrease this interval to balance data freshness against system performance.
'
%}

{% include images-gallery.liquid imageCollection=geofencingOutput %}

<hr>

### Output

The Geofencing calculated field generates internal variables based on your **Zone Group names** and the selected [Report strategy](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=timeSeriesRolling#output-strategy){:target="_blank"}.   
In the Output section, you map these generated variables to final output keys stored as [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.

**Generated variables naming convention:**

For each zone group, ThingsBoard automatically produces variables using this pattern:
- <span class="code-light">&lt;zoneGroupName&gt;Status</span>
- <span class="code-light">&lt;zoneGroupName&gt;Event</span>

Example for a group named **restrictedArea**:

**restrictedAreaStatus**
- Values: **INSIDE**, **OUTSIDE**
- Generated when: the report strategy includes **Presence status**

**restrictedAreaEvent**
- Values: **ENTERED**, **LEFT**
- Generated when: a transition occurs **and** the report strategy includes **Transition events**

{% assign geofencingOutput = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-output-1-ce.png
        title: The **Geofencing** calculated field generates internal variables based on your **Zone Group Names** and the selected **Report strategy**. In this section, you map those variables to final output keys stored as **Telemetry (Time series)**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-output-2-ce.png
        title: The **Geofencing** calculated field generates internal variables based on your **Zone Group Names** and the selected **Report strategy**. In this section, you map those variables to final output keys stored as **Attributes**.
'
%}

{% include images-gallery.liquid imageCollection=geofencingOutput %}

<br><b><font size="3">Best practice: store outputs as Time series</font></b>   
Mapping geofencing outputs to **Time series** provides the most flexibility for dashboards, analytics, and alarms.

**Status variable:**
- Dashboards: ideal for showing current state (for example, LED widgets, map marker color)
- Alarms: useful for duration-based rules (for example, trigger if <span class="code-light">restrictedAreaStatus</span> = **INSIDE** for more than 15 minutes)

**Event variable:**
- Dashboards: good for displaying historical entry/exit activity (charts, event tables)
- Alarms: best for instant triggers (for example, trigger immediately when <span class="code-light">restrictedAreaEvent</span> = **ENTERED**)

<hr>

## Usage Examples

To help you get started, here are three common configuration patterns applied to real-world scenarios.

### Example 1: Pet Tracker (Self-Geofencing)

<b><font size="4">Scenario</font></b>   
You are building a pet tracking solution where each dog collar has its own **home zone** defined by the owner (for example, a **40-meter radius** around their house). The tracker continuously sends GPS coordinates to ThingsBoard as telemetry.

Each dog has a unique zone (e.g., Buddy and Rex live in different locations), so the geofence geometry must be stored on the device itself.

<b><font size="4">Goal</font></b>   
Detect when the dog leaves its safe zone and generate:
- the current presence status (INSIDE / OUTSIDE)
- transition events (ENTERED / LEFT)

<b><font size="4">Calculated field configuration</font></b>   
[Click to download the "Pet Tracker" calculated field configuration](/docs/user-guide/resources/calculated-fields/geofencing/pets-tracking-dashboard.json){:target="_blank" download="pets-tracking-dashboard.json"}.

{% assign petTrackingUsageExample = '
    ===
       image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/pet-tracking-example-1.png
       title: You are building a pet tracking solution. Each dog collar has a unique “Home Zone” defined by the owner (e.g., a 40-meter radius around their specific house).'
%}

{% include images-gallery.liquid imageCollection=petTrackingUsageExample %}

<hr>

<b><font size="4">Configuration</font></b>

<b><font size="3">1. Import demo devices</font></b>   
Import **two devices** — each device represents a tracker built into a dog collar. These devices will publish GPS coordinates as telemetry and a server-side safeZone attribute that contains the home zone coordinates in the form of a circle.
- [Download the CSV file](/docs/user-guide/resources/calculated-fields/geofencing/pets-tracking-device-data.csv){:target="_blank" download="pets-tracking-device-data.csv"} containing device configurations.
- Go to the **Devices** page and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file into your ThingsBoard instance:
  - **CSV file:** pets-tracking-device-data.csv
  - **CSV delimiter:** <b><span class="code-light">;</span></b>
  - **Columns type:**
    - **Name:** Buddy
    - **Type:** pet-tracking
    - **Time series:** latitude
    - **Time series:** longitude
    - **Server attribute:** safeZone

> **Important notes about the CSV:**
- The CSV delimiter must be <b><span class="code-light">;</span></b>.
- **latitude** and **longitude** are **time series** keys that define the dog&#39;s current coordinates.
- **safeZone** is a **server-side attribute** that defines the zone perimeter as a circle.

{% assign geofencingExample1 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-1-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-2-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-3-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-4-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=geofencingExample1 %}

<hr>

<b><font size="3">2. Apply the calculated field to the device profile</font></b>   
When importing the devices, a new [device profile](/docs/user-guide/device-profiles/){:target="_blank"} is created automatically and assigned to them. 
You need to configure the Geofencing calculated field on this profile so it runs for every tracker using it.
- [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/geofencing/pets-tracking-example-geofencing-cf.json){:target="_blank" download="pets-tracking-example-geofencing-cf.json"}.
- Open the "pet-tracking" device profile details page.
- Navigate to the **Calculated fields** tab.
- [Import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the calculated field configuration into the profile.

This calculated field will evaluate whether each dog is inside its own **safeZone**, and will generate the status and transition telemetry accordingly.

{% assign geofencingExample2 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-5-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-6-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-7-ce.png
        title: Check the debug events by clicking the "Events" icon button".
'
%}

{% include images-gallery.liquid imageCollection=geofencingExample2 %}

<hr>

<b><font size="3">3. Import the dashboard</font></b>   
Import the dashboard for real-time device monitoring.
- [Download the dashboard configuration file](/docs/user-guide/resources/calculated-fields/geofencing/pets-tracking-dashboard.json){:target="_blank" download="pets-tracking-dashboard.json"}.
- Go to the **Dashboards** page and [import](/docs/pe/user-guide/dashboards/#import-dashboard/){:target="_blank"} the JSON file with dashboard configuration into your ThingsBoard instance.

The dashboard includes:
- a **Map widget** showing the current position of each dog
- an **Attributes card widget** showing:
  - current presence state (**INSIDE / OUTSIDE**)
  - the last transition event (**ENTERED / LEFT**)

{% assign geofencingExample3 = '
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-10-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=geofencingExample3 %}

<hr>

<b><font size="4">Result</font></b>

As you move the dogs&#39; markers outside of or back into the home zone, the Pets widget is automatically updated with:
- Current presence status
- Last transition event

This confirms that self-geofencing is working correctly for each device.

{% assign geofencingExample4 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-11-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-12-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-13-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-14-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=geofencingExample4 %}

<hr>

### Example 2: Warehouse Equipment (Direct Association)

<b><font size="4">Scenario</font></b>   
You manage a large distribution center. You have **two forklifts**, and each forklift is assigned to an asset: **Warehouse Building A**.

Each forklift is equipped with a tracker that continuously publishes GPS coordinates to ThingsBoard as telemetry.

<b><font size="4">Goal</font></b>   
Detect when a forklift leaves the perimeter of its assigned building, and generate:
- the current presence status (**INSIDE / OUTSIDE**)
- transition events (**ENTERED / LEFT**)

<b><font size="4">Calculated field configuration</font></b>   
[Click to download the "Warehouse Equipment" calculated field configuration](/docs/user-guide/resources/calculated-fields/geofencing/warehouse-equipment-example-geofencing-cf.json){:target="_blank" download="warehouse-equipment-example-geofencing-cf.json"}.

{% assign warehouseEquipmentExample1 = '    
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/warehouse-equipment-example-2.png
        title: You manage a large distribution center. You have 2 forklifts, and each forklift is assigned to a specific “Warehouse Building” asset.'
%}

{% include images-gallery.liquid imageCollection=warehouseEquipmentExample1 %}

<hr>

<b><font size="4">Configuration</font></b>

<b><font size="3">1. Import demo devices</font></b>   
Import **two devices** — each device represents a tracker installed in a forklift. The devices publish GPS coordinates as telemetry.
- [Download the CSV file](/docs/user-guide/resources/calculated-fields/geofencing/warehouse-equipment-example-devices-data.csv){:target="_blank" download="warehouse-equipment-example-devices-data.csv"} containing device configurations.
- Go to the **Devices** page and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file into your ThingsBoard instance:
  - **CSV file:** warehouse-equipment-example-devices-data.csv
  - **CSV delimiter:** <b><span class="code-light">;</span></b>
  - **Columns type:** 
    - **Name:** Forklift A
    - **Type:** forklift
    - **Time series:** latitude
    - **Time series:** longitude

> **Important notes about the CSV:**
- The CSV delimiter must be <b><span class="code-light">;</span></b>.
- **latitude** and **longitude** are time series keys that define the forklift&#39;s current coordinates

{% assign warehouseEquipmentExample2 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-13-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-2-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-14-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-15-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=warehouseEquipmentExample2 %}

<hr>

<b><font size="3">2. Import demo asset (Warehouse Building A)</font></b>   

- [Download the CSV file](/docs/user-guide/resources/calculated-fields/geofencing/warehouse-equipment-example-asset-data.csv){:target="_blank" download="warehouse-equipment-example-asset-data.csv"} containing the asset configuration.
- Go to the **Assets** page and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file into your ThingsBoard instance:
  - **CSV file:** warehouse-equipment-example-asset-data.csv
  - **CSV delimiter:** <b><span class="code-light">;</span></b>
  - **Columns type:**
    - **Name:** Warehouse A 
    - **Type:** warehouse
    - **Server attribute:** perimeter

> **Important notes about the CSV:**
- The CSV delimiter must be <b><span class="code-light">;</span></b>.
- <span class="code-light">perimeter</span> is a **server-side attribute** that contains the perimeter geometry of the **Warehouse Building A** asset.

{% assign warehouseEquipmentExample3 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-16-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-17-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-18-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-19-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=warehouseEquipmentExample3 %}

<hr>

<b><font size="3">3. Create relations between the asset and devices</font></b>

Create a relationship between the **Warehouse Building A** asset and the **Forklift A** and **Forklift B** devices:
- Relation direction: **From**
- Relation type: **Contains**

This relation is used by the calculated field to resolve the assigned building zone for each forklift.

{% assign warehouseEquipmentExample4 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-20-ce.png
        title: Check the debug events by clicking the "Events" icon button".
'
%}

{% include images-gallery.liquid imageCollection=warehouseEquipmentExample4 %}

<hr>

<b><font size="3">4. Apply the calculated field to the device profile</font></b>   
When importing the devices, a new [device profile](/docs/user-guide/device-profiles/){:target="_blank"} is created automatically and assigned to them. 
Configure the **Geofencing** **calculated field** on this profile so it runs for every forklift tracker.
- [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/geofencing/warehouse-equipment-example-geofencing-cf.json){:target="_blank" download="warehouse-equipment-example-geofencing-cf.json"}.
- Open the "forklift" device profile details page.
- Navigate to the **Calculated fields** tab.
- [Import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the calculated field configuration into the profile.

This calculated field checks whether each forklift is located inside the perimeter of Warehouse Building A, and generates the corresponding presence status and transition telemetry.

{% assign warehouseEquipmentExample5 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-21-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-22-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-23-ce.png
        title: Check the debug events by clicking the "Events" icon button".
'
%}

{% include images-gallery.liquid imageCollection=warehouseEquipmentExample5 %}

<hr>

<b><font size="3">5. Import the dashboard</font></b>   
Import the dashboard to monitor forklifts in real time.
- [Download the dashboard configuration file](/docs/user-guide/resources/calculated-fields/geofencing/warehouse_equipment_tracking_dashboard.json){:target="_blank" download="warehouse_equipment_tracking_dashboard.json"}.
- Go to the **Dashboards** page and [import](/docs/pe/user-guide/dashboards/#import-dashboard/){:target="_blank"} the JSON file with dashboard configuration into your ThingsBoard instance.

The dashboard includes:
- a **Map widget** showing the current position of each fork lift
- an **Attributes card widget** showing:
    - current presence state (**INSIDE / OUTSIDE**)
    - the last transition event (**ENTERED / LEFT**)

{% assign warehouseEquipmentExample6 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-24-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=warehouseEquipmentExample6 %}

<hr>

<b><font size="4">Result</font></b>

As you move the forklifts&#39; markers outside of or back into the perimeter of **Warehouse Building A**, the **Forklifts** widget is automatically updated with:
- Current presence status
- Last transition event

This confirms that geofencing based on a direct device-to-asset association is working correctly.

{% assign geofencingExample4 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-25-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-26-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-27-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/geofencing-cf-example-28-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=geofencingExample4 %}

- **Configuration:**
    - **Entity Type:** "Related entities"
    - **Path:**
        - _Level 1:_ Direction "Up", Relation type "Contains" (Finds the Warehouse that contains this forklift).
- **Why this fits:** You don't need to draw the warehouse polygon 2 times. You draw it once on the "Warehouse Asset," and all contained forklifts automatically inherit it.

<hr>

### Example 3: Complex Fleet Management (Multiple Zone Types)

<b><font size="4">Scenario</font></b>   
A logistics company manages a fleet of trucks. Each fleet must comply with complex rules involving multiple different types of areas simultaneously.

{% assign complexFleetManagementExample = '    
    ===
       image: https://img.thingsboard.io/user-guide/calculated-fields/geofencing/complex-fleet-management-example-3.png
       title: A logistics company manages a fleet of trucks. Each fleet must comply with complex rules involving multiple different types of areas simultaneously.'
%}

{% include images-gallery.liquid imageCollection=complexFleetManagementExample %}

- **Goal:** Monitor three distinct conditions for the same truck at the same time:
  1.  **Allowed:** Is the truck inside its designated "Service Zone"? (e.g., The main delivery district).
  2.  **Restricted:** Did the truck enter a "No-Go Zone"? (e.g., A restricted facility or hazardous area located elsewhere).

- **Configuration:** You would add **two separate zone groups** inside the same calculated field. Note that they both start by going **Up** to find the Fleet, then **Down** to find the specific zones.

  1.  **"serviceArea" group path:** Up to Fleet (Contains) → Down to Zone (FleetToAllowedZone).
  2.  **"restrictedArea" group path:** Up to Fleet (Contains) → Down to Zone (FleetToRestrictedZone).

> **💡 Visualization Note:** In this demo, the Zone assets include a "zoneType" server attribute ("allowed" or "restricted"). 
> This is used solely for simple color-coding on the Map Widget (Green vs. Red).
> The Calculated Field logic does not use this attribute; it relies entirely on the Relation Type (FleetToAllowedZone vs FleetToRestrictedZone).

- **Why this fits:**
  - **Logic abstraction:** You can effectively "tag" a zone as Restricted or Allowed just by changing the relation type, and the trucks automatically apply the correct logic.
  - **Centralized Scalability:** You can add a new restricted zone to the Fleet asset once, and hundreds of trucks will immediately begin avoiding it—no device-level updates required.
  - **Dynamic Context:** If a truck is transferred to a different fleet, it automatically stops using the old zones and inherits the new fleet's boundaries instantly.

- [complex-fleet-management-example-assets-data.csv](/docs/user-guide/resources/calculated-fields/geofencing/complex-fleet-management-example-assets-data.csv){:target="_blank" download="complex-fleet-management-example-assets-data.csv"}
- [complex-fleet-management-example-devices-data.csv](/docs/user-guide/resources/calculated-fields/geofencing/complex-fleet-management-example-devices-data.csv){:target="_blank" download="complex-fleet-management-example-devices-data.csv"}
- [complex-fleet-management-example-fleet-asset-profile.json](/docs/user-guide/resources/calculated-fields/geofencing/complex-fleet-management-example-fleet-asset-profile.json){:target="_blank" download="complex-fleet-management-example-fleet-asset-profile.json"}
- [complex-fleet-management-example-geofencing-cf.json](/docs/user-guide/resources/calculated-fields/geofencing/complex-fleet-management-example-geofencing-cf.json){:target="_blank" download="complex-fleet-management-example-geofencing-cf.json"}
- [complex-fleet-management-example-truck-device-profile.json](/docs/user-guide/resources/calculated-fields/geofencing/complex-fleet-management-example-truck-device-profile.json){:target="_blank" download="complex-fleet-management-example-truck-device-profile.json"}
- [complex-fleet-management-example-zone-asset-profile.json](/docs/user-guide/resources/calculated-fields/geofencing/complex-fleet-management-example-zone-asset-profile.json){:target="_blank" download="complex-fleet-management-example-zone-asset-profile.json"}
- [complex-fleet-management-tracking-dashboard.json](/docs/user-guide/resources/calculated-fields/geofencing/complex-fleet-management-tracking-dashboard.json){:target="_blank" download="complex-fleet-management-tracking-dashboard.json"}


<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.