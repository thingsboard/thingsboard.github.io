---
layout: docwithnav-edge
title: Edge Over-the-Air Firmware And Software Updates
description: Edge Over-the-Air Firmware And Software Updates Overview

cannot-edit-on-edge:
    0:
        image: /images/edge/user-guide/ota-update/0-cannot-create-on-edge-ce.png
        title: 'It is not possible to create, modify, or delete the OTA Update packages on the Edge instance.'

createFirmware:
    0:
        image: /images/edge/user-guide/ota-update/1-ota-upd-section-ce.png
        title: 'To create the OTA updates package on your ThingsBoard server, navigate to the Advanced features > OTA updates section and click the "+" icon.'
    1:
        image: /images/edge/user-guide/ota-update/2-add-package-ce.png
        title: 'Fill in all mandatory fields and click the "Add" button to proceed. Please note that once the package is uploaded, the title, version, device profile, and package type cannot be modified.'
    2:
        image: /images/edge/user-guide/ota-update/3-verify-on-server-ce.png
        title: 'You can verify that firmware package has been successfully uploaded'

verifyFirmware:
    0:
        image: /images/edge/user-guide/ota-update/4-verify-on-edge-ce.png
        title: 'Log in to the ThingsBoard Edge instance, go to the Advanced features > OTA updates section and confirm that the firmware package has been successfully provisioned on the Edge instance.'
---

{% assign docsPrefix = "edge/" %}
{% include docs/edge/user-guide/ota-updates.md %}
