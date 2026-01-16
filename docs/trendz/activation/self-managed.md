---
layout: docwithnav-trendz
title: How To Activate Self-Hosted Trendz
description: How To Activate Self-Hosted Trendz

login:
  0:
    image: /images/trendz/activation/self-hosted/login-1.png
    title: 'Open the <b>ThingsBoard License Portal</b> and sign in with your ThingsBoard account as a sysadmin.'
  1:
    image: /images/trendz/activation/self-hosted/login-2.png
    title: 'Go to the <b>Subscriptions</b> tab or <b>Perpetual licenses</b> tab (depends on your subscription type).'

enable:
  0:
    image: /images/trendz/activation/self-hosted/enable-1.png
    title: 'In the list of licensed installations, select the ThingsBoard instance for which you want to enable Trendz and click on it to open the instance profile'
  1:
    image: /images/trendz/activation/self-hosted/enable-2.png
    title: 'Click <b>Manage Add-ons</b>.'
  2:
    image: /images/trendz/activation/self-hosted/enable-3.png
    title: 'Scroll down and enable the <b>Trendz Analytics</b> checkbox.'
  3:
    image: /images/trendz/activation/self-hosted/enable-4.png
    title: 'Click <b>Next</b> in the lower right corner.'

complete-payment:
  0:
    image: /images/trendz/activation/self-hosted/complete-payment.png
    title: 'On the Summary screen, verify the selected plan and full price. If everything is correct, click <b>Update</b> and complete the payment.'

pricing:
  0:
    image: /images/trendz/activation/self-hosted/self-managed-1.png
    title: 'You can find out up-to-date prices on Trendz add-on in the <b>pricing page</b>.'
  1:
    image: /images/trendz/activation/self-hosted/self-managed-2.png
    title: 'Calculate your pricing, based on your ThingsBoard self-managed setup.'
---

* TOC
{:toc}

This section describes how to activate Trendz for a ThingsBoard self-hosted environment via the License Portal.

## Activation Steps

### Step 1. Log in to the License Portal

* Open the [ThingsBoard License Portal](https://license.thingsboard.io/login).
* Sign in with your ThingsBoard account as a sysadmin.
* Go to the **Subscriptions** tab or **Perpetual licenses** tab (depends on your subscription type).

{% include images-gallery.html imageCollection="login" %}

### Step 2. Select Instance and Enable Trendz Add-on

* In the list of licensed installations, select the ThingsBoard instance for which you want to enable Trendz.
* Click on it to open the instance profile.
* Click **Manage Add-ons**.
* Scroll down and enable the **Trendz Analytics** checkbox.
* Click **Next** in the lower right corner.

{% include images-gallery.html imageCollection="enable" %}

### Step 3. Review Summary and Complete Payment

* On the Summary screen, verify the selected plan and full price.
* If everything is correct, click **Update** and complete the payment.

{% include images-gallery.html imageCollection="complete-payment" %}

### Step 4. Restart ThingsBoard

Finally, it's necessary to restart ThingsBoard service, to fetch the newest subscription information.

## Pricing

You can find out up-to-date prices on Trendz add-on in the [pricing page](/pricing/?section=thingsboard-pe-options&product=thingsboard-pe).

{% include images-gallery.html imageCollection="pricing" %}

If you have any questions about anything, just **[contact us](/docs/contact-us)** - our team will help you find the best solution tailored to your requirements.

## Next Steps

* Follow our [Installation guide](/docs/trendz/install/installation-options) to install Trendz on your environment.
* Follow our [Getting Started guide](/docs/trendz/getting-started) to explore all Trendz capabilities.
* Visit our [Documentation](/docs/trendz) to explore all Trendz capabilities and features.
