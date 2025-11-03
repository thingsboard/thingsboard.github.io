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
    {% if (docsPrefix == "pe/") or (docsPrefix == "paas/") or (docsPrefix == "paas/eu/") %}
  - **Owner and groups:** Helps with organization and access control.
    - **Owner**: Select the owner from the dropdown list. The asset will be created at that owner’s level. By default, the field is pre-filled with the Customer or Tenant name based on where you add the asset. You can change it before confirming adding.
    - **Groups**: Optional field. Add the asset to existing asset groups or create a new one at the selected owner level. Note: every asset is automatically added to the "**All**" group of that owner.      
  {% endif %}
- Optional fields such as **Label** or **Description** can be filled in if needed.
- Click "**Add**".

The asset has been successfully created and is now available in the list.

{% include images-gallery.html imageCollection="creating-asset" %}

{% unless docsPrefix == null %}
### Creating asset group

Assets can belong to one or multiple [groups](/docs/{{docsPrefix}}user-guide/groups/){:target="_blank"}, which helps organize and manage them effectively.

To create a new asset group:
- From the **Assets** screen, go to the **"Group" tab**.
- Click the "**+**" icon in the upper-right corner.
- Enter the **name** of the new asset group.
- (Optional) Configure **shared access** to this group for your customers, if needed.
- Click "**Add**" to create the group.

{% include images-gallery.html imageCollection="creating-asset-group" %}

### Managing asset groups. How to add, move, remove

From the Assets page, you can add assets to groups, move them between groups, or remove them from a group.

The "**All**" asset group always contains all assets at the selected owner level (Tenant or Customer).

**Add a single asset to groups:**
- Open the [asset details](#asset-details) ➜ click Manage owner and groups.
- In the dialog, adjust Owner if necessary and select groups to add or remove the asset from.
- Click **Save**.

**Add multiple assets to one group:**
- On the **Groups** tab, open any asset group (e.g., "**All**").
- Select assets using the checkboxes (on the left of their names).
- Click the "**Add to group**" (plus-in-circle icon) in the top-right.
- In **Add to group** window, choose **Select existing entity group** or **Create new entity group**.
- Select an existing or create a new asset group.
- Click **Add** to confirm adding the assets to the group.

{% capture multiple %}
**Note:** This adds assets to the chosen group without removing them from other groups.
{% endcapture %}
{% include templates/info-banner.md content=multiple %}

**Move assets to another group:**
- Open a specific (non-**All**) group.
- Select assets and click **Move to group** (two-arrow icon).
- In "Move to group" window, choose **Select existing entity group** or **Create new entity group**.
- Select an existing or create a new asset group.
- Click **Move** to confirm.

This action removes assets from the current group and adds them to the selected group.

**Remove assets from a group:**
- Open a specific (non-**All**) group.
- Select assets and click **Remove from group** (minus-in-circle icon) in the top-right.
- Confirm removal.

{% capture difference %}
**Note:** Assets are not deleted; they remain in the owner’s "**All**" assets group.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

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

You can make an asset public so that all its data is accessible to everyone. 
This is ideal for creating public demo dashboards that require access to asset data or for open data use cases.    

- Click the "**Make asset public**" icon next to the asset you want to share.
- Confirm your action in the popup dialog.

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
- Copy the **asset Id** to the clipboard using the "**Copy asset Id**" button.
- Manage server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} of the asset.
- Perform additional computations on telemetry and attributes using the [Calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"} feature.
- View current and historical [alarms](/docs/{{docsPrefix}}user-guide/alarms){:target="_blank"} of the asset.
- Browse asset-related **events**, such as errors, warnings, and other key lifecycle moments.
- Manage [relations](/docs/{{docsPrefix}}user-guide/entities-and-relations){:target="_blank"} between this asset and other entities, such as devices, dashboards, etc.
- Track user actions and changes related to the asset in the [Audit log](/docs/{{docsPrefix}}user-guide/audit-log/){:target="_blank"}.
- Use the ThingsBoard [Version control](/docs/{{docsPrefix}}user-guide/version-control/){:target="_blank"} system to export and restore the asset as part of Git-based object management.

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") or (docsPrefix == "paas/eu/") %}
## Manage asset owner and groups

You can change the **owner** of an asset. This ensures that only users associated with the selected customer will have access to the asset and its data.

> This step is essential for maintaining strict data [access control](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}. Each customer user will only see their own assigned assets and will not have visibility into assets or data belonging to other customers.

To change asset owner:
- Click the asset to open its **Asset details**.
- Click the "**Manage owner and groups**" button.
- In the **Owner** field, select [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} or a specific [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"}.
- Add the asset to the relevant **asset groups** or [create a new group](#creating-asset-group) if needed.
- Click “**Update**” to confirm and apply the changes.

In the <b>"Customer name" column</b>, you can see the current owner of the asset.

{% capture difference %}
**Note:** Changes to group membership and ownership take effect immediately and update user access according to the [roles](/docs/{{docsPrefix}}user-guide/rbac/#roles){:target="_blank"} of the assigned groups.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

A Tenant Administrator always has the right to reassign or revoke asset ownership.

{% include images-gallery.html imageCollection="manage-owner-and-groups" %}

### Include customer entities

The "**Include customer entities**" option on the "**Assets**" page determines whether assets owned by customers are shown or hidden in the list.

{% include images-gallery.html imageCollection="include-customer-assets" showListImageTitles="true" %}

## Share asset
You can share assets by adding them to an asset group and then sharing the group with a customer.

For detailed instructions, please see the section on how to [Share asset group](#share-asset-group).

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

**Managing and Verifying Permissions**

After an asset group has been shared, you can view, edit, or revoke permissions at any time.

1. From the "**Asset groups**" list, click on the "**pencil**" button of the desired group to open the "**Entity group details**".

2. Navigate to the **Permissions** tab.

3. On this tab, you will see a complete list of all permissions granted for this group. Here you can:

- **Add** a new permission: Click the "**+**" icon in the top right corner of the panel. A dialog window will appear where you can select a role and a user group to grant access to.

- **Edit** an existing permission: Click the "**pencil**" icon next to the permission you want to modify.

- **Delete** a permission: Click the "**trash can**" icon to remove access for that user group.

{% endif %}

## Managing asset relations. How to add, view, edit, delete

From the Assets page, you can create, view, edit, and delete relations between an asset and other entities (assets, devices, customers, etc.). See details about [Entities and relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/){:target="_blank"}.

**To manage relations between an asset and other entities for a specific asset:** 
- Open the [asset details](#asset-details) ➜ go to the **Relations** tab.

**Add a new relation:**
- In the Direction selector, choose **From** (outbound) or **To** (inbound).
- Click "**+**" icon (Add).
- In **Add relation** window, set **Relation type** (e.g., _Contains_, _Manages_) and choose the **To entity** (Entity type and target entities).
- Click **Add** to confirm.

{% capture rel_dir %}
**Note:** Relations are directional. Use "**From**" to define relations originating from the current asset, or "**To**" to show relations to this asset.
{% endcapture %}
{% include templates/info-banner.md content=rel_dir %}

**View & filter relations:**
- Switch **Direction** between "**From**" and "**To**" to see outbound/inbound relations.
- Use the **search** icon to filter by relation type or entity.

**Edit a relation:**
- In the list, click the "**pencil**" icon to change the relation type or target entity, then **Save**.

**Delete a relation:**
- Click the "**trash can**" icon next to a relation and confirm deleting.

{% capture rel_remove %}
**Note:** Deleting a relation does **not** delete the related entities; it only deletes the relation.
{% endcapture %}
{% include templates/info-banner.md content=rel_remove %}