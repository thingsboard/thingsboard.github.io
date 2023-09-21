---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Trendz widget actions 
description: Trendz widget actions 

---

* TOC
{:toc}

#### Configure OnRowClock action
Trendz Table view support onRowClick action. You can configure what should happen when user click on a Row in a table. 
For example, you can save entity to the Dashboard state alias or open new dashboard state.

To enable row click event:
* Add Trendz Table View on ThingsBoard dashboard.
* Open widget edit mode and switch to **Actions** tab.
* Press **Add action** button.
* In **Action source** field select **On row click**.
* Proceed standard widget action configuration. 

Each row has multiple fields from on or multiple devices/assets. It means that 1 row can be connected with multiple items. 
If you want to use 'onRowClick' action - you need to define what item is selected when row clicked.
* Open **View Settings** in Trendz View edit mode.
* Open **View Mode fields** section.
* Select required Device/Asset type in **Row click entity** dropdown.
* Save changes.

#### Configure Date selected action

#### Configure Switch Field action

![image](https://img.thingsboard.io/trendz/trndz_dashboard_time.png)

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}