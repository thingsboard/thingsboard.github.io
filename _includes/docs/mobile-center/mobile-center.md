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

The **Mobile сenter** is your one-stop hub for building, configuring, and managing mobile apps in ThingsBoard. Whether you&#39;re starting from scratch or preparing to publish your {{MOBILE_APPLICATION}} to the Google Play Store or App Store, this tool walks you through every step of the process.

The Mobile center is divided into tabs for convenient creation and management of mobile applications:

- [Bundle](#bundle): Manage settings for mobile applications included in the bundle. These settings include configuring secure authentication methods for your clients{% if docsPrefix == null %}, and defining the layout{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}, defining the layout, and managing options for user self-registration{% endif %} within the mobile application.
- [Applications](/docs/{{docsPrefix}}mobile-center/applications/){:target="_blank"}: Manage your mobile applications - add new ones, edit existing ones, or remove outdated versions.
- [QR code widget](/docs/{{docsPrefix}}user-guide/ui/mobile-qr-code/){:target="_blank"}: Set up a QR code widget on the ThingsBoard "Home" page to give users easy access to the mobile app.

## Bundle

A **Bundle** groups together configurations like OAuth 2.0 settings {% if docsPrefix == null %}and layout design{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}, layout design and self-registration{% endif %} for one or more mobile apps—allowing you to manage Android and iOS versions all in one place.

The following settings are available for the applications bundle:

1. **Basic settings**: Define the bundle name and link your apps. Don&#39;t have an app yet? You can create one right here.
2. **OAuth 2.0**: Enable Single Sign-On (SSO) for users by integrating with third-party identity providers that support OAuth 2.0.
3. **Layout**: Customize the app’s navigation menu to match your use cases.
{% unless docsPrefix == null %}4. **Self-registration**: Set up a user-friendly registration form for new mobile users.{% endunless %}

<br><b><font size="4">How to add a new bundle</font></b>

- Go to the "**Mobile center**" page.
- On the "**Bundle**" tab, click the "**+ Add bundle**" button in the upper-right corner of the window.

A new settings dialog will open.

{% include images-gallery.html imageCollection="add-bundle" %}

### Basic settings

Enter a name for your bundle and select existing Android/iOS apps, or [create new ones](#create-new-application) directly from this window.

{% include images-gallery.html imageCollection="basic-settings-1" %}

> You can add applications even after the bundle with configurations is created.

#### Create new application

- Click "**Create new**" in the corresponding section (Android Application or iOS Application).
- Enter the **application package** name.
- An **Application Secret** will be generated automatically. Remember it or replace with your own.
- Set the **application status**:
  - **Draft**: For applications still in development. You can add store information (e.g., Google Play Store or App Store link, and SHA256 certificate fingerprints or App ID) later after the application is created and published.
  - **Published**: For applications that are ready to be launched and used by end users.
  - **Deprecated**: For older applications that are no longer actively supported but still available.
  - **Suspended**: For applications that are temporarily disabled or restricted from use.
- (Optional) Specify minimum/latest app versions and release notes.
- Add **store information**:
  - **Android**: **Google Play Store link** and **SHA256 certificate fingerprints**.
  - **iOS**: **App Store link** and **App ID**.
- Click "**Add**" to save your application and complete the process.

{% include images-gallery.html imageCollection="add-application" %}

Then, click "**Next**".

### OAuth 2.0

Add an authentication feature for your users in the {{MOBILE_APPLICATION}} through an external provider that supports the [OAuth 2.0](/docs/{{docsPrefix}}user-guide/oauth-2-support/){:target="_blank"} protocol.
In order to do this, specify an already configured OAuth 2.0 client(s) or [configure a new one](/docs/{{docsPrefix}}user-guide/oauth-2-support/#operations-with-oauth-20-client){:target="_blank"}. After completing the OAuth 2.0 configuration, click "Next".

You can also disable the use of OAuth 2.0 for mobile devices.

{% include images-gallery.html imageCollection="specify-oauth-clients" %}

### Layout

Set up quick access to the features and dashboards you use most frequently.
Add new menu items, change icons and item names, and reorganize the navigation menu of the {{MOBILE_APPLICATION}} according to your needs.

{% include images-gallery.html imageCollection="layout-1" %}

To add new menu item, follow these steps:

- Click the "**+ Add specific page**" button at the bottom of the page or between existing menu items;
- Enter the **name for new menu page**;
- Select the **page type** from the list:
  - *Dashboard* - link to a ThingsBoard dashboard.
  - *Webview* - link to an external webpage.
  - *Custom* - link to built-in ThingsBoard pages.
- Depending on the selected page type, specify a dashboard, or link to an external webpage or ThingsBoard menu item;

{% if docsPrefix == null %}
- Click "Add";
- After configuring layout, click "**Add**" to complete the bundle creation.
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
- Click "**Add**";
- After configuring layout, click "**Next**".
{% endif %}

{% include images-gallery.html imageCollection="custom-page-type" %}

<br>
The following routes are available for the "Custom" page type:

| **Page name**      | **Routes**     | **Dicription**                      |
|:-------------------|:---------------|:------------------------------------|
| Home               | /home          | Displays the "Home" page            |
| Assets             | /assets        | Displays the "Assets" page          |
| Device profiles    | /devices       | Displays the "Device profiles" page |
| All devices        | /deviceList    | Displays the list of all devices    |
| Alarms             | /alarms        | Displays the list of alarms         |
| Dashboards         | /dashboards    | Displays the list of dashboards     |
| Specific dashboard | /dashboard/:id | Displays the specified dashboard    |
| Audit logs         | /auditLogs     | Displays the "Audit logs" page      |
| Customers          | /customers     | Displays the list of customers      |
| Specific customer  | /customer/:id  | Displays the specified customer     |
| Notifications      | /notifications | Displays the list of notifications  |
| Custom URL link    | /url/:link     | Displays the "Assets" page          |
| ---                 

{% unless docsPrefix == null %}
The menu configuration algorithm for the mobile application is similar to menu customization in the desktop ThingsBoard. Refer to [this documentation](/docs/{{docsPrefix}}user-guide/custom-menu/){:target="_blank"} for a deeper understanding of menu customization.
{% endunless %}

**"More" page**

The number of menu items displayed in the navigation menu of the mobile app depends on the screen size of your mobile device.
Items that do not fit in the bottom navigation menu will be available under the "More" page.

{% include images-gallery.html imageCollection="layout-2" %}

{% unless docsPrefix == null %}

### Self-registration

The **self-registration** feature allows the tenant to configure a sign-up page for their clients, allowing them to easily sign up and log in to ThingsBoard with predefined permission configurations.

Configure the self-registration form for new clients:

- **Page title**. Enter the page title to be displayed at the top of the registration page. It serves as a header to indicate the purpose of the form to users.
- **Notification recipient**. Specify the recipients that will receive notifications about new user registrations. Learn more about notifications and how to add a new notification recipient [here](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"}.
- **Redirect settings**:
  - **Application URL scheme**: Defines the custom URL scheme used for redirecting users after successful registration. For example, *tbscheme*.
  - **Application URL hostname**: The hostname component of the URL used in redirection, e.g., *app.pe.thingsboard.org*.

{% include images-gallery.html imageCollection="self-registration-1" %}

- **Registration form fields**. The mandatory fields for completing the registration form are email, password, and repeat password. If needed, specify additional fields.

{% include images-gallery.html imageCollection="self-registration-2" %}

- **Captcha properties**. Captcha (Completely Automated Public Turing test to tell Computers and Humans Apart) is an automated test used to distinguish between human users and bots. 
Using Captcha in ThingsBoard helps prevent the automated creation of fake accounts in the system.

To **generate the Captcha**, navigate to the [Google ReCaptcha admin console](https://www.google.com/recaptcha/intro/v3.html){:target="_blank"}:
- Select which version of reCAPTCHA you will use: v2, v3, or Enterprise.
- Specify the domain name of your ThingsBoard instance.
- Copy and securely store the the site key and secret key.

{% include images-gallery.html imageCollection="captcha" %}

**In ThingsBoard**:
- Select the **Captcha version** to be used.
- Specify **Captcha site key** - the public key used to render the CAPTCHA on the site.
- Specify **Captcha secret key** - the private key used for verifying CAPTCHA responses on the server.
- **Captcha log action name**: specifies the action associated with CAPTCHA, used for logging purposes.

{% include images-gallery.html imageCollection="self-registration-3" %}

- **Show Privacy Policy**. Enable or disable the display of a Privacy Policy link on the registration page.
- **Show Terms of Use**. Enable or disable the display of a Terms of Use link on the registration page.
- **User group roles**. Specify the roles that will be assigned to the user upon successful registration. These roles determine the permissions and access level for the user.

{% include images-gallery.html imageCollection="self-registration-4" %}

- **Advanced settings**:
  - **Customer group**: specify the customer group to which the new user will be added.
  - **Customer title prefix**: specify the prefix that will be added to the customer&#39;s title for identification purposes.
  - **Custom menu**: Apply a custom navigation menu for the new user.
  - **Default dashboard**: The dashboard that the user sees upon logging in for the first time.

{% include images-gallery.html imageCollection="self-registration-5" %}

- **Home dashboard**. The main dashboard that will be displayed to the user when navigating to the "Home" menu item.

{% include images-gallery.html imageCollection="self-registration-6" %}

- Click "**Add**" to complete the bundle creation.

{% endunless %}

### Configuration dialog

Next, a configuration dialog will open. Continue configuring your new mobile app using the provided instructions.
Or skip this step if you already have a {{MOBILE_APPLICATION}}. Click "**Close**".

{% include images-gallery.html imageCollection="configuration-dialog" %}
{% capture difference %}
For more information on launching your new app, refer to the "{{GETTING_STARTED}}" documentation.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Bundle has been added. The applications specified in the bundle now use the defined settings.

{% include images-gallery.html imageCollection="bundle-added" %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}