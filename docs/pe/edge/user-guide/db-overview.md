---
layout: docwithnav-pe-edge
title: Edge Dashboards Overview
description: Edge Dashboards Overview

dashboard-provision:
    0:
        image: /images/pe/edge/user-guide/dashboards/3-instances.png
        title: 'Ensure that you have previously created, configured and assigned the Dashboard to the appropriate entity group. Then, go to the <b>Edge management > Instances</b> section and open the <b>"Manage edge dashboard groups"</b> page. You can see here all dashboards groups already assigned to the <b>Edge</b> instance. To assign another group to the <b>Edge</b> instance, click the <b>"+"</b> icon. To view the <b>Dashboards</b> in the group, click on the group itself.'
    1:
        image: /images/pe/edge/user-guide/dashboards/4-instances-dashboards.png
        title: 'On the <b>Dashboards</b> page, you can see all the dashboards already assigned to the dashboard group. To add another dashboard to the group, click the <b>"+"</b> icon.'
    2:
        image: /images/pe/edge/user-guide/dashboards/5-dashboards-on-edge.png
        title: 'To verify that the dashboards are provisioned, log in to your <b>Edge Professional Edition</b> instance and go to the <b>Dashboards</b> section.'

create-dashboard:
    0:
        image: /images/pe/edge/user-guide/dashboards/8-create-new-dashboard.png
        title: 'Log in to your <b>Edge</b> instance and navigate to the <b>“Dashboards”</b> section. By default, you navigate to the dashboard group <b>"All"</b>. Click the <b>"+"</b> icon in the upper right corner of the screen, and select <b>"Create new dashboard"</b> option from the drop-down menu.'
    1:
        image: /images/pe/edge/user-guide/dashboards/9-new-dashboard-dialog.png
        title: 'In the pop-up window, enter a dashboard title. Other fields are optional. Click the <b>"Add"</b> button to proceed'
    2:
        image: /images/pe/edge/user-guide/dashboards/10-add-widgets-and-save.png
        title: 'Once you have created the dashboard, it will be automatically opened. You can configure it by adding widgets. Click the <b>"Save"</b> button to save the changes'

changes-from-edge-to-server:
    0:
        image: /images/pe/edge/user-guide/dashboards/6-dashboards-from-edge-to-cloud.png
        title: 'Log in to your <b>Edge Professional Edition</b> instance and go to the <b>Dashboards</b> section. Here you can create, configure, or make any changes to your <b>Dashboards</b>.'
    1:
        image: /images/pe/edge/user-guide/dashboards/7-dashboards-from-edge-to-cloud.png
        title: 'Log in to your <b>ThingsBoard Server</b> and go to the <b>“Dashboards”</b> section to see that the changes have been applied to the <b>ThingsBoard Server</b>. Make sure you are connected to the internet.'

assign-customer:
    0:
        image: /images/pe/edge/user-guide/dashboards/11-edge-dashboards.png
        title: 'Log in to your <b>ThingsBoard Edge</b> instance and go to the <b>“Dashboards”</b> section. Then, click the <b>"Dashboard details"</b> button.'
    1:
        image: /images/pe/edge/user-guide/dashboards/12-manage-owner-groups.png
        title: 'Click the <b>"Manage owner and groups"</b> button on the Dashboard details page'
    2:
        image: /images/pe/edge/user-guide/dashboards/13-update-customer-or-group.png
        title: 'In the <b>"Manage owner and groups"</b> pop-up window, select owner and click the <b>"Update"</b> button. You also may update the dashboard group if needed.'

---

{% assign docsPrefix = "pe/edge/" %}
{% assign cloudDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/db-overview.md %}