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
{% if docsPrefix == "paas/" %}
{% assign THINGSBOARD_MOBILE_APP = "Thingsboard mobile application " %}
{% assign CUSTOM_APPLICATION = "[custom application](/docs/pe/mobile/)" %}
{% assign OFFICIALLY_PUBLISHED_APPLICATION = "**ThingsBoard Cloud**" %}
{% endif %}

* TOC
{:toc}

{% assign sinceVersion = "3.7" %}
{% include templates/since.md %}

In ThingsBoard version 3.7, the authorization process in the {{THINGSBOARD_MOBILE_APP}} has been simplified by introducing a new QR code feature.

## Login with QR code

Scanning the QR code automatically authorizes the user to the application (if the application is already installed) without the need to manually enter your credentials.
This process is quite simple:

{% include images-gallery.html imageCollection="authorize-with-qr-code" showListImageTitles="true" %}

## Scan to connect or download mobile app

If the mobile application is not yet installed, scanning the QR code redirects the user to the application marketplace (Google Play and App Store are supported)

Just follow these simple steps to get started:

{% include images-gallery.html imageCollection="download-app-with-qr-code" showListImageTitles="true" %}

## Configuring QR code on Home page

{% if docsPrefix == null %}
By default, the mobile application QR code widget settings are inherited from the **system level**, and the QR code links to the officially published **ThingsBoard Live** mobile application ([Android](https://play.google.com/store/apps/details?id=org.thingsboard.demo.app){:target="_blank"} and [iOS](https://apps.apple.com/us/app/thingsboard-live/id1594355695){:target="_blank"}).

If you want to customize the behavior of the Mobile App QR Code widget or use your [custom application](/docs/mobile/){:target="_blank"}, log in as the **system administrator** and navigate to the "Mobile app" tab on the "Settings" page. Here you will see two settings blocks: "Applications" and "Appearance on Home page".
{% endif %}
{% if docsPrefix == "pe/" %}
By default, the mobile application QR code widget settings are inherited from the **system level**, and the QR code links to the officially published **ThingsBoard Cloud** mobile application ([Android](https://play.google.com/store/apps/details?id=org.thingsboard.cloud){:target="_blank"} and [iOS](https://apps.apple.com/us/app/thingsboard-cloud/id6499209395){:target="_blank"}).
If a **tenant administrator** wants to use a [custom application](/docs/pe/mobile/){:target="_blank"}, they can configure it at their level.
{% endif %}
{% if docsPrefix == "paas/" %}
By default, the mobile application QR code widget links to the officially published **ThingsBoard Cloud** mobile application ([Android](https://play.google.com/store/apps/details?id=org.thingsboard.cloud){:target="_blank"} and [iOS](https://apps.apple.com/us/app/thingsboard-cloud/id6499209395){:target="_blank"}).
If a **tenant administrator** wants to use a [custom application](/docs/pe/mobile/){:target="_blank"}, they can configure it at their level.
{% endif %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
To customize the QR code widget behavior on the "Home" page, navigate to the "Mobile app" tab on the "Settings" page and disable "Use system settings" toggle.
{% endif %}

{% include images-gallery.html imageCollection="mobile-app-qr-code-widget-settings" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
Here you will see two settings blocks: "Applications" and "Appearance on Home page".
{% endif %}

**Applications:**

{% if docsPrefix == null %}
* Leave "Default" applications settings to use the {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application.
{% endif %}
{% if docsPrefix == "pe/" %}
* Leave "Default" applications settings to use the {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application.
{% endif %}
{% if docsPrefix == "paas/" %}
* If you are using officially published {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application, leave the default settings.
{% endif %}

{% include images-gallery.html imageCollection="application-settings-default" %}

{% unless docsPrefix == 'paas/' %}
{% capture difference %}
**Note:** Using the default application implies the {{OFFICIALLY_PUBLISHED_APPLICATION}} mobile application will work with your {{PREFIX}} instance. To do so, just use the "Login with the scan QR code" option on the mobile application's login page, and the application will change its server host to your ThingsBoard {{PREFIX}} platform host.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endunless %}

* If you want to use your {{CUSTOM_APPLICATION}}, switch to the custom settings. Here, you should fill in the required application credentials for your Android and iOS apps. 

{% include images-gallery.html imageCollection="application-settings-custom" %}

Click "Save" and check the QR code appearance on the "Home" page. Scan QR code with your mobile and check you are redirected to the specified application.

* If necessary, you can disable unused platforms.

{% include images-gallery.html imageCollection="disable-platforms" %}
<br>
**Appearance on Home page:**

You can disable the widget on the "Home" page, configure badges (or turn them off altogether), and update the QR code label.

{% include images-gallery.html imageCollection="appearance-on-home-page" %}

## Mobile app QR code widget

With the release of ThingsBoard 3.7, we've also introduced the "Mobile app QR code" widget. For example, you can use this widget on your [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} to simplify the login process for your customers on their mobile devices.

Let's add this widget to your dashboard:

{% include images-gallery.html imageCollection="add-qr-code-widget" showListImageTitles="true" %}