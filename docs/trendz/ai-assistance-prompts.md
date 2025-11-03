---
layout: docwithnav-trendz
title: Interacting with Trendz Prompts
description: Step-by-step guide to interact with Trendz Prompts.

trendz-prompts-tab-access:
  0:
    image: /images/trendz/ai/prompts/access-prompt-tab.png
    title: Click on the "Prompts" tab
    
trendz-prompts-check-metadata:
  0:
    image: /images/trendz/ai/prompts/check-prompts-metadata.png
    title: "The \"Type\" column can have two different values: \"System\" and \"Custom\"."
    
trendz-prompts-create-new-prompt:
  0:
    image: /images/trendz/ai/prompts/create-new-prompt-1.png
    title: You can click the "New Prompt" button to create a new prompt.
  1:
    image: /images/trendz/ai/prompts/create-new-prompt-2.png
    title: 1. Write the prompt content.
  2:
    image: /images/trendz/ai/prompts/create-new-prompt-3.png
    title: 2. Enter a prompt name.
  3:
    image: /images/trendz/ai/prompts/create-new-prompt-4.png
    title: 3. Save the prompt.
  4:
    image: /images/trendz/ai/prompts/create-new-prompt-5.png
    title: A new prompt has been created.
    
trendz-prompts-check-selected-prompt:
  0:
    image: /images/trendz/ai/prompts/check-selected-prompt-1.png
    title: You can click on any prompt in the table to view its content.
  1:
    image: /images/trendz/ai/prompts/check-selected-prompt-2.png
    title: Content of Trendz System Default Summary Prompt. Additionally, you can copy the prompt ID by clicking the *Copy prompt ID* button in the upper-right corner of the tab. The prompt ID will be copied to the clipboard.
    
trendz-prompts-edit-selected-prompt:
  0:
    image: /images/trendz/ai/prompts/edit-selected-prompt-1.png
    title: You can click on any prompt in the table to edit its content.
  1:
    image: /images/trendz/ai/prompts/edit-selected-prompt-2.png
    title: 1. Press the "Edit" button.
  2:
    image: /images/trendz/ai/prompts/edit-selected-prompt-3.png
    title: 2. Update the prompt content;
  3:
    image: /images/trendz/ai/prompts/edit-selected-prompt-4.png
    title: 3. Save the prompt.
    
trendz-prompts-delete-selected-prompt:
  0:
    image: /images/trendz/ai/prompts/delete-selected-prompt-1.png
    title: Click the three-dot menu under the "Actions" column for the desired prompt. Click "delete".
  1:
    image: /images/trendz/ai/prompts/delete-selected-prompt-2.png
    title: Confirm by clicking "Yes".
  2:
    image: /images/trendz/ai/prompts/delete-selected-prompt-3.png
    title: The prompt has been deleted.
    
trendz-prompts-rename-selected-prompt:
  0:
    image: /images/trendz/ai/prompts/rename-selected-prompt-1.png
    title: Click the three-dot menu under the "Actions" column for the desired prompt. Click "rename".
  1:
    image: /images/trendz/ai/prompts/rename-selected-prompt-2.png
    title: Enter new name.
  2:
    image: /images/trendz/ai/prompts/rename-selected-prompt-3.png
    title: Click any free space in the tab to confirm. The prompt has been renamed.
    
trendz-prompts-markdown-preview:
  0:
    image: /images/trendz/ai/prompts/markdown-preview-1.png
    title: You can split your screen into two sides.
  1:
    image: /images/trendz/ai/prompts/markdown-preview-2.png
    title: To exit preview mode, you can click the "Hide Preview" button.

trendz-prompts-markdown-blocks:
  0:
    image: /images/trendz/ai/prompts/markdown-blocks.png
    text: In the upper left corner of the screen, you can find shortcuts for the following blocks

trendz-prompts-markdown-rename:
  0:
    image: /images/trendz/ai/prompts/markdown-rename-1.png
    text: Click the pencil icon.
  1:
    image: /images/trendz/ai/prompts/markdown-rename-2.png
    text: Enter the new name.
  2:
    image: /images/trendz/ai/prompts/markdown-rename-3.png
    text: Click any free space to confirm the changes.

trendz-prompts-markdown-save:
  0:
    image: /images/trendz/ai/prompts/markdown-save.png
    text: After editing the prompt, you can either save or cancel the changes.

trendz-prompts-test:
  0:
    image: /images/trendz/ai/prompts/test-selected-prompt-1.png
    text: Click the *Run test* button in the upper-right corner of the prompt editor.
  1:
    image: /images/trendz/ai/prompts/test-selected-prompt-2.png
    text: A test panel will open on the right side with a Select View dropdown. Choose one of your saved views from the dropdown menu.
  2:
    image: /images/trendz/ai/prompts/test-selected-prompt-3.png
    text: Click the *Test prompt* button to generate the summary.
  3:
    image: /images/trendz/ai/prompts/test-selected-prompt-4.png
    text: See the result.
---

* TOC
{:toc}

Prompt management in Trendz is a workspace where you define reusable prompt templates that combine your expert instructions with live telemetry data collected by ThingsBoard. From the dashboard you can trigger any template with a single click: 
Trendz automatically pulls the relevant device or asset metrics, injects them into your template, submits the assembled prompt to the configured language model, and then displays the model’s response directly alongside your telemetry. 
This lets you run AI-driven queries over real-time operational data without manually gathering data or retyping prompts.

## Prompts Tab

In this tab, you can check, create, rename, modify, or delete prompts.

To access the Prompts tab, you can follow these steps:
1. You can click on the ![image](/images/trendz/ai/overview-ai-assistance-icon.png) icon labeled *Assistant* located on the left side of the workspace.
2. You can then click on the *Prompts* tab located at the upper left side of the workspace.

{% include images-gallery.html imageCollection="trendz-prompts-tab-access" %}

### Available Actions

* **Check prompt metadata**

  In the Prompts tab, you can see a table of prompts with the following columns: *Name*, *Updated*, *Created*, *Type*, and *Actions*.  
  The *Type* column can have two different values: *"System"* and *"Custom"*.

  - *System*: Created by Trendz. These prompts cannot be renamed, edited, or deleted. You can read more about system prompts in the related section.
  - *Custom*: Created by the user. These prompts can be renamed, edited, or deleted.

  {% include images-gallery.html imageCollection="trendz-prompts-check-metadata" %}

* **Create a new prompt**

  You can click the *New Prompt* button to create a new prompt. This action will navigate you to the Markdown tab 
  (see more about interacting with the Markdown tab in the relevant section).

  Then, you can follow these steps:

  1. Write the prompt content;
  2. Enter a prompt name;
  3. Save the prompt.

  {% include images-gallery.html imageCollection="trendz-prompts-create-new-prompt" %}

  * **Test prompt**

  The Test feature allows you to preview how your prompt will analyze and summarize actual data from your saved views. This is especially useful when creating or refining custom prompts, 
  as it lets you see the AI-generated output in real-time before applying the prompt to production dashboards.

  To test your prompt, follow the next steps:
  1. Click the *Run test* button in the upper-right corner of the prompt editor;
  2. A test panel will open on the right side with a Select View dropdown. Choose one of your saved views from the dropdown menu.
  3. Click the *Test prompt* button to generate the summary.

  {% include images-gallery.html imageCollection="trendz-prompts-test" %}

* **Check selected prompt and Copy prompt ID**

  You can click on any prompt in the table to view its content. This will take you to the Markdown tab
  (see more about interacting with the Markdown tab in the relevant section).

  Additionally, you can copy the prompt ID by clicking the *Copy prompt ID* button in the upper-right corner of the tab.
  The prompt ID will be copied to the clipboard.
  {% include images-gallery.html imageCollection="trendz-prompts-check-selected-prompt" %}

* **Edit selected prompt**

  You can click on any prompt in the table to edit its content. This will also take you to the Markdown tab 
  (see more about interacting with the Markdown tab in the relevant section).

  Then, you can follow these steps:

  1. Press the *Edit* button;
  2. Update the prompt content;
  3. Save the prompt.

  {% include images-gallery.html imageCollection="trendz-prompts-edit-selected-prompt" %}

* **Rename prompt**

  You can rename a prompt in two ways:

  1. You can click on the desired prompt to open it in the Markdown tab, then rename it there (see the *Markdown Tab > Rename* section for details).

  2. You can click the three-dot menu under the *Actions* column for the desired prompt, select *Rename*, enter the new name, and press *Enter*.

  {% include images-gallery.html imageCollection="trendz-prompts-rename-selected-prompt" %}

* **Delete prompt**

  You can delete a prompt by clicking the three-dot menu under the *Actions* column for the desired prompt, selecting *Delete*, and confirming by clicking *Yes*.
    {% include images-gallery.html imageCollection="trendz-prompts-delete-selected-prompt" %}

### Markdown Tab

  LLM (Large Language Models) understand prompts in the Markdown format. This format makes prompts not only understandable for both humans and the model but also more structured.

  You can access the Markdown tab by editing or creating prompts (refer to the corresponding sections in the *Available Actions* section).

  The Markdown tab has the following functions:

* **Show Preview Button**

  You can split your screen into two sides: one for the Markdown code and the other for your prompt in a human-readable 
  format, by clicking the *Show Preview* button.

  To exit preview mode, you can click the *Hide Preview* button.

  {% include images-gallery.html imageCollection="trendz-prompts-markdown-preview" %}

* **Markdown Blocks**

  The Markdown tab supports various markdown blocks. In the upper left corner of the screen, you can find shortcuts for the following blocks:

  - Bold Text
  - Italic Text
  - H1 header
  - Reference
  - Link
  - Image
  - Unordered list
  - Ordered list
  - Code block

  You can learn more about *Markdown blocks* in the [GitHub tutorial](https://markdown-it.github.io/).

  {% include images-gallery.html imageCollection="trendz-prompts-markdown-blocks" %}

* **Rename Prompt**

  To rename the prompt, click the pencil icon, enter the new name, and click any free space to confirm the changes.
  
  **Note:** The prompt will not be renamed until you click the "Save" button.
  
  {% include images-gallery.html imageCollection="trendz-prompts-markdown-rename" %}

* **Save/Cancel**

  After editing the prompt, you can either save or cancel the changes.

  - Click *Save* to apply all changes and finalize the prompt.
  - Click *Cancel* to discard any changes made.

  **Note:** These buttons will only be enabled after confirming or declining the prompt changes.

  {% include images-gallery.html imageCollection="trendz-prompts-markdown-save" %}

## System Prompts

Trendz includes a set of default **system prompts** available upon installation. These prompts guide how Trendz generates
summaries, diagnoses issues, and identifies patterns from datasets. Below is the updated list of system prompts used by the platform:

* **Trendz System Default Summary Prompt**

Provides a high-level overview of performance, customer sentiment, and emerging trends.
It delivers a concise 2–3 sentence executive summary meant for leadership stakeholders.

* **Trendz System Operational Efficiency Optimization Prompt**

Detects opportunities to improve throughput or reduce resource use based solely on observed telemetry.
Focuses on utilization gaps, inefficiencies, and bottlenecks with actionable suggestions.

* **Trendz System Data Quality Review Prompt**

Highlights data quality issues like inconsistencies, outliers, or anomalies.
Evaluates their impact on business analysis and suggests actions to improve data integrity.

* **Trendz System Positive Performance Prompt**

Identifies areas of strong performance and growth potential.
Summarizes key positive trends and explains their contribution to business success.

* **Trendz System Incident Identification And Prioritization Prompt**

Analyzes time-based or event-based datasets to detect significant anomalies, such as outliers, spikes, or rare behaviors.
Focuses on identifying and describing these events with context.

* **Trendz System Root Cause Analysis Prompt**

Explains the likely root cause of a performance issue by identifying correlated changes in telemetry.
Offers one-paragraph plain-language reasoning, with a confidence rating.

## Best practices

Creating effective prompts is key to getting accurate and meaningful responses from Large Language Models (LLMs). Here are some essential best practices:

* **Be Clear and Specific**  
  Ensure your prompt is clear and specific to avoid vague or ambiguous responses. The more detail you provide, the better the model can understand and respond accurately.

* **Use Natural Language**  
  Write prompts as you would speak to another person. This helps the model interpret your request and generate a natural-sounding response.

* **Leverage Markdown for Structure**  
  Use Markdown formatting to organize and structure your prompt. For example:

  - Use **bold** for emphasis
  - Use *italics* for subtle hints or notes
  - Include headers for clear topic segmentation  
    
  This not only helps the model interpret your request more effectively but also makes your prompt more readable.

* **Keep Prompts Concise**  
  While detail is important, keep your prompts concise. Too much information can overwhelm the model, leading to less focused responses.

* **Test and Refine**  
  Prompt creation is an iterative process. Test your prompts, review the responses, and refine them to improve accuracy and relevance.

By following these practices, you can create effective prompts that lead to better results from LLMs.

## Next Steps

{% assign currentGuide = "AiAssistant" %}{% include templates/trndz-guides-banner.md %}
