* TOC
{:toc}

{% assign sinceVersion = "3.7" %}
{% include templates/since.md %}

Since the Thingsboard 3.7 release, a new feature was added to allow users to open the ThingsBoard mobile application by scanning a QR code from the ThingsBoard.

This process is quite simple. Scanning the QR code automatically authorizes the user in the application (if the application is already installed)

{% include images-gallery.html imageCollection="authorize-with-qr-code" showListImageTitles="true" %}

If the mobile application is not yet installed, scanning the QR code redirects the user to the app store (Google Play and App Store are supported).

{% include images-gallery.html imageCollection="download-app-with-qr-code" showListImageTitles="true" %}

QR code scanning process automatically authorize the user into the app (if the application is already installed) or redirects the user to the application store (Google Play and App Store are supported). QR code widget settings are inherited from the system level by default and link to the officially published Thingsboard Cloud application. 
If someone wants to use a custom application, tenant admins could configure it on the tenant level.

Let's customize the QR code widget behavior on the Home page.

1. Go to the "Settings" menu item and open the "Mobile app" tab.
2. Disable "Use system settings" toggle
3. In the Applications settings section toggle "Custom"
4. Fill in the required application credentials for Android and iOS. You can disable platforms if necessary.
5. Configure "Appearance on Home page". You can turn off widget appearance on the home page, configure badges and update the qr code label.
6. Click save and check the QR code appearance on the Home page. Scan QR code with your mobile and check you are redirected to the specified application. (edited) (edited) 