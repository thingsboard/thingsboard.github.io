{% if docsPrefix == null %}
{% assign YOUR_HOST = "[emulator](/docs/user-guide/resources/timeseries-map-bus-ce.js)" %}
{% assign EMULATOR = "device-emulator-ce.png" %}
{% assign TERMINAL = "timeseries-map-bus-ce.js" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign YOUR_HOST = "[emulator](/docs/user-guide/resources/timeseries-map-bus-pe.js)" %}
{% assign EMULATOR = "device-emulator-pe.png" %}
{% assign TERMINAL = "timeseries-map-bus-pe.js" %}
{% endif %}
{% if docsPrefix == "paas/" %}
{% assign YOUR_HOST = "[emulator](/docs/user-guide/resources/timeseries-map-bus-cloud.js)" %}
{% assign EMULATOR = "device-emulator-paas.png" %}
{% assign TERMINAL = "timeseries-map-bus-cloud.js" %}
{% endif %}

* TOC
{:toc}

In this guide, we will explore the functionalities of the Trip animation widget.
This widget can be useful for various use cases, but primarily it can be used for tracking, analyzing, and visualizing the movement of different entities in realtime.

## Prerequisites

Firstly, you need a device from which telemetry will be collected. You can use any device you have that provides coordinates (longitude and latitude) as telemetry in realtime.
Longitude and latitude are the key data for map visualization so that you'll see it on a widget at the dashboard which you chose.

For this guide, we will create a new device called **Tracker1**, which receives longitude, latitude, speed, circle radius, status, and polygon coordinates as telemetry using an {{YOUR_HOST}} written in JavaScript.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/adding-device-1-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/adding-device-1-pe.png)
{% endif %}

For receive telemetry and further visualize it on the dashboard execute script in a command line:

```bash
node {{TERMINAL}} $ACCESSTOKEN
```
{: .copy-code}
Where **$ACCESSTOKEN** is your device access token.

![image](/images/user-guide/ui/widgets/trip-animation-widget/{{EMULATOR}})

**$ACCESSTOKEN** is located in a device details.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/access-token-1-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/access-token-1-pe.png)
{% endif %}

Emulator is capable with Node.js version 12 or higher.

## Setting up Trip Animation widget

Since our goal is to track how our entity (Tracker1) moved over a certain period, we need to create a dashboard where the telemetry from this device will be visualized.
We can use an existing one or create a new dashboard. In our example, we create a new dashboard called "My New Dashboard".

{% include images-gallery.html imageCollection="create-dashboard-1" showListImageTitles="true" %}

Now let's add the "Trip Animation" widget to the dashboard.

{% include images-gallery.html imageCollection="create-dashboard-2" showListImageTitles="true" %}

Now we can see how our device moved over the last minute. Press the "Start" button.
We can also speed up the movement of our cursor by 5, 10, or 25 times so that we can check its route much faster.

{% include images-gallery.html imageCollection="create-dashboard-3" showListImageTitles="true" %}

## Customization

Now, when we got the basics of what our widget can provide, let us go for editing its settings to make it more functional and eye-catching.

### Appearance tab

#### Data settings

In the "Data settings" section you can add a special symbol that will be displayed next to the entity values. Additionally, you can set the number of digits to be displayed after the floating point number, and an alternative message when there is no data to display.

{% include images-gallery.html imageCollection="data-settings" showListImageTitles="true" %}

#### Map provider settings

Choose a map provider from the list or use custom provider.

{% include images-gallery.html imageCollection="map-provider" showListImageTitles="true" %}

#### Trip animation settings

Specify normalization data step in milliseconds. By default value is 1000.
Specify the names of the data keys that contain the coordinates of your entity. The defaults are "latitude" and "longitude".

{% include images-gallery.html imageCollection="latitude-longitude-key-name" %}

##### Tooltip

You can show/hide Tooltip, change its color, font color, the opacity of tooltip and tooltip text. Or use tooltip function (you may change data contained in a tooltip based on *data, dsData, dsIndex*).

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

##### Marker function

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

#### Path settings

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
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-decorator-1-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-decorator-1-pe.png)
{% endif %}

#### Points Settings

The next option is a show points option. Points are a telemetry data updates so that you can check each. For the points next options are available.

* Show/Hide points

* Point color

* Point size px

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-points-settings-1-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-points-settings-1-pe.png)
{% endif %}

* Use color point function

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-point-color-function-1-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-point-color-function-1-pe.png)
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

What’s a polygon? It’s a plane figure that’s described by a finite number of dots. You may mark your assets and any other entities with a polygon option.
We use polygon which is based on coordinates that are specified within the device we use, but you can use any other entity.

To add a polygon to the Trip Animation map widget, you need to: 
- Have a device that transmits the coordinates of the polygon as telemetry data. Polygon coordinates are being received in a format:

```
[[1CoordinateLatitude,1Coordinatelongitude],[2CoordinateLatitude,2Coordinatelongitude]...[nCoordinateLatitude,nCoordinatelongitude]]
``` 

where **n** - number of coordinates which polygon is described by.

Coordinates in our example:

```
[[37.770835,-122.510163],[37.771586,-122.495633],[37.772773,-122.471776],[37.773354,-122.461562],[37.774558,-122.454910],[37.767407,-122.454612],[37.766195,-122.466924],[37.765866,-122.477787],[37.764699,-122.509657]]
``` 

- Specify a polygon data key to the "Timeseries data keys" field of the "Trip Animation" widget;
- Turn on "Show polygon" option and add polygon key to the "Polygon key name" field of the "Polygon settings" section.

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-1" %}

<br>
For the polygon, we can specify the next settings:

* Enable/disable polygon edit

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-2" %}

* Polygon label text or polygon label function (you may change data contained in a polygon label based on *data, dsData, dsIndex*)

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-3" %}

* Polygon tooltip text or polygon tooltip function (you may change data contained in a polygon tooltip based on *data, dsData, dsIndex*)

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-4" %}

* Polygon color, polygon opacity, or polygon color function (you may change polygon color based on *data, dsData, dsIndex*)

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-5" %}

* Polygon stroke color, polygon opacity, polygon weight or polygon stroke color function (you may change polygon color based on *data, dsData, dsIndex*)

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-6" %}

#### Circle settings

Circle is a plane figure, boundary points of which are always the same distance away from a fixed central point. We use circle which is based on coordinates that are specified within the device we use, but you can use any other entity.

You may mark your assets and any other entities with a circle option.

Circle coordinates are being received in a format:

```
{"latitude":Coordinatelatitude, "longitude":Coordinatelongitude, "radius":radius}
``` 

```
{"latitude":37.770460000, "longitude":-122.510870000, "radius":700}
``` 

<br>
For the circle, we can specify the next settings:

* Show/Hide circle

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-1-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-1-pe.png)
{% endif %}

* Enable/disable circle edit

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-2-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-2-pe.png)
{% endif %}

* Circle label text or circle label function (you may change data contained in a circle label based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-3-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-3-pe.png)
{% endif %}

* Circle tooltip text or circle tooltip function (you may change data contained in a circle tooltip based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-4-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-4-pe.png)
{% endif %}

* Circle fill color, circle fill color opacity, or circle fill color function (you may change circle color based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-5-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-5-pe.png)
{% endif %}

* Circle stroke color, stroke opacity, stroke weight or circle stroke color function (you may change circle color based on *data, dsData, dsIndex*)

{% if docsPrefix == null %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-6-ce.png)
{% else %}
![image](/images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-6-pe.png)
{% endif %}

## Video tutorial 
 
We also recommend you to review this video tutorial.

  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/qWCmDjca-T8" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

