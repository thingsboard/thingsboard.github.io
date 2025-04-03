* TOC
{:toc}

{% assign sinceVersion = "4.0.0" %}
{% include templates/since.md %}

Map widgets in ThingsBoard enable you to visualize entities and data on a map. They allow placing markers, zones, routes, and other geo-objects in space, which is especially useful for IoT solutions involving physical locations.

In ThingsBoard version 4.0, we&#39;ve completely reworked our Map widgets to make them more flexible, easier to configure, and more powerful for working with geospatial data.

<b><font size="4">Key tasks Map widgets help solve:</font></b>

- Real-time entity location tracking (e.g., GPS tracking of vehicles).
- Route building and movement analysis (logistics, trip monitoring).
- Object visualization (factories, warehouses, floor plans) — via Image Map. 
- Interactive user-map interaction (placing points, creating geofences, etc.).

<b><font size="4">Types of Map widgets:</font></b>

- **Map** widget. Displays real-world locations using base maps like OpenStreetMap, Google Maps, HERE or Tencent.
- **Image Map** widget. Ideal for indoor layouts or relative positioning — perfect for floor plans, smart parking, factory zones, and more. Works with custom image backgrounds.
- **Trip Map** and **Route Map** widgets. Used to visualize object movement on the map. The Trip Map includes animated playback and timeline control for enhanced tracking visualization.

All map widgets support markers, marker tooltips, map action, polygons and circles.

<b><font size="4">Key improvements:</font></b>

- Placing the desired element (e.g., marker, polygon, circle) on the map in just a few clicks. Under the hood, this action triggers a custom function that receives the coordinates of the clicked location and adds them as attributes to the target entity.
- The unified **Trip Map** widget combines the functionality of the legacy Trip Animation and Router Map widgets:
    - Supports animated routes, markers, and stop points.
    - Introduced a dedicated set of marker icons.
    - Support for different path decorators and the option to display points.
    - Custom timeline controls (date format, playback speed, etc.).
- Dynamic map layers switching. Switch between standard, satellite, hybrid, or custom map views directly within the widget.
- Reference layer. A new optional layer for displaying transparent contextual map elements.
- Improved configuration of map items (Marker / Polygon / Circle):
  - Independent overlay configuration. Each overlay (marker, polygon, circle) now has separate settings that do not interfere with each other.
  - Fewer coordinate errors. Validation has been improved to help avoid mistakes when defining coordinates — it&#39;s now harder to forget required keys or misconfigure the source.
  - Predefined marker shapes. A set of standard marker shapes is now available out of the box. If needed, you can still use custom icons for full visual flexibility.
  - More color settings. In addition to "constant" and "function" types, there is now a "range" option, allowing automatic color changes based on key values (e.g., temperature, status).
  - You can now define *Action on click* and *Tag action* separately for each overlay, giving you better control over behavior.
  - Overlays can now be grouped, making it easy to show/hide multiple items at once on the map.
  - Improved item editing UX. Click on a map item, and contextual edit options will appear.
  - Attribute scope selection for coordinates. When configuring coordinates, you can now specify the scope (e.g., shared attributes, latest telemetry, etc.) to pull the values from.
- Additional datasources can be used for labels, tooltips, and displaying extra information directly on the map.
- Flexible control panel placement. Map controls (zoom, layer switch, custom buttons) can be placed in any corner of the map — adapt to your UI layout with ease.
- Map scale display. Optional scale bar added — useful for estimating distances directly on the map.
- Action buttons on the map. Add your own buttons with custom actions.

All of this — and more — is now available in the new Map widgets in ThingsBoard 4.0.

## Adding a Map widget to the dashboard

To add a Map widget to your dashboard, follow these steps:

- In dashboard edit mode, click the "Add widget" button at the top of the screen, or click the large "Add new widget" icon in the center of the screen (if this is your first widget on the dashboard);
- Find the "Maps" widget bundle and click on it;
- Select the specific map widget from the list and click on it;
- Configure the widget according to your needs;
- Click the "Add" button in the bottom right corner of the widget to finish adding it.

{% include images-gallery.html imageCollection="adding-map-widget" %}

## Maps widget configuration

### Map type

Switch to edit mode for the Map widget. The first thing you can configure is changing the widget type to "Image Map", as well as setting up the map layers. 

{% include images-gallery.html imageCollection="map-type" %}

Change the map provider by selecting one of the available options, or configure your own map server.
Add a new layer to easily switch between different map types (e.g., satellite or hybrid) with just a few clicks — directly from the widget.

To add a new layer, follow these steps:

- Click "Add layer";
- Enter a label for the layer;
- Select a provider from the available options, or add a custom provider and specify its layer;
- Apply the changes.

{% include images-gallery.html imageCollection="map-type-adding-layer-1" showListImageTitles="true" %}

Now switch to the new layer on the widget.

{% include images-gallery.html imageCollection="changing-map-type" %}

In the "Layer settings", you can also enable the "Reference layer" option — a special transparent layer that contains labeled map elements: 

- Go to the "Layer settings" by clicking the "gear" icon;
- From the dropdown menu, select the layer type, or leave it as "No layer" if you don’t want to use one.
- Apply changes.

{% include images-gallery.html imageCollection="map-type-reference-layer-1" %}

### Overlays

Map items are visual elements displayed on a map widget to represent the spatial position, area, or influence zone of entities and data.
Configure datasources, appearance, behavior, editing options, and grouping for map items.

ThingsBoard supports the following map item types:

- A **marker** is a point on the map based on the coordinates specified in the entity. It is used to display the location of a device, asset, or any tracked object.
- A **polygon** is a flat, closed shape made up of multiple connected points. It represents an area on the map. You can use the polygon option to mark your assets or any other objects. The polygon is based on coordinates specified in the entity.
- A **circle** is a flat shape defined by a center point and a radius, with all boundary points equidistant from the central point. You can use the circle option to mark your assets or any other entities. The circle is based on coordinates specified in the entity.

#### Marker

A marker can be used to indicate the location of a building, fixed sensors, a person's GPS position, and more.

You can place a marker on the map using predefined coordinates received from a device or another entity as attributes or telemetry — or manually using the map widget tools.

##### Add marker

To **place a marker on the widget, if the entity has defined coordinates**, follow the steps below.  
In this example, I&#39;ll use an entity alias, which refers to the asset "Gas station 1" as the data source.

- Switch to the widget edit mode and click "Add marker" in the "Overlays" section.
- Specify the data source — it can be a device, an entity alias, or a function.
- Define the coordinate keys. ThingsBoard automatically sets the coordinate keys as latitude and longitude. If your entity uses custom coordinate key names, update them here.
- Apply changes.

The marker will appear on the map according to the specified coordinates.

{% include images-gallery.html imageCollection="add-marker" %}

<br>

If an entity doesn&#39;t have coordinates set, you can manually **place marker using the map widget tools** — its coordinates will be automatically saved to the entity as attributes.
In this example, I&#39;ll also use an entity alias, which refers to the asset "Gas station 1" as the data source.

First, add the marker placement tool to the map:

{% include images-gallery.html imageCollection="manually-add-marker" showListImageTitles="true" %}

You can now place the marker on the map:

{% include images-gallery.html imageCollection="place-marker" showListImageTitles="true" %}

<br>

**Move marker**

To enable moving the marker on the map, activate the "Move" tool in the marker settings under the Edit marker section.
Then, click on the marker, hold the mouse button, and drag it to a new location.

{% include images-gallery.html imageCollection="move-marker" %}

<br>

**Remove marker**

To delete the marker, activate the "Remove" tool in the marker settings under the "Edit marker" section.
On the map, click on the marker and select the "trash bin" icon from the menu at the bottom of the widget.

To remove a marker, simply click on it, then click the "trash" icon in the menu at the bottom of the widget.

{% include images-gallery.html imageCollection="remove-marker" %}

##### Marker configuration

To access the configuration of a specific marker, click the "gear" icon in the same row.

{% include images-gallery.html imageCollection="marker-configuration" %}

<br>

**Datasource**

Specify the marker data source — it can be a device, entity alias, or function.

If necessary, use a filter.

{% include images-gallery.html imageCollection="marker-configuration-datasource" %}

<br>

**Keys**

Define the coordinate keys. ThingsBoard automatically sets the coordinate keys as latitude and longitude. If your entity uses custom coordinate key names, update them here.

Additional data keys can be used for labels, tooltips, and displaying extra information directly on the map.

{% include images-gallery.html imageCollection="marker-configuration-keys" %}

<br>

**Marker**

To customize the appearance of a marker, you can adjust its size, choose from a variety of standard marker shapes and icons, or use your own images for full visual flexibility.
In the color settings, in addition to the "Constant" and "Function" types, there is now a "Range" option that allows the color to change automatically based on key values.
You can also set an offset for the marker relative to its exact position.

In this example, we’ll change the icon and define a function that will update its color based on the value of the "state" key, which is specified as an additional data key in the Keys section.

```js
var state = data.state;
if (typeof state !== undefined) {
    if (state == 'opened'){
        return 'green';
    } else {
        return 'red';
    }
} else {
    return 'grey';
}

```
{:.copy-code}

{% include images-gallery.html imageCollection="icon-configuration" showListImageTitles="true" %}

<br>

**Label**

Here, you can customize the label displayed above the marker.
By default, the label displays the entity name. You can edit the label text or use a label function to display more dynamic information. 
For example, the label can show the current status of the object, providing quick and clear insight into its state. 
Alternatively, you can hide the label altogether.

Use this example to make the label more visually appealing:

```text
<div style='position: relative; white-space: nowrap; text-align: center; font-size: 14px; top: 2px;'><span style='margin-left: -500%;'></span><div style='border: 2px solid #EC9704; border-radius: 10px; color: #000; background-color: #fff;  padding-left: 8px; padding-right: 8px; padding-top: 3px; padding-bottom: 3px;'>${entityLabel}</div></div>
```
{:.copy-code}

{% include images-gallery.html imageCollection="marker-configuration-appearance-label" %}

<br>

**Tooltip**

Here you can configure a tooltip that appears when you click on or hover over the marker.
Use the tooltip pattern or tooltip function to define more dynamic content. Alternatively, you can hide the tooltip altogether.

For example, you might want the tooltip to display the status of a fueling station (open/closed) by retrieving the value from the "state" key, which is specified as one of the "Additional data keys" in the "Keys" section.   
Use the function below and paste it into the Tooltip function window:

```js
const stateObj = {
    "opened": "#4CAF50",
    "closed": "#D12730"
};

const currentState = data.state;

return `<div style="display: flex; justify-content: space-between; align-items: center; gap: 7px">
        <span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${data.entityName} is ${currentState}</span>
        <span style="width: 10px; height: 10px; border-radius: 100px; background-color: ${stateObj[currentState]}"></span>
    </div>`;
```
{:.copy-code.expandable-6}

{% include images-gallery.html imageCollection="marker-configuration-appearance-tooltip" %}

<br>

**Tag actions**

You can add an action to the tooltip in the form of a tag.
This action could be switching to a new dashboard state, navigating to a different dashboard, opening a URL, or even triggering a custom action.
First, you need to add a tag action and then reference its name in the tooltip function.

The function below already includes a reference to the tag action named "my-action".
If you gave your tag action a different name, please replace "my-action" with your actual tag name.
Use this function to replace the previous tooltip function:

```js
const stateObj = {
  "opened": "#4CAF50",
  "closed": "#D12730"
};

const currentState = data.state;

return `<div style="text-align: center">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 7px">
                <span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${data.entityName} is ${currentState}</span>
                <span style="width: 10px; height: 10px; border-radius: 100px; background-color: ${stateObj[currentState]}"></span>
            </div>
            <link-act name='my-action'>Details</link-act>
    </div>`;
```
{:.copy-code.expandable-6}

{% include images-gallery.html imageCollection="marker-configuration-appearance-tooltip-action" showListImageTitles="true" %}

<br>

**Behavior**

Customize the behavior of the marker when clicked to go to another state/dashboard, open an external link, or perform a custom action.

{% include images-gallery.html imageCollection="marker-configuration-appearance-behavior" showListImageTitles="true" %}

<br>

**Groups**

Overlays can be grouped, making it easier to show or hide multiple map objects at once by organizing them into a group.

{% include images-gallery.html imageCollection="marker-configuration-appearance-groups" showListImageTitles="true" %}

<br>

**Edit marker**

Check the boxes next to the desired tools (**Add** / **Move** / **Remove**) to enable these options for marker operations on the widget.

You can also choose the scope where the marker&#39;s location coordinates should be stored: either the **Server** or **Shared** attribute.

Optionally, enable snapping to other vertices for more precise drawing.

{% include images-gallery.html imageCollection="marker-configuration-appearance-edit-marker" %}

<br>

**Use map markers clustering**

{% include images-gallery.html imageCollection="use-map-markers-clustering" %}

#### Polygon

The polygon is a plane figure that&#39;s described by a finite number of dots. 
A polygon can be used to mark geofences for location-based triggers, define areas such as buildings, fields, or service zones, and visualize coverage areas or restricted regions.

Polygon coordinates must follow this format:
```
[[1CoordinateLatitude,1Coordinatelongitude],[2CoordinateLatitude,2Coordinatelongitude]...[nCoordinateLatitude,nCoordinatelongitude]]
```

ㅤ&#42; **n** - number of coordinates which polygon is described by.

##### Add polygon

You can **mark your assets and any other entities with a polygon using predefined coordinates** received as attributes or telemetry.
In this example, I&#39;ll use an entity alias, which refers to assets of the type "Parking spots" as the data source.

- Switch to edit mode on the widget and click "Add polygon" in the "Overlays" section.
- Specify the data source — this can be a device, an entity alias, or a function.
- ThingsBoard automatically uses "perimeter" as the default coordinate key. If your setup uses a custom key name, update it here accordingly.
- Apply changes.

The polygon has been successfully added to the map.

{% include images-gallery.html imageCollection="add-polygon" %}

<br>

Alternatively, you can **draw the polygon manually using the map widget tools** — in this case, the coordinates will be automatically saved to the entity as attributes.
In this example, I&#39;ll also use an entity alias, which refers to assets of the type "Parking spots" as the data source.

First, add the polygon placement tool to the map:

- Switch to edit mode on the widget and click "Add polygon" in the "Overlays" section.
- Specify the data source — this can be a device, an entity alias, or a function.
- ThingsBoard automatically uses "perimeter" as the default coordinate key. If your setup uses a custom key name, update it here accordingly.
- Open the "Polygon configuration" window.
- Scroll down to the "Edit polygon" section and check the "Add" tool.
- Choose where to store the coordinates — either in the "Server" or "Shared" attribute scope.
- Optionally, enable snapping to other vertices for precision drawing.
- Don&#39;t forget to save your changes.

{% include images-gallery.html imageCollection="manually-add-polygon" %}

You can now draw a polygon on the map:

- The map widget offers two tools for adding a polygon. Choose the option that suits your needs:
  - "Drew rectangle" – a shape with four points (a rectangle).
  - "Drew polygon" – a custom shape with at least three points.
- If you&#39;re using an alias with multiple entities as the data source, select the desired entity from the dropdown list;
- Find the desired location on the map and click to place the first point;
- Adjust the polygon to the desired size, then click again to finish drawing. If you&#39;re using the "Drew polygon" tool, make sure to close the shape by connecting the first and last points.

- The polygon will be added, and its coordinates will be automatically saved to the entity as an attribute.

{% include images-gallery.html imageCollection="place-polygon-1" %}

{% include images-gallery.html imageCollection="place-polygon-2" %}

##### Polygon configuration

To access the settings of a specific polygon, go to the "Polygons" tab in the “Overlays” section, then click the "gear" icon next to the polygon you want to configure.

{% include images-gallery.html imageCollection="polygon-configuration" %}

<br>

**Datasource**

Specify the polygon’s data source — it can be a device, an entity alias, or a function.

If needed, apply a filter to narrow down the selection.

{% include images-gallery.html imageCollection="polygon-configuration-datasource" %}

<br>

**Keys**

Define the key that contains the polygon coordinates.
By default, ThingsBoard uses "perimeter" as the polygon key. If your entity uses a different key name, make sure to update it here.

Additional data keys can be used for labels, tooltips, or to display extra information directly on the map.

{% include images-gallery.html imageCollection="polygon-configuration-keys" %}

<br>

**Polygon color**

{% include images-gallery.html imageCollection="polygon-color" showListImageTitles="true" %}

<br>

**Label** 

Configure the label displayed above the polygon.
By default, the label shows the name of the entity linked to that polygon. You can manually edit the label text or use a label function to display dynamic information.

For example, the label can show the current status of the polygon, providing users with a quick and clear understanding of its state.
If desired, you can also hide the label entirely.

```
<div style='position: relative; white-space: nowrap; text-align: center; font-size: 10px; top: -7px;'><span style='margin-left: -500%;'></span><div style='border: 2px solid #03bafc; border-radius: 5px; color: #000; background-color: #fff;  padding-left: 4px; padding-right: 4px; padding-top: 2px; padding-bottom: 2px;'>${entityLabel}</div></div>
```


#### Circle&#39;s configuration

A circle can be used to define areas of influence, such as a Wi-Fi zone or the range of a sensor, and more.

















### Additional datasources

Datasource for accessing attributes or telemetry from entities not displayed on the map, usable in map overlay functions.

### Map controls


### Map action buttons


### Common map  swttings


### Card appearance


### Actions



## Image Map widget

Displays the indoor or relative location of entities on an image map, making it ideal for floor plans, smart parking, and more. Entity coordinates are expected to range from 0 to 1. Supports markers, marker tooltips, widget actions, polygons, and circles for enhanced spatial representation.

## Trip Map widget

Displays an entity&#39;s trip on various map providers, allowing scrolling and animated movement. Supports custom markers, marker tooltips, widget actions, polygons, and circles for enhanced spatial representation.

## Route Map widget

Displays an entity&#39;s trip on various map providers. Supports custom markers, marker tooltips, widget actions, polygons, and circles for enhanced spatial representation.


