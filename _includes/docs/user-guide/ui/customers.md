
* TOC
{:toc}

## Introduction

A customer can be a separate business-entity: an individual, or an organization that purchases or uses tenant devices and/or assets. 
A Customer can also be a division within the tenant organization.

A customer user belongs to the customer and has read permissions to view dashboards and other entities assigned by the tenant administrator.
In Thingsboard Community Edition a customer user cannot create their own customers, users, or subcustomers.

{% capture difference %}
**Important:**
<br>
In **Thingsboard Professional Edition** customer user can create other customers, users and subcustomers.
To try this functionality, use the [ThingsBoard Cloud](https://thingsboard.cloud/signup) server.
The alternative option is to install ThingsBoard locally using this [installation guide](/docs/user-guide/install/pe/installation-options/)
{% endcapture %}
{% include templates/info-banner.md content=difference %}

[Tenant administrators](/docs/{{docsPrefix}}user-guide/ui/tenants/) can create customer and can directly manage their [assets](/docs/{{docsPrefix}}user-guide/ui/assets/), [devices](/docs/{{docsPrefix}}user-guide/ui/devices/),
[dashboards](/docs/{{docsPrefix}}user-guide/dashboards/), and [edges](/docs/edge/) from the customer details page by clicking the related tab.

### Create new customer

The tenant administrator can add a new customer using the following steps.

{% include images-gallery.html imageCollection="add-new-customer" showListImageTitles="true" %}

### Create customer user

The tenant administrator can add a customer user using the following steps.

{% include images-gallery.html imageCollection="add-customer-user" showListImageTitles="true" %}

### Edit customer

The tenant administrator can edit the title, specify a home dashboard and edit the rest of the fields for the customer. 
Let’s see how to do this:

{% include images-gallery.html imageCollection="edit-customer" showListImageTitles="true" %}

Also, you can edit customer user information.

The steps are similar to how we edit the customer:

{% include images-gallery.html imageCollection="edit-customer-user" showListImageTitles="true" %}

### Delete customer or customer user

The tenant administrator can delete a customer along with all its customer users using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-customer" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-customer-2" showListImageTitles="true" %}

You can also delete multiple customers at once.

{% include images-gallery.html imageCollection="delete-customer-3" showListImageTitles="true" %}

Also, you can delete any customer user from the customer. The steps are the same as when deleting a customer.

{% include images-gallery.html imageCollection="delete-customer-user-1" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
