{% if docsPrefix == 'pe/' %}
{% assign peDocsPrefix = "pe/" %}
{% else %}
{% assign peDocsPrefix = "" %}
{% endif %}
* TOC
{:toc}

<table style="width:auto">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Only for mobile app versions 1.7.x and later.</em></strong></td>
     </tr>
   </thead>
</table> 

{% capture pre_1_7_0_link %}
If you need to publish a version earlier than **1.7.x**, please use the [legacy guide](/docs/{{peDocsPrefix}}mobile/release-before-v1.7/){:target="_blank"} for pre‑1.7 releases.
{% endcapture %} {% include templates/info-banner.md content=pre_1_7_0_link %}

This guide walks you through building and releasing the {{appPrefix}} mobile app for **iOS** and **Android**. It assumes you created an app package in the [Mobile center](/docs/{{docsPrefix}}mobile-center/mobile-center/){:target="_blank"} and downloaded the generated configuration file.

<b><font size="3">Before you start</font></b>

**1. Mobile center config ready**. You have created the bundle in Mobile center and downloaded the **configs.json** file. 

{% capture config_note %}
ℹ️ **Why Mobile center?** It centrally manages your package name, app name, notification icon set, and other runtime settings. Using Mobile Center keeps builds consistent and avoids config drift.
{% endcapture %}
{% include templates/info-banner.md content=config_note %}

If you need to change any settings:
  - Update them in [Mobile center](/docs/{{docsPrefix}}mobile-center/mobile-center/){:target="_blank"}.
  - Re‑download configs.json.
  - Replace the file in your project.

  {% capture config_note %}
  🔒 Do not edit configs.json manually. Always manage settings in Mobile center to keep all environments in sync and reduce misconfigurations.
  {% endcapture %}
  {% include templates/info-banner.md content=config_note %}

**2. Store access**. Apple Developer account (App Store Connect) and Google Play Console access.<br>
**3. Tooling installed**. Flutter SDK, Xcode (for iOS), Android Studio / Android SDK (for Android).

![image](/images/mobile/{{peDocsPrefix}}release-redownload-config.png)

## iOS — Build & Release

When preparing a release version of your app for publishing on the [App Store](https://developer.apple.com/app-store/submissions/) and [TestFlight](https://developer.apple.com/testflight/), follow the official ["Build and release an IOS app"](https://docs.flutter.dev/deployment/ios) guide.

{% capture ios_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command as well as the `--dart-define-from-file` flag with your config file:
{% endcapture %}
{% include templates/info-banner.md content=ios_build_notice %}

```bash
flutter build ipa --no-tree-shake-icons --dart-define-from-file configs.json
```
{: .copy-code}

## Android — Build & Release

When preparing a release version of your app for publishing on [Google Play](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en), follow the official ["Build and release an Android app"](https://docs.flutter.dev/deployment/android) guide.

{% capture android_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command as well as the `--dart-define-from-file` flag with your config file:
{% endcapture %}
{% include templates/info-banner.md content=android_build_notice %}

```bash
flutter build appbundle --no-tree-shake-icons --dart-define-from-file configs.json
```
{: .copy-code}

### Build commands explanation

**`--no-tree-shake-icons`** 
    Prevents Flutter from removing unused icons during the build process, this will allow mobile app to display any icon, that was set to notification in the notification center.

**`--dart-define-from-file configs.json`**
    Loads your app configuration from the JSON file downloaded from the Mobile Center, ensuring your app uses the correct settings for production.
