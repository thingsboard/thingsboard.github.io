The final step is to verify that ThingsBoard is synchronized with Trendz. To do this:

* Log in to **ThingsBoard** as a **Sysadmin**.
* Open the **Trendz Settings** page.

If you see the message **"Synchronization completed successfully"**, the synchronization has been completed automatically and no further action is required.

{% include images-gallery.html imageCollection="trendz-settings" %}

If you see an error message, follow these steps:

* Make sure that **Trendz is running**.
* Enter the correct **Trendz internal URL**. It must be accessible from the ThingsBoard service.
* Enter the correct **ThingsBoard internal URL**. It must be accessible from the Trendz service.
* Click **Save configuration**.
* Click **Retry discovery**.

Once the message **"Synchronization completed successfully"** appears, the synchronization is complete.

{% include images-gallery.html imageCollection="trendz-sync" %}
