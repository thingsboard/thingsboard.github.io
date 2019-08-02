---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.         

## ThingsBoard CE
 
### v2.4.1

 * Introduce password makeup policy;
 * Audit of user access activity: login/logout;
 * User activation and de-activation;
 * Simplify creation of modal dialogs in dashboards;
 * TimescaleDB support for time-series data;

### v2.5

 * Moving Rule Engine to a separate microservice;

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

### v2.4.1

 * Moving Integrations to a separate micro-services;
 * TCP and UDP integrations;
 
### v2.5
 
 * OAuth and LDAP integrations;
 
### Upcoming releases
 
 * Usage statistics on a tenant/customer level: number of devices/customers/messages/API calls;
 * Billing module: platform administrator will be able to charge tenants and customers for platform usage based on their subscription plan. 

## ThingsBoard Edge

Our team is going to release a new software product for edge gateways. 
This product will allow to bring edge computing, data collection and management to the edge, while seamlessly synchronizing with the cloud.
Multiple ThingsBoard Edge components will be managed by a single ThingsBoard CE/PE installation.   