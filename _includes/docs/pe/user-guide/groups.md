* TOC
{:toc}

## Introduction

ThingsBoard allows you to configure multiple custom Entity Groups.
Each entity (device/asset/entity view/customer/user/dashboard/edge instance) may belong to multiple groups simultaneously.
Special group "All" always contains all entities that belong to specific tenant account.

For each entity group, ThingsBoard user may configure different columns to visualize specific telemetry or attributes values.
ThingsBoard user may also define custom actions to be present for each entity: open dashboard or send RPC call, etc.
Bulk operations to delete entities, add them to the group or remove are also supported.

### Create new entity group

In this example, we will create a device group. Groups for other entities are created in the same way.

You and your customers can add a new entity group using the following steps.

{% include images-gallery.html imageCollection="create-entity-group-1" showListImageTitles="true" %}

### Edit entity group

You and your customers can edit the group name, assign firmware and software and adjust the fields' columns for the entity group. Let’s see how to do this:

{% include images-gallery.html imageCollection="edit-entity-group-1" showListImageTitles="true" %}

### Delete entity group

The tenant administrator can delete a customer along with all its customer users using one of the following ways:

{% include images-gallery.html imageCollection="delete-entity-group-1" showListImageTitles="true" %}



## Video tutorial

See video tutorial below for step-by-step instruction how to use this feature.

<br/>
<div id="video">
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/RNdaEqrGhn8" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}