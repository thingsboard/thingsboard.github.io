---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Apply filter from alias
description: Apply filter from alias

---

In this guide we will describe how to connect standard ThingsBoard widgets located on the dashboard with Trendz View. 
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

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}