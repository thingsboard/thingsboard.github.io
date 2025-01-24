---
layout: docwithnav
title: ThingsBoard Roadmap
description: ThingsBoard architecture

---

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## ThingsBoard CE

### v4.0

* Calculated Fields - Ability to produce new attributes and time series data based on data points from multiple entities;
* Entity Data Query Service - A plain Java alternative to the existing SQL-based engine to improve scalability;
* Attributes and Time Series Rule Node Persistence Strategies - More flexibility in how data arriving at the rule engine is stored;
* New Map Widgets Family - Significant improvements in how map widgets are configured and in their functionality;
* New SCADA Symbols for electricity, oil, and gas industries;

### v4.1

*  Partitioning of Attributes and Time Series Data into different PostgreSQL database instances to improve scalability;

See active development in progress [here](https://github.com/thingsboard/thingsboard/tree/{{ site.release.branch_major_next }}) and work on latest release bug fixes [here](https://github.com/thingsboard/thingsboard/tree/master).

### Upcoming releases

* Support of revocable API keys instead of JWT tokens for programmatic REST API access;
* Improvements to IoT Gateway;
* Ability to save dashboard parameters (time intervals, etc) per user;
* JavaScript Device/Gateway SDK;
