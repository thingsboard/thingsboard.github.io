* TOC
{:toc}

## Entities Overview

In **ThingsBoard**, an **entity** is a core component that represents a physical object or a concept within the platform. You can view the list of ThingsBoard entities [here](/docs/{{peDocsPrefix}}user-guide/entities-and-relations/){: target="_blank"}.
**ThingsBoard Edge** supports entities that are relevant for edge computing.

### Available Edge Entities

* **Devices:** Physical IoT devices (sensors, actuators, controllers).
* **Assets:** A real world object that helps group and manage the IoT ecosystem (e.g., machines, buildings, factories).
* **Customers:** Organizations or users assigned to specific devices/assets.
* **Users (for PE):** People who manage and interact with edge resources. 
* **Entity Views:** Predefined views of selected entity data.
* **Alarms:** Alerts for anomalies or predefined conditions.
* **Dashboards:** Visualizations of telemetry and device data.
* **Rule Chains:** Local data processing and automation logic.

Most entities can be created on the **Edge**, except for **Customers**, **Users**, and **Rule Chains** entities. These entities can be created on the **Server** and then [assigned](/docs/{{docsPrefix}}config/management/#entities-management){: target="_blank"} to the **Edge instance**.

The **Devices** and **Assets** entities have the configuration templates as [Device Profiles](/docs/{{peDocsPrefix}}user-guide/device-profiles/){: target="_blank"} and [Asset Profiles](/docs/{{peDocsPrefix}}user-guide/asset-profiles/){: target="_blank"}, respectively. 

## Entities Key Features

### Attributes 
**Attributes** are the structured data that can be assigned to the entities, such as metadata or static properties (e.g., device model, location). They are stored in the database and can be used for visualization, analysis, logic configuration, and integration with other services.

For a comprehensive understanding of the **ThingsBoard Attributes**, please refer to the [Working with IoT Attributes](/docs/{{peDocsPrefix}}user-guide/attributes/){: target="_blank"} documentation. You also can refer to the [Edge Attributes article](/docs/{{docsPrefix}}user-guide/edge-attributes/){: target="_blank"} to check on attributes specific for **Edge**.

### Telemetry
Time-series data collected from devices (e.g., temperature, pressure).
https://thingsboard.io/docs/user-guide/telemetry/

### Relations
Entities can be linked hierarchically (e.g., devices assigned to assets).

Several parameters define the relation hierarchy between the entities:

    Direction: Describes how the entities are associated with each other.
        “Outbound relation - From”: Indicates that the relation originates from the entity (the entity is a source).
        “Inbound relation - To”: Indicates that the relation points to the entity (the entity is a recipient).
    Relation type: Describes the nature of the connection between the entities.
        “Contains”: Indicates that the entity is a part of another entity (e.g., Device A is the part of Asset A).
        “Manages”: Indicates that the entity is responsible for another entity (e.g., Asset A manages Device A).


