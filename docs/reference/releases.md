---
layout: docwithnav
title: ThingsBoard Release Notes
description: ThingsBoard architecture

---

* TOC
{:toc}

## v3.8.1 (Oct 15, 2024) {#v381}

Minor release with the following improvements and bug fixes:

* Core & Rule Engine

  * [#11849](https://github.com/thingsboard/thingsboard/pull/11849) Fixed Converter Library initialization by @ViacheslavKlimov
  * [#11830](https://github.com/thingsboard/thingsboard/pull/11830) Fixed Efento sensor payload decoder by @dashevchenko
  * [#11820](https://github.com/thingsboard/thingsboard/pull/11820) Fixed TS insert repository bug under certain rare conditions by @YevhenBondarenko

* UI

  * [#11823](https://github.com/thingsboard/thingsboard/pull/11823) Fixed adjustment of group intervals on time window change by @vvlladd28
  * [#11857](https://github.com/thingsboard/thingsboard/pull/11857) Fixed overlapping widgets when changing the layout column count by @ikulikov

## v3.8.0 (Oct 3, 2024) {#v38}

Major release with the following features and bug fixes:

**Major Improvements**

* Core & Rule Engine

  * [#11368](https://github.com/thingsboard/thingsboard/pull/11368) Dedicated datasource for events and audit logs by @ViacheslavKlimov
  * [#11112](https://github.com/thingsboard/thingsboard/pull/11112) Version field and cache improvements for entities by @ViacheslavKlimov
  * [#10977](https://github.com/thingsboard/thingsboard/pull/10977) Version field and cache improvements for attributes, time series, and relations by @YevhenBondarenko and @smatvienko-tb
  * [#10786](https://github.com/thingsboard/thingsboard/pull/10786) Rule Engine controller and send REST API call reply node by @irynamatveieva
  * [#11330](https://github.com/thingsboard/thingsboard/pull/11330) Payload size filter for all REST API requests by @dashevchenko
  * [#11231](https://github.com/thingsboard/thingsboard/pull/11231) OAuth2 configuration redesign by @dashevchenko

* UI

  * [#11063](https://github.com/thingsboard/thingsboard/pull/11063) SCADA layout and symbol library by @ikulikov
  * [#11430](https://github.com/thingsboard/thingsboard/pull/11430) Dashboard layouts and breakpoints by @vvlladd28
  * [#11633](https://github.com/thingsboard/thingsboard/pull/11633) Timewindow redesign by @ChantsovaEkaterina
  * [multiple PRs](https://github.com/thingsboard/thingsboard/pulls?page=1&q=is:pr%20is:merged%20author:maxunbearable%20milestone:3.8) Gateway dashboard improvements by @maxunbearable
  * [#11079](https://github.com/thingsboard/thingsboard/pull/11079) Label widgets by @ikulikov
  * [#11138](https://github.com/thingsboard/thingsboard/pull/11138) Notification widget by @ArtemDzhereleiko

**Minor improvements**

* Core & Rule Engine

  * [#11271](https://github.com/thingsboard/thingsboard/pull/11271) TTL for password reset and user activation links by @ViacheslavKlimov
  * [#10877](https://github.com/thingsboard/thingsboard/pull/10877) Rest API call node: removed deprecated 'useRedisQueueForMessagePersistence' parameter by @irynamatveieva
  * [#11084](https://github.com/thingsboard/thingsboard/pull/11084) Version control improvements by @ViacheslavKlimov
  * [#11176](https://github.com/thingsboard/thingsboard/pull/11176) Added ability to change swagger group name by @YevhenBondarenko
  * [#10646](https://github.com/thingsboard/thingsboard/pull/10646) Created AWS Lambda node by @irynamatveieva
  * [#11207](https://github.com/thingsboard/thingsboard/pull/11207) Disable Redis caching case maxSize is 0 by @AndriiLandiak
  * [#11194](https://github.com/thingsboard/thingsboard/pull/11194) Device profile node improvements by @irynamatveieva
  * [#11159](https://github.com/thingsboard/thingsboard/pull/11159) Improvements to generator node by @irynamatveieva
  * [#11500](https://github.com/thingsboard/thingsboard/pull/11500) Max response size parameter added for REST API call node by @volodymyr-babak
  * [#11583](https://github.com/thingsboard/thingsboard/pull/11583) Migrate from Office 365 Connectors to Microsoft Teams Workflows for notification system by @sskoryi-256
  * [#11618](https://github.com/thingsboard/thingsboard/pull/11618) Ability to configure max connections for TbHttpClient by @YevhenBondarenko
  * [#11140](https://github.com/thingsboard/thingsboard/pull/11140) Delay node improvements by @irynamatveieva
  * [#11666](https://github.com/thingsboard/thingsboard/pull/11666) Performance improvements for alarms unassigning by @ViacheslavKlimov

* Transport

  * [#11341](https://github.com/thingsboard/thingsboard/pull/11341) Added ability to provision gateway devices using device provisioning feature by @imbeacon
  * [#11607](https://github.com/thingsboard/thingsboard/pull/11607) Gateway latency metrics by @YevhenBondarenko
  * [#11048](https://github.com/thingsboard/thingsboard/pull/11048) Asynchronous transport API requests processing by @ViacheslavKlimov
  * [#11295](https://github.com/thingsboard/thingsboard/pull/11295) New measurement types for Efento devices by @dashevchenko
  * [#9327](https://github.com/thingsboard/thingsboard/pull/9327) Making it possible to use CompletableFuture by @chenggwang

* Edge

  * [#11521](https://github.com/thingsboard/thingsboard/pull/11521) Queue to handle edge notification messages by @AndriiLandiak
  * [#11139](https://github.com/thingsboard/thingsboard/pull/11139) Proxy for grpc client by @AndriiLandiak
  * [#11494](https://github.com/thingsboard/thingsboard/pull/11494) Performance improvement via caching related edges for entity by @AndriiLandiak

* UI

  * [#11527](https://github.com/thingsboard/thingsboard/pull/11527) Custom translation for dashboard titles recent dashboards widget by @ChantsovaEkaterina
  * [#10982](https://github.com/thingsboard/thingsboard/pull/10982) Added no text option for autocomplete by @ArtemDzhereleiko
  * [#11331](https://github.com/thingsboard/thingsboard/pull/11331) Added missing audit log action type and improved audit log table handler translation by @vvlladd28
  * [#11055](https://github.com/thingsboard/thingsboard/pull/11055) Added support unicode symbols chart legend/tooltip by @vvlladd28
  * [#11560](https://github.com/thingsboard/thingsboard/pull/11560) Added Event and Audit Logs services to services map by @devaskim
  * [#11320](https://github.com/thingsboard/thingsboard/pull/11320) Added card-padding setting to value card, single switch, status, and other widgets by @d2eight
  * [#11735](https://github.com/thingsboard/thingsboard/pull/11735) Added support of long tap iOS device (show widget/dashboard menu) by @vvlladd28
  * [#11100](https://github.com/thingsboard/thingsboard/pull/11100) Disabled filtering of attributes with empty string values for attribute table by @rusikv
  * [#11096](https://github.com/thingsboard/thingsboard/pull/11096) Hotfix for range settings by @ArtemDzhereleiko
  * [#11198](https://github.com/thingsboard/thingsboard/pull/11198) Made title read only on LwM2M resources by @maxunbearable
  * [#11206](https://github.com/thingsboard/thingsboard/pull/11206) Power layouts for 'Power button' widget by @ArtemDzhereleiko
  * [#11365](https://github.com/thingsboard/thingsboard/pull/11365) Entity version conflict dialog implementation by @maxunbearable
  * [#11393](https://github.com/thingsboard/thingsboard/pull/11393) Improved resource details page by @rusikv
  * [#10950](https://github.com/thingsboard/thingsboard/pull/10950) Subscribe to close event of 'Open separate dialog' by @Prometheus4800
  * [#10251](https://github.com/thingsboard/thingsboard/pull/10251) Sync country list & add flags to tb-contact country selector & search country by @Philip2809
  * [#11783](https://github.com/thingsboard/thingsboard/pull/11783) Updated material-icons.json metadata by @vvlladd28

**Bug fixes**

* Core & Rule Engine

  * [#11572](https://github.com/thingsboard/thingsboard/pull/11572) Fixed last activity not being reported when activity reporting period ends by @dskarzh
  * [#11536](https://github.com/thingsboard/thingsboard/pull/11536) Fixedcorrect display of device state by @irynamatveieva
  * [#9733](https://github.com/thingsboard/thingsboard/pull/9733) Fixed persistent RPC by @YevhenBondarenko
  * [#9737](https://github.com/thingsboard/thingsboard/pull/9737) Fixed possible NPE by @YevhenBondarenko
  * [#11005](https://github.com/thingsboard/thingsboard/pull/11005) Fixed cassandra timeseries deletion if partition is INDEFINITE by @dashevchenko
  * [#11172](https://github.com/thingsboard/thingsboard/pull/11172) Fixed calculate delta node: false positive tests & fixed NPE by @ShvaykaD
  * [#11156](https://github.com/thingsboard/thingsboard/pull/11156) Fixed startup error when Swagger is disabled by @YevhenBondarenko
  * [#11318](https://github.com/thingsboard/thingsboard/pull/11318) Fixed script compile error (ScriptCPUAbuseException) with Nashorn sandbox by @ViacheslavKlimov
  * [#11425](https://github.com/thingsboard/thingsboard/pull/11425) Fixed Swagger issues when reverse proxy is used by @YevhenBondarenko
  * [#10911](https://github.com/thingsboard/thingsboard/pull/10911) Fixedconsistent default kafka setting (compression) by @arminfelder
  * [#11672](https://github.com/thingsboard/thingsboard/pull/11672) Fixed RuleEngine OOM by @YevhenBondarenko

* Transport

  * [#11044](https://github.com/thingsboard/thingsboard/pull/11044) Fixed MD5 SNMP authentication protocol by @ViacheslavKlimov
  * [#11510](https://github.com/thingsboard/thingsboard/pull/11510) Fixed parsing of collected values with different timestamps for LwM2M by @nickAS21
  * [#11515](https://github.com/thingsboard/thingsboard/pull/11515) Fixes for SNMP v3 by @ViacheslavKlimov
  * [#11597](https://github.com/thingsboard/thingsboard/pull/11597) Fixed bug Observe Composite operation by @nickAS21

* UI

  * [#11327](https://github.com/thingsboard/thingsboard/pull/11327) Fixed platform access on iOS 16.3 and lower by @vvlladd28
  * [#11326](https://github.com/thingsboard/thingsboard/pull/11326) Fixed issue with opening dashboards the mobile app on iOS by @vvlladd28
  * [#11000](https://github.com/thingsboard/thingsboard/pull/11000) Fixed gateway connectors name form fields by @rusikv
  * [#10999](https://github.com/thingsboard/thingsboard/pull/10999) Fixed device and asset profile filters by @vvlladd28
  * [#11010](https://github.com/thingsboard/thingsboard/pull/11010) Fixed LWM2M device profile transport configuration @rusikv
  * [#11035](https://github.com/thingsboard/thingsboard/pull/11035) Fixed disappearing of device profile transport config form by @rusikv
  * [#11169](https://github.com/thingsboard/thingsboard/pull/11169) Fixed Min/Max value on gradient panel by @ArtemDzhereleiko
  * [#11097](https://github.com/thingsboard/thingsboard/pull/11097) Fixed hidden widgets not rendering properly edit mode by @rusikv
  * [#11168](https://github.com/thingsboard/thingsboard/pull/11168) Fixed hidden by default chart series not rendering on unhide by @rusikv
  * [#11182](https://github.com/thingsboard/thingsboard/pull/11182) Fixed notify again validation after deleted recipient by @ArtemDzhereleiko
  * [#11184](https://github.com/thingsboard/thingsboard/pull/11184) Fixed stringput widgets by @ArtemDzhereleiko
  * [#11202](https://github.com/thingsboard/thingsboard/pull/11202) Fixedvalid tooltip chart fill settings by @rusikv
  * [#11203](https://github.com/thingsboard/thingsboard/pull/11203) Fixed user menu duplication on customer home/default dashboard by @rusikv
  * [#11238](https://github.com/thingsboard/thingsboard/pull/11238) Fixed 'Home dashboards' widget by @kalutkaz
  * [#11272](https://github.com/thingsboard/thingsboard/pull/11272) Fixed overlapping dialog window by autocomplete list by @ArtemDzhereleiko
  * [#11282](https://github.com/thingsboard/thingsboard/pull/11282) Fixed documentation link by @kalutkaz
  * [#11288](https://github.com/thingsboard/thingsboard/pull/11288) Fixed resource title editing for JS module by @maxunbearable
  * [#11290](https://github.com/thingsboard/thingsboard/pull/11290) Fixed device profile LwM2M serverformation collapsed state view by @maxunbearable
  * [#11541](https://github.com/thingsboard/thingsboard/pull/11541) Fixed multipleput widget not updated dynamically by @vvlladd28
  * [#11542](https://github.com/thingsboard/thingsboard/pull/11542) Fixed entity table widgets to correctly process entity type for "show cell button action" function by @vvlladd28
  * [#11484](https://github.com/thingsboard/thingsboard/pull/11484) Fixed filters if state is opened dialog window or popover by @rusikv
  * [#11634](https://github.com/thingsboard/thingsboard/pull/11634) Fixed 'get OTA package' api call accordance with documentation by @maxunbearable
  * [#11625](https://github.com/thingsboard/thingsboard/pull/11625) Fixed link for entity view documentation by @vvlladd28
  * [#11650](https://github.com/thingsboard/thingsboard/pull/11650) Fixed country autocomplete a tenant form by @rusikv
  * [#11654](https://github.com/thingsboard/thingsboard/pull/11654) Fixed 'add tenant' button not readable with German language by @rusikv
  * [#11687](https://github.com/thingsboard/thingsboard/pull/11687) Fixed race conditional when showing login error dialog by @vvlladd28
  * [#11709](https://github.com/thingsboard/thingsboard/pull/11709) Fixed alarm assignee and comments for deleted user by @rusikv
  * [#11727](https://github.com/thingsboard/thingsboard/pull/11727) Fixed copying ofstances when deleting LWM2M objects by @rusikv
  * [#11731](https://github.com/thingsboard/thingsboard/pull/11731) Fixed translation with pluralization for Dutch Belgium language by @rusikv
  * [#11740](https://github.com/thingsboard/thingsboard/pull/11740) Fixed cropped qr code widget title on tenant home page by @rusikv
  * [#11736](https://github.com/thingsboard/thingsboard/pull/11736) Fixed text color of table widgets not applying to action cell buttons by @rusikv
  * [#11753](https://github.com/thingsboard/thingsboard/pull/11753) Fixed quick update of value gauge widget during animation by @vvlladd28
  * [#11770](https://github.com/thingsboard/thingsboard/pull/11770) Fixedcorrect parsing of the CSS units 'rem' and 'vmin' by @vvlladd28

**We welcome our new contributors:**

  * @Aniutikm made their first contribution in [#11209](https://github.com/thingsboard/thingsboard/pull/11209) 
  * @pon0marev made their first contribution in [#10966](https://github.com/thingsboard/thingsboard/pull/10966)
  * @logresearch made their first contribution in [#11274](https://github.com/thingsboard/thingsboard/pull/11274)
  * @Prometheus4800 made their first contribution in [#10950](https://github.com/thingsboard/thingsboard/pull/10950)
  * @Philip2809 made their first contribution in [#10251](https://github.com/thingsboard/thingsboard/pull/10251)
  * @eltociear made their first contribution in [#11413](https://github.com/thingsboard/thingsboard/pull/11413)
  * @AldirchEugene made their first contribution in [#11453](https://github.com/thingsboard/thingsboard/pull/11453)
  * @driesva made their first contribution in [#8696](https://github.com/thingsboard/thingsboard/pull/8696)
  * @chenggwang made their first contribution in [#9327](https://github.com/thingsboard/thingsboard/pull/9327) 
  * @yantarou made their first contribution in [#10069](https://github.com/thingsboard/thingsboard/pull/10069)
  * @livk-cloud made their first contribution in [#10100](https://github.com/thingsboard/thingsboard/pull/10100) 
  * @sskoryi-256 made their first contribution in [#11583](https://github.com/thingsboard/thingsboard/pull/11583) 
  * @Andrew1031 made their first contribution in [#11635](https://github.com/thingsboard/thingsboard/pull/11635) 

## v3.7.0 (Jun 17, 2024) {#v37}

Major release with the following features and bug fixes:

**Major Improvements**

* Core & Rule Engine

  * [#8460](https://github.com/thingsboard/thingsboard/pull/8460) Migration to Java 17 by @YevhenBondarenko
  * [#9850](https://github.com/thingsboard/thingsboard/pull/9850) Optimize attributes storage structure by @dashevchenko
  * [#10201](https://github.com/thingsboard/thingsboard/pull/10201) Housekeeping service by @ViacheslavKlimov
  * [#10395](https://github.com/thingsboard/thingsboard/pull/10395) Enhanced core consumer partition management by @ViacheslavKlimov

* UI

  * [#10562](https://github.com/thingsboard/thingsboard/pull/10562) Implemented comparison support for new time series charts by @ikulikov
  * [#10535](https://github.com/thingsboard/thingsboard/pull/10535) State chart widget by @ikulikov
  * [#10611](https://github.com/thingsboard/thingsboard/pull/10611) Status widget by @ikulikov
  * [#10622](https://github.com/thingsboard/thingsboard/pull/10622) Pie chart widget by @ikulikov
  * [#10643](https://github.com/thingsboard/thingsboard/pull/10643) Bars and Polar area widgets by @ikulikov
  * [#10678](https://github.com/thingsboard/thingsboard/pull/10678) Radar chart widget by @ikulikov
  * [#10473](https://github.com/thingsboard/thingsboard/pull/10473) Bar and Range Charts widget improvements by @ikulikov
  * [#10591](https://github.com/thingsboard/thingsboard/pull/10591) QR-code widget to automatically login via mobile app by @dashevchenko
  * [#10290](https://github.com/thingsboard/thingsboard/pull/10290) Redesign Color Picker by @ArtemDzhereleiko
  * [#10600](https://github.com/thingsboard/thingsboard/pull/10600) Added "Cell click" action type for table widgets by @devaskim and @rusikv

**Minor improvements**

* Core & Rule Engine

  * [#10728](https://github.com/thingsboard/thingsboard/pull/10728) Individual Kafka Consumer Groups for Rule Engine Topics by @smatvienko-tb
  * [#10813](https://github.com/thingsboard/thingsboard/pull/10813) Optimize startup performance by @ViacheslavKlimov
  * [#8709](https://github.com/thingsboard/thingsboard/pull/8709) Upgrade to Spring Boot 3.1 by @YevhenBondarenko
  * [#10443](https://github.com/thingsboard/thingsboard/pull/10443) Migrating to SpringDoc OpenAPI 3.1.0 by @ikulikov
  * [#9851](https://github.com/thingsboard/thingsboard/pull/9851) Switch to JSON serialization for Redis Cache and optimize top entities by @YevhenBondarenko
  * [#9225](https://github.com/thingsboard/thingsboard/pull/9225) Added SSL support for Redis by @dashevchenko
  * [#9830](https://github.com/thingsboard/thingsboard/pull/9830) Added "NOT" option relation queries by @YevhenBondarenko
  * [#10417](https://github.com/thingsboard/thingsboard/pull/10417) Added global queue prefix for PubSub queue factory by @dashevchenko
  * [#10453](https://github.com/thingsboard/thingsboard/pull/10453) Default sorting fo entities by ID by @dashevchenko
  * [#10377](https://github.com/thingsboard/thingsboard/pull/10377) Enhance Version Control restore performance with optional rollback on error by @ViacheslavKlimov
  * [#10145](https://github.com/thingsboard/thingsboard/pull/10145) Separate entity to store rule engine queue statistics by @dashevchenko
  * [#9930](https://github.com/thingsboard/thingsboard/pull/9930) HAProxy rate and connection limits with Allowlist and Blocklist by @smatvienko-tb
  * [#10386](https://github.com/thingsboard/thingsboard/pull/10386) Entity data query improvement by @AndriiLandiak
  * [#10349](https://github.com/thingsboard/thingsboard/pull/10349) Ability to send string without quotes MQTT node by @irynamatveieva
  * [#10300](https://github.com/thingsboard/thingsboard/pull/10300) Added property to ignore delta output messages if it is zero by @irynamatveieva
  * [#10527](https://github.com/thingsboard/thingsboard/pull/10527) Caching of entities the rule nodes by @ShvaykaD
  * [#10355](https://github.com/thingsboard/thingsboard/pull/10355) Improve last IN event detection debug messages by @irynamatveieva
  * [#10483](https://github.com/thingsboard/thingsboard/pull/10483) Make CalculateDeltaNode non-blocking for the find latest telemetry by @ShvaykaD
  * [#10454](https://github.com/thingsboard/thingsboard/pull/10454) Support of "Owner Name" and "Owner Type" EntityDataQuery by @dashevchenko
  * [#10665](https://github.com/thingsboard/thingsboard/pull/10665) Enhanced asset search query with "label", "type" and customer "title" by @dashevchenko
  * [#10732](https://github.com/thingsboard/thingsboard/pull/10732) Enhanced audit logging for user activation: capture first login from activation link/email by @YevhenBondarenko
  * [#10806](https://github.com/thingsboard/thingsboard/pull/10806) Implement SSL Support for Kafka queue connection JS Executor by @vvlladd28
  * [#10824](https://github.com/thingsboard/thingsboard/pull/10824) Added rate limits for the Gateway API by @YevhenBondarenko

* Transport

  * Migration to Californium 3.11.0 and Leshan 2.0.0-M14 by @nickAS21 in multiple PRs
  * [#10167](https://github.com/thingsboard/thingsboard/pull/10167) Enable DTLS Connection ID Length Configuration by @nickAS21
  * [#10716](https://github.com/thingsboard/thingsboard/pull/10716) Default Object Version attribute by @nickAS21
  * [#10703](https://github.com/thingsboard/thingsboard/pull/10703) Ensure block number transmission non-transparent block mode by @ashvayka

* Edge

  * [#10548](https://github.com/thingsboard/thingsboard/pull/10548) Add support for notification center by @AndriiLandiak
  * [#10239](https://github.com/thingsboard/thingsboard/pull/10239) Sync up OAuth2 configuration by @AndriiLandiak
  * [#10471](https://github.com/thingsboard/thingsboard/pull/10471) YAML configuration for telemetry message size limit with Edge Notification by @AndriiLandiak

* UI

  * [#10482](https://github.com/thingsboard/thingsboard/pull/10482) Added UI form to edit Gateway's MQTT connector configuration. by @Dmitriymush
  * [#9624](https://github.com/thingsboard/thingsboard/pull/9624) Added option to show right layout first mobile dashboard view by @rusikv
  * [#10308](https://github.com/thingsboard/thingsboard/pull/10308) Ability to use Unicode symbols chart legend by @kalutkaz
  * [#10610](https://github.com/thingsboard/thingsboard/pull/10610) Removed the "Supports composite Read/Write/Observe operations" toggle by @rusikv
  * [#10796](https://github.com/thingsboard/thingsboard/pull/10796) Enable 'Include bundle widgets' checkbox by default by @kalutkaz
  * [#10500](https://github.com/thingsboard/thingsboard/pull/10500) Added pattern support for widget title export filenames by @rusikv
  * [#10756](https://github.com/thingsboard/thingsboard/pull/10756) Added hint "Comparison works only with historical data" by @ArtemDzhereleiko
  * [#10306](https://github.com/thingsboard/thingsboard/pull/10306) Add 'Not' option for Relations Query by @rusikv
  * [#10557](https://github.com/thingsboard/thingsboard/pull/10557) Added Digital Gauge advanced color settings by @ArtemDzhereleiko
  * [#10816](https://github.com/thingsboard/thingsboard/pull/10816) Added "docPlatformPrefix" to URLs by @kalutkaz
  * [#10572](https://github.com/thingsboard/thingsboard/pull/10572) Adding card-padding setting  by @d2eight
  * [#10944](https://github.com/thingsboard/thingsboard/pull/10944) Updated widget template for new timeseries widget creation by @vvlladd28
  * [#10959](https://github.com/thingsboard/thingsboard/pull/10959) Relation filter enhancement by @rusikv
  * [#10269](https://github.com/thingsboard/thingsboard/pull/10269) Added Arabic Language by @ArtemDzhereleiko
  * [#10795](https://github.com/thingsboard/thingsboard/pull/10795) Added Lithuanian language by @kalutkaz
  * [#10430](https://github.com/thingsboard/thingsboard/pull/10430) Updated Polish language by @ArtemDzhereleiko
  * [#10863](https://github.com/thingsboard/thingsboard/pull/10863) Standardize 'Time Series' Terminology English (en_US) by @ArtemDzhereleiko

**Bug fixes**

* Core & Rule Engine

  * [#10418](https://github.com/thingsboard/thingsboard/pull/10418) Fixed ability to edit widgets while search mode by @rusikv
  * [#10489](https://github.com/thingsboard/thingsboard/pull/10489) Fixed threshold settings styles by @rusikv
  * [#10748](https://github.com/thingsboard/thingsboard/pull/10748) Fixed realtime query results for "Current day"  by @cogic
  * [#10416](https://github.com/thingsboard/thingsboard/pull/10416) Fixed KvProtoUtils order for matching KeyValueType and DataType by @AndriiLandiak
  * [#10497](https://github.com/thingsboard/thingsboard/pull/10497) Fixed device activity for devices connected through the Gateway by @imbeacon
  * [#10679](https://github.com/thingsboard/thingsboard/pull/10679) Fixed mobile notifications by @ViacheslavKlimov
  * [#10688](https://github.com/thingsboard/thingsboard/pull/10688) Resolve default entity on version load VC by @ViacheslavKlimov

* UI

  * [#10846](https://github.com/thingsboard/thingsboard/pull/10846) Fixed typo German locale file by @Backdraft007
  * [#10295](https://github.com/thingsboard/thingsboard/pull/10295) Fixed wrong notification when creating new connector by @iraznatovskyi
  * [#10599](https://github.com/thingsboard/thingsboard/pull/10599) Fixed "getLwm2mObjects' URL Error by @nickAS21
  * [#9576](https://github.com/thingsboard/thingsboard/pull/9576) Fixed table selection and text search preventing widget editing by @rusikv
  * [#10348](https://github.com/thingsboard/thingsboard/pull/10348) Fixed Boolean key filter issue, added clear value feature by @rusikv
  * [#10579](https://github.com/thingsboard/thingsboard/pull/10579) Fixed displaying translated text with translation keys on Alarms page by @d2eight
  * [#10740](https://github.com/thingsboard/thingsboard/pull/10740) Fixed Incorrect HTML Tag causing issues for neighboring widget by @vvlladd28
  * [#10528](https://github.com/thingsboard/thingsboard/pull/10528) Fixed not updating aggregation values with the latest data entities table by @rusikv
  * [#10855](https://github.com/thingsboard/thingsboard/pull/10855) Fixed search field hotkey on rule chain page by @ArtemDzhereleiko
  * [#10893](https://github.com/thingsboard/thingsboard/pull/10893) Fixed popover close button hidden under dashboard toolbar by @rusikv
  * [#10894](https://github.com/thingsboard/thingsboard/pull/10894) Fixed color picker centering for dialogs by @ArtemDzhereleiko
  * [#10905](https://github.com/thingsboard/thingsboard/pull/10905) Fixed visible elements behind widget preview by @rusikv
  * [#10904](https://github.com/thingsboard/thingsboard/pull/10904) Fix long filename layout issue by @ArtemDzhereleiko
  * [#10955](https://github.com/thingsboard/thingsboard/pull/10955) Fixed colors for neon gauge by @ArtemDzhereleiko
  * [#10976](https://github.com/thingsboard/thingsboard/pull/10976) Fixed notification again not apply new params by @vvlladd28

**We welcome our new contributors:**

  * [@arminfelder](https://github.com/arminfelder) made their first contribution in [#10194](https://github.com/thingsboard/thingsboard/pull/10194)
  * [@d2eight](https://github.com/d2eight) made their first contribution in [#10559](https://github.com/thingsboard/thingsboard/pull/10559)
  * [@AlexDoanTB](https://github.com/AlexDoanTB) made their first contribution in [#10710](https://github.com/thingsboard/thingsboard/pull/10710) 
  * [@cogic](https://github.com/cogic) made their first contribution in [#10748](https://github.com/thingsboard/thingsboard/pull/10748)

## v3.6.4 (Apr 11, 2024) {#v364}

Minor release with the following improvements and bug fixes:

* Core & Rule Engine

  * [#10420](https://github.com/thingsboard/thingsboard/pull/10420) Improvements for mobile notifications visualization by @ViacheslavKlimov
  * [#10302](https://github.com/thingsboard/thingsboard/pull/10302) Changed type of ThingsboardErrorResponse timestamp from Date to long by @dashevchenko
  * [#10039](https://github.com/thingsboard/thingsboard/pull/10039) Refactoring of RPC query by @smatvienko-tb
  * [#10311](https://github.com/thingsboard/thingsboard/pull/10311) Fixed TLS Factory error when no password was set configuration by @irynamatveieva
  * [#10385](https://github.com/thingsboard/thingsboard/pull/10385) Fixed NPE related to the entity service registry initialization by @YevhenBondarenko
  * [#10321](https://github.com/thingsboard/thingsboard/pull/10321) Fixed GIT repository initialization after repo directory deletion by @dashevchenko
  * [#10366](https://github.com/thingsboard/thingsboard/pull/10366) Fixed Oauth2 mail refresh token check is being executed only for active, not expired tokens by @dashevchenko
  * [#10455](https://github.com/thingsboard/thingsboard/pull/10455) Fixed accident delete of propagated alarms during parent asset deletion by @dashevchenko

* UI

  * [#10446](https://github.com/thingsboard/thingsboard/pull/10446) Fixed draggable marker and not draw new polygons map widgets by @vvlladd28
  * [#10449](https://github.com/thingsboard/thingsboard/pull/10449) Fixed not opened image gallery when used multiple-gallery-image-input.component.ts by @vvlladd28
  * [#10459](https://github.com/thingsboard/thingsboard/pull/10459) Fixed battery level widget for Safari and Firefox by @ArtemDzhereleiko


## v3.6.3 (Mar 18, 2024) {#v363}

For an overview of the main improvements, check out the [**ThingsBoard 3.6.3 release**](https://thingsboard.io/blog/thingsboard-release-3-6-3-announcement/) blog post.

**Major Improvements**

* Core & Rule Engine
  * [#8522.](https://github.com/thingsboard/thingsboard/pull/8522.) Push notifications to the mobile apps by @ViacheslavKlimov
  * [#9990](https://github.com/thingsboard/thingsboard/pull/9990) New types of the groupingtervals: WEEK, WEEK_ISO, MONTH, QUARTER by @ashvayka
  * [#9980](https://github.com/thingsboard/thingsboard/pull/9980) Configurable granularity and strategies for device connectivity status calculation by @dskarzh
* UI 
  * [#10315](https://github.com/thingsboard/thingsboard/pull/10315) Time series chart widgets by @ikulikov
  * [#9960](https://github.com/thingsboard/thingsboard/pull/9960) Bar chart with labels widget by @ikulikov
  * [#10212](https://github.com/thingsboard/thingsboard/pull/10212) Toggle button widget by @ikulikov
  * [#10132](https://github.com/thingsboard/thingsboard/pull/10132) Action button widget by @ikulikov
  * [#10134](https://github.com/thingsboard/thingsboard/pull/10134) Command button widget by @ikulikov
  * [#10162](https://github.com/thingsboard/thingsboard/pull/10162) Power button widget by @ikulikov
  * [#10053](https://github.com/thingsboard/thingsboard/pull/10053) Single Switch control widget by @ikulikov
  * [#10195](https://github.com/thingsboard/thingsboard/pull/10195) Slider widget by @ikulikov
  * [#10153](https://github.com/thingsboard/thingsboard/pull/10153) New widget action type: Open URL by @Dmitriymus
* Transport
  * [#10137](https://github.com/thingsboard/thingsboard/pull/10137) SNMP: delay between sending request chunks; traps processing fixes by @ViacheslavKlimov
  * [#10063](https://github.com/thingsboard/thingsboard/pull/10063) Support DTLS Connection ID with configuration by @Rhyaldir
* Edge
  * [#9968](https://github.com/thingsboard/thingsboard/pull/9968) Alarm comment support by @AndriiLandiak
  * [#10021](https://github.com/thingsboard/thingsboard/pull/10021) Notification rules for connection status and errors. Rate limits for Edge events. by @AndriiLandiak

**Minor Improvements**

* Core & Rule Engine
  * [#9030](https://github.com/thingsboard/thingsboard/pull/9030) Device state rule node; device state service improvements by @dskarzh
  * [#10083](https://github.com/thingsboard/thingsboard/pull/10083) Performance improvements for entities saving by @ViacheslavKlimov
  * [#9937](https://github.com/thingsboard/thingsboard/pull/9937) Added Event and Audit Logs services to TbContext. by @devaskim
  * [#10185](https://github.com/thingsboard/thingsboard/pull/10185) Added global queue prefix to js-executor, rule-node and tb-rule-engine-notifications-node- consumer group id by @dashevchenko
  * [#10175](https://github.com/thingsboard/thingsboard/pull/10175) Added support for IN, NOT_IN types of operations alarm rules by @dashevchenko
  * [#9957](https://github.com/thingsboard/thingsboard/pull/9957) Set default device connectivity params from the thingsboard.yml duringstall by @YevhenBondarenko
  * [#10085](https://github.com/thingsboard/thingsboard/pull/10085) Removed support for upgrades from versions prior to 3.5.0 by @dashevchenko
  * [#10152](https://github.com/thingsboard/thingsboard/pull/10152) CASSANDRA_QUERY_SET_NULL_VALUES_ENABLED=true by default by @dashevchenko

* UI
  * [#10147](https://github.com/thingsboard/thingsboard/pull/10147) Optimized image requests the map widgets and async rendering by @Dmitriymush
  * [#10215](https://github.com/thingsboard/thingsboard/pull/10215) Optimized image updates the Image Gallery by @vvlladd28
  * [#9947](https://github.com/thingsboard/thingsboard/pull/9947) Added queue selection for rule nodes by @ArtemDzhereleiko
  * [#9880](https://github.com/thingsboard/thingsboard/pull/9880) Added search to rule chain selector by @rusikv
  * [#9904](https://github.com/thingsboard/thingsboard/pull/9904) Improved Ukrainian translation by @xalt7x
  * [#9914](https://github.com/thingsboard/thingsboard/pull/9914) Refactoring of the translation for the tenant profile dialog by @ArtemDzhereleiko
  * [#9935](https://github.com/thingsboard/thingsboard/pull/9935) Improved components by changing API usage from getDeviceType/getAssetЕype to getDeviceProfileName/getAssetProfileName  by @rusikv
  * [#10268](https://github.com/thingsboard/thingsboard/pull/10268) Added new services to Services Map Widget Context by @ChantsovaEkaterina
  * [#9991](https://github.com/thingsboard/thingsboard/pull/9991) Added a check if an entity supports a detail page the entity table by @rusikv
  * [#10022](https://github.com/thingsboard/thingsboard/pull/10022) Added support for HTML tags rule node description (Help tabs) by @iraznatovskyi
  * [#9798](https://github.com/thingsboard/thingsboard/pull/9798) Update locale.constant-de_DE.json by @Backdraft007
  * [#9927](https://github.com/thingsboard/thingsboard/pull/9927) Update locale.constant-zh_CN.json by @Fliner
  * [#10156](https://github.com/thingsboard/thingsboard/pull/10156) Added Polish locale by @ArtemDzhereleiko
  * [#9956](https://github.com/thingsboard/thingsboard/pull/9956) Shared some models and components to use thingsboard-extension by @kalutkaz
  * [#10062](https://github.com/thingsboard/thingsboard/pull/10062) improvement to SNMP transport config by @Dmitriymush
  * [#10064](https://github.com/thingsboard/thingsboard/pull/10064) Improvements for styles and time-window scss by @Dmitriymush
  * [#10066](https://github.com/thingsboard/thingsboard/pull/10066) Increased "maxRows" limit from "100" to "3000" for Angular Gridster by @xalt7x
  * [#10139](https://github.com/thingsboard/thingsboard/pull/10139) New toast notification design by @ArtemDzhereleiko
  * [#10226](https://github.com/thingsboard/thingsboard/pull/10226) Added the possibility of setting the value range manually the Signal Strength widget configuration by @jktu2870

**Bug Fixes**

* Core & Rule Engine
  * [#9963](https://github.com/thingsboard/thingsboard/pull/9963) Fixed asset relations deletion by @ViacheslavKlimov
  * [#10205](https://github.com/thingsboard/thingsboard/pull/10205) Fixed delete alarm events (device profile node) by @YevhenBondarenko
  * [#10111](https://github.com/thingsboard/thingsboard/pull/10111) Fixed infinite 'Failure' some corner cases by @YevhenBondarenko
  * [#10202](https://github.com/thingsboard/thingsboard/pull/10202) Mapping of command id to unique sequence number per subscription id by @ashvayka
* UI
  * [#9941](https://github.com/thingsboard/thingsboard/pull/9941) Fixed validation JSON form custom widgets by @vvlladd28
  * [#10016](https://github.com/thingsboard/thingsboard/pull/10016) Fixed not updated image preview when updated image by @vvlladd28
  * [#9869](https://github.com/thingsboard/thingsboard/pull/9869) Fixed 'stateId' autocomplete and added improvements for widget action dialog by @Dmitriymush
  * [#9923](https://github.com/thingsboard/thingsboard/pull/9923) Fixed ota-package-autocomplete override of 'formValue' on newputs value by @Dmitriymush
  * [#9936](https://github.com/thingsboard/thingsboard/pull/9936) Fixed sysadmin general settings for Firefox by @ArtemDzhereleiko
  * [#9948](https://github.com/thingsboard/thingsboard/pull/9948) Fixed not properly displaying of copy-code button by @iraznatovskyi
  * [#10012](https://github.com/thingsboard/thingsboard/pull/10012) Fixed default column visibility for time-series table widget by @ArtemDzhereleiko
  * [#10014](https://github.com/thingsboard/thingsboard/pull/10014) Fixed error on deleting data key basic config widgets by @ArtemDzhereleiko
  * [#10036](https://github.com/thingsboard/thingsboard/pull/10036) Fixed progress bar by @ArtemDzhereleiko
  * [#10052](https://github.com/thingsboard/thingsboard/pull/10052) Fixed IoT Gateway dashboard validator gateway configuration by @iraznatovskyi
  * [#10060](https://github.com/thingsboard/thingsboard/pull/10060) Fixed IoT Gateway dashboard toast position after saving connector by @iraznatovskyi
  * [#10065](https://github.com/thingsboard/thingsboard/pull/10065) Fixed 'singletonMode'fo on copy of rule-node by @Dmitriymush
  * [#10084](https://github.com/thingsboard/thingsboard/pull/10084) Fixed dynamic links creation for gateway devices details by @iraznatovskyi
  * [#10108](https://github.com/thingsboard/thingsboard/pull/10108) Fixed chart card value color differs from other widgets with the same values and range colors configs by @rusikv
  * [#10117](https://github.com/thingsboard/thingsboard/pull/10117) Fixed RPC connectors table collapsing also fixed JSON field height when this widget looks as a column by @iraznatovskyi
  * [#10122](https://github.com/thingsboard/thingsboard/pull/10122) Fixed dashboard entity filter remembers userput on close and cancel by @rusikv
  * [#10130](https://github.com/thingsboard/thingsboard/pull/10130) Fixed Gridster options update for mobile mode by @Dmitriymush
  * [#10189](https://github.com/thingsboard/thingsboard/pull/10189) Fixed the link to the documentation for time-series charts by @jktu2870
  * [#10177](https://github.com/thingsboard/thingsboard/pull/10177) Fixed dashboard state autocomplete widget action component by @Dmitriymush
  * [#10183](https://github.com/thingsboard/thingsboard/pull/10183) Fixed the caption to "Relation types to propagate by @jktu2870
  * [#10206](https://github.com/thingsboard/thingsboard/pull/10206) Fixed 'typeList' URL query and alarm filter config translation by @Dmitriymush
  * [#10225](https://github.com/thingsboard/thingsboard/pull/10225) Fixed background settings panel jump when editing content by @vvlladd28
  * [#10247](https://github.com/thingsboard/thingsboard/pull/10247) Fixed hint the notification rule dialog by @vvlladd28
  * [#10088](https://github.com/thingsboard/thingsboard/pull/10088) Replaced hard-coded document link paths with site-base-url by @iraznatovskyi
  * [#10050](https://github.com/thingsboard/thingsboard/pull/10050) Added dynamic volumeputs and minor improvements for the liquid level widget. by @Dmitriymush
  * [#10173](https://github.com/thingsboard/thingsboard/pull/10173) Added workaround for matChipInputAddOnBlur selection bug tb-entity-subtype-listput by @Dmitriymush


## v3.6.2 (Dec 28, 2023) {#v362}

Minor release with the following improvements and bug fixes:

**Improvements**

* Core & Rule Engine

  * [#9542](https://github.com/thingsboard/thingsboard/pull/9542) Image gallery by @ViacheslavKlimov
  * [#9284](https://github.com/thingsboard/thingsboard/pull/9284) Transformation rule node enhancements by @ShvaykaD
  * [#9784](https://github.com/thingsboard/thingsboard/pull/9784) Support for 'Users of the entity owner' recipients group TbNotificationNode by @ViacheslavKlimov
  * [#9776](https://github.com/thingsboard/thingsboard/pull/9776) Added new APIs to get entity profile names (AssetProfile & DeviceProfile) by @ShvaykaD
  * [#9717](https://github.com/thingsboard/thingsboard/pull/9717) WebSocket session deduplication and API improvements by @ViacheslavKlimov
  * [#9900](https://github.com/thingsboard/thingsboard/pull/9900) Version control performance improvements by @ViacheslavKlimov
  * [#9632](https://github.com/thingsboard/thingsboard/pull/9632) Save rule chain metadata: validate node configuration only after upgrade by @ShvaykaD
  
* UI

  * Industrial widgets: Flow rate, Pressure, Vibration, Power consumption, Rotational speed, Efficiency by @rusikv
  * [#9771](https://github.com/thingsboard/thingsboard/pull/9771) Air quality widgets: Individual Allergy Index (IAI), O3, NO2, SO2, CO by @Dmitriymush
  * [#9901](https://github.com/thingsboard/thingsboard/pull/9901) Set max allow resource size from tenant profile by @vvlladd28
  * [#9307](https://github.com/thingsboard/thingsboard/pull/9307) Timewindow configuration on tab switch by @rusikv
  * [#9553](https://github.com/thingsboard/thingsboard/pull/9553) Add dashboard dialog redesign by @Dmitriymush
  * [#9579](https://github.com/thingsboard/thingsboard/pull/9579) Save the last status of the checkbox on widget bundle export by @ArtemDzhereleiko
  * [#9642](https://github.com/thingsboard/thingsboard/pull/9642) Added query.models to public-api by @kalutkaz
  * [#9649](https://github.com/thingsboard/thingsboard/pull/9649) Added links to the auto-complete elements that are used the entity details page by @ArtemDzhereleiko
  * [#9650](https://github.com/thingsboard/thingsboard/pull/9650) Added links to the originator column the 'Alarms' page by @rusikv
  * [#9690](https://github.com/thingsboard/thingsboard/pull/9690) Added settings to change the time format the timeseries table widget by @ArtemDzhereleiko
  * [#9713](https://github.com/thingsboard/thingsboard/pull/9713) Added custom translation label to the Entity count widget by @deaflynx
  * [#9735](https://github.com/thingsboard/thingsboard/pull/9735) Added button to copy dashboard state by @ArtemDzhereleiko
  * [#9709](https://github.com/thingsboard/thingsboard/pull/9709) Added nl_BE locale by @ArtemDzhereleiko
  * [#9742](https://github.com/thingsboard/thingsboard/pull/9742) Improved German locale by @Backdraft007
  * [#9763](https://github.com/thingsboard/thingsboard/pull/9763) Improved Chinese locale by @Fliner
  * [#9884](https://github.com/thingsboard/thingsboard/pull/9884) Improved Spanish locale by @ArtemDzhereleiko
  * [#9885](https://github.com/thingsboard/thingsboard/pull/9885) Improved Ukrainian locale by @xalt7x
  * [#9637](https://github.com/thingsboard/thingsboard/pull/9637) Improved Gateway dashboard by @MrKartoshka
  * [#9807](https://github.com/thingsboard/thingsboard/pull/9807) Added 'milligram per cubic meter' unit by @Dmitriymush
  * [#9791](https://github.com/thingsboard/thingsboard/pull/9791) Improvement for security settings by @ArtemDzhereleiko
  * [#9848](https://github.com/thingsboard/thingsboard/pull/9848) Redesign gateway launch commands dialog by @vvlladd28
  * [#9872](https://github.com/thingsboard/thingsboard/pull/9872) Rename default state controller to static by @vvlladd28
  * [#9685](https://github.com/thingsboard/thingsboard/pull/9685) Update settings configuration for location widgets by @ArtemDzhereleiko
  
* Edge
  * [#9617](https://github.com/thingsboard/thingsboard/pull/9617) Edge - JSON converter for proto by @AndriiLandiak


**Bug Fixes**

* Core & Rule Engine

  * [#9630](https://github.com/thingsboard/thingsboard/pull/9630) Fixed version control message text display behaviour by @Dmitriymush
  * [#9612](https://github.com/thingsboard/thingsboard/pull/9612) Save timeseries without latest: removed callback for entity view by @ShvaykaD
  * [#9600](https://github.com/thingsboard/thingsboard/pull/9600) Improved afterTest method by @dashevchenko
  * [#9687](https://github.com/thingsboard/thingsboard/pull/9687) Fixed widgetTypes access to customer user authority by @dashevchenko
  * [#9712](https://github.com/thingsboard/thingsboard/pull/9712) Edge Requests Service - fetch only first level of relation from cloud by @volodymyr-babak
  * [#9616](https://github.com/thingsboard/thingsboard/pull/9616) Fixed assign device to tenant by @YevhenBondarenko
  * [#9727](https://github.com/thingsboard/thingsboard/pull/9727) Fixed rule-engine stats by @YevhenBondarenko
  * [#9696](https://github.com/thingsboard/thingsboard/pull/9696) Fixed stringToBytes method by @nickAS21
  * [#9751](https://github.com/thingsboard/thingsboard/pull/9751) Fixed getOrSaveKeyId transaction by @YevhenBondarenko
  * [#9764](https://github.com/thingsboard/thingsboard/pull/9764) Fixed mqtt/coap docker connectivity commands (localhost case) by @dashevchenko
  * [#9652](https://github.com/thingsboard/thingsboard/pull/9652) Fixed save attributes node by @ShvaykaD
  * [#9665](https://github.com/thingsboard/thingsboard/pull/9665) Force update of version for nodes with valid config and old configuration version by @ShvaykaD
  * [#9768](https://github.com/thingsboard/thingsboard/pull/9768) Fixed TbDate methods by @nickAS21
  * [#9638](https://github.com/thingsboard/thingsboard/pull/9638) Fixed copy string values from msg to md TbCopyKeysNode by @ShvaykaD
  * [#9827](https://github.com/thingsboard/thingsboard/pull/9827) Fixed VC support for notification recipients by @ViacheslavKlimov

* UI

  * [#9629](https://github.com/thingsboard/thingsboard/pull/9629) Fixed dashboard alias edit window by @ArtemDzhereleiko
  * [#9643](https://github.com/thingsboard/thingsboard/pull/9643) Fixed focus alarm type filter by @ArtemDzhereleiko
  * [#9620](https://github.com/thingsboard/thingsboard/pull/9620) Fixedfinity alarm loading on unresolved data sources by @ArtemDzhereleiko
  * [#9644](https://github.com/thingsboard/thingsboard/pull/9644) Fixed 'Add alias' dialog when 'Entity list' filter is selected by @vvlladd28
  * [#9658](https://github.com/thingsboard/thingsboard/pull/9658) Fixed border radius for basic settings for analog gauge widgets by @ArtemDzhereleiko
  * [#9660](https://github.com/thingsboard/thingsboard/pull/9660) Fixed units for analog gauge widgets by @ArtemDzhereleiko
  * [#9663](https://github.com/thingsboard/thingsboard/pull/9663) Fixed translation key for error of rule engine TTL exceptions days field by @ArtemDzhereleiko
  * [#9671](https://github.com/thingsboard/thingsboard/pull/9671) Fixed padding for multipleput widget with group setings by @ArtemDzhereleiko
  * [#9677](https://github.com/thingsboard/thingsboard/pull/9677) Fixed card widget to display textual values by @vvlladd28
  * [#9715](https://github.com/thingsboard/thingsboard/pull/9715) Fixed overflowing toolbar buttons by @ArtemDzhereleiko
  * [#9729](https://github.com/thingsboard/thingsboard/pull/9729) Fixed JSON type attribute multipleput widget by @Dmitriymush
  * [#9747](https://github.com/thingsboard/thingsboard/pull/9747) Fixed appearance of mdi and other icons by @Dmitriymush
  * [#9793](https://github.com/thingsboard/thingsboard/pull/9793) Increased number of displayed rule chains rule chain select to 1024 by @rusikv
  * [#9814](https://github.com/thingsboard/thingsboard/pull/9814) Color picker centering 'Copy color to clipboard' by @ArtemDzhereleiko
  * [#9813](https://github.com/thingsboard/thingsboard/pull/9813) Fixed default color for level and shape elements the battery widget by @ArtemDzhereleiko
  * [#9857](https://github.com/thingsboard/thingsboard/pull/9857) Fixed externalId field value for entity import/export by @vvlladd28
  * [#9847](https://github.com/thingsboard/thingsboard/pull/9847) Changed placeholder for the 'Enter asset profile' field by @iraznatovskyi
  * [#9840](https://github.com/thingsboard/thingsboard/pull/9840) Fixed error overlay the name field of widget action dialog  by @ArtemDzhereleiko
  * [#9839](https://github.com/thingsboard/thingsboard/pull/9839) Removed percent symbol from n/a value the liquid level widget by @ArtemDzhereleiko
  * [#9836](https://github.com/thingsboard/thingsboard/pull/9836) Fixed display of values that are less then 0 or more then 100 battery level widget by @ArtemDzhereleiko
  * [#9825](https://github.com/thingsboard/thingsboard/pull/9825) Fixed backward compatibility for notification settings by @ArtemDzhereleiko
  * [#9860](https://github.com/thingsboard/thingsboard/pull/9860) Fixedfinite loop for major ticks the 'Analog Gauge' widget by @ArtemDzhereleiko
  * [#9868](https://github.com/thingsboard/thingsboard/pull/9868) Fixedcorrect link tostall necessary tools for MQTT conenctivity dialog by @vvlladd28
  * [#9889](https://github.com/thingsboard/thingsboard/pull/9889) Fixed disappearing of  disabledputs values the device connectivity sysadmin settings by @rusikv
  * [#9883](https://github.com/thingsboard/thingsboard/pull/9883) Fixed custom legend the 'Flot' widget by @ArtemDzhereleiko
  * [#9748](https://github.com/thingsboard/thingsboard/pull/9748) Fixed Chinese translations of 'inactive' and 'active' by @yuyihan666


## v3.6.1 (Nov 13, 2023) {#v361}

Minor release with the following improvements and bug fixes:

**Improvements**

* Core & Rule Engine:

  * Performance improvement of WebSocket subscriptions in cluster mode by @ashvayka
  * [#9306](https://github.com/thingsboard/thingsboard/pull/9306) Added API rate limits for TBEL by @dashevchenko
  * [#9381](https://github.com/thingsboard/thingsboard/pull/9381) Alarm service improvements (removed deprecated methods) by @YevhenBondarenko
  * [#9446](https://github.com/thingsboard/thingsboard/pull/9446) Support of PKCS8 and other private key formats by @YevhenBondarenko
  * [#9457](https://github.com/thingsboard/thingsboard/pull/9457) Device connectivity settings moved to UI by @YevhenBondarenko
  * [#9437](https://github.com/thingsboard/thingsboard/pull/9437) Ability to add a global prefix for all topics by @dashevchenko

* UI:

  * Added **'Doughnut'**, **'Progress bar'**, **Signal strength'**, **'Wind speed and direction'**, and **'Simple value and chart card'** widget;
  * Added **229** new widgets to the 'Air quality', 'Indoor Environment' and 'Outdoor Environment' widget bundles by @ikulikov
  * [#9337](https://github.com/thingsboard/thingsboard/pull/9337) Implement widget types / bundles pagination and full text search. Add widget types tags. by @ikulikov
  * [#9398](https://github.com/thingsboard/thingsboard/pull/9398) Improved of alarm additionalfo usability by @rusikv
  * [#9391](https://github.com/thingsboard/thingsboard/pull/9391) Enabled all delete strategies for multiple delete timeseries UI by @rusikv
  * [#9382](https://github.com/thingsboard/thingsboard/pull/9382) Hide notification settings for providers that are disabled on the system level by @ArtemDzhereleiko
  * [#9372](https://github.com/thingsboard/thingsboard/pull/9372) Alarm table settings improvement by @ArtemDzhereleiko
  * [#9351](https://github.com/thingsboard/thingsboard/pull/9351) Update es_ES locale to 3.6 by @JavierNR
  * [#9335](https://github.com/thingsboard/thingsboard/pull/9335) Update locale.constant-de_DE.json by @Mr-Mime
  * [#9322](https://github.com/thingsboard/thingsboard/pull/9322) Updated screenshots for rulenode examples by @kalutkaz
  * [#9277](https://github.com/thingsboard/thingsboard/pull/9277) Make entity list required the 'Entity list' alias by @ArtemDzhereleiko
  * [#9265](https://github.com/thingsboard/thingsboard/pull/9265) Added client/server/shared attribute to key filter by @ArtemDzhereleiko
  * [#9318](https://github.com/thingsboard/thingsboard/pull/9318) API rate limits for TBEL UI by @rusikv
  * [#9427](https://github.com/thingsboard/thingsboard/pull/9427) Added breadcrumbs when navigate to editing widgets from the widget bundle by @vvlladd28
  * [#9435](https://github.com/thingsboard/thingsboard/pull/9435) Improvement default widget bundle attributes/timeseries tables by @vvlladd28
  * [#9445](https://github.com/thingsboard/thingsboard/pull/9445) Rename widget type to widget by @vvlladd28
  * [#9472](https://github.com/thingsboard/thingsboard/pull/9472) Improved change detection login the widget editor by @vvlladd28
  * [#9442](https://github.com/thingsboard/thingsboard/pull/9442) Improvement for font settings panel added settings to disabled and hide line height by @ArtemDzhereleiko
  * [#9467](https://github.com/thingsboard/thingsboard/pull/9467) Ability to add or import new widgets directly to the widget bundle by @vvlladd28
  * [#9468](https://github.com/thingsboard/thingsboard/pull/9468) Ability to select widget bundle when widget is created by @vvlladd28
  * [#9449](https://github.com/thingsboard/thingsboard/pull/9449) Added decibel-milliwatts unit to dictionary by @rusikv
  * [#9469](https://github.com/thingsboard/thingsboard/pull/9469) Changed 'Java Script' to 'JavaScript' by @iraznatovskyi
  * [#9456](https://github.com/thingsboard/thingsboard/pull/9456) Added 'Liquid level' widgets bundle by @Dmitriymush
  * [#9484](https://github.com/thingsboard/thingsboard/pull/9484) Color range setting refactored to a separate component by @ArtemDzhereleiko
  * [#9485](https://github.com/thingsboard/thingsboard/pull/9485) Improved gauge widgets settings by @ArtemDzhereleiko
  * [#9500](https://github.com/thingsboard/thingsboard/pull/9500) Improved translations component by @iraznatovskyi
  * [#9501](https://github.com/thingsboard/thingsboard/pull/9501) Added basic settigs for admin table widgets by @ArtemDzhereleiko
  * [#9556](https://github.com/thingsboard/thingsboard/pull/9556) Refactoring event filter panel by @ArtemDzhereleiko
  * [#9569](https://github.com/thingsboard/thingsboard/pull/9569) Improved usability of bulk operations alarm widget table by @rusikv
  * [#9581](https://github.com/thingsboard/thingsboard/pull/9581) Added support basic settings form for custom widgets by @kalutkaz

* Edge:
  
  * [#9185](https://github.com/thingsboard/thingsboard/pull/9185) Edge Synchronization improvement using EdgeId by @AndriiLandiak
  * [#9226](https://github.com/thingsboard/thingsboard/pull/9226) TB Resource functionality support for Edge by @AndriiLandiak

**Bug fixes**

* Core & Rule Engine:

  * [#9419](https://github.com/thingsboard/thingsboard/pull/9419) Tenant publish event fix: tenant_idstead sys_tenant_id to avoid br… by @volodymyr-babak
  * [#9494](https://github.com/thingsboard/thingsboard/pull/9494) Version control: fix edgeRuleChainId substitution for asset and device profiles by @ViacheslavKlimov
  * [#9410](https://github.com/thingsboard/thingsboard/pull/9410) Fixed device active/inactive widgets home-page by @YevhenBondarenko
  * [#9558](https://github.com/thingsboard/thingsboard/pull/9558) Fixed getUsersForAssign if originator was removed by @YevhenBondarenko
  * [#9441](https://github.com/thingsboard/thingsboard/pull/9441) Fixed rule nodes upgrade script by @ShvaykaD

* UI:

  * Fixed default latest data keys units for value and chart card by @ikulikov
  * Fixed data keys chips validation by @ikulikov
  * [#9389](https://github.com/thingsboard/thingsboard/pull/9389) Fixed tenant profile dialog by @ArtemDzhereleiko
  * [#9387](https://github.com/thingsboard/thingsboard/pull/9387) Fixed tenant profile autocomplete hide edit button and add create new button by @ArtemDzhereleiko
  * [#9502](https://github.com/thingsboard/thingsboard/pull/9502) Fixed missing or bad German translations by @megla-tlanghorst
  * [#9511](https://github.com/thingsboard/thingsboard/pull/9511) Fixed alarm type list width and empty option by @ArtemDzhereleiko
  * [#9517](https://github.com/thingsboard/thingsboard/pull/9517) Fixed width of alarm rule for device profile dialog by @ArtemDzhereleiko
  * [#9522](https://github.com/thingsboard/thingsboard/pull/9522) Fixed display column panel table widgets for scrolling long list columns by @ArtemDzhereleiko
  * [#9298](https://github.com/thingsboard/thingsboard/pull/9298) Fixed entity table fields overlaying by @ArtemDzhereleiko
  * [#9393](https://github.com/thingsboard/thingsboard/pull/9393) Command whitespaces hotfix by @MrKartoshka
  * [#9405](https://github.com/thingsboard/thingsboard/pull/9405) Flot key settings: axisMin, axisMax allow negative values by @deaflynx
  * [#9402](https://github.com/thingsboard/thingsboard/pull/9402) Fixed chart widgets color transparency not working hex and hsla formats by @rusikv
  * [#9343](https://github.com/thingsboard/thingsboard/pull/9343) Use translation placeholder for closing button embed dialog. by @devaskim
  * [#9332](https://github.com/thingsboard/thingsboard/pull/9332) Fixed dashboard detail button by @ArtemDzhereleiko
  * [#9331](https://github.com/thingsboard/thingsboard/pull/9331) Fixed translation on change lang by @ArtemDzhereleiko
  * [#9447](https://github.com/thingsboard/thingsboard/pull/9447) Fixed message 'No data to display on widget' not displayed by @rusikv
  * [#9448](https://github.com/thingsboard/thingsboard/pull/9448) Fixed position of help icon custom date config of card widgets by @rusikv
  * [#9459](https://github.com/thingsboard/thingsboard/pull/9459) Fixed advanced widget setting boarder radius property by @ArtemDzhereleiko
  * [#9460](https://github.com/thingsboard/thingsboard/pull/9460) Fixed state chart default legend position not set by @rusikv
  * [#9491](https://github.com/thingsboard/thingsboard/pull/9491) Fixed 'Device created' notification when creating alarm using REST API by @ViacheslavKlimov
  * [#9473](https://github.com/thingsboard/thingsboard/pull/9473) HTML/markdown changes detection on parsingvalid html string by @Dmitriymush
  * [#9487](https://github.com/thingsboard/thingsboard/pull/9487) Fixed reflected htmljection via login error by @vvlladd28
  * [#9489](https://github.com/thingsboard/thingsboard/pull/9489) Fixed rule chain selector padding by @ArtemDzhereleiko
  * [#9251](https://github.com/thingsboard/thingsboard/pull/9251) Fixed of error not displaying dashboard force fullscreen mode by @rusikv
  * [#9510](https://github.com/thingsboard/thingsboard/pull/9510) Fixed for timeseries charts validation blocks widget adding by @rusikv
  * [#9533](https://github.com/thingsboard/thingsboard/pull/9533) Fixed alarm table basic settings columns error appearense and anomaly with changeDetection by @Dmitriymush
  * [#9567](https://github.com/thingsboard/thingsboard/pull/9567) Fixed updated value markdownput component and refactoring this component by @vvlladd28
  * [#9503](https://github.com/thingsboard/thingsboard/pull/9503) Fixed version control Widgets/Widget bundles entity list by @ArtemDzhereleiko
  * [#9583](https://github.com/thingsboard/thingsboard/pull/9583) Hide display buttons activation link and resend activation when user activated by @vvlladd28


## v3.6.0 (Sep 21, 2023) {#v36}

Major release with the following features and bug fixes:

**Major Improvements**

* Core & Rule Engine 

  * [#8988](https://github.com/thingsboard/thingsboard/pull/8988) Isolated processing queues by @ViacheslavKlimov
  * [#8843](https://github.com/thingsboard/thingsboard/pull/8843) Notifications via Microsoft Teams by @ViacheslavKlimov
  * [#8775](https://github.com/thingsboard/thingsboard/pull/8775) Improve rollout restart behavior by @YevhenBondarenko
  * [#8723](https://github.com/thingsboard/thingsboard/pull/8723) OAuth2 support for mail settings by @dashevchenko
  * Refactoring of filter and enrichment rule nodes to improve usability by @ShvaykaD and @dskarzh. 

* UI
  
  * New widgets: "Value card", "Horizontal value card", "Value and chart card", "Entity count", "Alarm count" and "Battery level".
  * [#8708](https://github.com/thingsboard/thingsboard/pull/8708) Widget configuration improvement + basic widget configuration mode by @ikulikov
  * [#8547](https://github.com/thingsboard/thingsboard/pull/8547) Dashboard edit panel improvement by @ikulikov
  * [#8882](https://github.com/thingsboard/thingsboard/pull/8882) "Add device" dialog improvement by @vvlladd28
  * [#8938](https://github.com/thingsboard/thingsboard/pull/8938) Check connectivity window by @vvlladd28
  * [#8337](https://github.com/thingsboard/thingsboard/pull/8337) Gateways dashboard by @MrKartoshka
  * Add support of many-to-many relations between widgets and widget bundles by @ikulikov in [875c8d526b](https://github.com/thingsboard/thingsboard/commit/875c8d526b), [1fb9ba622e](https://github.com/thingsboard/thingsboard/commit/1fb9ba622e).

* Edge

  * [#9052](https://github.com/thingsboard/thingsboard/pull/9052) Introduce Event Pub/Sub Model for Detecting Changes Entities by @AndriiLandiak


**Minor improvements**

* Core & Rule Engine

  * [#8825](https://github.com/thingsboard/thingsboard/pull/8825) Alarm type auto-complete the alarm filter by @YevhenBondarenko
  * [#8928](https://github.com/thingsboard/thingsboard/pull/8928) API improvements for deleting time-series by @YevhenBondarenko
  * [#9027](https://github.com/thingsboard/thingsboard/pull/9027) Sequential RPC strategies by @ShvaykaD
  * [#8793](https://github.com/thingsboard/thingsboard/pull/8793) User-level notification settings by @ViacheslavKlimov
  * [#8702](https://github.com/thingsboard/thingsboard/pull/8702) Notifications about exceeded rate limits by @ViacheslavKlimov
  * [#8533](https://github.com/thingsboard/thingsboard/pull/8533) Version control for notification settings by @ViacheslavKlimov
  * [#8429](https://github.com/thingsboard/thingsboard/pull/8429) Audit logs for widgets bundle by @YevhenBondarenko
  * [#8527](https://github.com/thingsboard/thingsboard/pull/8527) Ability to disable notification rules by @ViacheslavKlimov
  * [#8556](https://github.com/thingsboard/thingsboard/pull/8556) Ability to disable SMS for tenant profile by @dashevchenko
  * [#8575](https://github.com/thingsboard/thingsboard/pull/8575) Ability to disable swagger by @YevhenBondarenko
  * [#8724](https://github.com/thingsboard/thingsboard/pull/8724) Added new default root cert for Azure IoT by @YevhenBondarenko
  * [#9044](https://github.com/thingsboard/thingsboard/pull/9044) Filter and enrichment nodes usability improvements by @ShvaykaD
  * [#8725](https://github.com/thingsboard/thingsboard/pull/8725) Math node fields templatization by @ShvaykaD
  * [#8562](https://github.com/thingsboard/thingsboard/pull/8562) Added resourceType query param to /resources endpoint  by @dashevchenko
  * [#8839](https://github.com/thingsboard/thingsboard/pull/8839) Added cache for resources by @dashevchenko
  * [#9056](https://github.com/thingsboard/thingsboard/pull/9056) Event table speedup (15min default time window) by @smatvienko-tb
  * [#8898](https://github.com/thingsboard/thingsboard/pull/8898) Validation of resource deletion by @dashevchenko
  * [#8519](https://github.com/thingsboard/thingsboard/pull/8519) Replacement of object mapper usages with Jackson utils by @adovh
  * [#9065](https://github.com/thingsboard/thingsboard/pull/9065) InternalType field to TbMsg to have the ability to use switch-casesstead of if-return blocks. by @ShvaykaD

* Transport

  * [#8757](https://github.com/thingsboard/thingsboard/pull/8757) Improvements to SNMP support by @ViacheslavKlimov
  * [#8663](https://github.com/thingsboard/thingsboard/pull/8663) Improvements to RPC acknowledge logic by @ShvaykaD

* UI

  * Improve material icons selector by @ikulikov in [d44f5fda5f](https://github.com/thingsboard/thingsboard/commit/d44f5fda5f), [7861a3fbad](https://github.com/thingsboard/thingsboard/commit/7861a3fbad)
  * Units selection component by @ikulikov in [4827589c48](https://github.com/thingsboard/thingsboard/commit/4827589c48)
  * Update descriptions for all widgets by @ashvayka 
  * Multiple attributes input widget improvement by @ikulikov in [244f8239ba](https://github.com/thingsboard/thingsboard/commit/244f8239ba)
  * [#8911](https://github.com/thingsboard/thingsboard/pull/8911) Redesign user profile page by @vvlladd28
  * [#8931](https://github.com/thingsboard/thingsboard/pull/8931) "Add asset" dialog improvement by @ArtemDzhereleiko
  * [#8836](https://github.com/thingsboard/thingsboard/pull/8836) Added ability to test/edit rule node script with selected debug event by @rusikv
  * [#8880](https://github.com/thingsboard/thingsboard/pull/8880) Filter and enrichment rule nodes usability improvements by @kalutkaz
  * [#8587](https://github.com/thingsboard/thingsboard/pull/8587) Added the option to edit notification templates the template selector by @vvlladd28
  * [#8571](https://github.com/thingsboard/thingsboard/pull/8571) Added columns visibility settings for time-series table widget by @ArtemDzhereleiko
  * [#8638](https://github.com/thingsboard/thingsboard/pull/8638) Rule chain selector by @ArtemDzhereleiko
  * [#8832](https://github.com/thingsboard/thingsboard/pull/8832) Improved cleared alarm notification style by @vvlladd28
  * [#9021](https://github.com/thingsboard/thingsboard/pull/9021) Improved search component usability by @vvlladd28
  * [#8721](https://github.com/thingsboard/thingsboard/pull/8721) Added ToggleHeaderComponent to the module map by @kalutkaz
  * [#7793](https://github.com/thingsboard/thingsboard/pull/7793) Added "Enable selection mode" settings with touch event for bar/state/line chart-widgets by @ArtemDzhereleiko
  * [#9001](https://github.com/thingsboard/thingsboard/pull/9001) Added emailput type by @ArtemDzhereleiko
  * [#8959](https://github.com/thingsboard/thingsboard/pull/8959) Added public API for WebSocket services.  by @LeoMorgan113
  * [#8894](https://github.com/thingsboard/thingsboard/pull/8894) Added option collapse cell actions mobile view for entities/time-series/alarm table by @ArtemDzhereleiko
  * [#8997](https://github.com/thingsboard/thingsboard/pull/8997) Added double quotes to highlight 'remove other entities' confirm phrase the version control dialog by @rusikv
  * [#9002](https://github.com/thingsboard/thingsboard/pull/9002) Added color data key type for multipleput widget by @ArtemDzhereleiko
  * [#9003](https://github.com/thingsboard/thingsboard/pull/9003) Added dialog for creation of latest telemetry key value by @rusikv
  * [#9037](https://github.com/thingsboard/thingsboard/pull/9037) Added selection to alarms table for bulk acknowledgment and clearing by @rusikv
  * [#8846](https://github.com/thingsboard/thingsboard/pull/8846) Update locale.constant-zh_CN.json by @Fliner
  * [#8961](https://github.com/thingsboard/thingsboard/pull/8961) Show pointer on hover the widget legend component by @deaflynx
  * [#8960](https://github.com/thingsboard/thingsboard/pull/8960) Show pointer on hover if the entities table row has click action by @deaflynx

**Bug fixes**

* Core & Rule Engine

  * [#8706](https://github.com/thingsboard/thingsboard/pull/8706) Fixed models the Swagger API by @imbeacon
  * [#8701](https://github.com/thingsboard/thingsboard/pull/8701) Fixed multiple issues the notification system by @ViacheslavKlimov
  * [#8713](https://github.com/thingsboard/thingsboard/pull/8713) Fixed RPC queue stuck issue by @ShvaykaD
  * [#8731](https://github.com/thingsboard/thingsboard/pull/8731) Fixed NPE Flow output node when it was used after split array msg node by @ShvaykaD
  * [#8740](https://github.com/thingsboard/thingsboard/pull/8740) Fixed OAuth2 deletion domains/mobile applications/providers settings by @ArtemDzhereleiko
  * [#8808](https://github.com/thingsboard/thingsboard/pull/8808) Fixed sequence of the rule chainsitialization by @volodymyr-babak
  * [#8881](https://github.com/thingsboard/thingsboard/pull/8881) Fixed saveDeviceWithCredentials api by @YevhenBondarenko
  * [#8884](https://github.com/thingsboard/thingsboard/pull/8884) Fixed device transport configuration with SNMP protocol enabled/disabled state by @ArtemDzhereleiko
  * [#8917](https://github.com/thingsboard/thingsboard/pull/8917) Fixed list of required fields for entities by @dashevchenko
  * [#8906](https://github.com/thingsboard/thingsboard/pull/8906) Fixed user phone display entities table by @dashevchenko
  * [#9089](https://github.com/thingsboard/thingsboard/pull/9089) Fixed multiple issues with Version Controltegration by @ViacheslavKlimov
  * [#9233](https://github.com/thingsboard/thingsboard/pull/9233) Fixed ID replacement during the restore of the dashboard configuration by @ViacheslavKlimov
  * [#9155](https://github.com/thingsboard/thingsboard/pull/9155) Fixed device is not being set asactive after anactivity timeout passes by @dskarzh

* UI

  * [#8722](https://github.com/thingsboard/thingsboard/pull/8722) Fixed math function rule node validation by @vvlladd28
  * [#8834](https://github.com/thingsboard/thingsboard/pull/8834) Fixed loading widget data for 'previous quarter' and 'previous half year' time-windowtervals by @ChantsovaEkaterina
  * [#8784](https://github.com/thingsboard/thingsboard/pull/8784) Fixed 'Notify again' dialog notification center by @ArtemDzhereleiko
  * [#8814](https://github.com/thingsboard/thingsboard/pull/8814) Fixed dashboard state selection the toolbar on mobile view by @ChantsovaEkaterina
  * [#8826](https://github.com/thingsboard/thingsboard/pull/8826) Fixed display of analog gauge values by @deaflynx
  * [#8828](https://github.com/thingsboard/thingsboard/pull/8828) Fixed width of the clear alarm rule section by @ArtemDzhereleiko
  * [#9060](https://github.com/thingsboard/thingsboard/pull/9060) Fixed layout for clear alarm rule by @ArtemDzhereleiko
  * [#9193](https://github.com/thingsboard/thingsboard/pull/9193) Fixed analog gauge widget settings decimals set to zero by default by @ArtemDzhereleiko
  * [#8957](https://github.com/thingsboard/thingsboard/pull/8957) Fixed custom translation the notificationsbox by @rusikv
  * [#8951](https://github.com/thingsboard/thingsboard/pull/8951) Fixed multiple issues on the notification rules page by @rusikv
  * [#8968](https://github.com/thingsboard/thingsboard/pull/8968) Fixed update JSON attributeput widget by @rusikv
  * [#8821](https://github.com/thingsboard/thingsboard/pull/8821) Fixed z-index for selected rule node by @ArtemDzhereleiko
  * [#9173](https://github.com/thingsboard/thingsboard/pull/9173) Fixed error text for the entity type selected by @kalutkaz
  * [#9122](https://github.com/thingsboard/thingsboard/pull/9122) Fixed overlap of the rule node event table columns by @rusikv
  * [#9184](https://github.com/thingsboard/thingsboard/pull/9184) Fixed duplicate error message for missing translation by @ArtemDzhereleiko
  * [#9177](https://github.com/thingsboard/thingsboard/pull/9177) Fixed pie flot settings validation by @rusikv
  * [#9121](https://github.com/thingsboard/thingsboard/pull/9121) Fixed layout of action cell buttons by @rusikv
  * [#9043](https://github.com/thingsboard/thingsboard/pull/9043) Fixed phoneput flag layout by @ArtemDzhereleiko
  * [#8879](https://github.com/thingsboard/thingsboard/pull/8879) Fixed source decorators by @kalutkaz
  * [#8987](https://github.com/thingsboard/thingsboard/pull/8987) Fixed alarm filter panel by @ArtemDzhereleiko
  * [#8965](https://github.com/thingsboard/thingsboard/pull/8965) Fixed entity select component for alias dialog component by @ArtemDzhereleiko
  * [#9126](https://github.com/thingsboard/thingsboard/pull/9126) Fixed for 'remove other entities' popover version control by @rusikv
  * [#8767](https://github.com/thingsboard/thingsboard/pull/8767) Fixed widgets table styles for correct applying row style function by @ArtemDzhereleiko
  * [#9068](https://github.com/thingsboard/thingsboard/pull/9068) Fixedfinite loading for latest widgets with aggregation on change time-window by @ArtemDzhereleiko
  * [#9123](https://github.com/thingsboard/thingsboard/pull/9123) Fixed display of disabled form controls rule nodes by @kalutkaz
  * [#9143](https://github.com/thingsboard/thingsboard/pull/9143) Fixed layout of the GPIO panel widgets by @rusikv
  * [#9057](https://github.com/thingsboard/thingsboard/pull/9057) Fixed update user profile by @ArtemDzhereleiko
  * [#9165](https://github.com/thingsboard/thingsboard/pull/9165) Fixed widget shacking by @iraznatovskyi
  * [#9172](https://github.com/thingsboard/thingsboard/pull/9172) Fixed pie flot widget slice click action by @rusikv
  * [#9186](https://github.com/thingsboard/thingsboard/pull/9186) Fixed widget import the dashboard when the duplicate IDs by @vvlladd28
  * [#9203](https://github.com/thingsboard/thingsboard/pull/9203) Fixed key filters layout by @ArtemDzhereleiko
  * [#9148](https://github.com/thingsboard/thingsboard/pull/9148) Fixed OTA Update details page breadcrumb by @ArtemDzhereleiko

* Transport

  * [#9073](https://github.com/thingsboard/thingsboard/pull/9073) Fixed CoAP over DTLS feature type handling for server-side RPC response by @ShvaykaD
  * [#8841](https://github.com/thingsboard/thingsboard/pull/8841) Fixed updateactivity timeout attribute by @YevhenBondarenko

* Edge
 
  * [#8830](https://github.com/thingsboard/thingsboard/pull/8830) Edge event table - added sequential ID column to handle properly heavy load and cluster cases by @volodymyr-babak


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

**Major Improvements**

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

**Minor Improvements**

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

**Major Improvements**

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
  

**Minor Improvements**

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

**Major Improvements**

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
  
**Minor Improvements**

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

**Improvements**

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

**Improvements**

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

**Bug fixes**

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

**Improvements**

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

**Bug fixes**

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

**Improvements**

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

**Bug fixes**

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

**Major Improvements**

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

**Minor Improvements**

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

**Bug Fixes**

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

**Major Improvements**

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

**Improvements**

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

**Bug fixes**

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

**Improvements**

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

**Bug fixes**

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

**Improvements**

* Added Cassandra timeseries partitions cache;
* Improve audit log service - use JacksonUtil instead of ObjectMapper;

**Bug fixes**

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

**Major Improvements**

 * [Tenant Profiles](/docs/user-guide/tenant-profiles/) to manage API and Rate Limits;
 * [Device Profiles](/docs/user-guide/device-profiles/) to configure default rule chain and queue, set transport configuration and define [Alarm Rules](/docs/user-guide/device-profiles/#alarm-rules);
 * Added support of custom [MQTT Topics](/docs/user-guide/device-profiles/#mqtt-device-topic-filters) and basic [MQTT credentials](/docs/user-guide/basic-mqtt/) as alternative to access token;
 * Added support of custom device payload schema using [protocol buffers](/docs/user-guide/device-profiles/#mqtt-device-payload) for MQTT transport;
 * [Device provisioning](/docs/user-guide/device-provisioning/) is now available via device profiles;
 * [SMS Provider](/docs/user-guide/ui/sms-provider-settings) and [Send SMS](/docs/user-guide/rule-engine-2-0/external-nodes/#send-sms-node) rule node;
 * UI for [OAuth2](/docs/user-guide/oauth-2-support/) settings.
 
**Minor Improvements**

 * Added [Api Usage](/docs/user-guide/tenant-profiles/#api-usage-dashboard) dashboard;
 * Added "orderBy" request parameter for telemetry controller;
 * Added queueName to enqueueForTellNext in TbSendRPCRequestNode;
 * Added protection from the circular reference across different rule chains; 
 * Added new language Brazilian Portuguese;
 * Improvements to camera and alarm widgets, legend sort;
 * Added support of min/max values in multiple attributes input widget;
 * UI performance improvements;

 **Bug fixes**

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

**Improvements**

 * Added partition property for kafka settings;
 * Changed default QoS for default SubAck message from AT_LEAST_ONCE to AT_MOST_ONCE
 * Added ability to not notify device about attributes update;
 * Added ability to set/force base URL for password reset links;
 * Added validation of circular reference in the rule chains;
 * AWS SQS client improvements for JS executors;
 * Updated dependency versions to fix some vulnerabilities;
 * Added handler for too long payload exception in MQTT transport

 **Bug fixes**

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

**Improvements**

 * Performance improvement for Alarm related SQL queries;
 * UI: Upgrade Angular framework version to 10;
 * UI: Switch to yarn package-manager;
 * UI: Update Italian locale;
 * UI: Improved modules loading;
 * UI: Introduced common modules map;

 **Bug fixes**

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

**Improvements**

 * Password from SMTP settings is no longer shared to UI;
 * Added logs for in memory queue

 **Bug fixes**

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

**Main features**

 * Filters over entity fields, attributes and latest telemetry; 
 * Alarm widget improvements;
 * Performance improvements to insets in PostgreSQL;
 * Ability to store the latest values in SQL instead of NoSQL;

**Additional features**

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

**Bug fixes**

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

**Improvements**

 * Performance improvements to inserts in PostgreSQL;
 * Prometheus Metrics;
 * Created Azure IoT hub rule node;
 * REST API: Ability to move device to another tenant;
 * Added proxy configs to rest api call rule node (#2943);

**Bug fixes**

 * refactored DataValidator email pattern

### ThingsBoard PE

Everything from [TB CE v2.5.3](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.3).

## v3.0.1 (June 9, 2020)

### ThingsBoard CE

Minor release with everything from 3.0/2.5.2 plus the following improvements.

**Improvements**

 * Improved database migration - create indexes after inserts;
 * Improved rpc error handling;
 * Moved component tb-contact to shared module;
 * Updated Czech translation;

**Bug fixes**

 * UI: Dashboard page fixes and improvements;
 * UI: Fix map tooltip actions;
 * UI: Input maps fixed: error create the first marker;
 * UI: Fix image map initialization;
 * UI: Fix state chart subscription;
 * Set correct cassandra datacenter;

### ThingsBoard PE

Everything from [TB CE v3.0.1](https://github.com/thingsboard/thingsboard/releases/tag/v3.0.1) with the following improvements.

**Bug fixes**

 * UI: Fix null value during export into csv.

## v2.5.2 (June 9, 2020)

### ThingsBoard CE

Minor bug-fix release with few improvements.

**Improvements**

 * Replaced Akka with pure java implementation of Actor System;
 * Using external executor in Kafka Node;
 * Improvements for actor initialization logic;
 * Improved handling of peak connect attempts;
 * RPC Request Node improvement to avoid blocking;

**Bug fixes**

 * UI: Fixed the activation of on-row event on details click;
 * UI: Fixed problem widget-editor in Safari #2900;
 * Message is pushed to correct queue in case of duplication;
 * Never use Fork-Join pool with parallelism set to 1.

### ThingsBoard PE

Everything from [TB CE v2.5.2](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.2) with the following improvements.

**Bug fixes**

 * UI: Fix null value during export into csv;

## v3.0 (June 1, 2020)

### ThingsBoard CE

Major release with everything from 2.5 plus the following improvements.

**Main features**

 * AngularJS 1.5.8 -> Angular 9 migration for entire UI;
 * Force SQL DB usage to store entities;

**Additional features**

 * Improved pagination and filtering;
 * Improved and refactored Map widgets;
 * Improved tool-tips for widget development;
 * Cassandra driver updated to 4.x;
 * Dramatically reduced number of REST API calls generated by UI;
 * Replaced Velocity with Freemarker.


### ThingsBoard PE

Everything from [TB CE v3.0](https://github.com/thingsboard/thingsboard/releases/tag/v3.0) with the following improvements.

**Main features**

 * Advanced CSS for White-labeling;

**Additional features**

 * No more "Fetch more" button;
 * SQL native filtering and pagination in entity groups;

## v2.5.1 (June 1, 2020)

### ThingsBoard CE

Minor bug-fix release with few improvements.

**Improvements**

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

**Bug fixes**

 * Fixed claim devices API;
 * Fixed shared/client attribute updates over WS;
 * Fixed REST API security checks for some corner cases;
 * UI: Fixed data displaying in mobile browser for digital gauge widget;
 * Fixed 2.4.3 -> 2.5 upgrade script for AWS RDS; 

### ThingsBoard PE

Everything from [TB CE v2.5.1](https://github.com/thingsboard/thingsboard/releases/tag/v2.5.1) with the following improvements.

**Improvements**

 * Performance improvement for RBAC functionality;
 * Added maxRecords and requestTimeout to AWS Kinesis integration;

**Bug fixes**

 * Start scheduled events correctly if startTime is set earlier than repeat config start date

## v2.5 (May 12, 2020)

### ThingsBoard CE

Major release with the following improvements.

**Main features**

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
    

**Additional features**

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

**Bug fixes**

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

**Main features**

 * Rule Engine improvements similar to Community Edition;
 * OAuth improvements similar to Community Edition;
 * Improved performance;

**Additional features**

 * Added Entity Name column for multiple entities to export functionality;
 * Avoid entity count check for unlimited subscriptions;
 * Persistent volumes for k8s deployments to store license data;
 
**Bug fixes**

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
