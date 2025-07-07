---
layout: docwithnav-paas
assignees:
- stitenko
title: Secrets storage
description: Secrets storage guide

creating-secret:
    0:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/creating-secret-1-pe.png
        title: 'Go to the "Secrets storage" page of the "Security" section. Click the "plus" (Add secret) icon in the upper right corner.'
    1:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/creating-secret-2-pe.png
        title: 'Select secret type: Text or File. Next, enter the secret&#39;s name and its text value (for the "Text" type) or upload a certificate file (for the "File" type). Then, click "Add".'
    2:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/creating-secret-3-pe.png
        title: 'ThingsBoard automatically encrypts Secret values using the AES-256 encryption algorithm.'

update-secret-value:
    0:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/update-secret-value-1-pe.png
        title: 'Click the "Change value" icon next to the Secret you want to update.'
    1:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/update-secret-value-2-pe.png
        title: 'Enter the new value and click "Save".'

delete-secret:
    0:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/delete-secret-1-pe.png
        title: 'Click the "trash bin" icon at the end of its row.'
    1:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/delete-secret-2-pe.png
        title: 'Confirm the deletion.'

use-secret:
    0:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/use-secret-in-thingsboard-1-pe.png
        title: 'In the "Password" field, click the "key" icon to select and use the Secret.'
    1:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/use-secret-in-thingsboard-2-pe.png
        title: 'If the Secret has already been created, select "Use storage", pick the desired Secret from the dropdown menu, and click "Use".'
    2:
        image: https://img.thingsboard.io/user-guide/security/secrets-storage/use-secret-in-thingsboard-3-pe.png
        title: 'The "Password" field use the value from Secret.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/user-guide/secrets-storage.md %}
