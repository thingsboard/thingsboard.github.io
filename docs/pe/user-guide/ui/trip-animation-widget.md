---
layout: docwithnav-pe
title: Trip animation widget
description: Trip animation widget guide
redirect_from: "/docs/pe/user-guide/ui/widgets/trip-animation-widget/"

create-dashboard-1:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-1-pe.png
        title: 'Login to your ThingsBoard instance and navigate to the "Dashboards" page through the main menu on the left of the screen. By default, you navigate to the dashboard group "All";'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-2-pe.png
        title: 'Click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    2:
        image: /images/user-guide/dashboards/overview/create-dashboard-3-pe.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'

create-dashboard-2:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-4-pe.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-5-pe.png
        title: 'Find the "Maps" widget bundle and click on it;'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-6-pe.png
        title: 'Select the "Trip Animation" widget;'
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-7-pe.png
        title: 'In the "Datasources" section, select the type "Device" and specify the previously created device "Tracker1" as the data source. Add "latitude", "longitude", "speed", "status", "circleRadius", and "polygonCoordinates" as timeseries data keys. Click the "Add" button in the bottom right corner of the widget to complete adding the widget;'
    4:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-8-pe.png
        title: 'To make the widget slightly larger, simply grab the bottom right corner and drag it;'
    5:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-9-pe.png
        title: 'We will use data received at the last minute. Click "Edit timewindow", switch to "History" mode, and change the aggregation function to "None", because we don&#39;t need to guess the possible data value for the next time period, we receive the data in realtime;'

create-dashboard-3:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-10-pe.png
        title: 'Press the "Start" button to see how our device moved over the last minute.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-11-pe.png
        title: 'We can also speed up the movement of our cursor by 5, 10, or 25 times so that we can check its route much faster.'

data-settings:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/data-settings-1-pe.png
        title: 'Press the "Start" button to see how our device moved over the last minute.'

map-provider:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/map-provider-settings-1-pe.png
        title: 'Press the "Start" button to see how our device moved over the last minute.'

advanced-settings-key-name:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-key-name-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-key-name-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-key-name-3-pe.png

latitude-longitude-key-name:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/latitude-longitude-key-name-1-pe.png

advanced-settings-tooltip:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-3-pe.png

advanced-settings-label:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-4-pe.png

advanced-settings-marker-image:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-3-pe.png
      
advanced-settings-marker-image-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-4-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-5-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-6-pe.png

advanced-settings-path-color-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-4-pe.png

advanced-settings-path-decorator:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-decorator-1-pe.png

advanced-settings-points-settings:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-points-settings-1-pe.png

advanced-settings-point-color-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-point-color-function-1-pe.png

advanced-settings-anchor-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-3-pe.png

advanced-settings-additional-rotation-angle-for-marker:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-additional-rotation-angle-for-marker-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-additional-rotation-angle-for-marker-2-pe.png

access-token:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/access-token-1-pe.png

device-emulator:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/device-emulator.png


advanced-settings-polygon-settings-1:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-3-pe.png

advanced-settings-polygon-settings-2:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-4-pe.png

advanced-settings-polygon-settings-3:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-5-pe.png

advanced-settings-polygon-settings-4:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-6-pe.png

advanced-settings-polygon-settings-5:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-7-pe.png

advanced-settings-polygon-settings-6:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-8-pe.png

---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/ui/trip-animation-widget.md %}