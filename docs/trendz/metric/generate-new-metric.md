---
layout: docwithnav-trendz
title: Generate New Metrics
description: Generate new metrics using Trendz Metric Explorer

metric-definition:
  0:
    image: /images/trendz/metric/new-metric/metric-definition.png
    title: "A Metric Definition is an object that describes a future metric. Basically, it includes <b>Metric Name</b>, <b>Metric Description</b> and <b>How to calculate metrics</b>."

generated-metric:
  0:
    image: /images/trendz/metric/new-metric/generated-metric-1.png
    title: "A Generated Metric is an implemented metric definition. It contains Python code that can be executed."
  1:
    image: /images/trendz/metric/new-metric/generated-metric-2.png
    title: "A generated metric does not represent points in ThingsBoard."

native-calculation:
  0:
    image: /images/trendz/metric/new-metric/native-calculation-1.png
    title: "Each metric can be converted into a <b>Native Calculation Field</b>. This field contains the code from the metric that is already integrated into the Trendz ecosystem."
  1:
    image: /images/trendz/metric/new-metric/native-calculation-2.png
    title: "At this level, we still do not have points in ThingsBoard."  
  2:
    image: /images/trendz/metric/new-metric/native-calculation-3.png
    title: "But we can use this Calculation Field as a real-time Calculation Field."

native-calculation-with-telemetry:
   0:
      image: /images/trendz/metric/new-metric/native-calculation-with-telemetry.png
      title: "Native Calculation field with set up a <b>reprocess</b> and <b>refresh job</b>. It has telemetry in ThingsBoard."

create-new-metric:
  0:
    image: /images/trendz/metric/new-metric/create-new-metric-1.png
    title: "Choose the business entity for which the metric will be generated."
  1:
    image: /images/trendz/metric/new-metric/create-new-metric-2.png
    title: "Choose the item on which the metric will be tested."
  2:
    image: /images/trendz/metric/new-metric/create-new-metric-3.png
    title: "Choose the timerange on which the metric will be tested."
  3:
    image: /images/trendz/metric/new-metric/create-new-metric-4.png
    title: "Click <b>+ New Metric</b>."

ai-suggestions:
  0:
    image: /images/trendz/metric/new-metric/ai-suggestions-1.png
    title: "The AI agent will propose six different metrics based on your telemetries and topology."
  1:
    image: /images/trendz/metric/new-metric/ai-suggestions-2.png
    title: "You can check each metric by clicking on it - you will see a metric definition (name, description, and how it’s calculated) and use cases."
  2:
    image: /images/trendz/metric/new-metric/ai-suggestions-3.png
    title: "If you don’t like the generated metrics, click <b>Refresh Ideas</b> to generate new AI suggestions."
  3:
    image: /images/trendz/metric/new-metric/ai-suggestions-4.png
    title: "If you like a metric, click <b>Implement Field</b>."
  4:
    image: /images/trendz/metric/new-metric/ai-suggestions-5.png
    title: "Then you will be redirected to the <b>Generated Metric Overview</b> tab."

ai-suggestions-without-ai:
  0:
    image: /images/trendz/metric/new-metric/ai-suggestions-without-ai.png
    title: "AI Suggestions are disabled if the AI Feature <b>Metric Code Assistant</b> is not enabled."

create-manually:
  0:
    image: /images/trendz/metric/new-metric/create-manually-1.png
    title: "To switch to <b>Create Manually</b> option, click <b>Create Manually</b> button."
  1:
    image: /images/trendz/metric/new-metric/create-manually-2.png
    title: "If you want to generate a metric without AI, just submit a <b>Field Name</b>."
  2:
    image: /images/trendz/metric/new-metric/create-manually-3.png
    title: "If you want to generate it with AI, click the checkbox <b>Use AI to create metric</b>, and then fill in these fields <b>Description and Computation Logic</b> and <b>Use Relations</b>."
  3:
    image: /images/trendz/metric/new-metric/create-manually-4.png
    title: "When everything is submitted, click <b>Create Custom Field</b>."
  4:
    image: /images/trendz/metric/new-metric/create-manually-5.png
    title: "Then you will be redirected to the <b>Generated Metric Overview</b> tab."

create-manually-without-ai:
  0:
    image: /images/trendz/metric/new-metric/create-manually-without-ai.png
    title: "Generate with AI is disabled if the AI Feature <b>Metric Code Assistant</b> is not enabled."

code-editor:
  0:
    image: /images/trendz/metric/new-metric/code-editor-1.png
    title: "Once the code is modified, you can save it using the <b>Save Changes</b> button."
  1:
    image: /images/trendz/metric/new-metric/code-editor-2.png
    title: "Once the code is modified, you can revert changes using the <b>Cancel Changes</b> button."
  2:
    image: /images/trendz/metric/new-metric/code-editor-3.png
    title: "If the code has problems, you’ll see a red cross next to the line with the issue."

test-code:
  0:
    image: /images/trendz/metric/new-metric/test-code-1.png
    title: "To test code, press the <b>Run Test</b> button."
  1:
    image: /images/trendz/metric/new-metric/test-code-2.png
    title: "Then you’ll be redirected to the graph."

show-logs:
  0:
    image: /images/trendz/metric/new-metric/show-logs.png
    title: "To access the log section, click the <b>Logs</b> button in the upper-left corner of the screen."

show-details:
  0:
    image: /images/trendz/metric/new-metric/show-details.png
    title: "To view the Metric Definition from which this metric was created, click the <b>Metric Details</b> button."

ai-chat-send:
  0:
    image: /images/trendz/metric/new-metric/ai-chat-send-1.png
    title: "Type new message in the text field."
  1:
    image: /images/trendz/metric/new-metric/ai-chat-send-2.png
    title: "Review the new generated code with applied by AI changes."

ai-chat-review:
  0:
    image: /images/trendz/metric/new-metric/ai-chat-review-1.png
    title: "Click on your past messages."
  1:
    image: /images/trendz/metric/new-metric/ai-chat-review-2.png
    title: "Review the code that was generated by AI after this message."
      
ai-chat-edit:
  0:
    image: /images/trendz/metric/new-metric/ai-chat-edit-1.png
    title: "Click the Edit button next to your message."
  1:
    image: /images/trendz/metric/new-metric/ai-chat-edit-2.png
    title: "Modify the text and confirm the update."
  2:
    image: /images/trendz/metric/new-metric/ai-chat-edit-3.png
    title: "Review the new generated code with your applied changes."
      
ai-chat-clear:
  0:
    image: /images/trendz/metric/new-metric/ai-chat-clear-1.png
    title: "Click the Clear History button."
  1:
    image: /images/trendz/metric/new-metric/ai-chat-clear-2.png
    title: "Confirm the action by clicking Clear."
  2:
    image: /images/trendz/metric/new-metric/ai-chat-clear-3.png
    title: "See empty chat."

ai-assistance-without-ai:
  0:
    image: /images/trendz/metric/new-metric/ai-assistance-without-ai.png
    title: "The AI assistant is disabled if the AI Feature <b>Metric Code Assistant</b> is not enabled."
  
create-calculation:
  0:
    image: /images/trendz/metric/new-metric/create-calculation-1.png
    title: "Click <b>Save Calculation</b>."
  1:
    image: /images/trendz/metric/new-metric/create-calculation-2.png
    title: "Enter the <b>Calculation Name</b> (shown in Trendz) and <b>Calculation Key</b> (shown in ThingsBoard)."
  2:
    image: /images/trendz/metric/new-metric/create-calculation-3.png
    title: "Click <b>Save</b>."
  3:
    image: /images/trendz/metric/new-metric/create-calculation-4.png
    title: "Now the calculation field is saved in Trendz but still does not have telemetry points in ThingsBoard."

run-reprocess:
  0:
    image: /images/trendz/metric/new-metric/run-reprocess-1.png
    title: "Click the <b>Run</b> button to start the process."
  1:
    image: /images/trendz/metric/new-metric/run-reprocess-2.png
    title: "Select the <b>time range</b> for reprocessing (this defines the period of data to be saved to ThingsBoard)."
  2:
    image: /images/trendz/metric/new-metric/run-reprocess-3.png
    title: "Choose the <b>items</b> to include in the save operation (you can select the current item, all items, or a subset of items)."
  3:
    image: /images/trendz/metric/new-metric/run-reprocess-4.png
    title: "Click <b>Run</b> to begin the task."
  4:
    image: /images/trendz/metric/new-metric/run-reprocess-5.png
    title: "Wait until the reprocess task completes. You can navigate to other metrics while the process is running."

metric-rename:
  0:
    image: /images/trendz/metric/new-metric/metric-rename-1.png
    title: "Click the <b>Change Name</b> button next to the metric name."
  1:
    image: /images/trendz/metric/new-metric/metric-rename-2.png
    title: "Enter a new name and click <b>Save</b>."
  2:
    image: /images/trendz/metric/new-metric/metric-rename-3.png
    title: "The metric name was changed."

metric-delete:
  0:
    image: /images/trendz/metric/new-metric/metric-delete-1.png
    title: "Click the <b>Delete</b> button next to the metric name."
  1:
    image: /images/trendz/metric/new-metric/metric-delete-2.png
    title: "Click <b>Delete</b> again to confirm."
  2:
    image: /images/trendz/metric/new-metric/metric-delete-3.png
    title: "The metric was deleted."

open-calculation:
  0:
    image: /images/trendz/metric/new-metric/open-calculation-1.png
    title: "Click <b>Open Calculation</b> button."
  1:
    image: /images/trendz/metric/new-metric/open-calculation-2.png
    title: "The calculation field was opened."

associated-calculation:
  0:
    image: /images/trendz/metric/new-metric/associated-calculation-1.png
    title: 'If the code of the associated Calculation Field was modified, you will see the warning <b>"Calculation field is not synced with the metric"</b>.'
  1:
    image: /images/trendz/metric/new-metric/associated-calculation-2.png
    title: 'If the metric itself was changed, you will see the warning <b>"Calculation field is outdated and needs to be updated"</b>.'

update-calculation:
  0:
    image: /images/trendz/metric/new-metric/update-calculation-1.png
    title: "Click <b>Save calculation</b> button."
  1:
    image: /images/trendz/metric/new-metric/update-calculation-2.png
    title: "Choose <b>Update existing calculation</b> option and click <b>Save</b> button to update the associated Calculation Field."
  2:
    image: /images/trendz/metric/new-metric/update-calculation-3.png
    title: "Choose <b>Create new calculation</b> option and click <b>Save</b> button to create new Calculation Field."

tabs-create-calculation:
  0:
    image: /images/trendz/metric/new-metric/tabs-create-calculation-1.png
    title: "If a Native Calculation isn't created for the chosen metric, you will be prompted to create a Calculation Field from it."  
  1:
    image: /images/trendz/metric/new-metric/tabs-create-calculation-2.png
    title: "If a Native Calculation isn't created for the chosen metric, you will be prompted to create a Calculation Field from it."  

tabs-reprocess-calculation:
  0:
    image: /images/trendz/metric/new-metric/tabs-reprocess-calculation-1.png
    title: "If a Native Calculation was created from the chosen metric but has no points in the selected time range, you will be prompted to run a reprocess job to save data points to ThingsBoard."
  1:
    image: /images/trendz/metric/new-metric/tabs-reprocess-calculation-2.png
    title: "If a Native Calculation was created from the chosen metric but has no points in the selected time range, you will be prompted to run a reprocess job to save data points to ThingsBoard."

tabs-with-data:
  0:
    image: /images/trendz/metric/new-metric/tabs-with-data.png
    title: "Once telemetry is saved to ThingsBoard, you can check the generated data on each tab."

---

* TOC 
{:toc}

## Key Concepts

Trendz Metric Explorer allows you to create new metrics from existing telemetries. Let's describe the flow of metric creation:

### Metric Definition

A Metric Definition is an object that describes a future metric. Basically, it includes:

1. **Metric Name** - The name that will appear in the fields tab (in the generated metrics folder).
2. **Metric Description** - A short description explaining what this metric should do.
3. **How to calculate metrics** - A step-by-step instruction explaining how to calculate this metric.

A Metric Definition does not have any implementation, it’s just a textual description of what should be implemented - a blueprint for a future metric.

{% include images-gallery.html imageCollection="metric-definition" %}

### Generated Metric

A Generated Metric is an implemented metric definition. It contains Python code that can be executed to generate telemetry 
points (graph or table of values). A metric does not represent points in ThingsBoard, it calculates values in real time. 
Also, you cannot use a generated metric directly in the Trendz ecosystem - it’s just a template for a future ThingsBoard telemetry.

{% include images-gallery.html imageCollection="generated-metric" %}

### Native Calculation Field

Each metric can be converted into a **Native Calculation Field**. This field contains the code from the metric that is already integrated
into the Trendz ecosystem. At this level, we still do not have points in ThingsBoard, but we can use this Calculation Field as a
real-time Calculation Field.

Read more about Native Calculation Fields [here](/docs/trendz/calculations/native/).

{% include images-gallery.html imageCollection="native-calculation" %}

### Native Calculation Field with Telemetry Points

To save telemetry points to ThingsBoard, it’s necessary to set up a **reprocess** or **refresh job** for the Native Calculation Field.

The flow of saving metric telemetry to ThingsBoard is described [here](/docs/trendz/metric/save-to-thingsboard/).

{% include images-gallery.html imageCollection="native-calculation-with-telemetry" %}

## Create New Metric

To create a new metric, you need to:

1. Choose the business entity for which the metric will be generated.
2. Choose the item on which the metric will be tested.
3. Choose the timerange on which the metric will be tested.
4. Click **+ New Metric**.

{% include images-gallery.html imageCollection="create-new-metric" %}

You will see two options:

### AI Suggestions

The AI agent will propose six different metrics based on your telemetries and topology. You can check each metric
by clicking on it - you will see a metric definition (name, description, and how it’s calculated) and use cases.

If you don’t like the generated metrics, click **Refresh Ideas** to generate new AI suggestions.

If you like a metric, click **Implement Field**. Then you will be redirected to the **Generated Metric Overview** tab.
This tab’s functionality will be covered later in this article.

{% include images-gallery.html imageCollection="ai-suggestions" %}

**Important note:** AI Suggestions are disabled if the AI Feature **Metric Code Assistant** is not enabled. 
Learn how to enable it [here](/docs/trendz/custom-ai-model-configuration/).

{% include images-gallery.html imageCollection="ai-suggestions-without-ai" %}

### Create Manually

This option allows you to create any metric you want, with or without AI assistance. 
To switch to it, click **Create Manually** button.

If you want to generate a metric without AI, just submit a **Field Name**. You will see this name in the
generated metrics folder.

If you want to generate it with AI, click the checkbox **Use AI to create metric**, and then fill in these fields:

1. **Description and Computation Logic** - Describe what your field should do and how it should be implemented.
2. **Use Relations** - If yes, this code will be able to use telemetries from related entities.

When everything is submitted, click **Create Custom Field** and you will be redirected to the overview tab with the generated code.
This functionality is described in the next section.

{% include images-gallery.html imageCollection="create-manually" %}

**Important note:** Generate with AI is disabled if the AI Feature **Metric Code Assistant** is not enabled. 
Learn how to enable it [here](/docs/trendz/custom-ai-model-configuration/).

{% include images-gallery.html imageCollection="create-manually-without-ai" %}

## Generated Metrics Actions

You can access the **Generated Metrics Overview** section in several ways:

1. Click on any metric from the **Generated Metric Fields** section.
2. Implement a metric using methods from the **Create New Metric** section of this documentation.

If you generated the metric without AI, you will see an empty code editor; otherwise, you will see AI-generated code.

### Code Editor

In the code editor, you can write or modify metric code. This code has the same syntax as the Native Calculation Field.
You can read about it [here](/docs/trendz/calculations/native/).

Once the code is modified, you can save it using the **Save Changes** button or revert changes using **Cancel Changes** button.

If the code has problems, you’ll see a red cross next to the line with the issue.

{% include images-gallery.html imageCollection="code-editor" %}

### Test Code

To test code, press the **Run Test** button. Then you’ll be redirected to the graph. The logic of this graph is the
same as in the overview tab of a regular metric. This graph or table will show points that the metric code
generates for the chosen item. You can read more about the overview tab [here](/docs/trendz/metric/overview/#overview-tab).

{% include images-gallery.html imageCollection="test-code" %}

### Show Logs

To access the log section, click the **Logs** button in the upper-left corner of the screen.

{% include images-gallery.html imageCollection="show-logs" %}

### Show Details

To view the Metric Definition from which this metric was created, click the **Metric Details** button.

{% include images-gallery.html imageCollection="show-details" %}

### AI Assistant

To interact with AI Assistant, click the Ask AI button. You can:

1. Ask questions about your code.
2. Request AI to rewrite or refactor code.
3. Ask AI to detect and fix bugs.

In the chat interface, you can:

**Send a new message to the chat:**

1. Type new message in the text field.
2. Review the new generated code with applied by AI changes.

{% include images-gallery.html imageCollection="ai-chat-send" %}

**Review code generated in previous interactions:**

1. Click on your past messages.
2. Review the code that was generated by AI after this message.

{% include images-gallery.html imageCollection="ai-chat-review" %}

**Edit previous messages to rerun them with modifications:**

1. Click the Edit button next to your message.
2. Modify the text and confirm the update.
3. Review the new generated code with your applied changes.

{% include images-gallery.html imageCollection="ai-chat-edit" %}

**Clear chat history:**

1. Click the Clear History button.
2. Confirm the action by clicking Clear.

{% include images-gallery.html imageCollection="ai-chat-clear" %}

**Important note:** The AI Assistant will only be available if the AI Feature **Metric Code Assistant** is not enabled. 
Learn how to enable it [here](/docs/trendz/custom-ai-model-configuration/).

{% include images-gallery.html imageCollection="ai-assistance-without-ai" %}

### Create Calculation Field

You can use the metric across Trendz and even ThingsBoard by saving it to the Native Calculation. To do this:

1. Click **Save Calculation**.
2. Enter the **Calculation Name** (shown in Trendz) and **Calculation Key** (shown in ThingsBoard).
3. Click **Save**.

Now the calculation field is saved in Trendz but still does not have telemetry points in ThingsBoard.

{% include images-gallery.html imageCollection="create-calculation" %}

You can also be prompted to run a **Reprocess Task** that saves data to ThingsBoard:

1. Click the **Run** button to start the process.
2. Select the **time range** for reprocessing (this defines the period of data to be saved to ThingsBoard).
3. Choose the **items** to include in the save operation (you can select the current item, all items, or a subset of items).
4. Click **Run** to begin the task.
5. Wait until the reprocess task completes. You can navigate to other metrics while the process is running.

Once the reprocess task is completed, the telemetry points will be saved to ThingsBoard.

{% include images-gallery.html imageCollection="run-reprocess" %}

For detailed instructions on saving telemetries to ThingsBoard, follow the [guide](/docs/trendz/metric/use-in-thingsboard/).

### Manage Associated Calculation Field

If the metric has an associated Calculation Field, you can open it by clicking the **Open Calculation** button.

{% include images-gallery.html imageCollection="open-calculation" %}

If the code of the associated Calculation Field was modified, you will see the warning **"Calculation field is not synced with the metric"**.
If the metric itself was changed, you will see the warning **"Calculation field is outdated and needs to be updated"**.

{% include images-gallery.html imageCollection="associated-calculation" %}

To update the associated Calculation Field or create a new one:

1. Click the **Save calculation** button.
2. Choose **Update existing calculation** and click **Save** to update the associated Calculation Field.
3. Choose **Create new calculation** and click **Save** to create a new Calculation Field.

If the **Create new calculation** option is selected, the metric will now be associated with the newly created Calculation Field.

{% include images-gallery.html imageCollection="update-calculation" %}

### Other Actions

To rename a metric:

1. Click the **Change Name** button next to the metric name.
2. Enter a new name.
3. Click **Save**.

{% include images-gallery.html imageCollection="metric-rename" %}

To delete a metric:

1. Click the **Delete** button next to the metric name.
2. Click **Delete** again to confirm.

{% include images-gallery.html imageCollection="metric-delete" %}

## Tabs Section

It's possible to see **Statistics**, **Time Patterns**, and **Range Analysis** for a generated metric only if it has a 
corresponding Native Calculation, for which telemetry data is present in ThingsBoard for the chosen time range.

If a Native Calculation isn't created for the chosen metric, you will be prompted to create a Calculation Field from it.

{% include images-gallery.html imageCollection="tabs-create-calculation" %}

If a Native Calculation was created from the chosen metric but has no points in the selected time range, you will be prompted
to run a reprocess job to save data points to ThingsBoard.

{% include images-gallery.html imageCollection="tabs-reprocess-calculation" %}

Once telemetry is saved to ThingsBoard, you can check the generated data on each tab.

{% include images-gallery.html imageCollection="tabs-with-data" %}

Read more about these tabs [here](/docs/trendz/metric/overview/#tabs-section).

For detailed instructions on saving telemetries to ThingsBoard, follow the [guide](/docs/trendz/metric/use-in-thingsboard/).

## Best Practices

1. If you need to create a specific metric, use AI to create it in **Manual** mode.
2. If generated code isn’t working: check logs, verify relations.
3. If generated code fails by timeout: increase it for the Python Executor or check how often `get_telemetries`
   is called. If it’s called in a loop, ask AI to call it once per device. This can improve performance. You
   can also decrease the time range to reduce the number of analyzed points.
4. Give clear instructions to AI - not just “Fix my code,” but point out the cause of the bug.
5. Save your work regularly using the **Save** button.
6. You can ask AI to create code with more comments to explain what each part does or ask it to remove them to make
   the code more readable. You can also ask it to add more logs for better debugging in the logs section.

## Next Steps

{% assign currentGuide = "MetricExplorer" %}{% include templates/trndz-guides-banner.md %}
