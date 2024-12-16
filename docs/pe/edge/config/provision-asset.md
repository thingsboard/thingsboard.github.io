---
layout: docwithnav-pe-edge
title: Edge Assets
description: Edge Assets Overview

createAssetOnEdge:
  0:
    image: /
    title: 'Click the <b>"+"</b> button and select the <b>“Add new asset”</b> option.<ul><li>The <b>"Import assets"</b> option allows <a href="/docs/user-guide/bulk-provisioning/#bulk-provisioning-overview" target="_blank">bulk deployment</a> using the CSV file.</li></ul>'
  1:
    image: /
    title: 'In the <b>“Add asset”</b> pop-up window, enter the asset name in the <b>“Name”</b> field and select the <a href="/docs/user-guide/asset-profiles/" target="_blank">asset profile</a> in the <b>“Asset profile”</b> field. The asset profile is preset to <b>"default"</b>. Then, assign the asset owner in the <b>"Owner"</b> field. The owner is <b>"Tenant"</b> by default. Other fields are optional. Click the <b>“Add”</b> button.'
  2:
    image: /
    title: 'After creating the <b>Asset</b>, it will be <b>automatically provisioned</b> to the Cloud. The <b>"[Edge] Edge_name All"</b> group is assigned by default.'

deviceToAsset:
  0:
    image: /
    title: 'Click on the asset to open the <b>"Asset details"</b> page and select the <b>"Relations"</b> tab. Then, select the <b>"Outbound relation - Direction: From"</b> option.'
  1:
    image: /
    title: 'To add the relation, click the <b>"+"(Add)</b> button.<ul><li>On the <b>"Add relation"</b> pop-up window, fill out the following fields:</li><ul><li><b>Relation type:</b> Select the <b>"Manages"</b> option.</li><li><b>To entity:</b> select <b>"Device"</b> as the type and add the corresponding device(s) from the drop-down menu.</li></ul><li>Click the <b>"Add"</b> button.</li></ul>'
  2:
    image: /
    title: 'The newly created relations with the device(s), are displayed on the <b>"Relations"</b> tab.'

alias:
  0:
    image: /
    title: 'Within the dashboard <b>"Edit mode"</b>, click the <b>"Entity aliases"</b> button to create the alias. In the <b>"Entity aliases"</b> pop-up window, click the <b>"Add alias"</b> button.'
  1:
    image: /
    title: 'On the <b>"Add alias"</b> pop-up window, fill out the following fields:<ul><li><b>Alias name:</b> Enter the alias name.</li><li><b>Filter Type:</b> Select the <b>"Relations query"</b> option.</li><p><b>Root entity</b> block:</p><li><b>Type:</b> Select the <b>"Asset"</b> entity.</li><li><b>Asset:</b> Select the asset from the drop-down menu (e.g., "Asset A").</li><li><b>Direction:</b> Select the <b>"From"</b> option.</li><li><b>Max relation level:</b> Enter the number representing the depth of the entity relations.</li></ul>'
  2:
    image: /
    title: 'Create the filter in the <b>Relation filters</b> block:<ul><li>Click the <b>"Add filter"</b> button to add conditions to filter data.</li><li><b>Relation type:</b> Select the <b>"Manages"</b> option.</li><li><b>Entity types:</b> Select the <b>"Device"</b> entity type.</li></ul><p>Click the <b>"Add"</b> button to add the alias.</p>'
  3:
    image: /
    title: 'To save the alias, click the <b>"Save"</b> button.'
    
dashboard:
  0:
    image: /
    title: 'Within the dashboard <b>"Edit mode"</b>, click the <b>"Add widget"</b> button to add the widget. Select the <b>Charts > Time series chart</b> widget. As a <b>Datasource</b>, select the <b>"Entity alias"</b> tab and select the <b>"Entity alias"</b> from the drop-down menu. Click the <b>"Add"</b> button. Read more about <b>how to add and configure a new widget</b> <a href="/docs/user-guide/widgets/#adding-a-widget-to-the-dashboard" target="_blank">here</a>.'
  1:
    image: /
    title: 'The widget will display real-time data from the associated devices.'
    
provisioning:
  0:
    image: /
    title: 'Click the <b>"Manage edge assets groups"</b> button.'
  1:
    image: /
    title: 'On the <b>Edge_name: Asset groups</b> page, click on the existing group or assign a new one.'
  2:
    image: /
    title: 'On the <b>Edge_group_name: Assets</b> page, click the <b>"+"</b> button and select the assets to assign from the drop-down menu in the pop-up window. Click the <b>"Assign"</b> button.' 
  3:
    image: /
    title: 'To verify that the assigned asset is on the Edge, go to the <b>Entities > Assets</b> section.'
---

{% assign docsPrefix = "pe/edge/" %}
{% assign peDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/config/edge-asset.md %}


