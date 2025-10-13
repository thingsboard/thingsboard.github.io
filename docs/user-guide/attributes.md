---
layout: docwithnav
assignees:
- ashvayka
title: Working with IoT device attributes
description: IoT device management using ThingsBoard attributes feature
server-side-attrs-ui:
    0:
        image: /images/user-guide/attributes/add-server-side-ce-src.png
        title: 'Go to Entities → Devices and open the device you want to edit by clicking its row. In the device details, open the "Attributes" tab, select the "Server attributes" scope, and click the "+" icon to add a new attribute.'
    1:
        image: /images/user-guide/attributes/add-server-side-ce2-src.png
        title: 'In the dialog, enter the attribute key, select the value type (for example, String), and provide a value.'
    2:
        image: /images/user-guide/attributes/add-server-side-ce3-src.png
        title: 'After saving, the new attribute appears in the list with its key, value, and last update time. Sort using "Last update time" to quickly locate the newly created attribute.'

shared-attrs-ui:
    0:
        image: /images/user-guide/attributes/add-shared-ce-src.png
        title: 'Go to Entities → Devices and open the device you want to edit by clicking its row. In the device details, open the "Attributes" tab, select the "Shared attributes" scope, and click the "+" icon to add a new attribute.'
    1:
        image: /images/user-guide/attributes/add-shared-ce2-src.png
        title: 'In the dialog, enter the attribute key, select the value type (for example, Double), and provide a value.'
    2:
        image: /images/user-guide/attributes/add-shared-ce3-src.png
        title: 'After saving, the new attribute appears in the list with its key, value, and last update time.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/attributes.md %}
