* TOC
{:toc}


## What is ThingsBoard?

ThingsBoard is an open-source server-side platform that allows you to monitor and control your IoT devices.
It is free for both personal and commercial usage and you can deploy it anywhere. 
If this is your first experience with the platform we recommend to review [what-is-thingsboard](/docs/{{docsPrefix}}getting-started-guides/what-is-thingsboard/) 
and [getting started guide](/docs/{{docsPrefix}}getting-started-guides/helloworld/).
You can find more information on the dedicated page.

## How do I get started?

{% if docsPrefix == 'paas/' %}
We recommend to follow the [getting started guide](/docs/{{docsPrefix}}getting-started-guides/helloworld/).
{% else %}
We recommend to [install](/docs/{{docsPrefix}}user-guide/install/installation-options/) ThingsBoard locally on your laptop or PC using Docker
and follow the [getting started guide](/docs/{{docsPrefix}}getting-started-guides/helloworld/).
{% endif %}

## What can I do with ThingsBoard?

ThingsBoard provides out-of-the-box IoT solution that will enable server-side infrastructure for your IoT applications.
You can find more information by browsing [guides](/docs/{{docsPrefix}}user-guide/) and [hardware samples](/docs/{{docsPrefix}}guides/#AnchorIDHardwareSamples)

{% unless docsPrefix == 'paas/' %}
## Where can I host ThingsBoard?

You can host ThingsBoard in the cloud, on-premises or locally on your laptop, PC or even Raspberry Pi. We recommend to get started with Docker installation
  
  - [Linux & Mac OS](/docs/{{docsPrefix}}user-guide/install/docker/) 
  - [Windows](/docs/{{docsPrefix}}user-guide/install/docker-windows/)

You can also take a look at [cluster setup](/docs/{{docsPrefix}}user-guide/install/cluster-setup/) guide.
{% endunless %}

## How to connect my device?

ThingsBoard provides
[MQTT](/docs/{{docsPrefix}}reference/mqtt-api), 
[CoAP](/docs/{{docsPrefix}}reference/coap-api), 
[HTTP](/docs/{{docsPrefix}}reference/http-api), and.
[LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api) protocols support.
**Existing** devices may be connected to the platform using **[ThingsBoard Gateway](/docs/iot-gateway/what-is-iot-gateway/)**.
You can find more information on the [connectivity](/docs/{{docsPrefix}}reference/protocols/) page. 

## Do I need to use an SDK?

No, many IoT devices can't afford to embed third-party SDK. ThingsBoard provides quite simple API over common IoT protocols. You can choose any client-side library you like or use your own.
Some useful references:
 
 - [MQTT client-side libraries list](https://github.com/mqtt/mqtt.github.io/wiki/libraries) 
 - [C-implementation for CoAP](https://libcoap.net/)

## What about security?

You can use MQTT (over SSL) or HTTPS protocols for transport encryption. 

Each device has unique access token credentials that is used to setup connection. Credentials type is pluggable, so X.509 certificates support is coming soon.

## How much devices can ThingsBoard support?

ThingsBoard platform is horizontally scalable. Each server node in the cluster is unique.
Scalability is achieved using [consistent-hashing](https://dzone.com/articles/simple-magic-consistent) load balancing algorithm between the cluster nodes.
Actual performance depends on usage scenario of connected devices.
{% unless docsPrefix == 'paas/' %}
For example, small commodity hardware cluster can support [several millions](/docs/{{docsPrefix}}reference/iot-platform-deployment-scenarios/#1-million-smart-meters-tco) of devices connected over MQTT.
{% endunless %}
  
## Where does ThingsBoard store data?

The data is stored in [Cassandra](http://cassandra.apache.org/) database. Cassandra suites well for storage and querying of time-series data and provides high availability and fault-tolerance.
 
## What license type does ThingsBoard use?

ThingsBoard is licensed under [Apache 2.0 License](https://en.wikipedia.org/wiki/Apache_License#Version_2.0).
It is free for both personal and commercial usage and you can deploy it anywhere.

## How to get support?

You can use troubleshooting instructions and community resources or [contact us](/docs/contact-us) and learn more about [services](/docs/services/) we provide.
