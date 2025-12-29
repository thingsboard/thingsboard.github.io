---
layout: docwithnav-paas
assignees:
- stitenko
title: API keys
description: Managing API keys

creating-api-key-for-our-account:
    0:
        image: /images/user-guide/security/api-keys/creating-api-key-for-our-account-1-pe.png
        title: 'In the top-right corner, click the <b>three-dot</b> menu and select <b>Account</b>.'
    1:
        image: /images/user-guide/security/api-keys/creating-api-key-for-our-account-2-pe.png
        title: 'Navigate to the <b>Security</b> tab. In the <b>API keys</b> section, click the <b>Manage</b> button.'
    2:
        image: /images/user-guide/security/api-keys/creating-api-key-for-our-account-3-pe.png
        title: 'Click the <b>+ Generate</b> button.'
    3:
        image: /images/user-guide/security/api-keys/creating-api-key-for-our-account-4-pe.png
        title: 'Enter a <b>description</b> for the API key, select the expiration period, and click <b>Generate</b>.'
    4:
        image: /images/user-guide/security/api-keys/creating-api-key-for-our-account-5-pe.png
        title: '<b>Copy and save</b> the generated API key — it will not be displayed again.'
    5:
        image: /images/user-guide/security/api-keys/creating-api-key-for-our-account-6-pe.png
        title: ''

creating-api-key-for-another-user:
    0:
        image: /images/user-guide/security/api-keys/creating-api-key-for-another-user-1-pe.png
        title: 'Navigate to the <b>Customers</b>/<b>Users</b> section.<br>Click on the desired user to open their <b>details</b>.<br>Navigate to the <b>API keys</b> tab and click the <b>+ Generate</b> button.'
    1:
        image: /images/user-guide/security/api-keys/creating-api-key-for-another-user-2-pe.png
        title: 'Enter a <b>description</b> for the API key, select the expiration period, and click <b>Generate</b>.'
    2:
        image: /images/user-guide/security/api-keys/creating-api-key-for-another-user-3-pe.png
        title: '<b>Copy and save</b> the generated API key — it will not be displayed again.'
    3:
        image: /images/user-guide/security/api-keys/creating-api-key-for-another-user-4-pe.png
        title: ''

authentication-in-swagger-ui:
    0:
        image: /images/user-guide/security/api-keys/authentication-in-swagger-ui-1.png
        title: 'You can manually authenticate or authorize as another user by clicking the <b>Authorize</b> button on the right side of the Swagger page.'
    1:
        image: /images/user-guide/security/api-keys/swagger-ui-2.png
        title: 'Paste your API key In the API key form (apiKey) section.<br>Then, click "Authorize".'

managing-api-keys-1:
    0:
        image: /images/user-guide/security/api-keys/managing-api-keys-1-pe.png
        title: 'In the API keys table, each key displays its creation time, description, status, and expiration date.'

managing-api-keys-2:
    0:
        image: /images/user-guide/security/api-keys/managing-api-keys-2-pe.png
        title: 'For each API key, the following actions are available: enable or disable the key, delete the key, or edit its description.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/security/api-keys.md %}