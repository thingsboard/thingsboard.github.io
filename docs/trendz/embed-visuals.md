---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Add Trendz widgets on dashboard
description: Add Trendz widgets on dashboard 

---

* TOC
{:toc}

All interactive visualizations created with the Trendz Analytics Platform could be shared with other users and embed on ThingsBoard Dashboards 
or external sites. In this guide, you will learn how to do this. 

## Prerequisites

You should [import Trendz widget bundle into ThingsBoard](/docs/trendz/trendz-bundle#Import-Trendz-bundle-into-ThingsBoard). If you are using ThingsBoard Cloud - you should already have required bundle imported into ThingsBoard.

## Add visualization on ThingsBoard Dashboard

#### Add using share wizard

* Click on **Share** button in the top right corner of the visualization.
* Select whether you want to add view on new or existing dashboard.
* Select on what dashboard state view should be added.
* Enable `Create alias from filter` - enable this option if you want to create dashboard alias that would be used to filter data in view. For example if you created view that shows data from multiple devices - you can use dashboard state alias to filter data by device name. Once alias value changed - filter inside Trendz view would be automatically updated.
* Press Save button.

#### Add via direct link to Trendz view

Once widgets bundle imported, and you already have saved Trendz Visualization - follow next steps to add them on the dashboard:
* In Trendz, open required visualization
* Press **Share** button, and click `Copy link` button - sharable URL will be copied into the clipboard
* Open required ThingsBoard Dashboard and press Edit button
* Select **Trendz View Static** widget from **Trendz Bundle** and add it on the Dashboard
* Switch to **Advanced** tab of the widget and insert the copied URL from step 1
* Save dashboard

![image](/images/trendz/embed-trendz.gif) 

## Use Dashboard time window

By default, all Trendz visualizations use individual time range. However you can change this behavior and configure widget to toke time from ThingsBoard Dashboard.
This option available for both, Static Trendz widget and for Trendz View with aliases.

* Open Dashboard Edit Mode
* Select required Trendz Widget
* Switch to **Advanced** Tab
* Enable checkbox **Use Dashboard Time Window** 

## Embed visualization on external site
You can also embed Trendz visualization into your web site by adding iFrame that points to required visualization.

Add iFrame on your site with the following URL **http://{TRENDZ_URL}/viewMode/{VIEW_ID}?jwt={JWT_TOKEN}**. Where:
* TRENDZ_URL - url of Trendz service
* VIEW_ID - ID of saved visualization inside Trendz
* JWT_TOKEN - ThingsBoard JWT token that should be used to authenticate in the ThingsBoard

## Blocked View problem

If HTTPS was not enabled for Trendz it is possible that visuals shared on 3rd party websites or on ThingsBoard Dashboard 
would be blank. 

The problem is that most browser block mixed content requests: if ThingsBoard use HTTPS and Trendz does not - browser will 
block requests to Trendz. You can find detailed error in browser console.

For fixing this - you need to enable HTTPS for Trendz UI. Find details how to do this in Trendz installation guide.

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}
