Prepares an incoming message for email dispatch. Based on the configuration and the incoming message, this node modifies the incoming message to correctly describe an email. The
prepared message is then sent via the `Success` connection and is intended to be routed to a **send email** node, which handles the actual email dispatch.

## Configuration

### Email sender

- **From** - the sender's email address.

### Recipients

- **To** - a comma-separated list of primary recipient email addresses.
- **Cc** - a comma-separated list of carbon copy recipients.
- **Bcc** - a comma-separated list of blind carbon copy recipients.

### Message subject and content

- **Subject** - the subject line of the email.
- **Mail body type** - determines how the email body is treated.
    - *Plain text* - the body is sent as simple, unformatted text.
    - *HTML* - the body is rendered as HTML, allowing for formatting, links, and images.
    - *Use body type template* - the body type (HTML or plain text) is determined at runtime based on a template.
        - **Body type template** - a template (e.g., `${useHtml}`) that should resolve to either `"true"` (for HTML) or `"false"` (for Plain text) based on the incoming message
          data or metadata.
- **Body** - the main content of the email.

{% capture templatization_support_note %}
**Note:** All input fields support templatization.
{% endcapture %}
{% include templates/info-banner.md content=templatization_support_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgToEmailNodeConfiguration",
  "type": "object",
  "properties": {
    "fromTemplate": {
      "type": "string",
      "description": "Template for the sender's email address (From)."
    },
    "toTemplate": {
      "type": "string",
      "description": "Template for the primary recipients' email addresses (To), comma-separated."
    },
    "ccTemplate": {
      "type": "string",
      "description": "Template for the carbon copy recipients' email addresses (Cc), comma-separated."
    },
    "bccTemplate": {
      "type": "string",
      "description": "Template for the blind carbon copy recipients' email addresses (Bcc), comma-separated."
    },
    "subjectTemplate": {
      "type": "string",
      "description": "Template for the email subject line."
    },
    "bodyTemplate": {
      "type": "string",
      "description": "Template for the email body content."
    },
    "mailBodyType": {
      "type": "string",
      "description": "Determines the content type of the email body.",
      "enum": [
        "false",
        "true",
        "dynamic"
      ]
    },
    "isHtmlTemplate": {
      "type": "string",
      "description": "Template to dynamically determine if the body is HTML. Used when 'mailBodyType' is 'dynamic'. Should resolve to 'true' or 'false'."
    }
  },
  "required": [
    "fromTemplate",
    "toTemplate",
    "subjectTemplate",
    "bodyTemplate",
    "mailBodyType"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node receives an incoming message.
2. It processes all configured template fields (`From`, `To`, `Cc`, `Bcc`, `Subject`, `Body`, `Body type template`) by substituting templates with corresponding
   values.
3. **Special patterns** are processed in the `Subject` and `Body` fields:
    - **Date Formatting** - you can insert the current date and time using the pattern `%d{...}`, where the content inside the braces is a Java `SimpleDateFormat` pattern (e.g.,
      `Device Alert at %d{yyyy-MM-dd HH:mm:ss}`). The date used is the timestamp of when the message is processed.
    - **Timezone** - The date formatting can be made timezone-aware. If the incoming message metadata contains a key named `emailTimezone` with a valid timezone ID (e.g.,
      `Europe/Kyiv` or `America/New_York`), that timezone will be applied. Otherwise, the server's default timezone is used.
4. The node checks the incoming message metadata for specific keys to include **attachments** or **embedded images**:
    - `attachments` - a comma-separated string of file UUIDs (these are Blob Entity IDs from the system). Each file will be attached to the email.
    - `reports` - a comma-separated string of report UUIDs. The system will attach the corresponding report files.
    - `images` - a JSON string representing a map of Content-IDs (CIDs) to data URLs (e.g., `{"logo": "data:image/png;base64,..."}`). This allows you to embed images directly
      within
      an HTML email body using `<img src="cid:logo">`.
5. After processing, the node constructs a message with the type `SEND_EMAIL`. The data of this new message is a JSON object containing all the email details (from, to,
   subject, body, etc.).
6. This new `SEND_EMAIL` message is routed via `Success` connection.

## Output connections

- `Success`:
    - A transformed message with type `SEND_EMAIL` is sent through this connection.
- `Failure`:
    - The original message is sent if an error occurs during transformation.

## Examples

### Example 1: Preparing alarm email

This example shows how to configure the node to prepare a basic alarm email when a device's temperature reading is too high.

**Scenario**: A device sends a message with a temperature reading. If the temperature is high, `High Temperature` alarm is created using "create alarm" node.
Message about alarm creation is then routed to "to email" node.

**Incoming message**

Data:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "0bb1683d-4ce1-4c94-8fa8-0a12aa1e77e3"
  },
  "createdTime": 1756464801953,
  "tenantId": {
    "entityType": "TENANT",
    "id": "e37d0ee0-84bb-11f0-aa77-9bb4115aa01d"
  },
  "customerId": null,
  "type": "High Temperature",
  "originator": {
    "entityType": "DEVICE",
    "id": "dd312c60-84c0-11f0-aa77-9bb4115aa01d"
  },
  "severity": "CRITICAL",
  "acknowledged": false,
  "cleared": false,
  "assigneeId": null,
  "startTs": 1756464801946,
  "endTs": 1756464801946,
  "ackTs": 0,
  "clearTs": 0,
  "assignTs": 0,
  "propagate": false,
  "propagateToOwner": false,
  "propagateToOwnerHierarchy": false,
  "propagateToTenant": false,
  "propagateRelationTypes": [],
  "originatorName": "device",
  "originatorLabel": "device",
  "assignee": null,
  "name": "High Temperature",
  "status": "ACTIVE_UNACK",
  "details": {
    "temperatureValue": 95.5,
    "temperatureThreshold": 90
  }
}
```

Metadata:

```json
{
  "deviceName": "TempSensor-A1",
  "deviceType": "Temperature Sensor"
}
```

**Node configuration**

```json
{
  "fromTemplate": "alarms@yourcompany.com",
  "toTemplate": "example@yourcompany.com",
  "ccTemplate": null,
  "bccTemplate": null,
  "subjectTemplate": "${deviceType} - ${deviceName}: High temperature alarm",
  "mailBodyType": "false",
  "bodyTemplate": "A temperature of $[details.temperatureValue] exceeds the threshold of $[details.temperatureThreshold]."
}
```

**Outgoing message**

A message with type `SEND_EMAIL` is sent via the `Success` chain. Its data is a JSON object representing the email to be sent:

```json
{
  "from": "alarms@yourcompany.com",
  "to": "example@yourcompany.com",
  "cc": null,
  "bcc": null,
  "subject": "Temperature Sensor - TempSensor-A1: High temperature alarm",
  "body": "A temperature of 95.5 exceeds the threshold of 90.",
  "attachments": null,
  "reports": null,
  "images": null,
  "html": false
}
```

**Explanation**: The node uses substitution patterns to dynamically build the email. The subject is created by taking `${deviceType}` and `${deviceName}` from the message metadata.
The body is constructed using values from the message data, specifically `$[details.temperatureValue]` and `$[details.temperatureThreshold]`.
As you can see in the outgoing message, these placeholders are replaced with their corresponding values from the incoming message, resulting in a fully formed email ready for
dispatch.
