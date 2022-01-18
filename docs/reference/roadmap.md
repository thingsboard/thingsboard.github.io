---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v3.3.3

* Nested Rule Chains;
  Add ability to reuse rule chain as a logical unit in another rule chain.
  At the moment, user may forward the message to other rule chain, but there is not way to process the output.
  We plan to add special "output" rule node which will allow to return the result of processing to outer rule chain.
  Multiple "output" rule nodes will be supported.
* Migration to Angular 12;
* Separate pages for entity details. This is a basis for numerous UX improvements:
    * open device profile details from device details;
    * open related entity from the "relations" tab, etc;
* Improve UI navigation by persisting page link in the URL;
* Migration of docs and docker compose scripts to use Cassandra 4;
* Fix windows installation;

### v3.4

* Synchronization with Git version control.
  Ability to push dashboards, rule chains and other tenant entities into git.
  Ability to restore a specific version of the entities from git.
* Diagnostics system.
  Automatically detect issues in the system configuration and notify the tenant administrator.
  For example, wrong script in the rule node or issues with external systems: sending emails, sms, etc.
* Notification system.
  New UI elements to display notifications about alarms, system events, etc on the main page.
  Ability to acknowledge the notification.
  Simplified delivery of notifications about alarms via email, sms, etc.
  Support of push notifications to mobile apps.
* Two-factor authentication.
* Migration to JDK 17. Includes migration of JS executors to gRPC;
* Rule Engine Queue configuration management using Web UI;
* Numerous usability improvements;
* New widgets and rule nodes;

See active development in progress [here](https://github.com/thingsboard/thingsboard/) for more info.

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
* Single sign on;
