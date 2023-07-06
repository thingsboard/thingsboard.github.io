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

In this tutorial, we will create a device group.
The steps below are identical for any entities.

### Create new entity group

In this example, we will create a device group.

You and your customers can add a new entity group using the following steps.

{% include images-gallery.html imageCollection="create-entity-group-1" showListImageTitles="true" %}

You can share an entity group during the process of creating a group. Let’s create another group and share it with your customer.

{% include images-gallery.html imageCollection="create-entity-group-2" showListImageTitles="true" %}

### Edit entity group

You and your customers can edit the entity group. For example, you can change the object group name, assign firmware and software and adjust the fields' columns for the entity group. Let’s see how to do this:

{% include images-gallery.html imageCollection="edit-entity-group-1" showListImageTitles="true" %}

### Delete entity group

You and your customers can delete an entity group along with all its entities using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-entity-group-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-entity-group-2" showListImageTitles="true" %}

You and your customers can also delete multiple entity groups at once.

{% include images-gallery.html imageCollection="delete-entity-group-3" showListImageTitles="true" %}

## Video tutorial

Watch the detailed video tutorial with examples of how you can configure the entity group to suit your needs.

<br/>
<div id="video">
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/RNdaEqrGhn8" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}