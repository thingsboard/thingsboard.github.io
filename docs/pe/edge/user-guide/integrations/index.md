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
        title: 'Login to your ThingsBoard <b>PE Edge</b> instance and open Integrations page - placeholder is going to be replaced by attribute value'

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

### How it works?

#### Converter templates

Converter templates could be created only by Tenant administrator. 
Go to Cloud and navigate to **Edge management -> Converter templates** page.
This page allows you to create Converter template. These Converter templates are going to be used later in Integration templates configuration.

{% include images-gallery.html imageCollection="converterTemplateCreation" showListImageTitles="true" %}

You do not need to assign Converter templates to the Edge - once Integration template is assigned to specific Edge, related Uplink/Downlink Converters are provisioned to the Edge automatically.

#### Integration templates

Once Converter template was created you can navigate to **Edge management -> Integration templates** page to create Integration.
This page allows you to create Integration template. These Integration templates are going to be assigned to the Edge.

{% include images-gallery.html imageCollection="integrationTemplateCreation" showListImageTitles="true" %}

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
 - [AWS IoT](/docs/pe/edge/user-guide/integrations/aws-iot/)
 - [AWS Kinesis](/docs/pe/edge/user-guide/integrations/aws-kinesis/)
 - [IBM Watson IoT](/docs/pe/edge/user-guide/integrations/ibm-watson-iot/)
 - [Azure Event Hub](/docs/pe/edge/user-guide/integrations/azure-event-hub/)
 - [Azure IoT Hub](/docs/pe/edge/user-guide/integrations/azure-iot-hub/)
 - [Actility ThingPark](/docs/pe/edge/user-guide/integrations/thingpark/)
 - [SigFox](/docs/pe/edge/user-guide/integrations/sigfox/)
 - [OceanConnect](/docs/pe/edge/user-guide/integrations/ocean-connect/)
 - [TheThingsNetwork](/docs/pe/edge/user-guide/integrations/ttn/)
 - [OPC-UA](/docs/pe/edge/user-guide/integrations/opc-ua/)
 - [TCP](/docs/pe/edge/user-guide/integrations/tcp/)
 - [UDP](/docs/pe/edge/user-guide/integrations/udp/)
 
## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}




