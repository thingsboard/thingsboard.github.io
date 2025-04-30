---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Trendz post-installation steps
description: Trendz post-installation steps description
---

* TOC
{:toc}


## Signing Key
For the application to work correctly, it must be able to send requests to ThingsBoard on behalf of an authenticated user. 
This is needed for background tasks such as sending newly generated telemetry or fetching data for continuous prediction model fitting and generation prediction. 
For these purposes, the application needs to be logged in to ThingsBoard, but it is not possible without user credentials that are not secure to store in 
application memory. Therefore, another solution was implemented to cover all possible needs relying on general security concerns. The solution is storing the 
JWT-signing key in Trendz configuration files, expecting the application to be installed on the server with restricted access (as ThingsBoard and other server 
applications do). Also, if it is difficult to manage the configuration of Trendz, there is a simpler way to automatically fetch and store the signing key in the 
Trendz database, but it is not recommended because of possible security concerns. For validation the solution there is the indicator was designed to check if 
your signing key is set in Trendz, and if it is valid.

To check your signing key is relevant follow the following steps:
* Open Trendz home page
* Go to the Settings page by clicking the “Setting” button on the left-bottom corner of the page.

  ![image](/images/trendz/signing-key-1.png)

* Scroll down to the bottom of the page, you will see the “Signing Key” panel. You can see one of two possible options:
  - The signing key is not valid (not set or expired)
  
  ![image](/images/trendz/signing-key-2.png)

  - The signing key is valid

  ![image](/images/trendz/signing-key-3.png)

Let's consider the standard way of setting signing way, there are steps you need to follow:
* Open your ThingsBoard login page and log in as a system administrator

  ![image](/images/trendz/signing-key-4.png)

* Open the “Security” → “General” page

  ![image](/images/trendz/signing-key-5.png)

* Scroll down to the bottom of the page and find the “JWT Security Setting” page

  ![image](/images/trendz/signing-key-6.png)

* Copy the value from the “Signing key” text field.
* The next step will be different depending on your installation type. We will cover two of
  them because the others are similar to those mentioned above - Ubuntu and Docker
  Compose installations.

### Ubuntu installation
* Get access to the server hosting Trendz by SSH.
* Open file for editing:
```bash
sudo nano /etc/trendz/conf/trendz.conf
```
{: .copy-code}

* Add the row at the end of the file:
```bash
export JWT_TOKEN_SIGNING_KEY=<signing-key>
```

* Save the file and reboot Trendz

  ![image](/images/trendz/signing-key-7.png)

### Docker Compose installation
* Open your docker-compose file
* Add a new environment variable with the name **JWT_TOKEN_SIGNING_KEY** and put your signing key as a value of the variable
* Save the file and reboot the Trendz container

  ![image](/images/trendz/signing-key-8.png)

## Trendz Widget Bundle
Uploading the Trendz bundle is essential to enable sharing views on the ThingsBoard dashboard. When accessing Trendz for the first time, you can upload the bundle after discovering your topology.

![image](/images/trendz/topology-upload-bundle.png)

You can also upload, update, or check the status of your Trendz bundle from the Settings page. Follow these steps:
* Log in as a Tenant Administrator and navigate to the Settings page. 

  ![image](/images/trendz/signing-key-1.png)

* In the Trendz Widget Bundle Management section, review the status of the Widget Bundle. The status can be one of the following:
    * **Not installed**: The bundle is not currently present in ThingsBoard.
    * **Update required**: A newer version of the bundle is available.
    * **Latest version installed**: The current bundle is up to date.
    * **The bundle is invalid**: The existing bundle is corrupted or incomplete.  
* Take Appropriate Action:
    * If the status is **Latest version installed**, no action is needed as the Trendz Widget Bundle is already up to date.
    * For any other status, click the Upload Bundle button. If the bundle is not installed, it will be uploaded for the first time. 
      If the bundle is outdated, it will be updated to the latest version.

    ![image](/images/trendz/settings-upload-button.png)

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
There, you can enable the **Use own model** option, select an AI provider (OpenAI, Amazon Bedrock, or Google), and enter the required API credentials.

For more details on configuring AI Assistant, you can read more [here](/docs/trendz/custom-ai-model-configuration.md).

![image](/images/trendz/ai/ai-model-configuration/use-own-model-1.png)
