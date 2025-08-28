{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% assign appRepo = "https://github.com/thingsboard/flutter_thingsboard_pe_app.git" %}
{% assign appProject = "flutter_thingsboard_pe_app" %}
{% assign cloudApp = "[ThingsBoard Cloud](https://thingsboard.cloud/signup)" %}
{% assign cloudEndpoint = "https://thingsboard.cloud" %}
{% assign flutterAppVer = site.release.pe_flutter_app_ver %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% assign appRepo = "https://github.com/thingsboard/flutter_thingsboard_app.git" %}
{% assign appProject = "flutter_thingsboard_app" %}
{% assign cloudApp = "[Live Demo](https://demo.thingsboard.io/signup)" %}
{% assign cloudEndpoint = "https://demo.thingsboard.io" %}
{% assign flutterAppVer = site.release.ce_flutter_app_ver %}
{% endif %}

* TOC
{:toc}

Welcome! This guide will walk you through building and setting up a custom {{appPrefix}} mobile application from scratch for your own instance of the {{appPrefix}} platform.

**Before you begin:** Choose an appropriate mobile app version for your {{appPrefix}} platform version using the [compatibility table](/docs/{% if docsPrefix == 'pe/' %}pe/{% endif %}mobile/#compatibility-table). Using incompatible versions may cause sign-in issues or unexpected behavior.

## Prerequisites

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
- You will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/choose-region/){:target="_blank"} server.
The alternative option is to install ThingsBoard PE using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.
{% else %}  
- You will need to have access to ThingsBoard. The easiest way is to use [Live Demo](https://demo.thingsboard.io/signup){:target="_blank"}. 
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/installation-options/){:target="_blank"}.
{% endif %}

- Prepare the environment for building your {{appPrefix}} mobile application. Install the appropriate Flutter SDK version for your app version from the [compatibility table](/docs/{% if docsPrefix == 'pe/' %}pe/{% endif %}mobile/#compatibility-table) by following [these instructions](https://flutter.dev/docs/get-started/install){:target="_blank"}.
- For the best development experience and performance, we also recommend configuring your IDE (such as Visual Studio Code) using [these guidelines](https://flutter.dev/docs/get-started/editor){:target="_blank"}.
- You can also check out the documentation on how to [write your first Flutter app](https://flutter.dev/docs/get-started/test-drive){:target="_blank"}.

## Step 1: Create a bundle in the Mobile center

The [Mobile center](/docs/{{docsPrefix}}mobile-center/mobile-center/){:target="_blank"} is your control hub for creating, configuring, and managing mobile applications for your {{appPrefix}} instance. 
It allows you to quickly launch a custom {{appPrefix}} mobile application tailored to your platform.

<b><font size="4">Create a new bundle</font></b>

A [bundle](/docs/{{docsPrefix}}mobile-center/mobile-center/#bundle){:target="_blank"} contains both your Android and/or iOS app configurations — including [OAuth 2.0](/docs/{{docsPrefix}}user-guide/oauth-2-support/){:target="_blank"} settings {% if docsPrefix == null %}and [layout](/docs/mobile-center/mobile-center/#layout){:target="_blank"} preferences{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}, [layout](/docs/pe/mobile-center/mobile-center/#layout){:target="_blank"} preferences, and [self registration](/docs/pe/mobile-center/mobile-center/#self-registration){:target="_blank"} options{% endif %} — all in one place for easier setup.

Add a new bundle: 
- Navigate to the "**Mobile center**" page.
- On the "**Bundle**" tab, click the "**+ Add bundle**" button in the upper-right corner of the window. 

The bundle creation window will open.

{% assign addNewBundleCE = '
    ===
        image: https://img.thingsboard.io/mobile-center/add-new-bundle-1-ce.png,
        title: To add a new bundle, navigate to the "**Mobile center**" page and, on the "**Bundle**" tab, click the "**+ Add bundle**" button in the upper-right corner of the window.
'
%}

{% assign addNewBundlePE = '
    ===
        image: https://img.thingsboard.io/mobile-center/add-new-bundle-1-pe.png,
        title: To add a new bundle, navigate to the "**Mobile center**" page and, on the "**Bundle**" tab, click the "**+ Add bundle**" button in the upper-right corner of the window.
'
%}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=addNewBundlePE %}
{% else %}  
{% include images-gallery.liquid imageCollection=addNewBundleCE %}
{% endif %}

<br><b><font size="4">Basic settings</font></b>

Enter the **bundle name** and choose the **mobile app platform(s)** — **Android** or **iOS** — then click "**Create new**" in the corresponding section and proceed with the next steps:

- Enter the **application package** name.
- An **Application Secret** will be generated automatically (you can also set your own).
- Set the **Published** application status – application is ready for release.
- (Optional) Specify minimum and latest app versions + release notes.
- Add **store information**:
    - **Android**: **Google Play Store link** and **SHA256 certificate fingerprints**.
    - **iOS**: **App Store link** and **App ID**.
- Click "**Add**" to save and continue.

Then click "**Next**".

{% assign addNewBundleCE2 = '
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-2-ce.png,
        title: **Android Application**. Enter the **application package** name. Remember autogenerated "**Application Secret**" or input your own. Specify application statuses. Optionally, specify the minimum and latest application versions along with release notes for each. Specify store information: link to the ThingsBoard PE Mobile Application in the Google Play Store, and **SHA256 certificate fingerprints**. Click "**Add**".
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-3-ce.png,
        title: **iOS Application**. Enter the **application package** name. Remember autogenerated "**Application Secret**" or input your own. Specify application statuses. Optionally, specify the minimum and latest application versions along with release notes for each. Specify store information: link to the ThingsBoard PE Mobile Application in the App Store, and **App ID**. Click "**Add**".
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-4-ce.png,
        title: Click "**Create new**" in the appropriate section (Android Application or iOS Application).
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-5-ce.png,
        title: **Android Application**. Enter the **application package** name. Remember autogenerated "**Application Secret**" or input your own. Specify application statuses. Optionally, specify the minimum and latest application versions along with release notes for each. Specify store information: link to the ThingsBoard PE Mobile Application in the Google Play Store, and **SHA256 certificate fingerprints**. Click "**Add**".
'
%}

{% assign addNewBundlePE2 = '
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-2-pe.png,
        title: **Android Application**. Enter the **application package** name. Remember autogenerated "**Application Secret**" or input your own. Specify application statuses. Optionally, specify the minimum and latest application versions along with release notes for each. Specify store information: link to the ThingsBoard PE Mobile Application in the Google Play Store, and **SHA256 certificate fingerprints**. Click "**Add**".
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-3-pe.png,
        title: **iOS Application**. Enter the **application package** name. Remember autogenerated "**Application Secret**" or input your own. Specify application statuses. Optionally, specify the minimum and latest application versions along with release notes for each. Specify store information: link to the ThingsBoard PE Mobile Application in the App Store, and **App ID**. Click "**Add**".
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-4-pe.png,
        title: Click "**Create new**" in the appropriate section (Android Application or iOS Application).
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-5-pe.png,
        title: **Android Application**. Enter the **application package** name. Remember autogenerated "**Application Secret**" or input your own. Specify application statuses. Optionally, specify the minimum and latest application versions along with release notes for each. Specify store information: link to the ThingsBoard PE Mobile Application in the Google Play Store, and **SHA256 certificate fingerprints**. Click "**Add**".
'
%}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=addNewBundlePE2 %}
{% else %}  
{% include images-gallery.liquid imageCollection=addNewBundleCE2 %}
{% endif %}

<br><b><font size="4">[Optional]</font></b>

Configure authentication in the {{appPrefix}} mobile app using external [OAuth 2.0](/docs/{{docsPrefix}}user-guide/oauth-2-support/){:target="_blank"} providers, {% if docsPrefix == null %} and configure the [layout](/docs/{{docsPrefix}}mobile-center/mobile-center/#layout){:target="_blank"} for quick access to the features and dashboards you use most frequently{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}, configure the [layout](/docs/{{docsPrefix}}mobile-center/mobile-center/#layout){:target="_blank"} for quick access to the features and dashboards you use most frequently and customize the [self registration](/docs/{{docsPrefix}}mobile-center/mobile-center/#self-registration){:target="_blank"} page{% endif %} for your new customers.

{% assign addNewBundleCE3 = '
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-6-ce.png,
        title: Configure authentication in the {{appPrefix}} mobile app using external **OAuth 2.0** providers. Then click "**Next**" to continue.
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-7-ce.png,
        title: Configure the **layout** for quick access to the features and dashboards you use most often. Add new menu items, customize icons and labels, and reorganize the navigation menu of the ThingsBoard PE mobile app to fit your needs. Click "**Add**" to finalize adding the bundle.
'
%}

{% assign addNewBundlePE3 = '
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-6-pe.png,
        title: Configure authentication in the {{appPrefix}} mobile app using external **OAuth 2.0** providers. Then click "**Next**" to continue.
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-7-pe.png,
        title: Configure the **layout** for quick access to the features and dashboards you use most often. Add new menu items, customize icons and labels, and reorganize the navigation menu of the ThingsBoard PE mobile app to fit your needs. Click "**Next**" to continue.
    ===
        image: https://img.thingsboard.io/mobile/getting-started/add-new-bundle-8-pe.png,
        title: Customize the **self registration** page for your new customers. Click "**Add**" to finalize adding the bundle.
'
%}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=addNewBundlePE3 %}
{% else %}
{% include images-gallery.liquid imageCollection=addNewBundleCE3 %}
{% endif %}

Click "**Add**" to finalize adding the bundle.

<br><b><font size="4">Configuration dialog</font></b>

After adding the bundle, a dialog window will appear with step-by-step instructions to guide you through the next phase of setup and deployment.

Follow these steps carefully to successfully configure and deploy your custom {{appPrefix}} mobile application.

{% capture 1_7_config_tip %}
**Note: Available from ThingsBoard 4.2 and mobile app version 1.7**

Starting with version 1.7 app version and 4.2 platform version, we've significantly improved the app configuration mechanism. Now you can download a configuration file directly from the platform, place it in the root directory of your custom application's code, and you're ready to go. 

When using 1.7 app version with pre 4.2 platform version, config file must be created manually, please follow [this github ticket](https://github.com/thingsboard/flutter_thingsboard_pe_app/issues/263#issuecomment-3103099009) for the instructions. 

**Important:** When building or running your application, add the `--dart-define-from-file configs.json` flag to your Flutter commands. 

You can maintain multiple configuration files by using different names and passing the appropriate file name to the `--dart-define-from-file` flag.
{% endcapture %}
{% include templates/info-banner.md content=1_7_config_tip %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
![image](https://img.thingsboard.io/mobile/getting-started/add-new-bundle-11-pe.png)
{% else %}  
![image](https://img.thingsboard.io/mobile/getting-started/add-new-bundle-11-ce.png)
{% endif %}

<br>
Finnally, depending on your mobile platform (Android or iOS), you should see a result similar to the following:

<br>

<div style="display: flex; flex-direction: row;">
    <div style="display: flex; flex-direction: column; align-items: center;">
        <img width="" src="https://img.thingsboard.io/mobile/{{docsPrefix}}android-app-login.png" title="Android login screen" alt="Android login screen example">
        <span style="margin-top: 16px; font-size: 90%; color: #6c757d;">Android</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <img width="" src="https://img.thingsboard.io/mobile/{{docsPrefix}}ios-app-login.png" title="iOS login screen" alt="iOS login screen example">
        <span style="margin-top: 16px; font-size: 90%; color: #6c757d;">iOS</span>
    </div>
</div>

{% capture run_tip %}
**Tip:** The first time you run on a physical device, it can take a while to load.
Afterward, you can use hot reload for quick updates.

**Save** also performs a hot reload if the app is running.
When running an app directly from the console using `flutter run`, enter `r` to perform hot reload.
{% endcapture %}
{% include templates/info-banner.md content=run_tip %}

## Step 2. [Optional] Configure push notifications

Our system leverages Firebase to send notifications from ThingsBoard instance directly to mobile application.
This setup requires each platform tenant to configure Firebase specifically for their account to begin the distribution of notifications to their mobile app.

<br><font size="5">Step 2.1 Create Firebase project</font>

Next, we will walk through step-by-step how to create a Firebase project, and within it, we will generate a private key. This key is required for securely connecting your ThingsBoard instance to Firebase services. 

{% capture difference %}
**Please note:**
for ThingsBoard CE, only the system administrator can configure mobile settings. For ThingsBoard PE - the tenant can use the system administrator&#39;s configuration or specify their own.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

So let&#39;s get started:

{% assign firebaseProjectCE = '
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-1-pe.png,
        title: Sign in to your [Firebase](https://console.firebase.google.com/){:target="_blank"} account. Once you&#39;re in, click the "Create a project" button;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-2-pe.png,
        title: Enter your desired project name in the field provided, then click "Continue";
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-3-pe.png,
        title: Next up is deciding on Google Analytics for your project. You have the option to keep it enabled or disable it if you prefer not to use it. Once you&#39;ve made your choice, click "Continue";
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-4-pe.png,
        title: After setting up Google Analytics, confirm your project creation by clicking the "Create project" button;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-5-pe.png,
        title: Your Firebase project is now ready. Click "Continue" to open the Firebase project control panel;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-6-pe.png,
        title: In the menu on the left, go to "Project Overview" -> "Project settings" page;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-7-pe.png,
        title: In the "Project settings" page, switch over to the "Cloud Messaging" tab. Here, ensure the Firebase Cloud Messaging API is enabled to use messaging features;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-8-pe.png,
        title: Head over to the "Service accounts" tab next. Within the "Admin SDK configuration snippet", select the "Java" section. Then, click on the "Generate new private key" button. This action will generate a private key for your service account - crucial for secure server communication;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-9-pe.png,
        title: Confirm the generation of your private key by clicking on the "Generate key" button. Keep this key safe, as you&#39;ll need it for the ThingsBoard server-side operations;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-10-ce.png,
        title: Sign in to ThingsBoard as a system administrator, open the "Settings" page and navigate to the "Notifications" tab. In the "Mobile settings" section, upload the private key file you generated in the Firebase project and click "Save" to finalize the configuration.
'
%}

{% assign firebaseProjectPE = '
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-1-pe.png,
        title: Sign in to your [Firebase](https://console.firebase.google.com/){:target="_blank"} account. Once you&#39;re in, click the "Create a project" button;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-2-pe.png,
        title: Enter your desired project name in the field provided, then click "Continue";
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-3-pe.png,
        title: Next up is deciding on Google Analytics for your project. You have the option to keep it enabled or disable it if you prefer not to use it. Once you&#39;ve made your choice, click "Continue";
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-4-pe.png,
        title: After setting up Google Analytics, confirm your project creation by clicking the "Create project" button;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-5-pe.png,
        title: Your Firebase project is now ready. Click "Continue" to open the Firebase project control panel;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-6-pe.png,
        title: In the menu on the left, go to "Project Overview" -> "Project settings" page;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-7-pe.png,
        title: In the "Project settings" page, switch over to the "Cloud Messaging" tab. Here, ensure the Firebase Cloud Messaging API is enabled to use messaging features;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-8-pe.png,
        title: Head over to the "Service accounts" tab next. Within the "Admin SDK configuration snippet", select the "Java" section. Then, click on the "Generate new private key" button. This action will generate a private key for your service account - crucial for secure server communication;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-9-pe.png,
        title: Confirm the generation of your private key by clicking on the "Generate key" button. Keep this key safe, as you&#39;ll need it for the ThingsBoard server-side operations;
    ===
        image: https://img.thingsboard.io/mobile/pe/firebase-new-project-10-pe.png,
        title: Sign in to your ThingsBoard instance and open the "Settings" page. Navigate to the "Notifications" tab, and uncheck the "Use system mobile settings" box (if you log in as a tenant) in the "Mobile settings" section. Here, upload the private key file you generated in the Firebase project and click "Save" to finalize the configuration.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=firebaseProjectPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=firebaseProjectCE %}
{% endif %}

<br><font size="5">Step 2.2 Add Firebase to your mobile application</font>

To integrate Firebase into the mobile application, you&#39;ll need to complete the **initial two steps** outlined in the ["Add Firebase to your Flutter app"](https://firebase.google.com/docs/flutter/setup) guide available at Firebase's official documentation.

<br><font size="4">[Only for IOS] Apple app configuration</font>

Upload **APNs authentication key** to Firebase.

- First, create APNs authentication key in the [Apple Developer Member Center](https://developer.apple.com/membercenter/index.action){:target="_blank"} using [Apple&#39;s official documentation](https://developer.apple.com/help/account/manage-keys/create-a-private-key/){:target="_blank"};
- Inside your [Firebase](https://console.firebase.google.com/){:target="_blank"} project, go to the "Cloud Messaging" tab of the "Project Settings" page. Scroll down and found "Apple app configuration" section;
- In "APNs authentication key" click the "Upload" button;
- Add APNs authentication key and enter "Key ID" and "Team ID" in the corresponding fields;
- Then click "Upload" button.

{% assign APNsAuthenticationKey = '
    ===
        image: https://img.thingsboard.io/mobile/apple-app-configuration-1.png,
        title: Inside your [Firebase](https://console.firebase.google.com/){:target="_blank"} project, go to the "Cloud Messaging" tab of the "Project Settings" page. Scroll down and found "Apple app configuration" section;
    ===
        image: https://img.thingsboard.io/mobile/apple-app-configuration-2.png,
        title: In "APNs authentication key" section, click the "Upload" button;
    ===
        image: https://img.thingsboard.io/mobile/apple-app-configuration-3.png,
        title: Create "APNs authentication key" in the [Apple Developer Member Center](https://developer.apple.com/membercenter/index.action){:target="_blank"} using [Apple&#39;s official documentation](https://developer.apple.com/help/account/manage-keys/create-a-private-key/){:target="_blank"}. Now add this key and enter "Key ID" and "Team ID" in the corresponding fields. Then click "Upload" button;
    ===
        image: https://img.thingsboard.io/mobile/apple-app-configuration-4.png,
        title: APNs authentication key is uploaded.
'
%}

The APNs authentication key is uploaded.

{% include images-gallery.liquid imageCollection=APNsAuthenticationKey %}

<br><font size="5">Step 2.3 Check project configuration</font>

After successfully completing these steps, make sure that your project contains the following file:

- If your ThingsBoard mobile application is intended for iOS:

```text
ios/Runner/GoogleService-Info.plist
```

- If your ThingsBoard mobile application is intended for Android:

```text
android/app/google-services.json
```
{% capture difference %}
**Please note:**
if the **{{appProject}}** project is currently running, please stop it and proceed with a rebuild.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To confirm that Firebase has been integrated properly, run your application. 

```
flutter run
```
{:.copy-code}

If everything is configured correctly, the notifications menu in your mobile application should be active, as shown in the screenshot below.

<br><object width="30%" data="https://img.thingsboard.io/mobile/{{docsPrefix}}mobile-notifications.png"></object>

Learn more about **notifications** and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"}.

## Step 3. [Optional] Build and release mobile application

If you need to **build and release** {{appPrefix}} mobile application for iOS or Android, please refer to [this guide](/docs/{{docsPrefix}}mobile/release/){:target="_blank"}.

{% if docsPrefix != 'pe/' %}
## Live demo app

To be familiar with common app features try out our **ThingsBoard Live mobile application** available on Google Play and App Store.

<br>

<div class="mobile-market-badges">
    <a id="Products_MobApp_GetStart_GooglePlay" 
       href="https://play.google.com/store/apps/details?id=org.thingsboard.demo.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" 
       target="_blank"
       class="gtm_button">
        <img src="https://img.thingsboard.io/mobile/get-it-on-google-play.png" alt="Get it on Google Play icon">
    </a>
    <a id="Products_MobApp_GetStart_AppStore" 
       href="https://apps.apple.com/us/app/thingsboard-live/id1594355695?itsct=apps_box_badge&amp;itscg=30200" 
       target="_blank"
       class="gtm_button">
        <img src="https://img.thingsboard.io/mobile/download-on-the-app-store.png" alt="Download on the App Store icon">
    </a>
</div>

{% endif %}

## Troubleshooting

If you're running into issues while building or running your mobile application, here's a detailed guide to help you resolve the most common problems.

### App won&#39;t build

{{appPrefix}} mobile app supports specific Flutter versions. Our release isn&#39;t always aligned with Flutter&#39;s official releases, so a newer Flutter version may not yet be compatible.

> Always use the exact Flutter version specified for your app version. Otherwise, builds might fail or behave unexpectedly.

<b><font size="4">How to check the required Flutter version?</font></b>

{% if docsPrefix == null %}
1. Check the release notes at the following [link](https://github.com/thingsboard/flutter_thingsboard_app/releases){:target="_blank"}.
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
1. Check the release notes at the following [link](https://github.com/thingsboard/flutter_thingsboard_pe_app/releases){:target="_blank"}.
{% endif %}

Example:

<object width="70%" data="https://img.thingsboard.io/mobile/getting-started/check-flutter-version.png"></object>

<br>

**2. Check the `.fvmrc` file in the project root:**

You&#39;ll find a file like this:

```json
{
  "flutter": "3.24.4"
}
```

That means we&#39;re currently using Flutter 3.24.4.

<br><b><font size="4">Installing the correct flutter version</font></b>

**Option 1**: Use [FVM](https://fvm.app/){:target="_blank"} (Flutter version manager) **[Recommended]**

**What is FVM?**

FVM helps you manage multiple Flutter versions across projects. It lets you manage multiple versions of Flutter and easily switch between them per project. 
This is super useful when testing new Flutter releases or contributing to different projects.

To install FVM follow the [official installation guide](https://fvm.app/documentation/getting-started/installation){:target="_blank"}.

Usage: Use Flutter commands prefixed with `fvm`, like this:

Examples:

```bash
fvm flutter run
fvm flutter build apk
```

**Option 2**: Manually set the global Flutter version **[Not recommended]**

If you only work on one project, you can manually set the global Flutter version:

```bash
cd ~/dev/flutter
git checkout 3.24.4
```
{:.copy-code}

### Warning "Push notifications are not configured"

If you see a warning like:

> "**Push notifications are not configured**"

This usually means Firebase wasn&#39;t set up correctly.

**Fix:**

> **Note:** You must have completed [Step 2](/docs/mobile/getting-started/#step-2-optional-configure-push-notifications){:target="_blank"} in the setup guide first.

<b>1.</b> Delete the file: `lib/firebase_options.dart`
<br><b>2.</b> Re-run the FlutterFire CLI:

```bash
flutterfire configure
```
{:.copy-code}

<b>3.</b> Ensure the `firebase_options.dart` file is regenerated and contains configuration for Android and iOS, or both.

### Dashboard not loads

The mobile app doesn&#39;t really load the dashboard itself — the ThingsBoard platform handles all the real loading.
The mobile app simply opens a WebView, but the app and the platform must be able to communicate with each other.

**First, check the log**. Look for this log message:

```bash
Invoked tbMobileReadyHandler
```

- **If it&#39;s missing, the platform isn&#39;t signaling the app that it&#39;s ready:** In that case, open an issue in the [ThingsBoard platform repository](https://github.com/thingsboard/thingsboard){:target="_blank"}.

- **If you see the log but the dashboard still won&#39;t load:**{% if docsPrefix == null %}In that case, open an issue in the [CE mobile repository](https://github.com/thingsboard/flutter_thingsboard_app/issues){:target="_blank"}.{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}In that case, open an issue in the [PE mobile repository](https://github.com/thingsboard/flutter_thingsboard_pe_app/issues){:target="_blank"}.{% endif %}

*Be as detailed as possible and include credentials to your instance privately via ThingsBoard Support (never post publicly).*

### Can&#39;t sign in?

[Check the compatibility matrix](/docs/{{docsPrefix}}/mobile/){:target="_blank"} between your platform and mobile app versions. Mismatches here are the most common cause of sign-in issues.

If versions are aligned and you&#39;re still stuck:
{% if docsPrefix == null %}
- [Open a GitHub issue](https://github.com/thingsboard/flutter_thingsboard_app/issues){:target="_blank"}.
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
- [Open a GitHub issue](https://github.com/thingsboard/flutter_thingsboard_pe_app/issues){:target="_blank"}.
{% endif %}
- Include:
  - Platform version 
  - Mobile app version 
  - Logs/screenshots 
  - Device details (OS, version)

There&#39;s a compatibility matrix between the TB platform and mobile app versions: [Check it here](/docs/{{docsPrefix}}/mobile/){:target="_blank"}

It&#39;s the most common reason for sign-in issues.

If your versions are aligned and it still doesn&#39;t work — [open a GitHub issue](https://github.com/thingsboard/flutter_thingsboard_app/issues){:target="_blank"} and include all the relevant details.

### Anything else?

These are the most frequent issues — but if you&#39;re facing something new:

{% if docsPrefix == null %}
[Open a GitHub issue](https://github.com/thingsboard/flutter_thingsboard_app/issues){:target="_blank"}. Include all the context you can (screenshots, logs, versions, platform setup, etc.)
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
[Open a GitHub issue](https://github.com/thingsboard/flutter_thingsboard_pe_app/issues){:target="_blank"}. Include all the context you can (screenshots, logs, versions, platform setup, etc.)
{% endif %}

We&#39;ll do our best to help!

## Next steps

- [Customize your app](/docs/{{docsPrefix}}mobile/customization){:target="_blank"} - Learn how to customize your {{appPrefix}} Mobile Application to meet your requirements.
- [Publish your app](/docs/{{docsPrefix}}mobile/release){:target="_blank"} - Learn how to build release and publish your version of {{appPrefix}} Mobile Application to Google Play or App Store.
