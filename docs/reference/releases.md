---
layout: docwithnav
title: ThingsBoard Release Notes 3.X
description: ThingsBoard architecture

---

* TOC
{:toc}

## v3.2.2 (March 24, 2021)

### ThingsBoard CE

Minor release with the following improvements and bug fixes:

**Major Improvements:**

* Migration to JDK 11;
* Rule Engine:
    * Added ["calculate delta"](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#calculate-delta) rule node;
    * Added "current customer" and "current tenant" dynamic source types to DeviceProfile key filter. See examples [6](/docs/user-guide/device-profiles/#example-6-advanced-thresholds) and [7](/docs/user-guide/device-profiles/#example-7-dynamic-thresholds-based-on-the-tenant-or-customer-attributes);
    * Added kafka consumer-groups statistics. See rule engine [troubleshooting](/docs/user-guide/rule-engine-2-0/overview/#troubleshooting) for more info;
    * Attributes cache. See [Performance enhancement](/docs/user-guide/attributes/#performance-enhancement);
* UI:
    * Added ["Entity Count"](/docs/user-guide/dashboards/#2-widget-data-source-types) datasource for widgets;
    * Added "Entity Type" alias. See usage in the "Entity count data source" example [here](/docs/user-guide/dashboards/#2-widget-data-source-types);
    * Added support of common intervals and time zones to the [time window](/docs/user-guide/dashboards/#time-window) selector;
    * Ability to set up a home dashboard for users instead of default "Home" view;
    * Improved ["add widget"](/docs/user-guide/dashboards/#adding-widget-to-the-dashboard) dialog. Added description and preview images for widgets and widget bundles;
    * Added column visibility and [row style](/docs/user-guide/ui/entity-table-widget/#6-row-style-function) functions for table widgets;
    * UI: Improved dashboard load performance by optimizing widget header template.
* Transport:
    * Support of [Protobuf](/docs/user-guide/device-profiles/#coap-device-type-default) for CoAP transport;
    * Support of [Efento](/docs/user-guide/device-profiles/#coap-device-type-efento-nb-iot) devices for CoAP transport;

**Improvements:**

* Core:
    * Added usage statistics configuration to yml file;
    * Added support Phone Number's SID or Messaging Service SID for Twilio SMS provider;
    * Add HTTP cookie repository to store oauth2 authorization requests;
    * Added support for RSA encrypted keys in PEM client credentials;
    * Fix DAO layer to save the newest record with the same timestamp. Enabled updates for old time-series data.
    * Updated version of dependencies to fix vulnerabilities;
* Rule Engine:
    * Added ability to use the pattern to substitute variables from data in rule nodes;
    * Constant filters for device profile;
    * Process alarm rules on activity and inactivity events;
    * Push entity created event to the device profile rule chain and corresponding queue;
    * Added ability to get customer details by the user in the 'customer details' rule node;
    * Script rule node supports split of the incoming message to multiple outcoming messages;
* Transport:
    * Added support of BigDecimal to the JsonConverter;
    * Use msg queue from device profile instead of default;
* UI:
    * Improved load and update time in the time series table;
    * Improved alarm tabs in the entity details: default time interval 30 days;
    * Dynamic color point in trip-animation widget;
    * First/Last page-buttons to the tables-paginator;
    * New setting for subscription - reloadOnlyOnDataUpdated;
    * Replaced deprecated PortalInjector;
    * Added entity info for single-entity aliases even if no alarms to display;
    * Added the ability to get the value of a key that contains dots in the name to table widgets;
    * Fix enable/disable user buttons while the user is not activated yet;
    * Added entity names to dialog headers in rule node and widget dialogs;
    * Updated Czech translation;
    * Updated Spanish translation;
    * Login form password visibility;
* Build scripts:
    * Update deb/rpm packages java dep versions. Update JVM options.
    * Added subject alternative names into key generation tool;
    * Refactoring of migration tool for new Thingsboard DB structure;

**Bug fixes:**

* Core:
    * Fixed race condition in the partition change events;
    * Fixed memory leak in entity data subscription service;
    * Fix TTL telemetry cleanup function for PostgreSQL;
    * Added ping for WS sessions to avoid session close due to inactivity;
    * Fixed creating partitions in PostgreSQL for stale telemetry which partition was already removed according to TTL;
    * Removed redundant queries for the latest values subscriptions;
    * Allow Customer to edit assigned entities;
    * Fixed default values for claiming queue and duration;
    * Fixed API call to get highest alarm severity.
* Rule Engine:
    * Fixed NPE in Rest API Call rule node;
    * Device profile node now uses message timestamp as alarm startTs instead of current time;
    * Memory leak fix for cases when actors fail to initialize or stopped;
    * Fixed TbKafkaNode. Configure directly serializer class for key/values instead of string class name;
    * Handle case when device was removed from DB but message in the queue;
    * Fixed unlimited error messages in TbMsgGeneratorNode;
    * Fixed SAS credentials in IoT hub node;
    * Added lock to avoid 'No such function invoke InternalXXX' exception for embedded JS execution;
    * Fixed outdated data in cleared alarm event;
* UI:
    * Show correct milliseconds value in the table widget;
    * Fixed display of widget action dialog in Safari browser;
    * Fixed fullscreen button in the JS/JSON editor;
    * Added validation of the obtained value from the cell style function;
    * Make file input work properly when there are multiple on page;
    * Removed creationTime corruption during widget update;
    * Validate EntityId before update dashboard state;
    * Fixed text search for queries with reserved characters;
    * Fixed filter preview text at boolean type in alarm rule;
    * Fixed time-series bars tooltip;
    * Fixed widget data keys autocomplete after change data source type;
    * Fixed time-series widget (invoke data updated callback from data aggregator on initial data). Improve widget selector.
    * Fixed entity select component for the current customer;
    * Fixed error on login in assigned default dashboard was deleted;
    * Notify all core services when device is updated;
* Build scripts:
    * Fixed PostgreSQL distribution config in docker files;
    * Update Cassandra to 4.0 in docker files for "tb-cassandra" image;
* Rest client:
    * Fix of incorrect url for getTenantProfiles call;

### ThingsBoard PE

Everything from [TB CE v3.2.2](https://github.com/thingsboard/thingsboard/releases/tag/v3.2.2) with the following improvements.

Main features:

* Update custom menu: Introduce dashboardId parameter to embed dashboard instead of using iframe;
* Azure Event Hub Integration is updated to use new SDK;
* Added new version of ["Alarms Count Node"](/docs/user-guide/rule-engine-2-0/pe/analytics-nodes/#alarms-count-node).
* Added "Duplicate to group entities by group name" rule node;
* Added ability to aggregate data on each message in the "Aggregate stream node".
* Add ability to aggregate data weekly from Sunday to Saturday in the "Aggregate stream node".
* Extend column export parameters in entities and alarms table for CSV export;
* Improvements to scheduler and integration services in cluster mode;

Bug Fixes:

* Security improvement: Customer can't see Tenant attributes using Entity Query API;
* Fixed Customer Changes Owner from Sub-Customer to Customer;
* Sigfox integration fix;
* Fixed validation of Kafka integration configuration;
* Fixed downlink for TCP/UDP integrations;
* Fixed SAS credentials in IoT hub node;
* Skip recursive tag scan for OPC-UA Integration. Added explicit disconnect at the end of the scan;
* Can't change the role type (Generic vs Group) if it is already used;
* Fix tb-web-report docker image;
* UI: Fixed validation of credentials in the LORIOT integration;
* UI: Fix entities by group name alias - do not set owner id when groupStateEntity is disabled;

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