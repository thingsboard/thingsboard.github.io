* TOC
{:toc}

## Overview

The **Asset entity** is an abstract entity that helps group and manage the IoT ecosystem. **Assets** represent real-world objects such as factories, vehicles, warehouses,  etc., and establish a relational hierarchy between these objects and other entities.
**Edge Assets** enable grouping of Edge entities and visualizing the data they send. This approach applies whenever the devices or transmitted data are specific to a particular Edge.

**Edge Assets** are designed in the same way as the **Cloud Assets**. Please refer to the [Assets documentation](/docs/{{peDocsPrefics}}user-guide/ui/assets/){:target="_blank"} to gain a general understanding of its functionality.

## Edge Asset Management

The **Asset entity** can be created and configured locally on the **Edge** instance, in the same way as on the **Cloud**. If the **Asset entity** has been created on the **Cloud**, it must be [assigned](/docs/{{docsPrefix}}config/provision-asset/#provisioning-from-cloud){:target="_blank"} to the **Edge** instance before use.

### Creating a New Asset

To create the **Asset entity** on the **Edge**, log in to your instance and go to the **Entities > Assets** section.

{% include images-gallery.html imageCollection="createAssetOnEdge" showListImageTitles="true" %}

### Creating Relations

Several parameters define the [relation hierarchy](/docs/{{peDocsPrefix}}user-guide/entities-and-relations/#relations){:target="_blank"} between the entities:
* **Direction:** Describes how the entities are associated with each other.
  * **"Outbound relation - From":** Indicates that the **relation originates from the entity (the entity is a source)**.
  * **"Inbound relation - To":** Indicates that the **relation points to the entity (the entity is a recipient)**. 
* **Relation type:** Describes the nature of the connection between the entities.
  * **"Contains":** Indicates that the entity **is a part of another entity** (e.g., _Device A is the part of Asset A_).
  * **"Manages":** Indicates that the entity **is responsible for another entity** (e.g., _Asset A manages Device A_).

To **construct relations** between the Asset and another entity (e.g., _device_), go to the **Entities > Assets** section and do the following:

{% include images-gallery.html imageCollection="deviceToAsset" showListImageTitles="true" %}

### Using Relations in Dashboards

Once the relations between the entities are established, they can be **reflected on a dashboard**. Transmitted data from asset-related devices can be **dynamically filtered by relation type** with [aliases](/docs/{{peDocsPrefix}}user-guide/ui/aliases/){:target="_blank"}.

To configure an **alias**, go to the **Dashboards** section and enter the **Edit mode** for a new or existing dashboard. Read on **how to create the dashboard** [here](/docs/{{docsPrefix}}user-guide/db-overview/#the-edge-dashboard-creation-and-management){:target="_blank"}.

{% include images-gallery.html imageCollection="alias" showListImageTitles="true" %}

Continue with the configuration of a widget. Within the **"Edit mode"**, click the **"Add widget"** button to add the widget. Select the **Charts > Time series chart** widget. Read more about **how to add and configure a new widget** [here](/docs/{{peDocsPrefix}}user-guide/widgets/#adding-a-widget-to-the-dashboard){:target="_blank"}.

{% include images-gallery.html imageCollection="dashboard" showListImageTitles="true" %}

## Provisioning From Cloud

To provision the **Asset entity** from the **ThingsBoard Cloud** to the **Edge** instance, log in to the **Cloud** and go to the **Edge management > Instances** section:

{% include images-gallery.html imageCollection="provisioning" showListImageTitles="true" %}
### Next Steps

{% include templates/edge/guides-banner-edge.md %}