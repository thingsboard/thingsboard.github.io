# device profile switch

Routes incoming messages based on the name of the profile of the originator device.

## Preconditions

Incoming message originator entity type must be a `DEVICE`.

## Configuration

### Field descriptions

There are no available configuration fields.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "EmptyNodeConfiguration",
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```

## Message processing algorithm

1. Checks whether incoming message originator entity type is a `DEVICE`.
    1. If the incoming message originator entity type is not a `DEVICE`, processing end with a `Failure`.
2. Fetches the profile of that device from the database to get profile name.
    1. If profile was not found (possible if originator no longer exist at the time of message processing), processing ends with a `Failure`.
3. Routes the incoming message to downstream nodes using connection with a label that matches exactly with fetched profile name.

> Note: The incoming message is not modified.

## Output connections

* Device profile name:
    * If incoming message originator entity type is a `DEVICE` and profile for that device was found.
* `Failure`:
    * If the incoming message originator entity type is not a `DEVICE`.
    * If the profile for the incoming message originator was not found.
    * If another unexpected error occurred during message processing.

## Examples

The examples below show only the **relevant** fields of the incoming message. Unless explicitly stated otherwise, other message fields may have any values.

---

### Example 1 — Originator entity type is a `DEVICE` with profile “Temperature Sensor” → routed via **`Temperature Sensor`**

**Incoming message**

Originator entity type is a `DEVICE`.

**Node configuration**

```json
{}
```

**State of the system**

The device exists and its **profile name** is `Temperature Sensor`.

**Result**

Routed via **`Temperature Sensor`**.

**Explanation**

The node fetches the device’s profile and uses the **exact profile name** as the connection label.

---

### Example 2 — Originator entity type is **not** a `DEVICE` → **`Failure`**

**Incoming message**

Originator entity type is not a `DEVICE`. For example, it could be a `CUSTOMER` or any other entity type.

**Node configuration**

```json
{}
```

**State of the system**

Not relevant.

**Result**

**`Failure`**.

**Explanation**

The node requires the originator entity type to be a `DEVICE`.

---

### Example 3 — Device was not found at processing time → **`Failure`**

**Incoming message**

Originator entity type is a `DEVICE`.

**Node configuration**

```json
{}
```

**State of the system**

No device with this ID exists (e.g., it was deleted while message was in queue).

**Result**

**`Failure`**.

**Explanation**

The node cannot fetch the device’s profile.

---

## Use cases

Experienced platform users utilize device profiles and configure specific rule chains per device profile.
This is useful in most of the cases, except when the device data is derived from some other message.
For example, you may use BLE to MQTT gateway and BLE beacons. The Gateway payload typically contains MAC of the beacon and beacon data:

```json
{"mac": "7085C2F13DCD", "rssi": -25, "payload": "AABBCC"}
```

Let's assume you have different beacon profiles - indoor air quality "IAQ sensor" device profile and leak sensors "Leak sensor" device profile.
You can create a rule chain that will change the originator of the message from gateway to device and forward the message to the corresponding rule chain.
