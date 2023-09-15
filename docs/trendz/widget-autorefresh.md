---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Trendz widget auto refresh
description: Trendz widget auto refresh to display real time data

trendz-widget-automated-refresh:
  0:
    image: https://img.thingsboard.io/trendz/trendz-widget-auto-refresh-data.png
    title: 'Trendz widget data refresh settings'

---

You can update Trendz widgets on the ThingsBoard dashboard with the frequency you prefer by configuring auto refresh.
Here's how to do it:

* Add a widget to the ThingsBoard dashboard.
* Open the widget's edit mode and go to the Advanced tab.
* Check the "Update data in real time" checkbox.
* Choose the desired interval for updating data in real time (in minutes).
* Save your changes.

{% include images-gallery.html imageCollection="trendz-widget-automated-refresh" %}

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}