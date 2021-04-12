---
layout: docwithnav-paas
title: IoT Solution templates overview
description: ThingsBoard IoT Solution templates overview
browse-solution-templates:
    0:
        image: /images/solution-templates/solution-templates-src.png
        title: 'Browse cards with available solution templates by navigating to "Solution templates" menu item.'
    1:
        image: /images/solution-templates/solution-templates-src.png
        title: 'Open description of the template using "Details" button.'
    2:
        image: /images/solution-templates/solution-templates-src.png
        title: 'Install the template using "Install" button. Once solution is installed, you will be automatically forwarded to the main dashboard of the corresponding template, and the instructions dialog will appear.'
    3:
        image: /images/solution-templates/solution-templates-src.png
        title: 'Solution instructions are auto-generated once the template is installed. You may open them using "Instructions" button.'
    4:
        image: /images/solution-templates/solution-templates-src.png
        title: 'Finally, you may delete the solution and all installed resources using "Delete" button.'


install-solution-template:
    0:
        image: /images/solution-templates/solution-templates-src.png
        title: 'Navigate to the "Solution templates" menu item. Locate the template and use "Install" button.'
    1:
        image: /images/solution-templates/solution-template-instructions-src.png
        title: 'Once solution is installed, you will be automatically forwarded to the main dashboard of the corresponding template, and the instructions dialog will appear.'
    2:
        image: /images/solution-templates/solution-templates-src.png
        title: 'Browse the instructions and use "Close" button to start using the solution.'

remove-solution-template:
    0:
        image: /images/solution-templates/solution-templates-src.png

---

* TOC 
{:toc}
  
ThingsBoard Cloud provides convenient IoT solution templates to reduce time-to-market for your IoT products.
The template includes interactive dashboards, processing logic, sample devices, users and all other required [entities](/docs/paas/user-guide/entities-and-relations/). 
You can treat template as a complete PoC/MVP. 

This guide covers basic operations with solution templates.

{% capture paas_only %}
At the moment, Solution Templates are available only in [ThingsBoard Cloud](/products/paas/). Support of solution templates for [ThingsBoard PE](/products/thingsboard-pe/) is scheduled for version 3.3.
{% endcapture %}
{% include templates/info-banner.md content=paas_only %}

## Browse solution templates

As a tenant administrator, you may perform the following actions over solution templates

{% include images-gallery.html imageCollection="browse-solution-templates" showListImageTitles="true" %}

## Install solution template

{% include images-gallery.html imageCollection="install-solution-template" showListImageTitles="true" %}

## Remove solution template

Navigate to the "Solution templates" menu item. Locate the template and use "Delete" button. 
This will delete all [entities](/docs/paas/user-guide/entities-and-relations/) that were created during the installation. 
Please note that entities that you might have created through the solution dashboard (users, devices, etc) will not be deleted automatically.  

{% include images-gallery.html imageCollection="remove-solution-template" %}

## Connect real devices

The template instruction includes information about the payload that solution expects to receive from device to function properly. 
The instruction also contains sample commands to push the data. Those commands use valid credentials of the auto-generated devices.
We recommend to use those commands to get familiar with the solution. Use [How to connect your device?](/docs/paas/getting-started-guides/connectivity/) guide afterwards.