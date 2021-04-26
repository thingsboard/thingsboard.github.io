---
layout: docwithnav-pe
assignees:
- ashvayka
title: Widgets Library
description: ThingsBoard Dashboard Widgets Library
wl-latest-values-datasource-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/latest-values-datasource-pe.png
        title: 'This kind of widget uses values of entity time series as a data source.'
    1:
        image: /images/user-guide/ui/widgets/widget-library/latest-values-datasource-1-pe.png
        title: 'Digital Gauge displaying current power value.'

wl-control-widget-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-control-widget-pe.png
        title: 'RPC widgets are configured by specifying target device as target endpoint for RPC commands.'
    1:
        image: /images/user-guide/ui/widgets/widget-library/wl-control-widget-1-pe.png
        title: 'An example of RPC widget is “Basic GPIO Control”. It sends GPIO switch commands and detects current GPIOs switch status.'

wl-alarms-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-alarms-pe.png
        title: 'Alarm widget is configured by specifying an entity as the alarm source, and the corresponding alarm fields.'
    1:
        image: /images/user-guide/ui/widgets/widget-library/wl-alarms-1-pe.png
        title: 'An example of Alarm widget is the “Alarms table” widget that displays the latest alarm for the device in real-time.'

wl-static-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-static-pe.png
        title: 'This kind of widget uses values of entity time series as a data source.'
    1:
        image: /images/user-guide/ui/widgets/widget-library/wl-static-1-pe.png
        title: 'An example of a Static widget is the “HTML card” that displays the specified HTML content.'

wl:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-pe.png
    1:
        image: /images/user-guide/ui/widgets/widget-library/wl-1-pe.png

wl-alarm-bundle-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-alarm-bundle-pe.png
        title: 'For visualization of alarms for specific entities both in real-time and history mode.'

wl-analog-gauges-bundle-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-analog-gauges-bundle-pe.png
        title: 'For visualization of temperature, humidity, speed and other integer or float values.'

wl-cards-bundle-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-cards-bundle-pe.png
        title: 'For visualization of time series data or attributes in a table or card widgets.'

wl-charts-bundle-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-cards-bundle-pe.png
        title: 'For visualization of historical or real-time data with a time window.'

wl-control-bundle-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-cards-bundle-pe.png
        title: 'For visualization of current state and sending RPC commands to target devices.'

wl-digital-bundle-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-digital-bundle-pe.png
        title: 'For visualization of temperature, humidity, speed and other integer or float values.'

wl-gpio-pe:
    0:
        image: /images/user-guide/ui/widgets/widget-library/wl-gpio-pe.png
        title: 'For visualization and control of GPIO state for target devices.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/ui/widget-library.md %}