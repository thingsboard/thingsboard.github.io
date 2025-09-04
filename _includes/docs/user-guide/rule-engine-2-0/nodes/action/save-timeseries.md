<table style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

Stores the incoming message payload as time series data of the message originator.

**Expected incoming message format**

The node accepts messages of type `POST_TELEMETRY_REQUEST` and supports the following three **payload formats**:

1. Key-value pairs: an object where each property name represents a time series key, and its corresponding value is the time series value.
    ```json
    {
      "temperature": 42.2,
      "humidity": 70
    }
    ```

2. Timestamped key-value pairs: an object that includes a `ts` property for the timestamp and a `values` property containing key-value pairs (defined in format 1).
    ```json
    {
      "ts": 1737963587742,
      "values": {
        "temperature": 42.2,
        "humidity": 70
      }
    }
    ```

3. Multiple timestamped key-value pairs: an array of timestamped key-value pair objects (defined in format 2).
    ```json
    [
      {
        "ts": 1737963595638,
        "values": {
          "temperature": 42.2,
          "humidity": 70
        }
      },
      {
        "ts": 1737963601607,
        "values": {
          "pressure": 2.56,
          "velocity": 0.553
        }
      }
    ]
    ```

**Configuration: Processing settings**

The save time series node can perform four distinct actions, each governed by configurable processing strategies:
- **Time series**: saves time series data to the `ts_kv` table in the database.
- **Latest values**: updates time series data in the `ts_kv_latest` table in the database, if new data is more recent.
- **WebSockets**: notifies WebSocket subscriptions about updates to the time series data.
- **Calculated fields**: notifies calculated fields about updates to the time series data.

For each of these actions, you can choose from the following **processing strategies**:
{% include docs/user-guide/rule-engine-2-0/processing-strategies-explanation.md %}

> **Note**: Processing strategies are available since TB version 4.0. "Skip latest persistence" toggle from earlier TB versions corresponds to "Skip" strategy for Latest values.

Processing strategies can be set using either **Basic** or **Advanced processing settings**.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-pe.png)
{% endif %}

- **Basic processing settings** - provide predefined strategies for all actions:
    - On every message: applies the **On every message** strategy to all actions. All actions are performed for all messages.
    - Deduplicate: applies the **Deduplicate** strategy (with a specified interval) to all actions.
    - WebSockets only: applies the **Skip** strategy to Time series and Latest values, and the **On every message** strategy to WebSockets.
      Effectively, nothing is stored in a database; data is available only in real-time via WebSocket subscriptions.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-pe.png)
{% endif %}

- **Advanced processing settings** - allow you to configure each action’s processing strategy independently.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-processing-settings-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-processing-settings-pe.png)
{% endif %}

When configuring the processing strategies in advanced mode, certain combinations can lead to unexpected behavior. Consider the following scenarios:

{% include docs/user-guide/rule-engine-2-0/advanced-processing-strategies-hazards.md %}

Due to the scenarios described above, the ability to configure each persistence action independently—including setting different deduplication intervals—should be treated as a performance optimization rather than a strict processing guarantee.

**Configuration: Advanced settings**

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-settings-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-timeseries-advanced-settings-pe.png)
{% endif %}

* **Use server timestamp** - if enabled, rule node will use current server time when time series data does not have an explicit timestamp associated with it (**payload format 1** is used). Available since TB Version 3.3.3

  The node determines the timestamp for each time series data point using the following priority:
    1. If the time series data includes a `ts` property (**payload formats 2 and 3**), this timestamp is used.
    2. If the **Use server timestamp** option is enabled, the current server time is used.
    3. If the message metadata contains a `ts` property (expected in UNIX milliseconds), this value is used.
    4. If none of the above are provided, the timestamp when the message was created is used.

  Using server time is particularly important in sequential processing scenarios where messages may arrive with out-of-order timestamps from multiple sources.
  The DB layer has certain optimizations to ignore the updates of the attributes and latest values if the new record has a timestamp that is older than the previous record.
  So, to make sure that all the messages will be processed correctly, one should enable this parameter for sequential message processing scenarios.

* **Default TTL (Time-to-Live)** - determines how long the stored data remains in the database. The TTL is set based on the following priority:
    1. If the metadata contains a `TTL` property (expected as integer representing seconds), this value is used.
    2. If the metadata does not specify a `TTL`, the node's configured TTL value is applied.
    3. If the node's configured TTL is set to **0**, the Storage TTL defined in the tenant profile is used.

> **Note**: TTL value of 0 means that the data never expires.

**Output connections**
* **Success:**
    * If an incoming message was successfully processed.
* **Failure:**
    * If an incoming message type is not `POST_TELEMETRY_REQUEST`.
    * If an incoming message payload is empty (for example, `{}` or `[]` or even `[{}, {}, {}]`).
    * If unexpected error occurs during message processing.
