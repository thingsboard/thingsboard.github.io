* TOC
{:toc}

## Overview

The **Asset entity** is an abstract entity that helps group and manage the IoT ecosystem. **Assets** represent real-world objects such as factories, vehicles, warehouses, etc., and create a relation hierarchy between these objects and devices.
**Edge Assets** allow for grouping Edge devices and visualizing the data they send. This approach applies whenever the devices or transmitted data are specific to a particular Edge.

**Edge Assets** are designed in the same way as the **Cloud Assets**. Please read the [Assets documentation](/docs/{{peDocsPrefics}}user-guide/ui/assets/){:target="_blank"} to gain a general understanding of its functionality.

## Edge Asset Management

ThingsBoard allows to create and manage Asset entity locally, however, cloud provides better flexibility.

#### Creating a New Asset on Edge
To create the **Asset entity** locally on the **Edge**, log in to your instance and go to the **Entities > Assets** section.

{% include images-gallery.html imageCollection="createAssetOnEdge" showListImageTitles="true" %}

#### Creating Relations From Edge
To assign another entity to the Edge 
Step 1: Create a Relation Between the Asset and Device

Navigate to the Devices section in the ThingsBoard UI.
    Select the device you want to assign to the asset.
    Open the device details and click the Relations tab.
    Click the Add Relation button:
        From Type: Asset
        From Name: Select the asset you want to associate with this device.
        Relation Type: You can use a predefined relation type (e.g., "Contains") or define your own (e.g., "BelongsTo").
    Save the relation.

Step 2: Verify the Relation in the Asset

Go to the Assets section and open the asset details.
    Click the Relations tab.
    Confirm that the newly added relation appears in the list, showing the linked device.

#### How to Use These Relations in Dashboards

This approach ensures that your dashboards reflect the data and telemetry from assets and their related devices, creating a seamless integration for monitoring and control.
Once devices are linked to an asset through relations, you can use this relationship to configure dashboards:

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