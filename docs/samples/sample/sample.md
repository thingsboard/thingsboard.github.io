---
layout: docwithnav
title: Guide creation instruction
description: Integration sample
hidetoc: "true"

---

* TOC 
{:toc}

## Intro/Short summary

This block represents your product and possible integration flow for it, and some additional info that could be useful for customers.

## Widget

Widget/dashboard example for visualization of the data from your device. You can use already existing widgets with needed changes and modifications, same as created from scratch new one.

## Integration flow:

### Block 1 Device configuration

* [Step 1] List of the devices that can be used with this integration.
* [Step 2] Prerequisites (min prerequisites for devices/device versions/required(mandatory) software).
* [Step 3] Configuration of devices (setup/programmation/configuration).

### Block 2 ThingsBoard configuration (please use PE only recommendations)

Choose one of the suitable methods of integration according to - Connectivity diagram

{% include mermaid-graph.html
graphId="connectivityGraph"
file="resources/connectivity.mm"
links-json="resources/connectivity-links.json" %}

#### Integration method

* [Step 4] ThingsBoard Prerequisites (f.e. versions/components/etc. - optional).
* [Step 5] Uplink/Downlink (may be created basic Up/Down -link).
* [Step 6] Integration.
* [Step 7] Uplink/Downlink configuration.

#### API's methods

* [Step 8] Device creation process.
* [Step 9] Key-value format configuration.
* [Step 10] Pulling data process.

#### IoT Gateway method

* [Step 11] Integration guide with all the nuances about the configuration and options that may be used to (secure/non-secure/etc.) may be referred to [IoT Gateway](https://thingsboard.io/docs/iot-gateway/getting-started) page.

### Block 3 Additional information

* [Step 12] Additional integration information (if required).
* [Step 13] Troubleshooting steps.
  
The integration guide should conform to the example above and should consist of all the additional info and examples with the screenshot/pictures. It may refer to other public sources as an example of setup or configuration but all the steps should be described in the integration guide.
  
All the steps should be numerated and provided with a clear flow of realization with examples in screenshots/pictures.

* Store your integration .md file in path: "/docs/user-guide/integrations/"
* Store all of your images for your guide in path: "/images/user-guide/integrations/YOUR_INTEGRATION_NAME/"

## Feedback & Contact Us for your integration

Here you can put the feedback form or assistance page which may help your users with the integration.