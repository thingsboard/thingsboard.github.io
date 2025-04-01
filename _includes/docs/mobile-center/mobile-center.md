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

The Mobile center is designed to simplify the creation, configuration, and management of your mobile applications. It provides a step-by-step process for building and launching your first {{MOBILE_APPLICATION}} from scratch, as well as publishing it to the Google Play Store or App Store.

The Mobile center consists of the following tabs:

- [Bundle](#bundle): Manage settings for mobile applications included in the bundle. These settings include configuring secure authentication methods for your clients{% if docsPrefix == null %}, and defining the layout{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}, defining the layout, and managing options for user self-registration{% endif %} within the mobile application.
- [Applications](/docs/{{docsPrefix}}mobile-center/applications/){:target="_blank"}: Manage your mobile applications - add new ones, edit existing ones, or remove outdated versions.
- [QR code widget](/docs/{{docsPrefix}}user-guide/ui/mobile-qr-code/){:target="_blank"}: Set up a QR code widget for your mobile application on the "Home" page of ThingsBoard for easy user access to the ThingsBoard mobile application.

## Bundle

A bundle contains a set of configurations, such as OAuth 2.0, {% if docsPrefix == null %}and layout{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}layout, and self-registration{% endif %} settings for the mobile applications specified within the bundle.
This was done for the convenience of configuring applications for both platforms (Android and iOS) in one place.

The following settings are available for the applications bundle:

1. **Basic settings**: Here, you specify the bundle name and your applications. If you don&#39;t have the mobile app yet, you can create one directly in this section.
2. **OAuth 2.0**: Configure Single Sign-On (SSO) feature for your ThingsBoard mobile application users through using external user management platforms that support the OAuth 2.0 protocol. In this step, specify the OAuth 2.0 client(s) (either select an existing one or create a new one).
3. **Layout**: allows you to customize the navigation menu mobile application according to your needs, providing quick access to the pages and features you use most frequently. You can add new menu items and show or hide the existing ones.

{% unless docsPrefix == null %}
4. **Self-registration**: Configure the new customer registration page to allow users to simply register and log in to ThingsBoard via the mobile app with predefined permission configurations.
{% endunless %}

<br>
To add a new bundle, navigate to the "Mobile center" page and click the "+ Add bundle" button in the upper-right corner of the window.

{% include images-gallery.html imageCollection="add-bundle" %}

<br>
A new window will open with the following settings:

### Basic settings

In the basic settings window, provide a name for the package and specify an existing Android/iOS mobile application(s), or [create a new one](#create-new-application). Then, click "Next".

{% include images-gallery.html imageCollection="basic-settings-1" %}

{% capture difference %}
You can add applications even after the bundle with configurations is created.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Create new application

To add a new mobile application (Android or iOS) to ThingsBoard, follow these steps:

- Click "Create new" in the appropriate section (Android Application or iOS Application);
- Input the application package name;
- A unique Application Secret will be generated automatically. Remember it or replace with your own;
- Set the application status:

ㅤㅤ&bull; *Draft*: For applications still in development. You can add store information (e.g., Google Play Store or App Store link, and SHA256 certificate fingerprints or App ID) later after the application is created and published.

ㅤㅤ&bull; *Published*: For applications that are ready to be launched and used by end users.

ㅤㅤ&bull; *Deprecated*: For older applications that are no longer actively supported but still available.

ㅤㅤ&bull; *Suspended*: For applications that are temporarily disabled or restricted from use.

- Optionally, specify the minimum and latest application versions along with release notes for each;
- Add store information:

ㅤㅤ&bull; *Android*:

ㅤㅤㅤㅤ&bull; Provide the link to the {{MOBILE_APPLICATION}} in the Google Play Store.

ㅤㅤㅤㅤ&bull; Enter the SHA256 certificate fingerprints for the application.

ㅤㅤ&bull; *iOS*:

ㅤㅤㅤㅤ&bull; Provide the link to the {{MOBILE_APPLICATION}} in the App Store.

ㅤㅤㅤㅤ&bull; Enter the App ID associated with your iOS application.

- Click "Add" to save your application and complete the process.

After completing these steps, your {{MOBILE_APPLICATION}} will be added to ThingsBoard and ready for further configuration and deployment.

{% include images-gallery.html imageCollection="add-application" %}

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

- Click the "+ Add specific page" button at the bottom of the page or between existing menu items;
- Enter the name for new menu page;
- Select the page type from the list:

ㅤㅤ&bull; *Dashboard* - link to a specific dashboard.

ㅤㅤ&bull; *Webview* - link to an external webpage.

ㅤㅤ&bull; *Custom* - link to a menu item in ThingsBoard.

- Depending on the selected page type, specify a dashboard, or link to an external webpage or ThingsBoard menu item;

{% if docsPrefix == null %}
- Click "Add";
- After configuring layout, click "Add" to complete the bundle creation.
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
- Click "Add";
- After configuring layout, click "Next".
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

*"More" page*

The number of menu items displayed in the navigation menu of the mobile app depends on the screen size of your mobile device.
Items that do not fit in the bottom navigation menu will be available under the "More" page.

{% include images-gallery.html imageCollection="layout-2" %}

{% unless docsPrefix == null %}

### Self-registration

The self-registration feature allows the tenant to configure a sign-up page for their clients, allowing them to easily sign up and log in to ThingsBoard with predefined permission configurations.

Configure the self-registration form for new clients:

- Page title. Enter the page title to be displayed at the top of the registration page. It serves as a header to indicate the purpose of the form to users.
- Notification recipient. Specify the recipients that will receive notifications about new user registrations. Learn more about notifications and how to add a new notification recipient [here](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"};
- Redirect settings:

ㅤㅤ&bull; Application URL scheme: Defines the custom URL scheme used for redirecting users after successful registration. For example, *tbscheme*.

ㅤㅤ&bull; Application URL hostname: The hostname component of the URL used in redirection, e.g., *app.pe.thingsboard.org*.

{% include images-gallery.html imageCollection="self-registration-1" %}

<br>
- Registration form fields. The mandatory fields for completing the registration form are email, password, and repeat password. If needed, specify additional fields.

{% include images-gallery.html imageCollection="self-registration-2" %}

<br>
- Captcha properties. Captcha (Completely Automated Public Turing test to tell Computers and Humans Apart) is an automated test used to distinguish between human users and bots. 
Using Captcha in ThingsBoard helps prevent the automated creation of fake accounts in the system.

To protect your registration from bots, generate a Captcha. To do this, navigate to the Google ReCaptcha [admin console](https://www.google.com/recaptcha/intro/v3.html){:target="_blank"}. 
Choose which reCAPTCHA version you will use: v2, v3, or Enterprise.
Specify the domain name of your ThingsBoard instance.

Copy-paste the site key and secret to the safe place.

{% include images-gallery.html imageCollection="captcha" %}

<br>
In ThingsBoard:

ㅤ&bull; Select the Captcha version to be used;

ㅤ&bull; Specify *Captcha site key* - the public key used to render the CAPTCHA on the site;

ㅤ&bull; Specify *Captcha secret key* - the private key used for verifying CAPTCHA responses on the server;

ㅤ&bull; Captcha Log Action Name: specifies the action associated with CAPTCHA, used for logging purposes.

{% include images-gallery.html imageCollection="self-registration-3" %}

<br>
- Show Privacy Policy. Enable or disable the display of a Privacy Policy link on the registration page;

- Show Terms of Use. Enable or disable the display of a Terms of Use link on the registration page;

- User group roles. Specify the roles that will be assigned to the user upon successful registration. These roles determine the permissions and access level for the user;

{% include images-gallery.html imageCollection="self-registration-4" %}

<br>
- Advanced settings:

ㅤㅤ&bull; Customer group: specify the customer group to which the new user will be added;

ㅤㅤ&bull; Customer title prefix: specify the prefix that will be added to the customer&#39;s title for identification purposes;

ㅤㅤ&bull; Custom menu: Apply a custom navigation menu for the new user;

ㅤㅤ&bull; Default dashboard: The dashboard that the user sees upon logging in for the first time.

{% include images-gallery.html imageCollection="self-registration-5" %}

<br>
- Home dashboard. The main dashboard that will be displayed to the user when navigating to the "Home" menu item.

{% include images-gallery.html imageCollection="self-registration-6" %}

<br>
- Click "Add" to complete the bundle creation.
{% endunless %}

### Configuration dialog

Next, a configuration dialog will open. Continue configuring your new mobile app using the provided instructions.
Or skip this step if you already have a {{MOBILE_APPLICATION}}. Click "Close".

{% include images-gallery.html imageCollection="configuration-dialog" %}
{% capture difference %}
For more information on launching your new app, refer to the "{{GETTING_STARTED}}" documentation.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<br>
Bundle has been added. The applications specified in the bundle now use the defined settings.

{% include images-gallery.html imageCollection="bundle-added" %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}