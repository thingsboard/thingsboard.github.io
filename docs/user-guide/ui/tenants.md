---
layout: docwithnav
assignees:
- ashvayka
title: Tenants
description: ThingsBoard Tenants management

create-tenants-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/create-tenant-1-ce.png
        title: 'Login to your ThingsBoard instance WEB UI as a system administrator;'
    1:
        image: /images/user-guide/tenant-profile/CE/create-tenant-2-ce.png
        title: 'Navigate to the Tenants page. Then click on the "plus" icon in the upper right corner of the screen;'
    2:
        image: /images/user-guide/tenant-profile/CE/create-tenant-3-ce.png
        title: 'You must fill in the required fields: title and tenant profile;'
    3:
        image: /images/user-guide/tenant-profile/CE/create-tenant-4-ce.png
        title: 'Optionally, include the country, city, address, phone number, and email address. Then click "Add";'
    4:
        image: /images/user-guide/tenant-profile/CE/create-tenant-5-ce.png
        title: 'New tenant is created.'

create-tenant-admin-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/create-user-in-tenant-1-ce.png
        title: 'Click the "Manage tenant admins" icon on the row of the tenant. The second option: choose the tenant and click on it. Then click on "Manage tenant admins" button;'
    1:
        image: /images/user-guide/tenant-profile/CE/create-user-in-tenant-2-ce.png
        title: 'Click on the "plus" icon in the top right corner. In "Add User" window specify user email, enter information about the new user and select "Show activation link" or "Send activation email" from the drop-down menu;'
    2:
        image: /images/user-guide/tenant-profile/CE/create-user-in-tenant-3-ce.png
        title: 'If you selected the option "Show activation link", copy the link address and send it to the user. Click "OK";'
    3:
        image: /images/user-guide/tenant-profile/CE/create-user-in-tenant-4-ce.png
        title: 'New user with tenant administrator role is created.'

tenant-edit-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/edit-tenant-1-ce.png
        title: 'Click on a tenant`s name to open their details. Click the "pencil" icon to enter edit mode;'
    1:
        image: /images/user-guide/tenant-profile/CE/edit-tenant-2-ce.png
        title: 'Edit the fields. For example, you can set up a home dashboard for all users of this tenant. After that, save all changes;'
    2:
        image: /images/user-guide/tenant-profile/CE/edit-tenant-3-ce.png
        title: 'You have updated tenant information.'

user-edit-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/edit-user-1-ce.png
        title: 'Click on a user`s name to open their details. Click the "pencil" icon to enter edit mode;'
    1:
        image: /images/user-guide/tenant-profile/CE/edit-user-2-ce.png
        title: 'Edit the fields. For example, you can set up a home dashboard for all users of this user. After editing, save all changes;'
    2:
        image: /images/user-guide/tenant-profile/CE/edit-user-3-ce.png
        title: 'You have updated user information.'

user-delete-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/delete-user-2-ce.png
        title: 'Go to the tenant. Find the user you want to delete. Click on the "delete" icon and confirm the deletion by clicking on "Yes".'

user-delete-2-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/delete-user-3-ce.png
        title: 'In addition, there is an option to delete the user using the action tab in Tenant details window.'

tenant-delete-1-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/delete-tenant-2-ce.png
        title: 'Find the tenant you want to delete. Click on the "delete" icon and confirm the deletion by clicking on "Yes".'

tenant-delete-2-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/delete-tenant-3-ce.png
        title: 'In addition, there is an option to delete the Tenant using the action tab in Tenant details window.'

tenant-login-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/login-as-a-tenant-administrator-1-ce.png
        title: 'Open the tenant group. Click the "login" icon opposite to the user account to log in as a tenant administrator.'

tenant-details-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/tenant-details-ce.png

user-details-ce:
    0:
        image: /images/user-guide/tenant-profile/CE/user-details-ce.png
---

{% include get-hosts-name.html %}
{% include docs/user-guide/ui/tenants.md %}