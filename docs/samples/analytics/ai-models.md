---
layout: docwithnav
assignees:
- stitenko
title: AI models
description: Using AI models in ThingsBoard

adding-ai-model:
    0:
        image: /images/samples/analytics/ai-models/adding-ai-model-1-ce.png
        title: 'Go to the "<b>AI models</b>" tab of the "<b>Settings</b>". Click the "<b>Add model</b>" button (located in the top-right corner).'
    1:
        image: /images/samples/analytics/ai-models/adding-ai-model-2-ce.png
        title: 'This will open a form where you can configure AI model:<br>- <b>Name</b> - provide a meaningful name for the AI model.<br>- <b>Provider</b> – select the AI provider and specify its authentication credentials.<br>- <b>Model ID</b> – choose which model to use (or deployment name, in the case of Azure OpenAI).<br>- Configure optional parameters if supported by the provider.<br>- Click "<b>Save</b>" to complete adding the new AI model.'
    2:
        image: /images/samples/analytics/ai-models/adding-ai-model-3-ce.png
        title: 'Once saved, the model becomes available for use in the AI request node of the Rule Engine.'

ai-provider-configuration:
    0:
        image: /images/samples/analytics/ai-models/ai-provider-configuration-1-ce.png
        title: 'In the "<b>Provider</b>" section you need to select the <b>AI provider</b> you want to use, as well as the authentication method for that provider (e.g., API key, key file, etc.).'

ai-model-id:
    0:
        image: /images/samples/analytics/ai-models/ai-model-id-1-ce.png
        title: 'After you&#39;ve selected and authenticated your AI provider, you need to specify which particular AI model to use.'

advanced-model-settings:
    0:
        image: /images/samples/analytics/ai-models/advanced-model-settings-1-ce.png
        title: 'Some models support advanced configuration parameters.'

check-connectivity-1:
    0:
        image: /images/samples/analytics/ai-models/ai-model-check-connectivity-1-ce.png
        title: 'Click a <b>Check connectivity</b> button to validate your configuration. A test request is sent to the provider API using the supplied credentials and model settings.'
    1:
        image: /images/samples/analytics/ai-models/ai-model-check-connectivity-2-ce.png
        title: 'If the response is successful, you will see a ✅ <b>green checkmark</b>.'

check-connectivity-2:
    0:
        image: /images/samples/analytics/ai-models/ai-model-check-connectivity-3-ce.png
        title: 'If an error occurs (e.g., invalid API key, non-existing model), an error message with details will be displayed ❌.'

---

{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include /docs/samples/analytics/ai-models.md %}