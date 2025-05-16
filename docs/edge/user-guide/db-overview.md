---
layout: docwithnav-edge
title: Edge Dashboards Overview
description: Edge Dashboards Overview

dashboard-provision:
    0:
        image: /images/edge/user-guide/dashboards/1-server-edge-dashboards.png
        title: 'Ensure that you have previously created and configured Dashboards on the <b>ThingsBoard Server</b> and then go to the <b>Edge management > Instances</b> section and open the <b>"Manage dashboard"</b> page. View all Dashboards already deployed, or click the <b>"+"</b> icon to deploy the Dashboard to the <b>Edge</b> instance.'
    1:
        image: /images/edge/user-guide/dashboards/2-edge-edge-dashboards.png
        title: 'To verify that the Dashboards are available, log in to your <b>Edge</b> instance and go to the <b>Dashboards</b> section.'

create-dashboard:
    0:
        image: /images/edge/user-guide/dashboards/5-create-new-dashboard.png
        title: 'Log in to your <b>ThingsBoard Edge</b> instance and navigate to the <b>“Dashboards”</b> section, then click the <b>“+”</b> icon and select the <b>“Create new dashboard”</b> option.'
    1:
        image: /images/edge/user-guide/dashboards/6-new-dashboard-dialog.png
        title: 'In the pop-up window, enter a dashboard <b>title</b>. Other fields are optional. Click the <b>"Add"</b> button to proceed'
    2:
        image: /images/edge/user-guide/dashboards/7-add-widgets-and-save.png
        title: 'Once you have created the dashboard, it will be automatically opened. You can configure it by adding widgets. Click the <b>"Save"</b> button to save the changes.'

changes-from-edge-to-server:
    0:
        image: /images/edge/user-guide/dashboards/3-new-dashboard-on-edge.png
        title: 'Create, configure or make any changes to the Dashboard on the <b>Edge</b> instance.'
    1:
        image: /images/edge/user-guide/dashboards/4-new-dashboard-on-server.png
        title: 'Log in to your <b>ThingsBoard Server</b> and go to the <b>Dashboards</b> section to see that the changes have been applied to the <b>ThingsBoard Server</b>. Make sure you are connected to the internet.'

assign-customer:
    0:
        image: /images/edge/user-guide/dashboards/8-assign-customers.png
        title: 'Log in to your <b>ThingsBoard Edge</b> instance and go to the <b>Dashboards</b> section. Click the <b>“Manage assigned customers”</b> button for the dashboard you want to assign a customer to.'
    1:
        image: /images/edge/user-guide/dashboards/9-add-customers-dialog.png
        title: 'Select the customers from the drop-down list to assign them or click the <b>“x”</b> icon to remove them from the dashboard. Click the <b>"Update"</b> button to confirm the assignment or removal.'

---

{% assign docsPrefix = "edge/" %}
{% include docs/edge/user-guide/db-overview.md %}

