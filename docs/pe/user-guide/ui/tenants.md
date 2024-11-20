---
layout: docwithnav-pe
assignees:
- ashvayka
title: Tenants
description: ThingsBoard Tenants management

tenants-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/create-tenant-1-pe.png
        title: 'Login to your ThingsBoard instance WEB UI as a system administrator;'
    1:
        image: /images/user-guide/tenant-profile/PE/create-tenant-2-pe.png
        title: 'Navigate to the Tenants page. Then click on the "plus" icon in the upper right corner of the screen;'
    2:
        image: /images/user-guide/tenant-profile/PE/create-tenant-3-pe.png
        title: 'Specify a name for the Tenant. We keep the default tenant profile;'
    3:
        image: /images/user-guide/tenant-profile/PE/create-tenant-4-pe.png
        title: 'Fill in the fields that you think are important. Then click "Add";'
    4:
        image: /images/user-guide/tenant-profile/PE/create-tenant-5-pe.png
        title: 'New tenant is created.'

tenant-new-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/create-user-in-tenant-1-pe.png
        title: 'Click the "Manage tenant admins" icon on the row of the tenant. The second option: choose the tenant and click on it. Then click on "Manage tenant admins" button;'
    1:
        image: /images/user-guide/tenant-profile/PE/create-user-in-tenant-2-pe.png
        title: 'Click on the "plus" icon in the top right corner. In "Add User" window specify user email, enter information about the new user and select "Show activation link" or "Send activation email" from the drop-down menu;'
    2:
        image: /images/user-guide/tenant-profile/PE/create-user-in-tenant-3-pe.png
        title: 'If you selected the option "Show activation link", copy the link address and send it to the user. Click "OK";'
    3:
        image: /images/user-guide/tenant-profile/PE/create-user-in-tenant-4-pe.png
        title: 'New user with tenant administrator role is created.'

multiple-users-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/create-user-in-tenant-5-pe.png
        title: 'The tenant can have multiple users.'

tenant-edit-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/edit-tenant-1-pe.png
        title: 'Click on a tenant`s name to open their details. Click the "pencil" icon to enter edit mode;'
    1:
        image: /images/user-guide/tenant-profile/PE/edit-tenant-2-pe.png
        title: 'Edit the fields. For example, you can set up a home dashboard for all users of this tenant. After that, save all changes;'
    2:
        image: /images/user-guide/tenant-profile/PE/edit-tenant-3-pe.png
        title: 'You have updated tenant information.'
    
user-edit-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/edit-user-1-pe.png
        title: 'Click on a user`s name to open their details. Click the "pencil" icon to enter edit mode;'
    1:
        image: /images/user-guide/tenant-profile/PE/edit-user-2-pe.png
        title: 'Edit the fields. For example, you can set up a home dashboard for all users of this user. After editing, save all changes;'
    2:
        image: /images/user-guide/tenant-profile/PE/edit-user-3-pe.png
        title: 'You have updated user information.'

user-delete-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/delete-user-2-pe.png
        title: 'Go to the tenant. Find the user you want to delete. Click on the "delete" icon and confirm the deletion by clicking on "Yes".'
tenant-delete-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/delete-tenant-2-pe.png
        title: 'Find the tenant you want to delete. Click on the "delete" icon and confirm the deletion by clicking on "Yes".'

tenant-login-pe:
    0:
        image: /images/user-guide/tenant-profile/PE/login-as-a-tenant-administrator-1-pe.png
        title: 'Open the tenant group. Click the "login" icon opposite to the user account to log in as a tenant administrator.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/tenants-pe.md %}