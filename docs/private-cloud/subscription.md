---
layout: common
assignees:
- ashvayka
title: ThingsBoard Private Cloud subscription plans definition
description: Entity, API and Rate Limits for the ThingsBoard Private Cloud offering

---


* TOC
{:toc}

ThingsBoard Private Cloud provides subscription plans based on the **pay-as-you-go** model. 
Main characteristics of the subscription plan are the number of connected devices and amount of messages they produce. 
However, to keep the environment safe, we introduce certain Entity, [API](/docs/pe/user-guide/tenant-profiles/#api-limits--usage) and [Rate limits](/docs/pe/user-guide/tenant-profiles/#rate-limits).

## Additional Features

<table>
    <thead>
        <tr>
            <th></th>
            <th>Launch</th>
            <th>Growth</th>
            <th>Scale</th>
            <th>Enterprise</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data & configuration migration</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>Automatic backups</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>24/7 Monitoring</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>Support</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>Custom data retention policies</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>Geo-region deployment choice</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>Maintenance window picking</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>Database</td>
            <td>SQL + NoSQL</td>
            <td>SQL + NoSQL</td>
            <td>SQL + NoSQL</td>
            <td>SQL + NoSQL</td>
        </tr>
        <tr>
            <td>Multi-AZ database replication</td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>High availability services</td>
            <td></td>
            <td></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
            <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
        </tr>
        <tr>
            <td>Architecture reviews and consults</td>
            <td><a href="/docs/contact-us/?subject=Private%20Cloud&message=Architecture%20reviews%20and%20consults">Upon request</a></td>
            <td><a href="/docs/contact-us/?subject=Private%20Cloud&message=Architecture%20reviews%20and%20consults">Upon request</a></td>
            <td><a href="/docs/contact-us/?subject=Private%20Cloud&message=Architecture%20reviews%20and%20consults">Upon request</a></td>
            <td><a href="/docs/contact-us/?subject=Private%20Cloud&message=Architecture%20reviews%20and%20consults"><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></a></td>
        </tr>
    </tbody>
</table>

## Entity Limits

Please see table below to compare the entity limits of the subscription plans.

<table>
	<thead>
		<tr>
			<td><b>Parameter name</b></td>
			<td><b>Launch</b></td>
			<td><b>Growth</b></td>
			<td><b>Scale</b></td>
			<td><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><b>Devices</b></td>
			<td>5,000</td>
			<td>25,000</td>
			<td>50,000</td>
			<td>Maximum number of devices</td>
		</tr>
		<tr>
			<td><b>Assets</b></td>
			<td>5,000</td>
			<td>25,000</td>
			<td>50,000</td>
			<td>Maximum number of assets</td>
		</tr>
		<tr>
			<td><b>Customers</b></td>
			<td>5,000</td>
			<td>25,000</td>
			<td>50,000</td>
			<td>Maximum number of customers</td>
		</tr>
		<tr>
			<td><b>Users</b></td>
			<td>5,000</td>
			<td>25,000</td>
			<td>50,000</td>
			<td>Maximum number of users</td>
		</tr>
		<tr>
			<td><b>Dashboards</b></td>
			<td>1,000</td>
			<td>5,000</td>
			<td>10,000</td>
			<td>Maximum number of scheduler events</td>
		</tr>
		<tr>
			<td><b>Scheduler Events</b></td>
			<td>1,000</td>
			<td>5,000</td>
			<td>10,000</td>
			<td>Maximum number of scheduler events</td>
		</tr>
		<tr>
			<td><b>Integrations</b></td>
			<td>30</td>
			<td>50</td>
			<td>100</td>
			<td>Maximum number of integrations</td>
		</tr>
		<tr>
			<td><b>Converters</b></td>
			<td>100</td>
			<td>200</td>
			<td>400</td>
			<td>Maximum number of integrations</td>
		</tr>
		<tr>
			<td><b>Rule Chains</b></td>
			<td>50</td>
			<td>100</td>
			<td>150</td>
			<td>Maximum number of rule chains</td>
		</tr>
	</tbody>
</table>

## API Limits

Please see table below to compare the API limits of the subscription plans. The values are monthly API limits, unless stated otherwise.

<table>
	<thead>
		<tr>
			<td><b>Parameter name</b></td>
			<td><b>Launch</b></td>
			<td><b>Growth</b></td>
			<td><b>Scale</b></td>
			<td><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
        <tr>
            <td>Transport messages</td>
            <td>1B</td>
            <td>5B</td>
            <td>25B</td>
            <td>Total number of messages received by any of the Transports (MQTT, HTTP, CoAP, etc) or Integrations</td>
        </tr>
        <tr>
            <td>Transport data points</td>
            <td>1B</td>
            <td>5B</td>
            <td>25B</td>
            <td>Total number of key-value pairs that your telemetry or attribute transport messages contain</td>
        </tr>
		<tr>
			<td><b>Rule Engine executions</b></td>
			<td>5B</td>
			<td>25B</td>
			<td>125B</td>
			<td>Total number of any execution of the rule node.
Processing of a single telemetry message may cause multiple Rule Engine executions.
The platform will also count periodic messages produced by Generator nodes, etc.</td>
		</tr>
		<tr>
			<td><b>TBEL executions</b></td>
			<td>10B</td>
			<td>50B</td>
			<td>250B</td>
			<td>Total number of any execution of user defined functions written using TBEL. For example, processing of the “Script” filter or transformation node, invocation of the data converter, etc.</td>
		</tr>
		<tr>
			<td><b>JavaScript executions</b></td>
			<td>200M</td>
			<td>1B</td>
			<td>5B</td>
			<td>Total number of any execution of user defined functions written using JS. For example, processing of the “Script” filter or transformation node, invocation of the data converter, etc.</td>
		</tr>
		<tr>
			<td><b>Default storage TTL</b></td>
			<td>365 days</td>
			<td>365 days</td>
			<td>365 days</td>
			<td>How many days to store telemetry in the database by default. Configurable upon request.</td>
		</tr>
		<tr>
			<td><b>Default alarms TTL</b></td>
			<td>365 days</td>
			<td>365 days</td>
			<td>365 days</td>
			<td>How many days to store alarms in the database by default. Configurable upon request.</td>
		</tr>
		<tr>
			<td><b>Default RPC TTL</b></td>
			<td>1 week</td>
			<td>1 week</td>
			<td>1 week</td>
			<td>How many days to store persistent RPC in the database by default. Configurable upon request.</td>
		</tr>
		<tr>
			<td><b>Default notifications TTL</b></td>
			<td>1 week</td>
			<td>1 week</td>
			<td>1 week</td>
			<td>How many days to store notifications in the database by default. Configurable upon request.</td>
		</tr>
		<tr>
			<td><b>Default debug event TTL </b></td>
			<td>1 week</td>
			<td>1 week</td>
			<td>1 week</td>
			<td>How many days to store debug events in the database by default. Configurable upon request.</td>
		</tr>
		<tr>
			<td><b>New Alarms per month</b></td>
			<td>50K</td>
			<td>75K</td>
			<td>100K</td>
			<td>Total number of alarms created per month.</td>
		</tr>
		<tr>
			<td><b>Rule Engine executions per message</b></td>
			<td>20</td>
			<td>20</td>
			<td>20</td>
			<td>Maximum number of rule node executions to process single message.</td>
		</tr>
		<tr>
			<td><b>Calculated fields per entity</b></td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
			<td>Number of calculated fields per entity.</td>
		</tr>
		<tr>
			<td><b>Arguments per calculated field</b></td>
			<td>10</td>
			<td>10</td>
			<td>10</td>
			<td>Maximum number of arguments that may be used in the calculated field.</td>
		</tr>
		<tr>
			<td><b>Data points in rolling argument</b></td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
			<td>Maximum number of data points to be stored as part of the calculated field's rolling argument.</td>
		</tr>
	</tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.

## Rate Limits

<table>
	<thead>
		<tr>
			<td><b>Parameter name</b></td>
			<td><b>Launch</b></td>
			<td><b>Growth</b></td>
			<td><b>Scale</b></td>
            <td><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><b>All messages</b></td>
			<td>Up to <b>2K</b> per second, not exceeding <b>25K</b> per minute and capped at <b>1.2M</b> per hour</td>
			<td>Up to <b>10K</b> per second, not exceeding <b>125K</b> per minute and capped at <b>6M</b> per hour</td>
			<td>Up to <b>20K</b> per second, not exceeding <b>600K</b> per minute and capped at <b>30M</b> per hour</td>
			<td>Total number of messages received by any of the transports or integrations for all devices</td>
		</tr>
		<tr>
			<td><b>All data points</b></td>
			<td>Up to <b>2K</b> per second, not exceeding <b>25K</b> per minute and capped at <b>1.2M</b> per hour</td>
			<td>Up to <b>10K</b> per second, not exceeding <b>125K</b> per minute and capped at <b>6M</b> per hour</td>
			<td>Up to <b>20K</b> per second, not exceeding <b>600K</b> per minute and capped at <b>30M</b> per hour</td>
			<td>Total number of data points received by any of the transports or integrations for all devices</td>
		</tr>
		<tr>
			<td><b>Messages per device</b></td>
			<td>Up to <b>200</b> per second, not exceeding <b>6K</b> per minute and capped at <b>20K</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6K</b> per minute and capped at <b>20K</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6K</b> per minute and capped at <b>20K</b> per hour</td>
			<td>Total number of messages received by any of the transports or integrations for each device separately</td>
		</tr>
		<tr>
			<td><b>Data points per device</b></td>
			<td>Up to <b>200</b> per second, not exceeding <b>6K</b> per minute and capped at <b>20K</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6K</b> per minute and capped at <b>20K</b> per hour</td>
			<td>Up to <b>200</b> per second, not exceeding <b>6K</b> per minute and capped at <b>20K</b> per hour</td>
			<td>Total number of data points received by any of the transports or integrations for each device separately</td>
		</tr>
		<tr>
			<td><b>All REST requests</b></td>
			<td>Up to <b>100</b> per second, not exceeding <b>2,000</b> per minute </td>
			<td>Up to <b>100</b> per second, not exceeding <b>3,000</b> per minute </td>
			<td>Up to <b>100</b> per second, not exceeding <b>4,000</b> per minute </td>
			<td>Total number of REST API calls received by any of the users</td>
		</tr>
		<tr>
			<td><b>REST requests for customer</b></td>
			<td>Up to <b>50</b> per second, not exceeding <b>1,000</b> per minute </td>
			<td>Up to <b>50</b> per second, not exceeding <b>1,000</b> per minute </td>
			<td>Up to <b>50</b> per second, not exceeding <b>1,000</b> per minute </td>
			<td>Total number of REST API calls received by any of the users belong to the particular customer</td>
		</tr>
        <tr>
            <td>WebSocket updates per session</td>
            <td>Up to <b>1K</b> per second,<br>not exceeding <b>10K</b> per minute</td>
            <td>Up to <b>1K</b> per second,<br>not exceeding <b>10K</b> per minute</td>
            <td>Up to <b>1K</b> per second,<br>not exceeding <b>10K</b> per minute</td>
            <td>Total number of messages received by particular WebSocket session</td>
        </tr>
        <tr>
            <td>WebSocket sessions</td>
            <td>1K</td>
            <td>5K</td>
            <td>10K</td>
            <td>Maximum number of concurrent WebSocket sessions</td>
        </tr>
        <tr>
            <td>WebSocket subscriptions</td>
            <td>10K</td>
            <td>50K</td>
            <td>100K</td>
            <td>Maximum number of active subscriptions for all WebSocket sessions</td>
        </tr>
        <tr>
            <td>WebSocket sessions per customer</td>
            <td>500</td>
            <td>500</td>
            <td>500</td>
            <td>Maximum number of active WebSocket sessions per сustomer</td>
        </tr>
        <tr>
            <td>WebSocket subscriptions per customer</td>
            <td>5K</td>
            <td>5K</td>
            <td>5K</td>
            <td>Maximum number of WebSocket subscriptions per сustomer</td>
        </tr>
        <tr>
            <td>WebSocket Sessions per user</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>Maximum number of WebSocket sessions per user</td>
        </tr>
        <tr>
            <td>WebSocket subscriptions per user</td>
            <td>1K</td>
            <td>1K</td>
            <td>1K</td>
            <td>Maximum number of WebSocket subscriptions per user</td>
        </tr>
        <tr>
            <td>WebSocket queue size per session</td>
            <td>500</td>
            <td>500</td>
            <td>500</td>
            <td>Maximum size of in-transit messages queue per session</td>
        </tr>
		<tr>
			<td><b>Telemetry queries</b></td>
			<td>Up to <b>20K</b> per 10 seconds, not exceeding <b>60K</b> per minute </td>
			<td>Up to <b>20K</b> per 10 seconds, not exceeding <b>60K</b> per minute </td>
			<td>Up to <b>20K</b> per 10 seconds, not exceeding <b>60K</b> per minute </td>
            <td>Total number of telemetry queries received by any of the users WebSocket sessions or REST API calls</td>
		</tr>
	</tbody>
</table>




