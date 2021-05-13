---
layout: docwithnav
title: Trip animation widget
description: Trip animation widget guide
taw-rulenode:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-rulenode-ce.png
        title: 'Open rule chains. In the node search bar, enter "generator" to quickly find the rule node that we need.
                Drag the generator rule node to an empty spot on the rule chain canvas. In the dialog box,
                enter a name for the generator, set the Device originator type, and select the device.
                Then, enter the function to generate latitude, longitude, and speed telemetry. Click Add.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-rulenode-1-ce.png
        title: 'After adding the generator, enter "timeseries" in the search bar to quickly find the Save Timeseries rule node.
                Drag the rule node to an empty space on the rule chain canvas somewhere near the generator rule node.
                In the dialog box, enter a name for the rule node and click Add.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-rulenode-2-ce.png
        title: 'Drag a link from "generator" to "save timeseries", and add a Success label to it. Save all applied changes by clicking the orange check mark in the lower right corner of the screen.'

taw-add-dash:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-dash-ce.png
        title: 'Open the created dashboard by clicking its name in the list, and then select "Open dashboard".'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-dash-1-ce.png
        title: 'Click the pencil icon in the lower right corner of the page to enter edit mode.'

taw-alias:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-alias-ce.png
        title: 'Click the "Entity alias" button and then "Add alias" in the dialog that opens.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-alias-1-ce.png
        title: 'Configure alias and click "Add" to save applied changes.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-alias-2-ce.png
        title: 'Save added alias.'

taw-add-widget:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-ce.png
        title: 'In dashboard edit mode, click the "Add new widget" sign in the middle of the page.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-1-ce.png
        title: 'To find the Maps widget bundle, you can either use the search bar by clicking a magnifying glass or scroll down the bundle menu.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-2-ce.png
        title: 'After entering "map" in the search bar, click found Maps bundle to open it.'
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-3-ce.png
        title: 'Select the Trip Animation widget from the Maps bundle.'
    4:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-4-ce.png
        title: 'Select the previously added alias and add latitude, longitude, and speed telemetry to visualize on the widget. 
                Set “Use dashboard timewindow” to synchronize data easier. Click "Add".'
    5:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-5-ce.png
        title: 'Edit the time window by clicking the corresponding button in the upper right corner of the page. 
                Go to History mode and use last minute received data for visualization and change aggregation function to None,
                because we don’t need to guess the possible data value for the next time period, we receive data in real time without any errors.
                Click the "Update" button to refresh the time window. After this, click the orange check mark in the lower right corner of the page to save all applied changes.'
    6:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-6-ce.png
        title: 'Take a look at how our device is moving for the last minute in a realtime by clicking the "Start" button in the lower right corner of the widget. 
                You can speed the timeline cursor up 1/5/10/25 times to check its route faster.'
    7:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-add-widget-7-ce.png
        title: 'Observe device rout.'

taw-advanced:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-advanced-ce.png
        title: 'Click the pencil icon in the upper right corner of the widget to enter its edit mode.'

taw-advanced-1:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-advanced-1-ce.png
        title: 'In widget details, move to the Advanced tab to configure unique features.'

taw-mapprovider:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-mapprovider-ce.png
        title: 'You can change the map provider using the drop-down menu and selecting new provider from there.'

taw-longitude:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-ce.png
        title: 'In advanced tab, change Longitude key name on custom one. In the tutorial will be used Data1.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-1-ce.png
        title: 'In the Data tab, click the pencil icon opposite time series data key.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-2-ce.png
        title: 'Enter the same custom name in the Label bar and click "Save".'
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-3-ce.png
        title: 'In the Advanced tab change both label name and key name to the custom name. Click orange check mark in the lower right corner of the page to save all applied changes.'
    4:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-4-ce.png
        title: 'After saving all applied changes, longitude on the tooltip displayed as Data1.'

taw-tooltip:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-tooltip-ce.png
        title: 'In advanced tab, change Longitude key name on custom one. In the tutorial will be used Data1.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-tooltip-1-ce.png
        title: 'In the Data tab, click the pencil icon opposite time series data key.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-tooltip-2-ce.png
        title: 'Enter the same custom name in the Label bar and click "Save".'

---

{% include docs/user-guide/ui/trip-animation-widget.md %}