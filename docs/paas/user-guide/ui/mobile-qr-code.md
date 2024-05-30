---
layout: docwithnav-paas
assignees:
- stitenko
title: Mobile application QR code
description: Mobile app QR code guide

authorize-with-qr-code:
    0:
        image: /images/user-guide/ui/qr-code/qr-code-thingsboard-home-page-1-paas.png
        title: 'Log in to your ThingsBoard instance. Navigate to the "Home" page and in the bottom right corner, you will find the QR code for connecting the mobile app;'
    1:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-login-with-qr-1-paas.png
        title: 'Launch the ThingsBoard mobile application on your device, and use the QR code scanning feature. Make sure you have the latest version of the app installed to use this feature;'
    2:
        image: /images/user-guide/ui/qr-code/qr-code-scan-and-open-app-paas.png
        title: 'Scan the QR code using the mobile app;'
    3:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-dashboard-1-paas.png
        title: 'You have successfully authorized in to the ThingsBoard mobile app into your account.'

download-app-with-qr-code:
    0:
        image: /images/user-guide/ui/qr-code/qr-code-thingsboard-home-page-1-paas.png
        title: 'Log in to your ThingsBoard instance. Navigate to the "Home" page and in the bottom right corner, you will find the QR code for connecting the mobile app;'
    1:
        image: /images/user-guide/ui/qr-code/qr-code-scan-and-install-app-paas.png
        title: 'Open the built-in camera app on your phone or tablet and point it at the QR code. The phone will automatically scan the code and show the link button. Click this button to open the link to the ThingsBoard mobile app (Google Play or App Store);'
    2:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-install-app-paas.png
        title: 'Install ThingsBoard mobile app;'
    3:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-open-app-1-paas.png
        title: 'Open the installed application;'
    4:
        image: /images/user-guide/ui/qr-code/qr-code-scan-and-open-app-paas.png
        title: 'Simply scan the QR code using the mobile app. You will automatically authorize into the app, without the need to manually enter your login details;'
    5:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-dashboard-1-paas.png
        title: 'You have successfully authorized in to the ThingsBoard mobile app into your account.'

mobile-app-qr-code-widget-settings:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-1-paas.png
        title: 'Go to the "Settings" menu item, navigate to the "Mobile app" tab and disable "Use system settings" toggle;'

application-settings-default:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-2-paas.png
        title: 'If you are using an application configured at the system level, leave the default settings.'

application-settings-custom:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-3-paas.png
        title: 'If you want to use your custom application, switch to custom settings. Here, you should fill in the required application credentials for Android and iOS apps.'

disable-platforms:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-4-paas.png
        title: 'If necessary, you can disable platforms.'

appearance-on-home-page:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-5-paas.png
        title: 'You can disable the widget on the home page, configure badges (or turn them off altogether), and update the QR code label.'

add-qr-code-widget:
    0:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-1-paas.png
        title: 'Open your dashboard, enter edit mode and click the "+ Add widget" icon at the top of the screen;'
    1:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-2-paas.png
        title: 'Find the "Cards" widget bundle and click on it;'
    2:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-3-paas.png
        title: 'Select the "Mobile app QR code" widget;'
    3:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-4-paas.png
        title: 'You can use system settings or use your own. If desired, you can disable unnecessary platforms, configure badges (or turn them off altogether), and update the QR code label. Click "Add".'
    4:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-5-paas.png
        title: 'Adjust widget size to fit your needs. After you&#39;re done tweaking, click "Save" to save the dashboard;'
    5:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-6-paas.png
        title: 'Mobile app QR code widget has been added. Scan QR code with your mobile and check you are redirected to the specified application.'
  

---

{% assign docsPrefix = "paas/" %}
{% include docs/user-guide/ui/mobile-qr-code.md %}