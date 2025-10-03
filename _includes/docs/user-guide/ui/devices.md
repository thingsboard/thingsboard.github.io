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
        <iframe src="https://www.youtube.com/embed/65SoFceFDBE" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## How to add, edit, and delete device

Tenant administrators and users with appropriate permissions can create, edit, or delete devices in ThingsBoard.

### Adding new device

To add a new device:
- Navigate to **Entities** &#10230; **Devices**. {% unless docsPrefix == null %}By default, you will see the "**All**" asset group.{% endunless %}
- Click the "**+**" icon in the upper-right corner and select "**Add new device**" from drop-down menu.
- In the device creation form, fill in the required fields:
    - **Name** – a unique name for the device.
    - **[Device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}** – by default, the profile is set to "**default**", but you can choose a different profile if needed.
- Optional fields such as label or description can be filled in if needed.
- Click "**Add**".

Device successfully created and is now available in the list.

A window will immediately open where you can [check the device's connection to ThingsBoard platform](#check-connectivity).
This step is optional. For now, let's close this window and return to the connection check in more detail later.

{% include images-gallery.html imageCollection="add-device" %}

You&#39;ll also receive a [notification](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"} (bell icon) indicating the device was added.

{% include images-gallery.html imageCollection="add-device-notification" %}

{% unless docsPrefix == null %}
<br>
### Creating device group

Devices can belong to one or multiple [groups](/docs/{{docsPrefix}}user-guide/groups/){:target="_blank"}, which helps organize and manage them effectively.

To create a new device group:

{% include images-gallery.html imageCollection="add-device-group-pe" showListImageTitles="true" %}

{% endunless %}

### Editing device

You can change the device name, its device profile, label, assign the firmware and software.
To edit the device, you need to:

{% include images-gallery.html imageCollection="device-details" showListImageTitles="true" %}

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

## Manage device credentials

Supported credential types:

- [Access Token](/docs/{{docsPrefix}}user-guide/access-token/){:target="_blank"} (default).
- [X.509](/docs/{{docsPrefix}}user-guide/certificates/){:target="_blank"} certificate.
- [MQTT Basic](/docs/{{docsPrefix}}user-guide/basic-mqtt/){:target="_blank"}.

To change or manage credentials:

{% include images-gallery.html imageCollection="manage-device-credentials" showListImageTitles="true" %}

{% if docsPrefix == null %}
## Make device public

You can make a device public so that all its data is accessible to everyone. This is ideal for creating public demo dashboards that require access to device data or for open data use cases.

{% include images-gallery.html imageCollection="make-device-public" showListImageTitles="true" %}

To make the device private again, follow these steps:

{% include images-gallery.html imageCollection="make-device-private" showListImageTitles="true" %}

> Once the device is made private, it will no longer be publicly accessible, and any **public [dashboards](/docs/user-guide/dashboards/){:target="_blank"}** referencing it will lose access to its data.

## Assign device to customer

You can assign the device to a specific [customer](/docs/user-guide/ui/customers/){:target="_blank"}. This ensures that only users associated with that customer will have access to the device and its data.

> This step is crucial for ensuring data [access control](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}. Each customer user will only see their own devices and will not have access to devices or data assigned to other customers.

{% include images-gallery.html imageCollection="assign-device-to-customer" showListImageTitles="true" %}
{% endif %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") or (docsPrefix == "paas/eu/") %}
## Manage device owner and groups
You can change a device’s owner (which can be either a Tenant or a Customer, see [glossary](https://thingsboard.io/docs/{{docsPrefix}}user-guide/rbac/#glossary){:target="_blank"}) to control who can access the device and its data. Changing the owner moves the device to the selected level and updates access based on groups.

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

### Include customer entities

On the "<b>Devices</b>" page there is an option "<b>Include customer entities</b>", which defines whether the list will display devices that belong to your customers.

{% include images-gallery.html imageCollection="include-customer-entities" showListImageTitles="true" %}

{% endif %}

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

You can share an device group with one or more customers. This is useful, for example, when multiple customers need access to the same device.

> You cannot share an individual device — only the device group that contains it.

To share an device group:
- Locate the desired device group in the list.
- Click the "**Share**" icon next to it.
- **Select the target customer** from the dropdown list.
- (Optional) Specify the **user group** within that customer to share the device group with.
- Confirm the action by clicking "**Share**".

{% include images-gallery.html imageCollection="share-device-group" %}
{% endunless %}

## Device details

Clicking on the device opens a window where you can access and manage various aspects of that device.

### Copy device Id

To retrieve the device&#39;s unique identifier in ThingsBoard:
- Open the device&#39;s detail page by clicking on the device name in the list.
- Click the "**Copy device Id**" button.

This will copy the Device ID (UUID) to your clipboard for use in scripts, API calls, or [integrations](/docs/{{docsPrefix}}user-guide/integrations/){:target="_blank"}.

{% include images-gallery.html imageCollection="copy-device-id" %}

### Copy device credentials

Depending on the [credentials type](#manage-device-credentials) in use, you can copy:
- Access Token — by clicking "**Copy access token**"
- MQTT Credentials — by clicking "**Copy MQTT credentials**"

These credentials are required to authenticate your device when sending data or connecting via API.

{% include images-gallery.html imageCollection="copy-access-token" %}

### Device attributes

This tab displays the client, server, and shared attributes of the device. For example, serial number, model, and firmware version.
[Attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} are static and semi-static key-value pairs associated with devices.

{% include images-gallery.html imageCollection="attributes" %}

### Device telemetry

This tab shows the real-time telemetry data the device sends, such as sensor readings, status, and other measurable variables.
[Time-series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} data points are available for storage, querying, and visualization. For example, temperature, humidity, and battery level.

{% include images-gallery.html imageCollection="telemetry" %}

**Adding telemetry.**
You can manually add telemetry using the ThingsBoard UI. To do this, click the "plus" icon in the top right corner of the window. In the new window, enter the key name, select the value type, and enter the value.

{% include images-gallery.html imageCollection="telemetry-add-manually" %}

**Deleting telemetry.**
To delete telemetry, click the "trash can" icon next to the name of the telemetry key you want to delete. Choose what you want to delete specifically: delete all data, delete all data except latest value, delete latest value, delete all data for time period. Confirm the deletion by clicking the "Apply" button.

{% include images-gallery.html imageCollection="telemetry-delete" %}

### Device alarms

This tab shows [alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} that identify issues with your devices.

{% include images-gallery.html imageCollection="alarms" %}

### Device events

Here, events related to the device are displayed, including system logs, errors, warnings, and other important moments in the device's lifecycle.

{% include images-gallery.html imageCollection="events" %}

### Device relations

[Relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations){:target="_blank"} are directed connections to other entities. This tab displays the relationships of this device with other devices, dashboards, assets, and other entities in the ThingsBoard system.

{% include images-gallery.html imageCollection="relations" %}

### Device audit logs

ThingsBoard provides the ability to track user actions in order to keep an audit log.
It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc.

{% include images-gallery.html imageCollection="audit-logs" %}

### Version control

ThingsBoard [version control](/docs/{{docsPrefix}}user-guide/version-control/){:target="_blank"} service provides the ability to export and restore ThingsBoard Entities using Git.

{% include images-gallery.html imageCollection="version-control" %}