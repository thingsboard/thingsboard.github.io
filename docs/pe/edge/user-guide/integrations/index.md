---
layout: docwithnav-pe-edge
title: Edge Integrations
description: Edge Integrations Documentation
converterTemplateCreation:
    0:
        image: /images/pe/edge/integrations/create-converter-step-1.webp
        title: 'Create Converter template'
    1:
        image: /images/pe/edge/integrations/create-converter-step-2.webp
        title: 'Converter template configuration'

integrationTemplateCreation:
    0:
        image: /images/pe/edge/integrations/create-integration-step-1.webp
        title: 'Create Integration template'
    1:
        image: /images/pe/edge/integrations/create-integration-step-2.webp
        title: 'Integration template configuration'

placeholderFeature:
    0:
        image: /images/pe/edge/integrations/placeholder-feature-step-1.webp
        title: 'Go to the <b>Edge management > Instances</b> section, click it and select the <b>"Attributes"</b> tab. Add the <b>ipAddress</b> attribute to Edge.'
    1:
        image: /images/pe/edge/integrations/placeholder-feature-step-2.webp
        title: 'Go to the <b>Edge management > Instances</b> section, click it and add the <b>${{ipAddress}}</b> placeholder to the Integration configuration.'
    2:
        image: /images/pe/edge/integrations/placeholder-feature-step-3.webp
        title: 'Go back to the <b>Edge management > Instances</b> section and click the <b>Manage Integrations</b> button of the corresponding Edge entity.'
    3:
        image: /images/pe/edge/integrations/placeholder-feature-step-4.webp
        title: 'To assign the Integration to the Edge, click the <b>"Assign to edge"</b> button and select it from the drop-down menu. To proceed, click the <b>"Assign"</b> button.'
    4:
        image: /images/pe/edge/integrations/placeholder-feature-step-5.webp
        title: 'To confirm that the placeholder is replaced by the attribute value, log in to your <b>ThingsBoard Edge</b> instance, go to the <b>Integration center > Integrations</b> section and click the integration.'

missingPlaceholder:
    0:
        image: /images/pe/edge/integrations/missing-placeholder.webp
        title: 'Add ipAddress attribute to Edge'

---

* TOC
{:toc}

{% assign sinceVersion = "3.4" %}
{% include templates/edge/since-edge.md %}

### Overview

**Edge Integrations** are similar to [Platform Integrations](/docs/user-guide/integrations/){: target="_blank"}. 
The only major difference is how integrations and converters are configured. 

To reuse the same integration across multiple Edges, **Integration templates** and **Converter templates** have been introduced. 

**Integration templates** are created in the **Cloud**, but they are not regular platform integrations and are not launched in the Cloud.  
They are assigned to the **Edge** and launched once they are deployed to the **Edge**.

At the moment, **Integration and Converter templates cannot be modified on the Edge**. They are modified in the **Cloud**, and any changes are automatically propagated from the **Cloud** to the **Edge**.

Integration configuration fields (URIs, passwords, etc.) could be replaced by **Edge attribute** value using **placeholders**. 
This way, a single **Integration template** could be used by multiple **Edges**, and any specific integration configuration field could be replaced by an **Edge attribute value**.

### Deployment options

**ThingsBoard Integration** has two deployment options: embedded and remote. See the details and architecture diagrams below.

#### Embedded integrations

**Embedded integration** runs in the main **ThingsBoard Edge** process. 

**Pros**:
* Simplifies deployment of new integration (just a few clicks on the ThingsBoard UI);
* Minimizes latency for message delivery;

**Cons**:
* Consumes resources allocated to the main **ThingsBoard Edge** process (_network connections, OS threads, and CPU cycles_);
* Low level of isolation;

<object width="60%" data="/images/user-guide/integrations/embeded-integrations-overview.svg" style="display: block; margin: auto"></object>

#### Remote integrations

It is possible to install the **remote integration** on the local network and to stream the data to the edge over the network.

Let's assume you have local MQTT broker or OPC-UA server deployed on-premises.
Those brokers and/or servers don't have a dedicated external IP address, so ThingsBoard Edge can't connect to them directly.
However, you can install remote integration close to this edge, in the same local network.
This integration will connect to the broker/edge, pull the data and store it in the local file system.
Remote integration will stream the data to the ThingsBoard Edge deployed in the network once the network connection is available.

Pros:
* Enables integration with servers deployed on the local network; 
* Isolates the integration process from the main **ThingsBoard Edge** process.

Cons:
* Requires the installation of a separate package;

Learn how to configure integration to run remotely in [this guide](/docs/pe/edge/user-guide/integrations/remote-integrations){: target="_blank"}.

<object width="70%" data="/images/user-guide/integrations/remote-integrations-overview.svg" style="display: block; margin: auto"></object>

### Converter templates

Converter templates can only be created by a tenant administrator.
To create a Converter template, log in to the **Cloud** and go to the **Edge management > Converter templates** section.
These **Converter templates** are going to be used later in the **Integration templates** configuration.

{% include images-gallery.html imageCollection="converterTemplateCreation" %}

{% capture converter-templates %}
There is no need to assign converter templates to the **Edge** — once an integration template is assigned to a specific **Edge**, 
the corresponding Uplink and Downlink Converters are automatically made available to the **Edge**.
{% endcapture %}
{% include templates/info-banner.md content=converter-templates %}

### Integration templates

Once the **Converter template** is created, to create an integration template, go to the **Edge management > Integration templates** section.
These Integration templates are going to be assigned to the Edge.

{% include images-gallery.html imageCollection="integrationTemplateCreation" %}

#### Integration configuration placeholders

In most cases, integration has common configuration part for most of the Edges, except for some specific field(s).
To use the same **Integration template** for multiple **Edges** while allowing **certain values to be unique** for each Edge, you can use the **placeholders** feature.
You can **add specific attributes to the Edge** and then use the name of this attribute in the integration template.
This placeholder will be replaced by the attribute value during assignment to the edge.

Let's look at an example of how **HTTP integration** could be configured with a unique **IP address** value per Edge as the **Base URL**.

{% include images-gallery.html imageCollection="placeholderFeature" showListImageTitles="true" %}

You can assign this integration template to other Edge entities, and each integration on the Edge will have its unique **'Base URL'** value that's replaced by the attribute value.

If a particular **Edge** is missing a placeholder attribute key, the **Platform** will notify you of this during the **Edge** mapping or integration configuration update:

{% include images-gallery.html imageCollection="missingPlaceholder" %}

### Edge limitations

In the current release, **Edge** is unable to create customers and entity groups. Note that this limitation affects the functionality of the **Uplink Data Converter**:
* If a non-existent **device type** is used in the converter, the 'default' device type is used.
* if a **Customer** is not available on the Edge, the device is assigned to the **Tenant**.
* If the **entity group** does not exist on the edge, the **'All'** group gets used.

### See Also

Explore guides and video tutorials for specific integrations:

 - [HTTP](/docs/pe/edge/user-guide/integrations/http/){: target="_blank"}
 - [MQTT](/docs/pe/edge/user-guide/integrations/mqtt/){: target="_blank"}
 - [CoAP](/docs/pe/edge/user-guide/integrations/coap/){: target="_blank"}
 - [OPC-UA](/docs/pe/edge/user-guide/integrations/opc-ua/){: target="_blank"}
 - [TCP](/docs/pe/edge/user-guide/integrations/tcp/){: target="_blank"}
 - [UDP](/docs/pe/edge/user-guide/integrations/udp/){: target="_blank"}
 
### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}




