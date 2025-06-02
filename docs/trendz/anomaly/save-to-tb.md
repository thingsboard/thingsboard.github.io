---
layout: docwithnav-trendz
title: Saving Telemetry To ThingsBoard
description: How to configure and manage saving anomaly detection telemetry data to ThingsBoard.
---

* TOC
{:toc}

## Overview

Saving telemetry to ThingsBoard allows you to persist anomaly detection results such as anomaly scores and indexes as
time series data. This enables further analysis, visualization, and alerting within ThingsBoard.

## Configuration

To save telemetry data to ThingsBoard, configure the following settings in your anomaly detection model:

1) configure telemetry key and telemetry storage frequency.
- **Telemetry Key:** Specify the key under which anomaly scores and indexes will be stored in ThingsBoard.
- **Telemetry Storage Frequency:** Define the aggregation interval for storing telemetry data.  
  Recommended to set this frequency lower than the segment time range (for fixed segments) or less than the
  calculated segment size times sliding step (for sliding windows). This setting will prevent anomaly overlapping.  
  Also, it’s not recommended to set Telemetry Storage Frequency less than 1 hour, as it may cause pressure on ThingsBoard.

**Note:** We do not recommend changing Telemetry Storage Frequency after the first refresh enablement, because data in ThingsBoard cannot be reliably rewritten.

2) run telemetry refresh 
To enable telemetry saving, it is necessary to enable anomaly refresh (read more [here](/docs/trendz/anomaly/refresh-reprocess.md)) 
or run reprocess task with a configured refresh. After enabling refresh, associated business entity fields will be automatically created. 
When refresh is disabled, telemetry saving is automatically disabled as well (telemetry data itself will not disappear, even after model deletion).

