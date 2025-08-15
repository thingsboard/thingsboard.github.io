{% if docsPrefix == 'pe/' %}
{% assign peDocsPrefix = "pe/" %}
{% else %}
{% assign peDocsPrefix = "" %}
{% endif %}
* TOC
{:toc}

This guide provides instructions on how to configure a custom mobile application to launch directly from a [QR code scan](/docs/{{peDocsPrefix}}user-guide/ui/mobile-qr-code/) using your phone's camera.

In application version 1.7.0+, we have made QR code settings configuration much easier through the platform interface.

## Platform Configuration

### iOS Application Setup

Navigate to **Mobile Center → Applications → Your custom iOS app** in the ThingsBoard platform.

#### App Site Association ID

Provide the **App Site Association ID** in your app store info settings:

![App Site Association ID Configuration](https://img.thingsboard.io/mobile/{{peDocsPrefix}}qr-code-settings-ios-store-info.png)

The App Site Association ID consists of two parts separated by a dot:

**1. App Store Team ID**
- Get your Team ID from [Apple Developer Account](https://developer.apple.com/account)
- Look for it in the "Membership details" block

![Team ID Location](https://img.thingsboard.io/mobile/qr-code-settings-team-id.png)

**2. App Bundle ID**
- Must be the same as the Application package in your app settings
- This is your app's unique identifier

### Android Application Setup

Navigate to **Mobile Center → Applications → Your custom Android app** in the ThingsBoard platform.

#### SHA-256 Fingerprint

Provide the **SHA-256 fingerprint** of your app's signing key:

![SHA-256 Fingerprint Configuration](https://img.thingsboard.io/mobile/{{peDocsPrefix}}qr-code-settings-sha256.png)

**For Google Play distributed apps:**
Use the SHA-256 certificate fingerprint located in your Google Play Console under:
**Release → Setup → App Integrity → App Signing tab**

![Google Play SHA-256 Fingerprint](https://img.thingsboard.io/mobile/sha256-fingerprint.png)

**For locally distributed apps:**
Use the SHA-256 key that your APK is signed with.

For more detailed information, read the guide "[Set up app links for Android](https://docs.flutter.dev/cookbook/navigation/set-up-app-links)" in the official Flutter documentation.
