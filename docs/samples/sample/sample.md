---
layout: docwithnav
assignees:
- ddiachenko
title: YOUR_INTEGRATION_GUIDE
description: Integration sample
hidetoc: "true"

---

{% capture domain_owner_note %}
**Note**

In this guide you may also mention (refer to) any other public source as an example of setup or configuration. However, all the steps has to fit instructions below.

All the steps should be numerated and provided with a clear flow of realization with examples in screenshots/pictures.

* Store your integration .md file in a directory: "/docs/user-guide/integrations/"
* Store all of your images for your guide in a separate directory of your integration: "/images/user-guide/integrations/YOUR_INTEGRATION_NAME/"
{% endcapture %}

{% include templates/info-banner.md content=domain_owner_note %}

* TOC 
{:toc}

## Intro/Short summary

This block represents your product and possible integration flow for it, and some additional info that could be useful for customers.

## Widget

Widget/dashboard example for visualization of the data from your device. You can use already existing widgets with needed changes and modifications, same as created from scratch new one.

## Integration flow:

### Block 1 Device configuration

* [Step 1.1] List of the devices that can be used with this integration.
* [Step 1.2] Prerequisites (min prerequisites for devices/device versions/required(mandatory) software).
* [Step 1.3] Configuration of devices (setup/programmation/configuration).

### Block 2 ThingsBoard configuration (please use PE only recommendations)

Choose one of the suitable methods of integration according to Connectivity diagram below

<br>
<br>

<object width="80%" data="/images/connectivity.svg"></object>

#### Integration method

* [Step 2.1] ThingsBoard Prerequisites (e.g. versions/components/etc. - optional).
* [Step 2.2] Uplink/Downlink (may be created basic Up/Down -link).
* [Step 2.3] Integration.
* [Step 2.4] Uplink/Downlink configuration.

#### or API methods

* [Step 2.1] Device creation process.
* [Step 2.2] Key-value format configuration.
* [Step 2.3] Pulling data process.

#### or IoT Gateway method

* [Step 2.1] Provide detailed and clear steps for IoT Gateway integration. You can refer to [IoT Gateway](/docs/iot-gateway/getting-started/) page.

### Block 3 Additional information

* [Step 3.1] Additional integration information (if required).
* [Step 3.2] Troubleshooting steps.

## Feedback & Contact Us for your integration

Here you can put the feedback form or assistance page which may help your users with the integration.
