---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v3.6.3
* Notification system: notification push on mobile;
* Custom translation;
* Mobile image gallery caching;
* Redesign and improve switch control widget;
* Redesign Digital gauge (Basic settings);
* Design Navigation state buttons.

### v3.7
* Migration to JDK 17;
* Redesign Rule nodes:
  * Add visualization if Node has error;
  * Add new navigation on Rule node;
  * Add new grid type;
  * Add new option to export rule chain;
* Global entities Search;
* Notification widget;
* Alarm rules:
  * refactoring to separate entity;
  * simplified configuration;
  * support of more complex conditions;
*  "Housekeeping” service to improve handling of long-running maintenance and administration tasks;
*  Separate entity to store queue statistics;
*  Optimization of the attributes table;

See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/{{ site.release.branch_major_next }}) and work on latest release bug fixes [here](https://github.com/thingsboard/thingsboard/tree/master).

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
* Single sign on;