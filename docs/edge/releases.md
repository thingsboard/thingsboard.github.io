---
layout: docwithnav-edge
title: Edge Release Notes
description: ThingsBoard Edge Release Notes

---

* TOC
{:toc}

## v3.8.0 (Oct 15, 2024) {#v38}

**Major** release with everything from [TB CE v3.8](/docs/reference/releases/#v38):

* [#11521](https://github.com/thingsboard/thingsboard/pull/11521) Queue to handle edge notification messages by @AndriiLandiak;
* [#11139](https://github.com/thingsboard/thingsboard/pull/11139) Proxy for grpc client by @AndriiLandiak;
* [#11494](https://github.com/thingsboard/thingsboard/pull/11494) Performance improvement via caching related edges for entity by @AndriiLandiak;
* [#120](https://github.com/thingsboard/thingsboard-edge/pull/120) Introduce Timeseries Cloud events table to slowly process timeseries updates by @AndriiLandiak;

## v3.7.0 (Jun 18, 2024) {#v37}

**Major** release with everything from [TB CE v3.7](/docs/reference/releases/#v37):

* [#10548](https://github.com/thingsboard/thingsboard/pull/10548) Add support for notification center by @AndriiLandiak;
* [#10239](https://github.com/thingsboard/thingsboard/pull/10239) Sync up OAuth2 configuration by @AndriiLandiak;
* [#10471](https://github.com/thingsboard/thingsboard/pull/10471) YAML configuration for telemetry message size limit with Edge Notification by @AndriiLandiak;

## v3.6.4 (Apr 11, 2024) {#v364}

**Minor** release with everything from [TB CE v3.6.4](/docs/reference/releases/#v364).

## v3.6.3 (Mar 18, 2024) {#v363}

**Minor** release with everything from [TB CE v3.6.3](/docs/reference/releases/#v363):

* [#9968](https://github.com/thingsboard/thingsboard/pull/9968) Alarm comment support by @AndriiLandiak;
* [#10021](https://github.com/thingsboard/thingsboard/pull/10021) Notification rules for connection status and errors. Rate limits for Edge events by @AndriiLandiak;

## v3.6.2 (Dec 28, 2023) {#v362}

**Minor** release with everything from [TB CE v3.6.2](/docs/reference/releases/#v362):

* [#9688](https://github.com/thingsboard/thingsboard/pull/9688) Edge upgrade instructions in TB Server by @AndriiLandiak and @deaflynx;
* [#9617](https://github.com/thingsboard/thingsboard/pull/9617) Edge - JSON converter for proto by @AndriiLandiak;
* [#9712](https://github.com/thingsboard/thingsboard/pull/9712) Edge Requests Service - fetch only first level of relation from cloud by @volodymyr-babak; 

## v3.6.1 (Nov 14, 2023) {#v361}

**Minor** release with everything from [TB CE v3.6.1](/docs/reference/releases/#v361) with the following improvements and bug fixes:

* [#9226](https://github.com/thingsboard/thingsboard/pull/9226) TB Resource functionality support for Edge by @AndriiLandiak;
* [#9515](https://github.com/thingsboard/thingsboard/pull/9515) Increased default value of EDGES_SLEEP_BETWEEN_BATCHES to handle 2G/3G connections by @volodymyr-babak;

## v3.6.0 (Sep 22, 2023) {#v36}

**Major** release with everything from [TB CE v3.6](/docs/reference/releases/#v36) with the following improvements and bug fixes:

* [#9087](https://github.com/thingsboard/thingsboard/pull/9087) Add possibility to create Assets, Dashboards, EntityViews, AssetProfile, DeviceProfile on edge by @AndriiLandiak;
* [#9062](https://github.com/thingsboard/thingsboard/pull/9062) Push tenant and tenant profile entities to the edge by @AndriiLandiak;
* [#9052](https://github.com/thingsboard/thingsboard/pull/9052) Introduce Event Pub/Sub Model for Detecting Changes in Entities by @AndriiLandiak;
* [#8830](https://github.com/thingsboard/thingsboard/pull/8830) Edge event table - added sequential ID column to handle properly heavy load and cluster cases by @volodymyr-babak;
* [#9245](https://github.com/thingsboard/thingsboard/pull/9245) Edge instructions for ubuntu, centos by @deaflynx and @AndriiLandiak;

## v3.5.1.1 (Jul 4, 2023) {#v3511}

**Hotfix** release to fix incorrect update of sequential id offset:

* [#57](https://github.com/thingsboard/thingsboard-edge/issues/57) ThingsBoard Edge PE disconnects from cloud;
* [#60](https://github.com/thingsboard/thingsboard-edge/issues/60) edge error log;

## v3.5.1 (Jun 1, 2023) {#v351}

**Minor** release with everything from [TB CE v3.5.1](/docs/reference/releases/#v351).

## v3.5.0 (May 10, 2023) {#v35}

**Major** release with everything from [TB CE v3.5](/docs/reference/releases/#v35) with the following improvements and bug fixes:

* [#7862](https://github.com/thingsboard/thingsboard/pull/7862) Push latest timeseries key-value pair to edge on assignment entity to edge;
* [#7878](https://github.com/thingsboard/thingsboard/pull/7878) Add edge install instructions for docker;
* [#7914](https://github.com/thingsboard/thingsboard/pull/7914) Added default edge rule chain to asset/device profiles;
* [#8301](https://github.com/thingsboard/thingsboard/pull/8301) Edge computing solution templates;
* [#8340](https://github.com/thingsboard/thingsboard/pull/8340) Handle gRPC messages exceeding default max message size;
* [#8344](https://github.com/thingsboard/thingsboard/pull/8344) Push edge connect/disconnect events to rule chain;
* [#8346](https://github.com/thingsboard/thingsboard/pull/8346) Improved Keep Alive Functionality between Edge and Cloud to Prevent Data Loss;

## v3.4.3 (December 22, 2022)

**Minor** release with everything from [TB CE v3.4.3](/docs/reference/releases/#v343-december-21-2022) with the following improvements and bug fixes:

* [#7093](https://github.com/thingsboard/thingsboard/pull/7093) Edge sync functionality - added cluster support;
* [#7214](https://github.com/thingsboard/thingsboard/pull/7214) Notify devices in case shared attribute updates from edge;
* [#7651](https://github.com/thingsboard/thingsboard/pull/7651) Updates to stability of synchronization between edge and cloud in case of many events simultaneously;
* [#7792](https://github.com/thingsboard/thingsboard/pull/7792) Edge root rule chain update fix. USER entity support added. INACTIVITY_TIMEOUT pushed to edge;

## v3.4.1 (August 19, 2022)

**Minor** release with everything from [TB CE v3.4.1](/docs/reference/releases/#v341-august-18-2022) with the following improvements and bug fixes:

* [#6953](https://github.com/thingsboard/thingsboard/pull/6953) Check for missing edge rule chain during unassign of rule chain(s) from edge;
* [#7044](https://github.com/thingsboard/thingsboard/pull/7044) Firmware ID not synced from cloud to edge in device / device profiles;
* [#7095](https://github.com/thingsboard/thingsboard/pull/7095) Start regular edge event process after sync completed;

## v3.4 (July 21, 2022)

Everything from [TB CE v3.4](/docs/reference/releases/#v34-july-19-2022) with the following improvements and bug fixes:

* [#6781](https://github.com/thingsboard/thingsboard/pull/6781) Edge OTA support;
* [#6852](https://github.com/thingsboard/thingsboard/pull/6852) Queue API support.

## v3.3.4.1 (May 2, 2022)

**Hot fix** release with the following bug fixes:
* Core:
    * Fix issue with duplicate system widget bundles that cause an error during widget loading on the dashboard [details](https://github.com/thingsboard/thingsboard-edge/issues/5)

## v3.3.4 (March 24, 2022)

Initial release.