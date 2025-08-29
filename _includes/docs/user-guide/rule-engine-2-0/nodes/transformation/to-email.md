# to email

Transforms an incoming message into a format suitable for sending as an email. This node populates email fields such as recipient, subject, and body by substituting patterns with
values from the message data and metadata.

The output of this node is a new message with the type `SEND_EMAIL`. This message is intended to be connected to and processed by a **send email** node, which handles the actual
email dispatch.

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

> Note: All input fields support templatization.

## Message processing algorithm

1. The node receives an incoming message.
2. It processes all configured template fields (`From`, `To`, `Cc`, `Bcc`, `Subject`, `Body`, `Use body type template`) by substituting templates with corresponding
   values.
3. **Special patterns** are processed in the `Subject` and `Body` fields:
    - **Date Formatting**: You can insert the current date and time using the pattern `%d{...}`, where the content inside the braces is a Java `SimpleDateFormat` pattern (e.g.,
      `Device Alert at %d{yyyy-MM-dd HH:mm:ss}`). The date used is the timestamp of when the message is processed.
    - **Timezone**: The date formatting can be made timezone-aware. If the incoming message metadata contains a key named `emailTimezone` with a valid timezone ID (e.g.,
      `Europe/Kyiv` or `America/New_York`), that timezone will be applied. Otherwise, the server's default timezone is used.
4. The node checks the incoming message metadata for specific keys to include **attachments** or **embedded images**:
    - `attachments`: A comma-separated string of file UUIDs (these are Blob Entity IDs from the system). Each file will be attached to the email.
    - `reports`: A comma-separated string of report UUIDs. The system will generate and attach the corresponding report files.
    - `images`: A JSON string representing a map of Content-IDs (CIDs) to data URLs (e.g., `{"logo": "data:image/png;base64,..."}`). This allows you to embed images directly within
      an HTML email body using `<img src="cid:logo">`.
5. After processing, the node constructs a new message with the type `SEND_EMAIL`. The body of this new message is a JSON object containing all the email details (from, to,
   subject, body, etc.).
6. This new `SEND_EMAIL` message is forwarded to the `Success` chain.

## Output connections

- `Success`:
    - A transformed message with type `SEND_EMAIL` is sent through this chain.
- `Failure`:
    - The original message is sent if an error occurs during transformation.

## Examples

### Example 1: Sending a High-Temperature Alert

This example shows how to configure the node to send a basic alert when a device's temperature reading is too high.

**Scenario**: A device sends a message with a temperature reading. If the temperature is high, the rule chain routes the message to the "to email" node to format an alert for the
customer associated with the device.

**Incoming message**

Data:

```json
{
  "temperature": 95.5
}
```

Metadata:

```json
{
  "deviceName": "Boiler-A1",
  "deviceType": "Boiler",
  "userEmail": "alerts@customer.com"
}
```

**Node configuration**

- **From**: `no-reply@thingsboard.io`
- **To**: `${userEmail}`
- **Subject**: `Device ${deviceType} temperature high`
- **Mail body type**: `Plain text`
- **Body**: `Device ${deviceName} has high temperature $[temperature]`

**Outgoing message**

A new message with type `SEND_EMAIL` is sent via the `Success` chain. Its data payload is a JSON object representing the email to be sent:

```json
{
  "from": "no-reply@thingsboard.io",
  "to": "alerts@customer.com",
  "cc": null,
  "bcc": null,
  "subject": "Device Boiler temperature high",
  "body": "Device Boiler-A1 has high temperature 95.5",
  "html": false,
  "images": null,
  "attachments": null,
  "reports": null
}
```

**Explanation**: The node replaced `${userEmail}`, `${deviceType}`, and `${deviceName}` with values from the metadata, and `$[temperature]` with the value from the message data,
creating a complete, ready-to-send email structure.

### Example 2: Sending a Daily Report with Date Formatting

This example demonstrates how to send a generated report as an attachment and use dynamic date formatting in the subject line.

**Scenario**: A rule is scheduled to run daily. It first uses a **generate report** node, which adds the ID of the generated PDF to the message metadata. The message is then passed
to the "to email" node.

**Incoming message**

Data:

```json
{}
```

Metadata:

```json
{
  "reports": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "recipient": "manager@company.com",
  "emailTimezone": "America/New_York"
}
```

**Node configuration**

- **From**: `reports@thingsboard.io`
- **To**: `${recipient}`
- **Subject**: `Daily Activity Report for %d{yyyy-MM-dd}`
- **Mail body type**: `Plain text`
- **Body**: `Please find the daily activity report attached.`

**Outgoing message**

A new message with type `SEND_EMAIL` is created. Assuming the current date is August 28, 2025:

```json
{
  "from": "reports@thingsboard.io",
  "to": "manager@company.com",
  "cc": null,
  "bcc": null,
  "subject": "Daily Activity Report for 2025-08-28",
  "body": "Please find the daily activity report attached.",
  "html": false,
  "images": null,
  "attachments": null,
  "reports": [
    "a1b2c3d4-e5f6-7890-1234-567890abcdef"
  ]
}
```

**Explanation**:

- The `To` field was populated using the `${recipient}` metadata value.
- The `%d{yyyy-MM-dd}` pattern in the `Subject` was replaced with the current date, formatted according to the timezone specified in the `emailTimezone` metadata.
- The node detected the `reports` key in the metadata and included the report ID in the outgoing message, instructing the **send email** node to attach the corresponding PDF.
