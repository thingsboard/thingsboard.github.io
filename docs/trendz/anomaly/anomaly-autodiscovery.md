---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Anomaly autodiscovery job
description: Configure job for automated anomaly discovery in Trendz Analytics
scoreVsIndexExample:
    0:
        image: /images/trendz/anomaly/score_vs_index.png
        title: 'Pump vibration pattern during start'
       
---

* TOC
{:toc}

The Anomaly autodiscovery is a feature that allows setting a regular schedule for detecting anomalies within received telemetry. 
With it, you can monitor your data in real-time and identify any anomalies that may impact your business operations.

The Anomaly Refresh can be configured by clicking the Auto discovery button in the top right corner.

![image](/images/trendz/anomaly/anomalies-autodiscovery-schedule.png)

**Auto discovery** button opens Anomaly Auto Discovery Configuration Dialog. Here you can enable or disable auto discovery.
When auto discovery is enabled, you can edit the schedule settings. The schedule has the following parameters:
* **Every** field allows specifying the frequency at which the anomaly detection process will run.
* **Time Unit** field allows specifying the time units for the frequency specified in the Every field. It can be set to _HOUR_, _DAY_, _WEEK_, or _MONTH_.

![image](/images/trendz/anomaly/anomalies-autodiscovery-configuration.png)

Also, the Anomaly Auto Discovery Configuration Dialog includes a history feature that displays a record of all auto discovery executions. 
To view history, click the History button, which will open a table displaying information about the date, status, and execution duration of each scheduled auto discovery event.

![image](/images/trendz/anomaly/anomalies-autodiscovery-history.png)
