<table style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 4.2</em></strong></td>
     </tr>
   </thead>
</table> 

![Node example image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-ai-request.png)

Sends a request to a large language model (LLM) using configured system and user prompts, which can be dynamically populated with data from the incoming message. 
Returns AI-generated content as a payload of the outgoing message.

**Selecting AI model**

Select the specific Large Language Model (LLM) that will be used to process your request.

The <b>Model</b> dropdown lists all AI models that have been previously configured on the [AI models](/docs/{{docsPrefix}}samples/analytics/ai-models/){:target="_blank"} page.
When you select a model from this list, the node automatically applies all settings defined for that model, including provider credentials, model ID, and optional parameters.

For convenience, you can also add a new AI model directly from this interface by clicking the Create new button.
This action opens the AI model configuration form.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-ai-model-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-ai-model-pe.png)
{% endif %}

**Prompt settings**

- **System prompt** - sets the high-level context, personality, and constraints for the AI. Think of it as defining the "character" or role the AI should adopt. It's used to establish rules that influence the entire interaction, such as the desired tone, response format, or a specific area of expertise. This field is optional, but if set, it cannot be blank and has a maximum length of 10,000 characters.
> **Example**: "You are a helpful agricultural expert. Your goal is to analyze sensor data and provide farming advice. Respond only in valid JSON."

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-system-prompt.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-system-prompt.png)
{% endif %}

- **User prompt** - contains the specific, immediate task or question you want the AI to answer. This is the main input for the model, which will be processed according to the rules set in the system prompt. This field is required, cannot be blank, and also has a maximum length of 10,000 characters.
> **Example**: "Based on these readings, is the soil moisture optimal for planting corn? Readings: `$[*]`"

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-user-prompt.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-user-prompt.png)
{% endif %}

You can make both prompts dynamic (incorporate data from an incoming message) using [templatization](/docs/{{docsPrefix}}user-guide/templatization/). This is the recommended approach when you need to provide the context of a message to the AI model.
Apart from usual templates, there are following special templates that you can use:
- `$[*]` – replaced by the entire message payload as a JSON string.
 
Example: If the prompt is `Telemetry readings: $[*]` and the incoming payload is:
```json
{
    "temperature": 25.5,
    "humidity": 62
}
```
...the template will insert the full JSON object as a string into your prompt like so: `Telemetry readings: {"temperature":25.5,"humidity":62}`

- `${*}` – replaced by all message metadata as a JSON string.

Example: If the prompt is `Device context: ${*}` and the incoming metadata is:
```json
{
    "deviceName": "Sensor-T101",
    "deviceType": "Temperature Sensor"
}
```
...the template will insert the full JSON object as a string into your prompt like so: `Device context: {"deviceName":"Sensor-T101","deviceType":"Temperature Sensor"}`

**Response format**

- **Text** - most flexible format, supported by all models. In this mode, the AI can generate free-form text without any structural constraints. While the output is not guaranteed to be in any specific format, you can still guide the model to produce structured data (like JSON) through clear instructions in your prompts.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-text-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-text-pe.png)
{% endif %}

- **JSON** - instructs the model to generate a response that is always a syntactically valid JSON. The model decides on the JSON structure itself based on the context of the prompt.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-pe.png)
{% endif %}

- **JSON Schema** - forces the model to generate a JSON that strictly conforms to a specific structure you define using a [JSON Schema](https://json-schema.org/). This is useful for ensuring reliable output.
  {% if docsPrefix == null %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-schema-ce.png)
  {% else %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-schema-pe.png)
  {% endif %}
  - **Schema** - JSON Schema that the model's output must adhere to. The schema parser supports a specific subset of the JSON Schema specification:
    - Types - `string`, `integer`, `number`, `boolean`, `object`, `array`, `null`.
    - General keywords: `title` (used as schema name), `description`, `enum` (must be an array of strings).
    - Object keywords: `properties`, `required`, `additionalProperties` (boolean, true if not set).
    - Array keywords: `items`. 
    - Validation keywords like `pattern`, `minLength`, `maximum`, etc., are not supported.

> **Note**: JSON and JSON Schema are not supported when using models from Amazon Bedrock, Anthropic, or GitHub Models.

**Advanced settings**

- **Timeout** - the maximum time the node will wait for a response from the AI model before the request fails. The value must be from 1 second to 10 minutes (600 seconds).
  {% if docsPrefix == null %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-timeout.png)
  {% else %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-timeout.png)
  {% endif %}
  > **Note**: Be careful when setting this value. Complex tasks or slower models may require more time to generate a response. A timeout that is too low for your use case might cause requests to fail unnecessarily.

- **Force acknowledgement**
  {% if docsPrefix == null %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-force-ack.png)
  {% else %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-force-ack.png)
  {% endif %}
  - If enabled, the incoming message is acknowledged immediately. A new message is created to carry the AI's response and is then added to the queue for processing by the next node. This is useful for long-running AI requests to prevent message processing timeouts.
  - If disabled, the original incoming message is transformed. Its payload is replaced with the AI's response, and this message is passed to the next node.
    > **Note**: The `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable, when set to `true`, overrides this setting and forces immediate acknowledgement.

**Output connections**
* **Success:**
  * If an incoming message was successfully processed.
* **Failure:**
  * If the request to the AI model exceeds the configured **Timeout**.
  * If unexpected error occurs during message processing.
