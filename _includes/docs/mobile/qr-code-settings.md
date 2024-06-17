* TOC
{:toc}

This guide provides instructions on how to configure a custom mobile application to launch directly from a [QR code scan](/docs/{{peDocsPrefix}}user-guide/ui/mobile-qr-code/) using your phone's camera. 
Whether you're looking to customize an existing app with your own source code from {% if docsPrefix == "pe/" %}[GitHub](https://github.com/thingsboard/flutter_thingsboard_pe_app){:target="_blank"}{% endif %}{% if docsPrefix == null %}[GitHub](https://github.com/thingsboard/flutter_thingsboard_app){:target="_blank"}{% endif %} or direct it to a custom host, this document will walk you through the necessary steps.

## Android app settings

### Direct Android application to your own host

To direct your custom application to your own host, you need to modify `AndroidManifest.xml` file:

- Open the Flutter project with VS Code or Android Studio;
- Navigate to `android/app/src/main/AndroidManifest.xml` file;
- Modify **AndroidManifest.xml**. You have to update `android:host=` with your host:

```text
<!-- App Links -->
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data
        android:scheme="https"
        android:host="thingsboard.cloud"
        android:pathPrefix="/api/noauth/qr" />
</intent-filter>
```

### Mobile app QR code widget settings for Android

To launch your custom mobile application when scanning a QR code, you need to specify the "[App package name](#app-package-name)" and "[SHA256 certificate fingerprints](#sha256-certificate-fingerprints)" in the [ThingsBoard Mobile app QR code widget settings](/docs/{{peDocsPrefix}}user-guide/ui/mobile-qr-code/#configuring-qr-code-widget-on-home-page){:target="_blank"}.

#### App package name

Find the app package name **applicationId** in **build.gradle** file located at `android/app/build.gradle`:

```text
    defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "org.thingsboard.pe.app"
    }
```

#### SHA256 certificate fingerprints

If your app distributed via Google Play you need to use SHA-256 certificate fingerprint located in your developer account under **Release> Setup > App Integrity> App Signing tab:**

![image](https://img.thingsboard.io/mobile/sha256-fingerprint.png)

If you app distributed locally you need to use the sha256 key your apk signed with

Read more in the guide "[Set up app links for Android](https://docs.flutter.dev/cookbook/navigation/set-up-app-links#sha256-fingerprint){:target="_blank"}", available in the official Firebase documentation.

## iOS app settings

### Direct iOS application to your own host

To direct your iOS application to your own host, you need to modify `entitlements.xml` file:

- Open and modify `ios/YOUR_APP_NAME/YOUR_APP_NAME.entitlements.xml` file in your preferred IDE;
- Modify **entitlements.xml** with your domain: You have to update `applinks` with your host:

```text
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>aps-environment</key>
	<string>development</string>
	<key>com.apple.developer.associated-domains</key>
	<array>
		<string>applinks:thingsboard.cloud</string>
	</array>
</dict>
</plist>
```

### Mobile app QR code widget settings for iOS

To launch your custom iOS mobile application when scanning a QR code, you need to specify the "[App ID](#app-id)" in the [ThingsBoard Mobile app QR code widget settings](/docs/{{peDocsPrefix}}user-guide/ui/mobile-qr-code/#configuring-qr-code-widget-on-home-page){:target="_blank"}.

#### App ID

When you create your Xcode project from a template, the bundle ID ([CFBundleIdentifier](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier){:target="_blank"}) uniquely identifies your app throughout the system.
This ID combines the organization ID and the app name that you enter in reverse-DNS format.
For example, if you enter "Runner" as the app name for your organization, the bundle identifier will be `com.mycompany.app.Runner`.

To find the bundle ID (**App ID**), you need to:
- Choose the target;
- Click the "Signing & Capabilities" pane;
- Find the bundle identifier (App ID) in the "Signing" section.

![image](https://img.thingsboard.io/mobile/qr-code-app-id.png)