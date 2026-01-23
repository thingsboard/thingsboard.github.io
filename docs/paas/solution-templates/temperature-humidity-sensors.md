---
layout: docwithnav-paas
title: Temperature & Humidity sensors template
description: Temperature & Humidity sensors template overview

solution-highlights:
    0:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-1.png
    1:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-2.png

install-solution-template:
    0:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-install-1.png
        title: 'Go to the "Solution templates" page. Find "Temperature & Humidity sensors" and click "Install" to start the installation process.'
    1:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-install-2.png
        title: 'The solution is installed automatically. A window opens where you can review the solution instructions. Click "Close".'
    2:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-install-3.png
        title: 'The "Temperature & Humidity" dashboard opens automatically.'

solution-alarms:
    0:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-3.png
        title: 'Alarm generation is handled by alarm rules configured in the "Temperature Sensor" device profile.'
    1:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-4.png
        title: 'Navigate to the solution dashboard. Click "Edit" button in the corresponding sensor row.'
    2:
        image: /images/solutions/temperature-sensors/temperature-humidity-sensors-template-5.png
        title: 'Enable or disable temperature alarms and define thresholds.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/solution-templates/temperature-humidity-sensors.md %}