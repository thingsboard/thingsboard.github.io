* TOC
{:toc}

This document describes a ThingsBoard solution that turns raw device telemetry into actionable maintenance insights:

**Workflow:**
1. Devices send `vibration` (mm/s), `temperature` (°C), and `acousticDev` (% deviation from baseline).
2. [Calculated Fields](/docs/user-guide/calculated-fields/) maintain a rolling window of the last N values (default: 100) and/or last M minutes for each metric.
3. The rolling window is forwarded to an AI Rule Node (OpenAI or another LLM provider).
4. If the AI detects an anomaly, the rule chain creates a ThingsBoard Alarm and optionally sends a notification.


### Architecture

![image](/images/samples/analytics/iot-anomaly-detection-diagram.svg)

### Prerequisites

- ThingsBoard version **4.2+**
- Device(s) capable of sending the required telemetry values (for this guide, we will emulate them)
- LLM provider credentials (OpenAI, Azure OpenAI, etc.)

### Telemetry Input and Output

**Expected telemetry keys (per device):**
- `vibration` — mm/s (float)
- `temperature` — °C (float)
- `acousticDev` — % deviation from baseline (float)

**AI Output:**
- `anomaly` — short label (e.g., `"Bearing Wear"`)
- `summary` — concise human-readable recommendation (e.g., `"Vibration has reached 7.4 mm/s and temperature is at 86°C accompanied by irregular acoustic patterns, indicating bearing wear. Recommend immediate bearing inspection and replacement to avoid catastrophic failure."`)

### Calculated Field configuration

**Purpose:** Maintain a rolling window of the last N readings (default 100, configurable) efficiently and forward them directly to the AI node.

**Steps:**

1. [Download](/docs/samples/analytics/resources/equipment_sensor.json) and import the **EquipmentSensor** device profile;
2. [Download](/docs/samples/analytics/resources/rolling-window-records.json) and import the calculated field into the **EquipmentSensor** profile.

TODO: image carousel;

**Key notes:**

- Rolling window time range is set to **1 day**.
- The number of stored values is set to **100**. The default maximum is 1000, configurable in system settings.
- The TBEL script outputs the rolling values in a single message to the rule engine:

```javascript
// Sample script to output raw values of the rolling arguments;
return {
    "acousticDevRecords": acousticDevRecords,
    "temperatureRecords": temperatureRecords,
    "vibrationRecords": vibrationRecords
};
```

### Rule chain configuration

**Purpose:** Analyze the rolling window data, classify anomalies, and generate a plain-language summary. Works with OpenAI or other LLM providers.

**Steps:**

1. [Download](/docs/samples/analytics/resources/equipment_health_analysis.json) and import the ** Equipment Health Analysis** rule chain.
2. Edit the **AI request** node and create a new AI model.
3. Enter your API key (this example uses `o4-mini` from OpenAI). Test connectivity before saving.
4. Save both the AI node configuration and the rule chain.
5. Update the **EquipmentSensor** profile to reference the new rule chain.

TODO: image carousel;

Important details:

* System and user prompts can reference incoming message data:
  * `$[*]` — entire message body
  * `${*}` — entire message metadata
  * `$[key]` — a specific message body field
  * `${key}` — a specific metadata value
* Supported response formats: **TEXT**, **JSON**, and **JSON Schema** (we use JSON Schema here).
* A **deduplication** node with a 5-second interval is used to reduce AI token usage.

### Testing

1. Create a test device **Equipment Sensor 1** with the **EquipmentSensor** profile.
2. Copy the “check connectivity” command from the device details. Example:
```bash
curl -v -X POST http://localhost:8080/api/v1/hkDw8n5JnpuWqy5fcHCH/telemetry \
--header Content-Type:application/json \
--data '{temperature:25}'
```
3. Modify and send test data.

**No alarm** case:

```bash
curl -v -X POST http://localhost:8080/api/v1/hkDw8n5JnpuWqy5fcHCH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":4.2,"temperature":70,"acousticDev":5}'
```

**Bearing wear** detection:

```bash
curl -v -X POST http://localhost:8080/api/v1/hkDw8n5JnpuWqy5fcHCH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":8.2,"temperature":88,"acousticDev":5}'
```

Sample AI output:

```json
{
  "anomaly": "Bearing Wear",
  "summary": "Vibration has reached 7.4 mm/s and temperature is at 86 °C accompanied by irregular acoustic patterns, indicating bearing wear. Recommend immediate bearing inspection and replacement to avoid catastrophic failure."
}
```

**Misalignment** detection:

```bash
curl -v -X POST http://localhost:8080/api/v1/hkDw8n5JnpuWqy5fcHCH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":32.2,"temperature":38,"acousticDev":5}'
```

Sample AI output:

```json
{
  "anomaly": "Misalignment",
  "summary": "A sudden vibration spike to 32.2 mm/s without a corresponding temperature rise or acoustic deviation indicates likely misalignment in the drive train. Please perform an immediate shaft-and-coupling alignment check to prevent further mechanical damage."
}
```

### Performance & Cost Controls

* **Batching & debounce**: Send to AI only after N points or every T seconds.
* **Early filters**: Skip AI call if all metrics are comfortably within normal bands.
* **Payload compacting**: Send statistics (min/mean/max/std, trend) instead of full arrays if prompt allows.

### Troubleshooting

* **No alarms**: 
  1. Verify raw device data is available in 'Latest telemetry' tab. 
  2. Enable and browse the calculated field debug events.
  3. Enable and browse the corresponding rule nodes debug events. 
* **High costs**: Increase the de-duplication period, tune prompt or switch AI model.

### Next steps

Experiment with AI prompts and share your feedback with community! 
