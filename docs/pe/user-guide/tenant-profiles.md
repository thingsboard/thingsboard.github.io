---
layout: docwithnav-pe
assignees:
- ashvayka
title: Tenant Profiles
description: IoT tenant profiles
redirect_from: "/docs/pe/user-guide/ui/tenant-profiles"
entityLimits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-pe-tenant-profiles-entity-limits.png  

api-limits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-pe-api-limits.png

apiLimitsDashboard:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-pe-tenant-profiles-api-limits-dashboard.png  

rateLimits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-pe-rate-limits.png
        
files-limits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-pe-files.png

isolatedQueueConfiguration:
    0:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-1-pe.png
        title: 'Step 1. Open tenant profile menu and add new tenant profile. Click "isolated ThingsBoard RuleEngine" box, Main queue added by default and can not be renamed or deleted.'
    1:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-2-pe.png
        title: 'Step 2. Click "Add Queue" if you need to add new custom queue.'
    2:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-3-pe.png
        title: 'Step 3. Configure submit and processing settings.'
    3:
        image: /images/user-guide/tenant-profile/queue-tenant-profile-4-pe.png
        title: 'Step 4. Now tenant profile is ready to assign for particular tenants.'
---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/tenant-profiles.md %}
