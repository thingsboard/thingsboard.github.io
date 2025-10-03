Filter nodes are the routing and conditional logic components of ThingsBoard's rule engine that examine messages and determine how they should be routed to downstream nodes 
based on various criteria.

These nodes do not modify messages or perform any actions in the system - they are purely for determining which processing path a message should take. 
Filter nodes typically have multiple output relations like "True/False" for boolean evaluations or named connections corresponding to the filtering criteria, 
allowing messages to flow to different processing paths based on the evaluation results.

- [alarm status filter](/docs/user-guide/rule-engine-2-0/nodes/filter/alarm-status-filter) — routes messages based on whether the alarm status matches configured statuses.
- [asset profile switch](/docs/user-guide/rule-engine-2-0/nodes/filter/asset-profile-switch) — routes messages based on the profile name of the originator asset.
- [check fields presence](/docs/user-guide/rule-engine-2-0/nodes/filter/check-fields-presence) — routes messages based on whether specified fields are present in the message data or metadata.
- [check relation presence](/docs/user-guide/rule-engine-2-0/nodes/filter/check-relation-presence) — routes messages based on whether a specified relation exists between the message originator and a target entity.
- [device profile switch](/docs/user-guide/rule-engine-2-0/nodes/filter/device-profile-switch) — routes messages based on the profile name of the originator device.
- [entity type filter](/docs/user-guide/rule-engine-2-0/nodes/filter/entity-type-filter) — routes messages based on whether the originator entity type matches configured types.
- [entity type switch](/docs/user-guide/rule-engine-2-0/nodes/filter/entity-type-switch) — routes messages to different connections based on the originator entity type.
- [gps geofencing filter](/docs/user-guide/rule-engine-2-0/nodes/filter/gps-geofencing-filter) — routes messages based on whether GPS coordinates fall within a configured geofence boundary.
- [message type filter](/docs/user-guide/rule-engine-2-0/nodes/filter/message-type-filter) — routes messages based on whether the originator entity type matches configured types.
- [message type switch](/docs/user-guide/rule-engine-2-0/nodes/filter/message-type-switch) — routes messages to different connections based on the message type.
- [script](/docs/user-guide/rule-engine-2-0/nodes/filter/script) — routes messages based on the result of a boolean script.
- [switch](/docs/user-guide/rule-engine-2-0/nodes/filter/switch) — routes messages to one or more connections returned by a script.
