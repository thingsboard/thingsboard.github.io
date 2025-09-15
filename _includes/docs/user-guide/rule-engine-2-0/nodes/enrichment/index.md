Enrichment nodes are used to include additional information about the message originator, entities related to originator, and other contextual data into the outgoing message 
for further processing steps within the rule chain. 

These nodes can enrich messages with attributes, latest time series values, historical time series data, and entity details fetched from various sources including 
the message originator, related entities, current tenant, or customer.

This enrichment allows subsequent rule nodes to make context-aware decisions and apply processing logic based on configuration settings and contextual data.

- [calculate delta](/docs/user-guide/rule-engine-2-0/nodes/enrichment/calculate-delta) — Calculates delta based on the previous time series reading and current reading and adds it to the message.
- [customer attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/customer-attributes) — Identifies the message originator's customer and enriches the outgoing message with the customer's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/).
- [customer details](/docs/user-guide/rule-engine-2-0/nodes/enrichment/customer-details) — Enriches the outgoing message with the customer's details.
- [fetch device credentials](/docs/user-guide/rule-engine-2-0/nodes/enrichment/fetch-device-credentials) — Enriches the outgoing message with the device credentials.
- [originator attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/originator-attributes) — Enriches the outgoing message with the message originator's [attributes](/docs/user-guide/attributes/) and/or [latest telemetry](/docs/user-guide/telemetry/).
- [originator fields](/docs/user-guide/rule-engine-2-0/nodes/enrichment/originator-fields) — Enriches the outgoing message with the message originator's details.
- [originator telemetry](/docs/user-guide/rule-engine-2-0/nodes/enrichment/originator-telemetry) — Adds message originator's time series data, found using configured **Fetch interval** and **Fetch strategy**, into message metadata.
- [related device attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/related-device-attributes) — Finds related device of the message originator entity using configured [Relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) query and enriches the outgoing message.
- [related entity data](/docs/user-guide/rule-engine-2-0/nodes/enrichment/related-entity-data) — Finds entity related to the message originator using configured [relation](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) query.
- [tenant attributes](/docs/user-guide/rule-engine-2-0/nodes/enrichment/tenant-attributes) — Identifies the message originator's tenant and enriches the outgoing message with the tenant's [attributes](/docs/user-guide/attributes/) or [latest telemetry](/docs/user-guide/telemetry/).
- [tenant details](/docs/user-guide/rule-engine-2-0/nodes/enrichment/tenant-details) — Enriches the outgoing message with the tenant's details.
