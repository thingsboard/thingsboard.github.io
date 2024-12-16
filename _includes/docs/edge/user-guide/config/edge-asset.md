* TOC
{:toc}

## Overview

The **Asset entity** is an abstract entity that helps group and manage the IoT ecosystem. **Assets** represent real-world objects such as factories, vehicles, warehouses,  etc., and create a relation hierarchy between these objects and other entities.
**Edge Assets** allow for grouping Edge entities and visualizing the data they send. This approach applies whenever the devices or transmitted data are specific to a particular Edge.

**Edge Assets** are designed in the same way as the **Cloud Assets**. Please read the [Assets documentation](/docs/{{peDocsPrefics}}user-guide/ui/assets/){:target="_blank"} to gain a general understanding of its functionality.

## Edge Asset Management

The **Asset entity** can be created and configured locally, on the **Edge** instance, in a same way as on the **Cloud**. If the **Asset entity** has been created on the **Cloud**, it must be [assigned](/docs/{{docsPrefix}}config/provision-asset/#provisioning-from-cloud){:target="_blank"} to the **Edge** before use.

#### Creating a New Asset

To create the **Asset entity** locally on the **Edge**, log in to your instance and go to the **Entities > Assets** section.

{% include images-gallery.html imageCollection="createAssetOnEdge" showListImageTitles="true" %}

#### Creating Relations

Several parameters define the [relation hierarchy](/docs/{{peDocsPrefix}}user-guide/entities-and-relations/#relations){:target="_blank"} between the entities:
* **Direction:** It describes how the entities are associated with each other.
  * The **"Outbound relation - From"** direction indicates that the **relation originates from the entity (it is the source)**.
  * The **"Inbound relation - To"** direction indicates that the **relation points to the entity (it is the recipient)**. 
* **Relation type:** It describes the nature of the connection between entities.
  * The **"Contains"** type indicates that the entity **is a part of another entity** (e.g., Device A is the part of Asset A).
  * The **"Manages"** type indicates that the entity **is responsible for another entity** (e.g., Asset A manages Device A).

To **construct the relation** between the Asset and another entity (e.g., device), go to the **Entities > Assets** section and do the following:

{% include images-gallery.html imageCollection="deviceToAsset" showListImageTitles="true" %}

#### How to Use Relations in Dashboards

Once the relations between the entities have been established, they can be **reflected on a dashboard**. The transmitted data from the asset-related devices can be **dynamically filtered by relation type** with [aliases](/docs/{{peDocsPrefix}}user-guide/ui/aliases/){:target="_blank"}.

To configure the **alias**, go to the **Dashboards** section and select or [create](/docs/{{docsPrefix}}user-guide/db-overview/#the-edge-dashboard-creation-and-management){:target="_blank"} a new dashboard.

{% include images-gallery.html imageCollection="alias" showListImageTitles="true" %}

Configure the **"Time series chart"** widget with the **alias** as its datasource:

{% include images-gallery.html imageCollection="dashboard" showListImageTitles="true" %}

## Provisioning From Cloud

To provision the **Asset entity** from the **ThingsBoard Cloud** to the **Edge** instance, log in to the **Cloud** and go to the **Edge management > Instances** section:

{% include images-gallery.html imageCollection="provisioning" showListImageTitles="true" %}
### Next Steps

{% include templates/edge/guides-banner-edge.md %}