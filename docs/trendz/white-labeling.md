---
layout: docwithnav-trendz
assignees:
  - vparomskiy
title: White Labeling
description: Trendz White Labeling configuration - set color schema, logo and other branding settings

trendz-white-labeling-section:
  0:
    image: /images/trendz/trendz-white-labeling-settings.png
    title: 'White labeling section in Trendz analytics settings'

trendz-white-labeling-logo:
  0:
    image: /images/trendz/trendz-white-labeling-logo.png
    title: 'Change Trendz analytics logo settings'

trendz-white-labeling-title:
  0:
    image: /images/trendz/trendz-white-labeling-title.png
    title: 'Change Trendz analytics tab title'

trendz-white-labeling-url-path:
  0:
    image: /images/trendz/trendz-white-labeling-path-cloud.png
    title: 'Change loading URL path in Trenzd Cloud'
  1:
    image: /images/trendz/trendz-white-labeling-path-self.png
    title: 'Change Trendz analytics loading URL path in self hosted installation'

trendz-white-labeling-color-scheme:
  0:
    image: /images/trendz/trendz-white-labeling-color-scheme.png
    title: 'Change Trendz analytics color scheme'

trendz-white-labeling-additional-color-settings:
  0:
    image: /images/trendz/trendz-white-labeling-additional-color-settings.png
    title: 'Set Trendz analytics additional color settings'

trendz-white-labeling-help-user-mode:
  0:
    image: /images/trendz/trendz-white-labeling-help-user-mode.png
    title: 'Trendz analytics сheck box for help user mode'
---


* TOC
{:toc}

Starting from Trendz version 1.10, you can now customize certain branding settings. These options include editing the following interface elements:

* Logo and favicon (icon on the tab of the browser).
* Name of the browser tab.
* URL path customization (the part that comes after the domain name).
* Color scheme.
* Additional color settings.
* Enable help user mode.

You can configure these settings in the Trendz **Settings** page in **White labeling** section.

{% include images-gallery.html imageCollection="trendz-white-labeling-section" %}


## Trendz logo and favicon
1. All major image formats are supported for uploading. The recommended size is 64 by 64 px. But other sizes will be supported.
   After uploading a new image and pressing the Save button, the logo and favicon will change.
2. This feature allows users to upload files or data into the application using two different methods: drag and drop or browsing.
   Users can simply drag files from their computer and drop them into the designated area within the application interface to initiate the upload process.
   Alternatively, users can click on the designated area to open a file browser window, where they can navigate to the desired files and select them for upload.

{% include images-gallery.html imageCollection="trendz-white-labeling-logo" %}

## Name of the browser tab
This field can accommodate up to 128 characters. It's worth mentioning that while most browsers might not fully display all of them.

{% include images-gallery.html imageCollection="trendz-white-labeling-title" %}

## URL path customization

* **Self-managed:** If you are using the self-managed option (Trendz is hosted on your own server), then this field can contain arbitrary text. Limit - 128 characters.
  Remember that this is part of the url. Therefore, for a more correct display of words, you need to separate them with hyphens.
* **Trendz Cloud** -  you cannot set custom text, but you can use the generic word **analytics**

{% include images-gallery.html imageCollection="trendz-white-labeling-url-path" %}

## Color scheme
* Light: This option selects a light color scheme for the interface, providing a bright and visually appealing layout.
* Dark: Selecting this option applies a dark color scheme to the interface, which may reduce eye strain in low-light environments and offer a sleek, modern appearance.

{% include images-gallery.html imageCollection="trendz-white-labeling-color-scheme" %}

## Additional Color Settings
* Default: This setting applies the default color settings defined by the system, ensuring consistency across the interface.
* Custom: Choosing this option allows users to customize specific color settings according to their preferences, offering greater flexibility in personalizing the interface to suit individual needs and branding requirements.

{% include images-gallery.html imageCollection="trendz-white-labeling-additional-color-settings" %}

## Enable help user mode
This feature allows users to activate a guided help mode within the application interface. When enabled, users receive contextual guidance and tips to assist them in navigating and utilizing various features and functionalities of the application.
This mode is particularly helpful for new users or those unfamiliar with certain aspects of the application, providing an intuitive and interactive learning experience. Users can enable or disable this mode based on their preferences and requirements.

{% include images-gallery.html imageCollection="trendz-white-labeling-help-user-mode" %}