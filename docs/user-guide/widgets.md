---
layout: docwithnav
assignees:
- stitenko
title: Working with widgets

add-widget:
    0:
        image: /images/user-guide/widgets/overview/add-new-dashboard-1-ce.png
        title: 'Open your dashboard and switch to <b>Edit mode</b>;'
    1:
        image: /images/user-guide/widgets/overview/add-new-dashboard-2-ce.png
        title: 'Click the <b>+ Add widget</b> at the top of the screen. If this is your first widget on the dashboard, you can also click <b>Add new widget</b> in the center of the screen to open the Widget bundle dialog;'
    2:
        image: /images/user-guide/widgets/overview/add-new-dashboard-3-ce.png
        title: 'Choose a <b>widget bundle</b> (for example, <b>Charts</b>). To quickly find your desired widget, use the search bar by clicking the magnifying glass icon and entering the widget&#39;s name;'
    3:
        image: /images/user-guide/widgets/overview/add-new-dashboard-4-ce.png
        title: 'Select a widget (for example, <b>Time series chart</b>) to open the <b>Add widget</b> dialog;'
    4:
        image: /images/user-guide/widgets/overview/add-new-dashboard-5-ce.png
        title: 'Specify the <b>data source</b>, add at least one <b>data key</b>, and click <b>Add</b>. Then <b>Apply changes</b>.'
    5:
        image: /images/user-guide/widgets/overview/add-new-dashboard-6-ce.png
        title: 'The widget is now created.'

add-widget-basic-mode:
    0:
        image: /images/user-guide/widgets/overview/add-widget-basic-mode-1-ce.png
        title: 'If you are using basic features to create a widget, you need to select the datasource type (device or entity alias) and add the series key. Then click "Add".'

add-widget-advanced-mode:
    0:
        image: /images/user-guide/widgets/overview/add-widget-advanced-mode-1-ce.png
        title: 'Using advanced functionality to create a widget, you need to select multiple datasources (if supported by the widget) and apply filters. Then click "Add".'

timewindow:
    0:
        image: /images/user-guide/widgets/overview/data-settings/time-window-1-ce.png
        title: 'By default, every widget uses the main time window determined in the dashboard&#39;s toolbar.'
    1:
        image: /images/user-guide/widgets/overview/data-settings/time-window-2-ce.png
        title: 'Toggle the "Use widget time window" checkbox to overwrite the default time window.'

data-source-type-device:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-1-ce.png
        title: 'Open your dashboard and enter edit mode. Then click the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the "Widgets bundle” dialog window;'
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-2-ce.png
        title: 'Select "Analogue gauge" widget bundle;'
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-3-ce.png
        title: 'Then select a "Thermometer scale" widget;'
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-4-ce.png
        title: 'The "Add Widget" dialog window will open. Select data source type - "Device" and select your device. Then add data key - "temperature". Click "Add" and save all changes;'
    4:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-5-ce.png
        title: 'Thermometer scale widget is created.'

data-source-type-entity:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-1-ce.png
        title: 'Open your dashboard and enter edit mode. Then click the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the "Widgets bundle” dialog window;'
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entity-2-ce.png
        title: 'Select "Tables" widget bundle;'
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entity-3-ce.png
        title: 'Then select an "Entities table" widget;'
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entity-4-ce.png
        title: 'The "Add Widget" dialog window will open. Select data source type - "Entity". Now, we need to create a new entity alias. Click "Create new" button in the entity alias row;'
    4:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entity-5-ce.png
        title: 'In the opened Add alias dialog, enter an alias name, select filter type - "Entity type", and choose an entity type - "Device". Click "Add";'
    5:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entity-6-ce.png
        title: 'Add data keys. Then click "Add" and save all changes;'
    6:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entity-7-ce.png
        title: 'A widget has been added that displays all devices using an entity alias as the datasource.'

data-source-type-random:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-1-ce.png
        title: 'Open your dashboard and enter edit mode. Then click the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the "Widgets bundle” dialog window;'
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-2-ce.png
        title: 'Select a "Cards" widget bundle;'
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-random-3-ce.png
        title: 'Then select a "Value card" widget;'
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-random-4-ce.png
        title: 'The "Add Widget" dialog window will open. Navigate to the advanced functionality and select data source type - "Random". Then add a function - "Random" and click the "pencil" icon of the "Random" key to open data key configuration window;'
    4:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-random-5-ce.png
        title: 'Change the label name to "temperature" and specify units. Click "Save";'
    5:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-random-6-ce.png
        title: 'Click "Add" and save all changes;'
    6:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-random-7-ce.png
        title: 'Created the value card widget which displays random value.'

data-source-type-entities-count:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-1-ce.png
        title: 'Open your dashboard and enter edit mode. Then click the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the "Widgets bundle” dialog window;'
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-2-ce.png
        title: 'Select a "Cards" widget bundle;'
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-3-ce.png
        title: 'Then select a "Value card" widget;'
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-4-ce.png
        title: 'The "Add Widget" dialog window will open. Go to the advanced functionality and select data source type - "Entities count". Now, we need create new entity alias. Click "Create new" button in the entity alias row;'
    4:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-5-ce.png
        title: 'In the opened Add alias dialog, enter an alias name, select filter type - "Entity type", and choose an entity type - "Device". Click "Add";'
    5:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-6-ce.png
        title: 'In the Data key row click the "pencil" icon of the "count" key to open data key configuration window;'
    6:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-7-ce.png
        title: 'Change label name to "Devices count" and specify units. Click "Save";'
    7:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-8-ce.png
        title: 'Finally, click "Add" and save all changes;'
    8:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-9-ce.png
        title: 'Now we have a widget that displays the number of existing devices.'

data-source-type-alarms-count:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-1-ce.png
        title: 'Open your dashboard and enter edit mode. Then click the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the "Widgets bundle” dialog window;'
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-2-ce.png
        title: 'Select "Cards" widget bundle;'
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-entities-count-3-ce.png
        title: 'Then select a "Value card" widget;'
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-alarms-count-4-ce.png
        title: 'The "Add Widget" dialog window will open. Go to the advanced functionality, select data source type - "Alarms count" and specify filters. In the Data key row click the "pencil" icon of the "count" key to open data key configuration window;'
    4:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-alarms-count-5-ce.png
        title: 'Change label name to "Alarms count" and specify units. Click "Save";'
    5:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-alarms-count-6-ce.png
        title: 'Finally, click "Add" and apply changes;'
    6:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-alarms-count-7-ce.png
        title: 'Now we have a widget that displays all alarms of existing devices.'

add-data-key:
    0:
        image: /images/user-guide/widgets/overview/data-settings/add-data-key-1-ce.png
        title: 'To add a key to the data source, click on the data keys row and select the desired key from the dropdown menu.'
    1:
        image: /images/user-guide/widgets/overview/data-settings/add-key-in-the-future-1-ce.png
        title: 'If a key is not yet present in the database, type its name and select the type (Attribute, Entity field, or Time series). The widget will display values once they become available.'

edit-basic-key-configuration:
    0:
        image: /images/user-guide/widgets/overview/data-settings/edit-basic-key-configuration-key-1-ce.png
        title: ''

edit-key-configuration:
    0:
        image: /images/user-guide/widgets/overview/data-settings/edit-key-configuration-1-ce.png
        title: ''

data-key-configuration-key:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-key-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-key-2-ce.png
        title: ''
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-key-3-ce.png
        title: ''
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-key-4-ce.png
        title: ''

data-key-configuration-label:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-label-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-label-2-ce.png
        title: ''
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-label-3-ce.png
        title: ''
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-label-4-ce.png
        title: ''

data-key-configuration-units:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-special-symbol-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-special-symbol-2-ce.png
        title: ''

data-key-configuration-decimals:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-decimals-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-decimals-2-ce.png
        title: ''

data-key-configuration-color:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-color-1-ce.png
        title: 'Click on the colored icon of the data key;'
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-color-2-ce.png
        title: 'Select the desired label color and press "Select";'
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-color-3-ce.png
        title: 'The label color is changed. Save all changes;'
    3:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-color-4-ce.png
        title: 'The graph line color is changed;'
    4:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-color-5-ce.png
        title: ''

data-key-configuration-aggregation:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-aggregation-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-aggregation-2-ce.png
        title: ''
    2:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-aggregation-3-ce.png
        title: ''

aggregation-min-max:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-max-0-ce.png
        
aggregation-average:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-avg-0-ce.png
        
aggregation-sum:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-sum-0-ce.png
        
aggregation-count:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-count-0-ce.png

aggregation-previous-interval:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-max-delta-0-ce.png

aggregation-day-ago:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-sum-delta-dayago-0-ce.png

aggregation-week-ago:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-avg-delta-week-0-ce.png

aggregation-month-ago:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-max-delta-monthago-0-ce.png

aggregation-year-ago:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-max-delta-yearago-0-ce.png

aggregation-custom-interval:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-agg-max-delta-custom-0-ce.png

data-key-configuration-settings-post-processing:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-key-configuration-settings-post-processing-1-ce.png

alarm-filters:
    0:
        image: /images/user-guide/widgets/overview/data-settings/alarm-filters-2-ce.png
        title: 'Filter alarms by status, severity and type.'

default-data-settings:
    0:
        image: /images/user-guide/widgets/overview/appearance/default-data-settings-1-ce.png
        title: 'You can choose which symbol to display next to the value and the number of digits after the floating-point number;'
    1:
        image: /images/user-guide/widgets/overview/appearance/default-data-settings-2-ce.png
        title: ''

appearance-stacking-mode-1:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-stacking-mode-1-ce.png
        title: 'In the upper right corner of the screen, click on the Time window configuration and choose any preferred Data aggregation function other than None. Click "Update" to apply changes;'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-stacking-mode-2-ce.png
        title: 'In the widget settings, on the "Appearance" tab, toggle "Enable stacking mode" checkbox and apply changes;'
    2:
        image: /images/user-guide/widgets/overview/appearance/appearance-stacking-mode-3-ce.png
        title: 'To view the values of all entities, you need to hover your mouse over the bar.'

appearance-stacking-mode-2:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-stacking-mode-4-ce.png
        title: 'If you need to exclude a specific key from stacking, go to the advanced configuration of that data key;'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-stacking-mode-5-ce.png
        title: 'Check the "Exclude from stacking" checkbox. Apply changes.'
    2:
        image: /images/user-guide/widgets/overview/appearance/appearance-stacking-mode-6-ce.png
        title: 'Hover the mouse over a bar to see values of all entities.'

appearance-legend-settings-1:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-legend-settings-1-ce.png
        title: 'In the legend settings, you can:<br>- Configure <b>font settings</b> and <b>colors</b> for labels, values, and column headers.<br>- Choose the <b>legend position</b>.<br>- Select which statistical values to display (<b>minimum, maximum, average, total, latest</b>).<br>- Enable <b>sorting of data keys</b> or keep them unsorted.'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-legend-settings-2-ce.png
        title: 'The <b>legend</b> displays statistical values including <b>minimum, maximum, average, total</b>, and <b>latest</b> values.'

entity-name-legend:
    0:
        image: /images/user-guide/widgets/overview/appearance/entity-name-legend-1-ce.png
        title: 'When a widget contains data from multiple devices, or when several devices use the same data key name, it may be difficult to determine which key value corresponds to which device in the legend or tooltip.'
    1:
        image: /images/user-guide/widgets/overview/appearance/entity-name-legend-2-ce.png
        title: 'Open the data key configuration.'
    2:
        image: /images/user-guide/widgets/overview/appearance/entity-name-legend-3-ce.png
        title: 'Use the <b>${entityName}</b> variable in the key label, which automatically inserts the system name of the entity. This helps clearly identify the object, especially when its technical name or unique identifier is important.'
    3:
        image: /images/user-guide/widgets/overview/appearance/entity-name-legend-4-ce.png
        title: 'Use this variable for other data keys as well.'
    4:
        image: /images/user-guide/widgets/overview/appearance/entity-name-legend-5-ce.png
        title: 'Now, each key includes the name of the device it belongs to.'

entity-label-legend:
    0:
        image: /images/user-guide/widgets/overview/appearance/entity-label-legend-1-ce.png
        title: 'Use the <b>${entityLabel}</b> variable in the key label, that inserts the entity&#39;s label in the legend or tooltip. This is often used as a human-readable label and allows you to display a more descriptive name of the device or entity.'
    1:
        image: /images/user-guide/widgets/overview/appearance/entity-label-legend-2-ce.png
        title: 'Use this variable for other data keys as well.'
    2:
        image: /images/user-guide/widgets/overview/appearance/entity-label-legend-3-ce.png
        title: 'Now, each key includes a human-readable label of the device it belongs to.'

entity-name-tooltip:
    0:
        image: /images/user-guide/widgets/overview/appearance/tooltipName-before-configuration-CE.png
        title: 'When a widget contains data from multiple devices, or when several devices use the same data key name, it may be difficult to determine which key value corresponds to which device in the tooltip.'
    1:
        image: /images/user-guide/widgets/overview/appearance/tooltipName-configuration-1-CE.png
        title: 'Open the data key configuration.'
    2:
        image: /images/user-guide/widgets/overview/appearance/tooltipName-configuration-2-CE.png
        title: 'Use the <b>${entityName}</b> variable in the key label, which automatically inserts the system name of the entity. This helps clearly identify the object, especially when its technical name or unique identifier is important.'
    3:
        image: /images/user-guide/widgets/overview/appearance/tooltipName-configuration-3-CE.png
        title: 'Use this variable for other data keys as well.'
    4:
        image: /images/user-guide/widgets/overview/appearance/tooltipName-after-configuration-CE.png
        title: 'Now, each key includes the name of the device it belongs to.'

entity-label-tooltip:
    0:
        image: /images/user-guide/widgets/overview/appearance/tooltipLabel-configuration-1-CE.png
        title: 'Use the <b>${entityLabel}</b> variable in the key label, that inserts the entity&#39;s label in the tooltip. This is often used as a human-readable label and allows you to display a more descriptive name of the device or entity.'
    1:
        image: /images/user-guide/widgets/overview/appearance/tooltipLabel-configuration-2-CE.png
        title: 'Use this variable for other data keys as well.'
    2:
        image: /images/user-guide/widgets/overview/appearance/tooltipLabel-after-configuration-CE.png
        title: 'Now, each key includes a human-readable label of the device it belongs to.'

appearance-vertical-axis:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-vertical-axis-1-ce.png
        title: 'Set the minimum and maximum scale values. Also, you can specify the vertical axis title, set the ticks color, decimals and step size between ticks of the vertical axis.'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-vertical-axis-2-ce.png
        title: ''

appearance-horizontal-axis:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-horizontal-axis-1-ce.png
        title: 'You can specify the title of the horizontal axis and set the ticks color.'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-horizontal-axis-2-ce.png
        title: ''

appearance-ticks-formatter-function:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-ticks-formatter-function-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-ticks-formatter-function-2-ce.png
        title: 'In the "Appearance" tab, in the Ticks formatter function field, enter the custom function and apply changes.'
    2:
        image: /images/user-guide/widgets/overview/appearance/appearance-ticks-formatter-function-3-ce.png
        title: 'The function has been applied and values became more compact. By hovering the mouse over a widget you can see the tooltip with not reduced values.'

appearance-chart-background:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-chart-background-1-ce.png
        title: 'Configure preferred grid settings and apply changes;'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-chart-background-2-ce.png
        title: ''

appearance-tooltip-function:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-tooltip-function-1-ce.png
        title: 'In the Tooltip value format function field, enter your tooltip function, then apply changes;'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-tooltip-function-2-ce.png
        title: 'Hover with your mouse over the widget to see tooltip with applied value format function.'

appearance-comparison:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-comparison-1-ce.png
        title: 'In the "Appearance" tab, toggle the "Enable comparison" checkbox and from the drop-down menu select time to show historical data with which to compare. In the "Comparison X axis settings" section, select axis position, where the compared axis will be located on the widget. Also, you can enter the axis title and show axis tick labels;'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-comparison-2-ce.png
        title: 'Navigate to the "Data" tab and click the “pencil” icon of a key in the data keys row;'
    2:
        image: /images/user-guide/widgets/overview/appearance/appearance-comparison-3-ce.png
        title: 'In the data key configuration window, navigate to the "Advanced" tab and choose the comparison line color. When you are done with Comparison Settings configuration, then apply changes;'
    3:
        image: /images/user-guide/widgets/overview/appearance/appearance-comparison-4-ce.png
        title: 'Since comparison settings work only in history time window mode, click "Edit time window" icon in the dashboard toolbar, go to the "History" tab, and select the time interval with which you want to compare the current data. Then click "Update" to apply;'
    4:
        image: /images/user-guide/widgets/overview/appearance/appearance-comparison-5-ce.png
        title: 'Now you can compare the value for the current minute and the five minutes ago.'

appearance-custom-legend-settings:
    0:
        image: /images/user-guide/widgets/overview/appearance/appearance-custom-legend-settings-1-ce.png
        title: 'Navigate to the "Appearance" tab. Activate the "Enable custom legend" option to use attribute or time series values as key labels. Click on "+ Add new key". In the drop-down menu that appears, input the key name and choose the key type;'
    1:
        image: /images/user-guide/widgets/overview/appearance/appearance-custom-legend-settings-2-ce.png
        title: 'Proceed to the "Data" tab. Click the pencil icon next to a data key to access the Data key configuration window;'
    2:
        image: /images/user-guide/widgets/overview/appearance/appearance-custom-legend-settings-3-ce.png
        title: 'In the label line, input the pattern ${} and place the data key name within the brackets. Click "Save" to set the new label name and apply all changes;'
    3:
        image: /images/user-guide/widgets/overview/appearance/appearance-custom-legend-settings-4-ce.png
        title: 'Now, when you view the widget, you&#39;ll see that the custom legend settings have been applied.'

widget-card-title:
    0:
        image: /images/user-guide/widgets/overview/widget-card-title-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/widget-card-title-3-ce.png
        title: 'Edit widget title settings and apply changes;'
    2:
        image: /images/user-guide/widgets/overview/widget-card-title-4-ce.png
        title: 'The title style have been changed.'

widget-card-style:
    0:
        image: /images/user-guide/widgets/overview/widget-card-style-2-ce.png
        title: 'Customize the widget style and apply changes;'
    1:
        image: /images/user-guide/widgets/overview/widget-card-style-3-ce.png
        title: 'The widget style has been changed.'

enable-fullscreen:
    0:
        image: /images/user-guide/widgets/overview/data-key-configuration-settings-enable-fullscreen-1-ce.png
        title: 'By default, fullscreen is enabled.'
    1:
        image: /images/user-guide/widgets/overview/data-key-configuration-settings-enable-fullscreen-2-ce.png
        title: 'To expand widget to fullscreen, click on the “Expand to fullscreen” icon at the top right of the widget.'
    2:
        image: /images/user-guide/widgets/overview/data-key-configuration-settings-enable-fullscreen-3-сe.png
        title: 'You can disable the ability to expand widget to fullscreen.'

mobile-settings:
    0:
        image: /images/user-guide/widgets/overview/widget-settings-mobile-1-ce.png
        title: ''
    1:
        image: /images/user-guide/widgets/overview/widget-settings-mobile-2-ce.png
        title: ''
    2:
        image: /images/user-guide/widgets/overview/widget-settings-mobile-3-ce.png
        title: ''

import-widget:
    0:
        image: /images/user-guide/widgets/overview/data-settings/data-source-type-device-1-ce.png
        title: 'Open your dashboard and switch to <b>Edit mode</b>. Click <b>+ Add widget</b>. The <b>Select widgets bundle</b> dialog opens.'
    1:
        image: /images/user-guide/widgets/overview/import-widget-2-ce.png
        title: 'Click <b>Import widget</b> in the top‑right corner.'
    2:
        image: /images/user-guide/widgets/overview/import-widget-3-ce.png
        title: 'In the import dialog, upload the <b>JSON</b> file and click <b>Import</b>.'
    3:
        image: /images/user-guide/widgets/overview/import-widget-4-ce.png
        title: 'The widget has been added to the dashboard. It may not show data yet because the data source needs to be updated.'
    4:
        image: /images/user-guide/widgets/overview/import-widget-5-ce.png
        title: 'Enter widget <b>edit mode</b>, specify the <b>data source</b>, add the required <b>data key(s)</b>, and <b>apply</b> changes.'
    5:
        image: /images/user-guide/widgets/overview/import-widget-6-ce.png
        title: 'Verify that the widget displays data (e.g., a temperature chart) and <b>Save</b> the dashboard.'

export-widget:
    0:
        image: /images/user-guide/widgets/overview/export-widget-1-ce.png
        title: 'Open the dashboard containing the widget and switch to <b>Edit mode</b>. On the widget&#39;s top‑right toolbar, click <b>Export widget</b>. A <b>JSON</b> file with the widget configuration is downloaded to your computer.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/widgets.md %}
