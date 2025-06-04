---
layout: docwithnav-trendz
title: Large Language Model (LLM) Configuration
description: Step-by-step guide how to configure Large Language Model (LLM).

trendz-assistance-use-own-model:
  0:
    image: /images/trendz/ai/ai-model-configuration/use-own-model-1.png
    title: To enable/configure your own model, it’s necessary to go Setting -> General -> AI Assistance

trendz-assistance-ai-models:
  0:
    image: /images/trendz/ai/ai-model-configuration/ai-google-model.png
    title: Google (Recommended)
  1:
    image: /images/trendz/ai/ai-model-configuration/ai-openai-model.png
    title: Open AI
  2:
    image: /images/trendz/ai/ai-model-configuration/ai-aws-model.png
    title: Amazon Bedrock
  3:
    image: /images/trendz/ai/ai-model-configuration/ai-custom-model.png
    title: Other Models (Custom)
---
* TOC
{:toc}

To enable the AI features on the self-hosted Trendz application, or to not be related to the provided by cloud token limits, it is possible to configure your own large language model.

To enable/configure your own model, it’s necessary to go: *Setting* -> *General* -> *AI Assistant*
{% include images-gallery.html imageCollection="trendz-assistance-use-own-model" %}

To use the own model it’s necessary to enable **Use own model**. After enabling the own model it’s possible to choose an AI provider and model. Additionally, it’s necessary to enter *API key* or
*Access Key* and *Secret Key* (related to the chosen provider).

⚠️ *Note*: each AI Assistance request uses around 10000 input tokens and 1000 output tokes. Token usage is related to the difficulty of request and provided topology size.

Currently, Trendz could be integrated with the following models:
* OPEN_AI
* AMAZON_BEDROCK
* GOOGLE
* CUSTOM (OpenAI API)

{% include images-gallery.html imageCollection="trendz-assistance-ai-models" %}

⚠️ *Note*: to save any changes in the configuration it’s necessary to press the “Save” button.

## Google (Recommended):

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

## Open AI

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

## Amazon Bedrock

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

## Other Models (Custom)

It’s possible to connect any model that supports the OpenAI API standard. To do this, choose the *Custom* provider,  
enter the model URL, model name, and API key.

## Next Steps

{% assign currentGuide = "AiAssistant" %}{% include templates/trndz-guides-banner.md %}
