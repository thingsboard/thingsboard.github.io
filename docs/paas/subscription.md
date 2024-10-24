---
layout: docwithnav-paas
assignees:
- ashvayka
title: ThingsBoard Cloud Subscription plans definition
description: Features and advantages of subscription payment model
redirect_from: "/products/paas/subscription/"
---
{% assign docsPrefix = "paas/" %}

ThingsBoars Cloud provides subscription plans based on the **pay-as-you-go** model. 
Main characteristics of the subscription plan are: [entity limits](/docs/{{docsPrefix}}user-guide/tenant-profiles/#entity-limits), [api limits](/docs/{{docsPrefix}}user-guide/tenant-profiles/#api-limits--usage), [white-labeling](#white-labeling) and the level of support you get.   


### Entity Limits

Please see table below to compare the entity limits of the subscription plans.

<table>
  <thead>
      <tr>
          <td><b>Parameter name</b></td>
          <td><b>Maker</b></td>
          <td><b>Prototype</b></td>
          <td><b>Startup</b></td>
          <td><b>Business</b></td>
          <td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Devices</td>
          <td>30</td>
          <td>100</td>
          <td>500</td>
          <td>1000</td>
          <td>Maximum number of devices</td>
      </tr>
      <tr>
          <td>Assets</td>
          <td>30</td>
          <td>100</td>
          <td>500</td>
          <td>1000</td>
          <td>Maximum number of assets</td>
      </tr>
      <tr>
          <td>Customers</td>
          <td>2</td>
          <td>50</td>
          <td>100</td>
          <td>500</td>
          <td>Maximum number of customers</td>
      </tr>
      <tr>
          <td>Users</td>
          <td>5</td>
          <td>50</td>
          <td>100</td>
          <td>500</td>
          <td>Maximum number of users</td>
      </tr>
      <tr>
          <td>Dashboards</td>
          <td>25</td>
          <td>100</td>
          <td>200</td>
          <td>500</td>
          <td>Maximum number of dashboards</td>
      </tr>
      <tr>
          <td>Rule chains</td>
          <td>5</td>
          <td>20</td>
          <td>50</td>
          <td>100</td>
          <td>Maximum number of rule chains</td>
      </tr>
      <tr>
          <td>Integrations</td>
          <td>1</td>
          <td>5</td>
          <td>10</td>
          <td>20</td>
          <td>Maximum number of integrations</td>
      </tr>
      <tr>
          <td>Converters</td>
          <td>5</td>
          <td>25</td>
          <td>50</td>
          <td>100</td>
          <td>Maximum number of converters</td>
      </tr>
      <tr>
          <td>Scheduler events</td>
          <td>5</td>
          <td>20</td>
          <td>50</td>
          <td>100</td>
          <td>Maximum number of scheduler events</td>
      </tr>            
  </tbody>
</table>


### API Limits

Please see table below to compare the API limits of the subscription plans. The values are monthly API limits, unless stated otherwise.

<table>
  <thead>
      <tr>
          <td><b>Parameter name</b></td>
          <td><b>Maker</b></td>
          <td><b>Prototype</b></td>
          <td><b>Startup</b></td>
          <td><b>Business</b></td>
          <td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Transport messages</td>
          <td>5M</td>
          <td>50M</td>
          <td>250M</td>
          <td>500M</td>
          <td>Total number of messages received by any of the Transports (MQTT, HTTP, CoAP, etc) or Integrations</td>
      </tr>
      <tr>
          <td>Transport data points</td>
          <td>10M</td>
          <td>100M</td>
          <td>500M</td>
          <td>1B</td>
          <td>Total number of key-value pairs that your telemetry or attribute transport messages contain</td>
      </tr>
      <tr>
          <td>Rule Engine executions</td>
          <td>25M</td>
          <td>250M</td>
          <td>1B</td>
          <td>2B</td>
          <td>Total number of any execution of the rule node.<br> Processing of a single telemetry message may cause multiple Rule Engine executions.<br> The platform will also count periodic messages produced by Generator nodes, etc.</td>
      </tr>
      <tr>
          <td>JavaScript executions</td>
          <td>1M</td>
          <td>10M</td>
          <td>50M</td>
          <td>100M</td>
          <td>Total number of any execution of user defined functions. For example, processing of the “Script” filter or transformation node, invocation of the data converter, etc.</td>
      </tr>
      <tr>
          <td>Default storage TTL</td>
          <td>60 days</td>
          <td>180 days</td>
          <td>365 days</td>
          <td>365 days</td>
          <td>Default value of the "time to live" parameter that is used to store time-series data.<br>
          You may overwrite the default value in the "Save Timeseries" rule node or using "TTL" metadata field of your message.<br>
          This allows you to optimize storage consumption. The maximum allowed value of TTL is 5 years. <br>
          For example, you may store "raw" data for 3 month and aggregated data for 3 years
          </td>
      </tr>      
      <tr>
          <td>Data point storage days</td>
          <td>300M</td>
          <td>10B</td>
          <td>100B</td>
          <td>200B</td>
          <td>Data points storage days are calculated for all time-series data points that are stored to the database.<br>
          Platform multiplies number of data points by the number of days those data points will be stored.<br> 
          The TTL parameter is used to extract amount of days to store the data. For example, if you store 1M data points for 30 days, this is 30M storage data point days</td>
      </tr>
      <tr>
          <td>Alarms TTL</td>
          <td>60 days</td>
          <td>180 days</td>
          <td>365 days</td>
          <td>365 days</td>
          <td>How many days to store alarms in the database</td>
      </tr>
      <tr>
          <td>RPC TTL</td>
          <td>60 days</td>
          <td>180 days</td>
          <td>365 days</td>
          <td>365 days</td>
          <td>How many days to store persistent RPC in the database</td>
      </tr>
      <tr>
          <td>Alarms</td>
          <td>200</td>
          <td>4K</td>
          <td>20K</td>
          <td>40K</td>
          <td>Total number of alarms created per month</td>
      </tr>
      <tr>
          <td>Emails</td>
          <td>100</td>
          <td>2K</td>
          <td>10K</td>
          <td>40K</td>
          <td>Total number of emails sent</td>
      </tr>
      <tr>
          <td>SMS</td>
          <td>0</td>
          <td>100</td>
          <td>500</td>
          <td>1000</td>
          <td>Total number of SMS sent</td>
      </tr>
  </tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.

### Rate Limits

<table>
  <thead>
      <tr>
          <td><b>Parameter name</b></td>
          <td><b>Maker</b></td>
          <td><b>Prototype</b></td>
          <td><b>Startup</b></td>
          <td><b>Business</b></td>
          <td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>All Transport messages (Tenant)</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 140,000 per hour</td>
          <td>Up to 2,000 per second,<br>not exceeding 60,000 per minute,<br>and capped at 1,400,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 6,000,000 per hour</td>
          <td>Up to 20,000 per second,<br>not exceeding 600,000 per minute,<br>and capped at 12,000,000 per hour</td>
          <td>Total number of messages received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>
      <tr>
          <td>Telemetry Transport messages (Tenant)</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 70,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 700,000 per hour</td>
          <td>Up to 5,000 per second,<br>not exceeding 150,000 per minute,<br>and capped at 3,500,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 7,000,000 per hour</td>
          <td>Total number of telemetry messages received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>
      <tr>
          <td>Telemetry Transport data points (Tenant)</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 140,000 per hour</td>
          <td>Up to 2,000 per second,<br>not exceeding 60,000 per minute,<br>and capped at 1,400,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 7,000,000 per hour</td>
          <td>Up to 20,000 per second,<br>not exceeding 600,000 per minute,<br>and capped at 14,000,000 per hour</td>
          <td>Total number of telemetry data points received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>            
      <tr>
          <td>All Transport messages (Device)</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Total number of messages received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>Telemetry Transport messages (Device)</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Total number of telemetry messages received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>Telemetry Transport data points (Device)</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 6,000 per minute,<br>and capped at 14,000 per hour</td>
          <td>Total number of telemetry data points received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>Integration messages (Tenant)</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 70,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 700,000 per hour</td>
          <td>Up to 5,000 per second,<br>not exceeding 150,000 per minute,<br>and capped at 3,500,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 7,000,000 per hour</td>
          <td>Total number of messages received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>
      <tr>
          <td>Integration messages (Device)</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 3,000 per minute,<br>and capped at 7,000 per hour</td>
          <td>Total number of telemetry messages received by any of the transport microservices for all devices</td>
      </tr>
      <tr>
          <td>REST requests (Tenant)</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Total number of telemetry data points received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>
      <tr>
          <td>REST requests (Customer)</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Total number of messages received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>WS updates per session</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Total number of telemetry messages received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>WS Sessions (Tenant)</td>
          <td>1K</td>
          <td>1K</td>
          <td>1K</td>
          <td>1K</td>
          <td>Maximum number of Web socket sessions for the tenant</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Tenant)</td>
          <td>20K</td>
          <td>20K</td>
          <td>20K</td>
          <td>20K</td>
          <td>Maximum number of Web socket subscription for the tenant</td>
      </tr>
      <tr>
          <td>WS Sessions (Customer)</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
          <td>Maximum number of Web socket sessions for the сustomer</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Customer)</td>
          <td>10K</td>
          <td>10K</td>
          <td>10K</td>
          <td>10K</td>
          <td>Maximum number of Web socket subscription for the сustomer</td>
      </tr>
      <tr>
          <td>WS Sessions (Public user)</td>
          <td>250</td>
          <td>250</td>
          <td>250</td>
          <td>250</td>
          <td>Maximum number of Sessions per public user</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Public user)</td>
          <td>5K</td>
          <td>5K</td>
          <td>5K</td>
          <td>5K</td>
          <td>Maximum number of subscriptions per public user</td>
      </tr> 
      <tr>
          <td>WS Sessions (Regular user)</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>Maximum number of Sessions per regular user</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Regular user)</td>
          <td>2K</td>
          <td>2K</td>
          <td>2K</td>
          <td>2K</td>
          <td>Maximum number of subscriptions per regular user</td>
      </tr>
      <tr>
          <td>WS queue message (Session)</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
          <td>Maximum size of queue message per session</td>
      </tr>
  </tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.

### White-labeling

ThingsBoard web interface allows you to configure your company or product logo and color scheme in 2 minutes with zero coding efforts and no service restart required. 
See feature [documentation](/docs/{{docsPrefix}}user-guide/white-labeling/) for more details. ThingsBoard Cloud extends white-labeling feature with ability to configure own domain name easily. 
See [managing domain](/products/{{docsPrefix}}domains/) for more details. 

The white-labeling feature is available for **Prototype** and **Startup** subscription plans.