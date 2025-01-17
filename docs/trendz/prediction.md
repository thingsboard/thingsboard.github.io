---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Build prediction model for time series data
description: How to build accurate prediction of time series data. Explore available ML models for forecasting and visualizing predicted data.

trendz-models-page:
  0:
    image: https://img.thingsboard.io/trendz/create-model.png
    title: 'To access the prediction models tool, click on the icon labeled “Prediction Models” located on the left side of the workspace.'

trendz-accuracy-page:
 0:
  image: https://img.thingsboard.io/trendz/accuracy-summary.png
  title: 'Accuracy Summary section provides an overall evaluation of the prediction model`s performance, expressed as a percentage, and explains how closely the predicted telemetry values align with the actual values.'

trendz-accuracy-real-data:
 0:
  image: https://img.thingsboard.io/trendz/accuracy-real-data.png
  title: This chart displays the prediction data for a specific segment (selected via a drop-down list) alongside the corresponding original historical telemetry.

trendz-accuracy-confidence-band:
 0:
  image: https://img.thingsboard.io/trendz/accuracy-confidence-band.png
  title: This chart illustrates the prediction’s accuracy, defined as the percentage difference (error function) between the expected and actual values for a given telemetry.

trendz-confidence-level:
 0:
  image: https://img.thingsboard.io/trendz/accuracy-confidence-level.png
  title: This chart shows the prediction’s accuracy as a binary feature.

trendz-forecasting-energy-example:
 0:
  image: https://img.thingsboard.io/trendz/prediction-config-example.png
 1:
  image: https://img.thingsboard.io/trendz/prediction-accuracy-example.png
  
trendz-prediction-job-example:
 0: 
  image: https://img.thingsboard.io/trendz/prediction-jobs-example.png


trendz-prediction-line-chart-example:
 0: 
  image: https://img.thingsboard.io/trendz/prediction-line-chart-example.png
---

* TOC
{:toc}

Trendz provides powerful built-in tools for time-series prediction, allowing users to create predictive models with minimal effort and data science background. All the complex processes—such as data filtering, normalization, and model training—are handled automatically in the background, simplifying the user experience.

With Trendz, you can enable predictions for any data fields, including calculated fields. Time-series prediction opens up a wide range of possibilities for extracting valuable insights from your data. Below are some key questions that Trendz time-series prediction can help you answer:

* **Energy Forecasting:** Estimate energy consumption for the upcoming quarter or year.
* **Maintenance Scheduling:** Predict optimal times for scheduling maintenance.
* **Failure Prediction:** Anticipate the next potential system failure.
* **Manufacturing Insights:** Forecast key manufacturing performance indicators (KPIs) and understand their relationship with the current system state.
* **Resource Management:** Calculate the remaining time until resources, such as a fuel tank, are depleted.

Time-series prediction empowers businesses to make data-driven decisions, optimize operations, and proactively address challenges based on future trends identified in their data.

To access the prediction models tool, click on the icon![image](https://img.thingsboard.io/trendz/models-icon.png)labeled “Prediction Models” located on the left side of the workspace.

Within this section, a table lists all created prediction models, along with key details. You can open, modify, or perform other actions on any of these fields. To create a new telemetry forecast, click the “Create model” button.

{% include images-gallery.html imageCollection="trendz-models-page" %}

## Input tab

The Input tab in Trendz prediction models is designed to configure all necessary settings for generating accurate forecasts. Below is a detailed explanation of each section and its settings:

### General Settings

This section allows you to define the scope and parameters for the prediction model:

**Entity:** Select the entity for which the prediction will be performed. This determines the context of the forecast.

**Predicted Field:** Choose the specific field within the entity that you want to predict. For example, this could be energy consumption, temperature, or another measurable parameter. 

**Item:** Select the specific item (e.g., a particular device or asset) within the entity to focus your analysis.

**Key:** The identifier under which the prediction telemetry data is saved in ThingsBoard with prefix _EPD_. For example if we set key as *energy_forecast* the telemetry will be saved in ThingsBoard under *_EPD_energy_forecast* key.

**Timerange for Model Training:** Define the historical data period that the model will use for training. For example, you can set a timerange of the past 3 months or 1 year, depending on the availability and relevance of data. 

**Prediction Range:** Specify how far into the future the model should make predictions (e.g., 1, 10).

**Prediction Unit:** Select the unit of measurement for the prediction time range. For example: Hours, Days, Weeks, Month.

### Prediction Method Settings

This section helps you define how the prediction is calculated:

* *Prediction Method:* Select the prediction method to use. Each method includes a short description to help you choose the most suitable approach for your use case. Trendz implements different multivariable and univariable ML models for timeseries prediction:
* *Fourier Transformation* - dissects a time series into its frequency components. Its power lies in discerning cyclic trends and seasonal patterns entrenched within the data, contributing to the efficacy of forecasting exercises.
* *Prophet* - a forecasting paradigm devised by Facebook, meticulously crafted to handle time series datasets accentuated by pronounced seasonal patterns and holiday impacts. This technique utilizes an additive framework to encapsulate trends, seasonality, and holiday-induced influences.
* *Multivariable Prophet* - evolves from the Prophet forecast model, enabling the simultaneous prediction of interconnected time series. This becomes particularly advantageous when dealing with numerous interconnected variables that warrant predictive insights.
* *Arima* - combines autoregressive and moving average aspects to anticipate upcoming values founded on historical observations. This approach adeptly accommodates trends and seasonal variations ingrained within the dataset.
* *Linear Regression* - a fundamental statistical method, comes into play to anticipate a dependent variable’s trajectory grounded in one or more independent variables. This technique establishes a linear connection between variables, forming the foundation for making forecasts.
* *Custom Model* - you can write our own multivariable time series prediction model using any Python libraries. In this case you provide a model source and Trendz is responsible for inserting input dataset from ThingsBoard and process forecasted output.

**Segment Strategy:**  Trendz prediction models perform specific data preprocessing to align input telemetry data into the required format. This process includes filling gaps, aggregating data by a specified time unit, and applying aggregation functions.

A key preprocessing step involves dividing the data into *segments* - sets of data with equal time ranges that cover the entire time span of the source data. All input telemetry data is divided into a chronologically ordered set of segments, which are used iteratively for model fitting, prediction building, and calculating metrics such as accuracy.

Several strategies in Trendz define how data is segmented:
1. **AUTO**

   This strategy performs an automatic analysis of the data to determine the optimal way to divide it. The segmentation steps are calculated dynamically. Use this strategy if you are unsure which one suits your task best.

2. **FIXED**

   This strategy divides the input telemetry data sequentially, covering the training range from start to end. Each segment begins where the previous one ends, with no gaps or overlaps.

   *Example:* if we have a 120-day range of the telemetry and 10-day segments we will receive 12 segments.
3. **SLIDING_WINDOW_UNIT**

   This strategy divides telemetry data sequentially but allows overlapping segments. The overlap is determined by a user-defined step size, specified in time units and quantities.
   
   *Example:* if we can have a 120-day range of the telemetry, 10-day segments, and a 5-day step will make segments divided into 60 segments and each segment will be overlapped by two neighboring ones (except the first and the last ones).
4. **SLIDING_WINDOW_PERCENT**

   Similar to SLIDING_WINDOW_UNIT, but the step size is defined as a percentage of the segment size.
   
   *Example:* if we have a 30-day range of the telemetry, the 20% step of the 10-day segment will make a 2-day step will make segments divided into 15 segments and each segment will be overlapped by several neighboring ones (from 5 to 10 segments).
5. **STICK_TO_END**

   This strategy divides data into segments sequentially, like FIXED, but it focuses on a specific number of segments from the end of the training range. Only the data required to form the specified number of segments at the end of the training range will be used for model training.
   Any excess data from the training range beyond what is needed for the segments will be excluded from the model training process.

   *Example:* if we can have a 120-day range of the telemetry, 10-day segments, and select 5 segments we will have segments from the 70’s day to 120’s day without gaps and overlapping.

**Include Last Unfinished Segment**: For each segment strategy, you have the option to enable the inclusion of the last unfinished segment. When Trendz divides the input telemetry into a set of segments, some data is not enough to fit the segment because the segment's time range is bigger than the remaining data time range. 
This binary property tells Trendz whether to use the remaining telemetry to create partially filled segments.

*For example*, we have the telemetry with a range of **20 days**, a prediction range of **10 days**, and the "Sliding Windows Unit" strategy with a **1-day step**. It means Trendz will create the first 11 segments as usual: (1-10), (2-11), (3-12), ..., (11-20). But if we continue this process each next segment will not have 10 days, 
it would decrease by 1 day for each step: (12-20), (13-20),..., (19-20). These segments can be not appropriate for your case because of overfitting on the same data without newer ones. Setting the boolean property manages the behavior of Trendz in this case - you can allow or forbid usage of this kind of segment.

### Aggregation Settings

These settings are used to preprocess data before applying the prediction model:

**Aggregation:** Select the data aggregation method, which determines how the input data is summarized. Common aggregation methods include:  AVG, SUM, LATEST, MIN, MAX, COUNT, UNIQ, etc.

**Grouping interval:** Define the time interval for grouping data during aggregation. For example: hour, day, week, month.

This ensures that the data fed into the model is organized and meaningful for prediction.

### Advanced Settings

In the Advanced Settings of the prediction model configuration, you can define limits for predicted telemetry values. To enable this feature and instruct the model to restrict predictions within specific bounds, follow these steps:
1. Enable **Set limits** in the advanced settings.
2. Enter the minimum and maximum values for the telemetry to define the prediction boundaries.

*Example:* Suppose you are creating a prediction model to estimate water temperature telemetry values. To ensure the predicted values remain within realistic bounds, such as **0°C to 100°C**, you can configure limits in the Advanced Settings. Enable the **Set Limits** option, then set the **MIN field to 0** and the **MAX field to 100**. 
This configuration ensures that all predicted telemetry values will be restricted to the range of 0°C to 100°C.

![image](https://img.thingsboard.io/trendz/models-advanced-settings.png)

## Accuracy Tab

With Trendz Analytics, you can not only generate predictions for a specific period but also validate the accuracy of those predictions. The Accuracy Metrics tab provides valuable insights into the performance of your prediction models using the following metrics:
1. Real Data
2. Confidence Band
3. Confidence Level

### Accuracy Summary and Configuration

Before calculating accuracy, it is essential to configure the necessary parameters to ensure the results are meaningful.
To calculate the accuracy of your prediction model, you must specify the following:
1. Select the device(s) for which the system will evaluate prediction accuracy.
2. Choose how the system should determine accuracy thresholds: **AUTO** - system automatically analyzes your prediction data and fills the required fields for optimal accuracy calculation. **MANUAL** -  you manually provide the necessary data for the accuracy calculation (below is a detailed explanation of each metric and its parameters.).

![image](https://img.thingsboard.io/trendz/accuracy-config.png)

By carefully configuring these settings, you can tailor Trendz prediction models to generate precise and actionable forecasts based on your specific requirements. 
Once you’ve filled in the required inputs, click on the **Get Accuracy** button. The system will calculate the accuracy for your prediction model based on the selected parameters. 
 
**Accuracy Summary** section provides an overall evaluation of the prediction model's performance, expressed as a percentage, and explains how closely the predicted telemetry values align with the actual values.

{% include images-gallery.html imageCollection="trendz-accuracy-page" %}

### Real Data

This chart displays the prediction data for a specific segment (selected via a drop-down list) alongside the corresponding original historical telemetry.

Parameters:
* **Device Name:** Specify the name of the device of interest.
* **Segment Number:** Choose the segment number to display its data.

{% include images-gallery.html imageCollection="trendz-accuracy-real-data" %}

### Confidence Level

This chart shows the prediction’s accuracy as a binary feature. The result is marked as “true” if the distance between expected and actual values (in terms of both value and time) is within the thresholds defined in the configuration.
Otherwise, the result is “false.” Accuracy is calculated per time unit for each segment and aggregated across the entire segment. The chart displays the average of these binary results.

{% include images-gallery.html imageCollection="trendz-confidence-level" %}

**Parameters**
* **Acceptable Value Error:** The maximum allowable difference in values.
* **Acceptable Time Error:** The maximum allowable time difference.

![image](https://img.thingsboard.io/trendz/accuracy-confidence-level-param.png)

*Let's consider the example* – you have a device, a Fuel Gauge, that measures telemetry such as the Remaining Fuel Level in liters (L). You want to predict the remaining fuel level in a tank for the next 14 days. From business prospective it is totally fine if the actual value is within ±20 L from the predicted value.
Also, it is fine if forecasted value is delayed in time for 2 hours. You can specify the Acceptable Value Error as 20 (L) and the Acceptable Time Error as 2 (hours) according to the mentioned features of your case.
For example, if we have predicted value of 80 L and an actual reading of 84 L on the same day, the value distance is 4 L, which is less than the specified 20 L, prediction marked as correct.
If you have today's predicted value of 80 L and today's actual value of 105 L, but after 1 hour actual value is 80 L, prediction also would be marked as valid.


### Confidence Band

This chart illustrates the prediction’s accuracy by comparing the expected and actual telemetry values. The accuracy is calculated as the percentage difference (error function) between these values, measured per time unit within each segment.
The min, max, and accuracy (average) values displayed on the chart are aggregated across all segments in the training range. These aggregated values represent the accuracy for the selected percentile of "correct" values, filtering out less useful data.

{% include images-gallery.html imageCollection="trendz-accuracy-confidence-band" %}

**Parameters**:
* **MIN:** The minimum acceptable value.
* **MAX:** The maximum acceptable value.
* **PERCENTILE:** The percentile of best values to consider.

![image](https://img.thingsboard.io/trendz/accuracy-confidence-band-param.png)

*Let’s consider the example* - imagine you have a device called an **Energy Meter** that measures how much energy is used, in units called kilowatt-hours (kWh). Now, we know some basic facts about energy consumption: First, energy consumption can never be less than 0 kWh. It’s impossible to have negative energy usage. So, the **minimum value (MIN) is set to 0**. 
Second, your system has a maximum limit of 50 kWh. If the consumption goes above this, the system will break. This means the **maximum value (MAX) is set to 50**.
With these two limits, the range of possible energy consumption is from 0 to 50 kWh.
This range helps us calculate accuracy when there’s a difference between the energy we expect the system to use and the energy it actually measures. Here's how it works:
The full range of 50 kWh (from 0 to 50) represents 100% of the possible error. Any difference between the expected and actual value is compared to this full range.
For example, let’s say the expected energy usage is **25 kWh**, but the actual measured value is **30 kWh**. The difference between these two is 5 kWh.
To figure out how much of the full range this difference represents, you divide the difference (5 kWh) by the full range (50 kWh): Error percentage = **5kWh / 50kWh = 10%**.
The accuracy is then the remaining percentage: Accuracy = 100% − 10% = 90%.
So in this example, the device measured energy with **90% accuracy** because the difference between the expected and actual values was small (only 10% of the total range). This approach helps you clearly understand and measure how accurate the system is.

## Tasks Tab

The Tasks tab provides an overview of all tasks initiated for a specific model, including their status (completed, in progress, or pending). For more detailed task management information, refer to the [corresponding section in the documentation](/docs/trendz/tasks-service).

## Example: Forecasting Energy Consumption for a Building

In this example, we’ll create a forecast to predict how much energy a building will consume over the next 3 month. The dataset includes Buildings, Apartments, and energy meters installed in each Apartment. The process involves aggregating telemetry from sensors at the building level and then generating a forecast using Trendz prediction models.

### Model Training

* **Input Tab Configuration**
  * **Entity:** Select *Energy meter* as the entity for prediction.
  * **Predicted Field:** Choose *energyConsumption* as the field to forecast.
  * **Item:** Select the specific building for which the forecast will be made (e.g., *Energy Meter H101*).
  * **Key (_EPD_):** Assign a unique key, such as the *Energy_Meter_H101*, to ensure data integrity.
  * **Timerange for Model Training:** Set the historical data range, for example, *Last Years*, to train the model with sufficient past data.
  * **Prediction Range:** Set the prediction range to *3*.
  * **Prediction Unit:** Select *month* as the unit of prediction.
* **Prediction Method Settings**
  * **Prediction Method:** Select *FOURIER_TRANSFORMATION* as the prediction method.
  * **Segment Strategy:** Select *AUTO* as the segment strategy.
* **Aggregation Settings**
  * **Aggregation**: Choose *AVG* to aggregate the energy consumption data.
  * **Grouping Interval:** Set the grouping interval to *DAY* to ensure data is aggregated daily.

After configuring all the settings:
* Name model *energyConsumption prediction*. 
* Click the **Train Model** button located in the upper-right corner of the screen. This action will automatically save your model configuration and start the training process. 
* Once the training is complete, navigate to the **Accuracy** tab. Here, you can evaluate the model’s performance and accuracy metrics to determine whether it meets your requirements for further use.

{% include images-gallery.html imageCollection="trendz-forecasting-energy-example" %}

### Saving telemetry to ThingsBoard

* If the accuracy is satisfactory, and you want to use this prediction as new telemetry, you need to record it as telemetry  in ThingsBoard. To do this:
  * Activate the **JOBS** button in the upper-right corner of the screen.
  * Configure the following settings:
    * Enable the *Enable prediction model refreshing option*.
    * Set the interval to: *EVERY* **1** *TIME UNIT* **DAY**.
    * Choose items (e.g., *Energy Meter H101*).
    * Enable the *Enable Model Retraining* option to ensure the model retrains automatically.
  * Save the configuration

{% include images-gallery.html imageCollection="trendz-prediction-job-example" %}

### Visualizing the Forecast telemetry: Creating a Line Chart

* Proceed to the View Fields section. Here, you can visually analyze the forecast for the selected time range and explore how the predicted values align with historical data.
* Add *Date (RAW)* as the *X-axis* to represent the timeline.
* Add *energyConsumption telemetry* as the *Y-axis* to visualize energy usage.
* Add *energyConsumption prediction telemetry* as the Y-axis to visualize forecast usage.
* Add energy meter field to Filter section and select *Energy Meter H101*.
* Choose time range *07/01/2024 - 07/04/2025* in date picker.
* Click *Build report* button and check how our forecast looks like.

{% include images-gallery.html imageCollection="trendz-prediction-line-chart-example" %}

## Next Steps

{% assign currentGuide = "Prediction" %}{% include templates/trndz-guides-banner.md %}
