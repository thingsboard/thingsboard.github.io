---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v3.5

* Upgrade to Angular 14;
* Significant UI/UX improvements: new menu, home screen, etc. 
* Notification system.
  New UI elements to display notifications about alarms, system events, etc on the main page.
  Ability to acknowledge the notification.
  Simplified delivery of notifications about alarms via email, sms, etc.
  Support of push notifications to mobile apps.
* Ability to add comments to the alarms; Automatic comments on state/severity change. Manual comments by users;   
* Alarm assignment to users;
* Refactoring of alarm rules and some new features in alarm rules;  
* Numerous usability improvements;
* New widgets and rule nodes;

### v3.6

* Migration to JDK 17.
* Diagnostics system.
  Automatically detect issues in the system configuration and notify the tenant administrator.
  For example, wrong script in the rule node or issues with external systems: sending emails, sms, etc.


See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/{{ site.release.branch_major_next }}) and work on latest release bug fixes [here](https://github.com/thingsboard/thingsboard/tree/master).

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
* Single sign on;
