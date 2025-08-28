* TOC
{:toc}

Before publishing your app, you may want to polish it. Each app should have its own identification. Therefore, we recommend setting a unique label name and app launch icon before releasing it to the world.

## Change App Name

Here are the simple steps to change the label name of your app using the terminal:

### Install the Rename Package

First, activate the rename package globally:

```bash
flutter pub global activate rename
```
{: .copy-code}

### Set App Name for Both Platforms

Using this command, you will get identical app names for both iOS and Android platforms:

```bash
rename setAppName --targets android,ios --value "Your desired app name"
```
{: .copy-code}

### Set Different Names for Each Platform

If you want to have different names for every platform, simply run:

```bash
rename setAppName --targets ios --value "Your iOS app name"
```
{: .copy-code}
```bash
rename setAppName --targets android --value "Your Android app name"
```
{: .copy-code}

## Change Package Name

{% capture package_name_notice %}
**Please note:** Your package names should be identical to the package name you configured in your Mobile Center on the ThingsBoard platform.
{% endcapture %}
{% include templates/info-banner.md content=package_name_notice %}

### Set Package Names

```bash
rename setBundleId --targets android --value "org.yourCompany.app"
```
{: .copy-code}
```bash
rename setBundleId --targets ios --value "org.yourCompany.app.ios"
```
{: .copy-code}

{% capture platform_limitation %}
**Current ThingsBoard Platform Limitation:** Each app should have a unique package name even if they are for different platforms. That's why we added the `.ios` suffix to the IOS package name in the rename command. You can use any package name you want, as long as your IOS and Android package names are different.
{% endcapture %}
{% include templates/info-banner.md content=platform_limitation %}

## Change Launcher Icon

Please follow the [App icon and splash screen guide](/docs/{{docsPrefix}}mobile/app-icon-splash-screen/) for detailed instructions on customizing your app icon.

## Build and Release an Android Version

When preparing a release version of your app for publishing on [Google Play](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en), follow the official ["Build and release an Android app"](https://docs.flutter.dev/deployment/android) guide.

{% capture android_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command:
{% endcapture %}
{% include templates/info-banner.md content=android_build_notice %}

```bash
flutter build appbundle --no-tree-shake-icons
```
{: .copy-code}

## Build and Release an iOS Version

When preparing a release version of your app for publishing on the [App Store](https://developer.apple.com/app-store/submissions/) and [TestFlight](https://developer.apple.com/testflight/), follow the official ["Build and release an iOS app"](https://docs.flutter.dev/deployment/ios) guide.

{% capture ios_build_notice %}
**Important Notice:** While preparing the app for release, for example, when producing a build archive, you must provide the `--no-tree-shake-icons` flag to your build command:
{% endcapture %}
{% include templates/info-banner.md content=ios_build_notice %}

```bash
flutter build ipa --no-tree-shake-icons
```
{: .copy-code}
