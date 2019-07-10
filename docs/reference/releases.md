---
layout: docwithnav
title: ThingsBoard Release Notes
description: ThingsBoard architecture

---

* TOC
{:toc}

## v2.4.0 (July 10, 2019)

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