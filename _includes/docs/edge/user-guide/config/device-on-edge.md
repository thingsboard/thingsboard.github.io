* TOC
{:toc}

## Overview

The **Edge Devices** are basic IoT entities that can generate telemetry data and process RPC commands. They are physical objects, such as sensors, actuators, switches, etc. that can collect, process and transmit data locally or to a nearby network, rather than relying solely on a centralised Cloud system.

To better understand **Devices** as entities in the context of the **ThingsBoard platform**, please refer to [this documentation](/docs/{{peDocsPrefix}}user-guide/ui/devices/){:target="_blank"}.

## Device Management on Edge Instance

A **Device** entity can be created directly on the **Edge instance** and automatically pushed to the **Cloud (Server)** once a connection is established. Any changes made to the **Device** entity are seamlessly provisioned to the **Cloud (Server)** without requiring additional action, ensuring that updates are synchronized across all **Edge** instances.

Once the **Device** is created on the **Edge instance**, it is also pushed for creation on the **Cloud (Server)**, ensuring consistency and efficient management of the entire system.

## Creating Device on Edge Instance
{% capture local-deployment %}
Before you create a **Device**, make sure to create and configure a [Device Profile](/docs/{{peDocsPrefix}}user-guide/device-profiles/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

You can create and provision **Device** manually, deploy multiple devices from a CSV file with a [Bulk Provisioning](/docs/{{peDocsPrefix}}user-guide/bulk-provisioning/){:target="_blank"} option, or use the [REST API](/docs/{{peDocsPrefix}}api/){:target="_blank"} for programmatic deployment.
To create the **Device** manually, follow these instructions:

{% include images-gallery.html imageCollection="create-device" showListImageTitles="true" %}

## Assigning Devices from Cloud to Edge

**Devices** can be created on **Cloud (Server)** and then provisioned to the **Edge instance**. 
Log in to your **Server (Cloud)** and go to the **Edge management > Instances** section.

{% include images-gallery.html imageCollection="assignment-from-cloud" showListImageTitles="true" %}

## Next Steps

{% include templates/edge/guides-banner-edge.md %}

