* TOC
{:toc}

## Overview

The ThingsBoard **Over-the-Air (OTA) Update** feature is a powerful way to remotely manage device firmware or software, reducing the need for manual updates and enabling rapid deployment of enhancements or fixes.

The **Edge OTA Update** feature is designed similarly to the **Platform (Cloud) OTA Update**. As a result, the **Edge OTA Update** packages can be deployed in both Device and Device Profile configurations in the same manner as **Platform** Device and Device Profile configurations.
Please refer to the [Platform OTA Updates documentation](/docs/{{cloudDocsPrefix}}user-guide/ota-updates/){: target="_blank"} for a general understanding of the **OTA Update** feature.

## Provisioning OTA Packages to the ThingsBoard Repository

All **OTA firmware and software packages** are created on the Platform and **automatically propagated** to each **Edge** instance connected to it. No additional actions are required from the Tenant administrator or User.

{% capture local-deployment %}
**Please note!** <br>
The **OTA Update packages** are created on the **ThingsBoard Platform**. It is **not possible to create, modify, or delete** the OTA Update packages on the **Edge** instance.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}
{% include images-gallery.html imageCollection="cannot-edit-on-edge" %}

### Create the OTA Update Package

To create the **OTA update** package on your **ThingsBoard Platform**, navigate to the **Advanced features > OTA updates** section and click the **"+"** icon.
In the pop-up window, fill in the following fields:
* **Title:** Enter the firmware package name.
* **Version:** Enter the firmware package update version number.
* **Version tag:** The field is populated with the relevant information automatically. If a custom tag is entered, it should match the package version reported by the device in question _(optional)_.
* **Device profile:** Select the device profile.
* **Package Type:** Select the package type _(Firmware or Software)_.
* **"Upload binary file"/"Use external URL" radiobutton:** Select the file package source. Depending on the selected option, the following will occur: 
  * **Package file:** Drag-n-drop the package file or browse to it on your computer.
  * **Direct URL:** Enter a direct URL to download the file.
* Click the **"Add"** button. _Please note: once the package is uploaded, the title, version, device profile, and package type cannot be modified_.
* Verify that firmware package has been successfully uploaded.

{% include images-gallery.html imageCollection="createFirmware" %}

### Verify the OTA Update Package on the Edge Instance

Log in to the **ThingsBoard Edge** instance using your credentials and navigate to the **Advanced features > OTA updates** section. This is to confirm that the firmware package has been **successfully provisioned** on the **Edge** instance.
  
{% include images-gallery.html imageCollection="verifyFirmware" %}

## Next steps

{% include templates/edge/guides-banner-edge.md %}
