---
layout: docwithnav-trendz
assignees:
  - vparomskiy
title: Trendz widget actions
description: Trendz widget actions

---

* TOC
  {:toc}

#### Configure OnRowClick action
Trendz Table view support onRowClick action. You can configure what should happen when user click on a Row in a table.
For example, you can save entity to the Dashboard state alias or open new dashboard state.

To enable row click event:
* Add Trendz Table View on ThingsBoard dashboard.
* Open widget edit mode and switch to **Actions** tab.
* Press **Add action** button.
* In **Action source** field select **On row click**.
* Proceed standard widget action configuration.

Each row has multiple fields from on or multiple devices/assets. It means that 1 row can be connected with multiple items.
If you want to use 'onRowClick' action - you need to define what item is selected when row clicked.
* Open **View Settings** in Trendz View edit mode.
* Open **View Mode fields** section.
* Select required Device/Asset type in **Row click entity** dropdown.
* Save changes.

#### Configure OnRowClick action for Anomaly

If you use the Anomaly Table on your dashboard and want to create an action that not only sets the selected entity but also updates the time window, follow these straightforward steps:
1. **Configure Row Click Entity.** Head to the chart settings in Trendz and set the "Row click entity."

![image](https://img.thingsboard.io/trendz/row-click-anomaly.png)

2. **Create Row Click Action.** Go to the Actions tab in your Anomaly view settings on the dashboard and create a new action. Choose "On Row click" as the Action source and set the type to "Custom action."  
   Then you have to add some custom code to define the chosen entity as the selected entity on your dashboard. Begin by obtaining the state ID and parameters for the new state entity. In our example, we used "selectedDevice,"
   but feel free to adapt this name based on your specific use case. Lastly, update both the time window and the state.

```javascript
let stateId = widgetContext.stateController.getStateId();
let stateParams = widgetContext.stateController.getStateParams();
stateParams.selectedDevice = {
    'entityId': entityId,
    'entityName': entityName
}

widgetContext.dashboard.onUpdateTimewindow(additionalParams.startTs, additionalParams.endTs); 
widgetContext.stateController.updateState(stateId, stateParams);
```
#### Configure Date selected action

Trendz Calendar and Anomaly table support date-selected action, allowing you to dynamically update the timewindow of your ThingsBoard dashboard based on the selected date in either the calendar or the anomaly timerange.
To enable the date-select event:
1. Add a Trendz View to your dashboard.
2. Enter widget edit mode and navigate to the Actions tab.
3. Click on the "Add action" button.
4. In the "Action source" field, choose "date-selected."
5. Set the type to "Custom action." You will receive the startTs and endTs parameters in the additionalParams argument of the custom function. Use the following code example to update the timewindow of your dashboard:

```javascript
widgetContext.dashboard.onUpdateTimewindow(additionalParams.startTs, additionalParams.endTs);
```

[//]: # (#### Configure Switch Field action)

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}