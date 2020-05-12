---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.         

## ThingsBoard CE

### v3.0

 * Force SQL DB usage to store entities and optional NoSQL support for timeseries data;  
 * Migration of the UI to Angular 9;
 * UI/UX improvements;
 
### v3.1
 
 * Improved Entity Search API;
 * Device Profiles to dramatically simplify configuration of Validation, Thresholds and Alarms generation;
 * Sticky Partitioning Strategy for all Queue implementations;
 
See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/develop/3.0) for more info.

### Upcoming releases

 * Improvements to IoT Gateway;
 * Ability to save dashboard parameters (time intervals, etc) per user;
 * Mobile client SDK;
 * Python Device/Gateway SDK;
 * JavaScript Device/Gateway SDK;

## ThingsBoard PE

### v3.0
 
Everything in CE 3.0, plus:

 * Advanced CSS for white-labeling;
 
### v3.1
 
Everything in CE 3.1, plus:

 * Usage statistics on a tenant/customer level: number of devices/customers/messages/API calls;

## ThingsBoard Edge

Our team is going to release a new software product for edge gateways. 
This product will allow to bring edge computing, data collection and management to the edge, while seamlessly synchronizing with the cloud.
Multiple ThingsBoard Edge components will be managed by a single ThingsBoard CE/PE installation.   