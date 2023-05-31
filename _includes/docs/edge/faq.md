* TOC
{:toc}


## What is ThingsBoard Edge?

ThingsBoard Edge is a ThingsBoard's software product for edge computing. 
It allows bringing data analysis and management to the edge, where the data created. At the same time ThingsBoard Edge seamlessly synchronizing with the ThingsBoard cloud (ThingsBoard Cloud, ThingsBoard Demo, ThingsBoard PE or ThingsBoard CE) according to your business needs.
If this is your first experience with the edge we recommend to review [what-is-edge](/docs/{{docsPrefix}}getting-started-guides/what-is-edge/) 
and [getting started guide](/docs/{{docsPrefix}}getting-started/).
You can find more information on the dedicated page.

## How do I get started?

We recommend to [install](/docs/user-guide/install/{{docsPrefix}}installation-options/) ThingsBoard Edge locally on your laptop or PC using Docker
and follow the [getting started guide](/docs/{{docsPrefix}}getting-started/).

## Does ThingsBoard Edge require connection to the internet?

No, ThingsBoard Edge does not require connection to the internet. 
You can use it without internet connection.
The only connection required is the one to the ThingsBoard cloud platform over gRPC.

{% if docsPrefix == 'pe/edge/' %}
Additionally, ThingsBoard Edge uses HTTP(s) connection to the ThingsBoard cloud platform instance to verify the license.
ThingsBoard Edge uses URL that is set in **Cloud Endpoint** configuration to do this validation.
Please, make sure, that HTTP(s) connection to the cloud platform is not blocked by any firewall settings.
ThingsBoard cloud platform acts as proxy for ThingsBoard Edge to connect to ThingsBoard license server.
{% endif %}

{% if docsPrefix == 'pe/edge/' %}
## What happens if the connection to the ThingsBoard cloud platform is temporary unavailable? How the license check will happen in this case?

ThingsBoard Edge is able to work offline, without connection to the ThingsBoard cloud platform, for **7 days**.
During this time, ThingsBoard Edge should **not be restarted** - restart requires connection to the ThingsBoard cloud platform to do initial license check.
So please make sure, that ThingsBoard Edge is not restarted during offline period.
{% endif %}

## Can multiple tenants or customers access single ThingsBoard Edge on remote location?

{% if docsPrefix == 'pe/edge/' %}
ThingsBoard Edge PE is **single** tenant and **multiple** customers (partial support of multiple customers). 
In case Edge owner is sub-customer, all the parents of Edge owner sub-customer until tenant level are going to be provisioned to the Edge.
So customers from the same hierarchy path are able to access the same ThingsBoard Edge PE instance.
You cannot share ThingsBoard Edge between multiple tenants.
And devices from multiple tenants can not be connected to a single ThingsBoard Edge.
In this case you'll need to provision multiple ThingsBoard Edge instances for every tenant.
{% else %}
ThingsBoard Edge CE is **single** tenant and **single** customer.
You cannot share ThingsBoard Edge between multiple tenants or customers.
And devices from multiple tenants can not be connected to a single ThingsBoard Edge.
In this case you'll need to provision multiple ThingsBoard Edge instances for every tenant or customer.
{% endif %}

## Can I connect devices from multiple tenants to a single ThingsBoard Edge?

ThingsBoard Edge is **single** Tenant.
You cannot connect devices from multiple tenants to a single ThingsBoard Edge entity. 
In this case you'll need to provision multiple ThingsBoard Edge instances for every tenant.

## What can I do with ThingsBoard Edge?

With ThingsBoard Edge, you can connect your on-site devices to ThingsBoard Edge, that is installed on-site as well, instead of direct connection to ThingsBoard cloud and get next benefits:
- **Local deployment and storage**<br>
*Process and store data from edge (local) devices without connection to the cloud. Push updates to the cloud once connection restored.*
- **Traffic filtering**<br>
*Filter data from edge (local) devices on the ThingsBoard Edge service and push to cloud only subset of the data for further processing or storage.*
- **Local alarms**<br>
*React instantly to critical situations on site without connectivity to cloud.*
- **Batch update and visualization**<br>
*Update thousands of edge configurations in a single click. Monitor local events and timeseries data with a real-time dashboard.*

## How to connect my device?

ThingsBoard provides
[MQTT](/docs/{{docsPrefix}}reference/mqtt-api), 
[CoAP](/docs/{{docsPrefix}}reference/coap-api), 
[HTTP](/docs/{{docsPrefix}}reference/http-api), and
[LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api) protocols support.
**Existing** devices may be connected to the platform using **[ThingsBoard Gateway](/docs/iot-gateway/what-is-iot-gateway/)**.
You can find more information on the [connectivity](/docs/{{docsPrefix}}reference/protocols/) page. 

{% if docsPrefix == 'pe/edge/' %}
Additionally, you can use ThingsBoard [**Integrations**](/docs/user-guide/integrations/) to connect devices from different sources and with custom payloads to the edge. 
{% endif %}

## Do I need to use an SDK?

No, many IoT devices can't afford to embed third-party SDK. ThingsBoard Edge provides quite simple API over common IoT protocols. You can choose any client-side library you like or use your own.
Some useful references:
 
 - [MQTT client-side libraries list](https://github.com/mqtt/mqtt.github.io/wiki/libraries) 
 - [C-implementation for CoAP](https://libcoap.net/)

## What about security?

You can use MQTT (over SSL) or HTTPS protocols for transport encryption. 

Each device has unique access token credentials that is used to setup connection. Credentials type is pluggable, so X.509 certificates support is coming soon.

## How many devices can ThingsBoard Edge support?

{% if docsPrefix == 'pe/edge/' %}
Number of connected devices depends on your subscription plan. 
There are plans with 'Unlimited Devices and Assets' - there is no any soft limits on creating devices and assets on the edge side.
{% else %}
There is no any soft limits on creating devices and assets on the edge side.
{% endif %}

<b>But</b> in real case deployment there are couple additional factors, that must be considered to be able host a lot of devices on edge side - <b>hardware, speed of internet connection and gRPC channel bound limits</b>.
Edge <b>hardware</b> must be powerful enough to process messages from 'unlimited' number of devices and assets.
Additionally, <b>speed of internet connection</b> between ThingsBoard Edge and ThingsBoard server must be fast to deliver huge amount of data from 'unlimited' number of devices and assets.
And last, but not least -  payload size and messages rate should be taken into consideration as well - <b>gRPC channel bound limits</b> affects messages delivery rate.
ThingsBoard Edge designed in mind as an edge computing service, located in remote locations with possible low bandwidth connectivity, so we do not recommend connecting more than *1000* devices to a single edge.
  
## Where does ThingsBoard Edge store data?

The data is stored in [PostgreSQL](https://www.postgresql.org/) database. PostgreSQL suites well for storage and querying of entities and local time-series data.
 
## How to get support?

You can use troubleshooting instructions and community resources or [contact us](/docs/contact-us) and learn more about [services](/docs/services/) we provide.