---
layout: docwithnav-pe-edge
title: Edge Integrations
description: Edge Integrations Documentation
converterTemplateCreation:
    0:
        image: /images/pe/edge/integrations/create-converter-step-1.png
        title: 'Create Converter template'
    1:
        image: /images/pe/edge/integrations/create-converter-step-2.png
        title: 'Converter template configuration'

integrationTemplateCreation:
    0:
        image: /images/pe/edge/integrations/create-integration-step-1.png
        title: 'Create Integration template'
    1:
        image: /images/pe/edge/integrations/create-integration-step-2.png
        title: 'Integration template configuration'

placeholderFeature:
    0:
        image: /images/pe/edge/integrations/placeholder-feature-step-1.png
        title: 'Add <b>ipAddress</b> attribute to Edge'
    1:
        image: /images/pe/edge/integrations/placeholder-feature-step-2.png
        title: 'Add placeholder <b>${{ipAddress}}</b> to Integration configuration'
    2:
        image: /images/pe/edge/integrations/placeholder-feature-step-3.png
        title: 'Click <b>Manage Integrations</b> button of Edge entity'
    3:
        image: /images/pe/edge/integrations/placeholder-feature-step-4.png
        title: 'Assign Integration to the Edge'
    4:
        image: /images/pe/edge/integrations/placeholder-feature-step-5.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open Integrations page - placeholder is going to be replaced by attribute value'

missingPlaceholder:
    0:
        image: /images/pe/edge/integrations/missing-placeholder.png
        title: 'Add ipAddress attribute to Edge'

---

* TOC
{:toc}

{% assign sinceVersion = "3.4" %}
{% include templates/since.md %}

{% include templates/edge/integrations/edge-pe-reference.md %}

### Overview

Edge Integrations feature was designed in a similar way as Platform Integrations. The only major difference is in the way how integrations and converters are configured. 

To reuse same Integration between multiple Edges, **Integration templates** and **Converter templates** approach was introduced. 

Integration templates are created on the Cloud, but these templates are not regular Platform Integrations and *not started* on the cloud. 
They are assigned to the Edge and *started* once they are provisioned to the Edge.

At the moment Integrations and Converters can not be modified on the Edge - they are modified on the Cloud and all the modifications automatically propagated to the Edge from the Cloud.

Integration configurations fields (URIs, passwords, etc.) could be replaced by Edge attribute value with a help of placeholders. 
In this way, single Integration template could be used by multiple Edges, and any specific configuration field of the Integration could be replaced by Edge attribute value.

### Deployment options

ThingsBoard Integration has two deployment options: embedded and remote. See details and architecture diagrams below.

#### Embedded integrations

Embedded integration is running in the main ThingsBoard Edge process. 

Pros:
* simplifies deployment of new integration (just few clicks on ThingsBoard UI);
* minimize latency for message delivery;

Cons:
* consume resources allocated to main ThingsBoard Edge process: network connections, OS threads and CPU cycles;
* low level of isolation;

<object width="60%" data="/images/user-guide/integrations/embeded-integrations-overview.svg"></object>

#### Remote integrations

One can install remote integration in the local network and stream data to the edge over network.

Let's assume you have local MQTT broker or OPC-UA server deployed on-premises.
Those brokers and/or servers don't have dedicated external IP address, so ThingsBoard Edge can't connect to them directly.
However, you can install remote integration close to this edge, in the same local network.
This integration will connect to the broker/edge, pull the data and store it in the local file system.
Remote integration will stream the data to the ThingsBoard Edge deployed in the network once the network connection is available.

Pros:
* enables integration with servers deployed in the local network;
* isolates the integration process from main ThingsBoard Edgeprocess;

Cons:
* requires installation of a separate package;

Learn how to configure integration to run remotely using [this guide](/docs/pe/edge/user-guide/integrations/remote-integrations).

<object width="70%" data="/images/user-guide/integrations/remote-integrations-overview.svg"></object>

### Converter templates

Converter templates could be created only by Tenant administrator. 
Go to Cloud and navigate to **Edge management -> Converter templates** page.
This page allows you to create Converter template. These Converter templates are going to be used later in Integration templates configuration.

{% include images-gallery.html imageCollection="converterTemplateCreation" %}

You do not need to assign Converter templates to the Edge - once Integration template is assigned to specific Edge, related Uplink/Downlink Converters are provisioned to the Edge automatically.

### Integration templates

Once Converter template was created you can navigate to **Edge management -> Integration templates** page to create Integration.
This page allows you to create Integration template. These Integration templates are going to be assigned to the Edge.

{% include images-gallery.html imageCollection="integrationTemplateCreation" %}

#### Integration configuration placeholders

In most of the cases, Integration have common configuration part for most of the Edges, except some specific field(s).
To be able to use the same Integration template for multiple Edges, with some unique values between Edges, placeholders feature could be used.
You are able to add specific attributes to the Edge, and then use name of this attribute in the Integration template.
This placeholder is going to be replaced by attribute value during the assignment to the Edge.

Let's see on example how HTTP Integration could be configured with unique IP Address value per Edge as 'Base URL'.

{% include images-gallery.html imageCollection="placeholderFeature" showListImageTitles="true" %}

You can assign this Integration template to other Edge entities, and every Integration on the Edge is going to have it's unique **'Base URL'** value, that is replaced by attribute value.

If specific Edge is missing placeholder attribute key, Platform will notify regarding it during the assignment to Edge or Integration configuration update:

{% include images-gallery.html imageCollection="missingPlaceholder" %}

### Edge limitations

In the current version, Edge is not able to create customers, device profiles and entity groups. 
These limitations affect Uplink Data converter functionality:

* If non-existent device type used in the Converter, **'default'** device type will be used.
* Same applies to the customer - if customer is not available on the Edge, device will be assigned to Tenant.
* If entity group non-exists on the edge - 'All' group is going to be used.

### See Also

Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/pe/edge/user-guide/integrations/http/)
 - [MQTT](/docs/pe/edge/user-guide/integrations/mqtt/)
 - [CoAP](/docs/pe/edge/user-guide/integrations/coap/)
 - [OPC-UA](/docs/pe/edge/user-guide/integrations/opc-ua/)
 - [TCP](/docs/pe/edge/user-guide/integrations/tcp/)
 - [UDP](/docs/pe/edge/user-guide/integrations/udp/)
 
## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}




