---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Calendar heatmap
description: Trendz Calendar 
---

* TOC
{:toc}

Heatmap Calendar widget shows quick overview how metric changed over a year with day by day breakdown.

![image](/images/trendz/calendar_heatmap.png)

## Single field configuration

Add required metric into **Value** section and press **Build Report** button. You can add telemetry, state or calculated field.

Each cell in calendar has specific color that depends on value for that day. If there is no value - cell would be blank. 
You can change color schema and View Settings.

## Multiple fields

You can add multiple fields into **Value** section. In this case you can switch between fields using radio button.

![image](/images/trendz/calendar_heatmap_multiple.png)

## Select date action

Trendz calendar view supports date click events. Is is useful when you want to select date of interest and drill down for further analysis.

For example you can create a dashboard in ThingsBoard that contains multiple widgets. All widgets take time range from the dashboard.
By configuring date click event on the calendar widget you can set required time range on the dashboard, so all other widgets would automatically update 
and show data for the selected date.

* Add Trendz calendar view on the ThingsBoard dashboard
* Open widget edit mode and switch to **Actions** tab.
* Press **Add action** button.
* In **Action source** field select **date-selected**.
* In **Type** field select **Custom action** and use following function

```javascript
var newTimeRange = {
    aggregation: {
        limit: 30000,
        type: "NONE"
    },
    hideAggInterval: false,
    hideAggregation: false,
    hideInterval: false,
    history: {
        historyType: 1,
        fixedTimewindow: {
            startTimeMs: additionalParams.startTs,
            endTimeMs: additionalParams.endTs
        }
    },
    selectedTab: 1
}
    
// apply new time range 
widgetContext.dashboard.dashboardTimewindowChangedSubject.next(newTimeRange);

var params = {
    entityId: entityId,
    entityName: entityName,
    entityLabel: entityLabel,
}

// open new dashboard state        
widgetContext.stateController.updateState('consumption_details', additionalParams.params);
```
 
With this custom action we will change dashboard time range to selected date and navigate to new dashboard state with name **consumption_details**.

## Switch field action

Switch field selector activated when multiple fields are added to the **Value** section. In this cae user can select from the widget what field is shown.
Trendz View trigger special event when user switch fields. You can trigger required action when switch event triggered.

* Add Trendz calendar view on the ThingsBoard dashboard
* Open widget edit mode and switch to **Actions** tab.
* Press **Add action** button.
* In **Action source** field select **changed-radio-button**.
* Proceed standard widget action configuration. 

You can find name of the field that was selected in **additionalParams.radioButton** property.