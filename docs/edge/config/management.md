---
layout: docwithnav-edge
title: Edge 
description: Edge 

downlinks:
    0:
        image: /images/edge/edge-management/0-downlinks.webp

forceSync:
    0:
        image: /images/edge/edge-management/1-force-sync.webp

instancesSection:
    0:
        image: /images/edge/edge-management/2-instances.webp
        title: 'The following <a href="/docs/pe/user-guide/entities-and-relations/" target="_blank">entities</a> and events can be managed: <ul><li><b>Make edge public:</b> The edge and all its data will be accessible by others.</li><li><b>Assign to customer:</b> Link a specific customer entity to the Edge instance.</li><li><b>Make edge private:</b> The edge and all its data will not be accessible by others.</li><li><b>Manage assets:</b> Monitor and control assets (e.g., buildings, equipment, or other entities) at the Edge. </li><li><b>Manage devices:</b> Administer devices that are managed by the Edge.</li><li><b>Manage entity views:</b> Manage filtered views of entities (e.g., devices or assets) at the Edge to display specific subsets of data or contextual information. Read more about the Entity views in <a href="/docs/user-guide/entity-views/" target="_blank">this article</a>.</li><li><b>Manage dashboards:</b> Customize, and manage dashboards at the Edge.</li><li><b>Manage rule chains:</b> Create, configure, and manage rule chains specifically for the Edge.</li><li><b>Delete:</b> Remove the Edge and all related data.</li></ul>'

edgeDetails:
    0:
        image: /images/edge/edge-management/3-edge-details.webp

edgeStatus:
    0:
        image: /images/edge/edge-management/4-edge-status.webp
        title: '<b>Status:</b> Edge current status (Connected, Disconnected).<li><b>Name:</b> The name of the current Edge instance.</li><li><b>ID:</b> The identification code of the current Edge instance.</li><li><b>Type:</b> The "default" Edge type is by design.</li><li><b>Routing Key:</b> The Edge key used to install the instance.</li><li><b>Last time connected to/disconnected from cloud:</b> The date and time the instance is connected to/disconnected from Cloud. Displayed in a format YYYY-MM-DD H:Min:Sec.</li>'

cloudEvenets:
    0:
        image: /images/edge/edge-management/5-cloud-events.webp

---

{% assign docsPrefix = "edge/" %}
{% include /docs/edge/user-guide/edge-management.md %}
