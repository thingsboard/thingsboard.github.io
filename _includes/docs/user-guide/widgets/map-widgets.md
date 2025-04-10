* TOC
{:toc}

Map widgets in ThingsBoard enable you to visualize entities and data on a map. They allow placing markers, zones, routes, and other geo-objects in space, which is especially useful for IoT solutions involving physical locations.

In ThingsBoard version 4.0, we&#39;ve completely reworked our Map widgets to make them more flexible, easier to configure, and more powerful for working with geospatial data.

<b><font size="4">Use cases</font></b>

- Real-time entity location tracking (vehicles, drones, people)
- Route visualization and movement analysis (logistics, public transport, historical paths)
- Visualization of object layouts (factory layouts, parking, floor plans)
- Interactive mapping (user-placed markers, geofence creation)

<b><font size="4">Types of map widgets</font></b>

- **Map** widget: Displays real-world locations using base maps like OpenStreetMap, Google Maps, HERE or Tencent.
- **Image Map** widget: Ideal for indoor layouts or relative positioning — perfect for floor plans, smart parking, factory zones, and more. Works with custom image backgrounds.
- **Trip Map** and **Route Map** widgets: Visualize movement on the map. The Trip Map includes animated playback and timeline control for enhanced tracking visualization.

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

To add a Map widget to the dashboard, follow these steps:

- In dashboard edit mode, click the "Add widget" button at the top of the screen, or click the large "Add new widget" icon in the center of the screen (if this is your first widget on the dashboard).
- Find the "Maps" widget bundle and click on it. This category includes all available map widget types.
- Select the map widget that best fits your use case.
- Configure the widget to match your data and visualization requirements. You can adjust data sources, appearance, map provider settings, and more.
- Click the "Add" in the bottom-right corner of the widget configuration window to place it on your dashboard.

{% include images-gallery.html imageCollection="adding-map-widget" %}

## Map type

The first step in configuring the map widget is selecting the map type.
ThingsBoard offers several map widgets, including Image Map, which allows you to use a custom background image as the map.

You can also configure map layers, enabling flexible switching between different map styles — such as satellite, hybrid, or custom layers — directly within the widget, with just a few clicks.

{% include images-gallery.html imageCollection="map-type" %}

<br>

**Adding a new map layer**

You can add additional layer to the map widget by following these steps:

- Click "Add layer".
- Enter a label for the layer — this name will be shown in the widget&#39;s layer switcher.
- Choose the map provider by selecting from the available options (OpenStreetMap, Google, HERE, Tencent) or by specifying a custom tile server.
- Apply changes.

{% include images-gallery.html imageCollection="map-type-adding-layer-1" %}

Now switch to the new layer on the widget.

{% include images-gallery.html imageCollection="changing-map-type" %}

<br>

In the "**Layer settings**", you can also enable the "**Reference layer**" option — a special transparent layer that contains labeled map elements: 

- Go to the "Layer settings" by clicking the "gear" icon.
- From the dropdown menu, select the layer type, or leave it as "No layer" if you don&#39;t want to use one.
- Apply changes.

{% include images-gallery.html imageCollection="map-type-reference-layer-1" %}

## Overlays

Map items are visual elements displayed on a map widget to represent the spatial position, area, or influence zone of entities and data.
These elements help visualize and interact with your devices, assets, or other tracked objects based on their spatial data.

ThingsBoard supports the following map item types:

- A **marker** is a point on the map based on the coordinates specified in the entity. It is used to display the location of a device, asset, vehicles or any tracked object.
- A **polygon** is a flat, closed shape made up of multiple connected points. It is used to represent areas or boundaries on the map. You can use the polygon option to mark your assets or any other objects. The polygon is based on coordinates specified in the entity.
- A **circle** is a flat shape defined by a center point and a radius, with all boundary points equidistant from the central point. It is ideal for visualizing zones of influence or coverage areas. The circle is based on coordinates specified in the entity.

Each map item type is bound to an entity and visualized based on its coordinates, provided as either attributes or telemetry.
You can customize their appearance, behavior, and interaction rules directly in the widget settings.

### Marker

Markers are commonly used to indicate the location of buildings, fixed sensors, vehicle tracking, or any other static or moving entities.

To be placed on the map, the entity must have coordinates as attributes or telemetry in the following format:
```
Latitude,Longitude
```

![image](/images/user-guide/widgets/maps/marker-1-pe.png)

#### Place marker on map

To place a marker on the map, follow these steps:

- Enter widget edit mode and go to the "Overlays" section.
- Make sure you&#39;re on the "Marker" tab and click "Add marker".
- Select the data source - it can be a device, an entity alias, or a function.
- Define the coordinate keys. By default, ThingsBoard uses *latitude* and *longitude* attributes as the coordinate keys for the marker. If your entity uses different key names, update them here.
- Apply the changes.

The marker will appear on the map based on the specified coordinates.

{% include images-gallery.html imageCollection="add-marker" %}

#### Marker configuration

To configure a specific marker, switch to the map widget&#39;s edit mode. In the "Overlays" section, click the "gear" icon button next to the desired marker to open its configuration panel.

{% include images-gallery.html imageCollection="marker-configuration" %}

**Datasource**

Specify the data source for the marker. It can be:
- A [device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}
- An [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"}
- A function

If needed, use the data filter to refine the selection (e.g., filter by name or type).

{% include images-gallery.html imageCollection="marker-configuration-datasource" %}

**Keys**

Define the coordinate keys.
By default, ThingsBoard uses *latitude* and *longitude* attributes as the default coordinate keys.
If your entity uses custom key names, update them accordingly.

You can also define additional keys for dynamic display elements, such as marker color, tooltip content, Label text, etc.

{% include images-gallery.html imageCollection="marker-configuration-keys" %}

**Marker**

Customize the marker by selecting a different one from a variety of standard shapes and icons, adjusting its size and color, or using your own images for full visual flexibility.

Marker styling example: The marker color will change dynamically based on the value of the "state" key:
- When state is opened, the marker turns green.
- When state is closed, the marker turns red.

```js
var state = data.state;
if (state  !== '') {
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

{% include images-gallery.html imageCollection="icon-configuration" %}

**Label**

The marker label is placed above the icon and, by default, displays the entity name. 
You can edit the label text or use a label function to show more dynamic information.

Label styling example:

```text
<div style='position: relative; white-space: nowrap; text-align: center; font-size: 14px; top: 2px;'>
    <span style='margin-left: -500%;'></span>
    <div style='border: 2px solid #EC9704; border-radius: 10px; color: #000; background-color: #fff;  padding-left: 8px; padding-right: 8px; padding-top: 3px; padding-bottom: 3px;'>${entityLabel}</div>
</div>
```
{:.copy-code}

{% include images-gallery.html imageCollection="marker-configuration-appearance-label" %}

**Tooltip**

Here you can configure a tooltip that appears when you click on or hover over the marker.
Use the tooltip pattern or tooltip function to define more dynamic content. Alternatively, you can hide the tooltip altogether.

For example, you want the tooltip displays the status of a fueling station (open/closed) by retrieving the value from the "state" key, which is specified as one of the "Additional data keys" in the "Keys" section.   
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

**Tag actions**

You can add an action to a tooltip as a tag. This can be to switch to a new dashboard state or another dashboard, to open an external URL, or even to initiate a custom action. 
Learn more about the available action types and how to configure them in the [widget actions documentation](/docs/{{docsPrefix}}user-guide/ui/widget-actions/){:target="_blank"}.

First, you need to add a tag action and then reference its name in the tooltip function:

{% include images-gallery.html imageCollection="marker-configuration-appearance-tooltip-action-1" showListImageTitles="true" %}

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

Click on the marker. In the tooltip that appears, you&#39;ll see a tag — click on it. The action you defined in the tag&#39;s settings will be executed.

{% include images-gallery.html imageCollection="marker-configuration-appearance-tooltip-action-1" %}

**Behavior**

Set the behavior of the marker when you click it.

{% include images-gallery.html imageCollection="marker-configuration-appearance-behavior" showListImageTitles="true" %}

**Groups**

Markers can be grouped, making it easier to show or hide them on the map with just a few clicks.

{% include images-gallery.html imageCollection="marker-configuration-appearance-groups" showListImageTitles="true" %}

**Edit marker**

If your entity doesn&#39;t have coordinates set, you can **manually place marker using the map widget tools** — its coordinates will be automatically saved to the entity as attributes.

First, add the marker placement tool to the map:

- In the "**Edit marker**" section, check the "**Add**" tool.
- Next, select the **attribute scope** where the coordinates will be stored: "**Server**" or "**Shared**".
- Optionally, enable snapping to other vertices for precision drawing.
- Then, save the changes.

{% include images-gallery.html imageCollection="manually-add-marker" %}

You can now place the marker on the map:

- On the map widget, locate and click the "Place marker" icon button. If you&#39;re using an alias with multiple entities as the data source, you&#39;ll need to select the appropriate entity from the dropdown menu.
- Find the location on the map where you want to place the marker and click on it.
- The marker will be added, and its coordinates will be automatically saved to the entity as attributes.

{% include images-gallery.html imageCollection="place-marker" showListImageTitles="true" %}

<br>
Also, by selecting the checkboxes next to the desired tools, you&#39;ll be able to **move** or **remove** a marker.

**Move marker**

Enable the ability to move the marker on the map by checking the "**Move**" tool in the marker settings under the "**Edit marker**" section.

To move the marker, click and hold the marker with your mouse, drag it to the new location, and then release the mouse button.

{% include images-gallery.html imageCollection="move-marker" %}

**Remove marker**

Enable the "**Remove**" tool in the marker settings under the "**Edit marker**" section.

To delete a marker, simply click on it, then click the trash bin icon in the menu at the bottom of the widget.

{% include images-gallery.html imageCollection="remove-marker" %}

**Use map markers clustering**

Map clustering is a feature that automatically groups multiple markers located within the same visible area at a certain zoom level into a single cluster — a circular icon displaying the number of grouped items inside, instead of showing each marker individually.

This greatly improves map readability, especially when visualizing a large number of markers.

{% include images-gallery.html imageCollection="use-map-markers-clustering" %}

### Polygon

The polygon is a flat shape defined by a finite number of points. 
It can be used to mark areas such as buildings, fields, service areas, visualize coverage areas or restricted regions, etc.

To display an entity as a polygon, it must have coordinates provided as attributes or telemetry in the following format:

```
[[1Latitude,1Longitude],[2Latitude,2Longitude],...,[nLatitude,nLongitude]]
```

where

ㅤ&#42; **n** - number of coordinates which polygon is described by.

![image](/images/user-guide/widgets/maps/polygon-1-pe.png)

#### Adding polygon

To place the polygon on the map, follow these steps:

- Enter widget edit mode and go to the "Overlays" section.
- Switch to the "Polygons" tab and click "Add polygon".
- Select the entity that will be represented as a polygon. This can be a device, entity alias, or function.
- Define the key with the coordinates of the polygon. ThingsBoard will use the "perimeter" key by default to read the polygon coordinates from the entity&#39;s attributes. If you use a different key, update it accordingly.
- Click "Apply" — the polygon will appear on the map based on the entity&#39;s data.

{% include images-gallery.html imageCollection="add-polygon" %}

#### Polygon configuration

To configure a specific polygon, switch to the map widget&#39;s edit mode.
Then, in the "Polygon" tab under the "Overlays" section, click the "gear" icon button next to the desired polygon to open its configuration panel.

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

**Polygon color**

Customize the appearance of the polygon by adjusting its fill color and stroke color.

{% include images-gallery.html imageCollection="polygon-color" showListImageTitles="true" %}

**Label** 

Configure the label displayed above the polygon.
By default, the label shows the name of the entity linked to that polygon. You can manually edit the label text or use a label function to display dynamic information.

For example, the label can show the current status of the polygon, providing users with a quick and clear understanding of its state.
If desired, you can also hide the label entirely.

```
<div style='position: relative; white-space: nowrap; text-align: center; font-size: 10px; top: -7px;'><span style='margin-left: -500%;'></span><div style='border: 2px solid #0C5500; border-radius: 5px; color: #000; background-color: #fff;  padding-left: 4px; padding-right: 4px; padding-top: 2px; padding-bottom: 2px;'>${entityLabel}</div></div>
```
{:.copy-code}

{% include images-gallery.html imageCollection="polygon-label" showListImageTitles="true" %}








**Edit polygon**

Check the boxes next to the desired tools (**Add** / **Edit** / **Move** / **Remove**) to enable these options for polygon operations on the widget.

You can also choose the scope where the marker&#39;s location coordinates should be stored: either the **Server** or **Shared** attribute.

Optionally, enable snapping to other vertices for more precise drawing.

{% include images-gallery.html imageCollection="marker-configuration-appearance-edit-polygon" %}

**Add marker using the built-in tools of the map widget.**

If an entity doesn&#39;t have coordinates set, you can manually **place marker using the map widget tools** — its coordinates will be automatically saved to the entity as attributes.
In this example, I&#39;ll also use an entity alias, which refers to the asset "Gas station 1" as the data source.

First, add the marker placement tool to the map:

{% include images-gallery.html imageCollection="manually-add-marker" showListImageTitles="true" %}

You can now place the marker on the map:

{% include images-gallery.html imageCollection="place-marker" showListImageTitles="true" %}

<br><br>


**Option 2: Draw a polygon directly on the map. Its coordinates will be added to the specified entity as attributes.**

**Step 1**: Add the polygon placement tool to the map:

- Enter widget edit mode and go to the "Overlays" section.
- Switch to the "Polygons" tab and click "Add polygon".
- Select the entity that will be represented as a polygon. This can be a device, entity alias, or function.
- Specify the key that will store the polygon's coordinates. You can keep the default key (e.g., perimeter) or enter a custom one.
- Proceed to the polygon configuration screen.
- Scroll down to the "Edit polygon" section and check the "Add" tool.
- Choose where to store the polygon's coordinates:
  - Server attribute
  - Shared attribute
- (Optionally) Enable snapping to other vertices for precision drawing.
- Apply changes.

{% include images-gallery.html imageCollection="manually-add-polygon" %}

**Step 2**: Drawing the polygon on the map:

- Locate the polygon drawing tools on the map (by default, they are in the top-left corner) and choose one of the two available options:
  - **Draw rectangle** – creates a four-point rectangle.
  - **Draw polygon** – allows a free-form shape with 3 or more points.
- If you&#39;re using an alias with multiple entities as the data source, select the desired entity from the dropdown list;
- Find the location on the map where you want to draw the polygon, then click to place the first point.
- Adjust the polygon to the desired size, then click again to finish drawing. If you&#39;re using the "Drew polygon" tool, make sure to close the shape by connecting the first and last points.
- Once finished, the polygon is added to the map and its coordinates are saved automatically to the entity.

{% include images-gallery.html imageCollection="place-polygon" %}



<br>

Move marker

To enable moving the marker on the map, activate the "Move" tool in the marker settings under the Edit marker section.
Then, click on the marker, hold the mouse button, and drag it to a new location.

{% include images-gallery.html imageCollection="move-marker" %}

<br>

Remove marker

To delete the marker, activate the "Remove" tool in the marker settings under the "Edit marker" section.
On the map, click on the marker and select the "trash bin" icon from the menu at the bottom of the widget.

To remove a marker, simply click on it, then click the "trash" icon in the menu at the bottom of the widget.

{% include images-gallery.html imageCollection="remove-marker" %}

<br>

Use map markers clustering

{% include images-gallery.html imageCollection="use-map-markers-clustering" %}


### Circle

Circle is a plane figure, boundary points of which are always the same distance away from a fixed central point.
A circle can be used to define areas of influence, such as a Wi-Fi zone or the range of a sensor, and more.
You may mark your assets and any other entities with a circle option.

Circle coordinates must follow this format:

```
{"latitude":CoordinateLatitude, "longitude":CoordinateLongitude, "radius":radius}
``` 

#### Add circle

You can mark your assets and any other entities with a circle using predefined coordinates received as attributes or telemetry. In this example, I'll use a device, which refers to assets of the type “Parking spots” as the data source.

To add a circle to the Trip Animation map widget, you need to:
- Have a device that transmits the coordinates of the circle as telemetry data. Circle coordinates are being received in a format:


- Add a circle data key to the "Timeseries data keys" field of the "Trip Animation" widget;
- Turn on "Show circle" option and specify circle key to the "Circle key name" field of the "Circle settings" section.

{% include images-gallery.html imageCollection="advanced-settings-circle-settings-1" %}

<br>
The following settings are available for the circle:

{% include images-gallery.html imageCollection="add-circle" %}


{% include images-gallery.html imageCollection="manually-add-circle" %}

{% include images-gallery.html imageCollection="place-circle" %}

#### Circle configuration

To configure a specific polygon, switch to the map widget&#39;s edit mode.
Then, in the "Circle" tab under the "Overlays" section, click the "gear" icon button next to the desired circle to open its configuration panel.

{% include images-gallery.html imageCollection="circle-configuration" showListImageTitles="true" %}

**Datasource**

Specify the polygon’s data source — it can be a device, an entity alias, or a function.   
If needed, apply a filter to narrow down the selection.

{% include images-gallery.html imageCollection="circle-configuration-datasource" showListImageTitles="true" %}

**Keys**

Define the key that contains the polygon coordinates. By default, ThingsBoard uses "perimeter" as the polygon key. If your entity uses a different key name, make sure to update it here.

Additional data keys can be used for labels, tooltips, or to display extra information directly on the map.

{% include images-gallery.html imageCollection="circle-configuration-keys" showListImageTitles="true" %}

**Label**

Configure the label displayed above the polygon. By default, the label shows the name of the entity linked to that polygon. You can manually edit the label text or use a label function to display dynamic information.

For example, the label can show the current status of the polygon, providing users with a quick and clear understanding of its state. If desired, you can also hide the label entirely.

```text
<div style='position: relative; white-space: nowrap; text-align: center; font-size: 10px; top: -7px;'><span style='margin-left: -500%;'></span><div style='border: 2px solid #3B7FE1; border-radius: 5px; color: #000; background-color: #fff;  padding-left: 4px; padding-right: 4px; padding-top: 2px; padding-bottom: 2px;'>${entityLabel}</div></div>
```
{:.copy-code}

{% include images-gallery.html imageCollection="circle-label" showListImageTitles="true" %}

### Additional datasources

Datasource for accessing attributes or telemetry from entities not displayed on the map, usable in map overlay functions.

### Map controls


### Map action buttons

You can enhance your map widget by adding custom action buttons. 
These buttons allow users to perform interactive actions such as: navigating to another dashboard/dashboard state, Opening an external URL, triggering a custom action and placing new map items directly on the map
Learn more about available action types and configurations in the [widget actions](/docs/{{docsPrefix}}user-guide/ui/widget-actions/){:target="_blank"} documentation.

Let&#39;s consider an example of adding an action button to a map that will allow users to place new objects on the map.

In the "**Map action buttons**" section, click "**Add button**".
Specify a name for the new button — for our example, "Add Building" — and set its icon and color.
Now, click the "**Action**" field to define the action instead of the default "Do nothing" — for this example, we&#39;ll choose "**Place map item**".
Select the map item type to be placed — in this case, it&#39;s "Marker".
The custom action function field contains a default function that displays a dialog for creating a device or an asset — exactly what we need.
Save the changes.

{% include images-gallery.html imageCollection="map-action-buttons-1" %}

To ensure that newly created entities are immediately displayed on the map, you need to properly configure the data source.

In the Overlays section, under the "Marker" tab, create a new entity alias as the data source. Name it "buildings".
Since I&#39;ll be creating assets with the asset type "buildings", set the filter type to "Asset type" and specify the type as "buildings".
Save all changes.

{% include images-gallery.html imageCollection="map-action-buttons-2" %}

Now, an action button has appeared at the top of the map. Click it, find the location where you want to place the entity, and click on the map.
In the dialog that appears, be sure to enter a name for the new entity and select its type — Asset. Other fields are optional. Click "Create".

The new marker is now added to the map.

{% include images-gallery.html imageCollection="map-action-buttons-3" %}

Next, go to the "Assets" page — here you&#39;ll find your newly created asset, "Building A".

{% include images-gallery.html imageCollection="map-action-buttons-4" %}

### Common map  swttings


### Card appearance


### Actions



## Image Map widget

Displays the indoor or relative location of entities on an image map, making it ideal for floor plans, smart parking, and more. Entity coordinates are expected to range from 0 to 1. Supports markers, marker tooltips, widget actions, polygons, and circles for enhanced spatial representation.

## Trip Map widget

Displays an entity&#39;s trip on various map providers, allowing scrolling and animated movement. Supports custom markers, marker tooltips, widget actions, polygons, and circles for enhanced spatial representation.

## Route Map widget

Displays an entity&#39;s trip on various map providers. Supports custom markers, marker tooltips, widget actions, polygons, and circles for enhanced spatial representation.


