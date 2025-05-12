---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Map widgets
description: Map widgets

adding-map-widget:
    0:
        image: /images/user-guide/widgets/maps/adding-map-widget-1-pe.png
        title: 'In dashboard edit mode, click the "Add widget" button at the top of the screen, or click the large "Add new widget" icon in the center of the screen (if this is your first widget on the dashboard).'
    1:
        image: /images/user-guide/widgets/maps/adding-map-widget-2-pe.png
        title: 'Find the "Maps" widget bundle and click on it. This category includes all available map widget types.'
    2:
        image: /images/user-guide/widgets/maps/adding-map-widget-3-pe.png
        title: 'Select the map widget that best fits your use case.'
    3:
        image: /images/user-guide/widgets/maps/adding-map-widget-4-pe.png
        title: 'Configure the widget to match your data and visualization requirements. You can adjust data sources, appearance, map provider settings, and more. Click the "Add" in the bottom-right corner of the widget configuration window to place it on your dashboard.'

map-type:
    0:
        image: /images/user-guide/widgets/maps/map-type-1-pe.png
        title: 'The first step in configuring the map widget is selecting the map type. ThingsBoard offers several map widgets, including Image Map, which allows you to use a custom background image as the map. You can also configure map layers, enabling flexible switching between different map styles — such as satellite, hybrid, or custom layers — directly within the widget, with just a few clicks.'

map-type-adding-layer-1:
    0:
        image: /images/user-guide/widgets/maps/map-type-adding-layer-1-pe.png
        title: 'Click "Add layer".'
    1:
        image: /images/user-guide/widgets/maps/map-type-adding-layer-2-pe.png
        title: 'Enter a label for the layer. Select a provider from the available options, or add a custom provider and specify its layer.'

changing-map-type:
    0:
        image: /images/user-guide/widgets/maps/changing-map-type-1-pe.png
        title: 'Click the "Layer" icon button on the widget.'
    1:
        image: /images/user-guide/widgets/maps/changing-map-type-2-pe.png
        title: 'You will see the available map layers. Switch between them.'
    2:
        image: /images/user-guide/widgets/maps/changing-map-type-3-pe.png
        title: 'Enter a label for the layer — this name will be shown in the widget&#39;s layer switcher. Choose the map provider by selecting from the available options (OpenStreetMap, Google, HERE, Tencent) or by specifying a custom tile server. Apply changes.'

map-type-reference-layer-1:
    0:
        image: /images/user-guide/widgets/maps/map-type-reference-layer-1-pe.png
        title: 'Go to the "Layer settings" by clicking the "gear" icon.'
    1:
        image: /images/user-guide/widgets/maps/map-type-reference-layer-2-pe.png
        title: 'From the dropdown menu, select the layer type, or leave it as "No layer" if you don&#39;t want to use one. Apply changes.'
    2:
        image: /images/user-guide/widgets/maps/map-type-reference-layer-3-pe.png
        title: ''

add-marker:
    0:
        image: /images/user-guide/widgets/maps/add-marker-1-pe.png
        title: 'Enter widget edit mode and go to the "Overlays" section. Make sure you&#39;re on the "Marker" tab and click "Add marker".'
    1:
        image: /images/user-guide/widgets/maps/add-marker-2-pe.png
        title: 'Select the data source - it can be a device, an entity alias, or a function. Define the coordinate keys. By default, ThingsBoard uses *latitude* and *longitude* attributes as the coordinate keys for the marker. If your entity uses different key names, update them here. Apply the changes.'
    2:
        image: /images/user-guide/widgets/maps/add-marker-3-pe.png
        title: 'The marker will appear on the map based on the specified coordinates.'

marker-configuration:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-1-pe.png
        title: 'To configure a specific marker, switch to the map widget&#39;s edit mode and, in the Overlays section, click the gear icon next to the desired marker to open its configuration panel.'

marker-configuration-datasource:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-datasource-1-pe.png
        title: 'Specify the marker data source — it can be a device, entity alias, or function. If necessary, use a filter.'

marker-configuration-keys:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-keys-1-pe.png
        title: 'Define the coordinate keys. ThingsBoard automatically sets the coordinate keys as latitude and longitude. If your entity uses custom coordinate key names, update them here. Additional data keys can be used for labels, tooltips, and displaying extra information directly on the map.'

marker-icon-color-1:
    0:
        image: /images/user-guide/widgets/maps/marker-icon-color-1-pe.png
        title: 'Customize the marker by selecting a different one from a variety of standard shapes and icons, and adjusting its size.'
    1:
        image: /images/user-guide/widgets/maps/marker-icon-color-2-pe.png
        title: 'Use a function that dynamically changes the marker color based on the value of the "state" key.'
    2:
        image: /images/user-guide/widgets/maps/marker-icon-color-3-pe.png
        title: 'Apply all changes.'

marker-icon-color-2:
    0:
        image: /images/user-guide/widgets/maps/marker-icon-color-4-pe.png
        title: 'Currently, the "state" key has the value "opened", so the marker is displayed in green.'

marker-icon-color-3:
    0:
        image: /images/user-guide/widgets/maps/marker-icon-color-5-pe.png
        title: 'As soon as the value of the "state" key changes to anything else, the marker will turn red.'

marker-label:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-label-1-pe.png
        title: 'Here, you can customize the label displayed above the marker. By default, the label displays the entity name. You can edit the label text or use a label function to display more dynamic information;'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-label-2-pe.png
        title: 'Customized marker label.'

marker-tooltip:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-1-pe.png
        title: 'Use the tooltip pattern or tooltip function;'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-2-pe.png
        title: 'Click on the marker to display a tooltip.'

marker-tooltip-action-1:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-1-pe.png
        title: 'Click the "Add tag action" icon button.'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-2-pe.png
        title: 'Configure the action and click "Add".'
    2:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-3-pe.png
        title: 'Now, you need to add the tag action link to the tooltip function. Expand the tooltip function window to fullscreen for easier editing.'
    3:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-4-pe.png
        title: 'Edit the function by adding a link to the tag action. Be sure to specify the tag action name correctly.'
    4:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-5-pe.png
        title: 'Apply all changes.'

marker-tooltip-action-2:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-6-pe.png
        title: 'Click on the marker. In the tooltip that appears, you&#39;ll see a tag — click on it.'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-7-pe.png
        title: 'The action you defined in the tag&#39;s settings will be executed.'

marker-behavior:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-1-pe.png
        title: 'Go to the "Behavior" section and click the "On click" action field to define the action instead of the default "Do nothing".'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-2-pe.png
        title: 'Set up the desired action and apply the changes.'
    2:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-3-pe.png
        title: 'Click on the marker.'
    3:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-4-pe.png
        title: 'The action you specified in the action settings will be triggered.'
      
marker-groups:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-1-pe.png
        title: 'In the "Groups" section, enter a name for the group to which you want to add this marker.'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-2-pe.png
        title: 'A "Groups" icon button will appear on the widget. Click on it.'
    2:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-3-pe.png
        title: 'To hide a group, uncheck the box next to its name.'
    3:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-4-pe.png
        title: 'The markers that belong to this group have been hidden.'
    4:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-5-pe.png
        title: ''

marker-editing-tools:
    0:
        image: /images/user-guide/widgets/maps/marker-editing-tools-1-pe.png
        title: 'You can use the built-in tools to perform operations on markers such as Add / Move / Delete. By default, these tools are disabled. Check the boxes next to the tools you want to enable.'

manually-add-marker:
    0:
        image: /images/user-guide/widgets/maps/manually-add-marker-1-pe.png
        title: 'In the "Edit marker" section, check the "Add" tool. Next, select the attribute scope where the coordinates will be stored: "Server" or "Shared". Optionally, enable snapping to other vertices for precision drawing. Then, save the changes.'

place-marker:
    0:
        image: /images/user-guide/widgets/maps/place-marker-1-pe.png
        title: 'On the map widget, locate and click the "Place marker" icon button. If you&#39;re using an alias with multiple entities as the data source, you&#39;ll need to select the appropriate entity from the dropdown menu.'
    1:
        image: /images/user-guide/widgets/maps/place-marker-2-pe.png
        title: 'Find the location on the map where you want to place the marker and click on it.'
    2:
        image: /images/user-guide/widgets/maps/place-marker-3-pe.png
        title: 'The marker will be added, and its coordinates will be automatically saved to the entity as attributes.'

move-marker:
    0:
        image: /images/user-guide/widgets/maps/move-marker-1-pe.png
        title: 'To move the marker, click and hold the marker with your mouse, drag it to the new location, and then release the mouse button.'

remove-marker:
    0:
        image: /images/user-guide/widgets/maps/remove-marker-1-pe.png
        title: 'To delete a marker, simply click on it, then click the trash bin icon in the menu at the bottom of the widget.'

use-map-markers-clustering:
    0:
        image: /images/user-guide/widgets/maps/use-map-markers-clustering-1-pe.png
        title: 'To enable clustering for map markers, check the corresponding option and configure the necessary settings.'
    1:
        image: /images/user-guide/widgets/maps/use-map-markers-clustering-2-pe.png
        title: 'Change the zoom level.'
    2:
        image: /images/user-guide/widgets/maps/use-map-markers-clustering-3-pe.png
        title: 'Your markers with clustering enabled will group into a circular icon that shows the number of clustered items inside.'

add-polygon:
    0:
        image: /images/user-guide/widgets/maps/add-polygon-1-pe.png
        title: 'Enter widget edit mode and go to the "Overlays" section. Switch to the "Polygons" tab and click "Add polygon".'
    1:
        image: /images/user-guide/widgets/maps/add-polygon-2-pe.png
        title: 'Select the entity that will be represented as a polygon. This can be a device, entity alias, or function. Define the key with the coordinates of the polygon. ThingsBoard will use the "perimeter" key by default to read the polygon coordinates from the entity&#39;s attributes. If you use a different key, update it accordingly. Click "Apply".'
    2:
        image: /images/user-guide/widgets/maps/add-polygon-3-pe.png
        title: 'The polygon will appear on the map based on the entity&#39;s data.'

polygon-configuration:
    0:
        image: /images/user-guide/widgets/maps/polygon-configuration-1-pe.png
        title: 'To configure a specific polygon, switch to the map widget&#39;s edit mode. Then, in the "Polygon" tab under the "Overlays" section, click the "gear" icon button next to the desired polygon to open its configuration panel.'

polygon-configuration-datasource:
    0:
        image: /images/user-guide/widgets/maps/polygon-configuration-datasource-1-pe.png
        title: 'Specify the polygon data source — it can be a device, entity alias, or function. If necessary, use a filter.'

polygon-configuration-keys:
    0:
        image: /images/user-guide/widgets/maps/polygon-configuration-keys-1-pe.png
        title: 'Define the key that contains the polygon coordinates. By default, ThingsBoard uses "perimeter" as the polygon key. If your entity uses a different key name, make sure to update it here. Additional data keys can be used for labels, tooltips, or to display extra information directly on the map.'

polygon-color:
    0:
        image: /images/user-guide/widgets/maps/polygon-color-1-pe.png
        title: 'Change the fill color and stroke color of the polygon. For the fill, you can also use stripes or an image as a background.'
    1:
        image: /images/user-guide/widgets/maps/polygon-color-2-pe.png
        title: ''

polygon-label:
    0:
        image: /images/user-guide/widgets/maps/polygon-label-1-pe.png
        title: 'Configure the label displayed above the polygon. By default, the label shows the name of the entity linked to that polygon. You can manually edit the label text or use a label function to display dynamic information.'
    1:
        image: /images/user-guide/widgets/maps/polygon-label-2-pe.png
        title: 'Custom polygon label.'

polygon-tooltip:
    0:
        image: /images/user-guide/widgets/maps/polygon-tooltip-1-pe.png
        title: 'Here you can configure a tooltip that appears when you click on or hover over the polygon. Use the tooltip pattern or tooltip function to define more dynamic content. Alternatively, you can hide the tooltip altogether.'
    1:
        image: /images/user-guide/widgets/maps/polygon-tooltip-2-pe.png
        title: 'Click on the polygon to display the tooltip.'

polygon-behavior:
  0:
      image: /images/user-guide/widgets/maps/polygon-behavior-1-pe.png
      title: 'Go to the "Behavior" section and click the "On click" action field to define the action instead of the default "Do nothing".'
  1:
      image: /images/user-guide/widgets/maps/polygon-behavior-2-pe.png
      title: 'Set up the desired action and apply the changes.'
  2:
      image: /images/user-guide/widgets/maps/polygon-behavior-3-pe.png
      title: 'Click on the polygon.'
  3:
      image: /images/user-guide/widgets/maps/polygon-behavior-4-pe.png
      title: 'The action you specified in the action settings will be triggered.'

polygon-groups:
    0:
        image: /images/user-guide/widgets/maps/polygon-groups-1-pe.png
        title: 'In the "Groups" section, enter a name for the group to which you want to add this polygon;'
    1:
        image: /images/user-guide/widgets/maps/polygon-groups-2-pe.png
        title: 'A "Groups" icon button will appear on the widget. Click on it;'
    2:
        image: /images/user-guide/widgets/maps/polygon-groups-3-pe.png
        title: 'To hide a group, uncheck the box next to its name.'
    3:
        image: /images/user-guide/widgets/maps/polygon-groups-4-pe.png
        title: 'The polygon that belong to this group have been hidden.'

polygon-editing-tools:
    0:
        image: /images/user-guide/widgets/maps/polygon-editing-tools-1-pe.png
        title: 'You can use the built-in tools to perform operations on markers such as Add / Move / Delete. By default, these tools are disabled. Check the boxes next to the tools you want to enable.'

manually-add-polygon:
    0:
        image: /images/user-guide/widgets/maps/manually-add-polygon-1-pe.png
        title: 'In the "Edit polygon" section, check the "Add" tool. Next, select the attribute scope where the coordinate will be stored: "Server" or "Shared". Optionally, enable snapping to other vertices for precision drawing. Then, save the changes.'

place-polygon:
    0:
        image: /images/user-guide/widgets/maps/place-polygon-1-pe.png
        title: 'The map widget now offers two tools for adding a polygon: "Drew rectangle" and "Drew polygon". Choose the option that suits your needs.'
    1:
        image: /images/user-guide/widgets/maps/place-polygon-2-pe.png
        title: 'If you&#39;re using an alias with multiple entities as the data source, select the desired entity from the dropdown list.'
    2:
        image: /images/user-guide/widgets/maps/place-polygon-3-pe.png
        title: 'Find the desired location on the map and click to place the first point;'
    3:
        image: /images/user-guide/widgets/maps/place-polygon-4-pe.png
        title: 'Adjust the polygon to the desired size, then click again to finish. If you&#39;re using "Drew polygon", make sure to close the shape by clicking the first point once you&#39;ve placed all others.'
    4:
        image: /images/user-guide/widgets/maps/place-polygon-5-pe.png
        title: 'The polygon will be added, and its coordinates will be automatically saved to the entity as attribute.'

edit-polygon:
    0:
        image: /images/user-guide/widgets/maps/edit-polygon-1-pe.png
        title: 'To resize the polygon, click on it — its vertices will appear. Drag any of the points to adjust the polygon&#39;s size.'
    2:
        image: /images/user-guide/widgets/maps/edit-polygon-2-pe.png
        title: 'Once you&#39;re satisfied with the new size, click anywhere outside the polygon to apply the current dimensions.'
    3:
        image: /images/user-guide/widgets/maps/edit-polygon-3-pe.png
        title: ''

move-polygon:
    0:
        image: /images/user-guide/widgets/maps/move-polygon-1-pe.png
        title: 'To enable moving a polygon on the map, activate the "Move" tool in the polygon settings under the "Edit polygon" section.'
    1:
        image: /images/user-guide/widgets/maps/move-polygon-2-pe.png
        title: 'Now, click on the polygon, hold down the mouse button, and drag it to the new location.'

rotate-polygon:
    0:
        image: /images/user-guide/widgets/maps/rotate-polygon-1-pe.png
        title: 'Select the polygon by clicking on it, then click the "Rotate polygon" icon button from the tools at the bottom.'
    1:
        image: /images/user-guide/widgets/maps/rotate-polygon-2-pe.png
        title: 'Grab any point of the polygon and drag it in the desired direction to rotate it.'
    2:
        image: /images/user-guide/widgets/maps/rotate-polygon-3-pe.png
        title: 'Once you&#39;re satisfied with the rotation, click the "Rotate polygon" icon button again to finish.'

cut-polygon-area:
    0:
        image: /images/user-guide/widgets/maps/cut-polygon-area-1-pe.png
        title: 'Select the polygon by clicking on it, then choose "Cut polygon area" from the tools at the bottom.'
    1:
        image: /images/user-guide/widgets/maps/cut-polygon-area-2-pe.png
        title: 'Draw the area you want to remove by outlining it on the polygon.'
    2:
        image: /images/user-guide/widgets/maps/cut-polygon-area-3-pe.png
        title: 'Close the shape by connecting the first and last points.'
    3:
        image: /images/user-guide/widgets/maps/cut-polygon-area-4-pe.png
        title: 'Click anywhere outside the polygon to save the changes.'

remove-polygon:
    0:
        image: /images/user-guide/widgets/maps/remove-polygon-1-pe.png
        title: 'To delete a polygon, simply click on it, then click the "trash bin" icon in the menu at the bottom of the widget.'


add-circle:
    0:
        image: /images/user-guide/widgets/maps/add-circle-1-pe.png
        title: 'Enter widget edit mode and go to the "Overlays" section. Switch to the "Circles" tab and click "Add circle".'
    1:
        image: /images/user-guide/widgets/maps/add-circle-2-pe.png
        title: 'Select the entity that will be represented as a circle. This can be a device, entity alias, or function. Define the key with the coordinates of the circle. ThingsBoard will use the "perimeter" key by default to read the circle coordinates from the entity&#39;s attribute. If your entity uses a different key name, update it here. Click "Apply" — the circle will appear on the map based on the entity&#39;s data.'
    2:
        image: /images/user-guide/widgets/maps/add-circle-3-pe.png
        title: 'The circle has been successfully added to the map.'

circle-configuration:
    0:
        image: /images/user-guide/widgets/maps/circle-configuration-1-pe.png
        title: 'To configure a specific circle, switch to the map widget&#39;s edit mode. Then, in the "Circle" tab under the "Overlays" section, click the "gear" icon button next to the desired circle to open its configuration panel.'
    
circle-configuration-datasource:
    0:
        image: /images/user-guide/widgets/maps/circle-configuration-datasource-1-pe.png
        title: 'Specify the circle&#39;s data source — it can be a device, an entity alias, or a function. If needed, apply a filter to narrow down the selection.'
    
circle-configuration-keys:
    0:
        image: /images/user-guide/widgets/maps/circle-configuration-keys-1-pe.png
        title: 'Define the key that contains the circle coordinates. By default, ThingsBoard uses "perimeter" as the circle key. If your entity uses a different key name, make sure to update it here. Additional data keys can be used for labels, tooltips, or to display extra information directly on the map.'
    
circle-color:
    0:
        image: /images/user-guide/widgets/maps/circle-color-1-pe.png
        title: 'Change the fill color and stroke color of the circle. For the fill, you can also use stripes or an image as a background.'
    1:
        image: /images/user-guide/widgets/maps/circle-color-2-pe.png
        title: ''

circle-label:
    0:
        image: /images/user-guide/widgets/maps/circle-label-1-pe.png
        title: 'Configure the label displayed above the circle. By default, the label shows the name of the entity linked to that circle. You can manually edit the label text or use a label function to display dynamic information.'
    1:
        image: /images/user-guide/widgets/maps/circle-label-2-pe.png
        title: 'Custom circle label.'

circle-tooltip:
    0:
        image: /images/user-guide/widgets/maps/circle-tooltip-1-pe.png
        title: 'Use tooltip pattern or tooltip function.'
    1:
        image: /images/user-guide/widgets/maps/circle-tooltip-2-pe.png
        title: 'Click on the circle to display the tooltip.'

circle-behavior:
    0:
        image: /images/user-guide/widgets/maps/circle-behavior-1-pe.png
        title: 'Go to the "Behavior" section and click the "On click" action field to define the action instead of the default "Do nothing".'
    1:
        image: /images/user-guide/widgets/maps/circle-behavior-2-pe.png
        title: 'Set up the desired action and apply the changes.'
    2:
        image: /images/user-guide/widgets/maps/circle-behavior-3-pe.png
        title: 'Click on the circle.'
    3:
        image: /images/user-guide/widgets/maps/circle-behavior-4-pe.png
        title: 'The action you specified in the action settings will be triggered.'  

circle-groups:
    0:
        image: /images/user-guide/widgets/maps/circle-groups-1-pe.png
        title: 'In the "Groups" section, enter a name for the group to which you want to add this circle.'
    1:
        image: /images/user-guide/widgets/maps/circle-groups-2-pe.png
        title: 'Click on the "Groups" icon button.'
    2:
        image: /images/user-guide/widgets/maps/circle-groups-3-pe.png
        title: 'To hide a group, uncheck the box next to its name.'
    3:
        image: /images/user-guide/widgets/maps/circle-groups-4-pe.png
        title: 'The circle that belong to this group have been hidden.'

circle-editing-tools:
    0:
        image: /images/user-guide/widgets/maps/circle-editing-tools-1-pe.png
        title: 'You can use the built-in tools to perform operations on circles such as Add / Move / Delete. By default, these tools are disabled. Check the boxes next to the tools you want to activate.'

manually-add-circle:
    0:
        image: /images/user-guide/widgets/maps/manually-add-circle-1-pe.png
        title: 'In the "Edit marker" section, check the "Add" tool. Next, select the attribute scope where the coordinates will be stored: "Server" or "Shared". Optionally, enable snapping to other vertices for precision drawing. Then, save the changes.'

place-circle:
    0:
        image: /images/user-guide/widgets/maps/place-circle-1-pe.png
        title: 'The map widget now offers a tool for adding a circle: "Draw circle". Click on this icon button to begin.'
    1:
        image: /images/user-guide/widgets/maps/place-circle-2-pe.png
        title: 'Find the desired location on the map and click to place the first point;'
    2:
        image: /images/user-guide/widgets/maps/place-circle-3-pe.png
        title: 'Adjust the circle to the desired size, then click again to finish.'
    3:
        image: /images/user-guide/widgets/maps/place-circle-4-pe.png
        title: 'The circle has been added to the map.'

edit-circle:
    0:
        image: /images/user-guide/widgets/maps/edit-circle-1-pe.png
        title: 'To resize the circle, click on it, and a radius edi point will appear. Drag it to adjust the size of the circle.'
    1:
        image: /images/user-guide/widgets/maps/edit-circle-2-pe.png
        title: 'Once you&#39;re satisfied with the new size, click anywhere outside the circle to apply the current dimensions.'

move-circle:
    0:
        image: /images/user-guide/widgets/maps/move-circle-1-pe.png
        title: 'To move a circle, click on it, hold down the mouse button, and drag circle to the new location.'
    1:
        image: /images/user-guide/widgets/maps/move-circle-2-pe.png
        title: 'To move a circle, click on it, hold down the mouse button, and drag circle to the new location.'

remove-circle:
    0:
        image: /images/user-guide/widgets/maps/remove-circle-1-pe.png
        title: 'To delete a circle, simply click on it, then click the "trash bin" icon in the menu at the bottom of the widget.'


additional-datasources:
    0:
        image: /images/user-guide/widgets/maps/additional-datasources-1-pe.png
        title: 'Additional datasources are auxiliary data sources that can be used for processing, filtering, or overlaying data on the main entities. They are often used in map overlay features or tooltips when additional context or information needs to be provided.'

map-controls:
    0:
        image: /images/user-guide/widgets/maps/map-controls-1-pe.png
        title: 'Enable the "Remove" tool in the circle settings under the "Edit circle" section.'
    1:
        image: /images/user-guide/widgets/maps/map-controls-2-pe.png
        title: 'To delete a circle, simply click on it, then click the "trash bin" icon in the menu at the bottom of the widget.'

map-action-buttons-1:
    0:
        image: /images/user-guide/widgets/maps/map-action-buttons-1-pe.png
        title: 'In the "Map action buttons" section, click "Add button".'
    1:
        image: /images/user-guide/widgets/maps/map-action-buttons-2-pe.png
        title: 'Specify a name for the new button — for our example, "Add building" — and set its icon and color. Click the "Action" field to define the action, and instead of the default "Do nothing"'
    2:
        image: /images/user-guide/widgets/maps/map-action-buttons-3-pe.png
        title: 'Choose the "Place map item" action.'
    3:
        image: /images/user-guide/widgets/maps/map-action-buttons-4-pe.png
        title: 'Select the map item type to be placed — in this case, it&#39;s "Marker". The custom action function field contains a default function that displays a dialog for creating a device or an asset — exactly what we need. Then, click "Add".'
    4:
        image: /images/user-guide/widgets/maps/map-action-buttons-5-pe.png
        title: 'Save the changes.'

map-action-buttons-2:
    0:
        image: /images/user-guide/widgets/maps/map-action-buttons-6-pe.png
        title: 'In the "Overlays" section, under the "Marker" tab, create a new entity alias as the data source. Name it "buildings".'
    1:
        image: /images/user-guide/widgets/maps/map-action-buttons-7-pe.png
        title: 'Since I&#39;ll be creating assets with the asset type "buildings", set the filter type to "Asset type" and specify the type as "buildings". Apply all changes.'

map-action-buttons-3:
    0:
        image: /images/user-guide/widgets/maps/map-action-buttons-8-pe.png
        title: 'Now, the action button labeled "Add building" has appeared at the top of the map. Find the location on the map where you want to place the entity and click on it.'
    1:
        image: /images/user-guide/widgets/maps/map-action-buttons-9-pe.png
        title: 'In the "Add entity" dialog window that appears, make sure to enter a name for the new entity and select its type — Asset. Other fields are optional. Then, click "Create".'
    2:
        image: /images/user-guide/widgets/maps/map-action-buttons-10-pe.png
        title: 'The new marker is now added to the map.'

map-action-buttons-4:
    0:
        image: /images/user-guide/widgets/maps/map-action-buttons-11-pe.png
        title: 'Go to the "Assets" page — here you&#39;ll find your newly created asset, "Building A".'

common-map-settings:
    0:
        image: /images/user-guide/widgets/maps/common-map-settings-1-pe.png
        title: 'Common map settings are the basic global settings for the Map widget in ThingsBoard. They define how the map behaves on load and what is displayed initially.'

appearance:
    0:
        image: /images/user-guide/widgets/maps/appearance-1-pe.png

card-appearance:
  0:
    image: /images/user-guide/widgets/maps/card-appearance-1-pe.png

data-source-for-action:
    0:
        image: /images/user-guide/widgets/maps/data-source-for-action-1-pe.png
        title: 'In the "Overlays" section, under the "Marker" tab, create a new entity alias as the data source. Name it "EV stations".'
    1:
        image: /images/user-guide/widgets/maps/data-source-for-action-2-pe.png
        title: 'Since we&#39;ll be creating entities of the type "EV station", set the filter type to "Asset type" and specify the type as "EV station". Apply changes.'

action:
    0:
        image: /images/user-guide/widgets/maps/action-1-pe.png
        title: 'Scroll down to the "Actions" section and click the "Add action" button.'
    1:
        image: /images/user-guide/widgets/maps/action-2-pe.png
        title: 'A new window will open, displaying all your created actions. Click the "plus" icon button in the top-right corner to add one.'
    2:
        image: /images/user-guide/widgets/maps/action-3-pe.png
        title: 'Select the action source as "Widget header button", enter a name for the button, and choose its type.'
    3:
        image: /images/user-guide/widgets/maps/action-4-pe.png
        title: 'Optionally, change the icon that will appear next to the button or hide it entirely. You can also set a custom color for the button.'
    4:
        image: /images/user-guide/widgets/maps/action-5-pe.png
        title: 'From the dropdown menu, select the type of action to be performed. In our case, it&#39;s "Place map item". Next, choose the type of map item to be placed — we&#39;ll be placing a "Marker". The custom action function field already contains a default function that opens a dialog for creating a device or an asset — exactly what we need. Then, click "Add".'
    5:
        image: /images/user-guide/widgets/maps/action-6-pe.png
        title: 'Apply all changes and save the dashboard.'
    6:
        image: /images/user-guide/widgets/maps/action-7-pe.png
        title: 'A new action button labeled "Add EV station" has now appeared at the top of the map.'

action-place-marker:
    0:
        image: /images/user-guide/widgets/maps/action-place-marker-1-pe.png
        title: 'Click the newly created "Add EV station" button. Then, find the location on the map where you want to place the EV station and click on it.'
    1:
        image: /images/user-guide/widgets/maps/action-place-marker-2-pe.png
        title: 'In the "Add entity" dialog that appears, make sure to enter a name for the new entity and select its type — Asset. The other fields are optional. Then click "Create".'
    2:
        image: /images/user-guide/widgets/maps/action-place-marker-3-pe.png
        title: 'The new "EV station" marker is now added to the map.'

action-created-asset:
    0:
        image: /images/user-guide/widgets/maps/action-created-asset-1-pe.png
        title: 'Go to the "Assets" page — there you&#39;ll find your newly created asset, "EV station 1".'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/widgets/map-widgets.md %}