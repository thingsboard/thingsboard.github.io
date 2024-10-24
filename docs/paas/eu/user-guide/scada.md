---
layout: docwithnav-paas-eu
assignees:
- ashvayka
title: SCADA dashboards
description: SCADA IoT dashboards using ThingsBoard

scada-dashboard-layout-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/add-scada-dashboard-1-pe.png
        title: 'Go to the "Dashboards" page, and click on the "plus" icon located in the upper-right corner of the screen to add a new dashboard. Select "Create new dashboard" from the dropdown menu that appears. In the dialog box that opens, type in the title for the dashboard and confirm by clicking "Add";'
    1:
        image: /images/user-guide/scada/scada-dashboards/add-scada-dashboard-2-pe.png
        title: 'Once created, the new dashboard will open automatically, allowing you to configure it immediately. Click on the "Layouts" sign in the top-left corner of the dashboard interface;'
    2:
        image: /images/user-guide/scada/scada-dashboards/add-scada-dashboard-3-pe.png
        title: 'Then, simply change the layout from "Default" to "SCADA", then save your changes.'

layout-settings-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/layout-settings-1-pe.png
        title: 'Click the "gear" icon in the "Manage layouts" window;'
    1:
        image: /images/user-guide/scada/scada-dashboards/layout-settings-2-pe.png
        title: 'This opens a small window with layout setting.'

scada-columns-count-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-columns-count-1-pe.png
        title: 'The number of columns in the layout settings must be divisible by 24 (e.g., 24, 48, 72, up to 1008);'
    1:
        image: /images/user-guide/scada/scada-dashboards/scada-columns-count-2-pe.png
        title: 'The count of columns is set to 24;'
    2:
        image: /images/user-guide/scada/scada-dashboards/scada-columns-count-3-pe.png
        title: 'The count of columns is set to 48.'

scada-minimum-layout-width-1:
      0:
        image: /images/user-guide/scada/scada-dashboards/scada-minimum-layout-width-1-pe.png
        title: 'By default, the minimum number of columns is 24. You can increase or decrease this number. The minimum number of columns is 10. We recommend the value of this setting to be equal or more then columns count value;'
      1:
        image: /images/user-guide/scada/scada-dashboards/scada-minimum-layout-width-2-pe.png
        title: 'The count of minimum columns is set to 24.'

scada-background-color-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-background-color-1-pe.png
        title: 'To change the background color, click the color in the small square on the right in the background color section. In the popup window, select the desired color and transparency. Then click "Select";'
    1:
        image: /images/user-guide/scada/scada-dashboards/scada-background-color-2-pe.png
        title: 'After saving the changes, you will see that the background color has changed.'

scada-background-image-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-background-image-1-pe.png
        title: 'To select an image from the gallery, click "Browse from gallery";'
    1:
        image: /images/user-guide/scada/scada-dashboards/scada-background-image-2-pe.png
        title: 'Choose an already uploaded image or add a new one;'
    2:
        image: /images/user-guide/scada/scada-dashboards/scada-background-image-3-pe.png
        title: 'To more precisely adjust the position of the image, click the dropdown menu of the "Background size mode" section and select how exactly the image will fill the background space;'
    3:
        image: /images/user-guide/scada/scada-dashboards/scada-background-image-4-pe.png
        title: 'see how the background has changed.'

multi-state-scada-dashboard-example-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/multi-state-dashboards-1-pe.png
        title: 'Clicking on a specific SCADA element will execute a customized action. Give it a try.'
    1:
        image: /images/user-guide/scada/scada-dashboards/multi-state-dashboards-2-pe.png
        title: ''
    2:
        image: /images/user-guide/scada/scada-dashboards/multi-state-dashboards-3-pe.png
        title: ''
    3:
        image: /images/user-guide/scada/scada-dashboards/multi-state-dashboards-4-pe.png
        title: ''

add-scada-symbol-widget-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/add-scada-symbol-widget-1-pe.png
        title: 'While in dashboard editing mode, сlick the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the Select widgets bundle dialog box;'
    1:
        image: /images/user-guide/scada/scada-dashboards/add-scada-symbol-widget-2-pe.png
        title: 'Find the "SCADA fluid system" widgets bundle and click on it;'
    2:
        image: /images/user-guide/scada/scada-dashboards/add-scada-symbol-widget-3-pe.png
        title: 'Choose the "Horizontal wheel valve" widget.'

scada-selected-target-device-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-selected-target-device-1-pe.png
        title: 'Specify a single entity: device, asset, etc. Omit the target entity parameter if interactive behavior is not required.'

scada-symbol-device-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-symbol-device-1-pe.png
        title: 'This points to a specific SCADA symbol from the library.'

scada-behavior-settings-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-behavior-settings-1-pe.png
        title: 'The list of behavior parameters is specific to the chosen SCADA symbol and is entirely controlled by the symbol&#39;s author'

scada-action-do-nothing-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-do-nothing-1-pe.png
        title: '"Do nothing" action will just take the constant defined by the user.'

scada-action-execute-rpc-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-execute-rpc-1-pe.png
        title: '"Execute RPC" action will send a command to the target device to get the value. The value is resolved once during the creation of the widget.'

scada-action-get-attribute-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-get-attribute-1-pe.png
        title: '"Get attribute" action will subscribe to the value of the target entity&#39;s attribute. The widget will receive updates when the attribute value changes.'

scada-action-get-time-series-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-get-time-series-1-pe.png
        title: '"Get time series" action will subscribe to the value of the target entity&#39;s time series field. The widget will receive updates when new time series data arrives.'

scada-action-get-dashboard-state-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-get-dashboard-state-1-pe.png
        title: '"Get dashboard state" action will use the name of the current dashboard state. This is useful in specific cases that are not related to the state of the target device.'

scada-action-left-motor-pump-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-left-motor-pump-1-pe.png
        title: 'The "On click" action parameter defines the action that is triggered when a user clicks on the component.'

scada-action-execute-rpc-to-target-device-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-execute-rpc-to-target-device-1-pe.png
        title: '"Execute RPC" action will send a command to the target device. You can define the method and parameters of the command.'

scada-action-set-attribute-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-set-attribute-1-pe.png
        title: '"Set attribute" action will send a command to the target device. You can define the scope, key, and value of the attribute to set.'

scada-action-add-time-series-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-action-add-time-series-1-pe.png
        title: '"Add time series" action will add a new time series value to the target device. You can define the key and value of the new time series data.'

example-of-parameters-scada-symbol-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/example-of-parameters-scada-symbol-1-pe.png
        title: 'The first parameter "Opened" controls the visual representation of the SCADA symbol "Horizontal Wheel Valve" and can dynamically change, usually based on the value of an attribute or time series data received from the device. In the case of our valve, this parameter determines whether the valve is "Open" or "Closed";'
    1:
        image: /images/user-guide/scada/scada-dashboards/example-of-parameters-scada-symbol-2-pe.png
        title: 'The "Open" action sets the value "true" for the "open" attribute;'
    2:
        image: /images/user-guide/scada/scada-dashboards/example-of-parameters-scada-symbol-3-pe.png
        title: 'The "Close" action sets the value "false" for the "open" attribute.'

scada-appearance-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-appearance-1-pe.png
        title: 'For any SCADA symbol, general appearance parameters such as the symbol title and icon are available. Other parameters are specific to the selected SCADA symbol and are controlled by the symbol&#39;s author.'

scada-card-appearance-1:
    0:
        image: /images/user-guide/scada/scada-dashboards/scada-card-appearance-1-pe.png
        title: 'The card appearance settings are generic for any SCADA symbol and include background (transparent by default), list of enabled card buttons, card border radius, and padding parameters.'


---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/user-guide/scada.md %}
