---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Background processing jobs
description: Background processing jobs in Trendz Analytics 

---

* TOC
{:toc}

In Trendz, you can create background jobs that automatically execute certain data processing tasks at regular intervals. 
There are three types of supported jobs: `cache refresh job`, `save telemetry job`, and `anomaly autodiscovery job`. 
These jobs run in the background without any user intervention. However, it is important to configure the authentication method for background jobs in ThingsBoard to ensure secure execution.

## Job authentication
Background job periodically fetch data from ThingsBoard via API and those requests should be authenticated. For making it we need to copy JWT token sign key from ThingsBoard to Trendz configuration.

* Login into ThingsBoard as System Administrator
* Go to Security -> General
* Copy Signing Key
* Open Trendz configuration file **/etc/trendz/conf/trendz.conf**
* Add following line into configuration file

```bash
export JWT_TOKEN_SIGNING_KEY={SIGN_KEY_FROMTHINGSBOARD}
```

* Save configuration
* Restart Trendz service

After this configuration, Trendz will execute background jobs on behalf of the user who created it.

## Caching job
Cache autorefresh jobs in Trendz serve the purpose of regularly updating the cache of the data source. 
This proactive approach speeds up data retrieval from ThingsBoard, enabling preaggregation and background computations. 
By refreshing the cache periodically, the data required for visualization is readily available when requested by the user, ensuring faster and more efficient data presentation. 

## Save telemetry job
Trendz gives instruments to transform raw telemetry, calculate new metrics, forecast time series behavior, and detect anomalies. 
These computed results can be saved as new telemetry for the device or asset in ThingsBoard. This functionality enables the creation of 
complex data processing pipelines and triggering actions based on predefined conditions. To automate this process, 
the Save Telemetry job in Trendz allows you to schedule periodic execution, ensuring that new incoming telemetry is processed and the results are saved back into ThingsBoard. 
This seamless integration streamlines data processing and enhances the functionality of your IoT application.

## Anomaly autodiscovery job
The anomaly detection model built in Trendz is designed to identify anomalies in datasets collected from devices and assets. 
Once the model is set up, it can be utilized to detect real-time anomalies. Following a defined schedule, 
Trendz fetches new data from ThingsBoard, applies the anomaly detection model, and saves any newly discovered anomalies. 
This automated process ensures continuous monitoring and timely detection of anomalies in your IoT data, providing valuable insights for proactive decision-making.

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}