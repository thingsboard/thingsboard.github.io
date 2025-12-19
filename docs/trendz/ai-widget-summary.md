---
layout: docwithnav-trendz
title: AI Widget Summary
description: Step-by-step guide to set up AI Widget Summary.

trendz-js-summary-module-install:
  0:
    image: /images/trendz/ai/widget-ai-summary/install-trendz-js-module-1.png
    title: "Open the Settings page in the Trendz App and click the Upload Module button."
  1:
    image: /images/trendz/ai/widget-ai-summary/install-trendz-js-module-2.png
    title: "Confirm that the module has been uploaded successfully and appears in the list."

thingsboard-ai-widget-summary:
  0:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-1.png
    title: "Open the dashboard containing your widget. Switch to <b>Edit mode</b>."
  1:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-2.png
    title: "Click <b>Edit Widget</b> on widget you want to add custom AI summary action."
  2:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-3.png
    title: "Go to the <b>Actions</b> tab and click <b>Add action</b>."
  3:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-4.png
    title: "Configure: <b>Action source</b>, <b>Name</b>, <b>Button icon</b> and <b>Action</b>."

thingsboard-ai-widget-summary-v3.9:
  0:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-v3.9-1.png
    title: "Click <b>Modules</b> than click <b>Add module</b>. Set <b>Alias</b> as <b>trendz</b> and <b>JS module resource</b> as <b>Trendz AI Summary Module</b>. Than click <b>Apply</b>."
  1:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-v3.9-2.png
    title: "In the custom action code field, add <b>trendz.getAnalytics(widgetContext, true);</b>, than click <b>Add</b>."
  2:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-common-1.png
    title: "Click <b>Apply</b>."
  3:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-common-2.png
    title: "Click <b>Save</b>."
  4:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-common-3.png
    title: "Verify that a new button appears in your widget header."


thingsboard-ai-widget-summary-v3.6:
  0:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-v3.6.png
    title: "Manually copy the full JavaScript code from <b>`custom-action-ai-summary.js`</b> into your custom action field. At the end of the custom action code field, add <b>trendz.getAnalytics(widgetContext, true);</b>. Than click <b>Add</b>."
  1:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-common-1.png
    title: "Click <b>Apply</b>."
  2:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-common-2.png
    title: "Click <b>Save</b>."
  3:
    image: /images/trendz/ai/widget-ai-summary/thingsboard-ai-widget-summary-common-3.png
    title: "Verify that a new button appears in your widget header."


trendz-ai-summary-trendz-widget-example:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-widget-example-1.png
    title: "1. Press the 'AI summary' button in the upper corner of the widget."
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-widget-example-2.png
    title: "2. See view the AI summary at the top of the Trendz widget."

trendz-ai-summary-trendz-enable-button:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-setting-common.png
    title: "Open the desired view. Go to 'View Settings'."
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-enable-button-1.png
    title: "Go to the 'View Mode Fields' section. Choose the preferred mode to show or hide the AI Summary button."
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-enable-button-2.png
    title: "Save the changes."

trendz-ai-summary-trendz-set-up-prompt:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-setting-common.png
    title: "Open the desired view. Go to 'View Settings'."
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-set-up-prompt-1.png
    title: "Go to the 'AI Assistant' section. Choose the preferred prompt from the dropdown menu." 
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-set-up-prompt-2.png
    title: "Save the changes."
---

* TOC 
{:toc}

AI Widget Summary is a dashboard control that turns live ThingsBoard telemetry into an immediate, human-readable answer. 
When pressed, it collects telemetries and attributes you specify, fills a chosen prompt (from the built-in library or your own), and calls the connected LLM provider. 
The returned output appears in the widget, giving operators a quick status digest, anomaly explanation, recommended next steps, or any other insight the prompt defines.

Several ways are available for integrating AI summaries with different types of widgets.

## ThingsBoard Widgets Integration with Trendz AI

You can easily integrate **Trendz AI prompts** into your ThingsBoard widgets to generate data summaries directly within the widget header.

> **Available since:** ThingsBoard PE v3.6+

### Trendz Summary JavaScript Module

To enable Trendz AI features in ThingsBoard widget headers, connect the **Trendz AI Summary Module**. The setup process varies slightly depending on your ThingsBoard version.

#### ThingsBoard v3.9 and Higher

Starting from v3.9, ThingsBoard supports JS Modules directly in widget actions, simplifying the configuration.

**Steps:**

1. Open the **Settings** page in the Trendz app.
2. Click **Upload Module**.
3. Confirm the module appears in the list after upload.

{% include images-gallery.html imageCollection="trendz-js-summary-module-install" %}

Once uploaded, you can reference the module in your widget’s **Actions** configuration.

#### ThingsBoard v3.6–v3.8

For older versions, JS Modules cannot be used directly. You’ll need to manually include the provided JavaScript code in your widget action.

**Download the custom module:**

```bash
http://<your-trendz-host:port>/apiTrendz/publicApi/download/custom-action-ai-summary.js
```

Replace `<your-trendz-host:port>` with your own Trendz instance URL.

### Configure a Custom Action for Telemetry Summary

1. Open the dashboard containing your widget.
2. Switch to **Edit mode**.
3. Click **Edit Widget** on widget you want to add custom AI summary action.
4. Go to the **Actions** tab.
5. Click **Add action** and configure:
   - **Action source:** Widget header button
   - **Name:** Any (e.g., `AI Summary`)
   - **Button icon:** Choose any (default: `⋯`)
   - **Action:** Custom action


{% include images-gallery.html imageCollection="thingsboard-ai-widget-summary" %}

#### ThingsBoard v3.9 and Higher

You can use the JS module directly in the custom action:

1. Click **Modules** → **Add module**.
2. Set the following:
   * **Alias:** `trendz`
   * **JS module resource:** `Trendz AI Summary Module` *(The name may vary in whitelabeled versions.)*

3. Click **Apply**.
4. In the custom action code field, add:
   ```js
   trendz.getAnalytics(widgetContext, true);
   ```

5. Click **Add**, then **Apply**, and finally **Save widget**.

{% include images-gallery.html imageCollection="thingsboard-ai-widget-summary-v3.9" %}

#### ThingsBoard v3.6–v3.8

1. Manually copy the full JavaScript code from `custom-action-ai-summary.js` into your custom action field.
2. At the end of the custom action code field, add:

   ```js
   trendz.getAnalytics(widgetContext, true);
   ```
3. Click **Add**, then **Apply**, and finally **Save widget**.

{% include images-gallery.html imageCollection="thingsboard-ai-widget-summary-v3.6" %}

### Using the Custom Action

After configuration, a new button appears in your widget header.
Clicking it opens a dialog showing a summary generated by Trendz AI based on your widget’s data and prompt settings.

You can improve text quolity that are generated with AI summary functionality, adding your custom instructions or 
additional business knowladges about your data using getAnalytics() advanced parameters.

### Advanced Usage of `getAnalytics()`

The `getAnalytics()` method supports three usage modes:

#### 1. Default Prompt from Trendz

Uses the system default prompt (Trendz System Default Summary Prompt):

```js
getAnalytics(widgetContext, true);
```

#### 2. Custom Inline Text

Use Trendz only as the LLM model and provide your own text prompt:

```js
getAnalytics(widgetContext, false, 'Identify which tanks require additional attention and explain why.');
```

#### 3. Saved Prompt by ID

Use a saved prompt from Trendz by specifying its ID:

```js
getAnalytics(widgetContext, false, 'ef348780-a034-4ea9-9225-8b6ad112c451');
```

> **Recommendation:** Use the **Prompt ID** from Trendz for easier management and updates.

Learn more about managing prompts in [Trendz AI Prompts Overview](/docs/trendz/ai-assistance-prompts).

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
