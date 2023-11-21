---
layout: docwithnav-pe-edge
title: Edge Release Notes
description: ThingsBoard Edge Release Notes

---

* TOC
{:toc}

## v3.6.0 (Sep 22, 2023) {#v36}

**Major** release with everything from [TB Edge v3.6](/docs/edge/releases/#v36) and [TB PE v3.6](/docs/pe/reference/releases/#v36).

## v3.5.1.1 (Jul 4, 2023) {#v3511}

**Hotfix** release to fix incorrect update of sequential id offset:

* [#57](https://github.com/thingsboard/thingsboard-edge/issues/57) ThingsBoard Edge PE disconnects from cloud;
* [#60](https://github.com/thingsboard/thingsboard-edge/issues/60) edge error log;

## v3.5.1 (Jun 1, 2023) {#v351}

**Minor** release with everything from [TB Edge v3.5.1](/docs/edge/releases/#v351) and [TB PE v3.5.1](/docs/pe/reference/releases/#v351).

## v3.5.0 (May 10, 2023) {#v35}

**Major** release with everything from [TB Edge v3.5](/docs/edge/releases/#v35) and [TB PE v3.5](/docs/pe/reference/releases/#v35) with the following improvements and bug fixes:

* Edge computing support for solution templates;

## v3.4.3 (December 22, 2022)

**Minor** release with everything from [TB Edge v3.4.3](/docs/edge/releases/#v343-december-22-2022) and [TB PE v3.4.3](/docs/pe/reference/releases/#v343-december-21-2022) with the following improvements and bug fixes:

* Customers Hierarchy Support (partial support - only direct parents for the edge owner);
* Real-time sync WhiteLabeling, LoginWhiteLabeling and CustomTranslation to edge;
* Fixed NPE during sync process in case edge owner is customer;
* Integration/Converter/Role constructors - fixed null pointer exception in case additional info is null;

## v3.4.1 (August 19, 2022)

**Minor** release with everything from [TB Edge v3.4.1](/docs/edge/releases/#v341-august-19-2022) and [TB PE v3.4.1](/docs/pe/reference/releases/#v341-august-18-2022) with the following improvements and bug fixes:

* Fixed startup issues and connection leaks in OPC-UA integration;

## v3.4 (July 21, 2022)

Everything from [TB Edge v3.4](/docs/edge/releases/#v34-july-21-2022) and [TB PE v3.4](/docs/pe/reference/releases/#v34-july-19-2022) with the following improvements and bug fixes.

* Integrations and converters support.

## v3.3.4.1 (May 2, 2022)

**Hot fix** release with the following bug fixes:
* Core:
    * Fix issue with duplicate system widget bundles that cause an error during widget loading on the dashboard [details](https://github.com/thingsboard/thingsboard-edge/issues/5)

## v3.3.4 (March 24, 2022)

Minor release with the following improvements and bug fixes:

**Improvements**:
* Supports the latest features of 3.3.4.1 releases
   * CE [3.3.4.1 release notes](https://thingsboard.io/docs/reference/releases/#v3341-march-22-2022)
   * PE [3.3.4.1 release notes](https://thingsboard.io/docs/pe/reference/releases/#v3341-march-18-2022)
* Fixed issue with incorrect license check in case of slow or limited internet connectivity

## v3.3.3 (January 28, 2022)

Minor release with the following improvements and bug fixes:

**Improvements**:
 * Supports the latest features of 3.3.3 releases
   * CE [3.3.3 release notes](https://thingsboard.io/docs/reference/releases/#v333-january-27-2022)
   * PE [3.3.3 release notes](https://thingsboard.io/docs/pe/reference/releases/#v333-january-27-2022)
 * Edge uses login white labeling configuration of the owner on the cloud, and not the system

**Bug fixes**:
 * Fix duplicate attribute requests from edge to cloud
 * Fix incorrect display of deployed messages
 * Fix exception if edge customer owner has ALL resource
 * Fix error of processing relation if no entity available on edge
 * Fix oneway/twoway RPC calls from cloud to edge

## v3.3 (August 17, 2021)

Initial release.