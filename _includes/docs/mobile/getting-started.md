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

## Introduction

The goal of this tutorial is to demonstrate the basic setup of {{appPrefix}} Mobile Application with your {{appPrefix}} platform instance. You will learn how to:

* Setup development environment;
* Get application project source code;
* Configure API endpoint to your {{appPrefix}} platform instance;
* Build and run your version of {{appPrefix}} Mobile Application;

## Step 1. Prepare development environment

Flutter {{appPrefix}} Mobile Application requires Flutter SDK starting from version 2.12.0.
Follow [these](https://flutter.dev/docs/get-started/install) instructions in order to setup Flutter SDK.
For an even better experience we recommend to set up an editor using [these](https://flutter.dev/docs/get-started/editor) instructions.

Flutter {{appPrefix}} Mobile Application is served by {{appPrefix}} platform starting from version 3.4.0{% if docsPrefix == 'pe/' %}PE{% endif %}.
You will need to have {{appPrefix}} server up and running. The easiest way is to use {{cloudApp}}.
The alternative option is to install {{appPrefix}} using [Installation Guide](/docs/user-guide/install/{{docsPrefix}}installation-options/).

## Step 2. Get app source code

#### Flutter {{appPrefix}} Mobile Application compatibility table 

Determine the Flutter {{appPrefix}} Mobile Application version according to the version of {{appPrefix}}.

{% if docsPrefix != 'pe/' %}

<table>
    <thead>
        <tr>
          <td style="width: 50%"><b>ThingsBoard version</b></td><td style="width: 50%"><b>Flutter ThingsBoard Mobile Application</b></td><td style="width: 50%"><b>Dart ThingsBoard Client</b></td>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>3.9.0</td>
            <td>1.5.0</td>
            <td>3.0.0</td>
        </tr>
        <tr>
            <td>3.8.1</td>
            <td>1.4.0</td>
            <td>2.0.0</td>
        </tr>
        <tr>
            <td>3.8.0+</td>
            <td>1.3.0</td>
            <td>1.3.0</td>
        </tr>
        <tr>
            <td>3.6.3+</td>
            <td>1.1.0</td>
            <td>1.1.0</td>
        </tr>      
        <tr>
            <td>3.6.2+</td>
            <td>1.0.8</td>
            <td>1.0.8</td>
        </tr>
        <tr>
            <td>3.6.0+</td>
            <td>1.0.7</td>
            <td>1.0.7</td>
        </tr>
        <tr>
            <td>3.5.0+</td>
            <td>1.0.6</td>
            <td>1.0.6</td>
        </tr>
        <tr>
            <td>3.4.2+</td>
            <td>1.0.4</td>
            <td>1.0.4</td>
        </tr>
        <tr>
            <td>3.4.0+</td>
            <td>1.0.3</td>
            <td>1.0.3</td>
        </tr>
    </tbody>
</table>

{% else %}

<table>
    <thead>
        <tr>
          <td style="width: 50%"><b>ThingsBoard PE version</b></td><td style="width: 50%"><b>Flutter ThingsBoard PE Mobile Application</b></td><td style="width: 50%"><b>Dart ThingsBoard PE Client</b></td>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>3.9.0PE</td>
            <td>1.5.0</td>
            <td>3.0.0</td>
        </tr>
        <tr>
            <td>3.8.1PE</td>
            <td>1.4.0</td>
            <td>2.0.0</td>
        </tr>
        <tr>
            <td>3.8.0PE+</td>
            <td>1.3.0</td>
            <td>1.3.0</td>
        </tr>
        <tr>
            <td>3.6.3PE+</td>
            <td>1.1.0</td>
            <td>1.1.0</td>
        </tr>
        <tr>
            <td>3.6.2PE+</td>
            <td>1.0.9</td>
            <td>1.0.9</td>
        </tr>
        <tr>
            <td>3.6.0PE+</td>
            <td>1.0.8</td>
            <td>1.0.8</td>
        </tr>
        <tr>
            <td>3.5.0PE+</td>
            <td>1.0.7</td>
            <td>1.0.7</td>
        </tr>
        <tr>
            <td>3.4.2PE+</td>
            <td>1.0.5</td>
            <td>1.0.5</td>
        </tr>
        <tr>
            <td>3.4.0PE+</td>
            <td>1.0.4</td>
            <td>1.0.4</td>
        </tr>
    </tbody>
</table>


{% endif %}

You can get Flutter {{appPrefix}} Mobile Application source code by cloning it from [github repository]({{appRepo}}):

```bash
git clone -b release/{{flutterAppVer}} {{appRepo}}
```
{: .copy-code}

## Step 3. Configure {{appPrefix}} API endpoint

Open **{{appProject}}** project in your editor/IDE. Edit **lib/constants/app_constants.dart**.

Set value of **thingsBoardApiEndpoint** constant to match api endpoint of your {{appPrefix}} server instance.<br>
In case of {{cloudApp}} set it to `{{cloudEndpoint}}`.

```dart
abstract class ThingsboardAppConstants {
  static const thingsBoardApiEndpoint = '{{cloudEndpoint}}';
  
  ...
}

```

{% capture local_endpoint_note %}
**Note:** Do not use `localhost` or `127.0.0.1` host names.<br>
If you are using local {{appPrefix}} installation use alternative ip address/host name accessible within your local network.<br>
You can read [Connecting Flutter application to Localhost](https://medium.com/@podcoder/connecting-flutter-application-to-localhost-a1022df63130){:target="_blank"} for more information.
{% endcapture %}
{% include templates/info-banner.md content=local_endpoint_note %}

## Step 4. [Optional] Configure push notifications

Our system leverages Firebase to send notifications from ThingsBoard instance directly to mobile application.
This setup requires each platform tenant to configure Firebase specifically for their account to begin the distribution of notifications to their mobile app.

### Step 4.1 Create Firebase project

Next, we will walk through step-by-step how to create a Firebase project, and within it, we will generate a private key. This key is required for securely connecting your ThingsBoard instance to Firebase services. 

{% capture difference %}
**Please note:**
for ThingsBoard CE, only the system administrator can configure mobile settings. For ThingsBoard PE - the tenant can use the system administrator's configuration or specify their own.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

So let's get started:

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

### Step 4.2 Add Firebase to your mobile application

To integrate Firebase into the mobile application, you'll need to complete the **initial two steps** outlined in the ["Add Firebase to your Flutter app"](https://firebase.google.com/docs/flutter/setup) guide available at Firebase's official documentation.

#### [Only for IOS] Apple app configuration

Upload **APNs authentication key** to Firebase.

- First, create APNs authentication key in the [Apple Developer Member Center](https://developer.apple.com/membercenter/index.action){:target="_blank"} using [Apple's official documentation](https://developer.apple.com/help/account/manage-keys/create-a-private-key/){:target="_blank"};
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

### Step 4.3 Check project configuration

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

To confirm that Firebase has been integrated properly, run your application ([Step 5](#step-5-run-the-app)). If everything is configured correctly, the notifications menu in your mobile application should be active, as shown in the screenshot below.

{% assign mobileNotificationsPE = '
    ===
        image: https://img.thingsboard.io/mobile/pe/mobile-notifications-pe.png,
'
%}

{% assign mobileNotificationsCE = '
    ===
        image: https://img.thingsboard.io/mobile/mobile-notifications-ce.png,
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=mobileNotificationsPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=mobileNotificationsCE %}
{% endif %}

<br>
Learn more about **notifications** and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/).

## Step 5. Run the app
Run the app [in the way your IDE describes](https://flutter.dev/docs/get-started/test-drive).

When using terminal run the app with the following command:

```bash
flutter run
```
{: .copy-code}

You should see either Android or iOS output, depending on your device.

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

## Step 6. [Optional] Build and release mobile application

If you need to build and release ThingsBoard Mobile Application for iOS or Android, please refer to [this guide](/docs/{{docsPrefix}}mobile/release/).

{% if docsPrefix != 'pe/' %}
## Live demo app

To be familiar with common app features try out our ThingsBoard Live mobile application available on Google Play and App Store.

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

## Next Steps

- [Customize your app](/docs/{{docsPrefix}}mobile/customization) - Learn how to customize your {{appPrefix}} Mobile Application to meet your requirements.
- [Publish your app](/docs/{{docsPrefix}}mobile/release) - Learn how to build release and publish your version of {{appPrefix}} Mobile Application to Google Play or App Store.
