---
layout: docwithnav
title: ThingsBoard Release Notes
description: ThingsBoard architecture

---

* TOC
{:toc}

## v3.5.1 (May 31, 2023) {#v351}

**Improvements**

* UI:
  
  * [#8506](https://github.com/thingsboard/thingsboard/pull/8506) Spanish locale update by @JavierNR
  * [#8654](https://github.com/thingsboard/thingsboard/pull/8654) Added help link for JWT security settings by @ArtemDzhereleiko
  * [#f1be847](https://github.com/thingsboard/thingsboard/commit/f1be847bfb9d8cac2efd2758f35ee8fc28866c81) Leaflet Map - add latitude/longitude validation. Improve code style. by @ikulikov

**Bug fixes**

* Core & Rule Engine:
  
  * [#8611](https://github.com/thingsboard/thingsboard/pull/8611) Fixed cookie deserialization by @YevhenBondarenko
  * [#8645](https://github.com/thingsboard/thingsboard/pull/8645) Fixed parsing of Rule Engine's Queue ServiceType REST API requests by @adovh
  * Fixed TBEL validation syntax by @nickAS21
  * [#8560](https://github.com/thingsboard/thingsboard/pull/8560) Fixed Alarm Repository to be compatible with PostgreSQL 14+ by @smatvienko-tb
  * [#8559](https://github.com/thingsboard/thingsboard/pull/8559) Fixed concurrent partition detach attempt with PostgreSQL 14+ during partitioned table cleanup by @smatvienko-tb
  * [#a6e2f6a](https://github.com/thingsboard/thingsboard/commit/a6e2f6aafb5733f107b40c7be0b7d116d220eb95) Bumped Apache Curator version to 5.5.0 by @ikulikov
  * [#4ec990c](https://github.com/thingsboard/thingsboard/commit/4ec990ca8a1154a2743de4d469408f54cc8ffde5) Fixed duplicates of devices the UI when they have multiple attributes with the name 'active' and different scope by @ashvayka

* Transport:

  * [#29602c2](https://github.com/thingsboard/thingsboard/commit/29602c208e82064588970e5b04d7b9e89d1392f3) Fixed MQTT 3.x connection error codes by @ashvayka
  * Fixed XXE vulnerability in LwM2M transport by @dashevchenko 

* UI:
  
  * [#1e9895b](https://github.com/thingsboard/thingsboard/commit/1e9895bdaf1974e46ec01cd8add8f719e0902eb1) Fixedvalid widget template errors processing by @ikulikov
  * [#6ccc216](https://github.com/thingsboard/thingsboard/commit/6ccc21632dbfa1bc237fb869111c2aebec93a563) Added the upgrade script to fix dashboard templates after Angular migration to ver. 15 by @ikulikov
  * [#8529](https://github.com/thingsboard/thingsboard/pull/8529) Fixed configuration form Rule Engine Queue Setting by @ArtemDzhereleiko
  * [#8531](https://github.com/thingsboard/thingsboard/pull/8531) Fixed display of the tooltip for the help icons various dialogs by @ArtemDzhereleiko
  * [#8539](https://github.com/thingsboard/thingsboard/pull/8539) Fixed configuration of the title various control widgets by @ArtemDzhereleiko
  * [#8546](https://github.com/thingsboard/thingsboard/pull/8546) Fixed fill color the API usage card widgets by @ArtemDzhereleiko
  * [#8578](https://github.com/thingsboard/thingsboard/pull/8578) Fixed custom translation the alarm widget, details and notifications by @ArtemDzhereleiko
  * [#8581](https://github.com/thingsboard/thingsboard/pull/8581) Fixed width of the select cell of the attribute table row by @ArtemDzhereleiko
  * [#8600](https://github.com/thingsboard/thingsboard/pull/8600) Fixed handle action "browser file" fileput components by @vvlladd28
  * [#8605](https://github.com/thingsboard/thingsboard/pull/8605) Fixed JSON value validations the 'Add attribute' dialog by @deaflynx
  * [#8641](https://github.com/thingsboard/thingsboard/pull/8641) Fixed setting time windowitialization being called twice by @vvlladd28
  * [#8597](https://github.com/thingsboard/thingsboard/pull/8597) Fixed layout of the tenant profile form by @ArtemDzhereleiko
  * [#8647](https://github.com/thingsboard/thingsboard/pull/8647) Fixed Chart widget legend settings expansion panel by @ArtemDzhereleiko
  * [#8670](https://github.com/thingsboard/thingsboard/pull/8670) Fixedfinite load the alarm table by @ArtemDzhereleiko
  


## v3.5.0 (May 9, 2023) {#v35}

Major release with the following features and bug fixes:

**Major Improvements:**

* Core & Rule Engine
  
  * [#7911](https://github.com/thingsboard/thingsboard/pull/7911) [Notification system](/docs/user-guide/notifications/) by @ViacheslavKlimov
  * [#7935](https://github.com/thingsboard/thingsboard/pull/7935) [Device provisioning](/docs/user-guide/certificates/?ubuntuThingsboardX509=x509Chain) using X509 certificate chains by @AndriiLandiak
  * [#8090](https://github.com/thingsboard/thingsboard/pull/8090) [Alarm assignment](/docs/user-guide/alarms/#how-to-assign-alarm-to-user) feature by @imbeacon    
  * [#7762](https://github.com/thingsboard/thingsboard/pull/7762) [Alarm comments](/docs/user-guide/alarms/#how-to-find-alarm-comments-and-add-your-own) feature by @dashevchenko

* UI
  
  * [#8247](https://github.com/thingsboard/thingsboard/pull/8247) Sidebar menu optimization by @ikulikov
  * New home page by @ikulikov
  * Improved entity pages by @ikulikov  
  * [#8169](https://github.com/thingsboard/thingsboard/pull/8169) Migrate to Angular 15 by @ikulikov

**Minor Improvements:**

* Core & Rule Engine
  
  * [#8414](https://github.com/thingsboard/thingsboard/pull/8414) Singleton mode for specific rule nodes by @YevhenBondarenko
  * [#8304](https://github.com/thingsboard/thingsboard/pull/8304) Added entity & API usage statistics REST API call by @YevhenBondarenko
  * [#8335](https://github.com/thingsboard/thingsboard/pull/8335) Devices activity statistics by @ViacheslavKlimov
  * [#7974](https://github.com/thingsboard/thingsboard/pull/7974) New nodes 'asset type switch' & 'device type switch' by @YuriyLytvynchuk
  * [#8051](https://github.com/thingsboard/thingsboard/pull/8051) User settings API by @dashevchenko
  * [#8094](https://github.com/thingsboard/thingsboard/pull/8094) Find users by query by @dashevchenko
  * [#8110](https://github.com/thingsboard/thingsboard/pull/8110) Moved password history from 'tb_user' to 'user_credentials' by @dashevchenko
  * [#7858](https://github.com/thingsboard/thingsboard/pull/7858) Rest API Call node - add ability to remove quotes from request body by @AndriiLandiak
  * [#7991](https://github.com/thingsboard/thingsboard/pull/7991) Ability to configure kafkajs *connectionTimeout* property by @AndreMaz
  * [#8026](https://github.com/thingsboard/thingsboard/pull/8026) Added possibility to specify multiple types,stead of single one entity filter by @volodymyr-babak
  * [#8241](https://github.com/thingsboard/thingsboard/pull/8241) Changed default value for wsMsgQueueLimitPerSession parameter by @dashevchenko
  * [#8353](https://github.com/thingsboard/thingsboard/pull/8353) Fixed xss vulnerabilities attributes and telemetry keys by @YevhenBondarenko
  * [#8398](https://github.com/thingsboard/thingsboard/pull/8398) Added new message types to rule engine by @dashevchenko
  
* UI

  * [#8017](https://github.com/thingsboard/thingsboard/pull/8017) Added quarter and half yeartervals to time window. by @devaskim
  * [#7926](https://github.com/thingsboard/thingsboard/pull/7926) Exclude specified subtypes from autocomplete widget. by @devaskim
  * [#8057](https://github.com/thingsboard/thingsboard/pull/8057) Leave only lower bound for widget's height mobile mode. by @devaskim
  * [#8071](https://github.com/thingsboard/thingsboard/pull/8071) Added Base64 functions to utils service. by @devaskim
  * [#8167](https://github.com/thingsboard/thingsboard/pull/8167) Added hint to the "Password / access token"put (Repository settings) by @kalutkaz
  * [#8255](https://github.com/thingsboard/thingsboard/pull/8255) Added "delete" icon to the default icon list by @kalutkaz
  * [#7625](https://github.com/thingsboard/thingsboard/pull/7625) Added dashboard filter duplication option by @devaskim
  * [#8272](https://github.com/thingsboard/thingsboard/pull/8272) Refactoring dashboard-select component by @kalutkaz
  * [#8072](https://github.com/thingsboard/thingsboard/pull/8072) Optionally update dashboard state when using navigate back API. by @devaskim
  * [#8287](https://github.com/thingsboard/thingsboard/pull/8287) API version 3 support has been added to HERE map widget by @vvlladd28
  * [#8294](https://github.com/thingsboard/thingsboard/pull/8294) Update links for alarmfo widget custom action help by @ChantsovaEkaterina
  * [#5311](https://github.com/thingsboard/thingsboard/pull/5311) Ability to handle JSON attribute edit multiple by @Dmitriymush
  * [#8298](https://github.com/thingsboard/thingsboard/pull/8298) Added label parsing select entity dialog by @kalutkaz
  * [#8351](https://github.com/thingsboard/thingsboard/pull/8351) Updated tinycolor for version 1.6.0 by @vvlladd28
  * [#8364](https://github.com/thingsboard/thingsboard/pull/8364) Redesign of color picker by @ArtemDzhereleiko
  * [#8409](https://github.com/thingsboard/thingsboard/pull/8409) Add help link for calculate delta rule node by @ArtemDzhereleiko
  * [#8396](https://github.com/thingsboard/thingsboard/pull/8396) Fixed validation of the TBEL "foreach" loop the "Script fuction" UI component by @nickAS21
  * [#8419](https://github.com/thingsboard/thingsboard/pull/8419) Added assetProfileService to ServicesMap by @devaskim
  * [#8447](https://github.com/thingsboard/thingsboard/pull/8447) Copy button for attribute table by @ArtemDzhereleiko
  * [#8438](https://github.com/thingsboard/thingsboard/pull/8438) Widget extension module support custom action by @ChantsovaEkaterina
  
* Transport
  
  * [#7596](https://github.com/thingsboard/thingsboard/pull/7596) Mqtt v5 reason codes for connect, ack and disconnect messages by @imbeacon
  * [#6986](https://github.com/thingsboard/thingsboard/pull/6986) Added ability to create&subscribe custom mqtt attributes topics by @adovh
  * [#8186](https://github.com/thingsboard/thingsboard/pull/8186) MQTT Sparkplug protocol support by @nickAS21
  
* Edge
  
  * [#7862](https://github.com/thingsboard/thingsboard/pull/7862) Push latest timeseries key-value pair to edge on assignment entity to edge by @volodymyr-babak
  * [#7878](https://github.com/thingsboard/thingsboard/pull/7878) Add edge install instructions for docker  by @volodymyr-babak
  * [#7914](https://github.com/thingsboard/thingsboard/pull/7914) Added default edge rule chain to asset/device profiles by @volodymyr-babak
  * [#8301](https://github.com/thingsboard/thingsboard/pull/8301) Edge computing solution templates by @volodymyr-babak
  * [#8340](https://github.com/thingsboard/thingsboard/pull/8340) Handle gRPC messages exceeding default max message size by @volodymyr-babak
  * [#8344](https://github.com/thingsboard/thingsboard/pull/8344) Push edge connect/disconnect events to rule chain by @volodymyr-babak
  * [#8346](https://github.com/thingsboard/thingsboard/pull/8346) Improved Keep Alive Functionality between Edge and Cloud to Prevent Data Loss by @volodymyr-babak

**Bug fixes**

* Core & Rule Engine
  
  * [#8108](https://github.com/thingsboard/thingsboard/pull/8108) Bugfix for remove latest telemetry by @ShvaykaD
  * [#8138](https://github.com/thingsboard/thingsboard/pull/8138) Fixed filtering by entity name by @YevhenBondarenko
  * [#8310](https://github.com/thingsboard/thingsboard/pull/8310) Fixed forcorrect longtegers, sent on ws to FE  by @adovh
  * [#7857](https://github.com/thingsboard/thingsboard/pull/7857) Report device activity during RPC processing by @ShvaykaD
  * [#8238](https://github.com/thingsboard/thingsboard/pull/8238) Fixed xss vulnerabilities attributes and telemetry by @adovh
  * [#8375](https://github.com/thingsboard/thingsboard/pull/8375) Fixed deduplication and delay rule nodes outgoing messages processing by @ShvaykaD
  * [#8376](https://github.com/thingsboard/thingsboard/pull/8376) Fixed external id substitution when loading version of dashboard or rule chain by @ViacheslavKlimov
  * [#8387](https://github.com/thingsboard/thingsboard/pull/8387) Fixed telemetry/attribute update while device bulk import by @dashevchenko
  * [#8435](https://github.com/thingsboard/thingsboard/pull/8435) Fixedvalid removed outdated alarms count logs  by @ViacheslavKlimov
  * [#8444](https://github.com/thingsboard/thingsboard/pull/8444) Fixed asset lifecycle message broadcasting cluster mode by @dashevchenko
  * [#8449](https://github.com/thingsboard/thingsboard/pull/8449) Fixed using default timeout and improvements by @YevhenBondarenko

* UI
  
  * [#8062](https://github.com/thingsboard/thingsboard/pull/8062) Refactoring time window component by @ArtemDzhereleiko
  * [#7823](https://github.com/thingsboard/thingsboard/pull/7823) Fixed different size sort header arrow by @ArtemDzhereleiko
  * [#8118](https://github.com/thingsboard/thingsboard/pull/8118) 'Horizontal bar' widget displayscorrectly decimal values that ends with zeros by @deaflynx
  * [#8264](https://github.com/thingsboard/thingsboard/pull/8264) Fixed labelText andput text to entity autocomplete by @kalutkaz
  * [#8267](https://github.com/thingsboard/thingsboard/pull/8267) Fixed locales for tenant profile field "REST requests for tenant" by @deaflynx
  * [#8413](https://github.com/thingsboard/thingsboard/pull/8413) Fixed error when call test function rule node by @vvlladd28
  * [#8428](https://github.com/thingsboard/thingsboard/pull/8428) Fixed help link for resources by @vvlladd28
  * [#8458](https://github.com/thingsboard/thingsboard/pull/8458) Fixed add/edit entity custom action code samples by @ChantsovaEkaterina
  
* Edge
  
  * [#8274](https://github.com/thingsboard/thingsboard/pull/8274) Alarm entity that was delivered from the edge is stored with provided ID by @volodymyr-babak
  * [#7929](https://github.com/thingsboard/thingsboard/pull/7929) Push public customer to the edge - fixes usage of public dashboards on the edge by @volodymyr-babak



  
## v3.4.4 (February 7, 2023)  

**Improvements**

* UI:
  
  * [#7951](https://github.com/thingsboard/thingsboard/pull/7951) Queue autocomplete addput hint by @kalutkaz
  * [#7884](https://github.com/thingsboard/thingsboard/pull/7884) Update locale.constant-zh_TW.json by @wusung
  * [#7863](https://github.com/thingsboard/thingsboard/pull/7863) Optimizations for dashboard-pages that open popover or dialog. by @Terny22
  * [#7837](https://github.com/thingsboard/thingsboard/pull/7837) Remove default device profile from OTA updates creation form by @ArtemDzhereleiko

**Bug fixes**

* Core & Rule Engine:
  
  * [#7838](https://github.com/thingsboard/thingsboard/pull/7838) Fixed device sessions dump by @YevhenBondarenko
  * [#7963](https://github.com/thingsboard/thingsboard/pull/7963) Fixed js cache by @YevhenBondarenko
  * [#8009](https://github.com/thingsboard/thingsboard/pull/8009) Rollback "tellFailure" logic change TbAbstractGetAttributesNode by @ShvaykaD
  * [#8002](https://github.com/thingsboard/thingsboard/pull/8002) Fixed data convertion for BigInteger values that stored DB as String by @ShvaykaD

* UI:
  
  * [#7871](https://github.com/thingsboard/thingsboard/pull/7871) Detected changes of switching fixed layout side by @ArtemDzhereleiko
  * [#7868](https://github.com/thingsboard/thingsboard/pull/7868) Fixedcorrect calculate width when used right layout dashboard by @vvlladd28
  * [#7903](https://github.com/thingsboard/thingsboard/pull/7903) Fixed gap for widget setting mobile mod and fix translation by @ArtemDzhereleiko
  * [#7875](https://github.com/thingsboard/thingsboard/pull/7875) Fixed phoneput update on save changes by @ArtemDzhereleiko
  * [#7873](https://github.com/thingsboard/thingsboard/pull/7873) Fixed when deleting a value the search field time shows null value by @vvlladd28
  * [#8010](https://github.com/thingsboard/thingsboard/pull/8010) Fixed auto-indexing for keys with aggregation by @ArtemDzhereleiko
  * [#8012](https://github.com/thingsboard/thingsboard/pull/8012) Fixed applying custom translation to labels of latest data keys timeseries widgets by @ChantsovaEkaterina
  * [#8013](https://github.com/thingsboard/thingsboard/pull/8013) Fixed error on loading custom widgets module withing dashboard state component by @ChantsovaEkaterina
  * [#8054](https://github.com/thingsboard/thingsboard/pull/8054) Fixedcorrect resolve state entity by @vvlladd28
  * [#8031](https://github.com/thingsboard/thingsboard/pull/8031) Fixed device profile url for navigation cards settings by @ArtemDzhereleiko
  * [#8037](https://github.com/thingsboard/thingsboard/pull/8037) Fixed loading widget resources, when one of the resources is marked as module by @ChantsovaEkaterina
  
## v3.4.3 (December 21, 2022)  

**Improvements**

* Core & Rule Engine:
  * [#7778](https://github.com/thingsboard/thingsboard/pull/7778) Version control: 'Show merge commits' option, improved entity versions comparing by @ViacheslavKlimov

* UI:
  * [#7785](https://github.com/thingsboard/thingsboard/pull/7785) Danish language by @vvlladd28
  * [#7795](https://github.com/thingsboard/thingsboard/pull/7795) Always visible action button in multiple input widgets by @vvlladd28 

**Bug fixes**

* Core & Rule Engine:

  * [#7752](https://github.com/thingsboard/thingsboard/pull/7752) Fixed asset's profile changing by @ViacheslavKlimov
  * [#7761](https://github.com/thingsboard/thingsboard/pull/7761) Fixed no timeseries data in widget for entity view; fix State Chart invalid behavior by @ViacheslavKlimov
  * [#7773](https://github.com/thingsboard/thingsboard/pull/7773) Fixed getting a lot of updates over WS in case of aggregation query, even if no real updates happened by @volodymyr-babak
  * [#7783](https://github.com/thingsboard/thingsboard/pull/7783) Fixed device bulk import with empty credentials by @YevhenBondarenko
  * [#7786](https://github.com/thingsboard/thingsboard/pull/7786) Fixed saveDeviceWithCredentials notifications by @YevhenBondarenko 
  * [#7791](https://github.com/thingsboard/thingsboard/pull/7791) Fixed support of empty arrays in 'split array msg' rule node by @YuriyLytvynchuk
  * [#7801](https://github.com/thingsboard/thingsboard/pull/7801) Added DeviceProfileService and AssetProfileService to TBContext by @dashevchenko
  
* UI:
  
  * [#7758](https://github.com/thingsboard/thingsboard/pull/7758) Fixed validation in bulk import and improvement bulk import for Edge by @vvlladd28
  * [#7782](https://github.com/thingsboard/thingsboard/pull/7782) Fixed Catalan locale designator by @ArtemDzhereleiko

* Edge:
  
  * [#7792](https://github.com/thingsboard/thingsboard/pull/7792) Edge root rule chain update fix. USER entity support added. INACTIVITY_TIMEOUT pushed to edge. by @volodymyr-babak

## v3.4.2 (December 1, 2022)

Minor release with the following features and bug fixes:

**Major Improvements:**

* Core & Rule Engine:

  * [#7455](https://github.com/thingsboard/thingsboard/pull/7455) TBEL executor;
  * [#7342](https://github.com/thingsboard/thingsboard/pull/7342) Asset Profiles Feature;
  * [#7371](https://github.com/thingsboard/thingsboard/pull/7371) TTL and table partitioning for audit logs;
  * [#7564](https://github.com/thingsboard/thingsboard/pull/7564) Table partitioning for edge events;    
  * [#7347](https://github.com/thingsboard/thingsboard/issues/7347) New rule node: 'math function';
  * [#7297](https://github.com/thingsboard/thingsboard/pull/7297) Generate random JWT on install or upgrade;   

* UI:

  * [#7288](https://github.com/thingsboard/thingsboard/pull/7288) Support of aggregation for the latest values in the widget data source;

* Edge:

  * [#7592](https://github.com/thingsboard/thingsboard/pull/7592) Support of Device to Cloud RPC Requests;
  

**Minor Improvements:**

* Core & Rule Engine:

  * [#7339](https://github.com/thingsboard/thingsboard/pull/7339) DB calls stats by tenant in the logs;
  * [#7350](https://github.com/thingsboard/thingsboard/pull/7350) Limits for JS script body, input args and invocation result size;
  * [#7403](https://github.com/thingsboard/thingsboard/pull/7403) Improvements for the JS executor request payload size;      
  * [#7483](https://github.com/thingsboard/thingsboard/pull/7483) Version control Repository settings with 'Read-only' flag;
  * [#7245](https://github.com/thingsboard/thingsboard/pull/7245) Add 'Entity' source to the 'change originator node';
  * [#7341](https://github.com/thingsboard/thingsboard/pull/7341) Email validation pattern improvements;
  * [#7239](https://github.com/thingsboard/thingsboard/pull/7239) New rule node: 'fetch device credentials';
  * [#7240](https://github.com/thingsboard/thingsboard/pull/7240) New rule node: 'copy keys';
  * [#7241](https://github.com/thingsboard/thingsboard/pull/7241) New rule node: 'rename keys';    
  * [#7242](https://github.com/thingsboard/thingsboard/pull/7242) New rule node: 'delete keys';
  * [#7243](https://github.com/thingsboard/thingsboard/pull/7243) New rule node: 'json path';
  * [#7244](https://github.com/thingsboard/thingsboard/pull/7244) New rule node: 'split array msg';
  * [#7238](https://github.com/thingsboard/thingsboard/pull/7238) New rule node: 'delete attributes';
  * [#7278](https://github.com/thingsboard/thingsboard/pull/7278) Redirect to the targeted url after the successful login via oauth2;
  * [#7367](https://github.com/thingsboard/thingsboard/pull/7367) Details rule node returns entity's ID as well;
  * [#7370](https://github.com/thingsboard/thingsboard/pull/7370) Added support of creating relation to USER entity;
  * [#7394](https://github.com/thingsboard/thingsboard/pull/7394) Add 'retained' button for MQTT rule node;
  * [#7425](https://github.com/thingsboard/thingsboard/pull/7425) Optional key pattern field for Kafka rule node;
  * [#7442](https://github.com/thingsboard/thingsboard/pull/7442) Upgrade protobuf version from 3.17.2 -> 3.21.7, support Mac M1(ARM Core) protobuf files compile;
  * [#7522](https://github.com/thingsboard/thingsboard/pull/7522) Postgresql driver update up to 42.5.0;
  * [#7538](https://github.com/thingsboard/thingsboard/pull/7538) Alarm service optimization - remove async().get() calls from synchronous methods;
  * [#7377](https://github.com/thingsboard/thingsboard/pull/7377) Add ability to fetch attributes/latest telemetry to msg data in rule nodes;
  * [#7548](https://github.com/thingsboard/thingsboard/pull/7548) Improvement to the recursive relations query;
  * [#7453](https://github.com/thingsboard/thingsboard/pull/7453) Audit log on oauth2 login;    
  * [#7435](https://github.com/thingsboard/thingsboard/pull/7435) JWT invalidate on logout;
  * [#7541](https://github.com/thingsboard/thingsboard/pull/7541) Use default SQL null ordering for ts_kv;
  * [#7587](https://github.com/thingsboard/thingsboard/pull/7587) HTTP client returns headers as an array if there is more than one;
  * [#7629](https://github.com/thingsboard/thingsboard/pull/7629) Cassandra partition 'always exists' mode to optimize queries;
  * [#7666](https://github.com/thingsboard/thingsboard/pull/7666) Add options send notifications for 'save attribute' & 'delete attribute' rule nodes;  

* UI:
  * [#7304](https://github.com/thingsboard/thingsboard/pull/7304) Let data keys of entities widget to hide in mobile mode;  
  * [#7084](https://github.com/thingsboard/thingsboard/pull/7084) Pass widget context to callback of entities hierarchy widget;
  * [#7230](https://github.com/thingsboard/thingsboard/pull/7230) Added Catalan locale;  
  * [#6374](https://github.com/thingsboard/thingsboard/pull/6374) Dashboard layouts width configuration;
  * [#7267](https://github.com/thingsboard/thingsboard/pull/7267) Added new widget-subscription setting - "onTimewindowChangeFunction";
  * [#7386](https://github.com/thingsboard/thingsboard/pull/7386) Add widget context API call to create alarm queries;
  * [#7436](https://github.com/thingsboard/thingsboard/pull/7436) Added API to close dashboard opened as dialog;
  * [#7458](https://github.com/thingsboard/thingsboard/pull/7458) Update zh_CN locale;
  * [#7248](https://github.com/thingsboard/thingsboard/pull/7248) Update de_DE locale;    
  * [#7311](https://github.com/thingsboard/thingsboard/pull/7311) Added clustering markers color function;
  * [#7387](https://github.com/thingsboard/thingsboard/pull/7387) Added support of custom table header title in addition to data key label;
  * [#7475](https://github.com/thingsboard/thingsboard/pull/7475) Form field appearance in timezone and entity autocomplete components;
  * [#7531](https://github.com/thingsboard/thingsboard/pull/7531) Chart thresholds support array of values;
  * [#7356](https://github.com/thingsboard/thingsboard/pull/7356) Let user to drag-n-drop widget actions in list;
  * [#7534](https://github.com/thingsboard/thingsboard/pull/7534) Let phone component to accept numbers with spaces, hyphens and parenthesis;
  * [#7275](https://github.com/thingsboard/thingsboard/pull/7275) Add API to create telemetry websocket updater in custom widgets;  

* Transports:

  * [#7232](https://github.com/thingsboard/thingsboard/pull/7232) DTLS retransmission timeout is now configurable and set to 9 seconds by default;
  * [#7519](https://github.com/thingsboard/thingsboard/pull/7519) Make log shorter on IOException for MQTT transport;  

* Edge:

  * [#7395](https://github.com/thingsboard/thingsboard/pull/7395) Customers hierarchy support;
  * [#7478](https://github.com/thingsboard/thingsboard/pull/7478) Added functionality to drop messages that are not able to be processed by the edge;  

* Build scripts:

  * [#7155](https://github.com/thingsboard/thingsboard/pull/7155) Update bouncycastle from 1.67 to 1.69 to avoid duplicate of dependencies;
  * [#7518](https://github.com/thingsboard/thingsboard/pull/7518) Cassandra cloud connects to Datastax Astra DB;
  * [#7566](https://github.com/thingsboard/thingsboard/pull/7566) Moved black-box tests to TestNG;
  * [#7665](https://github.com/thingsboard/thingsboard/pull/7665) Provisioning black box tests;
  * [#7686](https://github.com/thingsboard/thingsboard/pull/7686) Compatibility with Compose V2 in the docker compose scripts;   

**Bug Fixes**

* Core & Rule Engine:

  * [#7544](https://github.com/thingsboard/thingsboard/pull/7544) Inactivity timeout fix;
  * [#7385](https://github.com/thingsboard/thingsboard/pull/7385) Additional validation for AuditLog entities; 
  * [#7145](https://github.com/thingsboard/thingsboard/pull/7145) Make entity relations deletion transactional;
  * [#7157](https://github.com/thingsboard/thingsboard/pull/7157) SNMP/CoAP/LWM2M device profile transport configuration missing Serialization;
  * [#7547](https://github.com/thingsboard/thingsboard/pull/7547) TbMsgProcessingStackItem missing Serialization;
  * [#7268](https://github.com/thingsboard/thingsboard/pull/7268) 'originator telemetry' rule node;
  * [#7246](https://github.com/thingsboard/thingsboard/pull/7246) Check value for "null" in the 'originator fields' rule node;
  * [#7316](https://github.com/thingsboard/thingsboard/pull/7316) Default destroy method bug fix in the TbNode interface;
  * [#7381](https://github.com/thingsboard/thingsboard/pull/7381) Add inactivity event support to the 'copy to view' rule node;
  * [#7456](https://github.com/thingsboard/thingsboard/pull/7456) SQL batch sort enabled by default; additional deadlock logging;
  * [#7237](https://github.com/thingsboard/thingsboard/pull/7237) Improve the processException extension for tbHttpClient;
  * [#7250](https://github.com/thingsboard/thingsboard/pull/7250) Bulk import null node handling fix;
  * [#7324](https://github.com/thingsboard/thingsboard/pull/7324) Fix for rate limits filter;
  * [#7552](https://github.com/thingsboard/thingsboard/pull/7552) Fix Cassandra prepared statement produces NullPointerException due to race condition;
  * [#7554](https://github.com/thingsboard/thingsboard/pull/7554) Fix alarm subscriptions on REST API call;
  * [#7549](https://github.com/thingsboard/thingsboard/pull/7549) Check tenant entity for rule nodes;
  * [#7589](https://github.com/thingsboard/thingsboard/pull/7589) Fix of alarm count query with null sortOrder and textSearch specified;
  * [#7636](https://github.com/thingsboard/thingsboard/pull/7636) Validation for entity's additionalInfo;
  * [#7699](https://github.com/thingsboard/thingsboard/pull/7699) Fixed queue notifications in monolith mode;
  * [#7707](https://github.com/thingsboard/thingsboard/pull/7707) OTA image assigned to device profile does not populate device shared properties;  
  
* UI:

  * [#7127](https://github.com/thingsboard/thingsboard/pull/7127) Fixed tooltip display in map edit button; 
  * [#7181](https://github.com/thingsboard/thingsboard/pull/7181) Fixed close tooltip button for map widgets;
  * [#6917](https://github.com/thingsboard/thingsboard/pull/6917) Let custom widget to process no-data case;
  * [#7092](https://github.com/thingsboard/thingsboard/pull/7092) Fixed DatetimeAdapter for 'en-GB' locale;
  * [#7129](https://github.com/thingsboard/thingsboard/pull/7129) Fixed Pie-Flot issue with timewindow display;
  * [#7131](https://github.com/thingsboard/thingsboard/pull/7131) Fixed TextSearch input for tenants does not resolve empty field properly;
  * [#7159](https://github.com/thingsboard/thingsboard/pull/7159) Fixed displaying of Markdown/HTML value function content in markdown widget settings;
  * [#7174](https://github.com/thingsboard/thingsboard/pull/7174) Fixed label polyline/circle follow the mouse for image map;
  * [#7211](https://github.com/thingsboard/thingsboard/pull/7211) Fixed file input loader;
  * [#7217](https://github.com/thingsboard/thingsboard/pull/7217) Text 'Items per page' in table widgets are not translated;
  * [#7251](https://github.com/thingsboard/thingsboard/pull/7251) Update message type list for rule node relations;
  * [#7236](https://github.com/thingsboard/thingsboard/pull/7236) Allow whitespace in issuer name at TOTP 2FA provider;
  * [#7290](https://github.com/thingsboard/thingsboard/pull/7290) Widget datasource css issues;
  * [#7326](https://github.com/thingsboard/thingsboard/pull/7326) Fixed check isEmpty validation in EntityDataCmd models;
  * [#7360](https://github.com/thingsboard/thingsboard/pull/7360) Let user to selective export widget bundles to version control;
  * [#7471](https://github.com/thingsboard/thingsboard/pull/7471) Fixed height and console error for Event filter panel;
  * [#7500](https://github.com/thingsboard/thingsboard/pull/7500) Use row layout on screen bigger than xs size;
  * [#7485](https://github.com/thingsboard/thingsboard/pull/7485) Fix phone dial code detection for default country;
  * [#7365](https://github.com/thingsboard/thingsboard/pull/7365) Fix markdown widget by @kalutkaz;
  * [#7591](https://github.com/thingsboard/thingsboard/pull/7591) Fixed function setFixedLayout in dashboard layout;
  * [#7618](https://github.com/thingsboard/thingsboard/pull/7618) Fixes delete attribute or telemetry whose name has special characters;
  * [#7652](https://github.com/thingsboard/thingsboard/pull/7652) Fixed custom dashboard CSS was not applied when a dashboard is full-screen;
  * [#7658](https://github.com/thingsboard/thingsboard/pull/7658) Make possible to hide widget in desktop mode;
  
* Edge:

  * [#7093](https://github.com/thingsboard/thingsboard/pull/7093) Edge sync functionality - fixed cluster support; 
  * [#7214](https://github.com/thingsboard/thingsboard/pull/7214) Notify devices in case shared attribute updates from edge;
  * [#7651](https://github.com/thingsboard/thingsboard/pull/7651) Updates to stability of synchronization between edge and cloud in case of many events simultaneously;  

* Build scripts:

  * [#7199](https://github.com/thingsboard/thingsboard/pull/7199) Fixed default value of the events.debug_partition_size env variable;
  * [#7402](https://github.com/thingsboard/thingsboard/pull/7402) Update package version for tb docker images;  
  * [#7555](https://github.com/thingsboard/thingsboard/pull/7555) improved lifecycle events and added kill for crash event for js-executor;
  * [#7655](https://github.com/thingsboard/thingsboard/pull/7655) added max_old_space_size to node.js based modules.
  
## We welcome our new contributors:

  * [@ashaforost](https://github.com/ashaforost) made their first contribution in [#7199](https://github.com/thingsboard/thingsboard/pull/7199)
  * [@Lenteguppie](https://github.com/Lenteguppie) made their first contribution in [#7394](https://github.com/thingsboard/thingsboard/pull/7394)
  * [@adrianAzoitei](https://github.com/adrianAzoitei) made their first contribution in [#7425](https://github.com/thingsboard/thingsboard/pull/7425)
  * [@sanshengshui](https://github.com/sanshengshui) made their first contribution in [#7442](https://github.com/thingsboard/thingsboard/pull/7442)
  * [@Fliner](https://github.com/Fliner) made their first contribution in [#7458](https://github.com/thingsboard/thingsboard/pull/7458)
  * [@AndriiLandiak](https://github.com/AndriiLandiak) made their first contribution in [#7564](https://github.com/thingsboard/thingsboard/pull/7564)
  * [@dashevchenko](https://github.com/dashevchenko) made their first contribution in [#7566](https://github.com/thingsboard/thingsboard/pull/7566)
  * [@struggle3](https://github.com/struggle3) made their first contribution in [#7581](https://github.com/thingsboard/thingsboard/pull/7581)

  
## v3.4.1 (August 18, 2022)

**Minor** release with the following improvements and bug fixes:

* Core:
  * Improved performance and stability of the [Device State Service](https://thingsboard.io/docs/user-guide/device-connectivity-status/);
  * [#6983](https://github.com/thingsboard/thingsboard/pull/6983) Fixed start up failure due to Spring circular dependencies;
  * [#6923](https://github.com/thingsboard/thingsboard/pull/6923) Replaced deprecated StringUtils usages with in-repository implementation;
  * [#6959](https://github.com/thingsboard/thingsboard/pull/6959) Fixed auto-convertion of string values that start with '0' to double in EntityDataAdapter;
  * [#6972](https://github.com/thingsboard/thingsboard/pull/6972) Fixed upgrade script to 3.4.0;
  * [#7026](https://github.com/thingsboard/thingsboard/pull/7026) Fixed serialization in 2FA;
  * [#7041](https://github.com/thingsboard/thingsboard/pull/7041) Fixed update or removal of 'inactivityTimeout' attribute;
* UI:
  * [#7025](https://github.com/thingsboard/thingsboard/pull/7025) Added new column and copy buttons in rule node debug events table;
  * [#6980](https://github.com/thingsboard/thingsboard/pull/6980) Added relation tab to user details;
  * [#6979](https://github.com/thingsboard/thingsboard/pull/6979) Improved the rate limits view in Tenant profiles  
  * [#6978](https://github.com/thingsboard/thingsboard/pull/6978) Improved rhe mobile view in widgets setting;
  * [#6987](https://github.com/thingsboard/thingsboard/pull/6987) Fixed redirect to the previous link after login with 2FA;
  * [#7011](https://github.com/thingsboard/thingsboard/pull/7011) Fixed custom marker size for map widgets;
  * [#7012](https://github.com/thingsboard/thingsboard/pull/7012) Updated leaflet version to 1.8;
  * [#7055](https://github.com/thingsboard/thingsboard/pull/7055) Fixed predefined thresholds in Flot widgets;
  * [#7073](https://github.com/thingsboard/thingsboard/pull/7073) Fixed incorrect Japanese language locale name;
  * [#7086](https://github.com/thingsboard/thingsboard/pull/7086) Fixed bug with double calling code;     
  * [#7097](https://github.com/thingsboard/thingsboard/pull/7097) Minor fix in 2FA;
  * [#7105](https://github.com/thingsboard/thingsboard/pull/7105) Fixed bug in circle positioning;
  * [#7108](https://github.com/thingsboard/thingsboard/pull/7108) Fixed table shift after triple click;
* Transport:
  * [#6967](https://github.com/thingsboard/thingsboard/pull/6967) Fixed Netty MQTT client ping/pong logic;
  * [#0bc5be4](https://github.com/thingsboard/thingsboard/commit/0bc5be477c585af7953d44824bfcd74a3c4ee50c) Coap device profile update fix for sessions with no observations;
* Edge:
  * [#6953](https://github.com/thingsboard/thingsboard/pull/6953) Check for missing edge rule chain during unassign of rule chain(s) from edge;
  * [#7044](https://github.com/thingsboard/thingsboard/pull/7044) Firmware ID not synced from cloud to edge in device / device profiles;
  * [#7095](https://github.com/thingsboard/thingsboard/pull/7095) Start regular edge event process after sync completed;
  

  
## v3.4 (July 19, 2022)

Major release with the following features and bug fixes:

**Major Improvements:**

* Core & Rule Engine:
  * [#6534](https://github.com/thingsboard/thingsboard/pull/6534) Configuration of Rule Engine queues via Tenant Profiles. See documentation [here](/docs/user-guide/rule-engine-2-5/queues/);
  * [#6070](https://github.com/thingsboard/thingsboard/issues/6070) 2FA support. See documentation [here](/docs/user-guide/two-factor-authentication/).
  * [#6759](https://github.com/thingsboard/thingsboard/pull/6759) Version Control (Git integration). See documentation [here](/docs/user-guide/version-control/).
  * [#6893](https://github.com/thingsboard/thingsboard/pull/6893) Refactor JS-Executor microservice to typescript;  
* UI:
  * [#6334](https://github.com/thingsboard/thingsboard/issues/6334) Support of the latest values in the time-series widgets;
  * [#6545](https://github.com/thingsboard/thingsboard/pull/6545) Replace auto-generated advanced widget settings JSON forms with Angular components;
* Edge:
  * [#6781](https://github.com/thingsboard/thingsboard/pull/6781) Edge OTA support;
  * [#6852](https://github.com/thingsboard/thingsboard/pull/6852) Queue API support.
  
**Minor Improvements:**

* Core & Rule Engine:
  * [#6483](https://github.com/thingsboard/thingsboard/pull/6483) Refactoring of some REST controllers code to Entity Services; 
    See PRs: [#6533](https://github.com/thingsboard/thingsboard/pull/6533), [#6540](https://github.com/thingsboard/thingsboard/pull/6540), [#6551](https://github.com/thingsboard/thingsboard/pull/6551),
    [#6582](https://github.com/thingsboard/thingsboard/pull/6582), [#6593](https://github.com/thingsboard/thingsboard/pull/6593), [#6695](https://github.com/thingsboard/thingsboard/pull/6695);
  * [#6358](https://github.com/thingsboard/thingsboard/issues/6358) Improved query logging;
  * [#6412](https://github.com/thingsboard/thingsboard/pull/6412) InMemoryStorage refactored from the static singleton to the Spring Bean;
  * [#6422](https://github.com/thingsboard/thingsboard/pull/6422) In memory storage improvements;
  * [#6485](https://github.com/thingsboard/thingsboard/pull/6485) Refactoring of Spring Security annotations according to new Spring release;
  * [#6767](https://github.com/thingsboard/thingsboard/issues/6767) Improved JS executor performance and memory foot-print;
  * [#6785](https://github.com/thingsboard/thingsboard/pull/6785) EntityViewService optimization using local cache and lifecycle event broadcasting;
  * [#6780](https://github.com/thingsboard/thingsboard/pull/6780) QueueKey toString for a better logging experience;
  * [#6888](https://github.com/thingsboard/thingsboard/pull/6888) Expiration time for JS executor tasks to improve performance;
  * [#6201](https://github.com/thingsboard/thingsboard/issues/6201) SMPP SMS provider;
  * [#5818](https://github.com/thingsboard/thingsboard/pull/5818) Add support for dynamic values for schedules in alarm rules;
  * [#5959](https://github.com/thingsboard/thingsboard/pull/5959) Cacheable tenantExists method and refactor usages in validators;
* UI:
  * [#6675](https://github.com/thingsboard/thingsboard/pull/6675) Added 'Security' page;
  * [#6555](https://github.com/thingsboard/thingsboard/pull/6555) Add 'Maximum entities per datasource' parameter to widget configuration;
  * [#6432](https://github.com/thingsboard/thingsboard/pull/6432) Update Italian locale;
  * [#6626](https://github.com/thingsboard/thingsboard/pull/6626) Update Spanish locale;
  * [#6914](https://github.com/thingsboard/thingsboard/pull/6914) Update French locale; 
  * [#6584](https://github.com/thingsboard/thingsboard/pull/6584) Add Chinese translations for edge;
  * [#6434](https://github.com/thingsboard/thingsboard/pull/6434) Fix validation logic for JSON in attributes edit form;
  * [#6635](https://github.com/thingsboard/thingsboard/pull/6635) Add resource service to widget context;
  * [#6650](https://github.com/thingsboard/thingsboard/pull/6650) Phone input with country flags;
  * [#6725](https://github.com/thingsboard/thingsboard/pull/6725) Added validation for a required label in dataKey setting;
  * [#6728](https://github.com/thingsboard/thingsboard/pull/6728) Export all RxJS API into custom widget context;
  * [#6733](https://github.com/thingsboard/thingsboard/pull/6733) Use default image in the image-map widget;
  * [#6805](https://github.com/thingsboard/thingsboard/pull/6805) Layout for tenant profiles and queues;
  * [#6788](https://github.com/thingsboard/thingsboard/pull/6788) Add option to show the latest values in the widget's legend;
  * [#6836](https://github.com/thingsboard/thingsboard/pull/6836) Support of 'flush all' operations in case we use Redis cluster;
* Transport:
  * [#6522](https://github.com/thingsboard/thingsboard/pull/6522) Piggybacked CoAP responses;
  * [#6233](https://github.com/thingsboard/thingsboard/issues/6233) Configuration of MQTT transport behavior on message validation failure;
  * [#6486](https://github.com/thingsboard/thingsboard/pull/6486) Refactored MQTT and COAP integration tests;
  * [#6919](https://github.com/thingsboard/thingsboard/pull/6919) Refactored LwM2M integration tests;
  * [#6667](https://github.com/thingsboard/thingsboard/issues/6667) Kafka producer compression configuration;
* Edge:
  * [#6684](https://github.com/thingsboard/thingsboard/pull/6684) Report device activity from Edge;
  * [#6443](https://github.com/thingsboard/thingsboard/issues/6443) Updated default edge root rule chain to handle `Attributes Deleted`, `Timeseries Deleted`, `Timeseries Updated` messages by default;
* Build scripts:
  * [#6190](https://github.com/thingsboard/thingsboard/pull/6190) Docker image size optimization. See PRs: [#6784](https://github.com/thingsboard/thingsboard/pull/6784);
  * [#6265](https://github.com/thingsboard/thingsboard/pull/6265) Updated third-party versions. See PRs: [#6687](https://github.com/thingsboard/thingsboard/issues/6687), [#6709](https://github.com/thingsboard/thingsboard/pull/6709);
  * [#6415](https://github.com/thingsboard/thingsboard/pull/6415) Test speed up. See also PRs: [#6431](https://github.com/thingsboard/thingsboard/pull/6431), [#6537](https://github.com/thingsboard/thingsboard/pull/6537), 
    [#6603](https://github.com/thingsboard/thingsboard/pull/6603);
  * [#6504](https://github.com/thingsboard/thingsboard/pull/6504) Refactoring of SQL Test Suite;
  * [#6793](https://github.com/thingsboard/thingsboard/pull/6793) Tests for Redis cluster;
  * [#6847](https://github.com/thingsboard/thingsboard/pull/6847) Check folder permissions in docker-compose scripts.
  
**Bug Fixes**

* Core & Rule Engine:
  * [#6536](https://github.com/thingsboard/thingsboard/pull/6536) Misc cache issues with race conditions;
  * [#6910](https://github.com/thingsboard/thingsboard/pull/6910) Mail server timeout implementation;
  * [#6535](https://github.com/thingsboard/thingsboard/pull/6535) Handling alarm deletion and attributes deletion in DeviceState;
  * [#4666](https://github.com/thingsboard/thingsboard/issues/4666) Encoding of request params in the Rest API call rule node;
  * [#6315](https://github.com/thingsboard/thingsboard/issues/6315) Kafka rule node;
  * [#6323](https://github.com/thingsboard/thingsboard/issues/6323) Entity views caching;
  * [#6330](https://github.com/thingsboard/thingsboard/pull/6330) SQL error on reinstall;
  * [#6446](https://github.com/thingsboard/thingsboard/pull/6446) Method to upload OTA binary file via Swagger ui;
  * [#6642](https://github.com/thingsboard/thingsboard/pull/6642) Permission checks for getDeviceProfileInfoById REST API call;
  * [#6421](https://github.com/thingsboard/thingsboard/issues/6421) NPE in 'copy to view' rule node;
  * [#6682](https://github.com/thingsboard/thingsboard/pull/6682) Slow queries logging;
  * [#6711](https://github.com/thingsboard/thingsboard/issues/6711) Swagger UI typo fix for dashboard API;
  * [#6809](https://github.com/thingsboard/thingsboard/issues/6808) JS executor crash on error code check;
  * [#6875](https://github.com/thingsboard/thingsboard/pull/6875) Added device-profile read permissions for the customer;
  * [#6895](https://github.com/thingsboard/thingsboard/pull/6895) Removed unused audit log config settings;  
  * [#6929](https://github.com/thingsboard/thingsboard/pull/6929) Removed 'isolated tb-core' flag in tenant profile;    
  * [#6901](https://github.com/thingsboard/thingsboard/pull/6901/files) Device & device-profile validation;
  * [#6931](https://github.com/thingsboard/thingsboard/pull/6931) Export/Import RuleChain for nested RuleChains;
  * [#6937](https://github.com/thingsboard/thingsboard/pull/6937) Transport statistics logging;
  * [#6939](https://github.com/thingsboard/thingsboard/pull/6939) Single Partition for Kafka response topics;
  * [#5924](https://github.com/thingsboard/thingsboard/pull/5924) "403 forbidden" error when a tenant creates a relations with themselves;
* UI:
  * [#6886](https://github.com/thingsboard/thingsboard/pull/6886) Double click zooming on map widgets;
  * [#6495](https://github.com/thingsboard/thingsboard/issues/6495) Trip Animation widget bug. See also [#6496](https://github.com/thingsboard/thingsboard/pull/6496);
  * [#6651](https://github.com/thingsboard/thingsboard/issues/6651) Date Range navigator widget date selection; 
  * [#6671](https://github.com/thingsboard/thingsboard/issues/6671) Visual bugs in pie flot widget;
  * [#6141](https://github.com/thingsboard/thingsboard/issues/6141) Resize in Knob Control widget;  
  * [#6475](https://github.com/thingsboard/thingsboard/pull/6475) Entities table manual sort if pagination disabled;
  * [#6462](https://github.com/thingsboard/thingsboard/pull/6462) Displaying 'Unit title' and 'value timestamp' for Digital gauges widgets;
  * [#6298](https://github.com/thingsboard/thingsboard/pull/6298) UI build according to new [github policy](https://github.blog/2021-09-01-improving-git-protocol-security-github/);
  * [#6321](https://github.com/thingsboard/thingsboard/pull/6321) Zooming of the Image Map;
  * [#6339](https://github.com/thingsboard/thingsboard/pull/6339) UI build in Windows OS;
  * [#6349](https://github.com/thingsboard/thingsboard/issues/6349) Duplicated dialogs on redirect;
  * [#6550](https://github.com/thingsboard/thingsboard/issues/6550) Can't switch to another rule chain without confirming/cancelling changes;
  * [#6690](https://github.com/thingsboard/thingsboard/pull/6690) Incorrect display of delayed status;
  * [#6706](https://github.com/thingsboard/thingsboard/issues/6706) Remove extra scroll in the widget dialog;
  * [#6336](https://github.com/thingsboard/thingsboard/issues/6336) "Test script function" window is now adapted to screen reduction;
  * [#6743](https://github.com/thingsboard/thingsboard/issues/6743) The dashboard edit icon disappears when ESC button is pressed;
  * [#6514](https://github.com/thingsboard/thingsboard/issues/6514) Pagination for edge downlink table;
  * [#6769](https://github.com/thingsboard/thingsboard/pull/6769) Incorrect label in tenant profile;
  * [#6774](https://github.com/thingsboard/thingsboard/issues/6774) Permission check in show alarm details;
  * [#6908](https://github.com/thingsboard/thingsboard/issues/6908) Timeseries widget doesn't react on dashboard timewindow update if used within state widget;
  * [#6916](https://github.com/thingsboard/thingsboard/pull/6916) Tooltip actions that contains space in name for map widgets;
  * [#6936](https://github.com/thingsboard/thingsboard/pull/6936) Import/export/copy operations for alarm type widgets;
* Edge:
  * [#6436](https://github.com/thingsboard/thingsboard/issues/6436) Push to edge rule node generates 'timeout' message in case no related edges found;
  * [#6519](https://github.com/thingsboard/thingsboard/pull/6519) Device profile with non default transport is not propagated to edge;
  * [#6699](https://github.com/thingsboard/thingsboard/pull/6699) Validation of missing rule chain;
  * [#6840](https://github.com/thingsboard/thingsboard/pull/6840) Saving of edge event in batches should be single threaded;
* Build scripts:
  * [#6719](https://github.com/thingsboard/thingsboard/pull/6719) Await postgres startup in a bundled docker image;
  * [#6721](https://github.com/thingsboard/thingsboard/pull/6721) Updated Node version from 12 to 16 for web-ui and js-executor; 
  * [#6729](https://github.com/thingsboard/thingsboard/pull/6729) Correct postgresql repo in docker files;
  * [#6813](https://github.com/thingsboard/thingsboard/pull/6813) Various docker-compose fixes. 
    See also [#6812](https://github.com/thingsboard/thingsboard/pull/6812), [#6811](https://github.com/thingsboard/thingsboard/pull/6811).  


## v3.3.4.1 (March 22, 2022)

**Hot fix** release with the following bug fixes:

* UI:
  * Fix assets page permissions for customer;

## v3.3.4 (March 11, 2022)

Minor release with the following improvements and bug fixes:

**Improvements:**

* Core:
  * [#6024](https://github.com/thingsboard/thingsboard/issues/6034) ThingsBoard Edge Community Edition support;
  * [#6056](https://github.com/thingsboard/thingsboard/issues/6056) Handling of PartitionChangeEvent in DefaultTbApiUsageStateService is synchronous;
  * [#6139](https://github.com/thingsboard/thingsboard/pull/6139) Refactoring validators - moved them to a separate classes;
  * [#6146](https://github.com/thingsboard/thingsboard/issues/6146) Edge - device profile is not removed from edge in case of removal from cloud;
  * Performance improvements to launch sequence for environments with 1000s of Tenants;
  * Performance improvement to insert of event entities. Batch insert implemented;
  * Device State Service improvements and race condition fix;
* UI:
  * [#5984](https://github.com/thingsboard/thingsboard/pull/5984) Update simplified Chinese localization;
  * [#6063](https://github.com/thingsboard/thingsboard/pull/6063) Add circle support to map widgets and other improvements;
  * Update 'gps geofencing events' node default configuration. Update rule nodes configuration UI;
* Transport:
  * Suppress frequent logs and fix connection statistics in case of rate limits by ip; 
  * LwM2M:
    * [#6032](https://github.com/thingsboard/thingsboard/issues/6032) Test coverage of lwm2mClients connection modes;
    * [#6026](https://github.com/thingsboard/thingsboard/issues/6026) LwM2mClient is no more serializable;
    * [#6200](https://github.com/thingsboard/thingsboard/issues/6200) Handle LwM2M send request from server;

**Bug Fixes**

* Core & Rule Engine:
  * [#5991](https://github.com/thingsboard/thingsboard/issues/5991) Can delete device profile referenced by OTA update package;
  * [#6122](https://github.com/thingsboard/thingsboard/issues/6122) Support null values in TbMsgMetaData;
  * [#6132](https://github.com/thingsboard/thingsboard/issues/6132) Create Alarm rule node - Propagate To Tenant doesn't work;
  * [#6174](https://github.com/thingsboard/thingsboard/pull/6174) Automatic conversion of rule chain metadata for compatibility with 3.3.2;
  * [#5996](https://github.com/thingsboard/thingsboard/issues/5996)  Problems with LwM2M device profile, created during bulk import;
  * [#6204](https://github.com/thingsboard/thingsboard/pull/6204) Customer alarm permission checker fix;
  * [#6212](https://github.com/thingsboard/thingsboard/issues/6212) Fix unresolved dynamic values on API request;
  * Update rule nodes configuration UI: Fix required message for 'Period key value' field of 'calculate delta' rule node;
* UI:
  * [#5975](https://github.com/thingsboard/thingsboard/issues/5975) Widget Development plugins loading order;
  * [#6022](https://github.com/thingsboard/thingsboard/issues/6022) Alarms table widget allows alarms to be cleared when "Allow alarms clear" is disabled;
  * [#6015](https://github.com/thingsboard/thingsboard/issues/6015) Improvement map control button tooltip; fix incorrect updated marker/polygon when editing;
  * [#5697](https://github.com/thingsboard/thingsboard/issues/5697) Functionality to decode Base64 values;
  * [#6092](https://github.com/thingsboard/thingsboard/issues/6092) Image map does not load image updates when initialized with empty image;
  * [#6123](https://github.com/thingsboard/thingsboard/pull/6123) Fixed edit action on Device Admin Table;
  * [#6127](https://github.com/thingsboard/thingsboard/issues/6127)  Edit firmware dialog does not use default OTA package type;
  * Map widgets - Fixed auto-zoom in edit mode;
  * Fix trip animation widget - remove loading section after data retrieved;
  * Fix time-window panel form validation - disable aggregation limit check when aggregation is not none;
* Transport:
  * [#6025](https://github.com/thingsboard/thingsboard/issues/6025) SNMP: Application fails to start because of SNMP transport initialization error;
  * [#6048](https://github.com/thingsboard/thingsboard/issues/6048) LwM2M: sending shared attributes after sleeping;
  * [#6050](https://github.com/thingsboard/thingsboard/issues/6050) LwM2M: fixed read/observe "dataRead" object 19;
  * [#6054](https://github.com/thingsboard/thingsboard/issues/6054) LwM2M: fixed "No value present"
  * [#6058](https://github.com/thingsboard/thingsboard/pull/6058) LwM2M: improved integration tests stability;
  * [#6118](https://github.com/thingsboard/thingsboard/issues/6118) LwM2M: Make getTasks in LwM2MBootstrapConfigStoreTaskProvider thread safe;

## v3.3.3 (January 27, 2022)

Minor release with the following improvements and bug fixes:

**Improvements:**

* Core:
  * Alarm Query performance improvements;
  * Multi-root relation queries;
  * Ability to configure default null ordering in SQL requests;
  * REST API to fetch TB application version;
  * Do not persist empty stats to reducing event table size and disk IOPS;
  * Minor improvements to the thingsboard.yml comments;
  * Add password policy for white-spaces;
  * Notify IoT gateway about delete or rename of the device;
  * [#5200](https://github.com/thingsboard/thingsboard/pull/5200) 'IN' and 'NOT IN' conditions for the dashboard / alarm rule filters;
  * [#5749](https://github.com/thingsboard/thingsboard/pull/5749) Queue factories;
  * [#5760](https://github.com/thingsboard/thingsboard/pull/5760) SQL and TS batch thread count 3 for better hash distribution;
  * [#5814](https://github.com/thingsboard/thingsboard/pull/5814) API to clear events using filter;
* Rule Engine:
  * Support of nested rule-chains with multiple outputs;
  * [#5569](https://github.com/thingsboard/thingsboard/pull/5569) Ability to save time-series data without update of the latest values.
    Useful for performance improvements in case on hybrid DB setup;
  * Reduce CPU overhead for versions with in-memory cache;
  * Environment variable to configure in-memory cache;
  * [#5843](https://github.com/thingsboard/thingsboard/pull/5843) Device actor session inactivity performance + memory footprint optimizations;
  * [#5751](https://github.com/thingsboard/thingsboard/pull/5751) Transactional deletion of device and proper cache eviction
  * [#5550](https://github.com/thingsboard/thingsboard/pull/5550) Upgrade enrichment attributes rule node;
  * Misc performance improvements: immutable structures, pre-defined protobuf objects, etc;
  * [#5865](https://github.com/thingsboard/thingsboard/pull/5865) Added functionality to support 3.3.0 edge version rule chains;
  * [#5762](https://github.com/thingsboard/thingsboard/pull/5762) Suffix for the "clientId" param in the MQTT rule node;
  * [#5821](https://github.com/thingsboard/thingsboard/pull/5821) Add ignoreMetadataTs to 'save timeseries' rule node;
  * [#5889](https://github.com/thingsboard/thingsboard/pull/5889) Reduced number of scheduled messages for session timeout;
  * [#5921](https://github.com/thingsboard/thingsboard/pull/5921) Propagate alarms to Customer or Tenant without relations;
  * [#5926](https://github.com/thingsboard/thingsboard/pull/5926) Use message timestamp as alarm start timestamp in the 'create alarm' rule node;
  * [#5687](https://github.com/thingsboard/thingsboard/pull/5687) Self-intersecting polygons, polygons with holes, multiple polygons support;
* UI:
  * Migration to Angular 12;
  * Widget to embed different dashboard state;
  * Ability to embed dashboard states inside markdown widget;
  * [#5942](https://github.com/thingsboard/thingsboard/pull/5942) Add script to generate data structures for custom widgets;
  * [#5797](https://github.com/thingsboard/thingsboard/pull/5797) Separate pages for entity details;
  * [#5770](https://github.com/thingsboard/thingsboard/pull/5770) Editor of markers and polygons in maps widgets;
  * [#5757](https://github.com/thingsboard/thingsboard/pull/5757) Improvement of multiple attribute widget;
  * [#5629](https://github.com/thingsboard/thingsboard/pull/5629) Widget to display Persistent RPC calls;
  * [#5856](https://github.com/thingsboard/thingsboard/pull/5856) Persistent page link for entities pages;
  * Create nested rule chain from the selected region in the rule chain editor;
  * Add tooltip offset settings for map widgets;
  * [#5655](https://github.com/thingsboard/thingsboard/pull/5655) Hide page size option on mobile view;
  * [#5772](https://github.com/thingsboard/thingsboard/pull/5772) Show legend settings in time-series and latest widgets only;
  * [#5795](https://github.com/thingsboard/thingsboard/pull/5795) Disable column sort if enable post-processing function;
  * [#5876](https://github.com/thingsboard/thingsboard/pull/5876) Image map resize calculates center position correctly;
  * [#5882](https://github.com/thingsboard/thingsboard/pull/5882) New map widget settings: "Disable zoom control";
  * [#5910](https://github.com/thingsboard/thingsboard/pull/5910) Added additional condition to define showTitleIcon;
* Transport:
  * LwM2M:
    * Ability to define network configuration;
    * [#5930](https://github.com/thingsboard/thingsboard/pull/5930) Updated Eclipse Leshan version to 2.0.0-M5;
    * Support of Base64 format to define client keys in RPK and X509 mode;
    * Introduce support of new commands: Read-Composite, Write-Composite. Multiple-Instance Resources Read and Write;
    * Introduce support of new content formats: SenML JSON, SenML CBOR;
    * Improvements to configuration of Bootstrap behavior via Device Profile;  
    * Bootstrap server now supports: Read, Discover, Write, Delete commands;
  * CoAP:
    * [#5930](https://github.com/thingsboard/thingsboard/pull/5930) Updated Californium version to 3.0.0;
  * SNMP:
    * Add Redis config for SNMP transport;
  * MQTT:
    * [5875] IP Rate limits for MQTT;
* Security:
  * Update version of log4j-core, log4j-api and log4j-to-slf4j;
  * Ability to limit alarm queries invocation count;
  * [#5823](https://github.com/thingsboard/thingsboard/pull/5823) Add NO XSS validation for names of rule nodes;
* Build scripts:
  * Support of linux/arm64 docker containers;
  * SQL tests are now running on real PostgreSQL instead of HSQL;
  * Update grpc and netty versions to proper handle native windows ssl libraries;

**Bug fixes:**

* Core & Rule Engine:
  * Upgrade of device profiles from 3.2.2;
  * [#5492](https://github.com/thingsboard/thingsboard/pull/5492) Conversion of double values in WS subscriptions;
  * [#5753](https://github.com/thingsboard/thingsboard/pull/5753) Unsorted page link replaced with sort by id ASC;
  * [#5744](https://github.com/thingsboard/thingsboard/pull/5744) remediation for log4shell CVE-2021-45105;
  * Link to Wiki page about UUID in REST API documentation;
  * Notification about deleted attributes in the cluster mode;
  * [#5750](https://github.com/thingsboard/thingsboard/pull/5750) Notification about deleted time-series records;
  * [#5657](https://github.com/thingsboard/thingsboard/pull/5657) Fix search API Swagger description;
  * [#5793](https://github.com/thingsboard/thingsboard/pull/5793) Added functionality to handle pong responses on web sockets;
  * [#5822](https://github.com/thingsboard/thingsboard/pull/5822) Do not update WS last activity in case of general response;
  * Removing old OTA tag if new tag is empty during OTA scheduling;
  * [#5869](https://github.com/thingsboard/thingsboard/pull/5869) Don't allow system administrator to delete himself;
  * [#5864](https://github.com/thingsboard/thingsboard/pull/5864) Fixed aggregation by timezone in Timescale;
  * Ignore no longer valid messages when processing strategy is completed or timed-out;
  * [#5557](https://github.com/thingsboard/thingsboard/pull/5557) Fix NPE in case of incorrect partitioning name parameter;
  * [#5787](https://github.com/thingsboard/thingsboard/pull/5787) Removed incorrect statistics calculation for regularQueryInvocationCnt/regularQueryInvocationTime;
  * [#5659](https://github.com/thingsboard/thingsboard/pull/5659) Add rpc response error when retry attempts ended;
  * [#5852](https://github.com/thingsboard/thingsboard/pull/5852) Support of double type in 'save to custom table' rule node;
  * Prevent click actions and popup open while dragging the marker in map widgets.
* UI:
  * [#5755](https://github.com/thingsboard/thingsboard/pull/5755) Support of rectangles with cut area;
  * Layout for Firefox;
  * Open dashboard state in separate dialog showed a blank dialog;
  * Right layout and state name propagation in mobile app;
  * Resolve alias filter for query alias types;
  * JSON form default values handling;
  * [#5529](https://github.com/thingsboard/thingsboard/pull/5529) Chinese translation for the API usage;
  * [#5778](https://github.com/thingsboard/thingsboard/pull/5778) Filter forms: constant type and boolean value;
  * [#5805](https://github.com/thingsboard/thingsboard/pull/5805) Help link for OTA updates;
  * [#5813](https://github.com/thingsboard/thingsboard/pull/5813) Cancel event on color picker;
  * [#5832](https://github.com/thingsboard/thingsboard/pull/5832) Problematic letters for different languages;
  * [#5872](https://github.com/thingsboard/thingsboard/pull/5872) Error in device-profile-autocomplete and tenant-profile-autocomplete in clear;
  * [#5879](https://github.com/thingsboard/thingsboard/pull/5879) Prevent saving of invalid form in the multiple input widget;
  * [#5883](https://github.com/thingsboard/thingsboard/pull/5883) Fixed OTA package autocomplete;
  * [#5913](https://github.com/thingsboard/thingsboard/pull/5913) Date Range Navigator: the calendar when selecting dates should be horizontal;
  * [#5923](https://github.com/thingsboard/thingsboard/pull/5923) Asset models added to public api;
  * [#5928](https://github.com/thingsboard/thingsboard/pull/5928) Fixed help link URL for the 'Add user' dialog;
  * [#5931](https://github.com/thingsboard/thingsboard/issues/5931) The timestamp of the exception in the Rule Engine Statistics dashboard is wrong;
  * [#5948](https://github.com/thingsboard/thingsboard/issues/5948) Change "snpm" directory to "snmp";
* Transport:
  * LwM2M:
    * duplicated OTA update after device awake from PSM/eDRX;
    * [#5716](https://github.com/thingsboard/thingsboard/pull/5716) added ability to send LwM2M model updates after sleeping;
    * [#5878](https://github.com/thingsboard/thingsboard/pull/5878) correct handling of device profile update;
    * [#5953](https://github.com/thingsboard/thingsboard/pull/5953) subscription to RPC and Attributes;
    * [#5955](https://github.com/thingsboard/thingsboard/pull/5955) initialization order;
    * Bugs with OTA update sequence on client reboot or reconnect;
  * MQTT:
    * Corner case when access token matches user name in credentials;
    * [#5792](https://github.com/thingsboard/thingsboard/pull/5792) Invalid serialization of '=' to \u003d in JsonMqttAdaptor;
    * [#5788](https://github.com/thingsboard/thingsboard/pull/5788) Reduce MQTT info logs for connect/disconnect events;
    * [#5796](https://github.com/thingsboard/thingsboard/pull/5796) Response format of multiple attributes request;
* Rest Client:
  * [#5566](https://github.com/thingsboard/thingsboard/pull/5566) Fixed widget type based methods in rest client;
* Edge:
  * [#5922](https://github.com/thingsboard/thingsboard/pull/5922) Minor fixes and code review comments;
* Build scripts:
  * Integration test lifecycle;
  * [#5672](https://github.com/thingsboard/thingsboard/pull/5672) CASSANDRA_KEYSPACE_NAME ignored during install;


## v3.3.2 (November 11, 2021)

Minor release with the following improvements and bug fixes:

**Improvements:**

* Core:
  * REST API documentation:
    * Described entities and methods;
    * Authorize via user name and password;  
    * Latest version of Swagger;
  * Help pages for user-defined JS functions:
    * Described input parameters;
    * Examples for various use cases;
    * Help content is loaded from the external [project](https://github.com/thingsboard/thingsboard-ui-help);
    * Ability to configure the external help url using 'UI_HELP_BASE_URL' parameter;
  * Performance of SQL queries:
    * Protection from an infinite recursion;
    * Ability to configure max levels of recursion using 'SQL_RELATIONS_MAX_LEVEL' parameter;
    * Timeout for all SQL queries to survive enormous heavy query using 'JAVAX_PERSISTENCE_QUERY_TIMEOUT' parameter;
  * Bulk import improved and moved to back-end;
  * Rule chains import/export improved;
  * Separate buffered rate executors for Cassandra read and write queries;
  * Entities text search by 'substring' instead of 'startsWith';
  * Improve REST API error response handling;
  * Added fields length validation;
* Security:
  * Support of SSL credentials configuration to setup HTTPS without SSL termination on the load balancer.
  * Support of PEM format for certificates;
  * Unified transport SSL credentials;
* Transport:
  * HTTP/2 configuration support;
  * Added out-of-the-box support for Efento water-meter devices;
  * MQTT backward compatibility adaptor to support both JSON and Protobuf during firmware upgrade;
* Rule Engine:
  * Add option for HTTP client rule node to not create any message body;
  * Optimize retry strategy to correctly take into account all available settings: 'retryFailed', 'retryTimeout' and 'retrySuccessful;
  * Fixed parsing of updated polygon coordinates in rule engine;
  * Fixed duplication of MQTT packets in the MQTT Rule Node;
* UI:
  * New widget settings layout;
  * Protobuf editor for MQTT device transport configuration
  * QR code widget. Added helps for qrcode and markdown widgets;
  * Updated dependencies: lodash and coreJS;
  * Save translated title as 'translatedDashboardTitle' variable;
  * Multiple Attributes widget: added select type for input;
  * Optional data sources handling;
  * Update 'zh_CN' locale;
  * Added no data display message to entities and alarm tables;
  * Added "toastTargetId" of widget-container to the "widgetContext";
  * Added argument 'updatedData' in function 'updateNode' in nav-tree component;
  * Style of the mqtt transport settings in the device profile; 
* Build scripts:
  * K8S deployment instructions and scripts for AWS EKS;
  * Cache cleanup added to the upgrade scripts;
  * Logging of the progress during upgrade;

**Bug fixes:**

* Core:
  * Fixed security check in the 'getPersistedRpcByDevice' api call;
  * Fixed Class Loader(CL) issues in Fork Join Pool after Java 11 migration. Replaced system CL with current thread CL.
  * Fixed default ordering in entity queries;
  * Fixed concurrency exception when deleting relation  
  * Can not use isolated tenant profiles in monolith setup;
  * Fixed rest client json converter to parse json array;
  * Set serialVersionUID for cached entity classes: Device and Tenant Profile, etc;
  * Bump hsqldb version to 2.6.1 to fix sql timeout issues;
* Rule Engine:
  * Default alarm details script function may cause infinite metadata growth;
  * Deprecation of 'delay' rule node;
  * Fixed NPE in the send rpc request node;
  * Fix upgrade of device profile alarm rules from version 3.2.2;
  * Corrected current relations deletion in the create relations rule node;
* Transport:
  * LwM2M:
    * Fix NPE in case model is null;
    * Clear logging;
    * Process 'device deleted' event from core;
    * Process 'update credentials' event from core;
  * MQTT:
    * Fixed log typos in MqttTransportHandler;
  * COAP:
    * Fixed acknowledgement of CoAP requests;
* UI:
  * Fixed camera input widget if entity is empty;
  * Fixed duplicated requests on aliases entity autocomplete;
  * Fixed map functions. Update map helps.
  * Fixed using boundary values for digital gauge widget;
  * Fixed gauge widgets incorrect display after some time of work;
  * Fixed display toast in fullscreen dashboard mode;
  * Fixed 'copy text' in markdown to work in plain HTTP;
  * Fixed not load advanced settings in widget;
  * Fixed Trip animation: fixed calculate start/endpoint; fixed update current position;
  * Remove invalid JSON form fields in the time series table;  
  * Set pagination to the first page after update in table widgets;
  * Not correct index in map-utils 'parseData' function;

## v3.3.1 (September 3, 2021)

Minor release with the following improvements and bug fixes:

**Improvements:**

* Core:
  * Added sequential RPC calls support;
  * Edge functionality enabled by default;
  * Additional thread pools naming (logging);
  * Ability to override spring MVC async request-timeout property (avoid REST API timeouts)
* Transport:
  * Added support for UTF-8 characters in MQTT credential Client ID;
  * Improved Session Activity reporting - short-lived sessions support;
  * LwM2M: advanced tracking of sent requests
* UI:
  * New **Markdown/HTML** widget;
  * Chart widgets: custom comparison intervals for data key;
  * Chart widgets: tooltips visibility configuration;
  * Added copy user id button within user details;
  * Multiple attributes widget: added patterns support for widget title;
  * Input widgets: added required field option;
  * Added clear all filters option in events filter panel;
  * Rule nodes forms: added show/hide password toggle to credentials fields of external rule nodes;
  * New rxjs operators available in widget context (switchMap, catchError);
  * Custom translations support for alarm type and alarm details in device profile alarm rules
* Build scripts:
  * Improved maven artifacts dependency management

**Bug fixes:**

* Core:
  * Added validation and replacement of Queue names in the Device profile;
  * Value of property SECURITY_USER_LOGIN_CASE_SENSITIVE is considered on password reset request;
  * Corrected handling unique device name constraint violation for save device transaction
* Rule Engine:
  * Fixed device profile update handling by rule node — new telemetry keys from device profile were ignored;
  * Fixed NPE while tell next in Rule chain actor message processor
* UI:
  * Hierarchy widget: process entity label from dashboard state;
  * Fixed link to **Resources library** in SysAdmin home page;
  * Fixed full-screen mode toggle in JSON forms;
  * Improved queue name selector in device profile form;
  * Fixed **Show on widget** button behavior: always display default widgets bundle;
  * MQTT rule node form: credentials fields now optional;
  * Global loading indication: added considering of canceled requests

## v3.3 (August 13, 2021)

Major release which contains 2126 commits and 1668 changed files.

**Major Improvements:**

* Core:
  * Interface to provision and communicate with ThingsBoard Edge;
  * Firmware and Software over-the-air updates (FOTA & SOTA);
  * Persistent RPC calls;
  * API limits for number of created alarms;
  * Alarm removal by TTL;
  * Add Apple OAuth2 provider;

* Rule Engine:
  * Non-blocking subscribe method to prevent locks on repartition event;
  * Significant performance improvement of remote js-executor;
  * Per-customer and system level api usage stats;

* Transports:
  * LwM2M transport implementation;
  * SNMP transport implementation;
  * CoAP DTLS support;
  * PSM and eDRX support for CoAP and LwM2M transports;
  * Support of FOTA and SOTA updates for MQTT, HTTP, CoAP and LwM2M transports;
  * Ability to launch MQTT and MQTTS simultaneously in one transport instance;
  * Explicit fields presence support for protobuf payloads;
  * Content format support for CoAP resources;

* UI:

  * Ability to manage resource library;
  * Ability to manage OTA packages;
  * Ability to manage Edge instances;
  * Event filters for Debug, Error, Stats and other event types;
  * FOTA dashboard;
  * Update to Angular 11;
  * Performance improvement: switched change detection strategy to OnPush;
  * Performance improvement: moved widget header to widget container;
  * QR Code widget

* Mobile App support:

  * Support of mobile widget actions: Scan QR code, take picture/photo, open map directions, etc;
  * Support for dashboards in the mobile app;
  * Ability to hide dashboard toolbar settings. Improve dashboard setting dialog. Handle dashboard right layout toggle in the mobile app;
  * Ability to configure icons for dashboard and device profile entities.
  * Ability to specify the mobile dashboard as an alarm details view for mobile application;
  * Ability to control visibility and order of dashboards in the mobile application.
  * Ability to hide widgets in the mobile mode.

**Minor Improvements:**

* Core:

  * Performance improvement and bug fix in the device state service which impacts active/inactive device events calculation;
  * Performance improvement for tenant state load;
  * Performance improvement for the attributes cache;
  * Performance improvement for querying events and cleanup of events;
  * Performance improvement and memory management for DeviceActorMessageProcessor;
  * Create assign/unassign device event when claiming/reclaiming device;
  * Additional validation for entities to protect from XSS;
  * Refactor predicate queries building;
  * Ignore empty search conditions for filters;
  * Ignore default value for filters with constant key type;
  * Make alarm condition serializable;
  * Ability to define consumer properties per topic;
  * Improvement thread pool naming;
  * New alarms API: getAllAlarms and getCustomerAlarms;
  * "alarmConditionRepeats" and "alarmConditionDuration" metadata fields of alarms generated via alarm rules;
  * Reset of JWT tokens when user changes password;
  * Sync kafka commit to improve performance;
  * Statistics collection using Prometheus;
  * Method to find dashboard by name and tenant ID;
  * Kafka client version set to 2.8.0; Optimized kafka producer/consumer parameters;
  * Spring security version set to 5.4.4;
  * Remove outdated versions of Netty;
  * Add logging of error msg to easily identify root cause of failed logins;
  * Add module cluster-api and used it in rule engine and other services;
  * callback execution in the device state service;
  * Transaction aware cache to synchronize cache put/evict operations with ongoing Spring-managed transactions;

* Transports:
  * Support of server-side RPC requests via protobuf for CoAP and MQTT;
  * Improvements to data converter to support big decimal values;
  * Remove redundant lock on device creating for provisioning feature;
  * Ability to queue configurable number of uplink MQTT messages while processing connect request;
  * Correct close and cleanup of the MQTT session context;

* Rule Engine:
  * Add transaction support to save/update/delete of rule chains.
  * Dynamic alarm severity support in Create Alarm rule node;
  * QueueController returns up to date list from thingsboard.yml;
  * Move the message decoding out of the lock to reduce locking time;
  * Queue check on the very first poll in the lifecycle before any subscribe method calls;
  * Not going to sleep after pull if time left less than 1 millisecond.
  * Ability to use HTML templates in the send email node;

* UI:
  * Improvement of time window visualization in the mobile view;
  * JSON input widget;
  * Ability to configure dashboard logo;
  * Improvement to query params handling;
  * Ability to update dashboard image from screenshot;
  * 'Use entity lable in tab name' checkbox in timeseries table;
  * Entity info in widget actions as 'additionalParams' for entities table widget;
  * Update to logic for 'Set entity from widget' in static widget;
  * Move Transport type selector to transport configuration step in the device wizard;
  * Ability to copy-paste content from widget;
  * Cache cellContent, cellStyle, rowStyle in entity tables widget;
  * Disable scroll zooming in the image map;
  * Improvement to exception handling to exclude output like "object Object";
  * Improvement to chips after blur input;
  * Improvement explanation of what's accepted in entity alias "Entity Name";
  * Update to Czech translation;
  * Ability to toggle show password in the input field of login form;
  * focus for entity-key-list component after blur this component;

**Bug Fixes:**

* Core:

  * Remove ServiceId from Kafka consumer GroupId;
  * Cassandra prepared Statement initialization lock;
  * Restore old Nashorn sandbox version until bug in library is fixed;
  * Remove duplicate call of onData function for websocket subscriptions;
  * Transaction management for component descriptors and events;
  * Potential outdated server info on recalculatePartitions;
  * Performance fix of alarm query based on pg_stat analysis;
  * Performance fix of device count query;
  * Update the ts_kv_latest table only if the value that arrives has the newer timestamp;
  * Added cache cleanup when entity is renamed;
  * org.apache.kafka.common.KafkaException: javax.security.auth.login.LoginException;
  * Rest Api Call Node fixes: added default header Content-Type
  * Postgresql driver version upgrade to 42.2.20 to fix connection issue with Postgres 11;
  * Drop partition function in install script and added fix to upgrade script
  * Configuration parameter name for Compression Type;
  * Message order for Gateway and LwM2M transports in the core consumer;
  * Duplication of sessions in the device actor cache;
  * Authorization and password reset vulnerability;
  * Entity view selection in relation query alias;
  * Typo in equals method of widget bundle class;
  * SerializationFailedException during device claiming;
  * Dependency vulnerabilities;
  * Spring security issue;
  * Create device notification in DefaultTransportApiService;

* UI:

  * Updated device profiles table after added new profiles
  * Access is forbidden error in the system admin change profile;
  * Alarm rules validation when use changes key or value types;
  * Switch control widget to update state after rpc call response;
  * Widget type filter in the widgets selector;
  * Title when make rule chain root in Chinese;
  * Resolving of the assets page;
  * Multiple datasource processing data in map widgets;
  * Incorrect calculate minIntervalLimit;
  * Some typos in rus/ukr translations;
  * HTML action of identical widgets on the dashboard;
  * Error message in Led Indicator;
  * Entity autocomplete;
  * Thresholds appearing when threshold attribute is not set in flot widgets;
  * HttpCleint and DrugDrop is now accessible for widget extensions to avoid stackoverflow when importing external modules;
  * Device credentials component validation;
  * State controller to not update state when stateId is not changed;
  * New dashboard settings in Safari;
  * Typos in widgets descriptions;
  * Do not "uppercase" unit title of digital gauges;
  * Entities count datasource label overwriting, configured label was never displayed;
  * Entity node level in the entity hierarchy widget;
  * Applying default thresholds line width in the Bar Chart widget;
  * Incorrect time window displaying;
  * Displaying static widget configuration tabs, when configuration of advanced settings is empty;
  * Not updated dashboard URL, after updated a current dashboard state;
  * Tooltip in Map widget for Safari browser;
  * Validation on removal of the alias that is used in the alarm widgets;
  * Added missing help link in add device and add device-profile dialogs;
  * Closing the main menu with the escape key;
  * Clear password after save SMTP settings;
  * Update of the device inactivity timeout attribute;
  * Behaviour of ESC button while in main menu;
  * StartTs and endTs in deleteEntityTimeseries;

* Transports:

  * Configuration of session cleanup;
  * For statistics collection period;
  * CoAP client can subscribe to attribute and rpc updates simultaneously;
  * Removed unnecessary retain of PUBLISH message for QoS 2;
  * Handling of duplicated read/observe requests for CoAP;
  * Memory leak in GatewaySessionHandler by using weak hash map for locks;

* Rest Client:
  * GetAlarms method;
  * Removed redundant parameter for AlarmController, AlarmQuery and getAlarms;
  * Reduced default log level;
  * Include the limit value in the getTimeseries REST call;

* Build/Installation scripts:

  * JAVA_OPTS in K8S config maps to work with Java 11;
  * Reference to the maven repositories;
  * Updated HAProxy and Certbot version for docker-compose scripts;
  * Update haproxy config. Enable HTTP/2;
  * Upgrade Postgres to version 12 in the docker images;
  * Logger template added for Top Rule Nodes by max execution time;
  * Added prometheus-grafana monitoring to Docker scripts;
  * Updated MSA read me file;
  * Correct keystore file lookup from files instead of classpath;
  * Update of os-maven-plugin version;
  * Unique name for logs container in order to avoid container name conflicts;
  * Improved black box tests;


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
- [Kubernetes scripts](https://github.com/thingsboard/thingsboard/blob/v2.3.1/k8s) for ThingsBoard Microservices;
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
