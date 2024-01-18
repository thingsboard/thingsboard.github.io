---
layout: docwithnav-trendz
title: Setting Up Real-Time Anomaly Detection job
description: Step-by-step guide on configuring a job to autonomously detect anomalies in real time data from IoT sensors and assets. Ensure accurate, timely insights with the right setup.

anomaly-autodiscovery:
  0:
    image: /images/trendz/anomaly/anomalies-autodiscovery-schedule.png
    title: 'Calendar heatmap of auto discovered anomalies'   

configuration:
  0:
    image: /images/trendz/anomaly/anomalies-autodiscovery-configuration.png 
    title: 'Anomaly autodiscovery job configuration'

anomaly-configuration-history:
  0:
    image: /images/trendz/anomaly/anomalies-autodiscovery-history.png
    title: 'Anomaly autodiscovery job historical executions'
---

* TOC
{:toc}

The Anomaly autodiscovery is a feature that allows setting a regular schedule for detecting anomalies within received telemetry. 
With it, you can monitor your data in real-time and identify any anomalies that may impact your business operations.

The Anomaly Refresh can be configured by clicking the Auto discovery button in the top right corner.

{% include images-gallery.html imageCollection="anomaly-autodiscovery" %}        

**Auto discovery** button opens Anomaly Auto Discovery Configuration Dialog. Here you can enable or disable auto discovery.
When auto discovery is enabled, you can edit the schedule settings. The schedule has the following parameters:
* **Every** field allows specifying the frequency at which the anomaly detection process will run.
* **Time Unit** field allows specifying the time units for the frequency specified in the Every field. It can be set to _HOUR_, _DAY_, _WEEK_, or _MONTH_.

{% include images-gallery.html imageCollection="configuration" %}

Also, the Anomaly Auto Discovery Configuration Dialog includes a history feature that displays a record of all auto discovery executions. 
To view history, click the History button, which will open a table displaying information about the date, status, and execution duration of each scheduled auto discovery event.

{% include images-gallery.html imageCollection="anomaly-configuration-history" %}
