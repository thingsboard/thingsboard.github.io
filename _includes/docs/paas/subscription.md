* TOC
{:toc}

ThingsBoars {{cloudPrefix}} Cloud provides subscription plans based on the flexible **pay-as-you-go** model.
Designed for scalability, these plans allow you to [top-up](#top-ups) entity and API limits on demand and enable **ThingsBoard Edge** and **Trendz Analytics** as add-ons—empowering you to manage your entire IoT infrastructure in one place.

Main characteristics of the subscription plan are: [entity limits](/docs/{{docsPrefix}}user-guide/tenant-profiles/#entity-limits), [api limits](/docs/{{docsPrefix}}user-guide/tenant-profiles/#api-limits--usage), [calculated fields limits](#calculated-fields-limits), [white labeling](#white-labeling) and the level of support you get.

**Looking for older plan details?** This page covers subscription tiers introduced on Jan 20, 2026. For accounts created prior to this date, please review the [legacy subscriptions](/docs/{{docsPrefix}}legacy-subscriptions) page.

## Entity limits

Please see table below to compare the entity limits of the subscription plans.

<table>
  <thead>
      <tr>
          <td style="width: 20%"><b>Parameter name</b></td>
          <td style="width: 10%"><b>Free</b></td>
          <td style="width: 10%"><b>Prototype</b></td>
          <td style="width: 10%"><b>Pilot</b></td>
          <td style="width: 10%"><b>Startup</b></td>
          <td style="width: 10%"><b>Business</b></td>
          <td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Devices</td>
          <td>5</td>
          <td>50</td>
          <td>100</td>
          <td>500</td>
          <td>1000</td>
          <td>Maximum number of devices</td>
      </tr>
      <tr>
          <td>Assets</td>
          <td>5</td>
          <td>50</td>
          <td>100</td>
          <td>500</td>
          <td>1000</td>
          <td>Maximum number of assets</td>
      </tr>
      <tr>
          <td>Customers</td>
          <td>2</td>
          <td>5</td>
          <td>50</td>
          <td>100</td>
          <td>200</td>
          <td>Maximum number of customers</td>
      </tr>
      <tr>
          <td>Users</td>
          <td>5</td>
          <td>10</td>
          <td>50</td>
          <td>100</td>
          <td>200</td>
          <td>Maximum number of users</td>
      </tr>
      <tr>
          <td>Dashboards</td>
          <td>5</td>
          <td>50</td>
          <td>100</td>
          <td>200</td>
          <td>500</td>
          <td>Maximum number of dashboards</td>
      </tr>
      <tr>
          <td>Rule chains</td>
          <td>3</td>
          <td>5</td>
          <td>20</td>
          <td>50</td>
          <td>100</td>
          <td>Maximum number of rule chains</td>
      </tr>
      <tr>
          <td>Integrations</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>10</td>
          <td>20</td>
          <td>Maximum number of integrations</td>
      </tr>
      <tr>
          <td>Converters</td>
          <td>3</td>
          <td>10</td>
          <td>15</td>
          <td>25</td>
          <td>50</td>
          <td>Maximum number of converters</td>
      </tr>
      <tr>
          <td>Scheduler events</td>
          <td>5</td>
          <td>10</td>
          <td>100</td>
          <td>250</td>
          <td>500</td>
          <td>Maximum number of scheduler events</td>
      </tr>            
  </tbody>
</table>

## API limits

Please see table below to compare the API limits of the subscription plans. The values are monthly API limits, unless stated otherwise.

<table>
  <thead>
      <tr>
          <td style="width: 20%"><b>Parameter name</b></td>
          <td style="width: 10%"><b>Free</b></td>
          <td style="width: 10%"><b>Prototype</b></td>
          <td style="width: 10%"><b>Pilot</b></td>
          <td style="width: 10%"><b>Startup</b></td>
          <td style="width: 10%"><b>Business</b></td>
          <td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Transport messages</td>
          <td>0.5M</td>
          <td>5M</td>
          <td>50M</td>
          <td>250M</td>
          <td>500M</td>
          <td>Total number of messages received by any of the Transports (MQTT, HTTP, CoAP, etc) or Integrations</td>
      </tr>
      <tr>
          <td>Transport data points</td>
          <td>1M</td>
          <td>10M</td>
          <td>100M</td>
          <td>500M</td>
          <td>1B</td>
          <td>Total number of key-value pairs that your telemetry or attribute transport messages contain</td>
      </tr>
      <tr>
          <td>Rule Engine executions</td>
          <td>3M</td>
          <td>30M</td>
          <td>250M</td>
          <td>1B</td>
          <td>2B</td>
          <td>Total number of any execution of the rule node.<br> Processing of a single telemetry message may cause multiple Rule Engine executions.<br> The platform will also count periodic messages produced by Generator nodes, etc.</td>
      </tr>
      <tr>
          <td>JavaScript executions</td>
          <td>100K</td>
          <td>1M</td>
          <td>10M</td>
          <td>50M</td>
          <td>100M</td>
          <td>Total number of any execution of user defined functions. For example, processing of the “Script” filter or transformation node, invocation of the data converter, etc.</td>
      </tr>
      <tr>
          <td>Default storage TTL</td>
          <td>30 days</td> 
          <td>60 days</td>
          <td>180 days</td>
          <td>365 days</td>
          <td>365 days</td>
          <td>Default value of the "time to live" parameter that is used to store time-series data.<br>
          You may overwrite the default value in the "Save Timeseries" rule node or using "TTL" metadata field of your message.<br>
          This allows you to optimize storage consumption. The maximum allowed value of TTL is 10 years. <br>
          For example, you may store "raw" data for 3 month and aggregated data for 3 years
          </td>
      </tr>      
      <tr>
          <td>Data point storage days</td>
          <td>30M</td>
          <td>1B</td>
          <td>10B</td>
          <td>100B</td>
          <td>200B</td>
          <td>Data points storage days are calculated for all time-series data points that are stored to the database.<br>
          Platform multiplies number of data points by the number of days those data points will be stored.<br> 
          The TTL parameter is used to extract amount of days to store the data. For example, if you store 1M data points for 30 days, this is 30M data point storage days</td>
      </tr>
      <tr>
          <td>Alarms TTL</td>
          <td>30 days</td>
          <td>60 days</td>
          <td>180 days</td>
          <td>365 days</td>
          <td>365 days</td>
          <td>How many days to store alarms in the database</td>
      </tr>
      <tr>
          <td>RPC TTL</td>
          <td>30 days</td>
          <td>60 days</td>
          <td>180 days</td>
          <td>365 days</td>
          <td>365 days</td>
          <td>How many days to store persistent RPC in the database</td>
      </tr>
      <tr>
          <td>Alarms</td>
          <td>200</td>
          <td>1K</td>
          <td>4K</td>
          <td>20K</td>
          <td>40K</td>
          <td>Total number of alarms created per month</td>
      </tr>
      <tr>
          <td>Emails</td>
          <td>100</td>
          <td>1K</td>
          <td>2K</td>
          <td>10K</td>
          <td>40K</td>
          <td>Total number of emails sent</td>
      </tr>
      <tr>
          <td>SMS</td>
          <td>0</td>
          <td>10</td>
          <td>100</td>
          <td>500</td>
          <td>1000</td>
          <td>Total number of SMS sent</td>
      </tr>
  </tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.

## Calculated fields limits

Please see the table below to compare the calculated fields limits across subscription plans.

<table>
  <thead>
    <tr>
      <td style="width: 20%"><b>Parameter name</b></td>
      <td style="width: 10%"><b>Free</b></td>
      <td style="width: 10%"><b>Prototype</b></td>
      <td style="width: 10%"><b>Pilot</b></td>
      <td style="width: 10%"><b>Startup</b></td>
      <td style="width: 10%"><b>Business</b></td>
      <td style="width: 30%"><b>Description</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Calculated fields per entity maximum number</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>The maximum number of calculated fields allowed on an entity.</td>
    </tr>
    <tr>
      <td>Max data points number in rolling arguments</td>
      <td>1000</td>
      <td>1000</td>
      <td>1000</td>
      <td>1000</td>
      <td>1000</td>
      <td>The maximum number of data points supported in rolling arguments.</td>
    </tr>
    <tr>
      <td>Arguments per calculated field max number</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>The maximum number of input arguments a single calculated field can use.</td>
    </tr>
    <tr>
      <td>State maximum size in KB</td>
      <td>32</td>
      <td>32</td>
      <td>32</td>
      <td>32</td>
      <td>32</td>
      <td>The maximum allowed size of stored state data, measured in kilobytes.</td>
    </tr>
    <tr>
      <td>Single value argument maximum size in KB</td>
      <td>16</td>
      <td>16</td>
      <td>16</td>
      <td>16</td>
      <td>16</td>
      <td>The maximum size of a single argument value, in kilobytes.</td>
    </tr>
  </tbody>
</table> 


## Rate limits

The platform’s rate-limiting policy preserves predictable service quality and reinforces operational resilience under peak
load. Controls are enforced at both the **tenant level** (aggregate activity across all devices and users) and the **individual
device level**, using consolidated time windows—per second, per minute, and per hour—to balance burst tolerance with
sustained throughput ceilings. Thresholds are plan-dependent (Maker, Prototype, Startup, Business, Business+) and scale
in line with expected traffic profiles to ensure fair multitenant consumption and SLA adherence.

If the workload exceeds the allocated limits, the corresponding requests will be rejected by the platform for the time
being until the rate limits return to within the policy. Additionally, the platform also notifies tenant administrators
when a limit breach occurs.

<table>
  <thead>
      <tr>
          <td><b>Parameter name</b></td>
          <td><b>Free</b></td>
          <td><b>Prototype</b></td>
          <td><b>Pilot</b></td>
          <td><b>Startup</b></td>
          <td><b>Business</b></td>
          <td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>All Transport messages (Tenant)</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute,<br>and capped at 75,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 750,000 per hour</td>
          <td>Up to 2,000 per second,<br>not exceeding 60,000 per minute,<br>and capped at 1,500,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 7,500,000 per hour</td>
          <td>Up to 20,000 per second,<br>not exceeding 600,000 per minute,<br>and capped at 15,000,000 per hour</td>
          <td>Total number of messages received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>
      <tr>
          <td>Telemetry Transport messages (Tenant)</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute,<br>and capped at 35,000 per hour</td>
          <td>Up to 500 per second,<br>not exceeding 15,000 per minute,<br>and capped at 350,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 700,000 per hour</td>
          <td>Up to 5,000 per second,<br>not exceeding 150,000 per minute,<br>and capped at 3,500,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 7,000,000 per hour</td>
          <td>Total number of telemetry messages received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>
      <tr>
          <td>Telemetry Transport data points (Tenant)</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute,<br>and capped at 70,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 700,000 per hour</td>
          <td>Up to 2,000 per second,<br>not exceeding 60,000 per minute,<br>and capped at 1,400,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 7,000,000 per hour</td>
          <td>Up to 20,000 per second,<br>not exceeding 600,000 per minute,<br>and capped at 14,000,000 per hour</td>
          <td>Total number of telemetry data points received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>            
      <tr>
          <td>All Transport messages (Device)</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Total number of messages received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>Telemetry Transport messages (Device)</td>
          <td>Up to 50 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Total number of telemetry messages received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>Telemetry Transport data points (Device)</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Total number of telemetry data points received by any of the transport microservices for each device separately</td>
      </tr>
      <tr>
          <td>Integration messages (Tenant)</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute,<br>and capped at 30,000 per hour</td>
          <td>Up to 500 per second,<br>not exceeding 15,000 per minute,<br>and capped at 350,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 750,000 per hour</td>
          <td>Up to 5,000 per second,<br>not exceeding 150,000 per minute,<br>and capped at 3,500,000 per hour</td>
          <td>Up to 10,000 per second,<br>not exceeding 300,000 per minute,<br>and capped at 7,500,000 per hour</td>
          <td>Total number of messages received by any of the transport microservices for all devices that belong to the tenant</td>
      </tr>
      <tr>
          <td>Integration messages (Device)</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Total number of telemetry messages received by any of the transport microservices for all devices</td>
      </tr>
      <tr>
          <td>Gateway Transport messages (All connected devices)</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute,<br>and capped at 60,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Total number of messages received by the transport microservice for all devices connected via particular gateway</td>
      </tr>
      <tr>
          <td>Gateway Telemetry Transport messages (All connected  devices)</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute,<br>and capped at 30,000 per hour</td>
          <td>Up to 500 per second,<br>not exceeding 15,000 per minute,<br>and capped at 180,000 per hour</td>
          <td>Up to 500 per second,<br>not exceeding 15,000 per minute,<br>and capped at 180,000 per hour</td>
          <td>Up to 500 per second,<br>not exceeding 15,000 per minute,<br>and capped at 180,000 per hour</td>
          <td>Up to 500 per second,<br>not exceeding 15,000 per minute,<br>and capped at 180,000 per hour</td>
          <td>Total number of telemetry messages received by the transport microservice for all devices connected via particular gateway</td>
      </tr>
      <tr>
          <td>Gateway Telemetry Transport data points (All connected devices)</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute,<br>and capped at 60,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Up to 1,000 per second,<br>not exceeding 30,000 per minute,<br>and capped at 360,000 per hour</td>
          <td>Total number of telemetry data points received by the transport microservice for all devices connected via particular gateway</td>
      </tr> 
      <tr>
          <td>Gateway Transport messages (Gateway system messages)</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Total number of messages received by the transport microservice for a particular gateway excluding related devices: statistics, debug logs, configuration updates</td>
      </tr>
      <tr>
          <td>Gateway Telemetry Transport messages (Gateway system messages)</td>
          <td>Up to 50 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Up to 100 per second,<br>not exceeding 600 per minute,<br>and capped at 7,000 per hour</td>
          <td>Total number of telemetry messages received by the transport microservice for a particular gateway: statistics, debug logs, other telemetry</td>
      </tr>
      <tr>
          <td>Gateway Telemetry Transport data points (Gateway system messages)</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Up to 200 per second,<br>not exceeding 2,000 per minute,<br>and capped at 15,000 per hour</td>
          <td>Total number of telemetry data points received by the transport microservice for a particular gateway: statistics, debug logs, other telemetry</td>
      </tr>
      <tr>
          <td>REST requests (Tenant)</td>
          <td>Up to 100 per second,<br>not exceeding 1,000 per minute</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Up to 100 per second,<br>not exceeding 2,000 per minute</td>
          <td>Total number of REST API calls received by any of the users belong to the tenant</td>
      </tr>
      <tr>
          <td>REST requests (Customer)</td>
          <td>Up to 50 per second,<br>not exceeding 500 per minute</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Up to 50 per second,<br>not exceeding 1,000 per minute</td>
          <td>Total number of REST API calls received by any of the users belong to the particular customer</td>
      </tr>
      <tr>
          <td>WS updates per session</td>
          <td>Up to 1,000 per second,<br>not exceeding 5,000 per minute</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Up to 1,000 per second,<br>not exceeding 10,000 per minute</td>
          <td>Total number of messages received by particular WebSocket session</td>
      </tr>
      <tr>
          <td>WS Sessions (Tenant)</td>
          <td>50</td>
          <td>100</td>
          <td>1K</td>
          <td>2K</td>
          <td>4K</td>
          <td>Maximum number of Web socket sessions for the tenant</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Tenant)</td>
          <td>1K</td>
          <td>2K</td>
          <td>4K</td>
          <td>20K</td>
          <td>40K</td>
          <td>Maximum number of Web socket subscriptions for the tenant</td>
      </tr>
      <tr>
          <td>WS Sessions (Customer)</td>
          <td>25</td>
          <td>50</td>
          <td>500</td>
          <td>1K</td>
          <td>2K</td>
          <td>Maximum number of Web socket sessions for the сustomer</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Customer)</td>
          <td>500</td>
          <td>1K</td>
          <td>2K</td>
          <td>10K</td>
          <td>20K</td>
          <td>Maximum number of Web socket subscription for the сustomer</td>
      </tr>
      <tr>
          <td>WS Sessions (Public user)</td>
          <td>20</td>
          <td>100</td>
          <td>250</td>
          <td>250</td>
          <td>250</td>
          <td>Maximum number of Sessions per public user</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Public user)</td>
          <td>500</td>
          <td>1K</td>
          <td>5K</td>
          <td>5K</td>
          <td>5K</td>
          <td>Maximum number of subscriptions per public user</td>
      </tr> 
      <tr>
          <td>WS Sessions (Regular user)</td>
          <td>10</td>
          <td>50</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>Maximum number of Sessions per regular user</td>
      </tr>
      <tr>
          <td>WS Subscriptions (Regular user)</td>
          <td>200</td>
          <td>1K</td>
          <td>2K</td>
          <td>2K</td>
          <td>2K</td>
          <td>Maximum number of subscriptions per regular user</td>
      </tr>
      <tr>
          <td>WS queue message (Session)</td>
          <td>100</td>
          <td>250</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
          <td>Maximum size of queue message per session</td>
      </tr>
  </tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.

## Top-ups

If you reach a specific limit within your subscription plan, you rarely need to upgrade to a higher tier.
Instead, you can purchase specific **Top-up packs** to increase individual limits instantly.

**Note:** Top-ups are recurring monthly additions to your base plan.

---

#### Entity top-ups

These packs allow you to scale the number of managed entities and integrations within your environment.

<table>
  <thead>
      <tr>
          <td style="width: 30%"><b>Top-up name</b></td>
          <td style="width: 50%"><b>Added capacity</b></td>
          <td style="width: 10%"><b>Cost</b></td>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>Extra Device Pack</td>
      <td>+50 Devices, +50 Assets</td>
      <td>{{cloudCurrency}}15</td>
    </tr>
    <tr>
      <td>Extra Customer Pack</td>
      <td>+10 Customers, +10 Users</td>
      <td>{{cloudCurrency}}10</td>
    </tr>
    <tr>
      <td>Extra Integration Pack</td>
      <td>+1 Integration, +1 Converter</td>
      <td>{{cloudCurrency}}10</td>
    </tr>
    <tr>
      <td>Extra Calculated Field</td>
      <td>+1 to max number of Calculated Fields per entity</td>
      <td>{{cloudCurrency}}5</td>
    </tr>
  </tbody>
</table>

**Availability:** Extra Device pack is available starting from the **Business** plan. Other entity top-ups are available starting from the **Pilot** plan.

#### API limits top-ups

These packs allow you to extend the operational capacity of your solution, ensuring smooth data processing and communication.

<table>
  <thead>
      <tr>
          <td style="width: 30%"><b>Top-up name</b></td>
          <td style="width: 60%"><b>Added capacity</b></td>
          <td style="width: 10%"><b>Cost</b></td>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>Traffic Pack</td>
      <td>+2.5M Transport Messages, +5M Transport Data Points</td>
      <td>{{cloudCurrency}}5</td>
    </tr>
    <tr>
      <td>Compute Pack</td>
      <td>+5M Rule Engine Executions, +1M JavaScript Executions</td>
      <td>{{cloudCurrency}}25</td>
    </tr>
    <tr>
      <td>Storage Pack</td>
      <td>+1B Data Points Storage Days</td>
      <td>{{cloudCurrency}}10</td>
    </tr>
    <tr>
      <td>Alarm Pack</td>
      <td>+1K alarms created per month</td>
      <td>{{cloudCurrency}}1</td>
    </tr>
    <tr>
      <td>Email Pack</td>
      <td>+1K emails sent per month</td>
      <td>{{cloudCurrency}}1</td>
    </tr>
    <tr>
      <td>SMS Pack</td>
      <td>+100 SMS sent per month</td>
      <td>{{cloudCurrency}}15</td>
    </tr>
  </tbody>
</table>

<br>

**Availability:** All Usage & API top-ups are available starting from the **Pilot** plan.

## Add-ons

### White labeling

ThingsBoard web interface allows you to configure your company or product logo and color scheme in 2 minutes with zero coding efforts and no service restart required.
See feature [documentation](/docs/{{docsPrefix}}user-guide/white-labeling/){:target="_blank"} for more details. ThingsBoard Cloud extends white-labeling feature with ability to configure own domain name easily.
See [managing domain](/products/{{docsPrefix}}domains/){:target="_blank"} for more details.

The white-labeling add-on is automatically enabled starting from the **Pilot** plan.

### Edge Computing

The **Edge Computing** add-on brings intelligence and data processing capabilities directly to the field. 
It allows you to run a local instance of the platform on-premises, ensuring that your critical operations continue even during a total loss of internet connectivity to the cloud.
See product [homepage](/products/thingsboard-edge/){:target="_blank"} for more details.

### Trendz Analytics

The **Trendz Analytics** add-on is a powerful business intelligence tool designed to convert your raw IoT data into actionable insights. 
It goes beyond basic visualization, allowing you to perform complex calculations, identify patterns, and predict future trends using advanced statistical models.
See product [homepage](/products/trendz/){:target="_blank"} for more details.

## How to cancel my subscription?

To terminate your ThingsBoard Cloud subscription, follow these steps:

- Log in to ThingsBoard Cloud as Tenant Administrator;
- Navigate to the "**Plan and billing**" page in the main navigation menu;
- Locate the **Management** section, which contains your subscription details and options to control it;
- Click the "**Cancel subscription**" button and follow the instructions to cancel your subscription;
- Confirm the action by clicking the "**Cancel subscription**" button in the confirmation window.

{% capture difference %}
**Note:**
<br>
This action cannot be undone. This will **permanently delete** your tenant account, all devices, assets, dashboards, rule-chains, users and other entities, all telemetry data and alarms.
{% endcapture %}
{% include templates/info-banner.md content=difference %}