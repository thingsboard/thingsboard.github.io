---
layout: docwithnav-pe
assignees:
- stitenko
title: Map widgets
description: Map widgets

adding-map-widget:
    0:
        image: /images/user-guide/widgets/maps/adding-map-widget-1-pe.png
        title: 'Click the "Groups" icon on the widget.'
    1:
        image: /images/user-guide/widgets/maps/adding-map-widget-2-pe.png
        title: 'Switch between map types.'
    2:
        image: /images/user-guide/widgets/maps/adding-map-widget-3-pe.png
        title: ''
    3:
        image: /images/user-guide/widgets/maps/adding-map-widget-4-pe.png
        title: ''

map-type:
    0:
        image: /images/user-guide/widgets/maps/map-type-1-pe.png
        title: ''

changing-map-type:
    0:
        image: /images/user-guide/widgets/maps/changing-map-type-1-pe.png
        title: 'Click the "Groups" icon on the widget.'
    1:
        image: /images/user-guide/widgets/maps/changing-map-type-2-pe.png
        title: 'Switch between map types.'
    2:
        image: /images/user-guide/widgets/maps/changing-map-type-3-pe.png
        title: ''

map-type-adding-layer-1:
    0:
        image: /images/user-guide/widgets/maps/map-type-adding-layer-1-pe.png
        title: 'Click "Add layer".'
    1:
        image: /images/user-guide/widgets/maps/map-type-adding-layer-2-pe.png
        title: 'Enter a label for the layer. Select a provider from the available options, or add a custom provider and specify its layer.'

map-type-reference-layer-1:
    0:
        image: /images/user-guide/widgets/maps/map-type-reference-layer-1-pe.png
        title: ''
    1:
        image: /images/user-guide/widgets/maps/map-type-reference-layer-2-pe.png
        title: ''
    2:
        image: /images/user-guide/widgets/maps/map-type-reference-layer-3-pe.png
        title: ''
    3:
        image: /images/user-guide/widgets/maps/map-type-reference-layer-4-pe.png
        title: ''

add-marker:
    0:
        image: /images/user-guide/widgets/maps/add-marker-1-pe.png
        title: 'Switch to the widget edit mode and click "Add marker" in the "Overlays" section.'
    1:
        image: /images/user-guide/widgets/maps/add-marker-2-pe.png
        title: 'Select the data source — this can be a device, an entity alias, or a function. In this example, I&#39;ll use an entity alias that refers to the asset "Gas Station 1" as the data source. Define the coordinate keys. ThingsBoard automatically uses latitude and longitude as default coordinate keys. If your entity uses different key names, update them here. Apply the changes.'
    2:
        image: /images/user-guide/widgets/maps/add-marker-3-pe.png
        title: 'he marker will appear on the map based on the specified coordinates.'

manually-add-marker:
    0:
        image: /images/user-guide/widgets/maps/manually-add-marker-1-pe.png
        title: 'Specify the marker&#39;s data source and open its configuration.'
    1:
        image: /images/user-guide/widgets/maps/manually-add-marker-2-pe.png
        title: 'Scroll down to the "Edit marker" section and add the "Add" tool to the map. Select the attribute scope where the coordinates should be stored: "Server" or "Shared". Optionally, enable snapping to other vertices for precision drawing. Make sure to save your changes.'

place-marker:
    0:
        image: /images/user-guide/widgets/maps/place-marker-1-pe.png
        title: 'On the map widget, click the "Place marker" icon. If you&#39;re using an alias with multiple entities as the datasource, you&#39;ll need to select the desired entity from the dropdown menu;'
    1:
        image: /images/user-guide/widgets/maps/place-marker-2-pe.png
        title: 'Find the desired location on the map and click to place the marker;'
    2:
        image: /images/user-guide/widgets/maps/place-marker-3-pe.png
        title: 'The marker will be added, and its coordinates will be automatically saved as entity attributes.'

move-marker:
    0:
        image: /images/user-guide/widgets/maps/move-marker-1-pe.png
        title: 'To enable moving the marker on the map, activate the "Move" tool in the marker settings under the "Edit marker" section.'
    1:
        image: /images/user-guide/widgets/maps/move-marker-2-pe.png
        title: 'Click on the marker, hold the mouse button, and drag it to a new location.'

remove-marker:
    0:
        image: /images/user-guide/widgets/maps/remove-marker-1-pe.png
        title: 'To delete the marker, activate the "Remove" tool in the marker settings under the "Edit marker" section.'
    1:
        image: /images/user-guide/widgets/maps/remove-marker-2-pe.png
        title: 'On the map, click on the marker and select the "trash bin" icon from the menu at the bottom of the widget.'

marker-configuration:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-1-pe.png
        title: 'To access the configuration of a specific marker, click the "gear" icon in the same row.'

marker-configuration-datasource:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-datasource-1-pe.png
        title: 'Specify the marker data source — it can be a device, entity alias, or function. If necessary, use a filter.'

marker-configuration-keys:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-keys-1-pe.png
        title: 'Define the coordinate keys. ThingsBoard automatically sets the coordinate keys as latitude and longitude. If your entity uses custom coordinate key names, update them here. Additional data keys can be used for labels, tooltips, and displaying extra information directly on the map.'

icon-configuration:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-icon-1-pe.png
        title: 'Choose the marker type (Shape / Icon / Image) and adjust its size if needed.'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-icon-2-pe.png
        title: 'Pick a new icon that best represents your entity.'
    2:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-icon-3-pe.png
        title: ''
    3:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-icon-4-pe.png
        title: 'Apply the changes to see them on the map.'
    4:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-icon-5-pe.png
        title: 'Currently, the key state has the value opened, so the marker appears green.'
    5:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-icon-6-pe.png
        title: 'Change the value of the state key to closed — the marker will now turn red.'

marker-configuration-appearance-label:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-label-1-pe.png
        title: 'Here, you can customize the label displayed above the marker. By default, the label displays the entity name. You can edit the label text or use a label function to display more dynamic information;'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-label-2-pe.png
        title: 'Customized marker label.'

marker-configuration-appearance-tooltip:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-1-pe.png
        title: 'Use the tooltip pattern or tooltip function;'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-2-pe.png
        title: 'Click on the marker to display a tooltip.'

marker-configuration-appearance-tooltip-action:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-1-pe.png
        title: 'Click the "Add tag action" icon;'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-2-pe.png
        title: 'Configure the action and click "Add";'
    2:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-3-pe.png
        title: 'Now, you need to add the tag action link to the tooltip function. Expand the tooltip function window to fullscreen for easier editing;'
    3:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-4-pe.png
        title: 'Edit the function by adding a reference to the tag action;'
    4:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-5-pe.png
        title: 'Apply the changes;'
    5:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-6-pe.png
        title: 'Click the marker icon. In the tooltip, you&#39;ll see the added tag action — click on it;'
    6:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-tooltip-action-7-pe.png
        title: 'The action you specified in the tag action settings will be executed.'

marker-configuration-appearance-behavior:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-1-pe.png
        title: 'Go to the "Behavior" section and click the pencil icon to start configuring it;'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-2-pe.png
        title: 'Set up the desired action and apply the changes;'
    2:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-3-pe.png
        title: 'Click on the marker icon;'
    3:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-behavior-4-pe.png
        title: 'The action you specified in the tag action settings will be triggered.'
      
marker-configuration-appearance-groups:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-1-pe.png
        title: 'In the "Groups" section, enter a name for the group to which you want to add this marker;'
    1:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-2-pe.png
        title: 'A group control icon will appear on the widget. Click it;'
    2:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-3-pe.png
        title: 'Uncheck the checkbox next to the newly created group;'
    3:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-groups-4-pe.png
        title: 'The markers that belong to this group have been hidden.'
  
marker-configuration-appearance-edit-marker:
    0:
        image: /images/user-guide/widgets/maps/marker-configuration-appearance-edit-marker-1-pe.png
        title: 'Check the boxes next to the desired tools (Add / Move / Remove) to enable these options for marker operations on the widget. You can also choose the scope where the marker&#39;s location coordinates should be stored: either the "Server" or "Shared" attribute. Optionally, enable snapping to other vertices for more precise drawing.'

use-map-markers-clustering:
    0:
        image: /images/user-guide/widgets/maps/use-map-markers-clustering-1-pe.png
        title: ''
    1:
        image: /images/user-guide/widgets/maps/use-map-markers-clustering-2-pe.png
        title: ''

add-polygon:
    0:
        image: /images/user-guide/widgets/maps/add-polygon-1-pe.png
        title: 'Switch to edit mode on the widget and click "Add polygon" in the "Overlays" section.'
    1:
        image: /images/user-guide/widgets/maps/add-polygon-2-pe.png
        title: 'Specify the data source — this can be a device, an entity alias, or a function. ThingsBoard automatically uses "perimeter" as the default coordinate key. If your setup uses a custom key name, update it here accordingly. Apply changes.'
    2:
        image: /images/user-guide/widgets/maps/add-polygon-3-pe.png
        title: 'The polygon has been successfully added to the map.'

manually-add-polygon:
    0:
        image: /images/user-guide/widgets/maps/manually-add-polygon-1-pe.png
        title: 'Switch to the widget edit mode and click "Add polygon" in the "Overlays" section. Specify the data source — it can be a device, an entity alias, or a function. In this example, I&#39;ll use an entity alias that refers to assets of the type "Parking spots". ThingsBoard automatically sets the coordinate key to "perimeter". If you&#39;re using a custom key name, update it here accordingly. Now, open polygon configuration'
    1:
        image: /images/user-guide/widgets/maps/manually-add-polygon-2-pe.png
        title: 'Scroll down to the "Edit polygon" section and check the "Add" tool. Choose where to store the coordinates — either in the "Server" or "Shared" attribute scope. Optionally, enable snapping to other vertices for precision drawing. Don&#39;t forget to save your changes.'

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
        title: ''

polygon-configuration:
    0:
        image: /images/user-guide/widgets/maps/polygon-configuration-1-pe.png
        title: 'To access the settings of a specific polygon, go to the "Polygons" tab in the “Overlays” section, then click the "gear" icon next to the polygon you want to configure.'

polygon-configuration-datasource:
    0:
        image: /images/user-guide/widgets/maps/polygon-configuration-datasource-1-pe.png
        title: 'Specify the polygon’s data source — it can be a device, an entity alias, or a function. If needed, apply a filter to narrow down the selection.'

polygon-configuration-keys:
    0:
        image: /images/user-guide/widgets/maps/polygon-configuration-keys-1-pe.png
        title: 'Define the key that contains the polygon coordinates. By default, ThingsBoard uses "perimeter" as the polygon key. If your entity uses a different key name, make sure to update it here. Additional data keys can be used for labels, tooltips, or to display extra information directly on the map.'

polygon-color:
    0:
        image: /images/user-guide/widgets/maps/polygon-color-1-pe.png
        title: ''
    1:
        image: /images/user-guide/widgets/maps/polygon-color-2-pe.png
        title: ''

add-circle:
    0:
        image: /images/user-guide/widgets/maps/add-circle-1-pe.png
        title: 'Switch to edit mode on the widget and click "Add circle" in the "Overlays" section.'
    1:
        image: /images/user-guide/widgets/maps/add-circle-2-pe.png
        title: 'Specify the data source — this can be a device, an entity alias, or a function. ThingsBoard automatically uses "perimeter" as the default coordinate key. If your setup uses a custom key name, update it here accordingly. Apply changes.'
    2:
        image: /images/user-guide/widgets/maps/add-circle-3-pe.png
        title: 'The circle has been successfully added to the map.'
    
manually-add-circle:
    0:
        image: /images/user-guide/widgets/maps/manually-add-circle-1-pe.png
        title: 'Switch to the widget edit mode and click "Add circle" in the "Overlays" section. Specify the data source — it can be a device, an entity alias, or a function. In this example, I&#39;ll use an entity alias that refers to assets of the type "Parking spots". ThingsBoard automatically sets the coordinate key to "perimeter". If you&#39;re using a custom key name, update it here accordingly. Now, open polygon configuration'
    1:
        image: /images/user-guide/widgets/maps/manually-add-circle-2-pe.png
        title: 'Scroll down to the "Edit circle" section and check the "Add" tool. Choose where to store the coordinates — either in the "Server" or "Shared" attribute scope. Optionally, enable snapping to other vertices for precision drawing. Don&#39;t forget to save your changes.'
    
place-circle:
    0:
        image: /images/user-guide/widgets/maps/place-circle-1-pe.png
        title: 'The map widget now offers two tools for adding a circle: "Drew rectangle" and "Drew circle". Choose the option that suits your needs.'
    1:
        image: /images/user-guide/widgets/maps/place-circle-2-pe.png
        title: 'If you&#39;re using an alias with multiple entities as the data source, select the desired entity from the dropdown list.'
    2:
        image: /images/user-guide/widgets/maps/place-circle-3-pe.png
        title: 'Find the desired location on the map and click to place the first point;'
    3:
        image: /images/user-guide/widgets/maps/place-circle-4-pe.png
        title: 'Adjust the polygon to the desired size, then click again to finish. If you&#39;re using "Drew polygon", make sure to close the shape by clicking the first point once you&#39;ve placed all others.'
    
circle-configuration:
    0:
        image: /images/user-guide/widgets/maps/circle-configuration-1-pe.png
        title: 'To access the settings of a specific polygon, go to the "Polygons" tab in the “Overlays” section, then click the "gear" icon next to the polygon you want to configure.'
    
circle-configuration-datasource:
    0:
        image: /images/user-guide/widgets/maps/circle-configuration-datasource-1-pe.png
        title: 'Specify the polygon’s data source — it can be a device, an entity alias, or a function. If needed, apply a filter to narrow down the selection.'
    
circle-configuration-keys:
    0:
        image: /images/user-guide/widgets/maps/circle-configuration-keys-1-pe.png
        title: 'Define the key that contains the polygon coordinates. By default, ThingsBoard uses "perimeter" as the polygon key. If your entity uses a different key name, make sure to update it here. Additional data keys can be used for labels, tooltips, or to display extra information directly on the map.'
    
circle-color:
    0:
        image: /images/user-guide/widgets/maps/circle-color-1-pe.png
        title: ''
    1:
        image: /images/user-guide/widgets/maps/circle-color-2-pe.png
        title: ''
    2:
        image: /images/user-guide/widgets/maps/circle-color-3-pe.png
        title: ''







---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/widgets/map-widgets.md %}