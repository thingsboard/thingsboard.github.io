* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

<b>AI models</b> are machine learning or large language models that can process data, generate predictions, detect anomalies, or produce human-like responses.
In the context of ThingsBoard, AI models are used to extend IoT data processing capabilities by enabling advanced analytics and automation.

By integrating external AI providers (such as OpenAI, Google Gemini, Azure OpenAI, Amazon Bedrock, etc.), you can:
- <b>Predict</b> future values (e.g., energy consumption or equipment temperature).
- <b>Detect anomalies</b> in real-time telemetry streams. (see [industrial equipment fault detection example](/docs/{{docsPrefix}}samples/analytics/ai-predictive-maintenance/){:target="_blank"}).
- <b>Classify device states</b> (e.g., OK, Warning, Fault).
- <b>Generate responses</b> or natural-language insights for operators and end-users.

ThingsBoard allows you to configure and connect to different AI providers, manage model settings, and use the models inside the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"} for automation and decision-making.

## Adding AI models to ThingsBoard

To add an AI model in ThingsBoard, follow these steps:

- Open the "<b>Settings</b>" page in your ThingsBoard instance.
- Go to the "<b>AI models</b>" tab.
- Click the "<b>Add model</b>" button (located in the top-right corner).
- This will open a form where you can configure AI model:
  - <b>Name</b> - provide a meaningful name for the AI model.
  - [Provider](#provider-configuration) – select the AI provider and specify its authentication credentials.
  - [Model ID](#model-configuration) – choose which model to use (or deployment name, in the case of Azure OpenAI).
  - [Advanced settings](#advanced-model-settings) – configure optional parameters (such as temperature, top P, max tokens) if supported by the provider.
- Click "<b>Save</b>" to complete adding the new AI model.

Once saved, the model becomes available for use in the [AI request node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#ai-request-node){:target="_blank"} of the Rule Engine.

{% include images-gallery.html imageCollection="adding-ai-model" %}

## Provider configuration

In the "<b>Provider</b>" section you need to select the <b>AI provider</b> you want to use, as well as the authentication method for that provider (e.g., API key, key file, etc.).

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
> We recommend using [Secrets storage](/docs/{{docsPrefix}}user-guide/secrets-storage/){:target="_blank"} to securely store your credentials.
{% endif %}

<br><b><font size="4">Supported AI providers</font></b>

ThingsBoard currently supports integration with the following AI providers:

{% include images-gallery.html imageCollection="ai-provider-configuration" %}

#### OpenAI

- Authentication: <b>API key</b>.
- You can obtain your API key from the [OpenAI dashboard](https://platform.openai.com/api-keys){:target="_blank"}.

##### Using OpenAI-compatible models

{% assign sinceVersion = "4.2.1" %}
{% include templates/since.md %}

By default, the official OpenAI API base URL is configured for convenience. However, you can specify a custom base URL to use any OpenAI-compatible model provider.

When using a custom base URL (different from the official OpenAI endpoint), the API key becomes optional. This allows you to work with models that don't require authentication, 
such as locally-hosted models. Note that most cloud-based model providers will still require a valid API key.

<b>Example base URLs:</b>

| Provider                 | Base URL                                                 |
|--------------------------|----------------------------------------------------------|
| DeepSeek                 | `https://api.deepseek.com`                               |
| Alibaba Qwen (Singapore) | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| Ollama (local)           | `http://localhost:11434/v1`                              |

> <b>Note:</b> Ollama is also available as a separate integration with additional configuration options.

<hr>

#### Azure OpenAI

- Authentication: <b>API</b> key and <b>endpoint</b>.
- You need to create a <b>deployment</b> of the desired model in [Azure AI Studio](https://oai.azure.com/){:target="_blank"}.
  - Obtain the <b>API</b> key and <b>endpoint URL</b> from the deployment page.
  - Optionally, you may set the service version.

<hr>

#### Google AI Gemini

- Authentication: <b>API key</b>.
- You can obtain the API key from the [Google AI Studio](https://aistudio.google.com/apikey){:target="_blank"}.

<hr>

#### Google Vertex AI Gemini

- Authentication: <b>Service account key file</b>.
- Required parameters:
  - Google Cloud Project ID. 
  - Location of the target model (region).
  - Service account key file with correct permission to be able to interact with Vertex AI.

<hr>

#### Mistral AI

- Authentication: <b>API key</b>. 
- You can obtain your API key from the [Mistral AI portal](https://docs.mistral.ai/getting-started/quickstart/){:target="_blank"}.

<hr>

#### Anthropic

- Authentication: <b>API key</b>.
- You can obtain your API key from the [Anthropic console](https://console.anthropic.com/settings/keys){:target="_blank"}.

<hr>

#### Amazon Bedrock

- Authentication: <b>AWS IAM credentials</b>.
- Required parameters:
  - Access key ID. 
  - Secret access key. 
  - AWS region (where inference will run).

> <b>Note</b>: Authentication with Bedrock API keys is not supported.

<hr>

#### GitHub Models

- Authentication: <b>Personal access token</b>.
- Token must have the `models:read` permission.
- You can create a token following [this guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token){:target="_blank"}.

<hr>

#### Ollama

{% assign sinceVersion = "4.2.1" %}
{% include templates/since.md %}

[Ollama](https://ollama.com/){:target="_blank"} allows you to easily run open large language models, such as Llama 3 and Mistral, on your own machine.

Connecting to your Ollama server requires its <b>base URL</b> (e.g., `http://localhost:11434`) and the appropriate authentication method. Three options are available:

- <b>None</b>: This is the default method for a standard Ollama installation, which does not require authentication out of the box. No credentials are sent with your requests.
- <b>Basic</b>: Use this method when Ollama is secured behind a reverse proxy that requires HTTP Basic authentication. 
  The provided <b>username</b> and <b>password</b> are combined into a `username:password` string, Base64-encoded, and sent in an `Authorization: Basic <encoded_credentials>` header.
- <b>Token</b>: Use this method when Ollama is secured behind a reverse proxy that requires Bearer Token authentication. 
  The provided <b>token</b> is sent directly in an `Authorization: Bearer <token>` header.

> <b>Security Recommendation</b>: When using <b>Basic</b> or <b>Token</b> authentication, we strongly recommend connecting to your server using an <b>`https`</b> URL. 
> Standard `http` connections will send your credentials in plain text, which is insecure.

<hr>

## Model configuration

After you&#39;ve selected and authenticated your AI provider, you need to specify which particular AI model to use (or deployment name in the case of [Azure OpenAI](#azure-openai)).

For some providers (like OpenAI), ThingsBoard offers <b>autocomplete options</b> with popular models.
You are <b>not limited</b> to this list – you can specify any model ID supported by the provider, including <b>model aliases</b> or <b>snapshots</b>.
For <b>production usage</b>, we recommend using model snapshots to ensure predictable performance (Model aliases may be updated by the provider to point to a new snapshot, which can change response quality).

{% include images-gallery.html imageCollection="ai-model-id" %}

### Advanced model settings

Some models support advanced configuration parameters (depending on the provider), such as:
- <b>Temperature</b> – Adjusts the level of randomness in the model's output. Higher values increase randomness, while lower values decrease it.
- <b>Top P</b> – Creates a pool of the most probable tokens for the model to choose from. Higher values create a larger and more diverse pool, while lower values create a smaller one.
- <b>Top K</b> - Restricts the model's choices to a fixed set of the "K" most likely tokens.
- <b>Presence penalty</b> - Applies a fixed penalty to the likelihood of a token if it has already appeared in the text.
- <b>Frequency penalty</b> - Applies a penalty to a token's likelihood that increases based on its frequency in the text.
- <b>Maximum output tokens</b> – Sets the maximum number of tokens that the model can generate in a single response.
- <b>Context length</b> – Defines the size of the context window in tokens. This value sets the total memory limit for the model, including both the user's input and the generated response.

> If advanced settings cause errors, try removing their values. In this case, defaults will be applied. This often resolves incompatibility issues for certain models.

{% include images-gallery.html imageCollection="advanced-model-settings" %}

## Connectivity test

Click a <b>Check connectivity</b> button to validate your configuration.
A test request is sent to the provider API using the supplied credentials and model settings.

If the response is successful, you will see a ✅ <b>green checkmark</b>.

{% include images-gallery.html imageCollection="check-connectivity-1" %}

> <b>Best practice</b>: Always use the connectivity check after configuring a provider to ensure smooth runtime execution.

If an error occurs (e.g., invalid API key, non-existing model), an error message with details will be displayed ❌.

{% include images-gallery.html imageCollection="check-connectivity-2" %}

This feature ensures your configuration is valid and prevents runtime errors when models are used in production.

> <b>Note</b>: Even though the test request is trivial (e.g., “What is the capital of X country?”), providers usually charge for it. However, the cost is minimal.

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}
