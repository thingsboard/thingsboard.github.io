* TOC
{:toc}

The **Geofencing** Calculated Field allows you to monitor entity movement in real-time without complex rule chains. 
It allows you to abstract complex spatial logic into a simple configuration, automatically monitoring whether an entity 
(such as a vehicle or container) is located within specific areas like restricted zones, parking lots, or operational boundaries.

<hr>

## Why use the Geofencing Calculated Field?

Prior to this feature, GPS geofencing in ThingsBoard was primarily handled using Rule Nodes.
While powerful for simple checks, the [GPS Geofencing Events](/docs/user-guide/rule-engine-2-0/nodes/action/gps-geofencing-events/) 
node has a critical architectural limitation regarding state management:

- **Single State Limitation:** node persists an entity's geofencing state (Inside/Outside) using a fixed key tied to the Rule Engine service that processing the node. It effectively maintains only one state record per entity.
- **The Conflict:** because the state is shared, you cannot track multiple distinct zones (e.g., "Safe Zone" and "Restricted Zone") simultaneously. Checking against Zone A and then Zone B would overwrite the single state record, causing the status to flip back and forth and triggering false "Entered" or "Left" events.

The **Geofencing Calculated Field** solves this by introducing **Zone Groups:**

- **Independent State Management:** the calculated field maintains a separate state for every configured zone group. This allows you to track if a device is "INSIDE" a "Safe Zone" while simultaneously being "OUTSIDE" a "Restricted Area" without any conflict.
- **Zone Grouping:** when using related entities as zone sources, it can treat multiple physical polygons as a single logical group. If a device moves between two adjacent zones of the same type (e.g., "Restricted" areas), the field maintains a continuous "INSIDE" status, preventing false transition events.
- **Alarm-Ready Output:** The field produces standardized telemetry (`Status` and `Event` values) per each group that can be passed directly into **Alarm Rules**, eliminating the need for complex rule chain logic to trigger alarms.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Configuration

Define the entity coordinates, configure zone groups with their perimeter sources and reporting strategies.

### General

{% assign calculatedFieldType = "Select the Geofencing calculated field type — it evaluates real-time GPS coordinates against configured zone groups to track entity presence and detect transition events."%} 
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Entity coordinates

Specifies the input data for the calculation. You must map the timeseries keys from the incoming telemetry that represent the entity's GPS location.

- **Latitude / Longitude:** Enter the specific key names (e.g., "latitude" and "longitude" or "lat", "lng").
- **Requirement:** The values must be numeric. If coordinates are missing or invalid, the calculation will be skipped.

<hr>

### Zone Groups

A zone group is a logical category that bundles one or more physical zones (e.g., "Parking", "Restricted", "Loading") into an aggregated status check. The field evaluates all zones in the group to determine the entity's position:

- "INSIDE": If the entity is present in any of the zones within the group.
- "OUTSIDE": If the entity is not present in any of them.

Click "Add zone group" to configure a new group. In the zone group configuration window, specify the following settings:

#### Name

The zone group name is used as a prefix for the generated geofencing telemetry (e.g., Name + `Status` and Name + `Event`). 
We recommend using camelCase (e.g., restrictedArea instead of Restricted Area) to ensure your output keys are clean and easy to use (e.g., `restrictedAreaStatus`, `restrictedAreaEvent`).

#### Entity type

When you configure a group, the system needs to know where the zone definitions (the polygons) are stored. This is determined by the Entity Type (Source) setting.
To choose the right source, ask yourself:

- Is this "self-geofencing" where each tracker has its own unique zone?
  - _Answer:_ Yes.
  - _Action:_ Select "Current entity".
  - _How it works:_ The field looks for the perimeter attribute directly on the entity itself. This is perfect for "Home" zones or custom "Safe Areas" that are unique to each specific entity.

- Does the group contain multiple zones, or will zones be added/removed dynamically?
  - _Answer:_ Yes.
  - _Action:_ Select a "Related entities" and configure a [Path from Entity to Zones](#path-from-entity-to-zones).
  - _How it works:_ The field discovers zones by following a configured relation path starting from your entity. You can chain multiple levels in different directions to reach the target assets.
  - _Example:_ Go "UP" from "Vehicle" to "Fleet" using the "FleetToVehicle" relation type, then go "DOWN" from "Fleet" to "Zone" using the "FleetToRestrictedZone" relation type.
  - _Best Practice:_ This approach maximizes scalability. It allows you to use a single "Zone" asset profile for all geometries, while using different relation types (e.g., FleetToParking, FleetToRestricted) to logically group them. This way, a single fleet can easily manage multiple distinct zone groups without complex configuration.

- Is this a general perimeter defined for an entire hierarchy (e.g., all devices under a Customer)?
  - _Answer:_ Yes. 
  - _Action:_ Select "Current Tenant" or "Current Owner". 
  - _How it works:_ The field fetches the perimeter attribute from the business entity (Tenant or Customer) that owns the device. This effectively lets the device "inherit" a zone defined at the organizational level.
  - _Best Practice:_ This is ideal for broad, high-level policies. For example, if you have a multi-customer solution, each "Owner" (Customer) entity can define its own global "Service Area" polygon. All devices belonging to that customer will automatically use that specific perimeter, keeping the solution dynamic and maintenance-free.

> **⚠️ Note:** While you can select a specific static Device, Asset, or Customer, this is generally not recommended for production. It hardcodes a specific ID, which limits flexibility and makes it difficult to reuse this entity across different customers or tenants without manual reconfiguration.

#### Perimeter attribute key

Enter the name of the server-side attribute key name (on the source entity) that contains the zone geometry. 

- **Requirement:** The attribute value must be a JSON object defining the zone boundaries.
- **Supported Perimeter Shapes:** The field supports both [Polygons](/docs/user-guide/widgets/map-widgets/#polygon) and [Circles](/docs/user-guide/widgets/map-widgets/#circle). Please refer to the linked documentation for the required JSON structure.

#### Report strategy

This setting controls what telemetry data the calculated field generates for the group. Choose the strategy that best fits your monitoring needs:

- **Presence status and transition events**
  - _Output:_ Generates both status (`INSIDE`/`OUTSIDE`) and events (`ENTERED`/`LEFT`).
  - _Best For:_ Comprehensive monitoring. This allows you to visualize current status on dashboards *and* trigger real-time notifications or alarms based on entry/exit events.

- **Presence status only**
  - _Output:_ Generates only the status (`INSIDE`/`OUTSIDE`).
  - _Best For:_ Simple state monitoring. Use this if you only need to know where the entity *is right now* (e.g., "Is the truck in the garage?") and do not need a historical log of transition events.

- **Transition events only**
  - _Output:_ Generates only the event (`ENTERED`/`LEFT`) when the status changes.
  - _Best For:_ Event-driven logic. Use this to minimize data storage if you only care about the *moment* a boundary is crossed (e.g., counting how many times a vehicle entered a site).

#### Path from Entity to Zones (only for the "Related Entities" entity type) {#path-from-entity-to-zones}

This section defines the precise "road map" the system follows to find the zone entities. 
The path starts from the **Source Entity** (the Device or Asset running this Calculated Field) and follows the relations you specify.

- **Level:** The sequence number indicating the depth of the relation step.
  > **⚠️ Note:** The minimum level is 1. The maximum allowed depth is determined by the "Maximum relation level per 'Related entities' argument" in your Tenant Profile configuration.
- **Direction:**
  - **Up:** Looks for parent entities (e.g., from Device up to Fleet).
  - **Down:** Looks for child entities (e.g., from Fleet down to Zone).
- **Relation type:** The specific connection name to follow for each step (e.g., "FleetToVehicle", "FleetToRestrictedZone", "FleetToNoParkingZone").

> **💡 Configuration Flexibility:** You are not restricted to a specific topology. 
> You can configure a single-level path (e.g., just one Up step if the zone is directly related to the source entity) 
> or a complex multi-level path (mixing Up and Down) depending on your entities hierarchy.

**Example Configuration:** To find zones for a vehicle (Source Entity) that belongs to a fleet:
 - **Level 1:** Direction: "Up", Relation type: VehicleToFleet (Finds the Fleet).
 - **Level 2:** Direction: "Down", Relation type: "FleetToRestrictedZone" (Finds all zone entities linked to that Fleet with the "FleetToRestrictedZone" relation type).

#### Create relations with matched zones (only for the "Related Entities" entity type)

This feature is disabled by default. When enabled, the calculated field automatically creates relations between your Source Entity and the specific Zone Entity
it is currently inside.

**Lifecycle:** The calculated field automatically manages this relation based on the entity's movement:
  - **On Enter:** The relation is created immediately when the entity enters the zone.
  - **On Leave:** The relation is deleted immediately when the entity leaves the zone.

**Use Case:** This is essential for dashboards where you want to see who is currently in a specific zone.
- _Example:_ You can query the "Parking Area" asset to list all "Vehicle" entities that currently have a "CurrentlyInside" relation to it.

**Configuration:**

- **Relation direction:**
  - **From zone to entity:** The Zone becomes the Parent and the Source Entity becomes the Child.
  - **From entity to zone:** The Source Entity becomes the Parent and the Zone becomes the Child.
- **Relation type:** The name of the relation type to create (e.g., "CurrentlyInside").

#### Zone groups refresh interval (Visible when at least one group uses "Related entities")

This setting controls how frequently the system updates the cache for dynamically found zones. You can disable, increase, or decrease this interval to balance data freshness against system performance.

- **Function:** Defines the time the system waits before checking the database for changes in zone relations (e.g., a device moving to a new fleet).
- **Configuration:**
  - **Toggle Disabled:** The system fetches the zone relations once and never refreshes them. Use this only if your entity relations are permanent (e.g., static infrastructure) and will never change during runtime.
  - **Toggle Enabled:** The system refreshes relations periodically based on the configured seconds.
    > **⚠️ Note:** The minimum allowed value is determined by the "Min allowed update interval for 'Related entities' arguments" parameter in your Tenant Profile.
  - **Tuning:**
    - **Low Value (e.g., 60s):** Required when zone relations change dynamically. This minimizes the delay in detecting changes. While not instantaneous, it ensures that shortly after a reassignment (e.g., within 60s), the system updates its cache and applies the geofencing logic for incoming telemetry with the latest zones.
    - **High Value (e.g., 3600s):** Recommended for environments where relations rarely change. This maximizes performance by reducing database load (caching the relations for a longer period).

<hr>

### Output

The Geofencing field automatically generates internal variables based on your **Zone Group Names** and **Report Strategy**. 
You must map these variables to final output keys (Telemetry or Attributes) in this section.

**Generated Variables Naming Convention:**

The system constructs variable names by combining the **Zone Group Name** with the suffix `Status` or `Event`.

For a group named **restrictedArea**:

- **restrictedAreaStatus**
  - _Values:_ `INSIDE`, `OUTSIDE`
  - _Availability:_ Generated if zone group report strategy includes "Presence status".
- **restrictedAreaEvent**
  - _Values:_ `ENTERED`, `LEFT`
  - _Availability:_ Generated only when a transition occurs, and the zone group report strategy includes "Transition events".

> **💡 Best Practice:** Map these variables to **Time Series** data to maximize flexibility for both Dashboards and Alarms:
  - **Status Variable:**
    - _Visualization:_ Ideal for showing the current state (e.g., an LED indicator or map marker color).
    - _Alarms:_ Perfect for duration-based logic (e.g., Trigger alarm if "restrictedAreaStatus" equals `INSIDE` for > 15 minutes).
  - **Event Variable:**
    - _Visualization:_ Useful for plotting historical transitions on charts or event tables.
    - _Alarms:_ Perfect for instant triggers (e.g., Trigger alarm immediately when "restrictedAreaEvent" equals `ENTERED`).

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

## Usage Examples

To help you get started, here are three common configuration patterns applied to real-world scenarios.

### Scenario 1: Pet Tracker (Self-Geofencing)

**Use Case:** You are building a pet tracking solution. Each dog collar has a unique "Home Zone" defined by the owner (e.g., a 40-meter radius around their specific house).

{% assign petTrackingUsageExample = '
    ===
       image: /images/user-guide/calculated-fields/geofencing/pet-tracking-example-1.png
       title: You are building a pet tracking solution. Each dog collar has a unique “Home Zone” defined by the owner (e.g., a 40-meter radius around their specific house).'
%}

{% include images-gallery.liquid imageCollection=petTrackingUsageExample %}

- **Goal:** Detect if the dog leaves its specific safety zone.
- **Configuration:**
  - **Entity Type:** "Current entity"
  - **Perimeter Attribute:** "safeZone" (A server-side attribute on the device containing the circle geometry).
- **Why this fits:** The zone is unique to the device. "Buddy" the dog has a different home location than "Rex," so the geometry must live on the device itself.

### Scenario 2: Warehouse Equipment (Direct Association)

**Use Case:** You manage a large distribution center. You have 2 forklifts, and each forklift is assigned to a specific "Warehouse Building" asset.

{% assign warehouseEquipmentExample = '    
    ===
       image: /images/user-guide/calculated-fields/geofencing/warehouse-equipment-example-2.png
       title: You manage a large distribution center. You have 2 forklifts, and each forklift is assigned to a specific “Warehouse Building” asset.'
%}

{% include images-gallery.liquid imageCollection=warehouseEquipmentExample %}

- **Goal:** Detect if a forklift leaves its assigned building.
- **Configuration:**
  - **Entity Type:** "Related entities"
  - **Path:**
    - _Level 1:_ Direction "Up", Relation type "Contains" (Finds the Warehouse that contains this forklift).
- **Why this fits:** You don't need to draw the warehouse polygon 2 times. You draw it once on the "Warehouse Asset," and all contained forklifts automatically inherit it.

### Scenario 3: Complex Fleet Management (Multiple Zone Types)

**Use Case:** A logistics company manages a fleet of trucks. Each fleet must comply with complex rules involving multiple different types of areas simultaneously.

{% assign complexFleetManagementExample = '    
    ===
       image: /images/user-guide/calculated-fields/geofencing/complex-fleet-management-example-3.png
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

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.