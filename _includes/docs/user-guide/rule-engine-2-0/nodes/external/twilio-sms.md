Sends SMS messages to specified phone numbers via [Twilio](https://www.twilio.com/messaging/channels/sms){:target="_blank"} messaging service.

## Configuration

- **Phone Number From** – The Twilio phone number or Messaging Service SID to send from. Must be in E.164 format (e.g., `+19995550123`). This field
  supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/){:target="_blank"}.
- **Phone Numbers To** – A comma-separated list of phone numbers that will receive the SMS message. This field
  supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/){:target="_blank"}.
- **Twilio Account SID** – Your Twilio account identifier.
- **Twilio Account Token** – Your Twilio authentication token.

{% capture credentials_note %}
**Note**: If you use Professional Edition, we highly recommend using [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} to securely store your account token.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbTwilioSmsNodeConfiguration",
  "type": "object",
  "properties": {
    "numberFrom": {
      "type": "string",
      "description": "Twilio phone number or Messaging Service SID (E.164 format). Supports templatization."
    },
    "numbersTo": {
      "type": "string",
      "description": "Comma-separated list of target phone numbers. Supports templatization."
    },
    "accountSid": {
      "type": "string",
      "description": "Twilio Account SID"
    },
    "accountToken": {
      "type": "string",
      "description": "Twilio Account Token"
    }
  },
  "required": [
    "numberFrom",
    "numbersTo",
    "accountSid",
    "accountToken"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node does not modify the incoming message. Both message data and metadata are passed through unchanged to the next node in the chain.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created as a copy.
  The SMS sending operation proceeds asynchronously, and after completion, the copy is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire SMS sending operation. The message is passed to the next node
  after the SMS operation completes.

## Message processing algorithm

1. The node processes the phone number from template to extract the sender phone number from the incoming message data and metadata.
2. The node processes the phone numbers to template to extract target phone numbers from the incoming message data and metadata.
3. The SMS message content is taken directly from the incoming message data payload. Leading and trailing quotes are removed, and escaped newline characters (`\n`) are converted to
   actual newlines.
4. The SMS is sent asynchronously via Twilio to each specified phone number.
5. When processing completes:
    - **Success**: The message is routed to the `Success` connection after all SMS messages are sent successfully.
    - **Failure**: If any SMS fails to send, the message is routed to the `Failure` connection.

## Output connections

- **Success**
    - The SMS was successfully sent to all specified phone numbers.
- **Failure**
    - An unexpected error occurred during SMS sending.

## Examples

### Example 1 — Sending alarm notification

Send an SMS alert when a device triggers an alarm.

**Incoming message**

Data:

```json
"Device Temperature Sensor 01 has triggered HIGH_TEMPERATURE alarm"
```

Metadata:

```json
{
  "deviceName": "Temperature Sensor 01",
  "alarmType": "HIGH_TEMPERATURE",
  "userPhone": "+15551234567",
  "twilioNumber": "+15559876543"
}
```

**Node configuration**

```json
{
  "numberFrom": "${twilioNumber}",
  "numbersTo": "${userPhone}",
  "accountSid": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "accountToken": "your_auth_token_here"
}
```

**Outgoing message**

Data: unchanged.

Metadata: unchanged.

Routed via the `Success` connection.

**Result**

An SMS message is sent from +15559876543 to +15551234567:

```text
Device Temperature Sensor 01 has triggered HIGH_TEMPERATURE alarm
```

### Example 2 — Multiple recipients

Send an SMS notification to multiple phone numbers.

**Incoming message**

Data:

```json
"Critical: Water leak detected in Warehouse A"
```

Metadata:

```json
{
  "emergencyContacts": "+15551234567,+15559876543,+15555555555",
  "companyPhone": "+15551111111"
}
```

**Node configuration**

```json
{
  "numberFrom": "${companyPhone}",
  "numbersTo": "${emergencyContacts}",
  "accountSid": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "accountToken": "your_auth_token_here"
}
```

**Outgoing message**

Data: unchanged.

Metadata: unchanged.

Routed via the `Success` connection.

**Result**

An SMS message is sent from +15551111111 to three recipients (+15551234567, +15559876543, and +15555555555):

```text
Critical: Water leak detected in Warehouse A
```
