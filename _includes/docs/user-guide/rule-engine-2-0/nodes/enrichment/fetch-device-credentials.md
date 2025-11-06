Fetches the credentials of the originator device and adds them to the message data or metadata.

## Configuration

The node has a single configuration option to determine where the fetched credentials should be placed.

- **Fetch credentials to** - Determines the destination for the new credential fields.
    - **Message**: Adds the fetched credentials to the message data. The message data must be a JSON object.
    - **Metadata**: Adds the fetched credentials to the message metadata.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbFetchDeviceCredentialsNodeConfiguration",
  "type": "object",
  "properties": {
    "fetchTo": {
      "type": "string",
      "enum": [
        "DATA",
        "METADATA"
      ],
      "description": "Destination for the fetched credentials (message data or metadata)."
    }
  },
  "required": [
    "fetchTo"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node first checks if the message originator is a `DEVICE`. If the originator is of any other type (e.g., `ASSET`, `CUSTOMER`), the message is passed to the `Failure`
   connection.
2. It then asynchronously fetches the credentials for the originator device from the database. If credentials are not found, the message is also passed to the `Failure` connection.
3. If credentials are found, the node prepares to add two new fields:
    * `credentialsType`: The type of the credentials (e.g., `ACCESS_TOKEN`, `X509_CERTIFICATE`, `MQTT_BASIC`).
    * `credentials`: The value of the credentials. The format of this field depends on the destination:
        * When adding to *Message*, the `credentials` field will be a JSON object for complex credentials (like MQTT Basic) or a simple string for others (like Access Token).
        * When adding to *Metadata*, the `credentials` value is always a string. For complex credentials, this will be a stringified JSON object.
4. Based on the **Fetch credentials to** setting, the node adds the `credentialsType` and `credentials` key-value pairs to either the message data or metadata.
5. The enriched message is forwarded via the `Success` connection. If an error occurs (e.g., originator is not a device, or trying to add to a non-JSON message body), the original
   message is routed to the `Failure` connection.

## Output connections

- `Success`:
    - The device credentials were successfully fetched and added to the message.
- `Failure`:
    - The message originator is not a `DEVICE`.
    - Credentials for the originator device could not be found.
    - **Fetch credentials to** is set to *Message*, but the message data is not a valid JSON object.

## Examples

### Example 1 — Adding device access token to metadata

**Incoming message**

Metadata:

```json
{
  "deviceName": "SmartMeter-001",
  "deviceType": "SmartMeter"
}
```

Originator: The originator is a device with **Access Token** credentials (`sm001_token_123`).

**Node configuration**

```json
{
  "fetchTo": "METADATA"
}
```

**Outgoing message**

The message is sent via the `Success` connection with updated metadata.

Metadata:

```json
{
  "deviceName": "SmartMeter-001",
  "deviceType": "SmartMeter",
  "credentialsType": "ACCESS_TOKEN",
  "credentials": "sm001_token_123"
}
```

**Explanation**: The node fetched originator's credentials, and added the `credentialsType` and `credentials` to the message metadata. The `credentials` is a string containing
device access token.

### Example 2 — Adding MQTT credentials to metadata

**Incoming message**

Data:

```json
{
  "deviceName": "SmartMeter-001",
  "deviceType": "SmartMeter"
}
```

Originator: The originator is a device with **MQTT Basic** credentials (`"{"clientId":"clientId123","userName":"username","password":"password"}"`).

**Node configuration**

```json
{
  "fetchTo": "METADATA"
}
```

**Outgoing message**

The message is sent via the `Success` connection with an updated metadata.

Metadata:

```json
{
  "deviceName": "SmartMeter-001",
  "deviceType": "SmartMeter",
  "credentialsType": "MQTT_BASIC",
  "credentials": "{\"clientId\":\"clientId123\",\"userName\":\"username\",\"password\":\"password123\"}"
}
```

**Explanation**: The node fetched the MQTT basic credentials for the device and added them to the message metadata. The `credentials` field is a stringified JSON object containing
the credentials.

### Example 3 — Adding X.509 credentials to metadata

**Incoming message**

Metadata:

```json
{
  "deviceName": "SmartMeter-001",
  "deviceType": "SmartMeter"
}
```

Originator: The originator is a device with **X.509** credentials (`o3Qwq2xqQz1pQ3R1Z1wYH9MYx3q2Yw2aC0EXAMPLE+CERIFICATEpQxG4b1g0O7r2kVq8pQIDAQAB`).

**Node configuration**

```json
{
  "fetchTo": "METADATA"
}
```

**Outgoing message**

The message is sent via the `Success` connection with an updated metadata.

Metadata:

```json
{
  "deviceName": "SmartMeter-001",
  "deviceType": "SmartMeter",
  "credentialsType": "X509_CERTIFICATE",
  "credentials": "o3Qwq2xqQz1pQ3R1Z1wYH9MYx3q2Yw2aC0EXAMPLE+CERIFICATEpQxG4b1g0O7r2kVq8pQIDAQAB"
}
```

**Explanation**: The node fetched the X.509 credentials for the device and added them to the message metadata. The `credentials` field is a string containing X.509 certificate
without header/footer.

### Example 4 — Adding device access token to data

**Incoming message**

Data:

```json
{
  "temperature": 33,
  "humidity": 56.2
}
```

Originator: The originator is a device with **Access Token** credentials (`sm001_token_123`).

**Node configuration**

```json
{
  "fetchTo": "DATA"
}
```

**Outgoing message**

The message is sent via the `Success` connection with updated data.

Data:

```json
{
  "temperature": 33,
  "humidity": 56.2,
  "credentialsType": "ACCESS_TOKEN",
  "credentials": "sm001_token_123"
}
```

**Explanation**: The node fetched originator's credentials, and added the `credentialsType` and `credentials` to the message data. The `credentials` is a string containing
device access token.

### Example 5 — Adding MQTT credentials to data

**Incoming message**

Data:

```json
{
  "temperature": 33,
  "humidity": 56.2
}
```

Originator: The originator is a device with **MQTT Basic** credentials (`"{"clientId":"clientId123","userName":"username","password":"password"}"`).

**Node configuration**

```json
{
  "fetchTo": "DATA"
}
```

**Outgoing message**

The message is sent via the `Success` connection with an updated data.

Data:

```json
{
  "deviceName": "SmartMeter-001",
  "deviceType": "SmartMeter",
  "credentialsType": "MQTT_BASIC",
  "credentials": {
    "clientId": "clientId123",
    "userName": "username",
    "password": "password"
  }
}
```

**Explanation**: The node fetched the MQTT basic credentials for the device and added them to the message data. The `credentials` field is a JSON object containing the credentials.

### Example 6 — Adding X.509 credentials to metadata

**Incoming message**

Data:

```json
{
  "temperature": 33,
  "humidity": 56.2
}
```

Originator: The originator is a device with **X.509** credentials (`o3Qwq2xqQz1pQ3R1Z1wYH9MYx3q2Yw2aC0EXAMPLE+CERIFICATEpQxG4b1g0O7r2kVq8pQIDAQAB`).

**Node configuration**

```json
{
  "fetchTo": "DATA"
}
```

**Outgoing message**

The message is sent via the `Success` connection with an updated data.

Data:

```json
{
  "temperature": 33,
  "humidity": 56.2
  "credentialsType": "X509_CERTIFICATE",
  "credentials": "o3Qwq2xqQz1pQ3R1Z1wYH9MYx3q2Yw2aC0EXAMPLE+CERIFICATEpQxG4b1g0O7r2kVq8pQIDAQAB"
}
```

**Explanation**: The node fetched the X.509 credentials for the device and added them to the message data. The `credentials` field is a string containing X.509 certificate
without header/footer.
