
{% assign feature = "Platform Integrations" %}

* TOC
{:toc}

## Overview

In this example, we'll study trip animation widget functionality. 

This widget might be useful for different use cases, but mainly it might be used for a Tracking in a realtime, researching movement of the entities and visualizing it.
{% if docsPrefix == null %}
{% else %}
This guide was written for [cloud](https://thingsboard.cloud), so some steps will be a little different from Community Edition.
{% endif %}

It's capable of all further versions.

## Create device emulator

Firstly you need to create a device from which will collect telemetry.

Also, you may use any device you have with a coordinates telemetry (longitude and latitude).

This can be any device which receives its coordinates in a realtime.

Longitude and latitude are the key data for map visualization so that you'll see it on a widget at the dashboard which you chose.



Create a new device **Tracker1**.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-device-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-device-1-pe.png)
{% endif %}

{% if docsPrefix == null %}
{% assign YOUR_HOST = "[emulator](/docs/user-guide/resources/timeseries-map-bus-ce.js)" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign YOUR_HOST = "[emulator](/docs/user-guide/resources/timeseries-map-bus-pe.js)" %}
{% endif %}
{% if docsPrefix == "paas/" %}
{% assign YOUR_HOST = "[emulator](/docs/user-guide/resources/timeseries-map-bus-cloud.js)" %}
{% endif %}
In our example, the device receives its longitude, latitude, speed, radius of circle, status, and coordinates of polygon use an {{YOUR_HOST}} written in javascript.

For receive telemetry and further visualize it on the dashboard execute script in a command line:

```bash
node timeseries-map-bus.js $ACCESSTOKEN
```
{: .copy-code}
Where **$ACCESSTOKEN** is your device access token.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/device-emulator-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/device-emulator-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/device-emulator-paas.png)
{% endif %}

**$ACCESSTOKEN** is located in a device details.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/access-token-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/access-token-1-pe.png)
{% endif %}

Emulator is capable with Node.js v8.10.0

## Setting up Trip Animation Widget

### Creating a dashboard

We need to create a dashboard where our telemetry will be visualized. It might be useful if your goal is to track how your entity moved in a specific period. 

We can use an existing one or create a new dashboard for our new use case. 

In our example, we create a new dashboard called “Dashboard1” for our guide reasons. 

### Adding widget

Create and open an empty dashboard. And let’s fill it with some content. Click pencil button "Enter edit mode".

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-1-pe.png)
{% endif %}

Firstly we need to create an **alias** to specify entity from which we’ll receive telemetry data. 

Our entity in this guide will be **“Tracker1”** device which we created previously. We’ll give **“GeoData1”** name to our alias. 

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-2-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-2-pe.png)
{% endif %}

Now we go for adding a widget!

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-3-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-3-pe.png)
{% endif %}

Trip animation widget is located in Maps bundle 

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-4-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-4-pe.png)
{% endif %}

In our widget we add **coordinates**, **latitude**, **longitude**, **radius**, **speed** and **status** from our alias **“GeoData1”** as our parameters.

They have the same labels as their keys are. Secondly, we create a widget on which we will visualize our telemetry.

We use **Trip Animation** widget in our guide. It’s located in Maps Bundle, Time series tab.

Also, we’ll go for “Use dashboard timewindow” so that we’ll make it easier to synchronise our data.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-5-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-5-pe.png)
{% endif %}

In addition to this, we’ll use last minute received data to visualize and change aggregation function to None, because we don’t need to guess possible data value for the next time period, we receive data in realtime without any errors.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-6-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-6-pe.png)
{% endif %}

Now we can take a look at how our device is being moving for the last minute in a realtime. Press the “Start” button.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-7-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-7-pe.png)
{% endif %}

We also can speed up our timeline cursor up to 1,5,10,25 times so that we can make a check on its routing much faster.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-8-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/adding-widget-8-pe.png)
{% endif %}

## Customization

### Settings tab

Now, when we got the basics of what our widget can provide, let us go for editing its settings to make it more functional and eye-catching. Firstly we go to settings, there we can specify:

* Title of widget, its style

* Title tooltip

* Title icon, icon colour, icon size in a px

* Change widget style

* Background color, text color, padding, margin

* Enable/disable drop shadow

* Enable/disable fullscreen mode for widget

* Enable/disable legend display

* Specify mobile settings


Let's see how it works.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/widget-settings-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/widget-settings-1-pe.png)
{% endif %}

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/widget-settings-2-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/widget-settings-2-pe.png)
{% endif %}

### Advanced tab

In a settings tab, we can specify unique parametres for Trip animation widget for functionality that only it can provide. We have:

#### Map Provider Settings

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-1-pe.png)
{% endif %}

#### Trip Animation Settings

##### Normalization data step (ms) 

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-2-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-2-pe.png)
{% endif %}

##### Latitude & Longitude key names
You can specify name based on which widget will be updated. It uses data based on the label of the data. So that you may specify label “data-1” for the longitude key value and get longitude from the alias after we edit longitude key name as “data-1”. 

{% include images-gallery.html imageCollection="advanced-settings-key-name" %}

##### Tooltip function
You can show/hide Tooltip, its color, its font color, the opacity of tooltip and tooltip text or use tooltip function (you may change data contained in a tooltip based on *data, dsData, dsIndex*)

{% include images-gallery.html imageCollection="advanced-settings-tooltip" %}

Tooltip function:
```javascript
var speed = data['speed'];
var res;
if (speed > 0) {
    res = "${entityName}</br><b>Speed:</b> " + String(speed)
} else {
    res = "${entityName}</br><b>Status: On The stop</b>"
}
return res;
```
{: .copy-code}

#### Markers settings

##### Label function

* Set additional rotation angle for marker

{% include images-gallery.html imageCollection="advanced-settings-additional-rotation-angle-for-marker" %}

* Widget label, or specify label function (you may change data contained in a widget label based on *data, dsData, dsIndex*)

{% include images-gallery.html imageCollection="advanced-settings-label" %}
 
Label function:
```javascript
var speed = data['speed'];
var res;
if (speed > 55) {
    res = "Too Fast"
} else {
    res = "Everything is OK"
}
return res;
```
{: .copy-code}

##### Marker function:

In addition to all of this, there are some settings for the marker and you can specify next settings for it:

* Custom marker image

* Custom marker image size px

{% include images-gallery.html imageCollection="advanced-settings-marker-image" %}

* Marker image function (you may change marker image, marker image color based on *data, dsData, dsIndex*)

* Specify other possible marker images, which can be used in a marker image function

{% include images-gallery.html imageCollection="advanced-settings-marker-image-function" %}

Marker image function:
```javascript
var speed = data['speed'];
var res = {
    url: images[0],
    size: 40
}
if (speed < 55) {
    res.url = images[0];
} else {
    res.url = images[1];
}
return res;
```
{: .copy-code}

#### Path Settings

You can specify path color or specify path color function (you may change data based on *data, dsData, dsIndex*) - the color of the marker moves 

{% include images-gallery.html imageCollection="advanced-settings-path-color-function" %}

Path color function:
```javascript
var speed = data['speed'];
var res;
if (speed > 55) {
    res = "red"
} else {
    res = "green"
}
return res;
```
{: .copy-code}

##### Path decorator

* Path decorator, its size in px, end/beginning offset, decorator repeater, stroke weight and stroke opacity

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-decorator-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-decorator-1-pe.png)
{% endif %}

#### Points Settings

The next option is a show points option. Points are a telemetry data updates so that you can check each. For the points next options are available.

* Show/Hide points

* Point color

* Point size px

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-points-settings-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-points-settings-1-pe.png)
{% endif %}

* Use color point function

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-point-color-function-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-point-color-function-1-pe.png)
{% endif %}

Points color function:
```javascript
var speed = data['speed'];
var res;
if (speed > 55) {
    res = "red"
} else {
    res = "green"
}
return res;
```
{: .copy-code}

* Use point as an anchor (you may change data based on *data, dsData, dsIndex*)

{% include images-gallery.html imageCollection="advanced-settings-anchor-function" %}

Point as anchor function:
```javascript
var speed = data['speed'];
if (speed > 55) {
    return true;
} else {
    return false;
}
```
{: .copy-code}

* **Independent point tooltip**


#### Polygon Settings

What’s a polygon? It’s a plane figure that’s described by a finite number of dots. We use polygon which is based on coordinates that are specified within the device we use, but you can use any other entity. 

You may mark your assets and any other entities with a polygon option.

Polygon coordinates are being received in a format:

```
[[1CoordinateLatitude,1CoordinateLatitude],[2CoordinateLatitude,2CoordinateLatitude]...[nCoordinateLatitude,nCoordinateLatitude]]
``` 

where **n** - number of coordinates which polygon is described by.

<br>
For the polygon, we can specify the next settings:

* Show/Hide polygon

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-1-pe.png)
{% endif %}

* Enable/disable polygon edit

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-2-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-2-pe.png)
{% endif %}

* Polygon label text or polygon label function (you may change data contained in a polygon label based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-3-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-3-pe.png)
{% endif %}

* Polygon tooltip text or polygon tooltip function (you may change data contained in a polygon tooltip based on *data, dsData, dsIndex*) 

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-4-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-4-pe.png)
{% endif %}

* Polygon color, polygon opacity, or polygon color function (you may change polygon color based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-5-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-5-pe.png)
{% endif %}

* Polygon stroke color, polygon opacity, polygon weight or polygon stroke color function (you may change polygon color based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-6-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-6-pe.png)
{% endif %}

#### Circle settings

Circle is a plane figure, boundary points of which are always the same distance away from a fixed central point. We use circle which is based on coordinates that are specified within the device we use, but you can use any other entity.

You may mark your assets and any other entities with a circle option. 

Circle coordinates are being received in a format:

```
{"latitude": 37.770460000, "longitude":-122.510870000, "radius":700}
``` 

<br>
For the circle, we can specify the next settings:

* Show/Hide circle

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-1-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-1-pe.png)
{% endif %}

* Enable/disable circle edit

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-2-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-2-pe.png)
{% endif %}

* Circle label text or circle label function (you may change data contained in a circle label based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-3-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-3-pe.png)
{% endif %}

* Circle tooltip text or circle tooltip function (you may change data contained in a circle tooltip based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-4-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-4-pe.png)
{% endif %}

* Circle fill color, circle fill color opacity, or circle fill color function (you may change circle color based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-5-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-5-pe.png)
{% endif %}

* Circle stroke color, stroke opacity, stroke weight or circle stroke color function (you may change circle color based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-6-ce.png)
{% else %}
![image](https://img.thingsboard.io/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-6-pe.png)
{% endif %}


## Video tutorial 
 
We also recommend you to review this video tutorial.

  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/qWCmDjca-T8" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

