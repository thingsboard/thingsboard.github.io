* TOC
{:toc}

**Devices** are fundamental IoT entities in ThingsBoard that can **generate telemetry data** (such as temperature, humidity, GPS coordinates, etc.) and **transmit** it to the ThingsBoard platform, as well as respond to Remote Procedure Call (RPC) commands.
Devices can be either physical (e.g., sensors, controllers, trackers) or virtual (e.g., emulators) network-connected objects that are capable of:
- **Generating telemetry data** — send measured data such as temperature, humidity, or location.
- **Transmitting data to the ThingsBoard platform** via [supported protocols](/docs/{{docsPrefix}}reference/protocols/){:target="_blank"} (MQTT, HTTP, CoAP, etc.).
- **Responding to RPC commands** — receiving and executing on remote procedure calls sent from the platform.

Each device:
- is stored as a separate **entity**.
{% unless docsPrefix == null %}- can belong to one or more [device groups](/docs/{{docsPrefix}}user-guide/groups/){:target="_blank"}.{% endunless %}
- has a device profile that defines type, transport settings, firmware, alarm rules, etc.
- can be assigned an [owner](/docs/{{docsPrefix}}user-guide/ui/devices/#manage-owner-and-groups).
- supports both [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} (static or semi-static properties) and [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} (time-series data).

> ThingsBoard supports device management functions via both the web UI and the [REST API](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}.

<b><font size="4">Practical video course 🎥</font></b>

Explore a hands-on video course that provides detailed explanations on how to create and manage devices in ThingsBoard.

> The course includes practical examples to help you better understand how to work with dashboards, resources, and devices, including their configuration and real-world usage.

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/65SoFceFDBE" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

<hr>

## How to add, edit, and delete device

Tenant administrators and users with appropriate permissions can create, edit, or delete devices in ThingsBoard.

### Adding new device

To add a new device:
- Navigate to **Entities** &#10230; **Devices**. {% unless docsPrefix == null %}By default, you will see the "**All**" device group.{% endunless %}
- Click the "**+**" icon in the upper-right corner and select "**Add new device**" from drop-down menu.
- In the device creation form, fill in the required fields:
    - **Name** – a unique name for the device.
    - **[Device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}** – by default, the profile is set to "**default**", but you can choose a different profile if needed.
    {% if (docsPrefix == "pe/") or (docsPrefix == "paas/") or (docsPrefix == "paas/eu/") %}
    - **Owner and groups:** Helps with organization and access control.
      - **Owner**: Select the owner from the dropdown list. The device will be created at that owner’s level. By default, the field is pre-filled with the Customer or Tenant name based on where you add the device. You can change it before confirming adding.
      - **Groups**: Optional field. Add the device to existing device groups or create a new one at the selected owner level. Note: every device is automatically added to the "**All**" group of that owner.      
    {% endif %}
- Optional fields such as **Label** or **Description** can be filled in if needed.
- Click "**Add**".

Device successfully created and is now available in the list.

A window will immediately open where you can [check the device's connection to ThingsBoard platform](#check-connectivity).
This step is optional. For now, let's close this window and return to the connection check in more detail later.

{% include images-gallery.html imageCollection="add-device" %}

You&#39;ll also receive a [notification](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"} (bell icon) indicating the device was added.

{% include images-gallery.html imageCollection="add-device-notification" %}

<hr>

{% unless docsPrefix == null %}
<br>
### Creating device group

Devices can belong to one or multiple [groups](/docs/{{docsPrefix}}user-guide/groups/){:target="_blank"}, which helps organize and manage them effectively.

To create a new device group:

{% include images-gallery.html imageCollection="add-device-group-pe" showListImageTitles="true" %}

<hr>

### Managing device groups. How to add, move, remove.

From the Devices page, you can add devices to groups, move them between groups, or remove them from a group. 

The "All" device group always contains all devices at the selected owner level (Tenant or Customer).

**Add a single device to groups:**
- Open the [device details](#device-details) ➜ click **Manage owner and groups**.
- In the dialog, adjust Owner if necessary and select groups to add or remove the device from.
- Click **Save**.

**Add multiple devices to one group:**
- On the **Groups** tab, open any device group (e.g., "**All**").
- Select devices using the checkboxes (on the left of their names).
- Click the "**Add to group**" (plus-in-circle icon) in the top-right.
- In **Add to group** window, choose **Select existing entity group** or **Create new entity group**.
- Select an existing or create a new device group.
- Click **Add** to confirm adding the devices to the group.

{% capture multiple %}
**Note:** This adds devices to the chosen group without removing them from other groups.
{% endcapture %}
{% include templates/info-banner.md content=multiple %}

**Move devices to another group:**
- Open a specific (non-**All**) group.
- Select devices and click **Move to group** (two-arrow icon).
- In "Move to group" window, choose **Select existing entity group** or **Create new entity group**.
- Select an existing or create a new device group.
- Click **Move** to confirm.

This action removes devices from the current group and adds them to the selected group.

**Remove devices from a group:**
- Open a specific (non-**All**) group.
- Select devices and click **Remove from group** (minus-in-circle icon) in the top-right.
- Confirm removal.

{% capture difference %}
**Note:** Devices are not deleted; they remain in the owner’s "**All**" device group.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% endunless %}

### Editing device

You can change the device name, its device profile, label, assign the firmware and software.
To edit the device, you need to:

{% include images-gallery.html imageCollection="editing-device" showListImageTitles="true" %}

<hr>

### Deleting device

You can delete a device using one of the following ways:

First way:

{% include images-gallery.html imageCollection="device-delete-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="device-delete-2" showListImageTitles="true" %}

## Check connectivity

To verify if your device is successfully connected to ThingsBoard:
- Open the "**Device details**" window and click "**Check connectivity**".
- Select:
  - [Communication protocol](/docs/{{docsPrefix}}reference/protocols/){:target="_blank"} ([MQTT](/docs/{{docsPrefix}}reference/mqtt-api){:target="_blank"}, [HTTP](/docs/{{docsPrefix}}reference/http-api){:target="_blank"}, etc.)
  - Operating system
- Copy the generated command and run it in a **Terminal**.

If successful, the device status will change from "**Inactive**" to "**Active**", and telemetry data (e.g., temperature) will appear.

{% include images-gallery.html imageCollection="check-connectivity" %}

<hr>

## Manage device credentials

Supported credential types:

- [Access Token](/docs/{{docsPrefix}}user-guide/access-token/){:target="_blank"} (default).
- [X.509](/docs/{{docsPrefix}}user-guide/certificates/){:target="_blank"} certificate.
- [MQTT Basic](/docs/{{docsPrefix}}user-guide/basic-mqtt/){:target="_blank"}.

To change or manage credentials:

{% include images-gallery.html imageCollection="manage-device-credentials" showListImageTitles="true" %}

<hr>

{% if docsPrefix == null %}
## Make device public

You can make a device public so that all its data is accessible to everyone. This is ideal for creating public demo dashboards that require access to device data or for open data use cases.

{% include images-gallery.html imageCollection="make-device-public" showListImageTitles="true" %}

To make the device private again, follow these steps:

{% include images-gallery.html imageCollection="make-device-private" showListImageTitles="true" %}

> Once the device is made private, it will no longer be publicly accessible, and any **public [dashboards](/docs/user-guide/dashboards/){:target="_blank"}** referencing it will lose access to its data.

<hr>

## Assign device to customer

You can assign the device to a specific [customer](/docs/user-guide/ui/customers/){:target="_blank"}. This ensures that only users associated with that customer will have access to the device and its data.

> This step is crucial for ensuring data [access control](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}. Each customer user will only see their own devices and will not have access to devices or data assigned to other customers.

{% include images-gallery.html imageCollection="assign-device-to-customer" showListImageTitles="true" %}
In the ThingsBoard Professional Edition (PE), you can assign devices using the [“Manage owner and groups”](https://thingsboard.io/docs/pe/user-guide/ui/devices/#manage-device-owner-and-groups){:target="_blank"} button in the device details. This allows you to not only assign ownership but also manage group memberships at the same time.
{% endif %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") or (docsPrefix == "paas/eu/") %}
## Manage device owner and groups
You can change a device’s owner (which can be either a Tenant or a Customer, see [glossary](https://thingsboard.io/docs/{{docsPrefix}}user-guide/rbac/#glossary){:target="_blank"}) to control who can access the device and its data. Changing the owner moves the device to the selected level and updates access based on groups.

Unlike the Community Edition (CE), where you can only assign a device to a specific customer, in the Professional Edition (PE) you can also manage ownership and group memberships using the “Manage owner and groups” button.

To do this:
- Click the device to open its **Device details**.
- Click the “**Manage owner and groups**” button.
- In the **Owner** field, select [Tenant](https://thingsboard.io/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} or a specific [Customer](https://thingsboard.io/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"}.
- Add the device to the relevant **device groups** or [create a new group](#creating-device-group) if needed.
- Click “**Update**” to confirm and apply the changes.

{% capture difference %}
**Note:** Changes to group membership and ownership take effect immediately and update user access according to the [roles](/docs/{{docsPrefix}}user-guide/rbac/#roles){:target="_blank"} of the assigned groups.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include images-gallery.html imageCollection="manage-owner-and-groups-pe" %}

A Tenant Administrator always has the right to reassign or revoke device ownership.

<hr>

### Include customer entities

On the "<b>Devices</b>" page there is an option "<b>Include customer entities</b>", which defines whether the list will display devices that belong to your customers.

{% include images-gallery.html imageCollection="include-customer-entities" showListImageTitles="true" %}

## Share device
You can share devices by adding them to a device group and then sharing the group with a customer.

For detailed instructions, please see the section on how to [Share device group](#share-device-group).

{% endif %}

<hr>

{% unless docsPrefix == null %}

## Make device group public

You can make a device group public to ensure that all data within it is accessible to everyone. This is ideal for:
- Creating public demo dashboards that require access to device data.
- Supporting open data use cases.

> You cannot share an individual device directly — only the device group that contains it.

To make a device group public:
- Locate the desired device group in the list.
- Click the "**Make public**" icon next to it.
- Confirm your action in the popup dialog.

{% include images-gallery.html imageCollection="make-device-group-public" %}

> Once public, any dashboards or external systems referencing devices in this group will have access without requiring authentication.

To make the group private again, follow the same steps using the "**Make private**" icon.

{% include images-gallery.html imageCollection="make-device-group-private" %}

## Share device group

You can share a device group with one or more customers. This is useful, for example, when multiple customers need access to the same device.

> You cannot share an individual device — only the device group that contains it.

To share an device group:
- Locate the desired device group in the list.
- Click the "**Share**" icon next to it.
- **Select the target customer** from the dropdown list.
- (Optional) Specify the **user group** within that customer to share the device group with.
- Confirm the action by clicking "**Share**".

{% include images-gallery.html imageCollection="share-device-group" %}

**Managing and Verifying Permissions**

After a device group has been shared, you can view, edit, or revoke permissions at any time.

1. From the "Device groups" list, click on the pencil button of the desired group to open the "Entity group details".

2. Navigate to the Permissions tab.

3. On this tab, you will see a complete list of all permissions granted for this group. Here you can:

- **Add** a new permission: Click the "+" icon in the top right corner of the panel. A dialog window will appear where you can select a role and a user group to grant access to.

- **Edit** an existing permission: Click the pencil icon next to the permission you want to modify.

- **Delete** a permission: Click the trash can icon to remove access for that user group.

{% endunless %}

## Device details

Clicking on the device opens a window where you can access and manage various aspects of that device.

{% include images-gallery.html imageCollection="device-details-page" %}

<b><font size="3">Copy device ID</font></b>   
Allows you to quickly retrieve the device&#39;s unique UUID. Click Copy device Id to copy it to your clipboard. The ID is used in API calls, integrations, and scripts.

<b><font size="3">Copy device credentials</font></b>   
Depending on the authentication type, you can copy:
- **Access Token**
- **MQTT Credentials**

Click the corresponding button to instantly obtain the credentials required for connecting the device to ThingsBoard.

<b><font size="3">Attributes</font></b>   

This tab displays client, server, and shared [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} — static or semi-static key-value pairs associated with the device. Typical examples include serial number, model, and firmware version.

<b><font size="3">Latest telemetry</font></b>   

Shows the [latest telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} values sent by the device, including sensor readings, status updates, and other real-time parameters.
- **Adding telemetry:** Click the "**+**" icon, enter the key name, value type, and value.
- **Deleting telemetry:** Click the trash icon, choose the deletion mode (all data, latest value, all except latest, or by time period), and confirm the action.

<b><font size="3">Calculated fields</font></b>   
Displays fields whose values are computed from existing attributes or telemetry using formulas. This allows you to define derived parameters without modifying the device firmware. Learn more about Calculated fields [here](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}.

<b><font size="3">Alarm rules</font></b>   
Contains the rules that define how alarms are generated for the device. You can review conditions, thresholds, triggers, and configured alarm actions. Learn more about configuring alarm rules [here](/docs/{{docsPrefix}}user-guide/alarm-rules/){:target="_blank"}.

<b><font size="3">Alarms</font></b>    
Shows all active and historical [alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} related to the device. Helps monitor device health, track warnings, and identify critical events.

<b><font size="3">Events</font></b>   
Displays system events associated with the device, including logs, warnings, errors, and other lifecycle-related records. Useful for diagnostics and activity tracking.

<b><font size="3">Relations</font></b>   
Shows all directed [relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations){:target="_blank"} between this device and other entities, such as assets, devices, dashboards, and rule chains. Provides context on how the device fits into the overall system.

<b><font size="3">Audit logs</font></b>   
Provides a record of user actions related to the device — creation, updates, configuration changes, and deletions. Useful for security auditing and traceability.

<b><font size="3">Version control</font></b>   
Enables exporting and restoring ThingsBoard entities using the built-in Git-based [version control](/docs/{{docsPrefix}}user-guide/version-control/){:target="_blank"} service. Supports backup, collaboration, and configuration version management.

<hr>

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.