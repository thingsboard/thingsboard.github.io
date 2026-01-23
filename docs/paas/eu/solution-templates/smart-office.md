---
layout: docwithnav-paas-eu
title: Smart office template
description: Smart office template overview
redirect_from: "/docs/samples/monitoring/facilities-monitoring-poc/"

solution-highlights:
    0:
        image: /images/solutions/smart-office/smart-office-template-1.png
    1:
        image: /images/solutions/smart-office/smart-office-template-2.png
    2:
        image: /images/solutions/smart-office/smart-office-template-3.png
    3:
        image: /images/solutions/smart-office/smart-office-template-4.png
    4:
        image: /images/solutions/smart-office/smart-office-template-5.png

install-solution-template:
    0:
        image: /images/solutions/smart-office/smart-office-template-install-1.png
        title: 'Go to the "Solution templates" page. Find "Smart office" and click "Install" to start the installation process.'
    1:
        image: /images/solutions/smart-office/smart-office-template-install-2.png
        title: 'The solution is installed automatically. A window opens where you can review the solution instructions. Click "Close".'
    2:
        image: /images/solutions/smart-office/smart-office-template-install-3.png
        title: 'The "Smart office" dashboard opens automatically.'

navigation-between-dashboard-states:
    0:
        image: /images/solutions/smart-office/smart-office-template-6.png
        title: '<b>Main state</b>. Displays the list of devices and their locations on the office map or floor plan.'
    1:
        image: /images/solutions/smart-office/smart-office-template-7.png
        title: '<b>Device details state</b>. Opens when a device is selected. The layout and controls depend on the selected device type (sensor, HVAC, meter).'

alarms-1:
    0:
        image: /images/solutions/smart-office/smart-office-template-8.png
        title: 'Alarm generation is handled by alarm rules configured in the smart-sensor device profile.'

alarms-2:
    0:
        image: /images/solutions/smart-office/smart-office-template-9.png
        title: 'Alarms are displayed in a centralized alarm widget on the dashboard, allowing operators to quickly detect and respond to abnormal conditions.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/solution-templates/smart-office.md %}