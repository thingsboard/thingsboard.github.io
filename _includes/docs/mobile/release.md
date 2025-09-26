{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% assign peDocsPrefix = "pe/" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% assign peDocsPrefix = "" %}
{% endif %}
* TOC
{:toc}

This guide walks you through creating and releasing the {{appPrefix}} mobile app version **1.7.x** for **iOS** and **Android**.

{% capture contribution_note %}
If you need to publish a version earlier than **1.7.x**, please use the [legacy guide](/docs/{{peDocsPrefix}}mobile/release-before-v1.7/){:target="_blank"} for pre‑1.7 releases.
{% endcapture %}
{% include templates/info-banner.md content=contribution_note %}

<br><b><font size="5">Before you start</font></b>

It assumes you [created an app bundle](/docs/{{docsPrefix}}mobile/getting-started/#step-1-create-a-bundle-in-the-mobile-center){:target="_blank"} in the [Mobile center](/docs/{{docsPrefix}}mobile-center/mobile-center/){:target="_blank"} and downloaded the generated **configs.json** file.

If you need to change any settings:
  - Update them in Mobile center.
  - Re‑download configs.json.
  - Replace the file in your project.
{% capture config_note %}
Do not edit **configs.json** manually. Always manage settings in **Mobile center** to keep all environments in sync and reduce misconfigurations.
{% endcapture %}
{% include templates/info-banner.md content=config_note %}

{% assign releaseRedownloadConfigCE = '
    ===
        image: /images/mobile/release-redownload-config-1-ce.png,
    ===
        image: /images/mobile/release-redownload-config-2-ce.png,
'
%}

{% assign releaseRedownloadConfigPE = '
    ===
        image: /images/mobile/pe/release-redownload-config-1-pe.png,
    ===
        image: /images/mobile/pe/release-redownload-config-2-pe.png,
'
%}

{% if docsPrefix == "pe/" %}
{% include images-gallery.liquid imageCollection=releaseRedownloadConfigPE %}
{% else %}  
{% include images-gallery.liquid imageCollection=releaseRedownloadConfigCE %}
{% endif %}

## iOS — Build & Release

When preparing a release version of your app for publishing on the [App Store](https://developer.apple.com/app-store/submissions/){:target="_blank"} and [TestFlight](https://developer.apple.com/testflight/){:target="_blank"}, follow the official ["Build and release an IOS app"](https://docs.flutter.dev/deployment/ios){:target="_blank"} guide.

{% capture ios_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command as well as the `--dart-define-from-file` flag with your config file:
{% endcapture %}
{% include templates/info-banner.md content=ios_build_notice %}

Flutter build command:

```bash
flutter build ipa --no-tree-shake-icons --dart-define-from-file configs.json
```
{: .copy-code}

## Android — Build & Release

When preparing a release version of your app for publishing on [Google Play](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en){:target="_blank"}, follow the official ["Build and release an Android app"](https://docs.flutter.dev/deployment/android){:target="_blank"} guide.

{% capture android_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command as well as the `--dart-define-from-file` flag with your config file:
{% endcapture %}
{% include templates/info-banner.md content=android_build_notice %}

Flutter build command:

```bash
flutter build appbundle --no-tree-shake-icons --dart-define-from-file configs.json
```
{: .copy-code}

## Build flags explanation

**`--no-tree-shake-icons`**   
    Prevents Flutter from removing unused icons during the build process, this will allow mobile application to display any icon, that was set to notification in the notification center.

**`--dart-define-from-file configs.json`**   
    Loads {{appPrefix}} Mobile Application configuration from the JSON file downloaded from the Mobile center, ensuring your app uses the correct settings for production.
