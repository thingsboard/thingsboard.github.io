---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Anomaly detection in Heat Pumps
description: Building predictive maintenance system for heat pumps based on unsupervised multivariate time series anomaly detection 

heatpumps-dashboard:
  0:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_detection_dashboard.png
    title: 'Dashboard for investigating discovered anomalies in Heat Pumps operation'

heatpumps-create-anomaly-model:
  0:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_create_anomaly_model.png
    title: 'Click create Anomaly detection model button'
  1:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_configure_anomaly_model.png
    title: 'Set Anomaly detection model parameters'
  2:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomalies_summary.png
    title: 'Review results of anomaly detection model training for heat pumps'
  3:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_review_anomaly.png
    title: 'Review discovered anomalies for heat pump'

heatpumps-autodiscovery-anomalies:
  0:
    image: /images/trendz/guide/heatpump_anomalies/heatpumps_autodiscover_enable.png
    title: 'Click Anomaly automated discovery button'
  1:
    image: /images/trendz/guide/heatpump_anomalies/heatpumps_autodiscover_job_configuration.png
    title: 'Configure intervals for automated anomaly discovery job'

heatpumps-create-anomaly-review-widget:
  0:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_create_anomaly_widget.png
    title: 'Create anomaly review widget for heat pumps'
  1:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_select_model.png
    title: 'Select anomaly detection model for heat pumps create in Step 1'
  2:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_review_widget.png
    title: 'Review discovered anomalies for heat pumps on a widget'

heatpumps-save-anomaly-score-as-telemetry:
  0:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_score_table_create.png
    title: 'Create anomaly score table for heat pumps based on discovered anomalies'
  1:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_score_table_row_click.png
    title: 'Select heat pump as a row click entity for anomaly score table'
  2:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_score_save.png
    title: 'Schedule anomaly score saving job for heat pumps'

heatpumps-create-anomaly-alert:
  0:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_score_alert_create.png
    title: 'Create anomaly score alert for heat pumps in ThingsBoard device profile'
  1:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_score_alert_configuration.png
    title: 'Configure anomaly score alert create and clear rules'
  2:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_score_alert_creation_condition.png
    title: 'Configure anomaly score threshold for alert creation'
  3:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_score_alert_clear_condition.png
    title: 'Configure anomaly score threshold for alert clearing'

heatpumps-notify-about-anomalies:
  0:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_open_root_rulechain.png
    title: 'Open root rule chain in ThingsBoard'
  1:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_send_email_node_configuration.png
    title: 'Add toEmail rule node to root rule chain'
  2:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_email_notification_config.png
    title: 'Configure email properties for notification'
  3:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_add_send_email_node.png
    title: 'Add send email node to root rule chain'
  4:
    image: /images/trendz/guide/heatpump_anomalies/heatpump_anomaly_send_notification_rulechain.png
    title: 'Configured rule chain for sending anomaly notifications about discovered anomalies in heat pumps'

---

* TOC
{:toc}

## Introduction
Detecting anomalies in heat pumps is essential to maintain their performance and avoid expensive repairs. 
Identifying unusual patterns or changes in a heat pump's operation, such as power usage, compressor speed, air flow, coolant pressure and temperature, can help detect issues and address them before they escalate. 
Common heat pump problems include low coolant levels, blocked air filters, faulty compressors, and overheating.
By implementing a predictive maintenance system that combines condition monitoring with unsupervised anomaly detection algorithms, it is possible to identify these issues in their early stages, allowing 
for timely intervention and maintenance to prevent further complications and costly repairs of hvac system. This proactive approach not only extends the lifespan of the heat pump but also ensures its efficient operation.

**Task definition:** Detect anomalies in heat pumps in real-time and notify maintenance team about potential problems.

{% include images-gallery.html imageCollection="heatpumps-dashboard" %}

### Implementation plan
* Create anomaly detection model for heat pumps using historical telemetry data.
* Configure anomalies auto-detection on real-time telemetry data.
* Create table widget to review all detected anomalies.
* Notify maintenance team about detected anomalies
* Create dashboard for maintenance team to track anomalies and check real-time heat pump status.

## Getting started:

### Prerequisites
Heat pump reports telemetry data to ThingsBoard via MQTT protocol. They registered in platform as a device entity. Devices have relation to Apartment asset and apartments assigned to customer account. 
They way how heat pumps provisioned in the system is out of scope of this guide as well as user self registration process. You can find tutorials how to do that in our documentation. 

### Step 1: Create anomaly detection model
To identify possible issues with heat pumps, we will use Trendz anomaly detection instruments. Trendz uses unsupervised machine learning algorithms to detect anomalies in time series data. 
To train a model, we need to configure what telemetry keys should be analyzed. In our case, we will use the following keys: `compressorSpeed`, `airflow`, `coolantPressure`, `coolantTemperature`, `powerUsageWh`.

* Go to anomalies page and click on `Create model` button.
* Set model name to `HeatPumpAnomalyModel` 
* Define anomaly detection model properties
  * Cluster algorithm: `K-Means`
  * Segment time range: `1 hour` - wa want to detect abnormal behaviour in 1 hour time range.
  * Comparison type: `Behavior based` - we want to detect anomalies based on behavior of heat pump.
* Datasource properties
  * Time Range: `Last 90 days` - we will use last 90 days of telemetry data to train model for detecting normal and abnormal behaviour.
  * Fields - here we defined what telemetry keys should be used in the model.
    * `heatPump.compressorSpeed`
    * `heatPump.airflow`
    * `heatPump.coolantPressure`
    * `heatPump.coolantTemperature`
    * `heatPump.powerUsageWh`
  * Filters - leave blank because we want to use data from all heat pumps in the system. In some cases, you may want to train model for specific heat pump or group of heat pumps to detect specific anomalies that happen only on these heat pumps.
* Press **Build model** button.

During model creation Trendz will fetch all required data for the model, analyse and train to detect what is normal behavior for a heat pump. Based on this information anomaly detection model will be created.

Once model trained we will see historical anomalies that were discovered by the model. Each anomaly has `score` and `score index` properties that tells us how abnormal is this anomaly. Higher values means that anomaly is more abnormal.

{% include images-gallery.html imageCollection="heatpumps-create-anomaly-model" %}

### Step 2: Schedule anomaly autodiscovery
Our model is ready and now we want to schedule a job that will analyze real-time telemetry data and detect anomalies.
* On model summary page click on `Auto discovery` button.
* Enable **Auto discovery** checkbox
* Set **Interval** to `1 hour`
* Press **Apply** button

Once configuration saved Trendz will periodically fetch new data from heat pumps and identify anomalies. If anomaly was detected, Trendz will compute anomaly score and save it in the database.

{% include images-gallery.html imageCollection="heatpumps-autodiscovery-anomalies" %}

### Step 3: Review all discovered anomalies
Now we will create a view that will show all anomalies that where discovered during model creation and new anomalies that were discovered by auto discovery job.

* Create view **Anomaly**
* Select model that was created in step 1. - `HeatPumpAnomalyModel`
* Add `heatPump` field to the Filter section - it allows to focus on anomalies for specific heat pump.
* Press **Build report** button and review new discovered anomalies.
* Set view name - **heat pump anomalies table**
* Press **Save** button 

{% include images-gallery.html imageCollection="heatpumps-create-anomaly-review-widget" %}

### Step 4: Notify maintenance team about detected anomalies
We have anomaly detection model that can discover anomalies and setup job to rediscover them on fresh data. Final step is to notify maintenance team about detected anomalies.
To make it happen we need to:

#### Save current anomaly score for heat pump as a telemetry back to ThingsBoard
* Create Table view in Trendz
* Add `heatPump` field into Columns section
* Add Date FULL_HOUR field into Columns section
* Add Anomaly field into Columns section
  * Select `HeatPumpAnomalyModel` model
  * Anomaly field - `score index`
  * Aggregation - `MAX`
  * Label - `heatpumpAnomalyScore` - Trendz will save anomaly score index as telemetry with this name.
* Add `heatPump` field into Filters section
* Open view settings and enable telemetry save in `Tb calculated telemetry save` section.
  * Enabled - true
  * Interval - 1
  * Unit - hours
* In settings open `View mode fields` section and **heatPump** entity in `Row click entity` dropdown - this step tells Trendz under what entity score index telemetry should be saved.
* Set default time range to **Last 7 days**
* Save view with name **Heatpump anomaly score save job**

Once view saved, Trendz would schedule background job that will periodically check heat pumps anomaly score and save result as telemetry of the heat pump device.

{% include images-gallery.html imageCollection="heatpumps-save-anomaly-score-as-telemetry" %}

#### Configure alert if anomaly score is higher than 50.
At this moment we already have `heatpumpAnomalyScore` telemetry for each heat pump in the ThingsBoard which tells as how abnormal its current behavior. It means that we can create Alarm Rule in ThignsBoard to raise an alarm if score index is higher than 50.

* In ThingsBoard open heat pump's device profile and add new Alarm Rule
* Alarm type - **Abnormal behavior**
* Create alarm rule
  * Severity - `Warning`
  * Condition - `heatpumpAnomalyScore` is greater than `50`
* Clear alarm rule
  * Condition - `heatpumpAnomalyScore` is lower or equals `50`

{% include images-gallery.html imageCollection="heatpumps-create-anomaly-alert" %}

#### Send notification once alarm created
Final step is to send notification to the maintenance team once alarm created. We will use ThingsBoard Rule Engine to send email notification to the maintenance team. If Alarm Rule in device profile raised an alarm, we can catch this event and add steps to send an email.

* Open Root rule chain in ThingsBoard
* add `toEmail` rule node after `Device profile` node and connect it with `Alarm Created` relation.
* Open `toEmail` node settings and configure it to send email to the maintenance team.
  * From template - `info@testmail.org`
  * To template - `maintenance@testmail.com`
  * Subject template - `Abnormal behavior in ${entityName}`
  * Body template - `Maintenance required for heat pump ${entityName}. Anomaly score is ${heatpumpAnomalyScore}. Please check heat pump status on the dashboard.`
* add `send email` rule node after `toEmail` node and connect it with `Successfull` relation.
* Save rule chain.

With this configuration ThingsBoard will send notification to the maintenance team once anomaly was detected in heat pumps behavior.

{% include images-gallery.html imageCollection="heatpumps-notify-about-anomalies" %}

## Summary
In sum, the maintenance and efficient operation of heat pumps can be significantly enhanced by deploying an anomaly detection algorithm. 
This technology, which monitors changes in power usage, compressor speed, air flow, coolant pressure and temperature, can identify potential 
issues such as low coolant levels, blocked air filters, faulty compressors, and overheating early on. This early detection allows for prompt intervention, thereby preventing further complications and costly repairs. 
The outlined implementation plan involves developing an anomaly detection model, configuring real-time telemetry data, and creating an interactive dashboard for the maintenance team to track anomalies and heat pump status. 
Future work should focus on refining this model, expanding its predictive capabilities, and integrating it seamlessly into current maintenance practices.