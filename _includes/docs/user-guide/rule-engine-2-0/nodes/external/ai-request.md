Sends a request to a large language model (LLM) using configured system and user prompts, optionally including file resources. Prompts can be dynamically populated with data from
the incoming message. Returns AI-generated content as the data of the outgoing message.

## Configuration

### AI model

Select the specific Large Language Model (LLM) that will process requests. The **Model** dropdown lists all AI models previously configured on
the [AI models](/docs/{{docsPrefix}}samples/analytics/ai-models/){:target="_blank"} page. When you select a model, the node automatically applies all settings defined for that
model, including provider credentials, model ID, and optional parameters.

You can add a new AI model directly from this interface by clicking the **Create new** button.

### Prompt settings

Prompts define the context and task for the AI model. Both fields support [templatization](/docs/{{docsPrefix}}user-guide/templatization/) to dynamically incorporate data from
incoming messages.

#### System prompt

Sets the high-level context, personality, and constraints for the AI. This field is optional but cannot be blank if specified. Maximum length: 500,000 characters.

The system prompt establishes rules that influence the entire interaction, such as the desired tone, response format, or a specific area of expertise.

**Example**:

```
You are a helpful agricultural expert. Your goal is to analyze sensor data and provide farming advice. Respond only in valid JSON.
```

#### User prompt

Contains the specific, immediate task or question for the AI to answer. This field is required and cannot be blank. Maximum length: 500,000 characters.

**Example**:

```
Based on these readings, is the soil moisture optimal for planting corn? Readings: $[*]
```

#### Templatization

You can make prompts dynamic using [templatization](/docs/{{docsPrefix}}user-guide/templatization/). The following templates are available:

- `$[*]` – Replaced by the entire message data as a JSON string
- `${*}` – Replaced by all message metadata as a JSON string
- `$[key]` – Replaced by a specific value from message data
- `${key}` – Replaced by a specific value from message metadata

**Example**: If the user prompt is `Telemetry readings: $[*]` and the incoming data is:

```json
{
  "temperature": 25.5,
  "humidity": 62
}
```

The template will produce: `Telemetry readings: {"temperature":25.5,"humidity":62}`

### AI resources

Attach files to provide additional context to the AI model. Resources are sent alongside the prompts and can include documents, images, or other supported file types.

#### Adding resources

Click the **AI resources** field and select one or more files from your resource library, or click **Create new** to upload new files. Resources must be of type **General** and are
validated when the node is initialized.

#### Supported resource types

To include attached resources in the AI request, the node must convert them to one of three supported content types. The conversion is determined by the resource's media type:

| Media Type        | Content Type | Description                                                       |
|-------------------|--------------|-------------------------------------------------------------------|
| `text/*`          | Text         | Plain text files, markdown, CSV, etc. Content is decoded as UTF-8 |
| `application/pdf` | PDF          | PDF documents. Content is Base64-encoded                          |
| `image/*`         | Image        | Image files (JPEG, PNG, GIF, etc.). Content is Base64-encoded     |

{% capture resource_fallback_note %}
**Note**: If a resource has a media type not listed in the table above, the node will attempt to decode its content as UTF-8 text.
{% endcapture %}
{% include templates/info-banner.md content=resource_fallback_note %}

### Response format

Specifies the structure of the AI model's output.

- **Text** – Most flexible format, supported by all models. The AI generates free-form text without structural constraints. While output is not guaranteed to be in any specific
  format, you can guide the model to produce structured data (like JSON) through clear instructions in your prompts.

- **JSON** – Instructs the model to generate a response that is always syntactically valid JSON. The model decides the JSON structure based on the context of the prompts.

- **JSON Schema** – Forces the model to generate JSON that strictly conforms to a specific structure defined using a [JSON Schema](https://json-schema.org/). This ensures reliable,
  predictable output.

{% capture json_support_note %}
**Note**: JSON and JSON Schema modes are not supported when using models from Amazon Bedrock, Anthropic, or GitHub Models. These providers only support Text mode.
{% endcapture %}
{% include templates/info-banner.md content=json_support_note %}

#### JSON Schema format

When **JSON Schema** is selected, you must provide a schema that defines the structure of the expected response. The schema parser supports a specific subset of the JSON Schema
specification:

**Supported features:**

- **Types**: `string`, `integer`, `number`, `boolean`, `object`, `array`, `null`
- **General keywords**: `title` (used as schema name), `description`, `enum` (must be an array of strings)
- **Object keywords**: `properties`, `required`, `additionalProperties` (boolean, defaults to true)
- **Array keywords**: `items`

**Unsupported features:**

- Validation keywords such as `pattern`, `minLength`, `maxLength`, `minimum`, `maximum`, etc.
- Advanced schema composition keywords like `allOf`, `anyOf`, `oneOf`, `not`
- Conditional schemas and dependencies

**Example schema:**

```json
{
  "title": "SoilAnalysis",
  "type": "object",
  "properties": {
    "moisture_level": {
      "type": "number",
      "description": "Soil moisture percentage"
    },
    "optimal_for_planting": {
      "type": "boolean",
      "description": "Whether conditions are optimal"
    },
    "recommendation": {
      "type": "string",
      "description": "Action recommendation"
    }
  },
  "required": [
    "moisture_level",
    "optimal_for_planting"
  ]
}
```

### Advanced settings

#### Timeout

The maximum time the node will wait for a response from the AI model before the request fails. Valid range: 1 to 600 seconds (10 minutes).

{% capture timeout_warning %}
**Important**: Complex tasks or slower models may require more time to generate responses. A timeout that is too short for your use case might cause requests to fail unnecessarily.
Consider the typical response time of your chosen model when configuring this value.
{% endcapture %}
{% include templates/warn-banner.md content=timeout_warning %}

#### Force acknowledgement

- **Enabled** – The incoming message is acknowledged immediately. A new message is created to carry the AI's response and is then added to the queue for processing by the next
  node. This prevents message processing timeouts for long-running AI requests.
- **Disabled** – The original incoming message is transformed. Its data is replaced with the AI's response, and this modified message is passed to the next node.

{% capture force_ack_env_note %}
**Note**: The `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable, when set to `true`, overrides this setting and forces immediate acknowledgement for all external nodes.
{% endcapture %}
{% include templates/info-banner.md content=force_ack_env_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbAiNodeConfiguration",
  "type": "object",
  "properties": {
    "modelId": {
      "type": "object",
      "properties": {
        "entityType": {
          "type": "string",
          "enum": [
            "AI_MODEL"
          ]
        },
        "id": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "entityType",
        "id"
      ],
      "description": "Reference to the configured AI model."
    },
    "systemPrompt": {
      "type": "string",
      "minLength": 1,
      "maxLength": 500000,
      "description": "Optional high-level context and constraints for the AI (supports templatization)."
    },
    "userPrompt": {
      "type": "string",
      "minLength": 1,
      "maxLength": 500000,
      "description": "Required specific task or question for the AI (supports templatization)."
    },
    "resourceIds": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uuid"
      },
      "description": "Optional list of resource IDs to include as context (files, documents, images)."
    },
    "responseFormat": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TEXT",
            "JSON",
            "JSON_SCHEMA"
          ],
          "description": "The format type for the AI response."
        },
        "schema": {
          "type": "object",
          "description": "JSON Schema for structured responses (required when type is JSON_SCHEMA)."
        }
      },
      "required": [
        "type"
      ]
    },
    "timeoutSeconds": {
      "type": "integer",
      "minimum": 1,
      "maximum": 600,
      "description": "Maximum time to wait for AI response (1-600 seconds)."
    },
    "forceAck": {
      "type": "boolean",
      "description": "Whether to acknowledge the incoming message immediately."
    }
  },
  "required": [
    "modelId",
    "userPrompt",
    "responseFormat",
    "timeoutSeconds"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. If **Force acknowledgement** is enabled, the incoming message is acknowledged immediately.
2. The node constructs an AI request:
    - The **system prompt** (if specified) and **user prompt** are processed, replacing templates with values from the incoming message data and metadata.
    - If resources are configured, each resource is loaded from the database and converted to the appropriate content type (text, PDF, or image) based on its media type.
    - The chat request is assembled with the system message (if specified), user message containing the processed user prompt and any resource contents, and the configured response
      format.
3. The chat request is sent to the configured AI model with the specified timeout.
4. When the AI responds:
    - The response text is validated to ensure it is a valid JSON object (if not, it is wrapped in a JSON object with a "response" key).
    - The response replaces the incoming message data (or is sent as a new message if force acknowledgement is enabled).
    - The originator, message type, and metadata from the incoming message remain unchanged.
5. The resulting message is forwarded via the `Success` connection.

## Output connections

- **Success**
    - The AI model processed the request successfully and returned a response within the configured timeout.
- **Failure**
    - The request to the AI model exceeded the configured **Timeout**.
    - The configured AI model was not found.
    - A configured resource was not found, has an unsupported type, or does not belong to the tenant.
    - Failed to load resource data from the database.
    - The AI model provider returned an error.
    - An unexpected error occurred during processing.

## Examples

### Example 1 — Data analysis with technical documentation reference

Analyze telemetry data from a temperature sensor and provide recommendations in JSON format. A PDF resource containing the device's technical documentation is attached to help the
AI understand the sensor's specifications and optimal operating ranges.

**Incoming message**

Originator: `DEVICE` (Temperature Sensor)

Data:

```json
{
  "temperature": 28.5,
  "humidity": 75,
  "timestamp": 1672531200000
}
```

**Node configuration**

```json
{
  "modelId": {
    "entityType": "AI_MODEL",
    "id": "1b2e3f4a-5b6c-7d8e-9f0a-1b2c3d4e5f6a"
  },
  "systemPrompt": "You are an HVAC system advisor. Analyze sensor readings and provide actionable recommendations in JSON format with fields: status (string), recommendation (string), and urgency (low/medium/high).",
  "userPrompt": "Analyze these sensor readings based on the device specifications in the attached technical documentation: $[*]",
  "resourceIds": [
    "d5e6f7a8-b9c0-1234-defg-456789abcdef"
  ],
  "responseFormat": {
    "type": "JSON"
  },
  "timeoutSeconds": 30,
  "forceAck": false
}
```

**Outgoing message**

Data:

```json
{
  "status": "Temperature and humidity exceed recommended operating range",
  "recommendation": "Increase cooling and activate dehumidifier. Consider maintenance check as readings approach upper specification limits.",
  "urgency": "medium"
}
```

Routed via the `Success` connection.

**Result**

The AI model analyzed the sensor data in context with the device's technical documentation (PDF resource). It provided structured recommendations based on the manufacturer's
specifications. The original message data was replaced with the AI's JSON response.
