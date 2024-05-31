{% if docsPrefix == null %}
{% assign THINGSBOARD_MOBILE_APP = "[ThingsBoard mobile application ](/docs/mobile/)" %}
{% assign CUSTOM_APPLICATION = "[custom application](/docs/mobile/)" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION = "**ThingsBoard Live** mobile application ([Android](https://play.google.com/store/apps/details?id=org.thingsboard.demo.app) and [iOS](https://apps.apple.com/us/app/thingsboard-live/id1594355695))" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION_2 = "**ThingsBoard Live**" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign THINGSBOARD_MOBILE_APP = "[Thingsboard PE mobile application ](/docs/pe/mobile/)" %}
{% assign CUSTOM_APPLICATION = "[custom application](/docs/pe/mobile/)" %}
{% endif %}
{% if docsPrefix == "paas/" %}
{% assign THINGSBOARD_MOBILE_APP = "Thingsboard mobile application " %}
{% assign CUSTOM_APPLICATION = "[custom application](/docs/pe/mobile/)" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION = "[ThingsBoard Cloud mobile application](https://apps.apple.com/us/app/thingsboard-cloud/id6499209395)" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION_2 = "ThingsBoard Cloud" %}
{% endif %}

* TOC
{:toc}

{% assign sinceVersion = "3.7" %}
{% include templates/since.md %}

With the latest update of ThingsBoard 3.7, authorization process in the {{THINGSBOARD_MOBILE_APP}} has become much easier with the new QR code feature.

## Login with QR code

Scanning the QR code automatically authorizes the user in the application (if the application is already installed), without the need to manually enter your login details.
This process is quite simple:

{% include images-gallery.html imageCollection="authorize-with-qr-code" showListImageTitles="true" %}

## Scan to connect or download mobile app

If the mobile application is not yet installed, scanning the QR code redirects the user to the app store (Google Play and Application marketplace are supported). 

Just follow these simple steps to get started:

{% include images-gallery.html imageCollection="download-app-with-qr-code" showListImageTitles="true" %}

## Configuring QR code on Home page

QR code widget settings are inherited from the *system level* by default{% unless docsPrefix == 'pe/' %} and link to the officially published {{OFFICIALLY_PUBLISHED_APPLICATION}}{% endunless %}.
{% unless docsPrefix == null %}If someone wants to use a {{CUSTOM_APPLICATION}}, tenant admins could configure it on the tenant level.{% endunless %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
Let's customize the QR code widget behavior on the "Home" page. To do this, disable the "Use system settings" toggle on the "Mobile app" tab of the "Settings" page.

{% endif %}
{% if docsPrefix == null %}
Let's customize the QR code widget behavior on the "Home" page. To do this, log in as the system administrator and navigate to the "Mobile app" tab of the "Settings" page.
{% endif %}

{% include images-gallery.html imageCollection="mobile-app-qr-code-widget-settings" %}

Here you will see two settings blocks: "Applications" and "Appearance on Home page".

* **Applications:**

{% if docsPrefix == null %}
If you are using officially published {{OFFICIALLY_PUBLISHED_APPLICATION_2}} mobile application, leave the default settings.
{% endif %}
{% if docsPrefix == "pe/" %}
If you are using an application configured at the system level, leave the default settings.
{% endif %}
{% if docsPrefix == "paas/" %}
If you are using officially published **{{OFFICIALLY_PUBLISHED_APPLICATION_2}}** mobile application, leave the default settings.
{% endif %}

{% include images-gallery.html imageCollection="application-settings-default" %}

If you want to use your {{CUSTOM_APPLICATION}}, switch to the custom settings. Here, you should fill in the required application credentials for your Android and iOS apps. 

{% include images-gallery.html imageCollection="application-settings-custom" %}

Click "Save" and check the QR code appearance on the "Home" page. Scan QR code with your mobile and check you are redirected to the specified application.

If necessary, you can disable unused platforms.

{% include images-gallery.html imageCollection="disable-platforms" %}

* **Appearance on Home page:**

You can disable the widget on the "Home" page, configure badges (or turn them off altogether), and update the QR code label.

{% include images-gallery.html imageCollection="appearance-on-home-page" %}

## Mobile app QR code widget

With the release of ThingsBoard 3.7, we've also introduced the "Mobile app QR code" widget. For example, you can use this widget on your [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} to simplify the login process for your customers on their mobile devices.

Let's add this widget to your dashboard:

{% include images-gallery.html imageCollection="add-qr-code-widget" showListImageTitles="true" %}