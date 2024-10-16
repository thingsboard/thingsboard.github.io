---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Mobile application QR code
description: Mobile app QR code guide

download-app-with-qr-code:
    0:
        image: /images/user-guide/ui/qr-code/qr-code-thingsboard-home-page-1-paas.png
        title: 'Log into your ThingsBoard account and navigate to the "Home" page. You will find the QR code for connecting the mobile app in the bottom right corner;'
    1:
        image: /images/user-guide/ui/qr-code/qr-code-scan-and-install-app-paas.png
        title: 'Open the camera app on your phone or tablet and point it at the QR code. The phone will automatically scan the code and show the link button. Click this button to open the link to download the <b>ThingsBoard Cloud mobile app</b>;'
    2:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-install-app-paas.png
        title: 'Install ThingsBoard Cloud mobile application;'
    3:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-open-app-1-paas.png
        title: 'Launch the ThingsBoard mobile app to start using it.'

clicking-button:
    0:
        image: /images/user-guide/ui/qr-code/qr-code-thingsboard-home-page-2-paas.png
        title: 'Clicking the "App Store" or "Google Play" button in the "Connect mobile app" widget, you will be redirected to the ThingsBoard app page in the respective app store for further downloading to your device.'
    1:
        image: /images/user-guide/ui/qr-code/qr-code-button-2-pe.png
        title: 'App Store.'
    2:
        image: /images/user-guide/ui/qr-code/qr-code-button-1-pe.png
        title: 'Google Play.'

authorize-with-qr-code:
    0:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-login-with-qr-1-paas.png
        title: 'Launch the ThingsBoard Cloud mobile app on your device and use the QR code scanning feature. Make sure you have the latest version of the app installed;'
    2:
        image: /images/user-guide/ui/qr-code/qr-code-scan-and-open-app-paas.png
        title: 'Scan the QR code on the "Home" page of your ThingsBoard instance using the mobile app. You will find the QR code for connecting the mobile app in the bottom right corner;'
    3:
        image: /images/user-guide/ui/qr-code/qr-code-mobile-dashboard-1-paas.png
        title: 'You have successfully logged into the ThingsBoard Cloud mobile app with your account.'

mobile-app-qr-code-widget-settings:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-1-paas.png
        title: 'Navigate to the "Mobile app" tab on the "Settings" page and disable "Use system settings" toggle;'

application-settings-default:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-2-paas.png
        title: 'Leave "Default" applications settings to use the <b>ThingsBoard Cloud</b> mobile application.'

application-settings-custom:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-3-paas.png
        title: 'If you prefer to use your custom application, switch to the custom settings and input the necessary application credentials for your Android and iOS apps.'

disable-platforms:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-4-paas.png
        title: 'If necessary, you can disable unused platforms.'

appearance-on-home-page:
    0:
        image: /images/user-guide/ui/qr-code/mobile-app-qr-code-widget-settings-5-paas.png
        title: 'You can disable the widget on the home page, configure badges (or turn them off altogether), and update the QR code label.'

add-qr-code-widget:
    0:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-1-paas.png
        title: 'Open your dashboard and switch to edit mode. Click the "+ Add widget" icon at the top of the screen;'
    1:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-2-paas.png
        title: 'Navigate to the "Cards" widget bundle;'
    2:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-3-paas.png
        title: 'Select the "Mobile app QR code" widget;'
    3:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-4-paas.png
        title: 'You can use either the system settings or customize your own. If desired, you can configure badges (or turn them off altogether), and update the QR code label. Click "Add".'
    4:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-5-paas.png
        title: 'Adjust widget size to fit your needs. After you&#39;re done tweaking, click "Save" to save the dashboard;'
    5:
        image: /images/user-guide/ui/qr-code/add-qr-code-widget-6-paas.png
        title: 'Mobile app QR code widget has been added. Scan QR code with your mobile and check you are redirected to the specified application.'
  

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/user-guide/ui/mobile-qr-code.md %}