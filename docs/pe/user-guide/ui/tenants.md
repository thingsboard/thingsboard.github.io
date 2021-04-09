---
layout: docwithnav-pe
assignees:
- ashvayka
title: Tenants
description: ThingsBoard Tenants management 
tenants-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-pe.png
        title: 'You can think of the ThingsBoard tenant as a separate business entity. This is the individual or organization that owns or manufactures the device.'

tenant-delete-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-delete-pe.png
        title: 'Check the box to the left of the user. With the user highlighted, click the trash can icon to delete the user account.'

tenant-login-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-login-pe.png
        title: 'Open the tenant group and click.'
    1:
        image: /images/user-guide/tenant-profile/PE/tenant-login-1-pe.png
        title: 'Click the phone icon opposite to the user account to log in as a tenant.'

tenant-new-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-new-pe.png
        title: 'Click the plus sign in the upper right corner of the screen. In the opened dialog box, enter a name of the new tenant group and click Add.'
    1:
        image: /images/user-guide/tenant-profile/PE/tenant-new-1-pe.png
        title: 'Opposite the name of the created group, click the bars button to open it.'
    2:
        image: /images/user-guide/tenant-profile/PE/tenant-new-2-pe.png
        title: 'Click the plus sign in the upper right corner of the screen. Enter information about the new user and select _Show activation link_ or _Send activation email_ from the drop-down menu.'
    3:
        image: /images/user-guide/tenant-profile/PE/tenant-new-3-pe.png
        title: 'If you selected the option _Show activation link_, copy the link address and send it to the user to activate the account.'
tenant-edit-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/tenant-edit-pe.png
        title: "Click on a tenant's name to open their details."
    1:
        image: /images/user-guide/tenant-profile/PE/tenant-edit-1-pe.png
        title: "Click the pencil icon to edit the account info. Configure user's account in its details."
    2:
        image: /images/user-guide/tenant-profile/PE/tenant-edit-2-pe.png
        title: "After editing user's information, click the checkmark in the upper corner of the dialog box to save all changes."

---

{% assign docsPrefix = "pe/" %}

* TOC
{:toc}

## Introduction

ThingsBoard supports [Multi-tenancy](https://en.wikipedia.org/wiki/Multitenancy) right out of the box. You can think of the ThingsBoard tenant as a separate business entity. This is the individual or organization that owns or manufactures the device.
The system administrator can create tenant entities.

{% include images-gallery.html imageCollection="tenants-pe" %}

##### Add a new tenant

System administrator can create multiple [users](/docs/{{docsPrefix}}user-guide/ui/users) with the tenant administrator role for each tenant by clicking the _Manage Tenant Admins_ button in the tenant details.

To add a new tenant, you should:
1. Click the plus sign in the upper right corner of the screen. In the opened dialog box, enter a name of the new tenant group and click Add;
2. Opposite the name of the created group, click the bars button to open it;
3. Click the plus sign in the upper right corner of the screen. Enter information about the new user and select "Show activation link" or "Send activation email" from the drop-down menu;
4. If you selected the option _Show activation link_, copy the link address and send it to the user to activate the account.

{% include images-gallery.html imageCollection="tenant-new-pe" %}

##### Edit tenant

In the user details you can customize its details, attributes, telemetry, alarms, events, relations and audit logs as well as edit already added information about this user,
such as his email address, name, and delete or disable his account.
Moreover, you can adjust the default dashboard and home dashboard for that user.

To edit user details, you should:
1. Click on a tenant's name to open their details;
2. Click the pencil icon to edit the account info. Configure user's account in its details;
3. After editing user's information, click the checkmark in the upper corner of the dialog box to save all changes.

{% include images-gallery.html imageCollection="tenant-edit-pe" %}

##### Delete tenant

You can delete a user account from ThingsBoard. To do this, you should check the box to the left of the user. With the user highlighted, click the trash can icon to delete the user account.

{% include images-gallery.html imageCollection="tenant-delete-pe" %}

##### Login as a tenant

If you need to log in as a tenant, just open the tenant group and click the phone icon opposite to the user account to log in as a tenant.

{% include images-gallery.html imageCollection="tenant-login-pe" %}
<br>


{% include docs/user-guide/ui/tenants-pe.md %}