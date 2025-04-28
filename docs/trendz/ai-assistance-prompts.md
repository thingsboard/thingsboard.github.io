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
    title: 2. Confirm everything looks as expected.
  3:
    image: /images/trendz/ai/prompts/create-new-prompt-4.png
    title: 3. Enter a prompt name.
  4:
    image: /images/trendz/ai/prompts/create-new-prompt-5.png
    title: 4. Save the prompt.
  5:
    image: /images/trendz/ai/prompts/create-new-prompt-6.png
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
    title: 3. Confirm everything looks as expected;
  4:
    image: /images/trendz/ai/prompts/edit-selected-prompt-5.png
    title: 4. Save the prompt.
    
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

trendz-prompts-markdown-fullscreen:
  0:
    image: /images/trendz/ai/prompts/markdown-fullscreen-1.png
    title: You can enter fullscreen mode in the Markdown tab by clicking the "Fullscreen" button in the upper right corner of the tab.
  1:
    image: /images/trendz/ai/prompts/markdown-fullscreen-2.png
    title: To exit fullscreen mode, you can click the same button again.

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

trendz-prompts-markdown-confirm:
  0:
    image: /images/trendz/ai/prompts/markdown-confirm.png
    text: During the creation or editing process, you can confirm or decline the prompt changes.

trendz-prompts-markdown-save:
  0:
    image: /images/trendz/ai/prompts/markdown-save.png
    text: After editing the prompt, you can either save or cancel the changes.
---

* TOC
{:toc}

Trendz Prompts is a powerful feature that enables the creation of various prompts. These prompts can be used to generate 
AI summaries for views, providing users with clear and insightful overviews. They can also be used to create 
human-friendly, natural-sounding summaries that enhance the user experience.

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
  2. Confirm everything looks as expected;
  3. Enter a prompt name;
  4. Save the prompt.

  {% include images-gallery.html imageCollection="trendz-prompts-create-new-prompt" %}

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
  3. Confirm everything looks as expected;
  4. Save the prompt.

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

* **Fullscreen Button**

  You can enter fullscreen mode in the Markdown tab by clicking the *Fullscreen* button in the upper right corner of the tab.

  To exit fullscreen mode, you can click the same button again.

  {% include images-gallery.html imageCollection="trendz-prompts-markdown-fullscreen" %}

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

* **Confirm/Decline**

  During the creation or editing process, you can confirm or decline the prompt changes.

  - If you confirm, all prompt changes will be applied.
  - If you decline, all prompt changes will be discarded.

  **Note:** The prompt changes will not be applied until you click the "Save" button.

  {% include images-gallery.html imageCollection="trendz-prompts-markdown-confirm" %}

* **Save/Cancel**

  After editing the prompt, you can either save or cancel the changes.

  - Click *Save* to apply all changes and finalize the prompt.
  - Click *Cancel* to discard any changes made.

  **Note:** These buttons will only be enabled after confirming or declining the prompt changes.

  {% include images-gallery.html imageCollection="trendz-prompts-markdown-save" %}

## System prompts

Trendz contains default system prompts that are available from installation. By default, for generating summaries, 
Trendz uses the "Trendz System Default Summary Prompt". Here is the list of all prompts that system uses:

* **Trendz System Default Summary Prompt**

  This prompt provides a high-level summary of current performance trends, customer satisfaction, and noteworthy changes. 
  It is designed to give the snapshot of the business situation with clear and concise insights.

* **Trendz System Data Analysis Prompt**

  This prompt is focused on analyzing datasets, uncovering trends, and providing actionable insights for decision-making. 
  It leverages statistical methods and data visualization tools to identify key patterns and outliers.

* **Trendz System Data Quality Review Prompt**

  Aimed at reviewing datasets for data quality, this prompt highlights inconsistencies, outliers, and other anomalies 
  that could affect the accuracy of analysis. It includes methods like data profiling and statistical tests to assess 
  data integrity.

* **Trendz System Positive Performance Prompt**

  This prompt focuses on identifying areas of strong performance and growth opportunities. It analyzes positive trends 
  and provides recommendations to leverage these successes for further business achievements.

* **Trendz System Short Summary Prompt**

  This prompt is designed to create a concise 3-10 word summary of key points from the data. It generates a meaningful
  name or headline that encapsulates the essence of the dataset without further elaboration.

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
