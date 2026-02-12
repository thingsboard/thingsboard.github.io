
* TOC
{:toc}

## Entities Overview

ThingsBoard is built around a flexible and scalable entity model that enables you to design, manage, and operate complex IoT solutions. The platform organizes devices, assets, users, and business structures into a unified hierarchy, while providing powerful tools for data ingestion, processing, visualization, analytics, and access control.

At the core of this model are:

<br><b><font size="4">Ownership layer</font></b>  
- <b><font size="3">Tenants</font></b>   
  A [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} is the top-level organizational entity that represents a company or business unit in ThingsBoard.     
  Tenants own and manage all platform resources (devices, assets, dashboards, rule chains, users, and customers) and define the main security boundary between organizations.
- <b><font size="3">Customers</font></b>   
  A [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"} is a logical sub-organization within a tenant, typically representing an end client or department.   
  Customers allow tenant administrators to isolate access to entities, distribute resources across clients, and manage customer users independently.

<br><b><font size="4">Identity and Access</font></b>
- <b><font size="3">Users</font></b>   
  A [User](/docs/{{docsPrefix}}user-guide/ui/users/){:target="_blank"} is an authenticated account with role-based access to ThingsBoard.   
  Users can belong to a Tenant or a Customer and can manage entities, dashboards, telemetry, and device operations based on assigned permissions.
- <b><font size="3">Role-Based Access Control (RBAC)</font></b>   
  [Role-Based Access Control (RBAC)](/docs/pe/user-guide/rbac/){:target="_blank"} is a security mechanism that regulates user access to entities and platform operations based on assigned roles and permissions. It allows administrators to define what actions users can perform and which resources they can access.    
  RBAC is used to enforce secure multi-tenant deployments, isolate customer data, and implement fine-grained access control across devices, assets, dashboards, and other platform components.

<br><b><font size="4">IoT domain model</font></b>  
- <b><font size="3">Devices</font></b>   
  A [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} represents a physical or virtual IoT device connected to ThingsBoard.   
  Devices publish telemetry and attributes, receive RPC commands, and typically represent sensors, actuators, gateways, controllers, or software agents.
- <b><font size="3">Assets</font></b>   
  An [Assets](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"} is an abstract entity used to model real-world objects and organize devices into hierarchical structures.   
  Assets commonly represent infrastructure such as buildings, production lines, vehicles, warehouses, farms, or geographic areas.
- <b><font size="3">Entity Views</font></b>   
  An [Entity Views](/docs/{{docsPrefix}}user-guide/entity-views/){:target="_blank"} is a virtual representation of a device or asset that exposes only a selected subset of telemetry and attributes.   
  Entity Views are used to securely share limited data with customers and behave as independent entities in dashboards and rule engine processing.
- <b><font size="3">Gateway</font></b>   
  A [Gateway](/docs/iot-gateway/){:target="_blank"} is a specialized device that acts as an intermediary between multiple downstream devices and ThingsBoard.   
  A Gateway aggregates telemetry and attributes from connected devices, forwards data to the platform over a single connection, and routes RPC commands back to subordinate devices.   
  Gateways are commonly used to integrate non-IP or constrained devices (e.g., Modbus, BLE, Zigbee, LoRa), perform protocol translation, and reduce the number of direct platform connections. In ThingsBoard, a Gateway is registered as a Device operating in gateway mode and can manage multiple subordinate devices.

<br><b><font size="4">Data model layer</font></b>

- **[Attributes](/docs/{{docsPrefix}}user-guide/attributes/)** - static and semi-static key-value pairs associated with entities. For example serial number, model, firmware version;
- **[Time-series data](/docs/{{docsPrefix}}user-guide/telemetry/)** - time-series data points available for storage, querying and visualization. For example temperature, humidity, battery level;
- **[Relations](#relations)** - directed connections to other entities. For example contains, manages, owns, produces.

<br><b><font size="4">Configuration and policy management</font></b>

- **[Tenant Profiles](/docs/{{docsPrefix}}user-guide/tenant-profiles/)** - contains common settings for multiple tenants: entity, API and rate limits, etc. Each Tenant has the one and only profile at a single point in time.
- **[Device Profiles](/docs/{{docsPrefix}}user-guide/device-profiles/)** - contains common settings for multiple devices: processing and transport configuration, etc. Each Device has the one and only profile at a single point in time.
- **[Asset Profiles](/docs/{{docsPrefix}}user-guide/asset-profiles/)** - contains common settings for multiple assets: processing configuration, etc. Each Asset has the one and only profile at a single point in time.

<br><b><font size="4">Operational monitoring</font></b>
- <b><font size="3">Alarms</font></b>   
  An [Alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} is an event entity that represents abnormal behavior or an issue detected for another entity (device, asset, etc.).   
  Alarms can be generated by rule chains, acknowledged and cleared manually, and monitored through dashboards and notifications.

<br><b><font size="4">Visualization</font></b>

- <b><font size="3">Dashboards</font></b>   
  A [Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} is an interactive interface for real-time monitoring and control of IoT entities.   
  Dashboards provide widgets for telemetry visualization, alarm monitoring, entity management, and device control via RPC or attribute updates.

<br><b><font size="4">Processing components</font></b>

- <b><font size="3">Rule Nodes</font></b>   
  A [Rule Node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/nodes/){:target="_blank"} is a processing component of the ThingsBoard Rule Engine that performs a specific action or transformation on incoming messages.   
  Rule Nodes can filter, enrich, route data, manage alarms, trigger notifications, execute RPC, and integrate with external systems.

- <b><font size="3">Rule Chains</font></b>   
  A [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"} is a configurable workflow in the ThingsBoard [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/){:target="_blank"} that defines how messages are routed and processed.   
  Rule Chains consist of connected rule nodes and handle telemetry, attributes, alarms, lifecycle events, and RPC-related processing.

<br><b><font size="4">Data Processing & Enrichment (analytics and data enrichment tools)</font></b>

- <b><font size="3">Calculated Fields</font></b>   
  [Calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"} are virtual data points derived from existing telemetry or attributes using configurable expressions. They allow real-time data transformation and enrichment without modifying device firmware.   
  Calculated fields are commonly used to compute KPIs, normalize measurements, or generate aggregated metrics directly within the platform.

<br><b><font size="4">Business Intelligence Features</font></b>

- <b><font size="3">Reporting</font></b>   
  Reporting provides structured data export and scheduled report generation based on telemetry, alarms, and entity data. It enables automated delivery of operational insights in formats suitable for business users.   
  Reporting is typically used for periodic summaries, compliance documentation, and sharing analytics results with stakeholders.

<br><b><font size="4">Integration Components</font></b>

- <b><font size="3">Integrations</font></b>   
  An [Integrations](/docs/user-guide/integrations/) provides connectivity between ThingsBoard and external IoT networks, devices, and third-party platforms, enabling data collection from external sources and delivery to ThingsBoard for real-time visualization and processing.    
  Integrations are mainly used to connect NB-IoT, LoRaWAN, SigFox, and other devices with specific payload formats directly to ThingsBoard, or to stream data from existing IoT platforms to support interactive dashboards and efficient data processing.

- <b><font size="3">Data Converters</font></b>   
  [Data Converters](/docs/user-guide/integrations/#data-converters) are used within integrations to transform raw incoming and outgoing payloads into the ThingsBoard message format and vice versa, ensuring compatibility with various protocols and device-specific data structures.

<br><b><font size="4">Security and Access Control Components (permission management features)</font></b>


