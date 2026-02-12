* TOC
{:toc}

**Relations** in ThingsBoard represent **directed connections between two entities**. They allow you to model real-world relationships (like hierarchy, ownership, or control) in your IoT solution.

A relation has the following properties:
- A relation connects two entities within the same [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"}.
- Each relation has a **direction**: _From_ and _To_.
- Each relation has a **relation type** (string), for example: _Contains_, _Manages_, _Uses_, _Supports_.
- You can define **custom relation types** depending on your needs.

## Why use relations?

Relations help you model logical and physical connections between entities such as:
- A building (asset) contains multiple devices. 
- A customer manages assigned assets and devices. 
- A gateway device is connected to multiple sensors.

Relations are commonly used for:
- Representing entity hierarchies (e.g., Customer &#8702; Asset &#8702; Device)   
- Navigating related entities in dashboards
- Performing relation-based processing in rule chains
- Filtering, aggregating, and visualizing data across entity groups

## Relation direction and types

<b><font size="4">Direction</font></b>   
Relations in ThingsBoard are **directional**:
- **From** – the source entity 
- **To** – the target entity

Relation direction is important because many queries rely on it to determine which entities are considered parent/child.

<b><font size="4">Relation Types</font></b>

Relation types define the meaning of the relationship. Common examples:
- **Contains** - Entity A contains Entity B (hierarchy)
- **Manages** - Entity A manages Entity B
- **Uses** - Entity A uses or depends on Entity B
- **Supports** - abstract dependency or support relationship

You can create **your own relation types** if needed.

## How to Create relations

Relations are created and managed directly in the ThingsBoard user interface from the **Relations** tab on the target entity details page.

To create a new relation:
1. Open the entity details page and switch to the **Relations** tab. 
2. Select the relation **direction** (**From** or **To**). 
3. Click the "**+**" button to open the **Add relation** dialog. 
4. In the dialog, specify the **Relation type** (for example, _Contains_). 
5. Select the **entity type** in the **From (To) entity** section (for example, _Asset_, _Device_, etc.). 
6. Select the required entity or multiple entities in the **Entity list** field.
7. (Optional) Fill in the **Additional info (JSON)** field if additional metadata is required. 
8. Click **Add** to create the relation.

Once created, the relation will appear in the relations table and can later be used in dashboards, rule chains, calculated fields, and other platform features.

## How relations are used in ThingsBoard

Relations are widely used across the ThingsBoard platform to build hierarchical models, simplify entity navigation, and implement advanced data processing scenarios.

<b><font size="4">In dashboard</font></b>

Relations enable dashboards to dynamically resolve and display entities without hardcoding identifiers. They are primarily used in [entity aliases](/docs/user-guide/ui/aliases/) and dashboard states to implement hierarchical navigation.   
[Widgets](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"} can display telemetry, attributes, and alarms from related entities, filter entity lists by relationship, and visualize real-world structures such as _Customer_ &#8702; _Assets_ &#8702; _Devices_. 

This approach enables reusable dashboards that automatically adapt to different customers and complex deployments.

<b><font size="4">In Rule Engine</font></b>

Relations are actively used in the ThingsBoard [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"} to route messages, enrich telemetry, and forward data between related entities.

Common relation-based nodes include: [Check relation presence](/docs/user-guide/rule-engine-2-0/nodes/filter/check-relation-presence){:target="_blank"}, [Related device attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/related-device-attributes){:target="_blank"}, [Related entity data](/docs/user-guide/rule-engine-2-0/nodes/enrichment/related-entity-data){:target="_blank"}, [Duplicate to related](/docs/user-guide/rule-engine-2-0/nodes/transformation/duplicate-to-related){:target="_blank"}.

These nodes allow rule chains to validate relations, fetch data from related entities, and propagate messages based on relation direction and type.

<b><font size="4">In Calculated fields</font></b>

Relations can also be used in [Calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"} to dynamically compute values based on related entities.

Typical use cases include:
- [Propagation](/docs/user-guide/calculated-fields/propagation-calculated-field){:target="_blank"} – transforming or propagating data to related entities
- [Related entities aggregation](/docs/user-guide/calculated-fields/related-entities-aggregation-calculated-field){:target="_blank"} – aggregating latest data (min, max, avg, sum, count, etc.) from related entities
- [Geofencing](/docs/user-guide/calculated-fields/geofencing-calculated-field){:target="_blank"} – detecting enter/exit events relative to related geozones and generating notifications

## API and Tools

Relations can also be created, queried, and deleted programmatically using the ThingsBoard [REST API](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}.

A relation is represented as a JSON object containing:
- **from** (entityType + id)
- **to** (entityType + id)
- **type** (the relation name)
- **typeGroup** (optional categorization)
- optional **additionalInfo** (custom JSON)

**Example:**

```json
{
  "from": {
    "id": "156c853f-89b1-321b-635j-y8febb2784h4",
    "entityType": "DEVICE"
  },
  "to": {
    "id": "784f394c-42b6-435a-983c-b7beff2784f9",
    "entityType": "DEVICE"
  },
  "type": "Contains",
  "typeGroup": "COMMON",
  "version": 0,
  "additionalInfo": {}
}
```