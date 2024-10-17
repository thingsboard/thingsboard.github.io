---
layout: docwithnav-paas-eu
title: Water Metering solution template
description: Water Metering template overview
solution-highlights:
    0:
        image: /images/solutions/water_metering/water-metering-1.png
    1:
        image: /images/solutions/water_metering/water-metering-3.png
    2:
        image: /images/solutions/water_metering/water-metering-2.png
    3:
        image: /images/solutions/water_metering/water-metering-4.png
    4:
        image: /images/solutions/water_metering/water-metering-5.png


solution-alarms:
    0:
        image: /images/solutions/water_metering/alarm-rules-src.png
        title: 'Navigate to "Device profiles". Select "Water Meter" profile. Open "Alarm rules" tab.'
    1:
        image: /images/solutions/water_metering/alarm-settings-btn-src.png
        title: 'Navigate to the solution dashboard. Click "Settings" button.'
    2:
        image: /images/solutions/water_metering/alarm-settings-src.png
        title: 'Enable or disable alarms and define thresholds. Turn email or SMS notifications on and off.'

rule-chains:
    0:
        image: /images/solutions/water_metering/rule-chains-1-src.png
        title: 'Main solution rule chain is responsible for data aggregation and alarms. Messages about created alarms are forwarded to notification rule chains.'
    1:
        image: /images/solutions/water_metering/rule-chains-2-src.png
        title: 'Tenant Alarm routing forwards notifications via email or sms to all tenant administrators if corresponding settings are enabled.'
    2:
        image: /images/solutions/water_metering/rule-chains-3-src.png
        title: 'Customer Alarm routing forwards notifications via email or sms to all customer users if corresponding settings are enabled.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/solution-templates/water-metering.md %}