---
layout: docwithnav
title: Trip animation widget
description: Trip animation widget guide
redirect_from: "/docs/user-guide/ui/widgets/trip-animation-widget/"

adding-device:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-device-1-ce.png
        title: 'For this guide, we will create a new device called Tracker1, which receives longitude, latitude, speed, circle radius, status, and polygon coordinates as telemetry using an emulator written in JavaScript.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/access-token-1-ce.png
        title: 'To copy the access token, click the corresponding button in the device details.'

create-dashboard-1:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-1-ce.png
        title: 'Navigate to the "Dashboards" page through the main menu on the left of the screen. Then, click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-2-ce.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'

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
        title: 'In the "Datasources" section, select the "Device" type and specify the previously created device "Tracker1" as the data source. Add "latitude", "longitude", "speed", "status", "circleRadius", and "polygonCoordinates" as timeseries data keys. Click the "Add" button in the bottom right corner of the widget to finish adding the widget;'
    4:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-8-ce.png
        title: 'To make the widget slightly larger, simply grab the bottom right corner and drag it. Click "Save" button in the upper right corner to save the dashboard;'
    5:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-9-ce.png
        title: 'We will use data received at the last minute. Click "Edit time window", switch to "History" mode, and change the aggregation function to "None", because we don&#39;t need to estimate the possible data value for the next time period since we receive the data in real-time;'

create-dashboard-3:
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-10-ce.png
        title: 'Press the "Start" button to see the movement of our device over the last minute;'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/adding-widget-11-ce.png
        title: 'We can also speed up the movement of our cursor by 5, 10, or 25 times so that we can check its route much faster.'

appearance-tab:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/appearance-tab-1-ce.png
        title: 'Enter widget editing mode by clicking the "pencil" icon in the upper right corner of the widget;'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/appearance-tab-2-ce.png
        title: 'Navigate to the "Appearance" tab.'

data-settings:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/data-settings-1-ce.png
        title: 'In the "Data settings" section you can add a special symbol that will be displayed next to the entity values. Additionally, you can set the number of digits to be displayed after the floating point number, and an alternative message when there is no data to display.'

map-provider:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/map-provider-settings-1-ce.png
        title: 'Choose a map provider from the list or use custom provider.'

latitude-longitude-key-name:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/latitude-longitude-key-name-1-ce.png
        title: 'Here, you specify the names of the data keys containing the coordinates of your entity. By default, these are "latitude" and "longitude". You also specify the normalization data step in milliseconds. By default, this value is set to 1000.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/latitude-longitude-key-name-2-ce.png

advanced-settings-tooltip:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-tooltip-3-ce.png

advanced-settings-additional-rotation-angle-for-marker:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-additional-rotation-angle-for-marker-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-additional-rotation-angle-for-marker-2-ce.png

advanced-settings-label:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-1-ce.png
        title: 'Show or hide the entity&#39;s label. You can also change the label text.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-2-ce.png
        title: 'Utilize the label function for more dynamic information.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-3-ce.png
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-label-4-ce.png

advanced-settings-marker-image:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-1-ce.png
        title: 'To select a custom marker, click on the "Browse from gallery" field in the "Custom marker image" section;'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-2-ce.png
        title: 'Select a new image from the Image gallery;'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-3-ce.png
        title: 'Optionally, resize the custom marker image and then apply the changes.'

advanced-settings-marker-image-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-4-ce.png
        title: 'Use marker image function.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-5-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-marker-image-6-ce.png

advanced-settings-path-color-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-1-ce.png
        title: 'Choose the path color.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-3-ce.png
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-color-function-4-ce.png

advanced-settings-path-decorator:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-path-decorator-1-ce.png
        title: 'Set the path decorator symbol, its color, end/start offset, repeatability, and size in pixels.'

advanced-settings-points-settings:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-points-settings-1-ce.png
        title: 'The points represent telemetry data updates, allowing you to check each one individually. You have the option to specify the color and size (in pixels) of the points to match your preferences or use a color point function.'

advanced-settings-point-color-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-point-color-function-1-ce.png
        title: 'Point color function allows you to visually track changes in data based on incoming telemetry from your entity.'

advanced-settings-anchor-function:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-1-ce.png
        title: 'The "Point as an anchor" feature allows you to navigate through data points based on a condition specified in the function. This makes it easier to sift through information according to specific criteria.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-anchor-function-3-ce.png

advanced-settings-polygon-settings-1:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-3-ce.png

advanced-settings-polygon-settings-2:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-4-ce.png

advanced-settings-polygon-settings-3:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-5-ce.png

advanced-settings-polygon-settings-4:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-6-ce.png

advanced-settings-polygon-settings-5:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-7-ce.png

advanced-settings-polygon-settings-6:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-polygon-settings-8-ce.png

advanced-settings-circle-settings-1:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-1-ce.png
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-2-ce.png
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-3-ce.png

advanced-settings-circle-settings-2:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-4-ce.png

advanced-settings-circle-settings-3:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-5-ce.png

advanced-settings-circle-settings-4:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-6-ce.png

advanced-settings-circle-settings-5:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-7-ce.png

advanced-settings-circle-settings-6:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/advanced-settings-circle-settings-8-ce.png

---

{% include get-hosts-name.html %}
{% include docs/user-guide/ui/trip-animation-widget.md %}