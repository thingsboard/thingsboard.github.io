* TOC
{:toc}
## Overview of Key Differences

**ThingsBoard** offers two distinct deployment options: **ThingsBoard Edge** and **ThingsBoard Cloud**.

**ThingsBoard Edge** is designed specifically for local, distributed data processing, enabling data analysis and management directly at the source of data generation. This approach allows for local processing, storage, and immediate response to critical situations, even without a continuous connection to the central server.

In contrast, **ThingsBoard Cloud**, is a fully managed, scalable, and fault-tolerant platform hosted in the cloud and dependent on an internet connection. While an **on-premises installation** can function without an internet connection, it does not offer the same inherent support for distributed data syncing.

## Synchronization Architecture

**ThingsBoard Edge** and **ThingsBoard Cloud** communicate using the [gRPC (gRPC Remote Procedure Call) protocol](https://grpc.io/){: target="_blank"}. This communication channel allows for efficient data synchronization between edge devices and the cloud server, enabling a seamless flow of messages while minimizing overhead and latency.

To optimize this process, messages are serialized using [Protocol Buffers (ProtoBuf)](https://github.com/protocolbuffers/protobuf){: target="_blank"}.

All messages sent from **ThingsBoard Edge** to **ThingsBoard Cloud** are stored in a local **PostgreSQL** table **(cloud_event table)** prior to transmission. 

This allows **ThingsBoard Edge** to operate without connectivity to the Cloud. Once a connection is established, all messages in the local **cloud_event table** are sent to the **Cloud** and marked as successfully transferred.

To view the list of messages transferred from the **Cloud** to the **Edge**, go to the Edge management > Instances section, click on the Edge and select the **"Downlinks"** tab:

{% include images-gallery.html imageCollection="downlinks" %}

![image](/images/edge/sync/downlink-events.png)

#### Force synchronization procedure

In case of network outage, or some other communication problem ThingsBoard Edge could become out of sync from the cloud.
User is able to force synchronization process by clicking on the **Sync Edge** button:

![image](/images/edge/sync/sync-button.png)

### Entities management on cloud

At the moment ThingsBoard Edge is not able to create any entity locally, except **Device** entity.
To be able to use other entities on the edge, User must *'assign'* these entities to the edge prior usage.

User can *'assign'* specific entities to the edge using **Edge** entity card.

Once you'll assign any entity to specific edge this entity will be pushed to the edge event queue.
If connection between edge and cloud is active then assigned entity will be created on the edge instantly.
If at the moment edge not connected to the cloud then entity will be created once connection established.


#### Next Steps

{% assign currentGuide = "EdgeManagementOverview" %}
{% assign docsPrefix = "edge/" %}
{% include templates/edge/guides-banner-edge.md %}
