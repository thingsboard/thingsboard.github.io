---
layout: docwithnav-pe-edge
title: Edge Release Notes
description: ThingsBoard Edge Release Notes

---

* TOC
{:toc}

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