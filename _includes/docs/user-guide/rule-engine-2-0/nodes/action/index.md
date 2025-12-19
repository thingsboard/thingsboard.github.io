Action nodes are the execution components of ThingsBoard's rule engine that perform concrete operations and side effects based on the messages flowing through the rule chain.

These nodes can automate various system operations like persisting time series and attributes to the database, managing alarms, controlling device commands and modifying system state. 

Action nodes allow you to automate your workflows by executing operations based on your data without requiring manual interaction.

- <span class="item-ce product-label-padding">[assign to customer](/docs/user-guide/rule-engine-2-0/nodes/action/assign-to-customer)</span> — assigns the message originator to a specified customer.
- <span class="item-pe product-label-padding">[add to group](/docs/user-guide/rule-engine-2-0/nodes/action/add-to-group)</span> — adds the message originator to the entity group found by group name pattern.
- [calculated fields](/docs/user-guide/rule-engine-2-0/nodes/action/calculated-fields) — triggers calculated field processing for time series or attribute data without persisting the original data to the database.
- <span class="item-pe product-label-padding">[change owner](/docs/user-guide/rule-engine-2-0/nodes/action/change-owner)</span> — changes the ownership of the message originator to a specified tenant or customer.
- [clear alarm](/docs/user-guide/rule-engine-2-0/nodes/action/clear-alarm) — clears existing active alarms for the message originator.
- [copy to view](/docs/user-guide/rule-engine-2-0/nodes/action/copy-to-view) — replicates attribute changes from assets/devices to their associated entity views.
- [create alarm](/docs/user-guide/rule-engine-2-0/nodes/action/create-alarm) — creates new alarms or updates existing active alarms for the message originator.
- [create relation](/docs/user-guide/rule-engine-2-0/nodes/action/create-relation) — creates relation between the message originator and a specified target entity with configurable direction and type.
- [delay (deprecated)](/docs/user-guide/rule-engine-2-0/nodes/action/delay) — delays incoming messages for a configurable period before forwarding them to the next rule node.
- [delete attributes](/docs/user-guide/rule-engine-2-0/nodes/action/delete-attributes) — deletes specified attributes from message originator.
- [delete relation](/docs/user-guide/rule-engine-2-0/nodes/action/delete-relation) — deletes the relation from the selected entity to originator of the message by type and direction.
- [device profile](/docs/user-guide/rule-engine-2-0/nodes/action/device-profile) — evaluates incoming messages against [alarm rules](/docs/{{docsPrefix}}/user-guide/device-profiles/#alarm-rules){:target="_blank"} defined in the device profile of the message originator and creates, updates, or clears alarms based on the evaluation results.
- [device state](/docs/user-guide/rule-engine-2-0/nodes/action/device-state) — sends device connectivity events for the message originator.
- <span class="item-pe product-label-padding">[generate dashboard report](/docs/user-guide/rule-engine-2-0/nodes/action/generate-dashboard-report)</span> — generates a screenshot of a dashboard with specific configuration applied.
- <span class="item-pe product-label-padding">[generate report](/docs/user-guide/rule-engine-2-0/nodes/action/generate-report)</span> — generates a report based on a report template and sends notifications to configured targets.
- [generator](/docs/user-guide/rule-engine-2-0/nodes/action/generator) — generates messages at configurable time intervals using a custom script function.
- [gps geofencing events](/docs/user-guide/rule-engine-2-0/nodes/action/gps-geofencing-events) — monitors GPS coordinates against polygon or circle geofences and routes messages based on entry, exit, and presence duration events.
- <span class="item-pe product-label-padding">[integration downlink](/docs/user-guide/rule-engine-2-0/nodes/action/integration-downlink)</span> — pushes the incoming message as a downlink message to a selected integration.
- [log](/docs/user-guide/rule-engine-2-0/nodes/action/log) — executes a user-defined script to transform message data, metadata, and type into a custom formatted string and logs that string to the ThingsBoard log file.
- [math function](/docs/user-guide/rule-engine-2-0/nodes/action/math-function) — performs mathematical operations on numeric data retrieved from multiple sources (constants, message, metadata, attributes, or time series) and saves results to the message or database.
- [message count](/docs/user-guide/rule-engine-2-0/nodes/action/message-count) — counts incoming messages over a specified time interval and outputs a message containing the count for each interval.
- <span class="item-edge product-label-padding">[push to cloud](/docs/user-guide/rule-engine-2-0/nodes/action/push-to-cloud)</span> — sends the incoming message from ThingsBoard Edge instance to cloud ThinsBoard instance for further processing.
- [push to edge](/docs/user-guide/rule-engine-2-0/nodes/action/push-to-edge) — sends the incoming message from cloud ThingsBoard instance to ThinsBoard Edge instance for further processing on Edge.
- <span class="item-pe product-label-padding">[remove from group](/docs/user-guide/rule-engine-2-0/nodes/action/remove-from-group)</span> — removes the message originator entity from an entity group found by group name pattern.
- [rest call reply](/docs/user-guide/rule-engine-2-0/nodes/action/rest-call-reply) — sends the incoming message data as an HTTP response to a REST API call made to the rule engine.
- [rpc call reply](/docs/user-guide/rule-engine-2-0/nodes/action/rpc-call-reply) — sends the incoming message data as a [reply]((/docs/{{docsPrefix}}user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial)) to a [Remote Procedure Call (RPC)](/docs/{{docsPrefix}}user-guide/rpc){:target="_blank"} from a device.
- [rpc call request](/docs/user-guide/rule-engine-2-0/nodes/action/rpc-call-request) — sends an RPC to a device, returning the device's response as outgoing message data.
- [save attributes](/docs/user-guide/rule-engine-2-0/nodes/action/save-attributes) — stores the incoming message data as attribute data of the message originator.
- [save time series](/docs/user-guide/rule-engine-2-0/nodes/action/save-timeseries) — stores the incoming message data as time series data of the message originator.
- [save to custom table](/docs/user-guide/rule-engine-2-0/nodes/action/save-to-custom-table) — stores the incoming message data in a custom Cassandra table.
- <span class="item-ce product-label-padding">[unassign from customer](/docs/user-guide/rule-engine-2-0/nodes/action/unassign-from-customer)</span> — unassigns the message originator from a customer.
