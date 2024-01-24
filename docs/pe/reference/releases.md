---
layout: docwithnav-pe
title: ThingsBoard PE Release Notes
description: ThingsBoard architecture

---

* TOC
{:toc}

## v3.6.2 (Dec 28, 2023) {#v362}  

Everything from [TB CE v3.6.2](https://github.com/thingsboard/thingsboard/releases/tag/v3.6.2) with the following improvements and bug fixes.

**Improvements**

 * Automatic 'Read' permissions for widgets if user has 'Read' permissions for the dashboards;
 * Updated sendRpcRequest scheduler event configuration with new parameters: is_one_way, persistent and timeout;
 * Enhancements for fuel level monitoring dashboard;

**Bug fixes**

 * Domain name is now always in lowercase;
 * Dashboard report generation error handling;
 * Fixed validation of Customer permissions for OTA Package entity;
 * Fixed 'Count Unique' aggregation node initialization from DB;
 * Fixed change of mail provider in the mail settings form;
 * Fixed entity-group-autocomplete component;
 * Fixed custom translation of widget data export with filename;
 * Fixed dashboard link in the Smart Retail solution template;
 * Fixed color-picker not allowing to select chosen color.

## v3.6.1 (Nov 13, 2023) {#v361}  

Everything from [TB CE v3.6.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.6.1) with the following improvements and bug fixes.

**Improvements**

 * Transport API performance improvement;
 * Added ability to update WL from tenant to customer via REST API;

**Bug fixes**

 * Fixed add edge dialog by @deaflynx;
 * Fixed converters component debug mode slider always on;
 * Fixed Smart Irrigation template;
 * Fixed incorrect recipient dialog title;
 * Fixed for Apache Pulsar client in the 'Apache Pulsar' and 'Tuya' integrations.

## v3.6.0 (Sep 21, 2023) {#v36}  

Everything from [TB CE v3.6](https://github.com/thingsboard/thingsboard/releases/tag/v3.6) with the following improvements and bug fixes.

**Improvements**

* Core & Rule Engine

  * Default converters for most Integrations with well-defined message forma;
  * Fuel level monitoring solution template;
  * Move integration rate limits configuration to tenant profile;
  * Improved validation for group permissions, group owner, and resource deletion;
  * Moved white labeling attributes from attributes_kv to white_labeling table;

* UI

  * UI for deleting time-series;
  * White labeling login base URL auto-generation based on the domain name;
  * Integration wizard layout;

* Transport

  * Added handling for new message types for Efento devices; 
  
* Edge

  * Edge install instructions minor updates;

**Bug fixes**

* Core and Rule Engine:

  * Fixed for TCP/UDP integration with binary payload;
  * Fixed rabbitmq queue in msa;
  * Fixed check write permission in the dashboard;
  * Fixed get attributes and time-series keys;
  * Fixed custom menu hierarchy;
  * Fixed entityDataQuery with GroupList filter;
  * Fixed validation for ClientID field in MQTT integration;

* UI:

  * Fixed dashboard fullscreen button;
  * Fixed initial value for scheduler event start time when creating by clicking on calendar day;
  * Fixed for group entities table excessive api call;
  * Fixed for custom translation and menu json content placeholder displayed in one line on firefox;
  * Fixed tenant administrators recipients filter in notification center;
  * Fixed incorrect count widgets in web report when dashboard has widgets selected hide in desktop mode;
  * Fixed customer users sort.

## v3.5.1 (May 31, 2023) {#v351}  

Everything from [TB CE v3.5.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.5.1) with the following bug fixes.

**Bug fixes**

* UI:
  
  * Fixed missing query params when redirecting old dashboard URL by @vvlladd28
  * Fixed dashboard link resent dashboard widget by @vvlladd28
  * Fixed buttons trigger by enter press fortegrations by @ArtemDzhereleiko
  * Fixed TCP integration handler configuration by @ArtemDzhereleiko
  * Fixed customer hierarchy update for entity group by @ArtemDzhereleiko
  * Fixed solution template documentation links by @ArtemDzhereleiko
  * Removed change owner action for system administrator by @ArtemDzhereleiko
  
## v3.5.0 (May 9, 2023) {#v35}

Everything from [TB CE v3.5](https://github.com/thingsboard/thingsboard/releases/tag/v3.5) with the following features and bug fixes.

**Improvements**

* Core & Rule Engine

  * Azure Service bus integration;
  * Tuya integration;
  * Ability to create relation between DEVICE and DATA CONVERTER;

* UI
  
  * New solution template "Waste Monitoring";
  * Support of new menu and entity tables;
  
* Edge
  
  * Edge computing support for solution templates;

**Bug fixes**

* Fixed relation query for customer level;
* Fixed error flood after reboot of disabled integration;
* Fixed deletion of solution template entities;
* Fixed solution template scheduler event creation;
* Fixed column key mapping for asset_profile;
* Fixed search for entity views by customer;
* fixed opc integration host configuration;
* Fixed no outgoing message issue when doCalculate fails in Aggregate Latest node;
* Fixed telemetry/attribute update while device bulk import;
* Fixed incorrect validation credentials in Azure Iot Hub integration;
  
## v3.4.4 (February 7, 2023)
  
Everything from [TB CE v3.4.4](https://github.com/thingsboard/thingsboard/releases/tag/v3.4.4) with the following bug fixes.

**Bug fixes**

* Core & Rule Engine:
  
  * Fixed check alarm permissions by originator;
  * Fixed TBEL to MVEL in air quality monitoring template;
  * Fixed SI attribute filtering;
  * Fixed 'twilio voice' node;

* UI:
  
  * Fixed search in entity group tables;
  * Fixed applying custom translations on loading with slow network;
  * Fixed some browsers don't open integration statistics when clicking 'Daily activity' column in Integration table;
  
## v3.4.3 (December 21, 2022)

Everything from [TB CE v3.4.3](https://github.com/thingsboard/thingsboard/releases/tag/v3.4.3) with the following improvements and bug fixes.

* Core & Rule Engine:
  * Air Quality Monitoring solution template;
  
* UI:
  * MQTT integration credentials password is optional;

**Bug fixes**

* Core & Rule Engine:
  
  * Fixed device bulk import with empty credentials;
  * Fixed upgrade from CE;
  * Fixed remote integrations update;
  * Fixed NPE on WS subscription for sysadmin;

* UI:
  
  * Fixed Things Park integration validation;
  * Fixed validation in bulk import and improvement bulk import for Edge;
  * Fixed scheduler update configuration;
  * Fixed Azure IoT Hub integration validation;
  
* Edge:

  * Fixed NPE during sync process in case edge owner is customer;

## v3.4.2 (December 1, 2022)

Everything from [TB CE v3.4.2](https://github.com/thingsboard/thingsboard/releases/tag/v3.4.2) with the following improvements and bug fixes.

* Core:
  * Real-time sync WhiteLabeling, LoginWhiteLabeling and CustomTranslation to edge;
  * Smart irrigation solution template;  
  * Integration Monitoring via Prometheus;
  * Improved 'alarms count v2' rule node;
  * Partitioning and TTL for BLOB entities;

* UI:
  * Improved the design of the integrations UI: added creation dialog, statistics and states to the integration table;

**Bug Fixes**

* Core:
  * [#7415](https://github.com/thingsboard/thingsboard/issues/7415) Fixed Entity Group Name filter;
  * [#7225](https://github.com/thingsboard/thingsboard/issues/7225) Fixed Scheduler timezone gap;
  * Fixed Scheduler bug with incorrect "Start time";  
  * Fixed binary uplink data converter;
  * Fixed issue with overwrite of the WL settings ;

* UI:
  * Fixed display of the host field value for TTN/TTI integrations;

  
  
## v3.4.1 (August 18, 2022)

Everything from [TB CE v3.4.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.4.1) with the following improvements and bug fixes.

* Core:
  * Fixed startup issues and connection leaks in OPC-UA integration;
  * Fixed Azure IoT Hub integration;
* UI:
  * Added support Login WL advanced CSS in 2FA login form;
  * Fixed filtering by error text in Integrations and Data Converters event tables;
  * Fixed entity group autocomplete;  
  * Upgraded ExcelJS and fixed style in empty cell data;
* Web Report:
  * Added widget cache clearing before starting web-report generation;
  * Fixed report generation issue while widget's state updates.
  
## v3.4 (July 19, 2022)

Everything from [TB CE v3.4](https://github.com/thingsboard/thingsboard/releases/tag/v3.4) with the following improvements and bug fixes.

**Major Improvements:**

* Core & Rule Engine:
  * Integration Executor - scalable microservice that hosts all integrations to separate them from the core services;
  * Version Control support for Entity Groups;  
  * Handling large and small numbers in the Aggregate stream node;
* UI:
  * Web report and UI performance improvement;
* Edge:
  * Integrations and converters support.
  
  
**Bug Fixes**

* Core & Rule Engine:
  * Fix NPE in TbSimpleAggMsgNode;
  * Fix daily repeat in scheduler on daylight saving time adjustment;  
  * Added proper handle of exceptions from Twilio API;
* UI:
  * Custom translation load and updates;
  * Incorrect routing in "open dashboard" widget action;
  * Scheduler error msg on attribute update;  
  * Check referencing integrations when deleting downlink converter.  


## v3.3.4.1 (March 18, 2022)

**Bug Fixes**

* Core:
  * Critical alarm security checker fix related to customer users;
  * Ability to load corrupted scheduler events;

## v3.3.4 (March 11, 2022)

Everything from [TB CE v3.3.4](https://github.com/thingsboard/thingsboard/releases/tag/v3.3.4) with the following improvements and bug fixes.

**Bug Fixes**

* Core & Rule Engine:
  * Origin Service ID is not present in RPC requests triggered by scheduler events;
  * Jenkins Repository url fix;
* UI:
  * Fixed scheduler dialog;
  * Fixed switching from local to remote HTTP integration;
  * Fixed originator select component required for validation and entity group load flow.
* Integrations:
  * Remove Redis dependency from remote integration;
  * Workaround for KAFKA-4090 for PE Kafka Integration;
  * Hotfix for OPC-UA rescanning and reconnecting;
* Build Scripts:
  * Restrict tb-pe docker image to linux/amd64 platform due to tb-web-report package compatibility limits
  
## v3.3.3 (January 27, 2022)

Everything from [TB CE v3.3.3](https://github.com/thingsboard/thingsboard/releases/tag/v3.3.3) with the following improvements.

Main features:


* Core & Rule Engine:
  * Added 'Propagation Entity Types' parameter to 'Alarm Count' rule node;
  * Added 'Queue Name' parameter to aggregation rule nodes;
  * Added REST_API_RULE_ENGINE_CALL to the audit logs;
  * Additional alarm read permission checks;
* UI:
  * Added entity details page support;
  * Added persistent page link for scheduler events page;
  * CSS variables support for the white-labeling feature;
  * Added ability for tenant administrators to ignore the white-labeling settings configured on a system level;
  * Validation to maximum length of the group names;
  * "Delete" button in Self-registration form;
* Integrations:
  * Additional automatic tests for remote integrations;
  * Custom domain support for LORIOT integration;
  * API Version to TTI integration;
* Build scripts:
  * Docker images check for ARM64;
  * K8S scripts moved to separate repository;
  * Log4j -> Slf4j annotation due to typo;
* Edge:
  * Added missing labels for assigned-to-edge/unassigned-from-edge;
  * Send notification event in case change owner of edge to edge session;
  * Improved integration tests;

Bug fixes:

* Core & Rule Engine:
  * Fix in deprecated alarm count query;
  * Fix sending RPC response from integration downlink rule node
  * Use correct service id in rest api call reply method to send messages to correct services;
* Integrations:
  * Fix reconnect for OPC UA integration;
  * Update converter details autocomplete;
* UI:
  * Multiple fixes to self-registration form;
  * Fixed ability to create entity groups with white spaces instead of names;
  * Fixed show edit button in default dashboard without fullscreen mode;
  * Fixed close details after create/update/delete permission;
  * Fixed display of Audit Logs for Device Profile;

## v3.3.2 (November 11, 2021)

Everything from [TB CE v3.3.2](https://github.com/thingsboard/thingsboard/releases/tag/v3.3.2) with the following improvements.

Main features:

* Core:
  * Entity search API for system administrator; 
* REST API documentation: 
  * Describe PE entities and methods;
* Help pages for user-defined JS functions:
  * Uplink and Downlink converter documentation;
  * Ability to configure the external help url using white-labeling parameters;
* Rule Engine:
  * Added ability to get parent customer details in customer details node
  * Ignore emails api usage when using external mail sender;
* UI: 
  * Added "Terms Of Use" for Self Registration;
  * Added the ability to set the background for login page by Advanced CSS 
  * Added Role, Integration, Converter, Group and Scheduler max length fields validation;
  * Added disable export (for notification) in Api Usage dashboard; 
* Integrations: 
  * Support binary data consumption for HTTP/CoAP/MQTT integrations;
  * UDP integration improvements. Support PUT in HTTP/CoAP integrations;  
  * Support of device and asset labels;
  * Optimize error logging; 

Bug fixes:

* Core:
  * Fixed RBAC for Resource and OTA updates;
* Integrations:
  * Service bus Queue: 'maxMessages' fix;
  * Fixed incorrectly displayed Downlink URL after save in the LORIOT integration;
* UI: 
  * Fixed RBAC to create/write edges;
  * Fixed entity-group-autocomplete;
  * Fixed custom css dialog close button;
  * Fixed customersHierarchy after updated entity group didn't save new settings group in jsTree;
  * Fixed noDataDisplayMessage in scheduler/blob widgets;
  * Fixed RBAC disabled select on relations and permissions tabs
  * Fixed RBAC for rule chains details tabs;
  * Fixed missing icon, after update icon package;  
  * Minor fixes to Edge Downlinks table;

## v3.3.1 (September 3, 2021)

Everything from [TB CE v3.3.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.3.1) with the following improvements.

Main features:

* Introduced [Solution templates](/docs/pe/solution-templates/overview/);
* UI: Added rule engine service to make requests to rule engine from custom actions;
* Remote integrations: Ability to setup RPC SSL without server SSL certificate

Bug fixes:

* UI: Fixed incorrect cashing data in permission resources autocomplete;
* UI: Fixed **The Things Stack Industries** integration form

## v3.3 (August 13, 2021)

Everything from [TB CE v3.3](https://github.com/thingsboard/thingsboard/releases/tag/v3.3) with the following improvements.

Main features:

* Improve MQTT integration performance by using async implementation;
* Improve ChirpStack integration validation - application server url and API token are now required;
* CoAP integration with DTLS mode support;
* Confirm dialog in save device group;
* Ability to specify Consumer Group for Azure Event Hub;
* Use queue from device profile when pushing events from integration to the rule engine;
* Improvement to owner autocomplete component;


Bug fixes:

* Customer can not see some data of sub-customer in the dashboard;
* MQTT based integrations, added field for setting up max bytes in message;
* TLS connectivity for remote integrations;
* Incorrect work of the asset menu when the user is active / inactive edit mode;
* Manage credentials button in the device group;
* Scheduler widget when processing custom event configuration;
* Processing of repartition events in the scheduler service;
* OPC-UA integration downlink and added more logs for not connected state;

## v3.2.2 (March 24, 2021)

Everything from [TB CE v3.2.2](https://github.com/thingsboard/thingsboard/releases/tag/v3.2.2) with the following improvements.

Main features:

* Update custom menu: Introduce dashboardId parameter to embed dashboard instead of using iframe;
* Azure Event Hub Integration is updated to use new SDK;
* Added new version of ["Alarms Count Node"](/docs/pe/user-guide/rule-engine-2-0/analytics-nodes/#alarms-count-node).
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

Everything from [TB CE v2.5.6](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.6).

Main features:

* Send "Owner changed" event to rule engine and audit log;

Bug fixes:

* Remote integrations: changed parameter "PRC_HOST" to "RPC_HOST";

## v3.2 (December 1, 2020)

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

Everything from [TB CE v2.5.4](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.4).

Main features:

* Created Apache Pulsar integration;

Bug fixes:

* UI: Fixed show dashboard added Group permission;
* Fixed Report service - duplicate generate report post request;
* Fixed tb-pe docker image;

## v3.1 (August 12, 2020)

Everything from [TB CE v3.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.1) with the following improvements.

Main features:

* Performance improvements for majority of REST API calls;
* Azure IoT Hub integration;
* The Things Industries integration;

## v2.5.3 (August 12, 2020)

Everything from [TB CE v2.5.3](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.3).

## v3.0.1 (June 9, 2020)

Everything from [TB CE v3.0.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.0.1) with the following improvements.

**Bug fixes:**

 * UI: Fix null value during export into csv.

## v2.5.2 (June 9, 2020)

Everything from [TB CE v2.5.2](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.2) with the following improvements.

**Bug fixes:**

 * UI: Fix null value during export into csv;

## v3.0 (June 1, 2020)

Everything from [TB CE v3.0](https://github.com/thingsboard/thingsboard/releases/tag/v3.0) with the following improvements.

**Main features:**

 * Advanced CSS for White-labeling;

**Additional features:**

 * No more "Fetch more" button;
 * SQL native filtering and pagination in entity groups;

## v2.5.1 (June 1, 2020)

Everything from [TB CE v2.5.1](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.1) with the following improvements.

**Improvements:**

 * Performance improvement for RBAC functionality;
 * Added maxRecords and requestTimeout to AWS Kinesis integration;

**Bug fixes:**

 * Start scheduled events correctly if startTime is set earlier than repeat config start date

## v2.5 (May 12, 2020)

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

Everything from [TB CE v2.4.1](https://github.com/thingsboard/thingsboard/releases/tag/v2.4.1) with the following improvements.

Main features:

- Remote Integrations feature to execute Integrations in a separate microservice;
- Added TCP & UDP Integrations;

Additional features:

- Integration enable/disable feature;
- AWS SQS Integration;

## v2.4 (July 10, 2019)

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
