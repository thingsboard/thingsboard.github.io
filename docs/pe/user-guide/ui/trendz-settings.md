---
layout: docwithnav-pe
title: Trendz settings
description: ThingsBoard IoT platform Trendz settings

trendz-settings-sync-status:
  0:
    image: /images/user-guide/ui/trendz/trendz-settings-sync-status-1.png
    title: 'If Trendz synchronization is successful, you will see: <b>Synchronization completed successfully</b>.'
  1:
    image: /images/user-guide/ui/trendz/trendz-settings-sync-status-2.png
    title: 'If there are issues, an error message with explanations will be displayed.'

---

On the **Trendz Settings** page, you can configure the connection to the [Trendz Analytics add-on](/docs/trendz/what-is-trendz).

Log in to ThingsBoard as a System Administrator.

![image](/images/user-guide/ui/trendz/trendz-settings.png)

Here you can set up **Trendz Configuration**:
* **Trendz Internal URL** - URL used by ThingsBoard to communicate with Trendz.
* **ThingsBoard Internal URL** - URL used by Trendz to communicate with ThingsBoard.

You can do the next **Actions** on this page:
* **Save Configuration** - Saves the URLs entered in the text boxes for Trendz and ThingsBoard.
* **Retry Discovery** - Initiates synchronization with Trendz using the **saved configuration**.
* **Retry Healthcheck** - (Visible only if Trendz is synced with ThingsBoard) Checks if the Trendz sync contains any errors at the current moment.

You can check sync result in the header of this page: 
* If Trendz synchronization is successful, you will see: **Synchronization completed successfully**.
* If there are issues, an error message with explanations will be displayed.

{% include images-gallery.html imageCollection="trendz-settings-sync-status" %}
