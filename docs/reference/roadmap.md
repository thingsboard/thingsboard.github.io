---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v3.7

* Migration to JDK 17;
* Redesign the Custom translation;
* Redesign the Digital gauge to simplify configuration;
* Housekeeping service to improve handling of long-running maintenance and administration tasks;
* Optimization of the attributes table;
* Separate entity to store queue statistics;

### v3.8

* Mobile application configuration;
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

See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/{{ site.release.branch_major_next }}) and work on latest release bug fixes [here](https://github.com/thingsboard/thingsboard/tree/master).

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
* Single sign on;