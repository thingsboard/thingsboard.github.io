TODO add a link 

# General

This page lists all configured integrations with AI providers

# Provider

In this section you need to select AI provider you want to use as well as authentication method for that provider (e.g. API key, key file etc.).

TODO make this sentence PE and PAAS only and add a link to secrets storage doc: We recommend that you use Secrets Storage to securely store your credentials.

We support following AI providers:
- OpenAI
- Azure OpenAI
- Google AI Gemini
- Google Vertex AI Gemini
- Mistal AI
- Anthropic
- Amazon Bedrock
- GitHub Models

## OpenAI
You need to provide API key which you can get [here](https://platform.openai.com/api-keys)

## Azure OpenAI
You need to create a deployment of the desired model in the Azure AI studio and get API key and endpoint from the deployment page. Optionally you can set service version. 

## Google AI Gemini
You need to provide API key which you can get [here](https://aistudio.google.com/apikey).

## Google Vertex AI Gemini
You need to provider service account credentials in the form of key file. This service account must have correct permission to be able to interact with Vertex AI.
Also you need to provide your Google Cloud project ID and location of the model you want to use.

## Mistral AI
You need to provide API key which you can get [here](https://admin.mistral.ai/organization/api-keys)

## Anthropic
You need to provide API key which you can get [here](https://console.anthropic.com/settings/keys)

## Amazon Bedrock
You need to provide your access token ID and secret access token which you can get in IAM service. Authentication with Bedrock API keys is not supported.
Also you need to provide a region where inference will happen.

## GitHub Models
You need to provide personal access token key which you can create by following this [guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
Token must have `models:read` permission

# Configuration

In this section you need pick which model you would like to use by providing model ID (or deployment name in case of Azure OpenAI). You can get this information from the provider website.

For some providers like OpenAI, we provide an autocomplete options for popular models but that does not mean that you are restricted to that list. You can provide any value you want.
This allows you to use both model aliases and snapshots. For production usage, we recommend to use model snapshots to get predictable performance (model aliases can be updated by provider to another snapshot version and model performance may change)

Additionally, some models (depends on the provider) allow specifying advanced settings like temperature, top P, maximum output tokens etc to adjust model responses.
TODO: description for each available property - can be copied from UI hints or written from scratch

If some of these advanced settings causes errors we recommend removing value set for it. In that case model will use default value or this fixes the problem in cases when this setting may not be applicable to that model.

# Check connectivity

When you click this button, we make a test request to the provider API using your configuration and if we get a successful response then test request is considered successful.
TODO image: green checkbox when request is successful

If we get an error, we will show you error details.
TODO image: some error like when such model does not exist or API key is not valid

This is meant as a tool to verify that your configuration is correct and provider API accepts your settings. In case you get an error, error details should help you diagnose the issue.
We recommend always testing your configuration using this button to avoid runtime errors when this model configuration is used elsewhere.

> Note: even though is test request is very trivial (e.g. what is the capital of X country?) you may be charged (and usually will be) for it, but the price of executing that request should be very small
