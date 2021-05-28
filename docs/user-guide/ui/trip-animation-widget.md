---
layout: docwithnav
title: Trip animation widget
description: Trip animation widget guide
taw-rulenode:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-rulenode-ce.png
        title: 'Open rule chains. In the node search bar, enter "generator" to quickly find needed rule node.
                Drag the generator rule node to the rule chain canvas. In the dialog box,
                enter a name for the generator, set the Device originator type, and select the device.
                Then, enter the function to generate latitude, longitude, and speed telemetry. Click "Add".'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-rulenode-1-ce.png
        title: 'After adding the generator, enter "timeseries" in the search bar to find the Save Timeseries rule node.
                Drag a rule node to the canvas next to the generator rule node.
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
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-1-ce.png
        title: 'In the Advanced tab, change Longitude key name on a custom one. In this tutorial will be used "data1".'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-2-ce.png
        title: 'In the Tooltip row, change both label name and key name to the same custom name ("data1"). Click the orange check mark in the upper right corner of the page to save the applied changes.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-3-ce.png
        title: 'Go to the Data tab and click the pencil icon opposite to the Longitude data key.'
    3:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-4-ce.png
        title: 'Change the Label to the same key name (data1) and save changes'
    4:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-longitude-5-ce.png
        title: 'After saving all applied changes, longitude on the tooltip displayed as Data1.'

taw-label:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-label-ce.png
        title: 'In the Advanced tab, check the Show label box and enter the desired label. Apply changes by clicking the orange check mark in the upper right corner of the page.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-label-1-ce.png
        title: 'Label has been changed. To save applied changes, click the orange check mark in the lower right corner of the page.'

taw-labelfunction:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-labelfunction-ce.png
        title: 'In the Advanced tab, check the "Show label" box and "Use label function". In the corresponding field, enter your label function or use the one in the example (you can find it below the screenshots section).'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-labelfunction-1-ce.png
        title: 'Label function has been applied. Since speed does not exceed the specified value, the label is "Everything is OK". 
                To save applied changes, click the orange check mark in the lower right corner of the page.'

taw-tooltip:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-tooltip-ce.png
        title: 'In the Advanced tab, change Longitude key name on custom one. In the tutorial will be used Data1.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-tooltip-1-ce.png
        title: 'In the Data tab, click the pencil icon opposite time series data key.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-tooltip-2-ce.png
        title: 'Enter the same custom name in the Label bar and click "Save".'

taw-path:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-path-ce.png
        title: 'In the Advanced tab, click the circle icon and choose a preferred path color. Click "Select" to apply.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-path-1-ce.png
        title: 'You can also edit weight and opacity of the stroke. Apply changes by clicking the orange check mark in the upper right corner of the page.'
    2:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-path-2-ce.png
        title: 'After editing the path appearance, click the orange check mark in the lower right corner of the page to save all the changes.'

taw-pathfunction:
    0:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-pathfunction-ce.png
        title: '.'
    1:
        image: /images/user-guide/ui/widgets/trip-animation-widget/taw-pathfunction-1-ce.png
        title: '.'

---

{% include docs/user-guide/ui/trip-animation-widget.md %}