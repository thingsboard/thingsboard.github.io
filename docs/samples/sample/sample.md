---
layout: docwithnav
title: Guide creation instruction
description: Integration sample
hidetoc: "true"

---

* TOC 
{:toc}

## Environment/Software setup

* First, you need to prepare your environment/software to create an instruction.
* Install Git on your computer, please refer to [Set up Git](https://docs.github.com/en/github/getting-started-with-github/set-up-git) guide.
* [Connect to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
* Fork a repo(refer to [Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide) of the [thingsboard.github.io](https://github.com/thingsboard/thingsboard.github.io) project.

## Create your guide according to the instruction bellow
Create your guide (.md file according to instruction bellow. You may use /docs/user-guide/integrations/sample.md file as a reference).

### Intro/Short summary

This block represents your product and possible integration flow for it, and some additional info that could be useful for customers.

### Widget

Widget/dashboard example for visualization of the data from your device. You can use already existing widgets with needed changes and modifications, same as created from scratch new one.

### Integration flow:

#### Block 1 Device configuration

* [Step 1] List of the devices that can be used with this integration.
* [Step 2] Prerequisites (min prerequisites for devices/device versions/required(mandatory) software).
* [Step 3] Configuration of devices (setup/programmation/configuration).

#### Block 2 ThingsBoard configuration (please use PE only recommendations)

Choose one of the suitable methods of integration according to - Connectivity diagram

##### Integration method

* [Step 4] ThingsBoard Prerequisites (f.e. versions/components/etc. - optional).
* [Step 5] Uplink/Downlink (may be created basic Up/Down -link).
* [Step 6] Integration.
* [Step 7] Uplink/Downlink configuration.

##### API's methods

* [Step 8] Device creation process.
* [Step 9] Key-value format configuration.
* [Step 10] Pulling data process.

##### IoT Gateway method

* [Step 11] Integration guide with all the nuances about the configuration and options that may be used to (secure/non-secure/etc.) may be referred to [IoT Gateway](https://thingsboard.io/docs/iot-gateway/getting-started) page.

#### Block 3 Additional information

* [Step 12] Additional integration information (if required).
* [Step 13] Troubleshooting steps.
  
The integration guide should conform to the example above and should consist of all the additional info and examples with the screenshot/pictures. It may refer to other public sources as an example of setup or configuration but all the steps should be described in the integration guide.
  
All the steps should be numerated and provided with a clear flow of realization with examples in screenshots/pictures.

* Store your integration .md file in path: "/docs/user-guide/integrations/"
* Store all of your images for your guide in path: "/images/user-guide/integrations/YOUR_INTEGRATION_NAME/"

## Add visit-card to ThingsBoard Hardware Partners page.

Edit the "partners.json" file (refers to [ThingsBoard Hardware Partners](https://thingsboard.io/partners/hardware/)), add code like bellow:
  {% highlight bash %}
  {
    "type": "hardware",
    "program": "",
    "name": "How to create a guide",
    "logo": "thingsboard_blue.svg",
    "links": {
        "Site": {
            "href": "https://thingsboard.io/",
            "target": "_blank"
        },
        "Integration guide": {
            "href": "/docs/user-guide/integrations/sample/"
        }
    },
    "blurb": "This guide will help you to create a guide about your hardware integration to the ThingsBoard."
  }
  {% endhighlight %}
        Where:
        * "name" - Name of your Integration visit-card.
        * "logo" - Logo for your Integration visit-card (logo file should be added to the path "images/partners").
        * "href"("Site") - Link to your site.
        * "href"("Integration guide") - path to your integration guide (.md file).
        * "blurb" - Short description/presentation of your guide(Integration).

## Commit and Pull

  * [Step 1] [Push changes to your fork](https://thingsboard.io/docs/user-guide/contribution/how-to-contribute/#push-changes-to-your-fork).
  * [Step 2] [Create Pull Request](https://thingsboard.io/docs/user-guide/contribution/how-to-contribute/#create-pull-request).
  * [Step 3] Wait until your pull request would be merged.

If you'll have any additional questions, please [Contact us](https://thingsboard.io/docs/contact-us/) for further support.