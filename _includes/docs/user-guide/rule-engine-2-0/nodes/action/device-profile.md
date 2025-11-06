Creates, updates and clears alarms based on the [alarm rules](/docs/{{docsPrefix}}/user-guide/device-profiles/#alarm-rules) defined in the device profile of the message originator.

## Configuration

- **Persist state of alarm rules**: When enabled, stores the state of alarm rules in the database.
- **Fetch state of alarm rules**: Controls when alarm rule states are loaded from database.
    - **Enabled**: Alarm rule states are preloaded during node startup.
    - **Disabled**: Alarm rule states are loaded on-demand when the first message from device is received.

{% capture alarm_rules_both_options_note %}
**Note**: If you decide to you these options, we recommend having both enabled at the same time, but when you have a large number of devices, it can be
beneficial to disable the fetch option to improve startup time.
{% endcapture %}
{% include templates/info-banner.md content=alarm_rules_both_options_note %}

### Persist state of alarm rules configuration

This option addresses alarm rule evaluation continuity across server restarts. By default, the node tracks alarm rule states in memory, which are lost during restarts.

Alarm rules require stateful evaluation over time:

- **Duration conditions**: "Temperature exceeds 100°C for 10 minutes" - requires tracking when the duration during which condition is true
- **Repeating conditions**: "Temperature exceeds 100°C five times in a row" - requires counting consecutive occurrences

If the server restarts mid-evaluation (e.g., after 7 minutes of a 10-minute duration, or 3 out of 5 repetitions), the tracking state is lost and alarm evaluation restarts from
zero.

To solve this, **Persist state of alarm rules** configuration option allows persisting alarm rule states to the database instead of keeping them only in memory, ensuring evaluation
continuity across restarts.

{% capture alarm_rules_persistence_cost_note %}
**Note**: This comes at the cost of additional database writes for each message matching alarm conditions, which can be significant under high message volumes.
{% endcapture %}
{% include templates/info-banner.md content=alarm_rules_persistence_cost_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbDeviceProfileNodeConfiguration",
  "type": "object",
  "properties": {
    "persistAlarmRulesState": {
      "type": "boolean",
      "description": "Whether to store the processing state of alarm rules in the database",
      "default": false
    },
    "fetchAlarmRulesStateOnStart": {
      "type": "boolean",
      "description": "Whether to restore alarm rule processing state when the rule node initializes",
      "default": false
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Load device profile**: Retrieves the device profile associated with the message originator.
2. **Extract alarm rules**: Gets all alarm rules configured in the device profile.
3. **Rule evaluation**: Evaluates alarm rules configured for the originator device against the incoming message.
4. **Alarm processing**: Creates, updates, or clears alarms based on the evaluation result.
5. **Generate alarm messages**: Produces new alarm messages depending on evaluation result. The data of the generated message represents the alarm after the alarm changes were
   applied (after create, update, or clear).
6. **State persistence**: If **Persist state of alarm rules** is enabled and the message matches at least one alarm condition, persists the current processing state to the
   database.
7. **Route message**: Routes the original message to `Success` with no modifications.

## Output connections

- `Success`
    - Message was successfully processed and alarm rules were evaluated
    - The original message is routed here with no modifications
- `Alarm Created`
    - Generated messages about alarm creation are routed here
- `Alarm Updated`
    - Generated messages about alarm updates are routed here
- `Alarm Severity Updated`
    - Generated messages about alarm severity updates are routed here
- `Alarm Cleared`
    - Generated messages about alarm clearing are routed here
- `Failure`
    - Unexpected error occurred during alarm rule evaluation or processing
