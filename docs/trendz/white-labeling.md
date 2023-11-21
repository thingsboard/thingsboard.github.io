---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: White Labeling
description: Trendz White Labeling configuration - set color schema, logo and other branding settings

trendz-white-labeling-section:
  0:
    image: https://img.thingsboard.io/trendz/trendz-white-labeling-settings.png
    title: 'White labeling section in Trendz analytics settings'

trendz-white-labeling-logo:
  0:
    image: https://img.thingsboard.io/trendz/trendz-white-labeling-logo.png
    title: 'Change Trendz analytics logo settings'

trendz-white-labeling-title:
  0:
    image: https://img.thingsboard.io/trendz/trendz-white-labeling-title.png
    title: 'Change Trendz analytics tab title'

trendz-white-labeling-url-path:
  0:
    image: https://img.thingsboard.io/trendz/trendz-white-labeling-path-cloud.png
    title: 'Change Trendz analytics loading URL path in self hosted installation'
  1:
    image: https://img.thingsboard.io/trendz/trendz-white-labeling-path-self.png
    title: 'Change loading URL path in Trenzd Cloud'
---


* TOC
{:toc}

Starting from Trendz version 1.11, you can now customize certain branding settings. These options include editing the following interface elements:

* Logo and favicon (icon on the tab of the browser).
* Name of the browser tab.
* URL path customization (the part that comes after the domain name).

You can configure these settings in the Trendz **Settings** page in **White labeling** section.

{% include images-gallery.html imageCollection="trendz-white-labeling-section" %}


## Trendz logo and favicon
All major image formats are supported for uploading. The recommended size is 64 by 64 px. But other sizes will be supported.
After uploading a new image and pressing the Save button, the logo and favicon will change.

{% include images-gallery.html imageCollection="trendz-white-labeling-logo" %}

## Name of the browser tab
This field can accommodate up to 128 characters. It's worth mentioning that while most browsers might not fully display all of them.

{% include images-gallery.html imageCollection="trendz-white-labeling-title" %}

## URL path customization

* **Self-managed:** If you are using the self-managed option (Trendz is hosted on your own server), then this field can contain arbitrary text. Limit - 128 characters. Remember that this is part of the url. Therefore, for a more correct display of words, you need to separate them with hyphens.
* **Trendz Cloud** -  you cannot set custom text, but you can use the generic word **analytics**

{% include images-gallery.html imageCollection="trendz-white-labeling-url-path" %}