---
layout: docwithnav-edge
title: Edge Release Notes
description: ThingsBoard Edge Release Notes

---

* TOC
{:toc}

## v4.1.0 (July 23, 2025) {#v410}

**Major** release with everything from [TB CE v4.1.0](/docs/reference/releases/#v41){: target="_blank"}:

* [#13494](https://github.com/thingsboard/thingsboard/pull/13494){: target="_blank"} **Calculated Fields Support:** Added support for syncing calculated fields to Edge by [@jekka001](https://github.com/jekka001){: target="_blank"};
* [#182](https://github.com/thingsboard/thingsboard-edge/pull/182){: target="_blank"} **Timeseries Cloud Delivery Fixes:** Ensure that timeseries events are not dropped after X delivery attempts by [@volodymyr-babak](https://github.com/volodymyr-babak){: target="_blank"};

## v4.0.1 (May 15, 2025) {#v401}

**Major** release with everything (except the Calculated Fields feature) from [TB CE v4.0](/docs/reference/releases/#v40){: target="_blank"} and [TB CE v4.0.1](/docs/reference/releases/#v401){: target="_blank"}:

* [#9195](https://github.com/thingsboard/thingsboard/pull/9195){: target="_blank"} Run multiple Edge nodes in a high-availability cluster by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#131](https://github.com/thingsboard/thingsboard-edge/pull/131){: target="_blank"} Create and edit Rule Chains directly on Edge by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};

## v3.9.1 (Mar 14, 2025) {#v391}

**Minor** release with everything from [TB CE v3.9.1](/docs/reference/releases/#v391){: target="_blank"}.

## v3.9.0 (Jan 13, 2025) {#v39}

**Major** release with everything from [TB CE v3.9](/docs/reference/releases/#v39){: target="_blank"}:

* [#125](https://github.com/thingsboard/thingsboard-edge/pull/125){: target="_blank"} Use of Kafka to store and process Cloud Events to improve processing throughput by [@jekka001](https://github.com/jekka001){: target="_blank"};
* [#136](https://github.com/thingsboard/thingsboard-edge/pull/136){: target="_blank"} Access Edge Attributes on edge instance itself [@jekka001](https://github.com/jekka001){: target="_blank"};
* Cassandra support as Timeseries storage by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};

## v3.8.0 (Oct 15, 2024) {#v38}

**Major** release with everything from [TB CE v3.8](/docs/reference/releases/#v38){: target="_blank"}:

* [#11521](https://github.com/thingsboard/thingsboard/pull/11521){: target="_blank"} Queue to handle edge notification messages by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#11139](https://github.com/thingsboard/thingsboard/pull/11139){: target="_blank"} Proxy for grpc client by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#11494](https://github.com/thingsboard/thingsboard/pull/11494){: target="_blank"} Performance improvement via caching related edges for entity by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#120](https://github.com/thingsboard/thingsboard-edge/pull/120){: target="_blank"} Introduce Timeseries Cloud events table to slowly process timeseries updates by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};

## v3.7.0 (Jun 18, 2024) {#v37}

**Major** release with everything from [TB CE v3.7](/docs/reference/releases/#v37){: target="_blank"}:

* [#10548](https://github.com/thingsboard/thingsboard/pull/10548){: target="_blank"} Add support for notification center by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#10239](https://github.com/thingsboard/thingsboard/pull/10239){: target="_blank"} Sync up OAuth2 configuration by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#10471](https://github.com/thingsboard/thingsboard/pull/10471){: target="_blank"} YAML configuration for telemetry message size limit with Edge Notification by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};

## v3.6.4 (Apr 11, 2024) {#v364}

**Minor** release with everything from [TB CE v3.6.4](/docs/reference/releases/#v364){: target="_blank"}.

## v3.6.3 (Mar 18, 2024) {#v363}

**Minor** release with everything from [TB CE v3.6.3](/docs/reference/releases/#v363){: target="_blank"}:

* [#9968](https://github.com/thingsboard/thingsboard/pull/9968){: target="_blank"} Alarm comment support by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#10021](https://github.com/thingsboard/thingsboard/pull/10021){: target="_blank"} Notification rules for connection status and errors. Rate limits for Edge events by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};

## v3.6.2 (Dec 28, 2023) {#v362}

**Minor** release with everything from [TB CE v3.6.2](/docs/reference/releases/#v362){: target="_blank"}:

* [#9688](https://github.com/thingsboard/thingsboard/pull/9688){: target="_blank"} Edge upgrade instructions in TB Server by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"} and [@deaflynx](https://github.com/deaflynx){: target="_blank"};
* [#9617](https://github.com/thingsboard/thingsboard/pull/9617){: target="_blank"} Edge - JSON converter for proto by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#9712](https://github.com/thingsboard/thingsboard/pull/9712){: target="_blank"} Edge Requests Service - fetch only first level of relation from cloud by [@volodymyr-babak](https://github.com/volodymyr-babak){: target="_blank"}; 

## v3.6.1 (Nov 14, 2023) {#v361}

**Minor** release with everything from [TB CE v3.6.1](/docs/reference/releases/#v361){: target="_blank"} with the following improvements and bug fixes:

* [#9226](https://github.com/thingsboard/thingsboard/pull/9226){: target="_blank"} TB Resource functionality support for Edge by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#9515](https://github.com/thingsboard/thingsboard/pull/9515){: target="_blank"} Increased default value of EDGES_SLEEP_BETWEEN_BATCHES to handle 2G/3G connections by [@volodymyr-babak](https://github.com/volodymyr-babak){: target="_blank"};

## v3.6.0 (Sep 22, 2023) {#v36}

**Major** release with everything from [TB CE v3.6](/docs/reference/releases/#v36){: target="_blank"} with the following improvements and bug fixes:

* [#9087](https://github.com/thingsboard/thingsboard/pull/9087){: target="_blank"} Add possibility to create Assets, Dashboards, EntityViews, AssetProfile, DeviceProfile on edge by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#9062](https://github.com/thingsboard/thingsboard/pull/9062){: target="_blank"} Push tenant and tenant profile entities to the edge by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#9052](https://github.com/thingsboard/thingsboard/pull/9052){: target="_blank"} Introduce Event Pub/Sub Model for Detecting Changes in Entities by [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};
* [#8830](https://github.com/thingsboard/thingsboard/pull/8830){: target="_blank"} Edge event table - added sequential ID column to handle properly heavy load and cluster cases by [@volodymyr-babak](https://github.com/volodymyr-babak){: target="_blank"};
* [#9245](https://github.com/thingsboard/thingsboard/pull/9245){: target="_blank"} Edge instructions for ubuntu, centos by [@deaflynx](https://github.com/deaflynx){: target="_blank"} and [@AndriiLandiak](https://github.com/AndriiLandiak){: target="_blank"};

## v3.5.1.1 (Jul 4, 2023) {#v3511}

**Hotfix** release to fix incorrect update of sequential id offset:

* [#57](https://github.com/thingsboard/thingsboard-edge/issues/57){: target="_blank"} ThingsBoard Edge PE disconnects from cloud;
* [#60](https://github.com/thingsboard/thingsboard-edge/issues/60){: target="_blank"} edge error log;

## v3.5.1 (Jun 1, 2023) {#v351}

**Minor** release with everything from [TB CE v3.5.1](/docs/reference/releases/#v351){: target="_blank"}.

## v3.5.0 (May 10, 2023) {#v35}

**Major** release with everything from [TB CE v3.5](/docs/reference/releases/#v35){: target="_blank"} with the following improvements and bug fixes:

* [#7862](https://github.com/thingsboard/thingsboard/pull/7862){: target="_blank"} Push latest timeseries key-value pair to edge on assignment entity to edge;
* [#7878](https://github.com/thingsboard/thingsboard/pull/7878){: target="_blank"} Add edge install instructions for docker;
* [#7914](https://github.com/thingsboard/thingsboard/pull/7914){: target="_blank"} Added default edge rule chain to asset/device profiles;
* [#8301](https://github.com/thingsboard/thingsboard/pull/8301){: target="_blank"} Edge computing solution templates;
* [#8340](https://github.com/thingsboard/thingsboard/pull/8340){: target="_blank"} Handle gRPC messages exceeding default max message size;
* [#8344](https://github.com/thingsboard/thingsboard/pull/8344){: target="_blank"} Push edge connect/disconnect events to rule chain;
* [#8346](https://github.com/thingsboard/thingsboard/pull/8346){: target="_blank"} Improved Keep Alive Functionality between Edge and Cloud to Prevent Data Loss;

## v3.4.3 (December 22, 2022)

**Minor** release with everything from [TB CE v3.4.3](/docs/reference/releases/#v343-december-21-2022){: target="_blank"} with the following improvements and bug fixes:

* [#7093](https://github.com/thingsboard/thingsboard/pull/7093){: target="_blank"} Edge sync functionality - added cluster support;
* [#7214](https://github.com/thingsboard/thingsboard/pull/7214){: target="_blank"} Notify devices in case shared attribute updates from edge;
* [#7651](https://github.com/thingsboard/thingsboard/pull/7651){: target="_blank"} Updates to stability of synchronization between edge and cloud in case of many events simultaneously;
* [#7792](https://github.com/thingsboard/thingsboard/pull/7792){: target="_blank"} Edge root rule chain update fix. USER entity support added. INACTIVITY_TIMEOUT pushed to edge;

## v3.4.1 (August 19, 2022)

**Minor** release with everything from [TB CE v3.4.1](/docs/reference/releases/#v341-august-18-2022){: target="_blank"} with the following improvements and bug fixes:

* [#6953](https://github.com/thingsboard/thingsboard/pull/6953){: target="_blank"} Check for missing edge rule chain during unassign of rule chain(s) from edge;
* [#7044](https://github.com/thingsboard/thingsboard/pull/7044){: target="_blank"} Firmware ID not synced from cloud to edge in device / device profiles;
* [#7095](https://github.com/thingsboard/thingsboard/pull/7095){: target="_blank"} Start regular edge event process after sync completed;

## v3.4 (July 21, 2022)

Everything from [TB CE v3.4](/docs/reference/releases/#v34-july-19-2022){: target="_blank"} with the following improvements and bug fixes:

* [#6781](https://github.com/thingsboard/thingsboard/pull/6781){: target="_blank"} Edge OTA support;
* [#6852](https://github.com/thingsboard/thingsboard/pull/6852){: target="_blank"} Queue API support.

## v3.3.4.1 (May 2, 2022)

**Hot fix** release with the following bug fixes:
* Core:
    * Fix issue with duplicate system widget bundles that cause an error during widget loading on the dashboard [details](https://github.com/thingsboard/thingsboard-edge/issues/5){: target="_blank"}

## v3.3.4 (March 24, 2022)

Initial release.