---
layout: docwithnav-edge
title: Edge Release Notes
description: ThingsBoard Edge Release Notes

---

* TOC
{:toc}

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