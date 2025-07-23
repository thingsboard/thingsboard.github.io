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

<b><font size="4">Practical video course 🎥</font></b>

Watch the practical video course, which includes a detailed explanation of how to create and use assets in ThingsBoard.

> The course includes hands-on examples to help you better understand how to manage dashboards, assets, and devices — including their configuration and real-world usage.

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

Clicking on an asset opens a window where you can access and manage various aspects of that asset:
- Copy the asset Id to the clipboard using the "Copy asset Id" button.
- Manage server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes){:target="_blank"} of the asset.
- Perform additional computations on telemetry and attributes using the [Calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"} feature.
- View current and historical [alarms](/docs/{{docsPrefix}}user-guide/alarms){:target="_blank"} of the asset.
- Browse asset-related **events**, such as errors, warnings, and other key lifecycle moments.
- Manage [relationships](/docs/{{docsPrefix}}user-guide/entities-and-relations){:target="_blank"} between this asset and other entities, such as devices, dashboards, etc.
- Track user actions and changes related to the asset in the [Audit log](/docs/{{docsPrefix}}user-guide/audit-log/){:target="_blank"}.
- Use the ThingsBoard [Version control](/docs/{{docsPrefix}}user-guide/version-control/){:target="_blank"} system to export and restore the asset as part of Git-based object management.

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") or (docsPrefix == "paas/eu/") %}
## Manage owner and groups

You can change the **owner** of an asset. This ensures that only users associated with the selected customer will have access to the asset and its data.

> This step is essential for maintaining strict data access control. Each customer user will only see their own assigned assets and will not have visibility into assets or data belonging to other customers.

To change asset ownership:
- Click asset to open its **details** view.
- Click the "**Manage owner and groups**" button.
- Select the new owner of the asset from the list.
- If needed, add the asset to an existing group or create a new one.
- Confirm the change to update the asset&#39;s ownership.

{% include images-gallery.html imageCollection="manage-owner-and-groups" %}

> You can reassign or revoke the ownership change of asset if needed.

<br><b><font size="4">Include customer entities</font></b>

The "**Include customer entities**" option allows you to **show or hide customer-owned entities** in the list view.

{% include images-gallery.html imageCollection="include-customer-entities" %}

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