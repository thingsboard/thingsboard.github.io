---
layout: docwithnav-pe
assignees:
- stitenko
title: Assets
description: Thingsboard IoT Asset management

creating-asset:
    0:
        image: /images/user-guide/ui/assets/creating-asset-1-pe.png
        title: 'Navigate to "<b>Entities</b>" &#8702; "<b>Assets</b>". By default, you will see the "<b>All</b>" asset group. Click the "<b>+</b>" icon in the upper-right corner and select "<b>Add new asset</b>" from drop-down menu.'
    1:
        image: /images/user-guide/ui/assets/creating-asset-2-pe.png
        title: 'In the asset creation form, fill in the required fields: <b>Name</b> – a unique name for the asset; <b>Asset profile</b> – by default, the profile is set to "<b>default</b>", but you can choose a different profile if needed. Click "<b>Add</b>".'
    2:
        image: /images/user-guide/ui/assets/creating-asset-3-pe.png
        title: 'The asset has been successfully created and is now available in the list.'

creating-asset-group:
    0:
        image: /images/user-guide/ui/assets/creating-asset-group-1-pe.png
        title: 'From the <b>Assets</b> screen, go to the <b>"Group" tab</b>. Click the "<b>+</b>" icon in the upper-right corner.'
    1:
        image: /images/user-guide/ui/assets/creating-asset-group-2-pe.png
        title: 'Enter the <b>name</b> of the new asset group. (Optional) Configure <b>shared access</b> to this group for your customers, if needed. Click "<b>Add</b>" to create the group.'
    2:
        image: /images/user-guide/ui/assets/creating-asset-group-3-pe.png
        title: 'To share an asset group, check the "<b>Share entity group</b>" checkbox, select the customers and permissions. Then click "<b>Add</b>".'
    3:
        image: /images/user-guide/ui/assets/creating-asset-group-4-pe.png
        title: 'The asset group has been successfully created and is now available in the list.'

editing-asset:
    0:
        image: /images/user-guide/ui/assets/editing-asset-1-pe.png
        title: 'In the assets list, locate and click on the desired asset, then click the "<b>pencil</b>" (✏️ <b>Edit</b>) icon on the right to open the edit form.'
    1:
        image: /images/user-guide/ui/assets/editing-asset-2-pe.png
        title: 'In the edit window, you can <b>modify</b> the following fields: name, label, asset profile and description. After making the necessary changes, click "<b>Apply changes</b>" to save.'

deleting-asset:
    0:
        image: /images/user-guide/ui/assets/deleting-asset-1-pe.png
        title: 'Find the item in the list and click the "<b>trash bin</b>" icon next to it.'
    1:
        image: /images/user-guide/ui/assets/deleting-asset-2-pe.png
        title: '<b>Confirm the deletion</b> in the popup dialog.'

manage-owner-and-groups:
    0:
        image: /images/user-guide/ui/assets/manage-owner-and-groups-1-pe.png
        title: 'Click asset to open its <b>details</b> view and click the "<b>Manage owner and groups</b>" button.'
    1:
        image: /images/user-guide/ui/assets/manage-owner-and-groups-2-pe.png
        title: 'Select the new owner of the asset from the list. If needed, add the asset to an existing group or create a new one. Confirm the change to update the asset&#39;s ownership.'
    2:
        image: /images/user-guide/ui/assets/manage-owner-and-groups-3-pe.png
        title: 'In the <b>"Customer name" column</b>, you can see the current owner of the asset.'

include-customer-assets:
    0:
        image: /images/user-guide/ui/assets/include-customer-entities-1-pe.png
        title: 'When the switch is <b>enabled</b> (default state) – the table shows all available assets, including those owned by customers.'
    1:
        image: /images/user-guide/ui/assets/include-customer-entities-2-pe.png
        title: 'When the switch is <b>disabled</b> – the table shows only your own assets, excluding customer-owned assets.'

make-asset-group-public:
    0:
        image: /images/user-guide/ui/assets/make-asset-group-public-1-pe.png
        title: 'Locate the desired asset group in the list, and click the "<b>Make public</b>" icon next to it.'
    1:
        image: /images/user-guide/ui/assets/make-asset-group-public-2-pe.png
        title: 'Confirm your action in the popup dialog.'

make-asset-group-private:
    0:
        image: /images/user-guide/ui/assets/make-asset-group-private-1-pe.png
        title: 'To make the group private again, follow the same steps using the "<b>Make private</b>" icon.'
    1:
        image: /images/user-guide/ui/assets/make-asset-group-private-2-pe.png
        title: 'Confirm your action in the popup dialog.'

share-asset-group:
    0:
        image: /images/user-guide/ui/assets/share-asset-group-1-pe.png
        title: 'Locate the desired asset group in the list, and click the "<b>Share</b>" icon next to it.'
    1:
        image: /images/user-guide/ui/assets/share-asset-group-2-pe.png
        title: 'Select the <b>target customer</b> from the dropdown list. (Optional) Specify the <b>user group</b> within that customer to share the asset group with. Confirm the action by clicking "<b>Share</b>".'

asset-details-page:
    0:
        image: /images/user-guide/ui/assets/asset-details-page-1-pe.png
        title: 'Clicking on an asset opens a window where you can access and manage various aspects of that asset.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/assets.md %}