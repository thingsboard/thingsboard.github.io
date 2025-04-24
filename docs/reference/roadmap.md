---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v4.1

* Support for automatic unit conversion between measurement systems;
* Ability to disable tenants;
* Partitioning of Attributes and Time Series Data into different PostgreSQL database instances to improve scalability;
* Valkey and Cassandra 5.0 support;

See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/{{ site.release.branch_major_next }}) and work on latest release bug fixes [here](https://github.com/thingsboard/thingsboard/tree/master).

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
