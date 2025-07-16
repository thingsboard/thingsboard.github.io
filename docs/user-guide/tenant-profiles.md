---
layout: docwithnav
assignees:
- ashvayka
title: Tenant Profiles
description: IoT tenant profiles
redirect_from: "/docs/user-guide/ui/tenant-profiles"
entityLimits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-tenant-profiles-entity-limits.png

api-limits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-api-limits.png

apiLimitsDashboard:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-tenant-profiles-api-limits-dashboard.png  

rateLimits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-rate-limits.png  

files-limits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-files.png

isolatedQueueConfiguration:
    0:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-1-ce.png
        title: 'Step 1. Open tenant profile menu and add new tenant profile. Click "isolated ThingsBoard RuleEngine" box, Main queue added by default and can not be renamed or deleted.'
    1:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-2-ce.png
        title: 'Step 2. Click "Add Queue" if you need to add new custom queue.'
    2:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-3-ce.png
        title: 'Step 3. Configure submit and processing settings.'
    3:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-4-ce.png
        title: 'Step 4. Now tenant profile is ready to assign for particular tenants.'
---

{% include get-hosts-name.html %}
{% include docs/user-guide/tenant-profiles.md %}
