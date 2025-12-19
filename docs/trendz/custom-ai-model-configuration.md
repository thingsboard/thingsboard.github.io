---
layout: docwithnav-trendz
title: Enable AI Features
description: Step-by-step guide how to set uo AI Settings in Trendz

ai-settings:
  0:
    image: /images/trendz/ai/settings/ai-settings-1.png
    title: "Navigate to <b>Settings → AI Assistant</b> tab."
  1:
    image: /images/trendz/ai/settings/ai-settings-2.png
    title: "The <b>AI Features</b> section."
  2:
    image: /images/trendz/ai/settings/ai-settings-3.png
    title: "The <b>AI Models</b> section."

ai-models:
  0:
    image: /images/trendz/ai/settings/ai-models-1.png
    title: "Click the <b>New AI Model</b> button."
  1:
    image: /images/trendz/ai/settings/ai-models-2.png
    title: "Enter a <b>Name</b> (any label you wish to identify the model in the list)."
  2:
    image: /images/trendz/ai/settings/ai-models-3.png
    title: "Choose a <b>Provider</b> (currently supported: `OPEN_AI`, `GOOGLE`, `AMAZON_BEDROCK`, `CUSTOM`)."
  3:
    image: /images/trendz/ai/settings/ai-models-4.png
    title: "Enter the <b>Model Name</b> (specific to the provider)."
  4:
    image: /images/trendz/ai/settings/ai-models-5.png
    title: "Provide additional parameters (like Base URL or API Key), depending on the provider."
  5:
    image: /images/trendz/ai/settings/ai-models-6.png
    title: "Set the <b>Temperature</b> and <b>Top P</b> parameters."
  6:
    image: /images/trendz/ai/settings/ai-models-7.png
    title: "Click <b>Save</b>."
  7:
    image: /images/trendz/ai/settings/ai-models-8.png
    title: "If everything is set up correctly, you will see a success message."

model-delete:
  0:
    image: /images/trendz/ai/settings/model-delete-1.png
    title: "Actions → Delete."
  1:
    image: /images/trendz/ai/settings/model-delete-2.png
    title: "Confirm."
    
model-edit:
  0:
    image: /images/trendz/ai/settings/model-edit-1.png
    title: "Actions → Edit."
  1:
    image: /images/trendz/ai/settings/model-edit-2.png
    title: "Change Properties → Save."

ai-features:
  0:
    image: /images/trendz/ai/settings/ai-features-1.png
    title: "To enable AI features, toggle <b>Enable AI Features</b> on."
  1:
    image: /images/trendz/ai/settings/ai-features-2.png
    title: "<b>Use Single Model:</b> apply a single AI model for all features."
  2:
    image: /images/trendz/ai/settings/ai-features-3.png
    title: "<b>Custom per Feature Configuration:</b> assign different AI models to specific features."
  3:
    image: /images/trendz/ai/settings/ai-features-4.png
    title: "To switch between options, enable or disable <b>Use Single Model</b> checkbox."
  4:
    image: /images/trendz/ai/settings/ai-features-5.png
    title: "If a feature is disabled, neither you nor other users will be able to access AI capabilities related to it."
  5:
    image: /images/trendz/ai/settings/ai-features-6.png
    title: "Once all configurations are completed, click <b>Save</b> to apply the changes."

providers:
  0:
    image: /images/trendz/ai/settings/providers-1.png
    title: "Open AI."
  1:
    image: /images/trendz/ai/settings/providers-2.png
    title: "Google (Recommended)."
  2:
    image: /images/trendz/ai/settings/providers-3.png
    title: "Amazon Bedrock."
  3:
    image: /images/trendz/ai/settings/providers-4.png
    title: "Other Models (Custom)."

---
* TOC
{:toc}

Trendz proposes a wide range of features that rely on large language models (AI models).

For cloud installations, Trendz provides a default AI model with a limited number of requests available. To extend this 
request limit or to enable additional AI features, you need to configure the **AI Settings** section.

## AI Settings

Navigate to **Settings → AI Assistant** tab.

This section contains two parts: the **AI Features** section and the **AI Models** section. Before configuring the 
AI Features, you must add at least one AI Model.

{% include images-gallery.html imageCollection="ai-settings" %}

### AI Models

To add a new AI model:

1. Click the **New AI Model** button.
2. Enter a **Name** (any label you wish to identify the model in the list).
3. Choose a **Provider** (currently supported: `OPEN_AI`, `GOOGLE`, `AMAZON_BEDROCK`, `CUSTOM`).
4. Enter the **Model Name** (specific to the provider).
5. Provide additional parameters (like Base URL or API Key), depending on the provider.
6. Set the **Temperature** and **Top P** parameters.
7. Click **Save**.

If everything is set up correctly, you will see a success message.

{% include images-gallery.html imageCollection="ai-models" %}

* **Temperature** determines how creative or deterministic the model is. A lower value (e.g., 0) produces more repetitive 
and predictable responses, while a higher value increases creativity and diversity.
* **Top P** (nucleus sampling) controls the probability distribution used when generating responses. Lower values 
restrict the model to more likely outputs; higher values allow more variety.

Once a model is created, you can add as many as you need - for instance, different models from multiple providers for different features.

To delete a Model: Click **Actions → Delete → Confirm**.

**Important:** If you delete a model that is already used in AI Features, the feature using this model will be disabled.

{% include images-gallery.html imageCollection="model-delete" %}

To edit a Model: Click **Actions → Edit → Change Properties → Save**.

{% include images-gallery.html imageCollection="model-edit" %}

### AI Features

To enable AI features, toggle **Enable AI Features** on.

Once enabled, you will see two configuration options:

* **Use Single Model:** apply a single AI model for all features.
* **Custom per Feature Configuration:** assign different AI models to specific features.

To switch between options, enable or disable **Use Single Model** checkbox.

If you select the single model option, the same model will be used for all AI functions. For more flexibility, you can 
assign different models to the following features:

1. **Prompts** - used for AI View Summary (learn more [here](/docs/trendz/ai-widget-summary/#trendz-widgets)).
2. **View Assistant** - used for View Assistant features (learn more [here](/docs/trendz/ai-assistance-overview/)).
3. **Metric Code Assistant** - used for Metric Explorer feature (learn more [here](/docs/trendz/metric/overview/)).

Different features may require different model configurations:

* **Quick models** - for fast responses (e.g., View Assistant)
* **Cost-efficient models** - for lightweight tasks (e.g., Prompts)
* **Advanced models** - for complex reasoning (e.g., Metric Code Assistant)

If a feature is disabled, neither you nor other users will be able to access AI capabilities related to it.

Once all configurations are completed, click **Save** to apply the changes.

{% include images-gallery.html imageCollection="ai-features" %}

## AI Model Providers Overview

Currently, Trendz could be integrated with the following providers:

* OPEN_AI
* GOOGLE
* AMAZON_BEDROCK
* CUSTOM (OpenAI API)

{% include images-gallery.html imageCollection="providers" %}

### Open AI

Please refer to the [Open AI API key documentation](https://platform.openai.com/api-keys) to find out how to create API keys for Open AI models.

Supported models:
* Gpt-4o (Recommended - high performance)
  * Input (1m) token price: 2.5$
  * Output (1m) token price: 10$
* Gpt-4o-mini (Recommended - cost efficiency)
  * Input (1m) token price: 0.15$
  * Output (1m) token price: 0.6$
* o3-mini (Recommended - cost efficiency, high performance but slow speed)
  * Input (1m) token price: 1.1$
  * Output (1m) token price: 4.4$
* o4-mini (Recommended - cost efficiency, high performance but slow speed)
  * Input (1m) token price: 1.1$
  * Output (1m) token price: 4.4$

### Google (Recommended):

Please refer to the [Google API key documentation](https://ai.google.dev/gemini-api/docs/api-key) to find out how to create an API key for Google models.

Supported models:
* Gemini-1.5-pro
  * Input (1m) token price: 1.25$
  * Output (1m) token price: 5$
* Gemini-1.5-flash
  * Input (1m) token price: 0.075$
  * Output (1m) token price: 0.3$
* Gemini-2.0-flash (Recommended - cost efficiency, average performance)
  * Input (1m) token price: 0.1$
  * Output (1m) token price: 0.4$
* Gemini-2.0-flash-lite
  * Input (1m) token price: 0.075$
  * Output (1m) token price: 0.3$
* Gemini-2.5-flash (Recommended - high performance)
  * Input (1m) token price: 0.3$
  * Output (1m) token price: 2.5$

### Amazon Bedrock

Please refer to [AWS API key documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html) to find out how to create Access key IDs and Secret access keys.

Supported models:
* Amazon (Recommended)
  * Amazon Nova Lite (Recommended - cost efficiency)
    * Input (1m) token price: 0.06$
    * Output (1m) token price: 0.24$
  * Amazon Nova Pro
    * Input (1m) token price: 0.8$
    * Output (1m) token price: 3.2$
* Anthropic
  * Claude 3.5 haiku
    * Input (1m) token price: 0.8$
    * Output (1m) token price: 4$
  * Claude 3.5 sonnet (Recommended)
    * Input (1m) token price: 3$
    * Output (1m) token price: 15$
  * Claude 3.7 sonnet
    * Input (1m) token price: 3$
    * Output (1m) token price: 15$
* Meta Llama
  * Llama 3.1 Instruct (70b)
    * Input (1m) token price: 0.72$
    * Output (1m) token price: 0.72$
  * Llama 3.2 Instruct (90b)
    * Input (1m) token price: 0.72$
    * Output (1m) token price: 0.72$
  * Llama 3.3 Instruct (70b) (Recommended)
    * Input (1m) token price: 0.72$
    * Output (1m) token price: 0.72$
* Mistral AI
  * Mistral Large (24.02)
    * Input (1m) token price: 3$
    * Output (1m) token price: 12$

### Other Models (Custom)

It’s possible to connect any model that supports the OpenAI API standard. To do this, choose the *Custom* provider,  
enter the model URL, model name, and API key.

## Next Steps

{% assign currentGuide = "AiAssistant" %}{% include templates/trndz-guides-banner.md %}
