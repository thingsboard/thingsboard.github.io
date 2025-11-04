Sends voice messages to specified phone numbers via [Twilio](https://www.twilio.com/voice){:target="_blank"} voice service using text-to-speech technology.

## Configuration

### Phone settings

- **Phone Number From** – The Twilio phone number to call from. Must be in E.164 format (e.g., `+19995550123`). This field
  supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/){:target="_blank"}.
- **Phone Numbers To** – A comma-separated list of phone numbers that will receive the voice call. This field
  supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/){:target="_blank"}.

### Account settings

- **Twilio Account SID** – Your Twilio account identifier.
- **Twilio Account Token** – Your Twilio authentication token.

{% capture credentials_note %}
**Note**: If you use Professional Edition, we highly recommend using [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} to securely store your account token.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

### Voice settings

- **Voice provider** – The text-to-speech voice provider to use.
- **Language** – The language for the voice message. Corresponds to Twilio's supported languages.
- **Voice** – The voice type to use.

### Audio output settings

- **Pitch** – The pitch adjustment for the voice in percentage (default: `100`). Higher values produce a higher-pitched voice, lower values produce a lower-pitched voice.
- **Rate** – The speaking rate in percentage (default: `100`). Higher values speed up the speech, lower values slow it down.
- **Volume** – The volume adjustment in decibels (default: `0`). Positive values increase volume, negative values decrease it.
- **Pause before talking** – Duration in seconds to pause before the voice message begins playing.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbTwilioVoiceNodeConfiguration",
  "type": "object",
  "properties": {
    "numberFrom": {
      "type": "string",
      "description": "Twilio phone number (E.164 format). Supports templatization."
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
    },
    "provider": {
      "type": "string",
      "description": "Voice provider"
    },
    "language": {
      "type": "string",
      "description": "Voice language"
    },
    "voice": {
      "type": "string",
      "description": "Voice type"
    },
    "pitch": {
      "type": "integer",
      "description": "Pitch percentage (default: 100)"
    },
    "rate": {
      "type": "integer",
      "description": "Speaking rate percentage (default: 100)"
    },
    "volume": {
      "type": "integer",
      "description": "Volume in decibels (default: 0)"
    },
    "startPause": {
      "type": "integer",
      "description": "Pause duration before speaking in seconds"
    }
  },
  "required": [
    "numberFrom",
    "numbersTo",
    "accountSid",
    "accountToken",
    "language",
    "voice",
    "pitch",
    "rate",
    "volume"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node does not modify the incoming message. Both message data and metadata are passed through unchanged to the next node in the chain.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created as a copy. The voice call
  operation proceeds asynchronously, and after completion, the copy is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire voice call operation. The message is passed to the next node
  after the voice call operation completes.

## Message processing algorithm

1. The node processes the phone number from template to extract the caller phone number from the incoming message data and metadata.
2. The node processes the phone numbers to template to extract target phone numbers from the incoming message data and metadata.
3. The voice message content is taken directly from the incoming message data. Leading and trailing quotes are removed from the data.
4. A voice response is constructed using Twilio's TwiML with:
    - A pause of the specified duration before speaking
    - Text-to-speech configuration with the specified language, voice, pitch, rate, and volume settings
5. The voice call is initiated asynchronously via Twilio to each specified phone number.
6. When processing completes:
    - **Success**: The message is routed to the `Success` connection after all voice calls are initiated successfully.
    - **Failure**: If any voice call fails to initiate, the message is routed to the `Failure` connection.

## Output connections

- **Success**
    - The voice call was successfully initiated to all specified phone numbers.
- **Failure**
    - An unexpected error occurred during voice call initiation, such as invalid phone numbers or Twilio API errors.

## Examples

### Example 1 — Sending alarm notification

Send a voice alert when a device triggers an alarm.

**Incoming message**

Data:

```json
"Attention. Device Temperature Sensor 01 has triggered a high temperature alarm."
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
  "accountToken": "your_auth_token_here",
  "language": "EN_US",
  "voice": "WOMAN",
  "pitch": 100,
  "rate": 100,
  "volume": 0,
  "startPause": 1
}
```

**Outgoing message**

Data: unchanged.

Metadata: unchanged.

Routed via the `Success` connection.

**Result**

A voice call is initiated from +15559876543 to +15551234567. After a 1-second pause, the recipient hears:

```text
Attention. Device Temperature Sensor 01 has triggered a high temperature alarm.
```
