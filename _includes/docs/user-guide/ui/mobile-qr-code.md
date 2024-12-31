{% if docsPrefix == null %}
{% assign THINGSBOARD_MOBILE_APP = "[ThingsBoard mobile application ](/docs/mobile/)" %}
{% assign CUSTOM_APPLICATION = "[custom application](/docs/mobile/)" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION = "**ThingsBoard Live**" %}
{% assign PREFIX = "CE" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign THINGSBOARD_MOBILE_APP = "[Thingsboard PE mobile application ](/docs/pe/mobile/)" %}
{% assign CUSTOM_APPLICATION = "[custom application](/docs/pe/mobile/)" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION = "**ThingsBoard Cloud**" %}
{% assign PREFIX = "PE" %}
{% endif %}
{% if docsPrefix contains "paas/" %}
{% assign THINGSBOARD_MOBILE_APP = "[Thingsboard PE mobile application ](/docs/pe/mobile/)" %}
{% assign CUSTOM_APPLICATION = "[custom application](/docs/pe/mobile/)" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION = "**ThingsBoard Cloud**" %}
{% endif %}

* TOC
{:toc}

{% assign sinceVersion = "3.7" %}
{% include templates/since.md %}

We are excited to introduce a new QR code feature, designed to streamline the authorization process in the ThingsBoard mobile application. 
This enhancement makes logging in faster and more secure, offering a user-friendly alternative to traditional username and password entry.

## Scan to download the mobile app

{% if docsPrefix == null %}
If the {{THINGSBOARD_MOBILE_APP}} has not been installed yet, scanning the QR code will redirect the user to the application marketplace (available on [Google Play](https://play.google.com/store/apps/details?id=org.thingsboard.demo.app){:target="_blank"} and [App Store](https://apps.apple.com/us/app/thingsboard-live/id1594355695){:target="_blank"}).
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
If the {{THINGSBOARD_MOBILE_APP}} has not been installed yet, scanning the QR code will redirect the user to the application marketplace (available on [Google Play](https://play.google.com/store/apps/details?id=org.thingsboard.cloud){:target="_blank"} and [App Store](https://apps.apple.com/us/app/thingsboard-cloud/id6499209395){:target="_blank"}).
{% endif %}

Just follow these simple steps to get started:

{% include images-gallery.html imageCollection="download-app-with-qr-code" showListImageTitles="true" %}

Additionally, by clicking the "App Store" or "Google Play" button in the "Connect mobile app" widget, you will be redirected to the ThingsBoard app page in the respective app store for further downloading to your device.

{% include images-gallery.html imageCollection="clicking-button" %}

## Login with QR code

Scan the QR code with the ThingsBoard mobile app, and you will instantly gain access to your account, without the need to manually enter your credentials.

The login process is simple and convenient:

{% include images-gallery.html imageCollection="authorize-with-qr-code" showListImageTitles="true" %}

## Configuring QR code widget on Home page

{% if docsPrefix == null %}
The mobile application QR code widget settings configuration is available only on the **system level**.
For this, log in as the **system administrator** and navigate to the "Mobile app" tab on the "Settings" page, and disable "Use system settings" toggle.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
The mobile application QR code widget settings are inherited from the **system level** by default. [Tenant administrators](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} are authorized to override system settings. For this, navigate to the "Mobile app" tab on the "Settings" page, and disable "Use system settings" toggle.
{% endif %}

{% include images-gallery.html imageCollection="mobile-app-qr-code-widget-settings" %}

There, you'll find two settings blocks: "Applications" and "Appearance on Home page".

**Applications:**

Two types of application are available for tenant: default and custom. 

{% if docsPrefix == null %}
* Using the default one means using officially published {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application (available on [Google Play](https://play.google.com/store/apps/details?id=org.thingsboard.demo.app){:target="_blank"} and [App Store](https://apps.apple.com/us/app/thingsboard-live/id1594355695){:target="_blank"}).
{% endif %}
{% if docsPrefix == "pe/" %}
* Using the default one means using officially published {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application (available on [Google Play](https://play.google.com/store/apps/details?id=org.thingsboard.cloud){:target="_blank"} and [App Store](https://apps.apple.com/us/app/thingsboard-cloud/id6499209395){:target="_blank"}).
{% endif %}
{% if docsPrefix contains "paas/" %}
* Using the default one means using officially published {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application (available on [Google Play](https://play.google.com/store/apps/details?id=org.thingsboard.cloud){:target="_blank"} and [App Store](https://apps.apple.com/us/app/thingsboard-cloud/id6499209395){:target="_blank"}).
{% endif %}

{% include images-gallery.html imageCollection="application-settings-default" %}

{% unless docsPrefix contains 'paas/' %}
{% capture difference %}
**Note:** The latest release of the {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application (version 1.2.0) includes the capability to switch its server host, allowing it to work with your ThingsBoard {{PREFIX}} instance. Simply select the "Login with scan QR code" option on the mobile application's login page, and the application will automatically switch its server host to your ThingsBoard {{PREFIX}} platform host.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endunless %}

* The custom one means using your {{CUSTOM_APPLICATION}}.

{% include images-gallery.html imageCollection="application-settings-custom" %}

{% unless docsPrefix == null or docsPrefix == "pe/" %}
{% capture difference %}
**Note:** To use custom mobile application tenant should have domain name configured in [Login White labeling settings](/docs/{{docsPrefix}}domains/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endunless %}

After making your settings adjustments, click "Save". Then, scan the QR code on the "Home" page with your mobile device to ensure it redirects to the specified application.

{% include images-gallery.html showListImageTitles="true" imageCollection="disable-platforms" %}
<br>
**Appearance on Home page:**

Optionally, you can disable the QR code widget on the "Home" page, configure badges, turn them off entirely, or update the QR code label to better fit your needs.

{% include images-gallery.html imageCollection="appearance-on-home-page" %}

## Mobile app QR code widget

With the release of ThingsBoard 3.7, we've also introduced the "Mobile app QR code" widget. You can use this widget on your [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} to simplify the login process for your customers on their mobile devices.

Let's add this widget to your dashboard:

{% include images-gallery.html imageCollection="add-qr-code-widget" showListImageTitles="true" %}