---
layout: docwithnav-pe
title: Fuel level monitoring template
description: Fuel level monitoring template overview

solution-highlights:
    0:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-1.png
    1:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-2.png
    2:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-3.png
    3:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-4.png

install-solution-template:
    0:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-install-1.png
        title: 'Go to the "Solution templates" page. Find "Fuel level monitoring" and click "Install" to start the installation process.'
    1:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-install-2.png
        title: 'The solution is installed automatically. A window opens where you can review the solution instructions. Click "Close".'
    2:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-install-3.png
        title: 'The "Fuel level monitoring" dashboard opens automatically.'

dashboard-main-state:
    0:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-5.png
        title: 'Provides location and status of tanks through colored markers that could be filtered upon specific statuses by switchers, each color representing a different status like normal, low battery, alarm conditions, etc.'
    1:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-6.png
        title: 'Displays a list of all tanks, allowing users to edit, delete, or add new tanks, and providing essential data such as remaining fuel percentage, temperature, battery, and connection status. Here, users can select different tanks and switch between various units of measurement to tailor the view to their specific needs.'
    2:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-7.png
        title: 'Monitor lists all alarms related to fuel level, temperature, and battery level, and allows users to set conditions under which alarms will be triggered.'

dashboard-tank-state:
    0:
        image: /images/solutions/fuel-level-monitoring/fuel-level-monitoring-8.png
        title: 'The Tank state displays the remaining fuel level for a specific tank, provides detailed tank information with editable fields and location, shows time-stamped records of consumption and replenishment, visualizes fuel level and consumption trends over time, and lists all alarms associated with the tank.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/solution-templates/fuel-level-monitoring.md %}