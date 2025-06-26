---
layout: docwithnav-trendz
title: Saving Telemetry To ThingsBoard
description: How to configure and manage saving anomaly detection telemetry data to ThingsBoard.
---

* TOC
{:toc}

## Overview

Saving telemetry to ThingsBoard allows you to persist anomaly detection results such as anomaly scores and score indexes as time series data.  
This enables further analysis, visualization, and alerting within ThingsBoard.

## Configuration

To save telemetry data to ThingsBoard, follow these steps in your anomaly detection model configuration:

### 1. Configure Telemetry Key and Storage Frequency

- **Telemetry Key:** Specify the telemetry key under which anomaly scores and score indexes will be saved in ThingsBoard.
- **Telemetry Storage Frequency:** Define how frequently telemetry data should be stored.  
  It is recommended to set this frequency lower than:
    - the segment time range (for fixed segments), or
    - the product of segment size and sliding step (for sliding windows).  
  This helps prevent overlapping anomalies.

**Note:** It is not recommended to set the telemetry storage frequency lower than 1 hour, as this can cause performance pressure on ThingsBoard.

**Warning:** Changing the telemetry storage frequency after running the first refresh may lead to inconsistent or 
overlapping data in ThingsBoard. It is recommended to finalize the frequency setting before enabling telemetry saving.

### 2. Enable Anomaly Refresh

To activate telemetry saving, anomaly refresh must be enabled with the **"Enable Saving Anomaly Data"** toggle.  
Read more about enabling refresh [here](/docs/trendz/anomaly/refresh-reprocess).

Once refresh is enabled, the required entity fields in Trendz will be created automatically.  
If refresh is later disabled, telemetry saving will also stop automatically and the required entity fields will be disabled.

The telemetry data already stored will remain in ThingsBoard, even if the model is deleted.

Telemetry data can be saved during both **Refresh** and **Reprocess**, provided that the **"Enable Saving Anomaly Data"** 
flag is enabled in the refresh settings.

## Next Steps

{% assign currentGuide = "AnomalyDetection" %}{% include templates/trndz-guides-banner.md %}
