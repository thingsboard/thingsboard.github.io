* TOC
{:toc}

Before publishing your app, you may want to polish it. Each app should have its own identification. 
Therefore, we recommend setting a unique label name, package name, and app launch icon before releasing it to the world.

## Change App Name

Here are the simple steps to change the label name of your Android app:
1. Open your **AndroidManifest.xml** file located in the *android/app/src/main* directory

   ![image](/images/mobile/flutter_ce_package_name.png)

2. Find the `<application>` tag
3. Change the `android:label` attribute to the desired name for your app:

   ```xml
   <application android:requestLegacyExternalStorage="true"
       android:label="YourAppName" 
       android:networkSecurityConfig="@xml/network_security_config" 
       android:icon="@mipmap/launcher_icon">
       ...
   </application>
   ```




## Change Package Name

1. Open **build.gradle** located in *android/app* directory
2. Change the `applicationId` under the `defaultConfig` to your desired package name:

   ```
    defaultConfig {
      applicationId "org.yourappname.app" // usually reversed company domain
      minSdkVersion 21
      targetSdkVersion 33
      versionCode flutterVersionCode.toInteger()
      versionName flutterVersionName
    }
   ```

{% capture android_rename_notice %}
**Please note:**
You can also modify BundleId and AppName using the [rename](https://pub.dev/packages/rename){:target="_blank"} package and following the provided documentation.
{% endcapture %}
{% include templates/info-banner.md content=android_rename_notice %}



## Change Launcher Icon

The Flutter app comes with a launcher icon. To change it with your custom one, please follow the instructions:

1. Add [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons){:target="_blank"} plugin to your project via command line

    ```bash
    flutter pub add dev:flutter_launcher_icons 
    ```
    {: .copy-code}
    
    Or by adding it directly to your **pubspec.yaml** (don't forget to check for the latest available version)
    
    ```yaml
    dev_dependencies:
      flutter_launcher_icons: ^0.13.1
    ```

2. Prepare an icon image and place it in the *assets/images* folder. Replace the default launcher icon with the new one

    ```yaml
    flutter_icons:
      android: "launcher_icon"
      ios: true
      remove_alpha_ios: true
      image_path: "assets/images/yourIcon.png"
    ```
   
   ![image](/images/mobile/flutter_launch_icon.png)
   
3. In the terminal, execute the following commands:

    ```bash
    flutter pub get
        
    flutter pub run flutter_launcher_icons
    ```
    {: .copy-code}

Commands will fetch the dependencies and then run the flutter_launcher_icons script to generate app icons for both Android and iOS platforms.



## Build and release an Android version

When preparing a release version of your app, for example, for [publishing it on the Google Play](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en){:target="_blank"}, 
follow the ["Build and release an Android app"](https://docs.flutter.dev/deployment/android){:target="_blank"} article.

{% capture android_build_notice %}
**Improtant notice:** While preparing the app for release, for example, when building an app bundle, you must provide **----no-tree-shake-icons** flag to your build command:
{% endcapture %}
{% include templates/info-banner.md content=android_build_notice %}

   ```bash
   flutter build appbundle --no-tree-shake-icons
   ```
   {: .copy-code}


&nbsp;
&nbsp;

## Change iOS Bundle Name and Identifier

To change the bundle name and identifier for iOS, follow these steps:
1. Open **Info-Release.plist** located in *ios/Runner* directory. Note: there is also **Info-Debug.plist** which is used for debugging purposes only

   ![image](/images/mobile/flutter_ce_package_name_ios.png)

3. Update `CFBundleName` key to the desired name for your app

   ```
   <key>CFBundleName</key>
   <string>YourAppName</string>
   ```

4. Update the `CFBundleIdentifier` key to your bundle identifier:

   ```
   <key>CFBundleIdentifier</key>
   <string>org.yourappname.app</string> 
   ```
   

## Build and release an iOS version

When preparing a release version of your app for publishing it on the
[App Store](https://developer.apple.com/app-store/submissions/){:target="_blank"} and [TestFlight](https://developer.apple.com/testflight/){:target="_blank"}, 
follow the ["Build and release an iOS app"](https://docs.flutter.dev/deployment/ios){:target="_blank"} article.

{% capture ios_build_notice %}
**Improtant notice:** While preparing the app for release, for example, when producing a build archive, you must provide **----no-tree-shake-icons** flag to your build command:
{% endcapture %}
{% include templates/info-banner.md content=ios_build_notice %}

   ```bash
   flutter build ipa --no-tree-shake-icons
   ```
   {: .copy-code}