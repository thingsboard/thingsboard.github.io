---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v3.5.2

* Simplified widget configuration;
* Dedicated dashboard for gateway management;  
* New card widget  
* Bugfixes;

### v3.6

* Migration to JDK 17.
* Alarm rules:
  * refactoring to separate entity;
  * simplified configuration;
  * support of more complex conditions;
* Notification system:
  Support of push notifications to mobile apps.
* Diagnostics system.
  Automatically detect issues in the system configuration and notify the tenant administrator.
  For example, wrong script in the rule node or issues with external systems: sending emails, sms, etc.
* Numerous usability improvements;
* New widgets and rule nodes;

See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/{{ site.release.branch_major_next }}) and work on latest release bug fixes [here](https://github.com/thingsboard/thingsboard/tree/master).

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
* Single sign on;
