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

### Calculated field configuration

**Purpose:** Maintain a rolling window of the last N readings (default 100, configurable) efficiently and forward them directly to the AI node.

**Steps:**

<b>1. [Download](/docs/samples/analytics/resources/equipment_sensor.json){:target="_blank" download="equipment_sensor.json"}</b> and import the **EquipmentSensor** device profile into your ThingsBoard instance.

{% include images-gallery.html imageCollection="import-equipment-sensor-device-profile" %}

<b>2. [Download](/docs/samples/analytics/resources/rolling-window-records.json){:target="_blank" download="rolling-window-records.json"}</b> and import the calculated field into the **EquipmentSensor** device profile.

{% include images-gallery.html imageCollection="import-calculated-field-into-profile" %}

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

- [Download](/docs/samples/analytics/resources/equipment_health_analysis.json){:target="_blank" download="equipment_health_analysis.json"} the <b>json file</b> with the "<b>Equipment Health Analysis</b>" rule chain configuration.

{% include images-gallery.html imageCollection="import-equipment-health-analysis-rule-chain" showListImageTitles="true" %}

<b>5.</b> Update the <b>EquipmentSensor</b> profile to reference the "<b>Equipment Health Analysis</b>" rule chain.

{% include images-gallery.html imageCollection="update-equipment-sensor-profile" %}

Important details:

* System and user prompts can reference incoming message data:
  * `$[*]` — entire message body
  * `${*}` — entire message metadata
  * `$[key]` — a specific message body field
  * `${key}` — a specific metadata value
* Supported response formats: **TEXT**, **JSON**, and **JSON Schema** (we use JSON Schema here).
* A **deduplication** node with a 5-second interval is used to reduce AI token usage.

### Testing

<b>Step 1.</b> Create a test device **Equipment Sensor 1** with the **EquipmentSensor** profile.

{% include images-gallery.html imageCollection="create-test-device-1" %}

<b>Step 2.</b> Copy the "Check connectivity" command from the device details. 

{% include images-gallery.html imageCollection="create-test-device-2" %}

Your command will look something like this.:

{% if docsPrefix == null %}

```bash
curl -v -X POST http://demo.thingsboard.io/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data "{temperature:25}"
```

<b>* Where<b> `$THINGSBOARD_HOST_NAME` refers to `demo.thingsboard.io`, and `$YOUR_DEVICE_ACCESS_TOKEN` is `6sDE1ALqyJg0P6ezIODH`.

{% include images-gallery.html imageCollection="check-connectivity-command-from-device" %}

For your case, use the command with your own credentials. Replace `$THINGSBOARD_HOST_NAME` and `$YOUR_DEVICE_ACCESS_TOKEN` with corresponding values.

```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data "{temperature:25}"
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "pe/" %}

Replace `$THINGSBOARD_HOST_NAME:PORT` and `$YOUR_DEVICE_ACCESS_TOKEN` with corresponding values.

```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME:PORT/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data "{temperature:25}"
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```bash
curl -v -X POST http://thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data "{temperature:25}"
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/eu/" %}

```bash
curl -v -X POST http://eu.thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data "{temperature:25}"
```
{:.copy-code}

{% endif %}

<b>Step 3.</b> Modify and send test data.

**No alarm** case:

{% if docsPrefix == null %}
```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data '{"vibration":4.2,"temperature":70,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "pe/" %}

Replace `$THINGSBOARD_HOST_NAME:PORT` and `$YOUR_DEVICE_ACCESS_TOKEN` with corresponding values.

```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME:PORT/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data '{"vibration":4.2,"temperature":70,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```bash
curl -v -X POST http://thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":4.2,"temperature":70,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/eu/" %}

```bash
curl -v -X POST http://eu.thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":4.2,"temperature":70,"acousticDev":5}'
```
{:.copy-code}

{% endif %}

{% include images-gallery.html imageCollection="send-test-data-no-alarm-case" %}




**Bearing wear** detection:

{% if docsPrefix == null %}
```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data '{"vibration":8.2,"temperature":88,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "pe/" %}

Replace `$THINGSBOARD_HOST_NAME:PORT` and `$YOUR_DEVICE_ACCESS_TOKEN` with corresponding values.

```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME:PORT/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data '{"vibration":8.2,"temperature":88,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```bash
curl -v -X POST http://thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":8.2,"temperature":88,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/eu/" %}

```bash
curl -v -X POST http://eu.thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":8.2,"temperature":88,"acousticDev":5}'
```
{:.copy-code}

{% endif %}

{% include images-gallery.html imageCollection="send-test-data-bearing-wear-detection" %}

Sample AI output:

```json
{
  "anomaly": "Bearing Wear",
  "summary": "Vibration has reached 7.4 mm/s and temperature is at 86 °C accompanied by irregular acoustic patterns, indicating bearing wear. Recommend immediate bearing inspection and replacement to avoid catastrophic failure."
}
```

**Misalignment** detection:

{% if docsPrefix == null %}

```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data '{"vibration":32.2,"temperature":38,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "pe/" %}

Replace `$THINGSBOARD_HOST_NAME:PORT` and `$YOUR_DEVICE_ACCESS_TOKEN` with corresponding values.

```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME:PORT/api/v1/$YOUR_DEVICE_ACCESS_TOKEN/telemetry \
--header Content-Type:application/json \
--data '{"vibration":32.2,"temperature":38,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```bash
curl -v -X POST http://thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":32.2,"temperature":38,"acousticDev":5}'
```
{:.copy-code}

{% endif %}
{% if docsPrefix == "paas/eu/" %}

```bash
curl -v -X POST http://eu.thingsboard.cloud/api/v1/6sDE1ALqyJg0P6ezIODH/telemetry \
--header Content-Type:application/json \
--data '{"vibration":32.2,"temperature":38,"acousticDev":5}'
```
{:.copy-code}

{% endif %}

{% include images-gallery.html imageCollection="send-test-data-misalignment-detection" %}

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
