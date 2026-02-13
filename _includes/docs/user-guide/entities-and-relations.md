
* TOC
{:toc}

ThingsBoard is built around a flexible and scalable architecture that enables you to design, manage, and operate complex IoT solutions. The platform organizes devices, assets, users, and business structures into a unified hierarchy, while providing powerful tools for data ingestion, processing, visualization, analytics, integration, and access control.

This page provides a structured overview of the core ThingsBoard concepts grouped by logical architecture layers. Each concept includes a short definition and a link to detailed documentation.

## Organization & Access

### Ownership Layer

Defines organizational boundaries and multi-tenancy.

- <b><font size="3">Tenants</font></b>   
  A [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} is the top-level organizational entity that represents a company or business unit in ThingsBoard.     
  Tenants own and manage all platform resources (devices, assets, dashboards, rule chains, users, and customers) and define the main security boundary between organizations.
- <b><font size="3">Customers</font></b>   
  A [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"} is a logical sub-organization within a tenant that typically represents an end user group, client, or a department consuming IoT resources managed by the Tenant. Customers are primarily used to logically separate devices, assets, dashboards, and alarms, enabling secure data sharing and delegated access management.   
  Customers support scalable multi-customer deployments by allowing tenants to assign resources to specific customer accounts and manage customer users independently.

### Identity and Access Layer

Controls authentication and authorization.

- <b><font size="3">Users</font></b>   
  A [User](/docs/{{docsPrefix}}user-guide/ui/users/){:target="_blank"} is an authenticated account with role-based access to ThingsBoard.   
  Users can belong to a Tenant or a Customer and can manage entities, dashboards, telemetry, and device operations based on assigned permissions.
{% unless docsPrefix == nil %}- <b><font size="3">Role-Based Access Control (RBAC)</font></b>   
  [Role-Based Access Control (RBAC)](/docs/pe/user-guide/rbac/){:target="_blank"} is a security mechanism that regulates user access to entities and platform operations based on assigned roles and permissions. It allows administrators to define what actions users can perform and which resources they can access.    
  RBAC is used to enforce secure multi-tenant deployments, isolate customer data, and implement fine-grained access control across devices, assets, dashboards, and other platform components.{% endunless %}
- <b><font size="3">Tenant Profiles</font></b>   
  A [Tenant Profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/){:target="_blank"} defines common policies and limits applied to tenants, such as entity quotas, API limits, and rate limits.   
  Tenant Profiles are used to enforce resource usage rules and manage platform scalability. Each tenant is assigned to exactly one tenant profile at a time.

## Things (Core IoT Model)

### IoT Domain Model Layer

Represents physical and logical IoT infrastructure.

- <b><font size="3">Devices</font></b>   
  A [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} represents a physical or virtual IoT device connected to ThingsBoard. Devices publish telemetry and attributes, receive RPC commands, and typically represent sensors, actuators, gateways, controllers, or software agents.
- <b><font size="3">Assets</font></b>   
  An [Assets](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"} is an abstract entity used to model real-world objects and organize devices into hierarchical structures. Assets commonly represent infrastructure such as buildings, production lines, vehicles, warehouses, farms, or geographic areas.
- <b><font size="3">Entity Views</font></b>   
  An [Entity Views](/docs/{{docsPrefix}}user-guide/entity-views/){:target="_blank"} is a virtual representation of a device or asset that exposes only a selected subset of telemetry and attributes. Entity Views are used to securely share limited data with customers and behave as independent entities in dashboards and rule engine processing.
- <b><font size="3">Gateway</font></b>   
  A [Gateway](/docs/iot-gateway/){:target="_blank"} is a specialized device that acts as an intermediary between multiple downstream devices and ThingsBoard. It aggregates telemetry and attributes from connected devices, forwards data to the platform over a single connection, and routes RPC commands back to subordinate devices.   
  Gateways are commonly used to integrate non-IP or constrained devices (e.g., Modbus, BLE, Zigbee, LoRa), perform protocol translation, and reduce the number of direct platform connections. In ThingsBoard, a Gateway is registered as a Device operating in gateway mode and can manage multiple subordinate devices.

### Policy Management Layer

Provides centralized configuration control.

- <b><font size="3">Device Profiles</font></b>   
  A [Device Profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"} defines common configuration and behavior shared across multiple devices, including transport settings and default processing logic.
  Device Profiles simplify fleet management by applying consistent connectivity and rule engine configuration. Each device is assigned to exactly one device profile at a time.
- <b><font size="3">Asset Profiles</font></b>   
  An [Asset Profile](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"} defines common processing configuration and behavior for assets.   
  Asset Profiles help standardize asset management and rule engine processing across large deployments. Each asset is assigned to exactly one asset profile at a time.

## Data Model

Defines how entity data is stored and structured.

- <b><font size="3">Attributes</font></b>   
  [Attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} are static or semi-static key-value pairs associated with an entity.   
  They are commonly used to store metadata, configuration parameters, and entity state information such as model, firmware version, location, or operational status.
- <b><font size="3">Time-series Data</font></b>   
  [Time-series data](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} (telemetry) represents timestamped measurements published by devices and stored in ThingsBoard.   
  It is used for real-time monitoring, historical data analysis, querying, aggregation, and visualization in dashboards.
- <b><font size="3">Relations</font></b>   
  [Relations](/docs/key-concepts/relations/){:target="_blank"} are directed links between ThingsBoard entities used to model hierarchical and logical structures.   
  They enable building entity relationships such as containment, ownership, or location (e.g., Contains, Manages, Located In) and are commonly used in dashboards and rule engine processing.

## Connectivity & Control

### Connectivity Layer

Defines how devices connect and authenticate.

- <b><font size="3">Device credentials</font></b>   
  Device credentials are authentication parameters used by devices to connect securely to ThingsBoard. They typically include access tokens, X.509 certificates, or MQTT/HTTP credentials depending on the selected transport protocol.
- <b><font size="3">Transport protocols</font></b>   
  ThingsBoard supports multiple transport protocols for device connectivity, such as MQTT, HTTP, CoAP, and LwM2M. Transport protocols define how devices publish telemetry and attributes, and how they receive commands from the platform.

Connects ThingsBoard with external systems.

- <b><font size="3">Integrations</font></b>   
  An [Integrations](/docs/{{docsPrefix}}user-guide/integrations/){:target="_blank"} provides connectivity between ThingsBoard and external IoT networks, devices, and third-party platforms, enabling data collection from external sources and delivery to ThingsBoard for real-time visualization and processing. Integrations are mainly used to connect NB-IoT, LoRaWAN, SigFox, and other devices with specific payload formats directly to ThingsBoard, or to stream data from existing IoT platforms to support interactive dashboards and efficient data processing.
- <b><font size="3">Data Converters</font></b>   
  [Data Converters](/docs/{{docsPrefix}}user-guide/integrations/#data-converters){:target="_blank"} are used within integrations to transform raw incoming and outgoing payloads into the ThingsBoard message format and vice versa, ensuring compatibility with various protocols and device-specific data structures.

### Device Control Layer

Defines device command and management mechanisms.

- <b><font size="3">Remote Procedure Call (RPC)</font></b>   
  [Remote Procedure Call (RPC)](/docs/{{docsPrefix}}user-guide/rpc/){:target="_blank"} is a communication mechanism that allows ThingsBoard to send commands to devices and receive responses.  
  RPC is commonly used for device control operations such as switching relays, updating configuration, or triggering actions remotely.
- <b><font size="3">OTA Updates</font></b>   
  [OTA updates](/docs/{{docsPrefix}}user-guide/ota-updates/){:target="_blank"} enable remote firmware and software distribution to devices.   
  They are used for centralized device lifecycle management and fleet maintenance.

## Processing & Automation

### Operational Monitoring Layer

Tracks system state and abnormal conditions.

- <b><font size="3">Alarms</font></b>   
  An [Alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} is an event entity that represents abnormal behavior or an issue detected for another entity (device, asset, etc.).   
  Alarms can be generated by rule chains, acknowledged and cleared manually, and monitored through dashboards and notifications.
- <b><font size="3">Notifications</font></b>   
  [Notifications](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"} provide automated delivery of important events to users and external systems.  
  They are typically triggered by by alarms, device activity, entity action, system failure, and more, and can be delivered via email, SMS, webhooks, or other supported channels.

### Data Processing and Enrichment Layer

Handles message routing and workflow automation.

- <b><font size="3">Alarm Rules</font></b>   
  [Alarm rules](/docs/{{docsPrefix}}user-guide/alarm-rules/){:target="_blank"} define conditions for generating alarms based on telemetry or attribute data.  
  They are typically implemented in rule chains to enable automated issue detection.
- <b><font size="3">Rule Nodes</font></b>   
  A [Rule Node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/nodes/){:target="_blank"} is a processing component of the ThingsBoard Rule Engine that performs a specific action or transformation on incoming messages.   
  Rule Nodes can filter, enrich, route data, manage alarms, trigger notifications, execute RPC, and integrate with external systems.
- <b><font size="3">Rule Chains</font></b>   
  A [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"} is a configurable workflow in the ThingsBoard [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/){:target="_blank"} that defines how messages are routed and processed.   
  Rule Chains consist of connected rule nodes and handle telemetry, attributes, alarms, lifecycle events, and RPC-related processing.

Extends raw telemetry with derived insights.

- <b><font size="3">Calculated fields</font></b>   
  [Calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"} are virtual data points derived from existing telemetry or attributes using configurable expressions. They allow real-time data transformation and enrichment without modifying device firmware.   
  Calculated fields are commonly used to compute KPIs, normalize measurements, or generate aggregated metrics directly within the platform.

## Visualization & Analytics

### Visualization Layer

Provides real-time monitoring and control interfaces.

- <b><font size="3">Dashboards</font></b>   
  A [Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} is an interactive interface for real-time monitoring and control of IoT entities. Dashboards provide widgets for telemetry visualization, alarm monitoring, entity management, and device control via RPC or attribute updates.
- <b><font size="3">Widgets</font></b>   
  [Widgets](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"} are dashboard building blocks used to visualize telemetry, display entity data, manage alarms, and control devices. Widgets support multiple visualization types such as charts, tables, maps, and custom UI components.

### Business Intelligence and Advanced Analytics Layer

Transforms operational data into structured outputs.

- <b><font size="3">Reporting</font></b>   
  [Reporting](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/){:target="_blank"} provides structured data export and scheduled report generation based on telemetry, alarms, and entity data. It enables automated delivery of operational insights in formats suitable for business users. Reporting is typically used for periodic summaries, compliance documentation, and sharing analytics results with stakeholders.

Advanced data analytics and visualization.

- <b><font size="3">Trendz Analytics [Add On]</font></b>   
  [Trendz Analytics](/docs/trendz/){:target="_blank"} is an advanced analytics solution integrated with ThingsBoard that provides powerful tools for historical data exploration and interactive visualization. It is commonly used to build analytics dashboards, detect trends, and generate insights based on telemetry and entity data.


## Edge Computing Layer [Add On]

Extends ThingsBoard processing to remote sites.

- <b><font size="3">ThingsBoard Edge</font></b>   
  [ThingsBoard Edge](/docs/edge/){:target="_blank"} is an edge computing solution that enables running data processing, automation, and dashboards closer to devices.   
  It supports local operation, reduces latency, and ensures continued functionality during intermittent cloud connectivity by synchronizing data and configuration with the ThingsBoard platform.


## Next Steps

After reviewing ThingsBoard key concepts, you can continue with the following guides:

- [Getting Started with ThingsBoard](/docs/getting-started-guides/helloworld/){:target="_blank"} - Quick step-by-step tutorials that introduce core ThingsBoard features and typical IoT workflows. Designed to be completed in 15–30 minutes.
- [Connect your device](/docs/user-guide/integrations/){:target="_blank"} - Learn how to connect devices to ThingsBoard using supported protocols, gateways, and integrations based on your connectivity technology.
- [Creating dashboards](/docs/{{docsPrefix}}user-guide/dashboards/) - Learn how to build interactive dashboards for real-time monitoring, visualization, and device control using widgets and entity aliases.
- [Data processing & actions](/docs/guides/#AnchorIDDataProcessing){:target="_blank"} - Learn how to process incoming messages, enrich telemetry, route data, trigger actions, and integrate with external systems.
- [Working with alarms](/docs/{{docsPrefix}}user-guide/alarms/) - Learn how to configure alarm generation, monitor active alarms, acknowledge and clear them, and build alarm-based monitoring workflows.
- [Working with device attributes](/docs/{{docsPrefix}}user-guide/attributes/) - Learn how to store and manage entity metadata and configuration using attributes, including client-side, shared, and server-side attribute scopes.
- [Working with telemetry](/docs/{{docsPrefix}}user-guide/telemetry/) - Learn how to publish, query, and visualize time-series telemetry data, including aggregation, historical analysis, and real-time monitoring.
