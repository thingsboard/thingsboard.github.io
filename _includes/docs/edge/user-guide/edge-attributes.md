* TOC 
{:toc}

## Overview

**Custom attributes** are the structured data that can be assigned to the entities. They are stored in the database and can be used for visualization, analysis, logic configuration, and integration with other services.

In **ThingsBoard Edge**, attributes work similarly to the **ThingsBoard** platform. For a comprehensive understanding of the **ThingsBoard Attributes**, please refer to the [Working with IoT Attributes](/docs/{{peDocsPrefix}}user-guide/attributes/){: target="_blank"} documentation.

## Assigning Attributes to the Edge Entities

**Custom attributes** can be managed from the **Edge** instance. They are stored and processed locally for immediate use. 

To add an attribute to any Edge [entity](/docs/{{peDocsPrefix}}user-guide/entities-and-relations/){: target="_blank"}: 
* Go to the **Entity section** (e.g. **Entities > Devices** section) and click on the entity. On the **Entity details** page, select the **"Attributes"** tab and select the **"Server attributes"** option in the **"Entity attributes scope"** drop-down menu. 
* Click the **"Add"** button. In the **"Add attribute"** window, enter the attribute name in the **"Key"** field. Then, select the **attribute value** (_String, Integer, Double, Boolean, JSON_) type and input an **attribute value** in the corresponding fields. Click the **"Add"** button.
* Once the attribute is added, you can see it in the list

{% include images-gallery.html imageCollection="addAttributeOnEdge" %}

If an attribute is assigned to an entity on the **ThingsBoard Server**, and the entity is then assigned to an **Edge** instance, the **attribute** is automatically assigned as well. 
Read about **how to assign entities to the Edge** instance [here](/docs/{{docsPrefix}}config/management/#entities-management){: target="_blank"}.

## Using Attributes to Visualize Data on the Dashboard

In visualization data process, **entity attributes** can be used to provide context for telemetry data, display static or dynamic metadata about devices, and act as configuration parameters to filter or annotate dashboards. 

To display **attributes** on the Dashboard, create the [Entity alias](/docs/{{peDocsPrefix}}user-guide/ui/aliases/){: target="_blank"} and bind it to the widget. Widgets like [Cards](/docs/{{peDocsPrefix}}user-guide/ui/widget-library/#cards){: target="_blank"}, [Input widgets](/docs/{{peDocsPrefix}}user-guide/ui/widget-library/#input-widgets){: target="_blank"}, or [Entity Tables](/docs/{{peDocsPrefix}}user-guide/ui/entity-table-widget/){: target="_blank"} are ideal for displaying attributes.

{% include images-gallery.html imageCollection="dashboard" %}

Read more about **Edge Dashboards configuration** [here](/docs/{{docsPrefix}}user-guide/db-overview/){: target="_blank"}.

## Syncing Attribute Updates

To ensure that any changes to the **attributes** are synchronized between the **Server** and **Edge** instances, adjust the **Rule Chains**. 

If the changes occurred on the **ThingsBoard Server** and must be propagated to the **Edge** instance:
* Log in to the **ThingsBoard Server**, go to the **Rule chains** section and click on the **Rule Chain**.
* On the **Rule Chain** edit page, find the **"push to edge"** node using the **Node search** bar. Drag and drop the node onto the **Rule Chain** sheet. Then, in the **"Add rule node"** pop-up window enter the node title and select the **"Server attributes"** option in the **"Entity attributes scope"** field. Click the **"Add"** button to proceed.
* Connect the **“message type switch”** node and the **"push to edge"** node with the **"Attributes Deleted"** and **"Attributes Updated"** link labels. Click the **“Apply changes”** button on the **Rule Chain** sheet.

{% include images-gallery.html imageCollection="pushToEdge" %}

To keep the **ThingsBoard Server** up to date with any attribute changes that have occurred on the **Edge**:
* Log in to the **ThingsBoard Server**, go to the **Edge management > Rule chains templates** section and click on the **Rule Chain**.
* On the **Rule Chain** edit page, find the **"push to cloud"** node using the **Node search** bar. Drag and drop the node onto the **Rule Chain** sheet. Then, in the **"Add rule node"** pop-up window enter the node title and select the **"Server attributes"** option in the **"Entity attributes scope"** field. Click the **"Add"** button to proceed.
* Connect the **“message type switch”** node and the **"push to cloud"** node with the **"Attributes Deleted"** and **"Attributes Updated"** link labels. Click the **“Apply changes”** button on the **Rule Chain** sheet.

{% include images-gallery.html imageCollection="pushToCloud" %}

{% capture edge-rule-chain %}
Starting with **Edge 4.0**, you can create and edit a **Rule Chain** on the **Edge**. 
{% endcapture %}
{% include templates/info-banner.md content=edge-rule-chain %}

Read about how to **subscribe to device attributes change** [here](/docs/{{docsPrefix}}config/subscribe-to-attribute/#step-3-subscribe-to-device-attributes-change-and-publish-device-attributes-message){: target="_blank"}.

## Custom Attributes for Edge Instance

Starting with the 3.9.0 release, **custom attributes** can be assigned to the **Edge** instance and used as placeholders in the **Rule Chains**. This allows each **Edge** instance to dynamically replace placeholders with its specific attributes in real time. In this way, one **Edge Rule Chain** template can be used for multiple instances, eliminating the need to create a separate **Rule Chain template** for each **Edge** instance.
The retrieved **Edge attributes** can be used for metadata enrichment, authentication and tagging, analysis, and contextualization of transmitted data. This approach streamlines the management of multiple **Edge** instances and supports efficient scaling while minimizing errors and simplifying maintenance. 

To assign a custom attribute to the **Edge** instance, follow these steps:

* Log in to the **ThingsBoard Server**, go to the **Edge management > Instances** section and click on the **Edge** instance. On the **"Edge details"** page, select the **"Attributes"** tab. 
* Click the **“Add”** button and add a new custom attribute (_e.g. edgeAccessToken_).
* Confirm the assigned attribute.
* Select the **"Relations"** tab and click the **“Add”** button to add a new relation (_e.g. the relation between the Edge and the Device(s)_). Click the **“Add”** button.
* The newly created relations will appear in the **"Relations"** tab.

{% include images-gallery.html imageCollection="addEdgeAttributes" %}

To use **Edge** attributes as placeholders in the **Rule Chain template**:
* Go to the **ThingsBoard Server**, the **Edge management > Rule chains templates** section and click the appropriate **Rule Chain**.
  * If you're using **Edge 4.0** or later, stay in your **Edge** instance and go to the **Rule chains** section. To edit a rule chain, click the appropriate **Rule Chain**.
* On the **Rule Chain** edit page, find the **"related entity data"** node using the **Node search** bar. Drag and drop the node onto the **Rule Chain sheet**. Fill in the following fields in the pop-up window:
  * **Name:** Enter the node name.
  * **Direction:** Select the relation direction (_From originator/To originator_).
  * **Relation type:** Select the relation type (_Contains/Manages_).
  * **Entity types:** Add the entity type.
* Scroll down and continue with the configuration. In the **"Data to fetch"** configuration block, select the **"Attributes"** tab and enter the **"Attributes mapping"** parameters:
  * **Source attribute key:** Enter the entity attribute key you want to track.
  * **Target key:** Enter the target key name. Click the **"Add"** button.
* Then, find the **"rest api call"** node using the **Node search** bar. Drag and drop the node onto the **Rule Chain sheet**. In the pop-up window, enter the **node name** and click the **"Add"** button.
  * **Name:** Enter the node name.
  * **Headers:** Enter the request header and value. The header or value can be a static string, or pattern that is resolved using Message Metadata properties.
  * Click the **"Add"** button. Read more about the **REST API Call node configuration** [here](/docs/user-guide/rule-engine-2-0/nodes/external/rest-api-call/){:target="_blank"}.
* Connect the **"message type switch"** and **"related entity data"** nodes with the **“Post telemetry”** link label. Then, connect the **"related entity data"** and **"rest api call"** nodes with the **"Success"** link label. Click the **“Apply changes”** button on the **Rule Chain sheet**.

{% include images-gallery.html imageCollection="edgeAttributesAsPlaceholders" %}

## Using Attributes in Edge Rule Chains

In **ThingsBoard Edge**, **Rule Chains** can leverage **edge attributes** to create dynamic, real-time data processing logic. 

Let's consider a situation in which it is necessary to be notified whenever any device attribute undergoes a change. 

Before configuring the alarm notifications, have these steps completed: 
* [Add a Device](/docs/{{docsPrefix}}config/create-device/#creating-device-on-edge-instance){: target="_blank"}.
* Add a new custom device attribute.
* [Create an Asset](/docs/{{docsPrefix}}config/provision-asset/#creating-relations){: target="_blank"}.
* [Set a relation](/docs/{{docsPrefix}}config/provision-asset/#creating-relations){: target="_blank"} between the **Asset** and **Device**.

Follow these steps to configure the alarm notifications:
* Log in to the **ThingsBoard Server**, go to the **Edge management > Rule chains templates** section and click the appropriate **Rule Chain**.
  * If you're using **Edge 4.0** or later, stay in your **Edge** instance and go to the **Rule chains** section. To edit a rule chain, click the appropriate **Rule Chain**.
* On the **Rule Chain** edit page, find the **"related entity data"** node using the **Node search** bar. Drag and drop the node onto the **Rule Chain sheet**. Fill in the following fields in the pop-up window:
  * **Name:** Enter the node name.
  * **Direction:** Select the relation direction (_From originator/To originator_).
  * **Relation type:** Select the relation type (_Contains/Manages_).
  * **Entity types:** Add the entity type.
* Scroll down and continue with the configuration. In the **"Data to fetch"** configuration block, select the **"Attributes"** tab and enter the **"Attributes mapping"** parameters:
  * **Source attribute key:** Enter the entity attribute key you want to track.
  * **Target key:** Enter the target key name. Click the **"Add"** button.
* Then, find the **"create alarm"** node using the **Node search** bar. Drag and drop the node onto the **Rule Chain sheet**. In the pop-up window, enter the **node name** and click the **"Add"** button.
* Connect the **"message type switch"** and **"related entity data”** nodes with the **“Attributes Updated”** and **“Attributes Deleted”** link labels. Then, connect the **“related entity data”** and **"create alarm"** nodes with the **"Success"** link label. Click the **“Apply changes”** button on the **Rule Chain sheet**.
* To verify if the **Alarm** notification will be sent, go to the **Entities > Devices** section, and open the **"Attributes"** tab on the **"Device details"** page. Change the attribute you added to the **"related entity data"** node.
* Confirm the received **Alarm** notification.

{% include images-gallery.html imageCollection="attributesInRuleChain" %}
{% capture local-deployment %}
Be sure to **Acknowledge** and **Clear** the notification when you receive it. You can do this either in the Cloud or on the Edge. If the unacknowledged alarm exists, it will be updated rather than created.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

## Next Steps

{% include templates/edge/guides-banner-edge.md %}
