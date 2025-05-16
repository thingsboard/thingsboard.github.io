* TOC
{:toc}

## Entities Overview

In **ThingsBoard**, an **entity** is a core component that represents a physical object or a concept within the platform. You can view the list of ThingsBoard entities [here](/docs/{{peDocsPrefix}}user-guide/entities-and-relations/){: target="_blank"}.

**ThingsBoard Edge** supports entities that are relevant for edge computing.

### Available Edge Entities

* **Devices:** Physical IoT devices (_sensors, actuators, controllers_).
* **Assets:** A real world object that helps group and manage the IoT ecosystem (_e.g., machines, buildings, factories_).
* **Customers:** Organizations or users assigned to specific devices/assets.
* **Users (for PE):** People who manage and interact with edge resources. 
* **Entity Views:** Predefined views of selected entity data.
* **Alarms:** Alerts for anomalies or predefined conditions.
* **Dashboards:** Visualizations of telemetry and device data.
* **Rule Chains:** Local data processing and automation logic.

Most entities can be created on the **Edge**, except for **Customers**, and **Users** entities. These entities can be created on the **Server** and then [assigned](/docs/{{docsPrefix}}config/management/#entities-management){: target="_blank"} to the **Edge instance**.

The **Devices** and **Assets** entities have the configuration templates as [Device Profiles](/docs/{{peDocsPrefix}}user-guide/device-profiles/){: target="_blank"} and [Asset Profiles](/docs/{{peDocsPrefix}}user-guide/asset-profiles/){: target="_blank"}, respectively. 

## Entity Key Features

### Attributes 
**Attributes** are the structured data that can be associated with the entities (e.g., device model, location, token). 
They are stored in the local database and can be used for visualization, analysis, logic configuration, and integration with other services.

For a comprehensive understanding of the **ThingsBoard attributes**, please refer to the [Working with IoT Attributes](/docs/{{peDocsPrefix}}user-guide/attributes/){: target="_blank"} documentation. 
You can also refer to the [Edge Attributes article](/docs/{{docsPrefix}}user-guide/edge-attributes/){: target="_blank"} to review the attributes specific to **Edge**.

### Telemetry

**Telemetry** refers to **time-series data** collected from IoT devices and processed by the **Rule Chain**.

**Telemetry** is stored as **key-value pairs**:
* **Key:** A telemetry field (_e.g., temperature, humidity, voltage_).
* **Value:** A numerical or string value (_e.g., 25.4°C, 45%, "ON"_).

Example:
```bash
{
  "temperature": 25.4,
  "humidity": 45,
  "status": "ON"
}
```
You can learn more about working with telemetry data [here](/{{peDocsPrefix}}docs/user-guide/telemetry/){: target="_blank"}.

By default, **ThingsBoard Edge** synchronizes telemetry data with the **ThingsBoard Cloud**. 
During an internet outage, telemetry is stored **locally** and sent to the **Cloud** once the connection is restored.

### Relations

The **relation** feature defines connections between entities and helps to model the real-world hierarchy between physical objects. 

Several parameters define the relation hierarchy between the entities:
* **Direction:** Describes how the entities are associated with each other.
    * **“Outbound relation - From”:** Indicates that the relation **originates** from the entity (_the entity is a source_).
    * **“Inbound relation - To”:** Indicates that the relation **points** to the entity (_the entity is a recipient_).
* **Relation type:** Describes the nature of the connection between the entities.
    * **“Contains”:** Indicates that the entity is a part of another entity (_e.g., Device A is the part of Asset A_).
    * **“Manages”:** Indicates that the entity is responsible for another entity (_e.g., Asset A manages Device A_).

The entity relations diagram can appear as follows: 
![image](https://img.thingsboard.io/edge/user-guide/relations.webp){: style="display: block; margin: auto; max-width: 600px; max-height: 600px"}

## Next steps

{% include templates/edge/guides-banner-edge.md %}