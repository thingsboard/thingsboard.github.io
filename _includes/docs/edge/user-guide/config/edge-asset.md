* TOC
{:toc}

## Overview

The **Asset entity** is an abstract entity that helps group and manage the IoT ecosystem. **Assets** represent real-world objects such as factories, vehicles, warehouses, etc., and create a relation hierarchy between these objects and other entities.
**Edge Assets** allow for grouping Edge entities and visualizing the data they send. This approach applies whenever the devices or transmitted data are specific to a particular Edge.

**Edge Assets** are designed in the same way as the **Cloud Assets**. Please read the [Assets documentation](/docs/{{peDocsPrefics}}user-guide/ui/assets/){:target="_blank"} to gain a general understanding of its functionality.

## Edge Asset Management

The **asset entity** can be created on the **Edge** or the **Cloud**, and then be associated with the Edge. However, the way the relations are made is different.

#### Creating a New Asset on Edge

To create the **Asset entity** locally on the **Edge**, log in to your instance and go to the **Entities > Assets** section.

{% include images-gallery.html imageCollection="createAssetOnEdge" showListImageTitles="true" %}

#### Creating Relations From Edge

On the **Edge** instance, the relations are constructed **from the entity to the asset**. For example, to assign an edge device to an edge asset right on your instance, go to the **Entities > Devices** section and select or [create the device](/docs/{{docsPrefix}}config/create-device/#creating-device-on-edge-instance){:target="_blank"} you want to assign:

{% include images-gallery.html imageCollection="deviceToAsset" showListImageTitles="true" %}

#### How to Use These Relations in Dashboards

These relations can be used in dashboard configurations to reflect the asset's data and related devices. Go to the **Dashboards** section and select or [create a new dashboard](/docs/{{docsPrefix}}user-guide/db-overview/#the-edge-dashboard-creation-and-management){:target="_blank"}.

{% include images-gallery.html imageCollection="dashboard" showListImageTitles="true" %}

Create Entity Aliases:
        In your dashboard, create an alias that dynamically selects all devices related to the asset.
        Use a relation query to filter devices based on the relation type (e.g., "Contains").

Add Widgets:
        Configure widgets to visualize data from the devices linked to the asset.
        Use the entity alias for data binding.

## Provisioning From Cloud
Please use 'Edge Assets' icon to navigate to assets that are *'assigned'* to specific edge entity.
User is able to assign to edge any asset that he has access to.

### Next Steps

{% include templates/edge/guides-banner-edge.md %}