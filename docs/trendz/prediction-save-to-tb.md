---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Save predicted telemetry to ThingsBoard
description: Save predicted telemetry to ThingsBoard

models-save-telemetry:
  0: 
    image: https://img.thingsboard.io/trendz/models-save-telemetry.png
    title: 

models-jobs:
  0:
    image: https://img.thingsboard.io/trendz/models-jobs-1.png
    title: Click on the JOBS button to open the Prediction Model Parameters modal
  1:
    image: https://img.thingsboard.io/trendz/models-jobs-2.png
    title: 1. Enable/disable saving predicted telemetry to ThingsBoard. Toggle this setting to save predicted telemetry to ThingsBoard and ensure regular updates. 2. Specify how often telemetry should be updated. 3. Select the specific devices for which predicted telemetry will be saved. 4. Toggle Enable Model Retraining to allow the model to retrain automatically whenever new real data is detected.
---

Prediction models in Trendz are designed to generate predicted telemetry after training and store the results in ThingsBoard as new telemetry, which can then be processed, observed, or manipulated further. 
The process of generating and presenting this telemetry in the system works as follows:

First, you need a successfully trained model. The model must have a name, an associated business entity, and a ThingsBoard telemetry key. The telemetry key defines how the prediction will be stored: as telemetry in Trendz, as telemetry in ThingsBoard under the same key, 
and associated with the selected business entity. Once these conditions are met, Trendz generates predictions starting from the latest training telemetry and covering the same time range as the model’s segment size.

For example, let’s say today is January 1, 2025. You have a device, an Energy Meter, which measures telemetry like "Energy Consumption" in kWh. The telemetry data for the whole of 2024 is available, and you want to predict monthly energy consumption. 
You create a model called "Energy Consumption Prediction," select the "Energy Meter" business entity, and assign "energy_consumption_prediction" as the ThingsBoard key. For training, you choose the time range 01/01/2024–31/12/2024, set the prediction range to 1 month, and choose the FIXED segmentation strategy.

{% include images-gallery.html imageCollection="models-save-telemetry" %}

After training, the model divides the data into 12 segments, one for each month, without gaps or overlaps (as defined by the FIXED strategy). Trendz then generates a prediction for the next month after the latest training data, which in this case is January 2025. 
This prediction is stored in ThingsBoard under the key "energy_consumption_prediction" and is accessible in Trendz through the "Energy Consumption Prediction" business entity field.

In cases where predictions need to stay relevant over time, a **refresh task** updates the model when new telemetry is received. This task:
1. Loads new telemetry to form additional segments.
2. Adjusts the model based on the new data.
3. Generates updated predictions.

With each refresh, the latest known data point is updated, and new predictions are generated for the corresponding time range. If these predictions overlap with previously generated ones, the older predictions are overwritten. The refresh process continues iteratively, extending predictions forward in time. 
It stops when there is insufficient data to create a new segment and resumes when enough data becomes available.

For instance, if new telemetry for January 2025 is added, the model adjusts to include this segment and generates predictions for February 2025. The refreshed predictions replace any overlapping values, ensuring that the forecast remains accurate and up-to-date. 
Over time, this iterative process extends the prediction timeline while maintaining alignment with the latest data.

This approach allows models trained on historical data to dynamically update and provide reliable predictions for future time periods.

## Prediction Model Jobs

After training your prediction model and confirming that the accuracy meets your expectations, you can enable the model to utilize the predicted telemetry for various use cases, such as calculating time-to-value or integrating predictions into your dashboards and views. 
Follow the steps below to configure and enable your prediction model:
* Click on the **JOBS** button to open the **Prediction Model Parameters** modal
* In the modal, you can configure the following parameters:
  1. Enable/disable saving predicted telemetry to ThingsBoard. Toggle this setting to save predicted telemetry to ThingsBoard and ensure regular updates.
  2. Specify how often telemetry should be updated.
  3. Select the specific devices for which predicted telemetry will be saved.
  4. Toggle Enable Model Retraining to allow the model to retrain automatically whenever new real data is detected.
* Once you’ve set the parameters, click **Save** to apply the changes.

{% include images-gallery.html imageCollection="models-jobs" %}

## Next Steps

{% assign currentGuide = "Prediction" %}{% include templates/trndz-guides-banner.md %}
