{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% assign appRepo = "https://github.com/thingsboard/flutter_thingsboard_pe_app.git" %}
{% assign cloudApp = "[ThingsBoard Cloud](https://thingsboard.cloud/signup)" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% assign appRepo = "https://github.com/thingsboard/flutter_thingsboard_app.git" %}
{% assign cloudApp = "[Live Demo](https://demo.thingsboard.io/signup)" %}
{% endif %}

* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic setup of {{appPrefix}} Mobile Application with your {{appPrefix}} platform instance. You will learn how to:

* Get and build Flutter {{appPrefix}} Mobile Application project;
* Customize the list of dashboards displayed on the home screen;
* Customize look of devices by configuring device profiles;
* Configure default device dashboard;
* Configure alarm specific dashboard;
* Configure mobile actions;
* Prepare application for release.

## Prerequisites

Flutter {{appPrefix}} Mobile Application requires Flutter SDK starting from version 2.12.0.
Follow [these](https://flutter.dev/docs/get-started/install) instructions in order to setup Flutter SDK.
For an even better experience we recommend to set up an editor using [these](https://flutter.dev/docs/get-started/editor) instructions.

Flutter {{appPrefix}} Mobile Application is served by {{appPrefix}} platform starting from version 3.3.0.
You will need to have {{appPrefix}} server up and running. The easiest way is to use {{cloudApp}}.
The alternative option is to install {{appPrefix}} using [Installation Guide](/docs/user-guide/install/{{docsPrefix}}installation-options/).

## Step 1. Get Flutter {{appPrefix}} Mobile Application source code

You can get Flutter {{appPrefix}} Mobile Application source code by cloning it from [github repository]({{appRepo}}):

```bash
git clone {{appRepo}}
```
{: .copy-code}

## Step 2. Configure {{appPrefix}} API endpoint

## Step 3. Build and run Mobile Application

## Step 4. Customize list of dashboards

## Step 5. Customize look of devices

## Step 6. Setup default device dashboard

## Step 7. Setup alarm specific dashboard

## Step 8. Configure mobile actions

## Step 9. Prepare for release

## Next Steps

