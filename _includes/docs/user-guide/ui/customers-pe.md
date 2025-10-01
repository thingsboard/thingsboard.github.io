* TOC
{:toc}

A **Customer** in ThingsBoard represents a distinct business entity — an individual or an organization — that purchases or uses a tenant&#39;s devices and/or assets. A customer may also represent a department or subdivision within the tenant&#39;s organization.

Customers can scale from small units to large ecosystems with many users, sub‑customers, and large numbers of devices and assets.

**Who can manage customers?**

[Tenant Administrators](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} can create and manage customer groups and individual customers.

**What can customers do?**

Once created, customers can manage their own environment, including:

- Creating and managing **customer users**;
- Adding and editing **devices, assets, dashboards**, and other entities.

## Create new customer

The tenant administrator can add a new customer using the following steps.

{% include images-gallery.html imageCollection="customer-add-new-pe" showListImageTitles="true" %}

{% capture difference %}
**Note:** By default, new customers are placed in the "All" customer group. You can choose or create a different group during the creation flow. Read more information about entity groups [here](/docs/{{docsPrefix}}user-guide/groups/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<br><b>Let&#39;s create another customer and a separate customer group for it.</b>

{% include images-gallery.html imageCollection="customer-add-new-2-pe" showListImageTitles="true" %}

## Create customer user

{% include images-gallery.html imageCollection="add-customer-user" showListImageTitles="true" %}

{% capture difference %}
Customer users created in the "**All**" group start with **limited permissions**. You can configure their permissions later by assigning **roles**. [Learn how in this article](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Edit customer or customer user

The Tenant administrator can edit the title, specify a home dashboard and edit the rest of the fields for the customer.
Let’s see how to do this:

{% include images-gallery.html imageCollection="edit-customer-pe" showListImageTitles="true" %}

Also, you can edit customer user information.

The steps are similar to how we edit the customer:

{% include images-gallery.html imageCollection="edit-customer-user" showListImageTitles="true" %}

## Delete customer or customer user

The tenant administrator can delete a customer along with all its customer users using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-customer-pe" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-customer-2-pe" showListImageTitles="true" %}

You can also delete multiple customers at once.

{% include images-gallery.html imageCollection="delete-customer-3-pe" showListImageTitles="true" %}

Also, you can delete any customer user from the customer. The steps are the same as when deleting a customer.

{% include images-gallery.html imageCollection="delete-customer-user-1" showListImageTitles="true" %}
