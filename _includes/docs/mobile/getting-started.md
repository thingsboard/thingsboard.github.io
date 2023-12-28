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
  static final thingsBoardApiEndpoint = '{{cloudEndpoint}}';
  
  ...
}

```

{% capture local_endpoint_note %}
**Note:** Do not use `localhost` or `127.0.0.1` host names.<br>
If you are using local {{appPrefix}} installation use alternative ip address/host name accessible within your local network.<br>
You can read [Connecting Flutter application to Localhost](https://medium.com/@podcoder/connecting-flutter-application-to-localhost-a1022df63130){:target="_blank"} for more information.
{% endcapture %}
{% include templates/info-banner.md content=local_endpoint_note %}

## Step 4. Run the app

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

{% if docsPrefix != 'pe/' %}
## Live demo app

To be familiar with common app features try out our ThingsBoard Live mobile application available on Google Play and App Store.

<br>

<div class="mobile-market-badges">
    <a href="https://play.google.com/store/apps/details?id=org.thingsboard.demo.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank">
        <img src="https://img.thingsboard.io/mobile/get-it-on-google-play.png" alt="Get it on Google Play icon">
    </a>
    <a href="https://apps.apple.com/us/app/thingsboard-live/id1594355695?itsct=apps_box_badge&amp;itscg=30200" target="_blank">
        <img src="https://img.thingsboard.io/mobile/download-on-the-app-store.png" alt="Download on the App Store icon">
    </a>
</div>

{% endif %}

## Next Steps

- [Customize your app](/docs/{{docsPrefix}}mobile/customization) - Learn how to customize your {{appPrefix}} Mobile Application to meet your requirements.
- [Publish your app](/docs/{{docsPrefix}}mobile/release) - Learn how to build release and publish your version of {{appPrefix}} Mobile Application to Google Play or App Store.
