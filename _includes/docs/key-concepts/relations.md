* TOC
{:toc}

**Relations** in ThingsBoard represent **directed connections between two entities**. They allow you to model real-world relationships (like hierarchy, ownership, or control) in your IoT solution.

A relation has the following properties:
- A relation connects two entities within the same [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"}.
- Each relation has a **direction**: _From_ and _To_.
- Each relation has a **relation type** (string), for example: _Contains_, _Manages_, _Uses_, _Supports_.
- You can define **custom relation types** depending on your needs.

## Why Use Relations?

Relations help you model logical and physical connections between entities such as:
- A building (asset) contains multiple devices. 
- A customer manages assigned assets and devices. 
- A gateway device is connected to multiple sensors.

Relations are commonly used for:
- Representing entity hierarchies (e.g., Customer &#8702; Asset &#8702; Device)   
- Navigating related entities in dashboards
- Performing relation-based processing in rule chains
- Filtering, aggregating, and visualizing data across entity groups

## Relation Direction and Types

<b><font size="4">Direction</font></b>   
Relations in ThingsBoard are **directional**:
- **From** – the source entity 
- **To** – the target entity

Direction is important because most API queries and rule engine operations depend on it to determine which entities are considered parent/child.
The same relation type behaves differently depending on whether you query relations **from** an entity or **to** an entity.

<b><font size="4">Relation Types</font></b>

Relation types define the meaning of the relationship. Common examples:
- **Contains** - Entity A contains Entity B (hierarchy)
- **Manages** - Entity A manages Entity B
- **Uses** - Entity A uses or depends on Entity B
- **Supports** - abstract dependency or support relationship

You can create **your own relation types** if needed.

## Creating and Managing Relations

Relations are created and managed in the ThingsBoard UI from the **Relations** tab on the entity details page.

To create a relation:
1. Open the entity details page.
2. Navigate to the **Relations** tab.
3. Select the relation **direction** (**From** or **To**). 
4. Click the "**+**" button to open the **Add relation** dialog. 
5. In the dialog, specify the **Relation type** (for example, _Contains_). 
6. Define the **relation type** and select the **related entity**.
7. (Optional) Fill in the **Additional info (JSON)** field if additional metadata is required. 
8. lick **Add** to create the relation.

## How Relations Are Used in ThingsBoard

Relations are widely used across the ThingsBoard platform to build hierarchical models, simplify entity navigation, and implement advanced data processing scenarios.

<b><font size="4">In Dashboards</font></b>

Relations enable dashboards to dynamically resolve and display entities without hardcoding identifiers.   
They are commonly used in:
- [Entity aliases](/docs/user-guide/ui/aliases/){:target="_blank"}
- Dashboard states
- Widgets that display related entity data (for example, Alarms table)

[Widgets](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"} can display alarms, telemetry and attributes from related entities, filter entities based on relationships, visualize hierarchical structures (_Customer_ &#8702; _Assets_ &#8702; _Devices_)

This enables reusable dashboards that adapt automatically to different customers and deployments.

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

## Example Hierarchy Using Relations

The following example illustrates how the _Contains_ relation can be used to model a hierarchical structure in ThingsBoard.

In this example:
- **Region A** is defined as an **Asset**.
- Region A contains two child assets: **Field A** and **Field B**.
- Each field contains multiple **Devices**, such as moisture sensors and irrigation systems.

This forms the following hierarchy:

{% if docsPrefix == null %}
![image](/images/key-concepts/relations-ce.svg)
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix contains "paas/" %}
![image](/images/key-concepts/relations-pe.svg)
{% endif %}

The _Contains_ relation follows the direction:
**From (Parent) → To (Child)**

In this case:
- Region A &#8702; Contains &#8702; Field A 
- Region A &#8702; Contains &#8702; Field B 
- Field A &#8702; Contains &#8702; Devices 
- Field B &#8702; Contains &#8702; Devices

This structure demonstrates how relations are used to model real-world physical or logical hierarchies such as geographic regions, production areas, facilities, or equipment groups.
