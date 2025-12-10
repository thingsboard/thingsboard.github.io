* TOC
{:toc}

**Asset** is an abstract entity in the IoT system of ThingsBoard that represents any physical object, space, or organizational unit. 
Examples include a building, room, production area, field, streetlight, substation, or vehicle.

**Key characteristics of an asset:**
- **Does not generate telemetry** on its own but can be associated with devices that do.
- **Can have its own attributes**, such as location, type, or responsible personnel.
- **Used for grouping** devices and other entities.
- **Can be part of a hierarchy**, e.g., Substation &#10230; Line &#10230; Streetlight.
- **Participates in ThingsBoard business logic**, such as rule chains, alarms, and dashboards.

Assets help logically and efficiently structure your IoT project, making it easier to manage and scale.

> ThingsBoard supports asset management functions via both the web UI and the [REST API](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}.

<br><b><font size="4">Practical video course 🎥</font></b>

Watch this practical video course to learn how to configure and manage ThingsBoard dashboards, resources, and devices, and how to use them in real-world scenarios.

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/65SoFceFDBE" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## How to create, edit, and delete asset

Tenant administrators and users with appropriate [permissions](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"} can create, edit, or delete assets in ThingsBoard.

### Creating asset

To create a new asset:
- Navigate to **Entities** &#10230; **Assets**. {% unless docsPrefix == null %}By default, you will see the "**All**" asset group.{% endunless %}
- Click the "**+**" icon in the upper-right corner and select "**Add new asset**" from drop-down menu.
- In the asset creation form, fill in the required fields:
  - **Name** – a unique name for the asset.
  - **[Asset profile](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"}** – by default, the profile is set to "**default**", but you can choose a different profile if needed.
- Optional fields such as label or description can be filled in if needed.
- Click "**Add**".

The asset has been successfully created and is now available in the list.

{% include images-gallery.html imageCollection="creating-asset" %}

{% unless docsPrefix == null %}
### Creating asset group

Assets can be logically organized into groups for easier management.

To create a new asset group:
- From the **Assets** screen, go to the **"Group" tab**.
- Click the "**+**" icon in the upper-right corner.
- Enter the **name** of the new asset group.
- (Optional) Configure **shared access** to this group for your customers, if needed.
- Click "**Add**" to create the group.

{% include images-gallery.html imageCollection="creating-asset-group" %}

{% endunless %}

### Editing asset

To edit an existing asset:
- In the **Assets** list, locate and click on the desired asset.
- Click the "**pencil**" (✏️ **Edit**) icon on the right.
- In the edit window, you can modify the following fields:
  - **Name**
  - **Label**
  - **Asset profile**
  - **Description**
- After making the necessary changes, click "**Apply changes**" to save.

{% include images-gallery.html imageCollection="editing-asset" %}

### Deleting asset

To delete an asset{% unless docsPrefix == null %} or asset group{% endunless %}:

{% include images-gallery.html imageCollection="deleting-asset" showListImageTitles="true" %}

> **Note**: Deleting an asset **does not delete** the devices or other entities linked to it, but it **will break all existing relations** (such as links to devices, alarms, dashboards, etc.).

{% if docsPrefix == null %}
## Make asset public

You can make a asset public so that all its data is accessible to everyone. 
This is ideal for creating public demo dashboards that require access to asset data or for open data use cases.    

- Click the "**Make asset public**" icon next to the asset you want to share.'
- Confirm your action in the popup dialog.'

The asset is now public.

{% include images-gallery.html imageCollection="make-asset-public" %}

<br>
To revoke public access and make the asset private again:

{% include images-gallery.html imageCollection="make-asset-private" showListImageTitles="true" %}

> Once the asset is made private, it will no longer be publicly accessible, and any **public [dashboards](/docs/user-guide/dashboards/){:target="_blank"}** referencing it will lose access to its data.

## Assigning asset to customer

You can assign an asset to a specific [customer](/docs/user-guide/ui/customers/){:target="_blank"}. This ensures that only users associated with that customer will have access to the asset and its data.

> This step is crucial for ensuring data access control. Each customer user will only see their own assets and will not have access to assets or data assigned to other customers.

To assign an asset to a customer:
- Locate the desired asset in the list.
- Click the "**Assign to customer**" icon.
- Select the target customer from the dropdown list.
- Click "**Assign**" to confirm the action.

The selected customer now has access to the asset and its data.

{% include images-gallery.html imageCollection="assign-asset-to-customer" %}

<br>
You can later unassign the asset or reassign it to another customer if needed.

{% include images-gallery.html imageCollection="unassign-from-customer" showListImageTitles="true" %}
{% endif %}

## Asset details

Clicking on an asset opens a window where you can access and manage various aspects of that asset.

{% include images-gallery.html imageCollection="asset-details-page" %}

<b><font size="3">Copy asset ID</font></b>   
Allows you to quickly retrieve the asset’s unique UUID. Click Copy asset Id to copy it to your clipboard. The ID is used in API calls, integrations, and scripts.

<b><font size="3">Attributes</font></b>

This tab displays client, server, and shared [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} — static or semi-static key-value pairs related to the asset. Examples include location, category, configuration parameters, and other metadata.

<b><font size="3">Latest telemetry</font></b>

Shows the [latest telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} values associated with the asset. Telemetry may come from linked devices or be added manually for modeling purposes.
- **Adding telemetry:** Click the "**+**" icon, enter the key name, value type, and value.
- **Deleting telemetry:** Click the trash icon, choose the deletion mode (all data, latest value, all except latest, or by time period), and confirm.

<b><font size="3">Calculated fields</font></b>   
Displays fields whose values are computed from existing attributes or telemetry using formulas. This allows you to define derived parameters without modifying the device firmware. Learn more about Calculated fields [here](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}.

<b><font size="3">Alarm rules</font></b>   
Contains the alarm rules configured for the asset. You can review thresholds, triggering logic, and configured alarm actions that apply to this asset. Learn more about configuring alarm rules [here](/docs/{{docsPrefix}}user-guide/alarm-rules/){:target="_blank"}.

<b><font size="3">Alarms</font></b>    
Shows all active and historical [alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} related to the asset. Allows tracking of warnings, operational issues, and critical events affecting the asset.

<b><font size="3">Events</font></b>   
Displays system events associated with the asset, such as logs, warnings, errors, and other lifecycle-related activity. Useful for diagnostics and operational analysis.

<b><font size="3">Relations</font></b>   
Shows all directed [relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations){:target="_blank"} between this asset and other entities, such as devices, dashboards, assets, and rule chains. Helps understand how the asset interacts within the system structure.

<b><font size="3">Audit logs</font></b>   
Provides a [record of user actions](/docs/{{docsPrefix}}user-guide/audit-log/){:target="_blank"} related to the asset — creation, updates, configuration changes, and deletions. Used for auditing and change tracking.

<b><font size="3">Version control</font></b>   
Enables exporting and restoring asset-related entities using the Git-backed [version control](/docs/{{docsPrefix}}user-guide/version-control/){:target="_blank"} service. Supports backup, collaboration, and configuration versioning.

<hr>

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
## Manage asset owner and groups

You can change the **owner** of an asset. This ensures that only users associated with the selected customer will have access to the asset and its data.

> This step is essential for maintaining strict data [access control](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}. Each customer user will only see their own assigned assets and will not have visibility into assets or data belonging to other customers.

To change asset ownership:
- Click asset to open its **details** view.
- Click the "**Manage owner and groups**" button.
- Select the new owner of the asset from the list.
- If needed, add the asset to an existing group or create a new one.
- Confirm the change to update the asset&#39;s ownership.

In the <b>"Customer name" column</b>, you can see the current owner of the asset.

> <b>Note</b>: A Tenant Administrator always has the right to reassign or revoke asset ownership.

{% include images-gallery.html imageCollection="manage-owner-and-groups" %}

### Include customer entities

The "<b>Include customer entities</b>" option on the "<b>Assets</b>" page determines whether assets owned by customers are shown or hidden in the list.

{% include images-gallery.html imageCollection="include-customer-assets" showListImageTitles="true" %}

## Make asset group public

You can make an asset group public to ensure that all data within it is accessible to everyone. This is ideal for:
- Creating public demo dashboards that require access to asset data.
- Supporting open data use cases.

> You cannot share an individual asset directly — only the asset group that contains it.

To make an asset group public:
- Locate the desired asset group in the list.
- Click the "**Make public**" icon next to it.
- Confirm your action in the popup dialog.

{% include images-gallery.html imageCollection="make-asset-group-public" %}

> Once public, any dashboards or external systems referencing assets in this group will have access without requiring authentication.

<br>
To make the group private again, follow the same steps using the "**Make private**" icon.

{% include images-gallery.html imageCollection="make-asset-group-private" %}

## Share asset group

You can share an asset group with one or more customers. This is useful, for example, when multiple customers need access to the same asset.

> You cannot share an individual asset — only the asset group that contains it.

To share an asset group:
- Locate the desired asset group in the list.
- Click the "**Share**" icon next to it.
- **Select the target customer** from the dropdown list.
- (Optional) Specify the **user group** within that customer to share the asset group with.
- Confirm the action by clicking "**Share**".

{% include images-gallery.html imageCollection="share-asset-group" %}
{% endif %}

<hr>

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.