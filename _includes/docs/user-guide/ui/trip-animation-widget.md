{% if docsPrefix == null %}
{% assign NEW_DEVICE = "[create a new device](/docs/getting-started-guides/helloworld/#step-1-provision-device)" %}
{% assign YOUR_HOST = "[download the script](/docs/user-guide/resources/timeseries-map-bus-ce.js)" %}
{% assign EMULATOR = "device-emulator-ce.png" %}
{% assign TERMINAL = "timeseries-map-bus-ce.js" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign NEW_DEVICE = "[create a new device](/docs/getting-started-guides/helloworld-pe/#step-1-provision-device)" %}
{% assign YOUR_HOST = "[download the script](/docs/user-guide/resources/timeseries-map-bus-pe.js)" %}
{% assign EMULATOR = "device-emulator-pe.png" %}
{% assign TERMINAL = "timeseries-map-bus-pe.js" %}
{% endif %}
{% if docsPrefix == "paas/" %}
{% assign NEW_DEVICE = "[create a new device](/docs/paas/getting-started-guides/helloworld/#step-1-provision-device)" %}
{% assign YOUR_HOST = "[download the script](/docs/user-guide/resources/timeseries-map-bus-cloud.js)" %}
{% assign EMULATOR = "device-emulator-paas.png" %}
{% assign TERMINAL = "timeseries-map-bus-cloud.js" %}
{% endif %}

* TOC
{:toc}

In this guide, we will explore the functionalities of the Trip animation widget.
This widget can be useful for various use cases, but primarily it can be used for tracking, analyzing, and visualizing the movement of different entities in realtime.

## Prerequisites

Firstly, you need a device from which telemetry will be collected. You can use any device you have that provides coordinates (longitude and latitude) as telemetry in realtime.
Longitude and latitude are the key data for map visualization, allowing you to view the data on a widget in the dashboard you selected.

For this guide, we will {{NEW_DEVICE}}{:target="_blank"} called **Tracker1**, which receives longitude, latitude, speed, circle radius, status, and polygon coordinates as telemetry using an emulator written in JavaScript.

{% include images-gallery.html imageCollection="adding-device" %}

To receive telemetry and further visualize it on the dashboard {{YOUR_HOST}}{:target="_blank"} and execute it using the following command:

```bash
node {{TERMINAL}} $ACCESSTOKEN
```
{: .copy-code}

Where **$ACCESSTOKEN** is the access token for your device, which is located in the device details.

![image](/images/user-guide/ui/widgets/trip-animation-widget/{{EMULATOR}})

Emulator is compatible with Node.js version 12 or higher.

## Setting up Trip Animation widget

Since our goal is to track the movement of our entity (Tracker1) moved over a certain period, we need to create a dashboard where the telemetry from this device will be visualized.
We can use an existing one or create a new dashboard. In our example, we create a new dashboard called "My New Dashboard".

{% include images-gallery.html imageCollection="create-dashboard-1" showListImageTitles="true" %}

Now let's add the "Trip Animation" widget to the dashboard:

{% include images-gallery.html imageCollection="create-dashboard-2" showListImageTitles="true" %}

Now, we can observe the movement of our device over the last minute. Press the "Start" button.
We can also speed up the movement of our cursor by 5, 10, or 25 times so that we can check its route much faster.

{% include images-gallery.html imageCollection="create-dashboard-3" %}

## Customization

Now that we've added the Trip Animation widget to our dashboard and configured its data source, let's move on to adjusting the settings to explore its key features.
All further actions will be performed in the widget settings window on the "Appearance" tab. To do this, enter widget editing mode and navigate to the "Appearance" tab.

{% include images-gallery.html imageCollection="appearance-tab" %}

Now let's proceed directly to reviewing each item on the "Appearance" tab in the Trip Animation widget settings.

#### Data settings

In the "Data settings" section you can add a special symbol that will be displayed next to the entity values. Additionally, you can set the number of digits to be displayed after the floating point number, and an alternative message when there is no data to display.

{% include images-gallery.html imageCollection="data-settings" %}

#### Map provider settings

Choose a map provider from the list or use custom provider.

{% include images-gallery.html imageCollection="map-provider" %}

#### Trip animation settings

Here, you specify the names of the data keys containing the coordinates of your entity. By default, these are "latitude" and "longitude".
You also specify the normalization data step in milliseconds. By default, this value is set to 1000.

{% include images-gallery.html imageCollection="latitude-longitude-key-name" %}

##### Tooltip

Make use of this feature to display a tooltip. You can also customize the tooltip to better match your style by changing the background and font colors, as well as adjusting its opacity.
Alternatively, take advantage of the tooltip function to provide more dynamic content. In our example, the tooltip displays the entity's speed, offering a quick and informative glance at its current pace.

{% include images-gallery.html imageCollection="advanced-settings-tooltip" %}

The tooltip function used in the example:
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

Set the initial rotation angle of the marker (in degrees).

{% include images-gallery.html imageCollection="advanced-settings-additional-rotation-angle-for-marker" %}

##### Label function

Show or hide the entity's label. You can also change the label text or utilize a label function for more dynamic information. 
For example, the label could display the movement status of the entity, providing a quick and clear understanding of its current state.

{% include images-gallery.html imageCollection="advanced-settings-label" %}

The label function used in the example:
```javascript
var speed = data['speed'];
var res;
if (speed > 55) {
    res = "${entityName}</br>Status: Too Fast"
} else {
    res = "${entityName}</br>Status: Everything is OK"
}
return res;
```
{: .copy-code}

##### Marker function

You can specify the following parameters to configure the marker:

* Add custom marker image and set its size;

{% include images-gallery.html imageCollection="advanced-settings-marker-image" %}

* Use marker image function. For example, you can visually represent the speed of your vehicles in real-time by uploading several marker images, and they will change depending on the speed of the bus.

{% include images-gallery.html imageCollection="advanced-settings-marker-image-function" %}

The marker image function used in the example:
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

You have the option to choose the path color or use the path color function. For example, the path color can change with increasing or decreasing speed, providing an intuitive visual cue about the pace at which the object is moving.

{% include images-gallery.html imageCollection="advanced-settings-path-color-function" %}

The path color function used in the example:
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

Set the path decorator symbol, its color, end/start offset, repeatability, and size in pixels.

{% include images-gallery.html imageCollection="advanced-settings-path-decorator" %}

#### Points settings

The points represent telemetry data updates, allowing you to check each one individually. 

{% include images-gallery.html imageCollection="advanced-settings-points-settings" %}

You have the option to specify the color and size (in pixels) of the points to match your preferences or use a color point function.
This function allows you to visually track changes in data based on incoming telemetry from your entity.

{% include images-gallery.html imageCollection="advanced-settings-point-color-function" %}

The points color function used in the example:
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

The "Point as an anchor" feature allows you to navigate through data points based on a condition specified in the function. This makes it easier to sift through information according to specific criteria.

{% include images-gallery.html imageCollection="advanced-settings-anchor-function" %}

The point as anchor function used in the example:
```javascript
var speed = data['speed'];
if (speed > 55) {
    return true;
} else {
    return false;
}
```
{: .copy-code}

#### Polygon settings

What’s a polygon? It’s a plane figure that’s described by a finite number of dots. You may mark your assets and any other entities with a polygon option.
We use polygon which is based on coordinates that are specified within the device we use, but you can use any other entity.

To add a polygon to the Trip Animation map widget, you need to: 
- Have a device that transmits the coordinates of the polygon as telemetry data. Polygon coordinates are being received in a format:

```
[[1CoordinateLatitude,1Coordinatelongitude],[2CoordinateLatitude,2Coordinatelongitude]...[nCoordinateLatitude,nCoordinatelongitude]]
``` 

where **n** - number of coordinates which polygon is described by.

Polygon coordinates in our example:

```
[[37.770835,-122.510163],[37.771586,-122.495633],[37.772773,-122.471776],[37.773354,-122.461562],[37.774558,-122.454910],[37.767407,-122.454612],[37.766195,-122.466924],[37.765866,-122.477787],[37.764699,-122.509657]]
``` 

- Add a polygon data key to the "Timeseries data keys" field of the "Trip Animation" widget;
- Turn on "Show polygon" option and add polygon key to the "Polygon key name" field of the "Polygon settings" section.

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-1" %}

<br>
The following settings are available for the polygon:

* Check the "Enable polygon edit" checkbox to add a polygon editing menu to the map. With these tools, you can add a new polygon, move points of an existing polygon, move the entire polygon, cut the polygon area, or delete the polygon directly on the map widget.

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-2" %}

* Show or hide the label on the polygon. Change the text of the label or specify a function for the label to dynamically display data based on conditions you determined.
 
{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-3" %}

* Show/hide the polygon tooltip. You have the option to change the text within the tooltip or specify a function for the tooltip. It allows you to dynamically change specific information based on conditions you specify, making your tooltip more informative.

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-4" %}

* Change the color of the polygon or adjust the opacity of the polygon to suit your specific needs. Additionally, you have the option to specify a polygon color function, allowing the color to dynamically change based on conditions you specify.

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-5" %}

* Customize the appearance of your polygon by changing the stroke color, adjusting its opacity, and modifying the weight to better suit your visual needs. You can also set up a polygon stroke color function. This allows the stroke color to change automatically based on certain conditions or data, adding interactivity to your visualization.

{% include images-gallery.html imageCollection="advanced-settings-polygon-settings-6" %}

#### Circle settings

Circle is a plane figure, boundary points of which are always the same distance away from a fixed central point. You may mark your assets and any other entities with a circle option.
We use circle which is based on coordinates that are specified within the device we use, but you can use any other entity.

To add a circle to the Trip Animation map widget, you need to:
- Have a device that transmits the coordinates of the circle as telemetry data. Circle coordinates are being received in a format:

```
{"latitude":Coordinatelatitude, "longitude":Coordinatelongitude, "radius":radius}
``` 

Circle coordinates in our example:

```
{"latitude":37.770460000, "longitude":-122.510870000, "radius":700}
``` 

- Add a circle data key to the "Timeseries data keys" field of the "Trip Animation" widget;
- Turn on "Show circle" option and specify circle key to the "Circle key name" field of the "Circle settings" section.

{% include images-gallery.html imageCollection="advanced-settings-circle-settings-1" %}

<br>
The following settings are available for the circle:

* Check the "Enable circle edit" checkbox to add a circle editing menu to the map. With these tools, you can add a new circle, modify the radius, move, or delete the circle directly on the map widget.

{% include images-gallery.html imageCollection="advanced-settings-circle-settings-2" %}

* Show or hide the label on the circle. Change the text of the label or specify a function for the label to dynamically display data based on specific conditions.

{% include images-gallery.html imageCollection="advanced-settings-circle-settings-3" %}

* Show/hide the circle tooltip. You have the option to change the text within the tooltip or specify a function for the tooltip. It allows you to dynamically change specific information based on the circle's incoming data, making your tooltip more informative.

{% include images-gallery.html imageCollection="advanced-settings-circle-settings-4" %}

* Change the color of the circle or adjust the opacity of the circle to suit your specific needs. Additionally, you have the option to specify a circle color function, allowing the color to dynamically change based on certain conditions.

{% include images-gallery.html imageCollection="advanced-settings-circle-settings-5" %}

* Customize the appearance of your circle by changing the stroke color, adjusting its opacity, and modifying the weight to better suit your visual needs. You can also set up a circle stroke color function. This allows the stroke color to change automatically based on certain conditions or data, adding interactivity to your visualization.

{% include images-gallery.html imageCollection="advanced-settings-circle-settings-6" %}