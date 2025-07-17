---
layout: docwithnav-trendz
title: Anomaly-Driven Alarm Creation
description: How to configure alarms triggered by anomaly detection, including alarm types, severities, and behaviors.

---

* TOC
{:toc}

## Overview

Trendz supports automatic creation of alarms based on detected anomalies. This feature allows users to react to abnormal 
behavior in real time by integrating with ThingsBoard's native alarm system. Alarms can be created during both 
**Refresh** and **Reprocess** tasks, depending on your configuration.

## Enabling Alarm Creation

To set up alarm generation during anomaly detection, use one or both of the following options:

### Enable Alarms in Anomaly Refresh

To enable alarm creation:

- Go to the **Jobs** tab.
- Enable the **Enable Anomaly Alarms Creation** toggle in the refresh settings.

Once enabled, alarms will be automatically created for all newly detected anomalies during the refresh process.

**Read more about refresh configuration [here](/docs/trendz/anomaly/refresh-reprocess#anomaly-refresh).**

### Enable Alarms in Anomaly Reprocess

You can also generate alarms during anomaly reprocessing:

- Go to the **Tasks** tab.
- Click **Run Reprocess Task**.
- Enable the **Enable Anomaly Creation Toggle**.

Alarms will be created for anomalies found within the selected time range and items during reprocess.

**Read more about reprocess configuration [here](/docs/trendz/anomaly/refresh-reprocess#anomaly-reprocess).**

## Alarm Behavior and Lifecycle

Here’s how alarm behavior works in Trendz:

- **One anomaly = one alarm**  
  Each anomaly is associated with exactly one alarm.

- **One active alarm per device at a time**  
  While multiple alarms can exist for a single device, only one alarm per device can be active at a time.

- **Alarm status**
    - If the linked anomaly is still active → the alarm remains **active**.
    - If the anomaly is no longer active → the alarm is **cleared**.

- **Alarm severity and type**
  - The **severity** level of the alarm is configured in the **Input** tab, after model build.  
    Trendz generates default score thresholds for severity levels (e.g., CRITICAL, MAJOR, etc.).
  - The **alarm type** is also configurable in the **Input** tab.

- **Threshold rule**  
  If the anomaly score is **lower than the lowest defined threshold**, **no alarm will be created** for that anomaly.

- **Alarm deletion or clearing on anomaly deletion**  
  If an anomaly is removed (e.g., during reprocess or model rebuild), the linked alarm will either be cleared or deleted 
  depending on the **ALARM BEHAVIOR ON ANOMALY DELETION** setting in the model.

## Best Practices

To avoid unnecessary alarms and ensure effective monitoring:

1. **Enable alarm creation only if you're confident the model detects real anomalies**, not expected or typical behavior.
2. **Adjust thresholds** according to your organization’s alarm policy and operational needs.
3. **Be careful with alarms to avoid alarm storms** — a poorly tuned model or overly sensitive thresholds can generate too many alarms, leading to noise and alert fatigue.

## Next Steps

{% assign currentGuide = "AnomalyDetection" %}{% include templates/trndz-guides-banner.md %}
