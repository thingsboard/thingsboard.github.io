---
layout: docwithnav-pe-edge
title: Edge Dashboards Overview
description: Edge Dashboards Overview

dashboard-provision:
    0:
        image: /images/pe/edge/user-guide/dashboards/3-instances.png
        title: 'Ensure that you have previously created, configured and assigned the Dashboard to the appropriate entity group. Then, go to the Edge management>Instances section and open the "Manage edge dashboard groups" page. You can see here all dashboards groups already assigned to the Edge instance. To assign another group to the Edge instance, click the "+" icon. To view the Dashboards in the group, click on the group itself.'
    1:
        image: /images/pe/edge/user-guide/dashboards/4-instances-dashboards.png
        title: 'On the Dashboards page, you can see all the dashboards already assigned to the dashboard group. To add another dashboard to the group, click the "+" icon.'
    2:
        image: /images/pe/edge/user-guide/dashboards/5-dashboards-on-edge.png
        title: 'To verify that the Dashboards are provisioned, log in to your Edge Professional Edition instance and go to the Dashboards section.'

create-dashboard:
    0:
        image: /images/pe/edge/user-guide/dashboards/8-create-new-dashboard.png
        title: 'Log in to your ThingsBoard Edge instance and navigate to the “Dashboards” section. By default, you navigate to the dashboard group "All". Click the "+" icon in the upper right corner of the screen, and select "Create new dashboard" option from the drop-down menu.'
    1:
        image: /images/pe/edge/user-guide/dashboards/9-new-dashboard-dialog.png
        title: 'In the pop-up window, enter a dashboard title. Other fields are optional. Click the "Add" button to proceed'
    2:
        image: /images/pe/edge/user-guide/dashboards/10-add-widgets-and-save.png
        title: 'Once you have created the dashboard, it will be automatically opened. You can configure it by adding widgets. Click the "Save" button to save the changes'

changes-from-edge-to-server:
    0:
        image: /images/pe/edge/user-guide/dashboards/6-dashboards-from-edge-to-cloud.png
        title: 'Log in to your Edge Professional Edition instance and go to the Dashboards section. Here you can create, configure, or make any changes to your Dashboards.'
    1:
        image: /images/pe/edge/user-guide/dashboards/7-dashboards-from-edge-to-cloud.png
        title: 'Log in to your ThingsBoard server and go to the “Dashboards” section to see that the changes have been applied to the ThingsBoard server. Make sure you are connected to the internet.'

assign-customer:
    0:
        image: /images/pe/edge/user-guide/dashboards/11-edge-dashboards.png
        title: 'Log in to your ThingsBoard Edge instance and go to the “Dashboards” section. Then, click the "Dashboard details" button.'
    1:
        image: /images/pe/edge/user-guide/dashboards/12-manage-owner-groups.png
        title: 'Click the "Manage owner and groups" button on the Dashboard details page'
    2:
        image: /images/pe/edge/user-guide/dashboards/13-update-customer-or-group.png
        title: 'In the "Manage owner and groups" pop-up window, select owner and click the "Update" button. You also may update the dashboard group if needed.'

---

{% assign docsPrefix = "pe/edge/" %}
{% assign cloudDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/db-overview.md %}