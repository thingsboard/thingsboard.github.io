---
layout: docwithnav-paas-eu
title: Assisted living template
description: Assisted living template overview

solution-highlights:
    0:
        image: /images/solutions/assisted-living/assisted-living-1.png
    1:
        image: /images/solutions/assisted-living/assisted-living-2.png
    2:
        image: /images/solutions/assisted-living/assisted-living-3.png
    3:
        image: /images/solutions/assisted-living/assisted-living-4.png
      
install-solution-template:
    0:
        image: /images/solutions/assisted-living/assisted-living-5.png
        title: 'Go to the "Solution templates" page. Find "Assisted living" and click "Install" to start the installation process.'
    1:
        image: /images/solutions/assisted-living/assisted-living-6.png
        title: 'The solution is installed automatically. A window opens where you can review the solution instructions. Click "Close".'
    2:
        image: /images/solutions/assisted-living/assisted-living-7.png
        title: 'The "Assisted Living Administration" dashboard opens automatically.'

dashboard-structure:
    0:
        image: /images/solutions/assisted-living/assisted-living-8.png
        title: 'Main state (Overview) – Real-time facility view with floor plans, resident and room markers, and alarm lists.'
    1:
        image: /images/solutions/assisted-living/assisted-living-9.png
        title: 'Residents state – Resident roster management, including personal, medical, emergency contact details, and wristband assignments.'
    2:
        image: /images/solutions/assisted-living/assisted-living-10.png
        title: 'Zones state – Facility hierarchy management (floors/zones) and floor plan uploads.'
    3:
        image: /images/solutions/assisted-living/assisted-living-11.png
        title: 'Zone details state – Room mapping and device assignment for a selected zone.'

resident-alarms:
    0:
        image: /images/solutions/assisted-living/assisted-living-12.png
        title: '<b>Resident alarms</b> – Health and behavior events with severity, location, and quick actions (for example, call nurse or ambulance). Alarm thresholds are configurable.'

infrastructure-alarms:
    0:
        image: /images/solutions/assisted-living/assisted-living-13.png
        title: '<b>Room alarms</b> – Infrastructure and environmental events (smoke, leaks, door/window, etc.) with acknowledgment, actions, and configurable thresholds.'
    
rule-chains:
    0:
        image: /images/solutions/assisted-living/assisted-living-14.png
        title: 'The <b>AL Gateway Rule Chain</b> processes data received from gateways by deduplicating messages from multiple sources, identifying target devices using serial numbers from the payload, enriching messages with gateway attributes such as room or zone, routing data based on device type (room sensor or wristband), and determining resident location using the strongest RSSI value from the nearest gateway.'
    1:
        image: /images/solutions/assisted-living/assisted-living-15.png
        title: '<b>AL Wristband Device Rule Chain</b> – Saves telemetry, evaluates alarms, and counts active alarms. The alarm count is propagated to the corresponding resident user entity for dashboard visualization.'
    2:
        image: /images/solutions/assisted-living/assisted-living-16.png
        title: '<b>AL Room Device Rule Chain</b> – Saves telemetry and evaluates alarms for infrastructure sensors. Unlike the wristband chain, it does not propagate alarm counts to resident user entities.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/solution-templates/assisted-living.md %}