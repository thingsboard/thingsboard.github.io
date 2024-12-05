---
layout: docwithnav-pe-edge
title: Edge 
description: Edge 

downlinks:
    0:
        image: /images/edge/edge-management/0-downlinks-pe.webp

forceSync:
    0:
        image: /images/edge/edge-management/1-force-sync-pe.webp

instancesSection:
    0:
        image: /images/edge/edge-management/2-instances-pe.webp
        title: 'The following <a href="/docs/pe/user-guide/groups/" target="_blank">entity groups</a> and events can be managed: <ul><li><b>Manage edge user groups:</b> Organize and control user groups assigned to the Edge.</li><li><b>Manage edge asset groups:</b> Manage collections of assets (e.g., buildings, machines, or any other monitored entities) grouped at the Edge.</li><li><b>Manage edge device groups:</b> Administer groups of devices that are managed by the Edge.</li><li><b>Manage edge entity view groups:</b> Manage groups of entities filtered views (e.g., devices or assets) at the Edge to display specific subsets of data or contextual information. Read more about the Entity views in <a href="/docs/pe/user-guide/entity-views/" target="_blank">this article</a>.</li><li><b>Manage edge dashboard groups:</b> Manage groups of dashboards available at the Edge.</li><li><b>Manage edge scheduler events:</b> Define, configure, and manage scheduled events at the Edge. Read more about the Scheduler in <a href="/docs/pe/user-guide/scheduler/" target="_blank">this article</a>.</li><li><b>Manage edge rule chains:</b> Create, configure, and manage rule chains specifically for the Edge.</li><li><b>Manage edge integrations:</b> Configure and manage integrations at the Edge. Read more about the Platform Integrations in <a href="/docs/user-guide/integrations/" target="_blank">this article</a>.</li><li><b>Delete:</b> Remove the Edge and all related data.</li></ul>'

edgeDetails:
    0:
        image: /images/edge/edge-management/3-edge-details-pe.webp

edgeStatus:
    0:
        image: /images/edge/edge-management/4-edge-status-pe.webp
        title: '<b>Status:</b> Edge current status (Connected, Disconnected).<li><b>Name:</b> The name of the current Edge instance.</li><li><b>ID:</b> The identification code of the current Edge instance.</li><li><b>Type:</b> The "default" Edge type is by design.</li><li><b>Routing Key:</b> The Edge key used to install the instance.</li><li><b>Maximum amount of allowed devices:</b> The number of devices allowed by your <a href="/pricing/?section=thingsboard-edge&solution=edge-pay-as-you-go" target="_blank">price plan</a></li><li><b>Maximum amount of allowed assets:</b>The number of assets allowed by your <a href="/pricing/?section=thingsboard-edge&solution=edge-pay-as-you-go" target="_blank">price plan</a></li><li><b>Last time connected to/disconnected from cloud:</b> The date and time the instance is connected to/disconnected from Cloud. Displayed in a format YYYY-MM-DD H:Min:Sec.</li>'

cloudEvenets:
    0:
        image: /images/edge/edge-management/5-cloud-events-pe.webp

---
{% assign peDocsPrefix = "pe/" %}
{% assign docsPrefix = "pe/edge/" %}
{% include /docs/edge/user-guide/edge-management.md %}
