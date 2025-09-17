Action nodes are the execution components of ThingsBoard's rule engine that perform concrete operations and side effects based on the messages flowing through the rule chain.

These nodes can automate various system operations like persisting time series and attributes to the database, managing alarms, controlling device commands and modifying system state. 

Action nodes allow you to automate your workflows by executing operations based on your data without requiring manual interaction.

- [assign to customer](/docs/user-guide/rule-engine-2-0/nodes/action/assign-to-customer) — assigns the message originator to a specified customer.
- [add to group](/docs/user-guide/rule-engine-2-0/nodes/action/add-to-group) — adds the message originator to the entity group found by group name pattern.
- [calculated fields](/docs/user-guide/rule-engine-2-0/nodes/action/calculated-fields) — triggers calculated field processing for time series or attribute data without persisting the original data to the database.
- [change owner](/docs/user-guide/rule-engine-2-0/nodes/action/change-owner) — changes the ownership of the message originator to a specified tenant or customer.
- [clear alarm](/docs/user-guide/rule-engine-2-0/nodes/action/clear-alarm) — clears existing active alarms for the message originator.
- [copy to view](/docs/user-guide/rule-engine-2-0/nodes/action/copy-to-view) — replicates attribute changes from assets/devices to their associated entity views.
- [create alarm](/docs/user-guide/rule-engine-2-0/nodes/action/create-alarm) — creates new alarms or updates existing active alarms for the message originator.
- [create relation](/docs/user-guide/rule-engine-2-0/nodes/action/create-relation) — creates relation between the message originator and a specified target entity with configurable direction and type.
- [delay (deprecated)](/docs/user-guide/rule-engine-2-0/nodes/action/delay) — delays incoming messages for a configurable period before forwarding them to the next rule node.
- [delete attributes](/docs/user-guide/rule-engine-2-0/nodes/action/delete-attributes) — deletes specified attributes from message originator.
- [delete relation](/docs/user-guide/rule-engine-2-0/nodes/action/delete-relation) — delete the relation from the selected entity to originator of the message by type and direction.
- [device profile](/docs/user-guide/rule-engine-2-0/nodes/action/device-profile) — evaluates incoming messages against [alarm rules](/docs/{{docsPrefix}}/user-guide/device-profiles/#alarm-rules) defined in the device profile of the message originator and creates, updates, or clears alarms based on the evaluation results.
- [device state](/docs/user-guide/rule-engine-2-0/nodes/action/device-state) — sends device connectivity events for the message originator.
- [generate report](/docs/user-guide/rule-engine-2-0/nodes/action/generate-report) — Generates report files by capturing target dashboard with specific configuration.
- [generator](/docs/user-guide/rule-engine-2-0/nodes/action/generator) — Generates Messages with configurable period. JavaScript function is used for message generation.
- [gps geofencing events](/docs/user-guide/rule-engine-2-0/nodes/action/gps-geofencing-events) — Produces incoming messages by GPS based parameters.
- [integration downlink](/docs/user-guide/rule-engine-2-0/nodes/action/integration-downlink) — Forwards Message to selected Integration as downlink message.
- [log](/docs/user-guide/rule-engine-2-0/nodes/action/log) — executes a user-defined script to transform message data, metadata, and type into a custom formatted string and logs that string to the ThingsBoard log file.
- [math function](/docs/user-guide/rule-engine-2-0/nodes/action/math-function) — The rule node applies math function and saves the result into the message and/or database.
- [message count](/docs/user-guide/rule-engine-2-0/nodes/action/message-count) — Counts incoming messages for specified interval and produces POST_TELEMETRY_REQUEST msg with messages count.
- [push to cloud](/docs/user-guide/rule-engine-2-0/nodes/action/push-to-cloud) — Sends messages from the edge instance to the cloud platform.
- [push to edge](/docs/user-guide/rule-engine-2-0/nodes/action/push-to-edge) — Sends messages from the cloud platform to an edge instance.
- [remove from group](/docs/user-guide/rule-engine-2-0/nodes/action/remove-from-group) — removes the message originator entity from an entity group found by group name pattern.
- [rest call reply](/docs/user-guide/rule-engine-2-0/nodes/action/rest-call-reply) — Sends reply to REST API call that was originally sent to rule engine.
- [rpc call reply](/docs/user-guide/rule-engine-2-0/nodes/action/rpc-call-reply) — Sends response to the RPC Call originator.
- [rpc call request](/docs/user-guide/rule-engine-2-0/nodes/action/rpc-call-request) — Sends RPC requests to the Device and routing response to the next Rule nodes.
- [save attributes](/docs/user-guide/rule-engine-2-0/nodes/action/save-attributes) — Stores the incoming message payload as attribute data of the message originator.
- [save time series](/docs/user-guide/rule-engine-2-0/nodes/action/save-timeseries) — Stores the incoming message payload as time series data of the message originator.
- [save to custom table](/docs/user-guide/rule-engine-2-0/nodes/action/save-to-custom-table) — Node stores data from incoming Message payload to the Cassandra database into the predefined custom table that should have cs_tb_ prefix, to avoid the data insertion to the common TB tables.
- [unassign from customer](/docs/user-guide/rule-engine-2-0/nodes/action/unassign-from-customer) — unassigns the message originator from a customer.
