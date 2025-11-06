---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Trendz post-installation steps
description: Trendz post-installation steps description
---

* TOC
{:toc}

To make Trendz ready for use, complete the following post-installation setup steps.

## Signing Key

You can read more about signing key [here](/docs/trendz/settings#signing-key)

### Acquiring Signing Key

Follow these steps to configure the signing key:

1. **Log in to ThingsBoard as a System Administrator**  

    ![Login](/images/trendz/signing-key-4.png)

2. Go to **Security → General**  

   ![Security General Page](/images/trendz/signing-key-5.png)

3. Scroll to the **JWT Security Settings** section  

   ![JWT Security](/images/trendz/signing-key-6.png)

4. Copy the value from the **Signing key** field.

### Installation-specific Instructions

**Ubuntu Installation**

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

**Docker Compose Installation**

1. Open your `docker-compose.yml` file.

2. Add a new environment variable under the Trendz service:

   ```yaml
   environment:
     - JWT_TOKEN_SIGNING_KEY=<signing-key>
   ```
   {: .copy-code}
   ![Docker Signing Key](/images/trendz/signing-key-8.png)

3. Save the file and restart the Trendz container.

### Verifying Successful Installation

To validate that the signing key was installed correctly, you need to:

1. Log in as a **Tenant Administrator**.
2. Go to the **Settings**.

   ![Settings Navigation](/images/trendz/signing-key-1.png)

3. If everything was done correctly, you will see **Active** status in the **Signing Key** field.  

   ![Signing Key Valid](/images/trendz/signing-key-3.png)

   
## Required Actions in Trendz Settings

**Note:** These actions affect ThingsBoard.

You need to complete the following actions to add all necessary add-ons to ThingsBoard:

- **Trendz Widget Bundle:**
    - Click the **Upload bundle** button.
    - You will see *Latest version installed* afterward.
    - Read more about the Trendz Widget Bundle [here](/docs/trendz/settings#trendz-widget-bundle).

- **Trendz JS Summary Module:**
    - Click the **Upload module** button.
    - You will see *Latest version installed* afterward.
    - Read more about the Trendz JS Summary Module [here](/docs/trendz/settings#trendz-js-summary-module).

- **Trendz Settings:**
    - Click the **Update Settings** button.
    - You will see *Settings are up to date* afterward.
    - Read more about Trendz Settings [here](/docs/trendz/settings#trendz-settings).

## Link to ThingsBoard

To simplify the process of adding Trendz views to ThingsBoard dashboards, we have introduced the ability to open the dashboard where the view was added in a new tab. 
Configure the link to your ThingsBoard instance in Settings to use this feature. Follow these steps:
* Log in to Trendz and navigate to the Settings page.

  ![image](/images/trendz/signing-key-1.png)

* Enter the URL of your ThingsBoard instance (e.g., *https://your-link-to-platform*) in the designated field.

  ![image](/images/trendz/link-to-tb.png)

After this, you can open your modified or newly created dashboard in a new tab by enabling the Open dashboard in a separate window field.

![image](/images/trendz/open-dashboard-in-separate-tab.png)

## AI Assistant

To use AI Assistant feature in Trendz, you need to configure it first. To enable your own AI model, go to **Settings → General → AI Assistant** in Trendz. 
There, you can enable the **Use own model** option, select an AI provider (OpenAI, Amazon Bedrock, Google or Custom), and enter the required API credentials.

For more details on configuring AI Assistant, you can read more [here](/docs/trendz/custom-ai-model-configuration.md).

![image](/images/trendz/ai/settings/use-own-model-1.png)
