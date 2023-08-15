
* TOC
{:toc}

### Introduction

ThingsBoard supports [Multitenancy](https://en.wikipedia.org/wiki/Multitenancy) out-of-the-box.

You can treat Tenant as a separate business-entity: individual or organization who owns or produces devices and assets.

Tenant may have multiple tenant administrator users, enormous number of [customers](/docs/{{docsPrefix}}user-guide/ui/customers), and an unlimited number of [users](/docs/{{docsPrefix}}user-guide/ui/users), assets, and devices.

### Сreate new tenant

The **System administrator** is able to create tenant entities.

To add a new tenant, please follow the instructions below:

{% include images-gallery.html imageCollection="create-tenants-ce" showListImageTitles="true" %}

Learn more about tenant profiles [here](/docs/{{docsPrefix}}user-guide/tenant-profiles).

<br/>
On the Tenant details page, you as the System administrator can view the attributes, the latest telemetry, assign the home dashboard, and copy the tenant ID.

{% include images-gallery.html imageCollection="tenant-details-ce" %}

### Сreate tenant administrator

The **System administrator** is also able to create multiple **users with Tenant administrator role** in each tenant.

To add the User follow the instructions below:

{% include images-gallery.html imageCollection="create-tenant-admin-ce" showListImageTitles="true" %}

In a tenant details window, the System administrator can use the following action tabs:

1) **Disable the User account**.

2) **Display activation link** shows the activation link for the Tenant administrator user.

3) **Resend activation** resends the account activation email to the user’s email box.

4) **Login as Tenant administrator** opens the Thingsboard platform from the Tenant administrator UI.

5) The System Administrator can also **Delete user** from both the user details page and tenant admins list.

{% include images-gallery.html imageCollection="user-details-ce" %}

### Edit tenant or user

In the Tenant details you can edit all fields.

Let's see how to do this:

{% include images-gallery.html imageCollection="tenant-edit-ce" showListImageTitles="true" %}

Also, you can edit the **user**.

The steps are similar to how we edit the tenant:

{% include images-gallery.html imageCollection="user-edit-ce" showListImageTitles="true" %}

### Delete tenant or user

You can delete the **Tenant** at once with all its users. To do this, click on the "trash" icon and then also confirm the deletion by clicking on "Yes".

{% include images-gallery.html imageCollection="tenant-delete-1-ce" %}

In addition, there is an option to delete the user using the action tab in Tenant details window.

{% include images-gallery.html imageCollection="tenant-delete-2-ce" %}

Also, you can delete any **user** from the Tenant. To do this, go to the Tenant, find the user you need and click on the "trash" icon. After clicking, a warning window will appear. If you are sure you want to delete the user, click on "Yes".

{% include images-gallery.html imageCollection="user-delete-ce" %}

In addition, there is an option to delete the Tenant using the action tab in Tenant details window.

{% include images-gallery.html imageCollection="user-delete-2-ce" %}

### Login as tenant administrator

If you need to log in as a tenant, just open the tenant group and click the icon opposite to the user account to log in as this tenant.

{% include images-gallery.html imageCollection="tenant-login-ce" %}

The Tenant Administrator is able to do following actions:

- Provision and Manage [Devices](/docs/{{docsPrefix}}user-guide/ui/devices).
- Provision and Manage [Assets](/docs/{{docsPrefix}}user-guide/ui/assets).
- Create and Manage [Customers](/docs/{{docsPrefix}}user-guide/ui/customers).
- Create and Manage [Dashboards](/docs/{{docsPrefix}}user-guide/ui/dashboards).
- Configure [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).
- Add or modify default widgets using [Widget Library](/docs/{{docsPrefix}}user-guide/ui/widget-library).

All actions listed above are available using [REST API](/docs/{{docsPrefix}}reference/rest-api/).

### Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}