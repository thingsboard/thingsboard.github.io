{% if docsPrefix == 'pe/' %}
{% assign peDocsPrefix = "pe/" %}
{% else %}
{% assign peDocsPrefix = "" %}
{% endif %}
* TOC
{:toc}

{% capture pre_1_7_0_link %}
Important Notice: Please use [this guide](/docs/{{peDocsPrefix}}mobile/release-before-v1.7/) for pre 1.7.x app publish instructions
{% endcapture %} {% include templates/info-banner.md content=pre_1_7_0_link %}

## Configure the App

Your app package name and app name will come preconfigured from your Mobile Center in the configuration file that you downloaded after app bundle creation in the Mobile Center.

If you need to change some settings, we recommend updating them in the Mobile Center and redownloading the configuration file from the Mobile Center. This ensures consistency and prevents configuration conflicts.

![image](https://img.thingsboard.io/mobile/{{peDocsPrefix}}release-redownload-config.png)

{% capture config_note %}
**Note:** Always use the Mobile Center to manage your app configuration rather than manually editing configuration files. This approach ensures all settings remain synchronized and reduces the risk of errors.
{% endcapture %}
{% include templates/info-banner.md content=config_note %}

## Build and Release an IOS Version

When preparing a release version of your app for publishing on the [App Store](https://developer.apple.com/app-store/submissions/) and [TestFlight](https://developer.apple.com/testflight/), follow the official ["Build and release an IOS app"](https://docs.flutter.dev/deployment/ios) guide.

{% capture ios_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command as well as the `--dart-define-from-file` flag with your config file:
{% endcapture %}
{% include templates/info-banner.md content=ios_build_notice %}

```bash
flutter build ipa --no-tree-shake-icons --dart-define-from-file configs.json
```
{: .copy-code}

## Build and Release an Android Version

When preparing a release version of your app for publishing on [Google Play](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en), follow the official ["Build and release an Android app"](https://docs.flutter.dev/deployment/android) guide.

{% capture android_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command as well as the `--dart-define-from-file` flag with your config file:
{% endcapture %}
{% include templates/info-banner.md content=android_build_notice %}

```bash
flutter build appbundle --no-tree-shake-icons --dart-define-from-file configs.json
```
{: .copy-code}

### Build Commands Explanation

**`--no-tree-shake-icons`**: This flag prevents Flutter from removing unused icons during the build process, this will allow mobile app to display any icon, that was set to notification in the notification center.

**`--dart-define-from-file configs.json`**: This flag loads your app configuration from the JSON file downloaded from the Mobile Center, ensuring your app uses the correct settings for production.
