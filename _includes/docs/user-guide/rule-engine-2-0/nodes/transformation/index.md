Transformation nodes are the data processing and manipulation components of ThingsBoard's rule engine that modify the content, structure, or format of incoming messages.

These nodes can transform messages through various operations including field mapping, mathematical calculations,
string manipulations, custom scripting, and JSON structure modifications. They can extract or combine data fields, apply business logic transformations,
and create new messages derived from the existing ones.

This transformation capability enables rule chains to adapt messages for specific downstream requirements and implement complex processing workflows that prepare 
data for storage, analysis, or integration with external systems.

- [change originator](/docs/user-guide/rule-engine-2-0/nodes/transformation/change-originator) — changes the originator of a message to a different entity such as its customer, tenant, related entity, alarm originator, or an entity found by name pattern.
- [copy key-value pairs](/docs/user-guide/rule-engine-2-0/nodes/transformation/copy-key-value-pairs) — copies specified key-value pairs between the message data and metadata in either direction.
- [deduplication](/docs/user-guide/rule-engine-2-0/nodes/transformation/deduplication) — deduplicates messages from the same originator within a configurable time interval using strategies to return either the first, last, or all messages as a combined result.
- [delete key-value pairs](/docs/user-guide/rule-engine-2-0/nodes/transformation/delete-key-value-pairs) — deletes specified key-value pairs from either the message data or metadata.
- <span class="item-pe product-label-padding">[duplicate to group](/docs/user-guide/rule-engine-2-0/nodes/transformation/duplicate-to-group)</span> — duplicates an incoming message to every entity within a specified entity group.
- <span class="item-pe product-label-padding">[duplicate to group by name](/docs/user-guide/rule-engine-2-0/nodes/transformation/duplicate-to-group-by-name)</span> — duplicates an incoming message to every entity within an entity group that is dynamically found by name.
- <span class="item-pe product-label-padding">[duplicate to related](/docs/user-guide/rule-engine-2-0/nodes/transformation/duplicate-to-related)</span> — duplicates an incoming message to all entities related to the message originator (found via a configurable relations query).
- [json path](/docs/user-guide/rule-engine-2-0/nodes/transformation/json-path) — extracts a portion of the message data using a JSONPath expression and replaces the entire message data with the extracted result.
- [rename keys](/docs/user-guide/rule-engine-2-0/nodes/transformation/rename-keys) — renames keys in either the message data or metadata based on a configured mapping that specifies which existing keys should be changed to new key names.
- [script](/docs/user-guide/rule-engine-2-0/nodes/transformation/script) — executes user-defined TBEL or JavaScript function to transform messages by modifying their data, metadata, and type to produce single or multiple transformed output messages.
- [split array msg](/docs/user-guide/rule-engine-2-0/nodes/transformation/split-array-msg) — splits an incoming message with JSON array data into multiple separate messages, creating one new message for each array element.
- [to email](/docs/user-guide/rule-engine-2-0/nodes/transformation/to-email) — prepares a message for email dispatch by transforming it with configured sender, recipients, subject, and body content using template-based field substitution.
