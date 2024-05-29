{% if docsPrefix == null %}
{% assign THINGSBOARD_MOBILE_APP = "[Thingsboard mobile application ](/docs/mobile/)" %}
{% assign custom_application = "[custom application](/docs/mobile/)" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign THINGSBOARD_MOBILE_APP = "[Thingsboard PE mobile application ](/docs/pe/mobile/)" %}
{% assign custom_application = "[custom application](/docs/pe/mobile/)" %}
{% endif %}
{% if docsPrefix == "paas/" %}
{% assign THINGSBOARD_MOBILE_APP = "Thingsboard mobile application " %}
{% assign custom_application = "custom application" %}
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

If the mobile application is not yet installed, scanning the QR code redirects the user to the app store (Google Play and App Store are supported). 

Just follow these simple steps to get started:

{% include images-gallery.html imageCollection="download-app-with-qr-code" showListImageTitles="true" %}

## Configuring QR code on Home page

QR code widget settings are inherited from the system level by default and link to the officially published Thingsboard Cloud application. 
If someone wants to use a {{custom_application}}, tenant admins could configure it on the tenant level.

Let's customize the QR code widget behavior on the "Home" page. For this, disable the "Use system settings" toggle on the "Mobile app" tab of the "Settings" page.

{% include images-gallery.html imageCollection="mobile-app-qr-code-widget-settings" %}

Here you will see two settings blocks: Applications and Appearance on Home page.

<br>
**Application settings**

If you are using an application configured at the system level, leave the default settings. 

{% include images-gallery.html imageCollection="application-settings-default" %}

If you want to use your custom application, switch to custom settings. Here, you should fill in the required application credentials for Android and iOS apps. 

{% include images-gallery.html imageCollection="application-settings-custom" %}

If necessary, you can disable platforms.

{% include images-gallery.html imageCollection="disable-platforms" %}

<br>
**Appearance on Home page**

You can disable the widget on the "Home" page, configure badges (or turn them off altogether), and update the QR code label.

{% include images-gallery.html imageCollection="appearance-on-home-page" %}

Click save and check the QR code appearance on the Home page. Scan QR code with your mobile and check you are redirected to the specified application.

## Mobile app QR code widget

With the release of ThingsBoard 3.7, we've also introduced the "Mobile app QR code" widget. For example, you can use this widget on your [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} to simplify the login process for your customers on their mobile devices.

Let's add this widget to your dashboard:

{% include images-gallery.html imageCollection="add-qr-code-widget" showListImageTitles="true" %}