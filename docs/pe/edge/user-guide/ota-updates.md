---
layout: docwithnav-pe-edge
assignees:
- ThingsBoard Team
title: Over-the-Air firmware and software updates
description: Over-the-Air firmware and software updates

createFirmware:
    0:
        image: /images/pe/edge/user-guide/ota-update-1-pe.png  
        title: 'Log in to your ThingsBoard Cloud instance with your credentials. 1. Open "OTA updates" menu page. 2. Click "+" icon.'
    1:
        image: /images/pe/edge/user-guide/ota-update-2-pe.png  
        title: '1. Enter the firmware package name. 2. Enter the firmware version number. 3. Enter the version tag (optionally). 4. Select the device profile. 5. Select the firmware package type. 6. Select the file package source 7. Drag-n-Drop firmware file. 8. Click the "Add" button to proceed'
    2:
        image: /images/pe/edge/user-guide/ota-update-3-pe.png  
        title: 'Verify that firmware package has been successfully uploaded'
        
verifyFirmware:
  
    0:
        image: /images/pe/edge/user-guide/ota-update-4-pe.png  
        title: 'Login in to ThingsBoard Edge instance using your credentials. 1. Open "OTA updates" menu page. 2. Veify that firmware package successfully provisioned on the Edge.'

---

* TOC 
{:toc}

## Overview

Edge Over-the-Air updates are designed in the same way, as [Platform (Cloud) OTA Updates](/docs/{{cloudDocsPrefix}}user-guide/ota-updates/).
Please read *Platform* OTA Updates documentation to get knowledge on OTA Updates capability in general.
<br>
<br>
<object data="/images/user-guide/firmware/firmware-anim3.svg"></object>
<br>

## Propagation OTA Packages to Edge

{% capture delete_restrictions %}
**Please note!** <br>
OTA packages are created on the *Platform*. In the current version you can't create, modify or delete them on the **Edge**.<br>
All the OTA firmware and software packages that are created on the Platform are automatically propagated to every **Edge** instance connected to the *Platform*.
{% endcapture %}

{% include templates/info-banner.md content=delete_restrictions %}

## Prerequisites

- ThingsBoard **Edge PE** instance is up and running. 
- A ThingsBoard **Edge PE** connected to your Server instance.

If you have met these prerequisites, let's proceed to the next steps.

## Step 1. Provision OTA package to ThingsBoard repository

{% include images-gallery.html imageCollection="createFirmware" %}

* Log in to your ThingsBoard Cloud instance with your credentials. 1. Open <b>"OTA updates"</b> menu page. 2. Click the <b>"+"</b> icon.
* 1. Enter the firmware package name. 2. Enter the firmware package update version number. 3. Enter the version tag (optionally). 4. Select the device profile. 5. Select the firmware package type. 6. Select the file package source 7. Drag-n-Drop firmware file. 8. Click the <b>"Add"</b> button to proceed.
* Verify that firmware package has been successfully uploaded

## Step 2. Verify OTA package on the Edge

{% include images-gallery.html imageCollection="verifyFirmware" %}

* Login in to ThingsBoard Edge instance using your credentials. 1. Open <b>"OTA updates"</b> menu page. 2. Verify that firmware package successfully provisioned on the Edge.


{% assign docsPrefix = "pe/edge/" %}
{% assign cloudDocsPrefix = "pe/" %}
