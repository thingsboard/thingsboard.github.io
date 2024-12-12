---
layout: docwithnav-pe-edge
title: Edge Assets
description: Edge Assets Overview

createAssetOnEdge:
    0:
        image: /
        title: 'Click the <b>"+"</b> button and then select the <b>“Add new asset”</b> option.<ul><li>The <b>"Import assets"</b> option allows <a href="/docs/user-guide/bulk-provisioning/#bulk-provisioning-overview" target="_blank">bulk deployment</a> using the CSV file.</li></ul>'
    1:
        image: /
        title: 'In the <b>“Add asset”</b> pop-up window enter the asset name in the <b>“Name”</b> field and select the asset profile in the <b>“Asset profile”</b> field. The device profile is preset to <b>"default"</b>. Other fields are optional. Click the <b>“Add”</b> button.'
    2:
        image: /
        title: 'After the <b>Asset</b> is created, it will be <b>automatically provisioned</b> to the Cloud.'

deviceToAsset:
  0:
    image: /
    title: 'Click on the device to open the <b>"Device details"</b> page and select the <b>"Relations"</b> tab.<ul><li>Select the <b>"Outbound relation - Direction: From"</b> option. It indicates that the <b>relation originates from the device (it is the source)</b>.</li><li>The <b>"Inbound relation - Direction: To"</b> option indicates that the <b>relation points to the entity (it is the recipient)</b>.</li></ul>'
  1:
    image: /
    title: 'To add the relation, click the <b>"+"(Add)</b> button. On the <b>"Add relation"</b> pop-up window, fill in the following:<ul><li><b>Relation type:</b> the field describes the nature of the connection between entities.<ul><li>Select the <b>"Contains"</b> option to link the device to the asset. It indicates that the entity is a part of another entity (e.g. <b>Device A is the part of the Asset A</b>).</li><li>The <b>"Manages"</b> option indicates that the entity is responsible for another entity (e.g. <b>Asset A manages the Device A</b>).</li></ul></li><li>In the <b>"To entity: Type"</b> field select the <b>"Asset"</b> option and add the corresponding asset from the drop-down menu.</li><li>Click the <b>"Add"</b> button.</li></ul>'
  2:
    image: /
    title: 'To verify the relation in the <b>Asset</b>, go to the <b>Entities > Assets</b> section. Then, click on the asset to open the <b>"Asset details"</b> page and select the <b>"Relations"</b> tab. Select the <b>"Inbound relation - Direction: To"</b> option.'


---

{% assign docsPrefix = "pe/edge/" %}
{% assign peDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/config/edge-asset.md %}


