---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Scatter Plot
description: Trendz Scatter Plot 
---

* TOC
{:toc}

## Video Tutorial

&nbsp; 
  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/wX4ro6FfyaE" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Compare 2 dimensions
Scatter plot show dependency between few properties of your topology.

In this case you only use **X-axis** and **Y-axis** sections and drop there fields of interest.
![image](/images/trendz/simple-scatter.png)

## Compare Many dimensions
In case when more than 2 dimensions should be compared, we can group measurements by multiple fields and apply a different colors to each group. 
Here is an example of how it can be used on the same dataset - we compare heat and energy consumption, but apply different color for each floor of each building.
As a result, we see that the first and third floors of Retroville are most energy-efficient and the first floor in Astarta is less efficient.

![image](/images/trendz/complex-scatter.png)
