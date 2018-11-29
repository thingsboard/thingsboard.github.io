---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.         

## ThingsBoard CE

### v2.3

 * Ability to choose either SQL or NoSQL for entity attributes persistence. At the moment all entity attributes are stored in the same database that is used to store SQL.
 
### v2.4

 * Moving Rule Engine to a separate microservice  

## ThingsBoard PE

Everything in ThingsBoard CE, plus:

### v2.3

 * Ability to use Amazon DynamoDB as an alternative database layer implementation instead of Cassandra.
 * Ability to use Amazon SQS as an alternative queue implementation instead of Kafka.
 * Advanced security features to be able to define user groups and set permissions in relation to entity groups (devices/assets/dashboards, etc). 