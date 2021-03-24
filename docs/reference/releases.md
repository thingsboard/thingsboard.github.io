---
layout: docwithnav
title: ThingsBoard Release Notes
description: ThingsBoard architecture

---

* TOC
{:toc}

## v3.2.2 (March 24, 2021)

### ThingsBoard CE

Minor release with the following improvements and bug fixes:

**Major Improvements  (TODO: links):**

* Migration to JDK 11;
* Rule Engine:
    * Added "calculate delta" rule node;
    * Added current customer and current tenant dynamic source types to DeviceProfile key filter;
    * Added kafka consumer-groups statistics;
    * Attributes cache;
* UI:
    * Added "Entity Count" datasource for widgets;
    * Added "Entity Type" alias;
    * Added support of common intervals and time zones to the time window selector;
    * Ability to set up a home dashboard for users instead of default "Home" view;
    * Improved "add widget" dialog. Added description and preview images for widgets and widget bundles;
    * Added column visibility and row style functions for table widgets;
* Transport:
    * Support of Protobuf for CoAP transport;
    * Support of Efento devices for CoAP transport;

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

* TODO

Bug Fixes:

* TODO

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

## v2.5.6 (January 26, 2021)

### ThingsBoard CE

**Improvements:**

* Added Cassandra timeseries partitions cache;
* Improve audit log service - use JacksonUtil instead of ObjectMapper;

**Bug fixes:**

* MQTT transport: fix handling of cleanSession flag;
* Kafka queue: removed ServiceId from kafka consumer groupId;

### ThingsBoard PE

Everything from [TB CE v2.5.6](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.6).

Main features:

* Send "Owner changed" event to rule engine and audit log;

Bug fixes:

* Remote integrations: changed parameter "PRC_HOST" to "RPC_HOST";

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

## v2.5.5 (December 1, 2020)

### ThingsBoard CE

**Improvements:**

 * Added partition property for kafka settings;
 * Changed default QoS for default SubAck message from AT_LEAST_ONCE to AT_MOST_ONCE
 * Added ability to not notify device about attributes update;
 * Added ability to set/force base URL for password reset links;
 * Added validation of circular reference in the rule chains;
 * AWS SQS client improvements for JS executors;
 * Updated dependency versions to fix some vulnerabilities;
 * Added handler for too long payload exception in MQTT transport

 **Bug fixes:**

 * Fixed telemetry cleanup procedure for telemetry stored in PostgreSQL;
 * Added ability to use exp-pause-between-retries for message processing strategies;
 * Fixed for client certificate check in case of MQTT two-way SSL connection;
 * Fixed inactivitiy timeout for gw sessions;
 * Fixed knob control widget;

### ThingsBoard PE

Everything from [TB CE v2.5.5](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.5).

Main features:

* Added logs to detect rule nodes that cause timeout;
* Top 5 rule nodes statistics;
* Twilio rule node improvements to support new line characters;
* Added lock to the kafka integration;
* IBM Watson integration improvements
* Improvement to logo container size;

Bug fixes:

* Fixed csv export;


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

## v2.5.4 (August 28, 2020)

### ThingsBoard CE

**Improvements:**

 * Password from SMTP settings is no longer shared to UI;
 * Added logs for in memory queue

 **Bug fixes:**

 * Fixed SQL scripts for Unit tests

### ThingsBoard PE

Everything from [TB CE v2.5.4](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.4).

Main features:

* Created Apache Pulsar integration;

Bug fixes:

* UI: Fixed show dashboard added Group permission;
* Fixed Report service - duplicate generate report post request;
* Fixed tb-pe docker image;

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

## v2.5.3 (August 12, 2020)

### ThingsBoard CE

**Improvements:**

 * Performance improvements to inserts in PostgreSQL;
 * Prometheus Metrics;
 * Created Azure IoT hub rule node;
 * REST API: Ability to move device to another tenant;
 * Added proxy configs to rest api call rule node (#2943);

**Bug fixes:**

 * refactored DataValidator email pattern

### ThingsBoard PE

Everything from [TB CE v2.5.3](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.3).

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

## v2.5.2 (June 9, 2020)

### ThingsBoard CE

Minor bug-fix release with few improvements.

**Improvements:**

 * Replaced Akka with pure java implementation of Actor System;
 * Using external executor in Kafka Node;
 * Improvements for actor initialization logic;
 * Improved handling of peak connect attempts;
 * RPC Request Node improvement to avoid blocking;

**Bug fixes:**

 * UI: Fixed the activation of on-row event on details click;
 * UI: Fixed problem widget-editor in Safari #2900;
 * Message is pushed to correct queue in case of duplication;
 * Never use Fork-Join pool with parallelism set to 1.

### ThingsBoard PE

Everything from [TB CE v2.5.2](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.2) with the following improvements.

**Bug fixes:**

 * UI: Fix null value during export into csv;

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

## v2.5.1 (June 1, 2020)

### ThingsBoard CE

Minor bug-fix release with few improvements.

**Improvements:**

 * UI: Batch support for fetching entities from relations 
 * Improved K8S deployment scripts;
 * Cluster mode performance improvements;
 * Proxy configuration for email rule node and sysadmin email settings;
 * Additional setting "max_eval_requests_timeout" to separate JS "eval" from JS "invoke" timeouts;
 * Added 'alwaysFullScreen' and 'defaultDashboardName' OAuth2 properties;
 * Refactored DEB/RPM builds to minimize code duplication and enable CentOS 8 support;
 * Added gatewayId to metadata in ENTITY_CREATED event message;
 * Added timestamp to TbMsg;
 * Added minimum RPC timeout value setting;

**Bug fixes:**

 * Fixed claim devices API;
 * Fixed shared/client attribute updates over WS;
 * Fixed REST API security checks for some corner cases;
 * UI: Fixed data displaying in mobile browser for digital gauge widget;
 * Fixed 2.4.3 -> 2.5 upgrade script for AWS RDS; 

### ThingsBoard PE

Everything from [TB CE v2.5.1](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.1) with the following improvements.

**Improvements:**

 * Performance improvement for RBAC functionality;
 * Added maxRecords and requestTimeout to AWS Kinesis integration;

**Bug fixes:**

 * Start scheduled events correctly if startTime is set earlier than repeat config start date

## v2.5 (May 12, 2020)

### ThingsBoard CE

Major release with the following improvements.

**Main features:**

* Support of new Queue implementations: AWS SQS, Google Pub/Sub, Azure Service Bus and RabbitMQ;
* Rule Engine:
    * Implemented back pressure logic; 
    * Implemented processing checkpoints;
    * Configurable Submit and Ack strategies;
    * Ability to launch Rule Engine as separate microservice;
    * Ability to isolate tenant processing to separate rule engine instance(s);
    * Improved statistics and error tracing;
    * Automatic reset of blacklisted functions;
    * Replaced gRPC with queues for communication between ThingsBoard components;
* OAuth support;
* JSON support for telemetry and attributes;
* Improvements to timeseries DAO for SQL:
    * Reduced size of telemetry tables on 40%;
    * Updated minimum PostgreSQL version from 9.x to 11.x;
    * Configurable TTL implementation for telemetry and events;
     * Partitioning of time series data in PostgreSQL;
* Non Root docker images support;
* Refactored and improved Java REST client;
* UI: Added Widgets and Dashboard for Managing Gateway;
    

**Additional features:**

* Service Discovery improvements;
* Introduced SMTP TLS version to default mail service and send email node;
* Added settings for queue topic creation;
* Added "check alarm status" rule node;
* Added "sendActivationEmail" as request param for activateUser controller;
* UI: Added new alias - "current tenant";
* UI: Added ticks support to digital gauge;
* UI: Added ability to configure thresholds to Flot charts;
* UI: Added gauge color limits configuration; 
* UI: Added Latvian locale;
* UI: Added Romanian locale;
* UI: Added fetchLastLevelOnly checkbox to alias query filter;
* UI: Added option to set bar alignment in 'flot-bar-widget';
* UI: Added new settings to web-camera input widget;
* UI: Added ability to use apostrophe in custom translations in tables;
* Demo Data: Added "Thermostats" Dashboard as an example of custom actions;

**Bug fixes:**

* Fixed MQTT inactivity disconnects;
* Fixed concurrent processing of new device connections for gateway MQTT session;
* Fixed device reconnect abnormal when certificate authentication is turned on;
* Fixed Alarm Ack/Clear/Update when Relation Type Filter is used;
* Fixed PostgreSQL Inserts logic;
* Fixed logging statistics configuration;
* Fixed dependency vulnerabilities;
* Fixed PEM keys with password for MQTT server;
* UI: Fixed error when updating websocket for “impersonated” user (#2743)
* UI: Fixed SQL DAO shutdown sequence;
* UI: Fixed Digital gauge values don't switch to 0 when telemetry is 0;
* UI: Fixed Digital Gauge Widget sometimes does not update latest value;
* UI: Fixed infinite loop caused by default md-dialog resize function in Safari
* UI: Fixed manage dashboard states for Safari;
* UI: Fixed entity label for header action in dashboard states;
* UI: Fixed validation for geo-fencing nodes;
* UI: Fixed dialogs in Safari;


### ThingsBoard PE

Everything from [TB CE v2.5](https://github.com/thingsboard/thingsboard/releases/tag/v2.5) with the following improvements.

**Main features:**

 * Rule Engine improvements similar to Community Edition;
 * OAuth improvements similar to Community Edition;
 * Improved performance;

**Additional features:**

 * Added Entity Name column for multiple entities to export functionality;
 * Avoid entity count check for unlimited subscriptions;
 * Persistent volumes for k8s deployments to store license data;
 
**Bug fixes:**

 * UI: Fix XLSX export to use local time;
 * UI: Add CSV string-delimiter for export;
 * RE: Fix for owner logic in TbAddToGroupNode node.

## v2.4.3 (January 8, 2020)

### ThingsBoard CE

Minor release with the following improvements.

Main features:

* Performance Improvement for Device State Service;
* Async JS Execution;
* Added support of Entity Label in bulk import;
* Added "delete alarm" API to alarm service.
* UI: Added new Alarm widget settings: "Maximum number of alarms to load" and "Fetch size".
* UI: Improved state controller for dashboard;
* UI: Added support of Entity Label to state name and dashboard breadcrumbs;
* UI: Added data key settings to change legend appearance for charts.
* UI: Hide timewindow when all options are hidden;
* UI: Control widgets background color;

Additional features:

* More clear thread names;
* Added support of activity event for "Copy to view" rule node;
* JS Stats for Nashorn JS Executor;
* UI: Added Traditional Chinese locale;
* UI: Added Entity Label to widget actions;

Bug fixes:

* UI: Fix timewindow parameters when zooming flot widget chart;
* UI: Fixed knob control widget;
* UI: Fixed entity name resolution;
* UI: Fixed disable timewindow logic;

### ThingsBoard PE

Everything from [TB CE v2.4.3](https://github.com/thingsboard/thingsboard/releases/tag/v2.4.3) with the following improvements.

Main features:

 - New Integration: Actility ThingPark Enterprise;
 - Added new alias: "Entities by group name". 
 
Additional features:

 - Rest client update;
 - Added "other properties" for Kafka integration;
 - TCP and UDP integration: added HEX handler type;
 
Bug fixes:

- UI: Fix promise to tenant_admin and generic permission;
- White-labeling: Fixed NPE in case tenant has not additional info;

## v2.4.2 (December 10, 2019)

### ThingsBoard CE

Minor release with the following improvements.

Main features:

* Batch attribute and telemetry updates for PostgreSQL 
(up to 40000 insert/second on an average laptop);
* Alarm create/update performance improvements;
* Ability to store device state changes to telemetry instead of attributes;
* Added coverage of nearly all REST API calls in the Java REST Client;
* Optimization of device creation and lookup performance;
* JS Invoke become async;
* Redis cluster configuration support;
* Added Redis queue support in REST API call node;
* UI: Added 'Device claiming' widget;
* UI: Improved 'Trip Animation' widget;
* UI: Improved 'Multiple Attributes' widget;
* UI: New input widgets use map (image/openstreet/gogle) to set location entity
* UI: Added clustering of markers on Map widget. See [video tutorial](https://www.youtube.com/watch?v=sBFmOHxWbag).

Additional features:

* Added 'label' field to Assets;
* Added configurable logging of performance metrics;
* Improved reporting of last activity time from the remote transport;
* Tool for migrating from Postgres to hybrid mode;
* Updated PostgreSQL driver version to 9.4.1212;
* Allow Nulls in JsonConverter for usability;
* Improved activation link to work without x-forwarded-port not set;
* increased default JS execution time to 3000 ms;
* UI: Improved translations for RU & UA;
* UI: Added Greek language;
* UI: Move action button to header widget;
* UI: Bulk provisioning supports label filed;
* UI: Ability to hide "Columns to Display" and "Alarm Status Filter";
* UI: Charts:
  * Ability to compare current data with data for last day, week, month, year;
  * Ability to hide tooltip values that are 0 or false;
  * Ability to configure dataKey and remove it from stacking mode;
  * Ability to specify type of the dots on line chart: 'circle', 'cross', 'diamond', 'square' і 'triangle';

Bug fixes:

* Clear Alarm Node fix clearTs and endTs in log message;
* UI: Fixed CDN Url for Google Maps widget;
* UI: Fixed missing translations for login page;
* UI: Fixed spelling;
* UI: Fixed widgets order mobile view;
* UI: Fixed disable on condition and errors displaying;
* UI: Fix delete timeseries data;

### ThingsBoard PE

Everything from [TB CE v2.4.2](https://github.com/thingsboard/thingsboard/releases/tag/v2.4.2) with the following improvements.

Main features:

 - Kafka integration;
 - AWS Kinesis integration;
 - UDP/TCP integration improvements and documentation;
 - Added support of Assets and Entity Groups in the integrations;
 
Additional features:

 - Add new format export data XLSX;
 - JPA improvements.
 - Misc performance improvements;
 - UI: New alias: Owner of an entity from dashboard state
 
Bug fixes:

- Fix schedule reconnect for stopped OPC-UA integration;
- Fix for OPC-UA Client reconnect issue;
- Fix event storage reader not to skips an extra line in file on start;
- Fix export file name to support custom translate;

## v2.4.1 (September 13, 2019)

### ThingsBoard CE

Minor release with the following improvements.

Main features:

* Password policy setting. Login/Logout audit log. See [video tutorial](https://www.youtube.com/watch?v=ZKUs01k8_H4);
* Timescale DB support;
* 5x performance improvement for PostgreSQL insert speed;
* UI: New 'Custom Action' editor with HTML/CSS/JS input capabilities;

Additional features:

* UI: Migrate to latest webpack version 4.36.1;
* UI: Add the possibility to hide single time-window fields;
* UI: Add new 'multiple-input' widget to 'input widgets' bundle;
* UI: Webcamera input widget;
* UI: Add new React component 'ThingsboardIcon', a form to select an icon from widget settings;
* UI: Add support for optional widget title tooltip text;
* UI: Improve IT, ES, FR and DE translation;
* Update Netty, GRPC, jackson-databind versions;
* Refactoring of DAO layer and separated common interfaces to separate module;
* Claim device improvements;

Bug fixes:

* Fix NPE in transport service;
* MqttTransportHandler: Use default channelReadComplete implementation to avoid memory leaks;
* Fixed memory leaks in MqttTransportHandler ([#1787](https://github.com/thingsboard/thingsboard/issues/1787));
* Fixed broken swagger-ui;
* Fixed violations on attributes/event primary and unique keys constraints;
* UI: Fix fullscreen mode for ace editors inside react schema form.

### ThingsBoard PE

Everything from [TB CE v2.4.1](https://github.com/thingsboard/thingsboard/releases/tag/v2.4.1) with the following improvements.

Main features:

- Remote Integrations feature to execute Integrations in a separate microservice;
- Added TCP & UDP Integrations;

Additional features:

- Integration enable/disable feature;
- AWS SQS Integration;

## v2.4 (July 10, 2019)

### ThingsBoard CE

Minor release with the following improvements.

Main features:

- Added [Bulk Provisioning](/docs/user-guide/bulk-provisioning/) of devices/assets using CSV files;
- Added [Claiming devices](/docs/user-guide/claiming-devices/) feature;
- UI: Ability to reorder datakey chips via Drag&Drop in widget editor;
- UI: Combined attributes and timeseries datakeys for latest values widget in widget editor;

Additional features:

- Added events debug mode rate limits;
- Added debug events TTL;
- Improved "tenant/customer details" rule nodes;
- Improved "get originator attributes" and "get device attributes"rule nodes;
- Improve "create alarm" rule node: ability to use metadata for alarm type;
- Added "Entity View" type to "Filter" rule nodes;
- Added indexes to SQL database schema;
- Added device label field;
- UI: add map HERE provider to OpenStreet Map widgets;
- UI: added custom provider option for OpenStreet Map widgets;
- UI: added 'Disable scroll zooming' setting for all Map widgets;
- UI: Trip animation widget improvements;
- UI: Added ability to choose direction of legend items in legend settings;
- UI: Added ability to hide widget timewindow;
- UI: Added rowClick and cellButton action sources to Timeseries Table widget;
- UI: Updated German locale;
- UI: Added hide empty lines option to Timeseries Table widget;
- UI: Added Chinese translation for entity views;
- UI: Added option to show tooltip on hover for Map widgets;
- UI: Added Czech locale;
- UI: Added ability to define form groups in json schema for widgets configuration forms;
- UI: Added 'On HTML element click' action source for HTML card (static and value) widgets;

New Rule nodes:

- "gcp pubsub" - Google Cloud PubSub external node;

Bug fixes:

- Fixed mqtt keep-alive;
- Fixed [issue #1686](https://github.com/thingsboard/thingsboard/issues/1686);
- Fixed windows installation scripts;
- UI: fix Chinese translation problem;
- UI: fix Entities Table widget for wrong dataKey value when same key is used on multiple columns with different processing function;

### ThingsBoard PE

Everything from TB CE v2.4.0 with the following improvements.

Main features:

- Added [Self-registration](/docs/user-guide/self-registration/) feature;

Additional features:

- Improve 'add to group' node - add ability to remove entity from current groups;
- Allow pushing ENTITY_CREATED event on device creation via Integration;
- Allow pushing ENTITY_CREATED event on customer creation via Integration;
- Integrations: added ability to change device owner from uplink data;
- UI: Added 'Copy entity group id' button;
- UI: Added white-labeling settings to show product name and version;

Bug fixes:

- Fixed matching by FQN and ID in OPC-UA integration;
- Fixed whitelabeling issues for subcustomers;
- Fixed owners cache;
- Add validation to Group Permissions Controller;

## v2.3.1 (April 3, 2019)

### ThingsBoard CE

Minor release with the following improvements.

Main features:

- Migrate to Spring Boot 2.1.0 and Spring 5.1.2;
- [Kubernetes scripts](https://github.com/thingsboard/thingsboard/tree/master/k8s) for ThingsBoard Microservices;
- UI: New Trip Animation Widget;
- UI: New Date Range Navigator Widget;
- UI: New [Entities Hierarchy Widget](https://www.youtube.com/watch?v=bc07ys-azqw);
- UI: Added ability to visualize Polygons on the map widgets;

Additional features:

- added feature for resetting debug-mode in all rule-nodes;
- UI: Updated Italian locale;
- UI: Added Ukrainian locale;
- UI: Added full Canadian postal code validation;
- UI: Add searchbox support for all ace editors;
- UI: Widgets - add entityDescription variable;
- Improved zookeeper client reconnect logic;
- Improved GRPC session error handling.

New Rule nodes:

- Relation Rule Node
- Save to custom Cassandra table Rule Node
- Geofencing rule nodes
- Get Entity Details nodes

Bug fixes:

- fixed Customer User permissions for RPC call;
- fixed regexp in webpack build;
- fixed NPE in TbGetTelemetryNode;
- fixed NPE in TbMsgMetaData constructor;
- fixed NPE in actor message processors;
- fixed CORS mapping;
- fixed doulbe PUBACK for attribute request messages;
- UI: fixed individual tooltip content in Flot widget;
- added prefix to device credentials cache keys.

### ThingsBoard PE

Everything from TB CE v2.3.1 with the following improvements.

Main features:

- Introduced [Change Owner](/docs/user-guide/rbac/) operation;
- Introduced [Custom Menu](/docs/user-guide/custom-menu/) feature;

Additional features:

- UI: improved French locale;
- Improve reports generation.

New Rule Nodes:

- Change Owner Rule Node
 
Bug fixes:

- Fixed Public Users permissions: Added Alarm Read permission.
- UI: Fixed multiple users deletion;
- UI: Timer-Based scheduler layout fix;
- UI: Fixed custom translation update on page refresh.

## v2.3 (February 7, 2019)

### ThingsBoard CE

Minor release with the following improvements.

Main features:

- Support of message transactions using new synchronization rule nodes;
- Delete Alarm API;

Additional features:

- Add 'Reconnect' and 'RTU over TCP' options to TCP Modbus extension configuration;
- Added note to the originator telemetry node details about max fetch size ([issue #1346](https://github.com/thingsboard/thingsboard/issues/1346));
- Use a fast serialization library like FST for serialization of TbActorMsg;
- Improve create alarm node to read alarm config from message;
- Improve clear alarm node to get alarm type using pattern with fields from message metadata;
- Ability to make entity views public; 
- UI: Add German locale;
- UI: Add Persian locale;
- UI: Updated Russian locale;
- UI: Updated Spanish locale;
- UI: Improve Map widgets to not change zoom on every data update;
- UI: Add ability to display polygons on Map widgets;
- UI: Improve webpack resources compilation time by running loaders in concurrent mode;

New Rule nodes:

- Transaction nodes: Synchronization start and Synchronization end;
- Delete relation node; 
- Unassign from customer node;
- Check existence fields;

Bug fixes:

- Fixed aggregation for numeric data types to process long and double values in same time;
- Fixed issues related to originator telemetry node;
- Fixed [issue #1327](https://github.com/thingsboard/thingsboard/issues/1327);
- Fixed [issue #1355](https://github.com/thingsboard/thingsboard/issues/1355);
- Swagger UI: Fixed URL templating;
- Fixed NPE in Netty-mqtt client on puback;
- Fixed SQL aggregation queries (SQL Warning Code: -1003), issues [#925](https://github.com/thingsboard/thingsboard/issues/925), [#397](https://github.com/thingsboard/thingsboard/issues/397);
- Add workaround to rest api call node to use "simple client HTTP factory" to avoid issues with HTTP headers introduced by netty client http factory; 
- UI: Fixed gateway mqtt extension configuration: make device type and topic expressions optional;
- UI: Fixed issues with device/asset/entityView type autocomplete;  
- UI: Flot timeseries widgets: fixed issue with tooltip vertical position;
- UI: Fixed [issue #1427](https://github.com/thingsboard/thingsboard/issues/1427): Boolean input widgets were saving wrong value; 

### ThingsBoard PE

Everything from TB CE v2.3+ the following improvements.

Main features:

- [Advanced RBAC for IoT](/docs/user-guide/rbac/) to be able to define user groups and set permissions in relation to entity groups (devices/assets/dashboards, etc);

Additional features:

- Added User, Entity View and Dashboard groups;
- Improve scheduler configuration with ability to create time-based schedule;
 
Bug fixes:

- Fixed timezone processing of scheduler events;
- Fixed OPC-UA integration reconnect procedure;
- Fixed issue with multiple creation of devices by integration;
- Improve Platform Integrations initialization;
- UI: Fixed "Allow white-labeling" settings;
- UI: Fixed issue with labels rendering on IE9+;

## v2.2 (November 30, 2018)

### ThingsBoard CE

Minor release with the following improvements.

Main features:

 - Introduced support of a **microservices** architecture and deployment options. 
   See [microservices](/docs/reference/msa/) architecture page and [deployment](https://github.com/thingsboard/thingsboard/blob/master/docker/README.md) tips for more details;
 - Improved **docker images** to be able to launch ThingsBoard with a single command. 
   See [Linux or MacOS](/docs/user-guide/install/docker/) and [Windows](/docs/user-guide/install/docker-windows/) installation pages; 
 - Added [**Entity Views**](/docs/user-guide/entity-views/) feature to allow to 
 limit the degree of exposure of the Device or Asset telemetry and attributes to the Customers;
 - Added ThingsBoard [**JavaScript Executor**](/docs/reference/msa/#javascript-executor-microservices) microservice to isolate execution of rule engine scripts from the main rule engine components and flow;
 - Added ThingsBoard [**Web UI**](/docs/reference/msa/#web-ui-microservices) microservice to isolate static content hosting from the REST and Websocket APIs;
 - Added ThingsBoard [**MQTT, HTTP and CoAP**](/docs/reference/msa/#transport-microservices) transport microservices to isolate communication with devices from the main ThingsBoard services;
 - Added support of [Kafka](/docs/reference/msa/#kafka) to store device telemetry before it is processed with ThingsBoard Rule Engine;
 - Introduced [Rate Limits](/docs/user-guide/api-limits/) for REST, Websocket and Device APIsl
 - Framework for [**black-box testing**](https://github.com/thingsboard/thingsboard/tree/master/msa/black-box-tests) of ThingsBoard by automatically launching ThingsBoard cluster using docker-compose and running API tests;
 - Added input widgets bundle. 

Additional features:

 - Alarm ack/clear event to the Rule Engine;
 - Added two additional parameters to post-processing function: timestamp of the previous value and original previous value;
 - Shutdown of all rule chains on tenant deletion;
 - Option for case-insensitive username;
 - Max string value length parameter for attributes/timeseries.
 - TTL for events in Cassandra DAO;
 - Redirect to a previous page after login;
 - Cast incoming attributes/telemetry numeric data type if possible;
 - Added Turkish locale;
 - Updated Italian locale;
 - Improved logging;
 - Introduced package-lock.json for msa packages with correct dependencies;
 - Introduced new Cassandra and PostgreSQL based [**AMIs**](/docs/user-guide/install/aws/).

Websockets:

 - Introduced WebSocket blocking send timeout parameter. Use Work Stealing Pool for dynamic threads management instead of custom ThreadPoolExecutor.
 - Added max size of queue per websocket
 - Performance improvement for websocket updates;  
 - Improved websocket sending errors handling.

New Rule nodes:

 - [**Originator Telemetry**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#originator-telemetry) 
 rule node to allow using [multiple previous telemetry records](/docs/user-guide/rule-engine-2-0/tutorials/telemetry-delta-validation/) in the rule engine;
 - Create relation node;
 - Assign to customer node; 
 - Message count node;

Bug fixes:

 - Fixed multiple issues related to concurrent restarts of the services in a cluster mode;
 - Fixed issue with header-actions in rpc-widgets;
 - Fixed issues with concurrent device creation using Gateway API;
 - Fixed Zookeeper reconnect error;
 - Fixed bugs related to entity views caching;
 - Fixed concurrency issues with websockets on high load;
 - Critical security fixes for some API calls related to device telemetry;
 - UI. Outsource CSS should be added before custom CSS
 - UI. Entities table widget (raised its height)
 - UI. Hide fixed table header in entity attributes table when in widget selection mode.
 - UI. Fix deprecated maps settings. 

### ThingsBoard PE

Everything from TB CE v2.2+ the following improvements.

Main features:

 - Added advanced localization support:
    - Asset and Device names localization;
    - Ability to overwrite any localization constants via UI;    
 - Login white-labeling improvement support on tenant and customer level based on custom domain names;   
 - Ability to allow/deny white-labeling on Tenant and Customer level;
 - Added ability to hide help links or specify custom base URL;
 - Updated Spanish locale; 
 
Bug fixes:

 - Improve web report dashboard navigation;
 - Added ability to specify language in web reports;
 - Fixed export csv/xls data format according to locale
 - Scheduler service cluster mode bug fix 

## Earlier releases

See GitHub releases page for previous release notes: https://github.com/thingsboard/thingsboard/releases  
