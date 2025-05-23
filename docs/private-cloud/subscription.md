---
layout: docwithnav-private-cloud
assignees:
- ashvayka
title: ThingsBoard Private Cloud Subscription plans definition
description: Features and advantages of subscription payment model

---
{% assign docsPrefix = "paas/" %}

* TOC
{:toc}

ThingsBoard Private Cloud provides subscription plans based on the **pay-as-you-go** model. 
Main characteristics of the subscription plan are: [entity limits](/docs/{{docsPrefix}}user-guide/tenant-profiles/#entity-limits), [api limits](/docs/{{docsPrefix}}user-guide/tenant-profiles/#api-limits--usage), and the level of support you get.   

## Entity Limits

Please see table below to compare the entity limits of the subscription plans.

<table>
	<thead>
		<tr>
			<td><b>Parameter name</b></td>
			<td><b>Pilot</b></td>
			<td><b>Growth</b></td>
			<td><b>Scale</b></td>
			<td><b>Enterprise</b></td>
			<td><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><b>Devices</b></td>
			<td>5,000</td>
			<td>25,000</td>
			<td>50,000</td>
			<td>TBD</td>
			<td>Maximum number of devices</td>
		</tr>
		<tr>
			<td><b>Assets</b></td>
			<td>5,000</td>
			<td>25,000</td>
			<td>50,000</td>
			<td>TBD</td>
			<td>Maximum number of assets</td>
		</tr>
	</tbody>
</table>

## API Limits

Please see table below to compare the API limits of the subscription plans. The values are monthly API limits, unless stated otherwise.

<table>
	<thead>
		<tr>
			<td><b>Parameter name</b></td>
			<td><b>Pilot</b></td>
			<td><b>Growth</b></td>
			<td><b>Scale</b></td>
			<td><b>Enterprise</b></td>
			<td><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><b>Rule Engine executions</b></td>
			<td>25M</td>
			<td>250M</td>
			<td>1B</td>
			<td>2B</td>
			<td>Total number of any execution of the rule node.
Processing of a single telemetry message may cause multiple Rule Engine executions.
The platform will also count periodic messages produced by Generator nodes, etc.</td>
		</tr>
		<tr>
			<td><b>JavaScript executions</b></td>
			<td>1M</td>
			<td>10M</td>
			<td>50M</td>
			<td>100M</td>
			<td>Total number of any execution of user defined functions. For example, processing of the “Script” filter or transformation node, invocation of the data converter, etc.</td>
		</tr>
		<tr>
			<td><b>Alarms TTL</b></td>
			<td>60 days</td>
			<td>180 days</td>
			<td>365 days</td>
			<td>365 days</td>
			<td>How many days to store alarms in the database</td>
		</tr>
		<tr>
			<td><b>RPC TTL</b></td>
			<td>60 days</td>
			<td>180 days</td>
			<td>365 days</td>
			<td>365 days</td>
			<td>How many days to store persistent RPC in the database</td>
		</tr>
		<tr>
			<td><b>Default storage TTL</b></td>
			<td>365 days</td>
			<td>365 days</td>
			<td>365 days</td>
			<td>365 days</td>
			<td>How many days to store telemetry in the database</td>
		</tr>
		<tr>
			<td><b>Default Notification TTL</b></td>
			<td>1 week</td>
			<td>1 week </td>
			<td>1 week </td>
			<td>1 week</td>
			<td>How many days to store notifications in the database</td>
		</tr>
		<tr>
			<td><b>Default debug event TTL </b></td>
			<td>1 week</td>
			<td>1 week </td>
			<td>1 week </td>
			<td>1 week</td>
			<td>How many days to store debug events in the database</td>
		</tr>
	</tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.

## Rate Limits

<table>
	<thead>
		<tr>
			<td><b>Parameter name</b></td>
			<td><b>Pilot</b></td>
			<td><b>Growth</b></td>
			<td><b>Scale</b></td>
			<td><b>Enterprise</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><b>Transport tenant messages</b></td>
			<td>Up to <b>6,000</b> per second, not exceeding <b>120,000</b> per minute and capped at <b>2,520,000</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport device messages</b></td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport tenant telemetry messages</b></td>
			<td>Up to <b>3,000</b> per second, not exceeding <b>60,000</b> per minute and capped at <b>1,260,000</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport device telemetry messages</b></td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport gateway messages</b></td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport gateway device messages</b></td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6,000</b> per minute and capped at <b>21,600</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport gateway telemetry messages</b></td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
			<td>Up to <b>60</b> per second, not exceeding <b>1,800</b> per minute and capped at <b>36,000</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport gateway device telemetry messages</b></td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport tenant telemetry data points</b></td>
			<td>Up to <b>9,000</b> per second, not exceeding <b>180,000</b> per minute and capped at <b>3,780,000</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport device telemetry data points</b></td>
			<td>Up to <b>300</b> per second, not exceeding <b>9,000</b> per minute and capped at <b>32,400</b> per hour</td>
			<td>Up to <b>300</b> per second, not exceeding <b>9,000</b> per minute and capped at <b>32,400</b> per hour</td>
			<td>Up to <b>300</b> per second, not exceeding <b>9,000</b> per minute and capped at <b>32,400</b> per hour</td>
			<td>Up to <b>300</b> per second, not exceeding <b>9,000</b> per minute and capped at <b>32,400</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport gateway telemetry data points</b></td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
		</tr>
		<tr>
			<td><b>Transport gateway device telemetry data points</b></td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
			<td>Up to <b>600</b> per second, not exceeding <b>18,000</b> per minute and capped at <b>64,800</b> per hour</td>
		</tr>
		<tr>
			<td><b>Tenant integration messages</b></td>
			<td>Up to <b>3,000</b> per second, not exceeding <b>60,000</b> per minute and capped at <b>1,260,000</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
			<td>Up to <b>N/A</b> per second, not exceeding <b>N/A</b> per minute and capped at <b>N/A</b> per hour</td>
		</tr>
		<tr>
			<td><b>Device integration messages</b></td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute and capped at <b>10,800</b> per hour</td>
		</tr>
		<tr>
			<td><b>REST request for tenant</b></td>
			<td>Up to <b>100</b> per second, not exceeding <b>2,000</b> per minute </td>
			<td>Up to <b>100</b> per second, not exceeding <b>2,000</b> per minute </td>
			<td>Up to <b>100</b> per second, not exceeding <b>2,000</b> per minute </td>
			<td>Up to <b>100</b> per second, not exceeding <b>2,000</b> per minute </td>
		</tr>
		<tr>
			<td><b>REST requests for customer</b></td>
			<td>Up to <b>50</b> per second, not exceeding <b>1,000</b> per minute </td>
			<td>Up to <b>50</b> per second, not exceeding <b>1,000</b> per minute </td>
			<td>Up to <b>50</b> per second, not exceeding <b>1,000</b> per minute </td>
			<td>Up to <b>50</b> per second, not exceeding <b>1,000</b> per minute </td>
		</tr>
		<tr>
			<td><b>WS updates per session</b></td>
			<td>Up to <b>3,000</b> per second, not exceeding <b>30,000</b> per minute </td>
			<td>Up to <b>3,000</b> per second, not exceeding <b>30,000</b> per minute </td>
			<td>Up to <b>3,000</b> per second, not exceeding <b>30,000</b> per minute </td>
			<td>Up to <b>3,000</b> per second, not exceeding <b>30,000</b> per minute </td>
		</tr>
		<tr>
			<td><b>Cassandra query for tenant</b></td>
			<td>Up to <b>20,000</b> per  10 seconds, not exceeding <b>60,000</b> per minute </td>
			<td>Up to <b>20,000</b> per  10 seconds, not exceeding <b>60,000</b> per minute </td>
			<td>Up to <b>20,000</b> per  10 seconds, not exceeding <b>60,000</b> per minute </td>
			<td>Up to <b>20,000</b> per  10 seconds, not exceeding <b>60,000</b> per minute </td>
		</tr>
	</tbody>
</table>




