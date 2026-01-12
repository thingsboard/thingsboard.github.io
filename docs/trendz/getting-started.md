---
layout: docwithnav-trendz
title: Getting started with Trendz Analytics
description: ThingsBoard Trendz - Business Intelligence and Analytics Platform for IoT-powered Business

demo-topology:
  0:
    image: /images/trendz/getting-started/demo-topology-1.png
    title: "Relationship between business entities that are used in getting-started guide."
  1:
    image: /images/trendz/getting-started/demo-topology-2.png
    title: "Business entity fields of EM building asset."
  2:
    image: /images/trendz/getting-started/demo-topology-3.png
    title: "Business entity fields of EM apartment asset."
  3:
    image: /images/trendz/getting-started/demo-topology-4.png
    title: "Business entity fields of EM energy meter device."
  4:
    image: /images/trendz/getting-started/demo-topology-5.png
    title: "Business entity fields of EM heat meter device."

discover-topology:
  0:
    image: /images/trendz/getting-started/topology1.png
    title: "Once logged in you should click on <b>Discover Topology</b> button to discover ThingsBoard entities."
  1:
    image: /images/trendz/getting-started/topology2.png
    title: 'When Topology Discovery finished click <b>Finish</b>.'

first-view:
  0:
    image: /images/trendz/getting-started/first-view-1.png
    title: "On the home page, click the <b>Create view</b> button and select <b>Line</b>."
  1:
    image: /images/trendz/getting-started/first-view-2.png
    title: "Drag and drop all necessary fields to each section."
  2:
    image: /images/trendz/getting-started/first-view-3.png
    title: "Set the date picker to <b>Today</b>, and set \"Group by\" to <b>Hour</b>."
  3:
    image: /images/trendz/getting-started/first-view-4.png
    title: "Add `EM building.EM building` into the filters section to view the consumption of a specific building."
  4:
    image: /images/trendz/getting-started/first-view-5.png
    title: "Click <b>Build report</b> — you will see a generated line chart, broken down by buildings."
  5:
    image: /images/trendz/getting-started/first-view-6.png
    title: "Rename the view by clicking the pencil icon next to the name and name it \"Building energy consumption trends for today\"."
  6:
    image: /images/trendz/getting-started/first-view-7.png
    title: "Click the <b>Save Changes</b> button to save the chart."
  7:
    image: /images/trendz/getting-started/first-view-8.png
    title: "In the pop-up section, click the <b>Save</b> button."

add-to-tb:
  0:
    image: /images/trendz/getting-started/add-to-tb-1.png
    title: "Click the <b>Share to ThingsBoard</b> button and choose <b>Add on New Dashboard</b>."
  1:
    image: /images/trendz/getting-started/add-to-tb-2.png
    title: "Set the dashboard name to `Energy consumption`, leave the rest of the settings as default. Click <b>Add</b> button."
  2:
    image: /images/trendz/getting-started/add-to-tb-3.png
    title: "On the ThingsBoard platform, you will see a new dashboard named `Energy consumption` with a generated alias and Trendz line view."

create-calculation:
  0:
    image: /images/trendz/getting-started/create-calculation-1.png
    title: "Go to the <b>Calculated Fields</b> page and Click the <b>Create Calculated Field</b> button"
  1:
    image: /images/trendz/getting-started/create-calculation-2.png
    title: "Set the name to `Consumption Per Square Meter`, the key to `cons_per_sq_meter` and the entity to `EM apartment`."
  2:
    image: /images/trendz/getting-started/create-calculation-3.png
    title: "Copy and paste the following code into the code editor, than click <b>Run Test</b>."
  3:
    image: /images/trendz/getting-started/create-calculation-4.png
    title: "Validate the calculation and click <b>Save Field</b> button to save it."
  4:
    image: /images/trendz/getting-started/create-calculation-5.png
    title: "In the popup window, click <b>Enable</b>."
  5:
    image: /images/trendz/getting-started/create-calculation-6.png
    title: "Enable calculation result saving and click the <b>Save</b> button."
  
calculation-view:
  0:
    image: /images/trendz/getting-started/calculation-view-1.png
    title: "On the home page, click the <b>Create view</b> button and select <b>Table</b>."
  1:
    image: /images/trendz/getting-started/calculation-view-2.png
    title: "Add all necessary fields to each section."
  2:
    image: /images/trendz/getting-started/calculation-view-3.png
    title: "Set up date fields and filters."
  3:
    image: /images/trendz/getting-started/calculation-view-4.png
    title: "Click <b>Build report</b>."
  4:
    image: /images/trendz/getting-started/calculation-view-5.png
    title: "Rename the view to \"Apartments total consumption per square meter for today\"."
  5:
    image: /images/trendz/getting-started/calculation-view-6.png
    title: "Click the <b>Save Changes</b> button to save the chart."
  6:
    image: /images/trendz/getting-started/calculation-view-7.png
    title: "In the pop-up section, click the <b>Save</b> button."

create-prediction:
  0:
    image: /images/trendz/getting-started/create-prediction-1.png
    title: "Go to the <b>Prediction Model</b> page and click the <b>Create model</b> button."
  1:
    image: /images/trendz/getting-started/create-prediction-2.png
    title: "Set the entity to `EM energy meter`, the prediction field to `energyConsumption`, the prediction method to `FOURIER_TRANSFORMATION` and the aggregation to `SUM`."
  2:
    image: /images/trendz/getting-started/create-prediction-3.png
    title: "Click the <b>Train Model</b> button and wait until the accuracy tab is shown."
  3:
    image: /images/trendz/getting-started/create-prediction-4.png
    title: "Click the <b>Jobs</b> button."
  4:
    image: /images/trendz/getting-started/create-prediction-5.png
    title: "In the popup window, enable prediction model refreshing and click the <b>Save</b> button."

prediction-view:
  0:
    image: /images/trendz/getting-started/prediction-view-1.png
    title: "Click the <b>Create view</b> button and select <b>Bar</b>."
  1:
    image: /images/trendz/getting-started/prediction-view-2.png
    title: "In the <b>X Axis</b> section, add `Date (DAY Mon-Sun)` (To select it, click on the date field in the <b>X Axis</b> section, and choose the appropriate aggregation using the dropdown. Click anywhere on the screen to close it.)."
  2:
    image: /images/trendz/getting-started/prediction-view-3.png
    title: "Add all other fields to each section."
  3:
    image: /images/trendz/getting-started/prediction-view-4.png
    title: "Click <b>Build report</b>."
  4:
    image: /images/trendz/getting-started/prediction-view-5.png
    title: "Rename the view to \"Energy consumption forecast for this week\"."
  5:
    image: /images/trendz/getting-started/prediction-view-6.png
    title: "Click the <b>Save Changes</b> button to save the chart."
  6:
    image: /images/trendz/getting-started/prediction-view-7.png
    title: "In the pop-up section, click the <b>Save</b> button."

anomaly:
  0: 
    image: /images/trendz/getting-started/anomaly-1.png
    title: "Go to the <b>Anomaly Models</b> page and click the <b>Create model</b> button."
  1:
    image: /images/trendz/getting-started/anomaly-2.png
    title: "Set the entity to `EM energy meter`, the fields to `energyConsumption` only and the name to `Energy Meter Anomaly Model`."
  2:
    image: /images/trendz/getting-started/anomaly-3.png
    title: "Click <b>Build Model</b>."
  3:
    image: /images/trendz/getting-started/anomaly-4.png
    title: "Go to the <b>Review</b> tab, and validate the detected anomalies."
  4:
    image: /images/trendz/getting-started/anomaly-5.png
    title: "Click the <b>Jobs</b> button."
  5:
    image: /images/trendz/getting-started/anomaly-6.png
    title: "Enable anomaly model refreshing, saving anomaly data, anomaly alarms creation and click the <b>Save</b> button."

ai-assistance:
  0:
    image: /images/trendz/getting-started/ai-assistance-1.png
    title: "Go to the <b>Assistant</b> page and click <b>New Chat</b>."
  1:
    image: /images/trendz/getting-started/ai-assistance-2.png
    title: "When prompted to select topology entities, click <b>Save</b>."
  2:
    image: /images/trendz/getting-started/ai-assistance-3.png
    title: "In the chat input, type: \"I want to see how total energy consumption was changing during the last 14 days for each building\"."
  3:
    image: /images/trendz/getting-started/ai-assistance-4.png
    title: "Review the generated view, validate the results and type a follow-up instruction: \"Show data only about Alpire building\"."
  4:
    image: /images/trendz/getting-started/ai-assistance-5.png
    title: "Observe that a building filter has been added automatically."

---

* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic usage of Trendz Analytics. You will learn how to:

* Log in to Trendz for the first time
* Discover topology from ThingsBoard
* Create basic visualizations
* Add a Trendz view to a ThingsBoard dashboard
* Calculate new telemetry based on existing telemetry
* Predict telemetry using historical data
* Detect anomalies in telemetry data
* Interact with Trendz AI Assistant

<div id="video">  
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/8a4cPI-XOkI" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Prerequisites

You will need to have a Trendz Analytics up and running.
The easiest way is to use [Trendz Analytics add-on in ThingsBoard Cloud](/docs/trendz/install/cloud/) SaaS.

Alternatively, you can install Trendz Analytics using the [Installation Guide](/docs/trendz/install/installation-options/).

For this guide, we will use Building and Apartment assets, along with Heat Meter and Energy Meter devices.  
To follow along, you can use your own devices and apply the same concepts. If you don't have any devices, you can try any [available solution template](/docs/pe/solution-templates/overview/).  
The full set of fields and relationships used in this guide is shown below:

{% include images-gallery.html imageCollection="demo-topology" %}

## Step 1. Discover topology

Once the Trendz Service is up and running, you can sign in to the Trendz UI using the following URL:

* ThingsBoard Cloud (North America): [https://thingsboard.cloud/trendz/](https://thingsboard.cloud/trendz/)
* ThingsBoard Cloud (Europe): [https://eu.thingsboard.cloud/trendz/](https://eu.thingsboard.cloud/trendz/)
* Self-hosted Trendz: [http://localhost:8888/trendz/](http://localhost:8888/trendz/)

You can log in using Tenant Administrator credentials from ThingsBoard. Any Tenant Administrator or Customer User can 
sign in to the Trendz UI using the same login/password they use in ThingsBoard.

{% include images-gallery.html imageCollection="discover-topology" %}

## Step 2. Create line chart view

Let's create a line chart with all buildings and visualize the amount of consumed electricity for each building for today.
* On the home page, click the **Create view** button and select **Line**

You can select fields from the entities listed on the left side of the screen and drag and drop them into the appropriate section.
The date field can be dragged and dropped from the upper-left part of the screen. Add all necessary fields to each section:
* Add `Date (RAW)` to the **X axis** section (date field)
* Add `EM energy meter.energyConsumption` to the **Y axis** section (energy consumption telemetry)
* Add `EM building.EM building` to the **Series** section (name of the building)

Set up date options:
* Set the date picker to *Today*, and set *Group by* to **Hour**

Set up the filters:
* Add `EM building.EM building` into the filters section to view the consumption of a specific building

Build and save the view:
* Click **Build report** — you will see a generated line chart, broken down by buildings
* Rename the view by clicking the pencil icon next to the name and name it *Building energy consumption trends for today*
* Click the **Save Changes** button to save the chart
* In the pop-up section, click the **Save** button

You can find out more about different types of views you can build with Trendz [here](/docs/trendz/visualizations-overview)

{% include images-gallery.html imageCollection="first-view" %}

## Step 3. Add line chart to ThingsBoard Dashboard

Now we can add this line chart to a ThingsBoard dashboard.

* Click the **Share to ThingsBoard** button and choose **Add on New Dashboard**
* Set the dashboard name to `Energy consumption`; leave the rest of the settings as default. Click the **Add** button.
* On the ThingsBoard platform, you will see a new dashboard named `Energy consumption` with a generated alias and Trendz line view
  (you can check charts for each building by clicking on each building in the table).  

A new dashboard in ThingsBoard is created, and your chart is there with the ability to filter by building.

You can find more about sharing views [here](/docs/trendz/embed-visuals)

{% include images-gallery.html imageCollection="add-to-tb" %}

## Step 4. Calculate New Metrics

Now we will create a table with all buildings and apartments and calculate the amount of electricity and heat 
consumption per square meter for each apartment.

### Create a Calculated Field

Firstly, we will create a calculated field, it could be used across multiple views.

* Go to the **Calculated Fields** page by clicking the calculator icon on the left panel
* Click the **Create Calculated Field** button
* Set the name to `Consumption Per Square Meter`
* Set the key to `cons_per_sq_meter`
* Set the entity to `EM apartment`
* Copy and paste the following code into the code editor:

  ```javascript
  var energy = sum(EM energy meter.energyConsumption);
  var heat = sum(EM heat meter.heatConsumption);
  var area = sum(EM apartment.area);
  return (energy + heat) / area;
  ```
  {: .copy-code}

* Click **Run Test** to validate the calculation
* Click **Save Field** to save it
* In the popup window, click **Enable**
* Enable *calculation result saving* and click the **Save** button
  (you can leave the other properties as default)

Your calculated field is now ready to use. Learn more about calculated fields [here](/docs/trendz/calculations/overview).

{% include images-gallery.html imageCollection="create-calculation" %}

### Use the Calculated Field in a View

Now we will use the created calculated field in the new view:
* On the home page, click the **Create view** button and select **Table**

Add all necessary fields to each section:
* In the **Columns** section, add:
  * `EM apartment.EM apartment`
  * `EM building.EM building`
  * `EM apartment.state`
* In the **Dynamic Value** section, add:
  * `EM apartment.Consumption Per Square Meter` (This field will appear after enabling the calculation field)
* In the **Dynamic Column** section, add:
  * `Date (RAW)`

Set up date fields and filters:
* Set the date picker to *Today*
* Add `EM building.EM building` into the filters section to view the consumption of a specific building

Build and save view:
* Click **Build report**
* Rename the view to *Apartments total consumption per square meter for today*
* Click the **Save Changes** button to save the chart
* In the pop-up section, click the **Save** button

{% include images-gallery.html imageCollection="calculation-view" %}

## Step 5. Predict energy usage

The next step is to create a forecast of energy usage for the current week for each building using historical data.

### Create a Prediction Model

Firstly, we will create a prediction model. It could be used across multiple views like calculated fields.

* Go to the **Prediction Model** page by clicking the prediction icon on the left panel
* Click the **Create model** button
* Set the entity to `EM energy meter`
* Set the prediction field to `energyConsumption`
* Set the prediction method to `FOURIER_TRANSFORMATION`
* Set the aggregation to `SUM`
* Click the **Train Model** button and wait until the accuracy tab is shown
* Click the **Jobs** button; in the popup window, enable prediction model refreshing and click the **Save** button (you can leave the other properties as default)

Your prediction model is now ready to use. Learn more about prediction models [here](/docs/trendz/prediction).

{% include images-gallery.html imageCollection="create-prediction" %}

### Create a View with Forecast

Now we will use the created prediction model in the new view:
* Click the **Create view** button and select **Bar**

Add all necessary fields to each section:
* In the **X Axis** section, add:
  * `Date (DAY Mon-Sun)`  
    (To select it, click on the date field in the **X Axis** section, and choose the appropriate aggregation using the dropdown. Click anywhere on the screen to close it.)
* In the **Y Axis** section, add:
  * `EM energy meter.energyConsumption`
  * `EM energy meter.Energy Consumption Forecast` (This field will appear after enabling the prediction model)
* In the **Series** section, add:
  * `EM building.EM building`


Build and save view:
* Click **Build report**
* Rename the view to *Energy consumption forecast for this week*
* Click the **Save Changes** button to save the chart
* In the pop-up section, click the **Save** button

You can try the same with a line chart and compare the results.

Historical data for each building is visualized with solid bars, and the forecast is shown with dashed bars.

{% include images-gallery.html imageCollection="prediction-view" %}

## Step 6. Find anomalies in energy consumption

Trendz supports out-of-the-box anomaly detection tools. Let's explore them by finding anomalies in the energy consumption telemetry.

* Go to the **Anomaly Models** page by clicking the **Anomalies** icon on the left panel
* Click the **Create model** button
* Set the entity to `EM energy meter`
* Set the fields to `energyConsumption` only
* Set the name to `Energy Meter Anomaly Model`
* Click **Build Model**, go to the **Review** tab, and validate the detected anomalies

Now we can set up an anomaly refresh job to automatically find anomalies and create alarms in ThingsBoard for them. To do this, you need to:
* Click the **Jobs** button; in the popup window:
  * Enable anomaly model refreshing
  * Enable saving anomaly data (to ThingsBoard)
  * Enable anomaly alarms creation (in ThingsBoard)
  * Click the **Save** button
  
Now, as soon as an anomaly occurs, the anomaly model will detect it and an alert will be created immediately.
You can find out more about anomaly models [here](/docs/trendz/anomaly/overview).

{% include images-gallery.html imageCollection="anomaly" %}

## Step 7. Try AI Assistance

Let's explore AI Assistance — an AI-powered feature that can build views based on your natural language requests.

* Go to the **Assistant** page and click **New Chat**
* When prompted to select topology entities, click **Save**
* In the chat input, type:
  "I want to see how total energy consumption was changing during the last 14 days for each building"
* Review the generated view and validate the results
* Then, type a follow-up instruction:
  "Show data only about Alpire building"
* Observe that a building filter has been added automatically

You can read more about AI Assistance [here](/docs/trendz/ai-assistance-overview)

{% include images-gallery.html imageCollection="ai-assistance" %}

## Next Steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/trndz-guides-banner.md %}
