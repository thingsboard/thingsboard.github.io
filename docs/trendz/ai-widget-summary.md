---
layout: docwithnav-trendz
title: AI Widget Summary
description: Step-by-step guide to set up AI Widget Summary.

trendz-js-summary-module-install:
  0:
    image: /images/trendz/ai/widget-ai-summary/install-trendz-js-module-1.png
    title: Open the Settings page in the Trendz App and click the Upload Module button.
  1:
    image: /images/trendz/ai/widget-ai-summary/install-trendz-js-module-2.png
    title: Confirm that the module has been uploaded successfully and appears in the list.
    
trendz-summary-custom-action:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-1.png
    title: Open the dashboard containing the widget you want to enhance and switch to Edit mode.
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-2.png
    title: Open the widget settings.
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-3.png
    title: Navigate to the Actions tab and add new action.
  3:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-4.png
    title: Select Custom action as action type.
  4:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-5.png
    title: If you're on **v3.9+**, select the uploaded **Trendz Summary Module**..
  5:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-6.png
    title: If you're on **v3.6–v3.8**, paste the custom JavaScript code manually.
  6:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-7.png
    title: Inside the action, call the `getAnalytics()` method.
  7:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-8.png
    title: After configuring the action, a header button will appear on your widget. When you click this button, a dialog window will open, showing a summary generated based on your widget's data and the Trendz prompt.    

trendz-ai-summary-trendz-widget-example:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-widget-example-1.png
    title: 1. Press the "AI summary" button in the upper corner of the widget.
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-widget-example-2.png
    title: 2. See view the AI summary at the top of the Trendz widget.

trendz-ai-summary-trendz-enable-button:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-setting-common.png
    title: Open the desired view. Go to "View Settings".
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-enable-button-1.png
    title: Go to the "View Mode Fields" section. Choose the preferred mode to show or hide the AI Summary button.
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-enable-button-2.png
    title: Save the changes.

trendz-ai-summary-trendz-set-up-prompt:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-setting-common.png
    title: Open the desired view. Go to "View Settings".
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-set-up-prompt-1.png
    title: Go to the "AI Assistant" section. Choose the preferred prompt from the dropdown menu. 
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-set-up-prompt-2.png
    title: Save the changes.
---

* TOC 
{:toc}

AI Widget Summary is a dashboard control that turns live ThingsBoard telemetry into an immediate, human-readable answer. 
When pressed, it collects telemetries and attributes you specify, fills a chosen prompt (from the built-in library or your own), and calls the connected LLM provider. 
The returned output appears in the widget, giving operators a quick status digest, anomaly explanation, recommended next steps, or any other insight the prompt defines.

Several ways are available for integrating AI summaries with different types of widgets.

## ThingsBoard Widgets
You can easily integrate custom prompts from Trendz to generate a summary of the data displayed in your ThingsBoard widgets.
This feature is available starting from **ThingsBoard PE v3.6 and higher**.
### Trendz Summary JS Module
Depending on your ThingsBoard version, the setup process is slightly different:

#### ThingsBoard v3.9 and Higher
Since v3.9, ThingsBoard supports using JS Modules directly in widget actions, making summary configuration straightforward.
To set up the Trendz Summary Module:
* Open the Settings page in the Trendz App.
* Click the Upload Module button.
* Confirm that the module has been uploaded successfully and appears in the list.

{% include images-gallery.html imageCollection="trendz-js-summary-module-install" %}

Once the module is uploaded, you can easily reference it in the Actions section of your ThingsBoard widget.

#### ThingsBoard v3.6–v3.8
In earlier ThingsBoard versions (v3.6–v3.8), JS Modules cannot be used directly in widget actions. Instead, you will need to manually copy and paste a provided JavaScript module into your custom action. 
To download the custom Trendz Summary JavaScript module, use the following link (replace `<your-trendz-host:port>` with the URL of your own Trendz instance):
```
http://<your-trendz-host:port>/apiTrendz/publicApi/download/custom-action-ai-summary.js
```
{: .copy-code}

### Configuring a Custom Action to Get Telemetry Summary

After you have either uploaded the JS Module (v3.9+) or copied the custom code (v3.6–v3.8), follow these steps to configure your widget:

1. Open the dashboard containing the widget you want to enhance and switch to Edit mode.
2. Open the widget settings and navigate to the Actions tab.
3. Select Custom action as action type.
3. Add a new **Action**:
  - If you're on **v3.9+**, select the uploaded **Trendz Summary Module**.
  - If you're on **v3.6–v3.8**, paste the custom JavaScript code manually.
4. Inside the action, call the `getAnalytics()` method with the following parameters:

```js
getAnalytics(widgetContext, useDefaultPrompt, promptIdOrText);
```
Where:
- **`widgetContext`** – the current widget context (**required**).
- **`useDefaultPrompt`** – set to `true` to use the default Trendz prompt, or `false` to use your custom prompt.
- **`promptIdOrText`** (**optional**) – either the **ID** of a saved prompt from Trendz or a **custom prompt text**.

Example (with *promptId*):
```js
getAnalytics(widgetContext, false, 'ef348780-a034-4ea9-9225-8b6ad112c451');
```

**⚠️ Note:** We recommend using the **ID** of a saved prompt from Trendz.
Using this approach simplifies prompt management and modification.  
To learn more about Trendz Prompts, refer [here](/docs/trendz/ai-prompts-overview).

After configuring the action, a header button will appear on your widget.
When you click this button, a dialog window will open, showing a summary generated based on your widget's data and the Trendz prompt.

{% include images-gallery.html imageCollection="trendz-summary-custom-action" %}

## Trendz Widgets

AI summary is already integrated into the Trendz Widgets. To retrieve the AI summary for a Trendz widget, 
press the **AI summary** button in the upper corner of the screen. After that, you will be able to view the AI summary 
at the top of the Trendz widget.

{% include images-gallery.html imageCollection="trendz-ai-summary-trendz-widget-example" %}

### Enable AI Summary Button

By default, the AI summary button is disabled on dashboards for views created before Trendz 1.13.1 and for views created during the 
period when the **AI Assistant Use AI Model** flag was disabled for self-hosted users 
(Find out more about how to set up the AI Assistant module for self-hosted users [here](/docs/trendz/custom-ai-model-configuration/)).

To enable/disable the AI summary button, follow these steps:

1. Open the desired view.
2. Go to **View Settings**.
3. Go to the **View Mode Fields** section.
4. Choose the preferred mode to show or hide the AI Summary button.
5. Save the changes in view.

Note: button in Trendz application will always be shown (even with checkbox )

{% include images-gallery.html imageCollection="trendz-ai-summary-trendz-enable-button" %}

### Set Up AI Summary Prompt

Additionally, it is possible to choose a prompt that can be used to generate the AI summary.

To set up the AI summary prompt:

1. Open the desired view.
2. Go to **View Settings**.
3. Go to the **AI Assistant** section.
4. Choose the preferred prompt from the dropdown menu.
5. Save the changes.

{% include images-gallery.html imageCollection="trendz-ai-summary-trendz-set-up-prompt" %}

Find out more about creating your own prompts that perfectly fit your task [here](/docs/trendz/ai-assistance-prompts/).

**⚠️ Note:** Temporary you can use AI Summary for all the views in Trendz, except Anomaly View.

## Next Steps

{% assign currentGuide = "AiAssistant" %}{% include templates/trndz-guides-banner.md %}
