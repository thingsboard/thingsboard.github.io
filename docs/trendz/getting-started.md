---
layout: docwithnav-trendz
title: Getting started with Trendz Analytics
description: ThingsBoard Trends - Business Intelligence and Analytics Platform for Iot powered Business

discover-topology:
  0:
    image: /images/trendz/getting-started/topology1.png
    title: "Once logged in you should click on <b>Discover Topology</b> button to discover ThingsBoard entities."
  1:
    image: /images/trendz/getting-started/topology2.png
    title: 'When Topology Discovery finished click <b>Finish</b>'

table-view:
  0:
    image: /images/trendz/getting-started/table_1.png
    title: 'Create Table view'
  1:
    image: /images/trendz/getting-started/table_2.png
    title: 'Add required fields'
  2:
    image: /images/trendz/getting-started/table_3.png
    title: 'Define calculations'
  3:
    image: /images/trendz/getting-started/table_4.png
    title: 'Add filters'

add-on-dashboard:
  0:
    image: /images/trendz/getting-started/dashboard_1.png
    title: 'Click Share button'
  1:
    image: /images/trendz/getting-started/dashboard_2.png
    title: 'Configure dashboard details'
  2:
    image: /images/trendz/getting-started/dashboard_3.png
    title: 'Dashboard added into ThingsBoard'

predict-energy-line-chart:
  0:
    image: /images/trendz/getting-started/prediction_1.png
    title: 'Create Line chart'
  1:
    image: /images/trendz/getting-started/prediction_2.png
    title: 'Add required fields'
  2:
    image: /images/trendz/getting-started/prediction_3.png
    title: 'Enable time series prediction'
  3:
    image: /images/trendz/getting-started/prediction_4.png
    title: 'Join Y-axis into one'
  4:
    image: /images/trendz/getting-started/prediction_5.png
    title: 'Final line chart with predictions'

anomaly-detection-model:
  0:
    image: /images/trendz/getting-started/anomaly_1.png
    title: 'Create anomaly detection model'
  1:
    image: /images/trendz/getting-started/anomaly_2.png
    title: 'Configure model parameters'
  2:
    image: /images/trendz/getting-started/anomaly_3.png
    title: 'Review discovered anomalies'
  3:
    image: /images/trendz/getting-started/anomaly_4.png
    title: 'Schedule anomalies autodiscovery job'

save-anomaly-score:
  0:
    image: /images/trendz/getting-started/anomaly_telemetry_1.png
    title: 'Create Table view with anomaly score data for each energy meter'
  1:
    image: /images/trendz/getting-started/anomaly_telemetry_2.png
    title: 'Enable telemetry save job'
  2:
    image: /images/trendz/getting-started/anomaly_telemetry_3.png
    title: 'Set row click entity to energy meter'

create-anomaly-alarm:
  0:
    image: /images/trendz/getting-started/alarm_1.png
    title: 'Open device profile'
  1:
    image: /images/trendz/getting-started/alarm_2.png
    title: 'Create Alarm Rule'
  2:
    image: /images/trendz/getting-started/alarm_3.png
    title: 'Define clear and create conditions'
---

* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic usage of Trendz Analytics. You will learn how to:

* Login to the Trendz for the first time
* Discover Topology from ThingsBoard
* Create basic visualizations
* Aggregate data on different levels using relations
* Filter data using attributes and telemetry fields
* Add Trendz View to ThingsBoard dashboard

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/8a4cPI-XOkI" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Prerequisites

You will need to have Trendz Analytics server up and running.
The easiest way is to use [Trendz Cloud](/docs/trendz/install/cloud/) SaaS.

The alternative option is to install Trendz Analytics using [Installation Guide](/docs/trendz/install/installation-options/).

## Step 1. Discover topology
Once Trendz Service is up and running you can sign-in to Trendz UI using following URL:

* Trendz Cloud: [https://thingsboard.cloud/trendz](https://thingsboard.cloud/trendz).
* Self-hosted Trendz: http://localhost:8888

You can login using Tenant Administrator credentials form ThingsBoard. Trendz uses ThingsBoard as an authentication service. 
Any Tenant Administrator or Customer User can sign in into Trendz UI using their login\password that they use for authentication in the ThingsBoard.

{% include images-gallery.html imageCollection="discover-topology" showListImageTitles="true" %}

## Step 2. Create table view
Let's create a table with all buildings and apartments and calculate the amount of electricity and heat consumption per square meter in each apartment.

* On the home page click the button **Create view** and select **Table**
* Add the following fields to the column section: `building`, `apartment`, `area`
* Add `Date (Month)` into Dynamic Column section, set Unit `kW/m2`
* Set default time range to This year
* Add `Calculated` field into **Dynamic Value** section, name it `AVG Heat+Energy Consumption per m2`. Here is a code to calculate:

```javascript
var energy = sum(energyMeter.energyConsumption);
var heat = sum(energyMeter.heatConsumption);
var size = uniq(apartment.area);
return (energy + heat) / size;
```

* Add `building` into filters section to view the consumption of a specific building
* Click `Build report`
* Rename view by clicking the pencil icon next to the name and rename it as 'Energy/Heat consumption'
* Click the **Save** button to save the table in the desired folder
* Choose the folder `Energy consumption page` to save new table

{% include images-gallery.html imageCollection="table-view" %}

## Step 3. Add Table to ThingsBoard Dashboard
Now we can add this table on ThingsBoard dashboard.

* Click on `Share to ThingsBoard` button and choose `Add on New Dashboard`
* Set Dashboard name to `Energy/Heat consumption`
* Select dashboard State `default` 
* Select Filter `Building` and click on **Add** button 

A new dashboard in Thingsboard is created and our table is there with possibility to filter by building

{% include images-gallery.html imageCollection="add-on-dashboard" %}

## Step 4. Predict energy usage
Next step would be to create a forecast of energy and heat usage for the next 6 months for each building using historical data.

* Click the button `Create view` and select **Line chart**
* Add Date field into **X-axis** section - it allows to split data by month, week, day or hour
* Add `energyConsumption` and `heatConsumption` fields into **Y-axis** section
* Add `appartment` into **Filters** section
* Set default time range to **This year**, group by: **day**

To set up the forecast, perform the following actions for the `energyConsumption` and `heatConsumption` fields.
* Click on `energyConsumption` field in the **Y-axis** section
* Enable checkbox `Prediction`
  * Prediction method - **Fourier transformation**
  * Prediction range - **3**
  * Prediction unit - **month**
* Click button `Build report`
* Open view **settings** -> **General** section and enable `Use single Y-axis` checkbox
* Click the pencil icon next to the name and rename it as 'Forecast'
* Click the **Save** button to save the table in the desired folder
* Choose the folder `Forecast page` to save new Forecast

Historical data for each area is visualized with a solid line and forecast is shown with a dashed line.

{% include images-gallery.html imageCollection="predict-energy-line-chart" %}

## Step 5. Find anomalies in energy consumption
Let's discuss how to build an anomaly detection model for energy consumption, track abnormal consumption behavior, and set up notifications for anomalies.

* Go to the Anomalies section, and click button **Create model**
* Set model name to `Energy consumption Anomaly`
* Define anomaly detection model properties: 
  * Cluster algorithm: K-Means, 
  * Segment time range: 1 day, 
  * Comparison type: Behavior based - we want to detect anomalies based on behavior of energy consumption.
* Datasource properties:
  * Time Range: `This Year` - we will use This Year of telemetry data to train model for detecting normal and abnormal behavior.
  * Field `energyConsumption` - here we defined what telemetry keys should be used in the model.
  * Filters `energyMeter` - to train model for specific energy meter or group of energy meters to detect specific anomalies that happen only on these energy meters.
* Press `Build model` button

You can review historical anomalies identified by the model in Trendz. Each anomaly is associated with a score and score index, indicating its level of abnormality. Higher values indicate a higher degree of anomaly.

With the model prepared, the next step is to schedule a job in Trendz. This job will continuously analyze real-time telemetry data, detecting anomalies as they occur.

* Click on the `Auto discovery` button
* Set `Enable Auto discovery` checkbox 
* Set Interval to **1 hour**
* Press **Apply** button

After saving the configuration in Trendz, it will periodically retrieve new data from energy meters. This data will be analyzed to identify anomalies. 
Whenever an anomaly is detected, Trendz will compute an anomaly score and store it in the database.

{% include images-gallery.html imageCollection="anomaly-detection-model" %}

## Step 6. Create Alarms when anomaly discovered
We have an anomaly detection model that can identify anomalies, and we create a job to discover them in new incoming data from sensors. The last step is to inform the maintenance team about the anomalies we found. 
To do this, we need to create an Alarm in ThingsBoard once an anomaly is detected.

* Create Table view in Trendz
* Add the following fields to the column section: `energyMeter`, `Date FULL_HOUR`, 
* Add `Anomaly` field and select `Energy consumption Anomaly` model 
  * Select `Anomaly field` type - **Score Index** 
  * Set Aggregation to **MAX** 
  * Label - `energyConsumptionAnomalyScore`
* Open **view settings** and enable `Tb calculated telemetry save` checkbox. Set interval to **1 hour**
* In settings open **View mode fields** section and select `energyMeter` entity in **Row click entity** dropdown - this step tells Trendz under what entity score index telemetry should be saved.
* Set default time range to Last 7 days
* Save view with name `energyConsumption anomaly score`

After saving the view in Trendz, a background job will be scheduled. This job will regularly check the energy consumption anomaly score and save the results as telemetry for the energy meter device. 

{% include images-gallery.html imageCollection="save-anomaly-score" %}А

Currently, we have the telemetry called `energyConsumptionAnomalyScore` for each energy meter in ThingsBoard. 
This telemetry indicates the abnormality of the meter's current behavior. With this information, we can set up an **Alarm Rule** in ThingsBoard to trigger an alarm if the score index exceeds 200.


* In ThingsBoard open energy meter’s device profile and add new Alarm Rule
* Alarm type - `Abnormal behavior`
* Create alarm rule: Severity - Warning, Condition - **energyConsumptionAnomalyScore** is greater than 200
* Clear alarm rule
* Condition - **energyConsumptionAnomalyScore** is lower or equals 200

{% include images-gallery.html imageCollection="create-anomaly-alarm" %}

## Next Steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/trndz-guides-banner.md %}