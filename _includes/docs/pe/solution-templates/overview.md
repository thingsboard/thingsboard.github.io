
* TOC 
{:toc}
  
ThingsBoard Cloud provides convenient IoT solution templates to reduce time-to-market for your IoT products.
The template includes interactive dashboards, processing logic, sample devices, users and all other required [entities](/docs/paas/user-guide/entities-and-relations/). 
You can treat template as a complete PoC/MVP. 

This guide covers basic operations with solution templates.

{% include templates/solution-templates.md %}

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