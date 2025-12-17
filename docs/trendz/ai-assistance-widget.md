---
layout: docwithnav-trendz
title: Advanced analytics Chat Assistant widget
description: Step-by-step guide to interact with Advanced analytics Chat Assistant widget.

trendz-assistance-chat-example:
  0: 
    image: /images/trendz/ai/chat-widget/chat-widget-example-1.png
    title:
  1: 
    image: /images/trendz/ai/chat-widget/chat-widget-example-2.png
    title:

trendz-assistance-create-dashboard:
  0:
    image: /images/trendz/ai/chat-widget/create-dashboard.png
    title: 

trendz-assistance-set-up-alias:
  0:
    image: /images/trendz/ai/chat-widget/set-up-alias-1.png
    title: Go to Aliases -> Add Alias
  1:
    image: /images/trendz/ai/chat-widget/set-up-alias-2.png
    title: Enter an Alias Name, choose Filter Type as "Asset type", select the desired asset type, and click Add
  2:
    image: /images/trendz/ai/chat-widget/set-up-alias-3.png
    title: Add a second alias - enter Alias Name, choose Filter Type as "Entity from dashboard state", enter State entity parameter name as "default" and click Add
  3:
    image: /images/trendz/ai/chat-widget/set-up-alias-4.png
    title: Ensure that you have two aliases and click Save

trendz-assistance-add-table:
  0:
    image: /images/trendz/ai/chat-widget/add-table-1.png
    title: Click Add Widget, select "Tables"
  1:
    image: /images/trendz/ai/chat-widget/add-table-2.png
    title: Select "Entities table"
  2:
    image: /images/trendz/ai/chat-widget/add-table-3.png
    title: Choose the first alias as the entity alias and click Add action
  3:
    image: /images/trendz/ai/chat-widget/add-table-4.png
    title: Add new action
  4:
    image: /images/trendz/ai/chat-widget/add-table-5.png
    title: Set Action source as "On row click", set any name, set State entity parameter name as "default" and click Save
  5:
    image: /images/trendz/ai/chat-widget/add-table-6.png
    title: Click Save and ensure one action is added
  6:
    image: /images/trendz/ai/chat-widget/add-table-7.png
    title: Click Add to finalize

trendz-assistance-add-chat-widget:
  0:
    image: /images/trendz/ai/chat-widget/add-chat-widget-1.png
    title: Click + Add widget
  1:
    image: /images/trendz/ai/chat-widget/add-chat-widget-2.png
    title: Select Advanced analytics Bundle
  2:
    image: /images/trendz/ai/chat-widget/add-chat-widget-3.png
    title: Select Advanced analytics Chat Assistant
  3:
    image: /images/trendz/ai/chat-widget/add-chat-widget-4.png
    title: Choose the second alias as the Entity alias. Add Name as the Data key.
  4:
    image: /images/trendz/ai/chat-widget/add-chat-widget-5.png
    title: Go to the Appearance section and enter Filter name fields, then click Add.

trendz-assistance-ai-chat-interaction:
  0:
    image: /images/trendz/ai/chat-widget/ai-chat-interaction-1.png
    title: Click on the desired asset, then click "START AI CHAT".
  1:
    image: /images/trendz/ai/chat-widget/ai-chat-interaction-2.png
    title: In the pop-up window, ask questions about the selected asset.
  2:
    image: /images/trendz/ai/chat-widget/ai-chat-interaction-3.png
    title: See the result.
  3:
    image: /images/trendz/ai/chat-widget/ai-chat-interaction-4.png
    title: The current version of the AI Assistant supports memory and ongoing conversations, so you can ask follow-up questions or provide additional specifications.
  4:
    image: /images/trendz/ai/chat-widget/ai-chat-interaction-5.png
    title: To start a new conversation, click the "New Conversation" button.
  5:
    image: /images/trendz/ai/chat-widget/ai-chat-interaction-6.png
    title: You can always return to a previous conversations using the dropdown under the "Current Chat" label.
  6:
    image: /images/trendz/ai/chat-widget/ai-chat-interaction-7.png
    title: You can view messages or save generated views in the "Chats" tab by selecting chats with a "Dashboard Origin".

---

* TOC
{:toc}

The AI Assistant Widget is an interactive tool that allows users to engage in chat-based sessions for quick data retrieval and analysis. 
It can be added to a dashboard in ThingsBoard and provides an easy way to ask questions and receive instant responses.

{% include images-gallery.html imageCollection="trendz-assistance-chat-example" %}

## Key Features

* **Chat-Based Interaction:** Users can type questions, edit them, and request new data. Responses appear instantly on the right side of the chat window.
* **History Tracking:** The widget stores previous questions and answers, allowing users to revisit past queries and view updated responses with the latest data.
* **Flexible Usage with or without Aliases:**
  * By default, the assistant provides answers based on all data accessible to the user.
  * Users can configure the widget to focus on specific entities (devices, assets, or groups) using aliases in ThingsBoard.
  * If an alias is linked, responses will be tailored to the selected entity.
  * If no alias is used, the assistant will still function and provide responses based on general available data.
* **Dynamic Entity Switching:**
  * Users can select a different entity, and the assistant will automatically adjust responses to reflect the new selection without requiring repeated queries.
* **Dashboard-Specific History:**
  * Chat history is tied to each widget instance and dashboard.
  * Different dashboards with separate widgets will maintain independent histories.
  * Users and customers only see their respective chat histories.

## Usage Recommendations
  
  * Place the widget in a convenient but non-intrusive location on the dashboard.
  * Use aliases to refine responses for specific entities or use the default mode for broader insights.
  * Take advantage of the saved history to streamline research and avoid repetitive queries.

Below, we will provide a detailed guide on how to use the assistant with aliases.

## Advanced analytics Chat Assistant with Alias

### Step 1. Creating a Dashboard
  * Go to Dashboards -> Add Dashboard -> Create New Dashboard.
  * Enter a title for your dashboard and click **Add**.
  * For more details, refer to the [ThingsBoard dashboard guide](/docs/pe/user-guide/dashboards/)

{% include images-gallery.html imageCollection="trendz-assistance-create-dashboard" %}

### Step 2. Setting Up Aliases
  * Go to Aliases -> Add Alias.
  * Enter an **Alias Name**, choose **Filter Type** as *Asset type*, select the desired asset type, and click **Add**.
  * Add a second alias: enter **Alias Name**, choose **Filter Type** as *Entity from dashboard state*, enter **State entity parameter name** as *default* and click **Add**.
  * Ensure that you have two aliases and click **Save**.
  * For more details, refer to the [Aliases guide](/docs/pe/user-guide/ui/aliases/)

{% include images-gallery.html imageCollection="trendz-assistance-set-up-alias" %}

### Step 3. Adding an Entities Table Widget
  * Click **Add Widget**, select "Tables" → "Entities table".
  * Choose the first alias as the entity alias and click Add action.
  * Configure the action:
    * Set **Action source** as *On row click*.
    * Set any **Name**.
    * Set **State entity parameter name** as *default*.
    * Click **Save** and ensure one action is added.
  * Click **Add** to finalize.
  * Ensure you see a table with your assets.

{% include images-gallery.html imageCollection="trendz-assistance-add-table" %}

### Step 4. Adding advanced Analytics Chat Assistant Widget

  * Click **+ Add widget**.
  * Select **Advanced analytics Bundle**.
  * Select **Advanced analytics Chat Assistant**.
  * Choose the second alias as the **Entity alias**.
  * Add *Name* as the **Data key**.
  * Go to the Appearance section and enter **Filter name** fields, then click **Add**.
  * Ensure the Advanced analytics Chat Assistant Widget is added. Click **Save**.

{% include images-gallery.html imageCollection="trendz-assistance-add-chat-widget" %}

### Step 5. Interacting with AI Chat
* Click on the desired asset, then click **START AI CHAT**.
* In the pop-up window, ask questions about the selected asset.
* The current version of the AI Assistant supports memory and ongoing conversations, so you can ask follow-up questions or provide additional specifications.
* To start a new conversation, click the **New Conversation** button.
* You can always return to a previous conversations using the dropdown under the **Current Chat** label.
* You can view messages or save generated views in the **Chats** tab by selecting chats with a **Dashboard Origin**.

{% include images-gallery.html imageCollection="trendz-assistance-ai-chat-interaction" %}

You can find out more about the AI Assistant chat [here](/docs/trendz/ai-assistance-overview/).

## Next Steps

{% assign currentGuide = "AiAssistant" %}{% include templates/trndz-guides-banner.md %}
