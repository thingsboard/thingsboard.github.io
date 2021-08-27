---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Share and embed Visualizations
description: Share analysis results and group visualizations on Dashboards 

---

* TOC
{:toc}

All interactive visualizations created with the Trendz Analytics Platform could be shared with other users and embed on ThingsBoard Dashboards 
or external sites. In this guide, you will learn how to do this. 

## Share via ThingsBoard dashboard
You can share created visualizations or even provide a self-service interface for your users by adding Trendz widgets on ThingsBoard dashboards.
Follow 2 simple steps to make it: 

#### Import Trendz widget bundle

###### For ThingsBoard 3.3+ and Trendz 1.8+
Starting from ThingsBoard 3.3 and Trendz 1.8 - Trendz widgets can be natively embedded into the ThingsBaord dashboard.
Native Trendz widgets works much faster compared to original Trendz widgets that are based on iFrame. 

Add native Trendz library into ThingsBaord extensions:
* Download <a href="https://dist.thingsboard.io/trendz-tb-lib-1.8.0-SNAPSHOT.jar" download target="_blank">Native Trendz Library</a>
* Deploy library into ThingsBoard extension directory

```
scp trendz-tb-lib-1.8.0-SNAPSHOT.jar ubuntu@${THINGSBOARD_SERVER}:~/.

ssh ${THINGSBOARD_SERVER}

sudo cp trendz-tb-lib-1.0.0-SNAPSHOT.jar /usr/share/thingsboard/extensions/
sudo chown thingsboard:thingsboard /usr/share/thingsboard/extensions/trendz-tb-lib-1.0.0-SNAPSHOT.jar
```

* Restart ThingsBoard service to apply changes

```
sudo service thingsboard restart
```

Import Native Trendz widgets bundle
* Download <a href="https://dist.thingsboard.io/native_trendz_bundle.json" download target="_blank">Native_Trendz_widgets_bundle</a>
* Login as Tenant Administrator into ThingsBoard and go to **Widget Library**
* Press **Add new widget bundle** and select **import widget bundle**
* Import downloaded  widget bundle 

###### For ThingsBoard 3.0 - 3.2
* Download a <a href="https://dist.thingsboard.io/trendz_bundle_tb3.json" download target="_blank">Trendz_widgets_bundle V3</a> 
* Login as Tenant Administrator into ThingsBoard and go to **Widget Library**
* Press **Add new widget bundle** and select **import widget bundle**
* Import downloaded  widget bundle 

###### For ThingsBoard 2.x
* Download a <a href="https://dist.thingsboard.io/trendz_bundle_tb2.json" download target="_blank">Trendz_widgets_bundle V2</a> 
* Login as Tenant Administrator into ThingsBoard and go to **Widget Library**
* Press **Add new widget bundle** and select **import widget bundle**
* Import downloaded  widget bundle

This bundle contains 3 widgets:
* **Trendz View Static**- allow adding saved Trendz visualizations into ThingsBoard dashboards
* **Trendz View - with filter alias**- similar to previous but also support dashboard aliases for resolving entities
* **Trendz Builder** - Trendz Visualization Builder for providing self-service interface to your end-users, 
so they can create their own analysis using ThingsBoard dashboard. 

**Note:** If after importing Trendz Widget Bundle into ThingsBoard, widgets do not work and white screen with error displayed - double-check
that correct bundle was imported. Widget API in ThingsBoard v2.x and v3.x is different. Ensure that you downloaded bundle for 
the correct ThingsBoard version.

#### Add visualization on ThingsBoard Dashboard
Once widgets bundle imported and you already have saved Trendz Visualization - follow next steps to add them on the dashboard:
* In Trendz, open required visualization
* Press **Share** button, sharable URL will be copied into the clipboard
* Open required ThingsBoard Dashboard and press Edit button
* Select **Trendz View Static** widget from **Trendz Bundle** and add it on the Dashboard
* Switch to **Advanced** tab of the widget and insert the copied URL from step 1
* Save dashboard

![image](/images/trendz/embed-trendz.gif) 

#### Use Dashboard alias in Trendz View

In this case you want to conect standard ThingsBoard widgets located on the dashboard with Trendz View. 
You can do this using ThingsBoard dashboard aliases and **Trendz View - with filter alias** from **Trendz widget Bundle**.

**Example**: we have 10 **Machine** devices in ThingsBoard. We want to create a dashboard that will show all **Machine** devices 
in a list and once device selected - other widget on the dashboard should show details about selected device. In total we will have 2 widgets 
on the dashboard:
* Entity List - will show list of devices
* Trendz view - line chart that will show temperature of selected device 
 
On ThingsBoard side we setup a dashboard and add 2 widgets. Detailed instruction how to do this is not part of this tutorial, 
so here are brief steps:
* Create **all_devices** alias that resolves all devices with type **Machine**
* Create **selected_device** alias with type **entity form dashboard state** - this alias hold reference to selected device

![image](/images/trendz/embed-tb-alias.png)
 
* Add **Entity List** widget and use **all_devices** alias as a datasource
* Configure **On row click** action that will save selected device to **selected_device** alias 
* Save dashboard

On **Trendz View** side:
* Open view in Trendz
* Add **Machine** field to filter section - it will allow us to filter Machines by name
* Save View
* Copy Link to this view

Return to ThingsBoard Dashboard:
* Edit dashboard
* Add  **Trendz View - with filter alias** from **Trendz widget Bundle** to the dashboard
* Set **selected_device** as a datasource for Trendz View
* Use **name** as a key from alias

![image](/images/trendz/embed-trndz-alias.png)

* Switch to **Advanced** tab
* Insert link to view into **View URL**
* Insert **Machine** into **Filter Name** - content of this field should be the same as it typed in Trendz View Filter
* Save Dashboard

![image](/images/trendz/embed-trndz-filter-name.png)
![image](/images/trendz/embed-tb-filter-name.png)

Now, every time when **selected_device** alias updated, value if its Entity Name would be inserted into Trendz View filter.

If multiple filters configured in Trendz View - system will match required filter by name.

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/embed-trndz-alias.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-alias-connect.webm" type="video/webm">                 
        </video> 
    </div>
</div>

#### Use Dashboard time window

By default, all Trendz visualizations use individual time range. However you can change this behavior and configure widget to toke time from ThingsBoard Dashboard.
This option available for both, Static Trendz widget and for Trendz View with aliases.

* Open Dashboard Edit Mode
* Select required Trendz Widget
* Switch to **Advanced** Tab
* Enable checkbox **Use Dashboard Time Window** 

![image](/images/trendz/trndz_dashboard_time.png)

## Embed visualization on external site
You can also embed Trendz visualization into your web site by adding iFrame that points to required visualization.

Add iFrame on your site with the following URL **http://{TRENDZ_URL}/viewMode/{VIEW_ID}?token={JWT_TOKEN}**. Where:
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