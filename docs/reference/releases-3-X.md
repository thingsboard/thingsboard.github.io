---
layout: docwithnav
title: ThingsBoard Release Notes 3.X
description: ThingsBoard architecture

---

* TOC
{:toc}

## v3.2.1 (January 26, 2021)

### ThingsBoard CE

Minor release with the following improvements and bug fixes:

**Improvements:**

* UI: Improve UI load speed using lazy loading modules technique;
* UI: Optimize UI - switch to AOT compiler. Use JIT compiler for dynamic components (widgets + rule nodes configuration);
* UI: Introduce initial page loading spinner;
* UI: Preload of Material Icons font;
* UI: Added a new settings "Open in a new browser tab" in the widget action "Navigate to other dashboard";
* UI: Add ability to open dashboard state in separate dialog;
* Device Profile UI: Fetch existing entity keys in alarm rules filters;
* UI: Added translation for API usage dashboard;
* UI: Added support translation on widget title and widget title tooltip;
* UI: Added Slovenian translation;
* UI: Update Korean translation;
* UI: Update Czech translation;
* UI: Update Chinese translation;
* Added Cassandra timeseries partitions cache;
* Added authentication methods (Basic and Certificate) for REST API call node;
* Added ability to return arrays in transformation script node;
* Log 'Timeseries Updated' event to audit log and populate it into rule chain;
* Improved logging of Rule Node Errors;
* Updated kafka to version 2.6.0 and improved kafka settings;
* Update docker compose configurations to use PostgreSQL version 12;
* Change AWS SMS type from Promotional to Transactional;
* Introduce configurable maximum length of debug event symbols;
* Improve audit log service - use JacksonUtil instead of ObjectMapper;

**Bug fixes:**

* UI: Improve load performance of device profile details;
* UI: Fixed update of device profile after devices bulk import;
* UI: Fix trip animation widget for multiple devices;
* UI: Fixed map polygons;
* UI: Fixed first init webcamera in iOS device;
* UI: Fixed updated marker tooltip function in map widgets;
* UI: Trip animation widget: fixed speed change handling;
* UI: Fixed Safari browser issues;
* UI: Skip user reload when refreshing JWT token during initial user load;
* UI: Fixed admin widget action order in dialog;
* UI: Fixed custom action (with HTML) template action order in dialog;
* UI: Hide flot tooltip on chart destroying, prevent showing tooltip on flot hover, if edit mode is on;
* UI: Device wizard: Rollback(delete) device when failed to save device credentials;
* UI: Fixed reset password form - add email validation to prevent html injections;
* MQTT transport: added # filter topic handling;
* MQTT transport: fix handling of cleanSession flag;
* Fixed processing of lastActivityTime for devices created by gateway. Introduce "Overwrite last activity" parameter for gateway;
* Kafka queue: removed ServiceId from kafka consumer groupId;
* Fixed timeouts in device profile rule node;
* Add processing of alarm acknowledgment by device profile rule node;
* Rule Engine: fixed Message copy for 2 or more relations;
* Fixed audit logs for device profile;
* Fixed cycle API usage state update;
* Fixed NPE - skip usage state messages for deleted tenants;

### ThingsBoard PE

Everything from [TB CE v3.2.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.2.1) with the following improvements.

Main features:

* Google Cloud Pub/Sub integration;
* ChirpStack integration;
* Send "Owner changed" event to rule engine and audit log;
* UI: Optimized load of ExcelJS module;

Bug Fixes:

* Fixed "aggregate stream" rule node;
* Fixed shutdown of AWS SQS integration;
* Fxed double uplink converting in tcp integration;
* Remote integrations: changed parameter "PRC_HOST" to "RPC_HOST";
* UI: Fixed - do not delete integration parameter when value is single space;
* UI: Fixed copy integration parameters in chrome browser;
* UI: Fixed integration and converter view;

## v3.2 (December 1, 2020)

### ThingsBoard CE

The goal of this release is to simplify provisioning and connecting the devices and configuration of the alarms. 
We have also added features to track tenant API usage.  

**Major Improvements:**

 * [Tenant Profiles](/docs/user-guide/tenant-profiles/) to manage API and Rate Limits;
 * [Device Profiles](/docs/user-guide/device-profiles/) to configure default rule chain and queue, set transport configuration and define [Alarm Rules](/docs/user-guide/device-profiles/#alarm-rules);
 * Added support of custom [MQTT Topics](/docs/user-guide/device-profiles/#mqtt-device-topic-filters) and basic [MQTT credentials](/docs/user-guide/basic-mqtt/) as alternative to access token;
 * Added support of custom device payload schema using [protocol buffers](/docs/user-guide/device-profiles/#mqtt-device-payload) for MQTT transport;
 * [Device provisioning](/docs/user-guide/device-provisioning/) is now available via device profiles;
 * [SMS Provider](/docs/user-guide/ui/sms-provider-settings) and [Send SMS](/docs/user-guide/rule-engine-2-0/external-nodes/#send-sms-node) rule node;
 * UI for [OAuth2](/docs/user-guide/oauth-2-support/) settings.
 
**Minor Improvements:**

 * Added [Api Usage](/docs/user-guide/tenant-profiles/#api-usage-dashboard) dashboard;
 * Added "orderBy" request parameter for telemetry controller;
 * Added queueName to enqueueForTellNext in TbSendRPCRequestNode;
 * Added protection from the circular reference across different rule chains; 
 * Added new language Brazilian Portuguese;
 * Improvements to camera and alarm widgets, legend sort;
 * Added support of min/max values in multiple attributes input widget;
 * UI performance improvements;

 **Bug fixes:**

 * Cover all markers to fit bounds by default even when fit bounds marker is disabled in the map widget;

### ThingsBoard PE

Everything from [TB CE v3.2](https://github.com/thingsboard/thingsboard/releases/tag/v3.2) with the following improvements.

Main features:

 * LORIOT integration;
 * RabbitMQ integration;
 * Simplified Alarm Search Query;
 * Api usage stats collection for Integrations;

Bug Fixes:

 * Critical bug fix for alarm search query when sorting by entity key;
 * Show correct time for device profiles scheduler preview; 
 * Added proxy for reCaptcha.

## v3.1.1 (August 28, 2020)

### ThingsBoard CE

Minor bug fix release:

**Improvements:**

 * Performance improvement for Alarm related SQL queries;
 * UI: Upgrade Angular framework version to 10;
 * UI: Switch to yarn package-manager;
 * UI: Update Italian locale;
 * UI: Improved modules loading;
 * UI: Introduced common modules map;

 **Bug fixes:**

 * UI: Fixed error tslint for map widget;
 * UI: Fixed update position new marker/polygon on resize in image-map;
 * UI: Fixed call action: polygon click;
 * UI: Fixed clear state params for dashboardId change;
 * Various fixed of filtering queues;

### ThingsBoard PE

Everything from [TB CE v3.1.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.1.1) with the following improvements.

Main features:

* Created Apache Pulsar integration;
* Added lifecycle event "UPDATE" for converter;

Bug Fixes:

* UI: Limit Aggregation Time Unit;
* Fixed query in case generic is not set and entity group ids is present;
* Fixed entity data query - replace bool_or with max;
* Fixed search by type for user entities query;
* Fixed for text search in entity selection;
* Fixed Tenant User queries with a combination of generic and group permissions;
* Removed PostgreSQL from tb-pe image;
* Remote integration API: Force disconnect on connection error;

## v3.1 (August 12, 2020)

### ThingsBoard CE

Minor release with the following improvements and bug fixes.

**Main features:**

 * Filters over entity fields, attributes and latest telemetry; 
 * Alarm widget improvements;
 * Performance improvements to insets in PostgreSQL;
 * Ability to store the latest values in SQL instead of NoSQL;

**Additional features:**

 * UI: 
   * External angular modules for widget development;
   * Support of the files with .txt extensions in bulk import of entities;
   * Flot: add ability to use attributes in datakeys labels;
   * Maps cluster mode optimizations;
   * Add ability to edit polygons on image map;
   * New alias entity types: Current User and Current User Owner (Tenant or Customer);
 * Rule Engine: 
   * Improved logging of failed and timeout messages;
   * Azure iot hub rule node;
   * Open rule chain from rule node link;
   * Clear alarm node now accepts alarm id as an originator;
   * Log time to acknowledge message;
   * Display sorted metadata keys in rule nodes;
 * REST API: Ability to move device to another tenant;
 * Enable default credential provider chain for aws sqs;
 * Added logging of MQTT payload errors;
 * Added support of Confluent cloud;

**Bug fixes:**

 * UI: 
   * Fixed show polygon on image map widget;
   * Fix page link without pagination. Minor fixes;
   * Fix boolean input widgets;
   * Fix web camera input widget;

### ThingsBoard PE

Everything from [TB CE v3.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.1) with the following improvements.

Main features:

* Performance improvements for majority of REST API calls;
* Azure IoT Hub integration;
* The Things Industries integration;

## v3.0.1 (June 9, 2020)

### ThingsBoard CE

Minor release with everything from 3.0/2.5.2 plus the following improvements.

**Improvements:**

 * Improved database migration - create indexes after inserts;
 * Improved rpc error handling;
 * Moved component tb-contact to shared module;
 * Updated Czech translation;

**Bug fixes:**

 * UI: Dashboard page fixes and improvements;
 * UI: Fix map tooltip actions;
 * UI: Input maps fixed: error create the first marker;
 * UI: Fix image map initialization;
 * UI: Fix state chart subscription;
 * Set correct cassandra datacenter;

### ThingsBoard PE

Everything from [TB CE v3.0.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.0.1) with the following improvements.

**Bug fixes:**

 * UI: Fix null value during export into csv.

## v3.0 (June 1, 2020)

### ThingsBoard CE

Major release with everything from 2.5 plus the following improvements.

**Main features:**

 * AngularJS 1.5.8 -> Angular 9 migration for entire UI;
 * Force SQL DB usage to store entities;

**Additional features:**

 * Improved pagination and filtering;
 * Improved and refactored Map widgets;
 * Improved tool-tips for widget development;
 * Cassandra driver updated to 4.x;
 * Dramatically reduced number of REST API calls generated by UI;
 * Replaced Velocity with Freemarker.

### ThingsBoard PE

Everything from [TB CE v3.0](https://github.com/thingsboard/thingsboard/releases/tag/v3.0) with the following improvements.

**Main features:**

 * Advanced CSS for White-labeling;

**Additional features:**

 * No more "Fetch more" button;
 * SQL native filtering and pagination in entity groups;