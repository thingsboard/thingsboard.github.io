---
layout: docwithnav-edge
title: Edge Assets
description: Edge Assets Overview

createAssetOnEdge:
  0:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/1-add-new-asset.webp
    title: 'Click the <b>"+"</b> button and select the <b>“Add new asset”</b> option.<ul><li>The <b>"Import assets"</b> option allows <a href="/docs/user-guide/bulk-provisioning/#bulk-provisioning-overview" target="_blank">bulk deployment</a> using the CSV file.</li></ul>'
  1:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/2-fill-in-required-fields.webp
    title: 'In the <b>“Add asset”</b> pop-up window: <ul><li>Enter the asset name in the <b>“Name”</b> field.</li><li>Select the <a href="/docs/user-guide/asset-profiles/" target="_blank">asset profile</a> in the <b>“Asset profile”</b> field (default: "default").</li><li>Other fields are optional.</li><li>Click the <b>“Add”</b> button.</li></ul>'
  2:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/3-asset-provisioned-to-cloud.webp
    title: 'Once created, the <b>Asset</b> will be <b>automatically provisioned</b> to the Cloud.'

deviceToAsset:
  0:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/4-relation-tab.webp
    title: 'Click on the asset to open the <b>"Asset details"</b> page and select the <b>"Relations"</b> tab. Then, select the <b>"Outbound relation - Direction: From"</b> option.'
  1:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/5-add-relation.webp
    title: 'To add the relation, click the <b>"+"(Add)</b> button.<ul><li>On the <b>"Add relation"</b> pop-up window, fill out the following fields:</li><ul><li><b>Relation type:</b> Select the <b>"Manages"</b> option.</li><li><b>To entity:</b> select <b>"Device"</b> as the type and add the corresponding device(s) from the drop-down menu.</li></ul><li>Click the <b>"Add"</b> button.</li></ul>'
  2:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/6-confirm-relations.webp
    title: 'The newly created relations will appear in the <b>"Relations"</b> tab.'

alias:
  0:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/7-create-alias.webp
    title: 'Within the dashboard <b>"Edit mode"</b>, click the <b>"Entity aliases"</b> button to create the alias. In the <b>"Entity aliases"</b> pop-up window, click the <b>"Add alias"</b> button.'
  1:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/8.1-add-alias.webp
    title: 'On the <b>"Add alias"</b> pop-up window, fill out the following fields:<ul><li><b>Alias name:</b> Enter the alias name.</li><li><b>Filter Type:</b> Select the <b>"Relations query"</b> option.</li><p><b>Root entity</b> block:</p><li><b>Type:</b> Select the <b>"Asset"</b> entity.</li><li><b>Asset:</b> Select the asset from the drop-down menu (e.g., <i>"Asset A"</i>).</li><li><b>Direction:</b> Select the <b>"From"</b> option.</li><li><b>Max relation level:</b> Enter the number representing the depth of the entity relations.</li></ul>'
  2:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/8-add-alias.webp
    title: 'Scroll down to create the filter in the <b>Relation filters</b> block:<ul><li>Click the <b>"Add filter"</b> button to add conditions to filter data.</li><li><b>Relation type:</b> Select the <b>"Manages"</b> option.</li><li><b>Entity types:</b> Select the <b>"Device"</b> entity type.</li></ul><p>In this way, the data from the devices that are managed by the asset will be displayed on the dashboard.</p><p>Click the <b>"Add"</b> button to add the alias.</p>'
  3:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/9-save-alias.webp
    title: 'To save the alias, click the <b>"Save"</b> button.'
    
dashboard:  
  0:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/10-widget-configuration.webp
    title: 'Select the <b>"Entity alias"</b> tab. Select the <b>newly created alias</b> from the drop-down menu as the <b>Datasource</b>. Click the <b>"Add"</b> button.'
  1:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/11-result.webp
    title: 'The widget will display real-time data from the associated devices.'

provisioning:
  0:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/12-instances-on-cloud.webp
    title: 'Click the <b>"Manage assets"</b> button.'
  1:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/13-edge-assets.webp
    title: 'On the <b>Edge assets</b> page, click the <b>"+"</b> button and select the assets to assign from the drop-down menu in the <b>"Assign Asset(s) To Edge"</b> pop-up window. Click the <b>"Assign"</b> button.'
  2:
    image: https://img.thingsboard.io/edge/config/edge-asset-ce/14-confirm.webp
    title: 'To verify that the assigned asset is on the Edge, go to the <b>Entities > Assets</b> section.'
---

{% assign docsPrefix = "edge/" %}
{% include docs/edge/user-guide/config/edge-asset.md %}

