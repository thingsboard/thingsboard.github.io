* TOC
{:toc}

### Introduction

ThingsBoard supports [Multi-tenancy](https://en.wikipedia.org/wiki/Multitenancy) right out of the box. 

You can think of the ThingsBoard tenant as a separate business entity. This is the individual or organization that owns or manufactures the devices and assets.

{% if docsPrefix == "pe/" %}
Tenant may have multiple tenant administrator users, enormous number of [customers](/docs/{{docsPrefix}}user-guide/ui/customers), and an unlimited number of [users](/docs/{{docsPrefix}}user-guide/ui/users), assets, and devices.
{% endif %}
{% if docsPrefix == "paas/" %}
Tenant may have multiple [customers](/docs/{{docsPrefix}}user-guide/ui/customers) and enormous number of [users](/docs/{{docsPrefix}}user-guide/ui/users), devices and assets.
{% endif %}

{% if docsPrefix == "pe/" %}
### Сreate new tenant

The **System administrator** is able to create tenant entities.

To add a new tenant, you should:

{% include images-gallery.html imageCollection="tenants-pe" showListImageTitles="true" %}

Learn more about tenant profiles [here](/docs/{{docsPrefix}}user-guide/tenant-profiles).

### Сreate tenant administrator

System administrator can create multiple **users with tenant administrator role** for each tenant.

To add a user, you should:

{% include images-gallery.html imageCollection="tenant-new-pe" showListImageTitles="true" %}

The tenant can have multiple users.

{% include images-gallery.html imageCollection="multiple-users-pe" %}

### Edit tenant or user

In the Tenant details you can edit all fields.

Let's see how to do this:

{% include images-gallery.html imageCollection="tenant-edit-pe" showListImageTitles="true" %}

Also, you can edit the **user**.

The steps are similar to how we edit the tenant:

{% include images-gallery.html imageCollection="user-edit-pe" showListImageTitles="true" %}

### Delete tenant or user

You can delete the **Tenant** at once with all its users. To do this, click on the "trash" icon and then also confirm the deletion by clicking on "Yes".

{% include images-gallery.html imageCollection="tenant-delete-pe" %}

Also, you can delete any **user** from the Tenant. To do this, go to the Tenant, find the user you need and click on the "trash" icon. After clicking, a warning window will appear. If you are sure you want to delete the user, click on "Yes".

{% include images-gallery.html imageCollection="user-delete-pe" %}

### Login as tenant administrator

If you need to log in as a tenant, just open the tenant group and click the icon opposite to the user account to log in as this tenant.

{% include images-gallery.html imageCollection="tenant-login-pe" %}
{% endif %}

<br/>
Tenant Administrator is able to do following actions:

- Provision and Manage [Devices](/docs/{{docsPrefix}}user-guide/ui/devices/).
- Provision and Manage [Assets](/docs/{{docsPrefix}}user-guide/ui/assets/).
- Create and Manage [Customers](/docs/{{docsPrefix}}user-guide/ui/customers/).
- Create and Manage [Dashboards](/docs/{{docsPrefix}}user-guide/ui/dashboards/).
- Configure [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).
- Add or modify default widgets using [Widget Library](/docs/{{docsPrefix}}user-guide/ui/widget-library/).

All actions listed above are available using [REST API](/docs/{{docsPrefix}}reference/rest-api/).