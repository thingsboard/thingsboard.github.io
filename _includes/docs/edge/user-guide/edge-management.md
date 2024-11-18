* TOC
{:toc}

## Overview

**ThingsBoard** offers two distinct deployment options: **ThingsBoard Edge** and **ThingsBoard Cloud**.

**ThingsBoard Edge** is designed specifically for local, distributed data processing, enabling data analysis and management directly at the source of data generation. This approach allows for local processing, storage, and immediate response to critical situations, even without a continuous connection to the central server. For more information, see the [What is ThingsBoard Edge](/docs/{{docsPrefics}}getting-started-guides/what-is-edge/){: target="_blank"} article.

In contrast, **ThingsBoard Cloud**, is a fully managed, scalable, and fault-tolerant platform hosted in the cloud and dependent on an internet connection. While an **on-premises installation** can function without one, it does not offer the same inherent support for distributed data syncing. For more information, see the [What is ThingsBoard](/docs/{{peDocsPrefics}}getting-started-guides/what-is-thingsboard/){: target="_blank"} article.

## Synchronization Architecture

**ThingsBoard Edge** and **ThingsBoard Cloud** communicate using the [gRPC (Remote Procedure Call) protocol](https://grpc.io/){: target="_blank"}. This communication channel allows for efficient data synchronization between edge devices and the cloud server, enabling a seamless flow of messages while minimizing overhead and latency.

To optimize this process, messages are serialized using [Protocol Buffers (ProtoBuf)](https://github.com/protocolbuffers/protobuf){: target="_blank"}.

All messages sent from **ThingsBoard Edge** to **ThingsBoard Cloud** are stored in a local **PostgreSQL** table **(cloud_event table)** prior to transmission. This allows **ThingsBoard Edge** to operate without connectivity to the Cloud. Once a connection is established, all messages in the local **cloud_event table** are sent to the **Cloud** and marked as successfully transferred.

To view the list of messages transferred from the **Cloud** to the **Edge**, go to the **Edge management > Instances** section of your Cloud (Server), click on the **Edge** and select the **"Downlinks"** tab:

{% include images-gallery.html imageCollection="downlinks" %}

#### Force Synchronization Procedure

During a network outage, or some other communication problem **ThingsBoard Edge** could become out of sync from the **Cloud**. The Edge instance continues operating independently, collecting telemetry data, processing device events, and applying local rules. However, this data and state changes does not reach the Cloud, leading to inconsistencies.

To ensure that both the **ThingsBoard Edge** and **Cloud** are aligned to deliver accurate and efficient IoT functionality, user is able to force synchronization process. 

To force synchronization procedure, go to the **Edge management > Instances** section of your Cloud (Server), click on the **Edge** and then, click the **"Sync Edge"** button:

{% include images-gallery.html imageCollection="forceSync" %}

## Entities Management

No **entities** can be created locally on **ThingsBoard Edge**, except for the **Device** entity. To enable the use of other entities on the **Edge**, these entities must be **assigned** to the **Edge** prior to use.

To **assign** specific entities to the **Edge**, log in to your **Cloud** and navigate to the **Edge management > Instances** section:

{% include images-gallery.html imageCollection="instancesSection" showListImageTitles="true" %}

Once you'll assign any entity to specific Edge, this entity will be pushed to the Edge event queue.
If connection between edge and cloud is active, then assigned entity will be created on the Edge instantly.
In case Edge is not connected to the Cloud, entity will be created once connection is established.


## Next Steps

{% include templates/edge/guides-banner-edge.md %}
