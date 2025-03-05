* TOC
{:toc}

## General Questions

{% if docsPrefix == "pe/edge/" or docsPrefix contains "pe/edge/" %}

<details>
<summary><h5> What is ThingsBoard Edge Professional Edition? </h5></summary>
<p><b>ThingsBoard Edge Professional Edition (PE)</b> is a commercial version of <b>ThingsBoard Edge</b> designed specifically for edge computing scenarios. It provides advanced features and enterprise-grade support for managing and analyzing IoT data at the edge while maintaining seamless synchronization with the <b>ThingsBoard Server (Cloud or On-premise)</b>.</p>
<p>If you're new to edge computing, we recommend exploring <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-edge/" target="_blank">What is Edge?</a> and the <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> guides for more detailed information.</p>
</details>

<details>
<summary><h5> Is ThingsBoard Edge Professional Edition free to use?</h5></summary>
<p>No, it is a commercial product that requires a valid license. For pricing details and licensing options, please visit our <a href="https://thingsboard.io/pricing/?section=thingsboard-edge" target="_blank">pricing page</a> or <a href="https://thingsboard.io/docs/contact-us/" target="_blank">contact</a> our sales team.</p>
</details>

<details>
<summary><h5> Who is ThingsBoard Edge Professional Edition intended for?</h5></summary>
<p>It is designed for enterprises, industrial applications, and large-scale IoT deployments that require advanced features, enhanced security, professional support, and enterprise-grade scalability.</p>
</details>
{% else %}

<details>
<summary><h5> What is ThingsBoard Edge Community Edition? </h5></summary>
<p><b>ThingsBoard Edge Community Edition (CE)</b> is a free, open-source platform designed specifically for edge computing scenarios. It provides essential capabilities for managing and analyzing IoT data at the edge, while staying seamlessly synchronized with the <b>ThingsBoard Server (Cloud or On-premise)</b>.</p>
<p>If you're new to edge computing, we recommend exploring <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-edge/" target="_blank">What is Edge?</a> and the <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> guides for more detailed information.</p>
</details>

<details>
<summary><h5> Is the ThingsBoard Edge Community Edition free to use?</h5></summary>
<p>Yes, it is completely free, with no licensing fees or hidden costs.</p>
</details>

<details>
<summary><h5> Who is the ThingsBoard Edge Community Edition intended for?</h5></summary>
<p>It is ideal for individuals, startups, educational purposes, and organizations conducting small to medium-sized IoT projects without the need for advanced enterprise features.</p>
</details>

<details>
<summary><h5> Can I use ThingsBoard Edge Community Edition for commercial projects?</h5></summary>
<p>Yes, <b>ThingsBoard Edge Community Edition</b> can be used for commercial purposes. You can develop and deploy IoT solutions based on the Community Edition as part of your business operations. It is distributed under the Apache 2.0 license, which allows commercial use without the license or royalty fees.</p>
</details>

<details>
<summary><h5> Can I customize and modify the ThingsBoard Edge Community Edition?</h5></summary>
<p>Yes, the source code is available on GitHub, and you can fork and modify it to suit your needs. By the way, please consider starring <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">our repository</a>.</p> 
</details>

{% endif %}

<details>
<summary><h5> What ThingsBoard Edge compatibility means?</h5></summary>
<p>ThingsBoard Edge Community Edition is able to connect only to ThingsBoard Community Edition server.</p>
<p>ThingsBoard Edge Professional Edition is able to connect only to ThingsBoard Professional Edition server (it can be ThingsBoard Cloud or on-premise instances).</p>
<p>ThingsBoard Edge Community Edition can not be connected to ThingsBoard Professional Edition and vice versa.</p>
</details>

<details>
<summary><h5> How does the ThingsBoard Edge Community Edition differ from Professional Edition?</h5></summary>
<p>Community Edition includes essential features for IoT device management, data collection, visualization, and rule processing. The Professional Edition offers advanced features such as white-labeling, RBAC, integrations, etc.</p>
</details>

<details>
<summary><h5> Does ThingsBoard Edge support clustering? </h5></summary>
<p>No, ThingsBoard Edge does not support clustering at the moment. But cluster support will be added in the following releases.</p>
</details>

<details>
<summary><h5> Do I need an internet connection to use the ThingsBoard Edge?</h5></summary>
<p>No, you can run it completely offline if you need to. The only connection required is to the <b>ThingsBoard Server</b> via <a href="https://grpc.io/" target="_blank">gRPC</a>.</p>
<p>{% if docsPrefix == 'pe/edge/' %}
However, <b>ThingsBoard Edge</b> does utilize an HTTP(s) connection to the <b>ThingsBoard Server</b> to verify the license.
The URL set in the <b>Cloud Endpoint</b> configuration is used for this validation.
Ensure that the HTTP(s) connection to the server is not blocked by any firewall settings.
The ThingsBoard Server acts as a proxy for ThingsBoard Edge to connect to the ThingsBoard License Portal.
{% endif %}</p>
</details>

{% if docsPrefix == 'pe/edge/' %}
<details>
<summary><h5>How will the license check be carried out if the connection to the ThingsBoard server is temporarily not available?</h5></summary>
<p> ThingsBoard Edge can operate offline, without a connection to the ThingsBoard server, for up to **7 days**.</p>
</details>
{% endif %}

## Installation & Deployment 

<details>
<summary><h5> How can I install ThingsBoard Edge? </h5></summary>
<p>You can install the ThingsBoard Edge following the <a href="/docs/user-guide/install/{{docsPrefix}}installation-options/" target="_blank">installation guides</a> available in the official documentation .</p>
</details>

<details>
<summary><h5>What are the system requirements for deploying the ThingsBoard Edge? </h5></summary>
<p>The Community Edition is compatible with various operating systems, including Linux, Windows, and macOS. Specific requirements depend on the deployment method and can be found in the <a href="/docs/user-guide/install/{{docsPrefix}}installation-options/" target="_blank">installation guides</a>.</p>
</details>

<details>
<summary><h5>Does the ThingsBoard Edge support multi-tenancy? </h5></summary>
{% if docsPrefix == 'pe/edge/' %}
<p>No, <b>ThingsBoard Edge Professional Edition</b> does not support multi-tenancy. It is designed for a <b>single tenant</b> and <b>multiple customers</b>, but the customer hierarchy must be taken into account</p>
<p>For instance, if an Edge owner is a sub-customer, all the parent entities of that sub-customer up to the tenant level will be provisioned to the Edge.
This means customers from the same hierarchy path can access the same ThingsBoard Edge PE instance.</p>
<p>However, you cannot share a ThingsBoard Edge between multiple tenants, and devices from multiple tenants cannot connect to a single <b>ThingsBoard Edge</b>.
If this is required, you'll need to provision multiple <b>ThingsBoard Edge</b> instances for each tenant.</p>
{% else %}
<p>No, <b>ThingsBoard Edge Community Edition</b> does not support multi-tenancy. It is designed for a <b>single tenant</b> and a <b>single customer</b>, which means that you cannot share a single <b>ThingsBoard Edge</b> instance between multiple tenants or customers, devices from different tenants cannot be connected to the same <b>ThingsBoard Edge</b> instance.</p>
<p>If this is required, you'll need to provision multiple <b>ThingsBoard Edge</b> instances for each tenant.</p>
{% endif %}
</details>

<details>
<summary><h5> What databases does the ThingsBoard Edge support?</h5></summary>
<p>The ThingsBoard Edge supports pure SQL or a hybrid SQL + NoSQL (for telemetry storage) approach. For more details on database options, you can check <a href="/docs/{{peDocsPrefix}}reference/#sql-vs-nosql-vs-hybrid-database-approach" target="_blank">here</a>.</p>
</details>

<details>
<summary><h5> Where does ThingsBoard Edge store time-series data?</h5></summary>
<p>Depending on your database approach, there are two options. If you've chosen a <b>hybrid approach</b>, the time series data will be stored in <b>Cassandra</b>. Otherwise, the data is stored in the <b>PostgreSQL</b> database, which is well suited for storing and querying entities and local time-series data.</p>
</details>

<details>
<summary><h5> Is there an official Docker image for ThingsBoard Edge?</h5></summary>
<p>Yes, official <b>Docker images</b> are available on <b>Docker Hub</b>.</p>
</details>

<details>
<summary><h5> Can I run ThingsBoard Edge on Raspberry Pi or other edge devices?</h5></summary>
<p>Yes, <b>ThingsBoard Edge</b> is specifically designed to run on a variety of Edge hardware platforms, including single-board computers like <b>Raspberry Pi</b> and other devices with sufficient processing power and memory.</p>
</details>

<details>
<summary><h5>What should I do if I have legacy devices to connect?</h5></summary>
<p>If you have legacy devices that don't natively speak one of the protocols supported by <b>ThingsBoard Edge</b> (such as MQTT, CoAP, or HTTP), you can still connect them by installing <a href="/docs/iot-gateway/" target="_blank">ThingsBoard IoT Gateway</a>. It will act as a bridge between your legacy devices and <b>ThingsBoard Edge</b>.</p>
<p><b>ThingsBoard IoT Gateway</b> is available out-of-the-box and requires no additional fees.</p>
</details>

##  Features & Limitations
### How many devices can ThingsBoard Edge support?

{% if docsPrefix == 'pe/edge/' %}
The number of connected devices depends on your subscription plan.
Some plans offer 'Unlimited Devices and Assets', thus there are no soft limits on creating devices and assets on the edge side.
{% else %}
There are no soft limits on creating devices and assets on the edge side.
{% endif %}

**However**, in real-world deployments, several additional factors must be considered to support a large number of devices on the edge side - hardware, internet connection speed, and gRPC channel bound limits.
Your edge **hardware** must be powerful enough to process messages from an 'unlimited' number of devices and assets.
The **speed of your internet connection** between ThingsBoard Edge and the ThingsBoard server must be fast enough to deliver a large amount of data.
Lastly, **gRPC channel bound limits**, which affect message delivery rate, should also be considered.
Since ThingsBoard Edge is designed with remote locations with potentially low bandwidth connectivity in mind, we do not recommend connecting more than *1000* devices to a single edge.

### Where does ThingsBoard Edge store data?

Data is stored in the [PostgreSQL](https://www.postgresql.org/) database, which is well-suited for storing and querying entities and local time series data.

### How can I connect my device?

ThingsBoard supports various protocols including
[MQTT](/docs/{{docsPrefix}}reference/mqtt-api), 
[CoAP](/docs/{{docsPrefix}}reference/coap-api), 
[HTTP](/docs/{{docsPrefix}}reference/http-api), and
[LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api).
**Existing** devices can be connected to the platform using the **[ThingsBoard Gateway](/docs/iot-gateway/what-is-iot-gateway/)**.
More information is available on the [connectivity](/docs/{{docsPrefix}}reference/protocols/) page.

{% if docsPrefix == 'pe/edge/' %}
Furthermore, you can use ThingsBoard [**Integrations**](/docs/user-guide/integrations/) to connect devices from different sources and with custom payloads to the edge.
{% endif %}

### Do I need to use an SDK?

No, many IoT devices are not designed to embed third-party SDKs. 
ThingsBoard Edge provides a straightforward API over common IoT protocols, so you can select any client-side library of your preference or even use your own. 
Some useful references include:
 
 - [MQTT client-side libraries list](https://github.com/mqtt/mqtt.github.io/wiki/libraries) 
 - [C-implementation for CoAP](https://libcoap.net/)

## Support & Community Assistance
### How can I get support?

You can refer to our troubleshooting instructions and community resources, or [contact us](/docs/contact-us) to learn more about the [services](/docs/services/) we provide.

## Security & Compliance
### What about security?

You can use MQTT (over SSL) or HTTPS protocols for transport encryption. 
Each device has unique access token credentials or X.509 certificates used to establish a connection.

