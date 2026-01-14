---
layout: docwithnav-pe-edge
title: Edge Assets
description: Edge Assets Overview

createAssetOnEdge:
  0:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/1-add-new-asset-pe.webp
    title: 'Click the <b>"+"</b> button and select the <b>“Add new asset”</b> option.<ul><li>The <b>"Import assets"</b> option allows <a href="/docs/user-guide/bulk-provisioning/#bulk-provisioning-overview" target="_blank">bulk deployment</a> using the CSV file.</li></ul>'
  1:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/2-fill-in-required-fields-pe.webp
    title: 'In the <b>“Add asset”</b> pop-up window: <ul><li>Enter the asset name in the <b>“Name”</b> field.</li><li>Select the <a href="/docs/user-guide/asset-profiles/" target="_blank">asset profile</a> in the <b>“Asset profile”</b> field (default: "default").</li><li>Assign the asset owner in the <b>"Owner"</b> field (default: "Tenant").</li><li>Other fields are optional.</li><li>Click the <b>“Add”</b> button.</li></ul>'
  2:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/3-asset-provisioned-to-cloud-pe.webp
    title: 'Once created, the <b>Asset</b> will be <b>automatically provisioned</b> to the Cloud. The <b>"[Edge] Edge_name All"</b> group is assigned by default.'

deviceToAsset:
  0:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/4-relation-tab-pe.webp
    title: 'Click on the asset to open the <b>"Asset details"</b> page and select the <b>"Relations"</b> tab. Then, select the <b>"Outbound relation - Direction: From"</b> option.'
  1:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/5-add-relation-pe.webp
    title: 'To add the relation, click the <b>"+"(Add)</b> button.<ul><li>On the <b>"Add relation"</b> pop-up window, fill out the following fields:</li><ul><li><b>Relation type:</b> Select the <b>"Manages"</b> option.</li><li><b>To entity:</b> select <b>"Device"</b> as the type and add the corresponding device(s) from the drop-down menu.</li></ul><li>Click the <b>"Add"</b> button.</li></ul>'
  2:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/6-confirm-relations-pe.webp
    title: 'The newly created relations will appear in the <b>"Relations"</b> tab.'

alias:
  0:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/7-dashboard-edit-mode-pe.webp
    title: 'Within the dashboard <b>"Edit mode"</b>, click the <b>"Entity aliases"</b> button to create the alias. In the <b>"Entity aliases"</b> pop-up window, click the <b>"Add alias"</b> button.'
  1:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/8.1-add-alias-pe.webp
    title: 'On the <b>"Add alias"</b> pop-up window, fill out the following fields:<ul><li><b>Alias name:</b> Enter the alias name.</li><li><b>Filter Type:</b> Select the <b>"Relations query"</b> option.</li><p><b>Root entity</b> block:</p><li><b>Type:</b> Select the <b>"Asset"</b> entity.</li><li><b>Asset:</b> Select the asset from the drop-down menu (e.g., <i>"Asset A"</i>).</li><li><b>Direction:</b> Select the <b>"From"</b> option.</li><li><b>Max relation level:</b> Enter the number representing the depth of the entity relations.</li></ul>'
  2:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/8-add-alias-pe.webp
    title: 'Scroll down to create the filter in the <b>Relation filters</b> block:<ul><li>Click the <b>"Add filter"</b> button to add conditions to filter data.</li><li><b>Relation type:</b> Select the <b>"Manages"</b> option.</li><li><b>Entity types:</b> Select the <b>"Device"</b> entity type.</li></ul><p>In this way, the data from the devices that are managed by the asset will be displayed on the dashboard.</p><p>Click the <b>"Add"</b> button to add the alias.</p>'
  3:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/9-save-alias.webp
    title: 'To save the alias, click the <b>"Save"</b> button.'
    
dashboard:
  0:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/10-widget-configuration.webp
    title: 'Select the <b>"Entity alias"</b> tab. Select the <b>newly created alias</b> from the drop-down menu as the <b>Datasource</b>. Click the <b>"Add"</b> button.'
  1:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/11-result.webp
    title: 'The widget will display real-time data from the associated devices.'
    
provisioning:
  0:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/12-instances-on-cloud.webp
    title: 'Click the <b>"Manage edge asset groups"</b> button.'
  1:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/13-asset-groups-page.webp
    title: 'On the <b>Edge_name: Asset groups</b> page:<ul><li>To assign entity group(s) to the Edge instance, click the <b>"+"</b> button.</li><li>Click on the group to add an asset and assign it to the Edge instance.</li></ul>'
  2:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/14-add-asset.webp
    title: 'On the <b>Edge_group_name: Assets</b> page:<ul><li>Click the <b>"+"</b> button to add an asset. Follow the <a href="/docs/pe/edge/config/provision-asset/#creating-a-new-asset" target="_blank">guide on how to add the asset</a>.</li><li>Click the <b>"Add"</b> button to complete.</li></ul>' 
  3:
    image: https://img.thingsboard.io/pe/edge/config/edge-asset-pe/15-confirm.webp
    title: 'To verify that the assigned asset is on the Edge, go to the <b>Entities > Assets</b> section.'
---

{% assign docsPrefix = "pe/edge/" %}
{% assign peDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/config/edge-asset.md %}


