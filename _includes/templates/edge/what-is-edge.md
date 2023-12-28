{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% assign cloudDocsPrefix = "pe/" %}
{% else %}
{% assign appPrefix = "ThingsBoard CE" %}
{% endif %}

{% if docsPrefix != 'pe/edge/' %}
<h3>Interested in the Professional Edition? Explore the ThingsBoard PE Edge Documentation <a style="pointer-events: all;" href="/docs/pe/edge/">Here</a>.</h3>
{% endif %}

{% capture tb-open-source %}
ThingsBoard is an open-source IoT platform that provides a robust suite of features for data collection, processing, visualization, and device management.
If you are a new platform user, we suggest reading [**What is ThingsBoard?**](/docs/getting-started-guides/what-is-thingsboard/) before proceeding with ThingsBoard Edge.  
{% endcapture %}
{% include templates/info-banner.md content=tb-open-source %}

**ThingsBoard Edge** is a robust software product by ThingsBoard, designed to leverage edge computing.

{% if docsPrefix == 'pe/edge/' %}
With ThingsBoard Edge, data analysis and management is brought to the point of data generation - the edge. 
It seamlessly synchronizes with ThingsBoard PE, whether it's a [cloud](https://thingsboard.cloud) or an on-premise installation, aligning with your business requirements.

ThingsBoard Edge PE is designed for a **single** tenant and/or **multiple** customers.
As such, you cannot share ThingsBoard Edge between multiple tenants, and devices from different tenants cannot be connected to a single ThingsBoard Edge.
In such scenarios, separate ThingsBoard Edge instances would need to be provisioned for each tenant.
{% else %}
With ThingsBoard Edge, data analysis and management is brought to the edge, where data generation happens. 
It synchronizes effortlessly with ThingsBoard CE, whether it's a [demo](https://demo.thingsboard.io/) or an on-premise installation, according to your business requirements.

ThingsBoard Edge CE is designed for a **single** tenant and/or **single** customer. 
Sharing ThingsBoard Edge between multiple tenants or customers is not feasible, and devices from different tenants or customers cannot be connected to a single ThingsBoard Edge.
In such cases, multiple ThingsBoard Edge instances need to be provisioned for each tenant or customer.
{% endif %}

<br>

![image](https://img.thingsboard.io/edge/overview/edge_overview.svg)

#### Use-Cases for ThingsBoard Edge

- **Autonomous Vehicles**
  Edge computing allows for the collection, processing, and response to road events with minimal latency. Modern autonomous vehicles generate enormous amounts of data - ranging from 5 TB to 20 TB per day. 4G or 5G networks might not be able to handle such high throughput, but ThingsBoard Edge can filter this data, processing most of it locally, and only pushing a subset of this data to the cloud.

- **Smart Farming**
  Rapidly respond to failures of silo aeration systems at remote sites, even if the cloud connectivity from the on-field location is currently weak.

- **Smart Houses**
  Processing and analyzing data closer to smart houses allows for enhanced security of sensitive user information. The low latency of smart house solutions results in a better user experience, with quicker responses from end devices compared to the time it takes for edge devices to connect to the cloud for decision-making.

- **Security Solutions**
  Responding to security violations and threats in a matter of seconds is a necessity. Edge computing provides this capability, making the quality of your connectivity to the cloud irrelevant - decisions will be made by the local edge engine on a remote site in real-time.

- **In-Hospital Monitoring**
  For data privacy in healthcare devices, data processing must occur at the edge. Only necessary pieces of readings from medical devices are pushed to the cloud, while all other sensitive data is stored on the edge. An additional benefit of edge processing in this scenario is the ability to react to critical medical cases as quickly as possible due to real-time processing of data from edge medical devices.

- **Predictive Maintenance**
  Processing and storing data from edge devices closer to the equipment enables analysis of vast amounts of data locally. This allows detection of changes in production lines before a failure occurs, with only average readings from production lines being sent to the cloud, according to your business needs.

#### Features of ThingsBoard Edge

With **ThingsBoard Edge**, you get:

- **Local deployment and storage**: Process and store data from local (edge) devices without connecting to the cloud. Push updates to the cloud once the connection is restored.

![image](https://img.thingsboard.io/edge/overview/offline_network_.svg)

- **Traffic filtering**: Filter data from local (edge) devices on the ThingsBoard Edge service and push only a subset of the data to the cloud for further processing or storage.

![image](https://img.thingsboard.io/edge/overview/data_filtering.svg)

- **Local alarms**: Instantly respond to critical situations on site, without the need for a cloud connection.

![image](https://img.thingsboard.io/edge/overview/alarm.svg)

- **Real-time dashboards**: Monitor local events and timeseries data.
- **Local storage**: Store data from edge devices on the edge if the cloud connection is inactive and push updates to the cloud once the connection is restored.
- **Batch Update**: Update thousands of edge configurations with a single click.

![image](https://img.thingsboard.io/edge/overview/update_dashboard.svg)

ThingsBoard Edge inherits features from {{appPrefix}}, providing the same experience for connecting, managing, and processing data from your devices.

It supports the following **ThingsBoard** features:
* [**Attributes**](/docs/{{cloudDocsPrefix}}user-guide/attributes/) - Assign and manage custom attributes to your entities.
* [**Telemetry**](/docs/{{cloudDocsPrefix}}user-guide/telemetry/) - API for collecting time-series data from your devices.
* [**Entities and relations**](/docs/{{cloudDocsPrefix}}user-guide/entities-and-relations/) - Model physical world objects (e.g., devices and assets) and the relationships between them.
* [**Data visualization**](/docs/{{cloudDocsPrefix}}guides/#AnchorIDDataVisualization) - Develop custom dashboards and widgets.
* [**Rule engine**](/docs/{{cloudDocsPrefix}}user-guide/rule-engine-2-0/re-getting-started/) - Manage data processing & actions on incoming telemetry and events.
* [**RPC**](/docs/{{cloudDocsPrefix}}user-guide/rpc/) - Send remote procedure calls (RPC) **from both edge and cloud sides** to devices, and vice versa.
* [**Audit log**](/docs/{{cloudDocsPrefix}}user-guide/audit-log/) - Track user activity.
* [**API Limits**](/docs/{{cloudDocsPrefix}}user-guide/api-limits/) - Control and limit the number of API requests from a single host.

{% if docsPrefix == 'pe/edge/' %}
Furthermore, Edge PE supports the following **ThingsBoard PE** features:
* [**Integrations**](/docs/user-guide/integrations/)
    * Connect existing NB IoT, LoRaWAN, SigFox, and other devices with specific payload formats directly to the ThingsBoard platform.
    * Stream data from devices connected to existing IoT Platforms to enable real-time interactive dashboards and efficient data processing.
* [**White-labeling**](/docs/pe/user-guide/white-labeling/) - Configure a custom menu, logo, color scheme, email server settings, and customer email templates to interact with users, etc.
* [**Scheduler**](/docs/pe/user-guide/scheduler/) - Schedule various types of events with flexible configuration.
* [**Entity Groups**](/docs/pe/user-guide/groups/) - Organize entities into groups, assign roles to specific user groups, grant specific permissions to specific user groups over specific device groups.
{% endif %}

#### Project Roadmap

<p><a href="/docs/{{docsPrefix}}roadmap" class="button">ThingsBoard Edge Roadmap</a></p>

#### Next Steps

<p><a href="/docs/{{docsPrefix}}getting-started" class="button">Getting Started Guide</a></p>
