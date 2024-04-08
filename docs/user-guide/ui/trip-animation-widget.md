---
layout: docwithnav
title: Trip animation widget
description: Trip animation widget guide
redirect_from: "/docs/user-guide/ui/widgets/trip-animation-widget/"

create-dashboard-1:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-1-ce.png
        title: 'Login to your ThingsBoard instance and navigate to the "Dashboards" page through the main menu on the left of the screen. By default, you navigate to the dashboard group "All";'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-2-ce.png
        title: 'Click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    2:
        image: /images/user-guide/dashboards/overview/create-dashboard-3-ce.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title. Click "Add";'

create-dashboard-2:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-4-ce.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-5-ce.png
        title: 'Find the "Maps" widget bundle and click on it;'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-6-ce.png
        title: 'Select the "Trip Animation" widget;'
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-7-ce.png
        title: 'In the "Datasources" section, select the type "Device" and specify the previously created device "Tracker1" as the data source. Add "latitude", "longitude", "speed", "status", "circleRadius", and "polygonCoordinates" as timeseries data keys;'
    4:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-8-ce.png
        title: 'To make the widget slightly larger, simply grab the bottom right corner and drag it;'
    5:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-9-ce.png
        title: 'We&#39;ll use last minute received data to visualize and change the aggregation function to "None" because we don’t need to guess possible data value for the next time period, we receive data in realtime without any errors;'

create-dashboard-3:
    1:
      image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-10-ce.png
      title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'
    2:
      image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-11-ce.png
      title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'

advanced-settings-key-name:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-key-name-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-key-name-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-key-name-3-ce.png

advanced-settings-tooltip:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-3-ce.png

advanced-settings-label:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-3-ce.png
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-4-ce.png

advanced-settings-marker-image:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-2-ce.png

advanced-settings-marker-image-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-3-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-4-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-5-ce.png

advanced-settings-path-color-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-3-ce.png
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-4-ce.png

advanced-settings-path-decorator:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-decorator-1-ce.png

advanced-settings-points-settings:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-points-settings-1-ce.png

advanced-settings-point-color-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-point-color-function-1-ce.png

advanced-settings-anchor-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-3-ce.png

advanced-settings-additional-rotation-angle-for-marker:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-additional-rotation-angle-for-marker-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-additional-rotation-angle-for-marker-2-ce.png

access-token:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/access-token-1-ce.png

device-emulator:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/device-emulator.png

---

{% include docs/user-guide/ui/trip-animation-widget.md %}