---
layout: docwithnav-mobile-pe
title: Configure white-labeling in ThingsBoard PE Mobile Application

login-white-labeling:
 0:
  image: /images/mobile/pe/white-labeling-1.png
  title: 'For tenant level settings input domain in the <b>Domain name</b> field'
 1:
  image: /images/mobile/pe/white-labeling-2.png
  title: 'Enter base url in the <b>Base URL</b> field (includes protocol scheme <b>http</b> or <b>https</b> and port if it differs from standard one <b>80</b> or <b>443</b>)'
 2:
  image: /images/mobile/pe/white-labeling-3.png
  title: 'Upload desired logo image to the <b>Logo</b> field'
 3:
  image: /images/mobile/pe/white-labeling-4.png
  title: 'Specify your logo height if necessary in the <b>Logo height</b> field'
 4:
  image: /images/mobile/pe/white-labeling-5.png
  title: 'Select primary color palette in the <b>Primary palette</b> field'
 5:
  image: /images/mobile/pe/white-labeling-6.png
  title: 'Click <b>Save</b> button to apply changes'

login-white-labeling-result:
 0:
  image: /images/mobile/pe/white-labeling-7.png
  title: 'You should see your logo image on the top of the login form. Buttons and background should be colored according to the selected color palette.'

white-labeling:
 0:
  image: /images/mobile/pe/white-labeling-8.png
  title: 'Upload desired logo image to the <b>Logo</b> field'
 1:
  image: /images/mobile/pe/white-labeling-9.png
  title: 'Select primary color palette in the <b>Primary palette</b> field'
 2:
  image: /images/mobile/pe/white-labeling-10.png
  title: 'Click <b>Save</b> button to apply changes'

white-labeling-result:
 0:
  image: /images/mobile/pe/white-labeling-11.png
  title: 'You should see your logo image on the top bar of the home screen. Buttons and icons should be colored according to the selected color palette.'

---

* TOC
{:toc}

## Overview

ThingsBoard PE [white-labeling](/docs/pe/user-guide/white-labeling/) feature allows you to configure your company or product logo and color scheme.
In addition to the ThingsBoard web interface, the white-label settings also apply to the ThingsBoard PE Mobile app.
Using white-labeling you can customize look of mobile app login screen and main app interface.

## Login screen white-labeling

As a System or Tenant administrator you can configure app login screen logo and color palette in the **Login White Labeling** form.

{% capture login_white_labeling_levels %}
**Note:**  By default system level login white-labeling is applied (configured by System administrator). Each tenant can override these settings by specifying
**Domain name** in the **Login White Labeling** form.
In this case tenant level settings will be applied according to the domain name of api endpoint configured in the mobile app
(value of **thingsBoardApiEndpoint** constant in **lib/constants/app_constants.dart**).
{% endcapture %}
{% include templates/info-banner.md content=login_white_labeling_levels %}

To configure login screen white-labeling perform the following steps:

1. Go to **White Labeling** -> **Login White Labeling** through the main menu on the left of the screen;
2. For tenant level settings input domain in the **Domain name** field;
3. Enter base url in the **Base URL** field (includes protocol scheme **http** or **https** and port if it differs from standard one **80** or **443**); 
4. Upload desired logo image to the **Logo** field;
5. Specify your logo height if necessary in the **Logo height** field;
6. Select primary color palette in the **Primary palette** field;
7. Click **Save** button to apply changes;

{% include images-gallery.html imageCollection="login-white-labeling" %}

To verify your login white-labeling setup run the mobile app.
You should see your logo image on the top of the login form. Buttons and background should be colored according to the selected color palette. 

{% include images-gallery.html imageCollection="login-white-labeling-result" %}

## Main application interface white-labeling

As a System or Tenant administrator you can configure main app interface logo and color palette in the **White Labeling** form.

{% capture app_white_labeling_levels %}
**Note**: By default system level white-labeling is applied (configured by System administrator). Each tenant can override these settings
in the **White Labeling** form.
{% endcapture %}
{% include templates/info-banner.md content=app_white_labeling_levels %}

To configure main app interface white-labeling perform the following steps:

1. Go to **White Labeling** -> **White Labeling** through the main menu on the left of the screen;
2. Upload desired logo image to the **Logo** field;
3. Select primary color palette in the **Primary palette** field;
4. Click **Save** button to apply changes;

{% include images-gallery.html imageCollection="white-labeling" %}

To verify your white-labeling setup run the mobile app and perform login.
You should see your logo image on the top bar of the home screen. Buttons and icons should be colored according to the selected color palette.

{% include images-gallery.html imageCollection="white-labeling-result" %}
