---
layout: docwithnav
title: Instruction creation sample
description: Integration sample
hidetoc: "true"

---

* TOC
  {:toc}
  
##Environment/Software preparation
First, you need to prepare your environment/software to create an instruction.
Install Git on your computer, please refer to [Set up Git](https://docs.github.com/en/github/getting-started-with-github/set-up-git) guide.
[Connect to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
Fork a repo(refer to [Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide) of the [thingsboard.github.io](https://github.com/thingsboard/thingsboard.github.io) project.

##Intro/Short summary
This block represents your product and possible integration flow for it, and some additional info that could be useful for customers.
Example of widget that may be used with your devices. Recommendation on creation of the widget or proposes on modification standard widgets.

##Integration flow:
###Block 1 (Device configuration)
####[Step 1] List of the devices that can be used with this integration.

####[Step 2] Prerequisites (min prerequisites for devices/device versions/required(mandatory) software).
####[Step 3] Configuration of devices (setup/programmatic/configuration).

###Block 2 (ThingsBoard configuration (please use PE only recommendations))
Choose one of the suitable method of the integration according to - Connectivity diagram
####Integration method
#####[Step 4] ThingsBoard Prerequisites (f.e. versions/components/etc.).
#####[Step 5] Uplink/Downlink (may be created basic Up/Down -link).
#####[Step 6] Integration.
#####[Step 7] Uplink/Downlink configuration.
####API's methods
#####[Step 8] Device creation process.
#####[Step 9] Key-value format configuration.
#####[Step 10] Pulling data process.
####IoT Gateway method
#####[Step 11] Integration guide with all the nuances about the configuration and options that may be used to (secure/non-secure/etc.).

###Block 3 (Additional information)
####[Step 12] Additional integration information (if required).
####[Step 13] Troubleshooting steps.

Integration guide should conform to the example above and should consist of all the additional info and examples with the screenshot/pictures. It may refer to other public sources as an example of setup or configuration but all the steps should be described in the integration guide.
All the steps should be numerated and provided with the clear flow of realization with examples in screenshots/pictures.

Store your integration .md file at path: "/docs/user-guide/integrations/"
Store all your images at path: "/images/user-guide/integrations/YOUR_INTEGRATION_NAME/resources"

##Commit and Pull
