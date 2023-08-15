---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Report anomaly to ThingsBoard
description: Report discovered anomaly to ThingsBoard
---

* TOC
{:toc}

With the assistance of Trendz, we can create an anomaly detection model and configure automated anomaly discovery. 
However, our goal goes beyond merely identifying anomalies — we want to trigger specific actions when anomalies are discovered. This is where the ThingsBoard Rule Engine comes into play.
The ThingsBoard Rule Engine offers a range of built-in tools for creating alarms, sending notifications, transforming data and triggering actions. 
In this guide, we will focus on how to send information about discovered anomalies to ThingsBoard.

## Create table in Trendz with anomaly score

First step is to create a Table view in Trendz that will show anomaly score for our entities with hourly breakdown. Let's assume that we already create anomaly detection model for highlighting anomalies based on vibration data collected from equipment.

* Create Table view in Trendz
* Add `equipment` field into Columns section
* Add Date FULL_HOUR field into Columns section
* Add Anomaly field into Columns section
    * Select `EquipmentVibrationAnomaly` model
    * Anomaly field - `score index`
    * Aggregation - `MAX`
    * Label - `vibrationAnomalyScore` - Trendz will save anomaly score index as telemetry of the equipment device with this name.
* Set default time range to **Last 7 days**

## Configure job to save anomaly score to ThingsBoard

Now we need to configure job that will save anomaly score to ThingsBoard based on Table view that we created in previous step. 

* Open view settings and enable telemetry save in `Tb calculated telemetry save` section.
  * Enabled - true
  * Save interval - 1
  * Save unit - hours
* In settings open `View mode fields` section and select `equipment` entity in `Row click entity` dropdown - this step tells Trendz under what entity score index telemetry should be saved.
* Save view with name **Equipment anomaly score save job**

## Create Alarm in ThingsBoard for high anomaly score

Finally, we need to create alarm in ThingsBoard that will be created when anomaly score will be higher than 100.

* In ThingsBoard open heat `equipment` device profile and add new Alarm Rule
* Alarm type - **Abnormal vibration**
* Create alarm rule
  * Severity - `Critical`
  * Condition - `vibrationAnomalyScore` is greater than `100`
* Clear alarm rule
  * Condition - `vibrationAnomalyScore` is lower or equals `100`

## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}