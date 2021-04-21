---
layout: docwithnav-pe
assignees:
- ashvayka
title: Tenants
description: ThingsBoard Tenants management 
tenants-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-1-pe.png
        title: 'Click to the **Tenants.** Then click on the **plus** icon.'
    1:
        image: /images/user-guide/tenant-profile/PE/create-tenant-pe.png
        title: 'Specify a name for the Tenant. We keep the default tenant profile. Fill in the fields that you think are important. Then click **Add.**'

tenant-delete-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-delete-1-pe.png
        title: 'Go to the tenant. Find the user you want to delete. Click on the **trash can** icon and confirm the deletion by clicking on **Yes**'
    1:
        image: /images/user-guide/tenant-profile/PE/tenant-delete-2-pe.png
        title: 'Find the tenant you want to delete. Click on the **trash can** icon and confirm the deletion by clicking on **Yes**'

tenant-login-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-login-1-pe.png
        title: 'Go to the tenant. Click the phone icon opposite to the user account to log in as a tenant.'

tenant-new-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-add-user-1-pe.png
        title: 'Choose the tenant and click on it. Then click on **Manage tenant admins**.'
    1:
        image: /images/user-guide/tenant-profile/PE/tenant-add-user-2-pe.png
        title: 'Click on the **plus** icon. Specify **email** and select "Show activation link" or "Send activation email" from the drop-down menu.'
    2:
        image: /images/user-guide/tenant-profile/PE/tenant-add-user-3-pe.png
        title: 'Click the plus sign in the upper right corner of the screen. Enter information about the new user and select _Show activation link_ or _Send activation email_ from the drop-down menu.'
    3:
        image: /images/user-guide/tenant-profile/PE/tenant-add-user-4-pe.png
        title: 'The tenant can have multiple users.'
tenant-edit-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-edit-1-pe.png
        title: "Click on a tenant's name to open their details. Click the pencil icon to edit the account info."
    1:
        image: /images/user-guide/tenant-profile/PE/tenant-edit-2-pe.png
        title: "Edit fields. After that, click on the icon to save changes."
    2:
        image: /images/user-guide/tenant-profile/PE/tenant-edit-3-pe.png
        title: "Click on a user's name to open their details. Click the pencil icon to edit the account info. After editing, save all changes."

---

{% assign docsPrefix = "pe/" %}

* TOC
{:toc}

## Introduction

ThingsBoard supports [Multi-tenancy](https://en.wikipedia.org/wiki/Multitenancy) right out of the box. You can think of the ThingsBoard tenant as a separate business entity. This is the individual or organization that owns or manufactures the device.

##### Сreate a new Tenant

The **System administrator** is able to create tenant entities.

To add a new tenant, you should:
1. Go to the **Tenants** and click on the plus icon;
2. Fill in the fields and then click on **Add**.

{% include images-gallery.html imageCollection="tenants-pe" %}

##### Сreate user in Tenant

System administrator can create multiple [users](/docs/{{docsPrefix}}user-guide/ui/users) with the tenant administrator role for each tenant.

To add a user, you should:
1. Choose the tenant and click on it. Then click on **Manage tenant admins**;
2. Click on the **plus** icon. Specify **email** and select "Show activation link" or "Send activation email" from the drop-down menu;
3. If you selected the option _Show activation link_, copy the link address and send it to the user.

The tenant can have multiple users.

{% include images-gallery.html imageCollection="tenant-new-pe" %}

##### Edit Tenant

In the Tenant details you can edit all fields. Moreover, you can set up a home dashboard for all users of this tenant. To do this, click on the **pencil** icon and make changes. After that, save all changes.

Also, you can edit the **user.** For this, go to the tenant and click on the user and then on the pencil icon. Do not forget to save your changes.

{% include images-gallery.html imageCollection="tenant-edit-pe" %}

##### Delete Tenant

You can delete any **user** from the Tenant. To do this, go to the Tenant, find the user you need and click on the trash can. After clicking, a warning window will appear. If you are sure you want to delete the user, click on **Yes.**

Also, you can delete the **Tenant** at once with all its users. To do this, click on the trash can and then also confirm the deletion by clicking on **Yes.**

{% include images-gallery.html imageCollection="tenant-delete-pe" %}

##### Login as a Tenant administrator

If you need to log in as a tenant, just open the tenant group and click the icon opposite to the user account to log in as this tenant.

{% include images-gallery.html imageCollection="tenant-login-pe" %}
<br>


{% include docs/user-guide/ui/tenants-pe.md %}