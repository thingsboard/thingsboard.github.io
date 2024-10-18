---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: States
description: Trendz States
---

* TOC
{:toc}

&nbsp;
<div id="video">  
    <div  id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/FrubZ-odF1s" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## States

### Simple state

![image](/images/trendz/state-simple-view.png)

In this example we have **Machine** device that submit how many details where produced. We want to find what is 
production rate of our machines. 

Let's define our states:
* **Low Production** - amount of produced details < 75;
* **Moderate Production** - amount of produced details between 75 and 110;
* **High Production** - amount of produced details greater than 110;

Here is condition that chack does machine in **Low Production** state or not:
{% highlight javascript %}
    var okRate = none(Machine.okDetails);
    return okRate < 75;
{% endhighlight %}  

Here are steps required to do this:
* Create **Bar** chart
* Add **Date(RAW)** to **X-axis**
* Add **State** field and change title to **Low Production**
* Change field aggregation to **DURATION_PERCENT**
* Write formula for **Low Production**
* Repeat last 3 operations for **Moderate Production** and **High Production** states
* Enable stack mode, 100% stacked bar and labels in view settings

![image](/images/trendz/state-simple-config-drop.png)

![image](/images/trendz/state-simple-config.png)

Our view ready and now we know how much time(in percent) machines spent in different states.

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/state-simple-view.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-state-duration-percent.webm" type="video/webm">                 
        </video> 
    </div>
</div>


### State with multiple fields

![image](/images/trendz/state-multiple-view.png)

We can also use multiple fields from different assets\devices to calculate state. In this example we want detect how 
much time machines spent in critical state. Such visualisation will give an understanding how machine prorforms compered to other machines 
and when it should be maintained to prevent downtime.

We know that our machines is in critical state when **pressure** goes up and **rotation speed** goes down. So let's find how 
much time spent in critical state.

Here is a formal definition of **Critical** state:
{% highlight javascript %}
    var pressure = none(Machine.pressure);
    var speed = none(Machine.rotationSpeed);
    return pressure > 700 && speed < 35;
{% endhighlight %}  

* Create **Heatmap** chart
* Add **State** field and change title to **Critical**
* Change field aggregation to **DURATION_PERCENT**
* Write formula for **Critical** state
* Select **hour vs day of week** in **By** field

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/state-multiple-view.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-state-multiple-heatmap.webm" type="video/webm">                 
        </video> 
    </div>
</div>

### State Aggregation

Here is a list of supported aggregation functions for state fields:
* Duration - total time spent in state inside group. In hours, minutes, seconds etc.
* Duration percent - percent of time spent in state inside group.

### Get original field value

Before applying transformation you need to get a reference to the original field value. Here is an example how to do this:

```
var temp = none(Machine.temperature);
```

* none() - aggregation function
* Machine - Entity Name (it can be Asset Type or Device Type)
* temperature - Field Name

**All 3 parts are required**, you can not access original field value without aggregation function. 

If original field value is an attribute, entity name or owner name - you should use **uniq()** aggregation function.

This template can be used for comparing text fields:

```
var currentState = none(machine.status);
return "running" === currentState;
```

### Supported Aggregation Functions

State fields supports following aggregation functions:

* none()

Each function allows only 1 argument - reference to the filed on format EntityName.fieldName. For example:

```
sum(Machine.temperature)
```

Commonly, states are used for calculating how much time device/asset spent in different states. To get more precise results 
it is recommended you use **none()** aggregation - in this case system will process only raw telemetry to define is device inside 
defined state or not.

Aggregation function applied to a grouped dataset. Find more details about [Aggregation in this article](/docs/trendz/telemetry-aggregation/)

### Save and reuse state fields

Once the state field created you can save it for future reuse by pressing **Save Field** button under function editor. 
Current field label would be used as a field name. If a field with such name already exists - the system will overwrite it.

Saved state field is only a template. Once it is dropped from the left navigation tree into some axis, a new 
state field created and this field would not be connected with the original template.
It means that if you will update field configuration in the future, it will only update a template, 
but real state fields that are added to View configuration are not affected.

### Language

State fields use Javascript as a language for writing transformation function. Inner Engine provide 100% support of ECMAScript 5.1

## Next Steps

{% assign currentGuide = "States" %}{% include templates/trndz-guides-banner.md %}
