---
layout: docwithnav-mqtt-broker
title: TBMQ Release Notes
description: TBMQ Releases

---

* TOC
{:toc}

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
