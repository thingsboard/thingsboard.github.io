* TOC
{:toc}

This guide provides instructions on how to configure your mobile application to launch directly from a [QR code scan](/docs/{{peDocsPrefix}}user-guide/ui/mobile-qr-code/). 
Whether you're looking to customize an existing app with your own source code from {% if docsPrefix == "pe/" %}[GitHub](https://github.com/thingsboard/flutter_thingsboard_pe_app){:target="_blank"}{% endif %}{% if docsPrefix == null %}[GitHub](https://github.com/thingsboard/flutter_thingsboard_app){:target="_blank"}{% endif %} or direct it to a custom host, this document will walk you through the necessary steps. 
By following this guide, you'll enable users to seamlessly access your app via a QR code using their phone cameras.

## Android

To direct your custom application to your own host, do the following:

### Modify AndroidManifest.xml file

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

### App package name

Find the package name **applicationId** in **build.gradle** file located at `android/app/build.gradle`:

```text
    defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "org.thingsboard.pe.app"
    }
```

### SHA256 certificate fingerprints

If your app distributed via Google Play you need to use SHA-256 certificate fingerprint located in your developer account under **Release> Setup > App Integrity> App Signing tab:**

![image](/images/mobile/sha256-fingerprint.png)

If you app distributed locally you need to use the sha256 key your apk signed with

Read more in the guide "[Set up app links for Android](https://docs.flutter.dev/cookbook/navigation/set-up-app-links#sha256-fingerprint){:target="_blank"}", available in the official Firebase documentation.

## iOS

To direct your custom application to your own host, do the following:

### Modify entitlements.xml file

- Open and modify `ios/Runner/Runner.entitlements.xml` file in your preferred IDE;
- Change **thingsboard.cloud** with your domain:

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