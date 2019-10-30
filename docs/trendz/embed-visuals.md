---
layout: docwithnav
assignees:
- vparomskiy
title: Share and embed Visualizations
description: Share analysis results and group visualizations on Dashboards 

---

* TOC
{:toc}

All interactive visualizations created with the Trendz Analytics Platform could be shared with other users and embed on ThingsBoard Dashboards 
or external sites. In this guide you will learn how to do this. 

## Share via ThingsBoard dashboard
You can share created visualizations or even provide self-service interface for your users by adding Trendz widgets on ThingsBoard dashboards.
Follow 2 simple steps to make it: 

#### Import Trendz widget bundle
At the beginning you need to import Trendz widgets into your ThingsBoard installation:
* Download a <a href="/images/trendz/trendz-widget-bundle.json" download="trendz-widget-bundle.json">Trendz_widgets_bunble</a> 
* Login as Tenant Administrator into ThingsBoard and go to **Widget Library**
* Press **Add new widget bundle** and select **import widget bundle**
* Import downloaded  widget bundle

This bundle contains 2 widgets:
* Trendz View - allow to add saved Trendz visualizations into ThingsBoard dashboards
* Trendz Builder - Trendz Visualization Builder for providing self service interface to your end users, so they can create their own analysis through standard ThingsBoard dashboard. 

#### Add visualization on ThingsBoard Dashboard
Once widgets bundle imported and you already have saved Trendz Visualization - follow next steps to add them on the dashboard:
* In Trendz, open required visualization
* Press **Share** button, sharable URL will be copied into clipboard
* Open required ThingsBoard Dashboard and press Edit button
* Select **Trendz View** widget from **Trendz Bundle** widget bundle and add it on the Dashboard
* Switch to **Advanced** tab of the widget and insert copied URL from step 1
* Save dashboard config

![image](/images/trendz/embed-trendz.gif) 


## Embed visualization on external site
You can also embed Trendz visualization into your web site by adding iFrame that points to required visualization.


Just add iFrame on your site with the following url **http://{TRENDZ_URL}/viewMode/{VIEW_ID}?jwt={JWT_TOKEN}**. Where:
* TRENDZ_URL - url of Trendz service
* VIEW_ID - ID of saved visualization inside Trendz
* JWT_TOKEN - ThingsBoard JWT token that should be used to authenticate in the ThingsBoard