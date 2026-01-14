---
layout: docwithnav-pe-edge
title: Edge Public Dashboard Configuration Guide
description: Detailed configuration instructions for the public dashboard on ThingsBoard Edge

makePublic:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/1-create-group.webp
    title: 'Log in to the <b>ThingsBord Server</b>, go to the <b>Dashboards</b> section, and select the <b>"Groups"</b> tab.<ul><li>To create a new dashboard group, click the <b>"Add entity group"</b> button.</li><li>In the pop-up window, enter the <b>group name</b> and click the <b>"Add"</b> button.</li></ul>'
  1:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/2-make-public.webp
    title: 'To make the group public, click the <b>"Make public"</b> button.'
  2:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/3-make-public-confirm.webp
    title: 'To confirm the change, click the <b>"Yes"</b> button in the pop-up window. After confirmation, the dashboard group and all dashboards within it will be made public and accessible to others.'
  3:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/4-edge-instances-section.webp
    title: 'Go to the <b>Edge management > Instances</b> section, and click the <b>"Manage edge dashboard groups"</b> button.'
  4:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/5-assign-group.webp
    title: 'On the <b>Edge dashboard groups</b> page, click the <b>"Assign to edge"</b> button. In the pop-up window, select the group and click the <b>"Assign"</b> button.'
  5:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/6-edge-groups-tab.webp
    title: 'Log in to the <b>ThingsBord Edge</b>, go to the <b>Dashboards</b> section, and select the <b>"Groups"</b> tab. Click on the <b>public group</b>.'
  6:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/7-public-link.webp
    title: 'To create and configure the dashboards within this group, click the <b>"Add dashboard"</b> button. All dashboards will be automatically set as public. To access to the <b>public dashboard link</b>, click the corresponding button.'
  7:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/8-dashboard-details-page.webp
    title: 'You can also access the dashboard public link in the <b>Dashboard details</b> window. <i>Note: the link is available only within the group.</i>'
  8:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/9-assign-to-group.webp
    title: 'To assign another dashboard to the <b>Public group</b>, select the <b>"All"</b> tab and click the <b>"Dashboard details"</b> button.'
  9:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/10-dashboard-details-page.webp
    title: 'On the <b>Dashboard details</b> page, click the <b>"Manage owner and groups"</b> button.'
  10:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/11-update-group.webp
    title: 'In the pop-up window, select the group and click the <b>"Update"</b> button.'
    
makePrivate:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/12-make-private.webp
    title: 'To make the dashboard group private, log in to the <b>ThingsBord Server</b>, go to the <b>Dashboards</b> section, and select the <b>"Groups"</b> tab. Click the <b>"Make private"</b> button.'
  1:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/13-confirm-go-private.webp
    title: 'To confirm the change, click the <b>"OK"</b> button in the pop-up window.'
  2:
    image: https://img.thingsboard.io/pe/edge/user-guide/public-dashboard/14-verify-on-edge.webp
    title: 'To verify the change, go to the <b>Dashboards</b> section of the Edge instance, the <b>"Groups"</b> tab and update the page.'

---
{% assign docsPrefix = "pe/edge/" %}
{% assign peDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/config/edge-public-dashboard.md %}