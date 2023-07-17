---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Predict remaining time to next maintenance of the equipment
description: Predictive maintenance system for industrial equipment

predictive-maintenance-dashboard:
  0:
    image: /images/trendz/guide/predictive_maintenance/predict_remaining_time_to_next_maintenance_of_the_equipment.png
    title: 'Predict remaining time to next maintenance of the equipment'
    
predictive-maintenance-forecast-next-maintenance-time:
  0:
    image: /images/trendz/guide/predictive_maintenance/Remaining_time_create_table_St1_1.png
    title: 'Create table view in Trendz Analytics'
  1:
    image: /images/trendz/guide/predictive_maintenance/Remaining_time_add_fields_St1_2.png
    title: 'Add Machine and calculated field into columns section'
  2:
    image: /images/trendz/guide/predictive_maintenance/Remaining_time_prediction_calculated_St1_3.png
    title: 'Calculate remaining time to next maintenance based on production forecast'

predictive-maintenance-save-remaining-time-as-telemetry:
  0:
    image: /images/trendz/guide/predictive_maintenance/Remaining_time_rename_St2_1.png
    title: 'Define key name for calculated telemetry'
  1:
    image: /images/trendz/guide/predictive_maintenance/Remaining_time_TB_calculated_telemetry_save_St2_2.png
    title: 'Enable telemetry save in Tb calculated telemetry save section'
  2:
    image: /images/trendz/guide/predictive_maintenance/Remaining_time_row_click_entity_St2_3.png
    title: 'Set Machine entity as row click entity'

predictive-maintenance-create-alarm:
  0:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_open_machine_device_St3_1.png
    title: 'Go to Alarm rules section in ThingsBoard'
  1:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_create_alarm_rule_St3_2.png
    title: 'Define Alarm that will be raised when remaining time less than 14 days'
  2:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_less_than_St3_3.png
    title: 'Set threshold condition to create an alarm'
  3:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_clear_alarm_rule_St3_4.png
    title: 'Add clear condition to close active alarm'    
  4:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_save_alarm_St3_6.png
    title: 'Save alarm rule'

predictive-maintenance-notify-maintenance-team:
  0:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_open_root_rule_chain_St4_1.png
    title: 'Go to default rule chain in ThingsBoard'
  1:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_to_email_St4_2.png
    title: 'Add toEmail node with email properties'
  2:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_to_email_setup_St4_3.png
    title: 'Set dynamic email body to notify maintenance team'
  3:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_alarm_add_link_St4_4.png
    title: 'Connect node with device profile node'
  4:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_send_email_St4_5.png
    title: 'Add send email node'
  5:
    image: /images/trendz/guide/predictive_maintenance/Predict_remaining_rule_chain_view_St4_6.png
    title: 'Final rule chain view'

---

* TOC
{:toc}

## Introduction

Our FRTB-ZH3 cap assembly machines can produce between 200-350 pieces per hour, but varying loads make preventive maintenance scheduling difficult. 
To reduce unplanned downtime and minimize the risk of breakdowns, we plan to perform maintenance after each machine produces 500,000 caps. 
To ensure that we have enough time to order parts and schedule the maintenance team, we need to be notified two weeks before the scheduled maintenance. 
With Trendz Analytics, we implement predictive maintenance solution that can predict when each machine needs maintenance and receive notifications with enough lead time, 
allowing us to keep our machines running efficiently and reducing unplanned downtime.

**Task definition** - predict the number of days until each cap assembly machine produces 500,000 caps and create an alarm to notify 14 days before the predicted date.

{% include images-gallery.html imageCollection="predictive-maintenance-dashboard" %}

### Implementation plan
* Create a forecast for the amount of caps produced by each machine using Trendz Analytics.
* Calculate the number of days remaining until each machine produces 500,000 caps.
* Save the calculated remaining days as machine telemetry.
* Create an alarm in ThingsBoard if remaining time less than 14 days.
* Send email to the maintenance team once alarm created.

### Key outcomes
* Reduce unplanned downtime by 24%.
* Reduce maintenance costs by 10%.
* Improve maintenance team efficiency by 18%.

## Getting started:

### Prerequisites

Assembly machines already connected to ThingsBoard via OPC-UA integration and telemetry data is available in ThingsBoard. You can find more details how to do this in our [connectivity guides](https://thingsboard.io/docs/pe/guides/#AnchorIDConnectYourDevice).
Equipment reports a lot of useful telemetry data, but for this use case we will use only `capsProduced` telemetry.


### Step 1: Create a forecast for the amount of caps produced by machine
We start with creating a forecast for the amount of caps produced by each machine. Machine reports the number of produced caps every 5 minutes in the format `{ts: 1675421880000, values: { capsProduced: 738}}`.
Submitted value always increments and reset once maintenance performed. Let's start with a prediction of `capsProduced` telemetry for the next 3 months.

* Create table.
* Add `machine name` into columns section - this step will create a separate forecast for each machine.
* Add calculated field into columns section.
* Enable batch calculation checkbox.
* Enable checkbox `Prediction`
    * Prediction method - **Fourier transformation**
    * Prediction range - 3
    * Prediction unit - months

After enabling prediction for batch calculated field Trendz will build a forecast for tha raw telemetry from machine and then use it as an input parameter for calculation function. 
In that function we need to find when threshold would be reached and return remaining time to that point in days. If threshold would not be reached in next 3 months then we need to return -1.

* Write function that returns remaining time to next maintenance

```javascript
var threshold = 500000;
var remainingDays = -1;

var data = none(machine.capsProduced);
for(var i = 0; i < data.length; i++) {
    var point = data[i];
    if(point.value >= threshold) {
        var timeDeltaMillis = point.ts - Date.now();
        remainingDays = timeDeltaMillis / 1000 / 60 / 60 /24;
        break;
    }
}

return [{ts: 1, value: remainingDays}];
```

After pressing `Build Report` button we will see table with estimated time in days to next maintenance for each machine.

{% include images-gallery.html imageCollection="predictive-maintenance-forecast-next-maintenance-time" %}

### Step 2: Save remaining time as a machine telemetry
Next step is to save calculated remaining time as a telemetry of the machine. In this case Trendz periodically executes calculation function on fresh data and saves result as a telemetry of the machine back to ThingsBoard.
We need to tell how frequently we want to execute calculation function. In our case it would be once per hour.

* Change label of calculated field to **capsForecast**  - Trendz will save result of calculation function as telemetry with this name.
* Open view settings and enable telemetry save in `Tb calculated telemetry save` section.
    * Enabled - true
    * Save interval - 1
    * Save unit - hours
* In settings open `View mode fields` section and **Machine** entity in `Row click entity` dropdown - this step tells Trendz under what entity calculated telemetry should be saved.
* Set default time range to **Last 7 days**
* Save view with name **Machine maintenance remaining days forecast job**

Once view saved, Trendz would schedule background job that will periodically execute calculation function and save result as telemetry of the machine. On each run Trendz would fetch new data from ThingsBoard and execute calculation function on it.

{% include images-gallery.html imageCollection="predictive-maintenance-save-remaining-time-as-telemetry" %}

### Step 3: Create alarm if remaining time less than 14 days
At this moment we already have `capsForecast` telemetry for each machine in the ThingsBoard which tells as how many days left until next maintenance. It means that we can create Alarm Rule in ThignsBoard to raise an alarm if remaining time less than 14 days.

* In ThingsBoard open machine's device profile and add new Alarm Rule
* Alarm type - **Maintenance required**
* Create alarm rule
  * Severity - `Warning`
  * Condition - `capsForecast` is less than `14`
* Clear alarm rule
  * Condition - `capsForecast` is greater than `14`

Once alarm rule created, ThingsBoard will raise an alarm if remaining time less than 14 days and clear it once remaining time greater than 14 days.

{% include images-gallery.html imageCollection="predictive-maintenance-create-alarm" %}

### Step 4: Send notification once alarm created
Final step is to send notification to the maintenance team once alarm created. We will use ThingsBoard Rule Engine to send email notification to the maintenance team. If Alarm Rule in device profile raised an alarm, we can catch this event and add steps to send an email.

* Open Root rule chain in ThingsBoard
* add `toEmail` rule node after `Device profile` node and connect it with `Alarm Created` relation.
* Open `toEmail` node settings and configure it to send email to the maintenance team.
  * `From template` - info@testmail.org
  * `To template` - maintenance@testmail.com
  * `Subject template` - Maintenance required for ${entityName}
  * `Body template` - Maintenance required for ${entityName}. Remaining time: ${capsForecast} days
* add `send email` rule node after `toEmail` node and connect it with `Successfull` relation.
* Save rule chain.

With this configuration ThingsBoard will send notification to the maintenance team once alarm created.

{% include images-gallery.html imageCollection="predictive-maintenance-notify-maintenance-team" %}

## Summary
Implementing a predictive maintenance strategy using Trendz Analytics can help reduce unplanned downtime of the equipment on manufacturing site and increase the efficiency of cap assembly machines. 
By predicting when each machine will produce 500,000 caps and creating an alarm to notify the maintenance team 14 days before the scheduled maintenance, 
you can ensure that the necessary parts and resources are available to perform maintenance and prevent machine breakdowns.

Overall, predictive maintenance strategies using advanced analytics tools like Trendz Analytics can help organizations reduce costs and improve operational 
efficiency by identifying potential problems before they occur, preventing equipment downtime, and minimizing the need for unscheduled maintenance.