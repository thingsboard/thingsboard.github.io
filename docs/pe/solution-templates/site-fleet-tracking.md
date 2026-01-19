---
layout: docwithnav-pe
title: Site fleet tracking template
description: Site fleet tracking template overview

solution-highlights:
    0:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-1.png
    1:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-2.png
    2:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-3.png

install-solution-template:
    0:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-4.png
        title: 'Go to the "Solution templates" page. Find "Site fleet tracking" and click "Install" to start the installation process.'
    1:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-5.png
        title: 'The solution is installed automatically. A window opens where you can review the solution instructions. Click "Close".'
    2:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-6.png
        title: 'The "Mine site monitoring" dashboard opens automatically.'

navigation-between-dashboard-states:
    0:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-7.png
        title: 'Main state provides an overview of the entire site, including live machine positions on the map, KPI cards for machines in Loading, Unloading, and Restricted zones, and daily fuel consumption.'
    1:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-8.png
        title: 'Vehicle state displays detailed information about the selected excavator or dump truck, including fuel level, speed, hydraulic pressure (excavator) or load weight (dump truck), and active alarms.'
    2:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-9.png
        title: 'Zone state displays the selected zone and the vehicles currently located within it.'

machine-details:
    0:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-7.png

zone-details:
    0:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-8.png

configured-alarms:
    0:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-10.png
        title: 'Alarm generation is handled by alarm rules configured in the Excavator and Haul truck device profiles.'

configured-calculated-fields:
    0:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-11.png
        title: 'The solution uses calculated fields to derive additional telemetry, detect geofencing events, and compute operational metrics.'
    1:
        image: /images/solutions/site-fleet-tracking/fleet-tracking-template-12.png

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/solution-templates/site-fleet-tracking.md %}