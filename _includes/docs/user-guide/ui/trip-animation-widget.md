
{% assign feature = "Platform Integrations" %}

* TOC
{:toc}

## Introduction

Trip animation widget can be useful for multiple use cases, but mainly it is used for Tracking in a realtime, observing movement of the entities and visualizing it.

## Adding Trip Animation Widget

To start, let's [create a device](/docs/{{docsPrefix}}user-guide/ui/devices/). Telemetry will be collected from it.

However, you can use any device that receives coordinates(longitude and latitude) telemetry in a realtime.
Our device receives longitude, latitude and speed. Longitude and latitude are the key data for map visualization.

#### Configuring rule chain

For this tutorial, we created rule chain with generator to emulate telemetry and visualize it on the dashboard.
To create a rule chain, you should:

{% include images-gallery.html imageCollection="taw-rulenode" showListImageTitles="true" %}

<details>

<summary>
<b>An example of a function for a rule node that generates latitude, longitude and speed telemetries.</b>
</summary>

{% highlight ruby %}
var latitude = prevMsg.latitude || 34.0522300;
latitude += (Math.random() - 0.5) * 2;
if(latitude < 34.0412300) {
latitude = 34.0412300;
} else if (latitude > 34.0632300) {
latitude = 34.0632300;
}
var longitude = prevMsg.longitude || -118.2436800;
longitude += (Math.random() - 0.5) * 2;
if(longitude < -118.2556800) {
longitude = -118.2556800;
} else if (longitude > -118.2116800) {
longitude = -118.2116800;
}
var speed = prevMsg.speed || 80;
speed += (Math.random() - 0.5) * 6;
if(speed < 0) {
speed = 0;
} else if (speed > 90) {
speed = 90;
}
{% endhighlight %}

</details>

<br>
Also, you can use an [emulator](/docs/{{docsPrefix}}user-guide/resources/timeseries-map-bus.js) written in JavaScript to receive telemetry and visualize it on the dashboard.

#### Adding a widget

After the device added, we need to [create a dashboard](/docs/{{docsPrefix}}user-guide/dashboards/#adding-a-dashboard) to visualize telemetry. 
It is useful to track how an entity was moving in a specific period of time. We can use the existing dashboard or create a new one for this tutorial.

For this tutorial, we created a new dashboard called “Dashboard1”.
Let's start editing it:

{% include images-gallery.html imageCollection="taw-add-dash" showListImageTitles="true" %}

Firstly, we need to create an [alias](/docs/{{docsPrefix}}user-guide/ui/aliases/) to indicate the entity from which we’ll receive telemetry data.
Earlier the device "Test device A1" was created. It was used as the originator for the generator rule node, so it will be used as an entity for the alias.

Let's give **“taw”** (Trip Animation Widget) name to our alias. 

{% include images-gallery.html imageCollection="taw-alias" showListImageTitles="true" %}

Finally, we have everything ready to visualize telemetry on the widget. 

{% include images-gallery.html imageCollection="taw-add-widget" showListImageTitles="true" %}

## Customization

Now, when we got the basics of what our widget can do, let's move on to editing its settings to make it more functional and eye-catching.

{% include images-gallery.html imageCollection="taw-advanced" %}

#### Settings tab

Basic Trip Animation widget settings are the same as in all time series widgets. 
You can read more about title, custom widget icon, widget style and mobile settings [here](/docs/{{docsPrefix}}user-guide/dashboards/#basic-widget-settings).

#### Advanced tab

Advanced settings tab allows specifying unique parameters for the Trip Animation widget for functionality that only it can provide.

{% include images-gallery.html imageCollection="taw-advanced-1" %}

##### 1. Map Provider Settings

{% include images-gallery.html imageCollection="taw-mapprovider" showListImageTitles="true" %}

##### 2. Trip Animation Settings

**2.1** Normalization data step (ms) determine the step of the marker on the route.

**2.2** Latitude & Longitude key names

You can specify name based on which widget will be updated. 
It uses data based on the label of the data. Meaning you can specify label “data1” for the longitude key value and get longitude from the alias, but only after editing longitude key name as “data1”.

{% include images-gallery.html imageCollection="taw-longitude" showListImageTitles="true" %}

**2.3** Widget label, or specify label function (you may change data contained in a widget label based on data, dsData, dsIndex)

![image](/images/user-guide/ui/widgets/trip-animation-widget/5.gif)
 
<details>

<summary>
<b>An example of a Label function:</b>
</summary>

{% highlight ruby %}
var speed = dsData[0][0]['speed'];
var res;
if (speed > 55) {
    res = "Too Fast"
} else {
    res = "Everything is OK"
}
return res;

{% endhighlight %}
</details>
<br>

**2.4** Show/Hide Tooltip, its color, its font color, opacity of tooltip and tooltip text or use tooltip function (you may change data contained in a tooltip based on data, dsData, dsIndex)

{% include images-gallery.html imageCollection="taw-tooltip" showListImageTitles="true" %}

<details>

<summary>
<b>An example of Tooltip function:</b>
</summary>

{% highlight ruby %}
var speed = dsData['speed'];
var res;
if (speed > 0) {
    res = "${entityName} <b>Speed:</b> " + String(speed)
} else {
    res = "On The stop"
}
return res;

{% endhighlight %}
</details>
<br>

* ** Marker options**

In addition to all of this, there are some settings for the marker and you can specify next settings for it:

* Color for default marker

* Custom marker image

* Custom marker image size px

* Set additional rotation angle for marker

* Marker image function (you may change marker image, marker image color based on data, dsData, dsIndex)

* Specify other possible marker images, which can be used in a marker image function

![image](/images/user-guide/ui/widgets/trip-animation-widget/1.gif)

Marker image function:
```javascript
var speed = dsData['speed'];
var res;
if (speed > 55) {
    res = images[0];
} else {
    res = images[1];
}
return res;
```

##### 3. Path Settings

* Path color or specify path color function (you may change data contained in a tooltip based on data, dsData, dsIndex) - the color of the marker moves 

![image](/images/user-guide/ui/widgets/trip-animation-widget/26.png)

Path color function:
```javascript
var speed = dsData['speed'];
var res;
if (speed > 50) {
    res = "red"
} else {
    res = "green"
}
return res;
```

* Path decorator, its size in px, end/beginning offset, decorator repeater, stroke weight and stroke opacity

![image](/images/user-guide/ui/widgets/trip-animation-widget/27.png)

##### 4. Path Points Settings

The next option is a show points option. Points are a telemetry data updates so that you can check each. For the points next options are available.

* Show/Hide points

* Point color

* Point size px

* Use point as an anchor, point as an anchor function (you may change data contained in a polygon tooltip based on data, dsData, dsIndex)

* Independent point tooltip

* Auto-close point popup

![image](/images/user-guide/ui/widgets/trip-animation-widget/2.gif)

##### 5. Polygon options

What’s a polygon? It’s a plane figure that’s described by a finite number of dots. We use polygon which is based on coordinates that are specified within the device we use, but you can use any other entity. 

You may mark your assets and any other entities with a polygon option. For the polygon, we can specify the next settings. Polygon coordinates are being received in a format:

```
[[1CoordinateLatitude,1CoordinateLatitude],[2CoordinateLatitude,2CoordinateLatitude]...[nCoordinateLatitude,nCoordinateLatitude]]
``` 

where **n** - number of coordinates which polygon is described by.

* Show/Hide polygon

* Polygon tooltip text or polygon tooltip function (you may change data contained in a polygon tooltip based on data, dsData, dsIndex) 

* Polygon color, opacity

* Polygon border color, opacity, weight 

* Polygon color function  (you may change polygon color based on data, dsData, dsIndex)

![image](/images/user-guide/ui/widgets/trip-animation-widget/28.png)

## Video tutorial 
 
We also recommend you to review this video tutorial.

  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/qWCmDjca-T8" frameborder="0" allowfullscreen></iframe>
    </div>
</div>


## Device emulator
 
[Emulator](/docs/{{docsPrefix}}user-guide/resources/timeseries-map-bus.js)

In order to execute script go for a command line:
```bash
node timeseries-map-bus.js $ACCESSTOKEN
```
Where **$ACCESSTOKEN** is your **Device** **access token**.

**$ACCESSTOKEN** is located in a **Device details**. 
![image](/images/user-guide/ui/widgets/trip-animation-widget/34.png)

Emulator is capable with Node.js v8.10.0
