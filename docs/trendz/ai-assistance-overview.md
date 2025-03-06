---
layout: docwithnav-trendz
title: Interacting with Trendz AI Assistance
description: Step-by-step guide to interact with Trendz AI Assistance.

trendz-assistance-overview:
  0:
    image: /images/trendz/ai/overview-start-new-chat.png
    title: 1.Press “New Chat”
  1:
    image: /images/trendz/ai/overview-save-topology-entities.png
    title: 2.Here you will see the popup with business entity selection - here you can define the entities that will be considered by AI for the current conversation. Select business entities that will be used for this chat (It’s possible to always modify them). Click “Save” to apply selections.
  2:
    image: /images/trendz/ai/overview-send-new-message.png
    title: 3.Write and send the question.
  3:
    image: /images/trendz/ai/overview-final-view.png
    title: 4.See the result.

trendz-assistance-capabilities-visualization:
  0:
    image: /images/trendz/ai/capabilities/1-simple-table.png
    title: Table (without dynamic columns)
  1:
    image: /images/trendz/ai/capabilities/2-line.png
    title: Line
  2:
    image: /images/trendz/ai/capabilities/3-pie.png
    title: Pie
  3:
    image: /images/trendz/ai/capabilities/4-bar.png
    title: Bar
  4:
    image: /images/trendz/ai/capabilities/5-heatmap.png
    title: Heatmap
  5:
    image: /images/trendz/ai/capabilities/6-heatmap-calendar.png
    title: Heatmap Calendar
  6:
    image: /images/trendz/ai/capabilities/7-card.png
    title: Card

trendz-assistance-capabilities-date-picker:
  0:
    image: /images/trendz/ai/capabilities/8-date-picker.png
    title: Apply a date picker

trendz-assistance-capabilities-date-fields:
  0:
    image: /images/trendz/ai/capabilities/9-date-fields.png
    title: Use date fields

trendz-assistance-capabilities-view-name:
  0:
    image: /images/trendz/ai/capabilities/10-view-name.png
    title: Assign a name for each column and visualization

trendz-assistance-capabilities-filter:
  0:
    image: /images/trendz/ai/capabilities/11-filter.png
    title: Add filters

trendz-assistance-capabilities-foreing-language:
  0:
    image: /images/trendz/ai/capabilities/12-foreign-language.png
    title: Answer questions in different languages

trendz-assistance-chat-page:
  0:
    image: /images/trendz/ai/chat-page-1.png
    title: The chat history will be shown on the left side of the screen (1). The visualization of the previously asked in this chat question will be located on the right side of the screen (2).
  1:
    image: /images/trendz/ai/chat-page-2.png
    title: If it is necessary it is possible to change the generated time range.
  2:
    image: /images/trendz/ai/chat-page-3.png
    title: If it is necessary it is possible to change or remove generated filters. 

trendz-assistance-send-new-msg:
  0:
    image: /images/trendz/ai/send-message-1.png
    title: Press the “New message” button
  1:
    image: /images/trendz/ai/send-message-2.png
    title: Type and send the message by pressing the “Send” icon on the left side of the input field.

trendz-assistance-edit-msg:
  0:
    image: /images/trendz/ai/edit-message-1.png
    title: Press the “Edit last message” button
  1:
    image: /images/trendz/ai/edit-message-2.png
    title: Modify this message, and send it by pressing the “Submit” icon on the left side of the input field.

trendz-assistance-check-msg:
  0:
    image: /images/trendz/ai/check-message-1.png
    title: You can check on of the previous messages by pressing on it. After the previously generated view/answer will appear on the right side of the screen.

trendz-assistance-edit-selected-msg:
  0:
    image: /images/trendz/ai/edit-selected-msg-1.png
    title: Press on the pencil icon on the left of the message to edit
  1:
    image: /images/trendz/ai/edit-selected-msg-2.png
    title: After that, it’s necessary to modify the selected message by typing inside it. You can confirm or cancel the change by pressing the buttons on the right side of the message. 

trendz-assistance-rerun-msg:
  0:
    image: /images/trendz/ai/rerun-msg.png
    title: Press on the refresh button on the right upper side of the selected message.

trendz-assistance-save-config:
  0:
    image: /images/trendz/ai/chat-save-config-1.png
    title: Press the “Save config” button
  1:
    image: /images/trendz/ai/chat-save-config-2.png
    title: Choose the view collection where you want to save the generated view config

trendz-assistance-topology:
  0:
    image: /images/trendz/ai/chat-topology-1.png
    title: You can access the Topology Entities tab by starting a new chat or by clicking on the selected business entities next to the Topology Entities label in the upper left corner of the screen.
  1:
    image: /images/trendz/ai/chat-topology-2.png
    title: Specify which business entities or business entity fields AI Assistance needs to know.
  2:
    image: /images/trendz/ai/chat-topology-3.png
    title: It is also possible to specify the description for a business entity or its fields.
---

* TOC
{:toc}

AI assistance is a powerful feature that enables the creation of various visualizations. It allows you to generate
different visualizations according to the request given in the free-speech form and specify the necessary details
like date range, time grouping, aggregation, filtering, etc.

To interact with the AI Assistant, follow these simple steps:
1. To access AI Assistance, click on the icon![image](/images/trendz/ai/overview-ai-assistance-icon.png) labeled *Assistant*
   located on the left side of the workspace. Press **New Chat**.
2. Here you will see the popup with business entity selection - here you can define the entities that will be considered
   by AI for the current conversation. Select **business entities** that will be used for this chat (It’s possible to always modify them).
   Click **Save** to apply selections.
3. Write and send the question.
4. See the result.

{% include images-gallery.html imageCollection="trendz-assistance-overview" %}

⚠️ *Note*: It’s necessary to set up own model to use the AI Assistance in self-hosted installation.

## Capabilities
AI Assistance offers powerful features to help you make informed decisions and optimize your workflow. Explore its capabilities below:

**1.Generate different types of visualizations**

The available visualizations are:

* Table (without dynamic columns)
* Line chart
* Pie chart
* Bar chart
* Heatmap
* Heatmap calendar
* Card (without compared value)
  {% include images-gallery.html imageCollection="trendz-assistance-capabilities-visualization" %}

**2.Apply a date picker**

Apply a date picker (by default for this week):
{% include images-gallery.html imageCollection="trendz-assistance-capabilities-date-picker" %}

**3.Use date fields**
{% include images-gallery.html imageCollection="trendz-assistance-capabilities-date-fields" %}

**4.Assign a name for each column and visualization**
{% include images-gallery.html imageCollection="trendz-assistance-capabilities-view-name" %}

**5.Add filters**
{% include images-gallery.html imageCollection="trendz-assistance-capabilities-filter" %}

**6.Answer questions in different languages**
{% include images-gallery.html imageCollection="trendz-assistance-capabilities-foreign-language" %}

## Chat Page

After sending any message to the new chat or pressing on the previously initialized chat you will be redirected to the **Chat page**. The chat history will be shown on the left side of the screen (1).
The visualization of the previously asked in this chat question will be located on the right side of the screen (2).

If it is necessary it is possible to change the generated time range or to change or remove generated filters.
{% include images-gallery.html imageCollection="trendz-assistance-chat-page" %}

On this page it is possible to:

* **Type and send a new message**:
  * It’s possible to do this by pressing the *New message* button, typing and sending the message by pressing the *Send* icon on the left side of the input field.
    {% include images-gallery.html imageCollection="trendz-assistance-send-new-msg" %}

* **Edit the last message**:
  * It’s possible to do this by pressing the *Edit last message* button, modifying this message, and sending the message by pressing the *Submit* icon on the left side of the input field.
  * It could be useful when an AI Assistant returns incorrect results to specify additional details.
    {% include images-gallery.html imageCollection="trendz-assistance-edit-msg" %}

* **Check the selected message**:
  * It’s possible to do this by pressing on the message. After the previously generated view/answer will appear on the right side of the screen.
    {% include images-gallery.html imageCollection="trendz-assistance-check-msg" %}
  
* **Edit selected message**:
  * It’s possible to do this by pressing on the pencil icon on the left of the message to edit. After that, it’s necessary to modify the selected message by typing inside it. 
You can confirm or cancel the change by pressing the buttons on the right side of the message. 
  * It could be useful when an AI Assistant returns incorrect results to specify additional details.
    {% include images-gallery.html imageCollection="trendz-assistance-edit-selected-msg" %}

* **Rerun selected message**:
  * It’s possible to do this by pressing the *refresh button* on the right upper side of the selected message. 
  * It could be useful when an AI Assistant returns incorrect results.
    {% include images-gallery.html imageCollection="trendz-assistance-rerun-msg" %}

* **Save config**:
  * This button could be useful to save the generated view to the selected view collection.
    {% include images-gallery.html imageCollection="trendz-assistance-save-config" %}


⚠️ *Note*: the current version of AI Assistant does not remember previous messages, so if it’s necessary to add specifications, better to do it by editing the message.

## Chat Topology Entities
To answer the query, AI Assistance should analyze the provided topology. It could be challenging to analyze the topology with hundreds of business entities and/or business entity fields, 
which could damage the accuracy of the AI Assistance. To increase the accuracy of the AI Assistance you can use the **Topology Entities window**.

You can access the Topology Entities tab by starting a new chat or by clicking on the selected business entities next to the Topology Entities label in the upper left corner of the screen.

To increase the accuracy of AI Assistance, you can specify which business entities or business entity fields it needs to know.

It is also possible to specify the description for a business entity or its fields. It could be useful when fields have unrepresentative names.

{% include images-gallery.html imageCollection="trendz-assistance-topology" %}

All selected business entities and business entity fields affect only the chat in which you selected them. All added/changed descriptions affect all chats at the same time.

## Best practices

* **Use the Topology Entities tab:** To increase the accuracy of AI Assistance, especially when dealing with complex topologies, specify which business entities 
  or fields are relevant.
* **Provide descriptions for business entity fields:** If field names are unclear, adding descriptions can improve AI Assistance accuracy.
* **Edit messages to add specifications:** Since the current AI Assistant version does not remember previous messages, editing the last message is the best way 
to provide additional details or correct errors.
* **Use your own model:** For self-hosted applications or to avoid cloud token limits, configure and use your own large language model.
* **Select the right model:** When using your own model, choose the one that best suits your needs and budget, considering factors like performance and 
cost efficiency.
* **Provide clear instructions to the AI Assistant:** When creating a new message or editing an old one to get the correct results from the AI Assistant provide as many details as possible.

## Limitations

### Token limitation (applicable only for cloud)

The number of messages you can send each month depends on your subscription type. When you`re using the Trendz AI model on the cloud, there are no additional charges.

To not be related to these limits, it’s possible to use your own model. To find out how to not be related to these limits, refer to the [Custom AI Model Configuration page](/docs/trendz/custom-ai-model-configuration/) for more details.

### Rate limits

The count of sent messages per minute should be less than:
* 6 for each user
* 20 for each customer
* 50 for each tenant

### Missing default system model (applicable only for self-hosted)

It’s impossible to use the default large language model for self-hosted clients. To find out how to enable the AI Assistant feature for self-hosted installation, please refer to the [Custom AI Model Configuration page](/docs/trendz/custom-ai-model-configuration/).

### Feature limitations

AI Assistance cannot:
  * Create anomaly or prediction models, create calculation fields
  * Create next visualizations: tables with dynamic columns, scatter plots and cards with line chart or with compared value 
  * Specify view/view field settings

These features will be added in future releases.

⚠️ This is a beta function, that could return incorrect results.

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}
