---
layout: docwithnav-pe
assignees:
- ashvayka
title: SCADA symbols development guide
description: SCADA symbols development guide

upload-svg-file-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/upload-svg-file-1-pe.png
        title: 'Navigate to the "Resources" page of the "SCADA symbols" section and click the "Upload SCADA symbol" button;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/upload-svg-file-2-pe.png
        title: 'Drop the "fan.svg" file in the appropriate field, or upload it from a folder on your computer, rename it to "Fan", and click "Upload".'

explore-scada-editor-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/explore-scada-editor-1-pe.png
        title: 'The SCADA symbol editor is split into two panels: the left panel displays your uploaded SVG file, the right panel contains multiple tabs such as "General", "Tags", "Behavior", and "Properties".'

explore-scada-editor-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/explore-scada-editor-2-pe.png
        title: 'Populate the description and search tags, then click "Apply".'

scada-editor-actions-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/scada-editor-actions-1-pe.png
        title: 'Populate the description and search tags, then click "Apply".'

scada-editor-actions-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/scada-editor-actions-2-pe.png
        title: 'SCADA editor actions.'

widget-size-and-aspect-ratio-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/widget-size-and-aspect-ratio-1-pe.png
        title: 'The "Widget size" setting impacts the aspect ratio of the widget and should ideally match the aspect ratio of your SVG.'

tags-definition-via-editor-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/tags-definition-via-editor-1-pe.png
        title: 'Go to the "Tags" tab. Now click the desired SVG element on the left panel of the editor and click the "+Add tag" button;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/tags-definition-via-editor-2-pe.png
        title: 'Enter a tag name and click the "Apply" icon;'
    2:
        image: /images/user-guide/scada/symbols-dev-guide/tags-definition-via-editor-3-pe.png
        title: 'Tag added;'
    3:
        image: /images/user-guide/scada/symbols-dev-guide/tags-definition-via-editor-4-pe.png
        title: 'Define all other tags.'

operations-with-tag-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/operations-with-tag-1-pe.png
        title: 'Hover over the tag and click the "Update tag" icon;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/operations-with-tag-2-pe.png
        title: 'Change the tag name and click "Apply".'

operations-with-tag-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/operations-with-tag-3-pe.png
        title: 'Hover over the tag and click the "Tag settings" icon;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/operations-with-tag-4-pe.png
        title: 'In the pop-up menu, there are two types of functions you may assign to each tag: "State render function" and "On click action". We will discuss these in more detail in the "Tag configuration" section.'

operations-with-tag-3:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/operations-with-tag-5-pe.png
        title: 'Hover over the tag and click the "Remove tag" icon;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/operations-with-tag-6-pe.png
        title: 'Confirm deleting the tag in the dialog box.'

add-tags-to-on-button-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-tags-to-on-button-1-pe.png
        title: 'Switch to "XML" editor mode and highlight the XML code as shown in the screenshot;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-tags-to-on-button-2-pe.png
        title: 'Paste the XML code copied from the documentation;'
    2:
        image: /images/user-guide/scada/symbols-dev-guide/add-tags-to-on-button-3-pe.png
        title: 'Return to the "SVG" editor mode. You will see the tags added to the "On" button element.'
    
tags-definition-via-xml-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/tags-definition-via-xml-1-pe.png
        title: 'Navigate to the "XML" editor mode;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/tags-definition-via-xml-2-pe.png
        title: 'Add the XML code in the corresponding window;'
    2:
        image: /images/user-guide/scada/symbols-dev-guide/tags-definition-via-xml-3-pe.png
        title: 'Return to the "SVG" editor mode. You can see the defined tags. After, apply changes.'

behavior-scada-developer-end-user-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/behavior-scada-developer-end-user-configuration-1-pe.png
        title: 'The list of behavior items configured by the SCADA developer;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/behavior-scada-developer-end-user-configuration-2-pe.png
        title: 'The list of the elements in the widget configuration of the end-user.'

add-behavior-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-behavior-1-pe.png
        title: 'Navigate to the "Behavior" tab and click the "Add behavior" button;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-behavior-2-pe.png
        title: 'Fill in the required fields and click "Add".'

types-of-behavior-parameters-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/types-of-behavior-parameters-1-pe.png
        title: 'The list of behavior parameters is specific to the chosen SCADA symbol and is entirely controlled by the symbol&#39;s author. There are three types of behavior parameters: "Value", "Action", and "Widget action".'

five-types-of-actions-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/five-types-of-actions-1-pe.png
        title: 'The "Do nothing" action type utilizes a constant value defined by the user.'

five-types-of-actions-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/five-types-of-actions-2-pe.png
        title: 'The "Execute RPC" action type sends a command to the target device to retrieve the value. The value is resolved once at the widget&#39;s creation.'

five-types-of-actions-3:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/five-types-of-actions-3-pe.png
        title: 'The "Get attribute" action type subscribes to a target entity&#39;s attribute value, updating the widget when this attribute changes.'

five-types-of-actions-4:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/five-types-of-actions-4-pe.png
        title: 'The "Get time series" action type subscribes to a target entity&#39;s time series field, updating the widget with new data arrivals.'

five-types-of-actions-5:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/five-types-of-actions-5-pe.png
        title: 'The "Get dashboard state" action type uses the current dashboard state&#39;s name, beneficial in specific scenarios unrelated to the device&#39;s state.'

value-types-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/value-types-1-pe.png
        title: '"Value" and "Action" behavior items come in various types including "String", "Integer", "Double", "Boolean", and "JSON". Each type has its own specific configuration parameters.'

add-fan-on-behavior-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-on-behavior-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-on-behavior-2-pe.png
        title: ''
    2:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-on-behavior-3-pe.png
        title: ''

add-fan-speed-behavior-1:
  0:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-speed-behavior-1-pe.png
        title: ''
  1:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-speed-behavior-2-pe.png
        title: ''

three-types-of-actions-for-interacting-with-target-entity-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/three-types-of-actions-for-interacting-with-target-entity-1-pe.png
        title: ''

three-types-of-actions-for-interacting-with-target-entity-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/three-types-of-actions-for-interacting-with-target-entity-2-pe.png
        title: ''

three-types-of-actions-for-interacting-with-target-entity-3:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/three-types-of-actions-for-interacting-with-target-entity-3-pe.png
        title: ''

widget-action-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/widget-action-1-pe.png
        title: 'Widget action behavior items are designed to trigger actions related to the current dashboard widget rather than the target device. Possible widget actions are detailed in the "Widget Actions" documentation.'

add-on-btn-click-behavior-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-on-btn-click-behavior-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-on-btn-click-behavior-2-pe.png
        title: ''

add-off-btn-click-behavior-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-off-btn-click-behavior-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-off-btn-click-behavior-2-pe.png
        title: ''

widget-action-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/widget-action-2-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/widget-action-3-pe.png
        title: ''

properties-scada-developer-end-user-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/properties-scada-developer-end-user-configuration-1-pe.png
        title: 'The list of properties configured by the SCADA developer;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/properties-scada-developer-end-user-configuration-2-pe.png
        title: 'The list of properties in the widget configuration of the end-user.'

add-properties-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-properties-1-pe.png
        title: 'Navigate to the "Property" tab and click the "Add property" button;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-properties-2-pe.png
        title: 'Fill in the required fields and click "Add".'
  
add-on-btn-label-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-on-btn-label-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-on-btn-label-2-pe.png
        title: ''

add-on-btn-color-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-on-btn-color-1-pe.png
        title: ''

add-on-btn-disabled-color-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-on-btn-disabled-color-1-pe.png
        title: ''

add-off-btn-label-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-off-btn-label-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-off-btn-label-2-pe.png
        title: ''

add-off-btn-color-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-off-btn-color-1-pe.png
        title: ''
  
add-off-btn-disabled-color-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-off-btn-disabled-color-1-pe.png
        title: ''
  
add-fan-on-color-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-on-color-1-pe.png
        title: ''
  
add-fan-off-color-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-off-color-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/add-fan-off-color-2-pe.png
        title: ''

add-show-rotation-speed-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-show-rotation-speed-1-pe.png
        title: ''
  
add-rotation-speed-unit-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-rotation-speed-unit-1-pe.png
        title: ''

add-rotation-speed-font-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-rotation-speed-font-1-pe.png
        title: ''

add-rotation-speed-color-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/add-rotation-speed-color-1-pe.png
        title: ''

configured-properties-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/configured-properties-1-pe.png
        title: 'List of configured properties should look like this.'

state-render-function-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/state-render-function-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/state-render-function-2-pe.png
        title: ''

on-click-action-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/on-click-action-1-pe.png
        title: ''
    1:
        image: /images/user-guide/scada/symbols-dev-guide/on-click-action-2-pe.png
        title: ''

on-button-text-tag-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-text-tag-configuration-1-pe.png
        title: 'Go to the "Tag settings" of the "onButtonText" tag and click "+ Add" button of a "State rendering function";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-text-tag-configuration-2-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'


off-button-text-tag-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-text-tag-configuration-1-pe.png
        title: 'Go to the "Tag settings" of the "offButtonText" tag and click "+ Add" button of a "State rendering function";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-text-tag-configuration-2-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

on-button-background-tag-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-background-tag-configuration-1-pe.png
        title: 'Go to the "Tag settings" of the "onButtonBackground" tag and click "+ Add" button of a "State rendering function";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-background-tag-configuration-2-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

off-button-background-tag-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-background-tag-configuration-1-pe.png
        title: 'Go to the "Tag settings" of the "offButtonBackground" tag and click "+ Add" button of a "State rendering function";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-background-tag-configuration-2-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

on-button-tag-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-tag-configuration-1-pe.png
        title: 'Go to the "Tag settings" of the "onButton" tag and click "+ Add" button of a "State rendering function";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-tag-configuration-2-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

on-button-tag-configuration-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-tag-configuration-3-pe.png
        title: 'Go to the "Tag settings" of the "onButton" tag and click "+ Add" button of a "On click action";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/on-button-tag-configuration-4-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

off-button-tag-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-tag-configuration-1-pe.png
        title: 'Go to the "Tag settings" of the "offButton" tag and click "+ Add" button of a "State rendering function";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-tag-configuration-2-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

off-button-tag-configuration-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-tag-configuration-3-pe.png
        title: 'Go to the "Tag settings" of the "offButton" tag and click "+ Add" button of an "On click action";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/off-button-tag-configuration-4-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

rotation-speed-text-tag-configuration-1:
    0:
      image: /images/user-guide/scada/symbols-dev-guide/rotation-speed-text-tag-configuration-1-pe.png
      title: 'Go to the "Tag settings" of the "rotationSpeedText" tag and click "+ Add" button of a "State rendering function";'
    1:
      image: /images/user-guide/scada/symbols-dev-guide/rotation-speed-text-tag-configuration-2-pe.png
      title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

fan-tag-configuration-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/fan-tag-configuration-1-pe.png
        title: 'Go to the "Tag settings" of the "fan" tag and click "+ Add" button of a "State rendering function";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/fan-tag-configuration-2-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

fan-tag-configuration-2:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/fan-tag-configuration-3-pe.png
        title: 'Go to the "Tag settings" of the "fan" tag and click "+ Add" button of an "On click action";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/fan-tag-configuration-4-pe.png
        title: 'Paste the previously copied function from the documentation into the appropriate window. Click "Apply".'

preview-mode-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/preview-mode-1-pe.png
        title: 'To enter preview mode, click the "Preview" button on the right side of the window;'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/preview-mode-2-pe.png
        title: 'The SVG will be displayed on the left panel, and the widget configuration will appear on the right. Let&#39;s test the behavior of our widget. Press the green "On" button;'
    2:
        image: /images/user-guide/scada/symbols-dev-guide/preview-mode-3-pe.png
        title: 'The color of the button should change to gray, the fan will change color from red to green and start spinning. Below the fan, the RPM (revolutions per minute) will be displayed. Meanwhile, the "Off" button will become active and change its color from gray to red. Press it;'
    3:
        image: /images/user-guide/scada/symbols-dev-guide/preview-mode-4-pe.png
        title: 'The fan should stop, the "Off" button will become unclickable again, and its color will return to gray.'

create-widget-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/create-widget-1-pe.png
        title: 'Click the "Create widget" button in the upper right corner.'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/create-widget-2-pe.png
        title: 'In the new window, enter the name of the future widget and specify an existing widget bundle or create a new one. We will create a new one. Enter the desired name for it and click "Create new widget bundle";'
    2:
        image: /images/user-guide/scada/symbols-dev-guide/create-widget-3-pe.png
        title: 'Optionally, add a preview image for the widget bundle and click "Add";'
    3:
        image: /images/user-guide/scada/symbols-dev-guide/create-widget-4-pe.png
        title: 'Confirm the widget creation by pressing the "Create" button.'

test-widget-on-dashboard-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-1-pe.png
        title: 'Create a new dashboard and open it. Navigate to the "Layouts" panel. Then, change the layout from "Default" to "SCADA". Click "Save";'
    1:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-2-pe.png
        title: 'Now, click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen;'
    2:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-3-pe.png
        title: 'Find the "My SCADA widgets" widget bundle and click on it;'
    3:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-4-pe.png
        title: 'Click on the "Fan" widget to add it to the dashboard;'
    4:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-5-pe.png
        title: 'Specify the target device (use any device), and click "Add";'
    5:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-6-pe.png
        title: 'Widget added. Click "Save" to save the changes to the dashboard;'
    6:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-7-pe.png
        title: 'Click the green "On" button. The button will become unclickable, its color should change to gray, the fan will change color from red to green and start spinning. The fan&#39;s RPM value will display beneath it;'
    7:
        image: /images/user-guide/scada/symbols-dev-guide/test-widget-on-dashboard-8-pe.png
        title: 'Meanwhile, the "Off" button will become active and change its color from gray to red. Press it. The fan should stop, the “Off” button will become unclickable, and its color will turn gray again.'

download-scada-symbol-1:
    0:
        image: /images/user-guide/scada/symbols-dev-guide/download-scada-symbol-1-pe.png
        title: 'You can download the SCADA symbol with all settings. To do this, click the "Download SCADA symbol" button on the left panel of the SCADA symbol editor. The SVG file will be saved to your PC.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/scada/scada-symbols-dev-guide.md %}