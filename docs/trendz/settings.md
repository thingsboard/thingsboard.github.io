---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Trendz Settings
description: Trendz Settings Description
---

* TOC
{:toc}

## General
### Signing Key

### Trendz Widget Bundle

Uploading the Trendz Widget Bundle is **required** to enable view sharing from Trendz to ThingsBoard dashboards.  
*(Learn how to use widgets after installation [here](/docs/trendz/embed-visuals))*

In the **Trendz Widget Bundle** section, you’ll see one of the following status indicators:

- **Not installed** – Bundle is missing.
- **Update required** – A newer version is available.
- **Latest version installed** – You’re good to go.
- **Bundle is invalid** – The current bundle is corrupted or incomplete.

**Action Steps:**

- If status is **Latest version installed** – no action is needed.
- For other statuses, click the **Upload bundle** button:
    - If not installed - uploads the bundle.
    - If outdated - updates it to the latest version.

### Trendz JS Summary Module

Uploading the Trendz JS Summary Module is **recommended** for configuring AI Widget Summaries across ThingsBoard widgets.  
*(Learn how to adjust summaries [here](/docs/trendz/ai-widget-summary))*

Check the status under the **Trendz JS Summary Module** section:

- **Not installed** – Module is missing.
- **Update required** – A newer version is available.
- **Latest version installed** – No action needed.

**Action Steps:**

- If status is **Latest version installed** – you’re done.
- Otherwise, click the **Upload Module** button:
    - If not installed - uploads the module.
    - If outdated - updates it.

### Trendz Settings

Needed for Trendz solution templates and AI Summary rule nodes.

Check the status under the **Trendz Settings** section:

- **Not installed** – Settings are missing.
- **Update required** – A newer version is available.
- **Settings are actual** – All up to date.

**Action Steps:**

- If status is **Settings are actual** – no changes needed.
- Otherwise, click the **Upload Settings** button:
    - If not installed - uploads the settings.
    - If outdated - updates them.

### AI Assistant

Here it's possible to configure the LLM for the [AI Assistant](/docs/trendz/ai-assistance-overview) and the [AI Widget Summary](/docs/trendz/ai-widget-summary).  
You can learn how to configure a own AI model in the [LLM Configuration guide](/docs/trendz/custom-ai-model-configuration/).

## System
### Import / Export

To migrate data from one Trendz instance to another, use the built-in **Import/Export** mechanism.

You can export and import the following:

- Business Entities and their Fields
- View Configurations and View Collections
- Calculation Fields
- Prediction Models
- Anomaly Models and Anomalies
- AI Assistant Chats and Messages
- Prompts
- Tasks
 
**Exporting**

Just click the **Export** button—no additional steps are needed.  
The file will be downloaded automatically.

**Importing**

Click the **Import** button, choose the previously exported file, and configure the **Skip duplicates** option:
- **True** – Duplicate items in the import file will be ignored.
- **False** – Duplicate items will cause import errors.

Once ready, click **Import Configuration**. If successful, a confirmation message will appear.

**Limitations**
- Migration between **different Trendz versions** is not supported.
- Migration between **different tenants** is not supported.

### Cache Management

This section allows you to manage various cache layers used in Trendz, such as clearing local or telemetry cache.  
For more details, see the [Cache Settings documentation](/docs/trendz/cache-settings).

### External Data Source

Here you can configure and manage external SQL data sources and integrate them with Trendz views.  
Learn more in the [external datasource guide](/docs/trendz/mix-sql-datasource).

## White Labeling

You can customize the Trendz user interface (logo, colors, labels) to reflect your brand identity.  
Refer to the [White Labeling documentation](/docs/trendz/white-labeling) for full configuration options.
