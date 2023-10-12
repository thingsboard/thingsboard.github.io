---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v3.6.1

* New set of widgets: 
  * Liquid level (Tank level); 
  * Wind speed and direction;
  * New Doughnut;
  * Signal level;
  * RPC switch;
  * Progress bar;
  * Notification;
* Improvement to "add widget" page.
* Bugfixes;

### v3.7

* Migration to JDK 17.
* Alarm rules:
  * refactoring to separate entity;
  * simplified configuration;
  * support of more complex conditions;
* Notification system:
  Support of push notifications to mobile apps.
* "Housekeeping" service to improve handling of long-running maintenance and administration tasks;
* Optimization of the attributes table;
* Separate entity to store queue statistics;
* New widgets and rule nodes;

See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/{{ site.release.branch_major_next }}) and work on latest release bug fixes [here](https://github.com/thingsboard/thingsboard/tree/master).

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
* Single sign on;
