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

To access settings, go to the **Settings** page by clicking the **“Settings”** button in the bottom-left corner of the screen.

![Settings Navigation](/images/trendz/signing-key-1.png)

### Signing Key

For the application to function properly, it must authenticate with ThingsBoard on behalf of a user. This is required 
for background operations such as:

- Sending generated telemetry
- Fetching data for continuous prediction model fitting and forecasting

Storing user credentials in application memory is not secure. Instead, Trendz supports a secure mechanism using a 
**JWT signing key**, which should be stored in configuration files. It is expected that Trendz is installed on a 
secured server (as is ThingsBoard and similar systems).

You can alternatively store the signing key in the Trendz database automatically, but this method is **not recommended** due to security concerns.

An indicator in the settings shows whether the signing key is set and valid.

**How to Check Your Signing Key**

Scroll to the bottom of the **Settings** page to find the **Signing Key** panel. You will see one of two options:

- **The signing key is not valid (not set or expired)**  
  ![Signing Key Invalid](/images/trendz/signing-key-2.png)

- **The signing key is valid**  
  ![Signing Key Valid](/images/trendz/signing-key-3.png)

**Setting the Signing Key**

Follow these steps to configure the signing key:

1. **Log in to ThingsBoard as a System Administrator**  
   ![Login](/images/trendz/signing-key-4.png)

2. Go to **Security → General**  
   ![Security General Page](/images/trendz/signing-key-5.png)

3. Scroll to the **JWT Security Settings** section  
   ![JWT Security](/images/trendz/signing-key-6.png)

4. Copy the value from the **Signing key** field.

**Installation-specific Instructions**
- *Ubuntu Installation*

  1. SSH into the server running Trendz.

  2. Open the Trendz configuration file:

     ```bash
     sudo nano /etc/trendz/conf/trendz.conf
     ```
     {: .copy-code}

  3. Add the signing key to the end of the file:

     ```bash
     export JWT_TOKEN_SIGNING_KEY=<signing-key>
     ```
     {: .copy-code}
     ![Ubuntu Signing Key](/images/trendz/signing-key-7.png)

  4. Save the file and restart the Trendz service.


- *Docker Compose Installation*
  1. Open your `docker-compose.yml` file.

  2. Add a new environment variable under the Trendz service:

     ```yaml
     environment:
       - JWT_TOKEN_SIGNING_KEY=<signing-key>
     ```
     {: .copy-code}
     ![Docker Signing Key](/images/trendz/signing-key-8.png)

  3. Save the file and restart the Trendz container.


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
*(Learn how to configure AI Widget Summaries [here](/docs/trendz/ai-widget-summary))*

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

### AI Settings

Here it's possible to configure the AI Model for the next features:

* [Metric Explorer](/docs/trendz/metric/overview)
* [View AI Assistant](/docs/trendz/ai-assistance-overview)
* [AI Widget Summary](/docs/trendz/ai-widget-summary)

You can learn how to configure AI Setting [here](/docs/trendz/custom-ai-model-configuration/).

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
