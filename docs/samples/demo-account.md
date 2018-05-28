---
layout: docwithnav
assignees:
- ashvayka
title: Demo Account
description: ThingsBoard default demo accounts

---

* TOC
{:toc}

ThingsBoard installation contains single tenant account that is used in sample applications and contains a lot of pre-provisioned entities for demonstration purposes.

## System Administrator
 
Default system administrator account:

 - login - **sysadmin@thingsboard.org**.
 - password - **sysadmin**.
 
## Demo Tenant

Default tenant administrator account:

 - login - **tenant@thingsboard.org**.
 - password - **tenant**.
 
Demo tenant customers:

 - Customer A users -  **customer@thingsboard.org** or **customerA@thingsboard.org**.
 - Customer B users -  **customerB@thingsboard.org**.
 - Customer C users -  **customerC@thingsboard.org**.
 - all users have **"customer"** password. 
 
## Tenant devices

 - Test Device A1, A2, A3 - belong to Customer A. Access tokens: A1_TEST_TOKEN, A2_TEST_TOKEN and A3_TEST_TOKEN.
 - Test Device B1 - belong to Customer B. Access token: B1_TEST_TOKEN.
 - Test Device C1 - belong to Customer C. Access token: C1_TEST_TOKEN.
 
 - DHT11 Demo Device - created for temperature and humidity upload [sample applications](/docs/samples/nodemcu/temperature/). 
   Access token: DHT11_DEMO_TOKEN
 - Raspberry Pi Demo Device - created for GPIO control [sample application](/docs/samples/raspberry/gpio/).
   Access token: RASPBERRY_PI_DEMO_TOKEN
 
## Dashboards

 - Temperature & Humidity Demo Dashboard - created for temperature and humidity upload [sample applications](/docs/samples/nodemcu/temperature/).
 - Raspberry PI GPIO Demo Dashboard - created for Raspberry Pi GPIO control [sample application](/docs/samples/raspberry/gpio/).
 
## Rule Chains
There is predefined Rule Chain for storing all incoming telemetry and attribute updates. All other incoming requests just logged.
For adding additional Rule Nodes, like Send Email, Create Alarms, etc. please read related articles:

- [Rule Engine Getting Started](/docs/user-guide/rule-engine-2-0/re-getting-started/)
- [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/)
- [Rule Engine Tutorials](/docs/user-guide/rule-engine-2-0/overview/#tutorials)
  