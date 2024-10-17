---
layout: docwithnav-paas
assignees:
- ikulikov
title: Assets
description: Thingsboard IoT Asset management
asset-intro-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-pe.png
        title: 'Asset groups'
    1:
        image: /images/user-guide/ui/assets/pe/asset-1-pe.png
        title: 'List of assets'

asset-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-groups-pe.png
        title: 'Click the plus icon to add a new asset group and enter the name for it in the opened dialog box'
    1:
        image: /images/user-guide/ui/assets/pe/asset-groups-1-pe.png
        title: 'To share an asset group, check the box and select customers. Then, click Add'
    2:
        image: /images/user-guide/ui/assets/pe/asset-groups-2-pe.png
        title: 'To delete an asset group, click the trash can icon opposite an asset and confirm it in the dialog box'

asset-id-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-id-pe.png
        title: 'Open an asset group, then click the asset name to open its details.'
    1:
        image: /images/user-guide/ui/assets/pe/asset-id-1-pe.png
        title: 'There, click the Copy Asset ID button.'

asset-attributes-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-id-pe.png
        title: 'Click on the asset to open its details'
    1:
        image: /images/user-guide/ui/assets/pe/asset-attributes-1-pe.png
        title: 'Go to attributes tab'
    2:
        image: /images/user-guide/ui/assets/pe/asset-attributes-2-pe.png
        title: 'By checking the box next to asset attribute, you can delete it or display it on a widget'

asset-alarms-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-alarms-9-pe.png
        title: 'Triggered alarm from the connected device in the asset details'

asset-events-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-events-pe.png

asset-relations-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-relations-pe.png
        title: 'In the relations tab of asset details, add a new relation by clicking the plus icon'
    1:
        image: /images/user-guide/ui/assets/pe/asset-relations-1-pe.png
        title: 'Select entity type and add a list of entities'
    2:
        image: /images/user-guide/ui/assets/pe/asset-relations-2-pe.png
        title: 'Save applied changes'
    3:
        image: /images/user-guide/ui/assets/pe/asset-relations-3-pe.png
        title: 'From asset created relation to two devices'

asset-auditlogs-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-auditlogs-pe.png
        title: 'Track user actions in order to keep audit log'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/assets-pe.md %}
