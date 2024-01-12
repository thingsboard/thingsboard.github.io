---
layout: docwithnav-mqtt-broker
title: TBMQ Release Notes
description: TBMQ Releases

---

* TOC
{:toc}

## v1.2.1 (December 13, 2023)

Minor release with the following features and improvements.

**Main features:**

* [#84](https://github.com/thingsboard/tbmq/pull/84) MQTT 5: Payload format and Content types;
* [#86](https://github.com/thingsboard/tbmq/pull/86) Client sessions limits.

**Improvements:**

* Core and install scripts:

  * [#87](https://github.com/thingsboard/tbmq/pull/87) Installation scripts enhancements.

## v1.2.0 (November 21, 2023)

Minor release with the following features, improvements, and bug fixes.

**Main features:**

* [#73](https://github.com/thingsboard/tbmq/pull/73) Redis cache support;
* [#76](https://github.com/thingsboard/tbmq/pull/76) Client sessions advanced filtering;
* [#12aac735e7](https://github.com/thingsboard/tbmq/commit/12aac735e7) MQTT client credentials advanced filtering;
* [#80](https://github.com/thingsboard/tbmq/pull/80) Shared subscriptions management.

**Improvements:**

* Core:

  * [Performance improvements](/docs/mqtt-broker/reference/3m-throughput-single-node-performance-test/) for message processing. See:
  [#e0c66d3052](https://github.com/thingsboard/tbmq/commit/e0c66d3052), [#03409f7f18](https://github.com/thingsboard/tbmq/commit/03409f7f18), [#a1dd722deb](https://github.com/thingsboard/tbmq/commit/a1dd722deb), 
  [#3af40bb504](https://github.com/thingsboard/tbmq/commit/3af40bb504), [#55ff71bea8](https://github.com/thingsboard/tbmq/commit/55ff71bea8), 
  [#5f11148025](https://github.com/thingsboard/tbmq/commit/5f11148025), [#79db26751c](https://github.com/thingsboard/tbmq/commit/79db26751c) commits;
  * [#d437200ba1](https://github.com/thingsboard/tbmq/commit/d437200ba1) Added possibility to buffer messages before sending to subscribers;
  * [#a091e31963](https://github.com/thingsboard/tbmq/commit/a091e31963) Delete Kafka consumer group API.

* UI:

  * [#78](https://github.com/thingsboard/tbmq/pull/78) Migrate to Angular 15;
  * [#9231eaafc9](https://github.com/thingsboard/tbmq/commit/9231eaafc9) Added Kafka management pages;
  * [#25289016b5](https://github.com/thingsboard/tbmq/commit/25289016b5) Sidebar menu optimization;
  * [#7a685d5e00](https://github.com/thingsboard/tbmq/commit/7a685d5e00) Added option to disconnect/remove several client sessions;
  * [#ed1f9ffd39](https://github.com/thingsboard/tbmq/commit/ed1f9ffd39) Management of shared subscriptions;
  * [#06b881694f](https://github.com/thingsboard/tbmq/commit/06b881694f) Shared subscriptions advanced filtering;
  * [#6b1ee03d8d](https://github.com/thingsboard/tbmq/commit/6b1ee03d8d), [#7a685d5e00](https://github.com/thingsboard/tbmq/commit/7a685d5e00) Client sessions advanced filtering;
  * [#f229a35c5d](https://github.com/thingsboard/tbmq/commit/f229a35c5d), [#38532959f5](https://github.com/thingsboard/tbmq/commit/38532959f5) MQTT client credentials advanced filtering;
  * [#3334cb4666](https://github.com/thingsboard/tbmq/commit/3334cb4666), [#c42b8f3b63](https://github.com/thingsboard/tbmq/commit/c42b8f3b63) New form for client credentials creation;
  * [#7ba4996cbe](https://github.com/thingsboard/tbmq/commit/7ba4996cbe) Added filter buttons from Home page for sessions and client credentials;
  * [#971cdb8b27](https://github.com/thingsboard/tbmq/commit/971cdb8b27), [#9ff6a349d6](https://github.com/thingsboard/tbmq/commit/9ff6a349d6) Added check connectivity window after creation of client credentials;
  * [#702e98b673](https://github.com/thingsboard/tbmq/commit/702e98b673), [#f7efffbe42](https://github.com/thingsboard/tbmq/commit/f7efffbe42) Getting started guide on Home page updates;
  * [#7019da05ff](https://github.com/thingsboard/tbmq/commit/7019da05ff), [#340853add6](https://github.com/thingsboard/tbmq/commit/340853add6) Monitoring charts minor updates.

**Bug fixes:**

* Core:

  * [#70](https://github.com/thingsboard/tbmq/pull/70) Fixed shared subscriptions processing with QoS 0 ("AT_MOST_ONCE");
  * [#eae45b9781](https://github.com/thingsboard/tbmq/commit/eae45b9781) Start processing shared subscriptions for persistent clients without additional subscribe message;
  * [#0303a0e3f6](https://github.com/thingsboard/tbmq/commit/0303a0e3f6) Fixed issue for persistent clients and shared subscriptions: 
  Application - corrected qos change for existing subscription, Device - stop receiving stored messages twice on client connect if it sends subscribe.

* UI:

  * [#77](https://github.com/thingsboard/tbmq/pull/77) Fix user logout when changing password on Profile page on "Skip" button hit;
  * [#25108bf9db](https://github.com/thingsboard/tbmq/commit/25108bf9db) Fixed loading animation in Home page for inactive browser tab;
  * [#7901fedae9](https://github.com/thingsboard/tbmq/commit/7901fedae9), [#fe01288420](https://github.com/thingsboard/tbmq/commit/fe01288420) MQTT client credentials authorization topic rules bug fixes.

## v1.1.0 (September 12, 2023)

Minor release with the following features, improvements, and bug fixes.

**Main features:**

* [#53](https://github.com/thingsboard/tbmq/pull/53) MQTT over WebSockets;
* [#63](https://github.com/thingsboard/tbmq/pull/63) MQTT 5 message expiry;
* [#66](https://github.com/thingsboard/tbmq/pull/66) MQTT 5 topic alias;
* [#68](https://github.com/thingsboard/tbmq/pull/68) UI: New Home page.

**Improvements:**

* Core:
  
  * [#57](https://github.com/thingsboard/tbmq/pull/57) Additional validation for entities to protect from XSS;
  * Introduced a dedicated thread pool for Application shared subscriptions processing, corrected stats for the number of active shared subscriptions processors;
  * Time-series controller API calls improved validation;
  * MQTT client credentials and Application shared subscription entities search by 'contains'.

* UI:

  * Introduced responsive design for the Home page;
  * Extended config card on the Home page with parameters related to WebSocket listeners;
  * Sorting capabilities on the config card;
  * Possibility to view Kafka topics and Kafka consumer groups widgets in full-screen mode on the Home page;
  * Added last timestamps to charts on the Home page;
  * Added upgrade info and link to the version card on the Home page;
  * New quick links to the documentation on the Home page;
  * Option to skip changing the default password on the first user login;
  * Quality of Service level displayed with respective number.

**Bug fixes:**

* Core:

  * [#52](https://github.com/thingsboard/tbmq/pull/52) Spring CORS configuration issue;
  * Deny deletion of own sysadmin user by API.

* UI:
  
  * Fixed making multiple same fetch requests on Home page loading;
  * Tooltip display fix for graphs on the Monitoring page;
  * Full-screen issue on the Monitoring page.

## v1.0.1 (July 07, 2023)

Patch release with the following improvements and bug fixes.

**Improvements:**

* Installation:

  * Added script for easy installation and running of TBMQ in monolithic mode.

* UI:

  * Home page. Getting Started new procedure;
  * Home page. Tooltips improvements;
  * Home page. Kafka topics & Consumer Groups switching tabs animation correction;
  * Monitoring page. Chart legend interaction improvement;
  * MQTT client credentials form hint improvement;
  * New toast with default password info on User creation.

**Bug fixes:**

* Core:

  * [#41](https://github.com/thingsboard/tbmq/pull/41) Keep Alive value of 0 fix.

* UI:

  * Monitoring page. Sessions and Subscriptions graphs are not showing values in cluster mode.

## v1.0.0 (June 28, 2023)

Initial release. See [GitHub](https://github.com/thingsboard/tbmq#tbmq) for more info.
