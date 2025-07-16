{% if docsPrefix == null %}
{% assign MOBILE_APPLICATION_LINK = "[ThingsBoard Mobile Application](/docs/mobile/)" %}
{% assign MOBILE_APPLICATION = "ThingsBoard Mobile Application" %}
{% assign GETTING_STARTED = "[Getting started with the ThingsBoard Mobile Application](/docs/mobile/getting-started/)" %}
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") or (docsPrefix == "paas/eu/") %}
{% assign MOBILE_APPLICATION_LINK = "[ThingsBoard PE Mobile Application](/docs/pe/mobile/)" %}
{% assign MOBILE_APPLICATION = "ThingsBoard PE Mobile Application" %}
{% assign GETTING_STARTED = "[Getting started with the ThingsBoard PE Mobile Application](/docs/pe/mobile/getting-started/)" %}
{% endif %}

* TOC
{:toc}

The "**Applications**" tab in the "**Mobile center**" serves as a control center for your [mobile applications](/docs/{{docsPrefix}}mobile/){:target="_blank"}. It allows you to:

- **Add new applications**: Create configurations for new mobile apps to integrate with ThingsBoard.
- **Edit the existing applications**: Update application details, such as package names, statuses, versions, or store information.
- **Delete applications**: Remove obsolete or unused application configurations from the ThingsBoard platform.

## Add application

To add a new mobile application, following these steps: 

- Go to the "**Applications**" tab on the "**Mobile center**" page, and click the "**+ Add application**" button in the upper-right corner of the window.
- Enter the **application package** name.
- Select the **platform type**: Android or iOS.
- An **Application Secret** will be generated automatically. Remember it or replace with your own.
- Set the **application status**:
  - **Draft**: For applications that are still in development. You can add store information (e.g., Google Play Store or App Store link, and SHA256 certificate fingerprints or App ID) later after the application is created and published.
  - **Published**: For applications that are ready to be launched and used by end users.
  - **Deprecated**: For older applications that are no longer actively supported but still available.
  - **Suspended**: For applications that are temporarily disabled or restricted from use.
- (Optional) Specify minimum/latest app versions and release notes.
- Add **store information**:
  - **Android**: **Google Play Store link** and **SHA256 certificate fingerprints**.
  - **iOS**: **App Store link** and **App ID**.
- Click "**Add**" to save your application and complete the process.

{% include images-gallery.html imageCollection="add-application" %}

## Edit application

You can edit almost all fields of the mobile application, except for the platform type.
To edit a mobile application, open its details and enter the edit mode by clicking the large orange "pencil" button. Make the necessary changes, and then save them.

{% include images-gallery.html imageCollection="edit-application" %}

## Delete application

To delete the application, click the "trash" icon and then confirm deletion.

{% include images-gallery.html imageCollection="delete-application" %}