<table style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

Stores the incoming message payload as attribute data of the message originator.

**Expected incoming message format**

The node accepts messages of type `POST_ATTRIBUTES_REQUEST` and expects incoming message payload to be an object where each property name represents an attribute key, and its corresponding value is the attribute value. For example:
```json
{
  "firmware_version": "1.0.1",
  "serial_number": "SN-001"
}
```

**Configuration: Processing settings**

The save attributes node can perform three distinct actions, each governed by configurable processing strategies:
- **Attributes**: saves attribute data to the database.
- **WebSockets**: notifies WebSocket subscriptions about updates to the attribute data.
- **Calculated fields**: notifies calculated fields about updates to the attribute data.

For each of these actions, you can choose from the following **processing strategies**:
{% include docs/user-guide/rule-engine-2-0/processing-strategies-explanation.md %}

> **Note**: Processing strategies are available since TB version 4.0.

Processing strategies can be set using either **Basic** or **Advanced processing settings**.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-pe.png)
{% endif %}

- **Basic processing settings** - provide predefined strategies for all actions:
    - On every message: applies the **On every message** strategy to all actions. All actions are performed for all messages.
    - Deduplicate: applies the **Deduplicate** strategy (with a specified interval) to all actions.
    - WebSockets only: for all actions except WebSocket notifications, the **Skip** strategy is applied, while WebSocket notifications use the **On every message** strategy.
      Effectively, nothing is stored in a database; data is available only in real-time via WebSocket subscriptions.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-pe.png)
{% endif %}

- **Advanced processing settings** - allow you to configure each action’s processing strategy independently.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-processing-settings-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-processing-settings-pe.png)
{% endif %}

When configuring the processing strategies in advanced mode, certain combinations can lead to unexpected behavior. Consider the following scenarios:

{% include docs/user-guide/rule-engine-2-0/advanced-processing-strategies-hazards.md %}

Due to the scenarios described above, the ability to configure each persistence action independently—including setting different deduplication intervals—should be treated as a performance optimization rather than a strict processing guarantee.

**Configuration: Scope**

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-attributes-scope-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-attributes-scope-pe.png)
{% endif %}

The node determines the attribute scope for each incoming message by evaluating the `scope` property in its metadata.
The supported scope types are **Client attributes**, **Shared attributes**, and **Server attributes**. The algorithm is as follows:

1. If the incoming message metadata contains a non-empty `scope` property, the node compares its value against the supported scope values:
    - `CLIENT_SCOPE` corresponds to **Client attributes**
    - `SHARED_SCOPE` corresponds to **Shared attributes**
    - `SERVER_SCOPE` corresponds to **Server attributes**
2. If a match is found, the corresponding scope is applied, and processing continues.
3. If no valid match is found, the message processing fails.
4. If the `scope` property is absent or an empty string, the node uses the scope specified in the node configuration.

**Configuration: Advanced settings**

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-settings.png)

* **Save attributes only if the value changes** – if enabled, the node first retrieves the current values for the specified attribute keys and then compares them with the incoming values.
  If an attribute is missing, its value has changed, or its data type differs from what’s stored, it is marked for saving. If no changes are detected, the node skips the save operation.

  > **Note**: Avoid concurrent writes of the same attributes because change-detection is not transactional and may produce unexpected results in such cases.

  > **Note**: If the attribute save is skipped because the value has not changed, the attribute’s last updated timestamp will not be updated.

* **Send attributes updated notification** – if enabled, and if the attribute scope is not `CLIENT_SCOPE` (i.e., for `SHARED_SCOPE` and `SERVER_SCOPE`),
  the node puts an [Attributes Updated](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) event to the queue named `Main`.
* **Force notification to the device** - the node determines whether to notify the device about attribute updates by evaluating the **Force notification to the device** option and the `notifyDevice` property in the incoming message metadata. The algorithm is as follows:
    1. If the **Force notification to the device** option is enabled, the node always sends attribute update notifications to the device, regardless of the `notifyDevice` metadata value.
    2. If the option is disabled, the node checks the `notifyDevice` property in the message metadata:
        * If the property is absent or an empty string, it defaults to sending the notification.
        * If the property is provided, the notification is sent only if its value is `true` (ignoring case).
    3. In all cases, the notification is only sent if the device has an active subscription for the updated (or deleted) attributes.
    4. Additionally, attribute notifications are not sent if:
        * The attribute save is skipped because its value did not change (when **Save attributes only if the value changes** is enabled).
        * The attribute save is skipped due to the configured processing strategy (e.g., set to Skip).

**Output connections**

* **Success:**
    * If an incoming message was successfully processed.
* **Failure:**
    * If an incoming message type is not `POST_ATTRIBUTES_REQUEST`.
    * If an incoming message payload cannot be parsed to attribute key-value pairs.
    * If the incoming message metadata includes a non-empty `scope` property whose value does not match one of the valid attribute scopes (i.e. `CLIENT_SCOPE`, `SHARED_SCOPE`, or `SERVER_SCOPE`).
    * If unexpected error occurs during message processing.
