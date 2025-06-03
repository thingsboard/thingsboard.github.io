---
layout: docwithnav-trendz
title: Anomaly Refresh & Reprocess
description: Documentation for configuring anomaly refresh and reprocess tasks in Trendz, including scheduling, telemetry saving, and alarm creation.

---

* TOC
{:toc}

**Tip:** In previous versions, **Refresh** was referred to as **Autodiscovery**, and **Reprocess** was known as **Apply to**.

## Anomaly Refresh

Anomaly refresh is a feature that enables the system to automatically detect ongoing anomalies, save them to ThingsBoard, or create alarms based on them.

To access anomaly refresh settings, click the **"JOBS"** button. You will see the following options:

* **Refresh Frequency Settings:** Defines how often the refresh job will rediscover anomalies.
  * **Execute at the beginning of the time unit:** If enabled, the task will be launched at the start of the selected time unit.  
    **Example:** `EVERY 1 TIME UNIT MONTH` – the task will run at 00:00 on the first day of each month.

* **Choose Items:** Select the items (e.g., devices or assets) on which the refresh will be performed.

* **Enable Saving Anomaly Data:** If enabled, anomaly score and anomaly score index will be saved to ThingsBoard using
  the telemetry key specified in the [Input section](/docs/trendz/anomaly/overview#input-tab).  
  Read more about saving telemetry to ThingsBoard [here](/docs/trendz/anomaly/save-to-tb).

* **Enable Anomaly Alarms Creation:** If enabled, alarms will be created for detected anomalies.  
  Read more about creating anomaly-driven alarms [here](/docs/trendz/anomaly/alarms).

**Note:** Refresh will be disabled automatically after an anomaly model is rebuilt.

**Note:** Refresh frequency is not the same as telemetry saving frequency.  
**Example:** If refresh frequency is 1 day and telemetry saving frequency is 1 hour, then the job will run once per day and will save 24 score points and 24 score index points per device.

## Anomaly Reprocess

Anomaly reprocess is a feature that allows you to apply the trained anomaly model to historical data for a specific time range and selected devices.  
This is useful for evaluating how the model performs on different periods or when new telemetry data has been added to historical records.

To access reprocess settings, go to the **Task** tab and click the **"Run Reprocess Task"** button. You will see the following options:

* **Date Range:** Time range for reprocessing anomalies.
* **Items for Anomaly Reprocess:** Devices or assets to process during the reprocess.
* **Enable Anomaly Creation Toggle:** If enabled, alarms will be automatically created for anomalies found during reprocess.
* **Enable Saving Telemetry Toggle:** If enabled, telemetry will be saved to ThingsBoard. This toggle could be enabled only if 
  refresh and saving telemetry to ThingsBoard is enabled for the current anomaly model.

**Note:** Telemetry will only be saved to ThingsBoard if anomaly refresh is enabled *and* the **Enable Saving Anomaly Data** toggle is active in anomaly refresh settings.
**Note:** During reprocess, all previously saved anomalies in the selected time range for the selected items (for the current model) will be overwritten.


## Next Steps

{% assign currentGuide = "AnomalyDetection" %}{% include templates/trndz-guides-banner.md %}
