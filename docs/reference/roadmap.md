---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.         

## ThingsBoard CE

### v2.5

 * Moving Rule Engine to a separate microservice;
 * Introducing back-pressure logic and processing checkpoints in the rule engine;
 
### v3.0

 * Force SQL DB usage to store entities and optional NoSQL support for timeseries data;  
 * Migration of the UI to Angular 8;
 * UI/UX improvements;
 
See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/develop/3.0) for more info.

### Upcoming releases

 * Ability to use Amazon DynamoDB as an alternative database layer implementation instead of Cassandra for timeseries data;
 * Ability to use Amazon SQS as an alternative queue implementation instead of Kafka;  
 * Improvements to IoT Gateway;
 * Ability to save dashboard parameters (time intervals, etc) per user;
 * Mobile client SDK;
 * Python Device/Gateway SDK;
 * JavaScript Device/Gateway SDK;

## ThingsBoard PE

Everything in ThingsBoard CE, plus:
 
### v2.5
 
 * OAuth and LDAP integrations; 
 
### Upcoming releases
 
 * Usage statistics on a tenant/customer level: number of devices/customers/messages/API calls;
 * Billing module: platform administrator will be able to charge tenants and customers for platform usage based on their subscription plan. 

## ThingsBoard Edge

Our team is going to release a new software product for edge gateways. 
This product will allow to bring edge computing, data collection and management to the edge, while seamlessly synchronizing with the cloud.
Multiple ThingsBoard Edge components will be managed by a single ThingsBoard CE/PE installation.   