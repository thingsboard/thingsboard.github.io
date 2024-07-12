---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Card
description: Trendz Card
---

* TOC
{:toc}


Card widget allows visualizing the single important metrics and monitors its dynamics.

## Video Tutorial

&nbsp;

<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/ZXORc5nipgg" frameborder="0" allowfullscreen></iframe>
    </div>
</div>


## Simple Card

For creating simple Card view:

* drag and drop the field that you would like to monitor in the **Main Value** column;
* select required aggregation type

![image](/images/trendz/card-simple.png)


## Compare with other value

We can compare main value with another one. For example we have required amount of products that should be produced, saved as telemetry of the device.
And we ant compare it with how many products already produced.

* Add the value for comparison in the **Compared value** column;

![image](/images/trendz/card-compare.png)


The compared value will present the difference between these two figures in percentage.

## Compare with previous interval

We can also compare current value with the previous interval. If we want show how much coffee beans consumed in
this month compared to the previous month:

* For the field in the **Compared value** section enable **Local Date**
* Select **Prev Month** time range
* For the main view time range set **This Month**

![image](/images/trendz/card-local-config.png)


The compared value will present the difference between these two figures in percentage.

## Card title

While creating the card you can give it a meaningful name for quick navigation.
To do that, open the setting section in the right bottom corner and add Name in the Title section.