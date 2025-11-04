* TOC
{:toc}

## Introduction

ThingsBoard allows you to configure multiple custom Entity Groups.
You can create an entity group for the devices, assets, entity views, customers, users, dashboards and edge instances
Each entity may belong to multiple groups simultaneously.
Special group "All" always contains all entities that belong to specific tenant account.

For each entity group, ThingsBoard user may configure different columns to visualize specific telemetry or attributes values.
ThingsBoard user may also define custom actions to be present for each entity: open dashboard or send RPC call, etc.
Bulk operations to delete entities, add them to the group or remove are also supported.

## Create new entity group

In this tutorial, we will create an entity group for devices.
The steps below are identical for any entities.

{% include images-gallery.html imageCollection="create-entity-group-1" showListImageTitles="true" %}

You can share an entity group during the process of creating a group. Let’s create another group and share it with your customer.

{% include images-gallery.html imageCollection="create-entity-group-2" showListImageTitles="true" %}

## Entity group configuration

### Edit general information

You can edit the general information of the entity group. For example, you can change the group name, firmware and software for your entity group.

Let’s see how to do this:

{% include images-gallery.html imageCollection="edit-entity-group-1" showListImageTitles="true" %}

### Columns configuration

You can add, delete, move columns, change their title and type.
You can also use a special style function and content function for column cell.

For this example, we have device group with two devices that post temperature values.
This group has 4 columns which display devices data: "Created time", "Name", "Device profile", and "Label". 

Let's **add** a new column that will display temperature values for each device.

{% include images-gallery.html imageCollection="column-configuration-add" showListImageTitles="true" %}

Now let's **delete** the "Label" column from this device group.

{% include images-gallery.html imageCollection="column-configuration-delete" showListImageTitles="true" %}

Now let's **set a style function** for the "Temperature" column so that when the temperature value is greater than or equal to 45, the values turn orange, and if the temperature value is less than 45, the values turn blue.

{% include images-gallery.html imageCollection="column-configuration-style function" showListImageTitles="true" %}

Style function:

```javascript
return value >= 45 ? {
    color:'rgb(255, 106, 12)',
    fontWeight: 600
} : {
    color:'rgb(0, 132, 214)',
    fontWeight: 600
}
```
{: .copy-code}

Let's **set a content function** to display the symbol "℃" after the temperature value of the device.

{% include images-gallery.html imageCollection="column-configuration-content function" showListImageTitles="true" %}

Content function:

```javascript
return value ? value + ' ℃' : '-';
```
{: .copy-code}

You can also **move** columns according to your preference.

{% include images-gallery.html imageCollection="column-configuration-move" showListImageTitles="true" %}

### Entity group display setting

On the "Settings" tab, you can enable/disable the following function: search entity, add new entity, delete entity, and manage entity's credentials.
You can also configure pagination and select the action that will open entity details.

To go to the group settings, you need to:

{% include images-gallery.html imageCollection="setting" showListImageTitles="true" %}

### Entity group actions configuration

Actions allow quickly and easily configure the navigating to the selected dashboard, or create custom action.
For example, let's create an action to quickly go to the dashboard with full information about thermometers.

{% include images-gallery.html imageCollection="action-configuration" showListImageTitles="true" %}

### Batch operations

Over each entity of the group, you can perform operations such as: change the owner of the entity, move it to another group, add or remove an entity from the group.

{% include images-gallery.html imageCollection="batch-operations" showListImageTitles="true" %}

## Delete entity group

You can delete an entity group along with all its entities using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-entity-group-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-entity-group-2" showListImageTitles="true" %}

You and your customers can also delete multiple entity groups at once.

{% include images-gallery.html imageCollection="delete-entity-group-3" showListImageTitles="true" %}

## Video tutorial

Watch the detailed video tutorial with examples of how you can configure the entity group to suit your needs.

<br>
<div id="video">
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/RNdaEqrGhn8" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
