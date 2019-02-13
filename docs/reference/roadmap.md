---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.         

## ThingsBoard CE
 
### v2.4

 * Kubernetes scripts for cluster deployment;
 * Ability to choose either SQL or NoSQL for entity attributes persistence. At the moment all entity attributes are stored in the same database that is used to store SQL;
 * Ability to use Amazon DynamoDB as an alternative database layer implementation instead of Cassandra for timeseries data;
 * Ability to use Amazon SQS as an alternative queue implementation instead of Kafka;  
 * New widgets;

### Upcoming releases

 * Moving Rule Engine to a separate microservice;
 * Improvements to IoT Gateway;
 * Ability to save dashboard parameters (time intervals, etc) per user;
 * Mobile client SDK;
 * Python Device/Gateway SDK;
 * JavaScript Device/Gateway SDK;

## ThingsBoard PE

Everything in ThingsBoard CE, plus:

### v2.4  
 
 * OAuth and LDAP integrations;
 * License Server for more flexible pricing and deployment options;
 
### Upcoming releases
 
 * Moving Integrations to a separate microservices;
