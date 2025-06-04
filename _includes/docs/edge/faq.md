* TOC
{:toc}

## General Questions

### What is ThingsBoard Edge {{edgeName}}? 
{% if docsPrefix == "pe/edge/" or docsPrefix contains "pe/edge/" %}
<p><b>ThingsBoard Edge Professional Edition (PE)</b> is a commercial version of <b>ThingsBoard Edge</b> designed specifically for edge computing scenarios. It provides advanced features and enterprise-grade support for managing and analyzing IoT data at the edge while maintaining seamless synchronization with the <b>ThingsBoard Server (Cloud or On-premise)</b>.</p>
<p>If you're new to edge computing, we recommend exploring <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-edge/" target="_blank">What is Edge?</a> and the <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> guides for more detailed information.</p>
{% else %}
<p><b>ThingsBoard Edge Community Edition (CE)</b> is a free, open-source platform designed specifically for edge computing scenarios. It provides essential capabilities for managing and analyzing IoT data at the edge, while staying seamlessly synchronized with the <b>ThingsBoard Server (Cloud or On-premise)</b>.</p>
<p>If you're new to edge computing, we recommend exploring <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-edge/" target="_blank">What is Edge?</a> and the <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> guides for more detailed information.</p>
{% endif %}


### Can I customize and modify the ThingsBoard {{edgeName}}?
{% if docsPrefix == "pe/edge/" or docsPrefix contains "pe/edge/" %}
<p>No, the <b>ThingsBoard {{edgeName}}</b> is a commercial project and can not be modified.</p>
{% else %}
<p>Yes, the source code is available on GitHub, and you can fork and modify it to suit your needs. By the way, please consider starring <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">our repository</a>.</p> 
{% endif %}

### Does ThingsBoard Edge support clustering? 

The **earlier versions** of **ThingsBoard Edge** do not support clustering. It is designed to operate, process and analyze data locally before synchronizing with the central **ThingsBoard Server**.

Starting **with release 4.0**, Edge supports clustering. Multiple **Edge nodes** can be clustered to provide high availability. If one node fails, the others can seamlessly continue to handle workloads.

### Do I need an internet connection to use the ThingsBoard Edge?
<p>No, you can run it completely offline if you need to. The only connection required is to the <b>ThingsBoard Server</b> via <a href="https://grpc.io/" target="_blank">gRPC</a>.</p>
{% if docsPrefix == 'pe/edge/' %}
<p>However, <b>ThingsBoard Edge</b> does utilize an HTTP(s) connection to the <b>ThingsBoard Server</b> to verify the license.
The URL set in the <b>Cloud Endpoint</b> configuration is used for this validation.
Ensure that the HTTP(s) connection to the server is not blocked by any firewall settings.
The ThingsBoard Server acts as a proxy for ThingsBoard Edge to connect to the <a href="https://license.thingsboard.io/login" target="_blank">ThingsBoard License Portal</a>.</p>
{% endif %}

{% if docsPrefix == 'pe/edge/' %}

### How will the license check be carried out if the connection to the ThingsBoard Server is temporarily not available?
<p><b>ThingsBoard Edge</b> can operate offline, without a connection to the <b>ThingsBoard Server</b>, for up to <b>7 days</b>.</p>

{% endif %}

## Installation & Deployment 

### Does the ThingsBoard Edge support multi-tenancy? 
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


### Is there an official Docker image for ThingsBoard Edge?
<p>Yes, official <b>Docker images</b> are available on <b>Docker Hub</b>.</p>

### Can I run ThingsBoard Edge on Raspberry Pi or other edge devices? 
<p>Yes, <b>ThingsBoard Edge</b> is specifically designed to run on a variety of Edge hardware platforms, including single-board computers like <b>Raspberry Pi</b> and other devices with sufficient processing power and memory.</p>

### Where does ThingsBoard Edge store time-series data?
<p>Depending on your database approach, there are two options. If you've chosen a <b>hybrid approach</b>, the time-series data will be stored in <b>Cassandra</b>. Otherwise, the data is stored in the <b>PostgreSQL</b> database, which is well suited for storing and querying entities and local time-series data.</p>

### What should I do if I have legacy devices to connect? 
<p>If you have legacy devices that don't natively speak one of the protocols supported by <b>ThingsBoard Edge</b> (such as MQTT, CoAP, or HTTP), you can still connect them by installing <a href="/docs/iot-gateway/" target="_blank">ThingsBoard IoT Gateway</a>. It will act as a bridge between your legacy devices and <b>ThingsBoard Edge</b>.</p>
<p><b>ThingsBoard IoT Gateway</b> is available out-of-the-box and requires no additional fees.</p>


## Features & Limitations

{% if docsPrefix == "pe/edge/" or docsPrefix contains "pe/edge/" %}

### What features are exclusive to the {{edgeName}}?
<p>The <b>{{edgeName}}</b> includes all the features of the <b>Community Edition</b> plus additional functionality:</p><ul>
<li>White Labeling</li>
<li>Scheduler</li>
<li>Integrations</li>
<li>Custom menu</li>
<li>and more</li></ul>

{% else %}
### What core features are available in the {{edgeName}}?
<p>The <b>{{edgeName}}</b> includes features for:</p><ul>
<li>Device management and telemetry</li>
<li>Rule engine for data processing</li>
<li>Dashboard creation</li>
<li>Support for MQTT, CoAP and HTTP protocols</li>
<li>Open-source extensibility through plugins</li></ul>
{% endif %}

### How many devices can ThingsBoard Edge support? 
{% if docsPrefix == 'pe/edge/' %}
<p>The number of connected devices depends on your <a href="https://thingsboard.io/pricing/?section=thingsboard-edge" target="_blank">subscription plan</a>.</p>
<p>Some plans offer 'Unlimited Devices and Assets, thus there are no soft limits on creating devices and assets on the edge side.</p>
{% else %}
<p><b>ThingsBoard Edge</b> doesn’t impose a fixed limit on the number of devices you can connect.</p>
<p>In practice, the number of devices you can support depends largely on your hardware resources, system configuration, and the specific use case. 
Since <b>ThingsBoard Edge</b> is designed with remote locations with potentially low bandwidth connectivity in mind, we do not recommend connecting more than <b>1000</b> devices to a single edge.</p>
{% endif %}


{% if docsPrefix == "edge/" %}
### Does the Community Edition support white-labeling? 
<p>No, white-labeling is available only in the <b>Professional Edition</b>.</p>
 
{% endif %}

### Can I integrate third-party systems with ThingsBoard Edge?
<p>Yes, you can integrate the <b>ThingsBoard Edge {{edgeName}}</b> with third-party systems through REST APIs.</p>
{% if docsPrefix == "pe/edge/" or docsPrefix contains "pe/edge/" %}
<p>Also, the <a href="/docs/pe/edge/user-guide/integrations/" target="_blank">platform integrations</a> are available for the <b>{{edgeName}}</b>.</p>
{% else %}
<p>However, the <a href="/docs/pe/edge/user-guide/integrations/" target="_blank">platform integrations</a>, which are available only in the <b>Professional Edition</b>, are not included in the <b>Community Edition</b>.</p>
{% endif %}


### What databases does the ThingsBoard Edge support?
<p>The ThingsBoard Edge supports pure SQL or a hybrid SQL + NoSQL (for telemetry storage) approach. For more details on database options, you can check <a href="/docs/{{peDocsPrefix}}reference/#sql-vs-nosql-vs-hybrid-database-approach" target="_blank">here</a>.</p>


### Can I automate device management and telemetry processing?
<p>Yes, you can. The <b>Rules Engine</b> allows for event-based processing and alerts.</p>


### Does Edge {{edgeName}} support OTA (Over-the-Air) firmware updates?
<p>Yes, the {{edgeName}} supports <a href="/docs/{{docsPrefix}}user-guide/ota-updates/" target="_blank">OTA (Over-the-Air)</a> firmware updates.</p>

### Is there a mobile app for ThingsBoard Edge {{edgeName}}?
<p>No, there is no dedicated mobile app for <b>ThingsBoard Edge {{edgeName}}</b>.</p>
<p>However, you can access and manage ThingsBoard Edge through a web browser on any device, including mobile devices, by visiting the ThingsBoard Edge dashboard (typically hosted on port 8080).</p>

### Does ThingsBoard Edge {{edgeName}} support AI or machine learning integrations?
<p>Not natively, but you can incorporate AI or ML into your <b>ThingsBoard Edge</b> deployment using custom development or third-party integrations.</p>

### How do I upgrade to the latest version of ThingsBoard Edge?
<p>In order to upgrade to the latest version of <b>ThingsBoard Edge</b>, please follow <a href="/docs/user-guide/install/{{docsPrefix}}upgrade-instructions/" target="_blank">these instructions</a>.</p>


### How can I connect my device?
<p><b>ThingsBoard Edge</b> supports various protocols, including <a href="/docs/{{docsPrefix}}reference/mqtt-api" target="_blank">MQTT</a>, <a href="/docs/{{docsPrefix}}reference/coap-api" target="_blank">CoAP</a>, <a href="/docs/{{docsPrefix}}reference/http-api" target="_blank">HTTP</a>, and <a href="/docs/{{docsPrefix}}reference/lwm2m-api" target="_blank">LwM2M</a>.</p>
<p>Legacy devices can be connected to the platform via <a href="/docs/iot-gateway/what-is-iot-gateway/" target="_blank">ThingsBoard Gateway</a>. More information is available on the <a href="/docs/{{docsPrefix}}reference/protocols/" target="_blank">connectivity</a> page.</p>
{% if docsPrefix == 'pe/edge/' %}
<p>You can also use the <a href="/docs/user-guide/integrations/" target="_blank">ThingsBoard Integrations</a> to connect devices from different sources and with custom payloads to the edge.</p>
{% endif %}

### Do I need to use a software development kit (SDK)?
<p>No, many IoT devices are not designed to embed third-party SDKs.</p>
<p><b>ThingsBoard Edge</b> provides a simple API over common IoT protocols, so you can choose any client-side library you like, or even use your own. 
Some useful references include <a href="https://github.com/mqtt/mqtt.github.io/wiki/libraries" target="_blank">MQTT client-side libraries list</a> and <a href="https://libcoap.net/" target="_blank">C-implementation for CoAP</a>.</p>

## Support & Community Assistance

### What support options are available for the {{edgeName}}?
{% if docsPrefix == "pe/edge/" or docsPrefix contains "pe/edge/" %}
<p>All subscriptions include optional support.</p>
<p>Also, support can be provided by the <b>ThingsBoard community</b></p>
{% else %}
<p>Support for the <b>Community Edition</b> is primarily community-driven, including:</p>
{% endif %}
<ul>
<li><a href="https://stackoverflow.com/questions/tagged/thingsboard" target="_blank">Community Forums:</a> Engage with other users and developers.</li>
<li><a href="https://github.com/thingsboard/thingsboard-edge/issues" target="_blank">GitHub Issues:</a> Report bugs or request features.</li>
<li><a href="/docs/{{docsPrefix}}" target="_blank">Documentation:</a> Comprehensive guides and API references available on the ThingsBoard Documentation.</li>
</ul>


{% if docsPrefix == "pe/edge/" or docsPrefix contains "pe/edge/" %}

### What is optional support?
<p>This means that Edge support is not bundled with the license. For now, we provide basic support to customers with more than 25 Edge licenses of any type.</p>

### Refund and Delivery Policy
<p><b>Refund Policy</b></p>
<p>The License fee is non-refundable, regardless of any circumstances. 
Customers may manage their subscription plans: update or cancel them. Once the subscription is deleted before expiration, Stripe will keep the balance. 
After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. 
This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.</p>
<p><b>Delivery Policy</b></p>
<p>The software is available for download and installation from our website. 
See <a href="/docs/user-guide/install/pe/edge/installation-options/" target="_blank">Installation Guides</a>for more details. 
In order to activate the software you will need to obtain the license key. 
Instruction how to obtain and use the license key is provided in the installation guide. 
See <a href="https://www.youtube.com/watch?v=dK-QDFGxWek" target="_blank">How-to get pay-as-you-go</a> subscription or <a href="https://www.youtube.com/watch?v=dK-QDFGxWek" target="_blank">How-to get perpetual license</a> for more details. 
Please <a href="/docs/contact-us/" target="_blank">contact us</a> if you have any questions or require support.</p>

### How can I contact ThingsBoard support for billing-related issues?
<p>You can use the <a href="/docs/contact-us/" target="_blank">contact us</a> form and select the "Other" topic. Our account managers will assist you with any billing-related issues.</p>

### Do you offer 24/7 customer support?
<p>Yes, we do provide 24/7 support. If this is what you're looking for, please <a href="/docs/contact-us/" target="_blank">contact us</a> for a more detailed discussion about your specific needs.</p>

{% else %}
### What should I do if I find a bug in Community Edition?
<p>You can report it on <a href="https://github.com/thingsboard/thingsboard-edge/issues" target="_blank">GitHub Issues</a>, and the open-source community may help fix it.</p>

### Can I contribute to the development of ThingsBoard Edge Community Edition?
<p>Yes! Pull requests and contributions are welcome on <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">GitHub</a>. By the way, please consider starring our repository.</p>

### Is official support available for the Community Edition?
<p>No, official support is not included in the <b>Community Edition</b>. For official support, consider upgrading to a paid edition.</p>

{% endif %}

{% if docsPrefix == "edge/" %}
## Upgrading to the Professional Edition

### Can I upgrade from the Community Edition to a paid edition?
<p>Yes, upgrading is straightforward. Contact the <a href="/docs/contact-us/" target="_blank">ThingsBoard Sales Team</a> or visit the <a href="/pricing/?section=thingsboard-edge" target="_blank">Pricing Page</a> to select a suitable paid plan. The transition will be guided to ensure data integrity and feature migration.</p>


### How do I start a free trial?
<p>The Edge free trial license key provided when you create Edge instance inside <a href="/pricing/" target="_blank">ThingsBoard Professional Edition</a> or <a href="/pricing/?product=thingsboard-cloud" target="_blank">Cloud</a>. 
This key is only active for <b>30 days</b> after activation. 
To obtain the permanent license key for Edge, please navigate to the <a href="/pricing/?section=thingsboard-edge" target="_blank">pricing page</a> and select the best licensing option for your case.</p>

{% endif %}



