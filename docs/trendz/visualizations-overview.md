---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Visualisations Overview
description: Built in Visualisation Types in Trendz Analytics 
---

Trendz provides major visualization types required for analyzing IoT datasets. 

* [**Tables**](/docs/trendz/visualizations-tables)
* [**Line Chart**](/docs/trendz/visualizations-line)
* [**Bar Chart & Histogram**](/docs/trendz/visualizations-bar)
* [**Pie Chart**](/docs/trendz/visualizations-pie)
* [**Scatter Plot**](/docs/trendz/visualizations-scatter)
* [**Heat Map**](/docs/trendz/visualizations-heatmap)
* [**Calendar**](/docs/trendz/visualizations-calendar)
* [**Card**](/docs/trendz/visualizations-card)

## First visualisation

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/simple-line.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-first-view.webm" type="video/webm">                 
        </video> 
    </div>
</div>

* Open Trend UI home page and press **Create View** button
* Select **Line** chart
* Select **Date** field from left navigation panel and drop it to the **X axis** section
* Select any telemetry field from left navigation panel and drop it to the **Y axis** section

At this moment you will see average measurement from all entities in the ThingsBoard

* Add **Entity Name** to the **Series** section - separate series displayed for each entity

## Video Tutorial

We are glad to present the series of webinars about ThingsBoard Trendz Analytics functionality. 
Learn more about Trendz Analytics features and how it helps to transform the IoT data into value for informed decision-making.

&nbsp; 
  
<div id="video">  
    <div id="video_wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLYEKB_XwLCZIs-_Aoos3CdNIqSYrXk4LN" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

## Next Steps

{% assign currentGuide = "AvailableVisualizations" %}{% include templates/trndz-guides-banner.md %}