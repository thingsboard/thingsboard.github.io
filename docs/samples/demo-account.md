---
layout: docwithnav
assignees:
- ashvayka
title: Demo Account
description: Thingsboard default demo accounts

---

* TOC
{:toc}

Thingsboard installation contains single tenant account that is used in sample applications and contains a lot of pre-provisioned entities for demonstration purposes.

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
 
## Rules

 - Demo Alarm Rule - creates alarm when uploaded temperature is greater then or equal to 100.
 - Demo Time RPC Rule - allows device to send *getTime* RPC requests to fetch current server time.
 - Demo Messaging RPC Rule - allows device to send *getDevices* and *sendMsg* RPC requests to enable messaging between devices.
 
## Plugins

 - [Demo Email Plugin](/docs/reference/plugins/mail/) - allows to publish emails. Requires update of username and password to match your account.
 - [Demo Device Messaging RPC Plugin](/docs/reference/plugins/messaging/) - enables messaging between devices.
 - [Demo Time RPC Plugin](/docs/reference/plugins/time/) - allows devices to get current time from server.
 - [System RPC Plugin](/docs/reference/plugins/rpc/) - provides REST API to send RPC request from server-side applications to devices.
 - [System Telemetry Plugin](/docs/reference/plugins/telemetry/) - stores attributes and telemetry data to internal database and handles server-side data queries and subscriptions.


