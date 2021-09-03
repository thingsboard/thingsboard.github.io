---
layout: docwithnav-pe
title: ThingsBoard PE Release Notes
description: ThingsBoard architecture

---

* TOC
{:toc}

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
