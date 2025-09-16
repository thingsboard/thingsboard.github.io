Enrichment nodes are used to include additional information about the message originator, entities related to originator, and other contextual data into the outgoing message 
for further processing steps within the rule chain. 

These nodes can enrich messages with attributes, latest time series values, historical time series data, and entity details fetched from various sources including 
the message originator, related entities, current tenant, or customer.

This enrichment allows subsequent rule nodes to make context-aware decisions and apply processing logic based on configuration settings and contextual data.

- [calculate delta](/docs/user-guide/rule-engine-2-0/nodes/enrichment/calculate-delta) — calculates the delta (difference) between the current value in an incoming message and the previous value from the same originator, optionally including the time elapsed between messages.
- [customer attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/customer-attributes) — enriches messages by adding [server-side attributes](/docs/user-guide/attributes/) or [latest time series values](/docs/user-guide/telemetry/) from the message originator's customer.
- [customer details](/docs/user-guide/rule-engine-2-0/nodes/enrichment/customer-details) — enriches messages by adding details (such as name, email, country, address, etc.) from the message originator's customer.
- [fetch device credentials](/docs/user-guide/rule-engine-2-0/nodes/enrichment/fetch-device-credentials) — enriches messages by adding credentials (type and value) of the originator device.
- [originator attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/originator-attributes) — enriches messages by adding attributes (client, shared, server) and/or latest time series values from the message originator.
- [originator fields](/docs/user-guide/rule-engine-2-0/nodes/enrichment/originator-fields) — enriches messages by adding details (such as name, label, profile name, etc.) from the message originator.
- [originator telemetry](/docs/user-guide/rule-engine-2-0/nodes/enrichment/originator-telemetry) — enriches messages by adding [historical time series data](/docs/user-guide/telemetry/) from the message originator within a specified time interval using configurable fetch strategies and optional aggregation functions.
- [related device attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/related-device-attributes) — enriches messages by adding attributes and/or latest time series values from a [related](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) device found through configurable relation queries (direction, type, device profiles).
- [related entity data](/docs/user-guide/rule-engine-2-0/nodes/enrichment/related-entity-data) — enriches messages by adding attributes, latest time series values, or entity fields from a related entity found through configurable relation queries (direction, type and entity filters).
- [tenant attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/tenant-attributes) — enriches messages by adding server-side attributes or latest time series values from the message originator's tenant.
- [tenant details](/docs/user-guide/rule-engine-2-0/nodes/enrichment/tenant-details) — enriches messages by adding details (such as name, email, country, address, etc.) from the message originator's tenant.
