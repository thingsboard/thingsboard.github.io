---
layout: docwithnav-mqtt-broker
title: TBMQ Release Notes
description: TBMQ Releases

---

* TOC
{:toc}

## v2.0.0 (October 29, 2024)

Major release with the following features, improvements, and bug fixes.

**Main features:**

* [#142](https://github.com/thingsboard/tbmq/pull/142) **Core**: Migrated Device persistent storage from PostgreSQL to Redis;
* [#149](https://github.com/thingsboard/tbmq/pull/149) **Core**: MQTT 5: Subscription Identifier;
* [#158](https://github.com/thingsboard/tbmq/pull/158) **Core**: MQTT 5: Enhanced authentication;
* [#139](https://github.com/thingsboard/tbmq/pull/139) **Core & UI**: Client session details: added MQTT client credentials that authenticated the client;
* [#139](https://github.com/thingsboard/tbmq/pull/139) **Core & UI**: Client session details: added client MQTT version info;
* [#151](https://github.com/thingsboard/tbmq/pull/151) **UI**: Getting started page;
* [#152](https://github.com/thingsboard/tbmq/pull/152) **Core**: Added PostgreSQL table to persist latest key-value pairs;
* [#154](https://github.com/thingsboard/tbmq/pull/154) **Core & UI**: Advanced client session metrics;
* [#157](https://github.com/thingsboard/tbmq/pull/157) **Core & UI**: Unauthorized clients;
* [#159](https://github.com/thingsboard/tbmq/pull/159) **Core & UI**: Added subscriptions page to display all broker subscriptions;
* [#168](https://github.com/thingsboard/tbmq/pull/168) **Core & UI**: Retained messages added advanced filter.

**Improvements:**

* Core and install scripts:

  * [#164](https://github.com/thingsboard/tbmq/pull/164) MQTT publish ordered processing performance improvement;
  * [#165](https://github.com/thingsboard/tbmq/pull/165) Updated default parameters and added write-and-flush option control for persistent Device clients;
  * [#166](https://github.com/thingsboard/tbmq/pull/166) Client sessions filter improvement: added search filter by client IP, and enhanced filtering by subscriptions number;
  * [#167](https://github.com/thingsboard/tbmq/pull/167) MQTT client credentials filter improvement: added search filters by client ID, username, and certificate common name;
  * [#169](https://github.com/thingsboard/tbmq/pull/169) TBMQ's latest version available logic moved from frontend to backend, works in a scheduled fashion to prevent rate limiting;
  * [#170](https://github.com/thingsboard/tbmq/pull/170) Library versions update and vulnerabilities fixes;
  * [#149](https://github.com/thingsboard/tbmq/pull/149) MQTT client subscriptions management improvement: admins can update shared subscriptions and MQTT 5 subscription options;
  * Performance improvement of get all client sessions, subscriptions, and retained messages queries;
  * Added backup and restore guides for PostgreSQL.

* UI:
  * [#147](https://github.com/thingsboard/tbmq/pull/147) Added Subscription Identifier feature parameters;
  * [#158](https://github.com/thingsboard/tbmq/pull/158) MQTT client credentials: added enhanced authentication (SCRAM) credentials;
  * [#155](https://github.com/thingsboard/tbmq/pull/155) Added entity details page;
  * [#166](https://github.com/thingsboard/tbmq/pull/166) Client sessions filter improvement: added search filter for client IP, and enhanced filtering by subscriptions number;
  * [#167](https://github.com/thingsboard/tbmq/pull/167) MQTT client credentials filter improvement: added search filters by client ID, username, and certificate common name;
  * Check connectivity: added topic generation based on authorization rule regex pattern;
  * WebSocket client page: added pagination, control of maximum messages limit, improved topic validation.

**Bug fixes:**

* Core:

  * [#172](https://github.com/thingsboard/tbmq/pull/172) Allow edit system WebSocket MQTT client credentials;
  * Do not allow to publish message with topic starting with "$".

* UI:

  * MQTT client credentials: fixed authorization rule editing;
  * Fixed HTTP request URL encoding;
  * Fixed table sorting.

## v1.4.0 (August 19, 2024)

Minor release with the following features, improvements, and bug fixes.

**Main features:**

* [#118](https://github.com/thingsboard/tbmq/pull/118) Extended X.509 Certificate Chain authentication based on CN regex;
* [#121](https://github.com/thingsboard/tbmq/pull/121) Added feature to limit the count of Application clients;
* [#128](https://github.com/thingsboard/tbmq/pull/128) Added Device persisted messages rate limits;
* [#132](https://github.com/thingsboard/tbmq/pull/132) Added rate limits for total incoming and outgoing messages per broker cluster;
* [#144](https://github.com/thingsboard/tbmq/pull/144) New historical data for network traffic metric.

**Improvements:**

* Core and install scripts:

  * [#119](https://github.com/thingsboard/tbmq/pull/119) Client sessions limit by using cache;
  * [#125](https://github.com/thingsboard/tbmq/pull/125) Major versions update and vulnerabilities fixes;
  * [#134](https://github.com/thingsboard/tbmq/pull/134) Added possibility to set Kafka prefix for all topics, producers, consumers, and consumer groups;
  * [#135](https://github.com/thingsboard/tbmq/pull/135) Added possibility to set cache prefix for all keys;
  * [#143](https://github.com/thingsboard/tbmq/pull/143) Improvements to the upgrade script logic.

* UI:
  * [#130](https://github.com/thingsboard/tbmq/pull/130) Update UI dependencies versions;
  * [#146](https://github.com/thingsboard/tbmq/pull/146) Monitoring: added network traffic chart;
  * [#137](https://github.com/thingsboard/tbmq/pull/137) Updates:
    * Settings: added Connectivity, Security and General settings;
    * Profile page: renamed to Account, added Security page with password configuration;
    * Websocket client: added control over client activity logging in browser console;
    * Websocket client: added Reset button in Publish properties dialog;
    * Websocket connection: in add/edit dialogs added https/ws incompatibility warning;
    * Home: updated Version card when no updates are available;
    * Corrected browser tab titles;
    * Basic client credentials: moved Change Password button to the top of details panel.

**Bug fixes:**

* Core:

  * [#123](https://github.com/thingsboard/tbmq/pull/123) NPE fix for get all shared subscriptions;
  * [#124](https://github.com/thingsboard/tbmq/pull/124) Fix for subscription matching and message forwarding to subscribers;
  * [#131](https://github.com/thingsboard/tbmq/pull/131) Fix for packet id sequence for publish messages.

* UI:

  * [#137](https://github.com/thingsboard/tbmq/pull/137) Fixes:
    * Client credentials: fixed issue with non-clickable button in disabled mode;
    * Websocket Client: fixed broken help link.

**Important notice:**

If you have previously overridden the default value of `JWT_TOKEN_SIGNING_KEY` in your configuration, 
please be advised that you must now update your custom JWT token signing key to ensure it is at least 512 bits in length.
Failure to comply with this update may result in authentication issues.

Example of the value: _Qk1xUnloZ0VQTlF1VlNJQXZ4cWhiNWt1cVd1ZzQ5cWpENUhMSHlaYmZIM0JrZ2pPTVlhQ3N1Z0ZMUnd0SDBieg==_.

## v1.3.0 (April 3, 2024)

Minor release with the following features, improvements, and bug fixes.

**Main features:**

* [#94](https://github.com/thingsboard/tbmq/pull/94) MQTT 5: Request-Response Pattern;
* [#98](https://github.com/thingsboard/tbmq/pull/98) MQTT 5: Flow Control;
* [#101](https://github.com/thingsboard/tbmq/pull/101) UI: WebSocket client page; WebSocket connections and subscriptions entities support in Postgres.

**Improvements:**

* Core and install scripts:

  * [#104](https://github.com/thingsboard/tbmq/pull/104) TLS Cipher suites control - allows to set desired cipher suites usage;
  * [#109](https://github.com/thingsboard/tbmq/pull/109) Backpressure improvements;
  * [#110](https://github.com/thingsboard/tbmq/pull/110) Disconnect client command now includes Reason Codes to correctly specify the reason of the disconnection;
  * [#111](https://github.com/thingsboard/tbmq/pull/111) MQTT over WebSockets installation scripts update for correct WebSocket client usage;
  * Added system WebSocket MQTT client credentials;
  * Application persistent and Application Shared Subscriptions clients workflow improvement by leveraging cached thread pool;
  * Non-blocking deletion of old Kafka consumer groups on broker startup;
  * Memory usage and performance improvements.

**Bug fixes:**

* Core:

  * [#106](https://github.com/thingsboard/tbmq/pull/106) Fix for direct memory leak;
  * [#107](https://github.com/thingsboard/tbmq/pull/107) Fix for unauthorized delivery of Last Will message;
  * [#94](https://github.com/thingsboard/tbmq/pull/94) Fixed Maximum Packet Size response to MQTT 5 client depending on the listener chosen;
  * Fixed NPE that can happen on broker startup during historical statistics calculation;
  * Disabled Redis autoconfiguration in case of Caffeine cache usage to prevent trying to connect to Redis instance on broker startup;
  * Dependency vulnerabilities;
  * User password containing only whitespaces bugfix.

* UI:

  * [#108](https://github.com/thingsboard/tbmq/pull/108) Fix for issue during Retained message deletion that contains special characters;
  * Resolved an issue with hidden fields in edit mode for MQTT client credentials details of the type "X.509 Certificate Chain".

**Obsolete environment variables:**

* TB_APP_PERSISTED_MSG_THREADS_COUNT;
* TB_APP_PERSISTED_MSG_SHARED_SUBS_THREADS_COUNT.

These environment variables can be safely removed due to automatic scaling of threads based on the number of Application clients being added or removed.

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
  * Time series controller API calls improved validation;
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
